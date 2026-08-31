# AI CLI 工具社区动态日报 2026-08-31

> 生成时间: 2026-08-31 02:55 UTC | 覆盖工具: 9 个

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
**报告日期：2026-08-31**

---

## 一、生态全景

当前 AI CLI 工具生态呈现"**头部守成、垂直突围、问题外溢**"的三重态势：以 Claude Code、OpenAI Codex、Gemini CLI 为代表的模型厂商原生 CLI 在多 Agent、可观测性、桌面稳定性上持续投入，但 Windows 体验、子代理状态语义、计费透明度成为共性短板；OpenCode、Pi、CodeWhale 等第三方/开源 CLI 则以**模型中立性**和**插件可扩展性**作为差异化锚点（OpenCode 76 评论的 `/goal` 提案、Pi 一日内合并 8 个 PR 上线腾讯 Token Plan/StepFun/DeepSeek Responses 等多家 Provider），生态贡献节奏反超官方工具。**安全/信任边界**首次上升为头部议题（Qwen Code #10561 P1 命令执行漏洞、Codex Guardian 鉴权反复回退、Copilot CLI v1.0.81 多项企业网络回归），提示行业从"功能竞赛"切换至"质量与信任竞赛"。

---

## 二、各工具活跃度对比

| 工具 | Issue 增量 | PR 增量 | 新版本发布 | 关键版本号 | 社区体量（最热Issue评论数） |
|------|-----------|---------|-----------|-----------|---------------------------|
| **Claude Code** | 50 | 1 | ❌ 无 | — | 838（#38335） |
| **OpenAI Codex** | 高活跃 | 10（均为 bot） | ✅ rust-v0.152.0-alpha.4/5/6 | v0.152.0 alpha | 50（#28919） |
| **Gemini CLI** | 中等 | 多条 | ✅ nightly | v0.59.0-nightly.20260831 | 13（#22323） |
| **GitHub Copilot CLI** | 21 | 1 | ❌ 无 | v1.0.81（疑似回归） | 8（#1285） |
| **Kimi Code CLI** | 2 | 0 | ❌ 无 | 0.39.1 | 0（早期反馈） |
| **OpenCode** | ~30 | 高 | ❌ 无 | 1.17.x | 76（#27167） |
| **Pi** | 36 | 8 | ❌ 无 | 0.84.4 | 51（#7547） |
| **Qwen Code** | 中等 | 多条 | ❌ 无（夜间失败） | v0.22.3-nightly | 15（#8124） |
| **DeepSeek-TUI (CodeWhale)** | 39 | 50 | ❌ 无（v0.9.12 待合） | v0.9.12 Draft | 20（#5316） |

**关键观察：** CodeWhale 以 50 条 PR 的吞吐量领跑单日迭代节奏，Pi 紧随其后（8 条 PR + 36 条 Issue 更新），显示出快速迭代特征；Claude Code、Copilot CLI、Kimi CLI 接近"维护冻结"状态；OpenAI Codex 处于"Rust 重写密集发布"窗口。

---

## 三、共同关注的功能方向

### 1. **多 Agent / 子代理编排与可观测性** 🔥🔥🔥
- **Claude Code**：子 Agent 强制异步、TaskStop ownership 错误（#75043）、独立 compact 窗口（#90347）、子 Agent 暂停-恢复（#78224）
- **Qwen Code**：跨会话消息（#8724）、会话-Issue 自动绑定（#10425）、`list_agents` + `send_message` 机制
- **Gemini CLI**：subagent 假成功（#22323）、`/bug` 命令缺失子代理上下文（#21763）
- **OpenAI Codex**：`create_thread` 不继承父会话权限（#33282）、未暴露完整 thread-management 工具（#30233）

### 2. **Windows 平台稳定性** 🔥🔥🔥
- **Claude Code**：窗口强制置顶（#85891）、隐身重启（#90172）、SCM 权限（#89711）、headless Ubuntu 挂起（#90800）
- **OpenAI Codex**：控制其他设备设置缺失（#28919）、WSL 终端静默失败（#37104）、Computer Use 崩溃（#37043）、浮动宠物穿透（#41465）
- **Gemini CLI**：Windows 下 13 个 vitest 默认失败、CRLF 检测误判
- **Qwen Code**：Computer Use 驱动 Windows 启动 panic（#10538）、skill 重装 EPERM（#10189）
- **Pi**：维护者主动立项调研 Windows 优先级（#7547，51 条评论）

### 3. **TUI 编辑体验与长会话可靠性** 🔥🔥
- **Claude Code**：CJK 输入换行（#2054）、turn 末输入静默丢弃（#85603）
- **OpenAI Codex**：Vim 模式提交后重置（#21804，16 点赞）、TUI 速率限制横幅（#41742）
- **Gemini CLI**：shell "Awaiting user input" 卡死（#25166）、Terminal resize flicker（#21924）
- **Copilot CLI**：FileWatch 死循环 + 13GB 日志（#4612）、长会话 OOM（#4664）、Compaction 无限重试（#4663）

### 4. **MCP（Model Context Protocol）生态成熟度** 🔥🔥
- **OpenAI Codex**：包风格 MCP server 命名（#41700）、工具元能力未暴露（#30233）
- **Gemini CLI**：schema 缺 `type` 校验拒绝（#28839）、工具名截断冲突（#28971）、128 工具上限触发 400（#24246）
- **CodeWhale**：MCP 自服务鉴权统一（#5747）、MCP 启动细节移出聊天面板（#5760）
- **Copilot CLI**：远程 ADO MCP 认证失败（#4660）

### 5. **计费透明度与缓存可观测性** 🔥
- **Claude Code**：#38335（838 评论）已成社区头号议程
- **Gemini CLI**：ACP `PromptResponse` 成本估算偏高 3 倍（#28840）
- **Pi**：Anthropic prompt cache 永不命中 transcript（#8849）、OpenRouter auto 负价（#8875）
- **OpenCode**：OpenRouter 越权调用 Gemini（#37354）、OAuth 成本估算（#46324）

---

## 四、差异化定位分析

| 维度 | 模型厂商原生 CLI | 开源/第三方 CLI |
|------|----------------|----------------|
| **代表工具** | Claude Code、Codex、Gemini CLI、Copilot CLI、Qwen Code、Kimi CLI | OpenCode、Pi、CodeWhale |
| **核心策略** | 与自家模型/订阅深度绑定（如 Claude Max、Copilot 订阅） | **模型中立**，追求 Provider 路由灵活性 |
| **目标用户** | 已订阅特定模型的开发者 | 多模型并行/规避厂商锁定/插件开发者 |
| **迭代节奏** | 较慢，多需等官方排期 | 快速，Pi/CodeWhale 单日 8–50 个 PR |
| **技术路线** | 闭源核心 + 渐进式能力扩展 | 模块化、插件 SDK 化、AST 感知工具 |
| **典型创新** | Claude Code 子 Agent 编排、Codex Computer Use、Gemini Auto Memory | OpenCode 插件 Typed RPC、CodeWhale TUI Tideline、Pi 多 Provider 内置 |

**关键分化信号：**
- **Pi** 当日内置了腾讯 Token Plan（PR #8844）、DeepSeek V4 Responses（PR #8873），体现"国产模型 + OpenAI/Codex 协议"双轨扩张；
- **OpenCode** 用零核心改动的插件实现长期高呼声功能（#27167 → #46328），验证"SDK 化"路线可行；
- **CodeWhale** 以"TUI 视觉一致性"为单点突破，配合 MCP 自服务鉴权、桌面端 Phase 0 基础（Unix socket transport）构筑产品力；
- **Qwen Code** 走"安全加固 + Worktree 增强"路线，10561 P1 漏洞与 hooks/worktree/probe tree 三大信任边界并行修复；
- **Kimi Code CLI** 数据信号最弱（仅 2 条新 Issue），生态体量与成熟度明显落后。

---

## 五、社区热度与成熟度

### 🟢 高活跃 + 快速迭代
- **CodeWhale**：50 PR + 39 Issue，v0.9.12 候选就绪（113 条 CHANGELOG），但 #5740 暴露"Codewhale review ✓ 不可信"——CI/审查体系存在治理风险
- **Pi**：8 PR + 36 Issue，单日合并 7 个关键 Bug 修复，覆盖 JSONL、Anthropic 缓存、WebSocket 悬挂、分支摘要等问题，**工程质量冲刺特征明显**
- **OpenCode**：24/30 Issue 已关闭，修复率 80%，维护者响应积极

### 🟡 高活跃 + 维护模式
- **OpenAI Codex**：3 个 alpha 版本连发 + Windows 回归集中爆发，**密集迭代与质量风险并存**
- **Gemini CLI**：P1 安全问题（Node 20 → 22 EOL 升级）+ Auto Memory 安全 + Agent 假成功，处于"稳定化"攻坚期
- **Qwen Code**：P1 漏洞 + hooks 安全 + 错误透传清理，**首次出现"安全优先级压倒功能"**

### 🟠 中等活跃 + 痛点累积
- **Claude Code**：838 评论的最热议题 5 个月未解，TUI/Windows 问题持续发酵，**用户信任正在流失**
- **Copilot CLI**：v1.0.81 暴露 OAuth/Compaction/工具别名静默失败，**发布质量管控受质疑**

### 🔴 低活跃
- **Kimi Code CLI**：仅 2 条新 Issue，模型行为可靠性 + 移动端兼容两组问题需关注

---

## 六、值得关注的趋势信号

### 1. **"Agent 假成功"成为新的可靠性黑洞**
Gemini subagent MAX_TURNS 后仍报 GOAL（#22323）、Claude Code TaskStop ownership 错误、Codex Computer Use 静默崩溃——开发者**越来越难以依赖 Agent 的终止状态做编排决策**。预计未来 3–6 个月，各工具将陆续引入"终止语义标准化"（如 NORM-AGENT-EXIT 或类似约定）。

### 2. **OpenAI 兼容协议解析鲁棒性是新增量 Bug 源头**
Pi #8858/#8861（markdown 围栏的 tool arguments、相同 index 的多次 tool call）、OpenCode #45839（Moonshot/DeepSeek/Azure 拒绝空 assistant turn）、Codex #41465 等显示，**当一个协议被 N 家 Provider 各自实现后，CLI 端的"协议规约"角色反而成为质量关键**。

### 3. **企业级网络环境兼容性成为隐形门槛**
Copilot CLI v1.0.81 在 TLS 检测代理下 OAuth 失败（#4671）、Codex Guardian 鉴权反复回退、Qwen Code daemon 5xx 错误透传——**企业内网代理、强制 TLS 拦截、合规审计要求**正在成为工具能否进入生产环境的新筛子。

### 4. **MCP 从"功能"转向"治理"**
工具数量上限（Gemini 128）、schema 校验（缺 `type`）、命名空间冲突、自服务鉴权（CodeWhale #5747）、远程 MCP 认证失败（Copilot ADO）——MCP 生态已从"接入多少 server"转向"如何稳健地管理生态"，预计 MCP 注册表/Schema 校验服务会出现。

### 5. **"热重载 + 配置可观察" 成为体验分水岭**
Qwen Code #10568（模型热加载）、Copilot CLI #3606（插件需手动 reload）、CodeWhale `AuthDecision` 透明化等显示，**配置即改即生效**与**配置变更可见**正成为头部工具的体验分水岭，落后者会被反复吐槽。

### 6. **Windows 不再是"二等公民"**
Pi 维护者主动立项调研 Windows（#7547）、Codex 多平台崩溃、Qwen Code Computer Use panic、Claude Code 隐身重启——**Windows 用户已具备相当规模话语权**，工具的跨平台优先级权重正在被重估。

### 7. **"会话 resume"成跨工具共性 Bug 类别**
OpenCode #5474（`/undo` 只回滚对话）、Codex #40219（删除的对话又回来）、Copilot CLI #4664/#4668（长会话 OOM + 中断后被延迟创建）、CodeWhale #5750（Engine 自造 session id 而非采用 host）——**会话生命周期的可恢复性与幂等性**是所有 AI CLI 必须补齐的基础能力。

---

## 附录：开发者选型速查

| 需求 | 推荐工具 | 关键依据 |
|------|---------|---------|
| 国产模型 + 多协议 Provider 一体化 | **Pi** | 单日合并腾讯 Token Plan/DeepSeek Responses/StepFun |
| 快速迭代 + 插件生态扩展性 | **OpenCode / CodeWhale** | 单日 30–50 PR 吞吐量，关闭率 80%+ |
| 已有 Copilot 订阅 + 企业集成 | **Copilot CLI** | 但**慎用 v1.0.81**，建议停留 v1.0.80 |
| Claude 重度使用 + 多 Agent 编排 | **Claude Code** | 需接受 TUI 长会话脆弱与额度不透明 |
| Gemini 3 模型 + OS 沙箱探索 | **Gemini CLI** | 关注 #19873 提案与 Node 22 EOL 修复 |
| GPT-5.6 完整支持 | **Codex** | **Windows 用户建议短期回退到 5.5** |
| 严肃生产环境部署 | **避免** | Kimi Code CLI 当前信号不足，建议观望 |

---

*本报告基于 2026-08-31 公开 GitHub 数据生成，建议结合各工具最近 30 日趋势综合判断。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据周期**: 截至 2026-08-31  
**样本规模**: Top 20 PRs / Top 15 Issues  
**核心信号**: Issue 评论数、PR 更新频次、跨 PR/Issue 的话题聚类

---

## 一、热门 Skills 排行（按社区关注度综合排序）

| 排名 | Skill / PR | 关注度信号 | 当前状态 |
|---|---|---|---|
| 1 | **skill-creator 召回率修复** ([#1298](https://github.com/anthropics/skills/pull/1298)) | 关联 Issue [#556](https://github.com/anthropics/skills/issues/556) 引发 12 评论、10+ 独立复现，叠加 PR [#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050) 三个 Windows 兼容性 PR 协同修复，是当前最热的"基础设施级"问题 | OPEN |
| 2 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | 针对所有 AI 生成文档的孤儿/寡行/编号错位问题，覆盖面广，社区提案动机普遍 | OPEN |
| 3 | **Hivemind 多 Agent 编排** ([#1628](https://github.com/anthropics/skills/pull/1628)) | 8 月新提案，主打"零成本将机械工作下放给 headless worker，Claude Code 保留规划/评审"，架构思路受关注 | OPEN |
| 4 | **self-audit 四维推理质量门** ([#1367](https://github.com/anthropics/skills/pull/1367)) | 与 Issue [#1385](https://github.com/anthropics/skills/issues/1385) 提出的 Reasoning Quality Gate Pipeline 联动，形成"交付前自检"完整链路 | OPEN |
| 5 | **frontend-design 改版** ([#210](https://github.com/anthropics/skills/pull/210)) | 早期 PR 但持续迭代至 3 月，针对"指令可执行性"问题，属于高使用频次 skill 的体验改进 | OPEN |
| 6 | **skill-quality-analyzer / skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | 元能力型 skill，紧扣社区最大的信任议题（Issue #492），具备上线即核心地位潜力 | OPEN |
| 7 | **scnet-hpc 高性能计算** ([#1615](https://github.com/anthropics/skills/pull/1615)) | 8 月新提案，企业/科研场景代表性 skill，体现技能集向垂直行业延伸 | OPEN |
| 8 | **ServiceNow 平台** ([#568](https://github.com/anthropics/skills/pull/568)) | 覆盖 ITSM/ITOM/SecOps/CSDM 等 8 大模块，单 PR 体量最大，迭代跨度近 5 个月 | OPEN |

---

## 二、社区需求趋势（基于 Issue 议题聚类）

### 趋势 1： 安全与信任边界（热度第一）
- **代表 Issue**: [#492](https://github.com/anthropics/skills/issues/492) — 43 评论（榜单第 1），社区贡献的 skill 被挂在 `anthropic/` 命名空间下，造成"官方 vs 社区"信任混淆
- **代表 PR**: [#83](https://github.com/anthropics/skills/pull/83) 提供 `skill-security-analyzer` 作为应对
- **洞察**: 这是当前社区**最大未解议题**，已演变为生态级信任问题

### 趋势 2：🏢 企业级组织能力（热度第二）
- **代表 Issue**: [#228](https://github.com/anthropics/skills/issues/228) — 16 评论，呼吁 Claude.ai 组织级 Skill 共享；[#189](https://github.com/anthropics/skills/issues/189) — 6 评论，plugin 重复安装
- **洞察**: 单点 → 组织共享 → 权限管控 的企业落地链尚未贯通

### 趋势 3：🧪 评估与质量门（横切热点）
- **代表 Issue**: [#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)、[#1385](https://github.com/anthropics/skills/issues/1385)
- **代表 PR**: [#1298](https://github.com/anthropics/skills/pull/1298)、[#1602](https://github.com/anthropics/skills/pull/1602)、[#1367](https://github.com/anthropics/skills/pull/1367)
- **洞察**: 评估工具（`run_eval.py` / `evaluation.py`）普遍 0% 召回，社区急需"可用的量化反馈环"

### 趋势 4：🧠 Agent 治理与符号化记忆
- **代表 Issue**: [#1329](https://github.com/anthropics/skills/issues/1329) `compact-memory`（9 评论）、[#412](https://github.com/anthropics/skills/issues/412) `agent-governance`（CLOSED，6 评论）
- **洞察**: 长任务上下文压缩、policy enforcement、trust scoring 是新兴方向

### 趋势 5：📄 文档格式全面化
- **代表 Issue**: [#12](https://github.com/anthropics/skills/issues/12) docx 空白重排；[#1487](https://github.com/anthropics/skills/issues/1487) claude-api skill 注入 156k token
- **代表 PR**: [#486](https://github.com/anthropics/skills/pull/486) ODT、[#538](https://github.com/anthropics/skills/pull/538) PDF、[#541](https://github.com/anthropics/skills/pull/541) DOCX
- **洞察**: 文档类 skill 数量已密集，但**鲁棒性问题**（大小写、ID 冲突、whitespace、token 膨胀）成为新瓶颈

### 趋势 6：️ 跨平台与企业集成
- **代表 Issue**: [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock、Skill 在 Windows 上的崩溃（[#1099](https://github.com/anthropics/skills/pull/1099)/[#1050](https://github.com/anthropics/skills/pull/1050)）

---

## 三、高潜力待合并 Skills（近期可能落地）

| 优先级 | PR | 推荐合并理由 |
|---|---|---|
| ⭐⭐ | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator 召回修复 | 阻塞整个描述优化闭环，影响所有 skill 质量 |
| ⭐⭐⭐ | [#1607](https://github.com/anthropics/skills/pull/1607) claude-api 退役模型清理 | 事实性问题，闭合 Issue #1603，影响范围确定 |
| ⭐⭐⭐ | [#1602](https://github.com/anthropics/skills/pull/1602) mcp-builder 评估修复 | 同时解 Issue #1390 的 0/N 评分 |
| ⭐⭐ | [#1628](https://github.com/anthropics/skills/pull/1628) Hivemind | 8 月新 PR，时效性强，体现生态前沿 |
| ⭐⭐ | [#1615](https://github.com/anthropics/skills/pull/1615) scnet-hpc | 8 月新 PR，垂直行业样板 |
| ⭐⭐ | [#539](https://github.com/anthropics/skills/pull/539) YAML 引号校验 | 1 行级预防性修复，与 #1298 互补 |
| ⭐ | [#538](https://github.com/anthropics/skills/pull/538) PDF 大小写修复 | 跨平台 lint 类问题，影响面广 |
|  | [#83](https://github.com/anthropics/skills/pull/83) 质量/安全分析器 | 与 Issue #492 形成"工具 + 规范"对子 |

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是：在 Skills 数量快速膨胀的背景下，建立一套可验证、可信、可治理的基础设施——即"如何判断一个 Skill 好不好、安不安全、能否跨组织共享"已成为比"再新增一个 Skill"更迫切的命题。** Issue #492 的 43 评论独占鳌头、skill-creator 周边 PR 反复出现、self-audit / quality-analyzer 类元工具集中爆发，三股信号共同指向同一个判断：Skills 生态正从"内容贡献期"切入"工程化与治理期"。

---

*报告维度：PR 评论数（数据空缺时回退至关联 Issue 评论数）、更新频次、跨 PR/Issue 协同度、问题严重级别综合加权。*

---

# Claude Code 社区动态日报
**日期：2026-08-31**

---

## 一、今日速览

今日社区关注度最高的话题仍是 **#38335** —— 自 3 月以来 Claude Max 订阅用户的会话额度异常消耗过快的问题，已积累 **838 条评论、476 个 👍**，但官方仍标记为 `[invalid]`，用户不满情绪持续发酵。TUI 相关体验问题（输入丢失、CJK 用户换行、反馈面板缺陷）成为新的热点，桌面端稳定性（Windows 隐身重启、SCM 服务权限）也引发多起高质量 bug 报告。

---

## 二、版本发布

**无新版本发布。**

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 关注度 | 关键看点 |
|---|-------|--------|----------|
| 1 | [#38335](https://github.com/anthropics/claude-code/issues/38335) Max 订阅额度异常消耗 | 💬838 / 👍476 | 长达 5 个月未解决，社区最热议题；官方标记 invalid 但用户持续举证 |
| 2 | [#85891](https://github.com/anthropics/claude-code/issues/85891) Windows 桌面窗口强制置顶 | 💬45 / 👍100 | 与 macOS 的 #66516 同源问题，无任何禁用设置，严重影响多任务工作流 |
| 3 | [#2054](https://github.com/anthropics/claude-code/issues/2054) Enter 键插入换行（已关闭） | 💬33 / 👍148 | CJK 用户长期痛点；现以 Closed 处理，建议关注后续实现细节 |
| 4 | [#85603](https://github.com/anthropics/claude-code/issues/85603) TUI 输入在回合末被静默丢弃 | 💬24 | 长时间 Agent 会话中，用户在 turn 运行期间输入的文本在 `end_turn` 时未送出 |
| 5 | [#75043](https://github.com/anthropics/claude-code/issues/75043) 嵌套子 Agent 强制异步、TaskStop 失败 | 💬19 / 👍5 | 涉及 Opus 4.8 / Fable 5 / Sonnet 多模型组合，编排器子 Agent 调度缺陷 |
| 6 | [#32364](https://github.com/anthropics/claude-code/issues/32364) Claude Code Web 支持 OpenTelemetry | 💬9 / 👍35 | 企业可观测性需求，Web 端与 CLI 端能力对齐诉求 |
| 7 | [#90172](https://github.com/anthropics/claude-code/issues/90172) Desktop 隐身重启摧毁运行中的会话 | 💬5 / 👍2 | "Can't reach your computer" 等连锁故障的伞形（umbrella）报告，已拆分为 9 个独立 issue |
| 8 | [#78224](https://github.com/anthropics/claude-code/issues/78224) 后台子 Agent 可暂停-恢复（替代终止） | 💬4 / 👍2 | 遇 usage limit 或 transient API error 时保留磁盘工作状态 |
| 9 | [#90347](https://github.com/anthropics/claude-code/issues/90347) 每 Agent 独立的 auto-compact 窗口 | 💬3 / 👍3 | 主会话与子 Agent 分别配置压缩阈值，避免大上下文下 600k-940k token 才压缩 |
| 10 | [#89711](https://github.com/anthropics/claude-code/issues/89711) CoworkVMService SCM 恢复动作权限失败 | 💬2 | Windows 桌面 Cowork 服务的"自安装以来从未生效"问题 |

> **值得注意的异常：** 来自同一作者 `sworrl` 的 **17 条** AUP/cyber 安全过滤器误报 issue（#74482–#74502 区间），均为 7 月 5 日批量创建并于 8 月 31 日统一关闭，疑似自动化报告 / 滥用模式，建议官方审视此类工单的可信度与处理流程。

---

## 四、重要 PR 进展

> ⚠️ 过去 24 小时仅 **1 条** PR 活跃更新，社区代码贡献节奏明显放缓。

| # | PR | 状态 | 说明 |
|---|----|------|------|
| 1 | [#35350](https://github.com/anthropics/claude-code/pull/35350) 插件脚本使用可移植 shebang | CLOSED | 将插件 shell 脚本从 `#!/bin/bash` 改为 `#!/usr/bin/env bash`，解决 NixOS 等非标准路径环境的兼容问题（部分修复；与 #11029 联动） |

---

## 五、功能需求趋势

从本期数据可归纳出 **5 个明确方向**：

1. **多 Agent 架构深化** — 围绕 Agent 工具的细粒度控制：
   - 独立 compact 窗口（#90347、#90862）
   - 子 Agent 暂停/恢复（#78224）
   - 跨会话消息通道（#88939 可配置 peer 注册前缀）

2. **可观测性与企业集成** — OpenTelemetry 配置覆盖 Claude Code Web（#32364）。

3. **TUI 人机交互改进** — CJK 输入友好（#2054）、输入防丢失（#85603）、反馈面板可用性（#90882）。

4. **桌面端稳定性** — Windows 窗口行为（#85891）、隐身重启机制（#90172）、Cowork 服务权限（#89711）。

5. **使用额度透明化** — #38335 持续推动 Max 计划用量可解释、可追溯的需求。

---

## 六、开发者关注点

**核心痛点：**

- 🔥 **额度不透明 + 官方响应缺位**：#38335 是开发者议程的最高优先级，反映社区对"信任计量"的强烈诉求。
- 🖥️ **桌面端可靠性滑坡**：隐身重启、SCM 权限、always-on-top、CSP frame-ancestors 等多个 Windows 相关 issue 集中爆发，Windows 体验明显落后于 macOS。
- ⌨️ **TUI 在长会话下脆弱**：输入丢失、反馈面板无光标、Enter 误触发发送等问题影响实际生产力。
- 🤖 **子 Agent 编排边界模糊**：嵌套 spawn 行为不可控（异步强制、TaskStop ownership 错误），多 Agent 工作流缺乏清晰的"父-子契约"。
- 🐧 **Linux 无图形环境下兼容性堪忧**：#90800 报告 CLI 在 headless Ubuntu 上除 `--version` 外全部挂起，影响服务器/容器化部署场景。

**高频小需求：** 跨平台 shebang、可配置端口（Web/Desktop）、CSP 完整放行、AUP 误报申诉通道。

---

*数据来源：GitHub `anthropics/claude-code` 仓库公开 Issues/PRs。本期共监测 50 条 Issue 增量、1 条 PR 增量。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-31**
**数据范围：openai/codex 仓库过去 24 小时动态**

---

## 📌 今日速览

今日 Codex 仓库活跃度集中在 **Windows 平台稳定性** 与 **GPT-5.6 新模型适配** 两大主题。`rust-v0.152.0` 在 24 小时内连发 alpha.4 / alpha.5 / alpha.6 三个预发布版本，迭代节奏明显加快。同时，社区集中爆发的"code-mode host exited during handshake"问题（多条相关 Issue）显示新版本对 Windows 桌面端的 tool-call 链路存在较大回归风险，建议 Windows 用户暂留旧版。

---

## 🚀 版本发布

| 版本 | 说明 |
|------|------|
| `rust-v0.152.0-alpha.6` | 今日最新预发布 |
| `rust-v0.152.0-alpha.5` | 24 小时内发布 |
| `rust-v0.152.0-alpha.4` | 24 小时内发布 |

24 小时内连续推出三个 alpha 预发布，提示核心 Rust 重写仍处于密集迭代阶段，包含大量工具调用、Guardian 鉴权与 history 相关变更。

---

## 🔥 社区热点 Issues

以下按"评论数 + 点赞数 + 影响力"综合排序，挑选出今日最值得关注的 10 条 Issue：

### 1. [#28919 — Windows 桌面端缺失 "控制其他设备" 设置页签](https://github.com/openai/codex/issues/28919)
- **评论 50 · 👍 47**（今日最热）
- Windows 26.611 版本升级后用户在 Connections 设置中找不到"control other devices"选项，无法配置跨设备控制。该问题自 6 月创建以来持续累积社区反馈，反映 Windows 桌面端设置页存在长期 UI 缺陷。

### 2. [#41049 — GPT-5.6 模型 code-mode host 握手失败](https://github.com/openai/codex/issues/41049)
- **评论 39 · 👍 1**
- Windows + `gpt-5.6-sol/terra/luna` 模型下，本地命令执行通道在初始化握手阶段异常退出，导致模型无法读取目录与执行命令。该问题严重阻塞了 5.6 系列模型在 Windows 上的可用性，是当日最严重的模型兼容性回归。

### 3. [#37104 — Windows / WSL 集成终端启动前静默失败](https://github.com/openai/codex/issues/37104) *(已关闭)*
- **评论 23 · 👍 9**
- Codex Desktop 26.730.8199.0 在 WSL 环境下 PTY 未启动前就已失败，底部与侧边面板均无法打开。属于 Papercuts 2026 跟踪列表中的关键回归，关闭动作暗示已有 PR 修复合入。

### 4. [#37043 — Windows Computer Use 在 EnumWindows 处崩溃](https://github.com/openai/codex/issues/37043)
- **评论 19 · 👍 4**
- 捆绑的 Computer Use helper 启动后 `sky.list_apps()` 与 `sky.list_windows()` 立即返回 `0x80070003` (ERROR_PATH_NOT_FOUND)，即便重启 Windows 与 Codex 也无法恢复，阻碍 CUA 在 Windows 平台落地。

### 5. [#25233 — `/side` 聊天过快过期且行为不透明](https://github.com/openai/codex/issues/25233)
- **评论 12 · 👍 26**（点赞数极高）
- 即时 `/side` 副对话的过期时间过短且无明确提示，社区以 26 个点赞表达强烈不满，是 macOS 端体验类反馈的代表。

### 6. [#40219 — macOS 服务端删除的对话仍在"最近"中复现](https://github.com/openai/codex/issues/40219)
- **评论 11 · 👍 10**
- macOS ChatGPT 桌面 26.818.41705 上，从服务端删除的对话会被本地缓存重新拉回，且无法手动移除，反映客户端—服务端同步逻辑存在缺陷。

### 7. [#41465 — Windows 浮动宠物窗口穿透且无法拖动](https://github.com/openai/codex/issues/41465)
- **评论 11 · 👍 6**
- Windows 11 上 Codex 26.825.4187.0 的浮动宠物保持 click-through 且失去鼠标交互，典型的小功能却阻塞了"宠物"特性的核心交互。

### 8. [#33282 — Codex Desktop `create_thread` 未继承 worktree 任务的自动批准模式](https://github.com/openai/codex/issues/33282)
- **评论 11 · 👍 5**
- 创建子 thread 时沙箱与自动批准模式丢失，导致 worktree 任务反复弹审批。属于 app-server 与 sandbox 链路的设计缺陷，影响多任务协作流。

### 9. [#30233 — Codex 应用未暴露 thread-management 工具](https://github.com/openai/codex/issues/30233)
- **评论 6 · 👍 10**
- 应用层通过 tool search 暴露了 `create_thread` / `fork_thread` 等元能力，却未把 `send_message_to_thread` 等操作工具一并暴露，使模型"看得到但做不了"，影响复杂多线程编排。

### 10. [#21804 — TUI 提交后保留 Vim 模式（增强需求）](https://github.com/openai/codex/issues/21804)
- **评论 4 · 👍 16**
- 提交 prompt 后 TUI 的 Vim 模式被强制重置为 Normal，建议增加配置项保留 Insert 模式。该 issue 凭 **16 个点赞** 成为今日功能呼声最高的 enhancement，体现重度 Vim 用户对持久编辑态的强烈需求。

---

## 🛠 重要 PR 进展

> 今日 10 条新 PR 全部来自 `copyberry[bot]`（自动化机器人账号），均同日创建并合并关闭，反映 Codex 团队的 CI/重构自动化程度较高。以下为关键内容提炼：

### 1. [#41744 — `update_plan` 工具改为 opt-in](https://github.com/openai/codex/pull/41744)
将 `tools.update_plan.enabled` 默认值改为 `false`，并从多类提示词中移除其捆绑说明，降低默认提示噪音。

### 2. [#41743 — 在 turn 元数据中标记 history ingestion 请求](https://github.com/openai/codex/pull/41743)
Responses API 的 turn metadata 中新增 `history_ingest_requested`，并在 `history-notes` token 预算扩展启用时强制覆盖用户传入值。

### 3. [#41742 — TUI 中显示可操作的速率限制横幅](https://github.com/openai/codex/pull/41742)
`account/rateLimits/read` 携带 banner 与账户身份数据，匹配账户后渲染到 composer 上方，便于用户立即看到剩余配额。

### 4. [#41700 — 支持包风格的 MCP server 命名](https://github.com/openai/codex/pull/41700)
允许 MCP server 名称包含 `:`、`@`、`/`、`.`，从而支持 `npm:@modelcontextprotocol/server-sequential.thinking` 等命名空间风格。

### 5. [#41683 — 为环境 MCP 测试设置工作目录](https://github.com/openai/codex/pull/41683)
环境后端的 stdio MCP server 没有宿主本地工作目录回退，测试夹具需要显式指定工作区。

### 6. [#41673 — 修复旧版 JediTerm 终端的光标渲染](https://github.com/openai/codex/pull/41673)
旧版 JediTerm 在 `DECSCUSR` 中会打印空格中间字符，覆盖光标下方字形；修复后用可修复的终端字形并重绘。

### 7. [#41666 — Node REPL 首次执行免 Guardian 等待](https://github.com/openai/codex/pull/41666)
首次 REPL 执行可在 Guardian 异步分类尚未返回时即放行，避免明显延迟。

### 8. [#41660 — 在 history 压缩间保留 Guardian 授权](https://github.com/openai/codex/pull/41660)
压缩与宿主注入上下文改写模型可见历史，但不应被视作"用户授权变更"，避免 Guardian 重复走授权流程。

### 9. [#41630 — 为默认启用 update_plan 更新测试](https://github.com/openai/codex/pull/41630)
覆盖默认、显式启用、显式禁用三种 `tools.update_plan.enabled` 状态，验证跨请求提示工具列表一致性。

### 10. [#41613 — 将 Vim 历史测试迁入 history search 模块](https://github.com/openai/codex/pull/41613)
与 history search 实现相邻组织 Vim 历史导航测试，共享"类人输入"测试 helper。

---

## 📈 功能需求趋势

从 Issue 与 PR 提炼，可清晰看出 Codex 当前社区诉求集中在以下几个方向：

| 方向 | 代表性 Issue | 社区热度 |
|------|-------------|---------|
| **Windows 桌面稳定性** | #28919 / #37043 / #37104 / #41049 / #41465 / #41170 / #41073 | 极高，多平台报告崩溃 |
| **GPT-5.6 系列模型兼容** | #41049 / #41255 / #40913 / #41241 / #32823 | 阻塞性，影响所有 Windows 用户 |
| **Computer Use (CUA)** | #37043 / #41170 / #41327 | 期望高、稳定性差 |
| **会话持久化与历史** | #25233 / #40219 / #25397 / #20303 | 多个平台反馈 |
| **MCP / 工具生态** | #30233 / #41700 | 命名与暴露面均有呼声 |
| **TUI 编辑体验** | #21804 / #32828 | Vim / LaTeX 等重度用户诉求 |
| **Guardian / 沙箱 / 鉴权** | #41255 / #41121 / #16052 / #34331 / #30485 | 权限链路反复出问题 |

---

## 💡 开发者关注点

综合今日社区反馈，开发者的痛点可归纳为四类：

1. **Windows 桌面回归频繁**：每次小版本升级都可能引入 handshake / sandbox / 终端启动问题，缺乏明确的"已知问题"与回滚指引。
2. **GPT-5.6 模型尚未在 Windows 稳定可用**：`gpt-5.6-sol / terra / luna` 触发 code-mode host 崩溃，CLI 启动阶段即失败，建议短期回退到 5.5 系列。
3. **会话生命周期不透明**：`/side` chat 过期过快、删除的对话又回来、history 跨设备不同步等问题说明会话元数据生命周期与同步模型仍未收敛。
4. **工具/权限链路断点多**：`create_thread` 不继承父会话权限、tool search 未暴露完整 thread-management、移动端 Remote 接管会降级桌面 full-access——说明跨客户端的权限上下文传递尚未抽象清楚。

---

**总结**：今日 Codex 处于"Rust 重写加速 + GPT-5.6 接入 + Windows 桌面回归"的多重压力交汇期，开发者短期建议保守升级、关注 alpha 版本；中长期可关注 `update_plan` 默认关闭、TUI 速率限制横幅、MCP 包风格命名等几项已合入改进。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-31** | **数据来源：google-gemini/gemini-cli**

---

## 1. 今日速览

今日社区焦点集中在 **Agent 可靠性** 和 **Auto Memory 系统** 两大方向。多个高优先级 Issue 反馈子代理（subagent）在达到 MAX_TURNS、generalist agent 长时间挂起、shell 命令执行卡死等稳定性问题；同时，Auto Memory 相关的多个 Bug 被集中提出，涵盖日志泄露、内存补丁隔离、低质量会话无限重试等安全问题。代码层面修复了大量由 symlink、Windows 环境差异、MCP 工具 schema 校验引发的隐性故障，并完成了 Node.js 20 → 22 的 EOL 升级。

---

## 2. 版本发布

### v0.59.0-nightly.20260831.g0bd1d4397

发布了新的 nightly 版本，提交哈希 `g0bd1d4397`，基于上一日 nightly 版本 `20260830.g0bd1d4397` 构建（同一哈希说明主要为自动化版本 bump）。完整变更日志见 [GitHub Compare 链接](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260830.g0bd1d4397...v0.59.0-nightly.20260831.g0bd1d4397)。自动化版本发布 PR：[#29139](https://github.com/google-gemini/gemini-cli/pull/29139)。

---

## 3. 社区热点 Issues

### 🔴 P1 高优先级 Bug

1. **[#22323] Subagent 在 MAX_TURNS 后仍报告 GOAL 成功**（13 评论 👍2）
   - `codebase_investigator` 子代理实际已达到最大轮次限制，但仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了中断事实。属于状态语义错误，可能导致上游工作流误判任务成功。👉 [查看](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **[#21409] Generalist agent 长时间挂起**（8 评论 👍8，**最高赞**）
   - 用户报告每当 `gemini-cli` 委派给 generalist agent 时（如创建文件夹这种简单操作）会永久挂起，需等待 1 小时以上。社区高度关注，提示在系统提示中明确禁止委派可临时绕过。👉 [查看](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **[#25166] Shell 命令执行后卡在 "Waiting input"**（4 评论 👍3）
   - 即便是非常简单的命令，CLI 也会错误地停留在 "Awaiting user input" 状态，影响核心交互体验。👉 [查看](https://github.com/google-gemini/gemini-cli/issues/25166)

4. **[#21983] Browser subagent 在 Wayland 下失败**（4 评论 👍1）
   - 浏览器子代理在 Wayland 桌面环境下出现 GOAL 终止但实际未完成工作。👉 [查看](https://github.com/google-gemini/gemini-cli/issues/21983)

5. **[#22186] get-shit-done 输出 hook 导致崩溃**（3 评论）
   - 特定 hook 在输出即将完成时导致 CLI 崩溃，影响工作流可执行性。👉 [查看](https://github.com/google-gemini/gemini-cli/issues/22186)

6. **[#21763] Bug 报告缺失 subagent 上下文**（2 评论）
   - `/bug` 命令生成的诊断报告不包含子代理内部信息，调试 subagent 故障时极为不便。👉 [查看](https://github.com/google-gemini/gemini-cli/issues/21763)

### 🟡 功能增强与改进

7. **[#19873] 利用 Gemini 3 模型的 bash 原生能力 —— 零依赖 OS 沙箱 + 后执行意图路由**（8 评论 👍1）
   - 重磅提案：Gemini 3 模型训练为天然 bash 用户（grep/cat/sed/awk 链式操作），但当前 sandbox 阻碍该能力释放。建议构建零依赖 OS 沙箱层 + 意图路由，让模型在安全边界内最大化本地能力。👉 [查看](https://github.com/google-gemini/gemini-cli/issues/19873)

8. **[#22745] EPIC：引入 AST 感知的文件读取、搜索与代码库映射**（7 评论 👍1）
   - 系列调研型 EPIC，评估基于 AST 的工具是否能更精确读取方法边界、减少 turn 数、降低 token 噪音。👉 [查看](https://github.com/google-gemini/gemini-cli/issues/22745)

9. **[#21968] Gemini 不会主动使用 skills 与 sub-agents**（6 评论）
   - 用户即便配置了 `gradle`、`git` 等 skills，模型仍需显式提示才会调用，自主性不足。👉 [查看](https://github.com/google-gemini/gemini-cli/issues/21968)

10. **[#26525] 安全：为 Auto Memory 增加确定性脱敏并降低日志量**（5 评论）
    - Auto Memory 读取本地转写并发送给后台抽取模型，secret 脱敏发生在内容进入模型上下文之后，存在泄露窗口；同时 skill 日志泄露存量内容。👉 [查看](https://github.com/google-gemini/gemini-cli/issues/26525)

---

## 4. 重要 PR 进展

### ✅ 已合并 / 已关闭（fix 系列，Xsidz 等贡献者集中清理）

1. **[#28834] 消除 BFS 工作区扫描中的 ENOENT 误报**
   - 修复工作区扫描时遇到的瞬态 lock 目录引发的虚假警告。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28834)

2. **[#28835] 当工作区位于 $HOME 时跳过用户 agent 目录，避免重复告警**
   - 解决在 home 目录运行 CLI 时 `Duplicate agent name` 误报。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28835)

3. **[#28839] 规范化 MCP 工具 schema，确保根节点为 `type:object`**
   - 修复 Vertex AI 严格模式等 provider 因 MCP schema 缺 `type` 而报 `tools.N.custom.input_schema` 错误。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28839)

4. **[#28840] ACP `PromptResponse` 填充 cached/thought tokens**
   - 修复 ACP 客户端因 `_meta.quota` 缺失缓存与思考 token 而导致成本估算偏高三倍的问题。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28840)

5. **[#28848] 非交互模式下优雅处理 `refreshAuth` 失败**
   - 在 `--prompt` 启动时，`refreshAuth()` 失败从裸栈崩溃改为干净的鉴权错误退出码。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28848)

6. **[#28837] 将 `logChatCompression` OTel 调用纳入 `bufferTelemetryEvent` 包装**
   - 统一约 48 个 logger 的遥测调用路径，避免 OTel SDK 初始化前的丢/重发事件。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28837)

7. **[#28832] Windows 下以"跳过并说明原因"替代失败**
   - 在干净 Windows checkout 上，`packages/core` 的 13 个 vitest 失败被改为跳过，标注原因（权限、PowerShell 7 缺失等）。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28832)

### 🟢 待合并 / Open

8. **[#28973] 安全：将沙箱镜像从 EOL 的 node:20-slim 升级到 node:22-slim**（P1）
   - 修复 [#28584]，Node.js 20 已于 2026-04-30 EOL，不再接收安全更新。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28973)

9. **[#28971] 保持被截断 MCP 工具名的唯一性**
   - 修复 MCP 工具名经"前 30 + 后 30 字符"截断后两端相同导致在注册表冲突的问题。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28971)

10. **[#28975] 为 symlink 工作区根保留 glob 结果**
    - 修复 macOS `/tmp` → `/private/tmp` 场景下 `glob` 错误返回 "No files found"。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28975)

11. **[#28983] 检测混合行尾而非发现单个 CRLF 即判定为 CRLF**
    - `detectLineEnding()` 对包含 `\r\n` 即返回 CRLF，导致混合行尾文件被错误归类。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28983)

12. **[#28972] 为 `formatTruncatedToolOutput` 增加 `maxChars > 0` 保护**
    - 修复 [#28620]，非正数预算会生成损坏输出（负数 headChars、负 tailChars）。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28972)

13. **[#28978] 文档：补充 HookDecision 缺失值（ask, approve）**
    - 更新 `docs/hooks/reference.md` 中缺失的 `HookDecision` 枚举说明。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/28978)

14. **[#29137] Dependabot：一次性更新 77 项 npm 依赖**
    - 批量升级依赖，含 simple-git、MCP SDK 等。👉 [查看](https://github.com/google-gemini/gemini-cli/pull/29137)

---

## 5. 功能需求趋势

通过分析今日活跃 Issue 矩阵，可识别出以下社区最关注的功能方向：

| 方向 | 代表 Issue | 关注点 |
| --- | --- | --- |
| **Agent 稳定性与可靠性** | #22323, #21409, #25166, #21763 | subagent 挂起/状态语义错误、shell 卡死、bug 报告缺失上下文 |
| **Auto Memory 系统重塑** | #26525, #26523, #26522, #26516 | 确定性脱敏、patch 隔离、低信号会话重试、整体质量 |
| **OS 级原生沙箱与权限路由** | #19873, #22672 | 释放 Gemini 3 bash 亲和力、阻止破坏性操作（git reset/--force） |
| **AST 感知代码库工具** | #22745, #22746, #19561 | 精准读取、降低 token 开销、tactful extraction |
| **Subagent 体系完善** | #20195, #21968, #22232, #22598 | 本地子代理、自主调用意识、浏览器会话恢复、轨迹可分享 |
| **Browser Agent 健壮性** | #21983, #22267, #22232 | Wayland 兼容、settings.json 覆盖、profile 锁恢复 |
| **工具生态扩展** | #28982 | Build Remote Agent 手机伴生扩展（gbr/1 协议） |
| **企业 / 文档** | #28837, #28978 | 遥测一致性、Hooks 文档完整性 |

---

## 6. 开发者关注点

基于 50 条活跃 Issue 和 35 条 PR 的反馈，社区当前痛点与高频需求归纳如下：

### 🔥 高频痛点

1. **Agent "假成功" / 状态语义不一致**
   - MAX_TURNS 超限却报告 GOAL、shell 已结束却显示 "Awaiting input"。开发者难以依赖 subagent 的终止状态做编排决策，CI/自动化链路风险显著。

2. **子代理被过度或不足使用**
   - 一方面 generalist agent 委派后立即挂起（[#21409]，👍 8），另一方面用户配置好的 skills/sub-agents 又完全不被自主调用（[#21968]）。说明 agent 调度策略与提示工程尚未稳定。

3. **路径 / symlink / 环境兼容**
   - macOS `/tmp` → `/private/tmp` symlink 导致 glob 失效；Windows 下 13 个 vitest 默认失败；home 目录即工作区时 agent 注册冲突。跨平台鲁棒性仍是痛点。

4. **Auto Memory 的安全与正确性**
   - 转写内容在脱敏前已进入模型上下文；无效 patch 被静默跳过；低信号 session 无限重试。三者构成 Auto Memory 的"三位一体"风险。

5. **MCP 工具互操作**
   - schema 缺 `type` 被严格校验拒绝；截断后命名冲突；tools > 128 即触发 400。开发者集成第三方 MCP server 时频繁踩坑。

### 🛠 高频需求

1. **更智能的工具管理**：MCP tool 数量上限时的自动裁剪/优先级机制（[#24246]）。
2. **更透明的 subagent 可观测性**：`/bug`、`/chat share` 包含子代理轨迹与上下文（[#21763], [#22598]）。
3. **任务跟踪从 in-context 迁移到持久化文件 CRUD**（[#18836], [#21000]），缓解 context rot。
4. **Terminal 性能优化**：resize 时 flicker / 卡顿需迁移到 `RenderStatic` 与 RenderWorker（[#21924]）。
5. **安全基线升级**：EOL 依赖（Node 20）下线、Auto Memory 确定性脱敏与日志最小化（[#28973], [#26525]）。
6. **Agent 自意识（self-awareness）**：模型需能准确告知用户 CLI flag、热键与自身能力（[#21432]）。

---

*日报基于公开 GitHub 数据生成，聚焦 Issues 评论活跃度与 PR 合并进展，旨在帮助开发者快速把握 Gemini CLI 生态动向。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-31**

---

## 📌 今日速览

今天 GitHub Copilot CLI 社区活跃度较高，过去 24 小时共有 **21 个 Issue 更新** 和 **1 个 PR 合并**，但**无新版本发布**。从更新内容看，**v1.0.81 版本疑似引入了多项回归 Bug**（OAuth 代理登录失败、自定义 Agent 工具失效、Compaction 失败等），同时社区对**长会话稳定性**（内存泄漏、文件监控死循环、Compaction 无限重试）问题反馈集中，建议升级前关注。

---

## 🚀 版本发布

**过去 24 小时内无新版本发布。** 最近一次版本为 v1.0.81-9（2026-08-25 前后），但该版本已暴露多项缺陷（见下方 Issue 分析）。

---

## 🔥 社区热点 Issues

以下 10 个 Issue 为过去 24 小时内**最值得关注**的动态，按重要性和社区反馈排序：

### 1. [#1285](https://github.com/github/copilot-cli/issues/1285) ⭐9 💬8 — 组织级 Agent 无法在 CLI/VS Code 中显示
- **状态**：OPEN（创建于 2026-02-04，长期未解）
- **领域**：`agents`、`enterprise`
- **摘要**：用户在 `{org}/.github-private` 仓库中按规范模板创建了 Agent，但 CLI 和 VS Code 中均无法看到。
- **为何重要**：**社区反馈最强**（9 👍 / 8 💬），直接影响企业级用户对 Copilot CLI 的 Agent 编排能力认知，阻碍了"组织级 AI 资产"的使用闭环。

### 2. [#4612](https://github.com/github/copilot-cli/issues/4612) ⭐1 💬8 — FileWatch 死循环导致 TUI 卡死、调试日志膨胀至 13 GB
- **状态**：OPEN
- **领域**：`triage`
- **摘要**：长会话/恢复会话时，FileWatch 事件进入紧密循环，导致 TUI 无响应并持续写入日志。
- **为何重要**：**严重资源消耗**（13 GB 日志）+ **功能性卡死**，影响所有长时间使用 CLI 的用户，且 `rust:copilot_runtime::protocol::jsonrpc::engine` 报错表明问题在底层 runtime 层。

### 3. [#4664](https://github.com/github/copilot-cli/issues/4664) — 恢复长会话时 Node.js 堆内存溢出（OOM）崩溃
- **状态**：OPEN
- **领域**：`triage`
- **摘要**：恢复大型/历史会话时，Node.js V8 引擎出现致命堆内存溢出错误，进程在加载阶段就崩溃。
- **为何重要**：**数据可访问性受损**——用户无法恢复历史会话，对依赖会话连续性的工作流是阻断式 Bug。

### 4. [#4671](https://github.com/github/copilot-cli/issues/4671) — v1.0.81 在 TLS 检测代理下 OAuth 登录失败（回归）
- **状态**：OPEN
- **领域**：`triage`
- **摘要**：v1.0.81 在企业级 HTTP CONNECT 代理（带 TLS 检测）环境下，Device-code 和 Web 两种 OAuth 模式均失败。v1.0.80 工作正常。
- **为何重要**：**明确的版本回归** + 影响所有企业用户，强烈建议企业内用户**暂缓升级到 v1.0.81**。

### 5. [#4663](https://github.com/github/copilot-cli/issues/4663) — 失败 Compaction 每轮无界重试，消耗计费额度
- **状态**：OPEN
- **领域**：`triage`
- **摘要**：Compaction 模型调用失败后，CLI 在后续每一轮几乎原样重试，无退避、无降级、无错误提示，导致计费浪费 + 上下文单调增长。
- **为何重要**：涉及**真实金钱损失**（重复计费）+ 无可见错误，用户难以察觉，社区影响面广。

### 6. [#4668](https://github.com/github/copilot-cli/issues/4668) — 中断的 `create_session` 1.6 小时后被静默创建，导致 Agent 工作重复
- **状态**：OPEN
- **领域**：`triage`
- **摘要**：报告为 interrupted 的 `create_session` 实际在 1 小时 38 分钟后被自动启动，Agent 主体已自行完成工作，导致**重复执行**。
- **为何重要**：**数据一致性与幂等性 Bug**，对自动化 Agent 流水线有严重影响。

### 7. [#4665](https://github.com/github/copilot-cli/issues/4665) — `sessionStart` 注入的 `additionalContext` 在每轮重复并传递给子 Agent
- **状态**：OPEN
- **领域**：`triage`
- **摘要**：每次提交 prompt 时，`sessionStart` hook 注入的上下文会被重复叠加，并传递到所有子 Agent，浪费 token。
- **为何重要**：**Token 消耗放大** + 影响 hooks 用户预期的 session 生命周期语义。

### 8. [#4660](https://github.com/github/copilot-cli/issues/4660) — 远程 Azure DevOps MCP 服务器在 v1.0.81 WAM 下 OAuth 失败
- **状态**：CLOSED（24h 内已关闭）
- **领域**：（无标签）
- **摘要**：v1.0.81 加载 ADO Remote MCP 时报"需要认证"，`/mcp auth` 也返回认证失败。
- **为何重要**：**MCP 集成是当前 AI Agent 生态的核心扩展能力**，ADO 集成失败影响 Azure DevOps 用户的开发流。已关闭表明团队已修复或跟进。

### 9. [#4594](https://github.com/github/copilot-cli/issues/4594) — 自定义 Agent 的 `web`/`search` 工具别名绑定 0 个工具
- **状态**：OPEN
- **领域**：`agents`、`tools`
- **摘要**：CLI 1.0.81-9 中，自定义 Agent 使用文档化的 `web`/`search` 类别别名时，**静默**绑定 0 个工具，Agent 失去网络与文件搜索能力，且无任何日志。
- **为何重要**：**静默失败（silent failure）** 是最危险的 Bug 类型，开发者很难定位根因。

### 10. [#4646](https://github.com/github/copilot-cli/issues/4646) — 自定义模型上 Compaction 失败（`tool_choice` 必须为 `auto`）
- **状态**：OPEN
- **领域**：`triage`
- **摘要**：使用通过 OpenRouter 注册的自定义模型（如 `~z-ai/glm-latest`）时，Compaction 报 `CAPIError: 400 Tool choice must be auto`。
- **为何重要**：**与 #4663、#2861 共同指向 Compaction 模块稳定性问题**，对 BYOK + 自定义模型用户影响显著。

> **额外提醒**：#2369（长结果无法滚动）、#3797（同窗口 cmd 标签页布局不一致）、#2851（思考强度配置消失）这三个 Windows 终端渲染类 Issue 均在 24h 内被关闭，相关问题可能已被解决。

---

## 🔧 重要 PR 进展

过去 24 小时内**仅有 1 个 PR 更新**：

### [#2381](https://github.com/github/copilot-cli/pull/2381) — 安装脚本增加 Fish Shell 的 PATH 配置支持
- **状态**：CLOSED（已关闭/合并）
- **作者**：marcelsafin
- **摘要**：原 shell profile 检测逻辑将 Fish 用户错误地归入 `*)` 通用分支，写入 POSIX `export` 语法至 `~/.profile`，而 Fish 实际不 source 该文件，也不使用 `export` 语法（PATH 在 Fish 中是数组）。PR 修复了 Fish shell 用户的 PATH 持久化问题。
- **影响**：提升 Fish shell 用户（macOS/Linux 高级用户常见选择）的开箱体验。

> ⚠️ 因今日 PR 数量较少，建议结合 `master` 分支的近期 commit 历史补充更多变更。

---

## 📈 功能需求趋势

从今日更新的 Issue 中提炼的社区诉求方向：

| 趋势方向 | 代表 Issue | 关注度 |
|---|---|---|
| **企业级 / 组织级 Agent 治理** | #1285、#4671 | 🔥 高 |
| **长会话稳定性（内存/日志/Compaction）** | #4612、#4664、#4663、#2861、#4646 | 🔥 高 |
| **MCP / 第三方工具集成** | #4660、#4594、#4670 | 🔥 高 |
| **可观测性 / OTEL 遥测** | #4169、#4669 | 中 |
| **BYOK / 自定义模型支持** | #3978、#4646 | 中 |
| **会话与 Agent 幂等性** | #4668、#4665 | 中 |
| **UX 小细节改进** | #3606（自动 reload skills）、#4666（多账户主机名显示）、#2851（思考强度持久化） | 低 |
| **多 Shell / 平台兼容性** | #2381（Fish）、#3797（Windows cmd） | 低 |
| **新功能：Voice 语音模式** | #4667 | 新（探索中） |

**核心观察**：
1. **"长会话 + 资源治理"** 是当下最突出的痛点集群。
2. **MCP 协议**作为 Copilot CLI 的扩展基石，已成为用户连接企业工具链的首选接口，集成质量直接影响产品竞争力。
3. **v1.0.81 的多个回归**显示近期发布节奏与质量保障之间存在张力。

---

## 👨‍💻 开发者关注点

综合 Issue 文本与社区反馈，开发者当前最集中的痛点和高频需求为：

### 🔴 一级痛点（阻断/高成本）
1. **会话恢复崩溃**：长会话无法恢复（#4664、#4612），影响连续工作流。
2. **资源失控**：调试日志无界增长（#4612）、堆内存溢出（#4664）、Compaction 失败导致**计费浪费**（#4663、#2861）。
3. **企业网络兼容性**：v1.0.81 在 TLS 检测代理下 OAuth 失败（#4671），企业升级风险高。

### 🟡 二级痛点（功能不可用）
4. **静默失败**：自定义 Agent 工具别名绑定 0 工具但无任何告警（#4594），调试成本极高。
5. **MCP 认证流程**：ADO 等远程 MCP 服务器认证失败（#4660、#4670）。
6. **中断语义不明确**：`create_session` 中断后被延迟创建（#4668），破坏 Agent 幂等性。

### 🟢 体验/质量类需求
7. **OTEL 遥测的稳定性**（#4169、#4669）：`telemetry.headers` 配置即崩溃、不带 `-p` 也无遥测。
8. **BYOK 切换可靠性**（#3978）：切到 BYOK 后被回切到原模型。
9. **Hook 行为可预期性**（#4665）：`sessionStart` 内容重复注入。
10. **插件 UX**（#3606）：安装插件后需手动 `/skills reload` 才能使用。

> **给开发者的建议**：
> - 企业/生产环境**暂缓升级 v1.0.81**，建议停留在 v1.0.80；
> - 使用自定义 Agent 时，显式列出工具而非依赖 `web`/`search` 别名，以规避 #4594；
> - 启用 `OTEL` 遥测时，避免在 `telemetry.headers` 中加入任何 header（#4669）。

---

*日报基于 github.com/github/copilot-cli 过去 24 小时公开数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**📅 2026-08-31 · 数据来源：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

过去 24 小时仓库活跃度较低，未发布新版本，也无 PR 更新。社区仅新增 2 条 Issue，均围绕 **0.39.1 版本**的 Bug：一条涉及模型工具调用行为异常（声明 Write/Edit 实际下发 Read），另一条涉及 iPadOS 端 Remote Control 登录失败。整体来看，今日的反馈聚焦于"模型行为可靠性"与"实验性功能的边缘场景兼容性"。

---

## 🏷️ 版本发布

**无新版本发布。** 当前最新版本仍为社区反馈中频繁出现的 **0.39.1**。

---

## 🔥 社区热点 Issues

> 过去 24 小时仅 2 条 Issue 被创建/更新，均为新提交的 Bug 报告（OPEN 状态，评论与点赞均为 0，尚处于早期反馈阶段）。

### 1. #2628 — 模型工具调用行为异常：声明 Write，实际下发 Read
- **作者**：776138506 ｜ **时间**：2026-08-30
- **版本/模型**：0.39.1（Homebrew 安装）· `kimi-code/k3-256k`
- **核心问题**：模型在文本中输出 "calling Write" 等语义，但 wire-level 实际下发的是 `Read` 工具调用，导致用户预期的写入/编辑操作未执行。
- **重要性**：⭐⭐⭐⭐⭐ — 这是典型的 **模型输出与协议层不一致** 问题，直接破坏 CLI 的核心写入能力，潜在影响所有依赖 Write/Edit 工具的工作流。
- **社区反应**：0 评论 / 0 👍，尚待关注。考虑到问题刚出现，预计维护团队将优先排查模型侧或 CLI 工具路由层。
- 🔗 [MoonshotAI/kimi-cli#2628](https://github.com/MoonshotAI/kimi-cli/issues/2628)

### 2. #2627 — iPadOS 16.6 端 Remote Control 登录失败
- **作者**：VBS-you ｜ **时间**：2026-08-30
- **版本/环境**：0.39.1 · Debian 12 / Alibaba Cloud ECS · iPadOS 16.6（Safari / WeChat 内置浏览器）
- **核心问题**：开启 `KIMI_CODE_EXPERIMENTAL_REMOTE_CONTROL` 后，在 iPadOS Safari/微信中访问 `code-rc.kimi.com` 触发"无法开始登录"错误。
- **重要性**：⭐⭐⭐⭐ — 直接影响 **Remote Control 实验功能** 在移动端的使用体验，暴露 Web 端 OAuth/认证流程对老版本 Safari 和微信 WebView 的兼容性不足。
- **社区反应**：0 评论 / 0 👍。属于实验功能边缘场景，但对习惯用 iPad 远程控制服务器的用户群体影响显著。
- 🔗 [MoonshotAI/kimi-cli#2627](https://github.com/MoonshotAI/kimi-cli/issues/2627)

---

## 🔧 重要 PR 进展

**过去 24 小时无 PR 更新。** 社区暂无代码层贡献动态。

---

## 📈 功能需求趋势

基于本期 2 条新 Issue 的信号，可以提炼出三个值得关注的趋势方向：

| 趋势方向 | 信号来源 | 解读 |
|---|---|---|
| **🤖 模型工具调用可靠性** | #2628 | 模型在 Wire 层下发与文本声明不一致的工具调用，开发者越来越关注 CLI 与底层模型之间的"契约一致性"，这可能推动团队引入工具调用的 schema 校验或 dry-run 机制。 |
| **📱 移动端 / Web 端兼容** | #2627 | Remote Control 作为面向"非桌面端"用户的关键入口，需要覆盖 iPadOS、老版 Safari、微信内置浏览器等真实用户环境。社区期望看到更完善的 Web 兼容矩阵声明。 |
| **🧪 实验功能稳定性** | #2627 | `KIMI_CODE_EXPERIMENTAL_REMOTE_CONTROL` 这类实验开关一旦被生产用户启用，便会迅速暴露在真实环境中；社区希望有更清晰的"实验 → 稳定"演进路径和兼容性文档。 |

---

## 💡 开发者关注点

综合 2 条 Issue 的反馈，开发者当前的痛点可归纳为以下三点：

1. **模型行为不可预测** — "模型说要做 A，实际做了 B" 是 LLM 应用层最棘手的问题之一。开发者期望 CLI 能提供更明确的工具调用日志、确认提示或回滚能力，避免误操作造成数据丢失。

2. **跨平台 Web 兼容性盲区** — 移动端 Safari、微信 WebView 等环境往往在官方测试矩阵之外，一旦用户在生产链路启用实验功能，会立刻暴露认证、Cookie、Web Crypto 等环节的兼容性缺陷。建议维护团队补充浏览器兼容性矩阵或最低版本要求。

3. **实验性功能的契约不明确** — `KIMI_CODE_EXPERIMENTAL_*` 类的开关缺少稳定的兼容性承诺，导致用户在升级主版本（0.39.0 → 0.39.1）后即遭遇功能不可用，影响信任度。

---

## 📎 备注

- 本日报基于 GitHub 公开数据自动生成。
- 报告期窗口：2026-08-30 ~ 2026-08-31（24h 滚动窗口）。
- 如需追踪后续进展，建议订阅相关 Issue；本期两条 Issue 均处于 OPEN 状态且无维护团队响应，开发者可在评论区补充复现日志以加速定位。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期**：2026-08-31

---

## 📌 今日速览

今日社区动态以 **Bug 修复落地** 和 **插件能力扩展** 为主线：长期高呼声的功能请求 #27167（原生存入会话目标 `/goal`）迎来首个示例插件 PR #46328；同时一批影响稳定性的核心 Bug 修复（流式输出卡死、Shell 管道泄漏、bash 退出后挂起、MCP 进程残留等）进入评审或合入阶段。Issue 关闭率较高，整体仓库健康度良好。

---

## 🚀 版本发布

过去 24 小时内 **无新 Release**。最新桌面端版本仍为历史提交的 1.17.x 系列，CLI 配套版本迭代中。

---

## 🔥 社区热点 Issues

| # | Issue | 标题 | 状态 | 互动 | 亮点 |
|---|-------|------|------|------|------|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | [FEATURE] 原生 `/goal` 会话目标 | 🟢 OPEN | 76 💬 / 👍138 | **本月最热门**，提出在 slash 系统中加入持久化会话生命周期管理 |
| [#5474](https://github.com/anomalyco/opencode/issues/5474) | `/undo` 仅回滚对话不还原文件 | 🔴 CLOSED | 31 💬 / 👍19 | 经典痛点：工作区状态与聊天历史不同步，已关闭（应有修复） |
| [#37354](https://github.com/anomalyco/opencode/issues/37354) | OpenRouter 越权调用 Gemini | 🟢 OPEN | 7 💬 / 👍1 | 安全/计费隐患，选 OpenRouter 时仍偷偷探测 Gemini 模型 |
| [#31152](https://github.com/anomalyco/opencode/issues/31152) | 每次响应陷入无限 compaction 循环 | 🔴 CLOSED | 7 💬 | 即便是空会话也触发，影响严重 |
| [#32202](https://github.com/anomalyco/opencode/issues/32202) | 重复 Skill 根目录跨重启结果漂移 | 🟢 OPEN | 6 💬 / 👍1 | 影响 `<available_skills>` 稳定性 |
| [#23982](https://github.com/anomalyco/opencode/issues/23982) | LSP `initialize` 超时过短（Java/JDTLS） | 🔴 CLOSED | 5 💬 / 👍1 | Java/Gradle 用户长期被阻塞，已修复 |
| [#34638](https://github.com/anomalyco/opencode/issues/34638) | `opencode acp` 模式忽略 `OPENCODE_CONFIG_*` | 🔴 CLOSED | 5 💬 | 阻止 ACP 子进程接入自定义 Provider 代理 |
| [#32669](https://github.com/anomalyco/opencode/issues/32669) | Glob 工具跳过点目录文件 | 🔴 CLOSED | 5 💬 / 👍5 | 即使模式包含 `.ai/` 也不匹配 |
| [#33938](https://github.com/anomalyco/opencode/issues/33938) | 升级后桌面端 `ConfigInvalidError` + 会话列表消失 | 🔴 CLOSED | 5 💬 / 👍1 | Windows 非 Git 目录受影响，双根因已修复 |
| [#46327](https://github.com/anomalyco/opencode/issues/46327) | 重复 Skill 名称 WARN（`~/.claude/skills` 与 `~/.agents/skills` 未去重） | 🟢 OPEN | 2 💬 | 今日新建，针对 symlink inode 冲突 |

> **社区情绪**：本次统计中 Issues 关闭率显著高于开放率（24/30 已 CLOSED），维护者响应积极；剩余的 OPEN 议题集中在 **多 Provider 路由** 与 **Skill 解析确定性** 两个长期议题。

---

## 🛠 重要 PR 进展

| # | PR | 类型 | 说明 |
|---|----|------|------|
| [#46328](https://github.com/anomalyco/opencode/pull/46328) | feat(plugin): `/goal` `/loop` 示例插件 | 🟢 OPEN | 闭环 #27167，零核心改动，演示自定义工具插件 SDK 用法 |
| [#46326](https://github.com/anomalyco/opencode/pull/46326) | fix(core): Provider 暂停时刷新尾部流块 | 🟢 OPEN | 100ms 批处理只检查耗时，末尾块可能无限缓冲，修复后单词不再"卡一半" |
| [#45839](https://github.com/anomalyco/opencode/pull/45839) | fix(opencode): 回放时丢弃无可观测内容的助手回合 | 🟢 OPEN | 解决 Moonshot/DeepSeek/Azure 等严格 Provider 拒绝带空 assistant turn 的请求 |
| [#46309](https://github.com/anomalyco/opencode/pull/46309) | fix(ai): 规范化工具结果历史 | 🟢 OPEN | 缓存策略与协议降级前统一本地历史，未解析调用合成错误结果 |
| [#42223](https://github.com/anomalyco/opencode/pull/42223) | fix(tui): 跨目录续接会话修正 CWD | 🟢 OPEN | `opencode -c` 在新目录能正确显示当前目录而非陈旧路径 |
| [#46324](https://github.com/anomalyco/opencode/pull/46324) | feat(openai): OAuth 成本估算 | 🟢 OPEN | 为 ChatGPT/Codex OAuth 用户提供按目录价的本地等效估算 |
| [#46085](https://github.com/anomalyco/opencode/pull/46085) | fix(shell): 跨平台限制退出后管道排空 | 🟢 OPEN | 解决 `bunx agent-browser`、`dotnet build` 后台进程不释放 |
| [#42756](https://github.com/anomalyco/opencode/pull/42756) | fix(core): 进程退出后 bash 不再挂起 | 🟢 OPEN | 同时关闭 7 个相关 Issue，覆盖多平台 |
| [#46312](https://github.com/anomalyco/opencode/pull/46312) | fix(opencode): 终止本地 MCP 进程树 | 🟢 OPEN | stdio MCP 断开/替换时清理残留子进程 |
| [#40872](https://github.com/anomalyco/opencode/pull/40872) | feat(app): "Open in" 加入 VS Code Insiders / Antigravity | 🟢 OPEN | 提升外部编辑器入口便利度 |

> 另有 PR #46105（插件 Typed RPC + 自定义事件）、#46260（设置面板显示滚动条）、#44509（生态收录 dejavu 插件）也已并入或合入；同一作者 #46321/#46323/#46325 为 TUI workspace live 修复的重复草案，已全部 CLOSED。

---

## 📈 功能需求趋势

从 Issues/PR 中提炼出当前社区最关注的 **5 大方向**：

1. **插件生态扩展** —— `/goal` 会话目标、Typed RPC、自定义事件、示例插件 SDK 化（#27167、#46328、#46105）正在成为新的功能爆发点。
2. **多 Provider / 路由治理** —— OpenRouter、OmniRoute、LiteLLM、9Router 的统一预设与计费估算需求上升（#37354、#34711、#46324）。
3. **IDE 与外部编辑器深度集成** —— VS Code Insiders、Antigravity 出现在 "Open in" 菜单的诉求（#40872），WSL/UNC 路径协同仍是 Windows 痛点（#19473）。
4. **会话与上下文管理** —— `/goal`、compaction 防抖、`<available_skills>` 跨重启确定性（#27167、#31152、#32202、#46327）。
5. **新模型适配** —— Deepseek-V4 思考开关、GLM-5.2 结构化标签兼容、Kimi/OmniRoute 解析（#24610、#34687、#34126）。

---

## 🧑‍💻 开发者关注点

1. **执行环境可靠性**：bash/Shell 进程退出后挂起、stdout/stderr 管道泄漏、post-exit 子进程未回收 —— 占据今日 PR 主要篇幅（#42756、#46085、#45136）。
2. **协议兼容性**：Moonshot/DeepSeek/Azure/litellm 等严格 Provider 对历史助手回合的拒绝（#45839），以及 OpenAI 兼容协议下 `` chunk 的误解析（#34126）。
3. **配置加载一致性**：CLI 强依赖 `opencode.jsonc` 而忽略 `opencode.json`（#30539）；ACP 模式忽略环境变量配置（#34638）；Windows scoop/npm 误判安装方式（#34734）。
4. **桌面端 UX 细节回归**：滚动条隐藏、Settings 按钮置灰、窗口无法拖动、subagent 打开失效、shell 内嵌 UTF-8 mojibake（#46260、#33882、#34573、#34808、#34749）。
5. **流式响应与批处理边界**：尾部 chunk 缓冲、`<available_skills>` 排序与去重顺序等"看似小但高频"的体验问题（#46326、#32202）。

---

**总结**：今日 OpenCode 仓库进入"密集修尾"阶段，核心稳定性问题集中收口，插件与多 Provider 治理成为下一阶段主线方向。建议关注者留意 #46328（goal/loop 插件范式）、#42756（bash 退出挂起）、#46309（工具历史规范化）的合并节奏。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-31

## 📌 今日速览

今日社区活跃度极高，单日共有 36 个 Issue 与 8 个 PR 更新，呈现明显的"质量冲刺"特征：多个影响深远的 Bug 被集中修复（如 JSONL 重复写、Anthropic 缓存失效、Codex WebSocket 悬挂等），同时新一波内置 Provider 上线（腾讯 Token Plan、StepFun、DeepSeek V4 Responses、Ollama Cloud）。系统提示膨胀、上下文窗口死亡螺旋、长会话内存爆炸成为开发者讨论最热烈的三大类问题。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。最近的版本仍为 **0.84.4**（社区反馈该版本已修复 0.84.3 的多项关键 Bug）。

---

## � 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 关键看点 |
|---|-------|------|------|----------|
| 1 | [#7547](https://github.com/earendil-works/pi/issues/7547) Windows 使用 Pi 的方式与待解决问题征集 | OPEN | 51 | 🔥 **当日最热**。维护者发起调研，征集 Windows 用户使用方式（WSL、原生、容器等）以决定 Bug 修复与文档优先级。Windows 开发者群体庞大，此帖将直接影响后续平台策略。 |
| 2 | [#3200](https://github.com/earendil-works/pi/issues/3200) prompt 命令支持视频/音频多模态 | OPEN | 10 / 👍 6 | 呼声较高的多模态扩展需求。已有 `images` 支持，请求者希望补齐 video/audio 以配合 Gemma 4、GPT-4o 等模型。 |
| 3 | [#4748](https://github.com/earendil-works/pi/issues/4748) pi-tui `getKeybindings()` 单例污染扩展 | OPEN | 6 | **真实 Bug**。扩展从自有 `node_modules` 解析 `pi-tui`，导致模块级 keybindings 单例与宿主不同步，UI 提示错位。已在 [#8872](https://github.com/earendil-works/pi/pull/8872) 修复。 |
| 4 | [#8746](https://github.com/earendil-works/pi/issues/8746) 0.84.3 长会话 OOM（20GB+） | CLOSED | 4 | **严重回归**。xhigh thinking + 子代理场景下 RSS 飙到 21–27GB，被内核 OOM killer 频繁杀死。已在 0.84.4 修复。 |
| 5 | [#8852](https://github.com/earendil-works/pi/issues/8852) 同一进程内打开 JSONL 会话两次导致 seq 重复 | CLOSED | 3 | **数据完整性 Bug**。`JsonlSessionRepo.open()` 每次返回新实例、共享 `nextSequence`，会写坏会话文件。已在 [#8853](https://github.com/earendil-works/pi/pull/8853) 修复。 |
| 6 | [#8864](https://github.com/earendil-works/pi/issues/8864) 长会话上下文死亡螺旋 | CLOSED | 2 | `clampMaxTokensToContext()` 静默发送 `max_tokens: 1`，会话陷入不可恢复死循环。反映上下文估算逻辑需要更稳健的边界处理。 |
| 7 | [#8845](https://github.com/earendil-works/pi/issues/8845) `/tree` 分支摘要硬编码 2048 token | OPEN | 2 | `/tree` 大分支场景下必然失败。已在 [#8862](https://github.com/earendil-works/pi/pull/8862) 修复，预算改为 `reserveTokens` 派生。 |
| 8 | [#8849](https://github.com/earendil-works/pi/issues/8849) Anthropic prompt cache 永不命中 transcript | CLOSED | 2 | 用户账单显示 `cacheRead` 长期停在 system+tools 前缀，`cacheWrite` 逐轮累加——意味着前缀缓存被错误清空，费用严重超标。 |
| 9 | [#8854](https://github.com/earendil-works/pi/issues/8854) 系统提示膨胀问题与 pi-prompt-diet 方案 | CLOSED | 2 | 反映 Pi 生态健康度：8–15 个扩展叠加导致系统提示臃肿，社区已涌现 `pi-prompt-diet` 类解决方案。 |
| 10 | [#8875](https://github.com/earendil-works/pi/issues/8875) OpenRouter auto 价格出现负百万 token 值 | CLOSED | 1 | 生成的 OpenRouter catalog 把 `openrouter/auto` 写入 `cost.input = -1000000`，影响计费逻辑。反映模型目录自动生成的容错需加强。 |

---

## 🛠 重要 PR 进展（Top 8）

| # | PR | 状态 | 内容 |
|---|----|------|------|
| 1 | [#8872](https://github.com/earendil-works/pi/pull/8872) 暴露宿主 keybinding 访问到扩展 API | CLOSED ✅ | **修复 [#4748](https://github.com/earendil-works/pi/issues/4748)**。让扩展能拿到宿主设置的 keybindings，避免渲染 `( to expand)` 这类空提示。 |
| 2 | [#8873](https://github.com/earendil-works/pi/pull/8873) DeepSeek V4 切换到 OpenAI Responses API | CLOSED ✅ | 把 `deepseek-v4-flash/pro/vision-exp` 从 `/chat/completions` 迁到 `/responses`，更适合 Agent 场景，与 [#7559](https://github.com/earendil-works/pi/issues/7559) 诉求对齐。 |
| 3 | [#8866](https://github.com/earendil-works/pi/pull/8866) Codex WebSocket 空闲定时器 unref | CLOSED ✅ | **修复 [#8868](https://github.com/earendil-works/pi/issues/8868)**。Codex 流结束后空闲缓存定时器仍持有进程，导致 `pi -p` 跑完卡 5 分钟。 |
| 4 | [#8862](https://github.com/earendil-works/pi/pull/8862) 分支摘要预算改为 reserveTokens 派生 | CLOSED ✅ | **修复 [#8845](https://github.com/earendil-works/pi/issues/8845)**。解决大分支 `/tree` Summarize 必然 token 截断的问题。 |
| 5 | [#8853](https://github.com/earendil-works/pi/pull/8853) 防止 JSONL 写器重复 | CLOSED ✅ | **修复 [#8852](https://github.com/earendil-works/pi/issues/8852)**。通过规范化路径串行化可写打开，123 个会话测试全部通过。 |
| 6 | [#8844](https://github.com/earendil-works/pi/pull/8844) 新增腾讯 Token Plan 个人版 Provider | CLOSED ✅ | 内置腾讯 LKEAP，覆盖 tc-code-latest、deepseek-v4-flash/pro、glm-5.2、minimax-m2.7 等模型，扩展国内模型生态。 |
| 7 | [#8635](https://github.com/earendil-works/pi/pull/8635) lazy setup 中保留 aborted 终止原因 | OPEN | **修复 [#8409](https://github.com/earendil-works/pi/issues/8409)**。把 abort signal 透传到懒加载流包装器，已中止的请求会被正确报告为 aborted。 |
| 8 | [#8232](https://github.com/earendil-works/pi/pull/8232) dev 分支占位（DON'T MERGE） | OPEN | 仅作 CI 与评论用途的占位 PR，非功能性变更。 |

---

## 📈 功能需求趋势

从本周 Issue 流提炼出的方向：

### 1. **内置 Provider 大爆发**（最热方向）
- 国产模型：腾讯 Token Plan（[#8844](https://github.com/earendil-works/pi/pull/8844)）、StepFun（[#8867](https://github.com/earendil-works/pi/issues/8867)）、zai-api（[#6723](https://github.com/earendil-works/pi/issues/6723)）
- 国际模型：Ollama Cloud（[#4706](https://github.com/earendil-works/pi/issues/4706)）、DeepSeek Responses（[#7559](https://github.com/earendil-works/pi/issues/7559) / [#8873](https://github.com/earendil-works/pi/pull/8873)）
- 反映出 Pi 用户群体对**模型中立性**和**本地/云端一体化**的强烈诉求。

### 2. **多模态输入扩展**
- 已有图像支持，扩展视频/音频请求被多次重复提出（[#3200](https://github.com/earendil-works/pi/issues/3200)）。

### 3. **长会话与上下文管理**
- OOM 回归（[#8746](https://github.com/earendil-works/pi/issues/8746)）、上下文死亡螺旋（[#8864](https://github.com/earendil-works/pi/issues/8864)）、分支摘要 token 截断（[#8845](https://github.com/earendil-works/pi/issues/8845)）形成"长会话可靠性"主题。

### 4. **缓存与计费精度**
- Anthropic 缓存不命中 transcript（[#8849](https://github.com/earendil-works/pi/issues/8849)）、OpenAI cache 字段丢失与 provider cost 丢失（[#8871](https://github.com/earendil-works/pi/issues/8871)）、OpenRouter auto 负价（[#8875](https://github.com/earendil-works/pi/issues/8875)）共同指向"成本可观测性"短板。

### 5. **扩展 API 完善**
- keybinding 暴露（[#4748](https://github.com/earendil-works/pi/issues/4748) / [#8872](https://github.com/earendil-works/pi/pull/8872)）、`fullOutputDirectory` 配置（[#8869](https://github.com/earendil-works/pi/issues/8869)）、tool 错误分层（[#8856](https://github.com/earendil-works/pi/issues/8856)）、skill 事件钩子（[#2930](https://github.com/earendil-works/pi/issues/2930)）。

### 6. **Windows 体验系统化**
- [#7547](https://github.com/earendil-works/pi/issues/7547) 51 条评论显示 Windows 已是不可忽视的目标平台，维护者主动立项调研。

---

## 🧑‍� 开发者关注点

### 高频痛点
1. **数据完整性风险** — JSONL 会话重复写入（[#8852](https://github.com/earendil-works/pi/issues/8852)）、WebSocket 资源悬挂（[#8868](https://github.com/earendil-works/pi/issues/8868)），让开发者对长会话可靠性产生焦虑。
2. **成本失控** — Anthropic 缓存失效（[#8849](https://github.com/earendil-works/pi/issues/8849)）与计费字段丢失（[#8871](https://github.com/earendil-works/pi/issues/8871)）是"真金白银"级别的问题。
3. **扩展生态摩擦** — TUI 单例冲突（[#4748](https://github.com/earendil-works/pi/issues/4748)）、系统提示膨胀（[#8854](https://github.com/earendil-works/pi/issues/8854)）、`pi -e npm:...@latest` 不刷新（[#8860](https://github.com/earendil-works/pi/issues/8860)），构成扩展作者三大阻碍。
4. **解析鲁棒性** — markdown 围栏的 tool arguments（[#8858](https://github.com/earendil-works/pi/issues/8858)）、相同 index 的多次 tool call（[#8861](https://github.com/earendil-works/pi/issues/8861)）暴露 OpenAI 兼容协议解析的边角问题。

### 高频需求
- **可配置性**：`bash` 的 `description` 参数（[#8863](https://github.com/earendil-works/pi/issues/8863)）、`fullOutputDirectory`（[#8869](https://github.com/earendil-works/pi/issues/8869)）、`pi list` 显示版本号（[#8865](https://github.com/earendil-works/pi/issues/8865)）。
- **可观测性**：provider 原始错误与工具错误的区分（[#8856](https://github.com/earendil-works/pi/issues/8856)）、thinking 渲染（[#8855](https://github.com/earendil-works/pi/issues/8855)）。
- **稳定性兜底**：Agent loop 的工具调用超时（[#8857](https://github.com/earendil-works/pi/issues/8857)）。

---

> 📅 报告生成时间：2026-08-31｜数据源：GitHub `badlogic/pi-mono`（仓库标识 `earendil-works/pi`）
> 共统计：36 个 Issue 更新 + 8 个 PR 更新，覆盖过去 24 小时。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-08-31** ｜ **数据来源：GitHub QwenLM/qwen-code**

---

## 📌 今日速览

过去 24 小时内社区活跃度较高，Issues 与 PRs 双线推进，**安全**与**沙箱**成为最大焦点——出现了一则 P1 级命令执行漏洞（#10561）以及多起与 worktree/hooks 信任边界相关的安全复盘；**功能侧**则在跨会话消息（#8724）、会话-Issue 自动绑定（#10425）、输出风格选择（#10283）等方面持续推进。CI/SDK 错误透传与 TUI 渲染相关反馈仍是当前开发者最集中的痛点。

---

## 🚀 版本发布

无（过去 24 小时无新版本发布。最近一次发版尝试 `v0.22.3-nightly.20260830.413b6d15d3` 在集成测试阶段失败，详见 #10535。）

---

## 🔥 社区热点 Issues

| # | Issue | 重要性 | 状态 | 摘要 |
|---|-------|--------|------|------|
| [#8124](https://github.com/QwenLM/qwen-code/issues/8124) | **启动横幅偶发缺行（welcome-pr）** | ⭐⭐⭐ | OPEN · 15 评论 | 交互式 TUI 启动时 `AppHeader` 的 ASCII Logo + 版本信息块首次渲染缺失顶部约 3 行，疑似与 pending provider 更新时序相关 |
| [#8724](https://github.com/QwenLM/qwen-code/issues/8724) | **跨会话消息（多 Agent 路线）** | ⭐⭐⭐ | IN-PROGRESS · 12 评论 | 提出 `list_agents` + `send_message` 机制，使同机多会话相互通信，接收端以标记输入形式呈现，并设 fail-closed 准入门 |
| [#10561](https://github.com/QwenLM/qwen-code/issues/10561) | **P1：命令执行配置键成开放入口集** | ⭐⭐⭐ | OPEN | `fsmonitor`、hooks、用户全局配置中的 git config 键可能在任意 git spawn 时执行攻击者指令，属一类（class）漏洞，需架构层解决 |
| [#8784](https://github.com/QwenLM/qwen-code/issues/8784) | **Streamable HTTP MCP：可选 SSE 探测被拒致死全连接** | ⭐⭐ | CLOSED · 5 评论 | MCP 客户端对可选 `GET <mcp-url>` SSE 探测返回 404 时，会让整个 MCP 连接被关闭——规范允许可选探测，客户端不应直接终结连接 |
| [#10560](https://github.com/QwenLM/qwen-code/issues/10560) | **review probe/base-tree 创建在内容过滤之前** | ⭐⭐ | OPEN | `worktree add` 创建探测树与基线树早于内容过滤，存在供应链侧信任缺口，需在创建前补一道筛网 |
| [#10538](https://github.com/QwenLM/qwen-code/issues/10538) | **Computer Use 驱动在 Windows 启动即 panic** | ⭐⭐ | OPEN · 3 评论 | `@qwen-code/cua-sdk@0.20.0` 在 Windows 11 x64 + Node v24.18.0 下每次嵌入式运行时创建都触发 panic |
| [#9434](https://github.com/QwenLM/qwen-code/issues/9434) | **`ask` 返回不展示 diff** | ⭐⭐ | OPEN | PreToolUse hook 返回 `ask` 时，UI 弹出确认却未渲染 Edit/WriteFile 的 diff，用户难以决策 |
| [#10583](https://github.com/QwenLM/qwen-code/issues/10583) | **Linux Bubblewrap 轻量沙箱后端** | ⭐⭐ | OPEN · NEED-DISCUSSION | 提议引入原生 `bwrap` 后端，作为 Docker/Podman 的轻量替代，避免容器开销同时保留进程级隔离 |
| [#10584](https://github.com/QwenLM/qwen-code/issues/10584) | **`.worktreeinclude` 复制 gitignored 文件到 worktree** | ⭐⭐ | OPEN | 工作树创建后自动将 `.worktreeinclude` 列出的被忽略文件/目录拷入新 worktree，来自原 #4056 Phase D 提案 |
| [#10568](https://github.com/QwenLM/qwen-code/issues/10568) | **模型配置热加载，无需重启 CLI** | ⭐ | OPEN | 希望 `settings.json` 模型变更可通过文件监听或 `/reload-config` 命令即时生效，避免完全重启 |
| [#4441](https://github.com/QwenLM/qwen-code/issues/4441) | **微信 Bot 无法发送图片** | ⭐ | OPEN · 4 评论 | 路径白名单限制了非工作区图片发送，需扩展允许目录 |

---

## 🛠️ 重要 PR 进展

| # | PR | 类型 | 进展 | 内容 |
|---|----|------|------|------|
| [#10404](https://github.com/QwenLM/qwen-code/pull/10404) | fix(serve) | **Bug** | OPEN | 将 ACP 通道 `BridgeTimeoutError initialize` 分类为 HTTP 504 + `Retry-After: 5`，避免落入通用 500 处理器 |
| [#10569](https://github.com/QwenLM/qwen-code/pull/10569) | fix(serve) | **Bug** | OPEN | daemon `turn_error` 事件透传 provider 真实错误（如 `engine overloaded`），取代通用 `Internal error` |
| [#10408](https://github.com/QwenLM/qwen-code/pull/10408) | fix(core) | **可靠性** | OPEN | 网关返回 HTTP 413（请求体超限）时走一次性 reactive compaction 路径，新增类型化检测器区分上下文溢出 |
| [#10571](https://github.com/QwenLM/qwen-code/pull/10571) | fix(sdk) | **SDK** | CLOSED ✅ | TS SDK 在 daemon 5xx + JSON-RPC `Internal error` 时从 `data.details/message` 中提取真实错误信息 |
| [#10592](https://github.com/QwenLM/qwen-code/pull/10592) | ci | **基础设施** | CLOSED ✅ | Release 集成任务接入共享 runner 环境信息，自建 ECS 路径使用 #10567 单 fork 限制，托管 fallback 保持 2–4 fork |
| [#10390](https://github.com/QwenLM/qwen-code/pull/10390) | feat(web-shell) | **UX** | OPEN | "Update Project" 在工作区脏状态下不再死锁，切换为解决面板（提交/stash 二选一） |
| [#10283](https://github.com/QwenLM/qwen-code/pull/10283) | feat(cli) | **配置** | OPEN | 新增 `general.outputStyle` 设置 + `--output-style <name>` 标志，让 #9565 提供的输出风格实际可被选用 |
| [#9739](https://github.com/QwenLM/qwen-code/pull/9739) | feat(core) | **集成** | OPEN | 关闭会话↔PR 绑定最后一处空白：会话内 `gh pr create` 创建的 PR 也可被自动绑定 |
| [#10427](https://github.com/QwenLM/qwen-code/pull/10427) | fix(hooks) | **安全** | OPEN | 一次性修补 hook 系统的 4 个信任边界漏洞（HTTP 跟随重定向等），单 commit 复启 #8396 |
| [#10146](https://github.com/QwenLM/qwen-code/pull/10146) | feat(cli) | **渲染层** | OPEN | OpenTUI 迁移基础批次：主题、a11y、剪贴板、按键映射、鼠标命中、链接点击等渲染底座（追踪 #8662） |

---

## 📈 功能需求趋势

| 方向 | 代表性 Issue/PR | 社区信号 |
|------|-----------------|----------|
| **多 Agent / 跨会话协同** | #8724, #9033, #9739, #10425 | 已进入 in-progress 路线图，`send_message` + `list_agents` 推动本地 agent 互操作 |
| **安全与信任边界加固** | #10561 (P1), #10560, #10427, #10401 | git config 键面攻击面被首次定级为 class 漏洞，hooks/worktree/probe tree 三大入口正在并行修复 |
| **沙箱与隔离** | #10583 (bwrap), 现有 Docker/Podman | 开发者希望去除容器依赖，Bubblewrap 成为呼声最高的轻量替代 |
| **IDE/Web Shell 集成** | #10557, #10585, #10564, #10235 | VSCode Web Shell 的权限审批、错误透传、测试覆盖是当前最密集的迭代区 |
| **热重载 / 配置体验** | #10568 (模型热加载), #10189 (skill 重装) | 用户希望减少 CLI 重启，期待类似 Qoder 的 settings.json 监听能力 |
| **Worktree 增强** | #10584, #10226 | `.worktreeinclude` 与可选 worktree shell 进入社区视野，对应 #4056 高级阶段 |
| **渲染/TUI 体验** | #8124, #10562, #9305 | 启动横幅缺失、Termius 输入污染、VP 模式底部对齐仍是高频反馈 |

---

## 👨‍💻 开发者关注点（痛点 + 高频需求）

**1. 错误信息透传严重不足**
daemon HTTP 5xx 普遍只回 `Internal error`，真实原因被埋在 JSON-RPC `data` 中，导致 Web Shell 与 SDK 排查受阻。#10564、#10570、#10569、#10571 四个 Issue/PR 形成集中清理，说明社区已将其视为稳定性阻塞点。

**2. Windows 平台细节问题**
Computer Use 驱动 panic（#10538）、skill 重装 EPERM（#10189）、Termius 输入污染（#10562）——Windows 文件锁、IME、终端兼容性仍是系统性短板。

**3. 安全模型收口**
git config 键可被供应链侧滥用（#10561）暴露的不是单点问题，而是 `fsmonitor`、hooks、用户全局配置三处的信任收敛问题，社区期望架构级 class 修复而非分散 patch。

**4. 自动化机器人工作流已规模化**
`qwen-code-dev-bot` 维护的"deferred review findings"系列（#10547、#10409、#10046、#7167）显示 autotriage / autofix 已沉淀出稳定的 issue-PR 反馈闭环，开发者关注其白名单与触发边界。

**5. 重启成本过高**
开发者要求模型热加载（#10568）、output style 真正可被选择（#10283）——这两个 PR/Issue 代表了"配置可热改、效果立即可见"的体验诉求。

**6. PR 注释格式已成隐性规范**
多份 PR 描述中明确写有 *"Don't hard-wrap paragraphs: GitHub renders single newlines as `<br>`"* ——这一约定被官方 bot 持续强化，已成为贡献者的入门门槛。

---

*报告基于 GitHub 公开数据自动生成；如有遗漏，欢迎在评论区补充。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI / CodeWhale 社区动态日报

> 📅 **报告日期**: 2026-08-31
> 📊 **数据来源**: github.com/Hmbown/CodeWhale（过去 24 小时）
> 🔗 **数据量**: 39 条 Issue 更新 · 50 条 PR 更新 · 0 个新 Release

> ⚠️ **数据说明**: 本次拉取的所有 issue/PR 链接均指向 `Hmbown/CodeWhale` 仓库，该项目与 DeepSeek-TUI 在 #1097 等 issue 中存在交叉引用（CodeWhale 为 TUI 的下游/重构实现）。以下日报基于 CodeWhale 主仓库的活跃数据。

---

## 一、今日速览

今天社区最核心的工作集中在 **TUI Tideline Composer Shell 统一重构**：Hmbown 一口气提交了 #5770、#5773、#5765、#5763 等多个 PR，将 startup、active-session、route segment 等多个面板统一到共享的几何/渲染层，这是 v0.9.12 候选版本的最大可见变更。与此同时，**v0.9.12 的 source prep PR #5744** 进入待合并状态，CHANGELOG 已经聚合了 113 个自 v0.9.11 以来的条目，准备工作基本就绪。

---

## 二、版本发布

🚫 **过去 24 小时内无新 Release**。

但 **v0.9.12 候选版本已进入准备阶段**：

- **PR #5744** — `release: prepare Codewhale v0.9.12 source`（[链接](https://github.com/Hmbown/CodeWhale/pull/5744)）
  - workspace/npm/runtime-sdk/VS Code 扩展版本号统一 bump 到 0.9.12
  - `CHANGELOG.md` 新增 `## [0.9.12] - Unreleased candidate`，聚合 113 条 bullets（Added 40 / Changed / Fixed …）
  - **状态**：Draft — 明确标注"等 founder 切版本才合并"，避免误合入 main

---

## 三、社区热点 Issues（Top 10）

按评论数与重要性筛选：

| # | Issue | 标题 | 评论 | 状态 | 为什么重要 |
|---|---|---|---|---|---|
| 1 | [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) | 20 | OPEN | 当前最高评论量 issue，是 TUI crate 拆分的史诗级跟踪 issue，所有子 EPIC 和 PR 都向其汇报，决定 monorepo 走向 |
| 2 | [#5620](https://github.com/Hmbown/CodeWhale/issues/5620) | Context pressure warning is transient and the agent does not proactively react | 11 | OPEN | 中危可靠性问题：上下文压力告警一闪而过，agent 不主动响应，导致静默上下文退化，击穿了安全信号 |
| 3 | [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) | Dead-code sweep: 464 `#[allow(dead_code)]` attributes are hiding drift | 7 | CLOSED | 大规模代码卫生整改：143 个文件 464 个属性让编译器结构上无法报告漂移，作者给出实测数据对比 |
| 4 | [#2342](https://github.com/Hmbown/CodeWhale/issues/2342) | 输出内容中的文件，能不能支持点击后打开预览 | 5 | OPEN | 中文社区典型 UX 诉求：输出文件路径点击直达预览，免去手动翻目录 |
| 5 | [#4955](https://github.com/Hmbown/CodeWhale/issues/4955) | Request: zero-sandbox / `--no-sandbox` mode for local dev | 5 | OPEN | 开发者痛点：kernel-level Seatbelt 沙箱每天破坏基础 shell 命令，需要完整关闭沙箱的开发模式 |
| 6 | [#3306](https://github.com/Hmbown/CodeWhale/issues/3306) | v0.9.3 Refactor: converge runtime ownership, delete duplication, and ship one executable | 5 | CLOSED | v0.9.3 里程碑 umbrella：将 87% 的代码从 `codewhale-tui` 中拆出，解决 18 个 Rust package 的所有权混乱 |
| 7 | [#3145](https://github.com/Hmbown/CodeWhale/issues/3145) | v0.9.3: Add visual inspection artifacts for browser and UI tasks | 4 | CLOSED | 对标 Cursor Design Mode：让 agent 拿到元素选择、布局关系、截图等更丰富的视觉证据循环 |
| 8 | [#3389](https://github.com/Hmbown/CodeWhale/issues/3389) | v0.9.2 EPIC: Hotbar command surface and source adapters | 4 | CLOSED | 产品方向决策：Hotbar 是真实功能但不应默认显示，新装必须经显式 setup 才启用（对应 #3807 发布门禁） |
| 9 | [#1097](https://github.com/Hmbown/CodeWhale/issues/1097) | FreeBSD support (npm binary / pkg) | 3 | OPEN | 跨平台支持缺口：FreeBSD 下 `npm install -g deepseek-tui` 直接失败，影响 FreeBSD 开发者群体 |
| 10 | [#5723](https://github.com/Hmbown/CodeWhale/issues/5723) | Agent shell sets `NoNewPrivs`, blocking `sudo` and pre-existing deployment workflow | 3 | CLOSED | 高危 bug：agent 沙箱设置了 NoNewPrivs，导致既有部署流程中的 sudo 全部失败，已快速修复 |

---

## 四、重要 PR 进展（Top 10）

按变更影响力筛选（多数为 OPEN，集中在 TUI Tideline 统一 shell 重构）：

| # | PR | 标题 | 类型 | 关键变更 |
|---|---|---|---|---|
| 1 | [#5770](https://github.com/Hmbown/CodeWhale/pull/5770) | Compose Tideline startup into the shared composer shell | TUI | 把当前 mark / startup / rounded-composer / quiet-boot / route-control / responsive-rail 六个提案合到一个可审分支，关闭 #5768 |
| 2 | [#5773](https://github.com/Hmbown/CodeWhale/pull/5773) | Give the active-session composer the shared [↑] send hitbox | TUI 修复 | 活动 session 的 ComposerWidget 恢复共享的三格 [↑] 提交区，长 draft 不再"吃掉"按钮（关闭 #5771） |
| 3 | [#5766](https://github.com/Hmbown/CodeWhale/pull/5766) | feat(config): bind catalog and route resolution | 配置 | 将编译期 provider catalog 与精确的 RouteResolver 绑定；为 catalog-backed / 自定义端点 / 未列出 pass-through 路径返回诚实回执（关闭 #5755 Phase 1） |
| 4 | [#5765](https://github.com/Hmbown/CodeWhale/pull/5765) | fix(tui): render truthful active Tideline rail | TUI 修复 | 100/120 列阈值下渲染被动的五组 Tideline session rail，状态在 App projection 边界统一派生（关闭 #5764） |
| 5 | [#5763](https://github.com/Hmbown/CodeWhale/pull/5763) | fix(tui): make topbar route segment interactive | TUI 修复 | 顶部 route/model 段支持点击 / F3 唤起 provider 选择器，与 `/provider` 走同一条 picker/apply 路径（关闭 #5756） |
| 6 | [#5760](https://github.com/Hmbown/CodeWhale/pull/5760) | fix(tui): keep MCP boot detail out of chat | TUI 修复 | 每个 MCP server 的启动细节移出聊天/composer 面板，仅在 footer 简要呈现，详细诊断留在 `/mcp`（关闭 #5759） |
| 7 | [#5750](https://github.com/Hmbown/CodeWhale/pull/5750) | fix(session): engine adopts the host session id | Session 修复 | **关键 resume 修复**：Engine 不再自造 session id，而是采用 host 的 id，resume 后的 turns 终于落到原 session |
| 8 | [#5747](https://github.com/Hmbown/CodeWhale/pull/5747) | feat(tui): unified self-serve MCP/plugin auth | TUI 新功能 | 统一 MCP / plugin 自服务鉴权：合成 `authenticate` 工具、共享 `/mcp login` 与 plugin login 流、`invalid_grant` 轮换处理；9 个新集成测试 |
| 9 | [#5751](https://github.com/Hmbown/CodeWhale/pull/5751) | feat(protocol): Op/EventMsg parity + compile-enforced guard | 协议 | Rust core 与 TS 面的 Op/EventMsg 一致性 + 编译期守卫，避免协议静默漂移 |
| 10 | [#5744](https://github.com/Hmbown/CodeWhale/pull/5744) | release: prepare Codewhale v0.9.12 source | 发布 | v0.9.12 候选版本的 workspace/npm/SDK/VS Code 扩展统一 bump + 113 条 CHANGELOG，founder-gated |

**辅助/合并 PR**（值得一笔带过）：
- [#5753](https://github.com/Hmbown/CodeWhale/pull/5753) — 恢复批准的 diving-whale startup mark（关闭 #5754）
- [#5758](https://github.com/Hmbown/CodeWhale/pull/5758) — 恢复圆角活动 composer 外壳（关闭 #5757）
- [#5762](https://github.com/Hmbown/CodeWhale/pull/5762) — 干净启动时保留 startup hero（关闭 #5761）
- [#5752](https://github.com/Hmbown/CodeWhale/pull/5752) — 云端 facts 通道 slice 1（flag 默认 OFF）
- [#5748](https://github.com/Hmbown/CodeWhale/pull/5748) — Automation 可见性 slice 1（投影 + 回执）
- [#5749](https://github.com/Hmbown/CodeWhale/pull/5749) — app-server Unix socket 传输 + daemon/attach 广告（桌面端 Phase 0 基础）
- [#5694](https://github.com/Hmbown/CodeWhale/pull/5694) / [#5741](https://github.com/Hmbown/CodeWhale/pull/5741) — dependabot 升级 `rio-vt` 0.5.25→0.5.26（已合并，含 qa_harness Grid API 跟进）

---

## 五、功能需求趋势

从近 24 小时 Issue/PR 提炼出的社区关注方向：

| 方向 | 代表 Issue/PR | 热度信号 |
|---|---|---|
| 🎨 **TUI 视觉/几何一致性** | #5770 / #5773 / #5765 / #5763 / #5758 / #5760 | 单日 6+ PR 集中重构 Tideline composer，启动、active session、route segment、rail 全部统一到共享 shell |
| 🔌 **MCP / Plugin 自服务鉴权** | #5747 / #5760 | 从"展示细节"到"统一登录"完整闭环 |
| 🧠 **新 Provider 支持** | #3751 (Neuralwatt) / #1330 (ZenMux as primary) / #5681 (web search 扩到 DeepSeek/Qwen/Kimi/Z.AI/MiMo) | 多个 provider 集成需求并行，新模型平台与原生搜索后端是双热点 |
| 🖥️ **IDE / 桌面集成** | #5752 (云端 facts 通道) / #5749 (Unix socket transport) | 桌面端 Phase 0 基础 + cloud-facts 缓存层，指向独立桌面客户端 |
| 🛡️ **沙箱与执行控制** | #4955 (--no-sandbox) / #5723 (NoNewPrivs 阻断 sudo) | 安全策略与开发体验的反复拉锯 |
| 🤖 **Agent 可靠性** | #5620 (context pressure warning 转瞬即逝) / #5605 / #5735 (flaky tests) | 上线后真实世界的鲁棒性问题集中暴露 |
| 🌐 **跨平台** | #1097 (FreeBSD) / #4955 (本地 dev) | 主力 Linux/macOS 之外的真实用户场景被忽视 |
| 🔄 **远程工作台** | #1990 / #1984 / #1989 / #2968 | 美区等价通道、CNB/Lighthouse/Feishu 一体化、RustProxy 隧道、Mac 自托管（已陆续闭环，仅 #1097 等仍 OPEN） |
| 🧪 **Browser/UI 自动化** | #3145 / #3361 (视觉验证 + browser console verification) | 对标 Cursor Design Mode 的产品方向被多个 issue 并行推动 |

---

## 六、开发者关注点

从 issue 摘要与 PR 描述中提炼的高频痛点：

1. **🎯 "resume session 不生效"被多个 PR/Issue 串联关注** — #5750 已定位为 Engine 自己铸造 session id 而非采用 host id，是本轮最关键的一处 bug 修复，直接影响所有"接着上次继续"的用户场景。

2. **🧪 CI flaky 测试在并发负载下集中爆雷** — #5605（`remote_control separate_predispatch_crashes_on_one_run_get_distinct_recovery_turn_ids`）和 #5735（`runtime_chat_relay failed_state_writes`）属于同一类问题，且 #5735 / #5730 / #5734 三 PR 在 8 月 30 日几小时内连续触发同一个 owner-lock 冲突测试，提示底层并发状态机存在系统性问题。

3. **🚦 "Codewhale review ✓" 已不可信** — #5740 直接披露：自 04:58 以来所有 PR 显示绿灯而 **零 review 实际发出**，因为 deepseek provider 在 Run 33326003552 中 `HTTP 402 Insufficient Balance` 被工作流降级为 `::warning` + `exit 0

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*