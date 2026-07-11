# AI 开源趋势日报 2026-07-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-11 02:03 UTC

---

# 📊 AI 开源趋势日报 · 2026-07-11

## 第一步：筛选结果

**今日 GitHub Trending 榜单（19 个）**中筛出 AI 相关项目 **8 个**，排除 bun、abseil-cpp、yaml-cpp、TypeScript、Catch2、asio、meshoptimizer、tailscale、terraform、grpc、next.js 等通用基础设施项目。

**主题搜索 147 个仓库** 全部来自 `llm-model`、`llm`、`ml`、`ai-agent`、`rag`、`embodied-ai`、`robotics`、`robot-learning`、`vector-db`、`rl`、`ros` 等 AI 主题标签，全部纳入分析。

---

## 一、今日速览

今天 GitHub AI 开源生态最显著的特征是 **"Agent Skills" 标准化运动集体爆发**——mattpocock/skills（+1712）、addyosmani/agent-skills（+1116）、obra/superpowers（+1013）、google-labs-code/stitch-skills（+117）同时登顶 Trending，呈现"Claude Code 技能生态"的多点开花格局。结合 iOfficeAI/OfficeCLI（+1224）的爆发，AI Agent 的能力扩展（Office、终端、文件系统、记忆）正成为新一轮开源竞赛焦点。底层模型训练/推理侧（vLLM、SGLang、Unsloth）和向量数据库（RAG）热度持续高位，但增长动能明显让位于 Agent 工具链。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 一句话 |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,457 | 业界事实标准的多模态模型定义框架，今天仍是 LLM 工程基座。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐141,483 | 定位升级为"agent engineering platform"，从框架走向全栈代理工程。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐85,931 | 高吞吐 LLM 推理与服务的默认引擎，社区生态最完整。 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐30,164 | 高性能 LLM/多模态服务框架，结构化输出与 DSL 设计差异化明显。 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐68,007 | Unsloth Studio 提供本地训练与运行 Gemma4 / Qwen3.6 / DeepSeek 的 Web UI。 |
| [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) | ⭐—(+328 today) | 给 Claude 的 MCP 服务器，提供终端控制、文件系统搜索、diff 编辑，今日热度直接进入 MCP 实战落地代表。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,885 | Rust 编写的模块化 LLM 应用框架，强类型性能首选。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐148,941 | 为 LLM/Agent 提供规模化网页搜索、爬取与交互 API。 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话 |
|---|---|---|
| [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐—(+1712 today) | "Skills for Real Engineers"，直接把作者 `.claude` 目录开源，今日 Trending 增速榜冠军。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐—(+1116 today) | Google 工程负责人出品，生产级 AI 编码 Agent 技能库，定义技能编写规范。 |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐—(+1013 today) | 代理化技能框架 + 软件开发方法论，强调"技能即方法论"。 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | ⭐—(+1224 today) | 首个面向 AI Agent 的 Office 套件 CLI，免安装 Office 即可读写 Word/Excel/PPT。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐228,284 | 跨 Claude Code、Codex、Cursor 的 Agent 性能优化系统，技能+记忆+安全一体化。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐212,789 | "与用户共同成长的 Agent"，强调自进化与个性化。 |
| [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,456 | 自主 Agent 鼻祖，仍是 Agent 工程的事实参考实现。 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐80,382 | 曾经的 Devin 对标项目，"AI 驱动开发"标杆。 |

### 📦 AI 应用（垂直产品）

| 项目 | Stars | 一句话 |
|---|---|---|
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐48,421 | 统一接入多家前沿 LLM 的桌面 AI 生产力工坊，300+ 助手生态。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐38,247 | 文档→可编辑 PPT（原生形状+动画+语音旁白），AI 办公利器标杆。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐56,511 | LLM 驱动的多市场股票分析系统，中文开源量化代表。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐59,566 | 本地运行的求职 AI Agent，可评分、定制简历、追踪投递。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐145,002 | 主流本地 LLM 前端，支持 Ollama/OpenAI 兼容 API。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐54,494 | 一个 CLI 让 Agent 读取 Twitter/Reddit/B站/小红书，零 API 费用。 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | ⭐—(+123 today) | 腾讯云出品，4 级渐进式本地长期记忆管线，零外部依赖。 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | ⭐—(+118 today) | Claude Code 配置与监控 CLI，今日 Agent 工具链热点。 |

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐175,893 | 本地大模型运行事实标准，已支持 Kimi-K2.6、GLM-5.1、MiniMax、DeepSeek 等国产前沿模型。 |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | ⭐9,776 | 基于 Ray 的高扩展 Agentic RL 框架，集成 PPO/DAPO/vLLM，适合 VLA/Agent 训练。 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | ⭐4,074 | 面向具身智能与 Agent 的强化学习基础设施。 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,379 | Agent RL Trainer，主打 GRPO 多步 Agent 任务训练。 |
| [NVlabs/Sana](https://github.com/NVlabs/Sana) | ⭐8,464 | 线性 DiT 高分辨率图像生成，训练/推理效率优于同类。 |
| [starpig1129/DATAGEN](https://github.com/starpig1129/DATAGEN) | ⭐1,768 | AI 多 Agent 研究助手：自动假设生成→数据分析→报告撰写。 |

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话 |
|---|---|---|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐60,576 | 通用 Agent 记忆层，跨会话持久化的事实标准。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐84,778 | RAG + Agent 双引擎，开源企业级上下文层首选。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50,774 | LlamaIndex 已升级为"文档 Agent + OCR 平台"，向 Agent 化演进。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,177 | 云原生大规模向量数据库，企业部署主流选择。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,137 | Rust 编写的高性能向量搜索引擎，工程体验优秀。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐27,552 | 自托管知识图谱引擎，给 Agent 提供跨会话长期记忆。 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐14,714 | 轻量、极速的进程内向量数据库，嵌入式场景新选项。 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | ⭐54,508 | 可视化拖拽构建 AI Agent，低代码 RAG 代表。 |

---

## 三、趋势信号分析

**1. "Agent Skills" 开放标准崛起为新一波开源协同点。** 今日 Trending 前 8 名中有 5 个项目直接围绕"Agent Skills"展开，单日合计增星超 4500。这并非偶然——MCP（Model Context Protocol）在 2024–2025 年定义了"Agent↔Tool"的标准，而 Skills 标准在 2026 年正在定义"Agent↔Skill（可复用能力包）"。mattpocock、addyosmani（Google 工程负责人）、obra、google-labs-code 四家团队异口同声发布技能库，标志着碎片化技能正在被收编为"开放标准"赛道。

**2. Claude Code 生态外溢至全 Agent CLI。** iOfficeAI/OfficeCLI（+1224）首次进入 Trending，意味着"AI Agent 友好的桌面办公"成为全新开源方向；同时 DesktopCommanderMCP、TencentDB-Agent-Memory、Davila7/claude-code-templates 共同构成 "Agent 操作真实办公/数据库/文件系统" 的工具链爆发。

**3. 与近期行业事件的关联：** Ollama 0.18/GLM-5.1/MiniMax/Kimi-K2.6 等国产模型已被 Ollama 原生支持，配合 unsloth Studio 与 vLLM/SGLang 的高吞吐推理基建，**"国产开源模型 + 本地推理 + Agent 工程"**的三层堆栈正在成型；具身智能侧的 RLinf、VAGEN、BEHAVIOR-1K 等持续上榜，反映 World Model / VLA / RL 训练基础设施仍为长期热门但增速放缓。

---

## 四、社区关注热点

- 🔥 **[mattpocock/skills](https://github.com/mattpocock/skills)** — Skill 标准化的"事实参考实现"之一，单日 +1712，建议所有做 Claude Code / Agent 工具的团队第一时间研究其技能描述格式。
- 🔥 **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — Google Chrome 性能负责人主导，**生产级质量**的技能模板，是从 demo 走向生产的关键参考。
- 🔥 **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** — 首个真正的"AI Agent 友好 Office CLI"，单二进制免安装，是**Agent×办公自动化**场景的核心基础设施。
- 🔥 **[unslothai/unsloth](https://github.com/unslai/unsloth)** + **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — 训练与推理双组合拳，社区个人开发者本地微调/部署前沿模型的**最低成本路径**。
- 🔥 **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Agent 长期记忆的事实标准，配合任何 LLM/Agent 框架即插即用，是 2026 年 RAG→Memory 演进的关键拼图。

> **一句话总结**：今天的 GitHub 属于"Agent Skills"与"Agent 办公工具链"，模型层波澜不惊，但开发者生态正在经历从"调模型"到"编排技能"的代际跃迁。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*