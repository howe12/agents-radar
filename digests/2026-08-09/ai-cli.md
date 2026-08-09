# AI CLI 工具社区动态日报 2026-08-09

> 生成时间: 2026-08-09 01:12 UTC | 覆盖工具: 9 个

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

# 2026-08-09 AI CLI 工具横向对比分析报告

---

## 一、生态全景

当前 AI CLI 工具生态已进入**"能力深化 + 可靠性攻坚"双线并行**阶段：头部项目（Claude Code、OpenAI Codex）凭借庞大社区基础，在多端协同、Hooks/Plugin 体系上持续加码；中坚力量（Gemini CLI、OpenCode、Qwen Code、Pi）则分别在 Subagent 编排、Provider 中立化、多 Agent 协同等方向寻求差异化突破；尾部工具（Kimi Code、GitHub Copilot CLI）面临**活跃度分化**——前者因数据极少难以判断，后者因 GitHub 生态加持保持稳定但不温不火。最值得关注的是 **DeepSeek TUI 已正式更名 CodeWhale**（v0.9.5），标志着社区型 CLI 项目进入品牌化运营阶段，而"Provider 中立"成为开源工具的核心竞争力。

---

## 二、各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | 新版本 | 综合活跃度 |
|------|------------|---------|--------|-----------|
| **Pi** | 35 | 12 | ❌ | 🔥🔥🔥🔥 极高 |
| **Gemini CLI** | 50+ | 10 | ❌（仅 nightly）| 🔥🔥🔥🔥 极高 |
| **OpenAI Codex** | 10+ 热点 | 10（多合并）| ⚠️ alpha.5 | 🔥🔥🔥🔥 高 |
| **OpenCode** | 10+ 热点 | 10（多 CLOSED）| ❌ | 🔥🔥🔥 中高 |
| **Claude Code** | 50+ 活动 | 1 | ✅ v2.1.226 | 🔥🔥🔥 中高 |
| **Qwen Code** | 10+ 热点 | 10+ | ✅ v0.21.8 | 🔥🔥🔥 中高 |
| **DeepSeek TUI / CodeWhale** | 10 热点 | 26 | ✅ v0.9.5 | 🔥🔥🔥 中高（结构性重构中）|
| **GitHub Copilot CLI** | 23 | 0 | ❌ | 🔥🔥 中 |
| **Kimi Code CLI** | 2 | 0 | ❌ | ⚠️ 极低（数据样本不足）|

> **数据说明**：Pi 的 35 个 Issue 反映"高频小修"特征；Gemini CLI 的 50+ Issue 含大量 Auto Memory 相关 P2；DeepSeek TUI 的 26 PR 集中于 v0.9.5 release 工程化。活跃度需结合"问题解决率"综合判断，例如 OpenAI Codex 今日 PR 多为已合并状态，质量信号更明确。

---

## 三、共同关注的功能方向

### 1. 🔌 Subagent / 多 Agent 协同（5 个工具聚焦）
| 工具 | 关注点 |
|------|--------|
| **OpenAI Codex** | Subagent 配额计量（#35463）、状态恢复（#37563）、异步 hook |
| **Gemini CLI** | agent 嵌套调用（#28738）、generalist agent 卡死（#21409）、主动调用率（#21968）|
| **Qwen Code** | live-session 注册表（#8728）、跨会话消息（#8724）、原生协同 RFC（#8718）|
| **DeepSeek TUI** | CLI/TUI parity（#4022）、统一任务面板（#5270）、小 child 输出契约（#5189）|
| **OpenCode** | 多实例共享 session（#31307）、subagent 可视化诉求 |

**核心诉求**：从"单 Agent 工具"升级为"可编排 Agent 平台"，重点解决**状态可见性、配额计量、生命周期管理**三个共性问题。

### 2. 🪟 Windows 平台稳定性（4 个工具爆雷）
| 工具 | 典型问题 |
|------|---------|
| **Claude Code** | GPU 进程崩溃 exit 101457950（#81698）、kernel BSOD 0x139（#80912）、MSIX 安装（#84199）|
| **OpenAI Codex** | Computer Use 0x80070003（#37383）、VSCode 扩展资源加载失败（#37458）、桌面鼠标卡顿（#33074）|
| **GitHub Copilot CLI** | React/Ink 渲染冻结回归（#4222）、静默退出码 1（#4285）、PowerShell hook 失败（#4399）|
| **Pi** | （未单独报告，但 #4945 openai-codex 可靠性问题在 Windows 重现率高）|

**核心诉求**：跨平台已不再是"加分项"而是**准入门槛**；涉及 GPU 驱动（NVIDIA/Intel）、终端渲染（Ink/React Native）、shell 兼容层（PowerShell vs POSIX）、包分发（MSIX/npm shim）四个独立技术栈。

### 3. 💾 跨会话持久化 / Memory 系统（4 个工具布局）
| 工具 | 关注点 |
|------|--------|
| **Kimi Code** | Memory System（#1283，5 个月 25 评论）|
| **Gemini CLI** | Auto Memory 低信号去重（#26522）、敏感脱敏（#26525）、无效补丁隔离（#26523）|
| **OpenCode** | SQLite 13GB 无界增长（#33356）、session 隔离缺陷（#31307）|
| **DeepSeek TUI** | `/v1/memory` 运行时端点（#5131）、persistent goal-loop（#5133）|

**核心诉求**：从"无状态 CLI"走向"有状态 Agent"，关注**数据卫生（隐私、压缩）+ 存储治理（保留策略、并发隔离）+ 跨会话语义**。

### 4. 🔐 Hooks / 安全拦截层（3 个工具深化）
| 工具 | 关注点 |
|------|--------|
| **Claude Code** | Hookify 规则匹配 payload（PR #77492）、CVP 审批灰区（#84352）|
| **OpenAI Codex** | 异步命令 hook、超时进程树清理（#37527）、handler 抽象（#37644）|
| **Qwen Code** | DO_NOT_TRUST 被祖先 TRUST_FOLDER 覆盖（#8627）、shell 分类器旁路（#8582→#8590）|

**核心诉求**：Hooks 正从 MVP 走向生产级，开发者要求**统一的 handler 抽象、超时/资源回收、规则与实际 payload 严格匹配**。

### 5. 🌐 Provider / 模型中立化（3 个工具主线）
| 工具 | 关注点 |
|------|--------|
| **DeepSeek TUI** | 重命名 `DeepSeekClient` → provider-neutral；Mistral 一等路由（#5295）|
| **Pi** | LLM Gateway/DevPass providers（#7610）、阿里云 bailian-cli（#7840）、Cloudflare Workers AI |
| **OpenAI Codex** | `gpt-5.5`/`gpt-5.6-sol` 切换、models.json 自动更新（#31817）|

**核心诉求**：摆脱对单一供应商的依赖，建立**统一路由层 + 模型名校验 + 切换时状态重置**的标准合约。

### 6. 📊 TUI 体验打磨（多数工具共识）
多行 statusline（Codex #21653, 👍59）、mid-turn 控制流契约化（DeepSeek #5268）、全屏复制/滚动/剪贴板一致性（Pi #7837/#7721/#7830）、垂直 tab 分支显示（OpenCode #41342）——说明 TUI 已从"能跑"进入"细节决定体验"阶段。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | 企业级一体化 AI IDE | 大型企业 + 严肃开发者 | Cowork/Dispatch 多端协同、CVP/cyber-safeguard 合规层 |
| **OpenAI Codex** | OpenAI 生态全栈客户端 | ChatGPT Pro 用户 + 多模型爱好者 | Rust CLI 重写、gRPC code-mode、Subagent 配额体系 |
| **Gemini CLI** | Google 生态 + Agent 能力扩张 | Gemini 模型重度用户 + 研究者 | AST 感知工具链、组件级评测体系（76 个测试）|
| **GitHub Copilot CLI** | GitHub 工作流原生集成 | GitHub 生态用户 + CI/CD 场景 | GitHub 身份层、Codespaces 优化 |
| **Kimi Code CLI** | 长上下文 + 国产模型 | 国内中文用户（推测）| 数据样本极少，路线不明朗 |
| **OpenCode** | 多语言 IDE 替代 | 全栈多语言开发者 | TUI/Desktop/Web 三端一致、GenAI tracing 可观测 |
| **Pi** | Provider-agnostic 极简内核 | 模型研究者 + 扩展开发者 | L1/L2 流式接口抽象、Subagent 工具化 |
| **Qwen Code** | 多 Agent 协同平台 | 国产模型 + 自动化场景 | live-session 注册表、Workflow 引擎、多 Agent 编排 |
| **DeepSeek TUI / CodeWhale** | 深度架构重构 + 品牌化 | 早期采用者 + 架构研究者 | crates/core 拆分（620 文件巨型 tui crate 治理）、Provider 中立化 |

**关键差异点**：
- **商业化深度**：Claude Code > GitHub Copilot CLI > OpenAI Codex（带 ChatGPT Pro）> 其余
- **架构成熟度**：OpenAI Codex（Rust 重写）、DeepSeek TUI（拆分巨型 crate）领先
- **社区开放度**：Pi（34 个外部 PR 贡献者）、Gemini CLI（@SandyTao520 单人多 PR）、DeepSeek TUI（SparkofSpike/xavierpestel-ai）信号最强
- **国产化布局**：Qwen Code、Kimi Code、DeepSeek TUI 共享中文社区基础

---

## 五、社区热度与成熟度评估

### 🟢 高活跃度 + 高质量信号
- **Pi**：35 Issue + 12 PR 同步推进，问题-修复闭环完整（#6879→#7810，#4945→#7820），维护节奏健康
- **Gemini CLI**：50+ Issue + P1 修复 PR 同步推进，Auto Memory 形成主题闭环
- **OpenAI Codex**：10 PR 中 8 个已合并，问题归因（#37645）与安全修复（#37607）兼顾

### 🟡 高活跃度 + 资源紧张
- **Claude Code**：50+ Issue 仅 1 PR 跟进，**资源/活跃度比偏低**；建议关注 #79337、#50246 等高赞 Issue 的官方响应
- **OpenCode**：SQLite 13GB 等基础设施 Bug 长期未解（#33356），需警惕"高活跃但欠技术债"

### 🟠 中活跃度 + 结构性调整
- **Qwen Code**：v0.21.8 带来显著功能（live-session、缓存共享），但 CI 抖动暴露工程化挑战
- **DeepSeek TUI**：v0.9.5 品牌升级是双刃剑，26 PR 集中在 release 工程化本身，**实际功能增量集中在 Runtime API**

### 🔴 低活跃度 / 数据不足
- **GitHub Copilot CLI**：0 PR 更新，连续多日无 Release，依赖 GitHub 平台绑定
- **Kimi Code CLI**：2 Issue / 0 PR，#2597（53 分钟失控生成）属严重 Bug 但无官方响应，**可靠性风险显著**

---

## 六、值得关注的趋势信号

### 📈 趋势一："被静默切换"成为跨工具信任危机
- Claude Code #60093（自动切 Opus 致 $1,050）、#79337（Fable 5 静默降级）
- DeepSeek TUI #5244（未知 model id 静默降级到 128K）
- GitHub Copilot CLI #4397（resume 切回默认模型）
- **行业启示**：模型路由层需要**显式 UI 披露 + 用户可中断的回退机制**，这是 2026 年下半年 AI CLI 的"信任基线"。

### 📈 趋势二：Windows 从"次要平台"变成"质量试金石"
4 个头部工具同时出现 Windows 专项 Bug，且分布于 GPU、终端、包管理、shell 等独立栈。**对开发者的参考价值**：跨平台 CI 矩阵必须包含 Windows + WSL + PowerShell 三档验证；选择工具时应考察"是否有专门的 Windows owner"。

### 📈 趋势三：Provider 中立化成为开源 AI CLI 的"成人礼"
- DeepSeek TUI 主动重命名为 provider-neutral
- Pi 内置 LLM Gateway / OpenRouter 风格路由
- OpenAI Codex 自身支持多模型
- **行业启示**：绑定单一供应商的开源工具正在失去竞争力，"**统一路由层 + 模型白名单 + 切换时状态重置**"将成为标配。

### 📈 趋势四：TUI 体验进入"微创新红海"
- 状态栏多行（Codex 👍59）、session goal（OpenCode 👍128）、mid-turn 控制（DeepSeek #5268）、auto-compaction 时机（Pi #6879）
- **行业启示**：CLI 不再只是"输入命令-输出结果"，而是与 Desktop、IDE、Web 协同的**多模态交互终端**；开发者应关注 fullscreen 模式、剪贴板一致性、OSC 52 等细节。

### 📈 趋势五：Subagent 体系成熟度差距拉大
- 头部（Codex、Gemini、Qwen）：进入配额计量、状态恢复、运行时注册表阶段
- 中部（DeepSeek TUI、OpenCode）：仍解决 CLI/TUI parity、session 隔离
- 尾部（Claude Code）：虽有 Cowork/Dispatch，但 Subagent 抽象未独立
- **行业启示**：评估工具时，Subagent 已从"加分项"变为"必答题"——尤其是配额计量和状态机清晰度。

### 📈 趋势六：安全/合规层成为企业采购决策点
- Claude Code cyber-safeguard 误报（#83436）+ CVP 审批（#84352）
- Qwen Code DO_NOT_TRUST 漏洞（#8627）+ shell 旁路（#8582）
- Codex 凭据泄露

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据范围：`anthropics/skills` 仓库前 20 PR + 前 15 Issue · 截止 2026-08-09
> 说明：原数据中 PR 评论数列均为 `undefined`，本报告依据 **PR 编号活跃度、Issue 评论/👍 真实数据、主题影响力** 综合排序。

---

## 1. 热门 Skills 排行

| # | Skill / PR | 状态 | 核心亮点 |
|---|---|---|---|
| 🥇 | **#83 skill-quality-analyzer & skill-security-analyzer** [@eovidiu](https://github.com/anthropics/skills/pull/83) | OPEN | 元技能双子星：从 5 维度（结构文档 20% + 安全 + 可维护性 + 性能 + 一致性）评估 Skill 质量；社区对"Skill 自我审视"诉求强烈 |
| 🥈 | **#1367 self-audit（v1.3.0）** [@YuhaoLin2005](https://github.com/anthropics/skills/pull/1367) | OPEN | "先机械校验文件、再按损害严重度四维推理" 的 AI 输出门控，与 #1385 提案形成呼应 |
| 🥉 | **#1302 color-expert** [@meodai](https://github.com/anthropics/skills/pull/1302) | OPEN | 自包含色彩知识库（ISCC-NBS/Munsell/XKCD/RAL + OKLCH/OKLAB 选型表），覆盖命名-空间-对比度全链路 |
| 4 | **#723 testing-patterns** [@4444J99](https://github.com/anthropics/skills/pull/723) | OPEN | Testing Trophy 全栈：哲学 → 单测 → React → E2E，意图"测什么不测什么" |
| 5 | **#514 document-typography** [@PGTBoos](https://github.com/anthropics/skills/pull/514) | OPEN | 解决孤儿/寡妇/编号错位三大排版通病，号称"影响 Claude 生成的每一份文档" |
| 6 | **#1479 plan-file-hygiene** [@tonydzi](https://github.com/anthropics/skills/pull/1479) | OPEN | 回应 Issue #1417：规划工件缺少生命周期管理，提供清理/归档/废弃策略 |
| 7 | **#486 ODT skill** [@GitHubNewbie0](https://github.com/anthropics/skills/pull/486) | OPEN | 填补 OpenDocument 开源标准格式空白（.odt/.ods），与 docx/pdf 形成"文档三件套" |
| 8 | **#525 pyxel retro game** [@kitao](https://github.com/anthropics/skills/pull/525) | OPEN | MCP 驱动的复古/像素游戏开发工作流（write → run_and_capture → inspect → iterate） |

**讨论热点共性**：除功能性 Skill 外，**质量治理类（#83 / #1367）和排版/测试基础设施类（#514 / #723）** 占据关注度榜首，反映社区开始从"能做"转向"做好"。

---

## 2. 社区需求趋势

| 方向 | 代表 Issue | 👍 | 呼声强度 |
|---|---|---|---|
| 🔐 **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒充 `anthropic/` 官方命名空间 | 2 / 💬43 | ⭐⭐⭐⭐⭐ |
| 🏢 **组织级共享** | [#228](https://github.com/anthropics/skills/issues/228) Claude.ai 内一键分享，无需 .skill 文件流转 | 8 / 💬16 | ⭐⭐⭐⭐⭐ |
| 🧪 **skill-creator 工具链可靠性** | [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) run_eval 永远 0% recall | 7+1 / 💬12+3 | ⭐⭐⭐⭐⭐ |
| 🧠 **Agent 长期记忆** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 符号化状态压缩 | 0 / 💬9 | ⭐⭐⭐⭐ |
| 🔁 **插件去重/打包** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 内容重复 | 9 / 💬6 | ⭐⭐⭐⭐ |
| 📦 **上下文控制** | [#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` skill 单次注入 ~156k tokens | 0 / 💬4 | ⭐⭐⭐ |
| 🏛️ **Agent 治理/审计** | [#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate 三门管线 | 0 / 💬4 | ⭐⭐⭐ |
| 🌐 **跨平台/MCP 互操作** | [#29 Bedrock](https://github.com/anthropics/skills/issues/29) / [#16 Skills→MCP](https://github.com/anthropics/skills/issues/16) | — / 💬4×2 | ⭐⭐⭐ |
| 🛡️ **企业场景安全** | [#1175 SharePoint](https://github.com/anthropics/skills/issues/1175) | — / 💬4 | ⭐⭐⭐ |
| 📄 **文档输出保真度** | [#12 docx 空白符](https://github.com/anthropics/skills/issues/12) | 1 / 💬4 | ⭐⭐ |

**趋势归纳**：
1. **元能力需求井喷**——质量分析、安全审计、自审计、治理管线占据 Issues 头部；
2. **组织化协作是最大功能缺口**（👍8 + 💬16 双高）；
3. **评估基础设施的"沉默失效"**（#556 #1169 多人独立复现）成为最棘手的技术债；
4. **生态边界**：信任冒用（#492）+ 上下文爆炸（#1487）共同指向"Skill 不再是单文件玩具，而是有运行时风险的生产资产"。

---

## 3. 高潜力待合并 PR

> 全部 PR 当前均为 OPEN。以下按"落地影响面 × 阻塞程度"挑选近期最可能合入：

| PR | 提议者 | 落地价值 | 阻塞风险 |
|---|---|---|---|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** skill-creator 核心修复 | MartinCajiao | 🟥 阻塞所有 description 优化流程（recall=0% 等于优化噪声） | 高——合并前 skill-creator 实际不可用 |
| **[#83](https://github.com/anthropics/skills/pull/83)** 双元技能上架 marketplace | eovidiu | 🟧 立即为生态引入质量/安全闭环 | 中——需评审维度权重合理性 |
| **[#538](https://github.com/anthropics/skills/pull/538)** pdf 大小写引用修复 | Lubrsy706 | 🟧 Linux 用户必现崩溃，1 行级修复 | 低——纯文档 bug |
| **[#541](https://github.com/anthropics/skills/pull/541)** docx tracked change ID 冲突 | Lubrsy706 | 🟧 含书签文档被损坏的高危场景 | 低 |
| **[#539](https://github.com/anthropics/skills/pull/539)** YAML 特殊字符校验 | Lubrsy706 | 🟨 静默吞 description 的隐蔽坑 | 低 |
| **[#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) + [#1261](https://github.com/anthropics/skills/pull/1261) + [#1323](https://github.com/anthropics/skills/pull/1323)** | 多作者 | 🟥 skill-creator 在 Windows / 并发场景下完全不可用，4 个 PR 需协同合并 | 高——任一冲突会阻断整个 Windows 流程 |
| **[#514](https://github.com/anthropics/skills/pull/514)** document-typography | PGTBoos | 🟨 体验提升型，影响所有文档场景 | 低 |
| **[#509](https://github.com/anthropics/skills/pull/509)** CONTRIBUTING.md | narenkatakam | 🟨 社区健康分从 25% 起步 | 低 |

**合并建议优先级**：#1298 + #1099/#1050/#1261/#1323 四个 skill-creator 修复 → #83 元技能 → #538/#541/#539 文档类修复 → #514/#509 治理与体验。

---

## 4. Skills 生态洞察

> **一句话总结**：社区正从"Skill 数量增长"进入"Skill 工程质量与组织化"阶段——最集中的诉求是 **把 skill-creator 工具链从"总是报告 0%"的失灵状态修好，并补齐质量分析、安全审计、组织共享三类元能力**，让 Skills 从个人实验物升级为可信任的生产资产。

---

*本报告基于 anthropics/skills 仓库公开数据生成。🔗 全部链接均指向 GitHub 原始页面。*

---

# Claude Code 社区动态日报
**日期：2026-08-09**

---

## 📌 今日速览

今日 Claude Code 社区焦点集中在 **Fable 5 模型在 Max 套餐下的访问问题**（#79337 单日新增评论数最高，共 71 条讨论），同时 **消息队列模式**（#50246，184 👍）和 **Claude Desktop 远程控制 Claude Code 会话**（#29006，119 👍）仍是社区呼声最高的两个功能请求。Windows 平台稳定性问题（GPU 崩溃、BSOD、MSIX 安装）持续高发，桌面端 MCP 与 plugin 的兼容性问题仍是开发者痛点。

---

## 🚀 版本发布

**v2.1.226** 已发布，仅标注 "Bug fixes and reliability improvements"，官方未披露具体变更细节。建议关注 CHANGELOG 后再升级。

---

## 🔥 社区热点 Issues

| # | Issue | 类别 | 评论 | 👍 | 为什么重要 |
|---|-------|------|------|-----|-----------|
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | Fable 5 在 Max 套餐下提示"usage credits required"，被静默降级到 Opus 4.8 | bug | 71 | 23 | Fable 5 已成为 Max 标配，模型访问/计费策略切换引发的合规争议，影响所有 Max 用户 |
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | 消息队列模式：排队消息而非打断当前任务 | enhancement (TUI) | 50 | **184** | 社区长期高赞请求，反映"打断即破坏上下文"是核心工作流痛点 |
| [#29006](https://github.com/anthropics/claude-code/issues/29006) | 在 Claude Desktop App 中为 Claude Code 启用 Remote Control | enhancement (desktop) | 36 | **119** | 移动/桌面协同刚需，与 Cowork/Dispatch 联动后是 Claude 多端战略关键 |
| [#19054](https://github.com/anthropics/claude-code/issues/19054) | VS Code 扩展完全不加载 MCP servers | bug | 24 | 26 | MCP 是 Claude Code 工具生态核心，VS Code 用户被"降级"为无工具模式 |
| [#81698](https://github.com/anthropics/claude-code/issues/81698) | Windows 桌面 GPU 进程崩溃（exit 101457950）导致整个 App 与所有会话崩溃 | bug | 15 | 0 | Windows + RTX 5080 + 新版 MSIX 的兼容性灾难，单点崩溃牵连多会话 |
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | 已通过 CVP 审批的 org 仍被 cyber-safeguard 拦截 | bug | 13 | 0 | 企业级用户最敏感的安全合规灰区，可能影响采购决策 |
| [#83436](https://github.com/anthropics/claude-code/issues/83436) | Cyber-safeguard 在科研会话（IR 光谱仪校准）中误报，触发于累积上下文 | bug | 11 | 0 | 误报机制随上下文累积触发，揭示 safeguards 在长会话下的失效模式 |
| [#60093](https://github.com/anthropics/claude-code/issues/60093) | 模型被静默切换为 Opus，5 天产生 $1,050 超额费用 | bug (CLOSED, stale) | 10 | 0 | 涉及自动模型切换的**计费透明度**问题，已关闭但争议未消 |
| [#80058](https://github.com/anthropics/claude-code/issues/80058) | macOS 桌面 Dispatch 失效，但移动端正常 | bug | 10 | 1 | 桌面/移动行为不一致，Dispatch 是 Cowork 体系的重要入口 |
| [#67303](https://github.com/anthropics/claude-code/issues/67303) | Dispatch 永久显示"Can't reach your desktop"，需服务端配对重置 | bug | 8 | 0 | 用户无法自助恢复，需要 Anthropic 后端介入，影响企业部署 |

**其他值得关注的快速浏览：** [#80912](https://github.com/anthropics/claude-code/issues/80912)（Windows BSOD 0x139）｜[#81693](https://github.com/anthropics/claude-code/issues/81693)（Opus 5 上下文窗口显示为 200k 而非 1M）｜[#70564](https://github.com/anthropics/claude-code/issues/70564)（Cowork runner 无差别加载所有插件触发 OOM，CLOSED）

---

## 🛠 重要 PR 进展

过去 24 小时仅有 1 个 PR 更新：

**[#77492 — fix(hookify): match Write and prompt rules](https://github.com/anthropics/claude-code/pull/77492)**（OPEN，作者 ShiroKSH）
- **变更：** 让 `file` 规则真正检查 Write 工具传入的新内容；将简单 prompt 规则映射到当前的 `UserPromptSubmit` 负载并保留 legacy 字段；为 Write/Edit/prompt 规则补充回归测试。
- **意义：** Hookify 是企业用户做安全/合规/工作流拦截的关键层，本次修复同时解决了"规则未生效"与"老配置失效"两类常见踩坑，对 plugin 开发者尤为重要。

> 由于仅 1 条 PR，本期无更多候选；建议关注下周是否集中合入 desktop/Dispatch 相关修复。

---

## 📈 功能需求趋势

从 50 条 Issues 提炼出的社区诉求方向：

1. **会话级交互增强**（最热门）— 消息队列、非打断追加指令（#50246）、draft 持久化（#85131）
2. **多端协同 & 远程控制** — Desktop Remote Control（#29006）、Dispatch 跨端修复（#80058/#67303）、Android 草稿丢失（#85131）
3. **MCP / Plugin 生态可靠性** — VS Code MCP 完全失效（#19054）、背景会话不识别插件命令（#70596）、Cowork runner 插件全量加载致 OOM（#70564）
4. **新模型（Fable 5）相关治理** — 计费策略、降级路径、用量锁死（#79337/#79410/#60093）
5. **企业/合规能力** — Cyber-safeguard 误报与审批状态同步（#84352/#83436）、CVP 流程可观察性
6. **输出卫生** — 关闭默认在代码注释/docstring 中写开发历史（#85130）
7. **跨平台稳定性** — Windows GPU/BSOD/MSIX 一系列崩溃、Intel iGPU 桌面端闪退、macOS Dispatch 不可用

---

## 💡 开发者关注点

- **"被静默切换"是最敏感的信任问题**：#60093（自动切 Opus 致 $1,050）与 #79337（Fable 5 被静默降级）共同表明，模型/计费链路需要更显式的 UI 披露与回退机制。
- **桌面端 vs CLI 的行为分裂**：#19054（VS Code 不挂 MCP）、#80058/#67303（macOS Dispatch）、#84818（Desktop 内嵌 CLI 的 ECONNRESET）显示同一份代码逻辑在不同入口下结果不一致，开发者难以排障。
- **Windows 是当前质量短板**：GPU 进程崩溃（#81698）、kernel BSOD（#80912）、`.mcpb` MSIX 安装（#84199）、Intel iGPU 闪退（#83028）、Defender EBUSY（#67595）— 涉及 NVIDIA/Intel 两类 GPU 与 MSIX/非 MSIX 两条分发链路。
- **Hookify 仍是企业落地的隐形瓶颈**：插件规则不匹配实际 payload 经常导致"看似配置成功但无效果"，PR #77492 的回归测试是社区长期呼吁。
- **长会话 safeguards 失效**：#83436 揭示随着上下文累积，cyber-safeguard 触发概率上升，且在科研等合法场景下大量误报，需对累积策略做精细化。

---

*日报由 AI 自动整理自 anthropics/claude-code GitHub 公开数据，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-08-09

> 数据来源：[github.com/openai/codex](https://github.com/openai/codex) | 统计周期：过去 24 小时

---

## 一、今日速览

**Rust 版 CLI 推出 0.148.0-alpha.5 新预发布**，社区同步聚焦两条主线：Windows 平台问题集中爆发（Computer Use、扩展加载、性能卡顿），以及**Hooks / Subagent 体系持续完善**（异步命令钩、超时进程树清理、工作负载身份令牌、gRPC code-mode 等十余项 PR 落地）。Subagent 配额耗尽、相对路径沙箱 E2BIG 等运行期缺陷也引发高优先级讨论。

---

## 二、版本发布

| 版本 | 类型 | 主要变化 |
|------|------|----------|
| [rust-v0.148.0-alpha.5](https://github.com/openai/codex) | Pre-release | Rust CLI 0.148.0 第五个 alpha 版本（Release notes 暂未公布变更明细） |

> 提示：旧版 CLI 0.147.0、0.145.0 等存在多项已确认 bug，建议体验尝鲜后再切回稳定通道。

---

## 三、社区热点 Issues（精选 10 条）

### 1. [#21653 — TUI 多行状态栏支持](https://github.com/openai/codex/issues/21653)
- **类型**：enhancement · TUI · 13 评论 / 👍59
- **要点**：statusline 配置项较多时单行会被截断，需求多行渲染支持
- **社区反应**：👍 59，是近一周呼声最高的功能请求，反映用户对可定制化 TUI 的强烈需求

### 2. [#27284 — Codex App SSH 远程项目显示"No chats"](https://github.com/openai/codex/issues/27284)
- **类型**：bug · app / session / remote · 12 评论
- **要点**：macOS 本地 + Linux 远程场景下，state DB 中存在远程 thread，但 UI 列表为空

### 3. [#37458 — Windows VSCode 扩展无法加载资源](https://github.com/openai/codex/issues/37458)
- **类型**：bug · windows-os / extension · 11 评论
- **要点**：扩展启动即报 "The extension couldn't load its resources"，直接影响 Windows 用户的开箱体验

### 4. [#37180 — Windows Computer Use 审批弹窗不出现](https://github.com/openai/codex/issues/37180)
- **类型**：bug · windows-os / app / computer-use · 8 评论
- **要点**：`node_repl exec context not found` 导致 `launch_app` 失败，审批链路中断

### 5. [#37383 — Computer Use Windows 应用发现 0x80070003](https://github.com/openai/codex/issues/37383)
- **类型**：bug · windows-os / app / computer-use · 8 评论
- **要点**：`list_windows/list_apps` 在 Windows 11 Pro 25H2 上失败，与上一条同源

### 6. [#33074 — Windows 桌面端鼠标卡顿](https://github.com/openai/codex/issues/33074)
- **类型**：bug · windows-os / app / performance · 6 评论 / 👍9
- **要点**：启动/切换任务时严重卡顿，重装系统后仍复现，影响日常使用

### 7. [#33479 — 相对写入规则递归扩展触发 E2BIG](https://github.com/openai/codex/issues/33479)
- **类型**：bug · sandbox · 5 评论 / 👍3
- **要点**：`:workspace_roots` 相对路径规则在多轮中递归膨胀，最终进程启动失败，是 sandbox 模型的一个深层隐患

### 8. [#34767 — 远程控制可在同一 thread 中并发两轮](https://github.com/openai/codex/issues/34767)
- **类型**：bug · remote / session · 5 评论
- **要点**：单 thread 多 turn 并发会破坏会话线性，远程协作场景需紧急修复

### 9. [#35463 — Codex Subagent 一夜耗尽周配额](https://github.com/openai/codex/issues/35463)
- **类型**：bug · rate-limits / subagent · 5 评论
- **要点**：子代理的用量统计存在缺陷，Pro 用户短期内即被扣满整周额度，影响付费体验

### 10. [#37563 — Codex Desktop 重启后已关闭 subagent 被恢复为 Working](https://github.com/openai/codex/issues/37563)
- **类型**：bug · app / subagent · 4 评论 / 👍2
- **要点**：桌面端 rehydrate 逻辑未识别子代理终态，导致 UI 与实际状态不一致

> 其他值得跟踪：[#37532 用量异常下降](https://github.com/openai/codex/issues/37532)、[#37418 MCP 误报 startup interrupted](https://github.com/openai/codex/issues/37418)、[#35292 Esc-Esc 切换 reasoning effort](https://github.com/openai/codex/issues/35292)

---

## 四、重要 PR 进展（精选 10 条）

### 1. [#37645 — 插件安装失败分析改进](https://github.com/openai/codex/pull/37645)
为插件安装失败增加低基数、稳定的 HTTP 状态子类型（远端 catalog、变更、bundle 下载），便于归因分析。✅ 已合并

### 2. [#37644 — 通用化 Hook 处理函数执行](https://github.com/openai/codex/pull/37644)
将 hook 配置抽象为 handler kind，统一通过 hooks engine 路由；同时拒绝无法在 TOML 中表达的 MCP 工具输入（如 null），保证 trust hashing 一致性。✅ 已合并

### 3. [#37641 — 命令审批前缀规则改用 step context](https://github.com/openai/codex/pull/37641)
`allow_prefix_rules` 从当前 step 的 turn 中读取，避免使用陈旧的 turn snapshot。✅ 已合并

### 4. [#31817 — models.json 自动更新](https://github.com/openai/codex/pull/31817)
GitHub Actions 定时任务同步模型列表。🟡 OPEN

### 5. [#37622 — 编辑提示词时包含 buffered turns](https://github.com/openai/codex/pull/37622)
解决 prompt 编辑时新 turn 仍在 replay buffer 中导致查找不到的边缘场景。✅ 已合并

### 6. [#37618 — Guardian 审批改用 step 环境](https://github.com/openai/codex/pull/37618)
规避延迟环境在 turn 开始后才就绪时，Guardian 拿到 stale 工作目录的隐患。✅ 已合并

### 7. [#37610 — 工作负载身份令牌交换](https://github.com/openai/codex/pull/37610)
新增 `codex-workload-identity` crate，将文件型 JWT + 联邦规则 ID 兑换为短期 ChatGPT 凭据，支持缓存与并发合并刷新。✅ 已合并

### 8. [#37607 — 阻止启动上下文传递到子进程](https://github.com/openai/codex/pull/37607)
将 `OPENAI_FEDERATION_RULE_ID`、`OPENAI_IDENTITY_TOKEN_FILE` 标记为不可继承环境变量，关闭凭据泄露链路。✅ 已合并

### 9. [#37530 — 实现 gRPC code-mode host 服务](https://github.com/openai/codex/pull/37530)
新增 `GrpcCodeModeHost`，支持租用会话、执行/等待生命周期、过滤式工具订阅与通知。✅ 已合并

### 10. [#37527 — 终止超时的 Hook 进程树](https://github.com/openai/codex/pull/37527)
Unix 使用进程组、Windows 使用 Job Object，超时回收整棵进程树，避免僵尸子进程。✅ 已合并

> 其他值得关注：[#37533 异步命令 hook](https://github.com/openai/codex/pull/37533)、[#37538 Hook 列表暴露 executionMode](https://github.com/openai/codex/pull/37538)、[#37519 自动评审忽略规则](https://github.com/openai/codex/pull/37519)

---

## 五、功能需求趋势

1. **Windows 平台稳定性（最高优先级）**  
   Computer Use 链路（EnumWindows、node_repl 上下文、审批弹窗）、VSCode 扩展资源加载、桌面端鼠标卡顿 — 三类问题几乎覆盖近 24 小时所有高评论 Windows issue。

2. **Subagent / Delegation 体系完善**  
   - 配额计量（[#35463](https://github.com/openai/codex/issues/35463)）
   - 状态恢复（[#37563](https://github.com/openai/codex/issues/37563)）
   - 沙箱与权限递归（[#33479](https://github.com/openai/codex/issues/33479)）
   - 最少权限提案（[#36381](https://github.com/openai/codex/issues/36381)）

3. **Hooks / 扩展生态**  
   异步执行、超时控制、handler 抽象、executionMode 暴露 — 多个 PR 形成合力，hooks 正从 MVP 走向生产级。

4. **TUI 体验升级**  
   多行状态栏（👍59）、Ctrl+V 文本粘贴对称、TUI resume 重复重绘 — 社区对终端 UX 的精细化诉求强烈。

5. **新模型与协议扩展**  
   `gpt-5.5`、`gpt-5.6-sol` 已成为高频默认模型；`models.json` 自动更新机制 ([#31817](https://github.com/openai/codex/pull/31817)) 维持高频迭代。

6. **Codex Web / 云端协作**  
   [#37633](https://github.com/openai/codex/issues/37633) 提出将 ChatGPT Sites 仓库作为短期 Codex 云工作区，云端 + 本地融合方向受到关注。

---

## 六、开发者关注点（痛点摘要）

| 痛点类别 | 典型表现 | 代表 Issue |
|----------|----------|-----------|
| **Windows 兼容** | Computer Use 失败、扩展加载异常、桌面端卡顿 | [#37458](https://github.com/openai/codex/issues/37458)、[#37383](https://github.com/openai/codex/issues/37383)、[#33074](https://github.com/openai/codex/issues/33074) |
| **Subagent 计费 / 状态** | 配额异常消耗、closed 子代理被误显示 | [#35463](https://github.com/openai/codex/issues/35463)、[#37563](https://github.com/openai/codex/issues/37563) |
| **会话 / 远程控制** | 远程 thread 不可见、单 thread 多 turn 并发 | [#27284](https://github.com/openai/codex/issues/27284)、[#34767](https://github.com/openai/codex/issues/34767) |
| **TUI 细节** | 状态栏截断、Ctrl+V 文本粘贴失效、resume 重绘 | [#21653](https://github.com/openai/codex/issues/21653)、[#17103](https://github.com/openai/codex/issues/17103)、[#37635](https://github.com/openai/codex/issues/37635) |
| **安全 / 沙箱** | 相对路径递归膨胀、跨进程凭据泄露风险 | [#33479](https://github.com/openai/codex/issues/33479)、[#37607](https://github.com/openai/codex/pull/37607) |
| **MCP / 插件** | MCP 启动误报、plugin 安装失败归因 | [#37418](https://github.com/openai/codex/issues/37418)、[#37645](https://github.com/openai/codex/pull/37645) |

> 社区高频需求可归纳为三件事：**让 Windows 跑得稳、让 Subagent 算得清账、让 Hooks 真正可生产**。这三块也是近期 PR 投入最密集的方向。

---

*日报由 AI 开发工具分析助理自动生成。如需深入分析某条 Issue 或 PR，请告知具体编号。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-09** | 数据来源：github.com/google-gemini/gemini-cli

---

## 📌 今日速览

今日社区活跃度集中在 **Agent 子系统稳定性** 与 **Auto Memory 安全机制** 两条主线——多个 P1 级 Bug 显示 subagent 在终止状态上报（#22323、#21409）和 shell 命令执行（#25166）方面仍存在可靠性缺陷；同时 SandyTao520 集中提交了一批 Auto Memory 系统的 P2 改进（#26516/26522/26523/26525），聚焦低信号会话去重、敏感信息脱敏与无效补丁隔离。PR 端最大看点是 **agent-to-agent 嵌套调用能力** 落地（#28738），以及 P1 的 .gitignore 防护与沙箱 EACCES 崩溃修复。

---

## 🚀 版本发布

过去 24 小时内无新 Release。最新夜间构建版本为 `0.56.0-nightly.20260808.gcf22ac7e8`（PR #28732）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 重要性 |
|---|-------|--------|
| [\#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 在 MAX_TURNS 后错误报告 GOAL success**（12 评论）— P1 Bug，`codebase_investigator` 达到最大轮次限制仍上报成功，掩盖了中断信息，影响自动化可靠性 | ⭐⭐⭐ |
| [\#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent 永久挂起**（8 评论，8 👍）— P1 Bug，委派给 generalist agent 后即使简单操作也会卡死一小时以上，社区高赞反映普遍痛点 | ⭐⭐⭐ |
| [\#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **基于零依赖 OS 沙箱 + 事后意图路由释放模型 Bash 亲和力**（8 评论）— P2 Enhancement，针对 Gemini 3 模型偏好使用原生 POSIX 工具链的特性，提出安全沙箱方案 | ⭐⭐⭐ |
| [\#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **组件级 Robust 评测体系 EPIC**（7 评论）— P1，是 #15300 behavioral evals 的延续，已积累 76 个测试用例跨 6 个模型运行 | ⭐⭐ |
| [\#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **评估 AST 感知的文件读取/搜索/映射能力**（7 评论）— P2 Feature，调研是否能用 AST 工具精准读取方法边界、降噪 token | ⭐⭐ |
| [\#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini 几乎不会主动使用 skills 和 sub-agents**（6 评论）— P1 Bug，用户即使配置了 gradle/git skills，模型在相关任务中也不会主动调用 | ⭐⭐ |
| [\#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **停止 Auto Memory 无限重试低信号会话**（5 评论）— P2 Bug | ⭐⭐ |
| [\#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 命令完成后卡在 "Waiting input"**（4 评论，3 👍）— P1 Core Bug，简单 CLI 命令执行后状态不正确，频繁发生 | ⭐⭐ |
| [\#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **browser_agent 会话接管与锁恢复**（4 评论）— P3 Feature，BrowserManager 在 profile 被锁时 fail-fast，需要更智能的会话恢复 | ⭐ |
| [\#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent 应避免破坏性行为**（3 评论）— P2，模型偶发使用 `git reset --force` 等危险命令 | ⭐ |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 内容 |
|---|----|----|
| [\#28738](https://github.com/google-gemini/gemini-cli/pull/28738) | **Allow agents to call agents**（size/L, help wanted）— 允许 subagent 通过 `tools:` frontmatter 委派给其他 subagent 或递归调用自身，Fixes #22092，是 subagent 能力的重要扩展 |
| [\#28737](https://github.com/google-gemini/gemini-cli/pull/28737) | **Feat/OpenAI compatible auth**（size/XL, CLOSED）— 引入 OpenAI 兼容认证层，扩展模型接入生态 |
| [\#28619](https://github.com/google-gemini/gemini-cli/pull/28619) | **忽略 .env 与 .ai 文件 + 单元测试**（P1）— 防止敏感文件被意外提交，强化默认安全防护 |
| [\#28735](https://github.com/google-gemini/gemini-cli/pull/28735) | **fix: formatTruncatedToolOutput 非正 maxChars 返回原内容**（P1, core, size/XS）— Fixes #28620，防止输出膨胀 |
| [\#28736](https://github.com/google-gemini/gemini-cli/pull/28736) | **fix: oauth 回调超时清理**（security, size/S）— Fixes #28652，认证完成后及时清理定时器，避免悬挂 timeout |
| [\#28679](https://github.com/google-gemini/gemini-cli/pull/28679) | **改善 Vertex AI 401 错误信息**（P2, security）— 当使用 Gemini API key 而非 GCP 凭证时报错更友好 |
| [\#28734](https://github.com/google-gemini/gemini-cli/pull/28734) | **fix: resolveToRealPath 处理 EACCES 防止沙箱崩溃**（P1, platform）— macOS Seatbelt 沙箱下 CWD 在 Git 仓库内时启动崩溃 |
| [\#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | **fix(vscode-ide-companion): 停止 Disposable 泄漏**（CLOSED）— Fixes #27790，因括号语法错误导致两个 Disposable 未注册到 subscriptions |
| [\#28608](https://github.com/google-gemini/gemini-cli/pull/28608) | **预览模型 404 时回退到稳定模型**（P2, agent, size/M）— Fixes #28600，解决 GEMINI API key 对预览模型无权限时无回退路径的问题 |
| [\#28732](https://github.com/google-gemini/gemini-cli/pull/28732) | **chore/release: nightly 版本升至 0.56.0-nightly.20260808** | 自动化发版 |

---

## 📈 功能需求趋势

从近 24 小时活跃的 50 条 Issue 中，可归纳出以下主流方向：

1. **🧠 Subagent 能力深化**（热度最高）— agent 嵌套调用（#22092→#28738）、subagent trajectory 可视化（#22598）、bug 报告包含 subagent 上下文（#21763），社区期待 subagent 成为一等公民
2. **🛡️ 沙箱与安全** — 零依赖 OS 沙箱（#19873）、Auto Memory 敏感信息脱敏（#26525）、.env/.ai 忽略（#28619）持续受到关注
3. **⚡ AST 感知工具链** — #22745 与 #22746 形成 EPIC，探索用 AST 工具提升 codebase mapping 精度
4. **🧪 评测体系建设** — #24353 推动 component-level evals 体系化，从 76 个测试起步
5. **🌐 多模型/认证生态** — OpenAI 兼容认证（#28737）、Vertex AI 错误改善（#28679）、预览模型回退（#28608）共同推动接入灵活性
6. **🖥️ 终端性能与渲染** — terminalBuffer 外部编辑器退出刷新（#24935）、resize 高性能渲染（#21924）

---

## 💬 开发者关注点（高频痛点）

| 痛点 | 代表 Issue | 影响 |
|------|----------|------|
| **Agent 行为"过度自主"** — 用户配置 skills/sub-agents 后模型不主动调用（#21968）；v0.33.0 后未授权调用 subagent（#22093） | 违反用户意图 | ⭐⭐⭐ |
| **执行挂起与状态错报** — generalist agent 卡死（#21409）；shell 假死（#25166）；subagent 错误上报 success（#22323） | 可靠性、自动化受损 | ⭐⭐⭐ |
| **Browser Agent 在非主流环境失效** — Wayland 下崩溃（#21983）、忽略 settings.json 配置（#22267）、锁机制脆弱（#22232） | 跨平台体验 | ⭐⭐ |
| **Auto Memory 数据卫生** — 低信号会话无限循环（#26522）、秘密泄露到模型上下文（#26525）、无效补丁静默丢弃（#26523） | 隐私与数据一致性 | ⭐⭐ |
| **Agent 自我认知不足** — 无法准确描述自身 CLI flags 与快捷键（#21432） | 用户体验、可调试性 | ⭐ |

> **总结**：当前 Gemini CLI 已进入"能力扩展与可靠性并行攻坚"阶段——PR #28738 释放了 agent 组合的编程能力，但 Issue #22323、#21409、#25166 等 P1 Bug 提示 subagent 的终止语义与执行状态机仍需打磨；Auto Memory 4 个关联 Issue 则反映新功能的"安全加固"窗口期。建议社区重点跟踪 agent 调用图、行为评测与隐私合规三条主线。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-09**

---

## 📌 今日速览

过去 24 小时内 Copilot CLI 仓库无新版本发布、无 PR 合并，但社区讨论热度未减：累计 **23 条 Issue 更新**（其中 9 条关闭、14 条仍开放）。问题集中在三个高频方向——**长时间会话的性能退化**（#4299、#4222）、**Windows 平台兼容性**（#4285、#4399、#4401）、以及**会话/模型状态恢复**（#4329、#4397）。另外，针对 Anthropic 后端引入 prompt cache 的提议（#4256）以 👍3 票成为本期最受认可的优化方向。

---

## 🚀 版本发布

**本期无新版本发布。** 社区仍停留在 1.0.77 / 1.0.78 阶段，#4402 中有用户报告 npm 全局安装的 `copilot` shim 在 101 秒内被替换为不同版本，说明版本分发链路本身存在不稳定信号，建议关注后续 patch 发布。

---

## 🔥 社区热点 Issues（精选 10 条）

### 性能与稳定性

**1. [#4299](https://github.com/github/copilot-cli/issues/4299) — 长时间会话下输入延迟飙升【已关闭】**
作者 mmitche 反馈：在运行后台 agent 的长会话中，输入延迟逐渐增大到不可用程度。影响版本 1.0.76-5。👍1。这是一类典型的「状态累积型」性能问题，对重度用户影响显著，关闭后建议关注后续回归测试。

**2. [#4256](https://github.com/github/copilot-cli/issues/4256) — 为 Anthropic 请求添加 `cache_control` 断点【已关闭，👍3】**
提议在 Claude 后端请求中显式标记 system prompt、tool definitions 等可复用上下文，以复用 prompt cache、降低 token 成本与首 token 延迟。本期获赞最高，说明社区对**成本与响应速度**的关注度持续上升。

**3. [#4222](https://github.com/github/copilot-cli/issues/4222) — 主面板冻结回归【已关闭】**
曾于 #2802（v1.0.31）修复的 React/Ink 无限渲染循环在 v1.0.72+ 重新出现：UI 卡死在 "Working..."，`/resume` 才吐出内容。主要影响 VS Code 集成终端 + 原生 Windows。该回归出现在长期维护的渲染路径上，值得在升级前重点验证。

### 平台与配置

**4. [#4285](https://github.com/github/copilot-cli/issues/4285) — 1.0.76-1 静默退出码 1【已关闭，👍2】**
当日志级别设为 `none`/`error`/`warning`/`info`/`debug` 时，CLI 在会话启动时立即以退出码 1 终止且无任何输出，文件日志也未生成。`all` 与 `default` 正常。属于**启动期静默失败**类问题，定位与复现成本高，影响 Windows 调试体验。

**5. [#4399](https://github.com/github/copilot-cli/issues/4399) — Windows PowerShell 下 `.claude/settings.local.json` 跨工具 hook 失败【开放】**
当 Claude Code hook 配置中使用 `||`、`&&` 等 POSIX shell 操作符时，Copilot CLI 在 Windows PowerShell 下无法执行。该问题折射出 CLI **跨平台 shell 兼容层**尚未覆盖 hooks 这类集成点。

**6. [#4401](https://github.com/github/copilot-cli/issues/4401) — skill 工具找不到 `~/.agents/skills` 中的有效 skill【开放】**
v1.0.78 上 skill 工具无法发现或调用 `~/.agents/skills` 下存在的 SKILL.md，被怀疑是 #2230 修复的回归。属于**功能性回归**，对依赖自定义 skill 的工作流影响直接。

### 安装与分发

**7. [#4402](https://github.com/github/copilot-cli/issues/4402) — npm bin/copilot 是 loader 而非版本 pin【开放】**
同一全局路径在 101 秒内执行了 1.0.77 与 1.0.78 两个版本，`--prefer-version` 可缓解但未文档化。揭示了 CLI 当前**版本分发机制缺乏稳定性保证**，对 CI/生产环境是潜在风险。

### 会话与模型

**8. [#4329](https://github.com/github/copilot-cli/issues/4329) — 恢复会话后 autopilot 未真正启用【已关闭】**
1.0.77 上使用 Shift+Tab 启用 autopilot 后 `/usage` 等需要审批的操作仍然失败。问题根源在状态恢复时未同步 autopilot 状态。属于典型的**状态机同步缺陷**。

**9. [#4397](https://github.com/github/copilot-cli/issues/4397) — resume 会话自动切回默认模型【开放】**
使用 `copilot --yolo --model=gpt-5.6-...` 启动后再 resume，模型被重置为默认值。对按会话切换模型的工作流造成破坏。

**10. [#4405](https://github.com/github/copilot-cli/issues/4405) — Codespaces 中 Copilot Free 报「No model available」【开放】**
Copilot Free 账号在 GitHub Codespaces 中启动 CLI 后每条 prompt 都立即失败，且经更新、自动选模型、token 隔离、重新登录均无法解决。对 Codespaces 用户群（免费层）影响面大。

---

## 🛠️ 重要 PR 进展

**本期无 PR 更新。** 仓库近 24 小时内无新合并或活跃 PR。建议留意下周新版本发布时通常会同步合并的修复 PR（特别是 #4299、#4285、#4222、#4329 这几个已关闭 Issue 对应的修复）。

---

## 📈 功能需求趋势

从本期活跃 Issue 中提炼，社区关注的功能方向呈现以下分布：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **性能与缓存优化** | #4256, #4299 | ⭐⭐⭐ 高 |
| **Windows / 跨平台兼容** | #4285, #4399, #4401, #4222 | ⭐⭐⭐ 高 |
| **会话与模型状态恢复** | #4397, #4329, #4395 | ⭐⭐ 中高 |
| **身份认证 / 企业能力** | #4408, #4405, #4400 | ⭐⭐ 中高 |
| **权限与沙箱** | #4398, #4329 | ⭐⭐ 中 |
| **ACP / 编程化接口** | #4275 | ⭐⭐ 中 |
| **本地化（i18n）** | #4407 | ⭐ 中低 |
| **UX 可配置性** | #4394, #4411 | ⭐ 中低 |
| **自定义 Agent / Skills** | #4410, #4401 | ⭐ 中低 |

可以看到，**「性能」「跨平台」「企业级身份/路由」** 是当前呼声最高的三大方向；而「**ACP session config 暴露**」「**Auto-mode 增强**」「**中文本地化**」等则是更具产品演进的特征信号。

---

## 💬 开发者关注点

综合 Issue 摘要中的高频痛点，可归纳出以下 5 类开发者集中反馈：

1. **「恢复会话 = 状态丢失」综合症**——autopilot 状态（#4329）、模型选择（#4397）、会话快速删除（#4395）等在恢复或重启后失效，是开发者最常碰到的体验断裂点。
2. **Windows 是当前最大短板**——从渲染冻结（#4222）、日志级别静默退出（#4285）、PowerShell hook 解析失败（#4399）到 skill 发现异常（#4401），Windows 链路问题密度显著高于 macOS/Linux。
3. **「静默失败」是诊断噩梦**——多个 Issue（#4285、#4405、#4409）都报告 CLI 退出但没有任何输出或错误提示，开发者在排查时缺乏可观测信号。
4. **版本分发的确定性**——#4402 揭示 npm shim 不锁定版本，CI/团队协作场景需要 `--prefer-version` 这种隐藏开关，说明**版本契约尚未对外稳定**。
5. **企业 / 路由场景仍偏脆弱**——#4408（MCP OAuth 跨源失败）、#4405（Codespaces 免费层模型不可用）、#4409（`cli_remote_control_enabled` 无指示）共同指向**企业身份层与 CLI 客户端之间的契约仍有缝隙**。

---

*日报基于 `github.com/github/copilot-cli` 公开数据生成，仅反映过去 24 小时的社区动态，不构成对项目路线的判断。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：** 2026-08-09
**数据范围：** 过去 24 小时 GitHub 活动
**数据来源：** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## ⚠️ 数据说明

本次日报统计窗口（过去 24 小时）内社区活跃度较低：**无新版本发布、无 PR 更新、仅有 2 条 Issue 被更新**。因此本报告将聚焦于这两条 Issue，并坦率标注趋势分析的数据局限性。

---

## 1. 今日速览

- **#2597 暴露严重生成失控 Bug**——单个 LLM step 持续 53 分钟、输出 88,114 token 的乱码文本，社区需高度关注其稳定性和 token 计费风险。
- **#1283 持续发酵**——跨会话持久化 Memory System 提案自 2026-02 提出以来已积累 25 条评论，是社区当前最热的功能诉求。
- 仓库今日整体静默，无代码合入或新版本，建议关注官方对上述两条 Issue 的回应节奏。

---

## 2. 版本发布

**无新版本发布。**（过去 24 小时内）

---

## 3. 社区热点 Issues

> 说明：过去 24 小时仅 2 条 Issue 有更新，以下为全部条目（非挑选 10 条）。

### 🔥 #1283 — Feature Request: Memory System - Persistent context across sessions
- **状态：** OPEN
- **作者：** CatKang | **创建：** 2026-02-27 | **更新：** 2026-08-08
- **评论：** 25 条 | **👍：** 0
- **链接：** [MoonshotAI/kimi-cli#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **摘要：** 请求实现完整的 Memory System，使 Kimi Code CLI 能在会话之间持久化上下文、项目模式和用户偏好，涵盖自动记忆（AI 管理的笔记）和手动记忆（用户通过配置自定义指令）。
- **为何重要：**
  - 这是社区**长期高热度需求**（存在已超 5 个月）。
  - 25 条评论表明讨论深入，涉及自动/手动记忆机制分离、隐私边界、上下文注入时机等核心架构问题。
  - 反映用户对 AI Agent「上下文连续性」的强烈期待——这是 Agent 类工具迈向生产级使用的关键能力。

### 🐛 #2597 — Bug: Runaway garbled generation — 88k tokens of gibberish in one LLM step
- **状态：** OPEN
- **作者：** kdp123 | **创建/更新：** 2026-08-08
- **评论：** 0 条 | **👍：** 0
- **链接：** [MoonshotAI/kimi-cli#2597](https://github.com/MoonshotAI/kimi-cli/issues/2597)
- **摘要：** 在正常交互中，模型出现失控生成：单个 LLM step 耗时 **3,214 秒（约 53 分钟）**，输出 **88,114 个 token** 的不连贯、重复性乱码（随机多语言片段、破损 Markdown、无尽重复）。
- **为何重要：**
  - **严重性极高**：单次失控 53 分钟 + 88k token，不仅影响稳定性，还直接关联**用户成本**（token 计费风险）和**可靠性信任**。
  - 属于「模型行为失控」类问题，需要推理终止机制、最大输出长度防护、断路器等系统级防护。
  - 0 评论 + 新建 24h 内，可能尚未引起官方重视，建议社区跟进。

---

## 4. 重要 PR 进展

**无 PR 更新。**（过去 24 小时内）

---

## 5. 功能需求趋势

> ⚠️ **数据局限性声明：** 以下趋势仅基于过去 24 小时更新的 2 条 Issue 提炼，样本极小，无法代表社区全貌（仓库历史 Issues 未包含在本次数据中）。

| 趋势方向 | 代表 Issue | 信号强度 |
|---------|-----------|---------|
| **持久化记忆 / 跨会话上下文** | [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | ⭐⭐⭐⭐⭐ 5 个月长生命周期 + 25 评论 |
| **生成稳定性 / 失控防护** | [#2597](https://github.com/MoonshotAI/kimi-cli/issues/2597) | ⭐⭐⭐⭐ 涉及可靠性与计费核心问题 |

**主要洞察：**
- 「**Memory System**」是当前可见数据中最明确的功能信号，社区已就此展开架构级讨论。
- 「**生成鲁棒性 / 资源防护**」虽仅有 1 例，但问题严重性足以提示官方需建立 SOP（如 step timeout、token budget、stop sequences 兜底）。

---

## 6. 开发者关注点

基于过去 24 小时的有限数据，提炼以下开发者痛点：

### 🎯 痛点一：上下文连续性缺失
- **需求：** Kimi Code CLI 应像人类协作者一样，记住项目约定、历史决策、用户偏好，避免每次会话从零开始。
- **场景：** 长期项目协作、团队 onboarding、个人使用习惯沉淀。
- **现状缺口：** 当前 CLI 似乎仍是「无状态」设计，需要用户每次手动注入 CLAUDE.md / AGENTS.md 等配置文件。

### ⚠️ 痛点二：失控生成的系统性风险
- **风险维度：**
  - **成本风险：** 88k token 乱码在按量计费下可能产生显著账单。
  - **体验风险：** 53 分钟「卡死」无反馈，用户难以判断是 hang 还是慢响应。
  - **信任风险：** Agent 类工具的核心价值是「可托付」，失控生成直接侵蚀信任。
- **建议方向：**
  - step-level timeout + 进度心跳
  - 输出 token 软/硬上限 + 异常模式检测（重复率、字符熵）
  - 用户侧可中断 + 中断后上下文保留

---

## 📌 后续建议

1. **官方响应优先级建议：** #2597（严重 Bug）应优先于 #1283（功能增强）处理。
2. **关注 #1283 设计讨论：** 该 Issue 25 条评论中可能包含高质量架构提案，值得产品/技术决策者查阅。
3. **扩大数据窗口观察：** 建议改为 7 天滚动窗口，以获得更可靠的社区趋势信号。

---

*本报告基于 GitHub 公开数据自动生成，分析仅覆盖 2026-08-08 ~ 2026-08-09 期间有更新的 Issue/PR。如需更全面的趋势分析，建议提供更长周期的数据。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-09

## � 今日速览

今日 OpenCode 仓库无新版本发布，核心动态集中在 **TUI 体验打磨** 与 **OpenCode Go 网关的 deepseek-v4-flash 回归 bug** 上。kitlangton 一人提交并关闭了多条 TUI/Core 修复 PR（含 prompt cache key、plugin reload flush、tab 快捷键标签等），显著推进了 v2 CI 的稳定性；同时社区仍在追踪 v1.x 的 SQLite 无界增长、CLI 复制粘贴失效等长期未解痛点。

---

## 🚀 版本发布

无新版本发布。

---

## � 社区热点 Issues

| # | Issue | 评论 / 👍 | 关注理由 |
|---|-------|----------|---------|
| 1 | [#27167](https://github.com/anomalyco/opencode/issues/27167) — `[FEATURE]` 新增 `/goal` 原生会话目标机制 | 69 / 128 👍 | 今日热度最高的功能提案，社区希望为会话引入生命周期与持久化目标能力，已获 128 票支持，是 OpenCode "custom slash commands" 之后最被期待的扩展方向 |
| 2 | [#13984](https://github.com/anomalyco/opencode/issues/13984) — CLI 中无法复制粘贴 | 55 / 27 👍 | 自 2026-02 起的长期未解 bug，55 条评论反映其在多个终端下的反复出现，是新手用户最常踩的坑 |
| 3 | [#33356](https://github.com/anomalyco/opencode/issues/33356) — `opencode.db` 无界增长至 13 GB+ | 15 / 4 👍 | 2.0 关键基础设施缺陷：`event` 表缺少保留/压缩策略，长会话实例已把 22 GB 卷写到 97%，影响所有长期用户 |
| 4 | [#14965](https://github.com/anomalyco/opencode/issues/14965) — 启动延迟（仅 Ghostty 出现） | 19 / 13 👍 | 终端兼容性问题线索明确（Ghostty vs Terminal/Alacritty/Kitty），对依赖 Ghostty 工作流的用户影响显著 |
| 5 | [#41306](https://github.com/anomalyco/opencode/issues/41306) — `#41211` 修复后 deepseek-v4-flash 仍 400（08-09 复现） | 3 / 0 👍 | 今日最活跃的回归集群（与 #41300/#41314/#41322 互为关联），根因疑似 OpenCode Go 网关注入前导空格 |
| 6 | [#38993](https://github.com/anomalyco/opencode/issues/38993) — TUI 中动态增删 MCP 服务器 | 5 / 0 👍 | 延续 #37712 的运行时 MCP 控制思路，将 HTTP 能力下沉到 TUI 交互层 |
| 7 | [#30611](https://github.com/anomalyco/opencode/issues/30611) — 网络瞬时错误直接杀会话 | 6 / 1 👍 | 重试策略只覆盖 `ECONNRESET`，其他传输失败被误判为硬错误，影响稳定性体验 |
| 8 | [#32548](https://github.com/anomalyco/opencode/issues/32548) — Step cap 触发 400（含 thinking 的 Claude 模型） | 5 / 0 👍 | Anthropic 拒绝以 assistant 角色作为 prefill，触发条件明确，影响 Claude thinking 用户 |
| 9 | [#31307](https://github.com/anomalyco/opencode/issues/31307) — 同项目多实例共享同一 SQLite session | 4 / 3 👍 | 数据隔离缺陷，违反"每个终端独立会话"的直觉，与 #33356 的 SQLite 设计问题相关 |
| 10 | [#41300](https://github.com/anomalyco/opencode/issues/41300) — `opencode-go/deepseek-v4-flash` 模型名前导空格 | 4 / 1 👍 | 与 #41306/#41314/#41322 形成今日 deepseek 故障矩阵，跨 Desktop、CLI、Console Go 三端可复现 |

---

## 🛠 重要 PR 进展

| # | PR | 状态 | 关键内容 |
|---|----|-----|---------|
| 1 | [#41342](https://github.com/anomalyco/opencode/pull/41342) — `feat(tui)`: 在 vertical tabs 中显示 session 分支 | OPEN | 默认分支保持静默，feature 分支以 `project:branch` 形式展示，长行右端淡出；补全会话导航的 VCS 上下文 |
| 2 | [#41189](https://github.com/anomalyco/opencode/pull/41189) — `feat(tui)`: 插件槽位区域结构化 | OPEN | 插件位置从硬编码 `prompt.footer.end` 改为有结构的"区域 + 命名宿主部件"，插件可相对插入 |
| 3 | [#41202](https://github.com/anomalyco/opencode/pull/41202) — `fix(core)`: 文件变更前先授权再加锁 | OPEN | `write/edit/patch` 引入"能力授权 → 全局路径锁"两阶段，修复并发竞态与权限泄漏 |
| 4 | [#7156](https://github.com/anomalyco/opencode/pull/7156) — `feat`: agent default variant 在 TUI/Desktop 中生效 | OPEN | 跨半年的功能 PR（关闭 #22065），让当前模型支持的 variant 在选模型时被尊重 |
| 5 | [#41343](https://github.com/anomalyco/opencode/pull/41343) — `fix(codegen)`: 生成 manifest 使用 prettier | CLOSED | 修复 v2 CI 的最后一处红灯：`script/generate.ts` 改走 prettier (json parser) |
| 6 | [#41309](https://github.com/anomalyco/opencode/pull/41309) — `fix(core)`: flush plugin reload generations | CLOSED | `PluginSupervisor.flush` 现等待当前激活代（含热重载），并修复可能死锁的回归测试 |
| 7 | [#41307](https://github.com/anomalyco/opencode/pull/41307) — `fix(core)`: 更新录制 prompt cache key | CLOSED | 跟进 `prompt_cache_key` 转发变更，恢复 `SessionRunnerLLM` 测试 |
| 8 | [#41335](https://github.com/anomalyco/opencode/pull/41335) — `fix(core)`: 通配符转义 + patch 插入锚定 | OPEN | 关闭 #41333；修复 wildcard 字面量匹配与 patch 锚点定位两处缺陷 |
| 9 | [#41336](https://github.com/anomalyco/opencode/pull/41336) — `fix(cli)`: 新增 fish shell completion | CLOSED | 修复 #41232：`opencode completion fish` 此前错误输出 bash/zsh 脚本 |
| 10 | [#35935](https://github.com/anomalyco/opencode/pull/35935) — `feat(observability)`: v2 GenAI tracing | CLOSED | 通过 OTLP 提供每 agent turn 的端到端可观测，覆盖 model/HTTP/WS/工具/重试/压缩/子 agent |

---

## 📈 功能需求趋势

从近 24 小时活跃的 Issue/PR 综合来看，社区需求集中在以下方向：

1. **会话生命周期与可观察性**
   - 提案：原生 session goal（#27167）、session 分支显示（#41342）、plugin 区域结构化（#41189）、v2 GenAI tracing（#35935）。说明 OpenCode 已从"单次问答 CLI"走向"长周期 agent 编排"，社区对**状态管理 + 可调试性**需求陡增。

2. **多模型网关稳定性**
   - 今日 deepseek-v4-flash 矩阵（#41300/#41306/#41314/#41322）+ Hermes Agent gpt-5.6-luna `finish_reason:null`（#40420）+ Moonshot/Kimi 挂死（#41273）。**OpenCode Go 作为统一网关**已成多模型入口，模型命名规范化与 streaming 终止语义是首要问题。

3. **数据库与本地存储治理**
   - SQLite 13 GB 无界增长（#33356）、多实例共享 session（#31307）、MCP 重复子进程（#31554）。本地状态层需要**保留策略、进程隔离、生命周期清理**三件套。

4. **终端 / Desktop 跨平台一致性**
   - Ghostty 启动延迟（#14965）、Kitty 链接点击（#35649）、PowerShell 7 MSIX（#41321）、Desktop `/{commands}` 在 ECC 插件下失效（#34776）、Desktop 1.18.15 plugin slash regression（#41339）。TUI/Desktop/Web 的边界一致性是用户体验的最大变量。

5. **IDE/编辑器扩展**
   - Pkl 内置 LSP（#35927）、LaTeX `\[...\]` 渲染（#35951）、MS Office 拖拽（#27689）反映出 OpenCode **逐步演化为"多语言 IDE 替代"** 的定位。

6. **可观测/生态插件**
   - PostHog observability 插件（#35946）、GenAI tracing（#35935）、llms.txt 自动生成（#35953）显示社区正在为 OpenCode 搭建**第三方可观测生态**。

---

## 💡 开发者关注点

**高频痛点：**

- **可靠性优先于新功能**：deepseek 回归、SQLite 13 GB、MCP 子进程泄漏、Claude step-cap 400 —— 开发者最关心的不是"还能加什么"，而是"已用的不要坏"。
- **终端差异是隐形税**：Ghostty/Kitty/Alacritty/PowerShell 7/WSL 各有兼容问题，OpenCode 的 TUI 层需补一份"终端矩阵"测试。
- **Desktop 1.18.x 出现多处 regression**：plugin slash 命令、命令面板、ECC 插件兼容，建议下次小版本优先做 Desktop 回归包。
- **OpenCode Go 网关可观察性不足**：用户拿到的是 `400 invalid_request_error`，缺少 debug 头/日志指引，建议在错误响应中透传上游字段。
- **网络瞬时错误处理偏严格**（#30611）：多数重试策略仅覆盖 `ECONNRESET`，开发者呼吁扩展到 TLS/DNS/超时等场景。

**高频需求：**

- 一份"我能直接配的 retention/compaction"开关（呼应 #33356）。
- OpenCode Go 的模型名校验与白名单（呼应 deepseek 矩阵）。
- TUI 内的 MCP server 增删 UI（#38993）。
- 中文模型的成本统计（#34877 当前显示 `$0.00`）。
- 长会话的存储归档/导出能力。

---

> 📅 数据窗口：2026-08-08 → 2026-08-09 ｜ 仓库：`anomalyco/opencode`
> 本期日报由社区动态自动汇总，所有链接指向 GitHub 原始 Issue / PR，欢迎前往讨论或补充上下文。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报
**日期**：2026-08-09
**数据源**：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) (earendil-works/pi)

---

## 📌 今日速览

今日社区活跃度较高，过去 24 小时共有 **35 个 Issue** 和 **12 个 PR** 更新。**openai-codex 流式请求可靠性**（#4945，76 条评论）仍是核心痛点，伴随相关补丁 PR 同步推进；**自动压缩（auto-compaction）触发时机缺陷**成为第二大热点，从 issue 到修复 PR（#7810、#7821）形成完整闭环；TUI 全屏模式的复制/滚动/鼠标交互也持续暴露细节问题，相关 PR 集中合并。

---

## 🚀 版本发布

过去 24 小时**无新版本发布**。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 评论 / 👍 | 为什么重要 |
|---|---|---|---|---|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex Connection Reliability Issues** | OPEN / inprogress | 76 / 31 | 社区反馈**最强烈**的长期 bug：TUI 长时间卡死在 `Working...`，仅 Esc 可恢复。覆盖 gpt-5.5 长思考任务场景，多名用户高频复现 |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **auto-compaction 越过 100% 才触发** | OPEN / bug | 15 / 15 | 一次 gpt-5.6-sol 任务跑 2 小时，到 **373k token 被 API 拒绝**才压缩；用户期望按周期检查而非仅 `agent_end` 时 |
| [#7821](https://github.com/earendil-works/pi/issues/7821) | Auto-compaction 等待 agent_end 期间累积 token | CLOSED | 3 | 上一条的并行案例，**0.84.1** 实测 272k 配置下越过阈值继续发送请求 |
| [#7543](https://github.com/earendil-works/pi/issues/7543) | Meta Model API 接入请求（Muse Spark） | CLOSED / no-action | 3 / 3 | 反映用户对**新模型供应商**的接入诉求；被维护者标记 no-action，但仍有 3 👍 |
| [#7836](https://github.com/earendil-works/pi/issues/7836) | Edit 模糊匹配对空白长度差异失败 | CLOSED | 2 / 1 | 修复了**小模型 Edit 工具调用**频繁失败的根因之一（`normalizeForFuzzyMatch` 未折叠空白） |
| [#7837](https://github.com/earendil-works/pi/issues/7837) | 全屏 TUI 鼠标选择静默覆盖系统剪贴板 | CLOSED | 2 | 隐私/UX 问题：OSC 52 target=c **无 modifier、无设置**即写入剪贴板；引发安全讨论 |
| [#7734](https://github.com/earendil-works/pi/issues/7734) | print mode + extensions + 子 agent 导致退出挂起 | CLOSED / bug | 2 | 0.84.0 / 0.83.0 复现；影响**自动化批量任务**（print 模式），14 个 extensions + subagents 即触发 |
| [#7782](https://github.com/earendil-works/pi/issues/7782) | Bedrock 无效 tool call "投毒" session | CLOSED / bug | 2 | 严重：**持久化**无效工具调用后每次 replay 都被 Bedrock 拒绝，**session 永久砖化**；暴露工具参数校验缺失 |
| [#7820](https://github.com/earendil-works/pi/issues/7820) | openai-codex 流式请求无 retryProviderRequest 包装 | CLOSED | 2 | #4945 的同源问题：gpt-5.6-sol **30% 长思考流**因 `WebSocket 1006` 中途断开全部不可恢复 |
| [#7816](https://github.com/earendil-works/pi/issues/7816) | 重载时 in-flight 命令的上下文陈旧报错 | CLOSED | 2 | 反映**扩展生命周期**与 reload 路径的边界条件；附可复现的 10 行扩展代码 |

> 备注：#7822（误开）、#7826（"del" 空内容）已自行关闭，不计入热点。

---

## 🛠 重要 PR 进展

| # | 标题 | 状态 | 功能/修复要点 |
|---|---|---|---|
| [#7810](https://github.com/earendil-works/pi/pull/7810) | **reject concurrent compaction calls** | CLOSED | 修复快速连按 `/compact` 导致 TUI 崩溃（`AbortController.signal` 异常）——直接对应社区 #6879 痛点 |
| [#7834](https://github.com/earendil-works/pi/pull/7834) | `--version` 输出 runtime (bun/node/deno) | CLOSED | 升级诊断效率：`0.84.1 (bun)`；closes #7244 |
| [#7833](https://github.com/earendil-works/pi/pull/7833) | notify 扩展改用 `agent_settled` | CLOSED | 修复 `'Ready for input'` 通知在**自动重试/压缩重试/排队续跑**完成前误触发的时序 bug |
| [#7811](https://github.com/earendil-works/pi/pull/7811) | **向原生 DeepSeek 发送 `max_tokens`** | CLOSED | DeepSeek **忽略** `max_completion_tokens`，改用文档字段 `max_tokens`，输出限制才生效 |
| [#7817](https://github.com/earendil-works/pi/pull/7817) | `incomplete_details.reason='length'` 视为正常停止 | CLOSED | 兼容**豆包/火山 Ark** 等 OpenAI 兼容供应商的 `length` 停止原因，不再误判为错误 |
| [#7823](https://github.com/earendil-works/pi/pull/7823) | **移植 oh-my-pi A 级能力到核心** | CLOSED | 一次性引入：stream rules（命中模式后回滚 partial 文本并注入 reminder）、subagent tools、advisor、cross-session memory |
| [#7807](https://github.com/earendil-works/pi/pull/7807) | DeepSeek V4 Flash 暴露 `low` 推理强度 | OPEN | 区分 V4 Pro/Flow 的 effort 映射：Flash 的 `low` 不再被错误升级为 `high` |
| [#7801](https://github.com/earendil-works/pi/pull/7801) | **延迟加载非常用语法高亮 grammar** | OPEN | mitsuhiko 本人提交：通过按需加载减小 bundle；已知加载后会触发 UI 刷新，作者在权衡 |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | 内置 LLM Gateway / DevPass providers | OPEN | OpenRouter 风格的统一路由；替换曾被自动关闭的 #7480 |
| [#7713](https://github.com/earendil-works/pi/pull/7713) | `StreamAssistant` + telemetry for harness v2 | OPEN / inprogress | L1 层流式助手与遥测上下文对接 |
| [#7721](https://github.com/earendil-works/pi/pull/7721) | 全屏复制避免多余换行 | CLOSED | 修复长行 wrap 后**每个可视行被复制为独立行**的 bug |
| [#7840](https://github.com/earendil-works/pi/pull/7840) | README 新增阿里云 bailian-cli | CLOSED | 文档：在 "Related Tools" 区列出**阿里云 Model Studio 官方 CLI** |

---

## 📈 功能需求趋势

通过对今日 Issues 的归类，社区关注方向呈以下分布：

1. **Provider / 模型生态扩展（≈25%）**
   - Meta Model API（#7543）、Cloudflare Workers AI Gateway（#7838）、LLM Gateway（PR #7610）、阿里云 bailian-cli（PR #7840）
   - 趋势：从单一 OpenAI/Anthropic 向**多云 + 边缘推理网关**延展

2. **流式 & 压缩可靠性（≈20%）**
   - openai-codex 断流（#4945、#7820）、auto-compaction 时机（#6879、#7821、PR #7810、#7833）
   - 趋势：长上下文 + 长思考模型驱动下，**重试、压缩、终止时序**成为稳定性核心

3. **TUI / 全屏交互打磨（≈18%）**
   - 全屏剪贴板（#7837）、鼠标滚轮步长（#7765）、行级滚动（#7830）、行尾剪贴板换行（PR #7721）、overlay 渲染残留（#7839）、正则模式 TUI 行重复（#7839）
   - 趋势：fullscreen 模式成为重点投入方向，细节体验持续打磨

4. **工具调用与 Edit 鲁棒性（≈12%）**
   - Edit 模糊匹配空白（#7836）、Edit 单对象参数（#7835）、Bedrock 工具参数校验（#7782）
   - 趋势：**小模型 Edit 失败率高**正在被系统性修复

5. **设置/多 Profile / 多登录（≈10%）**
   - 多 provider 登录（#7814）、多 settings profile（#7813）、settings.json 解析失败静默（#7829）
   - 趋势：从"单一配置"走向**多 Profile、多账户、企业/个人切换**

6. **扩展生态与安全（≈10%）**
   - 包安全报告（#7825 恶意包 omp-undo-redo 致 2-5s 延迟）、扩展上下文 API（#7828、#7831、#7824）、Markdown 扩展（#7828）
   - 趋势：**扩展接口边界条件 + 包审核**受到更多关注

7. **会话生命周期（≈5%）**
   - 删活动 session（#7818）、`immediateUserMessage` 即时反馈（#7819）、TUI 行滚动（#7827）

---

## 👨‍💻 开发者关注点

**1. 长任务链路稳定性仍是 #1 痛点**
openai-codex + gpt-5.x 长思考场景下，**流式断连无重试**与**自动压缩触发过晚**两条问题反复出现（#4945、#6879、#7820）。多位开发者实测给出具体数字（30% 失败率、373k token 才压缩），期望维护者按"每轮"或"按阈值定期"检查，而非依赖 `agent_end` 这种尾部事件。

**2. 工具调用健壮性亟待"白盒化"**
Bedrock 无效参数"投毒"session 永久砖化（#7782）让开发者对**session 持久化前的校验/消毒**提出明确诉求；Edit 工具对单对象与数组参数的处理不一致（#7835）也让模型友好性受损。这指向一个共同诉求：**让工具层对脏输入更宽容、对坏数据更严格**。

**3. TUI 全屏模式的"最后一公里"**
全屏 TUI 从可用走向**好用**的过程暴露出一批细节：OSC 52 静默覆盖剪贴板、wrap 行复制多余换行、滚轮步长硬编码 1 行、overlay 重绘残留。开发者已经习惯用 fullscreen 做长 diff 阅读，对**键盘/鼠标/剪贴板三方一致性**的期待显著提升。

**4. Provider 抽象层的边界**
从 Cloudflare Workers AI binding、LLM Gateway 到阿里云 bailian-cli，社区在主动把 Pi 推到**更多非标准运行环境**（Worker、边缘网关、私有化部署）。开发者期望 Pi 的 L1/L2 接口（`StreamAssistant` 等 PR #7713）能成为统一接入点，而不是每个 provider 都写一遍 transport。

**5. 扩展生态治理信号**
#7825 报告的 `@baylarsadigov/omp-undo-redo` 恶意包导致发送消息到 working 延迟 2-5 秒——说明**包市场已开始出现供应链风险**。结合 #7828、#7831、#7824 等扩展接口改进请求，扩展生态正进入"既要 API 更丰富、也要审核更严格"的双向治理阶段。

**6. 配置灵活性需求凸显**
#7813（多 settings profile）、#7814（多 provider 登录）、#7829（非法 settings.json 静默吞错）共同指向：**单点配置 + 宽松容错**的现行模型正在被超越，开发者期望更明确的 profile 切换、配置校验与错误提示。

---

> 📊 **日报小结**：本日 pi-mono 仓库呈"**重压缩与流式稳定性 + 全屏 TUI 细节打磨 + 多元 Provider/扩展生态扩张**"三线并进格局。openai-codex 可靠性主线有望在后续版本（0.84.2+）闭环；TUI 改进已进入密集合并期；新模型供应商接入是社区自驱动力最强的方向。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-08-09**

---

## 1. 今日速览

Qwen Code 发布 **v0.21.8 版本**，重点恢复了 fork 仓库 PR 的实时 autofix 支持，并为 OpenAI、Gemini、Vertex AI 启用了压缩缓存共享以降低多供应商调用成本。社区当日讨论聚焦于**多 Agent 协同架构**（RFC 与跨会话通信落地 PR）和**主分支 CI 稳定性**（两条 E2E 失败正在通过 autofix 自愈），同时围绕 Web Shell 桌面化、Qwen WebBridge 浏览器控制等新方向展开 RFC 讨论。

---

## 2. 版本发布

### v0.21.8（Highlights）

- **Fork PR 实时 autofix 恢复**：通过桥接 review 事件到带凭据的 workflow，让来自 fork 的 PR 也能获得实时自动修复能力（[#8676](https://github.com/QwenLM/qwen-code/pull/8676)）。
- **多供应商压缩缓存共享**：为 OpenAI、Gemini、Vertex AI 启用压缩缓存共享，减少重复上下文传输成本。

> ⚠️ 当日 nightly 发布 v0.21.8-nightly.20260809.73e9eab626 出现 release workflow 失败（`integration_none`、`integration_docker` 任务），见 [Issue #8771](https://github.com/QwenLM/qwen-code/issues/8771)，尚未影响主线 v0.21.8。

---

## 3. 社区热点 Issues

| # | Issue | 关注度 | 核心要点 |
|---|---|---|---|
| [#8092](https://github.com/QwenLM/qwen-code/issues/8092) | 构建基于 Web Shell 的低维护桌面应用 | 🔥 6 评论 | 提议复用 Web Shell 作为桌面端 UI，避免双套前端维护成本，已纳入 roadmap/platform-distribution |
| [#8756](https://github.com/QwenLM/qwen-code/issues/8756) | 主分支 CI 失败：E2E Tests on commit 30377446 | 🛠 5 评论 | main 分支在测试结果产出前就已失败，per-commit 追踪，autofix/skip 标记 |
| [#8766](https://github.com/QwenLM/qwen-code/issues/8766) | P1: E2E `cli/extensions-install.test.ts` 安装 Qoder 插件失败 | 🛠 4 评论 | autofix/in-progress + approved，已由自愈机器人接管 |
| [#8737](https://github.com/QwenLM/qwen-code/issues/8737) | Chrome 远程调试授权弹窗每次会话都出现 | 🐛 4 评论 | `chrome-devtools` MCP `--autoConnect` 模式下用户体验问题 |
| [#8724](https://github.com/QwenLM/qwen-code/issues/8724) | 跨会话消息：让同机 Qwen Code 会话互通 | 💡 4 评论 | 提议 `list_agents`/`send_message` 工具，接收端有 fail-closed 门控 |
| [#8718](https://github.com/QwenLM/qwen-code/issues/8718) | RFC：原生多 Qwen 会话协同路径 | 💡 4 评论 | 多个独立会话显式协调，leader 派发 worker 收集结构化结果 |
| [#8741](https://github.com/QwenLM/qwen-code/issues/8741) | `/clear` 被后台任务阻塞时应说明阻塞内容 | 💡 2 评论 | 当前仅模糊报错，需告知用户哪些 task 在运行、如何停止 |
| [#8699](https://github.com/QwenLM/qwen-code/issues/8699) | Qwen WebBridge 浏览器直控提案 | 💡 3 评论 | 参考 Kimi WebBridge，让浏览器自动化不再强依赖 MCP |
| [#8758](https://github.com/QwenLM/qwen-code/issues/8758) | 自动会话标题被 `UserPromptSubmit` hook 上下文污染 | 🐛 3 评论 | 当 hook `additionalContext` > 1000 字符时标题生成失真 |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard 自动维护 | 🔄 持续 | 自动化 PR 巡检看板，本 tick 关联 #8768/#8739 等进行中 PR |

> 已关闭的高价值修复：#8317（Ctrl+Shift+C 复制失效）、#8527（包装后的 timeout 错误丢失原始 code 导致不可重试）、#8627（**DO_NOT_TRUST 信任规则被祖先 TRUST_FOLDER 覆盖的安全漏洞**）、#8697（OTEL metrics exporter 静默禁用）、#8692（integration-tests 从未类型检查）。

---

## 4. 重要 PR 进展

| PR | 主题 | 类型 |
|---|---|---|
| [#8691](https://github.com/QwenLM/qwen-code/pull/8691) | `fix(serve)`：使 session restore 超时安全且可观测 | 修复 P1，会话恢复超时不再丢当前会话 |
| [#8693](https://github.com/QwenLM/qwen-code/pull/8693) | `fix(integration-tests)`：让项目可类型检查并修复发现的问题 | 修复 #8692，关闭 TS5063，0 type errors |
| [#8728](https://github.com/QwenLM/qwen-code/pull/8728) | `feat(core)`：添加 live-session 注册表与 `qwen sessions ps` | #8724 第一步，PID 注册到 `~/.qwen/sessions/<pid>.json` |
| [#8735](https://github.com/QwenLM/qwen-code/pull/8735) | `fix(workflows)`：让 replay journal 持久化 | workflow 引擎状态契约升级，恢复时校验已提交前缀 |
| [#8736](https://github.com/QwenLM/qwen-code/pull/8736) | `fix(core)`：清理被 kill 的会话遗留的 peer socket 文件 | 配套 #8728/#8730/#8733，多 Agent 收尾 |
| [#8772](https://github.com/QwenLM/qwen-code/pull/8772) | `perf(review)`：微 diff 自有测试套件的 file-scope 隔离 | 改动 ≤ 3 文件时用 `vitest related` 精准跑相关测试 |
| [#8773](https://github.com/QwenLM/qwen-code/pull/8773) | `perf(review)`：在 sweep floor 之下将反向审计限制为 1 轮 | review 预算收紧，加快收敛 |
| [#8774](https://github.com/QwenLM/qwen-code/pull/8774) | `perf(ci)`：微 diff 自动 review 超时减半 | 25 行以下 churn 走 90 分钟下限 |
| [#8590](https://github.com/QwenLM/qwen-code/pull/8590) | `fix(core)`：通过行续行与 `${var@P}` 关闭只读 shell 分类器绕过 | 修复 #8582 安全问题 |
| [#8768](https://github.com/QwenLM/qwen-code/pull/8768) | `fix(integration-tests)`：等待 `rig.setup` 完成再写 fixture | 修复 #8766 的 flaky E2E |

> 此外值得关注的性能/架构 PR：#8394（review 增加 Maven 多模块验证）、#8475（恢复会话时重新注册 defer 的 MCP 工具）、#8664（已合并，daemon 批量 Skill 开关 API）、#8762（demo 页面 `usage_update` 帧降噪）、#8767（spam blocklist 真正生效）。

---

## 5. 功能需求趋势

从过去 24 小时的 Issue/PR 中提炼出五大社区方向：

1. **多 Agent / 多会话协同**（热度最高）
   - 跨会话消息（#8724）、原生协同 RFC（#8718）、live-session 注册表（#8728）、peer socket 清理（#8736）、workflow engine 重建 `/review` 编排（#8769）。
   - 表明 Qwen Code 正从"单会话工具"向"可编排 Agent 平台"演进。

2. **Web Shell / 桌面化 / 浏览器控制**
   - 桌面应用提案（#8092）、Qwen WebBridge（#8699）、chrome-devtools 体验问题（#8737）。
   - 浏览器与桌面正在成为新交互载体。

3. **多供应商与缓存优化**
   - v0.21.8 启用 OpenAI/Gemini/Vertex AI 压缩缓存共享；OTEL exporter 兼容性问题（#8697）反映多供应商可观测性需求。

4. **CI/CD 稳定性与性能优化**
   - 主分支 CI 失败（#8756/#8766）、`integration-tests` 类型检查（#8692 → #8693）、review/audit 预算优化（#8772/#8773/#8774）。

5. **安全与信任模型加固**
   - DO_NOT_TRUST 规则被绕过（#8627）、git 子命令通过 `.git/config` 执行外部程序（#8575）、只读 shell 分类器旁路（#8582 → #8590）。

---

## 6. 开发者关注点

**高频痛点**
- **CI 抖动与可观测性**：主分支频繁出现 E2E 失败（Qoder 插件、#30377446 等），社区希望看到 per-commit 追踪与 autofix 自愈机制更稳定。
- **配置/Schema 不同步**：`general.dynamicCommandTranslation` 暴露但无效果（#8748）、VS Code 配套拒绝支持的 `prompt` hooks（#8752）、设置对话框与运行时之间存在漂移。
- **跨平台一致性**：macOS 路径规范化差异导致测试失败（#8753）、CJK/全角标点被 URL hyperlink 吞掉（#8750）。
- **可观测性盲区**：OTEL exporter 共享时 metrics 静默禁用（#8697）、timeout 错误丢失原始 code 导致无法进入重试路径（#8527）。

**高频需求**
- **更智能的 `/clear` 体验**：当被后台任务阻塞时列出阻塞项与停止方法（#8741）。
- **更好的交互细节**：VP 模式下双击/三击拖拽词/行选择（#8738 → #8739）、Ctrl+Shift+C 复制恢复（#8317）、ESC 取消策略优化（#8201）。
- **会话标题质量**：避免被 hook context 污染（#8758）。
- **更明确的子命令管理**：`npm test` 因未知 flag 失败（#8721）、vendored 包与 package-lock 不同步（#8722）。

---

> 📌 **编辑建议**：今日主线 PR 8828（live-session 注册表）是多 Agent 架构的关键基座，建议关注后续 #8730/#8733/#8736 的叠加合入；CI 修复分支 #8768/#8693 均为 autofix 接管产出，体现 Qwen Code 在自愈工程化方面的持续投入。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报

**日期：2026-08-09**

---

## 一、今日速览

今日最重大的里程碑是 **v0.9.5 正式发布**，标志着项目由 Shannon Labs 主导并完成品牌升级——**DeepSeek TUI 已正式更名为 CodeWhale**，废弃旧的 `deepseek-tui` npm 包，统一使用小写技术标识符 `codewhale` / `codew`。社区节奏紧密围绕 v0.9.5 的工程化收尾展开：26 个 PR 集中处理 release 流程、TUI 体验、Provider 中立化与运行时 API 扩展，同时里程碑追踪器（#5266）明确了后续 issue 的拆解顺序。

---

## 二、版本发布

### v0.9.5（最新）
**核心变更：**
- **品牌与命令统一**：CLI 命令统一为 `codewhale` / `codew`，废弃旧的 `deepseek-tui` 包
- **运行时整合**：将终端应用整合为单一编译运行时
- **取消默认 turn 上限**：不再中断长任务执行
- **对齐上下游**：更新器、安装器、release assets、官网与包发布统一围绕新合约
- 详见 PR #5292（[chore(release): prepare v0.9.5](https://github.com/Hmbown/CodeWhale/pull/5292)）与 #5297（[docs(web): publish the v0.9.5 release snapshot](https://github.com/Hmbown/CodeWhale/pull/5297)）

### v0.9.4
紧随其后发布的过渡版本，承担 v0.9.5 之前的修复与发布流程校验工作。

---

## 三、社区热点 Issues（精选 10 条）

| # | Issue | 重要性与社区反应 |
|---|-------|-----------------|
| [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) | **v0.9.3: define CLI/TUI parity for subagent and runtime control surfaces**（8 评论） | 维护者重点议题。提出 TUI 不能成为 subagent 控制的"孤岛"，需要为云端/远程应用预留同构控制面，被后续 #5261（拆 `crates/core`）直接吸纳。 |
| [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) | **Dead-code sweep: 464 个 `#[allow(dead_code)]` 阻挡编译期漂移检查**（6 评论） | 代码卫生大问题，覆盖 143 文件，已实测编译器回归。维护者亲自下场拆墙。 |
| [#4326](https://github.com/Hmbown/CodeWhale/issues/4326) | **取消 32 worker 高并发后 RSS 不回落**（6 评论） | 性能与内存诚实性问题，需区分 allocator 高水位 vs 真实 worker 泄漏，与 32-worker PTY benchmark 闭环。 |
| [#4416](https://github.com/Hmbown/CodeWhale/issues/4416) | **同 workspace 多会话间残留失败 agent 状态**（4 评论） | UX 可靠性痛点：第二个 CodeWhale 实例会显示上个 session 的红色失败行，影响用户对状态的信任。 |
| [#4029](https://github.com/Hmbown/CodeWhale/issues/4029) | **Planning to create an interface similar to Reasonix?**（4 评论，外部用户 longASKme） | 罕见的社区发起型需求，关注类 Reasonix 多 agent UI 形态，体现社区对差异化界面的兴趣。 |
| [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) | **切换 Provider 时保留不相关的默认模型**（3 评论） | Provider/模型解析路径耦合 bug，切到 OpenAI 仍残留 `gpt-5.5` 默认值，影响多模型用户体验。 |
| [#5266](https://github.com/Hmbown/CodeWhale/issues/5266) | **v0.9.5 milestone tracker — pick order**（2 评论） | v0.9.5 后的路线图，列出了 foundation → /rc+login → 后续模块的拆解顺序，是观察项目节奏的关键入口。 |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | **未知 model id 静默降级到 128K legacy 上下文**（2 评论） | 严重隐形 bug：1M window 模型会被悄悄压缩在 128K，无任何用户提示。0.9.4 已部分缓解。 |
| [#5267](https://github.com/Hmbown/CodeWhale/issues/5267) | **turn-stop honesty: 状态说"ending"必须真停**（2 评论） | 用户信任问题——footer 提示 ending 但模型继续输出。需要清掉假防护逻辑。 |
| [#5268](https://github.com/Hmbown/CodeWhale/issues/5268) | **mid-turn control: queue/send-now/Esc-keep-draft + named waits**（2 评论） | TUI 交互改革：在 turn 运行中保留 composer 可用性，并把 agent 等待点显式命名出来。 |

---

## 四、重要 PR 进展（精选 10 条）

### Release / 工程化
- **[#5306](https://github.com/Hmbown/CodeWhale/pull/5306)** `fix(release): validate crate publication order`  
  校验 20 crate 发布顺序（codewhale-core 必须在 codewhale-tui 之前），对重复/缺失/版本错配/normal-build 依赖倒置 fail-closed，关乎发布安全。

- **[#5297](https://github.com/Hmbown/CodeWhale/pull/5297)** `docs(web): publish the v0.9.5 release snapshot`  
  将站点最新发布版本从 0.9.4 推进至 0.9.5，复核 34/34 verify。已合并。

- **[#5292](https://github.com/Hmbown/CodeWhale/pull/5292)** `chore(release): prepare v0.9.5`  
  v0.9.5 的正式发版提交。已合并。

### Runtime API 扩展（Copilot 提交）
- **[#5129](https://github.com/Hmbown/CodeWhale/pull/5129)** `feat(runtime-api): skill lifecycle endpoints`  
  增加 install/update/uninstall/trust/audit 全生命周期 HTTP 端点，给桌面/Web 客户端补齐技能管理通道。
- **[#5130](https://github.com/Hmbown/CodeWhale/pull/5130)** `feat(runtime-api): bounded MCP server configuration`  
  MCP 服务器的 CRUD HTTP 接口，让管理客户端无需改 TOML/JSON。
- **[#5131](https://github.com/Hmbown/CodeWhale/pull/5131)** `feat(runtime-api): memory endpoints`  
  `/v1/memory` 受保护路由：受检检查与生命周期控制。
- **[#5132](https://github.com/Hmbown/CodeWhale/pull/5132)** `verifier receipts and evidence beyond aggregate counter`  
  从单一计数器升级为完整收据列表，支持定位失败任务与重试决策。
- **[#5133](https://github.com/Hmbown/CodeWhale/pull/5133)** `feat(runtime-api): persistent goal-loop state`  
  暴露 goal 资源：读取活跃 goal 状态并驱动生命周期转换。

### TUI / 体验
- **[#5301](https://github.com/Hmbown/CodeWhale/pull/5301)** `fix(tui): make compaction live and pressure-aware`  
  `/compact` 改为非阻塞并以生命周期 ID 串行化；将 128K/272K/1M 自动压缩门槛对齐请求压力。已合并。

- **[#5258](https://github.com/Hmbown/CodeWhale/pull/5258)** `fix(tui): stop stale cached session title from pinning "New Session"`（社区贡献 SparkofSpike）  
  修复"标题永远停留在 New Session"问题——根因是内存中的元数据缓存只在 snapshot 末尾刷新，导致首次计算出的标题被快照旧值覆盖。已合并。

- **[#5300](https://github.com/Hmbown/CodeWhale/pull/5300)** `refactor(core): own primary request preparation`  
  把 `MessageRequest` DTO 家族从 TUI crate 迁回 `codewhale-core`，提供 provider-neutral 的 `prepare_primary_turn_request` 构造器，是 #5261 拆分的前置。

---

## 五、功能需求趋势

从今日 Issues 提炼，社区与维护者关注的方向高度一致：

1. **Provider 中立化与多模型支持**（热度最高）
   - `#5103` 重命名 `DeepSeekClient` 为 provider-neutral 类型
   - `#5092/#5093/#5094` Responses API 行为改为 provider-profiled 而非硬编码；named custom provider 可选 typed Responses 方言
   - `#5034` 切换 provider 时模型不应滞留
   - `#5295` 新增 Mistral AI 一等公民路由（已合并）

2. **TUI 体验诚实性**
   - `#5267` turn-stop 必须说到做到
   - `#5268` mid-turn 控制流契约化
   - `#5271` 多 session peek 不全 attach 即可审批
   - `#5272` prompt 级别文件恢复
   - `#5291` 清掉 reasoning 残留提示
   - `#5041` 通知可操作、可配置、品牌一致

3. **架构大重构（v0.9.5 路线图主线）**
   - `#5261` 把引擎抽到 `crates/core` + Thread/Session 拆分
   - `#5263` prompt 组装迁出 TUI 到 `crates/core`
   - `#5249` build-time lane 拆分巨型 tui crate（682,959 行/620 文件）
   - `#4079` 拆分 `project_context.rs`（2,889 行）

4. **Subagent / 多 Agent 工作流**
   - `#4022` CLI/TUI parity
   - `#5270` 统一任务面板（shell + subagents + workers）
   - `#5269` 持久化计划产物 + 行内评论
   - `#5189` 小 child 不应承担过重的输出契约

5. **可靠性与上下文管理**
   - `#4394` 压缩（compaction）显式生存合约
   - `#5244` 未知模型 id 不应静默降级
   - `#4326/#4416` 内存与状态隔离

---

## 六、开发者关注点（痛点与高频需求）

- **品牌迁移带来的兼容性焦虑**：旧 npm 包 `deepseek-tui` 被弃用，命令从 `deepseek`/`deepseek-tui` 转为 `codewhale`/`codew`。从 v0.8.x 升级的用户需要明确的迁移指引（多个 release notes 段落反复强调这点）。

- **TUI 信任赤字**：开发者最常反馈的不是功能性缺失，而是"状态显示与实际行为不一致"。典型症状包括 footer 说 ending 但模型继续说话、reasoning 提示残留、新会话标题被旧 snapshot 覆盖等——这推动维护者提出"删假防护而不是加更多状态文案"的治理哲学（见 #5267）。

- **巨型单体 crate 的编译税**：682K 行的 `codewhale-tui` 单 crate 成为每次编辑/提交/测试/发布的瓶颈，build-SHA stamp 还会导致本地提交 invalid 整个 tui+cli，是当前最被诟病的工程化痛点（#5249）。

- **Provider/模型切换不原子**：跨 provider 模型解析路径未耦合（#5034、#5244），开发者期待一套"切 provider 就重置默认"的清晰合约，而非依赖外部缓存推断。

- **隐式机制需要显式化**：dead_code、compaction 行为、未知模型 id 处理、subagent 输出契约——开发者社区持续推动"把隐式假设显式化"（合约、命名、文档），这是 v0.9.5 后最重要的文化走向。

- **第三方贡献通道畅通**：今日合并的 #5295（Mistral 一等路由，由 @xavierpestel-ai 提交并保留提交署名）与 #5258（SparkofSpike 修复）显示项目对外部贡献者友好，是社区健康度的积极信号。

---

*数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) — 已迁移至 Hmbown/CodeWhale*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*