# AI 开源趋势日报 2026-09-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-25 02:57 UTC

---

# AI 开源趋势日报 · 2026-09-25

---

## 一、今日速览

今日 GitHub Trending 榜单被 **AI Agent 基础设施** 全面接管，14 个上榜项目中 11 个与 AI 直接相关，其中 8 个围绕 Agent 的运行时、记忆、技能、Harness 与工具路由展开——Agent Memory（Hindsight +1668）、Google 官方 Agent 编排运行时（Ax +1373）、Office Agent Harness（Univer +1082）包揽日增 Star 前三。同时 Anthropic 推出首个垂直领域模板（Financial Services），**"Agent-native 软件"** 概念正从口号走向工程实践，CLI、Harness、Skills 正在成为新的工程分层。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | Stars | 一句话 |
|---|---|---|
| [google/ax](https://github.com/google/ax) | 0 → **+1373 today** | Google 官方推出的开源 Agentic 编排运行时，Agent 基础设施进入"大厂入场"阶段 |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | 0 → **+44 today** | 统一量化/蒸馏/剪枝/推测解码库，对接 TensorRT-LLM 与 vLLM |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 0 → **+413 today** | "让所有软件变成 Agent-native"，把任意软件封装为 CLI 供 Agent 调用 |
| [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk) | 0 → **+455 today** | 生产级 Agent Harness SDK，跨 Python/TS、跨模型、跨云 |
| [ollama/ollama](https://github.com/ollama/ollama) | 181,653 | 本地运行 Kimi/GLM/DeepSeek/Qwen/Gemma 等模型的标杆工具 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 166,617 | 文本/视觉/音频/多模态模型定义框架的事实标准 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | 36,408 | 高性能 LLM 与多模态推理服务框架 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 13,158 | Java 生态下 LLM 集成首选，对接 Quarkus/Spring Boot |

### 🤖 AI 智能体 / 工作流（Agent 框架 / 自动化 / 多智能体）

| 项目 | Stars | 一句话 |
|---|---|---|
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | 0 → **+1668 today** | 今日冠军，"能学习的 Agent 记忆"，Agent Memory 赛道首个现象级项目 |
| [dream-num/univer](https://github.com/dream-num/univer) | 0 → **+1082 today** | Agent 办公套件 Harness，电子表格/文档/PPT/PDF 一个运行时通吃 |
| [obra/superpowers](https://github.com/obra/superpowers) | 0 → **+611 today** | Agentic Skills 框架 + 软件开发方法论，把"技能沉淀"做成工程 |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | 0 → **+468 today** | "Agent Tools 的 OpenRouter"，工具调用路由器 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 248,753 | "与你共同成长的 Agent"，长期居于 Agent 顶流 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 116,211 | 让 Agent 真正操作浏览器的标杆项目 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,554 | 超轻量自托管 Agent 框架，一行安装即可上手 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 37,542 | Agent 的前端栈 + AG-UI 协议生成式界面 |

### 🧠 大模型 / 训练（权重 / 训练框架 / 微调）

| 项目 | Stars | 一句话 |
|---|---|---|
| [leejet/stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp) | 0 → **+36 today** | SD/Flux/Wan/Qwen-Image/Z-Image 的纯 C/C++ 推理，边缘部署首选 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 62,491 | 2 小时训练 64M 参数 LLM，入门教学标杆 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 76,724 | 本地训练与运行 LLM/扩散模型，覆盖 GGUF/MLX/Qwen3.8 等 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 166,617 | 训练生态核心枢纽（跨类） |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 103,266 | 深度学习框架事实标准 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,770 | GRPO 多步 Agent 强化学习训练器 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 105,525 | 从零实现类 ChatGPT LLM 的经典教程 |

### 📦 AI 应用（具体产品 / 垂直场景）

| 项目 | Stars | 一句话 |
|---|---|---|
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | 0 → **+509 today** | Anthropic 首个垂直领域 Agent 模板，金融场景落地范式 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 0 → **+347 today** | "Learn it. Build it. Ship it." 系统化 AI 工程教程 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 56,306 | 文档/主题一键生成原生 PowerPoint，含动画与图表 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 125,545 | 一键生成高清短视频的自动化工作流 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 65,605 | LLM 驱动多市场股票分析与自动推送 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 52,133 | 聚合主流模型的生产力工作室 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 72,632 | 本地运行的 AI 求职 Agent，跑在 Claude Code/Codex 中 |

### 🔍 RAG / 知识库（向量库 / 检索增强 / 记忆）

| 项目 | Stars | 一句话 |
|---|---|---|
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | 0 → **+1668 today** | 横跨 Agent 与 RAG 两大类的"学习型记忆"基础设施（**双榜第一**） |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 65,959 | 面向 Agent 的生产级持久化记忆层 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 91,277 | RAG + Agent 能力融合的检索增强引擎 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 52,310 | 文档处理与 RAG 编排平台 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 46,249 | 云原生向量数据库老牌顶流 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 35,845 | 无向量、基于推理的 RAG 文档索引 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,960 | MLSys2026 最佳论文，97% 存储节省的个人设备 RAG |
| [alibaba/zvec](https://github.com/alibaba/zvec) | 16,003 | 阿里开源，轻量级进程内向量数据库 |

---

## 三、趋势信号分析

今日榜单呈现出非常明确的**"Agent 基础设施层"集中爆发**信号：Trending Top 4 全部是 Agent 相关（Hindsight、Ax、Univer、Superpowers），并且首次同时出现了 **"Agent Memory""Agent Orchestration""Agent Harness""Agent Skills""Agent-native CLI""Agent Tools Router"** 这一整套概念栈——说明社区已经不再把 Agent 当作单一框架来看待，而是把它视为需要分层基础设施的系统工程。

**首次登榜的新方向**有三：① Google 推出官方 Agent 编排运行时（Ax），意味着大厂正式下场定义 Agent Runtime 标准；② "Agent Harness" 作为独立术语出现（Hindsight、Strands SDK、Superpowers 均以 Harness 自居），暗示 2026 下半年 Agent 框架竞争从"模型调用"升级到"执行沙箱 + 上下文管理 + 技能加载"；③ Anthropic 把首个垂直行业模板（Financial Services）开源，与 google/ax 形成"上层应用 vs 下层运行时"的对照格局。

与近期行业事件关联紧密：Claude / GPT-OSS / Qwen3.8 / MiniMax-H3 等多模型生态成熟，使"模型无关"的 Agent 编排层价值凸显；而 DeepSeek V4、Kimi、GLM 等国产模型进入 Ollama 官方支持列表，进一步降低了 Agent 工程的本地化门槛。

---

## 四、社区关注热点

- 🏆 **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** — 今日日增 Star 全榜第一（+1668），"可学习 Agent 记忆"是 RAG 之后下一代上下文工程的代表方向，强烈建议关注其记忆更新与衰减算法设计。
- 🚀 **[google/ax](https://github.com/google/ax)** — Google 官方首个 Agent 编排运行时，标志着 Agent Runtime 进入大厂定义阶段，对所有 Agent 框架作者是必看信号。
- 🛠 **[obra/superpowers](https://github.com/obra/superpowers)** — 把"Agent Skills"做成一类一等公民资产，是 Anthropic Skills 协议与社区 Harness 框架对接的桥梁，值得工程团队研究其技能注册与组合机制。
- 💼 **[anthropics/financial-services](https://github.com/anthropics/financial-services)** — 大模型厂商首个开源垂直行业 Agent 模板，预示"领域 Agent 模板"将成为下一波开源竞赛焦点，金融/医疗/法律等垂直开发者可重点参考其架构。
- 🧩 **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — "让一切软件变 CLI 供 Agent 调用"，与 [superdesigndev/treg](https://github.com/superdesigndev/treg) 共同推动 **Agent × 传统软件** 互操作标准化，是把存量软件资产 Agent 化的最实用路径。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*