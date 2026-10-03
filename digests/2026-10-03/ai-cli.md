# AI CLI 工具社区动态日报 2026-10-03

> 生成时间: 2026-10-03 03:18 UTC | 覆盖工具: 9 个

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
**数据日期：2026-10-03**

---

## 1. 生态全景

当前 AI CLI 生态已进入 **"主线分化、共识形成"** 的关键阶段：一方面，Codex 与 DeepSeek-TUI 同步推进 **Rust 重写**（24 小时内合计 8 个 alpha/集成版本），OpenCode 与 Qwen 则在 **Managed Agent / Hosted Runtime** 架构层面深耕；另一方面，**MCP 已成为跨工具的事实扩展标准**，所有主流工具都在修补 OAuth、Streamable HTTP、工具发现等链路问题。社区关注点从"能否用"快速转向 **"长会话稳定性、Windows 平台一致性、Token/计费透明度、订阅与 BYOK 边界"** 等成熟期议题；同时 **子代理（Subagent）可靠性** 仍是 Gemini、Qwen、Claude Code、Codex 四家共同的最大痛点。

---

## 2. 各工具活跃度对比

| 工具 | Release 情况 | 活跃 Issue 数 | 活跃 PR 数 | 迭代节奏 |
|------|-------------|--------------|------------|---------|
| **Claude Code** | 1（v2.1.288） | ~50（Top 10） | 3 | 稳态迭代 |
| **OpenAI Codex** | 7（rust-v0.162.0-alpha.3~9） | ~50（Top 10） | 10 | ⚡ 冲刺发布 |
| **Gemini CLI** | 1（v0.64.0-nightly） | ~50 | 10 | 夜间 nightly |
| **GitHub Copilot CLI** | 3（v1.0.92-1/-2/-3） | ~16 | 1 | ⚡ 预发布密集 |
| **Kimi Code CLI** | — | 0 | 0 | ❄️ 静默期 |
| **OpenCode** | 0 | 10 | 16 | 🛠 重构修复密集 |
| **Pi** | 0 | 10 | 10 | 🧹 扫尾型 |
| **Qwen Code** | 1（v0.24.7-nightly） | ~50 | 10 | 📐 架构主线 |
| **DeepSeek-TUI** | 0（目标 v0.10.1） | 8 | 11 | 🚀 冲刺合入 |

**观察**：
- **高频迭代组**：Codex、Copilot CLI（预发布驱动）；
- **架构演进组**：Qwen（Managed Agent）、OpenCode（v2 重构）、Gemini（nightly）；
- **静默/扫尾组**：Pi、Kimi、Claude Code（趋于稳定）。

---

## 3. 共同关注的功能方向

| 共同方向 | 涉及工具 | 典型诉求 |
|---------|---------|---------|
| **🔌 MCP 生态加固** | Claude Code、Codex、Copilot CLI、Gemini、DeepSeek-TUI | 工具发现（#29398 10 分钟阻塞、DeepSeek #6828 工具不可见）、OAuth/Entra ID（Copilot #5040）、Streamable HTTP 重连（Copilot v1.0.92-1）、配置加载（Claude #15148） |
| **🪟 Windows 平台稳定性** | Codex（40%）、Copilot CLI、DeepSeek-TUI、Claude Code（#87971 Auto Mode）、Pi（#7547） | Codex 沙盒 ACL、守护进程 Job Object、消息队列崩溃；DeepSeek #6827 进程隔离；Claude Code Auto Mode Bash 滥用 |
| **🔐 认证 / 订阅边界** | Claude Code（#8327）、Copilot（OAuth/Entra）、Pi（OAuth #10300/#10377）、DeepSeek-TUI（#6715） | API key 与订阅优先级未文档化、ID token 不持久化、ChatGPT refresh_token 失效、多账号切换无视觉反馈 |
| **🤖 子代理可靠性** | Gemini（#22323/#21409/#21968）、Qwen（#12380 Managed Agent）、Claude Code（#99125 642k token）、Codex（#46343 42% 配额） | MAX_TURNS 终止语义错误、永久挂起、跨平台能力不对称、成本不可预测 |
| **🛡️ 沙箱与权限** | Claude Code（#96949 凭据预批准）、Gemini（#19873/#29505/#29597）、Copilot（沙箱网络旁路）、Codex（注册型 Windows 沙箱） | 零依赖 OS 沙箱、Podman rootless、gVisor IPC 回退、合规测试灰区 |
| **📊 长会话稳定性** | Claude Code（2 GiB transcript）、Pi（800 消息全量重绘）、OpenCode（session 索引）、Qwen（transcript 破损） | SSE 心跳、session 索引持久化、cell-level diff 渲染、transcript 完整性 |
| **🧮 Token / 计费透明度** | Codex（#48343）、OpenCode（#52371 额度异常）、Qwen（#12028/#13208）、Claude Code（Max 20x 识别） | 上下文窗口预算、非对话前缀计费、订阅额度实时仪表盘 |
| **⌨️ TUI 渲染性能** | Pi（#10383 cell-level diff）、Gemini（#29502 Enter/Spacebar）、OpenCode（web UI 缓存）、DeepSeek-TUI（rio-vt 升级） | 长 transcript 卡顿、键盘可达性、嵌入式资源 IO 优化 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | IDE 深度集成 + 权限/认证边界 | 注重 IDE 工作流的企业/专业开发者 | 集中化产品、Mods/Plugins 生态、Auto Mode 工具路由 |
| **OpenAI Codex** | 大规模任务执行 + 多 Provider 矩阵 | 高级订阅用户、企业 | **Rust 重写冲刺**，Dots 子代理、Bedrock/Vertex 多云 |
| **Gemini CLI** | 子代理体系 + 多沙箱适配 | 容器化/多云环境企业 | nightly + 强可观测性、A2A Server、自定义扩展 |
| **Copilot CLI** | GitHub 生态深度集成 + BYOK | GitHub 重度用户、多模型切换需求 | MCP 为核心扩展总线、Prompt-mode + Skill 系统 |
| **OpenCode** | 多 Provider 兼容 + 嵌入式助手平台 | 自托管/本地化部署、多模型用户 | v2 路径重构、Bedrock/Vertex/自定义 OpenAI 兼容 |
| **Pi** | TUI 极致性能 + 多模态 | 终端原生党、性能敏感开发者 | 原生 node、可选 C++/Bazel 主干、扩展 API 一等公民 |
| **Qwen Code** | Managed Agent 架构演进 + Java SDK | 长上下文企业场景 | Hosted Runtime 双路径、Stage 分阶段治理（#12380 总纲） |
| **DeepSeek-TUI** | Rust 重写 + 多账号登录 | DeepSeek/ChatGPT/xAI 多账号用户 | Rust Engine + TS 工具/命令/hooks 三层架构 |

**关键差异**：
- **架构派 vs 集成派**：Qwen/Gemini 走"自建 Managed/Hosted Runtime"，而 Copilot/Claude Code 走"MCP + Skill"路线；
- **重写派 vs 稳态派**：Codex、DeepSeek-TUI 大规模 Rust 化，Claude Code、Copilot 维持稳态；
- **平台深度派 vs 跨平台派**：Pi 死磕 TUI/终端原生，Copilot/Codex 优先 IDE 与 Web/桌面协同。

---

## 5. 社区热度与成熟度

### 🟢 高活跃 + 高成熟（社区 50+ Issue / 日）

- **Claude Code**: 用户基数大，痛点已收敛至 IDE 集成、权限边界、长会话稳定性三大主线；
- **OpenAI Codex**: 7 个 alpha/日 的发布密度，配合企业用户集中的 Windows/VS Code 反馈，已进入"冲刺 + 高噪声"阶段；
- **Gemini CLI**: nightly 模式天然带动高互动，`area/agent` 占比约 60%；
- **Qwen Code**: 维护者高度集中（tanzhenxin、yiliang114、wenshao），评审吞吐成为新瓶颈。

### 🟡 中活跃 + 中成熟（社区 8-16 Issue / 日）

- **OpenCode**: v1 → v2 重构引发短期"信任修复"窗口，多个 PR 显式标注"closes issue from v2 refactor lost"；
- **Copilot CLI**: 1.0.92 系列三个预发布版本，但当日仅 1 条新 PR，社区反馈集中在 BYOK / MCP OAuth / 终端 UX；
- **DeepSeek-TUI**: PR #6815（v0.10.1）合入冲刺期，11 条 PR 中 5 条为依赖升级。

### 🔵 低活跃 / 静默

- **Pi**: 偏向"质量优于数量"，10 条 PR 全为性能/安全/兼容性；
- **Kimi Code CLI**: 24 小时零活动，需关注是否进入维护期。

---

## 6. 值得关注的趋势信号

### 📌 趋势一：Rust 重写进入"兑现期"
- Codex 24 小时内 7 个 alpha 版本、DeepSeek-TUI 0.10.1 合入冲刺；
- **对开发者的启示**：基于 Node.js/Python 的 AI CLI 性能瓶颈被工程化验证，未来 6-12 个月 Rust 将成为头部工具的"事实标准栈"。

### 📌 趋势二：MCP 成为跨工具"事实总线"
- 所有主流工具均暴露 MCP 接入，但**工具发现、OAuth、Streamable HTTP** 反复成为故障源；
- **关注风险**：#6828（MCP 工具不可见）、Copilot #5040（Entra ID 回调）、Claude #15148（`lspServers` 未解析）三类问题具高度相似性，**MCP 协议实现的一致性** 即将成为生态级议题。

### 📌 趋势三：Managed Agent / Hosted Runtime 成为架构共识
- Qwen（#12380 双路径）、Gemini（`area/agent` 60%）、OpenAI Codex（Dots）、OpenCode（v2 worker）殊途同归；
- **核心信号**：传统"一次性 CLI 任务"模型正在被 **"长生命周期、跨工具、跨会话"** 的代理编排取代。

### 📌 趋势四：Windows 平台成为新主战场
- Codex 痛点 40% 来自 Windows、Copilot 沙箱修复侧重 Windows、DeepSeek-TUI #6827 进程隔离、Windows 11 MCP 启动失败；
- **对开发者的启示**：在 macOS 上验证的 AI CLI 工作流，**必须在 Windows 上重新验证**；企业部署需将 Windows 视为一级目标平台。

### 📌 趋势五：Token 经济性进入精细化治理
- Qwen #12028（非对话上下文）、Codex #46343（42% 配额）、OpenCode #52371（额度耗尽）、Claude Code Max 20x 识别；
- **预期演进**：实时 token 预算仪表盘、任务粒度成本上限、缓存 vs 新鲜 token 区分计量将在 6 个月内成为标配。

### 📌 趋势六：TUI 性能成为差异化护城河
- Pi（#10383 cell-level diff）、Gemini（#29502）、OpenCode（#51875 缓存）相继投入；
- **对工具选型**："800 消息不卡顿"已是事实上的体验基线，长会话场景下 TUI 渲染策略是核心竞争点。

### 📌 趋势七：订阅与 BYOK 边界持续模糊化
- Claude Code API key 与订阅优先级冲突、Copilot BYOK 模型协议协商（Deepseek/GLM/Opus 5.5）、OpenCode 计费透明度；
- **商业信号**：工具厂商正从"单一模型 SaaS"转向 **"模型路由 + 凭据网关"**，订阅治理复杂度将持续上升。

### 📌 趋势八：多模态边界正在重写
- Pi #10162（图片过多中断任务）、#10346（WebP EXIF 死循环）、#10361（多行高亮丢失）；
- **关键判断**：图片从"附件"升级为"任务输入"后，并发、队列、计费、回放契约都需要重新定义——这是 2026 年底最具不确定性的领域。

---

## 总结建议

| 决策者类型 | 建议关注方向 |
|-----------|------------|
| **企业架构师** | Managed Agent 架构（Qwen #12380）、MCP 一致性、Windows 一级化 |
| **独立开发者** | 工具的 TUI 性能、长会话稳定性、BYOK 灵活性（Pi / OpenCode / Codex） |
| **多模型用户** | 关注订阅 + BYOK 矩阵成熟度，Copilot CLI / OpenCode 短期内迭代最快 |
| **Rust 贡献者** | Codex、DeepSeek-TUI 处于核心重写期，是低门槛高价值切入点 |

> **核心判断**：2026 Q4 的 AI CLI 竞争焦点已从"模型能力"全面迁移到 **"代理编排 + 跨平台一致性 + 经济性透明度"**。下一个 12 个月，最有可能跑出的是 **"Rust 内核 + MCP 扩展 + Managed Runtime 治理"** 三者兼备的工具。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据来源**: anthropics/skills | **截止日期**: 2026-10-03

> ⚠️ **数据说明**: PR 的评论数字段在数据源中均为 `undefined`，本报告以"近期活跃度（最后更新时间）+ 议题广度 + 影响范围"作为关注度代理指标。Issues 评论数则完整可用。

---

## 1. 热门 Skills 排行（Top 8 PR）

| 排名 | Skill / PR | 类型 | 关注焦点 | 状态 |
|---|---|---|---|---|
| 🥇 | **#1730** claude-api 死链修复 | Bug Fix | academy-guide 中 3 个硬 404 文档链接替换为经 `curl -sI -L` 验证 200 的官方 URL，影响所有 Claude API 使用者入门路径 | OPEN（最后更新 2026-10-02） |
| 🥈 | **#1742** mcp-builder v2 兼容 | Bug Fix | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 改名与 `create_mcp_http_client` 自定义 headers API，是 MCP 集成的阻塞性问题 | OPEN |
| 🥉 | **#1681** skill-creator 独立运行修复 | Bug Fix | `package_skill.py` 独立执行时报 `ModuleNotFoundError`，顺带清理过时 docstring——影响所有 Skill 作者 | OPEN |
| 4 | **#1607** claude-api 退役模型标注 | Bug Fix | `claude-opus-4-1` 误标为 "Legacy"、三款模型误标为 "Deprecated"，关乎用户调用合规性 | OPEN |
| 5 | **#1298** skill-creator 触发评估隔离 | Bug Fix | 修复 Windows 上 `select()` 子进程管道失败、worker 间探针互踩、运行时误判为负样本的回归，影响 Skill 自动化质量门 | OPEN |
| 6 | **#1792** docx LibreOffice 超时错误化 | Bug Fix | `accept_changes.py` 之前会静默"成功"地吞掉 soffice 超时；现改为错误返回并校验 `w:ins/w:del` 是否真正消除 | OPEN |
| 7 | **#525** Pyxel 复古游戏开发 | New Skill | Python 复古游戏创建/调试/逐帧验证，含 headless 输入驱动与任务级状态检查；游戏+AI 跨界场景 | OPEN（已存活 7 个月） |
| 8 | **#1703** md2video-audio | New Skill | Markdown → MP4 零成本流水线（通过 Marp 转幻灯片 + TTS 人声），零依赖门槛的"内容视频化"工具 | OPEN |

**社区讨论热点**: 8 个最热 PR 中 **5 个是 Bug Fix**（占 62.5%），集中在三个高频痛点——(a) 跨平台兼容（Windows select）、(b) 上游依赖版本变更（mcp v2、退役模型）、(c) 静默失败（超时变成功、负样本通过）。**基础设施稳健性 > 新功能炫酷度**是当前社区情绪主线。

---

## 2. 社区需求趋势（Issues 提炼）

按 Issue 评论数排序，归纳出 **5 大诉求方向**：

| 诉求方向 | 代表 Issue | 评论 | 👍 | 解读 |
|---|---|---|---|---|
| 🔒 **信任边界 & 安全** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒充 `anthropic/` 命名空间 | 43 | 2 | 社区强烈担忧 Skill 假冒官方品牌导致权限越权，是 **当前第一痛点** |
| 🏢 **企业级分发** | [#228](https://github.com/anthropics/skills/issues/228) Claude.ai 组织内 Skill 共享 | 16 | 8 | 仍需下载 .skill 文件→Slack→手动上传的原始流程，催生"Skill 库/共享链接"需求 |
| 🧪 **评估可靠性** | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 触发率 0% | 12 | 7 | `claude -p` 永远不触发 Skill/命令，evaluator 形同虚设 |
| 🪟 **上下文经济性** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 单次注入 ~156k tokens | 4 | 0 | claude-api Skill 一次工具调用打满上下文，与 #1329 compact-memory 形成共振 |
| 🧠 **Agent 治理 & 质量门** | [#412](https://github.com/anthropics/skills/issues/412) agent-governance；[#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate | 6+4 | — | 安全模式 + 三段式质量门（Pre-task 校准→对抗评审→交付验证） |
| 🧹 **生态清理** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 重复内容 | 6 | 9 | 插件去重是装机体验的硬阻塞 |

**洞察**: 社区需求重心正从"加 Skill"转向"**治理 Skill**"——安全命名空间、企业分发、评估可观测、上下文预算控制成为新关键词。

---

## 3. 高潜力待合并 Skills

按"最后更新 ≤ 14 天 + 议题影响范围"筛选，**最有可能在短期内合并**：

| PR | Skill | 合并概率信号 | 链接 |
|---|---|---|---|
| #1730 | claude-api 死链替换（3 个） | 10-02 最后更新，curl 验证 200，零争议 | [→](https://github.com/anthropics/skills/pull/1730) |
| #1245 | notion-spec-to-implementation + quantitative-resume-auditor | 09-30 最后更新，与 PR #82 同期活跃，双 Skill 套装合并潜力高 | [→](https://github.com/anthropics/skills/pull/1245) |
| #1742 | mcp-builder v2 兼容 | 09-29 更新，修复 #1668 的阻塞性 API 变更 | [→](https://github.com/anthropics/skills/pull/1742) |
| #1607 | claude-api 退役模型标注 | 09-28 更新，修复 #1603，合规优先级高 | [→](https://github.com/anthropics/skills/pull/1607) |
| #1681 | skill-creator 独立运行 | 09-27 更新，回归 Skill 作者工作流 | [→](https://github.com/anthropics/skills/pull/1681) |
| #1792 | docx LibreOffice 错误化 | 09-25 更新，把"静默成功"改成"显式错误"，符合工程直觉 | [→](https://github.com/anthropics/skills/pull/1792) |
| #1771 | proofcore-contract-auditor | Web3 + TON 区块链审计证明，垂直领域首创 | [→](https://github.com/anthropics/skills/pull/1771) |
| #1776 | blast-radius | 破坏性写入前的检查清单，对应 Issue #412 agent-governance 的"操作前"切片 | [→](https://github.com/anthropics/skills/pull/1776) |

**长尾候选**（跨月争议，需深审）: #210 frontend-design（2026-01 创建、09 月仍在更），#525 pyxel（已存活 7 个月）。

---

## 4. Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"Skill 生态的可信分发与可观测治理"——既要官方命名空间的安全边界（#492）、企业级共享（#228），也要评估触发的真实可测（#556、#1487），让 Skills 从"能用"迈向"敢用、能管、能审计"。**

---

### 附：关键链接速查
- 热门 Issues Top 3：[#492](https://github.com/anthropics/skills/issues/492) · [#228](https://github.com/anthropics/skills/issues/228) · [#556](https://github.com/anthropics/skills/issues/556)
- 核心基础设施 PR：[#1730](https://github.com/anthropics/skills/pull/1730) · [#1742](https://github.com/anthropics/skills/pull/1742) · [#1681](https://github.com/anthropics/skills/pull/1681)
- 治理类 Proposal：[#412](https://github.com/anthropics/skills/issues/412) · [#1385](https://github.com/anthropics/skills/issues/1385) · [PR #1776](https://github.com/anthropics/skills/pull/1776)

---

# Claude Code 社区动态日报
**报告日期：** 2026-10-03

---

## 📌 今日速览

今日 Claude Code 发布 **v2.1.288**，新增 `$.ui.selection()` 选区 API 与云端 `gh api` 内建支持；同时社区出现多起高优问题：**VS Code 扩展 Diff 评审 UI** 需求点赞突破 200、**Auto Mode 下滥用 Bash 工具**（Windows）引发 90+ 用户共鸣、**Chrome MCP 全域名导航被拒**回归问题持续发酵。整体看，**IDE 集成质量**、**权限/认证边界**与**Agent 隔离稳定性**仍是社区最关注的三大焦点。

---

## 🚀 版本发布

### v2.1.288（2026-10-03）

**What's changed：**

- ✅ **Mods 新增 `$.ui.selection()`**：返回全屏模式下的最近选中文本；当选区位于同一 transcript 行内时，同时返回该行信息
- ✅ **云会话内置 `gh api`**：为不含 gh CLI 的镜像环境提供 GitHub API 调用能力
- 🐛 **修复内建发送控件的控制字符问题**

📎 [Release v2.1.288](https://github.com/anthropics/claude-code/issues)（需补充 release 链接）

---

## 🔥 社区热点 Issues（Top 10）

### 1. [Bug/Doc] `ANTHROPIC_API_KEY` 覆盖 Max/Pro 订阅后报 "Organization has been disabled" 
**#8327** · 评论 121 · 👍 19 · 🏷️ oncall / auth
有效 Pro/Max 订阅用户在 CLI 中收到组织被禁用错误，疑似认证链路冲突。此为当日最高互动 issue，已升级 oncall。
📎 https://github.com/anthropics/claude-code/issues/8327

### 2. [FEATURE] VS Code 扩展：类 GitHub Copilot Edits Review 的 UI 
**#33932** · 评论 39 · 👍 **201** · 🏷️ enhancement / vscode
社区强烈要求在 Claude Code VS Code 扩展中实现 Diff 评审 UI，点赞数远超同类请求，凸显该功能空缺已严重影响 IDE 端使用体验。
📎 https://github.com/anthropics/claude-code/issues/33932

### 3. [BUG] Auto Mode 下滥用 Bash 工具执行读写编辑（Windows）
**#87971** · 评论 16 · 👍 **90** · 🏷️ bug / windows
启用 Auto Mode 后，模型过度倾向使用 Bash 而非 Read/Write/Edit 工具，破坏工具调用规范并带来安全隐患。Windows 用户尤其集中。
📎 https://github.com/anthropics/claude-code/issues/87971

### 4. [BUG] Marketplace 插件的 `lspServers` 配置未生效
**#15148** · 评论 23 · 👍 73 · 🏷️ bug / tools
typescript-lsp、pyright-lsp、gopls-lsp 等 LSP 插件安装后无法正常工作，根因在 `marketplace.json` 中的 `lspServers` 未被解析。
📎 https://github.com/anthropics/claude-code/issues/15148

### 5. [BUG] Claude in Chrome MCP：所有域名报 "Navigation not allowed"（v1.0.66 回归）
**#43255** · 评论 22 · 👍 13 · 🏷️ regression / chrome
升级后 Chrome MCP 工具彻底失能，所有网站访问被拒，影响浏览器自动化场景。
📎 https://github.com/anthropics/claude-code/issues/43255

### 6. [FEATURE] Claude Desktop 的 Code tab 不支持 Mermaid 渲染
**#52517** · 评论 16 · 👍 32 · 🏷️ enhancement / desktop
Desktop 应用的 Code tab 无法渲染 Mermaid 代码块（与终端 TUI 的 ASCII 方案 #14375 互补），影响 GUI 端可视化体验。
📎 https://github.com/anthropics/claude-code/issues/52525

### 7. [BUG] 网络切换后请求在死连接上挂起 184 秒（Linux）
**#98184** · 评论 6 · 👍 1 · 🏷️ bug / networking
网络环境变化（如切 Wi-Fi/VPN）后，CLI 不主动检测连接失效，需等待 184 秒 TCP 超时，重试逻辑待优化。
📎 https://github.com/anthropics/claude-code/issues/98184

### 8. [BUG] Desktop App 切换账户后 Session 历史丢失
**#48511** · 👉 **已关闭** · 评论 8 · 👍 12 · 🏷️ bug / desktop
切换账号后 Cowork 与本地 Code 模式的会话历史全部消失，新账号无法访问旧会话。已关闭，建议关注后续是否回归。
📎 https://github.com/anthropics/claude-code/issues/48511

### 9. [BUG] Remote Control CLI 报告 "Mobile push requested" 但 Android 端未收到
**#87003** · 评论 7 · 👍 6 · 🏷️ bug / android
v2.1.233 仍复现：在新设备/新系统重新测试，CLI 显示推送已发出但手机无通知。
📎 https://github.com/anthropics/claude-code/issues/87003

### 10. [BUG] `claude remote-control` 服务模式 session 缺失 Artifact 工具
**#88731** · 评论 5 · 👍 3 · 🏷️ bug / agent-sdk
同一机器同一账号下，`--remote-control` 客户端正常，但服务端模式启动的 session 工具列表中无 Artifact；表明工具注册链路在 server 模式有缺失。
📎 https://github.com/anthropics/claude-code/issues/88731

---

## 🛠️ 重要 PR 进展（今日仅 3 条更新，全部列出）

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| **#99118** | [diff] 打开面板时其他插件 toast 也照常显示 | 🟢 OPEN | 此前 `/diff` 面板用 `holdToasts: true` 抑制了所有 toast，现放开以避免阻塞其他插件通知 |
| **#97293** | [mods] 声明携带 `process.run` 截断标志与 `fs.list` 的 `mtimeMs` | 🟢 OPEN | 为已发布的 npm CLI 能力（`isStdoutTruncated`/`isStderrTruncated`、`mtimeMs`）完善类型声明与测试 |
| **#77977** | [docs] 记录 `skipLfs` marketplace 源 | ⚪ CLOSED | 文档补充 `github` / `git` 源的 `skipLfs` 选项及示例 |

📎 https://github.com/anthropics/claude-code/pull/99118 | https://github.com/anthropics/claude-code/pull/97293 | https://github.com/anthropics/claude-code/pull/77977

> 💡 **PR 体量较少**：今日 PR 活动偏轻，仅 mods/diff 体验优化与文档增补，未见重大功能合入。

---

## 📈 功能需求趋势

综合今日 50 条更新 Issues，社区关注热点集中于以下方向：

| 方向 | 代表 Issue | 热度信号 |
|------|------------|----------|
| **VS Code / IDE 深度集成** | #33932（👍201）、#87971、#99088、#99132 | 🔥 最高；Diff 评审、Auto Mode 行为、扩展崩溃（2 GiB transcript） |
| **LSP / Plugin / Mods 生态完善** | #15148（👍73）、#97293、#99130 | 🔥 高；插件配置加载、版本回退 |
| **权限与认证边界** | #8327（121 评论）、#98134、#96949、#98262、#99129 | 🔥 高；订阅覆盖、Max 20x 识别、安全测试沙箱、bypass permissions |
| **Agent 隔离与并发稳定性** | #92533、#99125（642k token 异常） | ⚠️ 中高；worktree 隔离、子代理协作 |
| **Desktop / Mobile 体验** | #52517、#48511、#87003、#99105、#98979、#98971 | ⚠️ 中高；Mermaid、Session 历史、推送、文本选择 |
| **跨平台 / 网络韧性** | #98184、#88756 | 🟡 中；Linux 网络切换、Ghostty 剪贴板 |
| **Computer Use 扩展** | #82300 | 🟡 中；Windows CLI 支持 |

---

## 👨‍💻 开发者关注点（痛点 & 高频需求）

1. **🔐 认证链路混乱** — ANTHROPIC_API_KEY 与订阅账户的优先级未文档化、Max 20x 被识别为 Pro，导致用户无法稳定登录；社区亟需官方优先级说明与运行时切换文档。

2. **🪟 IDE 工具选择合规性** — Auto Mode 下模型绕过专用工具直接调用 Bash，反映工具路由策略在某些模式失效；开发者期待更严格的工具偏好约束。

3. **🧩 插件/LSP 元数据未透传** — `marketplace.json` 中的 `lspServers` 不被识别、Mods 在 v2.1.288 默认行为回退，提示插件装载链路的可靠性不足；建议 CLI 在启动时输出"已加载能力清单"便于排错。

4. **🌐 大文件 / 长会话稳定性** — 2 GiB transcript 导致 VS Code 扩展崩溃循环、并发子代理消耗 64 万 token 后中途断连，反映长会话与高吞吐场景的鲁棒性短板。

5. **📱 移动端能力缺失** — Dispatch 不支持选择/复制回复文本、Android 推送链路不工作，Claude 移动端仍停留在"查看"层面，无法形成"移动端→桌面端"工作流闭环。

6. **🛡️ 沙箱与合规测试的灰区** — Prohibited-actions 规则拦截合法 dev/QA 账号创建，开发者呼吁**经所有者预批准的受限凭据机制**（#96949），让 Agent 能在不接触真实凭据的前提下完成常规开发测试。

8. **🌍 网络切换韧性** — Linux 下网络变更后 184 秒的死连接等待严重影响体验，建议引入更积极的 keepalive 或断线探测。

---

> **报告说明**：本日报基于 GitHub Issues / PRs 公开数据采样生成，仅供参考。链接均指向 `anthropics/claude-code` 仓库。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-10-03** | 数据来源：github.com/openai/codex

---

## 📌 今日速览

今日 Codex Rust 版本线密集迭代 7 个 alpha 预发布版本（0.162.0-alpha.3 至 alpha.9），显示核心 Rust 重写进入冲刺阶段。社区焦点集中在 **Windows 平台的稳定性**与 **VS Code 扩展消息队列故障**两大问题上，多个企业用户报告提交消息丢失或卡死。此外，针对 Bedrock 模型与 Computer Use 的能力增强正在持续推进。

---

## 🚀 版本发布

过去 24 小时内发布了 7 个 Rust 预发布版本，节奏密集：

| 版本 | 链接 |
|---|---|
| rust-v0.162.0-alpha.3 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.3) |
| rust-v0.162.0-alpha.4 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.4) |
| rust-v0.162.0-alpha.5 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.5) |
| rust-v0.162.0-alpha.6 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.6) |
| rust-v0.162.0-alpha.7 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.7) |
| rust-v0.162.0-alpha.8 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha. 8) |
| rust-v0.162.0-alpha.9 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.9) |

> 说明：当前公开的 Release Notes 较为简略，建议关注 [CHANGELOG](https://github.com/openai/codex/blob/main/CHANGELOG.md) 获取详细变更。

---

## 🔥 社区热点 Issues

### 1. #293 43 Chrome 插件与浏览器拒绝访问某些网站 ⭐16 · 💬40
[Issue #29343](https://github.com/openai/codex/issues/29343)
**【长期未解决的高优先级问题】** 自 6 月起就持续出现的 Computer Use 静默拒绝加载部分网站问题，影响 Pro €225/月 高阶订阅用户。该 Issue 评论数高达 40，反映社区对 **Computer Use 安全策略过度保守** 的不满。

### 2. #49729 Dot 无法读取或回复本地 Codex 会话 💬28
[Issue #49729](https://github.com/openai/codex/issues/49729)
Dot 启动的本地 Codex 任务**无法通过返回的 ID 回访已保存项目中的会话线程**，破坏了 Dot 工作流的闭环。这是 Codex "Dots" 新功能的集成性缺陷。

### 3. #20851 请求：Codex CLI 提供一等公民的 Computer Use 支持 ⭐41 · 💬19
[Issue #20851](https://github.com/openai/codex/issues/20851)
呼声最高的**功能增强请求之一**（👍41 票），要求把 Computer Use 从桌面插件升级为 CLI 原生能力。该 Issue 已存在 5 个月仍未落地，开发者期待通过 CLI 自动化 GUI 操作。

### 4. #24179 iOS 远程控制断线而 WebSocket 仍连接 💬19
[Issue #24179](https://github.com/openai/codex/issues/24179)
Apple Silicon Mac 上的 Codex Remote Control 频繁离线，但与 chatgpt.com 的 WebSocket 连接仍活跃。**平台兼容性与网络层心跳检测**疑似存在缺陷。

### 5. #49834 VS Code 队列消息发送锁释放时 JSON 解析错误 💬18
[Issue #49834](https://github.com/openai/codex/issues/49834)
VS Code 扩展 26.928.31416 版本中"未定义的内部 fetch 响应"导致 `JSON.parse` 报错。**与 Issue #50403 高度相关**，表明 26.928 系列扩展存在系统性问题。

### 6. #49991 VS Code 26.928.31416：消息消失或卡死 ⭐11 · 💬11
[Issue #49991](https://github.com/openai/codex/issues/49991)
Enterprise 用户集中报告：升级到 26.928.31416 后，**普通消息消失、无限转圈、卡在 steer-pending 状态**。是近期影响面最广的 VS Code 扩展回归。

### 7. #49862 Windows：Dot 缺少读写本地 Codex 会话的工具 💬11
[Issue #49862](https://github.com/openai/codex/issues/49862)
Windows 上 Dot 缺失原生工具来访问现有本地会话，需要依赖复杂变通方案。**跨平台一致性**问题。

### 8. #50403 VS Code：队列消息静默失败（SyntaxError）💬7
[Issue #50403](https://github.com/openai/codex/issues/50403)
Win11 上发送消息时弹出 `Failed to release queued message send lock`，伴随 `"undefined" is not valid JSON`。与 #49834 同源问题。

### 9. #48835 Windows 11 CLI 0.157.1 内置 codex_apps MCP 启动失败 💬7
[Issue #48835](https://github.com/openai/codex/issues/48835)
`codex_apps` MCP 集成在 initialize 请求时报 `error decoding response body`。**MCP 集成在 Windows 上的可靠性**堪忧。

### 10. #46343 子代理消耗 42% 周配额仅完成小改动 💬4
[Issue #46343](https://github.com/openai/codex/issues/46343)
一次小范围实现任务消耗了约 42% 的周上下文配额。**Agent 成本效率问题**引发关注，开发者呼吁更精细的 token 控制。

---

## 🛠️ 重要 PR 进展

> 注：以下 PR 均已 **CLOSED**，由 [copyberry[bot]](https://github.com/copyberry) 提交，说明 Codex 采用自动化分支管理与合并流程。

### 1. PR #50472 为 Bedrock Astra 模型启用 Ultrafast 服务等级
[PR #50472](https://github.com/openai/codex/pull/50472)
修复 Bedrock 目录清空服务等级元数据的问题，**重新支持 ultrafast 等级**与自定义目录中的等级，提升 Bedrock 用户体验。

### 2. PR #50470 截断 MCP 工具结果时考虑 JSON 开销
[PR #50470](https://github.com/openai/codex/pull/50470)
MCP 工具结果截断仅看预览长度，**忽略 JSON 转义与包装字节**，可能导致超 budget。修复后测量完整序列化长度并逐步缩减。

### 3. PR #50505 Command Center 任务删除后保持相邻选中
[PR #50505](https://github.com/openai/codex/pull/50505)
归档/删除当前选中任务时，选区会跳到当前任务而非相邻任务。**UX 修复**，提升导航连续性。

### 4. PR #50504 TUI 确认对话框居中显示并保留背景
[PR #50504](https://github.com/openai/codex/pull/50504)
将确认对话框渲染为居中浮层，同时保留背后的 composer 或父选择器。改善 TUI 视觉层次。

### 5. PR #50503 Find 结果用 Enter 接受，Esc 取消
[PR #50503](https://github.com/openai/codex/pull/50503)
防止长按 Enter 误提交 composer 草稿，**修复"幽灵 Enter"提交 bug**。

### 6. PR #50499 在守护进程更新失败中包含安装器 stderr
[PR #50499](https://github.com/openai/codex/pull/50499)
守护进程更新失败时，**捕获并附加安装器最后 2 KiB stderr**，便于诊断安装失败原因。

### 7. PR #50480 跳过注册型 Windows 沙盒刷新的托管配置加载
[PR #50480](https://github.com/openai/codex/pull/50480)
仅注册的沙盒刷新无需再次拉取云策略，**减少不必要的网络请求**，加速启动。

### 8. PR #50464 新增 `incremental_tools` 功能开关
[PR #50464](https://github.com/openai/codex/pull/50464)
注册处于开发中的 `incremental_tools` 功能，默认关闭并在配置 schema 中暴露。

### 9. PR #50459 为自定义模型提供商增加能力覆盖
[PR #50459](https://github.com/openai/codex/pull/50459)
允许 Responses 兼容提供商在 `model_providers.<id>.capabilities` 中配置 **实时联网访问与远程压缩 (v2)**。

### 10. PR #50446 Rollout 附件打包为 gzip tar
[PR #50446](https://github.com/openai/codex/pull/50446)
将文件型 rollout 与缓冲前缀合并为 `rollouts.tar.gz`，**减少上传包大小并保留诊断文件分离**。

---

## 📈 功能需求趋势

从过去 24 小时的 50 条 Issues 中提炼出以下方向：

| 方向 | 占比 | 代表性 Issue |
|---|---|---|
| 🪟 **Windows 平台稳定性** | ~40% | #49862, #50403, #50490, #50236 |
| 🧩 **VS Code 扩展可靠性** | ~20% | #49834, #49991, #50265 |
| 🤖 **Dots / 子代理工作流** | ~14% | #49729, #49862, #50119 |
| 🛡️ **Computer Use / Browser 安全策略** | ~12% | #29343, #50502, #36672 |
| 📉 **成本与性能** | ~8% | #46343, #49866 |
| ☁️ **云服务 / Bedrock 集成** | ~6% | #50182, #50472 |

**洞察**：
- Windows 平台已超越 macOS 成为 Codex **头号痛点源头**
- Dots（代理编排）与 MCP 集成的**跨平台一致性**是 10 月最重要的工程议题
- Computer Use 的安全策略过严问题持续发酵，**企业级白名单需求**显现

---

## 💬 开发者关注点

### 🔥 高频痛点

1. **VS Code 扩展 26.928 系列消息队列故障**
   多个独立报告指向同一症状——队列消息发送锁释放失败 / 消息消失 / 卡在 pending。这是**影响最大的当下问题**，建议用户暂时回退或等待 26.930+ 修复。

2. **Windows 平台上的沙盒、ACL 与服务进程生命周期**
   报告涉及 sandbox 拒绝读取 ACL 损坏（#50490）、守护进程无法脱离 Job Object（#48911）、Windows 启动超时（#48729）。**Windows 沙盒子系统急需整体加固**。

3. **Dots 跨平台能力不对称**
   Dots 在 macOS 上能创建会话却无法回访，在 Windows 上甚至缺少基础工具。开发者希望 Dots 像 Codex CLI 一样**具备完整对等能力**。

4. **Computer Use 安全策略过严**
   `csp.aliexpress.com`、`/feedback` 等正常站点被无差别拦截，且权限校验不可见。**可解释的安全策略**与**白名单机制**是核心呼声。

5. **Agent 成本不可预测**
   #46343 揭示小任务消耗 42% 周配额的现象，开发者呼吁**实时 token 预算仪表盘**与**任务粒度的成本上限**。

### ✨ 积极信号

- Codex 正积极落地 **`incremental_tools`、`ultrafast` 等级、自定义提供商能力**等高级功能
- 性能优化聚焦在 **rollout 持久化体积压缩**（tar.gz、打包字节统计）
- TUI/UX 细节打磨（确认框居中、Find 行为、Command Center 选择保持）显示**对开发者体验的重视**

---

> 📊 报告生成时间：2026-10-03 | 涵盖 Issues 50 条 / PRs 50 条
> 建议关注 [OpenAI Codex GitHub](https://github.com/openai/codex) 获取实时动态

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-10-03

---

## 📌 今日速览

今日 v0.64.0 nightly 继续小步迭代，重点修复了 CLI 选项列表中 **Enter/Spacebar 确认失效** 的可用性回归。社区侧，**子代理（Subagent）相关缺陷仍是绝对热点**——MAX_TURNS 后错误上报为 GOAL、generalist agent 永久挂起、Browser Agent 忽略 settings.json 等问题持续发酵；同时围绕 **会话恢复健壮性（去重 toolResponse、防上下文污染）** 与 **沙箱生态（rootless Podman、gVisor IPC 回退）** 的 PR 集中涌现，显示团队正系统性补齐 CLI 的可靠性短板。

---

## 🚀 版本发布

### v0.64.0-nightly.20261003.gfb972b2f8
- **PR #29502** by @ugorla-dev：修复 CLI 选项列表中 **Enter 与 Spacebar 无法可靠确认选中项** 的问题，恢复键盘可访问性。  
  🔗 https://github.com/google-gemini/gemini-cli/pull/29502

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 摘要 | 关注度 |
|---|-------|------|--------|
| 1 | **#22323** [P1][Bug] | `codebase_investigator` 子代理在到达 `MAX_TURNS` 后仍报告 `status: success` 与 `Termination Reason: GOAL`，掩盖了中断事实 | 💬13 👍2 |
| 2 | **#19873** [P2][Enhancement] | 提议 **零依赖 OS 沙箱 + 执行后意图路由**，让 Gemini 3 充分发挥原生 bash 链式调用能力，同时不牺牲安全性 | 💬9 👍1 |
| 3 | **#21409** [P1][Bug] | generalist agent **永久挂死**，连新建文件夹这种简单操作也无法返回；提示词层禁用子代理后可绕过 | 💬8 👍8 |
| 4 | **#22745** [P2][Feature] | EPIC：评估 **AST 感知的文件读取、搜索与代码库映射**，用一次工具调用精确锁定方法边界，降低 token 噪声 | 💬7 👍1 |
| 5 | **#21968** [P2][Bug] | Gemini 几乎不会自动调用用户的 **自定义 skills 与子代理**，需显式提示才会触发 | 💬7 👍0 |
| 6 | **#22267** [P2][Bug] | Browser Agent 完全忽略 `settings.json` 中的 `maxTurns` 等覆盖项 | 💬4 👍0 |
| 7 | **#22232** [P3][Feature] | 增强 `browser_agent` 弹性：在 persistent 模式下遭遇锁定 profile 时支持 **自动会话接管与锁恢复** | 💬4 👍0 |
| 8 | **#21983** [P1][Bug] | browser 子代理在 **Wayland** 环境下失败，Termination Reason 错误地标为 GOAL | 💬4 👍1 |
| 9 | **#21000** [P3][Bug] | 探索用 **原生文件工具** 创建和维护 task tracker，避免依赖上下文内的 todo | 💬4 👍0 |
| 10 | **#20079** [P2][Bug] | `~/.gemini/agents/filename.md` 为 **软链接** 时不被识别为 agent | 💬4 👍0 |

**为什么重要**：Top 10 中有 7 条集中在 `area/agent`，反映出子代理体系仍是 CLI 当前最不稳定的子系统；#21409（8 赞）和 #21968 是少数开发者明显"被伤到"的体验类问题。AST 感知工具（#22745/#22747）与 OS 级沙箱（#19873）则是社区自发提出的两个高价值演进方向。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 说明 |
|---|----|----|
| 1 | **#29402** [CLOSED][P1] | `PersistentState` 写入失败安全：写入临时文件 + `fsync` + 原子 rename，避免崩溃时 `state.json` 被截断静默清空 |
| 2 | **#29387** [CLOSED][P2] | 扩展目录加载：在 `_buildExtension` 校验失败时不再拖垮整个 extension 加载链路 |
| 3 | **#29400** [CLOSED][P1] | 修复使用 `-r` 恢复会话时 `functionResponse` **重复回复** 的问题（持久化和重放路径双写） |
| 4 | **#29399** [CLOSED][P2] | 编辑工具加固：保留 **无关注释与代码**，引导模型做最小化分块编辑，并新增多段 OAuth 编辑回归 eval |
| 5 | **#29398** [CLOSED][P1] | MCP 初始工具发现加 **短超时** 包裹，修复 `tools/list` 响应 ID 不匹配时阻塞 **10 分钟** 的问题（closes #28355） |
| 6 | **#29397** [CLOSED][P2] | 阻止 SIGINT/超时场景下 **合成 assistant turn** 进入会话历史造成的 in-context 中毒与死循环 |
| 7 | **#29394** [CLOSED][P1] | 在 **调度层** 拦截写类工具，强制执行"先解释、等用户确认"的用户暂停意图，弥补 prompt 级遵从的不足 |
| 8 | **#29386** [CLOSED][P2] | A2A Server：`express.json` 注册位置前移到路由之前，修复 `req.body undefined` |
| 9 | **#29505** [OPEN][P1] | 沙箱支持 **rootless Podman + keep-id**，正确保留宿主机 UID/GID |
| 10 | **#29597** [OPEN][P2] | gVisor/`runsc` 沙箱下启用 **stdio IPC 回退**，绕过 Netstack 对 loopback 的隔离 |

**看点**：
- **可靠性集群**：#29402、#29400、#29397、#29394 形成"持久状态 + 会话恢复 + 中断恢复 + 用户意图强制"的纵深防御。
- **沙箱生态**：#29505 + #29597 让 Podman 和 gVisor 用户首次获得"开箱即用"的体验。
- **工具与编辑**：#29398（10 分钟阻塞）和 #29399（注释被吞）都是长期被开发者吐槽的"被坑"场景。

---

## 📈 功能需求趋势

综合 Issues 与 PR，开发者社区的诉求高度集中：

1. **子代理（Subagent）可靠性** ⭐⭐⭐⭐⭐  
   跨任务分配、会话恢复、终止语义（GOAL vs MAX_TURNS）、用户意图遵从是当前最痛的体验类问题。
2. **AST 感知代码工具** ⭐⭐⭐⭐  
   #22745 / #22746 / #22747 系列 EPIC，开发者希望以更少 token 精准命中函数/方法边界。
3. **零依赖 OS 沙箱与安全模型** ⭐⭐⭐⭐  
   #19873 提出让 Gemini 3 释放 bash 亲和力而不牺牲安全；同步落地 Podman rootless、gVisor IPC。
4. **持久化任务追踪** ⭐⭐⭐⭐  
   #21000 / #18836 推动用文件 CRUD 取代 in-context todo，解决 context rot 与跨会话丢失。
5. **Skill 自动激活 & 自我认知** ⭐⭐⭐  
   #21968（不主动用 skill）和 #21432（CLI 需要精通自己的 flag/快捷键）共同指向"agent 自指能力"短板。
6. **会话/调试可观测性** ⭐⭐⭐  
   #21763（bug 报告缺子代理上下文）、#22598（`/chat share` 应包含子代理轨迹）共同提升排障效率。
7. **OAuth 与安全合规** ⭐⭐  
   #29616 跟进 RFC 9207 / MCP 授权规范。

---

## 💬 开发者关注点与痛点

- **"提示词不够，要在调度层强制"**：#29394 / #26390 揭示了一个普遍痛点——用户说"先别动"，模型仍然执行 `replace`、`run_shell_command`；开发者正在倒逼 **prompt 之外的硬约束**。
- **"挂死/无声失败"最让人崩溃**：#21409 的 8 赞说明 generalist agent 永久 hang 是高频遭遇；#29398 的 10 分钟 MCP 等待同样属于"看起来像卡死"的体验杀手。
- **"终止语义不准，事后难复盘"**：#22323、#21983 都出现 `Termination Reason: GOAL` 掩盖真实失败，与 #21763（bug 报告缺子代理上下文）形成 "**问题看不见 + 终止原因错**" 的复合痛点。
- **"沙箱别只支持 Docker"**：Podman rootless 与 gVisor/runsc 的并行 PR 表明企业用户的容器环境多样，CLI 需要适配而非假设。
- **"工具列表膨胀到 400+ 就 400 报错"**：#24246 提醒团队，单 turn 工具注册数量已经触到模型上下文工程边界。

---

📊 **今日数据快照**：1 个 nightly 版本发布 · 50 条 Issue 更新 · 32 条 PR 更新 · `area/agent` 占比约 60%，可靠性与沙箱是本周主线。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-03**

---

## 1. 今日速览

过去 24 小时内，Copilot CLI 连续推送了 **v1.0.92-1 / -2 / -3** 三个预发布版本，核心聚焦于沙箱网络代理、MCP 远程重连、本地/云端运行环境切换以及输入响应顺序的稳定性。社区方面，**Skills 系统在 `disable-model-invocation: true` 下无法被显式调用** (#4438) 成为讨论最热的开放问题，BYOK 模型兼容性、Plan 模式、Entra ID OAuth 等多个新议题也迅速涌入。

---

## 2. 版本发布

### v1.0.92-3
- **新增**：对话前 `Ctrl+E` 环境选择器，可在本地运行与云端运行之间切换。
- **修复**：高速交互下键盘、粘贴、鼠标输入的时序与响应；沙箱 shell 在代理阻断目标时弹出网络旁路提示。

### v1.0.92-2
- **修复**：Windows 沙箱命令将临时文件写入授权的临时目录，确保"重命名到目标位置"类工具可用；Prompt-mode 中多次 Stop-hook 续接后仅触发一次 `sessionEnd` 钩子。

### v1.0.92-1
- **修复**：空闲后 Streamable HTTP 会话过期时重新连接远程 MCP 服务器；向运行中的后台 agent 发送消息会在下一个处理点转向当前回合；上下文回滚保留最近请求到恢复上下文；隐藏自动沙箱 CA 设置的冗余提示。

> 整体看，v1.0.92 系列在「会话健壮性 + 沙箱 + MCP + 多端协同」四条线同时推进，是一次面向深度用户的预发布合集。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 关注度 | 为什么重要 |
|---|------|------|--------|-----------|
| [#4438](https://github.com/github/copilot-cli/issues/4438) | `disable-model-invocation: true` 让 skill 完全不可达（不仅限模型自动调用） | OPEN | 11 评论 / 👍12 | 直接破坏显式用户调用 `skill()` 工具的预期，`copilot skill list` 与运行时行为不一致，是当前最热的开放问题。 |
| [#4012](https://github.com/github/copilot-cli/issues/4012) | BYOK 模型 `glm-5.2:cloud` 不支持 `--reasoning-effort max` | CLOSED | 👍23 | 高赞已修复案例，体现社区对自定义模型推理参数可控性的强烈诉求。 |
| [#3172](https://github.com/github/copilot-cli/issues/3172) | 剪贴板被外部占用时的状态栏异常提示破坏布局 | CLOSED | 4 评论 / 👍13 | 长期 UX 抱怨，已关闭说明官方已落地修复。 |
| [#1825](https://github.com/github/copilot-cli/issues/1825) | 空 Input Schema 导致整个 MCP 连接不可用 | CLOSED | 3 评论 / 👍10 | 影响所有"无参数工具"的 MCP 服务端，规范兼容性的典型问题。 |
| [#4832](https://github.com/github/copilot-cli/issues/4832) | CLI 1.0.83 完全不加载工作区 `.mcp.json` | CLOSED | 4 评论 | 是 MCP 工作区/用户配置分层语义的重要回归，已经得到修复。 |
| [#4840](https://github.com/github/copilot-cli/issues/4840) | BYOK Deepseek 调用返回 400（`tools[4].type` 协议不匹配） | OPEN | 3 评论 | 自带 key 接入非 OpenAI/Anthropic 协议模型的兼容性陷阱，影响国内/国产模型用户。 |
| [#5024](https://github.com/github/copilot-cli/issues/5024) | 原生 Opus 5.5 调用因 `fallback-credit-2026-07-01` 报 400 | OPEN | 1 评论 | 暴露 CLI 内 `task` 工具与当前请求在 `anthropic-beta` 头协商上的差异，影响 Claude 系列路由。 |
| [#5042](https://github.com/github/copilot-cli/issues/5042) | HydraFusion 失败后将同一会话路由到无法加载静态提示的小上下文模型 | OPEN | 0 评论 | 模型路由层的稳定性问题：跨模型切换会导致工具集与会话状态不匹配。 |
| [#5045](https://github.com/github/copilot-cli/issues/5045) | `/compact` 在 `gpt-6.1-sol` 下反复空响应失败 | OPEN | 0 评论 | 长会话压缩这条核心体验路径上的回归，开发者必须关注的稳定性信号。 |
| [#5040](https://github.com/github/copilot-cli/issues/5040) | MCP OAuth 在 Entra ID 上因 `127.0.0.1` 回调地址被 `AADSTS50011` 拒绝 | OPEN | 0 评论 | 企业用户接入 Microsoft 生态 MCP 服务的阻塞点，需要支持 localhost host 覆盖。 |

**值得追踪的"昨日新开 + 已有讨论"问题**：[#5044 MCP 工具快照漂移](https://github.com/github/copilot-cli/issues/5044)（1.0.87 回归）、[#5038 grep 工具默默忽略 `n`](https://github.com/github/copilot-cli/issues/5038)（影响模型调用）、[#5037 回退后会话图片丢失](https://github.com/github/copilot-cli/issues/5037)、[#5035 events.jsonl 不停增长且 CLI 卡顿](https://github.com/github/copilot-cli/issues/5035)、[#5015 键盘可达的分页器模式](https://github.com/github/copilot-cli/issues/5015)（功能诉求）。

---

## 4. 重要 PR 进展

过去 24 小时内仓库仅收到 1 条 PR，且为空白摘要的 **"Initial commit"** ([#5046](https://github.com/github/copilot-cli/pull/5046))，不具实质评审价值。从 v1.0.92-1/-2/-3 的发布说明可以反推正在被合并的方向：

- **本地 ↔ 云端运行环境切换**（`Ctrl+E` 环境选择器）—— 涉及前端交互层与会话编排；
- **沙箱网络策略**（代理旁路提示、Windows 临时目录）—— 平台/权限系统；
- **MCP 远程会话重连与 OAuth 路径修复** —— 多项 `#4832 / #4562 / #4842 / #5039 / #5040` 的关联修复；
- **会话生命周期与钩子**（`sessionEnd` 仅触发一次、Stop-hook 续接）—— 会话引擎；
- **后台 agent 转向与上下文回滚** —— 后台任务与恢复子系统。

> 当日无新的高价值 PR 可供详细解读，建议关注这些方向上后续被拆出来的具体 PR。

---

## 5. 功能需求趋势

从近 24 小时 + 近期活跃的 Issues 中提炼出社区最集中的诉求方向：

1. **MCP 全链路体验加固**
   - 工作区 vs 用户配置加载顺序、reload 行为、OAuth/Microsoft Entra 集成、Streamable HTTP 重连、状态通知噪音、Code Connect 等扩展能力都是高频话题，反映 MCP 已经成为 CLI 的"事实扩展总线"。

2. **细粒度权限控制**
   - `#3032`（shell 命令模式白名单）、`#4482`（`allowed_directories` 未生效）、`/add-dir` 与启动期权限的差异 —— 开发者希望用声明式配置替代逐次确认。

3. **BYOK 与新模型支持**
   - Deepseek、GLM、Claude Opus 5.5、GPT-6.x、Codex 类小模型、Mai/Flash 等的协议兼容与 `reasoning_effort` 等参数协商问题密集出现。

4. **会话/计划/工作流管理**
   - `exit_plan_mode` 后保留过多规划上下文 (`#5041`)、autopilot 后台超时 (`#4628`)、"Task complete" 摘要开关 (`#5033`) —— 表达了对"长流程会话"可控性的期待。

5. **键盘 / 终端 UX**
   - `#5015`（vim/less 风格分页）、`#3172`（剪贴板状态栏）、`#5043`（Herdr 下 Ctrl+Shift+C）、`#5037`（回退后图片丢失）—— 终端原生体验仍是高频痛点。

6. **可观测性 / 稳定性**
   - `events.jsonl` 无界增长 (`#5035`)、UI 卡顿、远程会话与 Mobile 不同步 (`#4569`) —— 反映长期运行场景的运维诉求。

---

## 6. 开发者关注点

社区反馈中的高频痛点可以归纳为以下几类：

- **"声明与运行时不一致"**：配置写了但不生效（`allowed_directories`、`disable-model-invocation`、工作区 `.mcp.json`），是最容易引发挫败感的问题。
- **"扩展生态断点"**：MCP / BYOK 已经成为核心能力，但规范兼容性、协议协商、OAuth 回调兼容性仍反复出错。
- **"会话引擎边界"**：上下文压缩、Plan 模式继承、autopilot 超时、回退后状态丢失 —— 一旦跨回合/跨子代理，问题迅速放大。
- **"终端原生 UX 仍粗糙"**：剪贴板、分页器、快捷键、Herdr 等非主流终端兼容 —— 说明官方对纯终端形态仍有改进空间。
- **"长会话可观测性"**：`events.jsonl` 不停增长、CLI 更新停滞 —— 长期使用者需要更清晰的运行健康度信号。

> **建议关注**：在升级到 v1.0.92 系列前，重点验证 (1) MCP 远程 OAuth/Microsoft Entra 场景；(2) `disable-model-invocation` 相关 skill 的显式调用；(3) autopilot/plan mode 的会话流转逻辑，避免被新行为影响。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) Issues / Pull Requests / Releases，时间窗口 2026-10-02 → 2026-10-03。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-03

## 今日速览

今日社区焦点集中在 **provider 配置兼容性** 与 **订阅计费透明度** 上：Bedrock/Vertex/自定义 OpenAI 兼容 provider 仍有多个连接类 bug 未根治，订阅用户对额度消耗与"零留存策略"变更的质疑持续发酵。代码侧，OpenCode 进入一波密集的**稳定性与性能修复**窗口，多个 PR 针对 SSE 心跳、session 索引、Web UI 缓存、stdout 截断等长期遗留缺陷集中发力。

---

## 版本发布

过去 24 小时**无新版本发布**。社区目前仍停留在 v1.18.x 系列，PR 提交反映团队重心在 v2 路径修复与小改进上。

---

## 社区热点 Issues

| # | Issue | 状态 | 关注点 |
|---|-------|------|--------|
| [#23153](https://github.com/anomalyco/opencode/issues/23153) | [FEATURE] Pay Go with crypto | OPEN | 24 评论 / 55👍，社区呼吁 OpenCode Go 支持加密货币付费，是本月票数最高的 feature request |
| [#39861](https://github.com/anomalyco/opencode/issues/39861) | [FEATURE] Removal of zero-data-retention policy | CLOSED | 10 评论 / 18👍，文档移除"零留存"措辞引发用户对隐私政策的强烈质疑 |
| [#23595](https://github.com/anomalyco/opencode/issues/23595) | `<system-reminder>` 频繁移动导致 llama.cpp 缓存失效 | CLOSED | 8 评论 / 15👍，直接影响推理性能与响应延迟 |
| [#29478](https://github.com/anomalyco/opencode/issues/29478) | Web 端持久化重复 final answer | CLOSED | 8 评论，后端 session 重复写入问题，影响 session JSON 导出准确性 |
| [#39560](https://github.com/anomalyco/opencode/issues/39560) | 连续更新后关键数据丢失（session/历史/插件/provider） | CLOSED | 5 评论，严重的数据丢失事故，破坏用户长期项目 |
| [#40075](https://github.com/anomalyco/opencode/issues/40075) | [2.0] Bedrock Mantle 模型 base URL 未做 `${AWS_REGION}` 替换 | CLOSED | 5 评论，v2 路径下 GPT-5.6 / gpt-oss 完全无法联通 |
| [#52049](https://github.com/anomalyco/opencode/issues/52049) | Windows CLI 45s event-stream watchdog 重启服务，中断所有 session | OPEN | 4 评论，Windows 平台关键回归——所有 subagent 失败 |
| [#52371](https://github.com/anomalyco/opencode/issues/52371) | Muse Spark 1.3 Contributor 两天内耗尽额度 | OPEN | 6 评论，怀疑日志显示 $60 但账户已耗尽——对计费透明度提出质疑 |
| [#50650](https://github.com/anomalyco/opencode/issues/50650) | Desktop 自定义 provider 始终抛 `unavailable on this server` | OPEN | 5 评论，自托管/本地 server 用户完全无法保存配置 |
| [#31851](https://github.com/anomalyco/opencode/issues/31851) | Desktop 工作区不识别手工创建的 git worktree | CLOSED | 5 评论 / 5👍，主流多人多分支开发流程受阻 |

---

## 重要 PR 进展

| # | PR | 说明 |
|---|----|----|
| [#52871](https://github.com/anomalyco/opencode/pull/52871) | Windows 后台子进程隐藏控制台窗口 | 修复 #42440，Windows 下后台 service / PTY daemon / signing helper 的窗口不再弹出 |
| [#52886](https://github.com/anomalyco/opencode/pull/52886) | grep 工具限定为精确文件路径 | 修复 #45185，避免 include 过滤下错误匹配同目录其它文件 |
| [#52885](https://github.com/anomalyco/opencode/pull/52885) | CLI 保留恢复步骤后的成功退出码 | 解决瞬时失败后续成功却被记为非零退出的问题，避免 retry 误判 |
| [#52734](https://github.com/anomalyco/opencode/pull/52734) | **代理认证：Negotiate / NTLM / Basic** | 新增对 407 代理认证挑战的应答能力，企业内网场景刚需（#52732 被关闭后重提） |
| [#51871](https://github.com/anomalyco/opencode/pull/51871) | 恢复陈旧的 event stream（stall watchdog + 重连退避） | 修复 v2 重构中丢失的 SSE 看门狗（#51857），解决后台标签页恢复后流断开的回归 |
| [#51879](https://github.com/anomalyco/opencode/pull/51879) | chunkTimeout 不再误杀 SSE 心跳注释 | provider 侧修复 #43519，配合客户端 #51871 完整覆盖 stream stall 类问题 |
| [#51874](https://github.com/anomalyco/opencode/pull/51874) | session(time_created, id) 复合索引 | 修复 #44400，session 列表分页/排序性能回归 |
| [#51875](https://github.com/anomalyco/opencode/pull/51875) | 嵌入式 Web UI 缓存策略 + ETag | 修复 #51858，解决 UI 静态资源每次重新拉取问题 |
| [#52882](https://github.com/anomalyco/opencode/pull/52882) | 提供预压缩缓存版的嵌入式 UI 资源 | 与 #51875 互补，显著降低 web 资源 IO |
| [#46912](https://github.com/anomalyco/opencode/pull/46912) | 退出前等待 stdout 写入完成 | 修复 #29330，解决 `session list --format json` 等场景下管道截断 |
| [#52818](https://github.com/anomalyco/opencode/pull/52818) | 新增 **OpenCode Browser Extension** 包 | 新产品形态：从浏览器侧提供 OpenCode 集成入口 |
| [#52868](https://github.com/anomalyco/opencode/pull/52868) | GUI 扩展：类型化组合与生命周期原语 | 在不引入 Effect runtime 的前提下提供类型安全的扩展组合能力 |
| [#52875](https://github.com/anomalyco/opencode/pull/52875) | 压缩 agent 使用其配置的 model 进行摘要 | 修复 #44094——`agents.compaction.model` 之前仅展示却未被读取 |
| [#52877](https://github.com/anomalyco/opencode/pull/52877) | 注释中裸 `@word` 不再当作工作区路径 | 修复 #50393，避免 `or should I use @here?` 被错误解析为文件引用 |
| [#49863](https://github.com/anomalyco/opencode/pull/49863) | 插件支持 package subpath exports | 修复 #49852，允许 `pkg@subpath/` 形式的 bare 导入 |
| [#47783](https://github.com/anomalyco/opencode/pull/47783) | 新增波斯语 README 翻译（`README.fa.md`） | 完善多语言文档 |

---

## 功能需求趋势

从当前高互动 Issues 提炼，社区最强烈的诉求集中在以下方向：

1. **订阅与计费透明度** — Go 订阅额度消耗异常（#52371、#40280）、加密支付（#23153）、隐私策略变更（#39861）三项议题并行，反映用户对"花多少钱、买到什么、数据怎么用"的高度关注。
2. **多模型 / 多 Provider 兼容性** — Bedrock Mantle `${AWS_REGION}` 未替换（#40075）、Vertex Anthropic 路由错误（#39069）、Kilo gateway 模型缺失（#35949）、deepseek-v4 双 endpoint 支持（#40261）显示 v2 路径下 provider 矩阵仍有较大覆盖缺口。
3. **Desktop 工作流完整性** — git worktree 不可见（#31851）、Plan/Build 按钮需切 tab 才显示（#40288）、归档无恢复入口（#40287）——Desktop 应用相比 CLI/Web 仍存在明显功能/集成滞后。
4. **可观测性增强** — TUI 上下文计量区分缓存/新鲜 token（#34298）、`opencode debug info` 展示更友好（#40300）、provider 配置生效确认（#52879）三方面需求，反映对"行为可见、可调试"的呼声。
5. **Web/Desktop 健壮性** — 大日志粘贴崩溃（#35204）、session 重复持久化（#29478）、流式响应卡死（#40205）、SQLite 损坏启动失败（#37821）四类问题持续出现，长会话与边缘 case 仍是产品稳定性的主要风险源。

---

## 开发者关注点

综合今日活跃 Issue 与 PR 讨论，开发者群体的核心痛点可归纳为：

- **"v2 重构回归"焦虑**——多个 PR（#51871、#51879、#40075、#51874）明确标注"closes issue from v2 refactor lost"或"v2 path"，v1 → v2 迁移中确实出现了 SSE 看门狗、session 索引、provider 模板等功能的回退。
- **配置与运行时不一致**——`providers.settings.transport`（#52879）、Vertex subagent 绑定忽略用户配置（#39069）、`agents.compaction.model` 仅展示不生效（#52875），"配置写了但运行时没读"的信任问题反复出现。
- **企业网络/认证场景盲区**——直到 #52734 才补齐代理 407 挑战的处理；Windows 后台 service 看门狗误杀（#52871、#52049）；Zen OAuth 失败（#39414、#40232）反映在企业部署、复杂网络、跨平台认证上的准备仍不足。
- **数据安全与可逆性**——session 归档单向（#40287）、连续更新数据丢失（#39560）、SQLite 损坏启动崩溃（#37821）三个问题叠加，凸显"不可逆操作"和"状态恢复"机制的薄弱。
- **新功能扩展边界**——OpenCode Browser Extension（#52818）与 GUI 扩展组合原语（#52868）显示社区正推动 OpenCode 从"终端工具"扩展为"嵌入式助手平台"，但生态规范（subpath exports #49863、@ 引用解析 #52877）仍需补齐。

---

> 今日报基于 GitHub `anomalyco/opencode` 仓库过去 24 小时更新的 Issues 与 PR 数据生成，按评论数与社区互动度筛选排序。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-03

## 📌 今日速览

过去 24 小时 Pi 仓库整体节奏偏"扫尾型"——没有新版本发布，但合入的 PR 多为性能、安全与跨平台兼容修复。Issue 端则涌现出大量围绕 **macOS CPU 占用、TUI 长会话渲染卡顿、ChatGPT OAuth 刷新失效** 的反馈，叠加 Bedrock/GPT-6 思考块相关回归；与此同时，C++ 主干（Bazel）、llama.cpp 原生分类器、Cloudflare Clef 等"基础设施扩展"同步推进，社区正把工程边界再往外推一层。

---

## 🚀 版本发布

> 过去 24 小时无新版本发布，跳过本节。

---

## 🔥 社区热点 Issues

| # | 状态 | 标题 | 关键看点 |
|---|---|---|---|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | OPEN | **[Windows] Pi 在 Windows 上怎么跑？** | **72 条评论**，长期置顶的"汇总帖"。官方正在收口 Windows 支持边界（WSL、原生 node、Git Bash、ConPTY 各种组合），希望决定哪些路径该由 Core 管、哪些交给扩展。 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | OPEN | **Mac OS 长会话 CPU 飙到 100%+** | 👍 **10** 个赞，18 条评论。CPU 在 50–110% 来回跳，内存 600–800MB，被怀疑与 context 大小/会话长度相关，是 macOS 上最普遍的"为什么风扇在转"问题。 |
| [#10300](https://github.com/earendil-works/pi/issues/10300) | OPEN | **ChatGPT OAuth 的 ID token 没被持久化** | 13 条评论。`credentialFromTokenResponse` 在保存与刷新时都丢掉了 ID token，导致扩展拿不到账户身份，影响面铺到所有依赖 OAuth 的扩展。 |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | OPEN | **TUI 长 transcript 满屏重绘风暴** | 10 条评论。`TuiMainScreen.doRender()` 在 thinking tail 增长时反复走 `fullRender`，800+ 消息的会话滚动出现"文本倍增"现象。 |
| [#10314](https://github.com/earendil-works/pi/issues/10314) | OPEN | **Fullscreen 模式下 Home/End 行为变更** | 6 条评论。Home/End 从"行首/行尾"变成"滚动到顶/底"，正在征求社区意见决定是否回退。 |
| [#10162](https://github.com/earendil-works/pi/issues/10162) | OPEN | **输入图片过多会让 agent 任务中断** | 6 条评论。0.99 引入多图输入后，超过阈值的图片直接阻断长任务（PR 看护、QA 测试等），对 auto-compaction 依赖场景影响明显。 |
| [#10256](https://github.com/earendil-works/pi/issues/10256) | OPEN | **0.99.x 终端色查询回复泄到 prompt，触发 BEL** | 6 条评论。影响 mintty + ConPTY 组合，启动即开外部编辑器；0.87.1 与 Windows Terminal 不受影响。 |
| [#9807](https://github.com/earendil-works/pi/issues/9807) | OPEN | **TUI 全量重绘导致 814 消息时滚动/输入卡顿** | 5 条评论。对比 OpenTUI 的 cell-level diff，Pi 每次都全量重绘 scrollback，被社区反复引为性能标杆问题。 |
| [#10385](https://github.com/earendil-works/pi/issues/10385) | CLOSED | **`--model <id>:off` 在 `--provider` 同时指定时被丢弃** | 3 条评论。1.0.0 上的 thinking shorthand 解析回归，已合并修复。 |
| [#10388](https://github.com/earendil-works/pi/issues/10388) | CLOSED | **`prompt()` 在 `agent_settled` handler 中静默延迟** | 2 条评论。属于"无信号、无报错"的隐蔽 bug，扩展作者排查成本很高，已闭。 |

> 注：[#9335](https://github.com/earendil-works/pi/issues/9335)（👍7，`configuration_update` 缓存保留）虽是已 close 的 no-action，但讨论质量高，GPT-6 prompt cache 优化必读。

---

## 🛠️ 重要 PR 进展

| # | 状态 | 标题 | 要点 |
|---|---|---|---|
| [#10383](https://github.com/earendil-works/pi/pull/10383) | CLOSED | **perf(tui)：原始行字符串做差分** | 直接回应 [#9807](https://github.com/earendil-works/pi/issues/9807)。保留指针相等性，避免每次帧退化为全 buffer 字符串比较，长会话渲染从 O(n) 起步降为真正的差量重绘。 |
| [#10382](https://github.com/earendil-works/pi/pull/10382) | OPEN | **coding-agent 原生支持 llama.cpp 分类器** | 会话启动时通过 `/v1/systemone` 探测已加载模型，把 Julia-1/Laya/Kev/lev/OpenJev 等决策模型登记为 typesafe-system-one 分类器，仅 501/404 标记为聊天模型。 |
| [#10328](https://github.com/earendil-works/pi/pull/10328) | CLOSED | **fix(ai)：Bedrock 上丢弃不匹配的 thinking 块** | 关闭 [#10324](https://github.com/earendil-works/pi/issues/10324)。启用 `thinking-binding-controls-2026-08-01` beta 头 + `block_binding: { prefix_mismatch_behavior: "drop_block" }`，与 Anthropic 路径行为对齐。 |
| [#10329](https://github.com/earendil-works/pi/pull/10329) | CLOSED | **fix(ai)：给 Bedrock 上 OpenAI 模型加长上下文计费档** | 修复 GPT-6 类模型 >272k 输入时被短档计费的 bug：>272k 后 input/cache 2x、output 1.5x，与 OpenAI 一致。 |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | OPEN | **feat(ai)：支持 Azure Foundry Chat Completions 部署** | 关闭 [#9645](https://github.com/earendil-works/pi/issues/9645)。DeepSeek V4 Pro 等仅暴露 Chat Completions 的 Foundry 部署可工作，内置目录仅内置 `deepseek-v4-pro`。 |
| [#10316](https://github.com/earendil-works/pi/pull/10316) | CLOSED | **feat(ai)：Workers AI 加入 Cloudflare Clef 分类器** | 紧跟 [#10321](https://github.com/earendil-works/pi/issues/10321)。`@cf/cloudflare/clef` (27B) 与 `clef-flash` (9B) 走 typesafe/jev 同款 seam，价格便宜（$0.24/$0.09 per 1M 输入）。 |
| [#10368](https://github.com/earendil-works/pi/pull/10368) | CLOSED | **fix(coding-agent)：把 hidden 工具提示从 rules/skills 中拿掉** | `hiddenDeclarations` 把工具从 `<tools>` 摘掉但 `<rules>`/skills 提示仍基于执行集，模型能看到"看不见的工具"的指引，存在一致性误导。 |
| [#10361](https://github.com/earendil-works/pi/pull/10361) | CLOSED | **fix(coding-agent)：保留多行语法高亮** | 关闭 [#10143](https://github.com/earendil-works/pi/issues/10143)。TUI 拆行后只有首行带 ANSI 样式，对每行独立应用 formatter。 |
| [#10346](https://github.com/earendil-works/pi/pull/10346) | CLOSED | **fix(coding-agent)：拒绝超大 WebP EXIF chunk** | WebP RIFF chunk size 被按有符号解析，`0xfffffff8` 变成 `-8`，导致同步扫描器死循环；改为按 uint32 读取并校验边界。 |
| [#10332](https://github.com/earendil-works/pi/pull/10332) | CLOSED | **fix(coding-agent)：brace-expansion 升至 5.0.12** | 修复 [GHSA-q2hr-2g5m-vwhr](https://github.com/advisories/GHSA-q2hr-2g5m-vwhr)；同时关闭 [#10288](https://github.com/earendil-works/pi/issues/10288)，因 shrinkwrap 锁定老版本才暴露。 |

> 长期基础设施：[#10372](https://github.com/earendil-works/pi/pull/10372)（C++ Bazel 主干 + IClock 参考模块）与 [#9137](https://github.com/earendil-works/pi/pull/9137)（Nix flake，WIP）同步推进，是社区对未来 Pi 走向的强信号。

---

## 📈 功能需求趋势

将 30 条 issue 主题聚类后，社区关注度排序如下：

1. **TUI 长会话性能**（最高频）—— 全量重绘、滚动卡顿、多行高亮、断行图片坍缩。`#9807` + `#9255` + `#10319` + `#10361`/`#10356` 形成完整链条。
2. **Windows 一等公民支持** —— 收口运行形态、解决 mintty/ConPTY 兼容、补齐 Windows 下 OAuth/订阅刷新链路。
3. **多模态/图片处理** —— 输入图过多中断任务（`#973102`）、Kitty 编码器 PNG-only（`#93102`）、WebP EXIF 解析死循环（`#10346`）、WebUI 图片渲染回归（`#10371`）、图片队列未清（`#10389`）。
4. **OpenAI / ChatGPT OAuth 体系重构** —— ID token 持久化（`#10300`）、refresh_token 失效（`#10377`）、订阅登录 400（`#10258`）、Codex custom-tool ID 错配（`#10357`）。
5. **模型适配与新模型上线** —— Azure Foundry（`#9714`）、Cloudflare Clef（`#10316`）、Together DeepSeek V4 Pro（`#10336`）、llama.cpp 分类器（`#10382`）、Anthropic JSON Schema 完整性（`#9557`）。
6. **Bedrock / 思考块绑定** —— thinking 块签名失效、跨 system/tool 改动的回放协议（`#10324` + `#10328`）。
7. **上下文计量 / 计费准确性** —— `getContextUsage()` 估计漂移（`#10287`、`#10307`）、OpenAI 长档（`#10329`）。
8. **扩展 API 一致性** —— `before_agent_start` 文本丢失（`#10267`）、`agent_settled` 中 `prompt()` 静默延迟（`#10388`）、WebUI 生命周期钩子不派发（`#10366`）。
9. **计划模式 / MCP 配置语义** —— `plan-mode` 退出策略（`#10333`）、项目级 `.pi/mcp.json` override（`#10377`）。
10. **CLI 与模型语法** —— `--provider` + thinking shorthand 互相吃掉的回归（`#10385`）、prompt 队列中 `/compact` 与文本交替（`#8301`）。

---

## 💬 开发者关注点

- **性能预算与"退化阈值"**：800 消息已成为社区默认的"长会话"测试场景，开发者期望看到 cell-level diff 或等价方案，`#10383` 是关键回应。
- **OAuth 不再是"小细节"**：从 ID token 持久化到 refresh 重放，每个环节都对应一条独立的 issue；社区希望把 OAuth 视为 first-class 流程而不是单点集成。
- **macOS 资源占用**：长会话 + 多模态 + 多 Provider 同时存在时，CPU 抖动让用户对"能否后台运行"产生疑虑，DevOps 视角的回归测试诉求强烈。
- **多模态边界**：图片从"附件"升级为"任务输入"后，concurrency、队列、计费、回放契约全部需要重新定义，仓库里相关 issue 已横跨 AI 层、Coding-Agent 层与 WebUI 层。
- **构建/分发生态**：Bazel（C++ 主干）+ Nix flake（开发环境）+ brace-expansion 安全升级三条线并行，说明社区在为"更大规模、更多贡献者"做工程准备。
- **行为变更需可逆**：Fullscreen 下 Home/End 行为变更、`hiddenDeclarations` 的 rules 残留这种"看起来对的实现"反而暴露了一致性缺口——开发者呼吁类似变更要带可见的 RFC/标签机制。

---

> 数据口径：基于 GitHub 仓库 `earendil-works/pi` 在 2026-10-02 ~ 2026-10-03 区间内更新的 issue/PR；评论/点赞数为当前快照，链接均为 `github.com/badlogic/pi-mono` 镜像对应条目。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-03

## 📌 今日速览

Qwen Code 今日主线继续围绕 **Managed Agent / Managed Runtime 架构演进** 推进，Stage G（Session 历史外部化与写入围栏）和 M5a（Runtime 工作者执行工具）相关 PR 进入实质落地；同时 **Token / 上下文窗口治理** 成为第二大热点，多个 Issue 与 PR 直指侧查询、主轮次的 `max_tokens` 与输出预算缺陷。维护者 tanzhenxin、yiliang114、wenshao 三人仍是社区节奏主导者。

---

## 🚀 版本发布

**v0.24.7-nightly.20261002.a011f66944** 已发布，主要变更：

- **fix(core)**：Code Mode 文案与懒加载工具发现保持一致（[PR #12990](https://github.com/QwenLM/qwen-code/pull/12990)，@tanzhenxin）
- **fix(permissions)**：修复 approved 流程下的权限处理（具体细节见 release notes）

> 该 nightly 版本侧重核心循环与权限链路的稳定性，未涉及大型功能合入。

---

## 🔥 社区热点 Issues

| # | 标题 | 评论数 | 状态 | 重要性 |
|---|------|--------|------|--------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | proposal(serve): Managed Agent 双路径架构与分阶段交付 | 42 | OPEN | 顶层架构提案，下一阶段几乎所有 Managed Agent 工作的总纲 |
| [#12028](https://github.com/QwenLM/qwen-code/issues/12028) | 非对话上下文 Token 治理（system prompt / 工具 schema / QWEN.md） | 18 | IN-PROGRESS | 影响所有长上下文模型计费与性能，社区高优 |
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | 每日依赖 CVE 审计失败 | 7 | OPEN | 供应链安全告警，需关注是否引入新漏洞 |
| [#13004](https://github.com/QwenLM/qwen-code/issues/13004) | perf(memory): no-op 抽取后增加冷却节流 | 7 | OPEN | 自动内存抽取节流策略，避免无意义的后台开销 |
| [#12952](https://github.com/QwenLM/qwen-code/issues/12952) | Stage G：Session 历史外部化 + 写入围栏 / 接管 | 7 | OPEN | Managed Agent 高优交付阶段 |
| [#13157](https://github.com/QwenLM/qwen-code/issues/13157) | Agent Host：先执行约束守卫再进入权限流 | 6 | OPEN/BLOCKED | 无 workspace 工具调用导致 run 终止，影响 host 可用性 |
| [#12091](https://github.com/QwenLM/qwen-code/issues/12091) | sessions/delete 导致 transcript 永久破损（P1） | 6 | OPEN | 高优先级数据丢失类 Bug |
| [#13191](https://github.com/QwenLM/qwen-code/issues/13191) | AgentDefinition 评审推迟项（19 条 Suggestion） | 6 | OPEN | Stage D8a PR #13142 的衍生追踪 |
| [#13122](https://github.com/QwenLM/qwen-code/issues/13122) | Agent Host 重登记后遗留有效凭据 | 5 | OPEN | 安全 Bug：401 后旧 host row 仍保留可用的 secret |
| [#13130](https://github.com/QwenLM/qwen-code/issues/13130) | Qwen Code Desktop 全部 workspace 变 untrusted | 5 | OPEN | Desktop 用户实际可用性问题，无清晰恢复路径 |

**社区反应**：
- 维护者高度活跃：在 50 条活跃 Issue 中，`yiliang114`、`wenshao`、`doudouOUC` 主导了大量 Managed Agent、token 治理、安全与测试相关讨论。
- "deferred / follow-up" 类 Issue 占比明显升高（#13187、#13191、#13133、#12860、#13189、#13251 等），反映当前进入 **多轮评审收敛期**，大量 Suggestion 被显式延迟。

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 作者 | 状态 | 要点 |
|----|------|------|------|------|
| [#13241](https://github.com/QwenLM/qwen-code/pull/13241) | fix(agents): 区分已接受 Host 结果与已终止 run | yiliang114 | OPEN | 解决 #13238：迟到的 Host 结果不再错误地修改终态，但允许累加 token 用量 |
| [#13218](https://github.com/QwenLM/qwen-code/pull/13218) | feat(managed-agent): dev:managed-agent 一键启动器 | wenshao | OPEN | 镜像 `dev:daemon`，TS 源码级启 Managed 双路径 WebShell，含轮换 token |
| [#13141](https://github.com/QwenLM/qwen-code/pull/13141) | docs(cli): 修正 Hosted Runtime Broker 选项说明 | Shxiao101 | OPEN | 移除 `--managed-runtime-broker-*` 的"保留/未实现"过期提示 |
| [#13243](https://github.com/QwenLM/qwen-code/pull/13243) | fix(cli): 限制 managed function-hook 模块求值 + 修正测试导入 | wenshao | OPEN | 修复 PR #13129 评审中两个未记录的 Critical 问题 |
| [#13244](https://github.com/QwenLM/qwen-code/pull/13244) | fix(core): 侧查询输出 token 按上下文窗口预算 | yiliang114 | OPEN | 解决 #13208 第一半：主路径外的窗口感知输出预算 |
| [#13174](https://github.com/QwenLM/qwen-code/pull/13174) | feat(managed-agent): 升级 Hosted Harness 至下一代（G3） | wenshao | OPEN | 实现 #12952 的 Steps 1+2：Hosted Session 不再被进程代数钉死 |
| [#13167](https://github.com/QwenLM/qwen-code/pull/13167) | feat(managed-agent): Managed session 工具迁移到 Runtime 工作者（M5a） | wenshao | OPEN | M5 切片首部分：Read/Write/Edit/前台 Shell 由 Runtime worker 执行 |
| [#13219](https://github.com/QwenLM/qwen-code/pull/13219) | fix(managed-agent): 重试循环引入终态预算 | wenshao | OPEN | 给异步重试 loop 增加 budget + terminal state，修复永久卡死的消息投影 |
| [#10916](https://github.com/QwenLM/qwen-code/pull/10916) | fix(core): 重复工具错误自动停轮 | yiliang114 | OPEN | 为 `recordToolResult` 增加错误指纹，触发 `LoopDetected` 终止 turn |
| [#13216](https://github.com/QwenLM/qwen-code/pull/13216) | feat(sdk-java): SpotBugs 高置信门禁 + CodeQL Java 扫描 + Maven dependabot | wenshao | CLOSED ✅ | Java SDK 首个工程护栏落地，#13185 的第一部分 |

> 已合入的 #12611（接受 `export const meta` 前注释）、#13090（工具输出落盘部署门）、#12939（IMAP/SMTP Email 通道）也是今日值得关注的进展。

---

## 📈 功能需求趋势

从近 24 小时活跃的 50 条 Issue 提炼，社区关注点集中在以下方向：

1. **Managed Agent / Managed Runtime 架构（热度最高）**  
   围绕 #12380 的 Stage G、M5a、D8a、M6 等切片，议题横跨 Session 历史外部化、写入围栏、Hosted Harness 进程代数升级、Runtime worker 执行工具。属于社区当前 **核心战略主线**。

2. **Token / 上下文窗口治理**  
   #12028（非对话上下文计费）、#13208 / #13244 / #13252（侧查询与主轮次输出预算）、#13251（内存审计）。开发者普遍意识到长上下文模型下"非对话"前缀造成的隐性成本。

3. **自动化与内存（Auto-memory / Extractor）**  
   #13004（no-op 后冷却）、#13201（Markdown 风格混用）、#13251（denylist 理由不透明）。Managed 自动内存的鲁棒性成为新增讨论焦点。

4. **桌面与 Web Shell UX**  
   #13175（Web Shell 快捷键）、#12943（自适应导航栏与 Live 设置合并）、#13130（Desktop 全 untrusted 灾难恢复）。

5. **安全 / 凭据 / 信任**  
   #13122（host 重登记遗留凭据）、#13130（trusted folder 误伤）。

6. **集成通道扩展**  
   #8281（Email 通道提案已关闭，对应实现见 PR #12939 已合）、#13220（Feishu 入站文件持久化测试覆盖）。

7. **CI / 工程化护栏**  
   #13078（CVE 失败）、#13216（SpotBugs + CodeQL + Dependabot）、#12650（yamllint/shellcheck 空列表硬失败）。

---

## 🧑‍💻 开发者关注点

- **重复评审收敛的疲劳信号**：大量 PR（#13187 36 条、#13191 19 条、#13133、#12860、#13189 等）以"follow-up"形式显式推迟 Suggestion。作者（@wenshao、@yiliang114）公开声明在 5 轮评审后只接受 Critical，体现严格的合并纪律，但也提示 **评审吞吐量正在成为瓶颈**。

- **数据完整性 / 持久层是 P1 痛点**  
  - #12091（sessions/delete 导致 transcript 永久破损）仍 OPEN，反映运行时与持久化层的耦合风险未完全解决。
  - #13184 指出 managed session stores 与 UI 投影层"默认无限增长"，#13219 是其首批修复。

- **窗口感知输出预算缺位**  
  - #13208 / #13252 明确指出 `defaultOutputCeiling` 与 `MIN_CLAMPED_OUTPUT_TOKENS` 在主轮次与侧查询上不一致，#13244 已先合一半。开发者诉求：**统一以"模型实际上下文窗口"为基准做预算**。

- **测试覆盖度诉求强烈**  
  - #13220（Feishu 入站持久化与离线回退）、#13191（AgentDefinition 衍生项）、#12650（CI 空文件列表检测）说明社区希望 **减少手工探查，把边界条件固化为门禁**。

- **错误提示 / 用户可见性**  
  - #12504（Linux 剪贴板提示错指根因）已关闭，#13130（Desktop 全 untrusted 无恢复路径）仍在跟进。开发者期望 **错误信息与恢复路径对齐**。

- **Java SDK 进入工程化阶段**  
  - #13216 合入意味着 Qwen Code Java SDK 已具备基础的静态分析与依赖更新护栏，下一步（#13185）将推进更完整的合规与质量门禁。

---

> 📊 **数据时间窗口**：2026-10-02 至 2026-10-03（基于 GitHub 最新更新排序）
> 📎 数据源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI 社区动态日报
**日期：2026-10-03**
**数据范围：Hmbown/Codewhale 仓库近 24 小时动态**

> 说明：本期日报数据来源于 `Hmbown/Codewhale`（与 DeepSeek-TUI 同源项目）。仓库今日无新版本发布，活跃度集中在 Issues 与 PR 的更新上。

---

## 1. 今日速览

今日社区呈现 **"功能集成 + 跨平台修复"** 双主线：核心 PR **#6815（v0.10.1）** 进入合入冲刺，正式集成 ChatGPT 官方登录与扩展能力；同时 MCP 服务器暴露工具失效（#6828）、Windows 进程清理异常（#6827）、FreeBSD CPU 占用回归（#6728）三项关键 Bug 进入 triage 阶段。依赖机器人同步推进 6 项 Rust 生态 crate 升级。

---

## 2. 版本发布

⏸ **过去 24 小时内无新 Release。** 下一个目标版本为 **0.10.1**（PR #6815），请关注后续合入进展。

---

## 3. 社区热点 Issues（8 条全部更新）

| # | Issue | 标题 / 关注点 | 状态 |
|---|---|---|---|
| 1 | [\#5316](https://github.com/Hmbown/Codewhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate 拆分** — FEAT-026 已于 10-01 合入（17 个 session commit），是 TUI 模块解耦的里程碑式 umbrella。评论 31 条，热度最高。 | OPEN |
| 2 | [\#6728](https://github.com/Hmbown/Codewhale/issues/6728) | **CPU 占用回归 v0.9.12→v0.10.0** — 三个版本 ELF 二进制分析显示空闲→中→重度恶化，FreeBSD 平台用户必关。 | OPEN |
| 3 | [\#6828](https://github.com/Hmbown/Codewhale/issues/6828) | **0.10.0: MCP 服务器工具完全不可见** — `tool_search` 返回空、`mcp connect` 无法附加到 live session，影响所有启用 MCP 的用户。 | OPEN（今日新建） |
| 4 | [\#6827](https://github.com/Hmbown/Codewhale/issues/6827) | **Windows npm 安装：杀 node.exe 即终止 Codewhale** — 缺少子进程隔离，连 agent 自己的 "stop node" 命令都可能误杀会话。 | OPEN |
| 5 | [\#6818](https://github.com/Hmbown/Codewhale/issues/6818) | **在官网托管完整的 Ratatui 组件浏览器** — 主页预览保真度 CI 已绿（wave 8d54130），本地 661/661 通过。 | OPEN |
| 6 | [\#6814](https://github.com/Hmbown/Codewhale/issues/6814) | **codewhale-ratatui 组件目录 + README Gallery 完成** — PR #8 已合入，所有 CI/Gallery workflow 通过。 | ✅ CLOSED |
| 7 | [\#6816](https://github.com/Hmbown/Codewhale/issues/6816) | **迁移至官方开源 Sign in with ChatGPT 协议** — Engine/CLI/TUI 已实现 OpenAI 官方预览版集成。 | OPEN |
| 8 | [\#6328](https://github.com/Hmbown/Codewhale/issues/6328) | **Schedule 列表 UI（watches + heartbeat）** — 被 Core cron 路由阻塞，含暂停/恢复、间隔渲染等验收点。 | OPEN |

---

## 4. 重要 PR 进展

### 🚀 功能与修复（核心）

| # | PR | 说明 |
|---|---|---|
| 1 | [\#6815](https://github.com/Hmbown/Codewhale/pull/6815) | **0.10.1 版本集成**：官方 ChatGPT 登录 + TS 工具/命令/hooks/prompts/state/skills 经审查后注入 Rust Engine，Rust 保留执行、权限、凭据、会话与事件权限。 |
| 2 | [\#6715](https://github.com/Hmbown/Codewhale/pull/6715) | **fix(auth)**：支持选择/显示/切换 ChatGPT 与 xAI 账号，使用量耗尽错误也带账号标识。 |
| 3 | [\#6817](https://github.com/Hmbown/Codewhale/pull/6817) | **feat(runtime-api)**：从快照中读取单个工具调用产生的变更——为 shell 命令的写入归因提供客户端可读接口。 |
| 4 | [\#6819](https://github.com/Hmbown/Codewhale/pull/6819) | **fix(cli)**：`config doctor` 对 HTTP(S) 协议名不再区分大小写，`to_ascii_lowercase()` 修复误判导致退出码 1 的问题。 |
| 5 | [\#6820](https://github.com/Hmbown/Codewhale/pull/6820) | **RFC**：评估将 `code_execution`(Python) 与 `js_execution`(Node.js) 合并至 Shell 工具，需维护者决策。 |

### 📦 依赖升级（机器人）

| # | PR | crate | 变更 |
|---|---|---|---|
| 6 | [\#6821](https://github.com/Hmbown/Codewhale/pull/6821) | **rmcp** 3.4.0 → 3.5.0 | MCP Rust SDK（与 #6828 修复直接相关） |
| 7 | [\#6825](https://github.com/Hmbown/Codewhale/pull/6825) | **dtolnay/rust-toolchain** | 工具链更新 |
| 8 | [\#6826](https://github.com/Hmbown/Codewhale/pull/6826) | **uuid** 1.26.0 → 1.26.1 | v7 counter 修复 |
| 9 | [\#6822](https://github.com/Hmbown/Codewhale/pull/6822) | **rio-vt** 0.5.26 → 0.5.28 | 终端渲染 |
| 10 | [\#6823](https://github.com/Hmbown/Codewhale/pull/6823) | **thiserror** 2.0.20 → 2.0.21 | 解析泛型 unit variant 修复 |

---

## 5. 功能需求趋势

从近 24 小时更新的 8 条 Issue + 11 条 PR 中可提炼三条主线：

1. **🔌 多 Provider 登录与账号管理** —— ChatGPT / xAI / DeepSeek 官方协议集成（#6816、#6715、#6815）成为最强烈的诉求，"多账号切换 + 用量归属"成为基础期望。
2. **🧩 TUI 架构解耦与可扩展能力** —— Crate 拆分（#5316）、Ratatui 组件目录与 Gallery（#6818/#6814）、Runtime API 工具归因（#6817）共同指向 **"Engine/UI/扩展"三层清晰边界**。
3. **🔧 Shell/工具收敛** —— RFC #6820 提议合并 Python/JS 解释器入口，与 #6328 的 Schedule UI、#6817 的命令写入归因一起，指向"以 Shell 为中心、其它工具下沉的简化范式"。

辅助趋势：MCP 协议稳定性（rmcp 升级 + #6828）、跨平台兼容性（FreeBSD #6728、Windows #6827）持续是隐性刚需。

---

## 6. 开发者关注点（高频痛点）

- **🪟 跨平台生命周期管理**：Windows npm 安装下父进程被杀导致子进程异常终止，缺乏 supervisor / detached 模式（#6827）。
- **📊 性能回归透明度**：用户已具备 ELF 二进制对比能力（#6728），希望每个版本附带 idle/load baseline。
- **🧪 MCP 工具可发现性**：启用 MCP 后 `tool_search` 返回空，会让模型"看不见"工具，文档中的 lazy trigger 假设被破坏（#6828）。
- **🔐 账号 & 用量可视化**：登录后无法看到"当前用的是哪个账号"，用量耗尽错误也不定位账号（#6715）。
- **⚙️ 配置校验鲁棒性**：协议大小写、URL 形态、配置 schema 的容错是 CLI 易被诟病的薄弱点（#6819）。
- **📦 调度/定时 UI 缺失**：watches + heartbeat 列表视图长期被 Core cron 阻塞，agent 用户表达明确诉求（#6328）。

---

> 📌 **今日值班建议**：关注 PR #6815 何时合入触发 v0.10.1 tag；同步 triage #6828（MCP 工具暴露）与 #6827（Windows 进程隔离）两项高优 Bug。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*