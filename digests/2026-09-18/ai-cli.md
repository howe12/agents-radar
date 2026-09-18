# AI CLI 工具社区动态日报 2026-09-18

> 生成时间: 2026-09-18 02:40 UTC | 覆盖工具: 9 个

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
**数据日期：2026-09-18 | 覆盖工具：9 款**

---

## 一、生态全景

当前 AI CLI 工具已从"单一对话界面"演化为 **以 MCP（Model Context Protocol）为扩展契约、以 Sub-agent 为编排单元、以 IDE/桌面/ACP 多端为分发形态** 的成熟生态。9 款工具在功能层面高度趋同——长会话持久化、多 Provider 路由、子代理协同、Windows 兼容性是几乎每家都在补课的共性议题；但在**生态定位**上正显著分化：闭源旗舰（Claude Code、Codex）押注扩展框架与桌面端，开源阵营（OpenCode、Pi、Qwen Code、DeepSeek TUI）则在 Provider 抽象、子代理架构、TUI 性能等差异化方向竞速。**付费用户的容量焦虑、Agent 失控循环的可见性、长会话的可信度**正在成为新的用户信任分水岭。

---

## 二、各工具活跃度对比

| 工具 | 今日 Issues | 今日 PRs | 今日 Release | 关键里程碑 |
|------|-------------|----------|--------------|------------|
| **Claude Code** | Top10（30+ 热点） | 3（Mods/Diff 框架） | **2**（v2.1.275 + v2.1.276 紧急修复） | Mods 扩展框架官宣"weeks not days" |
| **OpenAI Codex** | Top10（50 总活跃） | ~10（自动合并为主） | **5**（v0.155.0 稳定 + 4 个 alpha） | 首次引入 `/voice` 实验性语音会话 |
| **Gemini CLI** | Top10（Auto Memory 集群） | ~13（安全 PR 集中） | 1（nightly） | 批量加固 Windows 沙箱与 LLM 模板注入 |
| **GitHub Copilot CLI** | Top10（50 总活跃） | **0** | 1（v1.0.86） | AGENTS.md / CLAUDE.md 指令复用上线 |
| **Kimi Code CLI** | 3 | 1（硬停止循环修复） | 0 | 子代理 OAuth 超时与 Desktop 门控 Bug |
| **OpenCode** | 10 | ~14（含 Star 同步） | 0 | **GitHub Star 突破 208K** |
| **Pi** | **50** | ~13 | 0 | 24h 完成"报告 → PR → 合并"全流程（Retry-After NaN） |
| **Qwen Code** | Top10（50 总活跃） | ~10 | **2**（nightly + Desktop v0.24.0） | ACP 边界协议 + Browser Native Messaging |
| **DeepSeek TUI** | 10（多数已关闭） | 2 | 0 | 子代理工具结果捕获时封顶（修复 638k token 崩溃） |

**观察**：
- **Claude Code 与 Qwen Code** 是本日唯二双版本发布的工具，且都伴随紧急修复——表明已进入高频迭代期。
- **Pi、OpenCode、Qwen Code** 是 PR 流转最活跃的三家，呈现"小步快跑"的开发节奏。
- **Copilot CLI** 当日 0 PR 进入近期低活跃窗口，需关注下一波提交。
- **DeepSeek TUI** 10 条 Top Issue 全数关闭，是当日问题清理效率最高的项目。

---

## 三、共同关注的功能方向

### 1. MCP 扩展生态稳定性（最高频共性）
- **GitHub Copilot CLI**：Figma 远程 server discovery 失败（-32601）、Google Workspace OAuth issuer 校验不一致、`--disable-repo-mcps` 全局开关缺失
- **OpenAI Codex**：Browser / CUA 拒绝 API-key 鉴权（`unsupported Codex auth method: apikey`）
- **Gemini CLI**：MCP 双栈合并（#6142，约 13.2k 行变动）
- **OpenCode**：MCP/扩展主机每小时全量重枚举（#4892）
- **诉求**：注册/发现失败时给出**可执行的错误反馈**而非静默不可用，是 MCP 走向成熟的核心瓶颈。

### 2. Sub-agent / 多 Agent 编排可靠性（新晋主战场）
- **Gemini CLI**：`Generalist Agent` 永久挂起（#21409）、`MAX_TURNS` 后误报 GOAL（#22323）
- **DeepSeek TUI**：token 预算耗尽、写锁互斥、报告回合被后代挤占、超大读取未截断（四连击 #6189/#6277/#6278/#6282）
- **Kimi Code CLI**：子代理 OAuth Token 获取超时（#2650）
- **OpenAI Codex**：Hooks 缺少失败信号（#34289）
- **Qwen Code**：工具错误无早期终止机制，单会话消耗 5–14M token（#10887 P1）
- **诉求**：扇出 + 长上下文工作流下的**预算、并发、上限、回收**四要素必须形成闭环。

### 3. Windows / 桌面端平台一致性（全员补课）
- **Claude Code**：Desktop 启动失败（AppModel HRESULT 0x80070020）、窗口置顶、Linux KDE 最小化
- **OpenAI Codex**：Computer Use 截图失败（`0x80004002`）、Desktop 卡死、bundled runtime rename EPERM
- **Qwen Code**：**ConPTY 进程泄漏 347 个 conhost / 2.8GB**（#11303 P1）、TUI React #185 崩溃
- **GitHub Copilot CLI**：Windows 插件更新锁冲突（#4095 👍22）
- **Gemini CLI**：Browser subagent Wayland 失败（#21983）
- **诉求**：Electron/桌面端与 CLI 在**安装、升级、进程管理、终端兼容**上的工程投入差距需系统性收敛。

### 4. 长会话生命周期管理（贯穿所有工具）
- **Claude Code**：Session Handoff 需求（#11455）、Transcript 损坏（#73638 会话永久 400）
- **Pi**：压缩后陈旧签名 thinking 重放（#9391）、空 body 400 触发 400k token 自动销毁（#9482）
- **OpenAI Codex**：跨 Provider 会话移交（#38365）、Hook 失败信号缺失
- **Gemini CLI**：`/compress` 不随会话恢复、checkpoint 结构损坏
- **DeepSeek TUI**：session picker 归属校验过严、checkpoint → transcript 渲染空
- **Qwen Code**：live session 被删除导致 transcript 永久损坏（#12091 P1）
- **诉求**：**续接、迁移、可观测、校验**四个能力缺一不可，破坏性变更需明确的备份/迁移策略。

### 5. 多 Provider / BYOK 路由能力
- **Pi**：Azure Foundry、Vercel AI Gateway、OpenCode Zen、LLM Gateway、Mistral 推理等 6+ provider 适配
- **Qwen Code**：kimi-k3、DeepSeek、OpenRouter 头部命名不一致（`X-OpenRouter-Title` vs `X-Title`）
- **GitHub Copilot CLI**：`COPILOT_PROVIDER_BASE_URL` 进程级限制，无法 per-agent 路由（#4703）
- **DeepSeek TUI**：ModelScope 接入（#6299），统一降级为 OpenAI 兼容 provider
- **诉求**：从"能跑通"走向**per-agent、per-session 的细粒度路由**是高级用户刚需。

### 6. Agent 失控循环的硬停止机制（新兴共识）
- **Kimi Code**：PR #2651 将软停止升级为硬停止，**不再执行最后一次重复调用**
- **Qwen Code**：后台 Agent 进度看门狗（15 分钟无进度 / 10 分钟工具超时，PR #11270）
- **Pi**：token 溢出时压缩请求剔除 thinking 消息（#9717）
- **OpenAI Codex**：压缩允许 fallback 到当前模型（PR #46324）
- **诉求**：从"事后告警"走向"事前熔断"——成本控制与用户信任的关键设计点。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 |
|------|----------|----------|--------------|
| **Claude Code** | 闭源旗舰 + 扩展生态 | 付费重度用户、企业 | Mods 框架、Function Hooks、Max 计划 |
| **OpenAI Codex** | 多端一体化（CLI + Desktop + Browser） | 跨平台开发者、Computer Use 探索者 | CUA、实时推理摘要、Voice 实验 |
| **Gemini CLI** | 免费 + 安全优先 | 个人开发者、安全敏感场景 | Auto Memory、AST 感知工具、零依赖 OS 沙箱 |
| **GitHub Copilot CLI** | GitHub 生态深度集成 | 企业 / 已有 Copilot 订阅用户 | MCP 生态、`AGENTS.md`/`CLAUDE.md` 指令复用 |
| **Kimi Code CLI** | 中文市场、轻量 | 国内个人 / 小团队 | 多 Agent、桌面 CLI 协同（活跃度较低） |
| **OpenCode** | 开源旗舰 + 多前端 | 开源贡献者、自托管用户 | **208K Star**、TUI 高性能、本地 LAN provider 发现 |
| **Pi** | Provider 无关的 Agent 中枢 | 多模型重度用户、研究型开发者 | Azure Foundry、Vercel Gateway 等广谱适配 |
| **Qwen Code** | 多 IDE（VS Code + Zed + Web Shell）+ ACP | 中文开发者、ACP 生态 | Browser Native Messaging、ACP 边界协议 |
| **DeepSeek TUI** | TUI 原生 + Fleet 子代理架构 | 终端原生党、多 Agent 编排研究者 | 捕获时截断、broadcast/watch 事件投影 |

**路线分野**：闭源三家（Claude/Codex/Copilot）在争夺**"扩展框架标准制定权"**；开源五家（OpenCode/Pi/Qwen/DeepSeek/Gemini）则在**架构创新**上各显身手——这是观察 MCP 走向与 Agent 范式演进的两条独立赛道。

---

## 五、社区热度与成熟度

### 第一梯队（高活跃 + 持续迭代）
- **Claude Code**：2 个版本/日 + Mods 框架即将发布 + Max 限额争议 857 条评论——已进入"生态型"成熟阶段，但信任挑战上升。
- **OpenAI Codex**：v0.155.0 稳定版 + 5 个 prerelease 并行——表明 0.156 大版本在快速逼近。
- **Qwen Code**：双端双版本 + 50 个活跃 issue + 10 个 PR——是中文 AI CLI 中**节奏最快**的项目。
- **Pi**：50 issue + 13 PR，24h 完成"报告→修复→合并"全链路——**响应速度最快的项目**。

### 第二梯队（稳定 + 焦点明确）
- **Gemini CLI**：以安全 PR 集群为代表，进入"防御性维护 + 重大特性（Auto Memory / AST）"双轨。
- **GitHub Copilot CLI**：v1.0.86 释出后进入低活跃窗口，但 MCP 议题热度持续。
- **OpenCode**：208K Star + 14 PR + 主题系统重构——**影响力最大但功能争论也最激烈**。

### 第三梯队（早期 / 差异化）
- **DeepSeek TUI**：10 个 Top issue 全数当日关闭，Fleet 架构在快速收敛。
- **Kimi Code CLI**：日均活跃度最低（3 issue / 1 PR），但聚焦清晰（Agent 稳定性 + Desktop 一致性）。

---

## 六、值得关注的趋势信号

### 趋势 1：MCP 正在成为"事实标准"扩展协议
从 Copilot CLI 的 Figma/Google Workspace 兼容性问题、OpenCode 的扩展主机重枚举，到 Gemini 的 MCP 双栈合并——**MCP 已是所有工具扩展能力的统一接口**，但稳定性、错误反馈、配置粒度（全局开关、per-agent 路由）仍是工程化的最后一道门槛。**开发者**：优先选择 MCP 兼容的 CLI 以避免锁定。

### 趋势 2：Sub-agent / Fleet 架构成为下一阶段竞争焦点
Gemini、DeepSeek TUI、Qwen Code、Claude Code 几乎同步暴露出**预算耗尽、写锁冲突、报告回收、上限封顶**四类子代理问题，且都来自真实工作流崩溃案例。这标志着行业从"单 Agent 工具调用"进入**"多 Agent 编排可靠性"** 的下半场。**开发者**：在 CI/CD、批量任务场景下，**熔断机制 + 工具结果截断**是评估 CLI 成熟度的硬指标。

### 趋势 3：付费用户的"容量焦虑"已成为商业化最大变量
OpenAI Codex 多条 20x/5x/Pro 用户抱怨、OpenCode Free Tier 服务端白名单——表明 **"AI CLI 的定价-容量-体验"三角正在失衡**。开发者对"credits 已扣但仍报 capacity"的会计逻辑容忍度逼近临界。**决策者**：评估工具时需将"容量透明度 / 恢复时间承诺"纳入 SLA 考量。

### 趋势 4：Windows + 桌面端不再是"可选项"
4 款主流工具（Claude Code、Codex、Qwen Code、Copilot CLI）均在 Windows 上有 P1 级稳定性 Bug，Qwen Code 的 347 个 conhost 进程泄漏尤为严重。Electron 桌面版与原生 CLI 的工程投入差距已成普遍认知。**企业决策者**：若终端用户含 Windows + VS Code 群体，需重点考察该工具的桌面端质量。

### 趋势 5："失控循环

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期：截至 2026-09-18 · 来源：anthropics/skills 仓库**

---

## 一、热门 Skills 排行（按讨论热度与影响力）

> 注：原始 PR 评论字段未提供真实数值，以下排行综合 PR 活跃度、与高评论 Issue 的关联度、功能影响力综合排序。

### 🥇 #1769 Fix skill-creator trigger detection reporting 0% recall
- **功能**：修复 `skill-creator` 触发器评估永远报 `precision=100% recall=0%` 的核心 Bug（修复 Issue #1721）
- **讨论热点**：直接关系到 Issue **#556（12 评论、7 👍）** —— `run_eval.py` 在所有查询下都不触发 Skill。这是 Skill **自举基础设施** 的关键缺陷，导致任何 Skill 优化都基于失真数据
- **状态**：OPEN（2026-09-14 创建）
- 🔗 https://github.com/anthropics/skills/pull/1769

### 🥈 #1298 fix(skill-creator): isolate trigger evals and handle Windows runtime failures
- **功能**：重构 trigger evaluation，处理 Windows 下 `select()` 失败、误报、跨 worker 干扰等问题
- **讨论热点**：跨平台兼容性 + 评估管线鲁棒性，影响所有 Skill 的质量度量
- **状态**：OPEN（2026-06-10 创建，仍在被更新维护，2026-09-16 最新提交）
- 🔗 https://github.com/anthropics/skills/pull/1298

### 🥉 #1742 fix(mcp-builder): support mcp>=2 streamable_http_client import
- **功能**：适配 MCP 协议 2.0 版的 API 变更（`streamablehttp_client` 命名 + 自定义 header 机制）
- **讨论热点**：MCP 生态升级带来的兼容性问题，影响所有基于 mcp-builder 构建的 Skill
- **状态**：OPEN（2026-09-08 创建）
- 🔗 https://github.com/anthropics/skills/pull/1742

### #1703 Add md2video-audio skill
- **功能**：零成本 Markdown → MP4 视频生成，含拟人化 AI 配音（基于 Marp）
- **讨论热点**：面向内容创作者的"零成本生产力"工具，符合 Skills 向内容工作流渗透的趋势
- **状态**：OPEN（2026-09-01 创建）
- 🔗 https://github.com/anthropics/skills/pull/1703

### #525 Add pyxel skill for retro game development
- **功能**：Python 复古游戏开发技能，支持确定性 headless 运行与帧级检查
- **讨论热点**：**长尾型高价值资产**（已开放 6 个月仍被关注），填补 Skills 在"非文档/非代码"创意领域的空白
- **状态**：OPEN（2026-03-05 创建，最新更新 2026-09-16）
- 🔗 https://github.com/anthropics/skills/pull/525

### #514 Add document-typography skill
- **功能**：自动修复 AI 生成文档中的孤儿行、寡头行、编号错位等排版缺陷
- **讨论热点**：**普适性问题** —— "每个 Claude 生成的文档都受影响"，需求基数极大
- **状态**：OPEN（2026-03-04 创建）
- 🔗 https://github.com/anthropics/skills/pull/514

### #1628 Add Hivemind: Zero-Cost Multi-Agent Orchestration
- **功能**：将机械任务委派给 headless opencode worker，让 Claude 仅做规划/审查/合并
- **讨论热点**：**"上下文是稀缺资源，不是智能"** 引发架构讨论，与 Issue #556 的触发评估问题形成呼应
- **状态**：OPEN（2026-08-21 创建）
- 🔗 https://github.com/anthropics/skills/pull/1628

### #1771 Add proofcore-contract-auditor
- **功能**：Solidity/Rust 智能合约静态审计，通过 Merkle 协议将证明锚定到 TON 链
- **讨论热点**：Web3 × Skills 的首个典型集成案例，扩展 Skills 在区块链/合规领域的边界
- **状态**：OPEN（2026-09-15 创建）
- 🔗 https://github.com/anthropics/skills/pull/1771

---

## 二、社区需求趋势（Issues 提炼）

| 优先级 | 诉求方向 | 代表 Issue | 评论数 / 👍 | 洞察 |
|---|---|---|---|---|
| 🔴 P0 | **安全/信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒充官方 | **43 / 2** | 远超第二名，社区最强烈的诉求是**建立命名空间隔离与签名机制** |
| 🟠 P1 | **企业级协作** | [#228](https://github.com/anthropics/skills/issues/228) Org 级 skill 共享 | 16 / 8 | 团队内部 Skill 共享是仅次于安全的硬需求 |
| 🟠 P1 | **Skill 评估基础设施** | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 触发率 0% | 12 / 7 | 阻碍 Skill 生态进入"可度量优化"阶段 |
| 🟡 P2 | **Agent 状态/记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory | 9 / 0 | 长会话上下文管理是 Skills 的"性能瓶颈" |
| 🟡 P2 | **Skill 设计最佳实践** | [#202](https://github.com/anthropics/skills/issues/202) skill-creator 优化（已关闭） | 8 / 1 | "Skill 应是执行指令而非教学文档"的共识形成 |
| 🟡 P2 | **去重与分发** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 重复 | 6 / 9 | 👍/评论比最高，**仓库结构治理**为隐性共识 |
| 🟢 P3 | **MCP 协议化暴露** | [#16](https://github.com/anthropics/skills/issues/16) Skills as MCPs | 4 / 0 | 长尾愿景：让 Skill 成为标准软件接口 |
| 🟢 P3 | **质量门控管线** | [#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate | 4 / 1 | "Pre-task Calibration → Adversarial Review → Delivery" 三段式质量保障 |
| 🟢 P3 | **企业平台集成** | [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 支持 | 4 / 0 | Skills 进入企业云平台是部署侧缺口 |
| 🟢 P3 | **上下文注入治理** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 单次吞 156k token | 4 / 0 | Skill 文件自身体积失控成为新问题 |

**趋势小结**：社区关注正从「**能做什么 Skill**」转向「**Skill 如何被信任、可度量、可治理**」。安全、评估、上下文效率成为三大底层支柱。

---

## 三、高潜力待合并 Skills（PR 中近期可能落地者）

| Skill | PR | 领域 | 潜力点 | 链接 |
|---|---|---|---|---|
| **skill-creator 修复组** | #1298 / #1769 / #1724 / #539 | 评估/兼容性 | 解决 Issue #556 与 #1390 的根因，是 Anthropic 自身优先级 | [#1298](https://github.com/anthropics/skills/pull/1298) · [#1769](https://github.com/anthropics/skills/pull/1769) |
| **mcp-builder v2 兼容** | #1742 | MCP 协议 | MCP 生态扩张的必修课，预计随下个版本合入 | [#1742](https://github.com/anthropics/skills/pull/1742) |
| **md2video-audio** | #1703 | 内容创作 | 零成本卖点强，差异化明显，已通过社区初步评审 | [#1703](https://github.com/anthropics/skills/pull/1703) |
| **document-typography** | #514 | 文档质量 | 几乎"零摩擦高覆盖"，长期挂在 PR 列表反而增加合并预期 | [#514](https://github.com/anthropics/skills/pull/514) |
| **buffer-api** | #1627 | SaaS 集成 | 通用 GraphQL 调度需求真实，作者活跃维护 | [#1627](https://github.com/anthropics/skills/pull/1627) |
| **scnet-hpc** | #1615 | HPC/科研 | 填补 Skills 在科研计算场景的空白 | [#1615](https://github.com/anthropics/skills/pull/1615) |
| **Hivemind** | #1628 | 多 Agent 编排 | 架构思路新颖，与"上下文成本"痛点高度吻合 | [#1628](https://github.com/anthropics/skills/pull/1628) |

---

## 四、Skills 生态洞察（一句话总结）

> **社区最集中的诉求是「Skill 信任与可度量性」**：随着 Skills 数量与场景爆发，**命名空间冒充（#492, 43 评论）**、**触发器评估失真（#556, 12 评论）**、**上下文注入失控（#1487）** 三类基础设施级问题正成为阻碍生态继续放量的天花板 —— 未来 3 个月，**Skill 安全治理 + 评估管线改造**比任何单个新技能都更受社区关注。

---

### 附录：报告统计口径
- 热门 PR 池：50 条，按评论/活跃度综合筛前 8
- 趋势提炼池：50 条 Issues，前 10 条覆盖全部 ≥4 评论项
- 时间窗口：2025-10 至 2026-09-18
- 数据源：GitHub API（anthropics/skills 公开数据）

---

# Claude Code 社区动态日报
**2026-09-18**

---

## 📌 今日速览

今日 Anthropic 连续发布两个版本（v2.1.275 → v2.1.276），修复了上一版本在反向代理/网关场景下全军覆没的 400 错误，并新增了网关登录账户确认和"立即发送"快捷键。社区讨论热度集中在三条主线：**Mods 扩展框架官宣即将发布**（Issue #91870 含官方回复）、**Claude Desktop 在 Windows/Linux 多平台上的稳定性问题持续累积**，以及 **Max 计划 session 限额异常消耗**（#38335 评论区已突破 857 条）。

---

##  版本发布

### v2.1.276（修复补丁）
- 紧急修复 v2.1.275 引入的回归：当 `ANTHROPIC_BASE_URL` 指向代理或网关时，所有请求都会因 `Input tag 'advisor_20260301'` 错误而失败（400）。

### v2.1.275（功能更新）
- **网关登录增强**：Claude Apps 网关登录会显示登录账户名，用户确认后才保存凭据；`/status` 命令中也会展示该账户。
- **新增"立即发送"快捷键**：`Ctrl+Enter` 或 `Ctrl+X Ctrl+S` 可中断当前回合，把队列中所有消息一次性发出。

👉 [查看 Release](https://github.com/anthropics/claude-code/releases)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 关注理由 |
|---|-------|------|---------|
| 1 | [#38335](https://github.com/anthropics/claude-code/issues/38335) Claude Max plan session limits 异常耗尽（自 2026-03-23 起） | 💬857 👍476 | 现象为最早从 CLI 用户中爆出，影响范围持续扩大，至今仍是高赞高评论的"钉子户"，虽然已被标记 `[invalid]`，但社区仍在持续追踪。 |
| 2 | [#91870](https://github.com/anthropics/claude-code/issues/91870) **Mods — 让 Claude 扩展性提升 10 倍** | 💬196 👍120 | **官方下场回复**：公告确认 Function Hooks 将在"数周内"上线，是当前 roadmap 上最受期待的扩展性突破。 |
| 3 | [#85891](https://github.com/anthropics/claude-code/issues/85891) Claude Desktop (Win11) 窗口始终置顶且无开关 | 💬107 👍262 | 跨平台重复问题（对应 macOS #66516），👍 数远超评论数，反映用户对窗口行为一致性的强烈不满。 |
| 4 | [#53247](https://github.com/anthropics/claude-code/issues/53247) Claude Desktop 启动失败：Silo/Job Object 残留 | 💬93 👍33 | Windows 平台严重稳定性问题，崩溃后只能注销或重启恢复，涉及 AppModel-Runtime HRESULT 0x80070020。 |
| 5 | [#11455](https://github.com/anthropics/claude-code/issues/11455) Feature Request: Session Handoff / Continuity | 💬36 👍25 | 长会话跨设备/跨终端接续的高分需求，对 CLI 重度用户的实际工作流影响巨大。 |
| 6 | [#25128](https://github.com/anthropics/claude-code/issues/25128) VSCode 扩展聊天面板拖拽失效（终端正常） | 💬33 👍48 | 自 v2.1.6 起的回归，至今未解决，已聚合多个重复报告。 |
| 7 | [#15921](https://github.com/anthropics/claude-code/issues/15921) VSCode 扩展 `.claude/settings.local.json` 权限不被尊重 | 💬31 👍32 | 即便启用 `bypassPermissions`，Bash/Write/Edit 权限仍失效，安全模型信任受损。 |
| 8 | [#32726](https://github.com/anthropics/claude-code/issues/32726) VSCode 扩展：阻止面板抢焦 | 💬19 👍57 | 输出完成时面板自动聚焦打断输入流，👍 数显著高于评论数，说明这是普遍痛点。 |
| 9 | [#92099](https://github.com/anthropics/claude-code/issues/92099) Claude Code Desktop (Windows) 更新报错 | 💬15 👍18 | Windows 安装/更新链路频繁报错，影响自动升级体验。 |
| 10 | [#73638](https://github.com/anthropics/claude-code/issues/73638) Session rename 中途破坏 transcript，导致后续所有请求 400 | 💬13 | **严重 Bug**：在 `server_tool_use` 调用进行中重命名 session 会注入损坏的 user turn，使整个会话永久 400，需要修复 transcript 校验逻辑。 |

---

## 🛠 重要 PR 进展

过去 24 小时更新的 PR 数量较少（仅 3 条），但都聚焦在 **Mods 扩展框架**与 **Diff Pane 体验**：

| PR | 内容 |
|----|------|
| [#95198](https://github.com/anthropics/claude-code/pull/95198) | `mods/diff`：将 `openPane` 返回类型改为 `Promise<unknown>`，为后续 `$.ui.open` 返回富结果对象预留类型空间。 |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | `diff`：首次 Edit/Write/NotebookEdit 时，仅当确实有可列文件时才打开 Diff Pane，避免在仓库外、忽略文件、跨 worktree 时弹出空面板。 |
| [#87077](https://github.com/anthropics/claude-code/pull/87077) | `pr-review-toolkit`：修复所有 agent 的 YAML frontmatter —— 此前未加引号的对话内容被解析为非法嵌套映射，导致 agent 加载后 name/description/model 全为空。 |

> 💡 三个 PR 都属于"基础设施"性质：扩展框架的类型对齐、Diff UI 的边界处理、Agent 元数据的正确加载 —— 配合 Mods 公告可见团队正在为发布做收尾准备。

---

## 📈 功能需求趋势

通过对今日 30 条热门 Issue 梳理，社区关注点呈现以下分布：

### 1. **IDE/VSCode 扩展体验**（占比最高）
- 拖拽失效（#25128）、权限不被尊重（#15921）、面板抢焦（#32726）、内联图片渲染（#79436，已关闭）、长消息"Show less"被挤出视口（#77004）
- 共同诉求：**让 IDE 扩展从"能用"走向"不打扰"**

### 2. **会话管理与连续性**
- Session Handoff（#11455）、Transcript 损坏（#73638）、会话重命名（#73638）、`remote-control` 会话恢复（#95262/#95254）
- 方向：**长会话的迁移、续接、可观测性**

### 3. **扩展性与插件体系**
- Mods / Function Hooks（#91870 官宣）
- MCP widgets 导出路径（#91311）、Browser pane 持久站点权限（#93156）
- 方向：**第三方能力接入的官方契约**

### 4. **多端稳定性与安装链路**
- Windows Desktop 启动失败 / 更新报错 / 卸载残留（#53247、#92099、#93627、#95050、#94869）
- Linux KDE 窗口最小化、GPU 进程刷日志（#90742、#83453）
- 方向：**桌面端跨平台工程质量补课**

### 5. **认证 & 网关生态**
- AWS Bedrock + AWS SSO 支持（#28795，👍95 高分）
- 1P/3P 推理模式切换 UI（#56606）
- 网关登录账户确认（v2.1.275 落地）

### 6. **网络与可达性**
- 多次出现 `ECONNRESET`：ISP 路径 TLS 1.3 + X25519MLKEM768 被丢弃（#94225）、重启后连接持续超时（#87500，已关闭）
- 方向：**异构网络/密钥协商下的鲁棒性**

---

## 💬 开发者关注点

综合今日 Issue 反馈，开发者集中反馈的痛点可归纳为四类：

1. **"桌面端体验跟不上 CLI"**：Windows/Linux Desktop 的启动、窗口行为、更新链路、Linux Wayland/KDE 兼容性等集中在过去 6 个月内持续累积 issue，反映 Electron 桌面版与原生 CLI 的工程投入差距。

2. **"VSCode 扩展的权限与 UI 边界"**：开发者依赖 `.claude/settings.local.json` 做细粒度控制，但发现扩展并不真正尊重它；同时面板抢焦、拖拽、图片渲染等"细节缺失"严重拉低 IDE 内的使用体验。

3. **"长会话可信度堪忧"**：会话重命名会污染 transcript、token 刷新失败后 `remote-control` 进程无法自救，这些都属于"看不见但致命的"问题，对企业长期任务尤其敏感。

4. **"扩展框架迟迟未落地，但代码已就位"**：今日 PR #95198、#94847 已经把 Mods/Diff 的类型与 UI 边界预留好，官方 Issue #91870 又以"weeks not days"暗示上线时点 —— 社区对 Function Hooks 的期待值处于峰值。

---

*日报基于 GitHub Issues / PRs / Releases 公开数据生成；如需追踪特定方向，可关注标签 `area:hooks`、`area:plugins`、`area:ide`、`area:desktop`、`area:cowork`。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-18**

---

## 📌 今日速览

Codex 在今日迎来 **rust-v0.155.0 稳定版** 发布，首次引入实验性 `/voice` 语音会话能力，TUI 同时增强了对实时推理摘要和回合完成时间的展示。社区端，**Windows 平台 Bug** 持续占据热门 Issues 榜单前列，尤其是 Computer Use 截图失败、浏览器集成拒绝 API-key 鉴权等问题反馈密集；与此同时，开发者对**配额耗尽 / 模型 capacity 限制**的不满情绪显著上升。

---

## 🚀 版本发布

### rust-v0.155.0（稳定版）

- **实验性语音会话** `/voice`：在支持的构建上提供实时转录与麦克风控制，通过 `/experimental` 启用（[#43581](https://github.com/openai/codex/pull/43581)、[#43651](https://github.com/openai/codex/pull/43651)、[#44331](https://github.com/openai/codex/pull/44331)）
- **TUI 增强**：状态栏新增实时推理摘要显示，成功回合后将展示完成时间戳

### 其他预发布版本

- `rust-v0.156.0-alpha.1`
- `rust-v0.155.0-alpha.18` / `.17` / `.16`

---

## 🔥 社区热点 Issues

| # | Issue | 关注点 | 链接 |
|---|-------|--------|------|
| 1 | **#25178** Windows Computer Use 截图失败（66 评论 / 👍27）| 调用 `SetIsBorderRequired` 时报 `0x80004002`，影响所有 CUA 截图场景；Windows 10 22H2 重灾区 | [#25178](https://github.com/openai/codex/issues/25178) |
| 2 | **#43410** Windows + Browser 拒绝 API-key 鉴权（36 评论 / 👍17）| Edge 浏览器插件在 API-key 鉴权下报 `unsupported Codex auth method: apikey` | [#43410](https://github.com/openai/codex/issues/43410) |
| 3 | **#37967** Remote Control 无法附加到进行中的 CLI 会话（17 评论 / 👍26）| 已完成线程可附加，运行中的会话失败，破坏"工作机为主、手机监控"的核心场景 | [#37967](https://github.com/openai/codex/issues/37967) |
| 4 | **#35156** Codex 不显示 diff（11 评论 / 👍40）| IDE 扩展 Review 按钮点击后无差异显示，影响代码审查核心工作流 | [#35156](https://github.com/openai/codex/issues/35156) |
| 5 | **#45886** Windows Desktop 第二条消息发送失败（8 评论）| 26.908.40834 版本首个回合成功后，发送按钮被禁用，CLI 端不受影响 | [#45886](https://github.com/openai/codex/issues/45886) |
| 6 | **#42575** Business 账号 Remote Control 配对失败（9 评论）| 同台 PC 上 Personal 账号正常，Business 账号报 enrollment 错误 | [#42575](https://github.com/openai/codex/issues/42575) |
| 7 | **#34873** `detailed` 推理摘要仅返回标题（10 评论 / 👍12）| `model_reasoning_summary="detailed"` 模式下 reasoning item 只剩标题，无解释正文 | [#34873](https://github.com/openai/codex/issues/34873) |
| 8 | **#34289** Hooks 缺少失败信号（9 评论）| `PostToolUse` payload 不带失败标志，`PostToolUseFailure` 永不触发 | [#34289](https://github.com/openai/codex/issues/34289) |
| 9 | **#43668 / #46068 / #46254** 模型 Capacity / 配额耗尽投诉密集 | 多位 20x/5x/Pro 用户反馈即使 Plus/Pro 套餐也持续被 capacity 限制 | [#43668](https://github.com/openai/codex/issues/43668) · [#46068](https://github.com/openai/codex/issues/46068) · [#46254](https://github.com/openai/codex/issues/46254) |
| 10 | **#38365** 跨 Provider 会话移交需求（8 评论）| 长会话从一个模型 Provider 切换到另一个时，工具调用历史未规范化，导致上下文丢失 | [#38365](https://github.com/openai/codex/issues/38365) |

---

##  重要 PR 进展

> 注：今日合并 PR 多数由 `copyberry[bot]` 自动生成，主要聚焦于稳定性、错误分类与跨平台一致性。

| # | PR | 内容摘要 | 链接 |
|---|----|----|------|
| 1 | **#46335** 保持 MCP 策略评估与回合环境一致 | 使用统一环境快照决定 MCP 工具可用性，避免活跃回合中途改变 | [#46335](https://github.com/openai/codex/pull/46335) |
| 2 | **#46334** 统一跨模块的平台标识 | 在 `codex-utils-path-uri` 引入 `Platform`，统一路径、网络、沙箱的平台元数据 | [#46334](https://github.com/openai/codex/pull/46334) |
| 3 | **#46333** Windows 沙箱账户清理 | 持久化"已禁用 sandbox 账户需重新禁用"的义务，避免异常退出留下启用账户 | [#46333](https://github.com/openai/codex/pull/46333) |
| 4 | **#46318** Gateway OAuth 凭据管理 | 导出 `GatewayAuthConfig` / `GatewayAuthManager`，支持 PKCE 浏览器登录、loopback 回调、token 刷新 | [#46318](https://github.com/openai/codex/pull/46318) |
| 5 | **#46310** 环境选择变更延迟到下一回合 | 防止运行中回合的工具被中途重定向或被 pending 环境设置阻塞 | [#46310](https://github.com/openai/codex/pull/46310) |
| 6 | **#46309** 跨显示元数据刷新保留插件缓存 | 比较 installed 插件身份，避免 URL 刷新导致 MCP / skill 缓存被无效清除 | [#46309](https://github.com/openai/codex/pull/46309) |
| 7 | **#46306** 保留 bio_policy 错误为独立非重试错误 | 区分流式 `bio_policy` 失败与通用 invalid_request，避免分类丢失 | [#46306](https://github.com/openai/codex/pull/46306) |
| 8 | **#46324** 压缩回退到当前模型 | 模型切换后允许压缩流程 fallback 到当前选定模型，避免 `TurnAbort` 以外的错误中断 | [#46324](https://github.com/openai/codex/pull/46324) |
| 9 | **#46319** exec JSON 输出保留 web search 行为 | 显式映射 `open_page` / `find_in_page` 等动作，去除往返序列化 | [#46319](https://github.com/openai/codex/pull/46319) |
| 10 | **#46300** 集中化 OAuth 登录与刷新 | 提取授权 URL / token 处理，token endpoint 错误不再回显凭据 | [#46300](https://github.com/openai/codex/pull/46300) |

---

## 📈 功能需求趋势

从近 24 小时更新的 50 条 Issues 提炼出以下社区最关注的方向：

1. **🔌 鉴权兼容性与多 Provider 支持**
   - 浏览器 / CUA 拒绝 API-key 鉴权（#43410、#45317）
   - 跨 Provider 会话移交、Provider-aware 模型切换（#38365、#35728）

2. ** Windows 平台稳定性**
   - 截图失败、Desktop 卡死、Remote Control 配对、bundled 可执行 rename EPERM 等问题集中爆发

3. **🪝 Hooks / Tooling 协议完善**
   - `PostToolUse` 失败信号、`PreToolUse` workdir 丢失、fail-closed 策略（#34289、#32360、#41979）

4. ** Computer Use / 远程控制增强**
   - 多设备协同、live session attach、CUA 在浏览器场景下的 RPC 缺失（#37967、#42745）

5. **💸 配额 / 模型 Capacity 透明化**
   - 多位付费用户抱怨 weekly quota 异常消耗、模型始终处于 capacity（#43668、#43811、#46068、#46254）

6. ** 推理摘要与模型行为可观测性**
   - `detailed` 摘要退化（#34873）、会话内指令被拒绝（#44554）

---

## 👨‍💻 开发者关注点

综合 Issue 评论与互动数据，开发者当前反馈的**主要痛点**与**高频需求**如下：

- **平台一致性是头号痛点**：Windows Desktop / CLI / 浏览器扩展三者行为不一致（鉴权、bundled runtime、sandbox 账户），建议建立跨平台回归基线。
- **付费用户对"模型 capacity"忍耐度逼近临界**：20x/Pro 用户明确要求**公开 capacity 状态、明确预期恢复时间**，并对"credits 已扣但仍报 capacity"的会计逻辑提出质疑。
- **Hooks 系统契约不完整**：失败信号、workdir 语义、fail-closed 选项被多次提请增强，开发者需要把 Codex 嵌入 CI / 多 Agent 流水线。
- **Remote Control 远未达可用状态**：live session attach、Business 账号授权、跨 PC pairing 是远程协同的核心短板。
- **希望 IDE 扩展回归基本盘**：diff 不显示（#35156，👍40）等基础功能异常严重消耗社区信任，开发者期待**先稳后新**的迭代节奏。

---

> 📊 数据来源：[github.com/openai/codex](https://github.com/openai/codex) · 报告生成时间：2026-09-18

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-09-18**

---

## 1. 今日速览

今日 Gemini CLI 发布 nightly 版本 `v0.62.0-nightly.20260918.g9450ade79`，重点修复 OAuth 凭证刷新与 UI 边框渲染问题。社区讨论最活跃的话题集中在 **子代理（Subagent）行为可靠性** 与 **Auto Memory 系统稳定性**，多个 P1 级 bug 正在等待回归测试；与此同时，安全相关 PR 集中合并了一批针对 Windows 沙箱、CheckPoint 路径穿越和 LLM 模板注入的修复。

---

## 2. 版本发布

### v0.62.0-nightly.20260918.g9450ade79

本次夜间版本包含两项关键修复：

| 类别 | 修复内容 | PR |
| --- | --- | --- |
| `core` | 刷新 OAuth 时保留 refresh token，并使凭证删除操作幂等 | [#29339](https://github.com/google-gemini/gemini-cli/pull/29339) |
| `ui` | 防御边框渲染中负向布局尺寸导致的崩溃 | [#2933x](https://github.com/google-gemini/gemini-cli) |

自动版本号 bump 由 [#29383](https://github.com/google-gemini/gemini-cli/pull/29383) 完成。

---

## 3. 社区热点 Issues

以下按讨论热度排序，挑选 10 条最值得关注的 Issue：

| # | Issue | 优先级 | 评论 | 为何重要 |
| --- | --- | --- | --- | --- |
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent 在 MAX_TURNS 后被错误上报为 GOAL 成功** | P1 | 13 | 子代理静默失败、掩盖真实中断原因，影响调试可信度 |
| 2 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) **零依赖 OS 沙箱 + 执行后意图路由** | P2 | 9 | 利用 Gemini 3 原生 bash 偏好的架构级方案 |
| 3 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist Agent 永久挂起** | P1 | 8（👍8） | 简单任务也会卡死，社区高度共鸣的高赞问题 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **评估 AST 感知文件读取/搜索/映射的影响** | P2 | 7 | 有望显著降低 token 消耗、减少读取轮次 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini 几乎不主动调用 skills 与子代理** | P2 | 6 | 自定义能力调度未被充分利用，影响扩展生态 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) **为 Auto Memory 增加确定性脱敏并降低日志量** | P2 | 5 | 涉及隐私合规与凭证泄露风险 |
| 7 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell 命令完成后仍卡在 "Waiting input"** | P1 | 4（👍3） | 简单 CLI 即触发，影响日常交互流畅度 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **Browser subagent 在 Wayland 下失败** | P1 | 4 | Linux 桌面用户使用浏览器代理受阻 |
| 9 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) **Browser agent 自动接管会话与锁恢复** | P3 | 4 | 增强持久会话的健壮性 |
| 10 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) **~/.gemini/agents 下的 symlink 不被识别为子代理** | P2 | 4 | 限制用户以 dotfiles 仓库管理自定义代理 |

---

## 4. 重要 PR 进展

挑选 10 个与功能/安全直接相关的 PR：

| # | PR | 类别 | 说明 |
| --- | --- | --- | --- |
| 1 | [#29184](https://github.com/google-gemini/gemini-cli/pull/29184) | Security | Windows 沙箱校验 `git diff/log/show/branch` 参数，阻止 `--output` 静默覆写文件（已合并） |
| 2 | [#29192](https://github.com/google-gemini/gemini-cli/pull/29192) | Security | Checkpoint 路径穿越修复：`/chat delete <../tag>` 无法逃逸 checkpoints 目录（已合并） |
| 3 | [#29188](https://github.com/google-gemini/gemini-cli/pull/29188) | Core/Security | `read-many-files` 改为基于文件名的精确匹配，避免目录片段造成的误判（已合并） |
| 4 | [#29187](https://github.com/google-gemini/gemini-cli/pull/29187) | Core/Security | LLM prompt 模板改用 `safeLiteralReplace`，防止 `$` 序列模板注入（已合并） |
| 5 | [#29186](https://github.com/google-gemini/gemini-cli/pull/29186) | Core/Security | 修正 Shell 沙箱拒绝启发式中的 `exitCode` null 判断错误（已合并） |
| 6 | [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) | Auth | OAuth 登录成功后立即持久化凭证，避免再次弹出登录 |
| 7 | [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) | Core | Checkpoint 文件 `history` 非数组时优雅降级而非崩溃 `/resume` |
| 8 | [#29190](https://github.com/google-gemini/gemini-cli/pull/29190) | VSCode | 修正 `activate()` 中由逗号操作符导致的 Disposable 漏注册 |
| 9 | [#29181](https://github.com/google-gemini/gemini-cli/pull/29181) | Core | 引入"仅文件"日志器以支持拦截器校验 |
| 10 | [#29339](https://github.com/google-gemini/gemini-cli/pull/29339) | Auth | OAuth refresh token 在刷新时保留、凭证删除幂等（即本次 release 内容） |

此外，依赖更新方面：[#29137](https://github.com/google-gemini/gemini-cli/pull/29137) 一次性升级 77 个 npm 依赖包；[#29385](https://github.com/google-gemini/gemini-cli/pull/29385) 将 `vscode-ide-companion` 的 vitest 升至 4.1.11。

---

## 5. 功能需求趋势

从过去 24 小时更新的 Issue 提炼出以下社区关注方向：

1. **Auto Memory 体系重构** —— 围绕 [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) 形成 issue 集群，覆盖去重、脱敏、低信号会话退出、补丁验证等系统性问题。
2. **AST 感知代码工具链** —— [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 与 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 探索使用 AST 工具（tilth/glyph）实现精准读取与代码库映射，目标降低 token 消耗。
3. **子代理可靠性与可观测性** —— 涉及挂起、误报 GOAL、bug report 缺失子代理上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）以及 `/chat share` 暴露子代理轨迹（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）。
4. **Browser Agent 健壮性** —— 包括 Wayland 兼容（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）、`settings.json` 覆盖（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、会话接管与锁恢复（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）。
5. **终端性能与稳定性** —— 终端 resize 卡顿与闪烁（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）、Shell "Waiting input" 卡死（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）。
6. **持久化任务跟踪** —— [#18836](https://github.com/google-gemini/gemini-cli/issues/18836) 与 [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) 推动 WriteToDo 替换为基于文件的 CRUD。
7. **安全沙箱与凭证管理** —— 多个 PR 集中加固 Windows 沙箱、CheckPoint、LLM 模板的安全边界，并修复 OAuth 持久化（[#29282](https://github.com/google-gemini/gemini-cli/pull/29282)）。

---

## 6. 开发者关注点

从高频 Issue 与近期修复中归纳出开发者最集中的痛点：

- **子代理调度不稳定**：`Generalist Agent` 永久挂起（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）、`MAX_TURNS` 后错误上报成功（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）、自定义 skills/subagents 不被主动调用（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）。
- **Shell 工具可用性退化**：命令执行后 UI 卡在 "Awaiting user input"（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)），且模型倾向在多目录生成临时脚本（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)），增加清理成本。
- **会话持久化缺陷**：`/compress` 不随会话恢复（[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)）、checkpoint 文件结构损坏导致 `/resume` 崩溃（已由 [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) 修复）。
- **Auto Memory 安全与质量**：低信号会话无限重试、补丁静默跳过、日志泄露风险等问题集中浮现（[#26516](https://github.com/google-gemini/gemini-cli/issues/26516) 系列）。
- **工具数量上限**：注册工具超过 ~400 个时触发 400 错误（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)），影响大型 agent 扩展场景。
- **可观测性不足**：bug 报告不包含子代理上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）、子代理轨迹难以分享（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）。
- **安全边界加固呼声强烈**：今日合并的多个安全 PR 表明，社区对"非 YOLO 模式下的隐性写操作"（如 `git diff --output`）容忍度持续走低，期望更严格的默认防御策略。

---

*数据时间窗口：2026-09-17 ~ 2026-09-18，来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期**：2026-09-18
**项目**：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

v1.0.86 昨日释出，重点新增自定义 Agent 启用仓库指令文件（`AGENTS.md` / `copilot-instructions.md` / `CLAUDE.md`）的能力，并修复了 session resume 在缺少 plugin-directory 覆盖时丢失 market 的问题。社区方面，**MCP 集成与插件系统**仍是最高频议题：Figma 远程 MCP server 注册失败、Windows 端 `plugin update` 文件锁冲突、MCP/扩展主机每小时全量重枚举等问题集中爆发，反映出生态快速扩张带来的稳定性挑战。

---

## 🚀 版本发布

### v1.0.86（2026-09-17）

本次更新包含两项关键改进：

1. **自定义 Agent 启用仓库指令文件**
   Custom agents 现可在 frontmatter 中设置 `include-custom-instructions: true`，即可读取 `AGENTS.md`、`copilot-instructions.md`、`CLAUDE.md` 等仓库级指令文件，提升了与跨 IDE/工具链的指令复用能力。

2. **Session resume 市场状态保持**
   在未传入 `plugin-directory`、`discovery`、`working-directory` 覆盖参数的情况下恢复活动会话时，将保留会话原本的 market 配置，避免上下文丢失。

> 📎 [Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.86)

---

## 🔥 社区热点 Issues（按关注度排序）

| # | Issue | 状态 | 👍 | 要点 |
|---|---|---|---|---|
| 1 | [#4095](https://github.com/github/copilot-cli/issues/4095) Windows: plugin update fails with "Access is denied (os error 5)" | OPEN | **22** | **本周最高点赞**。VS Code 扩展持锁导致 CLI 端 `plugin update` 失败，影响 Windows 用户核心工作流。 |
| 2 | [#4870](https://github.com/github/copilot-cli/issues/4870) MCP: Figma remote server fails to load — `-32601` on `server/discover` | OPEN | 9 | 远程 MCP server discovery 阶段被 CLI 误判为致命错误，VS Code 中可正常工作。代表性问题，影响多家 MCP 提供方兼容性。 |
| 3 | [#4753](https://github.com/github/copilot-cli/issues/4753) v1.0.83: session resume cancels in-flight stdio MCP server connections | CLOSED | 2 | 已关闭。1.0.82 → 1.0.83 回归：恢复会话时取消正在初始化的 MCP 连接（超时从 ~16s 降至 ~1s），整会话中相应 server 静默不可用。 |
| 4 | [#4655](https://github.com/github/copilot-cli/issues/4655) Agent Plugins 1.0: custom agents under `com.github.copilot/agents` 未被发现 | CLOSED | 0 | 已关闭。Agent Plugins 1.0 规范下，GitHub Copilot 专属 agent 目录未触发发现流程。 |
| 5 | [#3304](https://github.com/github/copilot-cli/issues/3304) `[ERR_HTTP2_INVALID_SESSION]`: The session has been destroyed | OPEN | 0 | 长会话中频繁触发，长推理响应中断即出现。**长期未解决的高频网络问题**。 |
| 6 | [#3380](https://github.com/github/copilot-cli/issues/3380) Add `--disable-repo-mcps` flag | OPEN | 1 | 仓库级 `.mcp.json` 缺少"整体忽略"的开关，目前只能按 name 粒度禁用，社区呼声较高。 |
| 7 | [#4886](https://github.com/github/copilot-cli/issues/4886) `--plugin-dir` skills load but are omitted from `/skills` and `/env` | OPEN | 0 | 本地插件 skills 已被后端发现，但交互式 `/skills` 与 `/env` 输出缺失，UI 与 CLI 不同步。 |
| 8 | [#4892](https://github.com/github/copilot-cli/issues/4892) Extension hosts and MCP servers re-enumerated on an hourly in-session reload cycle | OPEN | 0 | 新报：会话内每小时触发一次全量扩展/MCP 重枚举，存在资源浪费与潜在状态不一致风险。 |
| 9 | [#4703](https://github.com/github/copilot-cli/issues/4703) Per-agent provider selection for custom agents | OPEN | 0 | BYOK 场景下，`COPILOT_PROVIDER_BASE_URL` 为进程级，无法在同一会话中让不同 agent 走不同端点，限制了多 provider 架构。 |
| 10 | [#4606](https://github.com/github/copilot-cli/issues/4606) Google Workspace MCP OAuth fails on `accounts.google.com` trailing-slash issuer mismatch | OPEN | 1 | Google Workspace 官方 MCP 端点在 OAuth 元数据 issuer 末尾斜杠上与 CLI 校验不一致，浏览器授权流程未启动即失败。 |

---

## 🔧 重要 PR 进展

过去 24 小时内 **无 PR 更新**，属于近期的低活跃窗口。

> 建议关注 v1.0.86 发布后的下一波 PR 提交节奏——通常释出版本后 24-48 小时内会出现首批 follow-up 修复。

---

## 📈 功能需求趋势

从过去 24 小时更新的 50 条 Issue 中，社区关注方向可归纳为以下六类：

### 1. MCP 生态整合（热度最高）
远程 MCP server 兼容性（Figma、Google Workspace）、OAuth 流校验、`.mcp.json` 全局开关等。**MCP 已成为 CLI 扩展能力的核心载体，但稳定性与配置体验仍是最大短板**。

### 2. 插件系统与可发现性
Windows 平台插件更新锁、`--plugin-dir` skills 在 UI 中缺失、symlink 文档化、Agent Plugins 1.0 规范对齐等。插件化是产品演进方向，**跨平台一致性 + 显式 UI 反馈**是反复出现的诉求。

### 3. 模型与 Provider 管理
Per-agent provider 路由、auto mode 不可用模型选择、`/rubber-duck` 与 `/model auto` 的可用性语义、autopilot 转写破坏 prompt 缓存等。**多 provider、多模型灵活调度**是高级用户核心需求。

### 4. Session / Plan Mode 可靠性
Session 数据丢失、plan 模式随机跳过审批、session 切换后 plan 不可见等。**长时任务的会话状态机仍是核心痛点**。

### 5. 跨平台与安装
FreeBSD 1.0.43 后被判定为 "Unsupported platform"（已 CLOSED）、Windows 文件锁冲突、shell 输出捕获等。

### 6. 终端交互与可访问性
Backspace 单词级删除、粘贴后输入区损坏、多行复制空格截断、theme 设置不持久、任务栏图标无法关闭、长时间任务 OS 通知等。**终端 UX 的"小毛病"积累明显**。

---

##  开发者关注点

**最普遍的痛点**：
- **MCP server 注册/发现不稳定**：同一 server 在 VS Code 中可用、在 CLI 中失败，是开发者切换工作流时的主要挫败点。
- **Session 恢复状态丢失/异常**：无论是 MCP 连接被取消、plan 模式挂起、还是小时级全量重枚举，都指向**会话生命周期管理的复杂度尚未收敛**。
- **Auto mode 与 model selection 的不可预测性**：模型自动选择偶尔落到不可用变体（如 `Claude Sonnet 4.5 - medium`），导致整个 CLI 崩溃，是新手和老用户共同的踩坑点。
- **Windows 平台特异性问题**：插件更新权限、symlink 行为、文件锁——Windows 仍是 CLI 体验短板。

**最强烈的需求**：
- **更精细的 provider/model 路由控制**（per-agent、per-session）。
- **更明确的 MCP 加载/失败反馈**（避免静默不可用）。
- **更稳定的 plan mode 与 session 切换交互**。
- **更友好的终端输入体验**（键盘行为、粘贴、主题持久化）。

---

*日报基于 2026-09-17 至 2026-09-18 的 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：** 2026-09-18
**数据范围：** 过去 24 小时 GitHub 仓库动态（`MoonshotAI/kimi-cli`）

---

## 📌 今日速览

过去 24 小时仓库活跃度较低，**无新版本发布**，社区关注集中在 **Kimi Desktop 配置写入异常**、**子代理 OAuth 鉴权超时** 两个 Bug 上；同时有一项关键修复 PR 提交，针对 **重复工具调用循环** 设置硬停止机制，有助于提升 Agent 运行稳定性。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

> 过去 24 小时仅 3 条 Issue 有更新，按重要性排序如下：

### 1. [#2649【Kimi Desktop】「梦境记忆」开关不写入配置](https://github.com/MoonshotAI/kimi-cli/issues/2649) ⭐ OPEN
- **重要性**：影响 Kimi Desktop 3.2.9 用户核心功能可用性；问题疑似为服务端功能门控未放行，非纯客户端 Bug。
- **社区反应**：已产生 2 条评论，处于活跃讨论阶段。
- **关键信息**：开关 UI 可正常拨动，但本地 `daimon/config.json` 中 `features.memory.dream` 等字段未持久化，作者怀疑属于服务端功能开关（feature gate）未对账号放行。

### 2. [#2650 子代理启动间歇性失败：OAuth Token 获取超时](https://github.com/MoonshotAI/kimi-cli/issues/2650) ⭐ OPEN
- **重要性**：直接影响多 Agent 工作流的稳定性；错误表现为「主会话正常、子代理启动失败」。
- **社区反应**：0 评论（新提交），但问题描述清晰，影响面可能较广。
- **关键信息**：调用 `auth.kimi.ai` 的 OAuth 连接偶发超时，重试可成功 —— 属于鉴权端点短暂抖动导致整个子代理 spawn 失败，需考虑降级/重试策略。

### 3. [#1276 `@` 自动补全缺失文件](https://github.com/MoonshotAI/kimi-cli/issues/1276) 🔒 CLOSED
- **重要性**：影响 CLI 用户 `@` 引用文件的核心交互体验。
- **社区反应**：2 条评论，于 2026-09-17 关闭（实际创建于 2 月，长期未解后关闭）。
- **关键信息**：版本 1.16.0 / Linux 环境下，`@` 文件自动补全存在漏报问题；长期存续后关闭，可能未修复或已转移处理。

---

## 🛠️ 重要 PR 进展

### [#2651 fix: stop repeated tool-call loops](https://github.com/MoonshotAI/kimi-cli/pull/2651) 🟢 OPEN
- **类型**：Bug Fix
- **关联 Issue**：#2637
- **核心改动**：将「重复工具调用防护」从软停止升级为**硬停止**。当达到重复阈值时，**不再执行最后一次重复调用**，直接阻断循环。
- **重要意义**：原实现虽然在到达阈值时设置了停止标志，但仍会执行该次重复调用，容易导致 Agent 陷入无效循环消耗 Token 与时间。此 PR 显著降低无效工具调用带来的成本与延迟，是 Agent 稳定性层面的关键改进。
- **状态**：刚刚提交，待评审。

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 主题可提炼出三个核心方向：

| 方向 | 信号 | 代表 Issue |
|---|---|---|
| **Agent 稳定性 / 容错** | 子代理鉴权降级、工具调用循环防护 | #2650、#2651 |
| **桌面端功能完整性** | 配置写入、特性门控一致性 | #2649 |
| **CLI 基础交互体验** | 文件引用补全正确性 | #1276 |

整体趋势显示：**社区关注已从「功能可用」转向「Agent 运行可靠性与配置一致性」**，尤其在多 Agent / 长任务场景下，错误处理与降级机制成为新的关注重点。

---

## 💡 开发者关注点

1. **重复工具调用的成本控制** — PR #2651 反映出开发者希望 CLI 在 Agent 异常路径上更早、更严格地终止无效循环。
2. **鉴权链路的鲁棒性** — #2650 显示 OAuth 单点抖动即可阻塞子代理启动，社区期望加入**重试、降级或本地缓存**机制。
3. **桌面端与 CLI 行为一致性** — #2649 提示 Kimi Desktop 的功能开关链路涉及「UI ↔ 本地配置 ↔ 服务端门控」三层，任一环节不一致都会导致用户感知功能失效。
4. **历史 Issue 关闭机制** — #1276 长期开放后被关闭，社区希望官方对长期未修复 Bug 给出明确处理说明（迁移/不修复/已修复于某版本）。

---

*报告基于 GitHub 公开数据生成，仅覆盖过去 24 小时内有更新的条目。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-18**

---

## 📌 今日速览

今日社区聚焦两大热点：**Free Tier 访问限制问题**持续发酵（2 条高热度 Issue 共计 63 条评论），大量用户在使用第三方前端（如 MonoCode）或 OpenCode Web 时遭遇"can only be used from within OpenCode"错误；同时 **GitHub Star 数突破 208K** 的里程碑被同步到官网和 fallback 数据中。代码层面，主题系统（theme surface tokens）经历了一次较大重构，桌面端大文件上传体验得到显著改进。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 评论 | 👍 | 重点 |
|---|-------|------|------|----|----|
| [#49580](https://github.com/anomalyco/opencode/issues/49580) | Free tier (Muse Spark 1.3 Free) 使用 MonoCode 前端 + OpenCode 后端失败 | OPEN | 34 | 2 | 第三方前端集成被服务端拦截，~55s 后报错 |
| [#49433](https://github.com/anomalyco/opencode/issues/49433) | Error: OpenCode's free tier can only be used from within OpenCode | OPEN | 29 | 4 | 影响所有模型，社区普遍认为是过度限制 |
| [#35265](https://github.com/anomalyco/opencode/issues/35265) | ResourceExhausted: Worker local total request limit reached | CLOSED | 10 | 0 | 长期未解决的限流问题 |
| [#31972](https://github.com/anomalyco/opencode/issues/31972) | New Layout and Designs 开启后无法切换 Plan/Build | CLOSED | 10 | 8 | UI 切换与 Ctrl+. 快捷键失灵 |
| [#37101](https://github.com/anomalyco/opencode/issues/37101) | Stuck in Plan Mode - 无法切到 Build | CLOSED | 5 | 2 | 模式切换 toggle 缺失，/build 命令无效 |
| [#31347](https://github.com/anomalyco/opencode/issues/31347) | CPU 占用过高 | CLOSED | 5 | 9 | Agent 持续高负载 |
| [#31831](https://github.com/anomalyco/opencode/issues/31831) | opencode 进程稳定占用 185% CPU / 500MB+ RAM | CLOSED | 5 | 4 | macOS Apple Silicon 上 idle 状态仍高负载 |
| [#27647](https://github.com/anomalyco/opencode/issues/27647) | 含特殊字符的文本粘贴失效 | CLOSED | 5 | 0 | CLI 粘贴 `$R[...]` 数组时内容截断 |
| [#35831](https://github.com/anomalyco/opencode/issues/35831) | [FEATURE] i18n / Locale 支持（葡萄牙语等） | CLOSED | 5 | 0 | i18n 框架已存在，呼吁补全翻译 |
| [#48974](https://github.com/anomalyco/opencode/issues/48974) | TUI session picker 仅显示全项目最近 50 个 session | OPEN | 3 | 0 | 多项目场景下老会话被静默隐藏 |

**分析**：Free tier 访问限制（#49580、#49433）是当前最大痛点，社区普遍质疑"只能在 OpenCode 内使用"的策略是否过度——它阻碍了 MonoCode、Web、CLI 等多前端生态的健康发展。Plan/Build 模式与高 CPU 占用问题在多次 Close 后反复出现，提示这两个老问题仍未根治。

---

## 🛠️ 重要 PR 进展

| # | PR | 内容 | 状态 |
|---|----|----|------|
| [#49654](https://github.com/anomalyco/opencode/pull/49654) / [#49656](https://github.com/anomalyco/opencode/pull/49656) | 更新 GitHub Star fallback 至 **208K** | 自动同步项目里程碑到官网 | ✅ CLOSED |
| [#49647](https://github.com/anomalyco/opencode/pull/49647) | 桌面端大附件流式上传 + 进度反馈 | 修复 135MB 文件拖入导致 Electron "无响应"的问题；客户端 only，无服务端变更 | OPEN |
| [#49657](https://github.com/anomalyco/opencode/pull/49657) | 支持 `opencode://new` 深链接（携带 cwd 与 q 参数） | 桌面协议扩展，与 #47173 配套 | OPEN |
| [#49661](https://github.com/anomalyco/opencode/pull/49661) | 重构主题系统：移除 `@context:elevated/overlay`，引入 `theme.surface(name)` | 重大 API 调整，所有 theme 文件需迁移 | OPEN |
| [#49655](https://github.com/anomalyco/opencode/pull/49655) | 重命名 surface tokens：`offset → raised.base`，`overlay → raised.high` | 配套 PR #49661 的 schema 调整 | ✅ CLOSED |
| [#48638](https://github.com/anomalyco/opencode/pull/48638) | 加固 session diffs/snapshots 写路径，消除并行 agent 下的 worker-thread 停顿 | 修复 #48641，影响核心会话系统 | OPEN |
| [#49651](https://github.com/anomalyco/opencode/pull/49651) | 修复统一 rate-limit 窗口利用率统计 | 修复 Anthropic 订阅账户的 ratelimit header 正则，关闭 #49653 | OPEN |
| [#49650](https://github.com/anomalyco/opencode/pull/49650) | 预览 Code Mode 子调用 | 在 Execute 下以可展开的子行展示 `metadata.toolCalls`，含完整 input | OPEN |
| [#49646](https://github.com/anomalyco/opencode/pull/49646) | 新增 `/btw <question>` TUI 侧问命令 | 在当前会话上下文调用 `session.generate`，避免污染主任务流 | ✅ CLOSED |
| [#49643](https://github.com/anomalyco/opencode/pull/49643) | 在 VS Code Activity Bar 添加 OpenCode 入口 | 关闭 #31997，正式集成进 VS Code 侧边栏 | OPEN |
| [#48689](https://github.com/anomalyco/opencode/pull/48689) | TUI 吞吐量统计纳入 reasoning tokens | 关闭 #48705，tok/s 指标更准确 | ✅ CLOSED |
| [#48432](https://github.com/anomalyco/opencode/pull/48432) | session-ui Markdown 流式尾部原地扩展 | 关闭 #36043，与 TUI delta 合并 PR 联合消除流式路径 O(n²) 冻结 | OPEN |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | 本地 LAN provider 发现 + 模型自动发现 | 关闭 #6231、#27553，支持 mDNS 探测 OpenAI-compatible 本地服务 | OPEN |

**亮点**：`#49654` 表明 OpenCode 已正式迈入 **208K Star** 俱乐部；`#49647` 直接解决桌面端处理大文件的痛点；`#49661 + #49655` 是本次最大规模的主题系统重构。

---

## 📈 功能需求趋势

从最近 24 小时活跃的 Issues 中提炼出以下高频方向：

### 1. **多前端生态与 Free Tier 开放**（最热）
- #49580、#49433 反映出开发者希望 OpenCode 后端能服务 MonoCode、Web、自定义 CLI 等前端，呼吁取消 free tier 的客户端白名单。

### 2. **会话管理 UX 全面升级**
- #49543（Desktop 命令面板项目级会话切换）、#43056（sessions list 导航）、#48974（TUI 仅显示最近 50 个 session）、#41064（左侧竖向会话列表）、#41855（session list 漏掉已有 session）—— 会话切换与可见性是当前体验短板。

### 3. **IDE 深度集成**
- #49643（VS Code Activity Bar 集成）已进入 PR 阶段；社区对 Cursor-like 体验持续追求。

### 4. **性能与稳定性**
- #31347、#31831（CPU 占用）、#37111（web 命令 event loop 死锁）、#37597（Node 子进程内存耗尽）、#35265（rate limit）—— 高负载场景下的稳定性是长期议题。

### 5. **Agent Skills / 长上下文优化**
- #37629（文件级 skill 自动加载）、#37627（compact 后 skill/AGENTS.md 重载）—— 长会话下 skill 可靠性问题。

### 6. **i18n 与本地化**
- #35831（葡萄牙语等多语言）—— 已有 i18n 框架，缺翻译内容。

### 7. **Worktree 与协作**
- #33332（可配置 worktree 创建）—— 已有 4 👍，反映团队协作需求。

---

## 🧑‍💻 开发者关注点

**核心痛点**：

1. **第三方前端被服务端拒之门外**：Free tier 的"仅 OpenCode 内"校验被多个外部前端（MonoCode、Web）触发，开发者认为这限制了生态扩展。
2. **Plan/Build 模式切换不可靠**：在新布局下频繁失灵（#31972、#37101、#37609），既影响快捷键也影响 `/mode` 命令。
3. **session picker 隐藏数据**：TUI / `session list` 在多项目下只显示最近 50 个全局 session，本项目老会话被静默过滤（#48974、#41855）。
4. **高 CPU / 内存吃紧**：macOS 上 500MB+ 常驻、185% CPU 的现象在 idle 时也会发生，影响开发者对工具稳定性的信心。
5. **Code Mode 透明度**：opencode-go gateway 把实际输出塞进 `reasoning_content`，让 agent 逻辑失效（#37635），亟需 streaming 层修复。
6. **大文件上传冻结 UI**：桌面端拖入 100MB+ 附件会触发 Electron "无响应"对话框（已被 #49647 修复）。
7. **theme 系统破坏性变更**：`@context:elevated/overlay` 被移除，所有自定义主题需迁移至 `surface(name)` API（#49661）—— 主题作者请关注。
8. **错误恢复链路**：interrupt 后 undo 可能因消息被提前 admitted 而失败（#49636 已修复）；内存耗尽类错误需要更鲁棒的子进程管控。

**高频需求**：会话切换面板、左/右侧会话抽屉、VS Code 原生集成、Free tier 跨客户端开放、i18n 翻译贡献、Plan/Build 模式稳定性。

---

*报告基于 anomalyco/opencode 在 2026-09-18 的 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-18

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 统计窗口：过去 24 小时

---

## 📌 今日速览

过去 24 小时社区异常活跃，共 50 条 Issue 更新、13 个 PR 流转。**bug 修复与 provider 兼容性** 成为双主线：malformed `Retry-After` 触发 NaN 立即重试的严重缺陷在 24 小时内完成了"报告 → PR → 合并"全流程；同时 `Mistral reasoning`、`Azure Foundry Chat Completions`、`LLM Gateway` 等多家 provider 集成持续推进。**0.85.1 版本回归**也引发关注，OpenRouter `baseUrl` 覆盖、Vertex 思考级别、OpenCode Zen 会话 ID 等问题集中浮现。

---

## 🚀 版本发布

过去 24 小时内无新 Release。近期最新可见版本为 **0.85.1**（存在 [#9725](https://github.com/earendil-works/pi/issues/9725) 等回归问题，建议关注下一个 patch 版本）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 为何重要 |
|---|---|---|---|---|
| 1 | [#7836](https://github.com/earendil-works/pi/issues/7836) Edit fuzzy match 漏匹配空白差异行 | ✅ CLOSED | 12 | 长期 top 反馈，12 楼讨论聚焦 `normalizeForFuzzyMatch` 不折叠空白，小模型在 edit 工具上频繁误命中 |
| 2 | [#8684](https://github.com/earendil-works/pi/issues/8684) `PI_OFFLINE` 静默关闭全部 provider 发现 | 🟢 OPEN | 10 | **文档 vs 行为不一致**：本应只禁用启动网络请求，实则整会话关停 model 目录发现 |
| 3 | [#9482](https://github.com/earendil-works/pi/issues/9482) 空 body 400 被误判为 context overflow，触发破坏性自动压缩 | 🟢 OPEN | 2 | **严重质量问题**：瞬时 400 错误导致 ~400k token 上下文被自动销毁 |
| 4 | [#9361](https://github.com/earendil-works/pi/issues/9361) Windows `shellPath` 在加载扩展时被忽略，回退到 WSL bash.exe | 🟢 OPEN | 7 | Windows 平台非确定性 shell 解析，扩展加载即改变行为 |
| 5 | [#9571](https://github.com/earendil-works/pi/issues/9571) Malformed `Retry-After` HTTP-date 产生 NaN，重试进入紧循环 | 🟢 OPEN | 6 | **已 24h 内被 [#9724](https://github.com/earendil-works/pi/pull/9724) 修复**，429 风暴风险 |
| 6 | [#9391](https://github.com/earendil-works/pi/issues/9391) 压缩后陈旧签名 thinking 块每轮被重放，Anthropic 持续丢弃 | 🟢 OPEN | 4 | 影响所有长会话 + Anthropic 用户，每轮都出现 `prefix_binding_mismatch` 噪声 |
| 7 | [#9602](https://github.com/earendil-works/pi/issues/9602) 压缩请求因包含 thinking 消息而溢出 | 🟢 OPEN | 5 | 本地 Qwen3.8 / 16k 输出限制下复现，已由 [#9717](https://github.com/earendil-works/pi/pull/9717) 修复 |
| 8 | [#9036](https://github.com/earendil-works/pi/issues/9036) `openai-codex` SSE 解析器将整响应缓存为单一字符串，触发 V8 OOM | 🟢 OPEN | 3 | **致命级**：macOS / Node 26.7.0 下 `gpt-...` 流式响应直接 FATAL heap OOM |
| 9 | [#9577](https://github.com/earendil-works/pi/issues/9577) Signal 杀死的 bash 工具仍 resolve 成功 | ✅ CLOSED | 4 | SIGKILL/SIGTERM 场景下无法区分"成功"与"被中断"，调用方拿到的只是部分输出 |
| 10 | [#9725](https://github.com/earendil-works/pi/issues/9725) 0.85.1 回归：OpenRouter `baseUrl` 无法按文档方式覆盖 | ✅ CLOSED | 3 | Commit 4e69b0c 引入，按 provider 配置覆盖 `baseUrl` 时对所有 model 一刀切 |

> 备选关注：#8760（OpenRouter `:free` 模型 400）、#9609（session 时间戳带 `Z` 却是本地时间）、#9708（migration 无备份原地重写 session）。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|---|---|---|
| 1 | [#9724](https://github.com/earendil-works/pi/pull/9724) `fix(ai)`: malformed Retry-After 回退到指数退避 | ✅ CLOSED | 修 [#9571](https://github.com/earendil-works/pi/issues/9571)；`getRetryDelayMs` 把不可解析日期当作缺失处理，`validateServerRetryDelayMs` / `abortableSleep` 拒绝非有限延迟 |
| 2 | [#9722](https://github.com/earendil-works/pi/pull/9722) `fix(ai)`: 重试无 body 的 4xx | ✅ CLOSED | 在 retryable 列表加入 `4\d{2}`，解决 OpenAI SDK 风格 `400 status code (no body)` 不被重试的问题 |
| 3 | [#9720](https://github.com/earendil-works/pi/pull/9720) `fix(ai)`: Mistral 推理派发改用 `thinkingLevelMap`，新增 `zai-glm-5-3` | ✅ CLOSED | 用 `model.thinkingLevelMap !== undefined` 替代硬编码 allowlist，并加入 GLM-5.3 |
| 4 | [#9717](https://github.com/earendil-works/pi/pull/9717) `fix(coding-agent)`: 压缩摘要中限制仅含 thinking 的消息 | ✅ CLOSED | 修 [#9602](https://github.com/earendil-works/pi/issues/9602)；`serializeConversation` 不再把整段 reasoning 灌进压缩 prompt |
| 5 | [#9714](https://github.com/earendil-works/pi/pull/9714) `feat(ai)`: Azure Foundry Chat Completions 部署 | 🟢 OPEN | 实现 [#9645](https://github.com/earendil-works/pi/issues/9645)；先内置 `deepseek-v4-pro` |
| 6 | [#9668](https://github.com/earendil-works/pi/pull/9668) `feat(coding-agent)`: 提示缓存预热（实验性） | 🟢 OPEN | **mitsuhiko 亲提**，WIP；用于在长会话中保持 prompt cache 命中 |
| 7 | [#9719](https://github.com/earendil-works/pi/pull/9719) `feat(tui)`: 工具 shell 垂直内边距可配 | ✅ CLOSED | 新增 `toolShellPaddingY` 设置（0/1，默认 1），贯通 streaming / event / restored 三条路径 |
| 8 | [#9630](https://github.com/earendil-works/pi/pull/9630) `feat(coding-agent)`: 事件处理器支持取消订阅 | ✅ CLOSED | `pi.on(...)` 返回 unsubscribe；分发时拷贝 handler 列表，避免派发过程中增删影响本次分发 |
| 9 | [#7610](https://github.com/earendil-works/pi/pull/7610) `feat(ai)`: LLM Gateway / LLM Gateway DevPass 内置 provider | 🟢 OPEN | 作为 OpenAI-completions 兼容 provider 内置；取代此前被秒关的 [#7480](https://github.com/earendil-works/pi/issues/7480) |
| 10 | [#9706](https://github.com/earendil-works/pi/pull/9706) `fix(coding-agent)`: 基于 transcript 校验 eval prompt | ✅ CLOSED | 用 transcript 中回放的 system prompt 校验文档变体；错误观测保留 usage / timings / session artifacts |

> 备选：#9705（TUI context footer eval，Docker 隔离）、#9694（DeepSeek flash 改名 v4 后的测试同步）、#9693（footer cwd 测试跨平台化）。

---

## 📈 功能需求趋势

从近 24 小时 50 条 Issue 提炼，可归纳为 **五大方向**：

1. **Provider / 模型兼容性**（占比最高，约 30%）
   - OpenRouter（`baseUrl` 覆盖、`:free` 模型 `max_tokens`）
   - Anthropic 签名 thinking 重放（[#9391](https://github.com/earendil-works/pi/issues/9391)）
   - Google Vertex（`THINKING_LEVEL_MINIMAL` on Gemini 3 Flash）
   - Vercel AI Gateway / OpenCode Zen / GMI Cloud / LLM Gateway / Azure Foundry / Qwen Token Plan GLM-5.3
   - Mistral 推理通过 `thinkingLevelMap` 驱动

2. **重试与错误处理鲁棒性**
   - `Retry-After` NaN / 不可

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-18

## 今日速览

今天 Qwen Code 仓库发布了 **v0.24.0-nightly.20260917** 和 **Desktop v0.24.0** 双版本，ACP 边界协议和桌面 CLI 均有重要修复。社区讨论集中于**三大热点**：Windows 平台 ConPTY 进程泄漏（P1，已 16 评论）、上下文/Token 预算机制的连串问题（#12028 系列），以及 IDE 集成（VS Code / Zed / Web Shell）的持续打磨。

---

## 版本发布

### 🔖 v0.24.0-nightly.20260917.f822124af5
- **docs(serve)**: 记录已合并的 ACP 边界协议接受点（PR #12024，@wenshao）
- **fix(ci)**: 等待已发布的导出结果返回

🔗 https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0-nightly.20260917.f822124af5

### 🔖 Desktop v0.24.0
- **fix(cli)**: ACP 权限队列作用域限定到当前会话（PR #11802，@chiga0）
- **feat(channels)**: 新增共享输出模式（shared output modes）

🔗 https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.0

---

## 社区热点 Issues（Top 10）

### 1. [#11303](https://github.com/QwenLM/qwen-code/issues/11303) — Windows ConPTY 进程泄漏 P1 ⭐16 评论
VS Code Companion 内的 qwen-cli 在 Windows 上泄漏 headless `conhost.exe` 进程，12 小时后累积 347 个子进程、约 2.8 GB 内存。**这是当前最高优先级 Bug**，影响所有 Windows + VS Code 用户，急需在 0.24.x 修复。

### 2. [#9278](https://github.com/QwenLM/qwen-code/issues/9278) — `/review` 发布时收敛建议设计 ⭐10 评论
wenshao 主导的设计文档，跟踪如何避免「评审 → finding → 修复 → diff 变大」的失控回路（回路增益 > 1）。涉及 telemetry、诊断、运维发布的多个工作项，是 `/review` 命令长期演进的核心。

### 3. [#12061](https://github.com/QwenLM/qwen-code/issues/12061) — callback 身份变化替换活跃的 tool scheduler ⭐8 评论
`useReactToolScheduler` 因 callback 身份变化重建 `CoreToolScheduler`，导致正在运行中的 batch 被替换、产生竞态。该问题对 TUI 稳定性影响显著。

### 4. [#11732](https://github.com/QwenLM/qwen-code/issues/11732) — 0.23.3 React error #185 ✅已关闭 ⭐8 评论
原生 monitor 任务运行时 TUI 崩溃。已闭环，是 0.23.3 系列回归问题中的代表性案例。

### 5. [#12053](https://github.com/QwenLM/qwen-code/issues/12053) — 精简 Goal 运行时 ⭐7 评论
两次实测表明 `/goal-draft` 在约 100 个工具调用内完成目标，但仍要承担证据目录和检查点开销。提议根据当前轮证据判断完成度，删除冗余结构（对应 PR #12123）。

### 6. [#8138](https://github.com/QwenLM/qwen-code/issues/8138) — worktree 设置写入错误位置 ⭐7 评论
在 git worktree 中修改设置会被写入项目根目录 `.qwen` 而非 worktree 自身的 `.qwen`，自 7 月开放至今仍未修复，是历史最久、影响 worktree 用户日常使用的问题之一。

### 7. [#10689](https://github.com/QwenLM/qwen-code/issues/10689) — kimi-k3 工具调用格式错误反复失败 P1 ⭐6 评论
通过 OpenAI 兼容代理使用 `moonshot/kimi-k3` 时，长会话反复出现「Model response contained a malformed tool call」，5 次重试用尽仍失败。**这是新模型接入的典型痛点**。

### 8. [#12072](https://github.com/QwenLM/qwen-code/issues/12072) — OpenRouter 预设发送错误 Header ⭐6 评论
内置 OpenRouter 预设发送 `X-OpenRouter-Title`，但 OpenRouter 只识别 `X-Title`。**所有通过 OpenRouter 路由的用户**当前都拿不到正确的 app attribution。

### 9. [#11956](https://github.com/QwenLM/qwen-code/issues/11956) — 无参 tool 的 `parameters` 序列化为 null ⭐6 评论
0.23.4 将无参工具的 `parameters` 序列化为 null，导致严格的 OpenAI 兼容网关拒绝整个请求。是**生态兼容性**层面的关键 Bug。

### 10. [#10887](https://github.com/QwenLM/qwen-code/issues/10887) — 工具错误无早期终止 P1 ⭐4 评论
0.20.1–0.21.0 上 agent 进入死循环（同一工具反复返回错误）但无终止机制，单会话消耗 5–14M token。**直接关联成本控制**问题。

> 其他值得关注的：#12091（live session 被删除导致 transcript 永久损坏 P1）、#11783（TUI React #185 崩溃 P1）、#11817（Windows CI 用例确定性失败 P1）

---

## 重要 PR 进展（Top 10）

### 1. [PR #12007](https://github.com/QwenLM/qwen-code/pull/12007) — 停止会话恢复误判未应答通知
修复会话恢复分类器将「已记录但未应答的后台通知」误判为中断回合，并防止 daemon 在自动回合运行时错误提供「继续执行」选项。**会话可靠性关键修复**。

### 2. [PR #11270](https://github.com/QwenLM/qwen-code/pull/11270) — 后台 Agent 进度看门狗超时
为后台 Agent 回合（含新启动、恢复运行、常驻继续）增加固定进度看门狗：模型/控制工作 15 分钟无进度超时、每个执行工具独立 10 分钟截止。**防止「僵尸 agent」耗尽资源**。

### 3. [PR #12080](https://github.com/QwenLM/qwen-code/pull/12080) — 记住响应中的速率限制
流式路径已通过 `withResponse()` 读取响应，**当前却丢弃了响应中的速率限制 headers**。本 PR 让系统记住剩余窗口，配合未来的限流策略。

### 4. [PR #12134](https://github.com/QwenLM/qwen-code/pull/12134) — Web Shell 顶部固定会话计划
在 Web Shell 转录上方增加可折叠的 plan 条，复用终端 sticky-todo 排序和 5 项上限。响应 #1895 长期诉求。

### 5. [PR #12123](https://github.com/QwenLM/qwen-code/pull/12123) — Goal 工具描述精简 40%
将三个 Goal 工具每次模型请求的描述/Schema 字符数从 5860 降到 3499（约 -40%）。每次请求都节省 token，长期会话收益显著。

### 6. [PR #12050](https://github.com/QwenLM/qwen-code/pull/12050) — Web Shell 把 `/export` 输出作为工件暴露
使 `/export md|html|json|jsonl` 在 Web Shell 中以 turn 形式可用，沿用现有预览/下载控件。Artifact 引用可跨会话历史重放。

### 7. [PR #11242](https://github.com/QwenLM/qwen-code/pull/11242) — Browser-use Chrome Native Messaging 中继
通过本地 Native Messaging host + Qwen Chrome 扩展把 Browser SDK 接入用户现有 Chrome，桥接本地 socket ↔ Native Messaging，扩展管理 debugger 附着、转发 CDP 命令。**大幅扩展自动化浏览器能力**。

### 8. [PR #11865](https://github.com/QwenLM/qwen-code/pull/11865) — `isAsyncOperator` 仅识别 ASCII 空白
`rule-parser.ts` 的 `isAsyncOperator` 使用 JS `/\s/`，把 Unicode 空白也当作 bash 分词符，导致中文/全角空格下 `&` 误判。本 PR 收窄为 space/tab/newline。**安全与解析正确性**。

### 9. [PR #12115](https://github.com/QwenLM/qwen-code/pull/12115) — Linux 独立安装包 glibc 预检
CentOS 7 等老系统可能下载并安装带 Node 22 运行时的官方 Linux 包，但宿主 glibc 太旧无法启动 → 装完即崩。本 PR 在安装前预检 glibc。

### 10. [PR #12085](https://github.com/QwenLM/qwen-code/pull/12085) — Web Shell 恢复远程 Workspace 添加流
加入 Codex 风格的远程连接：已验证的 daemon 记为已连接计算机、bearer token 仍 tab-scoped，「Add workspace」弹出本地/远程选择。**多人/多机使用体验升级**。

---

## 功能需求趋势

从过去 24 小时更新的 50 个 Issue 中提炼：

| 方向 | 代表 Issues | 热度 |
|------|-----------|------|
| **IDE 集成（VS Code / Zed / Web Shell）** | #11303、#12059、#12056、#11361、#12085、#12134、#11242 | 🔥🔥🔥 |
| **上下文 / Token 预算管理** | #12028 系列（#12029、#12030、#12033、#12048）、#12123 | 🔥🔥🔥 |
| **新模型 / 网关兼容** | #11956、#10689（kimi-k3）、#12072（OpenRouter）、#11894（DeepSeek） | 🔥🔥🔥 |
| **ACP / `qwen serve` 多端** | #12008、#12113、#9278（/review）、#11802、#12024 | 🔥🔥 |
| **CI/CD 与发布工程** | #11109、#10904、#12128、#11134、#12115 | 🔥🔥 |
| **TUI 稳定性（React #185）** | #11732、#11783、#11817 | 🔥🔥 |

> 「`#12028` 系列」是 @yiliang114 在 9 月 16-17 日集中拆出的上下文与 token 预算改进计划，正在快速被 PR 化（#12007、#12123）。

---

## 开发者关注点

1. **Windows 体验是最大短板**
   ConPTY 进程泄漏（#11303）、TUI 崩溃（#11783、#11817）、路径消毒（#12082）连续 P1。Windows + VS Code 用户几乎是当前最受影响的群体。

2. **长上下文 ≠ 一切照旧**
   多个 Issue（#12029、#12030、#12033、#12048）指出：按「窗口百分比」表达的预算在大窗口下静默失效，扩展上下文文件无脑常驻，`/context` 分类不闭合。**项目正在从「能用大窗口」走向「合理使用大窗口」**。

3. **多模型生态兼容是新的日常**
   kimi-k3、DeepSeek、OpenRouter、OpenAI 严格网关——每个第三方接入点都有自己的「方言」（tool 参数序列化、finish_reason 语义、Header 命名）。社区反馈强烈希望有更稳的 provider 抽象层。

4. **「失控循环」与「沉默代价」最受关注**
   `#9278` 的 `/review` 设计、`#10887` 的工具错误无终止、`#12091` 的 live session 删除导致 transcript 永久损坏——都体现了用户对 **agent 自主行为可见性、可终止性、可恢复性** 的强烈诉求。

5. **ACP / Web Shell 协同正在成熟**
   围绕 `qwen serve`、ACP 容量回收（#12008）、权限队列 session-scoped（#11802）、AskUserQuestion 在 Zed 渲染（#11361）的密集讨论显示，**多 IDE 协同**是 0.24 周期的主战场。

---

> 报告生成基于 2026-09-18 过去 24 小时 GitHub 数据。原仓库：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-18** | **数据源：github.com/Hmbown/DeepSeek-TUI**

---

## 📌 今日速览

今日社区动态以 **v0.9.14 重构与缺陷修复** 为主线：会话恢复相关的多个高赞 Issue（#6207、#6225、#6185）已全部关闭，多个子代理可靠性与 TUI 性能优化条目同步落地；ModelScope 提供商集成 PR 已合入，AICraft 主机文档补充跟进中。整体来看，社区焦点集中在 **子代理编排稳健性、TUI 渲染热路径优化、以及 MCP / Fleet 架构债务清理** 三条主线上。

---

## 🚀 版本发布

过去 24 小时无新 Release 发布。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 标题 | 评论 | 状态 | 链接 |
|---|-------|------|------|------|------|
| 1 | #6207 | [bug] session picker 拒绝归属正确但 runtime store 来自其他主机的已保存会话 | 19 | CLOSED | [→](https://github.com/Hmbown/Codewhale/issues/6207) |
| 2 | #6225 | [bug] 无法在新进程中恢复会话（Nifty 自诊断） | 8 | CLOSED | [→](https://github.com/Hmbown/Codewhale/issues/6225) |
| 3 | #6152 | [enhancement, rust] 为只读客户端引入 broadcast/watch 事件投影 | 5 | CLOSED | [→](https://github.com/Hmbown/Codewhale/issues/6152) |
| 4 | #6169 | [bug] TUI 缺少 job-control 握手，进程组后台化会触发 SIGTTIN 悬挂 | 5 | CLOSED | [→](https://github.com/Hmbown/Codewhale/issues/6169) |
| 5 | #6185 | [bug] 恢复时渲染空 transcript，工具调用修复结果未持久化 | 5 | CLOSED | [→](https://github.com/Hmbown/Codewhale/issues/6185) |
| 6 | #6244 | [bug] Fleet role 模糊选择阻塞 agent 生成（生产环境 cw:768b024a） | 4 | CLOSED | [→](https://github.com/Hmbown/Codewhale/issues/6244) |
| 7 | #6278 | [bug, subagents] write-claim 争用导致共享根目录并行写被禁止 | 4 | CLOSED | [→](https://github.com/Hmbown/Codewhale/issues/6278) |
| 8 | #6277 | [bug, subagents] worker 的报告回合被后代消费，预算耗尽无回执 | 3 | CLOSED | [→](https://github.com/Hmbown/Codewhale/issues/6277) |
| 9 | #6189 | Workflow 默认共享 token 预算（120k）压垮真实运行 | 3 | CLOSED | [→](https://github.com/Hmbown/Codewhale/issues/6189) |
| 10 | #6282 | [bug, subagents] 子代理工具结果应在捕获时封顶（1 MiB / 10k token） | 3 | CLOSED | [→](https://github.com/Hmbown/Codewhale/issues/6282) |

**为什么重要：**
- **#6207 / #6225**：会话恢复是日常使用最高频路径，归属校验过严会直接阻断用户工作流，社区反馈集中。
- **#6169**：TUI 在启动后失去前台所有权又无 SIGTSTP/SIGCONT 处理器，是底层终端控制缺陷。
- **#6152**：是 v0.9.14 重构待办中的核心架构改造，单消费者 mpsc 升级为 broadcast/watch 是支撑多客户端的关键。
- **#6278 / #6277 / #6189 / #6282**：四连击暴露子代理（Fleet）系统仍是当前最薄弱环节——预算、并发争用、报告回收、上限封顶四类问题均来自真实工作流崩溃案例。
- **#6185**：从已落盘 journal 恢复却渲染空 transcript，损伤数据可信度。
- **#6244**：唯一一条标红"生产失败"（cw:768b024a），角色消歧的体验问题已演变为可用性事件。

---

## 🛠 重要 PR 进展

过去 24 小时内仅有 2 条 PR 更新，但均已 CLOSED（视为合入），内容质量较高：

| # | PR | 标题 | 作者 | 状态 | 链接 |
|---|----|------|------|------|------|
| 1 | #6294 | feat(subagent): 在捕获时封顶子代理工具结果（修复 #6282） | xiechimon | CLOSED | [→](https://github.com/Hmbown/Codewhale/pull/6294) |
| 2 | #6299 | Feat: ModelScope 提供商支持（OpenAI 兼容） | yrk111222 | CLOSED | [→](https://github.com/Hmbown/Codewhale/pull/6299) |

**要点解读：**

- **#6294** — 直接修复子代理读 542KB 文件膨胀到 638k token 后零变更死亡的案例。采用 codex-rs 的"捕获时截断 + 上下文记账"放置规则，而非步进间被动节流，是当前最被关注的稳定性修复。
- **#6299** — 接入 ModelScope 推理 API（Qwen / DeepSeek / Kimi / GLM 等开源模型统一入口），与 #6289"删除 ProviderSetupTemplate 特殊化"的决策方向一致：所有 OpenAI 兼容主机降级为普通 provider。

> **补充**：多个高优先级 Issue（如 #6210 git 子进程移出写锁、#6211 轮询→watch/notify、#6213 帧级重算消除、#6283 分页子读取、#6202 嵌入 ast-grep-core）已通过关联 PR 落地；建议在仓库的 `codewhale-ops/PERF-OPPORTUNITIES-20260915.md` 与 0.9.14 refactor 看板中追踪其合并状态。

---

## 📈 功能需求趋势

从过去 24 小时 Issues 提炼：

1. **TUI 性能与渲染优化**（热度最高）
   - 帧级 / 增量级重算消除（#6213）
   - 轮询循环 → watch/notify 改造（#6211）
   - git 子进程移出写锁（#6210）
   - MATE 终端闪烁回归（#6311，OPEN）

2. **子代理 / Fleet 体系**
   - 写根解耦与 disjoint exact_files 放行（#6278）
   - 报告回合预算与回收（#6277）
   - 子读取分页化（#6283）
   - 只读权限模型重做（#6298，OPEN）

3. **架构债务清理**
   - MCP 双栈合并（#6142，OPEN，~13.2k 行 + ~4.5k 行）
   - 事件通道升级 broadcast/watch（#6152）
   - 删除 ProviderSetupTemplate 特殊化（#6289）

4. **多 Provider / 多客户端扩展**
   - ModelScope 接入（PR #6299）
   - AICraft 文档（#6304，OPEN）
   - App-server turn 队列 inspect/cancel（#6176）

5. **代码编辑安全**
   - 嵌入 ast-grep-core 在工具编辑路径上拦截语法破坏（#6202）

6. **会话与编辑器体验**
   - 自动压缩阈值触发修复（#6297）
   - ACP `serve --acp` 沙箱配置生效（#6310，OPEN）
   - 新建 prompt 中键 Up 行为修复（#6291，OPEN）

---

## 👨‍💻 开发者关注点

从社区反馈中可归纳出四类高频痛点：

1. **"会话恢复链路脆弱"** — 跨进程恢复、归属校验、checkpoint → transcript 渲染、断电后 journal 完整性，是当前最密集的缺陷来源（#6207、#6225、#6185、#6297）。

2. **"子代理在真实负载下死亡"** — 多份报告指向同一类故障：token 预算耗尽、写锁互斥、报告回合被后代挤占、超大读取未截断（#6189、#6277、#6278、#6282）。这反映出当前 Fleet 模型对"扇出 + 长上下文"工作流的承载力不足。

3. **"审批 / 安全门过严或不可见"** — `sandbox_mode/ask` 在 ACP 通道被忽略（#6310）、review gate 大 diff 失败且不输出评论（#6285）、Fleet 只读定义语义不清导致 verifier 误用 computer-use（#6298）。开发者既希望默认安全，也希望失败时能给出可执行信号。

4. **"终端交互细节回归"** — MATE 终端闪烁（#6311）、YOLO 模式缺失（#6309）、键 Up 误删多行 prompt（#6291）等小问题体现出 TUI 在多终端模拟器、多平台下的兼容性维护成本。

---

> 💡 **建议关注**：OPEN 状态的 #6142（MCP 双栈合并）、#6187（MCP 连接监督）、#6298（Fleet 权限重做）均为架构级议题，落地后会显著改善下游开发者的扩展体验；建议优先参与讨论或评审。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*