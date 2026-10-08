# AI CLI 工具社区动态日报 2026-10-08

> 生成时间: 2026-10-08 03:59 UTC | 覆盖工具: 9 个

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



---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-10-08 | 数据源：github.com/anthropics/skills

---

## 1. 热门 Skills 排行

> 由于 PR 评论数在快照里均为 "undefined"，排行综合了**底层 Skill 的重要性、Issue 讨论热度、修复影响面**三个维度。

| 排名 | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|---|---|---|---|---|
| 🥇 | **skill-creator** 系列修复<br>`#1298` `#1681` `#1961` `#1394` `#1383` | 创建/打包 Skills 的元工具，配套 eval 评估与可视化 | **最核心痛点**。Windows 兼容性、trigger eval 误报、eval viewer 的 XSS/DNS rebinding/script breakout 安全隐患（[#1394](https://github.com/anthropics/skills/issues/1394)、[#1961](https://github.com/anthropics/skills/pull/1961)）、benchmark 静默失败 | 多个 PR Open |
| 🥈 | **mcp-builder**<br>`#1742` [#1390](https://github.com/anthropics/skills/issues/1390) | 引导 Claude 构建 MCP 服务器 | `mcp>=2.0` 的 `streamable_http_client` API 变更、`evaluation.py` 对真实 MCP server 评分 0/N 的 bug | Open |
| 🥉 | **docx** 处理<br>`#1734` `#1792` | Word 文档读写与修订管理 | 孤立 comment 检测、LibreOffice 超时未报错、修订标记 (`w:ins/w:del`) 验证 | Open |
| 4 | **frontend-design** 改进<br>[#210](https://github.com/anthropics/skills/pull/210) | 前端设计规范与可执行指引 | 表述过于抽象、希望"每条指令都可在单次会话内执行" | Open（长期） |
| 5 | **pdf** 修复<br>[#538](https://github.com/anthropics/skills/pull/538) | PDF 文档处理 | `SKILL.md` 大小写引用错位，导致大小写敏感环境（Linux）下文档链接断裂 | Open |
| 6 | **claude-api**<br>[#1730](https://github.com/anthropics/skills/pull/1730) · [#1487](https://github.com/anthropics/skills/issues/1487) | 调用 Claude API 的模式与示例 | **单次工具调用即注入 ~156k tokens**，把上下文打爆；同时存在失效文档链接 | Open |
| 7 | **document-typography**<br>[#514](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质量控制（孤行/寡行/编号错位） | "影响每一个 Claude 生成的文档"，定位为通用基线 | Open |
| 8 | **webapp-testing** 安全修复<br>[#1980](https://github.com/anthropics/skills/pull/1980) | Web 应用端到端测试 | `subprocess.Popen(shell=True)` 导致 CWE-78 命令注入 | Open

---

## 2. 社区需求趋势

从高评论 Issues 看，社区诉求高度集中在 **"让 Skills 更像工程化产品"**：

### 🔐 安全与信任（最高频）
- **#492（43 评论）**：第三方 skill 借 `anthropic/` 命名空间分发，造成**信任边界冒充**——这是当前讨论最热的议题。
- **#1394 / #1961 / #1980 / #29**：eval viewer XSS、shell=True 命令注入、模型写入内容的转义、Skill 在 AWS Bedrock 上的隔离。
- **#1175**：SharePoint Online 场景下，在 `SKILL.md` 内嵌权限逻辑的安全顾虑。

> **结论**：社区普遍呼吁建立 Skill 的**安全审计与命名空间隔离机制**。

### 🏢 组织级协作与分发
- **#228（16 评论 👍 8）**：Claude.ai 内**组织级 Skill 共享**——目前仍要手动下载 .skill 文件、跨 IM 传、Settings 上传。
- **#189（6 评论 👍 9）**：`document-skills` 与 `example-skills` 插件内容重复，**插件/包管理机制不健全**。

### 🧪 评估与质量保障
- **#556（12 评论）**：`run_eval.py` 对 `claude -p` 的 trigger 命中率为 **0%**，评估工具基本失效。
- **#83**：提议 `skill-quality-analyzer` + `skill-security-analyzer` 两类**元 Skill** 进入市场。
- **#1383**：skill-creator 的 benchmark 存在布局不匹配、delta 反向、Windows 失效等 6 个问题。

### 🧠 新能力方向（被提议但尚未落地）
| 方向 | 代表 Issue | 备注 |
|---|---|---|
| 智能体记忆压缩 | compact-memory（[#1329](https://github.com/anthropics/skills/issues/1329)） | 长任务上下文管理 |
| 推理质量门控 | Reasoning Quality Gate Pipeline（[#1385](https://github.com/anthropics/skills/issues/1385)） | 任务前校准 + 对抗评审 + 交付校验 |
| 智能体治理 | agent-governance（[#412](https://github.com/anthropics/skills/issues/412)，未合并） | 策略/审计/威胁检测 |

### 🧩 工具与生态
- **#1487**：`claude-api` skill 单次注入 ~156k tokens，**token 预算失控**——提示官方应做按需加载。
- **#29**：Skill 与 AWS Bedrock 等**多平台部署**的兼容性仍是入门级痛点。
- **#62**：用户上传的 Skills 神秘丢失，提示**本地 Skill 持久化/恢复机制**需要文档化。

---

## 3. 高潜力待合并 Skills（近期可能落地）

> 选择近 1 个月内、提交频繁、与现有 Skill 修复强相关的 PR。

| PR | Skill | 价值 | 最后更新 |
|---|---|---|---|
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing | 修复 CWE-78 命令注入，**安全必修** | 2026-10-06 |
| [#1977](https://github.com/anthropics/skills/pull/1977) | algorithmic-art | `wrapAround()` 取模修正，影响所有负数场景 | 2026-10-06 |
| [#1961](https://github.com/anthropics/skills/pull/1961) | skill-creator eval viewer | 硬化 3 类 XSS/逃逸/DNS rebinding 漏洞 | 2026-10-07 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx | 超时正确报为 Error，输出再做修订标记校验 | 2026-09-25 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder | 支持 `mcp>=2.0` 的 streamable_http_client | 2026-09-29 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | claude-api | 替换 academy-guide 3 个失效文档链接 | 2026-10-04 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 零成本 Markdown→MP4，配真人语音 | 2026-09-15 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator | 修复 `package_skill.py` 独立执行路径 | 2026-09-27 |

另外两个新场景型 PR 评估落地概率较高，但需要分类讨论：
- **[#1771](https://github.com/anthropics/skills/pull/1771)** proofcore-contract-auditor（Web3 智能合约审计，锚定 TON 链）——社区对"垂直行业 Skill"有需求，但偏 Web3 偏窄。
- **[#525](https://github.com/anthropics/skills/pull/525)** pyxel 复古游戏开发 ——社区面较小但作者持续维护（最近更新 2026-09-22）。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：把 Skills 从"一组可执行提示词"升级为"具备安全边界、可评估、可分发的工程化资产"——尤其是命名空间信任（#492）、eval viewer 安全（#1961/#1394）、trigger 评估可信度（#556/#1383）三条线，已构成生态能否走向企业级部署的瓶颈。**

---

# Claude Code 社区动态日报 · 2026-10-08

---

## 📌 今日速览

今日 v2.1.293 正式上线 **Claude Haiku 5.5**（1M 上下文），社区讨论焦点集中在 **Desktop 客户端稳定性** 与 **Remote Control 功能缺陷**：Windows 上存在持续高频率 git 进程生成的严重资源杀症、Desktop 静默自动更新中断 Remote Control 会话、Auto-mode 权限分类器在远程会话中无法正常放行用户已批准的动作。安全相关 issue（密钥注入通道、MCP 内容丢失、Hookify 异常未 fail-closed）也获得较高关注度。

---

## 🚀 版本发布

### [v2.1.293](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)

- **新增 Claude Haiku 5.5**（`claude-haiku-5-5`），正式成为 Anthropic API 默认 Haiku 模型
  - 1M 上下文窗口
  - 价格：$0.10 / $0.50 per Mtok（>100K prompt 时为 $0.50 / $2.50）
- `subagentStatusLine` payload 增加 `agentType` 字段，便于脚本区分自定义 subagent 类型
- 其他变更略

---

## 🔥 社区热点 Issues

> 依据评论数、点赞数与影响面筛选

**1. [#94478 — Desktop 在 Windows 上每秒生成 ~17 个 git 进程](https://github.com/anthropics/claude-code/issues/94478)** `platform:windows · performance`
Desktop 应用持续以每秒 15–20 次的频率启动 `git.exe`，每天约 200 万个短生命周期进程。在 macOS 上更引发内核 pool 泄漏，每天 ~6 GB。**评论 10**，问题严重但尚无 👍。

**3. [#92276 — Desktop 1.44121.4+ Remote Control 不会为计划任务自动启用](https://github.com/anthropics/claude-code/issues/92276)** `regression · platform:windows`
1.40609 → 1.44121.4 之间引入的回归，影响 Windows Max 用户调度场景。**评论 10，👍 6**，是今日点赞最高的 issue。

**4. [#97074 — Headless `claude -p` 比交互式 CLI 多消耗 1.8× 配额](https://github.com/anthropics/claude-code/issues/97074)** `platform:linux · area:cost · api:anthropic`
相同任务的 5 小时窗口配额消耗差异显著，影响 CI/自动化场景成本。**评论 8，👍 2**。

**5. [#99192 — Windows MSIX 安装中 Code 标签页终端集成失败](https://github.com/anthropics/claude-code/issues/99192)** `platform:windows · area:desktop`
MSIX 虚拟化导致 `AppData` 路径不一致，PowerShell 终端 shell 无法加载 Claude 写入的集成文件。**评论 7，👍 1**。

**6. [#79944 — MCP 工具响应中文本块被丢弃](https://github.com/anthropics/claude-code/issues/79944)** `area:mcp`
当响应包含 `structuredContent` 与 `content` 文本块时，文本块被静默丢弃，仅返回结构化部分。**评论 6，👍 5**，影响所有自托管 MCP server 的开发者。

**7. [#95364 — Desktop 静默更新在 Remote Control 会话期间重启](https://github.com/anthropics/claude-code/issues/95364)** `platform:macos · area:desktop`
用户离开时应用检测空闲后强制退出并重启，导致所有远程会话断开。**评论 6，👍 4**。

**8. [#97727 — Max 订阅者登录被重定向至 onboarding](https://github.com/anthropics/claude-code/issues/97727)** `[invalid]`
Windows 端登录验证邮箱后跳转 `claude.ai/onboarding` 创建新账户，移动端正常。**评论 6，无 👍** 且标记 invalid，**7 天未获官方处理**。

**10. [#99211 — Desktop 任意状态变化触发全站重绘](https://github.com/anthropics/claude-code/issues/99211)** `platform:windows · area:plugins`
mod 写入仅一处读取的 `$.state` 即触发所有渲染位点重绘，按钮失效、SVG 动画重启。**评论 5，👍 2**。

**12. [#90301 — 缺少向 Claude 注入密钥的官方通道](https://github.com/anthropics/claude-code/issues/90301)** `enhancement · area:security`
汇总 18 个相关需求，提出最小原语（primitive）方案。**评论 5，👍 1**。

**14. [#99403 — MEMORY.md 超限时静默截断](https://github.com/anthropics/claude-code/issues/99403)** `enhancement · platform:linux · memory`
会话启动时仅一行提示，不告知哪条 entry 被丢弃。**评论 5**，对长期记忆用户影响显著。

> 另值得关注——[#97074](https://github.com/anthropics/claude-code/issues/97074)（配额成本）、[#98169](https://github.com/anthropics/claude-code/issues/98169)（Auto-mode 拒绝已批准动作）、[#95276](https://github.com/anthropics/claude-code/issues/95276)（同类 Remote Control 掉线）。

---

## 🌳 重要 PR 进展

> 7 条过去 24 小时活跃的 PR

**1. [#100293 — 新增 HIPAA managed-settings 示例](https://github.com/anthropics/claude-code/pull/100293)** *(新)*
新增 `hipaa-baseline.json` 与 `managed-mcp.lockdown.json` 示例及 README，方便受 HIPAA 约束的组织落地部署。合规方向样板。

**2. [#82320 — 修复 macOS bash 3.2 下 setup.sh 终止](https://github.com/anthropics/claude-code/pull/82320)**
`setup.sh` 第 66 行 `${DIST_SHA256,,}` 依赖 bash 4 case-modification，而 `/bin/bash` 在 macOS 默认是 3.2，会在自身错误检查前崩溃。修复后兼容老 bash。

**3. [#86746 — 保留 Python 探测错误的 stderr](https://github.com/anthropics/claude-code/pull/86746)**
`sg-python.sh` 原先把探测 stderr 重定向到 `/dev/null`，现在保留诊断输出，三个解释器全失败时给出具体错误（修复 #86709）。

**4. [#85323 — 解析 YAML block scalar 代理描述](https://github.com/anthropics/claude-code/pull/85323)**
修复 `description: |` / `description: >` 多行值的解析缺陷，闭合 #83803 遗留问题。`validate-agent.sh` 改为从缩进内容度量。

**5. [#84364 — hookify preTooluse 失败时改为 fail-closed](https://github.com/anthropics/claude-code/pull/84364)**
原行为：ImportError 或通用异常导致 hook 退出码为 0，相当于放行。现改为 `permissionDecision: 'deny'`，修复静默越权漏洞。

**6. [#85716 — hookify 从祖先 `.claude` 目录加载规则](https://github.com/anthropics/claude-code/pull/85716)**
修复 `hookify` 插件在子目录中漏加载父级规则的静默绕过（修复 #85613）。

**7. [#41447 — 开源 Claude Code](https://github.com/anthropics/claude-code/pull/41447)** *(rejected)*
社区长期呼声，未被合并。列入供参考。

---

## 增增  功能需求趋势

提炼自过去 24h 社区 Issue：

1. **Desktop 应用质量（最高优先级）**:
   - 静默自动更新中断会话（#95364、#95276）
   - Windows 资源泄漏（#94478）
   - 插件系统重绘 / UI 状态同步（#99211、#100375）
2. **Remote Control 与远程会话**: 多设备同步、远程会话下权限审批路径缺失（#100377、#100375、#100374、#98169、#92276）
3. **Auto-mode 权限分类器**: 拒绝已批准动作、远程用户无审批入口（#100374、#98169、#100370）
4. **沙箱与安全原语**: Read/Write/Edit 目录 allowlist、密钥注入官方通道（#92643、#90301）
6. **移动端 Remote Control**：feature prompts 未渲染（#97410）
7. **内存/记忆可靠性**：MEMORY.md 截断提示、技能列表丢失（#99403、#83367）

---

## ⚠️ 开发者关注点

- **CI/自动化成本可预测性**: Headless `claude -p` 与交互式 CLI 配额消耗差异（1.8×）让 CI 预算难以预测（#97074）
- **Windows 桌面资源开支**: git 进程生成 + MSIX 虚拟化路径不一致为两类高频反馈
- **远程会话审批闭环缺失**: Auto-mode 分类器在 Remote Control 场景下拿不到人工确认，反复阻断合法动作（#100374、#98169）
- **静默数据丢失**: 内存索引截断、MCP 文本块丢弃、技能列表伴随首轮重提交丢失——都需要明确的告警与可观测性
- **认证与登录**：已购订阅重定向至 onboarding 的问题状态对在线客户不太友好，Windows 表现明显劣于 macOS/mobile

---

*日报基于 github.com/anthropics/claude-code 在 2026-10-08 的动态生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**📅 2026-10-08**

---

## 📌 今日速览

今天 Windows 沙箱问题依然是社区焦点，多个相关 Issue 集中爆发，主要表现为沙箱初始化时遭遇 `os error 32`（共享冲突）和 ACL 刷新失败，影响 Computer Use、Node REPL 与普通 shell 命令执行。同时 0.161.0 正式版发布，**GPT-6.1 Sol 已成为默认模型**，Bedrock 通道新增多智能体 V2 与 Ultra 推理支持。开发者侧，团队正密集推进 Bazel 构建体系的接入（多项 PR 串联合并），并补齐了一组 Windows 沙箱、工具注册、WebSocket 续连的诊断与可观测性能力。

---

## 🚀 版本发布

### rust-v0.161.0（正式版）
- **GPT-6.1 Sol** 成为捆绑版与 Amazon Bedrock 模型目录的默认模型（[#49318](https://github.com/openai/codex/pull/49318)、[#49339](https://github.com/openai/codex/pull/49339)）
- Amazon Bedrock 支持多智能体 **V2** 与 **Ultra 推理**；Bedrock Mantle 新增 AWS GovCloud 区域支持（[#49345](https://github.com/openai/codex/pull/49345)、[#49813](https://github.com/openai/codex/pull/49813)）
- MCP 服务器新增登录能力（描述被截断，社区等待完整说明）

### rust-v0.162.0-alpha.20 / 0.162.0-alpha.18.1 / 0.162.0-alpha.17.1
均为 alpha 预发版本，主要面向下一阶段功能验证。

---

## 🔥 社区热点 Issues（按讨论热度）

1. **[#51601](https://github.com/openai/codex/issues/51601)** — Windows App 26.1002.51308 沙箱启动时自我运行时校验失败（sharing violation），所有命令无法执行。💬 62 评论 👍 21
2. **[#48774](https://github.com/openai/codex/issues/48774)** — Codex Remote 在 Android 端配对失败，即使 ChatGPT 移动端与 Windows 桌面端使用同一已验证账号，扫码后停留在 `Authorize this phone`。💬 55 评论 👍 26
3. **[#51590](https://github.com/openai/codex/issues/51590)** — Windows 11 沙箱在打开 `node_repl.exe` 进行 ACL 更新时报 error 32，导致 Computer Use 与 shell 都被阻断。💬 24 评论
4. **[#47429](https://github.com/openai/codex/issues/47429)** — WSL2 下 `codex sandbox` 因 `/mnt/wslg/distro` 被判定为不受支持的主机挂载而失败（已 CLOSED）。💬 12 评论 👍 22
5. **[#42937](https://github.com/openai/codex/issues/42937)** — 用户反馈 GPT-5.6 Sol 与 GPT-6 Astra 虽"更聪明"但自主完成率与运行可靠性下降，并附有深度关联分析。💬 11 评论
6. **[#50870](https://github.com/openai/codex/issues/50870)** — Dots 语音通话跨 iPhone/Mac/Windows Web 一直振铃却无法建立可用的语音会话。💬 10 评论
7. **[#51778](https://github.com/openai/codex/issues/51778)** — Windows 沙箱在 Codex & OWL 26.1002.52244 上完全无法访问本地文件或执行命令。💬 9 评论
8. **[#51340](https://github.com/openai/codex/issues/51340)** — Windows 桌面端在 `windows-updater.node` 中以 0xC0000005 崩溃，重装/修复/重登均无效。💬 8 评论
9. **[#50015](https://github.com/openai/codex/issues/50015)** — Dot 无法恢复或创建云端任务，提示 `AppServerBackendRequestError: UNKNOWN`，但同账号手动创建云任务正常。💬 7 评论
10. **[#50182](https://github.com/openai/codex/issues/50182)** — `codex cloud` 命令无法发现当前 Cloud environments（CLI 0.160.0），影响开发者使用现有云环境。

> 整体观察：**Windows 沙箱与 ACL 是当前最大痛点**（多个高评论 Issue 根因相同）；**Dots → 云端任务链路**次之；**模型可靠性议题**（#42937）仍是产品体验的核心争议。

---

## 🛠️ 重要 PR 进展

1. **[#51930](https://github.com/openai/codex/pull/51930)** — 新增按模型定制的工具描述前缀（`functions_namespace_functions_description_prefixes`），允许不同模型接收专属指令前缀以优化调用。✅ CLOSED
2. **[#51896](https://github.com/openai/codex/pull/51896)** — Windows 沙箱 ACL 诊断中保留原生错误链路，便于排查 sharing violation 类问题（直接响应 #51590 / #51601）。✅ CLOSED
3. **[#51895](https://github.com/openai/codex/pull/51895)** — WebSocket 续连失败时给出具体原因（不再统一为 `other`），提升增量重用的可观测性。✅ CLOSED
4. **[#51893](https://github.com/openai/codex/pull/51893)** — 为增量工具更新（`added/removed/schema_changed`）新增遥测指标 `codex.tools.incremental_updates`。✅ CLOSED
5. **[#51892](https://github.com/openai/codex/pull/51892)** — 修正"记录参数被截断时工具调用完整性丢失"的语义问题。✅ CLOSED
6. **[#51897](https://github.com/openai/codex/pull/51897)** — 网络域策略改用专用匹配器，修复 glob 与 Unicode 主机 `?` 通配的语义不一致。✅ CLOSED
7. **[#51884](https://github.com/openai/codex/pull/51884)** — 新增 `experimentalPredictionMode` 实验性"预测分叉"，继承父级上下文以最大化 prompt-cache 命中。✅ CLOSED
8. **[#31657](https://github.com/openai/codex/pull/31657)** — Codex Apps 文件上传增加瞬态失败重试，避免一次性消耗短期 presigned URL。🟢 OPEN（长期未合并）
9. **[#51857](https://github.com/openai/codex/pull/51857)** — 新增 `prompt_prefix_matches_release` 兼容性测试，防止默认 prompt 前缀回归。✅ CLOSED
10. **[#51856](https://github.com/openai/codex/pull/51856)** — 在 Cargo 产物之外并行构建 Bazel 发布制品（Linux/macOS/Windows 全矩阵），并以 `-bazel` 后缀发布。

> 趋势：今日合入的 PR 多围绕 **Windows 沙箱可观测性**、**工具/遥测指标**、**Bazel 构建体系落地** 三个方向；`copyberry[bot]` 提交的合并高度密集，疑似自动化整理。

---

## 📈 功能需求趋势

通过归类 30 条高评论 Issue 可见社区最关心的方向：

| 方向 | 占比 | 代表性 Issue |
|------|------|-------------|
| **Windows 沙箱 / ACL / Computer Use 稳定性** | ≈ 45% | #51601、#51590、#51719、#51778、#51932、#50768 |
| **Dots / 云端任务链路** | ≈ 20% | #50015、#51372、#51735、#50870、#49824 |
| **Codex Cloud 与 Web 体验** | ≈ 15% | #50182、#50251、#50844 |
| **跨平台 Remote 配对 / 移动端** | ≈ 10% | #48774、#29201 |
| **模型行为与可靠性** | ≈ 10% | #42937 |

**关注度上升的功能方向**：
- **多设备 Dot 编排**：#49824 明确希望一个 Dot 能同时授权多台 PC 并按任务选择执行设备。
- **Prompt Cache 友好性**：#51884 实验性"预测分叉"已为该方向铺垫。
- **Bazel 替代 Cargo 作为可选构建系统**：多个 PR 协同推进，社区可能用于更大规模/分布式构建场景。

---

## 💬 开发者关注点（高频痛点）

1. **Windows 沙箱"启动即崩"现象**：更新到 26.1002.* 后，多个用户在沙箱校验自身运行时即失败，Computer Use 与常规 shell 同时失效。开发者被迫回退版本或停用沙箱。
2. **CLI 启动崩溃**：[#51929](https://github.com/openai/codex/issues/51929) 报告 Codex CLI 0.161.0 在 Ryzen 5 8400F 上执行 `--version` 即触发硬件能力错误，回归风险被开发者强烈关注。
3. **Dot ↔ 云端任务断链**：`AppServerBackendRequestError / UNKNOWN` 在 dot 触发的场景下出现，而手动流程不受影响，说明服务端在 dot 路径上仍存在未对齐的状态机或权限分支。
4. **Codex Cloud UI 退化**：[#50844](https://github.com/openai/codex/issues/50844) 指出新版 Web 缺少"Create PR"、任务列表不再显示已合并状态，影响开发者闭环工作流。
5. **VS Code 扩展审批 UI 不一致**：[#51278](https://github.com/openai/codex/issues/51278) 在 WSL 下缺少"Approve for me"选项，导致本地无法自助审批。
6. **模型"更聪明但更不可靠"**：[#42937](https://github.com/openai/codex/issues/42937) 的长期讨论显示 GPT-5.6 Sol / GPT-6 Astra 在长链路任务中需要更多监督，与"提升自主性"的产品叙事存在张力。
7. **沙箱与 Python 测试栈冲突**：[#19791](https://github.com/openai/codex/issues/19791) 沙箱拦截 pytest-xdist 用 0o700 创建的临时目录，开发者希望更细粒度的权限配置。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex) · 统计窗口：2026-10-07 ~ 2026-10-08*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-08** | **数据来源：google-gemini/gemini-cli**

---

## 一、今日速览

今日发布了 `v0.65.0-nightly.20261008.g44d764ee5` nightly 版本，主要修复了 CI 流程中的循环缺陷以及 core 包中终端用户回合不变量的强制约束与请求内容规范化。社区层面，**Agent 子代理的鲁棒性**（恢复机制、卡死、误判成功状态）成为 P1 焦点，**Browser Agent 的 settings.json 覆盖与 Wayland 兼容性**、**Generalist agent 频繁挂起**（8 个 👍）是开发者反馈最集中的痛点。同时，过去 24 小时内有 9 条 P1 安全/核心修复 PR 集中关闭（含 OAuth 终端无限循环、`@path` 注入、settings.json 被破坏、认证 URL 截断等），显示团队在安全与稳定性方向有明确加速。

---

## 三、版本发布

**v0.65.0-nightly.20261008.g44d764ee5**

- `fix(ci)` (#29609)：为 unassign-inactive-assignees 工作流补齐缺失的循环逻辑
- `fix(core)` (#29609 by @luisfelipe-alt)：强制终端用户回合不变量并规范化请求内容，提升多轮对话一致性

> 对应自动版本号 bump：[PR #29675](https://github.com/google-gemini/gemini-cli/pull/29675)

---

## 三、社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) ⭐ P1 · 13 评论
**Subagent 触发 MAX_TURNS 后被误报为 GOAL 成功**
`codebase_investigator` 子代理达到最大回合限制后仍上报 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了中断事实。涉及错误状态机与结果可信度，是 Agent 评测基线被污染的潜在根源。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) ⭐ P1 · 8 评论 · 8 👍
**Generalist agent 频繁挂死**
当 Gemini CLI 把任务委派给 generalist agent 时会永久 hang（曾等待 1 小时仍未响应）。简单建目录都受影响，社区点赞数最高，反映面广泛。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) ⭐ P2 · 9 评论
**Zero-Dependency OS 沙箱与执行后意图路由**
提议充分利用 Gemini 3 模型对原生 bash 工具链（grep/cat/sed/awk）的亲和力，通过 OS 级沙箱保证安全并对执行后意图进行路由，是「模型原生能力 × 安全边界」的核心架构级讨论。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) ⭐ P2 · 7 评论
**评估 AST 感知读取、搜索与映射工具的影响**
跟踪 AST 感知工具链是否能更精确读取代码、降低 token 噪声。后续看包机制潜在能改变代码探索范式。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) ⭐ P2 · 7 评论
**Gemini 不主动使用自定义 skills 与 sub-agents**
开发者反馈模型即便场景高度相关，也不会主动调用自定义能力。这是「模型自我调度」层面的体验缺陷，影响 skills 生态的落地效果。

### 6. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) ⭐ P1 · 4 评论
**Browser subagent 在 Wayland 下失败**
Linux Wayland 环境下 browser 子代理直接失败 GOAL，Wayland 用户主流场景下无法使用浏览器代理能力。

### 7. [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) ⭐ P2 · 4 评论
**Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**
`AgentRegistry` 初始化时读取合并了配置，但 BrowserAgent 实际运行时却完全忽略，配置链路断裂。

### 8. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) ⭐ P2 · 4 评论
**~/.gemini/agents/ 下的 symlink 不被识别为 agent**
对使用 dotfiles 仓库管理 agent 配置的开发者是阻断式问题。

### 9. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) ⭐ P2 · 3 评论
**工具数量 >128 时触发 400 错误**
当启用工具过多时 Gemini 接口返回 400，需要 Agent 在启用范围上做更智能的裁剪。

### 10. [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) ⭐ P2 · 3 评论
**Agent 应避免/劝阻破坏性行为**
在复杂 git 分支管理、数据库维护等场景，模型会偶发使用 `git reset --force` 等命令，需要在系统提示中强化风险意识。

---

## 四、重要 PR 进展（Top 10）

### 1. [#29674](https://github.com/google-gemini/gemini-cli/pull/29674) OPEN · area/core · size/L
**修复 VS Code IDE Companion `IdeServer.stop()` 在 MCP 会话打开时永不 resolve**
`stop()` 等待 `http.Server.close()`，但 CLI 的 `StreamableHTTPClientTransport` 持有独立 HTTP 连接，导致无法干净关闭。影响 IDE 集成生命周期。

### 3. [#29582](https://github.com/google-gemini/gemini-cli/pull/29582) OPEN · area/core · size/L
**优化 ignore 过滤并启用子树剪枝（perf）**
通过分层目录级状态记忆、通配符目录展开与符号链接缓存，将仓库文件发现从「多秒阻塞」降到亚毫秒级。

### 4. [#29578](https://github.com/google-gemini/gemini-cli/pull/29578) OPEN · area/mcp · size/M
**修复 MCP OAuth 离线访问与 clientSecret 刷新丢失**
针对 Google Workspace 等 OAuth 提供方刷新令牌丢失导致后台 token 刷新失败的问题。

### 5. [#29670](https://github.com/google-gemini/gemini-cli/pull/29670) OPEN · area/core · size/M
**流式重试退避改为可中止感知**
按 ESC 取消请求时，`GeminiChat` 仍会触发 retry 循环并发出 `RETRY` 事件；该 PR 让 backoff 监听 abort signal，避免取消请求仍产生重试遥测。

### 6. [#29672](https://github.com/google-gemini/gemini-cli/pull/29672) OPEN · area/security · size/L
**消除 untrusted 标志误报**
修复 shell 变量展开 + 过于宽泛的 token 索引导致的误报，以及 `ls -ld`/`grep -rn`/`git diff` 等无害 POSIX 导航与检查指令的误中断。

### 7. [#29673](https://github.com/google-gemini/gemini-cli/pull/29673) OPEN · area/core · size/S
**保留 truncateString 的换行符与 Unicode grapheme cluster**
修复 `truncateString` 在截断时丢失 `\n`/`\r`/复杂字形簇的缺陷，避免上下文丢失与显示错乱。

### 8. [#29643](https://github.com/google-gemini/gemini-cli/pull/29643) OPEN · area/cli · size/S-M
**重新选择 Google 登录时清空缓存凭据**
修复 `AuthDialog` 切换账号时被旧 token 锁死的问题。

### 9. [#29658](https://github.com/google-gemini/gemini-cli/pull/29658) OPEN · area/extensions · size/M-L
**fetchJson 处理 JSON 解析与响应流错误**
为 GitHub 扩展元数据请求增加 JSON parse 与响应流失败的兜底，避免扩展加载中断。

> 同步提示：以下 P1 安全/核心 PR 已在过去 24 小时内合并关闭：
> - [#29457](https://github.com/google-gemini/gemini-cli/pull/29457) `read-many-files` 用 glob 替换模糊匹配（修复二进制被错误纳入）
> - [#29459](https://github.com/google-gemini/gemini-cli/pull/29459) shell 命令注入的取消信号传递
> - [#29466](https://github.com/google-gemini/gemini-cli/pull/29466) 防止未受信目录自销毁 `.gemini/settings.json`
> - [#29460](https://github.com/google-gemini/gemini-cli/pull/29460) OAuth URL 终端换行截断导致 400（使用 OSC 8）
> - [#29458](https://github.com/google-gemini/gemini-cli/pull/29458) 默认阻止粘贴文本中 `@path` 展开
> - [#29655](https://github.com/google-gemini/gemini-cli/pull/29655) 阻止浏览器验证 + OAuth 重试无限循环
> - [#29641](https://github.com/google-gemini/gemini-cli/pull/29641) Telemetry 自定义 OTLP headers（Grafana/Honeycomb/Datadog 鉴权）
> - [#29665](https://github.com/google-gemini/gemini-cli/pull/29665) gVisor 沙箱网络隔离下 IDE companion 错误显式化

---

## 五、功能需求趋势

从今日高活跃 Issue/PR 看，社区关注点高度集中在以下方向：

| 趋势方向 | 代表 Issue/PR | 关注度 |
|---|---|---|
| **Agent 鲁棒性 & 子代理调度** | #22323, #21409, #21968, #20195, #18287, #22598 | 🔥🔥🔥 |
| **安全与未受信上下文** | #29466, #29458, #29460, #29672, #29655 | 🔥🔥🔥 |
| **性能与上下文压缩** | #29457, #29582, #19561（tactful extraction） | 🔥🔥 |
| **Browser Agent 健壮性** | #22267, #22232, #21983 | 🔥🔥 |
| **工具数量/工具选择智能** | #24246, #22745, #22746（AST 感知） | 🔥🔥 |
| **AST 感知代码探索** | #22745, #22746, #22747 | 🔥 |
| **Telemetry & 可观测** | #29641（OTLP headers）, #23166（评测增强） | 🔥 |
| **模型原生能力利用** | #19873（Zero-Dep OS sandbox）, #21432（自我感知） | 🔥 |
| **多 workspace 策略** | #18397 | 中 |

---

## 六、开发者关注点（痛点与高频需求）

1. **子代理是当前最大痛点**：从状态机错误（#22323）、挂死（#21409）、不会主动调用（#21968）、Bug 报告缺失上下文（#21763）四个维度同时被吐槽，团队应在 sprint 层面集中攻克。
2. **"未信任 workspace" 默认策略导致的安全/破坏性 bug**（#29466/#29458）是 P1 中的 P1：默认未受信状态会触发 `settings.json` 被静默销毁、`@path` 注入泄密，PR 已批量关闭，但开发者文档和 onboarding 流程需要同步更新以减少重复报告。
3. **自定义 skills/sub-agents「摆设化」**（#21968、#21432）：模型不会主动发现和调用用户与系统skill，需要在系统提示与发现机制上做改动。
4. **配置覆盖「链路断裂」**：`AgentRegistry` 合并了 `settings.json`，但 BrowserAgent 等运行时未生效（#22267），需要全链路审计。
5. **环境兼容性盲点**：Wayland（#21983）、gVisor（#29665）、大量工具（#24246）等边界场景需要补齐 CI/eval 覆盖。
6. **OTel 可观测诉求强烈**：#29641 合并后，Grafana Cloud / Honeycomb / Datadog 等带鉴权的 OTel 后端成为可观测标配。
7. **任务跟踪机制重构**：#21000/#18836 推动 WriteToDo 走向「持久化文件 CRUD」，解决跨会话上下文腐化与 token 浪费。

---

> 📌 **小结**：今日信号清晰——**Agent 鲁棒性 + 未受信上下文安全**是 Gemini CLI 当前两大攻坚方向；性能优化、AST 感知探索、OTel 可观测为第二梯队。开发者社区期待团队在子代理调度与"skills/sub-agents 自动调用"上提供系统性突破，而非单点修补。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-08** ｜ **数据来源：github.com/github/copilot-cli**

---

## 📌 今日速览

今天是 **v1.0.94 预发布周期** 高强度迭代日，团队连续发布 4 个预发布版本（v1.0.94-0 ~ v1.0.94-3），重点引入 **Claude Haiku 5.5 模型** 并完善 **托管策略下的权限/沙箱控制**；v1.0.93 正式版同步放量 `sandbox` 与 `permissions.limitTo` 等企业级能力。社区侧则集中爆发一批与 **剪贴板交互、MCP 鉴权、Windows/macOS 沙箱兼容** 相关的 Bug 报告。

---

## 🚀 版本发布

### v1.0.94 预发布系列（连续 4 个版本）

| 版本 | 类型 | 要点 |
| --- | --- | --- |
| **v1.0.94-0** | Improved | 托管设置请求新版本时给出升级指引；托管策略可禁用 Assisted Permissions，强制 Manual Approval 模式 |
| **v1.0.94-1** | Fixed | Sessions 侧栏行点击在分屏协调场景下可靠切换 |
| **v1.0.94-2** | Fixed | 修复与变更 |
| **v1.0.94-3** | Added | **新增 Claude Haiku 5.5** 模型选择与 `--model` 自动补全；Fixed 启动绕过权限旗标被托管设置压制时的策略提示 |

### v1.0.93 正式版（2026-10-07）

- **Added**：`permissions.limitTo` 企业级托管网络边界；`/user` 安全命令即时执行、不安全远程命令在活跃回合中拒绝并入队；**Plugin 技能**
- **Improved**（v1.0.93-4）：**命令沙箱（`/sandbox`、`--sandbox`）面向所有用户开放**

---

## 🔥 社区热点 Issues

1. **[#3534](https://github.com/github/copilot-cli/issues/3534) WSL2 (ARM64) `/copy` 失败 `clip.exe exited with code 1`**  
   *8 评论 / 👍6* ｜ 影响所有在 ARM64 WSL2 上使用 `/copy` 的用户，根因是 `cmd.exe` 引号转义 Bug。来自 5 月份的报告仍在昨日（10-07）得到更新，说明修复阻力较大，**跨平台兼容性** 是长期痛点。

2. **[#3172](https://github.com/github/copilot-cli/issues/3172) 奇怪的"Somebody else owns the clipboard"提示与布局错乱**  
   *6 评论 / 👍14（榜单最高点赞）* ｜ 已 CLOSED，高赞反映出 **剪贴板 UX 问题** 是社区最敏感的体验痛点。

3. **[#2285](https://github.com/github/copilot-cli/issues/2285) 复制命令包含不可见字符导致外部终端 "command not found"**  
   *6 评论 / 👍10* ｜ 已 CLOSED 但昨日再次更新，说明隐形字符问题在历史上反复出现，**输入键盘区域** 需长期回归测试。

4. **[#5068](https://github.com/github/copilot-cli/issues/5068) Windows: MCP Entra 登录失败"scopes could not be safely validated for the account broker"**  
   *2 评论 / 👍8（极高）* ｜ Azure DevOps MCP 服务登录失败，影响企业用户调用核心 DevOps 工具，**Windows 平台 MCP 鉴权链路** 是高优先级议题。

5. **[#4991](https://github.com/github/copilot-cli/issues/4991) Cloudflare MCP OAuth 成功后报"Subscription limit reached"**  
   *4 评论 / 👍0* ｜ 远程 MCP 鉴权与运行时注册的耦合 Bug，反映出 **MCP 协议状态机** 与 OAuth 生命周期对接的脆弱性。

6. **[#5066](https://github.com/github/copilot-cli/issues/5066) Assisted Permissions 体验回归**  
   *3 评论 / 👍1* ｜ 用户主观感受权限请求过频，连 PowerShell `Get-ChildItem` 都需要审批；说明 v1.0.94 中"强制 Manual Approval"托管策略变更触发了真实的 UX 下降。

7. **[#5076](https://github.com/github/copilot-cli/issues/5076) `/add-dir` 未把目录加入沙箱允许列表**  
   *3 评论 / 👍0* ｜ 影响 v1.0.93 刚刚 GA 的沙箱体验，与 PR 中宣传的"命令沙箱面向所有用户开放"形成落差**——沙箱的可用性闭环尚有缺口。

8. **[#4731](https://github.com/github/copilot-cli/issues/4731) MCP `tools/list` refresh 在刚取消的工具调用上超时，永久剥离该服务器工具**  
   *3 评论* ｜ MCP stdio 服务器在取消态下被再次写入，导致整个 session 永久丢失该服务器工具，**MCP 可靠性** 受到结构性挑战。

10. **[#4652](https://github.com/github/copilot-cli/issues/4652) Windows 25H2 上 `--sandbox` 报"not supported on this host"**  
    *4 评论* ｜ 沙箱对最新 Windows 版本判定逻辑滞后，企业 Windows 用户升级后即用即崩，**平台兼容性矩阵** 需紧跟 Windows 节奏。

11. **[#5075](https://github.com/github/copilot-cli/issues/5075) 用户中断（Ctrl+C / Esc）时缺少 `agentStop` Hook 事件**  
    *0 评论（新鲜 issue）* ｜ Hook 消费者无法感知 agent 因用户中止而空闲，要求在 abort 路径触发停止事件，**SDK 可扩展性** 持续深化。

> *补充关注（未计入前 10）：* [#5072 macOS NSLocalNetworkUsageDescription 缺失](https://github.com/github/copilot-cli/issues/5072)（App Store 合规风险）、[#5074 Windows Terminal 键位弹窗默认选中 Yes](https://github.com/github/copilot-cli/issues/5074)（误操作改写 settings.json）、[#5064 /compact 由 Agent 主动提议](https://github.com/github/copilot-cli/issues/5064)（基于缓存窗口的省钱优化）、[#5063 store_memory 工具覆盖失效](https://github.com/github/copilot-cli/issues/5063)（SDK 工具接管路径不一致）。

---

## 📥 重要 PR 进展

**过去 24 小时无 PR 更新。** 团队重心集中在版本打包与 Bug 验证上。建议关注 v1.0.94 正式版 GA 时首批合并的修复 PR（预计主要面向 MCP 鉴权与剪贴板相关 Issue）。

---

## 📈 功能需求趋势

从今日 32 个 Issue 分析，社区诉求集中在六大方向：

| 方向 | 代表 Issue | 关注度 |
| --- | --- | --- |
| **剪贴板 / 输入键盘体验** | #3534 #3172 #2285 #4866 #4789 | ⭐⭐⭐ 高（持续热点） |
| **MCP 鉴权与可靠性** | #4991 #5068 #5069 #4731 | ⭐⭐⭐ 高（企业刚需） |
| **沙箱可用性 / 平台兼容** | #5076 #4867 #3861 #4909 #4788 #4679 #4652 #5072 | ⭐⭐⭐ 高（铺量即爆） |
| **托管策略与权限 UX** | #5066 #5068 #5065 | ⭐⭐ 中高 |
| **上下文压缩 / Token 经济性** | #5064 #5067 #5065 | ⭐⭐ 中（成本驱动） |
| **SDK / Hook 扩展能力** | #5075 #5063 #5064 | ⭐⭐ 中（高级用户） |

---

## 🛠 开发者关注点

1. **剪贴板与终端交互的"隐形 Bug"** 反复出现——Windows/WSL2、macOS、IDE 终端三类环境的引号转义、字符编码、所有权提示尚未彻底收敛，是开发者日常最容易踩的坑。
2. **沙箱（`/sandbox`）正式 GA 后即用即崩**——`/add-dir` 不进入 allow list、Windows 25H2 不支持、`sandbox.enabled:false` 仍初始化、`/ide` 在沙箱下找不到 workspace，说明沙箱能力虽已开放，但**策略层、路径解析层、平台判定层**仍有工程债。
3. **MCP 协议边角场景稳定性不足**——OAuth 成功后协议初始化失败、`tools/list` 在取消态下超时永久剥夺工具集、远程服务器未注册完成时 `tool_search_tool` 误返回 "No tools found"，对 **远程 MCP 与企业版 MCP** 场景是 P0 级。
5. **托管设置下权限体验被"收紧"**——v1.0.94 强制 Manual Approval 模式引发用户主观的"回归感"，社区在向团队反馈"过于频繁"的审批，提示**托管策略默认值**需要在安全与流畅之间寻求更优平衡。
6. **SDK / Hook 可编程性需求增长**——`agentStop` 在 abort 路径不触发、`store_memory` 工具覆盖失效、需 `session.usage_checkpoint` 提供累计 token——表明 Copilot CLI 正从"CLI 工具"加速演化为 **可被嵌入的运行时**，开发者期望更细粒度的控制面。

---

*本日报由 GitHub 公开数据自动汇总，如需特定维度深入分析请回复。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-10-08** | 数据来源：github.com/anomalyco/opencode

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，但社区维护活动非常密集：大批 Issue 进入"待关闭（triaging）"流程，多个 V2 路径下的 Provider 集成问题被集中报告。值得关注的是，贡献者 **Nowaker** 集中提交了一组针对 TUI v1 的维护性 PR（首屏渲染阻塞、日志器空转、长会话消息隐藏等），延续 v1 的可用性。

---

## 🚀 版本发布

**今日无新 Release。** 建议关注 v2 主线进展（多个 Issue 标注 `[V2]`）以及 Desktop 端稳定性修复。

---

## 🔥 社区热点 Issues

按"对开发者和用户体验影响 × 社区讨论度"筛选 10 条：

| # | 标题 | 状态 | 关键看点 |
|---|------|------|---------|
| [#7380](https://github.com/anomalyco/opencode/issues/7380) | Long chat 旧消息消失 | CLOSED | 12 评论 / 9 👍，长会话滚动回看时旧消息不可见，已关闭但值得跟进回归测试 |
| [#50650](https://github.com/anomalyco/opencode/issues/50650) | Desktop 自定义 Provider 保存恒报错 | OPEN | 7 评论 / 4 👍，设置面板中 Custom OpenAI-compatible 流程在任何服务器（含本地 sidecar）上都无法保存 |
| [#36766](https://github.com/anomalyco/opencode/issues/36766) | V2 截断的 OpenAI 工具参数处理 | CLOSED | 7 评论，V2 适配器在工具参数 JSON 截断时整段执行中止，缺少定位问题的探针 |
| [#47553](https://github.com/anomalyco/opencode/issues/47553) | Desktop sidecar OOM 崩溃 | OPEN | 6 评论，V8 堆增长至 ~3GB+ 被系统 OOM 杀，1.18.29 仍存在内存泄漏 |
| [#53835](https://github.com/anomalyco/opencode/issues/53835) | 权限：读技能引用要求 plugin 缓存目录权限 | OPEN | 6 评论，Superpowers 插件技能读取其参考 Markdown 触发外部目录授权请求，权限模型过严 |
| [#38666](https://github.com/anomalyco/opencode/issues/38666) | TUI/Web 显示单工具耗时与轮次时长 | CLOSED | 6 评论 / 1 👍，工具级性能可见性需求，已关闭 |
| [#32548](https://github.com/anomalyco/opencode/issues/32548) | Step-cap 导致 Claude 启用 thinking 时 400 | CLOSED | 6 评论，prompt loop 追加 assistant 消息被 Anthropic 视为 prefill 导致拒绝 |
| [#43818](https://github.com/anomalyco/opencode/issues/43818) | 采纳 LLM Gateway 上报的成本数据 | OPEN | 4 评论 / 8 👍，建议 `getUsage` 优先使用 OpenRouter/LiteLLM/Manifest 的 `usage.cost`，高赞 |
| [#53841](https://github.com/anomalyco/opencode/issues/53841) | 多 Provider 间歇性 "Endpoint is unavailable" | OPEN | 4 评论，今日新增，影响 Muse 等多个模型的上游稳定性 |
| [#53756](https://github.com/anomalyco/opencode/issues/53756) | Bedrock 应用推理档案 ARN 给 Claude 注入 Nova 格式 | OPEN | 5 评论，V2 路径下 effort 变体按 Nova 格式生成，Claude 返回 400 |

**社区反应速读：** 长会话消息丢失（#7380）和多 Provider 端点抖动（#53841）形成两条热度线；成本数据来源（#43818 👍 8）反映用户对**账单透明性**的强烈诉求。

---

## 🛠️ 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#53685](https://github.com/anomalyco/opencode/pull/53685) | 拒绝畸形工具参数并结算未完成调用 | CLOSED | V2 适配器在流式接收 tool arguments 时，若最终 JSON 不可解码则注入 `tool-input-error`，避免整次执行中止 |
| [#53667](https://github.com/anomalyco/opencode/pull/53667) | 保留远程配置与 TUI 模型选择 | CLOSED | 凭据拉取失败时仍保留最近一次合法的远程设置，避免无安全配置时仍启用 Provider |
| [#53761](https://github.com/anomalyco/opencode/pull/53761) | Home 快捷键打开 Home 时聚焦会话搜索 | CLOSED | 修复 `Cmd+B / Alt+Home` 回到 Home 后焦点丢失、无法直接输入的问题 |
| [#53305](https://github.com/anomalyco/opencode/pull/53305) | 预览 Word/Excel/PPT 文件 | CLOSED | 引入 `microsoft-office` GUI 扩展，基于 BetterOffice 的 Rust 引擎编译为 WASM，离主线程运行 |
| [#53850](https://github.com/anomalyco/opencode/pull/53850) | `write` 工具返回格式化后 diff | OPEN | 与 `edit/patch` 行为对齐，客户端可看到 formatter 之后的真实变更 |
| [#53680](https://github.com/anomalyco/opencode/pull/53680) | 首屏不再阻塞于完整 Provider 目录 | OPEN | 解决首帧 ~0.6s、UI 实际可交互 ~3s 的体验问题，对应 Issue #41078 |
| [#53674](https://github.com/anomalyco/opencode/pull/53674) | 空闲时停止文件日志器每秒唤醒 | OPEN | 消除轮询导致的恒定 CPU 抖动，对应 Issue #53673 |
| [#53655](https://github.com/anomalyco/opencode/pull/53655) | 中断请求发起时立即显示"中止中" | OPEN | 缩短中断反馈延迟 |
| [#53333](https://github.com/anomalyco/opencode/pull/53333) | 按 prompt/landmark/block 导航会话 | OPEN | 与 #53630、#53629 组成栈，改进长会话内的"寻址"能力 |
| [#53654](https://github.com/anomalyco/opencode/pull/53654) | 可选哪些消息显示时间戳 | OPEN | 配合 #53195 的 `turn_timing` / `Locale.todayTimeOrDate` 精细化 TUI 信息密度 |

> 备注：Nowaker 提交的多个 v1 维护 PR 都在 PR 描述中明确表示"v2 迁移后会同步提交 v2 版本"，对 v1 用户是利好。

---

## 📈 功能需求趋势

从今日活跃 Issue 提炼出社区最关注的功能方向：

1. **TUI 信息密度与导航增强** — 时间戳可配置（#43243、#52748、#53654）、变体在状态栏显示（#38015）、按 prompt/landmark 跳转（#49147、#53333）、侧栏折叠记忆（#51535）。
2. **桌面端稳定性** — Sidecar 内存泄漏（#47553）、自定义 Provider 保存失败（#50650）、前台/后台服务 401 鉴权失效（#53834）。
3. **V2 Provider 适配正确性** — Bedrock ARN 推理档案（#53756）、OpenAI Responses 截断参数（#36766）、Anthropic + OpenRouter `tool_search` 协议冲突（#53840）、Moonshot/Kimi 流式失败（#41273）。
4. **成本与计费透明** — 采纳 Gateway 上报的 `usage.cost`（#43818）。
5. **跨实例会话一致性** — 多终端共享 SQLite 导致会话串台（#31307）、`/model` 切换触发 `seq` 约束崩溃（#39165）。
6. **可玩性 / 辅助功能** — Desktop Pets（#39853）、Desktop 侧会话（#33469）、Alt 键跨会话导航（#34727）。

---

## 🧑‍💻 开发者关注点

- **首屏性能是反复出现的痛点**：TUI 首帧与可交互之间有近 2.5s 等待（#41078、#53680），Provider 目录加载是主要瓶颈。
- **Windows 桌面体验被低估**：子 `cmd.exe` 闪烁并抢焦点（#52281）暴露 spawn 行为与 `windowsHide` 之间的偏差。
- **LLM 协议兼容性需要更多适配器测试**：截断参数、prefill 误判、tool 协议不互通是 v2 适配层的重点防御面。
- **插件/技能权限模型过紧**：读同一技能下的引用文件就触发外部目录授权（#53835），影响 Superpowers 等工作流。
- **维护者正在做清理**：多个 Issue 被打上 `[pending close, triaging]`（#53840、#53841），反映 Issue 数量增长后需要更主动的归档策略。

---

*日报由 OpenCode 社区数据自动汇总生成。如需查看完整列表，请访问 [issues 列表](https://github.com/anomalyco/opencode/issues) 与 [pull requests 列表](https://github.com/anomalyco/opencode/pulls)。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-08

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)（仓库已迁移至 `earendil-works/pi`）

---

## 一、今日速览

**v1.1.0 正式发布**，核心亮点是新增 OSC 7501 程序状态上报协议，终端与 Agent 仪表盘可实时感知 Pi 是「工作中」「阻塞中」还是「失败」。与此同时，过去 24 小时社区进入了一轮明显的高强度 triage：50 条 issue 中绝大多数被标记为 `[untriaged]` / `[last-read]` 后自动归档，剩余 4 条 OPEN 集中在 OpenAI 用计额度刷新、扩展回调丢消息、SDK 内存膨胀等核心路径上。

---

## 二、版本发布

### 🎉 v1.1.0 — [Release notes](https://github.com/earendil-works/pi/releases/tag/v1.1.0)

**New Features**

- **Program status reporting（OSC 7501）**：通过 [Program Status Protocol](https://www.superlogical.com/rex/docs/build/program-status) 让外部组件无需读取屏幕或推断窗口标题即可知道其工作进度，覆盖 working、blocked、done、failed 四态。
  - 相关 issue：[#10607](https://github.com/earendil-works/pi/issues/10607)（已合并）
  - 配置文档：[terminal-setup.md](https://github.com/earendil-works/pi/blob/v1.1.0/packages/coding-agent/docs/terminal-setup.md#program-)

> 配套 PR 与 issue 显示这是 1.1.0 的「门面特性」，后续还应有更多补丁在 1.1.x 维护线上陆续合入。

---

## 三、社区热点 Issues（Top 10）

1. **[#10480](https://github.com/earendil-works/pi/issues/10480) — OpenAI 直接连接不识别手动额度重置**（💬16，OPEN）
   ChatGPT Pro 100 计划手动使用 banked reset 后，Pi 仍报「额度用尽」。绕过方案是 `/logout` + `/login`。这是今天评论数最多的 open issue，涉及 OAuth token 缓存与配额同步逻辑。

2. **[#4180](https://github.com/earendil-works/pi/issues/4180) — 链接无法点击**（💬15，CLOSED）
   在 alternate term mode 下 markdown 链接与 URL 不再可点击，困扰用户数月，本次 triage 集中清理。

3. **[#9980](https://github.com/earendil-works/pi/issues/9980) — OpenRouter 顶流开源模型成本被低估 2-3 倍**（💬5，OPEN 👍1）
   模型目录取所有 provider 中的最低价作为计费基准，导致 `z-ai/glm-5.3-flash` 等热门开源模型真实成本严重偏离。影响所有走 OpenRouter 的重度用户。

5. **[#10267](https://github.com/earendil-works/pi/issues/10267) — 扩展在无用户消息回合中贡献的 systemPrompt 被丢弃并重复计费**（💬7，OPEN 👍2）
   `before_agent_start` 中扩展注入的 system prompt 在 background-task notification、plan-mode continue、retry、resume 等场景下整体丢失，导致 model 重新计费——直接影响扩展生态。

6. **[#9602](https://github.com/earendil-works/pi/issues/9602) — Compaction 可能包含早前被省略的 thinking 消息导致溢出**（💬7，OPEN）
   长会话 + 本地 Qwen3.8 + llama.cpp 场景下，compaction 把本应省略的 thinking 块拼回去，输出到 token 上限。

7. **[#5570](https://github.com/earendil-works/pi/issues/5570) — 在项目级 .pi/settings.json 中支持 `--no-skills` / `--skill`**（💬5，OPEN 👍2）
   CLI 标志已支持，社区希望项目设置能锁定 skill 行为，便于在团队/仓库级别控制 agent 能力。

9. **[#10563](https://github.com/earendil-works/pi/issues/10563) — MCP OAuth：Google 服务器永远拿不到 refresh token**（💬4，CLOSED）
   `mcp.json` OAuth 入口无法附加 `access_type=offline`，导致 Gmail / Calendar MCP 必须走 PI 重启 OAuth。

10. **[#9062](https://github.com/earendil-works/pi/issues/9062) — Tool-call 参数解析在分片 delta 下退化为 O(N²)**（💬6，CLOSED）
    `processResponsesStream()` 中每条 `function_call_arguments.delta` 都把整段累积缓冲再扔给解析器，长函数调用显著变慢。

> 其余值得关注的 OPEN/CLOSED 议题：[#10642](https://github.com/earendil-works/pi/issues/10642)（SDK 长会话内存只增不减）、[#10638](https://github.com/earendil-works/pi/issues/10638)（SessionManager 一次性加载整个 session 文件，127MB → 250MB heap）、[#10639](https://github.com/earendil-works/pi/issues/10639)（`sendCustomMessage({ triggerTurn: true })` 首请求缺失 system prompt）。

---

## 四、重要 PR 进展

1. **[#10607](https://github.com/earendil-works/pi/pull/10607) — feat：OSC 7501 程序状态上报**（badlogic，CLOSED）
   v1.1.0 的核心特性合入，按状态映射向终端发送 OSC 7501。

3. **[#10569](https://github.com/earendil-works/pi/pull/10569) — OpenRouter 模型按 key 可用性过滤**（adawalli，OPEN）
   修复 [#10353](https://github.com/earendil-works/pi/issues/10353)：通过 `GET /api/v1/models/user` 过滤被 guardrail 屏蔽的模型，支持 `us.openrouter` 等区域入口。

5. **[#8307](https://github.com/earendil-works/pi/pull/8307) — 启用 cache-friendly compaction**（vegarsti，OPEN）
   compaction 改为追加到当前会话请求，复用已暖的 prompt cache，节省显著 token。仅对 auto compaction 开启。

7. **[#10521](https://github.com/earendil-works/pi/pull/10521) — 修复 NVIDIA NIM 模型的 inline `$ref` 工具 schema**（cv，OPEN）
   修复 [#10270](https://github.com/earendil-works/pi/issues/10270)：`nemotron-3.5-super-vl-preview`、`qwen3.8-flash-next` 返回的 `$ref` 工具参数被 `validateToolArguments` 误拒。

11. **[#10600](https://github.com/earendil-works/pi/pull/10600) — 让 agent 级重试遵守 `Retry-After`**（autopeasant，OPEN）
    修复 [#10601](https://github.com/earendil-works/pi/issues/10601)：原来 429 的 `Retry-After: 30` 被按 2s 起步重试，更早回到已被掐的 server。修复后按 retry-after-ms 等待。

13. **[#10590](https://github.com/earendil-works/pi/pull/10590) — 把 `@earendil-works/pi-mcp` 通过 VIRTUAL_MODULES + host guard 提供给扩展**（georgeharker，CLOSED）
    修复扩展引入 pi-mcp 解析报错；让 host 在真运行时也能托管 MCP 模块。

15. **[#10593](https://github.com/earendil-works/pi/pull/10593) — Meta OAuth 请求添加 Muse Code User-Agent**（jylkim，CLOSED）
    解决 Pi 的 Meta OAuth 间歇性 `503 service_overloaded`，改 UA 至 `muse-code/pi` 后回放测试稳定返回 200。

17. **[#10602](https://github.com/earendil-works/pi/pull/10602) — 为扩展开放编辑器边框 widget**（autopeasant，OPEN）
    扩展现可在编辑器边框上挂持续可见的指标（配额、预算、连接状态等），无需劫持内置 working indicator。

19. **[#10614](https://github.com/earendil-works/pi/pull/10614) — footer 选项：紧凑行 + 隐藏 model 后缀**（autopeasant，OPEN）
    实现 [#10612](https://github.com/earendil-works/pi/issues/10612)：扩展不再需要包裹 `FooterComponent` + 伪造 suffix 格式即可定制。

21. **[#10596](https://github.com/earendil-works/pi/pull/10596) — 无背景时不再用尾随空格填充行**（bakamake，CLOSED）
    修复 TUI 复制 chat 输出时每行带尾随空格的问题，避免在 trailing-whitespace 敏感内容（如 Markdown、diff）中出 bug。

> 其他值得关注的 PR：[#10615](https://github.com/earendil-works/pi/pull/10615)（read 分页参数规整，修复 [#10380](https://github.com/earendil-works/pi/issues/10380)）、[#9880](https://github.com/earendil-works/pi/pull/9880)（发布 models/settings/keybindings/themes 的 JSON Schema）、[#7757](https://github.com/earendil-works/pi/pull/7757)（fullscreen copy-on-select opt-out）。

---

## 五、功能需求趋势

把近 24 小时 issue 聚合，社区关注点明显收敛在以下几条主轴：

1. **Provider / 模型覆盖与正确性**
   - 新模型：NVIDIA NIM（`nemotron-3.5-super-vl-preview`、`qwen3.8-flash-next`）、Copilot（Claude Haiku 5.5 缺失）、扩展 provider（pengepul）
   - 成本与配额：OpenRouter 顶流模型计费偏离 2-3×、ChatGPT Pro banked reset 不刷新

2. **OAuth / 鉴权稳健性**（高频痛点）
   - Google MCP refresh token、Meta OAuth UA、ChatGPT 403（subscription sharing）、OpenAI 直连额度

3. **会话与内存效率**
   - SessionManager 一次性加载整文件（127MB → 250MB heap）
   - 长会话 SDK 内存只增不减
   - Compaction 包含被剔除 thinking 块 → 溢出
   - 需求：压缩 session 文件、cache-friendly compaction、SDK 长会话内存回收

4. **扩展 API 完整度**
   - `before_agent_start` 贡献的 system prompt 在无用户回合被丢
   - `sendCustomMessage({ triggerTurn: true })` 首请求缺 system prompt
   - 编辑器边框 widget、footer 行选项、配置 JSON Schema 等新钩子

5. **TUI / 终端交互细节**
   - Fullscreen 模式：mouse hover 误覆盖剪贴板、中键粘贴失效、Shift+Enter 不换行
   - OSC 7501 状态上报、ANSI 跨 chunk 损坏、`>` `→` 二义性归一化
   - bash 工具：超时后展示分钟、输出含 split ANSI 修复

6. **计费 / 成本准确性**
   - OpenRouter 取最低价 provider 的偏差；与扩展 provider 目录陈旧联动导致静默切换 default model（[#10623](https://github.com/earendil-works/pi/issues/10623)）

---

## 六、开发者关注点

从近一周的 issue / PR 反推，开发者的核心痛点可归纳为四类：

- **「可计量的回归」是最高优先级**——额度刷新不识别、cost 偏低 2-3×、compaction 漏 thinking、limit 未 clamp 等「数字错位」问题直接消耗真金白银，优先级普遍被压在 bug 区最高位（[#10480](https://github.com/earendil-works/pi/issues/10480)、[#9980](https://github.com/earendil-works/pi/issues/9980)、[#9602](https://github.com/earendil-works/pi/issues/9602)、[#10380](https://github.com/earendil-works/pi/issues/10380)）。

- **OAuth 矩阵持续是脆弱面**——Google MCP 缺 refresh token、Meta 503、ChatGPT subscription sharing、ChatGPT Pro banked reset —— 多个 provider 各自为政，且与 token 缓存、UI 状态强耦合，开发者期望的是更显式的握手协议与更可调试的错误信息（[#10563](https://github.com/earendil-works/pi/issues/10563)、[#10593](https://github.com/earendil-works/pi/pull/10593)、[#10605](https://github.com/earendil-works/pi/issues/10605)）。

- **长会话 / Server-side 嵌入场景的内存治理**——当 Pi 作为 SDK 嵌入到长跑服务（[#10642](https://github.com/earendil-works/pi/issues/10642)、[#10638](https://github.com/earendil-works/pi/issues/10638)），开发者要求 compaction、内存回收、session 文件压缩、retry-after 遵守等「生产级特性」必须默认开启，而非 opt-in 实验项。

- **扩展生态的「隐性 API」需要正式化**——footer 行选项、编辑器边框 widget、`before_agent_start` 的 system prompt 语义、reload 的 ctx 失效处理——这些原本只能 hack 的扩展点正逐步被 [#10614](https://github.com/earendil-works/pi/pull/10614)、[#10602](https://github.com/earendil-works/pi/pull/10602)、[#9880](https://github.com/earendil-works/pi/pull/9880) 等 PR 形式化为公开 API，扩展作者是 v1.1 周期内最积极的贡献群体之一。

---

*报告基于 2026-10-08 当日 badlogic/pi-mono → earendil-works/pi 仓库的 releases / issues / PRs 数据自动汇总。所有链接均指向原 issue

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

tag issue (9 comments)
- #10797 - Internal scaffolding tags leak (8 comments)
- #11408 - Deferred review from PR #9466 (7 comments)
- #13570 - Auto mode blocks inert text (7 comments)
- #13566 - web-shell approval card sanitization (6 comments)
- #13321 - Bound successful read-only exploration (6 comments)

3. **Top PRs** (the most important ones):
- #13436 - fix(acp): preserve cancellation intent across session recovery
- #13481 - fix(release): reclaim docker disk
- #9305 - fix(ui): bottom-align short VP content
- #13442 - feat(hooks): apply PreToolUse updatedInput with full revalidation
- #13332 - fix(core): close Managed session correctness gaps
- #13571 - feat(memory): opt-in extraction cadence
- #9417 - fix(cli): fail closed on expanding heredoc bodies
- #13583 - feat(agents): remove the thread backend and run A2A on sessions
- #13163 - fix(managed-agent): stop a bound Turn under refused authorization
- #13544 - feat(managed-agent): persist workspace actor roles
- #13219 - fix(managed-agent): bound retry loops with terminal states
- #13550 - feat(managed-agent): H4b child Session runtime
- #13642 - feat(runtime-broker): bounded retention for terminal JDBC history
- #13572 - feat(managed-agent): H5b/H5c channel runtime

4. **Trends from issues**:
- Managed Agent architecture (multiple issues)
- Session management
- Kubernetes runtime
- Multi-agent collaboration
- MCP tools refresh
- Hooks events (cancellation hooks)
- Memory extraction cadence
- Subagent error reporting

5. **Pain points**:
- Token waste on dead-end loops
- Internal tag leakage
- Approval card sanitization
- File ownership checks
- Subagent error reporting

Let me write this up in a professional Chinese daily report format.</think>

# Qwen Code 社区动态日报
**日期：2026-10-08**

---

## 📌 今日速览

今日 Qwen Code 社区围绕 **Managed Agent 架构演进** 与 **会话可靠性** 展开：凌晨合并的 release/v0.25.0-nightly 主要修复远程 Hosts 替换时绑定丢失的问题；而讨论最热烈的仍是 #12380 双路径 Managed Agent 架构提案（49 条评论）。同时，#13436（跨会话取消保留）、#13572（H5b/H5c 通道运行时）、#13583（移除线程后端）成为 PR 端的核心焦点，反映出 v0.25 周期内多智能体协同已从设计转入落地阶段。

---

## 🚀 版本发布

**v0.25.0-nightly.20261007.8003d28042** 已发布

- **fix(agents)**：替换选中的远程 Hosts 时保留绑定关系（#13430，@yiliang114）
- **test(core)**：关闭 #126 相关测试覆盖

夜间构建持续推进，0.25 周期聚焦于 Managed Agent 与多智能体协作能力。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 核心话题 | 评论数 |
|---|---|---|---|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | **Managed Agent 双路径架构与分阶段推进** | 定义 Managed Agent 架构，保持 TS agent 循环，将模型推理与工具环境供给解耦。已合并 #13289，是 v0.25 的设计总纲 | 49 |
| [#13395](https://github.com/QwenLM/qwen-code/issues/13395) | **Kubernetes 工具运行时进度追踪** | K8s 运行时跨平台交付门禁，含当前进度面板和 Draft PR #13526 | 15 |
| [#6710](https://github.com/QwenLM/qwen-code/issues/6710) | **ACP 取消 vs 异常中断区分** | P1 bug，会话恢复后两类信号仍混淆；最新验证仍可复现 | 13 |
| [#10887](https://github.com/QwenLM/qwen-code/issues/10887) | **重复工具错误导致 5–14M token 浪费** | P1，社区对「死循环无早停」的强痛点反馈 | 10 |
| [#2596](https://github.com/QwenLM/qwen-code/issues/2596) | **CLI 持续追加 `` 标签** | 老问题，最新 main 上仍无路径收敛证据 | 9 |
| [#10797](https://github.com/QwenLM/qwen-code/issues/10797) | **内部脚手架标签泄漏到用户输出** | tool-result、system-reminder 等被回显，welcome PR | 8 |
| [#11408](https://github.com/QwenLM/qwen-code/issues/11408) | **PR #9466 延迟审阅发现** | R53-2：resume 提示编号未对齐文件快照身份 | 7 |
| [#13570](https://github.com/QwenLM/qwen-code/issues/13570) | **Auto 模式误拦截无害文本** | 仅提到 amend 短语的文本也被拦，无逃生通道 | 7 |
| [#13566](https://github.com/QwenLM/qwen-code/issues/13566) | **WebShell 审批卡片未净化兄弟模型文本** | 来自 #13549 的延迟评审，安全相关 | 6 |
| [#13321](https://github.com/QwenLM/qwen-code/issues/13321) | **实现任务无进展时约束只读探索** | 上下文性能路线图项，含 #13601 在最新 head 的验证 | 6 |

---

## 🔧 重要 PR 进展（Top 10）

| # | PR | 内容要点 |
|---|---|---|
| [#13436](https://github.com/QwenLM/qwen-code/pull/13436) | **fix(acp)**：跨会话恢复保留取消意图 | 显式用户取消在 live/restored 会话间被保留，恢复后保留独立执行身份；ACP/SDK 取消源头有据可查，人类 Cancel 可升级中途错误。涉及 ~840 行测试，并触发 #13478 测试固化跟进 |
| [#13481](https://github.com/QwenLM/qwen-code/pull/13481) | **fix(release)**：释放 Docker 磁盘 + 数据根门禁 | 在构建沙箱镜像前同时清理 BuildKit 构建缓存（之前只清标签镜像，无法回收缓存），使用同一 24h 策略 |
| [#9305](https://github.com/QwenLM/qwen-code/pull/9305) | **fix(ui)**：短内容底部对齐 | VP 模式下，对话过短时内容改为底部对齐，空白置顶（autofix） |
| [#13442](https://github.com/QwenLM/qwen-code/pull/13442) | **feat(hooks)**：PreToolUse updatedInput 全量重验证 | 终端/ACP 会话中 PreToolUse 钩可整体替换工具输入，并触发完整重验证 |
| [#13332](https://github.com/QwenLM/qwen-code/pull/13332) | **fix(core)**：关闭 #12693 后合并评审的 Managed 会话正确性缺口 | 自报告修复 Durable Managed Session journal R2 评审遗留问题（autofix/takeover） |
| [#13571](https://github.com/QwenLM/qwen-code/pull/13571) | **feat(memory)**：免操作运行后免提频跳扩 | 新增默认关闭实验开关 `QWEN_CODE_MEMORY_EXTRACT_NOOP_SKIP_TURNS`，实现 #13004 阶段 1 |
| [#9417](https://github.com/QwenLM/qwen-code/pull/9417) | **fix(cli)**：worktree 守卫中对 heredoc 体采用 fail-closed | 未引用定界符下，`$(...)`、反引号、`${...}` 在读取时被展开；原 stripHeredocBodies 会丢弃，导致解析阶段被骗 |
| [#13583](https://github.com/QwenLM/qwen-code/pull/13583) | **feat(agents)**：移除线程后端，A2A 迁移到会话 | 删除早期基于线程的协作后端，将 A2A 迁移到 chat sessions（#13467 设计 §6 第二阶段） |
| [#13163](https://github.com/QwenLM/qwen-code/pull/13163) | **fix(managed-agent)**：拒绝授权时停止已绑定 Turn | Workspace 权限撤销/排水/注册变更场景下，绑定的 Turn 可被创建者取消并复用执行身份 |
| [#13572](https://github.com/QwenLM/qwen-code/pull/13572) | **feat(managed-agent)**：H5b/H5c 通道运行时（邮件参考适配器） | 提案 #12380 H 阶段；以邮件作为参考纵向。已沉淀 40 条评审 backlog（#13638） |

---

## 📊 功能需求趋势

从今日活跃议题看，社区关注度按方向可整理为：

1. **Managed Agent 多智能体平台化**（最热）
   - 双路径托管 #12380、K8s 运行时 #13395、Managed 子 Session #13550、Workspace 角色持久化 #13544
   - 跨平台交付与门禁成为核心议题

2. **会话可靠性与恢复**
   - 取消语义 #13436 / #6710、客户端关闭 #13502、托管会话正确性 #13332
   - 「取消意图跨恢复保留」成为 v0.25 关键技术债务

3. **MCP / 工具生态扩展**
   - 工具动态刷新 #13632、tool_search → tool_call 统一谓词 #13641
   - WebShell 适配器 #13549/#13566/#13643

4. **Hooks 事件体系完善**
   - PreToolUse 输入替换 #13442、用户取消钩子 #13633

5. **性能与上下文治理**
   - 死循环 token 浪费 #10887、只读探索上限 #13321
   - 记忆提取节奏 #13571 / #13004

6. **安全与权限边界**
   - 设置路径所有权检查 #13513、Auto 模式误拦 #13570、审批卡片净化 #13566

---

## 💬 开发者关注点

- **Token 经济性**：#10887 暴露「重复工具错误 → 死循环 → 数百万 token 烧光」的严重资源浪费，社区期待早停机制而非仅靠重试。
- **输出纯净度**：``、`<file_path>`、`</param>` 等内部标签仍出现在 CLI 终端（#2596、#10700、#10797、#10559），构成家族决策；社区期望明确「用户可见输出边界」。
- **会话恢复的语义保真**：恢复后如何区分「用户取消」与「意外中断」（#6710）、如何保持独立执行身份（#13436），是开发者最关心的可靠性问题。
- **Managed Agent 的工程债务**：托管会话在 #12692、#12693 合并后，多轮评审发现 InnoDB 锁序、键集合分页、连接泄漏等关键缺陷（#13325、#13332），平台化早期复杂度凸显。
- **测试覆盖与变更冻结**：v0.25 上线前夕，#9466、#11289、#12559 等老 PR 的延迟评审发现被集中追踪（#11408、#12612、#11507）；同时 #13436 之后新增「不需冻结即开测试」的跟进项（#13478），显示社区倾向「边合并边固化监控」而非阻塞合并。
- **多智能体协作的可观测性**：`agentCollaboration` 仍属实验后端（#13613），社区希望上线前完成面向模型的模型评估文档，避免将未验证文本投入生产。

---

*日报由 GitHub 公开数据整理生成，覆盖 2026-10-07 至 2026-10-08 的仓库变更。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期**：2026-10-08
**数据源**：Hmbown/DeepSeek-TUI（已迁移至 codewhale-hq/Codewhale）

> 📌 **项目状态说明**：根据最新 release 说明，原 `DeepSeek TUI` 仓库已完成向 Shannon Labs 旗下产品 **Codewhale** 的品牌过渡。npm 包 `deepseek-tui` 已弃用，统一使用小写标识符 `codewhale`。本日报中所有 issue/PR 链接均指向 `codewhale-hq/Codewhale` 仓库。

---

## 一、今日速览

今日社区最显著的动作是 **v0.10.2 集成分支（PR #6907）正式开启**：包含 `/undo`+`/diff` 回滚与对比、Plan 模式批准交接、MCP CLI、以及 provider 输出截断修复（保留 tail 而非 head）。同步有 11 个针对 v0.10.1 RC 的新 enhancement issue 集中开启，集中在 **subagent 协作、远程控制、TypeScript Agent SDK、skill frontmatter、Claude 插件 hooks 兼容** 等方向。修复类 issue 多为已 CLOSED 的 v0.10.0/0.10.1 回归问题，闭环节奏较快。

---

## 二、版本发布

### v0.10.1 已发布 ✅

- **发布时间**：2026-10-07（同日合并 PR #6905）
- **关键变更**：
  - **npm provenance**：仓库 URL 严格大小写匹配，符合 npm trusted publishing 要求
  - **Windows 插件状态重试**：改善 Windows 环境下插件加载稳定性
  - **late contributor credit**：补录贡献者致谢
- **配套 PR**：#6880（账户、bridge、avatar、跨平台发布资格认证）
- **发布记录同步**：PR #6908 同步 web 端的发布记录
- **链接**：[PR #6905](https://github.com/codewhale-hq/Codewhale/pull/6905)

### v0.10.2（草稿集成分支）🛠

PR #6907 是 0.10.2 的整合分支（从 `fead51eee` 切出），CI 全绿前保持 Draft。**链接**：[PR #6907](https://github.com/codewhale-hq/Codewhale/pull/6907)

---

## 三、社区热点 Issues（Top 10）

| # | 编号 | 标题 | 状态 | 评论数 | 重要性 |
|---|------|------|------|--------|--------|
| 1 | [#6050](https://github.com/codewhale-hq/Codewhale/issues/6050) | **可插拔 agent memory 后端**：causal-memory / mem0 作为参考实现 | OPEN | 6 | ⭐ 核心架构演进 |
| 2 | [#6142](https://github.com/codewhale-hq/Codewhale/issues/6142) | 调和两套 MCP 客户端栈（tui/src/mcp vs crates/mcp，约 17.7k 行重复） | CLOSED | 5 | 🔧 重大重构 |
| 3 | [#6700](https://github.com/codewhale-hq/Codewhale/issues/6700) | 暴露 stream retry budget 和 transport timeout 为可配置项 | CLOSED | 3 | 🌐 网络弹性 |
| 4 | [#6871](https://github.com/codewhale-hq/Codewhale/issues/6871) | Windows 安全门拒绝 `Stop-Process -Force` 合法用法 | CLOSED | 2 | 🪟 Windows 体验 |
| 5 | [#6828](https://github.com/codewhale-hq/Codewhale/issues/6828) | 0.10.0 启用 MCP server 后 `mcp_*` 工具全部不可见 | CLOSED | 2 | 🐛 高优先级回归 |
| 6 | [#6795](https://github.com/codewhale-hq/Codewhale/issues/6795) | Provider 内联 error frame 绕过所有重试预算 | CLOSED | 2 | 🐛 可靠性 |
| 7 | [#6650](https://github.com/codewhale-hq/Codewhale/issues/6650) | Ctrl+T 切换思考强度第 3 次按键失灵 | CLOSED | 2 | 🎯 UX |
| 8 | [#6652](https://github.com/codewhale-hq/Codewhale/issues/6652) | TUI 长时间运行后滚动卡顿（"果冻效应"） | **OPEN** | 1 | ⚡ 性能 |
| 9 | [#6788](https://github.com/codewhale-hq/Codewhale/issues/6788) | `/retry` 仅回滚 UI，模型上下文与持久化未撤销 | CLOSED | 1 | 🐛 语义缺陷 |
| 10 | [#6745](https://github.com/codewhale-hq/Codewhale/issues/6745) | Windows ExecutionPolicy 拦截 shell 工具 | CLOSED | 1 | 🪟 安全/可用性 |

**社区反应总结**：
- **MCP 整合（#6142）** 和 **agent memory 可插拔（#6050）** 是讨论最热的两条，分别代表"内部去重"与"外部扩展"两个方向
- Windows 平台相关 issue 占比明显（#6871、#6877、#6745），反映跨平台仍是主要痛点
- 多数回归 bug 在 24 小时内完成修复并 CLOSED，**闭环效率高**

---

## 四、重要 PR 进展（Top 10）

| # | 编号 | 标题 | 状态 | 关键内容 |
|---|------|------|------|----------|
| 1 | [#6907](https://github.com/codewhale-hq/Codewhale/pull/6907) | **0.10.2 集成分支** | OPEN | `/undo`+`/diff`、Plan 模式手交、MCP CLI、provider 输出保留 tail |
| 2 | [#6398](https://github.com/codewhale-hq/Codewhale/pull/6398) | Chromewhale：Chrome 侧边栏客户端 | CLOSED | Manifest V3 侧边栏，本地 runtime 通信，5 个浏览器工具 |
| 3 | [#6607](https://github.com/codewhale-hq/Codewhale/pull/6607) | 工具输出截断保留尾部 | CLOSED | 修复 run_tests/git/verifier 把 cargo 报错尾部丢掉的问题 |
| 4 | [#6906](https://github.com/codewhale-hq/Codewhale/pull/6906) | Windows npm 启动器命名修复 | OPEN | 解决 `node.exe` 作为 `codewhale.exe` 父进程导致 #6827 误杀的根因 |
| 5 | [#6399](https://github.com/codewhale-hq/Codewhale/pull/6399) | 重新固定 runtime-contract 预算 | CLOSED | 修复 `load_skill` 急切化导致的 CI 红 |
| 6 | [#6880](https://github.com/codewhale-hq/Codewhale/pull/6880) | 0.10.1 跨平台发布资格 | CLOSED | 账户、bridge、avatar、跨平台收尾 |
| 7 | [#6884](https://github.com/codewhale-hq/Codewhale/pull/6884) | 路由保存回执的 i18n | CLOSED | 翻译 `/model`、`/fleet save*` 命令的本地化字符串 |
| 8 | [#6887](https://github.com/codewhale-hq/Codewhale/pull/6887) | 语义截断允许中日字符间断开 | CLOSED | 解决中文/日文无空格文本截断到错误位置的 bug |
| 9 | [#6429](https://github.com/codewhale-hq/Codewhale/pull/6429) | 补全 404 功能 changelog | CLOSED | 关闭审计发现的发布说明缺失项 |
| 10 | [#6825](https://github.com/codewhale-hq/Codewhale/pull/6825) | rust-toolchain 升级 | OPEN | dependabot 维护性 bump |

**重点关注**：PR #6398 引入的 **Chromewhale** 是产品形态上的重要扩展——将 Codewhale 能力带出终端，进入浏览器侧边栏，意味着产品边界从 CLI/TUI 向"无处不在的 AI 代理"演进。

---

## 五、功能需求趋势

从今日更新的 50 条 issue 中，可归纳出五大社区关注方向：

### 1. 🤖 Agent 协作与多代理编排
- #6904 subagent 任务依赖 + peer 消息
- #6899 一个统一的后台会话终端面板（approve / reply / attach）
- #6900 工作流恢复：重放已完成步骤
- #6901 PR Watcher：自动跟进 CI 与 review

### 2. 🧠 可插拔 / 可扩展架构
- #6050 可插拔 agent memory（causal-memory / mem0）
- #6897 skill frontmatter 真正生效（`context: fork` / `allowed-tools` / `$ARGUMENTS`）
- #6896 允许导入带 hooks 的 Claude 插件（不再整包拒绝）

### 3. 🌐 远程控制与 SDK
- #6903 离开座位：headless 远程控制 + 审批推送
- #6898 TypeScript Agent SDK（turn / steer / interrupt / approval / 动态工具结果）

### 4. 🪟 平台兼容性（Windows 优先）
- #6871 安全门误伤合法 Stop-Process
- #6877 复制粘贴多行被当 prompt 一次性发出
- #6745 PowerShell ExecutionPolicy 拦截
- #6906 进程名误杀问题

### 5. ⚙️ 可观测性与可靠性
- #6700 retry budget 可配置
- #6795 provider 内联错误帧重试
- #6803 失败工具调用结果持久化
- #6800 stall recovery 仅 UI 层
- #6843 错误分类将"确定拒绝"误标为"internal"

---

## 六、开发者关注点

### 🔥 高频痛点

1. **上下文与 UI 不同步**（#6788 / #6800 / #6803）
   - `/retry`、stall recovery、failed tool 三类问题本质相同：**UI 已"修复"，但模型上下文、engine 状态、磁盘持久化三处未同步**。这是当前最值得架构层面根治的痛点。

2. **MCP 生态连通性差**（#6828 / #6142）
   - 启用 MCP server 但工具不可见，加上 17.7k 行的双栈重复代码，提示 MCP 集成仍处于"功能可用、体验粗糙"阶段。

3. **Windows 体验短板**
   - 安全门与系统机制的反复博弈（#6871、#6874 安全扫描、#6745 ExecutionPolicy、#6877 剪贴板）说明 Windows 是用户主要反馈来源，但修复仍偏被动。

4. **错误分类粒度不足**（#6843 / #6795）
   - `classify_error_message` 把 provider 4xx / 预算超限 / 裸 ERROR 都归为"internal"，导致 fallback 渲染成 warning，掩盖真实问题。

### 💡 隐含需求

- **跨平台一致体验**：剪贴板、安全门、PowerShell 三处表现各异
- **可观测性**：缺少 provider 错误被静默吞掉时的提示
- **本地化深度**（#6884-#6888 一组 PR）：从翻译硬编码字符串到 `semantic_truncate` 对中日字符的友好处理，社区在主动补齐 i18n 短板
- **持久化语义**：用户期望"我看到的"等于"模型看到的"等于"磁盘上的"

---

**日报生成时间**：2026-10-08
**覆盖范围**：50 个活跃 issue + 19 个 PR + 1 个 release
**维护者**：Hmbown（高活跃度，几乎所有架构级 issue 的 assignee/作者）

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*