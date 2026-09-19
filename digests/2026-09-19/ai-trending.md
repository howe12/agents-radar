# AI 开源趋势日报 2026-09-19

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-19 02:39 UTC

---

# AI 开源趋势日报 · 2026-09-19

---

## 今日速览

今日 GitHub Trending 榜单被 **AI Coding Agent 配套工具生态** 全面主导。Cloudflare 的安全审计 Skill 单日斩获 3000+ stars，腾讯的浏览器自动化插件、阿里的大模型代码审查、Anthropic 官方的知识工作插件同时上榜，显示出"Agent Harness / Skills / 插件"作为大模型上层基础设施正在爆发。同时，向量数据库、RAG 引擎、Agent Memory 等长尾工程化项目继续维持高 star 体量，**RAG 与 Agent Memory 正从概念走向生产级基础设施**。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐181k | 本地运行 Kimi、GLM、MiniMax、DeepSeek、Qwen 等模型的事实标准 CLI，今日仍为 LLM 部署首选 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐36k | 高性能 LLM / 多模态推理服务框架，vLLM 的强力竞品 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐13k | Java 生态 LLM 统一 API，集成 Quarkus/Spring，企业级 AI 应用首选 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8.6k | Rust 编写的模块化可扩展 LLM 应用框架 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | ⭐554 | OpenAI/Anthropic 兼容的万能 LLM 网关，多供应商智能负载均衡 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐37k | Agent + 生成式 UI 的前端框架（React/Angular/Slack），AG-UI 协议出品方 |
| [wandb/wandb](https://github.com/wandb/wandb) | ⭐11k | 模型训练与实验管理的 AI 开发者平台 |

### 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars（今日新增） | 一句话说明 |
|------|------------------|-----------|
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | ⭐0（+3006 today）🔥 | **今日榜首**：面向 coding-agent 的多阶段安全审计 Skill，可机读验证结果 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | ⭐0（+2704 today）🔥 | 阿里出品：确定性流水线 + LLM Agent 的混合代码审查，支持 OpenAI/Anthropic |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | ⭐0（+1306 today）🔥 | 让 AI Agent 直接调用你的真实已登录浏览器，CLI + 扩展方案 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐0（+958 today）🔥 | Claude Code / Codex / Cursor 的 Agent Harness 性能优化系统 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐0（+675 today） | Google 工程师出品：生产级 AI 编码 Agent 工程技能集 |
| [coder/coder](https://github.com/coder/coder) | ⭐0（+478 today） | 为开发者与 AI Agent 提供安全沙箱环境的开源平台 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | ⭐0（+569 today） | 自托管多用户、多 Agent 的智能 AI 助手 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | ⭐0（+444 today） | Anthropic 官方终端 Agent 编码工具，命令行自然语言编程 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐187k | 自主 AI Agent 鼻祖项目，社区生态依旧活跃 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐246k | "与你共同成长的 Agent"，长期占据 LLM 话题头部 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐115k | 让 Agent 操控浏览器的明星开源实现 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐48k | 港大出品：超轻量自托管个人 AI Agent 框架 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐152k | 兼容 Ollama / OpenAI 的用户友好 AI 对话界面，私有化部署首选 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐124k | 一键生成高清短视频，AI 大模型 + 自动化工作流 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐107k | 多 Agent LLM 金融交易框架，学术与实战结合 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐51k | 聚合 300+ 助手 + 多模型统一接入的生产力 Studio |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐65k | 多市场股票智能分析 + 决策看板 + 自动推送，零成本定时运行 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐55k | 文档/主题一键生成原生 PowerPoint，含动画、图表与语音旁白 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐83k | 一个 CLI 让 Agent "看见" 推特、Reddit、B 站、小红书全网内容 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | ⭐72k | 求职开源 AI 工作流：扫岗、评分、定制简历、跟踪投递，本地 CLI 运行 |

### 🧠 大模型 / 训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐166k | 文本/视觉/音频/多模态模型定义与训练的事实标准 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐103k | GPU 加速的动态神经网络 Python 框架 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐105k | 从零 PyTorch 实现 ChatGPT 类 LLM，最火入门教程 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐61k | 2 小时训练 64M 参数 LLM，从零上手最佳练手项目 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐76k | 本地训练 / 微调 LLM 与扩散模型，支持 GGUF、MLX |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | ⭐18k | 微软出品：Agent 强化学习的"绝对训练器" |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10k | Agent Reinforcement Trainer，GRPO 多步 Agent 训练 |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | ⭐10k | 基于 Ray 的高可扩展 Agentic RL 框架（PPO/DAPO/REINFORCE++） |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7.4k | 100+ 数据集的大模型评测平台 |
| [NVlabs/Sana](https://github.com/NVlabs/Sana) | ⭐9.1k | 高效高分辨率图像合成的线性 DiT 扩散模型 |

### 🔍 RAG / 知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐146k | "Agent 工程平台"，RAG 与 Agent 工作流的事实标准 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐156k | Agentic workflow + RAG pipeline 一站式协作工作台 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐90k | 领先的开源 RAG 引擎，融合 RAG 与 Agent 能力 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐52k | 面向 AI 的文档处理平台 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | ⭐59k | 闪电般速度的混合搜索 API，为 AI 应用量身打造 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐46k | 云原生高性能向量数据库，大规模 ANN 检索 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐34k | Rust 编写的高性能向量搜索引擎 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35k | 无向量化、基于推理的 RAG 文档索引（MLSys2026 最佳论文） |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐30k | 为 Agent 提供持久化长期记忆的自托管知识图谱引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐65k | Agent 记忆层基础设施，持久化上下文生产级方案 |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | ⭐29k | 进阶 RAG 技术实战 Notebook 集 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12k | 节省 97% 存储的本地 RAG 方案（MLsys2026 最佳论文） |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐15k | 阿里出品：进程内轻量极速向量数据库 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐94k | 跨会话持久化 Agent 上下文，自动压缩 + 注入记忆 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐72k | 为编码 Agent 压缩 tool 输出与 RAG chunk，省 20%~95% token |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐119k | 把任意代码库 + 文档转成可查询知识图谱，兼容 Claude Code/Cursor |

---

## 趋势信号分析

今日 Trending 数据释放了三个明确的产业信号：**第一，"Agent 增强层"正在成为新赛道。** Cloudflare Security-Audit-Skill、ECC、agent-skills、knowledge-work-plugins、OpenSpec 等 6+ 项目同日上榜，且全部围绕"为已有 AI 编程 Agent（Claude Code / Codex / Cursor）注入特定领域 Skill、Memory、Harness 优化"展开，表明 Agent 生态已从"谁家模型强"演进到"谁家配套工具链完善"。**第二，浏览器与代码审查成为 Agent 落地首选场景。** Tencent BrowserSkill（+1306）与阿里 open-code-review（+2704）分获高 star，证明 Agent 在真实环境操作（浏览器）和关键代码评审两条路径已具备工业化基础。**第三，工程化基础设施（Vector DB / RAG / Memory）头部已固化**，但 Nvidia Sana、LoongForge、PageIndex、LEANN 等学术/工程前沿项目持续出现在话题搜索中，预示 RAG 正从"向量检索"向"无向量推理式检索 + 知识图谱 + 长期记忆"多元范式迁移。

---

## 社区关注热点

- 🔥 **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** — 今日 +3006 stars 冠军，"Skill as a Service"模式的标杆，定义了 Agent 增强层的产品形态
- 🔥 **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — 工业级代码审查 Agent，确定性 + LLM 双轨架构值得架构师研究
- 🔥 **[Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill)** — 真实浏览器调用的 Agent 扩展方案，"Agent 操作桌面" 方向的关键拼图
- ⭐ **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** + **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — 两篇 MLsys 最佳论文落地：无向量 RAG 与极致本地化 RAG，代表 RAG 下一代方向
- ⭐ **[mem0ai/mem0](https://github.com/mem0ai/mem0)** / **[topoteretes/cognee](https://github.com/topoteretes/cognee)** — Agent 长期记忆层正成为独立产品类目，多 Agent 系统不可或缺的基础设施

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*