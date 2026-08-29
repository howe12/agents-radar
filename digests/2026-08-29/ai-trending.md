# AI 开源趋势日报 2026-08-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-29 05:09 UTC

---

# 🚀 AI 开源趋势日报 · 2026-08-29

> 数据来源：GitHub Trending（今日榜）+ GitHub Topic 搜索（7 天活跃）
> 覆盖项目：Trending 中 AI 相关 15 个 + Topic 搜索 143 个，去重去噪后入库分析

---

## 一、今日速览

今日 GitHub AI 开源生态的最强信号是 **"Agent Skills/Plugins" 的全面爆发**——archify、scientific-agent-skills、OpenMontage、ponytail 等"Agent 即插件"型项目霸榜，单日千星级增长成为常态。Anthropic 官方下场发布 **claude-plugins-official**，标志着头部厂商正在从"模型竞争"转向"生态卡位"。与此同时，**垂直场景化 Agent**（科研、视频生产、架构绘图、股票分析）开始批量出现，叠加 **Token 经济性优化**（caveman、headroom、freellmapi）与 **开源基础模型框架**（marin）的回归，AI 工程化正在进入"分工精细化"的下一阶段。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | — | **+433** | 聚合 34 家厂商、635 个端点的免费 LLM API 路由网关，OpenAI 兼容协议，自动 failover |
| [JetBrains/go-modern-guidelines](https://github.com/JetBrains/go-modern-guidelines) | — | **+574** | JetBrains 官方出品，让 AI 编程 Agent 写出地道的现代 Go 代码 |
| [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code) | — | **+326** | 截图即代码，HTML/Tailwind/React/Vue 一键还原的经典多模态项目 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | — | **+67** | 浏览器 DevTools 的 MCP 协议接入，让编码 Agent 直接操控 Chrome |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,444 | — | Rust 编写的模块化 LLM 应用框架，强类型 + 高性能 |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | ⭐30,024 | — | 用 LLM 取代传统选择器，Pythonic 的 AI 网页抓取库 |
| [microsoft/multilspy](https://github.com/microsoft/multilspy) | ⭐601 | — | Microsoft 出品的 Python LSP 客户端库，为编码 Agent 提供代码语义底座 |

### 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | — | **+4,562** 🔥 | Agent 生成可验证架构图/时序图/数据流图的 Skill，自包含 HTML，今日 Trending 第一爆款 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | — | **+720** | 163 个经验证的科学 Agent Skills，覆盖生物、化学、药物发现，兼容 Claude Code / Codex / Cursor |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | — | **+1,144** | 12 条流水线、100+ 工具、700+ Skill，把编程助手变成全流程视频制作工作室 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | — | **+1,396** | 让 Agent 学会"偷懒"——少写代码的 Skill，反向提升交付质量 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | — | **+457** | Anthropic 官方维护的高质量 Claude Code Plugins 目录，标志性生态卡位 |
| [cursor/plugins](https://github.com/cursor/plugins) | — | **+246** | Cursor 官方插件规范与首批插件，Agent 生态进入标准化阶段 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐237,812 | — | "与用户共同成长的 Agent"，通用智能体框架的头部项目 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐47,511 | — | 超轻量自托管个人 Agent 框架，Python + WebUI + MCP + 多智能体 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐244,005 | — | Agent Harness 性能优化系统，涵盖 Skills、记忆、安全与研发流程 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | ⭐17,896 | — | Microsoft 出品的 Agent 训练框架，定位为"点亮 Agent 的训练器" |

### 📦 AI 应用（具体产品、垂直场景）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | — | **+1,687** | "Prompt as Code"，GPT-Image-2 工业级提示词引擎与模板库（530+ 案例逆向） |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐69,119 | — | 开源 AI 求职 Agent：扫描职位、评分、改简历、跟踪投递，全流程本地运行 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐64,222 | — | LLM 驱动的多市场股票分析系统，支持零成本定时运行 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐50,070 | — | AI 一键生成原生 PowerPoint，含动画、图表与配音 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐118,228 | — | 一键生成高清短视频的经典 AI 工作流项目 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | ⭐46,026 | — | 隐私优先的自托管知识工作空间，人机协同笔记 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | ⭐43,042 | — | 《深入理解 AI Agent》开源主仓库，正文+PDF+配套代码 |

### 🧠 大模型 / 训练（模型权重、训练框架、微调）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [marin-community/marin](https://github.com/marin-community/marin) | — | **+236** | 基础模型研究开源框架，正面对标"开源版训练栈" |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | — | **+703** | 从 0 到 1 的 AI 工程实战教程，覆盖训练/推理/上线全链路 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐164,588 | — | 当之无愧的模型定义框架，覆盖文本/视觉/音频/多模态 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐179,676 | — | 本地运行 Kimi-K2.6 / GLM-5.2 / DeepSeek / Qwen 等大模型的标配 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐75,088 | — | 本地训练/微调 LLM 与扩散模型，支持 GGUF/MLX |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐32,642 | — | 高性能 LLM 与多模态模型推理服务框架 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐103,965 | — | 从零用 PyTorch 复现 ChatGPT 式 LLM 的经典教程 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | ⭐4,671 | — | 面向具身智能与 Agentic AI 的强化学习基础设施 |

### 🔍 RAG / 知识库（向量库、检索增强、知识管理）

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | — | **+202** | 零服务端代码知识图谱引擎，浏览器端跑 Graph RAG，丢仓库即得问答 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐153,790 | — | Agentic workflow + RAG pipeline 的协作平台，开源 LLMOps 标杆 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐173,711 | — | "为 AI 而生的搜索+抓取+交互 API"，RAG 数据源层事实标准 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐51,909 | — | 领先的文档 Agent 与 OCR 平台 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐64,281 | — | AI Agent 的通用记忆层，跨会话持久化 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,858 | — | 云原生高性能向量数据库 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐89,551 | — | 融合 RAG + Agent 的开源引擎，专注"上下文层" |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐34,250 | — | Rust 编写的高性能向量搜索引擎 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,381 | — | 抛弃向量检索、走向"推理式 RAG"的新型文档索引方案 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐30,330 | —

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*