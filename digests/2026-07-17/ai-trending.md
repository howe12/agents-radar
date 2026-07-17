# AI 开源趋势日报 2026-07-17

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-17 02:05 UTC

---

# 📊 AI 开源趋势日报 · 2026-07-17

---

## ① 今日速览

今日 GitHub Trending 榜单最显著的现象是 **"AI 编程 Agent 技能生态"的集中爆发**——围绕 Claude Code、Cursor、Codex 的 skills / harness 项目占据热度前五中的三席（hallmark +3372、mattpocock/skills +2060、graphify +1107）。与此同时，面向开源模型的 **Rust 重写潮**（openinterpreter、rig、dora-rs）以及 **Agent 记忆层 / 上下文压缩**（mem0、memvid、claude-mem、headroom）的密集上榜，进一步印证"Agent 工程化"已成为当前 AI 开源的主战场。开源模型侧，Kimi K2.6、GLM-5.1、DeepSeek、Qwen3.6 已普遍进入主流工具的默认支持矩阵。

---

## ② 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / 开发工具）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐176,283 | 本地运行开源模型的"事实标准"，已默认支持 Kimi-K2.6、GLM-5.1、MiniMax、DeepSeek 等 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,666 | 文本/视觉/音频/多模态模型的统一推理与训练框架 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐149,084 | 生产级 Agentic workflow 开发平台 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐141,934 | 头部 Agent 工程化平台 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐86,454 | 高吞吐、低显存占用的 LLM 推理与 Serving 引擎 |
| [github/copilot-sdk](https://github.com/github/copilot-sdk) | ⭐+13 today | GitHub Copilot Agent 的多平台 SDK，官方出品 |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | ⭐+3,372 today | 今日热度冠军，"反 AI slop"设计技能，面向 Claude Code/Cursor/Codex |
| [PostHog/posthog](https://github.com/PostHog/posthog) | ⭐+77 today | 内建 AI Observability 的产品分析平台，定位"自驾驶产品" |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐230,372 | Agent Harness 性能优化系统，覆盖 Claude Code/Codex/Cursor |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐216,009 | "与你共同成长"的开放 Agent 框架 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,579 | 自主 Agent 范式的开创者，仍保持高活跃度 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐81,028 | AI 驱动的软件开发 Agent |
| [openinterpreter/openinterpreter](https://github.com/openinterpreter/openinterpreter) | ⭐+661 today | 已用 **Rust 重写**，面向 Kimi K3 等开源模型的编码 Agent |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐45,760 | 轻量、可扩展的开源 Agent Harness |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐36,096 | Agent / Generative UI 的前端栈，AG-UI 协议作者 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | ⭐+71 today | "首席 Agent 运营官"，7×24 调度、汇报 Agent 团队 |

### 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | ⭐122,928 / +923 today | 100+ 开箱即用的 AI Agent & RAG 应用合集 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐63,410 | 本地优先的一站式 Agent 工作台 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐48,668 | 聚合多家前沿 LLM 的 AI 生产力工作室 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐57,543 | LLM 驱动的多市场股票分析与自动推送 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | ⭐+656 today | 终身个性化辅导 AI，可零成本本地部署 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐39,502 | 文档→原生 PowerPoint，含动画/图表/语音旁白 |
| [apache/ossie](https://github.com/apache/ossie) | ⭐+60 today | Apache 旗下语义元数据交换规范，覆盖 AI/BI 全栈 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | ⭐24,313 | 个人交易 Agent 项目，HKUDS 团队出品 |

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐196,308 | 经典开源 ML 框架 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐176,283 | 本地运行主流开源模型的事实标准 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,666 | 训练 / 推理统一框架 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐99,197 | 从零实现 ChatGPT-like LLM 的 PyTorch 教程 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐68,309 | Web UI 训练与运行 Gemma4/Qwen3.6/DeepSeek 等开源模型 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐30,392 | 高性能 LLM / 多模态 Serving 框架 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | ⭐17,394 | 微软出品，"点亮 Agent"的训练器 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,480 | Agent Reinforcement Trainer，基于 GRPO 的多步训练 |
| [AarambhDevHub/aarambh-ai](https://github.com/AarambhDevHub/aarambh-ai) | ⭐27 | 纯 Rust 从零构建的 Decoder-only LLM（25M–1.3B），支持 MoE/DoRA/DPO |

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐85,646 | 100+ 语言 OCR 工具链，RAG 文档预处理首选 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐85,223 | 开源 RAG 引擎领头羊，融合 Agent 能力 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐61,007 | AI Agent 通用记忆层 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50,891 | 文档 Agent 与 OCR 平台 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,248 | 云原生向量数据库 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐34,062 | 无向量、基于推理的 RAG 文档索引新范式 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,334 | 高性能大规模向量数据库 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | ⭐58,618 | 集成 AI 混合搜索的极速搜索引擎 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | ⭐54,677 | 可视化拖拽构建 AI Agent |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | ⭐28,618 | 高级 RAG 技术 Notebook 教程合集 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐27,937 | 自托管知识图谱驱动的 Agent 长期记忆 |
| [memvid/memvid](https://github.com/memvid/memvid) | ⭐15,953 | 单文件、Serverless 的 Agent 记忆层，替代复杂 RAG 管线 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐87,524 | 跨会话持久化 Claude Code 上下文 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐59,536 | 为 Coding Agent 压缩工具输出 / RAG chunk，减少 20%–95% token |

> 附加关注：具身智能 / VLA 方向持续升温——[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)（⭐7,691）、[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)（人形机器人通用控制）、[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)（VLA/OpenVLA 中文实战）是值得跟踪的子方向。

---

## ③ 趋势信号分析

今日最强烈的信号是 **"Coding Agent Skills / Harness 生态"成为新的流量入口**。hallmark（+3,372）、mattpocock/skills（+2,060）、Graphify-Labs/graphify（+1,107）三个项目同日冲入 Trending 前列，且全部定位为 Claude Code / Cursor / Codex 的"技能 / 插件 / 工作流"，说明开发者社区已不再满足于使用单一 Agent，而是开始为 Agent 装配可复用、版本化、可分发的"技能包"。配套地，affaan-m/ECC、DietrichGebert/ponytail 等"Agent Harness 优化系统"也维持高热度，构成一个从 Skill → Harness → Agent 的清晰栈。

第二个信号是 **Agent 基础设施的 Rust 化**：openinterpreter 从 Python 迁移到 Rust 并面向 Kimi K3；rig、dora-rs、memvid、aarambh-ai 等 Rust 新项目集中出现。这背后是 Agent 产品化对"低延迟、低内存、可嵌入、可分发二进制"的硬需求。

第三个信号是

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*