# AI CLI 工具社区动态日报 2026-10-02

> 生成时间: 2026-10-02 03:34 UTC | 覆盖工具: 9 个

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
**数据日期：2026-10-02 · 覆盖工具：8 款主流 AI CLI**

---

## 一、生态全景

当前 AI CLI 工具赛道已度过"基础功能可用"阶段，整体进入**架构收敛与差异化深耕并行期**：一方面，**Mods/插件框架**（Claude Code Mods、OpenCode V2、Qwen Code Stage D/G）成为各家扩展性的必答题；另一方面，**子 Agent 协作可靠性**（Claude、Gemini、Codex Dot）、**MCP 协议稳定性**（Claude、Pi、Copilot）、**会话恢复语义**（Qwen Stage G、Pi、Copilot）成为共同的工程攻坚方向。值得注意的是，**安全治理进入集中整改期**——Gemini CLI 单日 6 个 P1 安全 PR、Pi 治理 shrinkwrap 漏洞、Qwen Code 修复 OAuth 降级，反映出工具栈已从"快速试错"转向"企业可部署"的关键拐点。

---

## 二、各工具活跃度对比

| 工具 | Issues | PRs | Releases | 关键发布内容 | 综合活跃度 |
|------|--------|-----|----------|--------------|------------|
| **Claude Code** | 50 | 5 | 1 | v2.1.287（Mods 框架 + "You should know" 旁路 Agent） | 🔥🔥🔥🔥🔥 |
| **OpenAI Codex** | 50 | 20+ | 9 | rust-v0.160.0 稳定版 + 8 个 0.161/0.162 Alpha | 🔥🔥🔥🔥🔥 |
| **Gemini CLI** | 10+ | 13 | 1 | v0.64.0-nightly（ChatRecordingService delta 补丁） | 🔥🔥🔥🔥 |
| **GitHub Copilot CLI** | 37 | 1 | 3 | v1.0.91/91-1/92-0（沙盒 CA + MCP OAuth 修复） | 🔥🔥🔥 |
| **Qwen Code** | 10+ | 10 | 1 | v0.24.7-nightly（Code Mode + 权限审批修复） | 🔥🔥🔥🔥 |
| **OpenCode** | 10+ | 10+ | 0 | 无 Release，专注 V2 重构 + 新 Provider | 🔥🔥🔥 |
| **Pi** | 30+ | 10+ | 1 | **v1.0.0**（全屏 TUI 默认 + 代码精简） | 🔥🔥🔥🔥 |
| **DeepSeek TUI** | 6 | 15+ | 0 | v0.10.1 集成第二阶段（PR #6815） | 🔥🔥🔥 |
| **Kimi Code CLI** | — | — | — | 无活动 | — |

> **观察**：Codex 与 Claude Code 在 Issue 总量与版本发布节奏上领跑；Pi v1.0.0 作为主版本上线引发回归潮；DeepSeek TUI 在无新 Release 的情况下 PR 密度极高（多来自 v0.10.1 集成）。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|----------|----------|
| **子 Agent / 多 Agent 协作** | Claude Code、Gemini CLI、OpenAI Codex、Qwen Code | Claude 关注后台子 Agent 卡死（#83848）、teammate 接管竞态（#96226）；Gemini 关注 Generalist Agent 挂死（#21409）与 MAX_TURNS 误报 GOAL（#22323）；Codex 关注 Dot 委派任务工具继承丢失（#49458/#49551）；Qwen Code 聚焦 Stage D/G 托管会话的接管与写入者隔离 |
| **MCP 协议稳定性** | Claude Code、Pi、Copilot CLI | Claude 一方 MCP OAuth 持续 403（#92215）；Pi 多账户 OAuth 隔离、Atlassian scope 处理；Copilot CLI Azure MCP BrokenPipe（#4851）、Figma MCP 空返回（#5025） |
| **认证与安全治理** | Claude Code、Copilot CLI、Pi、Gemini CLI、Qwen Code | Claude 84 👍 请求 Passkey 登录（#84862）；Copilot OAuth 过度授权（#953）；Pi 治理 brace-expansion 高危漏洞（#10288）；Gemini 单日 6 个 P1 安全 PR；Qwen 修复 enrollment token 降级（#13123） |
| **会话恢复与持久化** | Qwen Code、Pi、Copilot CLI、Claude Code | Qwen Stage G 写入者隔离 + Turn 接管；Pi 剪贴板复制回归（#9688）、session 命名；Copilot macOS `.mcp-writer.binding` 过期致 CLI 完全不可用（#4998） |
| **成本/Token 优化** | Pi、Qwen Code、OpenCode、Gemini CLI | Pi 改用 OpenRouter 真实计费（#10286）；Qwen 延迟 Agent/Goal 发现（#13033）；OpenCode Provider capabilities 部分声明（#51365）；Gemini 引入 Decision Gate 快路径（#29482） |
| **Windows / 跨平台兼容** | OpenAI Codex、OpenCode、Copilot CLI、Gemini CLI | Codex Windows 渲染崩溃与启动卡死（#48377/#48938）；OpenCode Windows TUI PATH 截断（#37125）、Scoop 安装挂死（#38222）；Copilot Linux systemd-resolved DNS（#5027）；Gemini Wayland 浏览器失败（#21983） |
| **TUI 性能与渲染** | Pi、Claude Code、Copilot CLI | Pi 长 transcript 重绘风暴（#9255）；Claude xterm.js screenReaderMode 放大延迟（#84712）；Copilot 会话时间线 busy 状态清理 |

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | 企业级深度定制化 CLI | 重度开发者、平台团队 | **Mods 框架**为护城河，旁路 Agent（"You should know"）体现"主动提醒"设计哲学 |
| **OpenAI Codex** | 全平台多端一体化 | 需要 Windows/Mac/iOS/Web 一致体验的团队 | **Dot 委派工作流**是差异化主线，但跨端工具继承仍是最大短板 |
| **Gemini CLI** | Google 生态 + 安全先行 | 注重安全合规与多 Agent 编排的工程团队 | 单日 6 个 P1 安全 PR 集中进入评审，**Subagent Sprint** 推动多 Agent 成熟化 |
| **GitHub Copilot CLI** | GitHub 原生集成 | 企业用户、依赖 GitHub 生态的开发者 | **沙盒 CA 证书管理**（`copilot sandbox ca`）成为企业落地刚需 |
| **OpenCode** | Provider-agnostic 开放架构 | 多模型/本地化部署用户 | **V2 架构收尾期**（kitlangton 一人清理大量 V1 遗留），新增 Cohere、Vercel AI Gateway 原生 Provider |
| **Pi** | TUI 极致体验 + 配置工程 | 终端原住民、配置驱动开发者 | **JSON Schema 发布**（#9880）、统一包产物校验（#10197）体现 DX 优先 |
| **Qwen Code** | 托管 Agent + 企业可恢复性 | 多租户 SaaS / 团队协作场景 | **Stage B/D/G 三阶段并行**，聚焦"托管可恢复 + 可审计 + 可接管" |
| **DeepSeek TUI** | 高可定制 TUI + 插件生态 | 视觉敏感用户、插件作者 | **超时/资源管理系统性修复**（@asto18089 一人 5 PR），UI 组件图谱化推进 |

---

## 五、社区热度与成熟度评估

### 🔥 成熟稳定期（高活跃度 + 强生态）
- **Claude Code**：50 条 Issue 中 #91870（Mods）单议题 229 评论/130 赞，**1 个 Issue 即可催生一个版本特性**，社区-产品转化效率极高
- **OpenAI Codex**：稳定版 + 8 个 Alpha 同日发布，**版本管线工业化**，但 Dot/Windows 痛点暴露"广度优先"策略的代价

### 🚀 快速迭代期（架构演进 + 高破坏性）
- **Pi v1.0.0**：主版本上线 24h 内涌入 30+ Issue，**全屏 TUI 默认**触及老用户肌肉记忆，**典型"主版本税"**——破坏性变更需配套 UX 收尾
- **Qwen Code**：Stage B/D/G 并行推进，**评审积压严重**（典型 PR 一轮 19-36 条建议），说明规模化管理已成瓶颈
- **OpenCode**：kitlangton 单人 V2 清理集群（#52637/#52647/#52648 等），**核心维护者驱动**，需警惕关键人风险

### 🔧 工程深耕期（聚焦稳定性）
- **Gemini CLI**：从"功能堆砌"转向"质量打磨"，**安全 PR 集中爆发**反映进入合规收口期
- **GitHub Copilot CLI**：版本节奏密集但 PR 仅 1 条，**Issue 转 PR 的转化率偏低**，社区反馈进入产品路线图的通道需打通

### ⚠️ 静默期
- **Kimi Code CLI**：过去 24h 无活动，建议关注下个数据窗口确认是否持续

---

## 六、值得关注的趋势信号

### 📡 信号 1：扩展性框架从"插件"升级为"Mods/Stage"
Claude Code Mods、Qwen Code Stage D/G、Gemini Subagent Sprint 共同指向——**"可编排的 Agent 框架"正在取代"单 Agent CLI"成为新基线**。对开发者的参考：选型时应关注**Hook/回调粒度、配置 schema 化、生命周期可干预性**这三个维度，而非仅看工具数量。

### 📡 信号 2：成本可视化成为多 Provider 工具的胜负手
Pi #9980（OpenRouter 成本偏差 2-3 倍，70 👍 长期需求）、Qwen #12333（CI 缺 token 节省门禁）、OpenCode #52367（额度误报）——**当用户跨越多个 Provider 路由时，"目录价 vs 实际计费"的信任危机普遍存在**。开发者应优先选择**采用 Provider 上报 billed amount 而非目录价估算**的工具。

### 📡 信号 3：会话可恢复性 = 新一代可用性指标
Qwen Code Stage G（写入者隔离 + Turn 接管）、Claude Code 子 Agent idle 通知竞态、Copilot macOS `.mcp-writer.binding` 过期、Pi resume 后 tool result 重复回放——**"会话恢复"已从 nice-to-have 升级为生产可用性核心**。建议在评估工具时主动测试"网络中断 + 进程重启 + 长任务"三种场景。

### 📡 信号 4：安全治理进入"集中整改期"
Gemini 单日 6 个 P1 安全 PR、Pi 治理 shrinkwrap 漏洞、Claude Passkey 呼声、Qwen OAuth 降级修复——**安全已从被动响应转为主动治理**。对企业用户而言，应优先选择**有明确安全 PR 节奏、依赖供应链透明、认证机制现代**（Passkey/OAuth 优于长期 token）的工具。

### 📡 信号 5：Windows 仍是 AI CLI 的"暗礁"
Codex 渲染崩溃（#48377/#48938）、OpenCode PATH 截断（#37125）/Scoop 挂死（#38222）、Copilot Linux systemd-resolved（#5027）、Gemini Wayland（#21983）——**跨平台兼容是行业普遍短板**。Windows/Linux 用户应在选型时**优先验证目标平台是否有已知阻塞性 Issue**，而非默认"主流工具必定可用"。

### 📡 信号 6：TUI 性能成为"全屏模式"的隐性成本
Pi v1.0.0 全屏默认后 #9255（长 transcript 重绘风暴）、Claude #84712（screenReaderMode 放大延迟）——**全屏 TUI 在终端能力检测、长内容渲染、键盘焦点管理上的边界条件密集**。开发者若对响应延迟敏感，应关注工具是否提供**非全屏回退选项**（Pi 提供 `tuiMode: "regular"`）。

---

## 七、决策建议速查

| 优先级 | 推荐工具 | 理由 |
|--------|----------|------|
| **企业级 + 深度定制** | Claude Code | Mods 框架成熟，议题转化效率最高 |
| **多端一致 + Dot 委派** | OpenAI Codex | 全平台覆盖，但需容忍 Windows/Dot 已知问题 |
| **安全合规 + 多 Agent** | Gemini CLI | 安全 PR 节奏密集，Subagent Sprint 推进 |
| **GitHub 原生 + 企业沙盒** | GitHub Copilot CLI | v1.0.91 沙盒 CA 是企业刚需 |
| **多 Provider + 本地模型** | OpenCode | 自动发现本地端点（#6231，241 👍） |
| **TUI 体验 + 配置工程** | Pi | JSON Schema + 包产物校验，DX 标杆 |
| **托管 Agent + 团队协作** | Qwen Code | Stage B/D/G 满足多租户可恢复/可审计 |
| **TUI 高可定制 + 插件生态** | DeepSeek TUI | 超时管理系统性修复进行中 |

---

> **报告说明**：本报告基于 2026-10-02 当日各仓库公开 Issue/PR/Release 数据，时间窗口存在偏差的项目已注明。建议结合多日趋势与各工具的 Release Notes 综合决策。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-10-02 | 样本：50 PRs + 50 Issues**

---

## 一、热门 Skills 排行（按热度筛选）

> 注：原始数据中 PR 评论数字段为 undefined，以下排行综合**内容影响力 + 最近活跃度 + 解决的现实痛点**遴选。

| # | Skill（PR） | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **proofcore-contract-auditor** ([#1771](https://github.com/anthropics/skills/pull/1771)) | Web3 智能合约静态分析 + 将审计证明锚定到 TON 区块链 | Solidity/Rust 合约审查、零存储 Merkle 协议公证 | OPEN |
| 2 | **notion-spec-to-implementation** ([#1245](https://github.com/anthropics/skills/pull/1245)) | 把产品/技术 Spec 自动拆解为 Notion 可执行任务 | 自动生成验收标准、进度跟踪，最近仍持续更新（9-30） | OPEN |
| 3 | **quantitative-resume-auditor** ([#1245](https://github.com/anthropics/skills/pull/1241)) | 简历量化指标审计（成果数字化、影响力评估） | 与 #1245 同 PR 提交，简历生成类高频需求 | OPEN |
| 4 | **md2video-audio** ([#1703](https://github.com/anthropics/skills/pull/1703)) | Markdown → MP4 视频，零成本 + 真人语音合成 | Marp 渲染 + TTS 工作流，零预算内容生产 | OPEN |
| 5 | **AWT (AI Watch Tester)** ([#822](https://github.com/anthropics/skills/pull/822)) | 给 Claude 视觉 + 浏览器控制做零代码 E2E 测试 | 持续维护（9-19），UI 自动化替代方案 | OPEN |
| 6 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | 全栈测试方法论：Testing Trophy + React 测试 + 合约/E2E | 最近活跃（9-21），统一测试规范诉求 | OPEN |
| 7 | **blast-radius** ([#1776](https://github.com/anthropics/skills/pull/1776)) | 批量/破坏性写入前的世界影响清单 | 填补"行正确 ≠ 操作正确"的执行盲区 | OPEN |
| 8 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | AI 生成文档的排版质量控制（孤行/寡行/编号错位） | 暴露了"AI 文档几乎都不好看"的系统性痛点 | OPEN |

---

## 二、社区需求趋势（按 Issue 评论数排序）

| 趋势类别 | 代表 Issue | 核心诉求 |
|---|---|---|
| 🔒 **信任边界 / 命名空间安全** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬) | 社区 Skill 混用 `anthropic/` 命名空间冒充官方，存在权限提升风险——**当前最高呼声** |
| 🏢 **企业级分发** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬) | Claude.ai 组织内 Skill 一键共享，替代手动 .skill 文件流转 |
| 🧪 **评测可靠性** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬) | `run_eval.py` 中 `claude -p` 触发率 0%，评测框架失效 |
| 🧠 **Agent 记忆与符号化** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 💬) | `compact-memory`：长时 Agent 用符号化记法压缩自身状态，节省 context |
| 🧷 **Skill 自维护与质量** | [#202 (已关闭)](https://github.com/anthropics/skills/issues/202) (8 💬) | skill-creator 应从"开发者文档"重写为"操作型 Skill"，减少 token 浪费 |
| 🛡️ **Agent 治理 / 安全模式** | [#412 (已关闭)](https://github.com/anthropics/skills/issues/412) (6 💬) | 策略执行、威胁检测、信任评分、审计轨迹 |
| 📦 **插件去重** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬) | `document-skills` 与 `example-skills` 装出重复 Skill，污染 context |
| 💣 **Context 溢出** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬) | `claude-api` Skill 一次性注入 ~156k tokens，单次工具调用爆窗 |
| 🔐 **Skill 内部 XSS** | [#1394](https://github.com/anthropics/skills/issues/1394) (4 💬) | skill-creator 的 eval-viewer 存在显示路径 XSS |
| 🧪 **MCP 评测假阳性** | [#1390](https://github.com/anthropics/skills/issues/1390) (4 💬) | mcp-builder 把所有工具结果吞为伪造错误，评测永远 0/N |
| 🛡️ **Reasoning 质量门** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬) | 三门管线：预校准 → 对抗评审 → 交付验证 |
| ☁️ **云平台集成** | [#29](https://github.com/anthropics/skills/issues/29) (4 💬) | AWS Bedrock 上如何使用这些 Skill 的指导长期缺位 |

**抽象出的五大需求方向**：
1. **AI 测试与质量保障**（testing-patterns, AWT, Reasoning Quality Gate, mcp-builder 评测）
2. **Web3 / 链上工作流**（proofcore-contract-auditor）
3. **企业级分享与治理**（命名空间安全、org sharing、agent-governance）
4. **AI 内容生产**（md2video-audio、document-typography、resume-auditor）
5. **Agent 自我管理**（compact-memory、blast-radius、Reasoning Quality Gate）

---

## 三、高潜力待合并 Skills（活跃度高 + 仍未落地）

| Skill | PR | 最后活跃 | 亮点 |
|---|---|---|---|
| **notion-spec-to-implementation** | [#1245](https://github.com/anthropics/skills/pull/1245) | 2026-09-30 | 持续迭代，最近仍有 PR 更新 |
| **Update claude-api (retired models)** | [#1607](https://github.com/anthropics/skills/pull/1607) | 2026-09-28 | 修复 #1603 文档过期，低风险快合并候选 |
| **fix skill-creator / package_skill.py** | [#1681](https://github.com/anthropics/skills/pull/1681) | 2026-09-27 | 直接执行可工作化，治理类改进 |
| **fix(skill-creator): trigger evals isolation** | [#1298](https://github.com/anthropics/skills/pull/1298) | 2026-09-16 | 解决 Windows / 子进程 / 假阴性 评测 bug |
| **pyxel（复古游戏）** | [#525](https://github.com/anthropics/skills/pull/525) | 2026-09-22 | 长尾但稳定维护，可视化/小游戏领域增量 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-09-21 | 与社区最强需求对齐 |
| **AWT** | [#822](https://github.com/anthropics/skills/pull/822) | 2026-09-19 | E2E 视觉自动化 |
| **mcp-builder fix (mcp>=2)** | [#1742](https://github.com/anthropics/skills/pull/1742) | 2026-09-29 | 跟进 MCP SDK 升级，紧迫性高 |
| **fix(docx) LibreOffice 超时/输出校验** | [#1792](https://github.com/anthropics/skills/pull/1792) | 2026-09-25 | 把"误报成功"显式化 |

> **关键观察**：所有展示的 20 条 PR 均为 **OPEN** 状态，仓库合并节奏可能受 Anthropic 内部审核制约；社区侧的"修复 + 新功能"两路 PR 同步推进。

---

## 四、Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"信任与可靠性"**：#492（命名空间冒充）、#1394（XSS）、#1487（context 爆窗）、#1390（评测假阳性）、#556（0% 触发率）—— 五个高评论 Issue 全部指向**"Skill 不知道自己不可信"** 这一系统性问题，社区迫切需要一个**统一的 Skill 信任标识 / 安全沙箱 / 评测可信度**机制。

---

### 附：链接索引
- 仓库主页：[anthropics/skills](https://github.com/anthropics/skills)
- 最高呼声 Issue：[#492](https://github.com/anthropics/skills/issues/492)
- 最新活跃 PR：[#1245](https://github.com/anthropics/skills/pull/1245)、[#1742](https://github.com/anthropics/skills/pull/1742)

---

# Claude Code 社区动态日报 · 2026-10-02

## 📌 今日速览

今日最大动态是 **v2.1.287 版本正式发布**，引入全新扩展机制 **Claude Mods**——插件可修改更深层行为，并附带一个内置的 "You should know" 旁路 Agent，用于在 Claude 或用户可能忽略时主动提醒。社区焦点仍集中在 Mods 扩展性议题（#91870，229 条评论）与 GitHub 连接器回归性故障（#71542）上，认证、IDE 集成与子 Agent 稳定性仍是高优关注方向。

---

## 🚀 版本发布

### v2.1.287（2026-10-02）

**核心更新：Claude Mods（插件深度行为修改）**

- **Mods 框架上线**：插件（plugins）现在可修改 Claude Code 的更深层行为，开启新一轮扩展性能力。
- **内置 Mod：`You should know`**（"你可能想知道"）：一个旁路 side agent 在后台持续观察，发现 Claude 或用户可能忽略的问题时主动提醒。
  - 启用方式：`/plugin enable cc-plugin-you-should-know@builtin`
  - 适用场景：首次方（first-party）会话 + 启用遥测的环境

> 🔗 Release 链接：[anthropics/claude-code v2.1.287](#)

---

## 🔥 社区热点 Issues

| # | Issue | 评论/👍 | 重要性 |
|---|-------|--------|--------|
| 1 | **#91870** [enhancement] Mods - make Claude 10x more extensible | 229 / 👍130 | ⭐⭐⭐ |
| 2 | **#71542** [bug] GitHub 连接器：链接成功但无法读取任何仓库内容（回归性故障） | 68 / 👍64 | ⭐⭐⭐ |
| 3 | **#84862** [enhancement] 全平台 Passkey（WebAuthn）登录 | 10 / 👍84 | ⭐⭐⭐ |
| 4 | **#92215** [bug] Claude Design 一方 MCP 持续 403，OAuth 流程失效 | 11 / 👍6 | ⭐⭐ |
| 5 | **#85624** [bug] VS Code 扩展 2.1.226：worktree 会话重启后无法在历史搜索中找到 | 10 / 👍2 | ⭐⭐ |
| 6 | **#83848** [bug] 后台子 Agent 间歇性卡死，无最终文本但状态显示 completed | 9 / 👍0 | ⭐⭐ |
| 7 | **#78537** [enhancement] 组织级默认共享已发布 Artifact | 7 / 👍16 | ⭐⭐ |
| 8 | **#98184** [bug] 网络切换后下次请求在死连接上挂起 184 秒才重试（Linux） | 5 / 👍0 | ⭐ |
| 9 | **#98189** [bug] Auto Mode 分类器误拦 Skill allowed-tools 与用户 Skills 编辑 | 3 / 👍0 | ⭐ |
| 10 | **#94672** [enhancement] 持久化 monitor 配置被意外移除 | 3 / 👍4 | ⭐ |

**重点说明：**

- **#91870 Mods 扩展性** —— 今日最热门议题，130 赞 229 评论。维护者 poteat 持续发布社区更新（最新 10-01），承认扩展性是核心需求并承诺 N 周内交付。是 v2.1.287 Claude Mods 框架的直接源头。
- **#71542 GitHub 连接器回归** —— 高赞高评论严重 Bug，账号级别（公开/私有）均无法读取内容，已有 68 条评论仍未官方修复。
- **#84862 Passkey 登录** —— 高赞（84 👍）低评论（10），社区对无密码登录呼声强烈，覆盖所有终端。

🔗 全部 Issue 列表：[Issues 页面](https://github.com/anthropics/claude-code/issues)

---

## 🛠 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| 1 | **#94847** [OPEN] diff: 首个编辑仅在有可列文件时才打开面板 | OPEN | 由 bcherny 提交：diff 面板改为延迟打开，仅在首次 Edit/Write/NotebookEdit 命中实际可跟踪文件时显示，避免在 worktree 外、忽略文件等场景下出现空面板。 |
| 2 | **#98018** [CLOSED] mods: 回滚两项变更（agents-md 截断读取、diff 强制色彩） | CLOSED | poteat：回滚 #96363 与 #96364，恢复 agents-md 与 diff mods 的早期行为。 |
| 3 | **#98555** [CLOSED] diff: /diff 对话框打开其列出的每个文件，关闭时无输出 | CLOSED | poteat：/diff 对话框中每个列出文件均能打开其 diff，关闭时不再静默无输出；修复编辑前文件、测试/生成文件（如 lockfile）残留问题。 |
| 4 | **#16632** [CLOSED] 修复 "该命令使用需审批的 shell 操作符" | CLOSED | ian：将 ralph-loop 初始化从 Markdown 代码块迁移到功能性 Bash 工具调用，修复旧版 `!` 前缀代码块被引擎视为展示性建议的问题。 |
| 5 | **#62592** [CLOSED] 更新 security-guidance 插件 | CLOSED | mhegazy：仅更新 README.md。 |

> 今日 PR 数量较少（5 条），且 3 条已快速关闭，说明维护团队在快速迭代 Mods 与 diff 子系统，闭环节奏快。

🔗 PR 列表：[anthropics/claude-code/pulls](https://github.com/anthropics/claude-code/pulls)

---

## 📈 功能需求趋势

基于今日 Issues 数据提炼，社区关注的功能方向按热度排序：

| 排名 | 方向 | 关键 Issue | 趋势判断 |
|-----|------|-----------|---------|
| 1 | **扩展性 / Mods 插件框架** | #91870（229 评论）、v2.1.287 发布 | 🔥🔥🔥 官方已落地 |
| 2 | **身份认证现代化** | #84862 Passkey（84 👍） | 🔥🔥🔥 用户期望强烈 |
| 3 | **IDE 集成（VS Code）** | #85624、#81024（worktree 会话） | 🔥🔥 体验短板 |
| 4 | **MCP 协议稳定性** | #92215、#88128、#94880 | 🔥🔥 生态扩张痛点 |
| 5 | **后台 / 子 Agent 可靠性** | #83848、#96226、#82858 | 🔥🔥 多 Agent 协作核心障碍 |
| 6 | **网络 / 连接韧性** | #98184、#71542 | 🔥 可靠性短板 |
| 7 | **Artifact / 共享工作流** | #78537、#81410、#82551 | 🔥 团队协作刚需 |
| 8 | **桌面端 UI 体验** | #90425、#98863、#89110 | 中等关注 |

---

## 🧑‍💻 开发者关注点（痛点与高频需求）

1. **Mods 是头等大事** —— 单一议题 229 评论 + 130 赞，并直接催生 v2.1.287。开发者希望 Claude Code 不止是 CLI，而是一个可被深度定制的工作流框架。

2. **GitHub 集成仍脆弱** —— 链接仓库成功却读不到任何内容（#71542）属严重回归，且影响公开/私有仓库全覆盖，已发酵 3 个月无解决方案。

3. **多 Agent 协作仍有可靠性缝隙**：
   - 后台子 Agent 静默卡死（#83848）
   - Lead 会话在 teammate 同意 shutdown 后神秘退出（#96226）
   - Agent idle 通知与 SendMessage 竞态，消息积压未送达（#82858）

4. **VS Code 体验细节拖后腿**：worktree 会话重启后失踪（#85624）、扩展硬编码 `includeWorktrees: false`（#81024）。

5. **认证体验被诟病**：84 赞请求 Passkey 登录，反映开发者对当前认证流程的普遍不满。

6. **TUI/渲染性能敏感**：#84712 定位到 `xterm.js screenReaderMode` 与 fullscreen 全视口重绘的组合放大了 VS Code 终端延迟，根因清晰。

7. **桌面端折叠问题频发**：用户多次报告桌面端将工具调用之间的 assistant 文本折叠到 "Ran N commands" 之下（#90425、#98863），使 Claude 写的中间思考不可见。

8. **小语种 / CJK 边缘场景**：日文 Markdown 中 `**「重要」**` 因 CommonMark §6.2 左右定界规则被误解析（#89827），暴露国际化细节仍需打磨。

---

> 📅 数据窗口：2026-10-01 ~ 2026-10-02（GMT）
> 📊 覆盖：50 条更新 Issues · 5 条 PR · 1 个 Release
> 🔗 仓库：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-02**

---

## 一、今日速览

今日 Codex 仓库发布了 `rust-v0.160.0` 稳定版，同步推出 8 个 0.161/0.162 系列 Alpha 预发布版本，开发节奏密集。社区层面，"Dots 委派任务"在 Computer Use 与浏览器工具上的兼容性问题、Windows 桌面端反复出现的渲染崩溃与启动卡死，仍是开发者反馈最集中的痛点；一条关于"使用额度重置后自动恢复 CLI 会话"的长期高赞需求贴累计已达 70 👍，持续引发共鸣。

---

## 二、版本发布

### 🔖 rust-v0.160.0（稳定版）
[Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.160.0)

值得关注的更新：

| 功能 | 说明 | PR |
|---|---|---|
| 任务历史键盘可达 | 在 Agent Command Center 中通过键盘可访问的"Show more"动作浏览更早的任务 | [#49106](https://github.com/openai/codex/issues/49106) |
| Linux X11 中键粘贴 | 在支持的本地 Linux X11 终端全屏模式下，可选中文本并通过鼠标中键粘贴 | [#49112](https://github.com/openai/codex/issues/49112) |
| 项目外启动会话 | 支持使用 workspace 默认配置在项目目录外启动会话 | — |

### 🧪 Alpha 预发布
- `rust-v0.162.0-alpha.2` / `alpha.1`
- `rust-v0.161.0-alpha.13` / `12` / `11` / `9` / `8` / `7`

> 短时间内高频次的 Alpha 发布，暗示 0.161 / 0.162 在 subagent、TCP 隧道、Guardian V2 等方向有较密集的内测变更。

---

## 三、社区热点 Issues

> 选取标准：评论数、点赞数与功能代表性综合排序

1. **[Windows] dot 启动的本地任务缺少 Computer Use 工具** [#49458](https://github.com/openai/codex/issues/49458)
   21 评论 / 13 👍。同一台机器上普通本地 Codex 会话可正常使用 Computer Use，但以 dot 前缀启动的任务丢失该工具集，是 Dot 与本地任务之间权限/工具继承路径的典型问题。

2. **功能请求：用量额度重置后自动恢复 CLI 会话** [#21073](https://github.com/openai/codex/issues/21073)
   16 评论 / **70 👍**。错误信息已经告知了重置时间，建议在用户离线时自动排队恢复任务，长期高需求。

3. **[Windows] 26.924.2738.0 后反复渲染崩溃、白屏与输入卡顿** [#48938](https://github.com/openai/codex/issues/48938)
   12 评论。Pro 20x 订阅用户被严重影响，反映出 9 月底 Windows 桌面更新存在较严重的回归风险。

4. **[Windows][dot/Work] Computer 任务缺浏览器/桌面工具** [#49488](https://github.com/openai/codex/issues/49488)
   11 评论。与 #49458 同源，MCP 启动失败 + follow-up 路径错误双重叠加，影响 Work/ChatGPT 商业订阅用户的 dot 工作流。

5. **[Windows] 更新后启动无限转圈、bundle 版本 undefined** [#48377](https://github.com/openai/codex/issues/48377)
   10 评论。Windows 桌面端无法进入主界面、About 对话框都不可达，启动框架日志卡死，社区对自检/降级通道呼声强烈。

6. **[Codex Desktop] GPT-5.6 Sol / GPT-6 Astra 对无害 Prompt 返回 invalid_prompt** [#47041](https://github.com/openai/codex/issues/47041)
   9 评论。新一代模型在分类器侧过于敏感，影响日常对话质量。

7. **VS Code 扩展在更新后间歇性丢失提交消息** [#49988](https://github.com/openai/codex/issues/49988)
   7 评论 / 7 👍。Enter 提交后 composer 被清空但消息未进入会话，多次重试才能成功，IDE 集成稳定性问题。

8. **[macOS] Dots 委派任务缺 Chrome 工具** [#49551](https://github.com/openai/codex/issues/49551)
   7 评论。手创建的 Chat 中 Chrome 可用，dot 委派任务却缺少 `node_repl js` 等关键工具，问题与 #49458、#49488 同根。

9. **ChatGPT Mac 桌面 app 在会话进行中意外返回起始页** [#45701](https://github.com/openai/codex/issues/45701)
   6 评论。会话状态在 app 进程未退出时被重置，怀疑为渲染层状态丢失。

10. **[Dots][Mac] 任务创建 UNKNOWN、断连通知陈旧、Luna schema 失败** [#50127](https://github.com/openai/codex/issues/50127)
    6 评论。dot 端与云端任务系统的多类错误码并存，反映 Dot 后端在协议层尚未完全收敛。

---

## 四、重要 PR 进展

| PR | 主题 | 关键内容 |
|---|---|---|
| [#50162](https://github.com/openai/codex/pull/50162) | 限制 exec-server 进行中的文件打开数 | 修复每连接 128 句柄限制未覆盖"挂起打开"导致的资源泄漏 |
| [#50148](https://github.com/openai/codex/pull/50148) | 在 TUI 暴露 managed worktree 工具 | 受信任本地项目可启用 `create_worktree` / `list_worktrees` 等 MCP 工具 |
| [#50140](https://github.com/openai/codex/pull/50140) | TUI 权限快捷方式改用服务器权限目录 | 与 picker 一致地遵循模型特定的 auto-review 规则 |
| [#50131](https://github.com/openai/codex/pull/50131) | `codex tcp-tunnel --diagnostics-json` | 新增脱敏的 NDJSON 诊断输出，便于排查隧道启动与连接故障 |
| [#50129](https://github.com/openai/codex/pull/50129) | 保留 Windows 远程 MCP 服务器环境变量 | 修复 Unix 启动 Windows 端 MCP 时 allowlist 误过滤系统变量的问题 |
| [#50128](https://github.com/openai/codex/pull/50128) | 暴露当前轮次的"下一步所选模型" | 客户端可读取 turn 实际使用模型 slug，区别于未来 turn 的设置 |
| [#50113](https://github.com/openai/codex/pull/50113) | 新增 `codex-cloud-client` 原生 gRPC 客户端 | 为云端 thread resume / attach 提供可复用 Rust 客户端 |
| [#50112](https://github.com/openai/codex/pull/50112) | 统一 TUI 加载动画与帧调度 | 集中到 `tui/src/motion.rs`，支持 reduced-motion 静态字形 |
| [#50109](https://github.com/openai/codex/pull/50109) | 全屏 composer 受限并可滚动 | 长 prompt 也能浏览，远程图片附件保留可编辑行 |
| [#50105](https://github.com/openai/codex/pull/50105) | 重构 chat composer footer 逻辑 | 抽离到 `footer_state.rs`，统一模式解析与高度计算 |

> 全部上述 PR 状态显示为 CLOSED（合入），涉及权限/工作流/TUI 体验/gRPC 客户端四大方向，与近两个 Alpha 版本的功能面高度吻合。

---

## 五、功能需求趋势

通过对全部 Issues 的标签与摘要归纳，社区关注点集中在以下方向：

| 方向 | 趋势表现 | 代表 Issue |
|---|---|---|
| **Dot / 委派工作流** | 工具继承、跨端任务可见性、cloud computer 不可用 | [#49458](https://github.com/openai/codex/issues/49458)、[#49551](https://github.com/openai/codex/issues/49551)、[#50127](https://github.com/openai/codex/issues/50127)、[#50136](https://github.com/openai/codex/issues/50136) |
| **Windows 桌面稳定性** | 渲染崩溃、启动卡死、白屏、白屏后 bundle undefined | [#48377](https://github.com/openai/codex/issues/48377)、[#48938](https://github.com/openai/codex/issues/48938)、[#50156](https://github.com/openai/codex/issues/50156) |
| **IDE 集成（VS Code）** | Composer 消息丢失、提交可靠性 | [#49988](https://github.com/openai/codex/issues/49988) |
| **CLI 会话与额度自动化** | 用量耗尽自动恢复、长时间任务排队 | [#21073](https://github.com/openai/codex/issues/21073) |
| **新模型行为调优** | GPT-5.6 Sol / GPT-6 Astra 分类过严 | [#47041](https://github.com/openai/codex/issues/47041) |
| **会话/标签 UX** | 持久化标签、ChatGPT 项目侧边栏同步、Mac 端状态重置 | [#45701](https://github.com/openai/codex/issues/45701)、[#48992](https://github.com/openai/codex/issues/48992)、[#50161](https://github.com/openai/codex/issues/50161) |
| **Worktree / 多 agent 工作流** | 围绕 subagent、动态工具继承的细粒度能力 | [#50082](https://github.com/openai/codex/pull/50082)、[#49085](https://github.com/openai/codex/issues/49085) |

---

## 六、开发者关注点

综合所有反馈，开发者最强烈的诉求集中在以下方面：

1. **跨端 Dot 体验的一致性**。dot 委派任务在桌面、Web、iOS、远程节点之间的工具集、会话可见性、消息可达性存在大量"看着一样、实际行为不同"的问题（[#50127](https://github.com/openai/codex/issues/50127)、[#50136](https://github.com/openai/codex/issues/50136)、[#50157](https://github.com/openai/codex/issues/50157)、[#49997](https://github.com/openai/codex/issues/49997)）。

2. **Windows 桌面端的可靠性回归**。近两周多个版本出现渲染崩溃、启动卡死、白屏等回归，但缺少明确的"如何本地回滚"通道与诊断脚本（[#48377](https://github.com/openai/codex/issues/48377)、[#48938](https://github.com/openai/codex/issues/48938)、[#50156](https://github.com/openai/codex/issues/50156)）。

3. **CLI 长任务的"无人值守"能力**。用量耗尽、连接失败、用户离场都会让长任务中断。auto-resume 这条需求单贴已达 70 👍，是当前呼声最高的纯功能请求。

4. **VS Code 扩展的提交可靠性**。Composer 清空但消息未进入会话、需多次重试才能成功（[#49988](https://github.com/openai/codex/issues/49988)），直接影响开发者最日常的使用路径。

5. **新模型行为调优**。GPT-5.6 Sol / GPT-6 Astra 的内容分类器在 Codex Desktop 中存在过严倾向（[#47041](https://github.com/openai/codex/issues/47041)），建议提供更细粒度的"任务类型豁免"配置。

6. **会话标识与组织**。开发者希望拥有持久化标签、ChatGPT 项目在桌面端侧边栏的同步能力（[#48992](https://github.com/openai/codex/issues/48992)、[#50161](https://github.com/openai/codex/issues/50161)、[#50159](https://github.com/openai/codex/issues/50159)），多会话并行工作流仍是高频痛点。

---

> 报告基于 2026-10-02 过去 24 小时 GitHub 公开数据生成，覆盖 50 条 Issues 与 50 条 PR 摘要（每类取热度 Top 30 / Top 20 详列）。完整数据请参考 [openai/codex](https://github.com/openai/codex)。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-10-02**

---

## 📌 今日速览

Gemini CLI 今日发布 nightly 版本 **v0.64.0-nightly.20261002.gc9096a847**，主要修复了 `ChatRecordingService` 的 delta 补丁逻辑与 CLI 状态的原子持久化。社区讨论焦点高度集中在 **Subagent 子智能体体系的稳定性**（如 MAX_TURNS 后误报为 GOAL success、generalist agent 挂死、Browser Agent 配置失效等高优 Bug），同时 **安全相关 PR 集中爆发**——包含路径穿越、Git 参数校验、OAuth iss 校验、沙箱 shell 注入等多个 P1 修复进入评审。

---

## 🚀 版本发布

### v0.64.0-nightly.20261002.gc9096a847
- 🔧 **fix(core)**: `ChatRecordingService` 改用 append-only delta 补丁与有界历史窗口，减少上下文膨胀并保留稳定回放 ([#29568](https://github.com/google-gemini/gemini-cli/pull/29568))
- 🔧 **fix(cli)**: 状态改为原子持久化，配置损坏时从备份自动恢复 (@urielefrenvirtusa)

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 评论 | 要点 |
|---|---|---|---|---|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 触发 MAX_TURNS 后仍上报 GOAL success | **P1** | 13 | 影响 `codebase_investigator` 等子智能体，导致中断被静默吞掉，标签 `need-retesting` 说明已进入回归阶段 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist Agent 严重挂死 | **P1** | 8 | 用户反馈 defer 到 generalist agent 后最长挂死 1 小时，简单建目录都失败，👍8 是今日最高赞同 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 零依赖 OS 沙箱 + 后执行意图路由 | P2 | 9 | 战略级提案：让 Gemini 3 释放原生 bash 偏好（grep/sed/awk），同时通过沙箱保证安全 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不主动使用 skills/sub-agents | P2 | 7 | 用户痛点高：自定义 gradle/git skills 在没有显式指令时基本被忽略 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知文件读取/搜索/映射评估 | P2 | 7 | EPIC 级别议题，追踪 tilth/glyph/AST-grep 等工具对 token 与精度的提升潜力 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent 忽略 settings.json 覆盖 | P2 | 4 | `AgentRegistry` 合并了配置，但 Browser Agent 运行时未生效，`maxTurns` 等参数失效 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser Agent 锁恢复与会话接管 | P3 | 4 | 提议将 fail-fast 改为 resilient session takeover，处理 persistent 模式下的孤儿子进程 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent 在 Wayland 下失败 | **P1** | 4 | Linux Wayland 用户无法使用浏览器子智能体 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | symlink 形式的 agent 文件不被识别 | P2 | 4 | `~/.gemini/agents/` 下的符号链接无法加载，对 dotfiles 用户不友好 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 工具数 > 128 即报 400 | P2 | 3 | 工具注册量突破阈值后整会话不可用，需 scope-aware 的工具裁剪策略 |

---

## 🛠 重要 PR 进展

| # | PR | 类型 | 价值 |
|---|---|---|---|
| [#29492](https://github.com/google-gemini/gemini-cli/pull/29492) | **安全**：沙箱构建去除 shell 插值 | P1/s | `BUILD_SANDBOX=1` 下 `gcRoot` 与 Dockerfile 路径中含 shell 元字符可被利用，现改为数组式 `execSync` |
| [#29476](https://github.com/google-gemini/gemini-cli/pull/29476) | **修复**：交互模式 Enter 卡顿 | P1 | 解耦 IDE companion 集成下用户确认事件与 IDE 事件发布，解决 #23297 工具确认提示无响应 |
| [#29491](https://github.com/google-gemini/gemini-cli/pull/29491) | **CI 安全**：patch release 写入权限校验 | P1 | 任意登录用户可对已合并 PR 触发 `/patch`，现增加显式 write 权限校验 |
| [#29490](https://github.com/google-gemini/gemini-cli/pull/29490) | **修复**：resume 会话工具响应重复 | P1 | 解决 `-r` resume 后 tool result 被回放两次的 bug（#29365） |
| [#29489](https://github.com/google-gemini/gemini-cli/pull/29489) | **模型**：Flash-Lite 关闭 thinking=HIGH | P2 | 新增 `chat-base-3-flash-lite` base + `thinkingBudget: 0`，避免轻量模型继承昂贵 thinking 级别 |
| [#29488](https://github.com/google-gemini/gemini-cli/pull/29488) | **安全/协议**：MCP OAuth 校验 RFC 9207 iss | P1 | `/mcp auth` 在不返回 iss 的 AS 上失败（#29477），按 `authorization_response_iss_parameter_supported` 严格化 |
| [#29480](https://github.com/google-gemini/gemini-cli/pull/29480) | **安全**：Windows git 参数越权 | P1 | 拦截 `git diff --output=<path>` 等写盘标志的 prompt injection 绕过 |
| [#29481](https://github.com/google-gemini/gemini-cli/pull/29481) | **安全**：扩展配置不可读时不再全量开启 | P1 | `extension-enablement.json` 损坏时静默重新启用所有扩展并清空文件，属于静默提权 |
| [#29479](https://github.com/google-gemini/gemini-cli/pull/29479) | **安全**：checkpoint 路径穿越 | P1 | 限制 `deleteCheckpoint`/`loadCheckpoint` 只能作用于 checkpoints 目录内，修复 tag 形式的 `../` 逃逸 |
| [#29482](https://github.com/google-gemini/gemini-cli/pull/29482) | **新功能**：可选 Decision Gate 快路径 | XL | 在主模型前置数十毫秒级"轻量判定器"，对简单消息跳过完整推理，潜在显著降本 |
| [#29596](https://github.com/google-gemini/gemini-cli/pull/29596) | **功能**：ACP 权限请求包含 MCP server 名称 | - | 让 ACP 客户端区分同名 MCP 工具所属 server |
| [#29597](https://github.com/google-gemini/gemini-cli/pull/29597) | **沙箱**：gVisor/runsc IPC fallback | P2 | gVisor Netstack 阻断 loopback，新增 stdio IPC fallback 支持 |

---

## 📈 功能需求趋势

从近期 Issue/PR 中可以提炼出社区最关注的五大方向：

1. **🧠 Subagent 体系成熟化** —— 这是当前最显著的工程焦点。围绕 [Local Subagent Sprint 1](https://github.com/google-gemini/gemini-cli/issues/20195)、子智能体轨迹共享 [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)、并行协作 [#18287](https://github.com/google-gemini/gemini-cli/issues/18287)、settings.json 发现 [#18285](https://github.com/google-gemini/gemini-cli/issues/18285) 等议题密集展开，反映出 Gemini CLI 正从"单 agent"向"多 agent 编排"演进。

2. **🔒 安全与权限边界** —— 单日即有 6 个 P1 安全 PR 进入评审（沙箱 shell 注入、Windows git 参数、checkpoint 路径穿越、extension enablement 静默提权、MCP OAuth iss、CI 权限校验），显示安全团队进入集中整改期。

3. **🧰 AST 感知工具链** —— EPIC [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 牵头，配合 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747) 子任务，目标是用 tilth/glyph/AST-grep 替代粗糙的全文读取，预计可大幅降低 token 消耗。

4. **🪶 上下文与 Token 优化** —— [Tactful Extraction](https://github.com/google-gemini/gemini-cli/issues/19561)、[持久化任务追踪](https://github.com/google-gemini/gemini-cli/issues/18836)、临时脚本清理 [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) 都指向"减少 context rot、降低单轮成本"。

5. **🖥 终端/IDE 体验** —— 包括 [终端 resize 卡顿](https://github.com/google-gemini/gemini-cli/issues/21924)、[Vite 交互提示卡死](https://github.com/google-gemini/gemini-cli/issues/22465)、[Wayland 浏览器失败](https://github.com/google-gemini/gemini-cli/issues/21983)，反映跨平台 UX 仍是短板。

---

## 💬 开发者关注点

综合 Issue 与 PR 评论，开发者社区当前最一致的痛点集中在以下几类：

- **"Agent 不听话"**：Subagent/skills 不被自动调度（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)），generalist agent 频繁挂死（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)），且终止状态不诚实（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 暴露的"中断被包装为 GOAL success"）。
- **"配置文件不可靠"**：Browser Agent 的 `settings.json` 不生效（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、`extension-enablement.json` 损坏会反向"开启全部"（[#29481](https://github.com/google-gemini/gemini-cli/pull/29481)）、symlink agent 不被识别（[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)），反映出配置文件加载路径上的鲁棒性问题。
- **"工具爆炸导致模型失效"**：超过 128 个工具即触发 400（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)），需更智能的 scope 裁剪与 AST-aware 上下文摘要。
- **"会话恢复语义不清"**：`-r` resume 后工具响应被重复回放（[#29366](https://github.com/google-gemini/gemini-cli/pull/29366)、[#29490](https://github.com/google-gemini/gemini-cli/pull/29490)），`/bug` 不含 subagent 上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)），影响调试与回归。
- **"推理成本与速度"**：Decision Gate（[#29482](https://github.com/google-gemini/gemini-cli/pull/29482)）与 Flash-Lite thinking 降级（[#29489](https://github.com/google-gemini/gemini-cli/pull/29489)）反映社区对"轻量模型 + 快速路径"的强烈诉求。

---

*日报由社区动态自动汇总生成，数据基于 GitHub Issues/PRs/Releases 公开信息。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-02**

---

## 📌 今日速览

过去 24 小时，GitHub Copilot CLI 连续发布 **v1.0.91、v1.0.91-1 与 v1.0.92-0** 三个版本，重点围绕 **沙盒 CA 证书管理**（`copilot sandbox ca`）和 **MCP 工具在 OAuth 重新认证后的可用性**两大场景进行修复。社区方面，权限精细化控制（#953）、macOS 安全更新导致 CLI 完全不可用（#4998）和 v1.0.89 启动报错（#5008）成为讨论度最高的三大议题，而仅有一项 PR 合并——README 默认模型版本更新（#5036）。

---

## 🚀 版本发布

### v1.0.92-0（预发）
- **Fix**：MCP 工具在 OAuth 重新认证后保持可用（当工具定义未变更时）。

### v1.0.91（2026-10-01）
- **新增**：`copilot sandbox ca` 命令族（check / create / trust / rotate / remove），支持 Windows 无人工干预的代理 CA 信任配置；`/sandbox ca install` 重命名为 `create` 和 `trust`。
- **改进**：会话时间线在中断轮次结束后清理 busy 状态；Windows 上沙盒命令执行改进。

### v1.0.91-1
- **新增**：与 v1.0.91 同的 sandbox CA 命令。
- **改进**：CLI 关闭时在带边界延迟的前提下刷新待发 telemetry。

📎 [Releases](https://github.com/github/copilot-cli/releases)

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 评论 | 👍 | 关键性 |
|---|------|------|----|--------|
| [#953](https://github.com/github/copilot-cli/issues/953) | OAuth 时过度索取读写权限 | 8 | 5 | 长期高热议题——精细化权限控制是企业级用户最迫切需求之一 |
| [#4998](https://github.com/github/copilot-cli/issues/4998) | macOS 更新后 `.mcp-writer.binding` 设备 ID 过期导致 CLI 完全不可用 | 6 | 4 | 严重可用性故障，影响启动与恢复两条路径 |
| [#5008](https://github.com/github/copilot-cli/issues/5008) | 1.0.89 启动时出现 "Failed to read model provider attribution" | 6 | 5 | 回归问题，每个交互会话都触发，涉及认证竞态 |
| [#4851](https://github.com/github/copilot-cli/issues/4851) | Azure MCP 注册表校验报 BrokenPipe | 5 | 8 | 👍 数最高——Azure 用户的"昨夜稳定发新"型破坏，影响企业 MCP 生态 |
| [#3675](https://github.com/github/copilot-cli/issues/3675) | 会话 worktree 路径不可配置且命名不一致 | 1 | 8 | 👍 关注度极强，影响所有多会话开发者体验 |
| [#4959](https://github.com/github/copilot-cli/issues/4959) | 企业托管 `model` 设置未真正生效 | 2 | 3 | 涉及企业策略合规——管理员期望值与运行时实际行为不一致 |
| [#5032](https://github.com/github/copilot-cli/issues/5032) | `Copilot-Session` 出现在 `Co-authored-by` 之后破坏 git co-authorship | 0 | 0 | 看似小细节，但破坏与 dotnet/roslyn 等大型开源项目的协作流程 |
| [#5030](https://github.com/github/copilot-cli/issues/5030) | ACP 模式下自 1.0.89 起无法启动自定义 agent | 0 | 0 | 自定义 agent 是新版本关键能力，回归性质 |
| [#5027](https://github.com/github/copilot-cli/issues/5027) | Linux 沙盒 + systemd-resolved 下 DNS 不通 | 0 | 0 | 主流 Linux 发行版（默认启用 stub resolver）下沙盒失效 |
| [#5025](https://github.com/github/copilot-cli/issues/5025) | Figma 远程 MCP 始终返回空 Code Connect 数据 | 0 | 0 | 设计-代码协作场景下，MCP 客户端兼容性问题突出 |

---

## 🔧 重要 PR 进展

过去 24 小时仅有一条 PR：

| # | 标题 | 作者 | 说明 |
|---|------|------|------|
| [#5036](https://github.com/github/copilot-cli/pull/5036) | Update default model version in README | mjgard | 同步 README 中默认模型版本，保持文档与实际默认值一致 |

> 💡 由于 PR 数量极少，今日 PR 摘要主要来自 Issue 中反映的修复需求，建议关注 Issue 中标 `[triage]` 的项目作为下一批合入 PR 的来源。

---

## 📈 功能需求趋势

通过对 37 条 Issue 的归类，社区最关注的方向呈现出以下格局：

1. **🔐 权限与认证精细化（高频）**
   - OAuth 过度授权（#953）
   - 企业托管 `model` 不生效（#4959）
   - GHEC Data Residency 端点路由错误（#4938）
   - `allowedMcpServers.serverName` 匹配失败（#4989）

2. **⚙️ 可配置性与"安静化"体验**
   - 隐藏 MCP 冗余通知（#5034）
   - 关闭 `/autopilot` 中的 "Task complete" 总结（#5033）
   - 会话 worktree 路径可配置且自清理（#3675，👍 8）
   - 状态行 payload 暴露配额用量与计费周期（#5029）

3. **🛠 MCP 生态稳定性**
   - Azure MCP 校验失败（#4851）
   - Figma 远程 MCP 返回空（#5025）
   - `/new` 后 STDIO MCP 加载失败（#4811，Closed）
   - ACP 模式无法启动自定义 agent（#5030）

4. **🖥 平台兼容性**（Linux / Windows / macOS）
   - Linux 沙盒 systemd-resolved DNS 问题（#5027）
   - Windows 启动 MCP 时 CMD 窗口闪烁（#3171，已 Closed）
   - Windows 下 `~/.copilot/instructions` 重复加载（#5022）
   - macOS 安全更新后 CLI 完全卡死（#4998）

5. **🤖 Agent 与工作流增强**
   - 剪贴板图片在 rewind 后丢失（#5037）
   - `create_pull_request` 误报失败但实际成功（#5028）
   - 后台 sub-agent 流失败无失败状态（#4911）
   - Copilot-Session 破坏 git co-author 协议（#5032）

---

## 💡 开发者关注点（痛点高频）

| 痛点 | 代表 Issue | 影响面 |
|------|------------|--------|
| **会话/状态恢复不可靠** | #4998, #5023, #2303, #5035 | 直接破坏开发者长期工作流 |
| **认证/启动期竞态** | #5008, #4998 | 每次启动/重连都受影响 |
| **企业策略与运行时脱节** | #953, #4959, #4938, #4989 | 阻碍企业部署 |
| **沙盒与跨平台可靠性** | #5027, #3171, #2793 | Linux/Windows 用户长期受阻 |
| **MCP 生态兼容** | #4851, #5025, #4811, #5030 | 影响 MCP 服务器接入 |
| **细粒度 UX 控制** | #5034, #5033, #5029 | 资深用户希望"少说多做" |
| **工具调用与并发模型** | #4982, #4911, #5023 | 复杂任务下的稳定性问题 |

---

## 📊 总结

今日社区主线可归纳为 **"v1.0.91 系列围绕沙盒与认证做收尾、v1.0.92 解决 MCP 工具持续可用性"**，而用户侧反馈集中在 **会话恢复可靠性、企业权限模型、MCP 跨服务器一致性**。短期内建议关注：v1.0.92 正式发布中 MCP 工具持久化修复对 #4998 的覆盖度，以及 #953 的权限范围提案是否被纳入路线图。

📎 全部数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-10-02**

---

## 📌 今日速览

今日社区整体节奏偏向 **V2 内核重构与清理**，kitlangton 一人贡献了多条针对遗留 V1 代码的清理 PR（涉及 Permission、Config、Newtype、Session handle 等多个模块），凸显团队正在加速推进 V2 架构收尾。与此同时，**新模型原生支持** 是今日的另一主线：Cohere Chat 与 Vercel AI Gateway 的原生 Provider 同时进入代码库。Issue 端最值得关注的是 #6231（OpenAI 兼容端点模型自动发现）持续高热度（241 👍），反映出本地化部署场景仍是社区核心痛点。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 / 👍 | 重点 |
|---|-------|------|----------|------|
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | **自动发现 OpenAI 兼容端点模型**（LM Studio / Ollama / llama.cpp） | OPEN | 60 / **241** | 🔥 持续高热，呼吁去掉 `opencode.json` 手动维护模型列表的痛苦 |
| [#38222](https://github.com/anomalyco/opencode/issues/38222) | Desktop 1.18.4 在 Windows 首次启动挂死 | CLOSED | 7 / 0 | Win11 + Scoop 安装场景，TUI 加载卡住，CLI 正常 |
| [#30116](https://github.com/anomalyco/opencode/issues/30116) | **Agent 内存压缩（context compaction）感知 Hook** | CLOSED | 7 / 0 | 期望在压缩前后获得回调，便于业务做语义保留 |
| [#51330](https://github.com/anomalyco/opencode/issues/51330) | Desktop 自定义 Provider 保存失败（v2.0.16） | OPEN | 6 / 2 | 与 #50650、#51031 同源，V2 协议层阻挡 |
| [#52367](https://github.com/anomalyco/opencode/issues/52367) | 误报 gpt-6-luna 使用量 | OPEN | 6 / 0 | Go 订阅用户对账异常，对信任机制影响大 |
| [#37125](https://github.com/anomalyco/opencode/issues/37125) | Windows TUI 中 PATH 仅剩 `C:\Windows\System32` | CLOSED | 5 / 0 | PowerShell 启动后环境变量被截断，影响 git/node 等工具 |
| [#51993](https://github.com/anomalyco/opencode/issues/51993) | deepseek-v4.1-flash prompt cache 在新增图片后退化 | OPEN | 5 / 0 | 多模态场景下缓存命中边界错位 |
| [#52445](https://github.com/anomalyco/opencode/issues/52445) | Agent 自动写入虚假 `Co-Authored-By: Claude` trailer | OPEN | 4 / 0 | 涉及 commit 审计与署名合规 |
| [#43376](https://github.com/anomalyco/opencode/issues/43376) | TUI 在多问题 prompt（question tool ×3）后假死 | OPEN | 4 / 0 | 键盘与 Ctrl+C 均失效，需强制重启 |
| [#52623](https://github.com/anomalyco/opencode/issues/52623) | 使用额度异常（合规标记） | OPEN | 3 / 0 | 中文用户反馈 5 小时窗口额度无故耗尽 |

> 备注：另有 [#52636](https://github.com/anomalyco/opencode/issues/52636) 指出 ACP 层 `tool_call_update` 的 diff 仅由 input 推导而非 result metadata，影响 write/patch 工具的 diff 可见性，属于较新的协议层缺陷。

---

## 🛠 重要 PR 进展（Top 10）

### ✨ 新功能
- **[#52633](https://github.com/anomalyco/opencode/pull/52633)** `feat(ai): add native Cohere chat provider` — 新增 Cohere Chat v2 原生协议，支持 text/thinking/tool SSE、thinking toggle/budget、图像输入与 tool-result 续传。
- **[#52643](https://github.com/anomalyco/opencode/pull/52643)** `feat(ai): add native Vercel AI Gateway language models` — 将 Gateway 由仅评估模式扩展为 Messages/Responses/Chat Completions 三协议原生支持，GPT/Muse/Grok 默认走 Responses。
- **[#49865](https://github.com/anomalyco/opencode/pull/49865)** `feat(opencode): add sysml-lsp builtin LSP server` — 为 `.sysml`/`.kerml` 自动启动 OpenSysML 的 LSP，缺失时回退到 `go install`（对齐 gopls 策略）。

### 🐞 缺陷修复
- **[#52651](https://github.com/anomalyco/opencode/pull/52651)** `fix(provider): classify opencode-go unparseable 400 as context overflow` — 修复 Go 后端仅返回 `{"model":"..."}` 的 400 被误分类的问题，关联 #50761。
- **[#52634](https://github.com/anomalyco/opencode/pull/52634)** `fix(ai): report mid-stream connection loss instead of a decode error` — 网络中断不再被误标为 `Decode error`，重试信息更准确。
- **[#48632](https://github.com/anomalyco/opencode/pull/48632)** `fix(tui): restore terminal capability detection over SSH` — 修复 SSH 到 Linux 时颜色能力检测失败，关闭 #39923。
- **[#51365](https://github.com/anomalyco/opencode/pull/51365)** `fix(core): accept partial model capabilities in native provider config` — 允许 `capabilities` 仅声明部分字段，关闭 #51252。
- **[#47173](https://github.com/anomalyco/opencode/pull/47173)** `fix: Add functioning deep links for the desktop app` — 修复 Desktop 深链只被旧版监听的问题，关闭 #44160。

### ♻️ 重构与清理
- **[#52649](https://github.com/anomalyco/opencode/pull/52649)** `refactor(core): type directory initialization errors` — 引入带标签的错误，区分 NotFound / PermissionDenied / macOS Unknown/EPERM，保留原始 cause。
- **[#52637](https://github.com/anomalyco/opencode/pull/52637)** `refactor(core): delete unused v1 permission and config errors` — 删除 V2 已不再构造的 V1 遗留错误类。

> 今日同主题 PR 集群还包括 #52647（删除未使用 Newtype）、#52648（删除未使用默认 Copilot provider 实例）、#52644（导出 Identifier 命名空间）、#52642（统一 schema 导入路径）、#52641（折叠 per-session handle）、#52640（内联单一调用方模块）、#52515（退役 legacy S3 lake）、#52652（将 dev 提升为 production），呈现明显的 V2 收尾特征。

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 中可提炼出几条清晰的社区诉求主线：

1. **本地/自托管模型体验升级**：#6231（241 👍）一枝独秀地指向"自动发现本地兼容端点模型"，LM Studio/Ollama/llama.cpp 是高频用例。
2. **多 Provider 协议一致性**：#51330、#51252、#40151、#40127、#40185 分别涉及 Azure、Fireworks、NVIDIA NIM、Kimi 等不同 provider 的字段命名（`maxTokens` vs `max_tokens`）、capabilities 验证与 schema 兼容性，**v1→v2 协议迁移的"最后一公里"问题** 集中爆发。
3. **Agent 能力扩展**：#30116（compaction hook）、#36381（handoff skill 改为项目目录）、#40126 系列（图像生成）显示社区希望 Agent 在长任务、跨项目协作、媒体生成上获得更多可编程点。
4. **ACP / IDE 集成层完善**：#52636 揭示 ACP 层 diff 表达不足，影响所有走 write/patch/edit 的下游 IDE。
5. **LSP 生态扩展**：#49865（SysML）延续了 OpenCode 内置 LSP 服务的策略，对小众但专业的 DSL 用户有吸引力。
6. **原生 Provider 矩阵扩张**：Cohere、Vercel AI Gateway 加入，加之前已有的 Anthropic、OpenAI、Responses 等，呈现"先用 OpenAI 兼容兜底，再补原生实现"的递进路径。

---

## 💡 开发者关注点

通过今日 Issue 与 PR 归纳出开发者最关心的几类痛点：

- **🔧 V2 迁移残留**：原生 `providers` block 被忽略、capabilities 校验过严、v1 provider 名重命名未完成——迁移期的"小坑"是当前最显性的反馈来源。
- **🪟 Windows 兼容**：本周多条 Windows 相关 Issue/PR 集中爆发（Scoop 安装挂死、TUI PATH 截断、OpenTUI ARM64 dlopen、Sub-agent 幽灵态），Windows 仍是平台兼容性短板。
- **🧾 计费/额度透明度**：#52367 与 #52623 同时出现额度异常报告，开发者对用量归因与 5 小时窗口的合理性敏感度高，期望更细粒度的使用溯源。
- **🔁 行为可控性**：#52445（虚假 Co-Authored-By）与 #40159（external_directory 对 bash 失效）反映出"agent 默认行为 vs 用户预期"的张力——开发者既希望自动化，又要求可观测、可干预。
- **🧱 内部架构整洁**：kitlangton 的重构集群表明社区维护者重视长期可维护性，单调用模块、内联 handle、删 Newtype、规范化导入路径都是面向贡献者的友好信号。

---

*日报基于 2026-10-02 当日 GitHub 数据整理；数据源：[anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-02

> 数据来源：`github.com/badlogic/pi-mono`（仓库 `earendil-works/pi`）

---

## 📌 今日速览

**v1.0.0 正式发布**——TUI 默认全屏模式，配套更精简的代码基线。版本上线 24 小时内涌入 30+ Issue，其中多数是全屏模式、system 主题、tmux 兼容等方面的回归问题；同时安全公告、OpenRouter 成本计算、MCP 鉴权等长期问题也持续获得社区关注。

---

## 🚀 版本发布

### v1.0.0（2026-10-01）

这是 Pi 历史上首个主版本，核心变更：

- **全屏 TUI 为默认** — 终端不再保留常规滚动回溯。如需旧行为，可在 `settings.json` 设置 `tuiMode: "regular"`。详见 [Terminal and display 文档](https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/docs/settings.md#terminal-and-display)。
- **更精简的代码** — 内部重构，减少冗余路径（具体差异以 diff 为准）。
- 配套发布了 `pi-durable@1.0.0` —— 引入了 harness 的 `replay` 行为语义（见 [#10320](https://github.com/earendil-works/pi/issues/10320)）。

> ⚠️ 紧随 v1.0.0，社区集中报告了若干与全屏模式、Home/End 按键、tmux 启动相关的回归 bug（详见下文）。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 评论 | 重要性 |
|---|------|------|------|--------|
| [#5653](https://github.com/earendil-works/pi/issues/5653) | **Move off Shrinkwrap**（in progress） | OPEN | 23 | 直接安装 `@earendil-works/pi-ai` + `@earendil-works/pi-coding-agent` 会产生两份 `pi-ai` 副本，导致 module-level Map 状态分裂。是 v1.0.0 shrinkwrap 治理的前置工作。 |
| [#10031](https://github.com/earendil-works/pi/issues/10031) | ESC 停止思考后卡在 "Working..." | OPEN | 19 👍2 | 自 v0.84.0 起的长期 bug，多机复现。绕过方法是 `Ctrl+C` 退出后 `pi -c` 恢复。 |
| [#10288](https://github.com/earendil-works/pi/issues/10288) | **pi-coding-agent shrinkwrap 锁定存在漏洞的 brace-expansion 5.0.9** | CLOSED | 4 | 影响 3 个 GHSA，两个高危（quadratic ReDoS、原型链污染）。已关闭但仍需跟踪 release artifact。 |
| [#9980](https://github.com/earendil-works/pi/issues/9980) | OpenRouter 顶部开源模型成本偏高 2-3 倍 | OPEN | 5 👍1 | 目录使用最便宜 provider 的报价，而实际请求被路由到更贵的 provider。 |
| [#9688](https://github.com/earendil-works/pi/issues/9688) | **剪贴板复制回归** | CLOSED | 9 👍2 | 修复 #9618 时改写 OSC 52 触发条件，导致容器/无 SSH 场景下复制失效。 |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | TuiMainScreen 长 transcript 全屏重绘风暴 | OPEN | 9 👍1 | 滚动时整页 redraw，文本出现抖动/翻倍。 |
| [#10219](https://github.com/earendil-works/pi/issues/10219) | MCP Atlassian OAuth "Invalid scope" | CLOSED | 4 👍3 | token 响应 `"scope": ""` 时登录失败，社区 `no-action` 关闭。 |
| [#9887](https://github.com/earendil-works/pi/issues/9887) | `read` 工具 offset/limit 为字符串时渲染错乱 | OPEN | 5 | 模型（如 `xiaomi/mimo-v2.6-flash`）返回字符串时，TUI 走字符串拼接而非加法。已有 PR 修复（见 #10290）。 |
| [#10250](https://github.com/earendil-works/pi/issues/10250) | v0.99.0+ 在 tmux 3.6/3.6a 启动时输入框填满 hex 垃圾 | OPEN | 3 | system 主题默认化的回归。 |
| [#9793](https://github.com/earendil-works/pi/issues/9793) | 流式 usage 缺失 reasoning tokens 导致窗口外强制压缩 | OPEN | 3 👍2 | 子代理在 11% 上下文就被压缩，`tokensBefore` 等于 provider 上报 input，说明并非阈值触发。 |
| [#10258](https://github.com/earendil-works/pi/issues/10258) | ChatGPT OAuth 登录报 400 `invalid_grant` | OPEN | 3 | 新版 OAuth 流程下 OpenAI 登录失败，`open-codex (legacy)` 仍可用。 |

---

## 🔧 重要 PR 进展

| # | 标题 | 状态 | 要点 |
|---|------|------|------|
| [#9714](https://github.com/earendil-works/pi/pull/9714) | **feat(ai): Azure Foundry Chat Completions 支持** | OPEN | 关闭 #9645，让 DeepSeek V4 Pro 这类走 Chat Completions 的 Foundry 部署可用。 |
| [#10286](https://github.com/earendil-works/pi/pull/10286) | **fix(ai): 使用 OpenRouter 上报的真实计费** | OPEN | 直接采用 OpenRouter 返回的 billed amount，对应 #9980 报告的成本偏差问题。 |
| [#10290](https://github.com/earendil-works/pi/pull/10290) | fix(coding-agent): 强制把 read 的 offset/limit 转为数字 | OPEN | 修复 #9887 的字符串拼接问题。 |
| [#10293](https://github.com/earendil-works/pi/pull/10293) | fix(coding-agent): system 主题下保留粉彩调色板的柔和度 | CLOSED | 关闭 #10255，Catppuccin Frappe 等粉彩主题不再被 system 主题"过饱和"。 |
| [#9880](https://github.com/earendil-works/pi/pull/9880) | **feat(coding-agent): 发布配置 JSON Schema** | OPEN | 从 TypeBox 契约生成 `models.json`、`settings.json`、`keybindings.json`、themes 的 JSON Schema 并打包发布，提升 IDE 体验。 |
| [#10197](https://github.com/earendil-works/pi/pull/10197) | **feat: 统一包产物校验** | OPEN | 单一 manifest 驱动的内容寻址 artifacts，替代多路径打包，让本地校验更接近发布产物。 |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | feat(ai): 新增 LLM Gateway / LLM Gateway DevPass provider | OPEN | OpenRouter 风格的路由作为内置 `openai-completions` provider。 |
| [#8383](https://github.com/earendil-works/pi/pull/8383) | fix(ai): 在 gemini-3.7-flash 上用 LOW 关闭思考 | OPEN | 当前用 MINIMAL 会 400，改用 LOW 才是合法值。 |
| [#10275](https://github.com/earendil-works/pi/pull/10275) | feat(ai): 新增 Kenari API-key provider | CLOSED | 自动拉取 `/v1/models`，仅保留 `tool_call: true` 的模型，丢弃 `kenari/auto`。 |
| [#10194](https://github.com/earendil-works/pi/pull/10194) | feat(ai): 给 Anthropic OAuth 增加 copy-code 登录方式 | CLOSED | 在远程机器上不再依赖 localhost 回调，作者已在自家云 agent 环境生产使用。 |

> 同期 Cloudflare Clef 分类器有两个 PR（[#10322](https://github.com/earendil-works/pi/pull/10322)、[#10316](https://github.com/earendil-works/pi/pull/10316)），均为 27B/9B 决策模型，接入 Workers AI 分类器目录。

---

## 📈 功能需求趋势

从过去 24 小时 Issue + PR 中提炼：

1. **v1.0.0 全屏模式打磨** — Home/End 行为、模态确认框对输入的吞并、内嵌图片滚动塌缩、光标焦点切换等。集中爆发说明"全屏为默认"这一步仍需 UX 收尾。
2. **MCP 生态完善** — Unix socket transport（#10247）、多账户 OAuth 隔离（#10252）、Atlassian scope 处理（#10219）、关闭竞态（#10249）。MCP 已成 Pi 的核心扩展面。
3. **新模型/新 Provider 接入** — Azure Foundry Chat Completions、LLM Gateway、Kenari、Cloudflare Clef。社区希望 Pi 紧跟上游模型生态。
4. **成本与计费精度** — OpenRouter 真实计费取代目录估算。开发者越来越在意多 provider 路由下的成本可视化。
5. **配置与 DX** — JSON Schema 发布（#9880）、统一包产物校验（#10197）、quietStartup 的三态选项（#10296）。
6. **安全治理** — Shrinkwrap 退出（#5653）以及 brace-expansion 漏洞（#10288），依赖供应链透明度成为关注点。
7. **TUI 性能** — 长 transcript 重绘风暴（#9255）、空闲进程 ~140 MiB 内存（#10308），性能与内存是常青议题。

---

## 🛠️ 开发者关注点（痛点 / 高频需求）

- **v1.0.0 回归是当下最大痛点**：system 主题（#10255、#10250）、全屏 Home/End（#10314）、模态输入吞并（#10312）等 UX 细节在 1.0 上线后集中暴露。维护者倾向快速 `no-action`/`untriaged` 关闭，需要后续 ADR 或 RFC 形式统一取舍。
- **"幽灵依赖"与 module 实例分裂**：#5653 揭示了当多个 `@earendil-works/pi-*` 直接被依赖时模块级状态的隐患，是 monorepo 用户最关心的稳定性问题。
- **Provider 成本失真** 在多 provider 路由场景下会被显著放大，开发者期待 Pi 优先采用 provider 上报的 billed amount。
- **OAuth 体验碎片化**：OpenAI（#10258）、Atlassian（#10219）、Anthropic（#10194 PR）各自的 edge case 都还在打补丁，通用 OAuth 抽象层缺位。
- **依赖安全可见性低**：用户通过 npm 安装的 shrinkwrap 直接锁死了存在高危漏洞的版本（#10288），治理依赖生成方式是 v1.0 之后必须推进的事。
- **TUI 性能边界**：长 transcript / 大图片 / 频繁 auto-scroll 时整页重绘，导致滚动抖动与文本翻倍（#9255、#10319），是全屏模式上线后被放大的问题。
- **内存占用可优化空间**：#10308 提出"按需加载 highlight.js 语法"作为首个动作，开发者愿意直接贡献 PR，社区对性能 PR 持开放态度。

---

*日报生成时间：2026-10-02 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-02

> 数据来源：github.com/QwenLM/qwen-code  
> 统计周期：过去 24 小时

---

## 📌 今日速览

今天 Qwen Code 社区的讨论几乎全部围绕 **Managed Agent 双路径架构（Stage B/D/G）** 展开，托管会话（Hosted Session）的可恢复性、写入者隔离、Broker 鉴权成为最高优先级议题。同时，**v0.24.7-nightly** 修复了 Code Mode 文本与懒加载工具发现不一致、权限审批被忽略两个问题；CI 侧的每日依赖 CVE 审计出现失败需关注。

---

## 🚀 版本发布

### v0.24.7-nightly.20261001.a7deb01bcb

主要变更：
- **fix(core)**: Code Mode 文本与懒加载工具发现机制对齐（[#12990](https://github.com/QwenLM/qwen-code/pull/12990)）
- **fix(permissions)**: 恢复对已批准权限的尊重（honor approved）

👉 [查看完整 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261001.a7deb01bcb)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论数 | 为什么值得关注 |
|---|-------|--------|---------------|
| 1 | [#12380](https://github.com/QwenLM/qwen-code/issues/12380) **Managed Agent 双路径架构与分阶段交付** | 39 | **整个 umbrella 议题**，定义 TypeScript agent 循环与托管路径并存，Session 持久所有权、Workspace 绑定、可恢复工具执行，是当前社区战略级讨论 |
| 2 | [#12028](https://github.com/QwenLM/qwen-code/issues/12028) **非对话上下文 Token 治理** | 18 | 系统提示、内置工具 schema、`QWEN.md` 在长上下文模型下极易"淹没"对话本身却难以察觉 |
| 3 | [#12867](https://github.com/QwenLM/qwen-code/issues/12867) **Stage D 后半段：持久生命周期/Turns/Actions/durable admission/AgentDefinition** | 17 | 紧跟 #12380 主线，定义 D8a~D8c 等切片，决定 AgentDefinition 不可变修订如何落地 |
| 4 | [#12737](https://github.com/QwenLM/qwen-code/issues/12737) **acp-bridge：Stage B 宿主集成（Legacy 与 Managed 双引擎配对）** | 14 | 决定 `qwen serve` 本地托管执行何时上车的调度顺序 |
| 5 | [#13030](https://github.com/QwenLM/qwen-code/issues/13030) **在 Hosted Workspace 配置中放行只读搜索工具** | 9 | 让 Hosted Harness 声明 `list_directory`/`glob`/`grep_search` 三个只读工具，是托管环境可用性的关键缺口 |
| 6 | [#12333](https://github.com/QwenLM/qwen-code/issues/12333) **CI 缺乏 Token 节省的回归门禁** | 8 | 隶属 #12028，所有 Token 改动都没有"召回率/任务成功率"对比基准，导致最大节省无法安全开启 |
| 7 | [#12889](https://github.com/QwenLM/qwen-code/issues/12889) **延迟 tool_call schema 允许必填字段为空参数** | 7 | 影响 v0.24.6 起的默认行为，`tool_search` 被错误接受为 `web_search`，已 ready-for-human |
| 8 | [#12042](https://github.com/QwenLM/qwen-code/issues/12042) **provenance 在 api-history 投影中丢失** | 7 | `detectTurnInterruption()` 因此错误分类两类通知，影响 cron/通知会话正确性 |
| 9 | [#13078](https://github.com/QwenLM/qwen-code/issues/13078) **每日依赖 CVE 审计失败** | 6 | 需立即排查，怀疑新披露的高危漏洞或 npm 审计接口异常 |
| 10 | [#12952](https://github.com/QwenLM/qwen-code/issues/12952) **Stage G：权威 Session 历史/写入者隔离/接管** | 6 | 涉及 Session 持久化的最后一道防线，决定何时可移除 owner affinity |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容要点 |
|---|-----|------|----------|
| 1 | [#13112](https://github.com/QwenLM/qwen-code/pull/13112) | OPEN | 允许 Workspace-bound Hosted Session 的创建者继续提交/取消/重命名会话，修复 G0 后所有后续 submit 都被 `409 workspace_unavailable` 拒绝的问题 |
| 2 | [#13174](https://github.com/QwenLM/qwen-code/pull/13174) | OPEN | 采用下一代 Hosted Harness（G3），进程重启后 Java 控制面接管而非拒绝所有绑定 Session |
| 3 | [#13142](https://github.com/QwenLM/qwen-code/pull/13142) | OPEN | Stage D8a：实现 `POST/GET /v1/agents` 三个 AgentDefinition 路由，租户作用域、append-only、SHA-256 内容寻址 |
| 4 | [#13083](https://github.com/QwenLM/qwen-code/pull/13083) | **CLOSED** ✅ | Stage G Turn 接管 + G1 故障转移 E2E（#12952 的 G1 切片）已合并 |
| 5 | [#13136](https://github.com/QwenLM/qwen-code/pull/13136) | **CLOSED** ✅ | Hook 准入不再读取 Session Hook 历史；冷启动 Workspace 仅读一次 Hook 资源，性能与可恢复性双优化 |
| 6 | [#13195](https://github.com/QwenLM/qwen-code/pull/13195) | OPEN | Hook session 仅释放 Hosted Harness 实际创建的 Runtime 所有者，修补 releaseEarlierOwners 的过激清理 |
| 7 | [#13192](https://github.com/QwenLM/qwen-code/pull/13192) | OPEN | 修 Managed writer lease / tool publication 截止时间在 JDBC/JVM/DB 时区不一致时错误，改为 Unix epoch 秒 |
| 8 | [#13188](https://github.com/QwenLM/qwen-code/pull/13188) | OPEN | 修复 #13083 评审中的 3 个 Critical 缺陷（Hosted Turn 接管），每个都配单元见证 |
| 9 | [#13033](https://github.com/QwenLM/qwen-code/pull/13033) | OPEN | **核心改动**：默认让 Agent/Goal 协调工具按需懒发现，减少默认上下文占用 |
| 10 | [#13144](https://github.com/QwenLM/qwen-code/pull/13144) | OPEN | 校验持久化的 Hosted undo 票据：拒绝畸形身份、重复 request ID、未追踪路径、不一致冲突结果 |

---

## 📈 功能需求趋势

从过去 24 小时活跃议题中提炼，社区需求集中在以下方向：

1. **🧠 Managed Agent / 多智能体托管** — 占比最高
   - Stage B（宿主集成）、D（生命周期/AgentDefinition）、G（历史/接管/写入者隔离）并行推进
   - 关注点：从"能跑"到"能恢复、能接管、能审计"

2. **🪙 Token / 上下文性能优化**
   - 非对话上下文（system prompt + 工具 schema + `QWEN.md` + 技能清单）被视为新的优化主战场
   - 配套 CI 基准缺位被多次提出

3. **🛡️ 安全与凭证**
   - Broker 认证 / 写入者凭证（#13180）
   - Agent Host remote-connect 中 enrollment token 的降级风险（#13123，已闭）
   - workspace/session 越权防护（#13157）

4. **💾 持久化与恢复**
   - Hosted 文件历史保留与恢复（#13124）
   - Hook 会话长会话下的 Store 工作量与冷启动延迟（#13132）

5. **📱 平台分发**
   - Android Phase 2 回归覆盖与导出 UX（#13111），延续 Web Shell 路线（#11704）

6. **🧰 工具发现与延迟加载**
   - 默认延迟声明 Agent/Goal（#13033）
   - 延迟 tool 的 "use me instead of X" 引导被门控掉（#12702）

---

## 💬 开发者关注点 / 高频痛点

| 痛点 | 代表议题 / PR | 现状 |
|------|--------------|------|
| **托管 Session 提交一次后即被锁定** | #13112 | 已修复中，单 Turn 限制即将取消 |
| **Hook 准入每次都全量读历史** | #13136 | ✅ 已合入，冷启动延迟预计显著下降 |
| **评审发现积压严重**（典型 PR 一轮 19~36 条建议） | #13191、#13187、#13190 | 多个 follow-up 议题正在分流非关键改进 |
| **审计信号缺失**（token 改动无 recall/任务成功率门禁） | #12333 | blocked，社区共识已形成，等待 owner |
| **CI 依赖 CVE 告警** | #13078 | 需运维立即介入 |
| **写入者 / 故障转移边界模糊** | #13182、#13193、#13189 | 一批 bug 集中在异步重试无限循环、projector 永久卡死、owner 误释放 |
| **Memory 索引与 WebShell 一致性** | #13145（MEMORY.md 截断断链）、#13154（WebShell 覆盖未读 QWEN.md） | 均为 ready-for-human，近期可合 |
| **依赖自动修复机器人（dev-bot）产出 PR 长期挂着** | #12650、#9305 | 标注 `autofix/needs-human`，仍需人工确认 |

---

**总结**：Qwen Code 当前的开发重心明显从"功能可用"过渡到"托管可恢复 + 可审计 + 可接管"。Managed Agent 多阶段路线图已进入密集落地期（D/G 并行），同时核心团队正集中精力清理近期合入 PR 的大量评审遗留。短期内值得关注的窗口：Stage D8a AgentDefinition 合入、Stage G1 故障转移的 Critical 修复落地，以及 #12333 的 CI 门禁补齐。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI 社区动态日报
**日期：2026-10-02**

> 注：仓库 `Hmbown/DeepSeek-TUI` 与 `Hmbown/Codewhale` 关联密切，今日 Issue/PR 主要来自 Codewhale 仓库，故两条线一并呈现。

---

## 1. 今日速览

今日社区围绕 **v0.10.1 版本集成** 展开密集收尾：核心 PR `#6782` 已合并落地，`#6815` 接力开启集成第二阶段，集中处理空闲任务轮询、权限重读、撤销恢复等遗留问题。与此同时，外部贡献者 @asto18089 提交的 7 项超时/资源管理修复通过集中打包 PR `#6799` 一次性合入主线，显著提升了 MCP、JS 执行、视觉识别、工作流等模块的稳定性。社区层面，中文汉化组招募、UI 组件图谱化、YOLO 模式回归等讨论同步活跃。

---

## 2. 版本发布

⚠️ **过去 24 小时内无新 Release 标签发布。** 但 v0.10.1 集成工作正在密集进行中，详见下方 PR 进展。

---

## 3. 社区热点 Issues（精选 6 条 + 关联）

| # | 标题 | 状态 | 热度 | 关注点 |
|---|------|------|------|--------|
| [#6309](https://github.com/Hmbown/Codewhale/issues/6309) | 想让 YOLO 模式回归 | CLOSED | 💬6 | 用户对当前逐条点击确认的"操作模式"不满，希望恢复自动批准 |
| [#6804](https://github.com/Hmbown/Codewhale/issues/6804) | 成立汉化组倡议 | OPEN | 💬2 | 发起人 @SparkofSpike 牵头用爱发电汉化开源英文/日文项目，呼吁成员加入 |
| [#6814](https://github.com/Hmbown/Codewhale/issues/6814) | ratatui 组件目录与 README 画廊补全 | OPEN | — | 创始人主导的艺术方向跟进：补齐配色、氛围模块、统一视觉 |
| [#6328](https://github.com/Hmbown/Codewhale/issues/6328) | 计划/心跳的列表 UI | OPEN | — | 命名 watch、间隔（如"每 15 分钟"）、暂停/恢复，被 Core cron 路由阻塞 |
| [#6582](https://github.com/Hmbown/Codewhale/issues/6582) | hooks：shell tool_call_after 的结构化执行回执 | CLOSED | — | MemoryWhale 插件通过 stdin 记录命令、cwd、退出码、输出用于跨会话检索 |
| [#6792](https://github.com/Hmbown/Codewhale/issues/6792) | FEAT-026：完成 session 命令形态与提取边界 | CLOSED | — | EPIC-006 收尾切片，使 session 组可独立抽 crate |

**为什么这些值得看：**
- **#6309** 反映了"全自动模式" vs"安全审批"的经典权衡，是 TUI 代理类工具的共性体验痛点；
- **#6804** 可能是中文用户参与开源国际项目的重要入口；
- **#6328 + #6814** 显示项目正在从"能用"向"好看 + 易调度"的产品化阶段演进。

---

## 4. 重要 PR 进展（精选 10 条）

### 🚀 版本主线

**[#6815 v0.10.1 integration, part 2](https://github.com/Hmbown/Codewhale/pull/6815)** — OPEN · @Hmbown
接续已合并的 `#6782`，承载 0.10.1 剩余修复与 hosted CI。本批重点：空闲任务 worker 不再每 200ms 轮询磁盘（#6728/#6573），任务存储锁正确声明持有者。

**[#6782 v0.10.1 integration: wave/0.10.1-next](https://github.com/Hmbown/Codewhale/pull/6782)** — ✅ CLOSED · @Hmbown
本轮集成候选落地：队列/取消回合通过 Engine 事件权威裁决；undo 在替换推理前恢复持久会话；Linux 权限变更正确重读；同时并入 #6793/#6799/#6802。

### 🔐 账号与认证

**[#6715 fix(auth): 选择、显示、切换 ChatGPT 与 xAI 账号](https://github.com/Hmbown/Codewhale/pull/6715)** — OPEN · @Hmbown
修复多账号场景：登录界面支持账号选择，UI 显示当前使用账号，配额错误信息明确指向具体账号。

**[#6805 feat(plugins): 支持审查后的 OAuth AI 提供商](https://github.com/Hmbown/Codewhale/pull/6805)** — OPEN · @LIghtJUNction
已审查的插件 bundle 可通过 `extensions.net.codewhale.providers` 声明命名 OpenAI 兼容 AI 提供商与公开 OAuth 客户端，无需额外代理进程。

### 🛠 稳定性修复（@asto18089 集中提交）

**[#6799 Land asto18089's queue](https://github.com/Hmbown/Codewhale/pull/6799)** — ✅ CLOSED
一次性合入 @asto18089 的 7 个 PR（#6736/#6737/#6738/#6740/#6742/#6743/#6744），解决了 fork 分支拒绝 maintainer 推送的集成难题。

**[#6741 MCP tools/call 独立请求预算](https://github.com/Hmbown/Codewhale/pull/6741)** — ✅ CLOSED · @asto18089
修复 MCP `tools/call` 被 120s 通用超时 + 60s TUI 池超时双重叠加"误杀"，长任务（构建、测试、爬虫）可正常完成。

**[#6743 JS 执行子进程超时即杀](https://github.com/Hmbown/Codewhale/pull/6743)** — ✅ CLOSED · @asto18089
`execute_js_execution_tool` 原先 tokio 仅丢弃 wait future 而不杀子进程，Node 会持续占用 CPU/管道；现在真正回收资源并提高上限。

**[#6742 视觉识别 30 分钟请求包络](https://github.com/Hmbown/Codewhale/pull/6742)** — ✅ CLOSED · @asto18089
`image_analyze` 旧版 120s 总超时覆盖 connect/upload/生成/读取全过程，慢但健康的多 MB base64 上传被误杀；现拆分为连接独立预算 + 30 分钟请求包络。

**[#6740 空闲看门狗在工具调用中保持耐心](https://github.com/Hmbown/Codewhale/pull/6740)** — ✅ CLOSED · @asto18089
后台任务 120s `idle_progress` 会在长构建/测试/MCP 调用静默期间误杀 turn；现在工具调用进行中保持挂起。

**[#6737 fix(context): 相对化项目指令与宪法源标签](https://github.com/Hmbown/Codewhale/pull/6737)** — ✅ CLOSED · @asto18089
`<project_instructions source="...">` 原携带 AGENTS.md 绝对路径，目录移动后产生伪 `<context_update>` 历史；改为相对路径。

### 🎨 视觉细节

**[#6807 feat(pet): 用桌面鲸鱼 v2 轮廓绘制 Watch 鲸鱼](https://github.com/Hmbown/Codewhale/pull/6807)** — OPEN · @Hmbown
所有者 Hunter 直接请求的奇偶变更：让 TUI Watch 鲸鱼与桌面鲸鱼轮廓对齐，提升视觉一致性。

### 🤖 依赖更新

**[#6811](https://github.com/Hmbown/Codewhale/pull/6811) / [#6810](https://github.com/Hmbown/Codewhale/pull/6810) / [#6809](https://github.com/Hmbown/Codewhale/pull/6809) / [#6813](https://github.com/Hmbown/Codewhale/pull/6813) / [#6812](https://github.com/Hmbown/Codewhale/pull/6812)** — OPEN · dependabot
React 19.2.8→19.3.0、`@types/node` 26.6.1→26.6.3、`gt` 2.17.2→2.22.4、nixpkgs、`fenix` 例行 bump。

---

## 5. 功能需求趋势

从近 24 小时活跃 Issue/PR 提炼，社区关注的方向集中在以下几条主线：

| 方向 | 代表 Issue/PR | 趋势判断 |
|------|---------------|----------|
| **多账号/多 Provider 管理** | #6715、#6805 | 多 ChatGPT/xAI 账号 + OAuth 第三方提供商正在成为标配 |
| **任务调度 & 心跳 UI** | #6328 | 从"会话级交互"向"长时后台调度"演进，被 Core cron 阻塞 |
| **UI/UX 视觉一致性** | #6814、#6807 | 组件图谱化、艺术总监跟进、桌面/TUI 鲸鱼轮廓统一 |
| **执行稳定性（超时/资源）** | #6741/#6742/#6743/#6740 | MCP、JS、视觉、工作流多个模块的"误杀式超时"系统性修复 |
| **上下文与源码标签一致性** | #6737、#6739 | checkout 移动/重命名引发的伪更新需要根治 |
| **本地化（中文优先）** | #6804 | 用户自发推动，开源项目中文文档的可持续同步机制 |
| **YOLO/自动批准模式** | #6309 | 终端代理类工具的"审批疲劳"已成共性痛点 |
| **插件生态扩展** | #6582、#6805 | 第三方插件（MemoryWhale）、Provider 声明解耦 |

---

## 6. 开发者关注点与痛点

通过汇总 Issues 评论与 PR 描述，开发者社区的**高频反馈**集中在以下几个方面：

1. **审批疲劳（Approval Fatigue）** — 终端代理类工具每次 shell/写文件都要弹确认，被认为是"高端使用"的最大阻力（见 #6309）。

2. **超时堆叠导致的"健康任务被误杀"** — 这是本次 0.10.1 集成修复最密集的领域，@asto18089 一人就贡献了 5 个相关 PR，覆盖 MCP、JS 执行、视觉请求、空闲看门狗四个独立子系统。开发者反复呼吁：**长任务需要显式、独立、可识别的预算**，而不是共享一个保守默认值。

3. **资源泄漏** — `execute_js` 在 tokio 超时后不杀子进程是典型案例，揭示出 Rust 异步代码中"drop future ≠ kill child"的常见误用。

4. **多账号体验缺失** — 用户拥有多个 ChatGPT/xAI 账户时，无法在登录界面选择、UI 不显示当前账号、错误信息不指明账号归属（#6715 解决）。

5. **依赖陈旧与可复现性** — dependabot 高频提交 React/@types/node/gt/nixpkgs 升级，开发者对供应链新鲜度与构建可复现性高度敏感。

6. **插件边界与 OAuth 提供商解耦** — 通过 manifest 声明 provider/OAuth 客户端而非要求独立代理进程，是生态扩展的关键简化（#6805）。

7. **fork → upstream 集成的协作摩擦** — `#6799`、`#6802` 多次出现"fork 分支拒绝 maintainer 推送（HTTP 403）"的问题，凸显出 `cw-land` 工作流作为应对机制的价值，未来或需更友好的贡献者协作通道。

---

*📌 数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) · [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale)*
*📅 报告生成时间：2026-10-02*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*