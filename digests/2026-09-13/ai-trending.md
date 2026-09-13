# AI 开源趋势日报 2026-09-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-13 02:36 UTC

---

# 📊 AI 开源趋势日报 · 2026-09-13

---

## 🔍 第一步：AI 相关性筛选

**Trending 榜单 16 个项目中，筛除以下非 AI 项目：**

| 项目 | 排除原因 |
|---|---|
| bilawalsidhu/gods-eye-view | 3D 地理可视化，非 AI/ML 核心 |
| nab138/iloader | iOS sideload 工具 |
| Flowseal/zapret-discord-youtube | 网络代理批处理 |
| Sonarr/Sonarr | PVR/媒体管理 |
| yuliskov/SmartTube | Android TV 媒体浏览 |
| p1neappleXpress/OpenFlux | 网络隧道研究工具 |
| armory3d/armorpaint | 3D 绘图工具 |

**Trending 入选 9 个 AI 项目，主题搜索入选 144 个 AI 项目，合计 153 个进入分析。**

---

## 📰 今日速览

今日 GitHub AI 开源生态呈现"**Agent 经济 + 安全攻防 + 模型记忆压缩**"三条主线。Trending 榜单中 AI 自主代理占据主导——AI 销售 CRM、跨市场交易 Bot、自动渗透测试 Agent、数学建模 Agent 同时登榜，反映**Agent 正从玩具迈向商业化基础设施**。与此同时，**Token 压缩（headroom）**、**持久化记忆（claude-mem）**、**代码知识图谱（graphify）** 成为新的工程热点，预示上下文工程（Context Engineering）正在取代单纯的 Prompt Engineering 成为下一代 LLM 应用核心议题。

---

## 🗂️ 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 180,764 | 本地 LLM 运行事实标准，已支持 Kimi-K2.6 / GLM-5.2 / DeepSeek-V4 / gpt-oss 等主流开源模型 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐ 179,610 | 为 LLM 提供的"上下文 API"，可大规模搜索、抓取与交互 Web 数据 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐ 155,555 | 一体化 Agentic workflow / RAG 平台，支持云、VPC、自托管部署 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐ 76,076 | 本地 UI + 训练工具，兼容 GGUF/MLX，覆盖 FLUX 与 Qwen3.8 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐ 71,767 | 🆕 工具输出/日志压缩，让 Coding Agent 减少 20%、JSON 数据减少 60-95% token |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐ 35,865 | 高性能 LLM/多模态推理服务框架 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐ 13,077 | Java 生态 LLM 库，深度集成 Quarkus / Spring Boot，企业级首选 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | ⭐ 550 | 🆕 OpenAI/Anthropic 兼容统一网关，跨厂商负载均衡 |

---

### 🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐ 244,917 | "与用户共同成长"的 Agent，新一代 Agent 标杆 |
| [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | 🔥 Trending +504/日 | 🆕 开源 AI 销售 OS，原生 AI Agent + WhatsApp，MCP-ready，对标 Kommo/Intercom |
| [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | 🔥 Trending +376/日 | 🆕 自主 AI 交易 Agent，覆盖 Polymarket/Kalshi/Hyperliquid 等 1000+ 市场，**首次提出"机器对机器支付"Agent Commerce Protocol** |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 🔥 Trending +230/日 | 100+ AI Agent / RAG 应用精选合集 |
| [jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent) | 🔥 Trending +262/日 | 🆕 数学建模专项 Agent，可一键产出可提交的完整论文 |
| [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | 🔥 Trending +189/日 | 🆕 全自主 AI Agent 渗透测试系统 |
| [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | 🔥 Trending +113/日 | 🆕 面向 Claude Skills 系统的"红队"攻击技能库，覆盖 SQLi → Shellcode → EDR 绕过 |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | 🔥 Trending +54/日 | 🆕 为并行 AI Agent 工作流设计的 Git worktree CLI |

---

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐ 151,801 | 用户友好的 AI 界面，原生支持 Ollama / OpenAI API，是本地 LLM 的事实 GUI |
| [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐ 122,882 | 一键根据主题生成高清短视频的自动化 AI 工作流 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐ 53,905 | 🆕 AI 生成**原生** PowerPoint（含形状、动画、图表、音频旁白），非模板套用 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐ 51,734 | AI 生产力工作室，300+ 助理模板 + 多模型统一接入 |
| [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | 🔥 Trending +210/日 | 🆕 YuE2 前沿音乐生成，支持符号规划、零样本翻唱与 Agent 化编辑 |
| [huangjunsen0406/py-xiaozhi](https://github.com/huangjunsen0406/py-xiaozhi) | ⭐ 3,467 | 开源 AI 助手生态，集成 MCP、多模态、IoT 与跨平台语音 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 🔥 Trending +217/日 | 提取自 Claude/GPT/Gemini/Grok 的系统提示词合集，是研究闭源模型行为的重要资料 |

---

### 🧠 大模型/训练

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐ 104,851 | 从零用 PyTorch 实现 ChatGPT 同款 LLM，学习路线经典 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐ 60,837 | 🆕 2 小时训练一个 64M 参数微型 LLM，入门训练最佳 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐ 10,713 | 🆕 Agent Reinforcement Trainer，使用 GRPO 为真实任务训练多步 Agent |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | ⭐ 9,997 | 基于 Ray 的高可扩展 Agentic RL 框架（PPO/DAPO/REINFORCE++/VLM） |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐ 8,604 | 🆕 Rust 编写、模块化可扩展的 LLM 应用框架 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐ 4,561 | 🆕 在 Apple Silicon 上手写类 vLLM + Qwen 推理系统，面向系统工程师 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | ⭐ 5,180 | 🆕 面向具身智能与 Agentic AI 的强化学习基础设施 |
| [baidu-baige/LoongForge](https://github.com/baidu-baige/LoongForge) | ⭐ 561 | 🆕 训练 LLM/VLM/Diffusion/具身模型的高性能框架，支持 NVIDIA GPU 与昆仑芯 XPU |

---

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐ 116,259 | 🆕 把任意代码库 + 文档 + SQL Schema + PDF 转成可查询知识图谱，本地 AST 解析，零向量库 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐ 93,754 | 🆕 Agent 的持久化跨会话记忆，捕获→AI 压缩→按需注入，覆盖 Claude Code/Codex/Gemini 等 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐ 90,587 | 领先的开源 RAG 引擎，融合 RAG + Agent 能力 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 65,199 | AI Agent 的"记忆层"基础设施，Drop-in 接入 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐ 65,966 | Local-first 一体化 Agent 体验，主打隐私与本地部署 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐ 46,077 | 云原生高性能向量数据库，RAG 基础设施首选 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐ 35,626 | 🆕 **Vectorless** 推理式 RAG 文档索引，跳过传统 embedding 检索 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐ 34,514 | Rust 编写的高性能大规模向量数据库 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐ 30,656 | 自托管知识图谱引擎，给 Agent 提供持久化长期记忆 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐ 15,905 | 🆕 轻量级进程内向量数据库，嵌入式 AI 应用友好 |

---

## 📈 趋势信号分析

今日 Trending 列表中 **9/16 项目为 AI 相关**（56%），其中 Agent 类占据 5 席，创近期新高，标志着社区关注从"模型本身"明显转向"模型的产品化封装"。**自主商业 Agent**（CloddsBot + DeskcommCRM + pentagi + MathModelAgent）密集登榜，反映 2026 年 Agent 已从 Demo 走向多市场（Polymarket/Kalshi/DeFi）、多渠道（WhatsApp/CLI/IDE）的**真实商业场景落地**，其中 CloddsBot 首次提出的 **Agent Commerce Protocol** 值得长期跟踪。

新晋工程范式集中爆发：**上下文压缩（headroom）、持久记忆（claude-mem、mem0、cognee）、无向量 RAG（PageIndex、graphify）**——三股力量指向同一个方向：传统"Embedding + 向量库 + Prompt"的 RAG 三板斧正在被**推理式检索 + 图谱 + 记忆层**取代。**Rust 在 AI 基础设施层快速渗透**（rig、Codewhale、qdrant、lancedb、copper-rs），与上月 GitHub Octoverse 报告一致。

值得关联的外部信号：Ollama 仓库描述点名 **Kimi-K2.6 / GLM-5.2 / DeepSeek-V4** 等最新开源权重，说明本月国产前沿模型密集发布正拉动整个工具链活跃度；`system_prompts_leaks` 持续上榜则与近期 Anthropic Claude 5.1、OpenAI GPT-6-Astra、Google Gemini 3.8 系列迭代节奏吻合。

---

## 🎯 社区关注热点

-

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*