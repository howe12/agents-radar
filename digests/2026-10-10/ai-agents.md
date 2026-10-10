# OpenClaw 生态日报 2026-10-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-10 03:49 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告



---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态 · 横向对比分析报告
**统计周期：2026-10-09 ~ 2026-10-10**

---

## 1. 生态全景

当前生态呈现明显的**三层分化**：头部项目（NanoBot、Hermes Agent、CoPaw、ZeroClaw）单日处理 40–50 条 Issue/PR，处于**高强度并发迭代**阶段；腰部项目（NanoClaw、LobsterAI、PicoClaw）以**版本收敛与稳定性收尾**为主线，单日交付 5–9 条 PR；而 NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw 等多个项目**连续 24 小时零活动**，反映出"项目名高度同质化但资源严重分散"的格局。从功能演进方向看，**模型/Provider 兼容、多实例部署、Windows 桌面稳定性、Skills/插件缓存、安全披露**已成为跨项目的共同主线；商业化产品（CoPaw、ZeroClaw）开始出现**自主浏览器、A2A 协议、RAG 语料**等前沿 RFC，预示 2026 Q4 将进入新一轮能力跃迁窗口。

---

## 2. 各项目活跃度对比

| 项目 | Issues 新增 | PRs 新增 | 合并/关闭率 | 今日 Release | 健康度 | 关键信号 |
|---|---|---|---|---|---|---|
| **NanoBot** | 9 | 40 | 45% | ❌ | ⭐⭐⭐⭐ 良好偏优 | P1 安全修复待合并；多实例能力补完 |
| **Hermes Agent** | 50 | 50 | ~11% | ❌ | ⭐⭐⭐ 中等 | P0 scratch 误删积压 7 天；44 条 PR 待合并 |
| **CoPaw** | 18 (8 闭) | 24 (13 闭) | ~54% | ❌ | ⭐⭐⭐⭐ 高活跃 + ⚠️ 安全 | **MCP Driver root RCE 披露（#8153）** |
| **ZeroClaw** | 26 (7 闭) | 50 (7 闭) | ~14% | ❌ | ⭐⭐⭐⭐ 稳健推进 | v0.8.6/v0.9.0 tracker 是瓶颈；Telegram 通道连续故障 |
| **NanoClaw** | 2 | 9 | 100% | ✅ **v2026.10.0**（首个 CalVer） | ⭐⭐⭐⭐ 良好 | 发布日集中收敛；43 天 Bug 积压待解 |
| **LobsterAI** | 0 | 7 (3 闭) | 43% | ❌ | ⭐⭐⭐ 中等 | Windows-only 修复日；Issues 通道疑似失灵 |
| **PicoClaw** | 5 | 6 (5 全 1 stale) | 83% | ❌ | ⭐⭐⭐ 维护期 | 实质功能停滞；路线图 Issue #293 搁置 8 个月 |
| **NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | — | ❌ | ⭐ 休眠 | 24h 无任何活动 |
| **OpenClaw（参照）** | — | — | — | — | — | 本期数据缺失（详见 §3） |

---

## 3. OpenClaw 在生态中的定位

> ⚠️ **数据说明**：本期 OpenClaw 主仓库摘要为空，无法直接对其健康度作横向打分。从可观测的二级证据（主要是 LobsterAI 项目中作为子模块被引用）可推断 OpenClaw 当前**已作为底层引擎/网关**被商业化产品集成。

**可推断的定位**：

- **角色**：被 LobsterAI 等桌面端产品作为 OpenClaw engine / 子进程使用，定位偏**嵌入式 runtime**，而非独立终端产品。
- **与同类对比**：
  - vs. **CoPaw/ZeroClaw**：OpenClaw 走"被集成"路线，CoPaw/ZeroClaw 走"完整产品+开放插件"路线，覆盖面更广但耦合度更低。
  - vs. **NanoBot**：NanoBot 在多实例、Provider 显式化、模型 API 描述化上推进更快（PR #5204、#6126、#6128、#1767），OpenClaw 在数据缺失期间需关注是否被这些能力反超。
- **社区规模**：因数据不可见，无法准确量化；**建议优先恢复 OpenClaw 主仓库的采集通道**，否则横向对比的基准参考将失效。
- **技术路线差异**：从 LobsterAI 修复（Windows loopback、配置锁回收、task admission）可推断 OpenClaw 采用 **本地 daemon + IPC 网关**架构，与 ZeroClaw（gateway 分离）的方向趋同，但成熟度待验证。

---

## 4. 共同关注的技术方向

### 4.1 模型 / Provider 兼容性扩展
- **NanoBot**：GPT-6 通道（#5898）、OpenAI Responses 路由（#5896）、Z.AI、Vertex AI（PR #5955）、CoreWeave（PR #6103）
- **CoPaw**：opencode go `MissingSessionID`（#7599）、OpenAI Responses 流式中断（#8162）
- **ZeroClaw**：OpenRouter 成本归零（#11204）
- **诉求**：用户对"能跑最新模型"的优先级显著高于新功能，**模型/Provider 适配是各项目的第一战场**。

### 4.2 多实例与部署灵活性
- **NanoBot**：`NANOBOT_HOME` 跨平台统一（PR #6126、#6128、#1767 联动）
- **PicoClaw**：Nginx 反向代理子路径挂载（#3415）
- **Hermes Agent**：Provider 入口点导入顺序（#110084）、scoped read overlay（PR #135948）
- **诉求**：从"单实例开发机"走向"多租户 / 多端生产部署"。

### 4.3 Windows 平台稳定性
- **LobsterAI**：防火墙 loopback 阻断（PR #2817）、配置锁死（PR #2819）、剪贴板权限（PR #2822）
- **NanoBot**：`NANOBOT_HOME` Windows 端忽略（#1739 → 已修）
- **Hermes Agent**：Windows `.git` 失控增长（#131444，7h 180 GiB）
- **CoPaw**：qwenpaw-creator Windows 长路径自锁（#8163）
- **诉求**：**Windows 已成事实上的桌面端主战场**，但稳定度仍是系统性短板。

### 4.4 Skills / 插件系统缓存与扫描
- **Hermes Agent**：skills 提示 LRU 不感知内容变化（#43282、#60258 已闭环）
- **Hermes Agent**：skills_guard 误报严重（#37036 已积压 131 天）
- **ZeroClaw**：deferred_builtin_tools + tool_search（PR #11473）
- **诉求**：插件/技能生态从"能用"升级为"可信、可缓存、可治理"。

### 4.5 安全公告与披露
- **CoPaw**：MCP Driver 配置接口 → root RCE + 挖矿木马植入（#8153，P0，含完整 IOC）
- **Hermes Agent**：`uv.lock` 钉住 `multidict 6.7.1`（CVE-2026-104874，#135795）
- **ZeroClaw**：skill HTTP DNS resolver deadline 修复（#10550，闭合 #10369 安全漏洞面）
- **LobsterAI**：OpenClaw 0 字节配置锁导致的恢复风暴（#2819）
- **诉求**：**当 Agent 持有 root/local daemon 权限后，安全披露从"理论"走向"实战"**，Triage 速度需提升。

### 4.6 成本核算与可观测性
- **ZeroClaw**：OpenRouter/Gemini 成本归零（#11204、#11613）、`CostTracker.session_id` 修复（#10700 ✅）
- **ZeroClaw**：超大图按批淘汰保 cache 命中（#11166 ✅）
- **诉求**：商业用户对"$0.00 + 所有 token 都标为 free tok"零容忍，成本透明度已成 dashboard 刚需。

---

## 5. 差异化定位分析

| 维度 | NanoBot | Hermes Agent | CoPaw | ZeroClaw | NanoClaw | LobsterAI | PicoClaw |
|---|---|---|---|---|---|---|---|
| **核心定位** | 多 Provider 多通道 runtime | Agent OS / 长期服务 | 完整桌面产品 + 插件市场 | 多智能体互操作 runtime | 频道适配器 / 桌面伴随 | Windows 桌面端 AI 助手 | 轻量级对话代理（Go） |
| **目标用户** | 中小工程化用户 | 长期运行 / 集群部署 | 终端消费者 + 创作者 | 开发者 + 企业 | Slack/Telegram/QQ 频道 | 中文桌面用户 | CLI / 移动端用户 |
| **架构特征** | CLI + 配置驱动 + Provider 模型化 | daemon + gateway + plugin | Electron + QwenPaw 引擎 | runtime + gateway 分离（v0.9.0）+ ZeroCode TUI | release channel（CalVer） | Electron + OpenClaw 子进程 | 单二进制 Go agent |
| **活跃组件** | cli / config / models | cli / gateway / plugins / skills | console / media / agents / settings | root / channels / MCP / cost / RAG | host / CLI / drivers / setup | main / openclaw / desktop-companion / renderer | 仅依赖治理 |
| **商业化痕迹** | 低 | 中（Hermes Agent Desktop） | 高（QwenPaw Creator） | 中（Cloud / Enterprise） | 中 | 高（网易有道） | 低 |
| **核心痛点** | P1 安全修复待合并 | P0 scratch 误删 + 44 PR 积压 | MCP RCE 披露 + 长路径自锁 | Telegram 通道 + TUI 体验 | 43 天 Bug 无 comment | Issues 通道疑似失灵 | 路线图 8 月未落地 |

---

## 6. 社区热度与成熟度

### 🔥 快速迭代层（每日 PR ≥ 24，活跃贡献者 ≥ 5）
- **CoPaw** — 18 Issues / 24 PRs / 双 PR 协同修复（#8149 + #7996），是当日合并密度最高的项目；但安全披露与 P0 数据完整性 Bug 需立即响应。
- **ZeroClaw** — 26 Issues / 50 PRs / 9+ 不同贡献者，无单点依赖，是**生态中最健康的协作型项目**。
- **NanoBot** — 40 PRs / 18 关闭 / 45% 合并率，多维护者"成对提交"模式成熟，但 P1 安全修复（PR #5536）仍待合并。
- **Hermes Agent** — 50 Issues / 50 PRs，但合并率仅 11%，**积压压力（44 PR 待合并）已是项目最大风险**。

### 🛠️ 质量巩固层
- **NanoClaw** — 发布日 9/9 PR 全合并，典型"快照 + 收敛"节奏；首个 CalVer 版本切换体现治理升级。
- **LobsterAI** — 3/7 PR 合并且均为高价值修复（Windows loopback / 配置锁 / 翻译卡片），但 Issues 零活动需警惕 Triage 失灵。

### 🌙 维护期 / 休眠层
- **PicoClaw** — 仅依赖治理活跃，实质功能停滞；路线图 #293 搁置 8 个月。
- **NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw** — 24h 零活动，建议合并方考虑资源整合或明确归档。

### 成熟度梯度总结
> 头部项目（ZeroClaw / NanoBot）已进入**RFC 驱动的能力跃迁期**（A2A、RAG、search_routes），中部项目（NanoClaw / LobsterAI / CoPaw）处于**稳定性 + UX 收尾期**，尾部项目（Claw 命名同质化集群）多数已**实质性停滞**。生态资源向头部集中的趋势在 2026 Q4 大概率加剧。

---

## 7. 值得关注的趋势信号

### 7.1 自主浏览器操作成为"下一代 Agent"的兵家必争之地
- **PicoClaw #293**（8 👍，高优路线图，8 个月未落地）
- **ZeroClaw #9091**（computer-use 工具 + macOS/Linux/Win 原生驱动，2026-07-15 起长期挂起）
- 竞品锚点：Anthropic Computer Use、OpenAI Operator
- **对开发者的参考价值**：若 2026 Q4 仍未交付，社区方案将与商业方案拉开代差，建议优先评估 headless + vision-based 双路径。

### 7.2 A2A（Agent-to-Agent）协议 crate 化
- **ZeroClaw RFC #11254**：`zeroclaw-a2a` crate — 把客户端 + 发现面封装为独立可发布 crate
- **Hermes Agent kanban dispatcher #119070**：调度层

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026 年 10 月 10 日

> 数据周期：过去 24 小时｜样本仓库：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日呈现**高吞吐、高自洽**的迭代节奏：Issues 端 9 条变更中 6 条已闭环，PR 端 40 条变更中 18 条已落地或关闭，合并/关闭率达 **45%**。活跃贡献者集中在 chengyongru、gianfrancodemarco 等数位核心维护者身上，呈现明显的「成对提交」（PR 与对应 Issue 同日开闭）模式，反映仓库响应链成熟。安全与稳定性侧有 1 个 P1 级修复（PR #5536，沙箱缺失时 fail-closed）仍处于待合并状态，需维护者重点关注。整体项目健康度评估：**良好偏优**，但 P1/P2 长尾积压有所抬头。

---

## 2. 版本发布

🚫 **今日无新版本发布**。

最近一次可见版本仍为 v0.3.5（参见已关闭 Issue [#5898](https://github.com/HKUDS/nanobot/issues/5898)、[#6085](https://github.com/HKUDS/nanobot/issues/6085) 中对该版本的引用）。多个 P2 修复（如 PR #6132 DeepSeek effort 归一化、PR #6127 WhatsApp 时间戳归一化）尚未进入发布流程。

---

## 3. 项目进展

今日合并/关闭的 PR 主要推进了三条主线：

### 🔧 多实例与配置能力补完
- **PR [#6128](https://github.com/HKUDS/nanobot/pull/6128)** `feat(cli): add --home instance directory selector` — 新增全局 `--home` 参数以选择实例目录，使 `nanobot --home ~/.nanobot-work onboard` 可独立初始化配置和工作区，与多实例文档协同。
- **PR [#6126](https://github.com/HKUDS/nanobot/pull/6126)** `fix(config): honor NANOBOT_HOME for default config and workspace` — 让配置发现与默认工作区路径识别 `NANOBOT_HOME`，并补全 Windows CMD/PowerShell 示例文档。
- **PR [#1767](https://github.com/HKUDS/nanobot/pull/1767)** `fix: respect NANOBOT_HOME environment variable for multi-instance support` — 修复 Windows 端 `NANOBOT_HOME` 被忽略导致多实例端口冲突的老问题（[#1739](https://github.com/HKUDS/nanobot/issues/1739) 自 2026-03 起悬而未决，今日一并解决）。

### 📐 模型 API 描述与提供者模型化
- **PR [#5204](https://github.com/HKUDS/nanobot/pull/5204)** `feat(models): declare request APIs for providers and presets` — 让 provider 连接与模型预设显式声明可调用的请求 API（Chat Completions / Responses / Anthropic Messages），从根源消除「Responses-only 模型误发到 Chat Completions」类错误，为后续 Vertex AI、CoreWeave 等新 provider 铺路。

### 🧹 测试与文档卫生
- **PR [#6130](https://github.com/HKUDS/nanobot/pull/6130)** 重命名 11 个测试函数与 6 个测试类以匹配断言语义，包括 OpenAICompatProvider 套件从 `test_litellm_kwargs.py` 迁至 `test_openai_compat.py`。
- **PR [#6131](https://github.com/HKUDS/nanobot/pull/6131)** 移除 **58 个文件、2,282 处**手工换行，统一为单源行段落。
- **PR [#6129](https://github.com/HKUDS/nanobot/pull/6129)** 刷新大量过时注释/docstring，覆盖外部 session 存储、WebUI 转写、媒体路径、DDGS 请求、typed progress 事件等。

> **综合评估**：今日合并成果使仓库向「多实例可用、API 显式化、文档自动化」迈出扎实一步，且全部以小颗粒 PR 形式独立审查，对主干稳定性影响可控。

---

## 4. 社区热点

评论数与争议性两条线索分别由以下条目占据：

| 排名 | 条目 | 评论数 | 关注点 |
|---|---|---|---|
| 1 | [Issue #5898](https://github.com/HKUDS/nanobot/issues/5898) — GPT-6 模型在 GitHub Copilot 通道下不可用 | **4** | 新版本模型兼容性 |
| 2 | [Issue #1739](https://github.com/HKUDS/nanobot/issues/1739) — Windows 多实例 `NANOBOT_HOME` 被忽略 | **2** | 多平台部署可行性 |
| 3 | [Issue #5896](https://github.com/HKUDS/nanobot/issues/5896) — opencode_go 需要 OpenAI Responses 路由 | **1** | 第三方网关协议适配 |

**诉求解读**：
- **模型/Provider 适配**类话题占主导（GPT-6、OpenAI Responses、Z.AI、Vertex AI、CoreWeave），社区对「能跑新模型」的优先级显著高于新功能。
- **平台兼容性**紧随其后：Windows 多实例、WhatsApp/QQ/Telegram 渠道多端一致性是当前用户实际部署的痛点。
- 👍 计数普遍为 0，说明 NanoBot 仍以中小规模工程化用户为主，反馈偏 B2D（Bug-to-Developer）而非社区投票驱动。

---

## 5. Bug 与稳定性

按实际影响范围排序：

| # | 编号（链接） | 问题 | 严重度 | 修复状态 |
|---|---|---|---|---|
| 1 | [#6085](https://github.com/HKUDS/nanobot/issues/6085) | DeepSeek 开启 `web_search` 后 LLM 调用全渠道不可用 | **🔴 Critical** | 已关闭（**未见对应修复 PR**） |
| 2 | [#6122](https://github.com/HKUDS/nanobot/issues/6122) | DeepSeek `reasoning_effort="minimal"` 同时下发 `thinking.type="disabled"`，与官方语义冲突 | 🟠 High | ✅ [PR #6132](https://github.com/HKUDS/nanobot/pull/6132) 在途 |
| 3 | [#6120](https://github.com/HKUDS/nanobot/issues/6120) | WhatsApp 重放过滤器失效：neonize `Timestamp` 为毫秒，但与 `time.time()`（秒）比较，老消息永不丢弃 | 🟠 High | ✅ [PR #6127](https://github.com/HKUDS/nanobot/pull/6127) 已修复（边界处转为秒） |
| 4 | [#1739](https://github.com/HKUDS/nanobot/issues/1739) | Windows `NANOBOT_HOME` 被忽略，多实例 Telegram token 冲突 | 🟡 Medium | ✅ [PR #6126](https://github.com/HKUDS/nanobot/pull/6126) + [#1767](https://github.com/HKUDS/nanobot/pull/1767) 双重修复 |
| 5 | [#6006](https://github.com/HKUDS/nanobot/issues/6006) | QQ 引用消息内容未传给 agent，依赖上下文的追问无法回答 | 🟡 Medium | 已关闭（**未见对应修复 PR**） |
| 6 | [#6123](https://github.com/HKUDS/nanobot/issues/6123) | Telegram 把 `card.jpg?width=672` 当作 jpg 文档而非图片 | 🟢 Low | ✅ [PR #6124](https://github.com/HKUDS/nanobot/pull/6124) 在途 |
| 7 | [#5898](https://github.com/HKUDS/nanobot/issues/5898) | v0.3.5 不支持通过 GitHub Copilot 调用 GPT-6 系列 | 🟢 Low | 已关闭（**未见对应修复 PR**） |
| 8 | [#5896](https://github.com/HKUDS/nanobot/issues/5896) | 网关 `/chat/completions` 对 muse-spark 模型返回 500 | 🟢 Low | 已关闭（**未见对应修复 PR**） |

> ⚠️ **重点提示**：DeepSeek `web_search` 全渠道不可用（#6085）虽已 close 但无修复提交，建议维护者确认是否由 provider 层修复或关闭判断是否正确——若用户实际仍受影响，应重新打开。

---

## 6. 功能请求与路线图信号

今日明确的功能请求集中在 **Telegram 体验增强** 与 **新 Provider 接入**两条线：

| 需求 | 编号（链接） | 实现状态 | 路线图可能性 |
|---|---|---|---|
| Telegram 连续图片以 Album 形式发送 | [Issue #6121](https://github.com/HKUDS/nanobot/issues/6121) | ✅ 已由 [PR #6125](https://github.com/HKUDS/nanobot/pull/6125) 实现（待合并） | **极高**，PR 已就绪 |
| 通过 Vertex AI 运行 Claude 模型 | [PR #5955](https://github.com/HKUDS/nanobot/pull/5955) | 🟡 待合并（冲突） | **高**，与企业 GCP 用户群契合 |
| 通过 CoreWeave Inference 提供自定义 OpenAI 兼容端点示例 | [PR #6103](https://github.com/HKUDS/nanobot/pull/6103) | 🟡 待合并（文档）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-10-10** · 数据来源：GitHub Issues / Pull Requests

---

## 1. 今日速览

Hermes Agent 仓库过去 24 小时内 Issue 与 PR 各刷新 50 条，整体仍处于**高活跃、多线索并发**状态：以 bug 报告和安装/更新兼容性问题为主导，cli/gateway/plugins 三大组件的报告密度最高。社区活跃度高，但值得注意的是 **P0 级 bug #132401（scratch 静默销毁）已积攒 20 条评论、跨 7 天未解**，多个 P1 级更新失败类问题也缺乏对应修复 PR。无新版本发布，今日合并/关闭量偏低（仅 5 个 Issue、6 个 PR 关闭），需关注**待合并 PR 44 条的积压压力**。

---

## 2. 版本发布

本周期内无新 Releases 发布。

---

## 3. 项目进展

**今日关闭的 Issue（5 条）**

| 编号 | 标题 | 意义 |
|---|---|---|
| [#43282](https://github.com/NousResearch/hermes-agent/issues/43282) | skills 系统提示的 LRU 缓存不感知 SKILL.md 内容变化 | 缓存 key 增加指纹，将消除长进程中技能提示"脏读"问题 |
| [#60258](https://github.com/NousResearch/hermes-agent/issues/60258) | 长进程中 external_dirs 的 skills 索引不刷新 | 与 #43282 同一根因闭环，是缓存修复的"孪生单" |
| [#132631](https://github.com/NousResearch/hermes-agent/issues/132631) | nemo-relay 在 musl/aarch64 上 SIGSEGV | 0.9.x 回归修复，使 musl/postmarketOS 主机恢复可用 |

**今日关闭的 PR（6 条）**

由于评论数均未公开列出，且多为小补丁式合并（如文档补全、单点行为修复），未形成显著可见的特性交付。

**整体进展评估**：本日落地修复集中在 **skills 提示缓存**与 **musl/aarch64 崩溃**两类问题，前者影响日常 agent 体验，后者影响边缘平台可用性，但升级/安装类（占 Issue 大头）与 gateway 状态机类（占 PR 大头）的关键修复尚未在主干落地。

---

## 4. 社区热点

**讨论最热的 Issues（按评论数排序）**

1. [#132401（20 评论 · P0）](https://github.com/NousResearch/hermes-agent/issues/132401) — `scratch prune` 24h 静默删除 TMPDIR 中的多日 agent 工作，无日志、无隔离、无 keep-marker。这是本期最严重的痛点，**直接影响 Agent 多日跨会话任务的可靠性与可恢复性**。
2. [#131859（18 评论 · P2）](https://github.com/NousResearch/hermes-agent/issues/131859) — 外部 fork 通过 API 创建 PR 时反复出现 `CreatePullRequest` 权限错误，社区工作流受阻。
3. [#119070（14 评论 · P3）](https://github.com/NousResearch/hermes-agent/issues/119070) — kanban dispatcher 因 `blocker_auth` 永远不复用已成功重试的卡片，阻塞 reviewer 调度。
4. [#125437（13 评论 · P1）](https://github.com/NousResearch/hermes-agent/issues/125437) — 失败更新留下半应用安装、无可执行修复路径，集群性痛点（15 条 Discord 求助）。

**最被点赞的 Issue**

- [#50798](https://github.com/NousResearch/hermes-agent/issues/50798)（3 👍）— docker-compose 自托管下 sandbox skill 与缓存 bind-mount 为空，是部署层确认面广的实际场景。
- [#134127](https://github.com/NousResearch/hermes-agent/issues/134127)（3 👍）— solstice provider 因缺 httpx 启动失败，影响 0.x→main 升级路径。

**热点诉求分析**：底层信号集中在三个方向——**(a) agent 工作持久性可信度**（scratch 删除、cache 失效）、**(b) 更新/安装的可观察性与可恢复性**（半应用、日志噪音）、**(c) 调度与权限边界的正确性**（kanban retry、PR 权限、skills 扫描误报）。三条线索均反映"用户在更把 Hermes 当成长期服务来依赖"。

---

## 5. Bug 与稳定性

**P0（紧急）**

- [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) — scratch prune 静默销毁多日 agent 工作。**暂无对应修复 PR**，建议阻止 24h 自动 prune 或保留 keep-marker 机制。

**P1（高）**

- [#125437](https://github.com/NousResearch/hermes-agent/issues/125437) — `hermes update` / Desktop updater 失败后无恢复路径。**暂无明确修复 PR**，现有 PR [#89008](https://github.com/NousResearch/hermes-agent/pull/89008)、[#89009](https://github.com/NousResearch/hermes-agent/pull/89009) 仅覆盖"fast-fail 与 systemd transient unit"两个子点。

**P2（中）**

- [#62169](https://github.com/NousResearch/hermes-agent/issues/62169) — Terminal sandbox 中 CWD 被删除后所有后续命令 exit 126。**暂无 PR**。
- [#131444](https://github.com/NousResearch/hermes-agent/issues/131444) — Windows 上 `.git` 失控增长（7 小时 180 GiB/332 packs）。**暂无 PR**。
- [#79357](https://github.com/NousResearch/hermes-agent/issues/79357) — `idle_compact_after_seconds` 在 gateway 模式下永不触发，看门狗重置与 idle 检查使用同一时间戳。
- [#132358](https://github.com/NousResearch/hermes-agent/issues/132358) — PTY 后台进程被其 setsid 子进程持有从挂起。
- [#128831](https://github.com/NousResearch/hermes-agent/issues/128831) — Termux（Android / Python 3.14）`hermes update` 拒绝 git 安装且无可用修复建议。
- [#50798](https://github.com/NousResearch/hermes-agent/issues/50798) — docker-compose 自托管下 bind-mount 源路径使用容器内 HERMES_HOME。
- [#110084](https://github.com/NousResearch/hermes-agent/issues/110084) — `load_hermes_dotenv()` 在解析前导入所有 provider 入口点。
- [#134310（已有 fix PR #134310）](https://github.com/NousResearch/hermes-agent/pull/134310) — Codex 429 未能轮换到健康的第二账户。
- [#89008（已有 fix PR #89008）](https://github.com/NousResearch/hermes-agent/pull/89008) — updater 提前崩溃导致 30 分钟轮询。
- [#89009（已有 fix PR #89009）](https://github.com/NousResearch/hermes-agent/pull/89009) — updater 留在 gateway systemd cgroup。
- [#92829（已有 fix PR #92829）](https://github.com/NousResearch/hermes-agent/pull/92829) — 非 active profile session 的"未读点"不消失。
- [#94302（已有 fix PR #94302）](https://github.com/NousResearch/hermes-agent/pull/94302) — file-sync 单文件权限失败导致整个周期卡死。
- [#100332（已有 fix PR #100332）](https://github.com/NousResearch/hermes-agent/pull/100332) — 长生命周期 gateway 出现 stale code ImportError。
- [#109599（已有 fix PR #109599）](https://github.com/NousResearch/hermes-agent/pull/109599) — `[SILENT]` 标记被原样送达 Telegram。
- [#110554（已有 fix PR #110554）](https://github.com/NousResearch/hermes-agent/pull/110554) — 工具 submit 在解释器关闭阶段崩溃。
- [#118583（已有 fix PR #118583）](https://github.com/NousResearch/hermes-agent/pull/118583) — API server 在 turn 2+ 丢失具名 provider。
- [#126916（已有 fix PR #126916）](https://github.com/NousResearch/hermes-agent/pull/126916) — checkpoints 多次解析 git env 导致 `hermes update` 长时间挂起。
- [#92127（已有 fix PR #92127）](https://github.com/NousResearch/hermes-agent/pull/92127) — 影子存储中 git lock 卡死后续 git 操作。
- [#132358](https://github.com/NousResearch/hermes-agent/issues/132358) / [#135947（已有 fix PR #135947）](https://github.com/NousResearch/hermes-agent/pull/135947) — Bot Desktop Chromium 版本被 PM 工具环境变量钉死在更低版本。

**P3（低）**

- [#119070](https://github.com/NousResearch/hermes-agent/issues/119070) — kanban 限流重试成功仍被标记 blocker_auth。
- [#37036](https://github.com/NousResearch/hermes-agent/issues/37036)、[#84672](https://github.com/NousResearch/hermes-agent/issues/84672)、[#111334](https://github.com/NousResearch/hermes-agent/issues/111334)、[#132155](https://github.com/NousResearch/hermes-agent/issues/132155) — skills/plugins 安全扫描器把安全文档当作攻击 / base64 字符碰撞误报。
- [#132814](https://github.com/NousResearch/hermes-agent/issues/132814)、[#135443](https://github.com/NousResearch/hermes-agent/issues/135443)、[#134127](https://github.com/NousResearch/hermes-agent/issues/134127) — Home Assistant 误迁移安装、solstice provider 缺 httpx。
- [#127731](https://github.com/NousResearch/hermes-agent/issues/127731) — 高频 cron 导致自动 pre-update 备份被持续跳过。
- [#99284](https://github.com/NousResearch/hermes-agent/issues/99284) — kanban assign 接受任意字符串拼写错误的 reviewer 永久不可认领。
- [#134890](https://github.com/NousResearch/hermes-agent/issues/134890) — Desktop 延迟构建因 RecursionError 失败且不留回溯。
- [#133523](https://github.com/NousResearch/hermes-agent/issues/133523) — `desktop-build-stamp.json` 永不刷新。
- [#123963](https://github.com/NousResearch/hermes-agent/issues/123963) — kanban 所有就绪卡都被 hold 时调度空转。

**安全相关**

- [#135795](https://github.com/NousResearch/hermes-agent/issues/135795) — `uv.lock` 钉住 `multidict 6.7.1`，存在 CVE-2026-104874（6.9.1 修复），应尽快 bump。

---

## 6. 功能请求与路线图信号

**已存在的功能 PR（很可能进入下一版本）**

- [#135949](https://github.com/NousResearch/hermes-agent/pull/135949)（来自维护者 teknium1）— Desktop Settings › About 新增更新渠道选择（稳定版 / 每次提交），是 Desktop 更新体验的关键 UX。
- [#135953](https://github.com/NousResearch/hermes-agent/pull/135953) — 会话恢复时模型跟随后续配置变更，解决 session 元数据误把"配置快照"当"用户意图"。
- [#135948](https://github.com/NousResearch/hermes-agent/pull/135948) — 为 `load_config_readonly()` 提供 scoped read overlay，让嵌入器能按项目维度临时覆盖只读视图。
- [#135955](https://github.com/NousResearch/hermes-agent/pull/135955) — catalog: 加入 Jet Browser 运行时校验器。
- [#66163](https://github.com/NousResearch/hermes-agent/pull/66163) — Slack slash 命令可配置命名空间前缀，解决工作区多应用冲突。

**新 Issue 中的功能诉求**

- [#135937](https://github.com/NousResearch/hermes-agent/issues/135937) — 远程优先的可恢复能力：宿主无需物理 Terminal 也能完成维护交接，与 Telegram 用户远控场景直接对接。

**路线图信号**：主线推进明显偏向 **(1) 升级/安装体验的可控性与可观察性**、（(2) Desktop 作为统一外壳的能力扩展**、（3) 多 provider / 多环境的配置可治理性**三个维度。

---

## 7. 用户反馈摘要

**真实痛点（提炼自 Issue 报告描述与讨论）**

- **"我的 agent 工作忽然没了"**——用户依赖 TMPDIR 作为多日 cross-session 暂存区，24h 删除没有任何提示。代表需求：长期 agent 运行的持久保证与可恢复语义。
- **"更新挂了我不知道怎么救"**——更新失败留下半应用安装 + 原始 Python 异常字符串，Windows / Termux / 容器自托管三类环境各有差异。代表需求：带场景感知的一键 recovery。
- **"安全扫描器把自己的安全文档挡了"**——`mksglu/context-mode`、`aws_access_key_leaked` 类 base64 字符碰撞等系列误报，安装管道需要 `--force` 或更细粒度的策略覆盖。
- **"我看不到为什么没在跑"**——kanban 所有就绪卡被 hold 时只输出"ready non-empty for N ticks"，缺少面向操作者的可观察面。
- **"远程恢复必须到主机前"**——Mac mini / 多 agent 拓扑下，本地 Terminal 依赖破坏 Telegram-first 工作流。
- **"我在 Discord 看到大家和我一样逐行手敲修复"**——15 条 Discord 求助指向 #125437，说明 issue 与社区支持之间没有回灌通道。

**满意度信号**：用户对 skills 缓存修复（#43282 / #60258 关闭）与 musl/aarch64 SIGSEGV 修复（#132631 关闭）应当有正面感受；多数开放 Issue 用户表现"克制而具体"，提供了完整复现路径与文件指针，是**高信号贡献者**。

---

## 8. 待处理积压

**长期未响应的重要 Issue（创建 > 60 天但仍 OPEN）**

- [#62169](https://github.com/NousResearch/hermes-agent/issues/62169) — 创建于 2026-07-10（92 天），P2，Terminal sandbox deleted CWD。
- [#37036](https://github.com/NousResearch/hermes-agent/issues/37036) — 创建于 2026-06-01（131 天），P2，skills_guard 12 项全为误报。

**长期未合并的 PR（创建 > 30 天仍 OPEN）**

- [#126916](https://github.com/NousResearch/hermes-agent/pull/126916) — 创建于 2026-09-28（12 天，但与 #112553 互补）。
- [#89008](https://github.com/NousResearch/hermes-agent/pull/89008)、[#89009](https://github.com/NousResearch/hermes-agent/pull/89009)、[#89008](https://github.com/NousResearch/hermes-agent/pull/89008) — 均创建于 2026-08-18（53 天），updater 失败处理关键补丁。
- [#112553](https://github.com/NousResearch/hermes-agent/pull/112553) — 创建于 2026-09-16（24 天），`hermes update` 6 个未文档化 flag 的说明。
- [#92127](https://github.com/NousResearch/hermes-agent/pull/92127) — 创建于 2026-08-22（49 天），checkpoints git lock 恢复。
- [#92829](https://github.com/NousResearch/hermes-agent/pull/92829) — 创建于 2026-08-23（48 天），Desktop unread dot 残留。
- [#94302](https://github.com/NousResearch/hermes-agent/pull/94302) — 创建于 2026-08-24（47 天），file-sync 权限失败。
- [#100332](https://github.com/NousResearch/hermes-agent/pull/100332) — 创建于 2026-09-01（39 天），stale code ImportError 兜底。
- [#109599](https://github.com/NousResearch/hermes-agent/pull/109599) — 创建于 2026-09-13（27 天），autonomous lane 强调标记的误投递。
- [#110554](https://github.com/NousResearch/hermes-agent/pull/110554) — 创建于 2026-09-

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-10-10**
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 今日整体活跃度偏低，处于**日常维护期**。过去 24 小时共有 5 条 Issue 更新和 6 条 PR 更新，其中 5 条 PR 全部由 Dependabot 自动提交的依赖升级（golang.org/x/crypto、anthropic-sdk-go、line-bot-sdk-go 等），已被批量关闭，仅剩 1 条社区贡献的实质性 PR（#3414）仍处于 Open 并标记为 stale。无新版本发布。社区侧最值得关注的是高优先级路线图 Issue #293（Autonomous Browser Operations）持续受到 8 个 👍，反映出用户对自动化浏览器能力有明确期待。整体来看，项目依赖治理保持稳定，但实质性功能推进在 24 小时内基本处于停滞状态。

---

## 2. 版本发布

🚫 今日无新版本发布。距离上一个稳定版本已有一段间隔，建议关注维护者后续是否合并 #3414 后发布补丁版本。

---

## 3. 项目进展

今日合并/关闭的 PR 全部为 Dependabot 自动发起的依赖治理更新，未涉及核心功能或重大 bug 修复：

| PR | 依赖项 | 升级跨度 |
|---|---|---|
| [#3389](https://github.com/sipeed/picoclaw/pull/3389) | golang.org/x/crypto | 0.53.0 → 0.57.0 |
| [#3388](https://github.com/sipeed/picoclaw/pull/3388) | modelcontextprotocol/go-sdk | 1.6.1 → 1.8.0 |
| [#3387](https://github.com/sipeed/picoclaw/pull/3387) | anthropics/anthropic-sdk-go | 1.55.1 → 1.74.0 |
| [#3386](https://github.com/sipeed/picoclaw/pull/3386) | maunium.net/go/mautrix | 0.27.0 → 0.31.0 |
| [#3385](https://github.com/sipeed/picoclaw/pull/3385) | line/line-bot-sdk-go/v8 | 8.20.1 → 8.22.0 |

**评估**：本次批量化升级涵盖了关键加密库与三大平台 SDK（Anthropic、Mautrix/Matrix、LINE Bot），有助于修复潜在 CVE 并保持平台兼容性，但 anthropic-sdk-go 从 1.55.1 跨至 1.74.0 跨度较大，建议关注其变更日志中是否涉及 API breaking changes。

**实质性进展**：唯一的非依赖类 PR 为社区贡献的 [#3414](https://github.com/sipeed/picoclaw/pull/3414)（wall-clock turn time budget），目前仍处于 Open 且已被标记 stale，尚未合并。今日项目在功能层面**基本无推进**。

---

## 4. 社区热点

🔥 **最活跃讨论：[Issue #293 - Feature: Autonomous Browser Operations](https://github.com/sipeed/picoclaw/issues/293)**
- 状态：OPEN，优先级 high，标记为路线图项
- 创建于 2026-02-16，今日（2026-10-10）仍在更新
- 数据：8 条评论、8 个 👍
- 内容：提议为 PicoClaw 增加浏览器自动化能力，让 AI 能像人类一样导航网页、提取数据、执行操作。讨论中提到了两条主要技术路径（推测为 headless 浏览器与 vision-based 方案）

**诉求分析**：该 Issue 长期保持高互动，反映出用户希望 PicoClaw 从单纯的对话/任务代理进化为可执行端到端网页操作的智能体。这是 AI Agent 领域的明显趋势，竞品如 Anthropic 的 Computer Use、OpenAI 的 Operator 均瞄准类似场景。该需求具备战略意义。

---

## 5. Bug 与稳定性

### 🔴 严重（已关闭）
- **[#3377 - TLS 证书过期导致 picoclaw.io 全站不可访问](https://github.com/sipeed/picoclaw/issues/3377)** — 已关闭
  - 用户 dimonb 报告项目官网 TLS 证书于 2026-09-10 过期，浏览器全面拒绝连接
  - 该问题时间敏感性强，影响所有访客。已关闭说明证书问题可能已被修复，但具体修复 PR 未在数据中明确呈现。

### 🟠 中等（待修复）
- **[#3420 - Android 构建在 CGO_ENABLED=0 下 DNS 解析失败](https://github.com/sipeed/picoclaw/issues/3420)** — OPEN
  - 错误：`dial udp 127.0.0.1:53: connect: connection refused`
  - 影响：官方 Android 构建中的 gateway 完全无法访问外部 API 端点（如 `/models` 接口）
  - 状态：无评论、无关联修复 PR
  - 评估：这是一个**回归性严重 bug**，直接影响 Android 端产品的可用性，优先级应被提升

### 🟢 已修复
- **[#3391 - Pico 客户端多行输入被自动拆分为多条消息](https://github.com/sipeed/picoclaw/issues/3391)** — 已关闭
  - 用户在移动端 TUI 粘贴诗歌、代码块等多行内容时，picoclaw 按换行符自动切分，破坏了原始消息结构
  - 已关闭，建议维护者在 Release Notes 中明确该修复版本

---

## 6. 功能请求与路线图信号

### 路线图级需求
**[#293 - Autonomous Browser Operations](https://github.com/sipeed/picoclaw/issues/293)** — 高优先级，标记为 roadmap，社区反响强烈（8 👍）。若路线图在 2026 Q4 推进，浏览器自动化有望成为下一里程碑版本的核心特性。

### 部署灵活性需求
**[#3415 - 支持 Nginx 反向代理挂载到子路径（如 /pico/）](https://github.com/sipeed/picoclaw/issues/3415)** — OPEN
- 用户希望将 Web Console 部署在子路径而非根路径，避免占用域名根
- 当前前端/后端部分路径硬编码（如 `/api`、`/pico/ws`），导致无法在 Nginx 层简单实现
- 建议方案：为 Web Launcher 增加可选启动参数，支持自定义 base path
- **可纳入下一版本**：实现成本相对可控，且对企业用户的部署灵活性有显著价值

### 代理可控性需求
**[#3414 - feat(agent): add wall-clock turn time budget](https://github.com/sipeed/picoclaw/pull/3414)** — OPEN（stale）
- 新增 `agents.defaults.turn_time_budget_seconds` 配置，超时后强制 agent 输出已完成工作的简明总结，避免无限循环
- 默认值为 0（禁用），属于**向后兼容的可选配置**
- 标记为 stale 说明维护者一段时间未回应，建议社区贡献者 ping 维护者跟进 review

---

## 7. 用户反馈摘要

| 用户痛点 | 关联 Issue | 满意度信号 |
|---|---|---|
| AI 无法在 Web 上自主完成任务 | [#293](https://github.com/sipeed/picoclaw/issues/293) | 8 👍，需求强烈 |
| 部署受限于域名根路径，集成困难 | [#3415](https://github.com/sipeed/picoclaw/issues/3415) | 0 👍，沉默多数但场景明确 |
| Android 端产品实际上不可用 | [#3420](https://github.com/sipeed/picoclaw/issues/3420) | 0 评论，可能是首发用户 |
| 移动端 TUI 多行输入被破坏 | [#3391](https://github.com/sipeed/picoclaw/issues/3391) | 已修复 |
| 项目官网因证书过期整体失联 | [#3377](https://github.com/sipeed/picoclaw/issues/3377) | 已修复 |

**典型使用场景**：用户期望 PicoClaw 不仅能在命令行/聊天中对话，还能通过 Web 反向代理集成到自有服务中（[#3415](https://github.com/sipeed/picoclaw/issues/3415)），并在移动端稳定运行 Android 客户端（[#3420](https://github.com/sipeed/picoclaw/issues/3420)）。

---

## 8. 待处理积压 ⚠️

以下 Issue/PR 已标记 `stale` 且仍处于 OPEN 状态，建议维护者重点关注：

| 编号 | 类型 | 创建日期 | 已搁置 | 备注 |
|---|---|---|---|---|
| [#3414](https://github.com/sipeed/picoclaw/pull/3414) | PR (功能) | 2026-10-01 | 9 天 | 实质性功能 PR，被遗忘风险高 |
| [#3415](https://github.com/sipeed/picoclaw/issues/3415) | Issue (功能) | 2026-10-02 | 8 天 | 部署场景明确，方案已提 |
| [#3420](https://github.com/sipeed/picoclaw/issues/3420) | Issue (Bug) | 2026-10-09 | 1 天 | Android 严重回归，无修复 PR |
| [#293](https://github.com/sipeed/picoclaw/issues/293) | Issue (路线图) | 2026-02-16 | 8 个月 | 高优先级路线图项，仍在讨论阶段未落地 |

**健康度提醒**：
- 路线图级 Issue #293 已讨论 8 个月仍未进入实施阶段，可能反映出维护资源紧张或优先级判断分歧
- #3420 影响 Android 平台核心功能，建议在下一补丁版本中优先修复
- 建议维护者清理或重新激活 stale 标记，避免 PR #3414 这类有价值的社区贡献流失

---

**📊 今日健康度评估**：⭐⭐⭐☆☆（3/5）
- 依赖治理活跃 ✅
- 实质功能推进停滞 ⚠️
- 关键 Bug 待修（Android）⚠️
- 路线图项长期搁置 ⚠️
- 社区贡献响应偏慢 ⚠️

*本日报由 AI 自动生成，数据来源：GitHub REST API 抓取时间窗口 2026-10-09 ~ 2026-10-10。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-10-10

> 数据来源：GitHub Issues / Pull Requests / Releases（nanocoai/nanoclaw）
> 统计窗口：过去 24 小时

---

## 1. 今日速览

NanoClaw 今日发布了首个 CalVer 版本 **v2026.10.0**，是项目版本管理的一次重大范式切换（更新通道由 `main` tip 改为已发布 release）。伴随版本发布，单日合入 **9 个 PR**，几乎全部由核心维护者 `glifocat` 提交，集中修复了一批 host 启动、CLI 解析、Skill 安装流程上的稳健性问题，整体呈现"发布日集中收敛"的典型节奏。社区侧信号偏弱：2 条新 Issue 仅获得 3 条评论、0 个 👍；但需关注 1 条 **已开 43 天的 Telegram 投递 Bug** 与 2 条 **已开 30 天的 WhatsApp PR** 长期处于 OPEN 状态，存在积压风险。项目当前健康度评估：**良好偏稳健，发布质量与维护活跃度高，社区互动反馈通道偏冷清**。

---

## 2. 版本发布

### 🚀 v2026.10.0（首个 CalVer 稳定版）

- **发布人**：glifocat（[PR #4065](https://github.com/nanocoai/nanoclaw/pull/4065)）
- **发布时间**：2026-10-09
- **关键变更**：
  - **版本号格式切换**：从语义化版本切换到 **CalVer（`YYYY.MM.MINOR`）**，本次即首份稳定 release。
  - **更新机制变更（核心行为变更）**： `/update-nanoclaw` 默认安装的版本从 `main` 切到 **已发布的 release**。此前用户安装的会是 `main` 最新 commit，现在会跟随 release 节奏（如 `[官方尾注: The description is truncated...]`）
  - 已经在 `beta` 通道以 `2026.10.0-rc.1` 和 `2026.10.0-rc.2` 完成两次预发布测试，正式版基于 rc.2 升级。
- **破坏性 / 兼容性影响**：
  - **升级路径变更**：从 `main` 跟踪模式升级到 release 跟踪模式，需要用户重置/迁移 `nanoclaw` 的更新配置。
  - **CalVer 命名**：自动化脚本、Cron、CI 引用版本号的地方需要适配新格式。
- **迁移注意事项**：
  - 使用 `/update-nanoclaw` 默认会装到 `v2026.10.0`，不再跟随 `main` 滚动更新。beta 体验用户需要主动切回 stable。
  - `package.json` 字段 `2026.10.0-rc.2 → 2026.10.0`。
  - CHANGELOG `## [Unreleased]` 折叠为 `## [2026.10.0] - 2026-10-09`。

---

## 3. 项目进展（今日合并/关闭的 PR）

今日 9 个 PR 合并，整体推进集中在**健壮性收敛**方向，约 75% 来自 `glifocat` 的批量修复。

| PR | 标题 | 主题 | 价值评估 |
|---|---|---|---|
| [#4065](https://github.com/nanocoai/nanoclaw/pull/4065) | chore(release): v2026.10.0 | 版本发布 | ⭐ 关键里程碑 |
| [#4063](https://github.com/nanocoai/nanoclaw/pull/4063) | fix(host): 用描述符打开 session/skill/run-log 目录 | 引入 `src/anchored-dir.ts` 一次性打开目录 | ⭐ 显著提升多 skill 并发下的 host 稳定性 |
| [#4062](https://github.com/nanocoai/nanoclaw/pull/4062) | fix(commands): gate 与 runner 共享 slash-command 解析器 | 统一解析语义（`/name@botname` 等） | ⭐ 消除命令识别分裂 |
| [#4061](https://github.com/nanocoai/nanoclaw/pull/4061) | fix(cli): ncl 参数归一化下沉到 dispatch | `crud.ts` → `src/cli/arg-normalize.ts` | 修复连字符/下划线参数漂移 |
| [#4060](https://github.com/nanocoai/nanoclaw/pull/4060) | fix(add-mattermost): 检查 owner 查找结果 | 校验 Mattermost user ID 合法性 | 改善 skill 安装失败的可观测性 |
| [#4059](https://github.com/nanocoai/nanoclaw/pull/4059) | fix(setup): OneCLI 安装器使用完整 URL + 显式 curl 选项 | 防御性安装步骤 | 减少安装失败 |
| [#4052](https://github.com/nanocoai/nanoclaw/pull/4052) | fix(add-dial-tool): 在 OneCLI 1.42 上切到 policy API | 兼容 gateway `410` 中间件 | 关键 skill 兼容性回退 |
| [#4064](https://github.com/nanocoai/nanoclaw/pull/4064) | test(drivers): 保留 fs stub 的 fs.constants | 修复 driver 测试因 `anchored-dir` 加载失败 | 配合 #4063 的测试修补 |
| [#4066](https://github.com/nanocoai/nanoclaw/pull/4066) | build(deps): source-map-js 1.2.1 → 1.2.2 | 依赖修复（崩溃修复） | 维护性 bump |

**整体进度评估**：今天不是新功能推进的一天，而是"把刀磨利"的一天——主要清理了 host/CLI/skill 安装链路上一批**一致性、健壮性、可观测性**的问题。配合 v2026.10.0 的发布，是一次典型的"版本快照 + 临界问题清理"组合。

---

## 4. 社区热点

今日社区互动强度偏低。

- **评论数最多**：[Issue #3569](https://github.com/nanocoai/nanoclaw/issues/3569)（2 条评论），但 ⚠️ 这是 43 天前开的 Bug。
- **评论数次之**：[Issue #4068](https://github.com/nanocoai/nanoclaw/issues/4068)（1 条评论）。
- **所有今日 Issues/PRs 的 👍 总数为 0**，缺乏社区表态信号。
- **PR 端**：今日 PR 全部 0 评论。

**分析**：项目治理明显以维护者驱动（`glifocat` 单日合入 8 条），社区尚未形成活跃的 review/discussion 习惯。这种模式在小型/早期项目属正常，但需要警惕"单点维护"风险——一旦 `glifocat` 缺席，PR 通道几乎停滞（见第 8 节积压）。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 是否已有 fix PR | 影响面 |
|---|---|---|---|---|
| 🔴 高 | [#3569](https://github.com/nanocoai/nanoclaw/issues/3569) | Telegram 含**奇数个未转义 MarkdownV2 标记**的消息永远无法投递 | ❌ 无 fix PR | **所有** Telegram 适配器用户（`@chat-adapter/telegram@4.29.0`），上游已在 4.32.0 修复，trunk 仍 pin 在 4.29.0 |
| 🟡 中 | [#4068](https://github.com/nanocoai/nanoclaw/issues/4068) | OneCLI gateway @1.42 无法拿到 Google Docs `auth/drive` scope，限制为 `drive.file` + `drive.readonly` | ❌ 无 fix PR | 任何需要 Google Docs **可写** 接入的部署 |
| 🟢 低（已修复） | [#4066](https://github.com/nanocoai/nanoclaw/pull/4066) | `source-map-js` 旧版本存在崩溃 | ✅ 已合并 | JS 运行时稳定性 |

**关注点**：
- **#3569 是当前最严重的未修复 Bug**：影响所有 Telegram 用户，根因明确（chat-adapter 落后 3 个版本），修法也很直接（升级 pin）。但 43 天仍未推进，可能是维护者权衡"上游版本升级带来的回归风险"——但缺少任何 comment 解释进展，让用户处于信息真空状态。
- **#4068 与 #4052 形成联动**：`#4052` 已通过 policy API 暂时绕开 OneCLI 1.42 的 legacy 限制，但 **Google Docs 可写 scope 的根本解决仍需升级 OneCLI gateway**。两个 Issue 互相牵扯。

---

## 6. 功能请求与路线图信号

| 需求 | Issue / PR | 推进概率判断 |
|---|---|---|
| 支持 **OneCLI 2.x gateway**（解锁 Google Docs 编辑 scope） | [#4068](https://github.com/nanocoai/nanoclaw/issues/4068) | 🟢 **高** — 与 #4052 的"policy API 绕路"互为接力，是同一个工作流的下一阶段；预计会作为下个版本（v2026.11.x）的 capability 项 |
| WhatsApp 频道：**忽略 `@newsletter` JID 入站消息** | [#3751](https://github.com/nanocoai/nanoclaw/pull/3751) | 🟡 中 — 已被打开 30 天未合并，但 PR 自带描述清晰，可能在评审/重测中 |
| WhatsApp 频道：**保留 chat 中所有 pending question 的可回答性** | [#3752](https://github.com/nanocoai/nanoclaw/pull/3752) | 🟡 中 — 同 #3751，作者 `horsehcj`，仍 OPEN |

**路线图推测**：v2026.10.0 已锁版。下一版本（v2026.11.0）的最可能落点：
1. OneCLI 2.x gateway 支持（解锁 Google Docs write）
2. WhatsApp 边界处理 PRs（#3751 / #3752）若测试通过

---

## 7. 用户反馈摘要

今日可提取的"真实用户反馈"信号极少，仅来自以下片段：

- **#3569（shachartal）**：用户场景是 Telegram 上的 URL/链接消息无法投递，且报告**所有**含奇数个 `_`/`*`/`~`/`` ` `` 的消息都受影响——意味着这是用户**日常高频**遭遇的问题，而不仅仅是个例。措辞含 "permanently fails"，可见已尝试多次仍无解。**痛点等级：高，挫败感强**。
- **#4068（Philabuster）**：用户场景是希望通过 NanoClaw 让 AI 编辑 Google Docs，但当前 OneCLI 1.42 gateway 只能拿只读 scope。属于**能力受限型**反馈，而非故障。

**满意度信号**：缺失——所有今日 Issue/PR 点赞数为 0，无法直接判断社区整体满意度。维护者侧（`glifocat` 高频合入）显示维护侧满意度高。

---

## 8. 待处理积压（提醒维护者）

| 链接 | 类型 | OPEN 天数 | 风险点 |
|---|---|---|---|
| [#3569](https://github.com/nanocoai/nanoclaw/issues/3569) | Bug | **43 天** | 影响所有 Telegram 用户；修法明确（升级 `@chat-adapter/telegram` pin），但维护者未留任何进度 comment；**建议至少留 comment 说明为何不立即 bump**，避免用户重复报 |
| [#3751](https://github.com/nanocoai/nanoclaw/pull/3751) | PR | **30 天** | 外部贡献者 `horsehcj` 提交，WhatsApp 入站过滤；评审停滞 |
| [#3752](https://github.com/nanocoai/nanoclaw/pull/3752

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 — 2026-10-10

---

## 1. 今日速览

LobsterAI 项目今日呈现"修复集中、维护优先"的状态：过去 24 小时内 Issues 零活动，但 PR 通道活跃，共出现 7 条 Pull Request（4 条仍待合并，3 条已关闭）。当日开发主题高度集中于 **Windows 平台稳定性**——3 条已关闭 PR 中有 2 条直接源于 Windows 用户的现场问题反馈（防火墙阻断、配置锁死锁）。整体活跃度评估为**中等**：代码侧变更频密，但没有新的版本发布，也无外部用户主动开起 Issue。链路方向上，OpenClaw 引擎与 Electron 主进程成为本次迭代的重点关注对象。

---

## 2. 版本发布

今日 **无新版本发布**。仓库当前没有新的 Release tag，PR 中的功能改动（如 Atlas Cloud provider、Desktop Companion 翻译/朗读卡片）尚未合入发布轨道。

---

## 3. 项目进展

今日共有 **3 条 PR 被关闭**（均为 fix / feat 类合并），主要集中在 Windows 兼容性与桌面端体验：

| PR | 标题 | 类型 | 影响面 |
|---|---|---|---|
| [#2817](https://github.com/netease-youdao/LobsterAI/pull/2817) | fix(openclaw): 放行 Windows 防火墙对网关的 loopback 连入 | 修复 | 主进程 / OpenClaw / Windows |
| [#2819](https://github.com/netease-youdao/LobsterAI/pull/2819) | fix(openclaw): 回收孤儿配置锁、停止无限配置恢复循环 | 修复 | 主进程 / OpenClaw / 渲染层 |
| [#2816](https://github.com/netease-youdao/LobsterAI/pull/2816) | feat(desktop-companion): 增加翻译与朗读卡片 | 功能 | 主进程 / 渲染层 |

**主要推进点：**

- **【#2817】打通 Windows 重启后网关不可达**：根因是 `LobsterAI.exe` 自身作为网关运行，Windows 重启后默认防火墙策略阻断入站 loopback，导致 `/startupz` 探测全部失败、App 卡在"AI 引擎启动中"页面直至 300s 超时。该 PR 永久性放行对应规则。
- **【#2819】修复配置锁永久挂起**：解决 0 字节 `openclaw.json.lock`（由 2026-09-07 一次被强杀的写入进程遗留）造成的每次任务启动均触发 gateway 重启的连锁故障，避免对真实运行无影响的"恢复风暴"。
- **【#2816】桌面伴随增加选区翻译/朗读**：选中文字后即可在选区旁弹出紧凑卡片执行翻译或朗读；工具栏按 Translate → Read aloud → Copy → Ask 顺序排列，二级菜单收纳 Explain / Summarize / Polish。

**评估**：今日属于"小步快跑但每一脚都踩在故障核心"的合并节奏，质量层面较稳，但版本号上尚无体现，需关注后续打 tag 计划。

---

## 4. 社区热点

由于今日 **Issues 零活动**、所有 PR 评论数均显示为 `undefined`（无 GitHub Reaction 与 Discussion 互动数据），本节无法以传统的"评论数 / 👍数"维度排序。但从 PR 描述中可清晰识别出现场用户驱动型修复链路：

- **现场案例 → PR 闭环**：
  - [#2817](https://github.com/netease-youdao/LobsterAI/pull/2817) 直接由 **2026-10 现场案例**驱动，定位到 Windows 防火墙默认"Query user"规则异常。
  - [#2819](https://github.com/netease-youdao/LobsterAI/pull/2819) 由 **2026-09-07 Windows 用户报告**触发，跨越约一个月从根因暴露到修复闭环。
  - [#2822](https://github.com/netease-youdao/LobsterAI/pull/2822) 基于 **用户对 Univer 电子表格复制/剪切**的反向投诉（"无法访问剪贴板"）。

社区诉求集中在 **"我作为 Windows 桌面用户的可用性"**——网关启动可达性、剪贴板权限、配置一致性都成为反复出现的痛点。

---

## 5. Bug 与稳定性

按严重程度排列，今日触及的稳定性问题均与 **Electron 主进程 + OpenClaw 子模块**相关：

| 严重度 | 问题 | 描述 | 已有 fix |
|---|---|---|---|
| 🔴 高 | Windows 重启后网关 loopback 被防火墙阻断 | 启动卡在"AI 引擎启动中"直至 300s 超时；用户体验为完全无法使用 | ✅ [#2817](https://github.com/netease-youdao/LobsterAI/pull/2817) |
| 🔴 高 | 配置锁死导致 gateway 反复重启 | 每次任务触发恢复循环，App 无法进入正常 UI | ✅ [#2819](https://github.com/netease-youdao/LobsterAI/pull/2819) |
| 🟠 中 | config.apply 待生效时所有任务被错误拒绝 | 待合并任务接纳（admission）逻辑过保守，pending change 与"是否会受影响的任务"未做区分 | 🟡 [#2821](https://github.com/netease-youdao/LobsterAI/pull/2821) 待合并 |
| 🟠 中 | Electron 应用渲染层被默认剪贴板 permission handler 拒绝 | 用户复选板 / 粘贴在 Univer 编辑器中显示 Univer 自带的警告 | 🟡 [#2822](https://github.com/netease-youdao/LobsterAI/pull/2822) 待合并 |
| 🟢 低 | Windows 防火墙规则即使在 #2817 修复场景外仍需诊断信息 | 现场协助时缺乏复现手段 | 🟡 [#2820](https://github.com/netease-youdao/LobsterAI/pull/2820) 待合并 |

---

## 6. 功能请求与路线图信号

- **【#2818】Atlas Cloud 作为 Provider 接入（[PR 链接](https://github.com/netease-youdao/LobsterAI/pull/2818)）**
  提议在 Global 区段中并列 OpenRouter 增加 **Atlas Cloud** provider；改动仅 5 文件 +38/-4 行，属于轻量级接入。**信号**：项目正在扩大 LLM Provider 生态覆盖面，遵循"小步集成、按需扩展"路线。该 PR 当前待合并，距离纳入下一版本仅一步之遥。

- **【#2816】Desktop Companion 翻译 + 朗读卡片（[PR 链接](https://github.com/netease-youdao/LobsterAI/pull/2816)）**
  已合并，提示路线图方向：把"基于选区的轻量动作"作为面向用户的差异化能力。下一阶段可能继续扩展更多选区级操作。

- **【#2820】Windows 诊断用 collectors（[PR 链接](https://github.com/netease-youdao/LobsterAI/pull/2820)）**
  新增"双击触发"的 Windows loopback 与网络过滤器诊断采集器，常态化支持流程。这是工程投入转向 **"自我诊断能力"** 的明确信号——下一个版本或后续迭代可能进一步面向其他故障类别展开同样的"自助排查 → 客服"链路。

---

## 7. 用户反馈摘要

虽然 Issues 区域零活动，但 PR 描述中保留了真实的用户场景碎片，可勾勒出当前用户画像：

- **桌面 Windows 用户占比较大**：今日三条关闭 PR 中有两条的根因诊断起点都是"一位 Windows 用户的实际报告"，且问题集中于"启动阶段"与"权限/防火墙"。
- **复制 / 剪贴板体验受损**：[#2822](https://github.com/netease-youdao/LobsterAI/pull/2822) 显示用户看到的不是英文而是中文 Univer 提示"无法访问剪贴板"，意味着这个 product 已经在中文桌面工作流下广泛使用。
- **任务被拒的隐性负面体验**：[#2821](https://github.com/netease-youdao/LobsterAI/pull/2821) 显示在 config 切换期间新会话、steer、补充提问均被静默拒绝——这种"我点了但系统什么都没做"对用户来说是典型的不满意来源。
- **正面反馈：** [#2816](https://github.com/netease-youdao/LobsterAI/pull/2816) 推动了选区级快捷动作，这是一种"我知道你们想要哪种体验，我直接给你做出来"的功能增量。

---

## 8. 待处理积压

当前仍有 **4 条 PR 处于 OPEN 状态**等待维护者 review（按时间倒序）：

| PR | 标题 | 创建时间 | 关键标签 |
|---|---|---|---|
| [#2822](https://github.com/netease-youdao/LobsterAI/pull/2822) | fix(office): allow clipboard access for the app renderer | 2026-10-10 | area: main |
| [#2821](https://github.com/netease-youdao/LobsterAI/pull/2821) | fix(openclaw): admit tasks unaffected by a pending config change | 2026-10-10 | area: renderer, main, openclaw |
| [#2820](https://github.com/netease-youdao/LobsterAI/pull/2820) | feat(support): add Windows loopback / network filter collectors | 2026-10-10 | area: support |
| [#2818](https://github.com/netease-youdao/LobsterAI/pull/2818) | feat: add Atlas Cloud as a provider | 2026-10-09 | area: renderer |

⚠️ **维护者关注建议**：

1. **【#2822 优先】** — 直接关系到用户在电子表格里最基础的 Ctrl+C 是否可用，发布窗口上拖得越久，用户对外的可用性就越差。
2. **【#2821 优先】** — 任务被静默拒绝，是典型的"我以为坏了但你没告诉我"的负面体验，逻辑闭环也已经在 PR 中完整给出。
3. **【#2818】** — 改动小、收益直接（接入新 provider），建议在最接近的下个小版本中一并合入。
4. **【#2820】** — 诊断能力建设属于中长期投入，可在确认 [#2817](https://github.com/netease-youdao/LobsterAI/pull/2817) 在 Windows 现场实际生效后再决定是否合入。

> **需要警示**：当日 Issues 完全空白，是否意味着 Triage 失灵或用户绕开 GitHub 提交问题？建议维护者留意社区侧（微信群、Discord、私信汇总）的反馈是否被合并进入 GitHub，避免出现"代码在动，但需求被遮挡"的状态。

---

*报告生成时间：2026-10-10 · 数据来源：netease-youdao/LobsterAI GitHub 仓库*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-10-10

> 数据来源：agentscope-ai/CoPaw（GitHub Issues & PRs，近 24 小时窗口）

---

## 1. 今日速览

CoPaw 项目今日呈现**高活跃度 + 高风险信号**的态势。过去 24 小时内共处理 **18 条 Issue 更新**（其中 8 条关闭、10 条仍活跃）和 **24 条 PR 更新**（其中 13 条关闭/合并、11 条待合并），整体节奏接近一个活跃版本迭代末期的合并高峰。值得高度关注的是**一条由社区提交的安全漏洞披露（#8153）**，指控 MCP Driver 配置接口可被用于 root 级远程代码执行并已出现真实入侵案例，安全团队需即刻评估。同时，**#8040（ReMe 嵌入重索引 CJK 块静默丢失）、#8163（Windows 长路径导致 Review 决策日志永久损坏）**属于具有复发风险的 P0 级稳定性问题，需与对应修复 PR 一并跟踪。功能侧，国际化（#8160 / #8161）和 HarmonyOS 原生客户端（#8164）两个大颗粒度 PR 已进入评审队列，体现出项目在跨平台与多语言方向上的持续扩张。

---

## 2. 版本发布

**今日无新版本发布**。

- 最近已知相关版本：`QwenPaw 2.2.2-beta.4`（仍在测试阶段，issue 反馈中频繁出现）
- 待合并的相关 PR：`#8121` 发布 `qwenpaw-creator 2.0.1`（已开放 3 天，XXXL 颗粒度）
- 建议关注：随着 2.2.x 系列 bug 集中爆发（页面加载失败 #8120、Files 面板刷新 #7995、SVG 属性错误 #8143、EXIF 朝向 #8129 等），下一个 stable 版本（推测为 2.2.2 或 2.2.3）的 release notes 篇幅可能较大。

---

## 3. 项目进展

今日已关闭/合并的 13 条 PR 中，对项目健康度贡献最显著的有：

| PR | 类别 | 影响 |
|---|---|---|
| [#8149](https://github.com/agentscope-ai/QwenPaw/pull/8149) | fix(console): 刷新文件目录并保留分页 | 与 #7996 同时关闭同一问题（#7995），双 PR 方案提升了 Files 面板刷新体验的健壮性 |
| [#8157](https://github.com/agentscope-ai/QwenPaw/pull/8157) | fix(chat): 防止非法 copy 图标尺寸 | 修复 #8143，拦截 `size="small"` 串入 SVG 属性导致的 Console 报错风暴 |
| [#8159](https://github.com/agentscope-ai/QwenPaw/pull/8159) | fix(console): 响应分组跳过空文本 | 修复 #8158 中"独立 Scroll 头条让助手气泡渲染为空"的 UI 缺陷 |
| [#8145](https://github.com/agentscope-ai/QwenPaw/pull/8145) | fix(console): 编辑器控件按需换行 | 修复窄空间下文件预览行强制断行问题 |
| [#8155](https://github.com/agentscope-ai/QwenPaw/pull/8155) | feat(local-models): 更新 QwenPaw-Flash 9B/27B/35B-A3B | 本地模型推荐表扩展，新增 27B/35B-A3B 量化档位 |
| [#8136](https://github.com/agentscope-ai/QwenPaw/pull/8136) | fix(media): 保留 EXIF 朝向 | 修复 #8129，大图缩放后旋转/镜像方向丢失 |
| [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) | fix(agents): 媒体负载拒绝后恢复 | 修复 #8009，避免 DeepSeek 等提供商拒绝超大图后整段会话永久死亡 |
| [#8130](https://github.com/agentscope-ai/QwenPaw/pull/8130) | fix(console): 设置页头仅保留页面标题 | 视觉一致性收尾 |
| [#8089](https://github.com/agentscope-ai/QwenPaw/pull/8089) | fix(console): 支持 LAN HTTP 下终端身份生成 | 局域网非安全上下文下不再因 `crypto.randomUUID` 缺失而崩溃 |
| [#8055](https://github.com/agentscope-ai/QwenPaw/pull/8055) | fix(skills): 异步化技能池下载 | 13k 文件 / 80MB 大技能包不再阻塞事件循环 |

**整体判断**：项目以"质量收尾"为主旋律，单日合并了多条与 2.2.2-beta.4 已知 Bug 直接对应的修复，**显著推进了向稳定版（stable）迈进的一步**。但仍有结构性大改在排队（见 §6）。

---

## 4. 社区热点

按评论数与关注度综合排名：

1. **[#7678 (closed, 10 评论)](https://github.com/agentscope-ai/QwenPaw/issues/7678)** — `spawn subAgent` 全量超时失败
   - 来自用户 *xiaohushi512*，使用 2.2.0 时 spawn 出去的子代理任务**无一成功执行**，即便将 timeout 调到极长也无效。用户主动贴出 AI 调试链，显示技术排查已超出普通用户能力范围，反映**子代理调度链路在普通版本上可能存在普遍性失败**。该 issue 已 closed，但合并的具体修复尚需追溯关联 PR。

2. **[#8040 (open, 5 评论)](https://github.com/agentscope-ai/QwenPaw/issues/8040)** — ReMe 嵌入重索引 CJK 块静默丢失
   - 这是 **#5950 的复发**：当一个 CJK 块超过 provider 单 item token 限制时，整个 batch 被静默丢弃，而上层"processed=N/N"的日志声称成功。已有完整实证复现。**这是数据完整性级别的严重 Bug**，不是单纯的显示问题。

3. **[#8120 (open, 4 评论)](https://github.com/agentscope-ai/QwenPaw/issues/8120)** — 多设备频繁页面加载失败
   - 用户 *henryliuwork* 跨多台设备复现，提示文案为通用"网络或应用更新"模糊话术；对应修复 PR [#8154](https://github.com/agentscope-ai/QwenPaw/pull/8154) 已开放，XXL 颗粒度，**但用户痛感被低估**。

4. **[#7599 (closed, 4 评论)](https://github.com/agentscope-ai/QwenPaw/issues/7599)** — opencode go 模型 `MissingSessionID`
   - 套餐体验类问题，反映**第三方 provider 协议兼容性**是高频痛点。

5. **[#8163 (open, 2 评论)](https://github.com/agentscope-ai/QwenPaw/issues/8163)** — qwenpaw-creator Windows 长路径 → STORAGE_INTEGRITY_ERROR → CAS_CONFLICT 永久自锁
   - 用户 *xiaofengtt* 详细描述：`HKLM\...\LongPathsEnabled=0` 默认环境下，长路径触发 503，随后空目录残留触发 409，后续每次重试都被拒。**逻辑性死锁**——失败后的清理路径本身就是失败源。

6. **[#8162 (open, 2 评论)](https://github.com/agentscope-ai/QwenPaw/issues/8162)** — OpenAI Responses API 流式事件空响应
   - `agentscope.model._openai_response._model` 中 `_parse_stream_response` 只处理增量事件，**未处理 `response.completed` 等终态事件**，会导致会话在 1-3 步后静默中断。

7. **[#8153 (open, 2 评论)](https://github.com/agentscope-ai/QwenPaw/issues/8153)** — ⚠️ **【安全】MCP Driver 配置接口 → root RCE → 挖矿木马植入**（详见 §5）

8. **[#8160 (open, 2 评论)](https://github.com/agentscope-ai/QwenPaw/issues/8160)** — 新增西班牙语（es）界面语言
   - 与 PR #8161（多语言目录完善）联动，社区 i18n 推进意愿明显。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 — 安全 / 数据完整性

- **[#8153 MCP Driver 配置接口导致 root RCE](https://github.com/agentscope-ai/QwenPaw/issues/8153)**
  - 提交者 *kenzone* 在生产服务器上发现完整入侵链：攻击者通过 MCP Driver 接口以 `rce-poc-<hash>` 命名的 Driver 以 root 执行命令 → 注入 SSH 公钥 → 部署 systemd 挖矿木马 + C2 外连。**报告含完整 IOC 与脱敏证据**。暂无对应修复 PR。
  - **🚨 建议：维护团队应在 24 小时内完成复现评估并发布安全公告。**

- **[#8040 ReMe 嵌入重索引 CJK 块静默丢失](https://github.com/agentscope-ai/QwenPaw/issues/8040)** — 数据完整性 Bug，`processed=N/N` 日志撒谎。暂无明确修复 PR。

- **[#8163 qwenpaw-creator Windows 长路径自锁](https://github.com/agentscope-ai/QwenPaw/issues/8163)** — 触发后整个 Review 流程被 409 CAS_CONFLICT 永久卡死，用户必须手动干预。暂无对应修复 PR。

### 🟠 P1 — 功能失效

- **[#8162 OpenAI Responses API 流式中断](https://github.com/agentscope-ai/QwenPaw/issues/8162)** — 未处理 `response.completed` 终态事件，1-3 步后会话静默死亡。**对 OpenAI Responses 用户群影响广泛**，目前 issue 没有对应修复 PR。

- **[#8120 频繁页面加载失败](https://github.com/agentscope-ai/QwenPaw/issues/8120)** — 对应修复 PR [#8154](https://github.com/agentscope-ai/QwenPaw/pull/8154)（XXL，待合并）。修复后预计会限制"懒加载"模块的自动重试为每会话一次。

- **[#7678 (closed) spawn subAgent 全量超时](https://github.com/agentscope-ai/QwenPaw/issues/7678)** — 已关闭但 10 条评论密度说明排查复杂，需追溯关联 commit。

- **[#7599 (closed) opencode go `MissingSessionID`](https://github.com/agentscope-ai/QwenPaw/issues/7599)** — 已关闭，需确认实际修复归属。

### 🟡 P2 — UI / 体验

- **[#7995 (closed) Files 面板刷新展开状态陈旧](https://github.com/agentscope-ai/QwenPaw/issues/7995)** — 已被 [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) + [#8149](https://github.com/agentscope-ai/QwenPaw/pull/8149) 双方案覆盖。✅
- **[#8143 (closed) SVG `width="small"` 报错风暴](https://github.com/agentscope-ai/QwenPaw/issues/8143)** — 由 [#8157](https://github.com/agentscope-ai/QwenPaw/pull/8157) 修复。✅
- **[#8158 (closed) Scroll 头条独立块导致气泡渲染为空](https://github.com/agentscope-ai/QwenPaw/issues/8158)** — 由 [#8159](https://github.com/agentscope-ai/QwenPaw/pull/8159) 修复。✅
- **[#7994 (closed) 上下文显示状态信息不及时更新 / 不压缩](https://github.com/agentscope-ai/QwenPaw/issues/7994)** — 已关闭，但用户描述"调整后无论怎么试都不能自动更新 131K 压缩"，**需确认是否真的修复**。
- **[#8129 (closed) 大图缩放丢失 EXIF 朝向](https://github.com/agentscope-ai/QwenPaw/issues/8129)** — 由 [#8136](https://github.com/agentscope-ai/QwenPaw/pull/8136) 修复。✅
- **[#8009 (closed) 超大图让会话永久不可用](https://github.com/agentscope-ai/QwenPaw/issues/8009)** — 由 [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) 修复（DeepSeek 等提供商拒绝后能恢复）。✅

### 📊 总结

| 类别 | 数量 | 有修复 PR | 修复率 |
|---|---|

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 · 2026-10-10

---

## 1. 今日速览

ZeroClaw 仓库过去 24 小时维持中高位活跃度：**26 条 Issues 更新（19 活跃/7 关闭）+ 50 条 PRs 更新（43 待合并/7 已合并或关闭）**，无新版本发布。社区重点集中在 v0.8.6 / v0.9.0 的 runtime & gateway 收尾、ZeroCode TUI 体验打磨、以及一批与成本核算 / Channel（尤其 Telegram）相关的 P1 稳定性 Bug。今日成功关闭的 7 条 PR/Issue 多数为存量缺陷修复与重构收尾，整体节奏偏稳健推进 + 风险收敛。

---

## 2. 版本发布

⚠️ 今日无新版本发布。最近活跃的目标版本为 **v0.8.6**（runtime 收尾）和 **v0.9.0**（gateway 分离），相关交付物在 tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 中追踪。

---

## 3. 项目进展（今日合并/关闭）

| 类型 | 编号 | 标题 | 影响 |
|---|---|---|---|
| 重构 | [PR #11545](https://github.com/zeroclaw-labs/zeroclaw/issues/11545) | 移除过时的 `StreamErrorWithUsage` 包装 | 清理 agent-loop 流式错误路径，减少不可达 downcast |
| Bug | [Issue #11166](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) | 超额图片按批淘汰，避免逐张触发 prompt cache 重写 | 优化 Anthropic/兼容 provider 在图像密集场景的缓存命中率 |
| Bug | [Issue #10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) | 修复 `CostTracker.session_id` 复用 daemon-lifetime UUID | 成本账本按会话隔离，可正确拆分 per-conversation 花费 |
| Bug | [Issue #10550](https://github.com/zeroclaw-labs/zeroclaw/issues/10550) | 限定 skill HTTP 的 DNS 解析并补齐 dispatch 测试 | 闭合 #10369 的安全漏洞面（resolver 在 deadline 内完成） |
| Bug | [Issue #11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180) | 修复并行 runtime 测试下读取其他用例记录的 flaky | CI 稳定性提升 |
| Bug | [Issue #11371](https://github.com/zeroclaw-labs/zeroclaw/issues/11371) | MCP 嵌套对象参数被错误序列化为字符串 | v0.8.6 范围内修复，影响所有走 MCP 的 agent 调用 |
| Bug | [Issue #10741](https://github.com/zeroclaw-labs/zeroclaw/issues/10741) | ZeroCode 在正常完成响应后静默暂停队列 | 修复 TUI 消息丢失问题 |
| Docs | [PR #11640](https://github.com/zeroclaw-labs/zeroclaw/pull/11640) | 为 live-session refresh scope pre-filter 申请有界例外 | 与 #11607 配套的运行时约定 |

**总体评价**：今日净关闭 7 条 = 6 个 Bug + 1 个重构；没有新增用户可见 Feature，但 **#10700 / #10550 / #11371** 直接关系到成本/安全/标准协议的正确性，属于"看不见但很重要"的质量推进。

---

## 4. 社区热点

按评论数排序：

| 排名 | 编号 | 评论 | 主题 |
|---|---|---|---|
| 🥇 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 15 | Maintainer decision queue tracker — RFC/设计 Issue 的统一裁决台账 |
| 🥈 | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 6 | v0.8.6 + v0.9.0 runtime & gateway 交付总表 |
| 🥉 | [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | 6 | 超大图像降采样而非直接丢弃（parking-lot） |
| 4 | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | 6 | SQLite session 每次覆盖整段 transcript → `created_at` 全被覆写 |
| 5 | [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | 5 | RFC: `zeroclaw-a2a` crate |

**诉求解读**：
- 维护者工作流（#8692）持续吸讨论 — 社区希望 RFC 与设计类 Issue 能有透明、可追溯的裁决路径，避免"被遗忘"。
- v0.8.6 / v0.9.0 的 phase 2/3 收尾（#7432）牵动多人，反映该 milestone 是当前路线图的真正瓶颈。
- A2A 协议 crate RFC（#11254）和 RAG 知识语料 RFC（#11235）标志着项目向"多智能体互操作 + 私有知识接入"两个方向延展。

---

## 5. Bug 与稳定性（按严重度）

### 🔴 P1 — 工作流阻塞（已有或接近修复）

| Issue | 摘要 | Fix 状态 |
|---|---|---|
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite session 每次 turn 都把 `created_at` 覆盖，导致 `GET /api/.../messages` 时间戳全错 | 🟡 开放，等待 PR |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter 路由下成本显示 $0.00、token 全被归为 `free tok`，`usage.cost` 未真正摄取 | 🟡 开放 |
| [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) | 同一 turn 内重复执行已批准 shell 命令 → agent loop 中断 + ACP session 终止（由 DefuzeX KUMA 行为安全测试发现） | 🟡 开放 |
| [#11608](https://github.com/zeroclaw-labs/zeroclaw/issues/11608) | Telegram listener 在一次黑洞请求后可永久卡死；`listener_health` 仅检测未恢复 | 🟡 开放 |
| [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) | Telegram 发送路径忽略 429 `retry_after`，立即重试放大限流，回复丢失 | 🟡 开放 |
| [#11614](https://github.com/zeroclaw-labs/zeroclaw/issues/11614) | `map_key_sections` 用 `Box::leak` 每次泄漏 schema path → daemon 内存只增不减 | 🟡 开放 |
| [#11618](https://github.com/zeroclaw-labs/zeroclaw/issues/11618) | ZeroCode 在 daemon 返回 `SESSION_BUSY` 时丢弃队列消息，用户输入静默丢失 | 🟢 [PR #11619](https://github.com/zeroclaw-labs/zeroclaw/pull/11619) 已提交 |

### 🟠 P2 — 降级行为

| Issue | 摘要 | Fix 状态 |
|---|---|---|
| [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) | 成本账本丢弃 provider 的 `total_tokens` → Gemini 等隐藏 reasoning token 被少计 | 🟡 开放 |
| [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) | ZeroCode agent 关闭 repetitive-tool 防护，导致同 URL `web_fetch` 风暴 | 🟡 开放 |
| [#11632](https://github.com/zeroclaw-labs/zeroclaw/issues/11632) | Linux/Tauri 下 `WebKitWebProcess` 空闲时仍 ~100% GPU 渲染 | 🟡 开放 |
| [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623) | ZeroCode 清掉待回答的 `ask_user` 但不回 daemon → 工具 600s 超时且无记录 | 🟡 开放 |

**观察**：P1 中 Telegram 通道连续出现两条相关 Bug（#11608、#11615），指向 HTTP 客户端缺超时 + 缺退避两个长期缺陷，建议一次性 PR 修复以避免反复回归。

---

## 6. 功能请求与路线图信号

| 类型 | 编号 | 内容 | 落地可能性 |
|---|---|---|---|
| RFC | [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | `zeroclaw-a2a` crate — 把 #9106/#7763/#8274 的 A2A 客户端 + 发现面封装为可独立发布的 crate | 高：已有前置合并 |
| RFC | [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | Knowledge corpus / RAG for agent — 操作者可挂载自有文档语料 | 中：能力边界型，依赖存储 & embedding 选型 |
| RFC | [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) | `[[search_routes]]` — 类比 `[[model_routes]]` 的 hint-based web 搜索路由 | 中-高：与现有 model_routes 镜像，PR 路径清晰 |
| 增强 | [#11166](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) ✅ | 图像超额按批淘汰 | 已关闭 |
| 增强 | [#11473](https://github.com/zeroclaw-labs/zeroclaw/pull/11473) | 默认关闭 `deferred_builtin_tools`，内置 schema 通过 tool_search 延迟发现 | 已提交 XL PR |
| 增强 | [#11467](https://github.com/zeroclaw-labs/zeroclaw/pull/11467) | `runtime_profiles.<profile>.single_tool_rounds` — 单工具 provider round（opt-in） | 已提交 XL PR |
| 增强 | [#11462](https://github.com/zeroclaw-labs/zeroclaw/pull/11462) | 将独立子代理的工具审批路由到目标 operator | 已提交 L PR |
| 增强 | [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) | computer-use 工具 + macOS/Linux/Win 原生驱动 | **长期挂起（2026-07-15 起，等 review）** |
| 增强 | [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698) | Web 端 cron 引导式编辑器 | 已在 parking-lot |
| 增强 | [#11620](https://github.com/zeroclaw-labs/zeroclaw/issues/11620) | ZeroCode 显示消息时间戳 | 小改动，建议下个 sprint |
| 增强 | [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | 超大图降采样而非丢弃；`max_image_size_mb = 0` 关闭限制 | parking-lot，待有精力复活 |

**信号**：社区最有可能在下一版本看到的是 **#11473（deferred tool schemas）**、**#11467（single-tool rounds）**、**#11450（delegate 结算恢复）** 与 Telegram 通道的一波集中修复。RAG / A2A / search_routes 仍在 RFC 阶段，下一 minor 版本不太可能入正轨。

---

## 7. 用户反馈摘要

- **成本与可观测性是高频痛点**（#11204、#11613、#10700 ✅）：用户对 OpenRouter/Gemini 走兼容 provider 时的成本数字"完全不可信"表达了强烈不满 — "$0.00 + 所有 token 都是 free tok" 直接让 Dashboard 失效。
- **ZeroCode TUI 体验碎片化**（#11608、#11612、#11614、#11618、#11620、#11623）：多个独立报告指出消息静默丢失、shell 重入终止会话、内存泄漏、空闲高 GPU。一句话总结：**"AI 写代码" TUI 还缺乏生产级可靠性**。
- **Agent loop 安全语义不一致（[#11612]）**：DefuzeX 团队通过 KUMA 行为安全测试发现"重复调用同一已批准命令"会被视为异常终止，暴露出 supervised 模式下的策略鲁棒性问题。
- **Telegram 通道的可用性长期承压**（#11608、#11615）：用户对"网络瞬断 → 永久失联"和"被 429 后雪崩"两个生产事故敏感，希望通道具备自愈能力。
- **社区入口维护（[#11638]）**：Discord 邀请链接返回 `Unknown Invite`，多个项目入口仍指向死链，反映社区运营的细节管理需要规范。

---

## 8. 待处理积压（提醒维护者）

> 以下条目创建时间已超过 2 个月，建议维护者在下一轮 triage 中给予明确裁决。

| 编号 | 创建 | 主题 | 风险 | 备注 |
|---|---|---|---|---|
| [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) | 2026-07-15 | computer-use 工具 + 原生桌面驱动 | high | XL，长期无 review |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 2026-07-04 | Maintainer decision queue | medium | tracker 自身仍开放，缺明确 owner |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 2026-06-09 | v0.8.6 / v0.9.0 交付总表 | high | 当前 milestone 主线 tracker，需阶段化 sign-off |
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | 2026-08-10 | 大图降采样而非丢弃 | high | 已 parking-lot，但需求真实 |
| [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698) | 2026-09-07 | Web cron 引导式编辑器 | medium | L PR，已 parking-lot |

---

## 📊 项目健康度速判

- **代码活跃度**：✅ 高（50 PRs / 日）
- **Bug 收敛率**：✅ 中（7/26 ≈ 27%，P1 Bug 均带 fix 路径或 PR）
- **版本节奏**：🟡 偏慢（当日无 release，v0.8.6/v0.9.0 仍在 tracker 阶段）
- **社区参与广度**：✅ 健康 — 26 个错误到 P1 PR 来自 9+ 不同贡献者，无单点依赖
- **

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*