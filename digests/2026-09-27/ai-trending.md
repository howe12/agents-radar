# AI 开源趋势日报 2026-09-27

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-27 03:05 UTC

---

# 🤖 AI 开源趋势日报 · 2026-09-27

---

## 今日速览

今日 GitHub Trending 榜被 AI Agent 基础设施类项目强势占领——**PaperClip**（+2608⭐）与 **Hindsight**（+2147⭐）双双以"Agent 管理"与"Agent 记忆"为核心切入，登顶今日热榜；**Univer**（+849⭐）则提出"Office Harness for AI Agents"概念，将办公套件改造为智能体可调用的运行时。同时，NVIDIA **Model-Optimizer** 重新活跃（+357⭐），MCP 协议周边工具（mobile-mcp）持续扩张，反映出社区对**Agent 工程化栈**（Memory / Harness / MCP / Skill Routing）全面铺开的强烈兴趣。今日非 AI 项目（OpenBao、VS Code、LLVM、Next.js 等）已被略去。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理 / CLI）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 200,473 / +46 today | 经典 ML 框架，今日仍稳居 Trending |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐166,704 | 多模态模型定义框架的事实标准 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐103,382 | 动态图深度学习基础设施 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐181,782 | 本地运行 Kimi/GLM/DeepSeek/Qwen 等开源模型的首选 CLI |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | +357 today | 统一库：量化/蒸馏/剪枝/NAS/投机解码，对接 TensorRT-LLM、vLLM |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐36,460 | 高性能 LLM 与多模态模型服务框架 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐76,839 | 本地训练/微调 LLM 与扩散模型的轻量方案 |
| [mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp) | +168 today | MCP Server for Mobile（iOS/Android/模拟器），Agent 连接移动端的关键中间层 |

---

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | +2608 today 🔥 | **今日 #1**，"管理办公 Agent 的开源应用"，企业级 Agent 编排新入口 |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | +2147 today 🔥 | **今日 #2**，能自我学习的 Agent 记忆层，对标 mem0 的强力新选手 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐249,258 | "与用户共同成长的 Agent"，高活跃度 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐267,990 | Agent Harness 性能优化系统，跨 Claude Code/Codex/Cursor |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐187,583 | 自主 Agent 老牌标杆，仍处持续演进 |
| [dream-num/univer](https://github.com/dream-num/univer) | +849 today | "Office Harness for AI Agents"——把电子表格/Docs/Slides 变为 Agent 可编排运行时 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐66,038 | 生产级 Agent 记忆基础设施，持久化上下文层 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐94,747 | 跨会话持久化 Agent 上下文，AI 压缩注入 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐108,786 | 多 Agent LLM 金融交易框架 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐37,557 | Agent + 生成式 UI 的前端协议层（AG-UI） |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐48,601 | 超轻量自托管个人 Agent 框架（Python + WebUI + MCP） |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐116,423 | 浏览器自动化 Agent 标杆 |
| [anthropics/claude-code-action](https://github.com/anthropics/claude-code-action) | +31 today | 官方 Claude Code GitHub Action，自动化编码工作流 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | +361 today | AI 驱动的渗透/逆向技能路由器，自举式工具链 + 进化经验库 |

---

### 📦 AI 应用（产品级 / 垂直场景）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐153,274 | 最受欢迎的自托管 LLM 对话界面 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐66,503 | 本地优先的"全能 LLM 工作台" |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐157,294 | Agentic 工作流 + RAG 一站式平台（可视化 + 自托管） |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐52,166 | 桌面 AI 生产力工作室，统一接入前沿 LLM |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐56,522 | AI 一键生成原生 PowerPoint（含图表、动画、旁白） |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐126,132 | 大模型 + 自动化流水线一键生成高清短视频 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐65,686 | LLM 驱动的多市场股票分析系统 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | ⭐34,084 | "Vibe-Trading"——个人交易 Agent |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐73,489 | 面向分析师/量化/AI Agent 的开放金融数据平台 |

---

### 🧠 大模型 / 训练 / 微调

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐62,679 | 🧠 2 小时训练 64M 参数 LLM，极简教学标杆 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐105,629 | PyTorch 从零实现类 ChatGPT LLM，经典教程 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐76,839 | 本地微调 LLM/扩散模型的高效方案 |
| [kvcache-ai/Mooncake](https://github.com/kvcache-ai/Mooncake) | ⭐6,664 | Moonshot Kimi 的服务化平台，KV-cache 架构代表 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,778 | Agent 强化训练器（GRPO），为 Qwen/GPT-OSS/Llama 做"在职训练" |
| [AI4Finance-Foundation/FinGPT](https://github.com/AI4Finance-Foundation/FinGPT) | ⭐21,298 | 开源金融领域 LLM |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | ⭐5,375 | 面向具身智能与 Agentic AI 的强化学习基础设施 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,475 | 覆盖 100+ 数据集的 LLM 评测平台 |

---

### 🔍 RAG / 知识库 / 向量检索

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐147,122 | Agent 工程化平台的事实标准 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐91,335 | 融合 RAG + Agent 能力的领先开源引擎 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐52,325 | LLM 文档处理与 RAG 编排平台 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | ⭐84,312 | 为 LLM/Agent 提供 LLM-ready Markdown 的爬虫 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐46,257 | 云原生高性能向量数据库 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐34,839 | 大规模向量搜索引擎（Rust） |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | ⭐16,850 | 开源向量数据库 + 结构化过滤 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,862 | 无向量、基于推理的 RAG 文档索引 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐30,997 | 自托管知识图谱引擎，为 Agent 提供长期记忆 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,968 | MLsys2026 最佳论文，RAG 存储节省 97% 的个人设备方案 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐121,683 | 把任意代码库/SQL/PDF 转为可查询知识图谱（AST 解析 + 可解释边） |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐73,894 | 压缩工具输出/日志/RAG chunk，编程 Agent 节省 20% tokens |

---

## 📈 趋势信号分析

今日 Trending 的最大特征是 **"Agent 基础设施层"集中爆发**：榜首 PaperClip（+2608）与榜眼 Hindsight（+2147）首次同时登顶，分别从"Agent 管理编排"与"Agent 自我学习记忆"两个此前相对分散的方向切入；Univer（+849）进一步把 Agent 与办公文档运行时耦合。三者合计贡献今日 AI 类增量 stars 的一半以上，说明社区已从"造 Agent 框架"阶段，进入"**为 Agent 造基础设施**"的新阶段。**MCP 协议生态**持续外延——mobile-mcp（+168）将 Agent 触达移动端；Zhaoxuya520 的 reverse-skill（+361）则把 Claude Code / Cursor 等编码 Agent 拉入安全研究领域。**模型推理优化**方向 NVIDIA Model-Optimizer（+357）重新活跃，与 TensorRT-LLM/vLLM 生态一脉相承，预示部署侧仍是落地重点。整体信号与近期 **Claude Code 生态扩张**、**开源大模型本地化（Ollama 支持 MiniMax/Kimi/DeepSeek）**、以及行业"Agent-as-a-Service"趋势高度吻合。

---

## 🔥 社区关注热点

- 🚀 **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** — 今日 +2608⭐，Agent 管理类新晋霸主，反映企业级 Agent 编排需求井喷，**值得作为新一代 Agent 编排入口重点观察**。
- 🧠 **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** — +2147⭐，"能学习的 Agent 记忆"概念新颖，与 mem0/claude-mem 构成记忆层三足鼎立，**Agent 持久化记忆方向的核心新变量**。
- 🏢 **[dream-num/univer](https://github.com/dream-num/univer)** — +849⭐，"Office Harness for AI Agents"思路独特，把 Office 套件变为 Agent 可编排的运行时，**值得跟进其文档/表格 Agent 接口设计**。
- ⚙️ **[NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)** — +357⭐，统一量化/蒸馏/投机解码工具链，对接 vLLM/TensorRT，**模型部署优化方向的标准入口**。
- 📱 **[mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp)** — +168⭐，**MCP 协议落地移动端**，Agent 触达真实设备的关键拼图，是 MCP 生态基础设施层面的重要进展。

> 附：具身智能（Embodied AI）方向今日虽未登顶 Trending，但 [RLinf](https://github.com/RLinf/RLinf)、[RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)、[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) 在主题搜索中持续高活跃，是 **Physical AI / VLA** 方向值得长期跟踪的二级信号。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*