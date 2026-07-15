# AI 开源趋势日报 2026-07-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-15 01:50 UTC

---

# AI 开源趋势日报 · 2026-07-15

---

## 第一步：筛选结果

从今日 Trending 15 个仓库中，筛选出 **9 个 AI 相关项目**，排除 6 个非 AI 项目（OpenCut、Clypra、Win11Debloat、Penpot、sharpemu、exercises-dataset）。主题搜索 149 个仓库全部为 AI 相关。

---

## 第二步 + 第三步：分类与报告

### 一、今日速览

今天的 GitHub AI 热榜被 **AI Agent 工具链与"给 Agent 加技能/加记忆/加护栏"** 牢牢占据：`Graphify-Labs/graphify`（知识图谱型 Coding Agent Skill）以 +1851 stars 领跑，`mattpocock/skills`（Claude 工程师技能包，+1679）、`HKUDS/Vibe-Trading`（AI 交易 Agent，+1256）、`Nutlope/hallmark`（反 AI slop 设计技能，+1015）紧随其后。RAG/记忆层、`vLLM` 系推理框架、以及面向 Coding Agent 的 MCP/Skill 生态继续爆发，反映社区正从"造一个 Agent"转向"让 Agent 更稳、更省 token、更有长期记忆"。

---

### 二、各维度热门项目

#### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | Stars（今日新增） | 一句话说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | 176,117 | 本地 LLM 运行事实标准，已支持 Kimi-K2.6、GLM-5.1、DeepSeek、Qwen 等 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162,608 | 多模态模型定义/训练/推理的统一框架 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 86,269 | 高吞吐低显存 LLM 推理/服务引擎 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | 30,311 | 高性能 LLM / 多模态服务框架，结构化输出与 Agent 调用友好 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 141,783 | Agent 工程平台，新版本强调 production agent |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 80,795 | AI-Driven Development，开源版 Devin 标杆 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | +1679 today | 真实工程师可直接复用的 Claude Code Skills 集合 |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | +1015 today | 给 Claude Code/Cursor/Codex 用的"反 AI Slop"设计 Skill |

#### 🤖 AI 智能体 / 工作流（Agent 框架 / 自动化 / 多智能体）

| 项目 | Stars（今日新增） | 一句话说明 |
|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 214,909 | "与你共同成长"的 Agent，专注自我演化 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,540 | 自主 Agent 鼻祖，持续被 fork 与再创作 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | +1256 today | "Vibe-Trading" 个人交易 Agent，HKU Data Science 出品 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 45,579 | 轻量级开源 Agent，嵌入工具/聊天/工作流 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 229,743 | Agent Harness 性能优化系统，含 Skills/Instincts/Memory |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,472 | Agent Reinforcement Trainer，GRPO 多步 Agent 训练 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36,033 | Agent 的前端栈 + AG-UI 协议 |
| [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) | +473 today | 给 Agent 配的"防误删/防危险命令"安全护栏 |

#### 📦 AI 应用（具体产品 / 垂直场景）

| 项目 | Stars（今日新增） | 一句话说明 |
|---|---|---|
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | +109 today | 多 Agent 协作的 AI 对冲基金演示项目 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 57,231 | LLM 驱动的多市场股票分析 + 自动推送 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 39,022 | 把任意文档一键生成可编辑 PPT（原生形状/动画/图表） |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 60,129 | 本地 CLI 中的 AI 求职 Agent（打分/改简历/追踪） |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 56,297 | 给 Agent 一双"眼睛"，统一读取 Twitter/Reddit/YouTube/B站等 |
| [CheryyHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 48,580 | 聚合多家前沿 LLM 的桌面 AI 生产力套件 |
| [chenyme/grok2api](https://github.com/chenyme/grok2api) | +186 today | Grok 多账号 API 网关，国产开发者绕道调用热门 |
| [Earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 8,127 | 面向 CAD / 机器人 / 硬件设计的 Agent Skills 合集 |

#### 🧠 大模型 / 训练（模型权重 / 训练框架 / 微调）

| 项目 | Stars（今日新增） | 一句话说明 |
|---|---|---|
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 68,224 | Unsloth Studio：本地训练/运行 Gemma 4、Qwen3.6、DeepSeek |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | 9,788 | 基于 Ray 的高性能 Agentic RL 框架（PPO/DAPO/GRPO） |
| [ray-project/ray](https://github.com/ray-project/ray) | 43,246 | AI 分布式计算引擎，RL/训练/服务统一底座 |
| [rllm-org/rllm](https://github.com/rllm-org/rllm) | 5,696 | "民主化"的 LLM 强化学习库 |
| [areal-project/AReaL](https://github.com/areal-project/AReaL) | 5,542 | LLM-based Agent 应用的 RL Bridge |
| [kvcache-ai/Mooncake](https://github.com/kvcache-ai/Mooncake) | 5,821 | Moonshot Kimi 的推理服务平台，已开源 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 99,099 | 从零手搓类 ChatGPT LLM，PyTorch 教学经典 |
| [HenryNdubuaku/maths-cs-ai-compendium](https://github.com/HenryNdubuaku/maths-cs-ai-compendium) | +112 today | AI/ML 研究工程师的数学+CS 学习路径合集 |

#### 🔍 RAG / 知识库（向量库 / 检索增强 / 知识管理）

| 项目 | Stars（今日新增） | 一句话说明 |
|---|---|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | +1851 today | 把代码/SQL/文档/视频转成可查询知识图谱的 Coding Agent Skill |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 85,050 | 主流开源 RAG 引擎，融合 RAG + Agent |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 60,833 | Agent 的通用持久记忆层 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 27,881 | 自托管知识图谱引擎，给 Agent 长期记忆 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 34,025 | 无向量、基于推理的 RAG 文档索引 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 87,271 | 跨会话持久上下文，自动压缩并注入 Agent |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,224 | 云原生高性能向量数据库 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 59,174 | 在 Token 到达 LLM 前压缩工具输出/RAG chunk，省 20%~95% Token |

---

### 三、趋势信号分析

**Agent Skills / Harness 生态正在成为新的"中间件赛道"。** 今天 Trending 中至少 5 个项目（graphify、hallmark、skills、claude-mem、destructive_command_guard）都围绕同一个主题：**如何给 Claude Code / Codex / Cursor / Gemini CLI 这类 Coding Agent 装上"技能、记忆、安全护栏、上下文压缩"**。这与近期 Claude Code 开放 Skills/MCP 标准、Cursor Agent Mode 迭代形成强呼应——开发者不再是写一个完整 Agent，而是在用乐高式 Skills 装配 Agent。

**"持久记忆"成为 RAG 之后的新一波 RAG 红利。** `claude-mem`、`mem0`、`cognee`、`memvid`、`headroom`（上下文压缩）共同指向一个方向：单次会话的 RAG 已不够，Agent 必须拥有跨会话记忆与上下文预算管理能力。同时 `VectifyAI/PageIndex` 代表的"无向量、推理式 RAG"也获得持续关注，可能预示对纯向量检索范式的反思。

**垂直领域 Agent 持续裂变。** `ai-hedge-fund`、`Vibe-Trading`、`daily_stock_analysis`（金融）、`career-ops`（求职）、`ppt-master`（办公）共同验证了 **"小而美的垂直 Agent > 万能 Agent"** 的社区偏好——HKUDS 系列（nanobot、Vibe-Trading）今天两次登榜，是该方向的代表团队。背景上，国产模型 GLM-5.1、Kimi-K2.6 等持续在 Ollama 等平台首发，模型层碎片化进一步推动上层 Agent 必须"多模型适配"。

---

### 四、社区关注热点（开发者重点关注）

- 🔥 **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**（+1851 today）— 知识图谱 + Coding Agent 是当前最热组合，适合做企业代码资产沉淀、私有文档问答。
- 🔥 **[mattpocock/skills](https://github.com/mattpocock/skills)**（+1679 today）— 真实工程师视角的 Claude Skills 集合，比官方示例更贴近生产。
- 🚀 **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)**（+1256 today）— "Vibe Coding" 风延伸到金融领域，Agent 形态的个人交易助手。
- 🛡️ **[Nutlope/hallmark](https://github.com/Nutlope/hallmark)**（+1015 today）— 反"AI Slop"是产品化落地的痛点，给前端/设计 Agent 必备。
- 🧠 **[OpenPipe/ART](https://github.com/OpenPipe/ART)** + **[OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)** — Agent RL 训练栈正在走向成熟，是 2026 下半年最值得关注的技术方向之一。

> **一句话结论：** 今天的 GitHub Trending 几乎被 **"Coding Agent 的 Skills / Memory / Safety / RAG"** 四件套承包，开发者如果要做 Agent 产品，建议优先从"接哪几个开源 Skills、用什么记忆层、怎么省 Token"这三个问题切入，而不是重新造 Agent 框架。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*