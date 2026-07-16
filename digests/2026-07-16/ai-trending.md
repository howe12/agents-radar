# AI 开源趋势日报 2026-07-16

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-16 02:01 UTC

---

# AI 开源趋势日报 · 2026-07-16

---

## 今日速览

今日 GitHub Trending 被「AI Agent Skills / 工具增强」主题刷屏 —— 围绕 Claude Code、Codex、Cursor 的可插拔 Skills（如 hallmark、skills、marketingskills）单日新增 stars 均破千，反映社区正从「调 Prompt」快速迁移到「组装 Skills」。垂直领域 AI Agent 持续爆发：交易（Vibe-Trading）、教育（DeepTutor）、陪伴（airi）三大方向各有项目登榜。同时，**Agent Harness**（agent 执行框架/安全护栏）成为新的关注焦点，destructive_command_guard 单日 +471 stars 标志着 Agent 安全正从概念走向落地工程。

---

## 🔧 AI 基础工具（框架/SDK/推理引擎）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | 176,204 | — | 本地运行 Kimi-K2.6/GLM-5.1/DeepSeek/gpt-oss 等模型的事实标准 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 86,353 | — | 高吞吐 LLM 推理与 Serving 引擎，工业部署首选 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | 30,348 | — | 高性能 LLM/多模态 Serving 框架，与 vLLM 并列双雄 |
| [kvcache-ai/Mooncake](https://github.com/kvcache-ai/Mooncake) | 5,835 | — | Moonshot AI 为 Kimi 打造的高性能 Serving 平台 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 12,604 | — | Java 生态的 LLM 统一 API 库，原生支持 MCP/Agent/RAG |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,939 | — | Rust 编写的模块化可扩展 LLM 应用框架 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 151,566 | — | Agent 时代的 Web 抓取与结构化 API，是 Browser Agent 的基础设施 |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | — | **+1,277** | 反「AI-slop」设计 Skill，今日最热的 Claude Code 增强插件之一 |

## 🤖 AI 智能体/工作流（Agent 框架/自动化）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 141,864 | — | Agent 工程化的事实平台，从原型到生产 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,569 | — | 自主 Agent 愿景的奠基者，仍是社区学习标杆 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 80,911 | — | AI 驱动的软件开发 Agent，支持完整 SDLC |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 104,928 | — | 让 Agent 像人一样浏览网页，Web 自动化基座 |
| [langgenius/dify](https://github.com/langgenius/dify) | 148,973 | — | 生产级 Agentic Workflow 开发平台，B 端部署热门 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36,064 | — | Agent 前端栈与 AG-UI 协议，让 Agent 落地到 Web/App |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | 6,046 | — | 「原子化」构建 AI Agent 的 Python 框架，强调可组合性 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 45,671 | — | 轻量级开源 Agent，HKUDS 实验室出品，趋势稳定 |
| [openinterpreter/openinterpreter](https://github.com/openinterpreter/openinterpreter) | — | **+299** | Rust 重写的低成本模型 Coding Agent，性能与成本平衡的代表 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 23,742 | **+915** | 「Vibe」系列新作：个人交易 Agent，量化场景的端到端方案 |
| [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) | — | **+471** | Agent 安全护栏：拦截危险 git/shell 命令，工程化里程碑 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | — | **+2,130** | 今日 Trending #1：直接来自工程师 .claude 目录的 Skills 集合 |

## 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 145,559 | — | 自托管 AI 对话界面，支持 Ollama/OpenAI 协议 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 63,359 | — | 本地优先的 Agent 一体化平台 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 70,629 | — | 面向分析师/量化/Agent 的开放金融数据平台 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 57,384 | — | LLM 驱动的多市场股票分析系统，中文社区热门 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 39,250 | — | AI 生成原生可编辑 PPT，含图表、动画与语音旁白 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 60,256 | — | 本地 AI 求职 Agent：A-F 评分 + 简历定制 + 进度跟踪 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | — | **+172** | 终身个性化 AI 辅导 Agent，教育垂直落地 |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | — | **+110** | 自托管 Grok Companion：实时语音 + 游戏交互，目标 Neuro-sama |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | — | **+340** | Claude Code 营销 Skill 套件：CRO、文案、SEO、增长一体化 |

## 🧠 大模型/训练（模型/框架/微调）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162,632 | — | 多模态模型定义/训练/推理的事实标准 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 101,837 | — | 深度学习底层框架，GPU 加速首选 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 99,145 | — | 从零实现 ChatGPT 式 LLM，最热门教学项目 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 68,272 | — | 本地训练/运行 Gemma4/Qwen3.6/DeepSeek 的 Web UI |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,475 | — | Agent 强化训练器：GRPO + 多步任务 + 真实工作流 |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | 9,799 | — | Ray + vLLM 的高性能 Agentic RL 框架（PPO/DAPO） |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | 52,337 | — | 微软官方 12 周 AI 入门课程 |
| [HenryNdubuaku/maths-cs-ai-compendium](https://github.com/HenryNdubuaku/maths-cs-ai-compendium) | 5,937 | **+725** | AI/ML 研究工程师的数学/CS 知识纲要，登顶学习资源类 |

## 🔍 RAG/知识库（向量库/检索/记忆）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 85,135 | — | RAG + Agent 融合的开源引擎，企业部署热门 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 50,874 | — | 文档 Agent 与 OCR 平台，RAG 主流框架 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,238 | — | 云原生高性能向量数据库，大规模 ANN 检索首选 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,308 | — | 高性能大规模向量搜索引擎，Rust 实现 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 27,951 | — | Agent 持久记忆层：自托管知识图谱引擎 |
| [memvid/memvid](https://github.com/memvid/memvid) | 15,879 | — | 单文件 Serverless 记忆层，替代复杂 RAG 管道 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 34,045 | — | 无向量、基于推理的 RAG 文档索引，新范式 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 60,925 | — | AI Agent 通用记忆层，跨会话长期记忆基础设施 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 121,949 | **+1,236** | 100+ 可直接运行的 Agent & RAG 应用合集，社区入门首选 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | 12,144 | — | Claude Code 代码搜索 MCP，让 Agent 理解整个代码库 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 87,410 | — | 跨会话持久上下文，多 Agent 平台通用 |

---

## 趋势信号分析

**第一信号：Agent Skills 模块化生态正在爆发。** 今日 Trending 榜单中，hallmark（+1,277）、mattpocock/skills（+2,130）、marketingskills（+340）、destructive_command_guard（+471）四个项目均围绕 Claude Code / Cursor / Codex 的「Skills」机制展开，合计单日 stars 突破 4,200。这一现象标志着 LLM 应用开发范式从「Prompt Engineering」正式迁移到 **「Skills Engineering」** —— Agent 能力被拆解为可复用、可组合、可分发的模块，类似 npm 包之于 Node.js。社区正快速建立事实标准。

**第二信号：Agent Harness（Agent 执行框架）成为新赛道。** destructive_command_guard（Agent 命令护栏）与 openinterpreter（Rust 重写的 Coding Agent）登榜，配合 HKUDS 的 Vibe-Trading（+915）/DeepTutor（+172）系列，反映 **Agent 不再只是聊天玩具，而是走向生产工程化**：需要安全护栏、模型成本优化、领域流程封装。Rust 在 Agent 基础设施层（dcg、memvid）的渗透率也在上升。

**第三信号：垂直 Agent 进入「百花齐放」阶段。** 交易（Vibe-Trading）、教育（DeepTutor）、陪伴（airi，瞄准 Neuro-sama）、求职（career-ops，topic:ai-agent #1）覆盖了金融、学习、娱乐、职业全场景，预示 2026 下半年 Agent 产品将从通用聊天转向 **垂直工作流深度整合**。

---

## 社区关注热点

- 🔥 **[mattpocock/skills](https://github.com/mattpocock/skills)**（今日 +2,130）—— Claude Code Skills 模式的标杆集合，建议所有 Agent 开发者立刻研究 Skills 协议与目录结构。
- 🚀 **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)**（今日 +915）—— 「Vibe-Coding」之后「Vibe-Trading」接棒，是量化 Agent 端到端落地的优质范例。
- 🛡️ **[Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard)**（今日 +471）—— Agent 安全的早期开源基建，每个 Coding Agent 用户都应集成。
- 🧩 **[Nutlope/hallmark](https://github.com/Nutlope/hallmark)**（今日 +1,277）—— 反 AI 同质化设计 Skill，体现社区对 AI 输出质量的精细化诉求。
- 📚 **[HenryNdubuaku/maths-cs-ai-compendium](https://github.com/HenryNdubuaku/maths-cs-ai-compendium)**（今日 +725）—— 一份系统化的 AI 研究工程师成长路径，适合想从「调 API」跨入「做研究」的开发者。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*