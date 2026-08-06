# AI 开源趋势日报 2026-08-06

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-06 01:58 UTC

---

# AI 开源趋势日报 · 2026-08-06

> 数据来源：GitHub Trending 今日热榜 + AI 主题搜索（按 topic 标签近 7 天活跃）
> 注：Trending 榜单展示的是今日新增 star 数（+N today），总量以项目页为准

---

## 1. 今日速览

**今天 GitHub AI 开源生态的关键词是"Agent 工程化"**。Trending 榜单 13 个项目中，10 个与 AI 直接相关，其中 6 个聚焦于"让 Agent 更好用"——涵盖 Agent Skills / Harness 框架、Agent 持久化记忆、Agent 安全审计等细分方向。与此同时，**轻量化大模型推理**（AirLLM 70B 跑在 4GB 显卡上）与**面向 RAG 的文档智能路由**（Firecrawl PDF Inspector）也获得了爆发性关注，标志着 AI 基础设施正在向"低成本、可消费化"演进。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架 / 推理引擎 / SDK / CLI）

| 项目 | 链接 | Star | 说明 |
|------|------|------|------|
| **lyogavin/airllm** | [GitHub](https://github.com/lyogavin/airllm) | ⭐ today +833 | AirLLM 70B 推理用单卡 4GB GPU 即可运行，把"大模型平民化"又往前推了一步 |
| **firecrawl/pdf-inspector** | [GitHub](https://github.com/firecrawl/pdf-inspector) | ⭐ today +1582 | Rust 写的 PDF 智能检测库，自动区分扫描件与文本件，是 RAG 文档路由的关键组件 |
| **huggingface/transformers** | [GitHub](https://github.com/huggingface/transformers) | ⭐ 163,377 | 事实标准的模型定义框架，覆盖文本/视觉/音频/多模态，今日仍保持高频活跃 |
| **vllm-project/vllm** | [GitHub](https://github.com/vllm-project/vllm) | ⭐ 88,283 | 高吞吐 LLM 推理与 serving 引擎，业内部署首选 |
| **sgl-project/sglang** | [GitHub](https://github.com/sgl-project/sglang) | ⭐ 31,369 | 高性能多模态/LLM serving 框架，与 vLLM 同台竞争 |
| **langchain4j/langchain4j** | [GitHub](https://github.com/langchain4j/langchain4j) | ⭐ 12,795 | JVM 生态的 LangChain 实现，Spring/Quarkus 集成的企业 LLM 首选 |
| **kvcache-ai/Mooncake** | [GitHub](https://github.com/kvcache-ai/Mooncake) | ⭐ 6,176 | Moonshot Kimi 的服务化推理平台，KV cache 优化的工程典范 |

### 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

| 项目 | 链接 | Star | 说明 |
|------|------|------|------|
| **TencentCloud/TencentDB-Agent-Memory** | [GitHub](https://github.com/TencentCloud/TencentDB-Agent-Memory) | ⭐ today +1892 | 团队级 Agent 记忆中枢，将对话/文档/代码沉淀为 4 类可复用资产，是今日榜单冠军 |
| **obra/superpowers** | [GitHub](https://github.com/obra/superpowers) | ⭐ today +931 | Agentic Skills 框架 + 软件开发方法论，"给 Agent 装上技能树" |
| **cloudflare/computer** | [GitHub](https://github.com/cloudflare/computer) | ⭐ today +891 | "Give your agent a computer" — 给 Agent 提供隔离计算环境的 Cloudflare 方案 |
| **esengine/DeepSeek-Reasonix** | [GitHub](https://github.com/esengine/DeepSeek-Reasonix) | ⭐ today +747 | DeepSeek 原生 CLI 编程 Agent，主打 prefix-cache 稳定性（长跑不衰） |
| **uber/ADR** | [GitHub](https://github.com/uber/ADR) | ⭐ today +354 | Uber 出品的 AI Agent 安全平台，含可观测性/威胁检测/基准测试，企业级落地 |
| **huangruiteng/loopx** | [GitHub](https://github.com/huangruiteng/loopx) | ⭐ today +326 | 轻量级长跑 Agent 团队的 loop 工程内核，跨 Codex/Claude Code 通用 |
| **addyosmani/agent-skills** | [GitHub](https://github.com/addyosmani/agent-skills) | ⭐ today +226 | Google Chrome 团队 Addy Osmani 出品，工程级 AI 编程 Agent 技能集 |
| **NousResearch/hermes-agent** | [GitHub](https://github.com/NousResearch/hermes-agent) | ⭐ 226,093 | "The agent that grows with you" — 自进化的通用 Agent |
| **browser-use/browser-use** | [GitHub](https://github.com/browser-use/browser-use) | ⭐ 107,992 | 让网站可被 Agent 访问的浏览器自动化层 |
| **langchain-ai/langgraph** | [GitHub](https://github.com/langchain-ai/langgraph) | ⭐ 38,990 | 用于构建有状态/可恢复 Agent 的编排框架 |
| **thedotmack/claude-mem** | [GitHub](https://github.com/thedotmack/claude-mem) | ⭐ 89,749 | 跨会话持久化 Agent 上下文，AI 压缩 + 注入，代表"记忆即服务"方向 |

### 📦 AI 应用（垂直场景解决方案）

| 项目 | 链接 | Star | 说明 |
|------|------|------|------|
| **open-webui/open-webui** | [GitHub](https://github.com/open-webui/open-webui) | ⭐ 147,979 | 自托管 LLM 聊天界面，支持 Ollama/OpenAI API，本地化首选 |
| **harry0703/MoneyPrinterTurbo** | [GitHub](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐ 101,773 | 一键生成高清短视频的 AI 工作流（主题→脚本→视频） |
| **ZhuLinsen/daily_stock_analysis** | [GitHub](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐ 60,192 | LLM 驱动的多市场股票分析系统，零成本定时运行 |
| **CherryHQ/cherry-studio** | [GitHub](https://github.com/CherryHQ/cherry-studio) | ⭐ 49,689 | 一体化 AI 生产力工作室，300+ 助手 + 多模型支持 |
| **hugohe3/ppt-master** | [GitHub](https://github.com/hugohe3/ppt-master) | ⭐ 43,273 | 文档/主题一键生成原生 PowerPoint（含动画/图表/语音旁白） |
| **siyuan-note/siyuan** | [GitHub](https://github.com/siyuan-note/siyuan) | ⭐ 45,645 | 隐私优先的本地知识管理，AI 增强的个人第二大脑 |
| **Mintplex-Labs/anything-llm** | [GitHub](https://github.com/Mintplex-Labs/anything-llm) | ⭐ 64,395 | 本地优先的 Agent 一体化桌面端产品 |
| **earthtojake/text-to-cad** | [GitHub](https://github.com/earthtojake/text-to-cad) | ⭐ 12,909 | CAD/CAE/CAM 领域的 Agent Skills 库，工程设计 AI 化的典型代表 |
| **JuliusBrussee/caveman** | [GitHub](https://github.com/JuliusBrussee/caveman) | ⭐ 96,153 | Claude Code 极简 Token 优化技能，"caveman 式表达"砍掉 65% Token |
| **RoboTwin-Platform/RoboTwin** | [GitHub](https://github.com/RoboTwin-Platform/RoboTwin) | ⭐ 2,682 | [ICML 2026] RoboTwin 2.0 双臂机器人基准，代表具身智能落地 |

### 🧠 大模型 / 训练（模型权重、训练框架、微调工具）

| 项目 | 链接 | Star | 说明 |
|------|------|------|------|
| **tensorflow/tensorflow** | [GitHub](https://github.com/tensorflow/tensorflow) | ⭐ 196,874 | 经典 ML 框架，生态长青 |
| **ollama/ollama** | [GitHub](https://github.com/ollama/ollama) | ⭐ 177,876 | 本地跑 Kimi-K2.6 / GLM-5.2 / DeepSeek / Qwen 等模型，桌面端事实标准 |
| **pytorch/pytorch** | [GitHub](https://github.com/pytorch/pytorch) | ⭐ 102,226 | 深度学习研究的事实标准 |
| **unslothai/unsloth** | [GitHub](https://github.com/unslothai/unsloth) | ⭐ 69,615 | 轻量化训练/推理 UI，Kimi K3/Gemma 4/Qwen3.6 一键跑 |
| **ultralytics/ultralytics** | [GitHub](https://github.com/ultralytics/ultralytics) | ⭐ 60,241 | YOLO26/YOLO11 等 SOTA 视觉模型全家桶 |
| **ray-project/ray** | [GitHub](https://github.com/ray-project/ray) | ⭐ 43,454 | 分布式 AI 计算引擎，RL/训练/服务全栈 |
| **NVlabs/Sana** | [GitHub](https://github.com/NVlabs/Sana) | ⭐ 8,691 | NVIDIA 的高效高分辨率图像合成（Linear Diffusion Transformer） |
| **skyzh/tiny-llm** | [GitHub](https://github.com/skyzh/tiny-llm) | ⭐ 4,444 | 在 Apple Silicon 上"手搓" tiny vLLM + Qwen，工程师友好的 LLM 推理课 |
| **Farama-Foundation/Gymnasium** | [GitHub](https://github.com/Farama-Foundation/Gymnasium) | ⭐ 12,287 | RL 训练环境标准 API（OpenAI Gym 继任者） |

### 🔍 RAG / 知识库（向量库、检索增强、知识管理）

| 项目 | 链接 | Star | 说明 |
|------|------|------|------|
| **langgenius/dify** | [GitHub](https://github.com/langgenius/dify) | ⭐ 151,468 | Agentic Workflow + RAG 一体化协作平台，云/私有部署皆可 |
| **infiniflow/ragflow** | [GitHub](https://github.com/infiniflow/ragflow) | ⭐ 86,910 | 融合 Agent 能力的开源 RAG 引擎，企业知识库首选 |
| **mem0ai/mem0** | [GitHub](https://github.com/mem0ai/mem0) | ⭐ 62,613 | 通用 AI Agent 记忆层，"Agent 跨会话长期记忆"的事实标准 |
| **meilisearch/meilisearch** | [GitHub](https://github.com/meilisearch/meilisearch) | ⭐ 58,869 | 极速混合搜索引擎，原生支持 AI 检索 |
| **FlowiseAI/Flowise** | [GitHub](https://github.com/FlowiseAI/Flowise) | ⭐ 55,196 | 可视化拖拽搭建 AI Agent / RAG 流程 |
| **run-llama/llama_index** | [GitHub](https://github.com/run-llama/llama_index) | ⭐ 51,407 | 文档 Agent + OCR 平台，RAG 框架标杆 |
| **milvus-io/milvus** | [GitHub](https://github.com/milvus-io/milvus) | ⭐ 45,524 | 云原生高性能向量数据库，大规模 ANN 检索首选 |
| **Graphify-Labs/graphify** | [GitHub](https://github.com/Graphify-Labs/graphify) | ⭐ 103,067 | 把任意代码库/SQL/文档转成可查询知识图谱，喂给 Claude Code/Cursor 等 |
| **headroomlabs-ai/headroom** | [GitHub](https://github.com/headroomlabs-ai/headroom) | ⭐ 65,055 | 工具输出/日志/RAG chunk 压缩，减少 20-95% Token，直接降本 |
| **qdrant/qdrant** | [GitHub](https://github.com/qdrant/qdrant) | ⭐ 33,805 | Rust 写的下一代高性能向量数据库 |
| **topoteretes/cognee** | [GitHub](https://github.com/topoteretes/cognee) | ⭐ 29,800 | 自托管知识图谱引擎，给 Agent 装上"长期记忆" |
| **VectifyAI/PageIndex** | [GitHub](https://github.com/VectifyAI/PageIndex) | ⭐ 35,025 | 无向量、基于推理的 RAG

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*