# AI 开源趋势日报 2026-08-18

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-18 00:51 UTC

---

# 📊 AI 开源趋势日报 · 2026-08-18

---

## 今日速览

今日 GitHub Trending 榜单中 **AI 相关项目占比超过 60%**，呈现两个清晰的爆发方向：**Agent 编码 CLI 生态**（ai-memory、career-ops、Anthropic-Cybersecurity-Skills 集体上榜）与 **AI 安全/渗透测试工具**（strix 单日 +598 stars 表现抢眼）。同时，**Apple Silicon 本地推理**（omlx）与**跨模型硬件适配**（llmfit）反映出"去云端化、私有化部署"的开发者诉求正在升温。MoneyPrinterTurbo 以 +1189 stars 继续领跑短视频生成赛道，AI 内容生产工具依然是最强吸量入口。

---

## 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars / 今日新增 | 说明 |
|---|---|---|
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | 0 / **+198** | 一条命令扫描硬件，匹配可本地运行的 LLM——模型爆炸时代的"选型助手" |
| [jundot/omlx](https://github.com/jundot/omlx) | 0 / **+78** | 面向 Apple Silicon 的 LLM 推理服务器，支持连续批处理与 SSD 缓存，从菜单栏管理 |
| [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | 0 / **+207** | 为 Agent CLI 提供长期记忆与跨厂商交接能力，Agent 基础设施层补齐关键拼图 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐178,811 | 本地运行 Kimi-K2.6、GLM-5.2、DeepSeek 等多模型的标杆工具 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐89,278 | 高吞吐低显存 LLM 推理引擎，工业部署的事实标准 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐164,196 | 涵盖文本、视觉、音频、多模态的模型定义框架，生态根节点 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐31,974 | 高性能 LLM/多模态服务框架，与 vLLM 并列的推理基础设施 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,302 | Rust 生态下的模块化 LLM 应用构建框架，系统级语言首选 |

---

## 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars / 今日新增 | 说明 |
|---|---|---|
| [usestrix/strix](https://github.com/usestrix/strix) | 0 / **+598** | 开源 AI 渗透测试工具，自动发现并修复应用漏洞——AI 安全 Agent 的新标杆 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 0 / **+218** | AI 求职 Agent：扫描招聘平台、A-F 评分、定制简历，本地 CLI 即可运行 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 0 / **+198** | 817 项网络安全技能映射到 MITRE ATT&CK、NIST AI RMF 等 6 大框架，兼容 20+ Agent 平台 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | ⭐17,492 | 微软推出的 Agent 训练框架，"点亮" AI 智能体 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐186,656 | 最早期的自主 Agent 项目，仍是入门与原型验证的首选 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐109,529 | 让 AI Agent 可访问并操作任意网站，浏览器自动化的 LLM 化代表 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐47,104 | 超轻量自托管个人 AI Agent 框架，一行安装开箱即用 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐36,803 | Agent 与生成式 UI 的前端栈，AG-UI 协议作者 |

---

## 📦 AI 应用（垂直场景产品）

| 项目 | Stars / 今日新增 | 说明 |
|---|---|---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐106,026 / **+1189** | 输入关键词一键生成高清短视频，AI 内容自动化的国民级应用 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐152,724 | 一站式构建 Agent 工作流与 RAG 管道，云/VPC/自托管均可部署 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐149,052 | 支持 Ollama 与 OpenAI API 的友好 AI 界面，本地大模型的"门面" |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐50,667 | 集成 300+ 助手与自主 Agent 的 AI 生产力工作室 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | ⭐55,379 | 拖拽式可视化搭建 AI Agent，低代码首选 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐47,497 | 文档/主题 → 原生 PowerPoint，含图表、动画、语音旁白 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐63,178 | LLM 驱动的多市场股票智能分析与自动推送系统 |

---

## 🧠 大模型 / 训练（模型、训练框架、微调）

| 项目 | Stars | 说明 |
|---|---|---|
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐73,225 | 本地运行与微调 Qwen3.8、Kimi K3、DeepSeek-V4、FLUX 等模型的统一 UI |
| [kvcache-ai/Mooncake](https://github.com/kvcache-ai/Mooncake) | ⭐6,301 | Moonshot AI Kimi 的服务底座，KVCache 架构范式引领者 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,311 | 涵盖 100+ 数据集的 LLM 评测平台，覆盖 Llama、Qwen、GLM、Claude 等 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,596 | Agent 强化训练器，用 GRPO 让 Agent 在真实任务中获得"在职训练" |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | ⭐9,923 | 基于 Ray 的高可扩展 Agentic RL 框架，支持 PPO/DAPO/REINFORCE++ |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | ⭐6,186 | 以"原子化"理念构建 AI Agent，组合性优于传统单体框架 |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | ⭐78 | 纯 Rust + Candle 从零实现 Decoder-only LLM，含 MoE 与长上下文 Agent |

---

## 🔍 RAG / 知识库（向量库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐88,683 | RAG + Agent 一体化引擎，企业级上下文层首选 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐51,709 | 领先的文档 Agent 与 OCR 平台，结构化数据接入 LLM 的桥梁 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐63,467 | AI Agent 的通用记忆层，让 Agent 拥有跨会话长期记忆 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐91,022 | 跨会话持久化上下文，兼容 Claude Code、Codex、Gemini 等主流 Agent CLI |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,666 | 云原生高性能向量数据库，亿级 ANN 检索首选 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐34,031 | Rust 编写的高性能大规模向量搜索引擎 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,223 | 无向量化的推理式 RAG，用结构化文档索引替代 Embedding |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐30,083 | 基于知识图谱的 Agent 长期记忆平台，自托管可控 |

---

## 📈 趋势信号分析

今日 Trending 榜单透露出三大清晰信号：

**第一，Agent 基础设施层进入"组件化"竞争阶段。** ai-memory（+207）、career-ops（+218）、Anthropic-Cybersecurity-Skills（+198）几乎同时登榜，说明开发者不再满足于单一 Agent Demo，而是围绕 **长期记忆、技能库、上下文压缩、跨厂商交接** 等可复用模块展开建设。ECC、caveman、claude-mem 等围绕 Agent Harness 的工具同样印证这一方向。

**第二，AI 安全成为新兴热点。** strix 单日 +598 stars 是 Trending 榜上 AI 项目中仅次于 MoneyPrinterTurbo 的爆发点，叠加 Anthropic-Cybersecurity-Skills 上榜，反映出 **"用 AI 攻击、用 AI 防御"** 的双重需求正快速产品化，AI Red Teaming 与自动化渗透测试正在形成独立赛道。

**第三，"模型-硬件"匹配与本地化推理成为开发者刚需。** llmfit（+198）解决"哪个模型能在我机器上跑"的困惑，omlx（+78）面向 Apple Silicon 做 SSD 缓存推理——随着 Kimi-K2.6、GLM-5.2、DeepSeek-V4 等大模型密集发布，**私有化、本地化、低成本部署**的诉求倒逼基础设施创新。

与近期事件呼应：Moonshot AI、智谱等国产大模型密集迭代，叠加各家 Agent CLI 工具白热化竞争（Claude Code、Codex、Gemini CLI、Cursor），Agent 生态正在从"单一厂商主导"走向"多平台互操作"格局。

---

## 🎯 社区关注热点（开发者重点关注）

- 🛡️ **[usestrix/strix](https://github.com/usestrix/strix)** — AI 渗透测试 Agent，+598 今日 stars 印证 AI 安全赛道正在爆发，开发者应关注 AI Red Teaming 工具链与漏洞自动化修复方向。
- 🧠 **[akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory)** — Agent 长期记忆与跨厂商交接，Agent Harness 走向"组件化"的关键基础设施，所有 Agent 开发者都应关注。
- 🧰 **[AlexsJones/llmfit](https://github.com/AlexsJones/llmfit)** — 模型-硬件自动匹配工具，模型爆炸时代的"选型刚需"，可作为本地 LLM 部署入门第一站。
- 📦 **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Agent 通用记忆层，63K+ stars 且持续增长，是构建有状态 Agent 的标准基础设施。
- 📑 **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — Vectorless RAG 的代表性探索，对传统 Embedding 路线提出挑战，RAG 架构演进值得跟踪。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*