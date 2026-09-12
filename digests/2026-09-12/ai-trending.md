# AI 开源趋势日报 2026-09-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-12 02:37 UTC

---

# 🚀 AI 开源趋势日报 · 2026-09-12

---

## 第一步：AI 相关性筛选

### Trending 榜单筛选结果（16 → 11 个 AI 相关项目）

| ❌ 已过滤（非 AI） | ✅ 保留（AI 相关） |
|---|---|
| gods-eye-view（地理可视化） | i-have-adhd、DeskcommCRM、PI-Desktop、CloddsBot |
| iloader（侧载工具） | llm_wiki、superpowers、MathModelAgent |
| armorpaint（图形工具） | hyperresearch、OpenResearch、spec-kit |
| Sonarr（媒体管理） | pascalorg/editor |
| OpenFlux（网络工具） | |

> 筛选标准：是否以 LLM/Agent/ML/RAG/具身智能为核心能力，或提供面向 AI 智能体的工具链/MCP 集成。

---

## 第二步 & 第三步：分类报告

---

### 1️⃣ 今日速览

> 今日 GitHub Trending 几乎被 **"AI Agent 技能层（Agent Skills / Harness）"** 全面占领——以 `obra/superpowers`、`github/spec-kit`、`ayghri/i-have-adhd` 为代表的项目共同指向一个新方向：**为 AI 编码 Agent 提供可复用的"方法论 + 技能包 + 规范驱动"基础设施**。与此同时，**Agent 驱动的知识库（llm_wiki、hyperresearch）和垂直行业 Agent（CloddsBot 交易、MathModelAgent 建模、DeskcommCRM 销售）** 开始批量涌现，标志 Agent 生态从"通用框架竞争"进入"垂直场景落地"阶段。具身智能与 VLA 模型在 topic 搜索中保持高位热度（RLinf、PhyAgentOS、Embodied-AI-Guide），延续本月以来的机器人学习主线。

---

### 2️⃣ 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、Agent Harness、CLI）

| 项目 | Stars | 今日新增 | 一句话 |
|---|---|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | — | **+729** | Agentic Skills 框架 + 软件开发方法论，为编码 Agent 提供可插拔的"技能包"，是今日 Harness 层最热项目 |
| [github/spec-kit](https://github.com/github/spec-kit) | — | **+1015** | 官方推出的 **Spec-Driven Development 工具包**，让 AI 编码 Agent 按规范而非 ad-hoc 提示工作 |
| [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop) | — | **+552** | 本地优先的 AI 编码 Agent 桌面端（Electron + Rust），强调用户可安装插件的开放 Harness |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | — | **+3463** | 今日 Trending 冠军：让编码 Agent **直接给出答案而非埋藏在长输出中** 的技能包，呼应 Agent 输出体验痛点 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | — | **+106** | 开源 3D 建筑编辑器，原生集成 **MCP 工具**，面向"AI Agent 友好"的工作流 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8.6K | — | Rust 编写的模块化 LLM 应用框架，强类型安全 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐35.8K | — | 高性能 LLM/多模态推理服务框架，与 vLLM 并列的主流方案 |
| [apache/casbin-gateway](https://github.com/apache/casbin-gateway) | ⭐623 | — | Apache 出品的 **LLM & MCP 安全网关**，企业级 Agent 落地必备组件 |

#### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 今日新增 | 一句话 |
|---|---|---|---|
| [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | — | **+626** | 跨 **1000+ 市场**（Polymarket、Kalshi、Binance、Solana）的自主 AI 交易 Agent，含 **M2M 支付协议**，基于 Claude |
| [jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent) | — | **+129** | 专为数学建模设计的 Agent，**一键生成可直接提交的完整论文**，垂直场景爆款 |
| [jordan-gibbs/hyperresearch](https://github.com/jordan-gibbs/hyperresearch) | — | **+153** | Agent 驱动的科研知识库，自动采集+检索+综合多源网络研究 |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | — | **+120** | 用任意模型**并行调度多个研究 Agent**，原生 Rust 实现 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐244K | — | "与用户共同成长的 Agent"，Nous Research 的旗舰 Agent 框架 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐48K | — | 超轻量、自托管的个人 AI Agent 框架（Python），集成 MCP / 多 Agent |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | ⭐41K | — | 构建**生产级高弹性 Agent** 的事实标准，已成 LangChain 生态核心 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐187K | — | 经典 Agent 范式奠基项目，star 量级依然巨大 |

#### 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 今日新增 | 一句话 |
|---|---|---|---|
| [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | — | **+152** | 自托管 **AI 销售操作系统**，原生集成 WhatsApp（WAHA）+ AI Agent，Kommo/Intercom 的开源替代 |
| [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) | — | **+647** | 桌面端"LLM 维基"：**让 LLM 增量构建并维护持久化、可互联的知识库**，突破传统 RAG 每次重建的局限 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐122K | — | AI 一键生成高清短视频，已成中文圈 AI 视频创作标杆 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐53K | — | 文档/主题一键生成**原生 PowerPoint**，含动画、图表、语音旁白 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | ⭐71K | — | 本地运行的 AI 求职 Agent：扫描职位、A-H 评估、定制简历 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐64K | — | LLM 驱动的多市场股票分析，支持零成本定时运行 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐51K | — | AI 生产力桌面端，集成 300+ 助手与主流 LLM |

#### 🧠 大模型 / 训练

| 项目 | Stars | 一句话 |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐60.7K | 🧠 **2 小时从零训练 64M 参数 LLM**，中文圈 LLM 入门天花板项目 |
| [ridgerchu/matmulfreellm](https://github.com/ridgerchu/matmulfreellm) | ⭐3.1K | 去除 MatMul 的 LM 实现，极端轻量化推理新方向 |
| [baidu-baige/LoongForge](https://github.com/baidu-baige/LoongForge) | ⭐559 | 面向 NVIDIA GPU + 昆仑芯 XPU 的 LLM/VLM/Diffusion/具身模型**统一训练框架** |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐76K | 本地 UI 训练 + 推理 LLM/扩散模型，支持 GGUF、MLX、Qwen3.8 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10.7K | **Agent Reinforcement Trainer**：用 GRPO 对真实任务多步 Agent 做强化训练 |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | ⭐10K | 基于 Ray 的易用 RLHF/Agentic RL 框架（PPO/DAPO/REINFORCE++） |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐165K | 主流模型定义框架，覆盖文本/视觉/音频/多模态 |

#### 🔍 RAG / 知识库 / 向量检索

| 项目 | Stars | 一句话 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐90K | 领先的开源 **RAG + Agent** 引擎，企业级上下文层 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35.6K | 📑 **无向量化、基于推理的 RAG**，用文档结构索引替代传统 embedding |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐30.6K | 给 Agent 提供**持久化长期记忆**的自托管知识图谱引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐65K | AI Agent 的 **Memory Layer**，Drop-in 基础设施，跨会话持久化上下文 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | ⭐39.5K | EMNLP2025 收录的轻量高速 RAG |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐46K | 云原生高性能向量数据库 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐34.5K | Rust 高性能向量搜索引擎 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐15.9K | 阿里开源的进程内轻量向量数据库，嵌入式 AI 应用友好 |

#### 🦾 具身智能 / 机器人（topic 热度持续走高）

| 项目 | Stars | 一句话 |
|---|---|---|
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | ⭐5.1K | **具身与 Agentic AI 的强化学习基础设施** |
| [dora-rs/dora](https://github.com/dora-rs/dora) | ⭐3.9K | Rust 数据流机器人中间件，AI 机器人应用编排 |
| [PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core) | ⭐2.2K | **递归自我改进（RSI）的物理 Agent 操作系统**，极具前瞻性 |
| [datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied) | ⭐3.7K | 从零用 Python 构建 VLA/OpenVLA/SmolVLA/π0 |
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | ⭐1.7K | 斯坦福具身 AI 加速研究平台 |

---

### 3️⃣ 趋势信号分析

今日 GitHub Trending 释放了三个明确信号：

**第一，"Agent Skills / Harness" 已成为新风口。** `obra/superpowers`（+729）、`github/spec-kit`（+1015）、`vastsa/PI-Desktop`（+552）、`ayghri/i-have-adhd`（+3463）四项目同时登榜，核心叙事高度统一：Claude Code / Cursor / Codex 等编码 Agent 正在从"裸模型 + Prompt"走向**"可复用的技能包 + 规范驱动 + 结构化方法论"**。这是社区对当前编码 Agent 输出不稳定、流程不透明痛点的集中回应，预示 **Agent 中间件 / Skills Marketplace** 将成为下一波开源竞争焦点。

**第二，Agent 垂直场景应用进入爆发期。** CloddsBot（加密+预测市场交易）、DeskcommCRM（销售+WhatsApp）、MathModelAgent（数学建模）、hyperresearch/OpenResearch（科研）——这些项目形态高度相似：**"一个聚焦领域 + LLM 大脑 + MCP/工具调用 + 自动化执行流"**。这与 LangChain、Dify 早期"通用 Agent 平台"路径分道扬镳，Agent 创业范式已从"做底层框架"转向"做场景型 Agent 产品"。

**第三，无向量化 RAG 与持久化记忆正在重塑知识库范式。** `nashsu/llm_wiki`（+647）的"增量构建持久化维基"、`VectifyAI/PageIndex` 的"无向量推理索引"、`mem0ai/mem0` 的 Agent 记忆层共同指向：**传统"chunk + embedding + 检索"的 RAG 范式正被"结构化知识图谱 + 增量维护 + 推理检索"替代**。这与具身智能侧 `RLinf`、`PhyAgentOS` 的"递归自我改进"趋势相呼应——AI 系统正在从"一次性回答"走向"持续积累"。

---

### 4️⃣ 社区关注热点（开发者重点关注方向）

- 🛠️ **[obra/superpowers](https://github.com/obra/superpowers)** + **[github/spec-kit](https://github.com/github/spec-kit)**：Agent Skills 框架与 Spec-Driven Development 是当下最值得研究和贡献的方向，GitHub 官方背书 + 社区共识形成。
- 🧠 **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)**：递归自我改进的物理 Agent 操作系统，代表具身智能从"训练 VLA 模型"向"构建可自我进化的 Agent 运行时"的范式跃迁。
- 🔍 **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** + **[nashsu/llm_wiki](https://github.com/nashsu/llm_wiki)**：无向量化 RAG 与增量维基化知识库，正在挑战传统 RAG 范式，适合作为下一阶段 RAG 架构选型的参考。
- 🤖 **[alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot)**：跨 1000+ 市场的自主交易 Agent + M2M 支付协议，是 **"Agent Commerce / Agent-to-Agent Economy"** 这一前沿方向的具体落地。
- 🦾 **[RLinf/RLinf](https://github.com/RLinf/RLinf)**：面向具身与 Agentic AI 的强化学习基础设施，连接了大模型 RL 后训练与机器人决策，是模型层与具身层交汇的关键拼图。

---

*数据来源：GitHub Trending 实时榜单 + GitHub Search API（7 天活跃，topic 维度） · 报告时间：2026-09-12*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*