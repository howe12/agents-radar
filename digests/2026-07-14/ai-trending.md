# AI 开源趋势日报 2026-07-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-14 01:54 UTC

---

# 📊 AI 开源趋势日报 · 2026-07-14

---

## 1. 今日速览

今日 GitHub Trending 几乎被 **AI Agent 工具链与垂直场景 AI 应用** 主导：HKUDS 团队连续贡献 Vibe-Trading（个人交易 Agent）与 Graphify（代码库知识图谱）两个爆款；moeru-ai/airi 将虚拟陪伴 Agent 推向桌面/Web 端。**"为 Claude Code / Codex / Cursor 等编码 Agent 提供 Skills/Skills 插件"** 正在成为一种全新的开源范式，单日涌现 hallmark、marketingskills、ECC、graphify 等多个项目。RAG/向量数据库主题长期稳居热门，多个老牌项目（Milvus、Qdrant、PageIndex）持续高频活跃。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | Stars | 今日关注点 |
|---|---|---|
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐86.2k | 高吞吐 LLM 推理引擎，仍是部署首选 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐30.3k | 与 RL/Agent 协同的高性能 LLM 服务框架，曝光度持续上升 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐141.7k | "Agent engineering platform" 重新定位后仍是事实标准 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐148.7k | Agentic workflow 生产级平台，新版本迭代频繁 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐80.7k | AI-Driven Development 标杆 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐104.6k | 让 Agent 操作浏览器的事实标准库 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐150.5k | LLM 友好的网页抓取/搜索 API |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐12.6k | Java 企业级 LLM 应用开发首选 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 今日关注点 |
|---|---|---|
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | ⭐0 (+1,153) | 🔥 今日 Trending #1，"个人交易 Agent" 将自然语言决策落地金融场景 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐0 (+1,095) | 🔥 把任意代码/SQL/PDF 转成可查询知识图谱，喂给 Claude Code/Cursor |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | ⭐0 (+78) | 自托管 Grok Companion，实时语音 + 游戏交互，对标 Neuro-sama |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐45.4k | 轻量级开源 Agent，连接工具/聊天/工作流 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐214.3k | "与你共同成长的 Agent"，强调自我演进 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | ⭐82.4k | 主张"最少的代码"哲学，Agent 行为风格库 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐229.3k | Agent harness 性能优化系统（skills + memory + 安全） |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐26.9k | 围绕 prefix-cache 稳定性设计的 DeepSeek 终端编码 Agent |

### 📦 AI 应用（垂直场景 / 产品级）

| 项目 | Stars | 今日关注点 |
|---|---|---|
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | ⭐0 (+794) | 🔥 "反 AI 烂设计" skill 插件，直击当前 AI 生成 UI 的同质化痛点 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | ⭐0 (+299) | 🔥 为 Claude Code 等 Agent 注入 CRO/SEO/文案等营销能力 |
| [github/spec-kit](https://github.com/github/spec-kit) | ⭐0 (+543) | 🔥 GitHub 官方出品：规范驱动开发（Spec-Driven Development）工具包 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐59.9k | 本地化运行的 AI 求职 Agent（扫描平台→打分→改简历） |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐38.8k | 从任意文档生成可编辑 PPT（非图片），支持原生动画与语音旁白 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐55.8k | 零 API 费用让 Agent 读取 Twitter/Reddit/B站/小红书 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐48.5k | 统一接入多家前沿 LLM 的桌面 AI 生产力套件 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐46.0k | 微信生态超级 Agent，自演化记忆 + 多模型支持 |

### 🧠 大模型 / 训练

| 项目 | Stars | 今日关注点 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐176.1k | 本地运行 Kimi-K2.6/GLM-5.1/DeepSeek/gpt-oss 的首选 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162.6k | 多模态训练/推理的事实标准框架 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐101.8k | 深度学习基础设施，常青树 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐68.1k | Unsloth Studio：本地训练 Gemma4/Qwen3.6/DeepSeek 的低门槛入口 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10.5k | Agent Reinforcement Trainer，GRPO 多步 Agent 训练 |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | ⭐9.8k | Ray-based 高性能 Agentic RL 框架 |
| [rllm-org/rllm](https://github.com/rllm-org/rllm) | ⭐5.7k | "民主化 LLM 强化学习" |
| [areal-project/AReaL](https://github.com/areal-project/AReaL) | ⭐5.5k | 连接 LLM Agent 与 RL 的桥梁 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | ⭐4.1k | 面向具身/Agentic AI 的 RL 基础设施 |

### 🔍 RAG / 知识库 / 向量数据库

| 项目 | Stars | 今日关注点 |
|---|---|---|
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45.2k | 云原生向量数据库，性能/规模标杆 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33.2k | Rust 编写的高性能向量搜索引擎 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50.8k | 文档 Agent 与 OCR 平台领头羊 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐34.0k | "Vectorless, Reasoning-based RAG"，无向量化的推理式检索 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐27.8k | Agent 长期记忆层（自托管知识图谱引擎） |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐60.8k | Agent 通用记忆层，已成为热门基础设施 |
| [memvid/memvid](https://github.com/memvid/memvid) | ⭐15.8k | 单文件 serverless 记忆层，替代复杂 RAG 管道 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐85.0k | RAG + Agent 融合引擎 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | ⭐37.6k | EMNLP2025 论文，简单快速的 RAG 实现 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐87.1k | Agent 跨会话持久上下文 |

---

## 3. 趋势信号分析

**第一，"Agent Skills / Plugin" 范式正在成为新爆点。** 今日 Trending 中至少有 4 个项目（hallmark、marketingskills、graphify、ECC）共享同一理念：为 Claude Code / Codex / Cursor / OpenCode 等编码 Agent 提供可插拔的"技能包"，本质是把 Agent 从通用助手解耦为可组合的能力单元。这种"能力即插件"的模式与早期 VS Code 扩展生态极为相似，预计未来 1–2 周将出现垂直行业（法律、医疗、教育）的 Skills 包。

**第二，垂直领域 Agent 是新的流量入口。** HKUDS 团队同日拿下 Vibe-Trading（金融）和 nanobot（通用）两个高位，意味着"领域知识 + Agent"开始替代纯技术框架成为社区新宠。类似模式还有 career-ops（求职）、CowAgent（微信）、daily_stock_analysis（A股）、ppt-master（办公），呈现"Agent + 一个具体人群/场景"的稳定结构。

**第三，RAG 赛道分化加剧。** 一边是传统向量库（Milvus、Qdrant、Weaviate）持续稳居中长尾热门；另一边 **Vectorless / 知识图谱 / 记忆层** 方向异军突起——PageIndex（无向量化推理式 RAG）、cognee（KG 记忆）、mem0 / memvid（持久记忆）同时高热，反映社区对"纯向量相似度检索"局限性的反思。

**第四，行业事件关联。** Kimi-K2.6、GLM-5.1、DeepSeek、gpt-oss、Qwen3.6、Gemma 4 等模型被 Ollama 与 Unsloth 同步支持，说明 7 月开源模型发布密集期仍在持续；具身智能方向（RLinf、RoboTwin 2.0、BEHAVIOR-1K、Tien Kung-Lab）持续获得机器人 + RL 交叉关注，与近期世界模型/VLA 论文热潮同步。

---

## 4. 社区关注热点（重点推荐）

- 🔥 **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 单日 +1,095 stars。把代码库/SQL/文档/视频一键转知识图谱，是当前 Agent Skills 趋势的最佳代表之一。
- 🔥 **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)** — 单日 +1,153 stars。"个人交易 Agent"是 Agent 走向高价值垂类的标志性项目。
- 🧠 **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — 无向量化的 Reasoning-based RAG，重新思考 RAG 的检索范式，值得架构师重点关注。
- 🧠 **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Agent 通用记忆层基础设施，跨项目渗透速度极快（OpenHands、dify 等均已集成）。
- 🤖 **[unslothai/unsloth](https://github.com/unslothai/unsloth)** — Unsloth Studio 把本地模型训练/部署门槛降到极低，是个人开发者入局开源大模型的关键入口。
- 🦾 **[RLinf/RLinf](https://github.com/RLinf/RLinf)** — 具身+Agentic RL 基础设施，世界模型与 VLA 浪潮下的关键基建。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*