# AI 开源趋势日报 2026-08-16

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-16 00:55 UTC

---

# AI 开源趋势日报 · 2026-08-16

---

## 第一步 · 过滤结果

**已排除的非 AI 项目**：public-apis/public-apis（API 列表）、megadose/holehe（邮箱查询 OSINT）、cordiverse/cordis（未明确 AI 场景的时序框架）。

**保留的 AI 相关项目**：从 Trending 13 个中保留 10 个，从主题搜索 145 个中精选各领域代表项目。

---

## 今日速览

今日 Trending 榜单几乎被 **AI Agent 工具链与端侧 LLM 部署**两类项目主导：cactus-compute 的 14MB 端侧基础模型 needle（+547 stars）与 unslothai/unsloth（+434）共同印证了 **"小而美"模型在端侧推理和消费级硬件上的回潮**；GitHub 官方 spec-kit（+892）、Cursor plugins 规范（+149）、cathrynlavery/diagram-design（+1607）等大量工具围绕 Claude Code / Cursor 等编码 Agent 构建外围生态，反映出 **Agent Harness 正成为新的开源基础设施层**。同时，citrolabs/ego-lite（+545）和 HKUDS/CLI-Anything（+118）分别从浏览器自动化与 CLI 角度切入 Agent-Native 化，**"让所有软件变成 Agent 可调用的工具"** 这一理念正在快速产品化。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / 开发工具 / CLI）

| 项目 | Stars | 简介 |
|---|---|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐ 144,288（topic:rag） | 当前事实上的 Agent 工程标准框架，工具调用、MCP、Memory 一站式支持 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐ 12,873（topic:vector-db） | Java 生态的 LangChain 移植，Spring Boot / Quarkus 友好，企业 AI 落地首选 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐ 51,662（topic:rag） | 文档 Agent + OCR 平台，与 LangChain 形成"RAG 双雄"格局 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐ 8,279（topic:llm-model） | Rust 编写的模块化 LLM 应用框架，性能敏感场景的新选择 |
| [cursor/plugins](https://github.com/cursor/plugins) | ⭐ +149 today | Cursor 官方插件规范发布，意味着编辑器级 Agent 走向标准化 |
| [github/spec-kit](https://github.com/github/spec-kit) | ⭐ +892 today | GitHub 官方出品 Spec-Driven Development 工具包，规范驱动开发或成 Agent 编码新范式 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | ⭐ +118 today | "CLI-Hub" 把任意软件包成 Agent 可调用的 CLI，是 Agent-Native 运动典型代表 |
| [ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) | ⭐ +544 today | 开源 AI 应用生成平台底座，一句话生成企业内部工具与 Agent |

### 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 简介 |
|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐ 231,086（topic:ai-agent） | 来自 Hermes 系列出品方，主打"随用户一起成长的 Agent" |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐ 152,551（topic:rag） | 中文社区最强的可视化 Agentic Workflow + RAG 一体化平台 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐ 90,839（topic:rag） | 跨会话持久记忆层，已支持 Claude Code / Codex / Gemini CLI 等主流 Agent |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐ 74,308（topic:ai-agent） | 从 0 到 1 自建 nano Claude Code 风格 Agent harness，国产高质量教学仓库 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐ 72,031（topic:ai-agent） | 一个 CLI 让 Agent 接入 Twitter / Reddit / YouTube / B站 / 小红书，零 API 费用 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 63,332（topic:rag） | "AI Agent 的通用记忆层"事实标准，长期记忆赛道明星项目 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | ⭐ 55,371（topic:rag） | 拖拽式构建 LLM / Agent 工作流的可视化工具 |
| [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | ⭐ +545 today | 专为 AI Agent 设计的零配置浏览器，可共享登录态，零打扰自动化 |

### 📦 AI 应用（具体应用产品 / 垂直场景解决方案）

| 项目 | Stars | 简介 |
|---|---|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐ 148,877（topic:rag） | Ollama / OpenAI 兼容的本地 AI 对话界面，个人部署首选 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | ⭐ 132,756（topic:rag） | 100+ 可直接运行的 RAG / Agent 应用集合，落地灵感宝库 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐ 64,738（topic:rag） | "Stop renting your intelligence" 本地优先的全栈 Agent 桌面应用 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐ 50,518（topic:ai-agent） | 聚合 300+ 助手与多模型的生产力桌面客户端 |
| [JeecgBoot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | ⭐ 47,403（topic:rag） | Java 圈最火的"AI 低代码"平台，一句话生成业务系统 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐ 47,068（topic:ai-agent） | 把文档 / 主题转成原生 PowerPoint，含动画、图表和语音旁白 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐ 62,967（topic:ai-agent） | LLM 多市场股票分析系统，零成本定时运行，金融垂类典型 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐ 103,941（topic:llm） | 一键 AI 短视频生成工作流，内容创作垂类长青项目 |
| [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | ⭐ +104 today | macOS 本地 STT + 自训练 AI 增强的听写应用，Wispr Flow 替代品 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | ⭐ +1,607 today（**今日 Trending 增速最高**） | 29 种编辑级图表模板，自包含 HTML+SVG，专为 Claude Code 设计 |

### 🧠 大模型 / 训练（模型权重 / 训练框架 / 微调工具）

| 项目 | Stars | 简介 |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐ 164,124（topic:ml） | 多模态模型定义与推理的事实标准框架 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐ 102,395（topic:ml） | 深度学习底层框架基石 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 178,611（topic:llm） | 本地一键运行 Kimi-K2.6 / GLM-5.2 / DeepSeek / Qwen 等前沿模型 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐ 72,049（topic:rl）/ +434 today | 显存优化 + 一键微调，单卡消费级 GPU 训练大模型的标杆 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐ 31,872（topic:rl） | LLM / 多模态高性能推理引擎，结构化输出与 Agent 友好 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐ 102,733（topic:ml） | PyTorch 从零实现 ChatGPT 式 LLM，经典教学仓库 |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | ⭐ +547 today | 14MB 基础模型跑在手机、可穿戴、智能家居、机器人上，**端侧 LLM 标杆** |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | ⭐ +297 today | 一个 YAML 文件流式微调 8B 模型，4GB 笔记本 GPU 即可训练 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | ⭐ 17,486（topic:rl） | 微软开源的 Agent 强化训练框架，agentic RL 工程化方向 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐ 10,582（topic:rl） | GRPO 驱动的 Agent 强化训练器，针对真实任务多步 Agent |
| [NVlabs/Sana](https://github.com/NVlabs/Sana) | ⭐ 8,769（topic:rl） | NVIDIA 出品的高分辨率线性 DiT 图像生成模型 |

### 🔍 RAG / 知识库（向量数据库 / 检索增强 / 知识管理）

| 项目 | Stars | 简介 |
|---|---|---|
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐ 167,809（topic:llm） | 给 LLM 的"上下文 API"，规模化抓取 / 搜索 / 交互网页 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐ 45,646（topic:rag） | 云原生向量数据库，规模最大的生产级 ANN 检索引擎 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐ 88,554（topic:rag） | 检索增强 + Agent 融合的开源 RAG 引擎，企业部署常用 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | ⭐ 58,974（topic:vector-db） | 极速混合搜索引擎，AI 场景中的传统搜索基础设施 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐ 33,992（topic:vector-db） | Rust 写的高性能向量数据库，next-gen AI 检索首选 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐ 35,198（topic:vector-db） | "无向量化、基于推理"的 RAG 文档索引，对抗向量检索局限性 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐ 30,051（topic:vector-db） | 给 Agent 提供持久长期记忆的自托管知识图谱引擎 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐ 106,730（topic:rag） | 把代码库 + 文档 + SQL + PDF 转成可查询知识图谱，Claude Code / Cursor / Codex 通用 Skill |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐ 66,453（topic:rag） | LLM 上游 Token 压缩代理层，JSON 最高省 95%，解决 Agent 上下文成本痛点 |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | ⭐ 29,070（topic:vector-db） | 各种高级 RAG 技术的逐 notebook 教程，业内人手一份 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐ 15,444（topic:vector-db） | 阿里出品的轻量级进程内向量数据库，边缘 / 嵌入式 RAG 场景 |

---

## 趋势信号分析

从今日 Trending 的增量结构看，**"Agent 周边工具链"获得了最显著的爆发性关注**——前 5 名里 4 个项目（spec-kit、cursor/plugins、CLI-Anything、diagram-design、ego-lite）都围绕编码 / 浏览器 / CLI Agent 构建外围能力，且其中 3 个项目都把"Claude Code 兼容 / Agent-Native"作为核心卖点，说明开发者社区已形成共识：**Agent 本身不再是稀缺品，围绕 Agent 的 Harness、Skill、Memory、Plugin 生态才是下一阶段的护城河**。

第二个明确信号是 **"端侧 / 小模型 / 低算力部署"的回归**。needle 用 14MB 跑在手机和机器人上、Soup 让 4GB 显存笔记本即可微调 8B、unsloth 持续霸榜——这些项目集体指向 **"大模型 + 终端设备"组合的工程化拐点**，与近期业界对端侧推理芯片、Apple Intelligence 升级、机器人本地大脑等趋势高度同频。

第三，**"规范驱动 + Agent Harness 标准化"** 正在成为新一波基础设施叙事：GitHub 官方下场做 spec-kit、Cursor 发布 plugin 规范、CLI-Anything 推动 CLI-Hub，意味着 Agent 生态正从"百花齐放"过渡到"协议先行"。这也与近期 Claude Code / MCP 生态的

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*