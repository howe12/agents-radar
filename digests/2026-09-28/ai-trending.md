# AI 开源趋势日报 2026-09-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-28 03:02 UTC

---

# 📊 AI 开源趋势日报 · 2026-09-28

---

## 第一步：AI 相关性筛选

从今日 Trending 榜单（9 个）中剔除 3 个与 AI 无关的项目（PipePipe YouTube 客户端、vercel-labs/scriptc TS 编译器、willfaust/Madeira iOS 游戏模拟），保留 **6 个 AI 相关项目**进入分析。

---

## 第二步：分类结果

| 分类 | 今日 Trending 命中 | 主题库代表 |
|---|---|---|
| 🔧 AI 基础工具 | 1 | transformers, pytorch, sglang, unsloth, tiny-llm |
| 🤖 AI 智能体/工作流 | 4 | hermes-agent, nanobot, CopilotKit, openclaude |
| 📦 AI 应用 | 2 | open-webui, VoiceStudio, browser-use |
| 🧠 大模型/训练 | 0 | LLMs-from-scratch, minimind, ART |
| 🔍 RAG/知识库 | 0 | langchain, ragflow, milvus, mem0 |

---

## 📰 今日速览

**Agent 基础设施层迎来"集体爆发日"。** 今日 Trending 榜单前 4 名中有 3 个与 AI Agent 直接相关，且全部聚焦于 Agent 运行支撑层：记忆管理（hindsight）、Agent 编排（paperclip）、多智能体协同（openrig）。这标志着开源社区关注点已从"如何让 Agent 跑起来"转向"如何让 Agent 长期、稳定、可协作地工作"。语音 AI 与文档 Agent 分别作为消费级和企业级入口继续走强。

---

## 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐166,737 | 模型定义的事实标准框架，文本/视觉/音频/多模态全覆盖 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐103,426 | 深度学习基础设施龙头，GPU 加速动态图 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐36,492 | 高性能 LLM/多模态推理服务框架 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐76,883 | 本地化训练与运行工具，支持 GGUF/MLX 与主流模型 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐13,166 | Java 生态 LLM 集成库，企业 JVM 栈首选 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,732 | 系统工程师视角的 LLM 推理教学项目（tiny vLLM + Qwen） |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | ⭐0 (+790 today) | 从零开始做 AI 工程化实践的新教程 |

---

## 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [**vectorize-io/hindsight**](https://github.com/vectorize-io/hindsight) | ⭐0 (+4520 today) 🏆 | **今日新增 Star 第一名**，"Agent Memory That Learns"——可学习的智能体记忆层 |
| [**paperclipai/paperclip**](https://github.com/paperclipai/paperclip) | ⭐0 (+2401 today) | 管理工作流中 Agent 的开源应用，Agent OS 层 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐249,527 | "The agent that grows with you"，自演进 Agent |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐48,621 | 轻量级自托管个人 Agent 框架，Python 实现 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐37,567 | Agent 前端栈 & AG-UI 协议，React/Angular/Slack 全端 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐35,704 | 围绕 prefix-cache 稳定性设计的 DeepSeek 终端编程 Agent |
| [**mvschwarz/openrig**](https://github.com/mvschwarz/openrig) | ⭐0 (+114 today) | **多模型协同新范式**：Claude Code + Codex 共存于同一系统 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | ⭐41,035 | Rust 编写的终端编码 Agent，强调社区迭代 |

---

## 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐153,386 | 自托管 AI 对话界面，兼容 Ollama / OpenAI API |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐116,531 | 让 Agent 操控浏览器的明星项目 |
| [**debpalash/VoiceStudio**](https://github.com/debpalash/VoiceStudio) | ⭐0 (+3086 today) | **本地化 ElevenLabs 替代品**，支持 646 语言克隆/配音/转录 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐66,533 | 本地优先的 Agent 一站式工作台 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐56,673 | 文档→原生 PPT，含动画/配音/自定义模板 |
| [**dream-num/univer**](https://github.com/dream-num/univer) | ⭐0 (+895 today) | **Agent 办公套件**：表格/文档/幻灯片/PDF 统一运行时 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐108,926 | 多 Agent LLM 金融交易框架 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐126,333 | 关键词一键生成高清短视频 |

---

## 🧠 大模型 / 训练（模型、训练框架、微调）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐105,670 | 从零手写 ChatGPT 级 LLM 的 PyTorch 教程 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐62,766 | 2 小时训练 64M 参数 LLM 的极简路线 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,779 | Agent 强化训练器（GRPO），多步 Agent 在职训练 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | ⭐5,381 | 具身智能与 Agentic AI 的强化学习基础设施 |
| [NVlabs/Sana](https://github.com/NVlabs/Sana) | ⭐9,152 | 高分辨率图像合成的线性 DiT 扩散模型 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,746 | Rust 生态模块化 LLM 应用框架 |

---

## 🔍 RAG / 知识库（向量数据库、检索增强）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐147,175 | Agent 工程化平台的事实标准 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐121,905 | 代码库→可查询知识图谱，无向量库、AST 确定性解析 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐94,804 | 跨会话持久化上下文，Claude Code/Codex/Gemini 全适配 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐91,383 | 领先的开源 RAG 引擎，融合 Agent 能力 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | ⭐84,376 | LLM-ready 网页爬虫，输出干净 Markdown |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐66,118 | AI Agent 的记忆层基础设施，drop-in 接入 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,884 | 无向量、基于推理的 RAG 文档索引 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,968 | MLsys2026 最佳论文，节省 97% 存储的本地 RAG |

---

## 📈 趋势信号分析

**Agent 基础设施层进入"堆栈成熟期"。** 今日 Trending 前 4 名中 3 个聚焦 Agent 运行支撑：hindsight（+4520）解决长期记忆学习问题、paperclip（+2401）解决 Agent 管理问题、openrig（+114）解决异构 LLM 协同问题。这与年初 RAG 组件爆发路径相似——基础设施层一旦定型，会吸引大量二次开发。

**多模型编排成为新热点。** openrig 将 Claude Code 与 Codex 并联运行，反映出社区对"单一模型路线"的不满，"多模型异构编排"正在从概念走向开源工具落地。univer（+895）则代表另一种集成思路——将办公软件重构为 Agent 可调用的运行时。

**本地化语音成为消费 AI 主战场。** VoiceStudio（+3086）以"完全本地化 ElevenLabs 替代品"为卖点，646 语言覆盖切中隐私敏感与多语种需求；这一方向的开源化正在加速挑战 SaaS 语音服务。

---

## 🎯 社区关注热点（开发者重点关注）

- 🔥 **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** — 今日 Star 增速最快，"可学习记忆"或将成为 Agent 长期任务的关键差异化能力，值得第一时间集成试验
- 🔥 **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** — 企业级 Agent 编排的早期雏形，预示 2026 年下半年将出现一批 "Agent OS" 类项目
- 🔥 **[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)** — 完全本地化的语音 AI 替代方案，对 ElevenLabs 形成实质压力
- 📌 **[dream-num/univer](https://github.com/dream-num/univer)** — 办公套件 + Agent 的统一运行时，是"文档→Agent"垂直集成范式的代表
- 📌 **[mvschwarz/openrig](https://github.com/mvschwarz/openrig)** — 多 LLM 协同的早期实验，观察异构 Agent 协作的设计模式

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*