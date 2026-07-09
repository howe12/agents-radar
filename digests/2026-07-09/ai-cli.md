# AI CLI 工具社区动态日报 2026-07-09

> 生成时间: 2026-07-09 02:36 UTC | 覆盖工具: 9 个

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

# 2026-07-09 AI CLI 工具生态横向对比分析报告

---

## 1. 生态全景

2026 年中，主流 AI CLI 工具已整体进入 **"协议层 + 架构层"双线深水区**：表层 UX 优化趋同（Slash 命令、可观测性、模型路由），里层则在 **子代理治理、Agent 成本护栏、MCP 协议适配、多租户 Daemon** 四个方向展开差异化竞争。**Agent 失控（循环/挂起/无成本边界）是所有工具共同面对的头号痛点**，而付费用户对"配额被无声燃烧"的负面情绪，正在反向逼迫官方加快护栏机制落地。开源与商业项目的能力差距快速收窄，但 **多平台一致性、IDE 能力对齐、企业网络兼容性** 仍是普遍欠债。

---

## 2. 各工具活跃度对比

> *数据范围：过去 24 小时更新量。OpenAI Codex 当日无有效数据可对比。*

| 工具 | 今日 Release | Issue 更新 | PR 更新 | 社区节奏关键词 |
|------|------|------|------|------|
| **Claude Code** | v2.1.205 | 10+（多为长尾高评论） | 8（均 0 👍） | 成本灾难+子代理架构重定位 |
| **Gemini CLI** | v0.50.0 / v0.51.0-preview.0 | 10+ | 10 | 安全加固+新模型适配+递归硬限 |
| **GitHub Copilot CLI** | 无（最新 1.0.69） | 10+（含批量闭环） | 2（无效） | 闭环 Agent 循环 Bug+能力对齐诉求 |
| **Kimi Code CLI** | 无 | 1 | 0 | 仓库低活跃，可能处于功能冻结期 |
| **OpenCode** | 无（最近 1.17.15） | 10+ | 10（HOYALIM 单人 9 个） | V2 迁移+Go 商业化+MCP 追赶 |
| **Pi** | 无 | **43** | 7 | 高频 triage，闭环率极高 |
| **Qwen Code** | **v0.19.8** | 32 | 50 | 多 Workspace 架构+渠道生态扩张 |
| **DeepSeek TUI (CodeWhale)** | 无（v0.8.68 待切版） | 50+ | 50+ | Fleet 重构+性能 lane 收口+Android |
| **OpenAI Codex** | — | — | — | 当日无数据 |

**活跃度梯队**：
- 🔥 **第一梯队（高活跃 + 高产出）**：Pi（43 issue/7 PR，闭环率最高）、Qwen Code（32 issue/50 PR）、DeepSeek TUI（50+/50+）
- ⚡ **第二梯队（议题密集）**：Claude Code、Gemini CLI、OpenCode
- 🧊 **第三梯队（低活跃或问题积压）**：Copilot CLI（PR 几乎停滞）、Kimi Code（单 issue 状态）

---

## 3. 共同关注的功能方向

### 3.1 Agent 失控与循环防护 — **最高频共识**
- **Claude Code**：`#72080` 子代理死循环、`#67636` 并行 10–15 代理百万 token 崩溃、`#75314` 后台 Agent 34 小时卡死
- **Gemini CLI**：`#22415` 无限挂起（30 评论/27 👍）、PR `#28164` 强制 15 轮推理上限
- **Copilot CLI**：批量关闭的 Plan→Compact→Re-Plan 系列（#3144–#3158，单会话 217 次循环）
- **Pi**：`#6424`–`#6429` compaction 边缘场景群
- **Qwen Code**：`#6505` Subagent 无 LoopDetectionService
- **DeepSeek TUI**：`#4042` 子代理工具沙箱（已闭环）

### 3.2 成本可视与配额护栏 — **付费用户第一诉求**
- **Claude Code**：`#42249`/`#55053`/`#54776`（合计评论 110+、👍 41+），指向 4 月底模型/路由变更 + 子代理加剧燃烧
- **OpenCode**：`#16017` Go 套餐用量 API（96 👍，全场最高）、`#35769` CLI 配额可视化插件
- **Qwen Code**：`#6556` 限制 `max_tokens` 至上下文窗口
- **Pi**：PR `#6427` prompt cache miss tracking

### 3.3 MCP 协议适配 — **协议层新共识**
- **Claude Code**：PR `#72014` `protect-mcp` Cedar 策略门禁
- **Gemini CLI**：a2a-server 零点击 RCE 修复（`#28319`、`#28316`）
- **OpenCode**：`#28567` 完整 MCP 客户端能力、`#23066` Elicitation、`#31942` Agent 循环调用

### 3.4 多模型协同与可观测性
- **Copilot CLI**：`#2792`（规划/执行分模型）、`#4068`（族别名）、`#4067`（`model` 字段不生效）
- **Claude Code**：`#56913` Opus 大脑 + Sonnet Worker 分层
- **OpenCode**：`#6096` TPS 显示（60 👍）、`#35999` Context meter 修正
- **Pi**：`#5263` session 内模型切换默认 ephemeral

### 3.5 多平台 / 企业环境兼容
- **Copilot CLI**：`#970` macOS Gatekeeper、`#4053` NFS TUI 挂起、`#3586` Linux 复制回归
- **Kimi Code**：`#2458` 企业 SSL MITM 登录失败
- **Pi**：`#6250` Bun release 下 Linux/X11 剪贴板回归
- **Qwen Code**：`#6401` ProxyAgent 忽略 `NO_PROXY`、`#6334` Windows 扩展安装
- **DeepSeek TUI**：`#4258` Android/Termux 官方支持

### 3.6 长期高赞但迟迟未到的"基础卫生功能"
- **Claude Code**：`#26904` `/delete` 命令（51 👍）、`#60097` 桌面 statusLine
- **Gemini CLI**：`#1698` `VISUAL`/`EDITOR` 环境变量（55 👍）
- **Copilot CLI**：`#618` 自定义 Slash 命令（99 👍，已 CLOSED 但未明确实现）

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线关键差异 |
|------|---------|---------|----------------|
| **Claude Code** | "编排式 AI 大脑" / 子代理调度平台 | 高复杂度工作流开发者、付费重度用户 | 子代理并发 + Opus/Sonnet 分层模型；社区正在重新定位产品 |
| **Gemini CLI** | Google 生态前沿 + 安全先行 | 关注新模型尝鲜、安全合规要求高的用户 | 递归硬限（15 轮）+ a2a-server 工作区信任模型 |
| **Copilot CLI** | GitHub/Microsoft 工作流底座 | VS Code 习惯外溢、企业 GitHub 用户 | ACP 协议、BYOK 跨场景一致性 |
| **Kimi Code** | （定位尚不清晰） | 主要面向中文市场 | 当前低活跃，需观察后续动作 |
| **OpenCode** | 开源多 Provider 客户端 + 商业化 | 跨 provider 用户、订阅层用户 | `models.dev` 实时目录、V2 重写渐进收尾、Go 订阅 |
| **Pi** | 多 Provider 通用 CLI + TUI 极致 | Provider 折腾型开发者、DIY 玩家 | 三方 provider 元数据治理、JSONL session、cache 可观测性 |
| **Qwen Code** | 国内 Daemon 化 + IM 渠道中台 | 企业 / 团队 / 国内 IM 工作流 | 多 Workspace Daemon、WeCom/钉钉/飞书/QQ 矩阵、`/learn` Skill 体系 |
| **DeepSeek TUI (CodeWhale)** | Rust 高性能 TUI + 多代理 Fleet | 性能敏感 / 移动端（Termux）用户 | AgentProfile 统一规约、Models.dev 单一真实源、parking_lot 优化 |

**关键差异化信号**：
- **国内厂商走"渠道+Daemon"**（Qwen Code），海外厂商走"Provider+协议"（Pi、OpenCode）
- **Anthropic 押注"子代理 = 下一代产品形态"**（Claude Code 的 #56913 正在重塑产品定位）
- **Google 押注"安全可观测"**（Gemini CLI 的 RCE 修复密度最高）
- **DeepSeek TUI 是唯一押注 Rust + 移动端** 的项目

---

## 5. 社区热度与成熟度

### 成熟度评估矩阵

| 工具 | 议题质量 | 维护者响应 | 闭环效率 | 成熟度判断 |
|------|---------|-----------|---------|-----------|
| **Claude Code** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | **成熟但承压**：议题深度高，PR 活跃但 0 👍 反映外部贡献者参与度低；子代理护栏尚未到位 |
| **Gemini CLI** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | **快速迭代中**：安全 PR 密度高（3 个 RCE 级修复），硬限机制成型 |
| **Copilot CLI** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | **稳定但停滞**：批量闭环 + 几乎无 PR，CLI 能力对 VSCode 扩展持续欠债 |
| **Kimi Code** | ⭐ | ⭐ | ⭐ | **风险信号**：24h 单 issue 状态，仓库活跃度需警觉 |
| **OpenCode** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | **积极修缮期**：HOYALIM 一日 9 PR 修复密度罕见，V2 迁移稳步推进 |
| **Pi** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | **健康范例**：43 issue 当日处理，mitsuhiko 亲下场，元 issue 治理结构清晰 |
| **Qwen Code** | ⭐

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-07-09）

---

## 1. 热门 Skills 排行

| # | Skill / PR | 核心功能 | 热度信号 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 评测体系修复**（`#1298` / `#1323` / `#1099` / `#1050` / `#1261` / `#362` / `#361`） | 修复 `run_eval.py` 的 recall=0% bug、Windows 子进程兼容、UTF-8 崩溃、YAML 特殊字符吞字段、并发写污染用户项目等问题 | Issue `#556`（12 评论）+ `#1169`（3）+ `#1061`（3）三方独立复现，是当前最热的"系统性故障" | 全部 OPEN |
| 2 | **document-typography**（`#514`） | 解决 AI 生成文档中的孤字/寡词换行、标题孤行、编号错位等排版问题 | 覆盖所有文档类工作流，定位"普适痛点" | OPEN |
| 3 | **testing-patterns**（`#723`） | Testing Trophy 模型 + 单元测试/React 组件/E2E 全栈测试模式 | 工程团队刚需，填补"测试生成"赛道 | OPEN |
| 4 | **ODT 文档技能**（`#486`） | 创建、填充、解析 ODF（.odt/.ods）文件 | 企业/政府/开源生态接入需求 | OPEN |
| 5 | **color-expert**（`#1302`） | 色彩命名系统（ISCC-NBS、Munsell、XKCD 等）+ 色彩空间选型指南 | 设计/前端场景的细粒度知识封装 | OPEN |
| 6 | **self-audit**（`#1367`） | 输出前自审：先机械验证文件，再做四维推理质量审计 | 通用型"质量门"技能，跨栈适用 | OPEN |
| 7 | **frontend-design 改进**（`#210`） | 重写 frontend-design 提升可执行性与内部一致性 | 旧版"看得到做不到"的反馈集中区 | OPEN |
| 8 | **skill-quality-analyzer / skill-security-analyzer**（`#83`） | 对 Skills 做 5 维质量评估 + 安全审计 | 元技能，反哺生态健康度 | OPEN |

---

## 2. 社区需求趋势（基于 Issues 高频方向）

| 趋势 | 代表 Issue | 关键诉求 |
|---|---|---|
| **🛡️ 信任边界与安全** | [`#492`](https://github.com/anthropics/skills/issues/492)（34 评论） | 社区 Skills 挂名 `anthropic/` 命名空间 → 用户误以为是官方 → 提权风险 |
| **🏢 组织级共享分发** | [`#228`](https://github.com/anthropics/skills/issues/228)（14 评论，👍7） | 取消"下载 .skill → Slack 发文件 → 手动上传"的笨拙流程，需要 Claude.ai 内的组织级 Skill 库 |
| **🧰 skill-creator 工具链可信度** | [`#556`](https://github.com/anthropics/skills/issues/556) / [`#1169`](https://github.com/anthropics/skills/issues/1169) / [`#1061`](https://github.com/anthropics/skills/issues/1061) / [`#202`](https://github.com/anthropics/skills/issues/202) | `run_loop.py` 报数失效、优化退化到噪声、Windows 全链路崩、文档风格偏离最佳实践 |
| **🧠 长期 Agent 状态管理** | [`#1329`](https://github.com/anthropics/skills/issues/1329) | compact-memory：用符号化记法替代散文式持久记忆，省 context |
| **🔌 Skills ↔ MCP 互通** | [`#16`](https://github.com/anthropics/skills/issues/16) | 把 Skill 暴露为 MCP，让外部工具能"调用 Skill"而非仅"加载 Skill" |
| **🛡️ Agent 治理/合规** | [`#412`](https://github.com/anthropics/skills/issues/412)（已关闭） | policy 强制、威胁检测、信任评分、审计追踪 |
| **📦 插件去重** | [`#189`](https://github.com/anthropics/skills/issues/189)（👍9） | `document-skills` 与 `example-skills` 装出同一份内容，污染 context |
| **☁️ 多平台接入** | [`#29`](https://github.com/anthropics/skills/issues/29) | 在 AWS Bedrock 上跑 Skills 的可行路径 |

> **总结成一句话**：社区想要的不是"更多孤立的小工具"，而是"一个可信、可共享、可治理、可观测的 Skill 操作系统"。

---

## 3. 高潜力待合并 PR（近期可能落地）

按"痛点集中度 + 跨用户影响面"排序：

| PR | 为什么高潜力 |
|---|---|
| [`#1298`](https://github.com/anthropics/skills/pull/1298) | **生态级修复**：`run_eval.py` recall=0% 是阻塞性 bug，10+ 独立复现，修复后整条描述优化循环才能上线 |
| [`#1050`](https://github.com/anthropics/skills/pull/1050) / [`#1099`](https://github.com/anthropics/skills/pull/1099) | Windows 用户被排除在外的关键障碍（`PATHEXT`、管道读取） |
| [`#1323`](https://github.com/anthropics/skills/pull/1323) | 触发检测漏掉真实 Skill 名 → 评测体系失真 |
| [`#1261`](https://github.com/anthropics/skills/pull/1261) | 评测时把命令文件写到用户**真实** `.claude/commands/`，并发期会污染线上会话——安全/正确性双高优 |
| [`#362`](https://github.com/anthropics/skills/pull/362) / [`#361`](https://github.com/anthropics/skills/pull/361) / [`#539`](https://github.com/anthropics/skills/pull/539) | UTF-8 panic + YAML 静默吞字段，影响中文/多字节用户 |
| [`#538`](https://github.com/anthropics/skills/pull/538) / [`#541`](https://github.com/anthropics/skills/pull/541) | PDF/DOCX 在大小写敏感文件系统与 w:id 命名空间下的硬阻塞 bug |
| [`#1367`](https://github.com/anthropics/skills/pull/1367) | "先验文件、再审推理"的通用质量门，跨栈适用 |
| [`#509`](https://github.com/anthropics/skills/pull/509) | `CONTRIBUTING.md`，补齐仓库社区健康度（当前仅 25%） |

---

## 4. Skills 生态洞察（一句话）

> **整个生态的"卡点"集中在 skill-creator 评测闭环失灵**：`run_eval.py` 永远报告 0% recall，使得 description 优化循环在噪声上迭代、生成的 Skill 描述质量无法度量；只要这条管线不被修好，无论 PR 提交多少新 Skill，生态都缺乏自我进化的能力——社区当下最集中的诉求，是"先把造 Skill 的工具修对，再谈扩品类"。

---

**数据备注**：报告中 PR 评论数原始数据为 `undefined`（GitHub API 字段缺失），热度以"被 Issues 反向引用次数 + 技术影响面 + 独立复现数"综合判定。

---

# Claude Code 社区动态日报
**日期：2026-07-09**

---

## 1. 今日速览

今日社区焦点集中于**成本控制**与**子代理（Sub-agent）调度**两大议题。Issue #42249、#55053、#54776 等高评论成本类问题持续发酵，开发者对配额消耗速度异常（5 小时窗口内被消耗 5–10 倍）的反馈居高不下。与此同时，v2.1.205 版本引入"自动模式下禁止篡改会话记录文件"的安全规则，并修复了 `--json-schema` 静默失败与子代理并发导致的 token 浪费问题。

---

## 2. 版本发布

### v2.1.205
- **新增自动模式安全规则**：阻止对会话转录文件（session transcript）的篡改行为。
- **JSON Schema 修复**：`--json-schema` 参数在 schema 非法时不再静默输出非结构化结果；同时支持使用 `format` 关键字的 schema。
- **修复**：Claude 工作期间收到的消息不再被丢弃（提升交互实时性）。

⚠️ 注意：今日多条 BUG 反馈（#42249、#75937 等）均在 v2.1.205 版本上仍可复现，特别是 Skill 激活时 `isMeta` 重复消息导致 400 invalid_request 问题。

---

## 3. 社区热点 Issues

| # | Issue | 主题 | 评论数 | 为何重要 |
|---|---|---|---|---|
| 1 | [#56913](https://github.com/anthropics/claude-code/issues/56913) | 让自治 Claude Code 可行：分层 Opus 大脑 + Sonnet Worker + 持久状态 | 43 | 社区正在重新定位 CC 为"编排式 AI 大脑"，而非单纯的编程助手；提议引入持久化状态与成本分级模型 |
| 2 | [#42249](https://github.com/anthropics/claude-code/issues/42249) | 极端 token 消耗：正常任务 1 小时内配额耗尽（macOS） | 40 👍17 | 大量开发者在 20x/付费套餐上遭遇配额异常，与 v2.1.x 引入的子代理机制疑似相关 |
| 3 | [#55053](https://github.com/anthropics/claude-code/issues/55053) | 5 小时会话窗口自 4/29 起被异常压缩 | 37 👍12 | 时间点高度一致地指向 4 月底某次模型/路由变更；社区怀疑 Sonnet 子代理加剧了燃尽 |
| 4 | [#54776](https://github.com/anthropics/claude-code/issues/54776) | API 用量激增：1–2 小时耗尽 100% 配额（macOS） | 33 👍12 | 与 #42249 高度相似，多名 20x 用户复现；已经形成"cost 灾难"社区共识 |
| 5 | [#61993](https://github.com/anthropics/claude-code/issues/61993) | 子代理无法派生下一级子代理（Windows） | 19 | 影响复杂多智能体工作流；与 #56913 提出的"分层代理"愿景形成阻力 |
| 6 | [#72080](https://github.com/anthropics/claude-code/issues/72080) | 子代理陷入死循环，token 暴涨（Linux/VSCode） | 6 | 主代理与子代理都出现"count <invoke" 循环，疑似并发调度 bug |
| 7 | [#67636](https://github.com/anthropics/claude-code/issues/67636) | 并行生成 10–15 个子代理，触发百万级 token 消耗后崩溃 | 5 | 揭示了子代理调度缺乏成本护栏的问题 |
| 8 | [#75314](https://github.com/anthropics/claude-code/issues/75314) | 10 个后台 Agent 任务卡死 34 小时，无法取消，燃烧约 100 万 token | 3 | 暴露后台任务缺乏超时/取消机制，是产品稳定性硬伤 |
| 9 | [#26904](https://github.com/anthropics/claude-code/issues/26913) | `+51👍` 增加 `/delete` 命令删除当前会话 | 9 👍51 | 高赞 enhancement：用户无法清理无效 session，呼声最高的功能之一 |
| 10 | [#60097](https://github.com/anthropics/claude-code/issues/60097) | Desktop 应用支持 `statusLine` 显示当前 worktree/cwd | 5 👍9 | 桌面端与 CLI 在状态可见性上的功能对齐需求 |

> 备注：#56913 评论数最多但 👍 较少，说明该议题观点分歧大；社区对"自治 AI 大脑"愿景兴趣浓厚，但对实现路径持谨慎态度。

---

## 4. 重要 PR 进展

| PR | 内容 | 意义 |
|---|---|---|
| [#75938](https://github.com/anthropics/claude-code/pull/75938) | 修复 sweep 脚本：通过搜索 API 解除 `markStale` 饥饿，列表变更前先快照 | 解决 issues triage 工具卡死问题，提升 issue 标签自动化可靠性 |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | 开源 Claude Code 提议 | 长期高关注度 PR，目前仍未合入；社区对源码可见性诉求持续 |
| [#75541](https://github.com/anthropics/claude-code/pull/75541) | `closeExpired()` 分页获取事件并尊重 unlabeled 标签 | 修正过期 issue 自动关闭逻辑，避免误关 |
| [#68673](https://github.com/anthropics/claude-code/pull/68673) | 分页脚本：页面不足时主动中断而非仅在空页时中断 | 修复脚本无限循环风险 |
| [#72014](https://github.com/anthropics/claude-code/pull/72014) | `protect-mcp` 插件：基于 Cedar 的 fail-closed 策略门禁 + 签名回执 | 引入 MCP 工具调用的强制权限拦截与可验证审计机制，安全能力增强 |
| [#75537](https://github.com/anthropics/claude-code/pull/75537) | hook-development 技能补齐全部 5 种 hook handler 类型 | 文档/校验器与实际产品对齐，避免插件作者踩坑 |
| [#75529](https://github.com/anthropics/claude-code/pull/75529) | code-review 插件文档：明确与内置 `/code-review` skill 的边界 | 避免命令冲突，提升可发现性 |

> 注：今日所有 PR 均无评论且 0 👍，活跃 PR 较少，社区编辑主要来自内部维护者 `fcarvajalbrown` 等。

---

## 5. 功能需求趋势

从今日 Issues 提炼的社区诉求方向：

1. **🔴 成本可视化与控制（最高优先级）**：`/delete` 会话、token 实时统计、强制子代理预算上限、终止失控后台任务的机制。
2. **🟠 多层代理架构**：自治 AI 大脑愿景（持久状态、分层模型、Sonnet worker）、子代理派生能力恢复。
3. **🟡 多端体验对齐**：Desktop 端补齐 CLI 功能（statusLine、worktree 平行会话）、Cowork 跨平台稳定支持。
4. **🟢 协作与分支**：`/fork` 类会话分支（已在 #46451 中闭合并合入 VSCode 扩展，但 CLI 仍有缺口）。
5. **🔵 安全与可观测性**：MCP 工具调用强制策略（呼应 #72014）、会话篡改防护（v2.1.205 部分达成）。

---

## 6. 开发者关注点

根据 Issues 与 PR 综合分析，开发者当前最关心的痛点：

- **🔥 配额非透明燃烧**：5 小时窗口被过度消耗、子代理死循环、并行调度失控，是付费用户最大的负面情绪来源。社区要求：**默认成本护栏 + 可中断的后台任务 + 单次任务 budget 上限**。
- **🐛 平台不稳定**：macOS/Windows Cowork 缺失、PyCharm 终端滚屏、Windows IME（CJK 输入法）在后台会话查看器失效、IME 影响中文/日文开发者体验。
- **🧠 配置漂移**：v2.1.205 仍存在 `--json-schema` 静默失败、Skill `isMeta` 重复消息导致 400、project key 大小写 canonicalization 等多个回归，提示发布前验证覆盖面还需扩展。
- **💡 高赞但迟迟未到的功能**：`/delete`（51 👍）、`/fork` CLI 支持、桌面 statusLine，反映出"基础卫生功能"的缺失。
- **🔐 信任赤字**：#72014 插件（protect-mcp）的快速涌现表明社区对"审计 + fail-closed"权限模型有强烈需求，希望官方能主导推出而非依赖第三方插件。

---

*报告基于 anthropics/claude-code 仓库 2026-07-09 当日数据整理生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-07-09** | **数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)**

---

## 📌 今日速览

今日社区最关注的话题集中在 **Agent 无限循环/挂起** 问题（`gemini-3.1-pro-preview` 模型下表现尤为突出，#22415 累计 30 条评论 +27 👍），与此同时官方合入了多项 **安全加固 PR**（包括 a2a-server 零点击 RCE 漏洞与 CI 供应链风险修复），并发布了 v0.50.0 稳定版与 v0.51.0-preview.0 预览版。

---

## 🚀 版本发布

### v0.50.0（稳定版）
- CI 修复：发布验证阶段 `npm ci` 忽略脚本校验（[#28116](https://github.com/google-gemini/gemini-cli/pull/28116)）
- CI 修复：防止 workspace 二进制 shadowing（[#28132](https://github.com/google-gemini/gemini-cli/pull/28132)）
- Feature：**Tool Registry** 引入

### v0.51.0-preview.0（预览版）
- 集成 v0.50.0-preview.1 的 Changelog 更新（[#28150](https://github.com/google-gemini/gemini-cli/pull/28150)）
- 修复 `no_proxy` 测试用例（[#28131](https://github.com/google-gemini/gemini-cli/pull/28131)）
- 版本号预升级至 `0.51.0-nightly.20260625.g3fbf93e26`

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论/👍 | 关键看点 |
|---|-------|--------|---------|---------|
| [#22415](https://github.com/google-gemini/gemini-cli/issues/22415) | **CLI 无限挂起** —— `gemini-3.1-pro-preview` 下持续显示 "This is taking a bit longer"，疑似重试死循环 | **P1** | 30 / 27 | 热度最高，Interaction Summary 显示异常高 token 消耗；标记为 possible-duplicate 与 need-retesting |
| [#1698](https://github.com/google-gemini/gemini-cli/issues/1698) | **支持 VISUAL/EDITOR 环境变量** —— 当前仅硬编码 5 个编辑器，不支持 Unix/Linux `EDITOR` 约定 | **P2/P3** | 13 / **55** | 👍 数全场最高，开发者期望遵循系统约定 |
| [#16980](https://github.com/google-gemini/gemini-cli/issues/16980) | **不要再用 .gitignore 控制文件访问** —— 建议使用官方 `gemini-ignore` 机制 | P3 | 15 / 12 | 涉及权限模型，长期争论 |
| [#20889](https://github.com/google-gemini/gemini-cli/issues/20889) | **无障碍问题** —— `ask_user` 在屏幕阅读器模式下无法回答问题 | P2 | 11 / 0 | 视障用户核心痛点，effort/medium |
| [#19441](https://github.com/google-gemini/gemini-cli/issues/19441) | **"Trying to reach Gemini..."** 连接失败 | P3 | 10 / 1 | 用户报告模型连接 1-2 天持续不可用 |
| [#22473](https://github.com/google-gemini/gemini-cli/issues/22473) | ACP 客户端测试在 Cursor IDE 中因 `CURSOR_TRACE_ID` 未桩化而失败 | P2 | 8 / 0 | 影响 IDE 集成测试 |
| [#22167](https://github.com/google-gemini/gemini-cli/issues/22167) | `scripts/telemetry.js` 不校验 `settings.json` 中的 `telemetry.target` | P2 | 6 / 0 | 企业/安全相关 |
| [#22817](https://github.com/google-gemini/gemini-cli/issues/22817) | `read_file` 当 `start_line` 超过文件总行数时返回反向行范围且内容为空 | P2 | 6 / 0 | 工具逻辑错误 |
| [#20953](https://github.com/google-gemini/gemini-cli/issues/20953) | 杀毒软件将 `clipboard_x86_x64.exe` 标记为威胁 | P2 | 6 / 0 | 用户安全信任问题 |
| [#22583](https://github.com/google-gemini/gemini-cli/issues/22583) | **P1 race condition** —— `ProjectRegistry.save()` 并发启动清理时 ENOENT | **P1** | 5 / 2 | 启动期竞态，影响可靠性 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 类型 | 要点 |
|---|----|------|------|
| [#28327](https://github.com/google-gemini/gemini-cli/pull/28327) | `fix(core): file:// URL 解码修复` | 🐛 Bug | `resolveToRealPath` 不再无条件 `decodeURIComponent`，避免 `report%202026.txt` 等合法文件名被破坏 |
| [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) | **🔒 a2a-server 工作区信任 RCE 修复** | 🛡️ Security | 修复零点击 RCE 与环境投毒漏洞（b-519269096），重构启动流程 |
| [#28316](https://github.com/google-gemini/gemini-cli/pull/28316) | **🔒 a2a-server 任务取消执行流终止** | 🛡️ Security | 修复 Agent 模式任务取消后产生 "ghost execution"，同时修复竞态、内存泄漏、未处理异常 |
| [#28232](https://github.com/google-gemini/gemini-cli/pull/28232) | **🔒 CI 供应链 RCE 修复** | 🛡️ Security | 将 `eval-pr.yml` 拆分为 `pull_request` + `workflow_run`，避免 fork PR 携带 `GEMINI_API_KEY`/`GITHUB_TOKEN` 执行 |
| [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) | **递归推理回合限制** | ⚙️ Stability | 强制单次用户请求最多 15 轮推理（可由 `maxSessionTurns` 覆盖），防止无限循环消耗配额 |
| [#28223](https://github.com/google-gemini/gemini-cli/pull/28223) | **write_file / replace 工具绕过 LLM 校正** | 🐛 Bug | 修复 `.ipynb` 与 `.json` 文件被损坏/修改失败的问题 |
| [#28309](https://github.com/google-gemini/gemini-cli/pull/28309) | **Markdown 渲染：CJK 与 `__bold__` 修复** | ✨ Improvement | 修复中日韩文本硬换行/列表误判及加粗语法问题 |
| [#28126](https://github.com/google-gemini/gemini-cli/pull/28126) | **多行 edit snippet 显示省略号** | ✨ UX | `EditToolInvocation.getDescription()` 在内容被截断时追加 `...`，便于用户理解改动 |
| [#28310](https://github.com/google-gemini/gemini-cli/pull/28310) | **移除 Antigravity URL 尾随句点** | 🐛 Bug | 修正 Google 登录失败提示中的 URL 展示 |
| [#28320](https://github.com/google-gemini/gemini-cli/pull/28320) | **v0.51.0-preview.0 自动 Changelog** | 📝 Docs | 由 `gemini-cli-robot` 自动生成，等待合并 |

---

## 📈 功能需求趋势

1. **🛡️ 安全与权限边界** —— 成为本周最强信号：供应链 RCE、a2a-server 零点击 RCE、Telemetry 校验缺失、`.gitignore` 访问控制争议，开发者期望更明确的"工作区信任模型"。
2. **🧠 Agent 稳定性** —— 围绕 **递归循环**（#22415、#22669、#22792、#22947）与 **模型自动降级**（#22457 强制设置却被切换为 `gemini-2.5-flash`）的反馈密集，叠加 PR #28164 的 15 回合硬限，社区共识正在形成。
3. **🆕 新模型兼容性** —— `gemini-3.1-pro-preview` 挂起、`gemini-3.1-flash-lite-preview` 不可识别（#22906），新模型适配成为稳定性的关键瓶颈。
4. **🧩 IDE / 编辑器生态** —— `EDITOR`/`VISUAL` 环境变量（#1698）、Cursor 中 ACP 测试桩（#22473）、Antigravity URL 修正，IDE 集成仍是高频需求。
5. **🌏 国际化与无障碍** —— CJK 渲染（#28309）、屏幕阅读器支持（#20889），表明工具面向更广受众扩展。
6. **⚙️ 高级工作流** —— Git Worktree 隔离（#22658）、Skill Composition / Progressive Disclosure（#22420）反映出对**多任务并行与技能组合**的探索。

---

## 💬 开发者关注点

- **痛点 #1：Agent 不可控** —— "卡住 / 进入循环 / 提前终止 / 缓冲过久"占据过去 24h 高赞 Issue 的半数以上，开发者迫切需要**可视化进度、断点恢复、可配置回合上限**。
- **痛点 #2：模型行为不一致** —— 显式设置模型被自动切换、上下文超限后压缩失败、新模型未注册，开发者期待 CLI 行为对用户配置**更具确定性**。
- **痛点 #3：安全透明度不足** —— YOLO 模式下子代理仍频繁请求 READ 权限（#26414）、杀毒软件误报 `clipboard_x86_x64.exe`（#20953）、Telemetry 配置静默接受非法值，开发者要求**更清晰的安全边界与可审计日志**。
- **痛点 #4：工具健壮性** —— `read_file` 越界返回逻辑矛盾值（#22817）、`is_background` 200ms 窗口误判（#22806）、`@` 引用导致 `ReadManyFiles` 加载 6850 个文件（#22446），工具层边界条件仍需加强。
- **隐性诉求** —— 社区对 **Roadmap 与 issue 响应节奏**存在不满（多 issue 标注 Stale 后仍无结论），维护透明度是下阶段值得提升的方向。

---

*日报基于过去 24 小时 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期**：2026-07-09
**数据来源**：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

今日 Copilot CLI 仓库动态以**问题修复收尾与新功能需求涌现**为主线：备受关注的"Plan→Compact→Re-Plan 无限循环"系列问题（累计 11 个重复 Issue）已被批量关闭，标志着一项关键 Agent 稳定性 Bug 告一段落；同时社区集中提出多项增强诉求，包括**模型族别名解析**、**自定义 Slash 命令**与**Exit Resume 提示可配置化**，反映出用户对 CLI 灵活性与可观测性的持续期待。过去 24 小时无新版本发布，无重要 PR 合入。

---

## 🚀 版本发布

> 过去 24 小时内**无新版本发布**。根据社区 Issue 提及，当前最新稳定版本为 **1.0.69**（见 [#4059](https://github.com/github/copilot-cli/issues/4059)），部分用户在 1.0.49 后的版本上遭遇了 Linux 平台复制功能回归（[#3586](https://github.com/github/copilot-cli/issues/3586)）。

---

## 🔥 社区热点 Issues

以下按社区关注度（评论数 + 👍 数）筛选出 10 个最值得关注的 Issue：

### 1. [Feature Request: 支持 `.github/prompts` 目录的自定义 Slash 命令](https://github.com/github/copilot-cli/issues/618)
- **状态**：CLOSED · 👍 99 · 💬 32
- **亮点**：呼声最高的长期 Feature Request，期望对齐 Claude Code 与 VS Code 扩展的自定义命令能力。该 Issue 被关闭可能意味着功能已规划或实现，值得关注后续版本变更日志。

### 2. [macOS Gatekeeper 在企业安全策略下拦截 Copilot App](https://github.com/github/copilot-cli/issues/970)
- **状态**：OPEN · 👍 21 · 💬 6
- **亮点**：通过 HomeBrew 升级后弹出"无法验证 copilot 是否不含恶意软件"提示，企业用户需手动到"隐私与安全性"放行。影响企业部署体验，亟待公证/签名流程优化。

### 3. [规划与执行阶段自动切换模型](https://github.com/github/copilot-cli/issues/2792)
- **状态**：OPEN · 👍 14 · 💬 4
- **亮点**：希望允许配置不同模型分别用于任务规划与执行，以在成本/质量间取得平衡，体现用户对**多模型协同**的精细化诉求。

### 4. [Plan→Compact→Re-Plan 无限循环（217 次循环，零执行）](https://github.com/github/copilot-cli/issues/3158)
- **状态**：CLOSED · 👍 0 · 💬 4
- **亮点**：高严重度 Agent Bug，Auto-compaction 后 Agent 反复重读摘要并重新规划而非执行。同名 Issue #3144–3157 几乎同一时间批量提交并关闭，疑似批量归档处理，需跟进是否有对应修复 PR。

### 5. [`/delegate` 命令忽略指定的源分支与分支名](https://github.com/github/copilot-cli/issues/2729)
- **状态**：CLOSED · 👍 2 · 💬 4
- **亮点**：Agent 委托任务时不遵守用户对分支来源与命名的指令，影响 PR 工作流的可控性。

### 6. [/models 不显示扩展上下文定价](https://github.com/github/copilot-cli/issues/4059)
- **状态**：OPEN · 👍 0 · 💬 1
- **亮点**：在 1.0.69 上，标记 1M 蓝标的扩展上下文模型无法通过键盘导航查看定价明细，存在可用性缺陷。

### 7. [Stale keytar 条目导致 HTTP MCP 服务器每次启动都弹出 OAuth 浏览器](https://github.com/github/copilot-cli/issues/2112)
- **状态**：OPEN · 👍 1 · 💬 1
- **亮点**：OS Keychain 中过期 Token 与文件缓存的 Refresh Token 冲突，导致反复触发 OAuth 流程，影响 MCP 集成体验。

### 8. [TUI 在 NFS/GPFS 上挂起（Tokio 'which gh' SIGCHLD 竞态）](https://github.com/github/copilot-cli/issues/4053)
- **状态**：OPEN · 👍 0 · 💬 1
- **亮点**：Linux + NFS/GPFS 环境（含 HPC、企业存储）下 TUI 卡在"Loading: N skills"，根因疑似子进程信号竞态，限制了在科研/企业环境的可用性。

### 9. [BYOK（COPILOT_PROVIDER_*）在 `--acp` 模式下仍被拒绝](https://github.com/github/copilot-cli/issues/4016)
- **状态**：OPEN · 👍 2 · 💬 1
- **亮点**：`copilot -p` 可免登录使用自定义 Provider，但 `copilot --acp --stdio` 仍报 `-32000 Authentication required`。该问题自 1.0.61 起回归，影响 ACP 协议场景下的 BYOK 用户。

### 10. [`/resume` 对所有非 Git 会话失效](https://github.com/github/copilot-cli/issues/4054)
- **状态**：OPEN · 👍 0 · 💬 1
- **亮点**：非 Git 工作目录下的会话存储 `repository = '/'`，被 `/resume` 过滤逻辑误判为不可恢复，形成"先有鸡还是先有蛋"的死锁。

### 附：其他值得留意的 Issue

- [#4067](https://github.com/github/copilot-cli/issues/4067) - `settings.json` 中的 `model` 字段未在启动时生效
- [#4068](https://github.com/github/copilot-cli/issues/4068) - 希望支持模型族别名（如 `opus`/`sonnet`）解析为最新稳定版
- [#4066](https://github.com/github/copilot-cli/issues/4066) - Exit 时 Resume 提示希望可配置（避免暴露长 ID）
- [#4065](https://github.com/github/copilot-cli/issues/4065) - 防数据外泄策略过于激进，误拦合法规格内容
- [#4039](https://github.com/github/copilot-cli/issues/4039) - 企业托管插件标记已安装但未实际同步到磁盘

---

## 📥 重要 PR 进展

> 过去 24 小时内**仅有 2 条 PR 更新**，且均无描述、零互动，属低质量/无效提交，**暂无可推荐的实质性进展**。建议关注后续是否会有关闭以下批量 Plan-Compact-Re-Plan 问题（#3144–3158）的修复 PR 出现：

- [#4057 - "Install"](https://github.com/github/copilot-cli/pull/4057) · OPEN · 无描述
- [#3708 - "Add files via upload"](https://github.com/github/copilot-cli/pull/3708) · OPEN · 无描述

---

## 📈 功能需求趋势

通过对今日 Issue 文本聚类，社区关注的**核心方向**呈现如下分布：

| 方向 | 代表 Issue | 热度 |
|------|------------|------|
| 🧩 **可扩展性 / 自定义命令** | #618（自定义 Slash 命令） | ⭐⭐⭐⭐⭐ |
| 🤖 **多模型协同与族别名** | #2792、#4068、#4067 | ⭐⭐⭐⭐ |
| 🔐 **身份认证 / BYOK** | #2112、#4016 | ⭐⭐⭐⭐ |
| 🖥️ **平台兼容性（macOS / Linux / NFS）** | #970、#4053、#3586 | ⭐⭐⭐⭐ |
| 📦 **企业部署与插件管理** | #4039、#1624 | ⭐⭐⭐ |
| 🧠 **Agent 行为与上下文管理** | #3144–3158（批量闭环）、#2729、#4054 | ⭐⭐⭐⭐ |
| 💸 **计费 / 模型可见性** | #4059 | ⭐⭐⭐ |
| 🛡️ **安全策略与误拦** | #4065 | ⭐⭐ |

**总结**：社区焦点已从"能否用"过渡到"用得稳、可定制、可治理"，尤其在 **Agent 自主性边界** 与 **多模型编排** 两个维度。

---

## 🧑‍💻 开发者关注点

基于 Issue 文本与评论的高频痛点提炼：

1. **Agent 失控与"卡死"循环** — 多个 Plan→Compact→Re-Plan 报告（单会话最多 217 次循环）暴露了 **Auto-compaction 与 Plan 状态机的耦合缺陷**，开发者在长任务中无法止损，浪费大量 Token 与时间。
2. **CLI 与扩展/桌面端的能力不对等** — VS Code 早已支持 `.github/prompts`，CLI 至今滞后，使 CLI 在自定义工作流场景下处于劣势。
3. **macOS / Linux 平台签名与系统调用兼容** — Gatekeeper 拦截、NFS 上 `which gh` 子进程竞态，说明**企业/HPC 环境适配**仍是短板。
4. **BYOK 与 ACP 协议的认证一致性** — `copilot -p` 可免登录，但 `--acp` 模式要求 GitHub 登录，破坏了**配置一处、全场景生效**的预期。
5. **配置"看似生效但实际被忽略"** — `settings.json` 的 `model` 字段未被尊重，开发者难以信任配置文件。
6. **可观测性与可调试性不足** — TUI 静默挂起、扩展上下文定价无键盘可达入口、防外泄策略无声拦截，开发者**难以理解 Agent 正在做什么或为何失败**。

> 💡 **建议**：开发者最关心的是 **稳定、可预期、可配置** 三大属性，下一阶段若官方能在 **Agent 循环防失控**、**BYOK 全场景一致**、**CLI/扩展能力对齐** 三个方向给出路线图，将显著提升社区信心。

---

*报告生成时间：2026-07-09 · 数据范围：过去 24 小时*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**📅 2026-07-09** | 数据来源: github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览

过去 24 小时内，Kimi Code CLI 仓库活跃度较低，**无新版本发布、无 PR 更新**，仅 1 条 Issue 被更新（#2458）。社区整体处于平稳期，开发者反馈集中在企业/受控网络环境下的使用兼容性问题上。

---

## 2. 版本发布

🚫 **过去 24 小时内无新版本发布。**

---

## 3. 社区热点 Issues

由于过去 24 小时内仅有 1 条 Issue 被更新，社区讨论较为冷清。仅展示实际存在的内容：

### 🔹 #2458 [OPEN] [enhancement] Add option to ignore SSL certificate
- **作者**: dmorsin | **更新**: 2026-07-08 | **评论**: 2 | **👍**: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2458
- **重要性**: 该 Issue 反映了在企业受控环境（如组织统一管理的杀毒软件对 SSL 连接进行 MITM 代理）下使用 Kimi CLI 登录失败的痛点。开发者请求增加忽略 SSL 证书校验的选项，以便兼容此类网络环境。
- **社区反应**: 仅有 2 条评论、0 个点赞，关注度尚不高，但代表了"企业环境兼容性"这一普适性需求，潜在用户群体可能不小。

---

## 4. 重要 PR 进展

🚫 **过去 24 小时内无 PR 更新。**

---

## 5. 功能需求趋势

基于过去 24 小时的 Issue 数据（样本量为 1，趋势判断仅供参考）：

| 需求方向 | 占比 | 说明 |
|---------|------|------|
| 🏢 企业/受控网络兼容性 | 100% | SSL 证书处理、企业代理环境适配 |

📌 **观察**: 由于数据样本极少，无法形成可靠的社区趋势判断。建议结合更长周期的 Issue 历史数据进行分析。

---

## 6. 开发者关注点

根据 #2458 的反馈，开发者当前关注的核心痛点：

1. **企业网络安全策略冲突** —— 在装有企业级杀毒软件或 SSL 中间人代理的环境中，CLI 工具无法正常建立安全连接，导致登录受阻。
2. **缺乏灵活的网络配置选项** —— 开发者希望官方提供类似 `--ignore-ssl-certificate` 或环境变量配置项，以便在受信任的内部网络环境中绕过校验。
3. **部署环境多样性** —— Kimi CLI 在个人开发环境与企业生产环境之间的兼容性仍是未充分解决的问题。

---

## 📊 今日数据总结

| 指标 | 数量 |
|------|------|
| 新版发布 | 0 |
| Issue 更新 | 1 |
| PR 更新 | 0 |
| 新 Issue | 0 |
| 新 PR | 0 |

> 💡 **分析师备注**: 今日仓库活跃度处于低谷期，可能处于版本发布前的功能冻结阶段，或开发团队正在处理其他工作。建议持续关注后续几天的 Issue 创建与 PR 提交流向，以捕捉社区需求信号。如需更全面的趋势分析，建议扩大数据采集窗口（如过去 7 天 / 30 天）。

---

*报告生成时间: 2026-07-09 | 数据基于 GitHub 公开数据*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-07-09** ｜ **数据来源：github.com/anomalyco/opencode**

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，但社区进入了一轮密集的 Bug 修复周期：**HOYALIM（疑似官方修复机器人/工程实习生）在 24 小时内集中提交了 9 个 Bug 修复 PR**，重点针对会话状态、TUI 项目初始化、Token 计量、目录扫描等长期影响稳定性的问题。与此同时，**#16017（Go 套餐用量 API）和 #6096（TPS 显示）仍是社区呼声最高的两大 Feature Request**，分别累计获得 96 和 60 个 👍。

---

## 🚀 版本发布

**无新版本发布。** 最近一次相关版本为 1.17.15（用户 #36007、#28656 报告基于该版本出现问题）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 👍 | 为什么值得关注 |
|---|-------|------|------|-----|----------------|
| [#16017](https://github.com/anomalyco/opencode/issues/16017) | **Go 套餐用量/余额 API 端点**（rolling/weekly/monthly） | OPEN | 23 | **96** | 社区最高赞 Feature Request，远超第二名。建议将 dashboard 已有数据通过公开 API 暴露，便于第三方监控/告警。 |
| [#28567](https://github.com/anomalyco/opencode/issues/28567) | **完整 MCP 客户端能力** | CLOSED | 22 | 25 | 用户指出 OpenCode MCP 客户端远落后于最新 MCP 规范，反映核心协议跟进诉求强烈。 |
| [#6096](https://github.com/anomalyco/opencode/issues/6096) | **每条消息显示 Tokens/s（TPS）** | OPEN | 19 | **60** | 高赞长期 Feature Request，自 2025-12 至今未关闭，开发者对性能透明度需求持续。 |
| [#28957](https://github.com/anomalyco/opencode/issues/28957) | **"Upstream idle timeout exceeded"** | OPEN | 18 | 2 | macOS Tahoe 26.5 + Apple M4 环境下 session timeout，影响 daily driver 用户。 |
| [#30086](https://github.com/anomalyco/opencode/issues/30086) | **新版本 CPU 使用率飙升** | OPEN | 17 | 11 | 7 天前开始出现明显回归，从 10 个并发 session 退到 3 个即卡顿，已波及多用户。 |
| [#17953](https://github.com/anomalyco/opencode/issues/17953) | **破坏性文件操作 Guardrail + 用户确认** | CLOSED | 10 | 0 | 源于 #17949（AI 删除用户 Downloads 目录），安全护栏议题已立项。 |
| [#35556](https://github.com/anomalyco/opencode/issues/35556) | **V2 首 Location 暴露空 Plugin Generation** | CLOSED | 10 | 0 | `PluginSupervisor` 初始 reload 竞态，关联 2.0 核心架构。 |
| [#28656](https://github.com/anomalyco/opencode/issues/28656) | **Centos 7 TUI 代码块渲染空白** | OPEN | 9 | 0 | 老旧 Linux 发行版的 TUI 兼容性问题，代码只能复制粘贴才能看到。 |
| [#1934](https://github.com/anomalyco/opencode/issues/1934) | **自动 `aws sso login` 凭证刷新** | OPEN | 7 | 11 | **2025-08 创建的"老大难"**，每天触发两次 AWS 凭证过期，等待官方实现。 |
| [#33490](https://github.com/anomalyco/opencode/issues/33490) | **GLM-5.2 via Go 拒绝 `instructions` 字段** | OPEN | 6 | 3 | OpenCode Go → Z.AI 链路兼容性问题，影响国产生态用户。 |

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 作者 | 内容要点 |
|---|----|-----|----------|
| [#36008](https://github.com/anomalyco/opencode/pull/36008) | **fix(core): 恢复 Explore agent shell 访问** | kitlangton | 恢复 V1 行为，允许 Explore agent 调用重命名后的 V2 `shell` action，并补全 git status 权限回归测试。 |
| [#35769](https://github.com/anomalyco/opencode/pull/35769) | **docs: 收录 Copilot 用量查看插件到生态文档** | fitri | 新增 TUI 插件 *Copilot Quota for OpenCode* 至 Plugins 表（closes #35768）。 |
| [#36005](https://github.com/anomalyco/opencode/pull/36005) | **feat(core): 通用化 Session input inbox** | kitlangton | 将用户和合成消息统一为单一 Session input 生命周期，平铺 `session.prompt()` / `session.synthetic()` 语义。 |
| [#36003](https://github.com/anomalyco/opencode/pull/36003) | **fix(models): catalog refresh 卡顿时回退** | HOYALIM | `models.dev` 启动加载失败/锁等待时改为返回缓存数据（closes #35294）。 |
| [#36002](https://github.com/anomalyco/opencode/pull/36002) | **fix(session): stream 关闭后正确收敛 busy 状态** | HOYALIM | 修复 prompt 流结束但 session 状态仍 busy 的问题（closes #35472）。 |
| [#36001](https://github.com/anomalyco/opencode/pull/36001) | **fix(session): 切换模式时保留缓存前缀** | HOYALIM | 保留 provider system prompt prefix，提升 prefix-cache 命中率（closes #35708）。 |
| [#36000](https://github.com/anomalyco/opencode/pull/36000) | **fix(app): 限制 prompt 历史附件大小** | HOYALIM | 历史中嵌入的 data URL 可能让持久化状态膨胀数 MB，此 PR 设置上限（closes #34215）。 |
| [#35999](https://github.com/anomalyco/opencode/pull/35999) | **fix(session): 区分活跃上下文与累计用量** | HOYALIM | Context meter 不再把 cache-read 累计值混进当前上下文，更直观（closes #30649, #34712）。 |
| [#35998](https://github.com/anomalyco/opencode/pull/35998) | **fix(tui): 防止重复项目初始化** | HOYALIM | 同一目录下并发 project 加载只初始化一次（closes #32161）。 |
| [#35997](https://github.com/anomalyco/opencode/pull/35997) | **fix(vcs): 批量 untracked diff 检测** | HOYALIM | 无 HEAD 仓库逐文件 diff 改为批量处理（closes #34916）。 |

> **观察**：今日 PR 中 `HOYALIM` 单人贡献 9 个 Bug Fix，覆盖 session/models/app/tui/vcs/skill/core/project 7 个模块，社区稳定性工作明显前置。

---

## 📈 功能需求趋势

1. **OpenCode Go 商业化能力建设**
   - 用量/余额 API（#16017）、首月折扣/退款流程（#35941）、CLI 配额可视化插件（#35769）——围绕订阅的运营诉求正在积压。

2. **MCP 协议追赶**
   - 完整客户端能力（#28567）、Elicitation 支持（#23066 已关）、Agent 无熔断循环调用 MCP（#31942）——MCP 已成为官方下一阶段重点。

3. **可观测性 / 透明度**
   - TPS 显示（#6096）、Context meter 准确性（#35999）、TUI 渲染诊断（#28656）——开发者普遍希望"看清系统在做什么"。

4. **会话与子 Agent 稳定性**
   - Subagent 挂死无法恢复（#35952、#33028）、idle timeout（#28957）、流关闭后状态错乱（#36002）——并发任务可靠性是当前最大痛点。

5. **Linux / CLI 体验**
   - 复制粘贴依赖 xclip/xsel/wl-clipboard（#35977、#35978）、web 模式 CWD 不继承终端（#35326）——非 macOS/Windows 用户的基本操作流仍不顺畅。

---

## 👨‍💻 开发者关注点

- **会话不可恢复 = 资源浪费**：多位用户在 #35952、#33028 反映 subagent 半途冻结后只能硬重启，token 已消耗、任务无法续跑。**缺乏 checkpoint / resume 机制** 正在成为付费用户流失风险点。
- **V2 迁移阵痛持续**：#17953、#35556、#28656、#35762（恢复 subagent 导航）等多条 Issue 表明 2.0 重写仍在回填 V1 行为，社区短期内需重点关注回归测试。
- **海外访问/订阅体验问题**：#35941（首月折扣未生效申请退款）、#1934（AWS SSO 凭证频繁过期，每天触发两次）——商业化与云集成体验是开发者日常摩擦主要来源。
- **安全/可控性诉求**：删除文件无确认（#17953/17949）、`models.dev` symlink traversal（#35996）——开发者既希望 AI 自动化，也期待"危险动作一定要 pause"的产品设计。
- **性能回退恐慌**：#30086 高 CPU 报告 17 条评论，近 7 天内多名用户中招——版本升级引入的性能回归被视为高优先级信号。

---

*本日报由 OpenCode 社区动态自动汇总，基于 GitHub Issues / PRs 公开数据；如需关注具体方向，可订阅对应 Issue 的 GitHub Notifications。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-09

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono)（earendil-works/pi 仓库）

---

## 📌 今日速览

过去 24 小时内 **无新版本发布**，但仓库活跃度依旧很高——**43 条 Issue** 与 **7 条 PR** 被更新，绝大多数 Issue 已在当日 CLOSED，体现出维护者高效的 triage 节奏。今日主线集中在三件事：**GitHub Copilot 1M 上下文窗口适配**（已闭环）、**Bun release 下的 Linux/X11 剪贴板回归修复**，以及围绕 **session compaction** 的一系列边缘场景缺陷清理。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

以下 10 条是近 24 小时更新中**最具代表性**的讨论，按影响力排序：

### 1. [#5263](https://github.com/earendil-works/pi/issues/5263) ⭐ 6 [OPEN]
**Make in-session model and thinking-level changes ephemeral by default**
提议将 session 内切换 model / thinking level 默认改为"仅作用于当前 session"，并在 `/settings` 增加显式的 "Default model" 入口。是当前热度最高的开放议题，反映出多模型协作时全局污染的痛点。

### 2. [#5700](https://github.com/earendil-works/pi/issues/5700) 💬 9 [CLOSED]
**Support multiple live agent sessions with TUI switching**
希望 Pi 支持**并发后台 agent session + TUI 快速切换**。当前 `switchSession` 会 tear down 现有 session，无法并行。讨论度高，长期呼声。

### 3. [#5886](https://github.com/earendil-works/pi/issues/5886) 👍 2 [OPEN]
**AgentSession settlement/continuation and assistant-tail lifecycle bugs**
由 mitsuhiko 提交的元 Issue，归纳了 post-run 逻辑因 transcript 状态错位导致的若干持续 bug。涉及 `pkg:agent`、`pkg:coding-agent`。

### 4. [#6204](https://github.com/earendil-works/pi/issues/6204) 💬 7 [CLOSED]
**mimo-v2-omni is a ghost model on the three MiMo Token Plan providers**
内置模型目录将 `mimo-v2-omni` 列在三个 Xiaomi MiMo 区域 provider 下，但实际接口均返回 400。典型的 provider metadata 同步问题。

### 5. [#6250](https://github.com/earendil-works/pi/issues/6250) 💬 2 [CLOSED]
**Ctrl+V image paste silently fails on Linux/X11 in Bun release binary**
从 0.78.0 → 0.80.3 的回归：编译后的 Bun 二进制内 `@mariozechner/clipboard` 原生绑定无法解析，已由 PR #6418 修复。

### 6. [#6303](https://github.com/earendil-works/pi/issues/6303) 👍 1 [OPEN]
**Exponential retry backoff has no cap despite retry.provider.maxRetryDelayMs existing**
`getRetrySettings()` 没有返回 `maxDelayMs`，导致 `_prepareRetry()` 指数退避无上限——默认 baseDelay=2000ms 时第 7 次重试需等待约 4 分钟。

### 7. [#6414](https://github.com/earendil-works/pi/issues/6414) 💬 3 [CLOSED]
**streamProxy drops ToolCall.thoughtSignature — Gemini multi-turn tool calls 400**
使用 `streamProxy` 配合后端 `streamSimple` 时，Gemini 第二轮 tool call 因缺少 `thought_signature` 报错 400。影响所有走代理的 Gemini 用户。

### 8. [#6321](https://github.com/earendil-works/pi/issues/6321) 💬 2 [CLOSED]
**/fork spawns one extra session per Enter while the fork is running**
`pi -ne` 即可复现：Fork 选择器在 `runtimeHost.fork()` 完成前 await，导致按一次 Enter 生成多个 session。已由 PR #6430 修复。

### 9. [#6406](https://github.com/earendil-works/pi/issues/6406) 💬 2 [CLOSED]
**Read-only ~/.pi/agent fails every credential read with "No API key found"**
只读磁盘场景下，Pi **读取** auth.json 也会创建锁文件失败，进而误报 "No API key found"。破坏了"只读"的语义。

### 10. [#6373](https://github.com/earendil-works/pi/issues/6373) 💬 2 [CLOSED]
**Clipboard images not sent to LLM, and no support for remote model inference**
粘贴图片被写成临时文件并以路径形式插入——但部分模型忽略路径；并且当前不支持**远端模型推理**的图像传递。影响多模态工作流。

---

## 🛠 重要 PR 进展

过去 24 小时共 7 条 PR 更新，覆盖**协议修复、构建产物、生成器脚本、可观测性**多个方向：

| # | PR | 状态 | 说明 |
|---|----|------|------|
| [#6437](https://github.com/earendil-works/pi/pull/6437) | fix(ai): update Copilot extended context windows | ✅ CLOSED | 将支持 GitHub 扩展上下文的 Copilot 模型 `contextWindow` 更新为 **1,000,000**。对应 Issue #6439。 |
| [#6436](https://github.com/earendil-works/pi/pull/6436) | fix(ai): hide responses reasoning comment markers | ✅ CLOSED | 剥离 OpenAI Responses 推理回放中的 `<!-- -->` 分隔符，同时不影响已持久化 session 的签名 reasoning 项。 |
| [#6430](https://github.com/earendil-works/pi/pull/6430) | fix fork menu allowing user to double select an entry | ✅ CLOSED | 在 fork 启动前关闭菜单，杜绝扩展拖慢 teardown 时的**多次 fork**。对应 #6321。 |
| [#6418](https://github.com/earendil-works/pi/pull/6418) | Fix native clipboard in bun release | ✅ CLOSED | 将 `.node` 文件拷贝到 clipboard 包；X11 上若原生绑定失败 fallback 到 `xclip`。修复 #6250。 |
| [#6417](https://github.com/earendil-works/pi/pull/6417) | feat(agent): support custom metadata in jsonl session headers | ✅ CLOSED | 为 v3 JSONL session header 增加可选 `metadata?: Record<string, unknown>`，贯穿 `JsonlSessionStorage.create()` 全链路。 |
| [#6413](https://github.com/earendil-works/pi/pull/6413) | feat(coding-agent): show git info in local version | ✅ CLOSED | 在 `pi --version` / 本地版本显示中携带 git 信息，关闭 #6412。 |
| [#6427](https://github.com/earendil-works/pi/pull/6427) | feat(coding-agent): add prompt cache miss tracking | 🟢 OPEN | mitsuhiko 提交：通过对比相邻请求的 cache reads 与 prompt tokens，**检测每轮 prompt cache miss**，在 transcript 中以醒目颜色标注 idle gap 超 TTL 与 model 切换。`/session` 也将可视化暴露。 |

> 备注：今日 PR 中 **#6427 是唯一仍 OPEN 的**，代表 Pi 在可观测性方向的持续投入。

---

## 📈 功能需求趋势

综合近 24 小时 43 条 Issue，可归纳出五大社区诉求方向：

1. **Provider 生态扩张 & 元数据治理**
   - 内置 [Novita AI](https://github.com/earendil-works/pi/issues/6420)（OpenAI-compatible）
   - 修复 [Xiaomi MiMo 多区域 ghost model](https://github.com/earendil-works/pi/issues/6204)
   - 解决 [OpenCode 500 错误](https://github.com/earendil-works/pi/issues/6438)
   - 跟进 [GitHub Copilot 1M 上下文](https://github.com/earendil-works/pi/issues/6439)
   - 适配 [DeepSeek V4 + thinking mode](https://github.com/earendil-works/pi/issues/6433)

2. **Session / Compaction 鲁棒性**
   - 多个由 [Blue-B](https://github.com/earendil-works/pi/issues/6424) 提交的 compaction 边缘 bug：阈值触发后留有未完成工作 ([#6424](https://github.com/earendil-works/pi/issues/6424))、大上下文摘要分块与失败退避 ([#6425](https://github.com/earendil-works/pi/issues/6425))、模型切换后未 pre-compact 导致溢出 ([#6426](https://github.com/earendil-works/pi/issues/6426))、compaction 后 `max_output_tokens=1` ([#6429](https://github.com/earendil-works/pi/issues/6429))

3. **多 Session / 多 Agent 并发**
   - [#5700](https://github.com/earendil-works/pi/issues/5700) 长期功能诉求：后台并发 + TUI 切换

4. **扩展（Extension）机制补全**
   - [启动期 session hook](https://github.com/earendil-works/pi/issues/6428)：当前 `pi -c` / `--resume` 时 session 文件读取早于任何扩展
   - JSONL header [自定义 metadata](https://github.com/earendil-works/pi/issues/6402)
   - 内存版 session storage [导出](https://github.com/earendil-works/pi/issues/6435)

5. **可观测性与调优工具**
   - [Prompt cache miss tracking](https://github.com/earendil-works/pi/pull/6427)（PR 已落地）
   - 重试策略可配置性（[#6303](https://github.com/earendil-works/pi/issues/6303)）

---

## 🧑‍💻 开发者关注点与痛点

1. **平台兼容回归** — Bun release 打包产物在不同环境（尤其 Linux/X11）下出现原生绑定无法解析的回归，影响剪贴板、图像粘贴等高频交互。

2. **流式/代理层协议缺陷** — `streamProxy` + Gemini `thoughtSignature`、OpenAI Responses reasoning 标记泄露、Anthropic OAuth 计费标识缺失等，提示**多 provider 协议适配仍是最大失血点**。

3. **大 Session 的 fragility** — 多个 compaction 相关 Issue 显示，一旦 session 逼近上限，**摘要请求本身成为脆弱环节**，需要分块、重试退避、模型感知的预处理。

4. **错误分类与重试语义模糊** — 指数退避无上限 ([#6303](https://github.com/earendil-works/pi/issues/6303))、bun socket drop 未被归类为 retryable ([#6431](https://github.com/earendil-works/pi/issues/6431))、Anthropic OAuth 用尽额度被当 4xx ([#6421](https://github.com/earendil-works/pi/issues/6421))，说明**网络/认证错误的语义边界**仍需细化。

5. **多模型协作的工作流摩擦** — 全局 model/thinking 默认值在多 session 场景下被反复吐槽（[#5263](https://github.com/earendil-works/pi/issues/5263)），开发者期待更精细的作用域控制。

6. **生态接入成本** — 新 provider（如 Novita、OpenCode、Fable）仍以"用户自行配置 `models.json`"为主要接入路径，对**内置 provider** 与**官方文档**有持续需求。

---

> 📊 **日报小结**：今日 Pi 仓库处于"高频修复 + 小步演进"节奏。最大的功能增量来自 [#6427](https://github.com/earendil-works/pi/pull/6427) 的 prompt cache 可观测性，最大的协议级修复来自 Copilot 1M 上下文与剪贴板回归。社区最值得持续跟踪的开放议题是 [#5263](https://github.com/earendil-works/pi/issues/5263)（session 作用域语义）与 [#5886](https://github.com/earendil-works/pi/issues/5886)（AgentSession lifecycle 元 Issue）。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**📅 2026-07-09** | 数据来源: GitHub QwenLM/qwen-code

---

## 1. 今日速览

今日 Qwen Code 发布了 **v0.19.8** 版本，重点强化了 Daemon 端的服务环境隔离与多 Workspace 架构（RFC #6378 仍在讨论中），同时社区围绕**多 Workspace Daemon、Subagent 循环检测、模型上下文管理**等核心架构话题展开了密集讨论。值得关注的是，Anthropic Claude 4.8+ 的兼容性（废弃 `temperature` 参数）和 Windows 平台扩展安装失败问题已得到修复，v0.19.8-nightly 流水线也因 Prettier 格式问题暴露了 CI 质量门禁的改进空间。

---

## 2. 版本发布

### 🚀 v0.19.8（今日发布）

**主要变更：**
- **文档**: `docs(channels)` 新增 WeCom（企业微信）到渠道总览文档（PR #6490, by @DragonnZhang）
- **功能**: `feat(cli)` Daemon 服务环境隔离与全局准入控制（PR by @doudouOUC）

> 建议关注后续 release notes，社区反映 v0.19.8-nightly.20260709.e3a247f99 因 quality job 失败暂时受阻，相关修复见 PR #6555。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 状态 | 核心价值 |
|---|-------|------|------|---------|
| **1** | [#6378](https://github.com/QwenLM/qwen-code/issues/6378) RFC: 单个 qwen serve daemon 支持多 Workspace | 💬19 | OPEN | **架构级 RFC**，打破 "1 daemon = 1 workspace" 假设，向多租户迈进，已吸引大量设计讨论 |
| **2** | [#6519](https://github.com/QwenLM/qwen-code/issues/6519) Anthropic Claude 4.8+ 携带废弃 temperature 参数致 400 | 👍P1 | CLOSED | **P1 高优先级**，直接影响 Claude Opus 4.8 用户使用，修复已合并 |
| **3** | [#6384](https://github.com/QwenLM/qwen-code/issues/6384) hard limit: 0 致模型请求前崩溃 | 💬5 | OPEN | 影响所有"环境配置模型预留满默认上下文窗口"的部署模式，自动压缩逻辑的边界 bug |
| **4** | [#6334](https://github.com/QwenLM/qwen-code/issues/6334) Windows 平台 extensions install 失败 | 💬5 👍1 | CLOSED | Windows 用户高频痛点，与 PR #6545 修复形成闭环 |
| **5** | [#6505](https://github.com/QwenLM/qwen-code/issues/6505) Subagent 重复工具调用死循环无 LoopDetectionService | 💬4 | CLOSED | **多 Agent 体系关键稳定性问题**，主代理的循环检测无法覆盖 Subagent |
| **6** | [#4278](https://github.com/QwenLM/qwen-code/issues/4278) 任务中断后不继续执行 | 💬4 | CLOSED | 长期遗留的会话可靠性问题，影响长任务用户体验 |
| **7** | [#6246](https://github.com/QwenLM/qwen-code/issues/6246) qwen_code 无法识别自身进程 | 💬3 | CLOSED | 反向误杀问题：终止 Node.js 进程时把 qwen_code 自身也杀掉 |
| **8** | [#6553](https://github.com/QwenLM/qwen-code/issues/6553) qwen-code-action 丢弃 stderr | 💬2 | OPEN | CI 可观测性问题，triage 失败被静默吞掉，影响问题分流效率 |
| **9** | [#6503](https://github.com/QwenLM/qwen-code/issues/6503) Slash 自动补全排序回归 | 💬2 | CLOSED | 修复 #5577 引入的排序回退，命令历史污染导致补全优先级错误 |
| **10** | [#6401](https://github.com/QwenLM/qwen-code/issues/6401) ProxyAgent 不支持 NO_PROXY | 💬2 | CLOSED | 企业内网代理场景必备，违反标准代理行为规范 |

**社区反应**：P1/P2 级别问题占据主导，多 Workspace 架构和 Subagent 治理是当前最热的两大主题。

---

## 4. 重要 PR 进展（Top 10）

### 🔧 核心架构
- **[#6557](https://github.com/QwenLM/qwen-code/pull/6557)** `feat(daemon)` 会话制品跨重启持久化（替换 #6259）— 实现 V2 Daemon 会话制品元数据持久化，是多 Workspace 路线的重要前置依赖
- **[#6558](https://github.com/QwenLM/qwen-code/pull/6558)** `feat(cli)` 受信任 Workspace 列出持久化会话 — 与 #6378 RFC 配合，扩展多 Workspace 能力到 CLI 侧
- **[#6525](https://github.com/QwenLM/qwen-code/pull/6525)** `feat(serve)` 新增 cursor-paged transcript 回放端点 — 长会话调试/审查的关键基础设施

### ⚡ 性能与稳定性
- **[#6556](https://github.com/QwenLM/qwen-code/pull/6556)** `fix(core)` 限制 max_tokens 至上下文窗口，废弃输出预留 — 直接解决 #6384 的 hard limit=0 问题
- **[#6497](https://github.com/QwenLM/qwen-code/pull/6497)** `fix(memory)` `/remember` 后刷新指令 — 修复 managed memory 写入后上下文不刷新的 UX 缺陷
- **[#6555](https://github.com/QwenLM/qwen-code/pull/6555)** `fix` 应用 Prettier 格式化恢复 quality job — 修复 #6554 的 v0.19.8-nightly 发布失败

### 🌐 渠道与生态
- **[#6495](https://github.com/QwenLM/qwen-code/pull/6495)** `feat(channels)` 支持 Webhook 触发的渠道任务 — Daemon 管理渠道接收外部 Webhook 事件并主动推送响应
- **[#6457](https://github.com/QwenLM/qwen-code/pull/6457)** `feat(qqbot)` QQ 机器人群消息处理 + cron 实验性支持 — QQ Bot 适配器最终拼图（前序 PR 已合并）

### 💡 体验增强
- **[#6440](https://github.com/QwenLM/qwen-code/pull/6440)** `feat(cli)` 新增 `/learn` 命令 — 用户主动从本地目录/URL/对话历史/自由文本创建可复用 Skill，与 `/remember` 配套
- **[#6535](https://github.com/QwenLM/qwen-code/pull/6535)** `feat(scheduled-tasks)` 通过 `create_sub_session` 工具实现隔离运行模式 — 定时任务每次派发到全新子会话，避免上下文累积

---

## 5. 功能需求趋势

从今日 32 条活跃 Issue 与 50 条 PR 中可清晰识别以下五大方向：

### 🏗️ 1. Daemon 化与多租户架构
- **代表**: #6378（多 Workspace RFC）、#6557（制品持久化）、#6558（信任 Workspace 会话列表）
- **信号**: Daemon 模式正在从"单进程单工作区"向"服务化多租户"演进，是项目架构升级的核心方向

### 🤖 2. 多 Agent / Subagent 治理
- **代表**: #6505（Subagent 循环检测）、#6535（隔离运行模式）、#6542（Advisor 反馈环）
- **信号**: 从单 Agent 转向多 Agent 协同已成定局，循环检测、上下文隔离、第三方 Reviewer 等基础设施需求密集

### 🧠 3. 记忆系统精细化
- **代表**: #6449（worktree 记忆污染）、#6497（/remember 后刷新）、#6308（AutoMemory 超时可配）、#6434（managed memory UI 对齐）
- **信号**: 记忆系统从"全局 QWEN.md"向"分层 managed memory + worktree 隔离"演进，可配置性与隔离性并重

### 🔌 4. 渠道生态扩张
- **代表**: #6490（WeCom 文档）、#6495（Webhook 触发）、#6457（QQ Bot）、#6392（dmPolicy）、#6524（Vision Bridge 30s 超时）
- **信号**: WeCom/钉钉/飞书/QQ Bot 四大国内 IM 平台基本铺开，下一阶段是 Webhook、DM 策略、跨平台调试能力

### 🛠️ 5. IDE / 编辑器集成深化
- **代表**: #6507（IDE 延迟启动状态陈旧）、#2971（VS Code companion 触发位置）、#6536（WebShell @ 引用）
- **信号**: IDE 集成从"能联通"走向"状态一致、引用语义、触发精准"等深层体验问题

---

## 6. 开发者关注点

通过对 Issue 摘要与 PR 描述的归因分析，开发者社区当前最强烈的反馈集中在：

### 🔴 痛点
1. **会话可靠性** — 任务中断后不自动恢复（#4278）、状态栏显示错误模型（#6512）、长会话滚动卡顿（#6526）
2. **Windows 兼容性** — 扩展安装失败（#6334 → #6545 已修）、安装脚本证书吊销问题（#3039）
3. **代理与企业网络** — ProxyAgent 忽略 NO_PROXY（#6401 已修），企业部署强需求
4. **模型兼容性矩阵** — Claude 4.8+ 废弃 temperature（#6519 P1 已修）、env 配置模型上下文预留（#6384 待修）
5. **进程管理反噬** — qwen_code 误杀自己（#6246 已修），暴露了进程识别逻辑的脆弱性

### 🟢 高频需求
- **可观测性** — 渠道 payload 调试日志（#6538）、CI stderr 透出（#6553）、非 SSE 响应诊断（#6465）
- **可配置性** — AutoMemory 超时（#6308）、dmPolicy（#6392）、dm/vision 超时（#6524）
- **可恢复性** — Daemon 制品持久化（#6557）、会话 transcript 翻页（#6525）、IDE 延迟连接状态修正（#6507）
- **Skill 体系** — `/learn` 用户主动建 Skill（#6440），与 `/remember` 形成"输入/输出"双入口

### 💬 社区情绪
整体偏正向：P1/P2 高优问题响应迅速，CI/Autofix 流水线日趋完善（见 PR #6547 的 10 分钟单目标调度器）。多 Workspace 与多 Agent 两大方向已成为社区共识的"下一步"，预计将在 v0.20 系列集中落地。

---

*日报基于 GitHub Issues/PRs 公开数据自动整理生成，仅供参考。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-07-09**

> 注：仓库 `Hmbown/DeepSeek-TUI` 内部已迭代至 **CodeWhale（v0.8.68 里程碑）**，本期数据基于该仓库过去 24 小时动态整理。

---

## 📌 今日速览

v0.8.68 里程碑进入集中落地阶段，单日合并/关闭近 20 个 PR，主要围绕 **AgentProfile 规范化（Fleet 重构）、子代理工具沙箱、Models.dev 实时模型目录、性能快速优化** 四大方向。同时 **Android/Termux 支持**正式进入 QA 与文档完善期。

---

## 🚀 版本发布

过去 24 小时无新 Release。最新可关注版本仍为 **v0.8.68**（开发分支 `work/v0.9.0-cutover`），大量 issue 标签已带 `v0.8.68` 字样，预计近期切版。

---

## 🔥 社区热点 Issues

| # | Issue | 关键看点 |
|---|-------|---------|
| 1 | **#4092** [OPEN] v0.8.68 execution board（52 评论） | 作为整个 v0.8.68 里程碑的"唯一入口数据包"，定义 lane 顺序、依赖关系与代理协议，是当前社区协作的中枢文档。 |
| 2 | **#4042** [CLOSED] Environment-level tool sandboxing for sub-agents（12 评论） | 推动 `--disallowed-tools` 从 CLI 升级为可在 session / sub-agent / Fleet / MCP 全栈强制执行的统一沙箱，安全性里程碑。 |
| 3 | **#3965** [CLOSED] Per-sub-agent provider assignment（7 评论） | 回应 LM Studio 等本地 OpenAI-兼容用户诉求，将按子代理/角色的 provider 路由提升为一等公民能力。 |
| 4 | **#4109** [CLOSED] 模型目录整合与实时刷新（5 评论） | 把原本只在本地草稿维护的模型目录计划迁移到 GitHub，统一 OpenRouter 等 Provider 的 `/models` 来源。 |
| 5 | **#4113** [CLOSED] Rust/TUI 性能 quick wins（4 评论） | 把 0.8.68 切版清单的"性能小赢"系列落地，是 #4014 的微优化配套清单。 |
| 6 | **#4111** [CLOSED] AgentProfile 作为 Fleet 规约（4 评论） | 关键架构决定：Fleet 不再维护独立的 loadout/profile/model 体系，而是基于统一 `AgentProfile`，影响所有 Fleet 工作流。 |
| 7 | **#4112** [OPEN] 默认 transcript copy & 活动文案润色（3 评论） | 典型的"copy-slop"清理，专门整治误导或不一致的 TUI 文案。 |
| 8 | **#3488** [OPEN] Unicode / CJK / 终端宽度渲染 QA（3 评论） | 长期挂账 issue，聚焦中日韩文本、混合宽度 Unicode 在选择器与换行场景下的可读性。 |
| 9 | **#4137** [CLOSED] Fleet profile 持久化 provider/model/thinking（3 评论） | 让用户能把"具体哪个模型 + 思考档"随 profile 一起保存，避免每次都重新选。 |
| 10 | **#4184** [CLOSED] 用 Models.dev 作为单一真实源（3 评论） | 跟随 OpenCode 思路，把手工维护的模型元数据切换到社区标准的 Models.dev 实时目录（离线仍走 bundled snapshot）。 |

---

## 🛠️ 重要 PR 进展

| PR | 内容 |
|----|------|
| **#4265** `fix(tui): polish setup and activity copy` | 把 setup review hints 收敛到统一的 "setup snapshot" 措辞，完成 `Tasks → Activity` 文案扫地。 |
| **#4264** `v0.8.68: cache command and regex hot paths` | 命令注册表改为进程级静态缓存（#4155）；为用户正则引入有界 LRU（#4154）；引入 `FastHashMap`/`FastHashSet`。 |
| **#4096** `docs + feat: sub-agent tool scoping plan and Phase 1` | @JayBeest 提交：含计划文档、开发者上手指南 + Phase 1 落地，对应 #4042 子代理工具作用域。 |
| **#4263** `v0.8.68 batch: Android updater, Termux docs, perf consts, sub-agent tool sandbox` | 一次性合并四 lane：#4241 Android 资源识别、#4237 Termux 文档、#4158 字符串常量提取、#4042 沙箱。 |
| **#4225** `refactor(localization): extract hardcoded localization texts into locales files` | @hongqitai：把硬编码抽到 `crates/tui/locales`，并补多种语言翻译。 |
| **#4262** `fix(fleet): route AgentProfile pins through custom providers` | 修复 #3965，让 `lm-studio` 这类用户自命名 provider 也能被 AgentProfile/Fleet 正常路由。 |
| **#4260** `fix(fleet): persist AgentProfile thinking tier` | 新增 `reasoning_effort` 字段 + 思考档别名，`/fleet setup` 新增 Thinking 步骤并贯通到运行期。 |
| **#4259** `fix(fleet): honor AgentProfile route contract` | 把显式 `AgentProfile.provider` 带入 Fleet worker 运行时，区分显式 pin 与 fallback。 |
| **#4258** `docs(termux): add Android arm64 install checklist` | 正式把 Android/Termux 列为独立 arm64 目标，含 `PREFIX="$PREFIX" ./install.sh` 等步骤。 |
| **#3902** `perf(tui): fix the five render/input hot paths` | 一次性关闭 #3896–#3900 五条性能 issue 外加 4 条对抗复审回归，是性能 lane 的"收口 PR"。 |

---

## 📈 功能需求趋势

从近 24h 更新 + 高互动 issue 提炼，社区最高频诉求集中在以下方向：

1. **多 Provider 路由 & 自定义兼容端点**  
   子代理/Fleet 级别的 provider 路由 + LM Studio 等本地 OpenAI-兼容服务（#3965 / #4262 / #4259 / #4260）。

2. **统一 AgentProfile 契约**  
   Fleet、sub-agent、session 三层共用 `AgentProfile`，去掉并行概念（#4111 / #4117 / #4136 / #4137 / #4138 / #4261）。

3. **实时模型目录（Models.dev 集成）**  
   远程拉取 + 本地缓存 + Provider ID 归一化 + 旧手工数据降级（#4184 / #4186 / #4187 / #4188 / #4255 / #4252）。

4. **性能快速优化（Rust/TUI 热路径）**  
   `parking_lot` 替换、正则/命令注册表缓存、Render 热点（#4149 / #4154 / #4155 / #4158 / #4243 / #3902 / #3761）。

5. **Android/Termux 官方支持**  
   资源识别、安装文档、运行时 QA 矩阵、密钥与沙箱平台限制显式化（#4236 / #4237 / #4238 / #4241 / #4242 / #4258）。

6. **TUI 可观测性 / Inspector 升级**  
   Turn Inspector evidence cockpit + LSP 修复回路可视化（#4102 / #4107）。

7. **安全 / 工具沙箱**  
   把 `--disallowed-tools` 升级为跨 session / sub-agent / Fleet / MCP 的统一约束（#4042 / #4096）。

---

## 💬 开发者关注点

整理原 issue/PR 摘要中的高频痛点：

- **"config 路径声明不一致"**：API-key 入站引导一直写 `~/.codewhale/config.toml`，但 `CODEWHALE_HOME` / `CODEWHALE_CONFIG_PATH` 指向别处时误导用户 → 已在 #3986 / PR #4254 修复。  
- **"slash 自动补全重复别名"**：`/clear or /qingping` 后又追加 `(aliases: /qingping)` → #3990 / #4254 修复。  
- **"启动/对话慢"**：v0.8.67 起持续反馈 TUI 启动与转场延迟 → #3757（#3761 修复）+ #4113 系列微优化。  
- **"Fleet setup 角色步 80 列下重叠"**：列表行与详细文案互相覆盖 → #3993。  
- **"cute 文案/占位符污染真实状态"**：例如未鉴权时仍说 "Your setup is ready" → #3985 / PR #4256。  
- **"CJK / Unicode 渲染"**：选择器、wrap、终端宽度切换下破碎 → #3488 仍在追踪。  
- **"贡献者 onboarding 跟不上节奏（10+ PR/day）"**：@JayBeest 提议加 Skill/workflow 兜底 → #4227 等待拍板。  
- **"模块守卫缺失"**：审计脚本误判 `tui/src/memory/*`、`mcp-*` 等模块为 dead code，曾引发构建破坏 → #4172 将守卫正式入库。  
- **"AgentReady 标签滥用风险"**：已成为 `lane-*` 之后的元标签层，社区需要明确它的定义与判据。  
- **"Fleet 不应再是 loadout 选择器"**：多处 issue/PR 反复推动转向"agent profile 名册"的语义，#4136 / #4138 / #4261 一致推进。

---

> 📎 数据口径：以上统计基于过去 24h 有更新的 50 条 issue + 50 条 PR；评论数与 👍 均按该窗口内字段取值。仓库当前没有可对照的 release diff，版本号变更预计随 `v0.8.68` 切版统一发布。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*