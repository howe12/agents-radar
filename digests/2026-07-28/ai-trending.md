# AI 开源趋势日报 2026-07-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-28 01:57 UTC

---

# 📊 AI 开源趋势日报 · 2026-07-28

---

## 今日速览

今日 AI 开源热度由**"AI 编码工具链"与"垂直领域基础模型"双线驱动**：阿里巴巴开源的 `open-code-review` 以单日 +979 stars 领跑，将传统静态分析流水线与 LLM Agent 混合架构推向生产级；同时面向金融市场的全新基础模型 **Kronos** 首次登榜，呼应了大模型从通用对话向行业纵深迁移的趋势。值得关注的另一信号是 **`impeccable`（+847 stars）**——一个为"AI Harness 做设计"而生的设计语言，配合 `ECC`（Agent Harness 性能优化框架）的高基数，表明围绕 Agent 的工具链生态已经从"造 Agent"转向"调优 Agent 运行环境"。

---

## 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | Stars | 一句话 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 177k | 本地运行 Kimi-K2.6、GLM-5.2、DeepSeek、Qwen 等模型的标杆级推理 CLI，今日仍持续在跑新模型适配。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐ 163k | 涵盖文本/视觉/音频/多模态模型定义与训练的事实标准框架。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐ 157k | 为 AI Agent 提供规模化 Web 抓取与搜索的 API，是 Agent 联网的"水电煤"。 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐ 30k | 大模型与多模态模型高性能推理服务框架，对推理延迟敏感场景必备。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐ 12k | JVM 生态的 LLM 开发库，统一多家模型与向量库接口，企业 Java 团队首选。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐ 8k | 用 Rust 构建模块化 LLM 应用，性能敏感场景的新选项。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐ 27k | 面向 DeepSeek 的终端原生编码 Agent，强调 prefix-cache 稳定性，可长期挂机运行。 |

## 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话 |
|---|---|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐ 234k | Agent Harness 性能优化系统，覆盖 Skills、Memory、Security 等 Agent 工程化全要素。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐ 221k | "会和你一起成长的 Agent"，是 Self-Evolving Agent 路线的代表项目。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐ 185k | 经典"Accessible AI for Everyone"愿景的开源 Agent 平台，长尾热度稳健。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐ 107k | 让网站对 AI Agent 可访问，是 Computer-Use / Web-Agent 赛道的标杆实现。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐ 88k | 为 Agent 提供跨会话持久化上下文与记忆，多 Agent CLI 平台通用集成。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐ 61k | 一个 CLI 让 Agent 读取 Twitter、Reddit、YouTube、GitHub、B站、小红书等全网信息，零 API 费用。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐ 62k | 在送给 LLM 之前先压缩工具输出与 RAG 检索块，给 Coding Agent 减 20%、JSON 减 60–95% token。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐ 97k | 把任意代码库+文档+SQL+PDF 转为可查询知识图谱，作为 Claude Code/Cursor 的 `/graphify` 技能，本地确定性 AST 解析、不依赖向量库。 |

> **今日新增关注**：`[alibaba/open-code-review](https://github.com/alibaba/open-code-review)` ⭐0 (+979 today) — 阿里经大规模生产验证的混合架构代码评审工具，确定性流水线 + LLM Agent 协作，支持行级注释，内置 NPE/线程安全/XSS/SQL 注入规则集，OpenAI & Anthropic 兼容。

## 📦 AI 应用

| 项目 | Stars | 一句话 |
|---|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐ 150k | Agentic workflows 与 RAG 流水线的可视化协作平台，云上/VPC/自托管均可。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐ 146k | 用户体验最佳的本地 AI 对话前端，兼容 Ollama 与 OpenAI API。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐ 99k | 利用大模型 + 自动化工作流一键生成高清短视频，短视频自动化赛道长尾王者。 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | ⭐ 128k | 100+ Agent / Agent Skills / RAG 应用合集，想抄作业找灵感的首选仓库。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐ 41k | 把文档/主题一键转成原生 PowerPoint（含动画、过渡、数据图、音频旁白），PPT 场景杀手级。 |

> **今日新增关注**：
> - `[moeru-ai/airi](https://github.com/moeru-ai/airi)` ⭐0 (+572 today) — 自托管的"AI 老婆"型伴侣，支持实时语音、Minecraft/Factoro 游戏，对标 Neuro-sama。
> - `[bradautomates/claude-video](https://github.com/bradautomates/claude-video)` ⭐0 (+434 today) — 通过 `/watch` 命令让 Claude 真正"看懂"任何视频（下载→抽帧→转录→送入 Claude）。
> - `[pbakaus/impeccable](https://github.com/pbakaus/impeccable)` ⭐0 (+847 today) — 让 AI Harness 学会做设计的"设计语言"，属于"教 AI 自己做 UI"这一新兴方向。
> - `[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)` ⭐0 (+240 today) — Agent 跨 Reddit/X/YouTube/HN/Polymarket/Web 的多源研究技能，输出可溯源综合摘要。

## 🧠 大模型 / 训练

| 项目 | Stars | 一句话 |
|---|---|---|
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐ 68k | 本地训练 + 运行 Gemma 4 / Qwen3.6 / DeepSeek / Kimi / GLM 等模型的轻量 UI，微调入门首选。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐ 53k | 2 小时从 0 训练一个 64M 参数 LLM，是大模型教学项目天花板。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐ 99k | 一步步在 PyTorch 中复刻 ChatGPT 式 LLM，经典长销书配套仓库。 |
| [AI4Finance-Foundation/FinGPT](https://github.com/AI4Finance-Foundation/FinGPT) | ⭐ 20k | 开源金融大模型，金融垂直领域 LLM 的代表性项目。 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐ 10k | Agent Reinforcement Trainer，使用 GRPO 多步训练真实世界任务中的 Agent。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐ 4k | 在 Apple Silicon 上从零搭建 mini-vLLM + Qwen 的推理服务课程，系统工程师必修。 |
| [NVlabs/Sana](https://github.com/NVlabs/Sana) | ⭐ 8k | 面向高分辨率图像合成的线性 Diffusion Transformer，训练效率领先。 |

> **今日新增关注**：`[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)` ⭐0 (+441 today) — 面向**金融市场语言**的基础模型，把 K 线、订单流等视为"语言"序列建模，可能是量化金融大模型路线的新标杆。

## 🔍 RAG / 知识库

| 项目 | Stars | 一句话 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐ 86k | 融合前沿 RAG + Agent 能力的企业级检索增强生成引擎，复杂文档场景的主流选择。 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐ 86k | 100+ 语言的轻量 OCR 工具，把任意 PDF/图像转为 LLM 可消费的结构化数据。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 61k | AI Agent 的通用记忆层，提供跨会话的长期记忆能力。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐ 63k | 本地优先的一体化 Agent 体验套件，私有部署 RAG 首选。 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | ⭐ 54k | 拖拽式搭建 AI Agent / RAG 流程可视化工具。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐ 51k | 文档 Agent / OCR 领域头部平台。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐ 34k | 无向量、基于推理的 RAG 文档索引方案。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐ 12k | 给 RAG 减重 97% 存储的本地索引方案，个人设备也能跑高精度 RAG。 |

---

## 📈 趋势信号分析

今日热榜清晰呈现三条**结构性趋势**：

第一，**AI Coding 工具链进入"工业化"阶段**。`open-code-review` 单日 +979 stars 领跑关键在于它把传统静态分析（NPE、线程安全、XSS、SQL 注入等）与 LLM Agent 的灵活性做"混合架构"组合，标志 AI 编码工具已从 Demo 走向企业 CI/CD 标准件。

第二，**领域大模型（DFM）成为新增长极**。继医疗、法律之后，金融市场基础模型 **Kronos** 首次登榜，这呼应了过去半年"为某行业语言专门预训练"的趋势——基础模型的竞争正在从参数规模转向领域语料深度。

第三，**Agent Harness 工程化生态崛起**。`impeccable`（教 AI 做设计的语言）、`ECC`（Agent Harness 优化系统）、`headroom`（token 压缩）、`graphify`（知识图谱替代向量库）四条产品线共同表明：社区已不再关注"会不会做 Agent"，而是"如何把 Agent 跑得更好、更省 token、更可靠"。配合 `alibaba/open-code-review` 的代码评审流水线，可以看到 **Agent 工程化 = 传统软件工程最佳实践 + LLM 推理** 的合流正在加速。

---

## 🎯 社区关注热点

- 🔥 **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — 单日 +979 stars，阿里大规模验证的混合架构代码评审，是目前 AI 编码场景距离生产最近的工具。
- 🔥 **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — 金融市场基础模型首秀，关注量化/金融与大模型交叉方向的开发者值得一读论文与权重。
- 🔥 **[pbakaus/impeccable](https://github.com/pbakaus/impeccable)** — "AI Harness 的设计语言"——一种新兴的"为 AI 而设计 (Design for AI)"项目，是构建 AI 产品 UI 设计的标准化参考。
- 🔥 **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** — 围绕 DeepSeek 的终端编码 Agent，强调 prefix-cache 稳定性，适合中长期运行的编码场景。
- 🔥 **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 用知识图谱替代传统向量 RAG，本地 AST 确定性解析，每条边都可解释，是 RAG 体系反思的代表案例。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*