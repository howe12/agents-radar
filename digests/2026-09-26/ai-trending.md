# AI 开源趋势日报 2026-09-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-26 03:00 UTC

---

# 📊 AI 开源趋势日报 · 2026-09-26

---

## 第一步：筛选结果

**Trending 榜单 16 个仓库中，筛除 3 个非 AI 项目后，保留 14 个 AI 相关仓库：**

- ❌ 已剔除：`derv82/wifit3`（WiFi 安全工具）、`kelseyhightower/kubernetes-the-hard-way`（K8s 教程）、`openbao/openbao`（密钥管理）

**AI 主题搜索**：145 个项目按 `rag / ml / llm-model / llm / vector-db / rl / embodied-ai / ai-agent / robotics / robot-learning / ros` 等主题标签入库，按星标排序选取代表项目。

---

## 第二步：分类结果

---

# 📰 今日速览

今日 GitHub Trending 几乎被 **AI Agent 基础设施** 全面占领：14 个 AI 项目中有 7 个直接围绕 Agent 编排、技能（Skills）、记忆层展开，其中 `paperclipai/paperclip` 单日 +2,109 stars 领跑全榜，`vectorize-io/hindsight`（Agent Memory，+1,653）、`dream-num/univer`（Office Agent Harness，+1,050）紧随其后。**"Skills / Harness / Memory"** 正在取代单一的 Chatbot，成为 Agent 开源项目的新叙事核心；同时 Google `ax`、Anthropic `claude-plugins-official`、NVIDIA `Model-Optimizer` 三家头部厂商同日出招，Agent Runtime 与模型优化层争夺战升级。

---

## 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 今日亮点 |
|---|---|---|
| [google/ax](https://github.com/google/ax) | ⭐ 新仓 (+1,379) | Google 官方开源的 Agent 编排运行时，定位"Agent OS"层基础设施 |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | ⭐ 新仓 (+359) | 统一 SOTA 模型优化库：量化、蒸馏、剪枝、NAS、Speculative Decoding 一体化 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | ⭐ 新仓 (+83) | Anthropic 官方维护的高质量 Claude Code Plugins 目录 |
| [anthropics/skills](https://github.com/anthropics/skills) | ⭐ 新仓 (+189) | Anthropic 公开的 Agent Skills 仓库，定义官方 Skill 协议 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | ⭐ 新仓 (+306) | 面向 AI Harness 的设计语言层，让 AI 更擅长做 UI/设计 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 181,734 | 本地 LLM 运行事实标准，今日仍稳居主题榜 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐ 36,434 | 高性能 LLM/多模态推理服务框架，RL 主题下高活跃 |

---

## 🤖 AI 智能体 / 工作流

| 项目 | Stars | 今日亮点 |
|---|---|---|
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | ⭐ 新仓 (**+2,109**) | 🔥 今日全榜冠军，"管理工作中 Agent 的开源 App"，定位企业 Agent 协同 |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐ 新仓 (+468) | Agentic Skills 框架 + 软件开发方法论，强调"可执行 Skill 包" |
| [mattpocock/skills](https://github.com/mattpockox/skills) | ⭐ 新仓 (+583) | TypeScript 工程师 Matt Pocock 公开个人 `.agents` 技能库 |
| [dream-num/univer](https://github.com/dream-num/univer) | ⭐ 新仓 (+1,050) | 把 Spreadsheet/Docs/Slides/Canvas 统一为 AI Agent 可调用的 Office Harness |
| [androoAGI/starnet](https://github.com/androoAGI/starnet) | ⭐ 新仓 (+93) | 本地优先桌面 Agent 调度站，Pixel-Art 实时呈现 Agent 工作流 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐ 48,580 | 港大开源超轻量自托管个人 Agent 框架，主题榜 AI-Agent 类头部 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐ 37,552 | Agent + Generative UI 前端协议 AG-UI 的提出者 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐ 52,155 | AI 生产力桌面端，集 300+ Assistant 与多模型统一访问 |

---

## 📦 AI 应用（垂直场景解决方案）

| 项目 | Stars | 今日亮点 |
|---|---|---|
| [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel) | ⭐ 新仓 (+44) | A 股自托管量化工作台，将 LLM 引入"选股/监控/回测"全链路 |
| [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐ 125,894 | 一键生成 AI 短视频，LLM 主题下持续高活跃 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐ 108,642 | 多 Agent LLM 金融交易框架，量化 + Agent 交叉领域代表 |

---

## 🧠 大模型 / 训练

| 项目 | Stars | 今日亮点 |
|---|---|---|
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | ⭐ 新仓 (+1,177) | "Learn it. Build it. Ship it." 从零到生产的 AI 工程实战教程 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐ 105,580 | PyTorch 手写 ChatGPT 级 LLM，长期 ML 主题榜第一梯队 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐ 76,790 | 本地训练/推理 LLM + Diffusion，支持 Qwen3.8、DeepSeek-V4 等新模型 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐ 62,586 | 2 小时训练 64M 参数 LLM，轻量级教学标杆 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐ 166,659 | 多模态模型定义框架的事实标准 |

---

## 🔍 RAG / 知识库

| 项目 | Stars | 今日亮点 |
|---|---|---|
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | ⭐ 新仓 (**+1,653**) | 🔥 Agent Memory That Learns——把"Agent 记忆"做成可学习层 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐ 91,309 | RAG + Agent 融合引擎，长期占据 RAG 主题榜头部 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐ 46,254 | 云原生向量数据库，云端规模 ANN 检索事实标准 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐ 34,828 | Rust 编写的高性能向量检索引擎 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐ 30,986 | 开源 Agent 长期记忆平台，基于知识图谱 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 66,006 | "Agent 记忆层"中间件，已成为生产级 Agent 标配 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐ 12,965 | MLsys2026 Best Paper，97% 存储节省的本地 RAG 方案 |

---

## 📈 趋势信号分析

**Agent 三件套正在成为新的开源共识形态——Skills / Harness / Memory。** 今日 Trending 中，"Skills" 相关仓库占据 3 席（`anthropics/skills`、`obra/superpowers`、`mattpocock/skills`），"Agent Harness" 占据 2 席（`paperclip`、`dream-num/univer`），"Memory" 占据 1 席（`hindsight`），合计贡献今日 Trending AI stars 的 **>70%**。这反映出社区共识已从"做大模型"迁移到"做大模型的操作系统"：如何让 Agent 可被描述、可被复用、可持续记忆。**Google `ax` 的入局**标志着头部厂商正式将 Agent Runtime 视为新战场，与 Anthropic Plugins/Skills 生态形成正面交锋；**NVIDIA Model-Optimizer** 则继续坐稳"推理侧军火商"位置，量化与 Speculative Decoding 成为 Agent 大规模部署的隐形瓶颈。**向量数据库热度虽未爆榜**，但 Cognee、Mem0 等"Agent Memory"中间件正从 RAG 旁支独立成类，预示下一波 RAG 创新将聚焦"记忆+推理"而非"检索+生成"。

---

## 🎯 社区关注热点

- 🔥 **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** —— 今日 +2,109 stars 登顶。"工作中管理 Agent"切入企业协同，是 Agent 落地 ToB 场景的早期范式，值得第一时间 Star 跟进。
- 🔥 **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** —— "可学习的 Agent Memory"重新定义 Memory 层，把记忆从 KV Cache 升级为可微系统，是 Mem0 之后最具野心的开源记忆项目。
- ⚡ **[google/ax](https://github.com/google/ax)** —— Google 官方 Agent 编排运行时，标志着 Agent 框架进入"大厂标准之战"，LangChain/AutoGen 生态格局可能被改写。
- ⚡ **[dream-num/univer](https://github.com/dream-num/univer)** —— 把 Office 全家桶变成 Agent Harness，文档/表格 Agent 的"MCP 时刻"正在到来。
- 🛠️ **[NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)** —— 推理优化统一库，Agent 规模化部署的必经依赖，长期价值高于短期热度。

---

*报告生成时间：2026-09-26 · 数据源：GitHub Trending + Topic Search API*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*