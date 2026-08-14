# AI 开源趋势日报 2026-08-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-14 01:21 UTC

---

# 📊 AI 开源趋势日报 · 2026-08-14

---

## 第一步：过滤结果

从 Trending 榜单 17 个项目中，筛除 3 个非 AI 项目（`holehe`、`spiderfoot` 为 OSINT 工具；`manim` 为通用数学动画引擎），保留 **14 个 AI 相关项目**进入分析。主题搜索 146 个仓库按 AI 相关性保留，去重后参与分类。

---

## 第二步：分类结果

---

# 📰 AI 开源趋势日报 · 2026-08-14

## 1️⃣ 今日速览

今日 GitHub Trending 被 **AI Agent 生态系统** 强势占据：Anthropic 官方 `anthropics/skills`、Claude Code 生态的 `obsidian-skills` 与 `diagram-design`、以及通用 Agent 框架 `agency-agents` / `holaOS` 同步爆发，揭示"Agent Skills / Harness / Workspace"已形成新范式。与此同时，**端侧小模型**（`needle` 仅 14MB）和**多模态生成**（`LTX-2` 音视频、`modly` 3D）双双登榜，叠加 **NVIDIA Switchyard**（LLM 路由）和 **`semantica`**（图原生 AI 基础设施），显示推理路由与知识图谱基础设施正成为下一波关注焦点。

---

## 2️⃣ 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎）

| 项目 | Stars | 今日关注点 |
|---|---|---|
| [**NVIDIA-NeMo/Switchyard**](https://github.com/NVIDIA-NeMo/Switchyard) | 🆕 +408 today | LLM 应用跨模型路由网关，保持 OpenAI / Anthropic 原生 API 兼容，针对当下多模型选型与成本优化痛点。 |
| [**langchain-ai/langchain**](https://github.com/langchain-ai/langchain) | ⭐ 144,189 | 老牌 Agent 工程平台，本周仍是 RAG/Agent 集成首选 SDK。 |
| [**skyzh/tiny-llm**](https://github.com/skyzh/tiny-llm) | ⭐ 4,483 | 教学型 vLLM + Qwen 推理系统，面向 Apple Silicon，工程师友好。 |
| [**0xPlaygrounds/rig**](https://github.com/0xPlaygrounds/rig) | ⭐ 8,261 | Rust 编写的模块化 LLM 应用框架，主打类型安全与可扩展性。 |
| [**semantica-agi/semantica**](https://github.com/semantica-agi/semantica) | 🆕 +713 today | 图原生（Graph-Native）基础设施，强调 AI 系统的"可问责性"，是少见的 Agent 治理方向新尝试。 |

---

### 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日关注点 |
|---|---|---|
| [**anthropics/skills**](https://github.com/anthropics/skills) | 🆕 +312 today | Anthropic 官方 Agent Skills 仓库，定义 Agent 技能描述规范，是 Claude Code 生态的事实标准。 |
| [**msitarzewski/agency-agents**](https://github.com/msitarzewski/agency-agents) | 🆕 +778 today | 开箱即用的"AI 代理公司"——含前端、运营、QA 等数十个角色化 Agent 模板，可直接套用。 |
| [**holaboss-ai/holaOS**](https://github.com/holaboss-ai/holaOS) | 🆕 +241 today | 一体化 AI Agent 工作台，集成 100+ MCP 工具与 Claude Code/Codex 跨工具调度。 |
| [**kepano/obsidian-skills**](https://github.com/kepano/obsidian-skills) | 🆕 +292 today | 让 Agent 调用 Obsidian CLI 与开放格式（Markdown / Bases / JSON Canvas），是 Skills 生态第一批垂直实现。 |
| [**NousResearch/hermes-agent**](https://github.com/NousResearch/hermes-agent) | ⭐ 230,144 | 高星通用 Agent 框架，强调"与用户共同成长"的学习能力。 |
| [**browser-use/browser-use**](https://github.com/browser-use/browser-use) | ⭐ 109,124 | 让 Agent 操作浏览器的标杆项目，是 GUI Agent 基础设施层。 |
| [**HKUDS/nanobot**](https://github.com/HKUDS/nanobot) | ⭐ 46,951 | 轻量自托管个人 Agent 框架，含 WebUI、MCP 与多智能体工作流。 |
| [**langgenius/dify**](https://github.com/langgenius/dify) | ⭐ 152,374 | Agentic 工作流可视化编排平台，Dify 长期稳居话题榜。 |

---

### 📦 AI 应用（具体应用产品 / 垂直场景）

| 项目 | Stars | 今日关注点 |
|---|---|---|
| [**cathrynlavery/diagram-design**](https://github.com/cathrynlavery/diagram-design) | 🆕 **+4,475 today** ⭐榜首 | Claude Code 的 29 类编辑器图表模板（纯 HTML+SVG、无 Mermaid 冗余），精准命中 Claude Code 用户痛点，今日单日涨星断层第一。 |
| [**macro-inc/macro**](https://github.com/macro-inc/macro) | 🆕 +1,239 today | 团队 AI 工作空间（邮件/聊天/文档/任务/Agent），核心卖点是 **共享 AI 记忆** 串联所有模块。 |
| [**Lightricks/LTX-2**](https://github.com/Lightricks/LTX-2) | 🆕 +205 today | 官方音视频生成模型 LTX-2 的 Python 推理与 LoRA 训练包，多模态创作工具链完善。 |
| [**lightningpixel/modly**](https://github.com/lightningpixel/modly) | 🆕 +118 today | 本地 GPU 运行的"图像 → 3D 模型"桌面应用，端侧 AIGC 3D 化新案例。 |
| [**altic-dev/FluidVoice**](https://github.com/altic-dev/FluidVoice) | 🆕 +76 today | macOS 端本地 STT 听写应用，对标 Wispr Flow，隐私向 AI 生产力工具。 |
| [**firecrawl/firecrawl**](https://github.com/firecrawl/firecrawl) | ⭐ 166,990 | Agent 时代的 Web 数据 API，提供搜索/抓取/交互能力，被广泛集成。 |

---

### 🧠 大模型 / 训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 今日关注点 |
|---|---|---|
| [**cactus-compute/needle**](https://github.com/cactus-compute/needle) | 🆕 +769 today | **14MB 基础模型**，目标手机/穿戴/智能家居/机器人，端侧 LLM 进入"微型化"竞赛阶段。 |
| [**unslothai/unsloth**](https://github.com/unslothai/unsloth) | 🆕 +328 today ⭐ 71k+ | 本地训练/推理 UI，支持 Qwen3.8、Kimi K3、MiniMax-H3、DeepSeek-V4 等最新模型，微调生态首选。 |
| [**ollama/ollama**](https://github.com/ollama/ollama) | ⭐ 178,485 | 本地运行 Kimi-K2.6 / GLM-5.2 / DeepSeek / Qwen 等大模型的标杆工具。 |
| [**huggingface/transformers**](https://github.com/huggingface/transformers) | ⭐ 164,079 | 多模态模型定义框架的事实标准。 |
| [**microsoft/agent-lightning**](https://github.com/microsoft/agent-lightning) | ⭐ 17,480 | 微软开源的"Agent 训练加速器"，定位 Agent RL 微调。 |
| [**OpenPipe/ART**](https://github.com/OpenPipe/ART) | ⭐ 10,580 | GRPO 多步 Agent RL 训练框架，覆盖 Qwen3.6 / GPT-OSS / Llama 等。 |

---

### 🔍 RAG / 知识库（向量库、检索增强、知识管理）

| 项目 | Stars | 今日关注点 |
|---|---|---|
| [**infiniflow/ragflow**](https://github.com/infiniflow/ragflow) | 🆕 +465 today ⭐ 88k+ | 开源 RAG 引擎代表，今日仍持续高增，RAG + Agent 双能力融合的标杆。 |
| [**Graphify-Labs/graphify**](https://github.com/Graphify-Labs/graphify) | ⭐ 106,043 | 把任意代码库/SQL/PDF 转为可查询知识图谱，给 Claude Code/Cursor/Codex 提供 `/graphify` Skill，**无向量库**路线值得关注。 |
| [**headroomlabs-ai/headroom**](https://github.com/headroomlabs-ai/headroom) | ⭐ 66,235 | 在 token 进入 LLM 前压缩工具输出与 RAG 块，节省 20-95% token，直击 Agent 成本痛点。 |
| [**mem0ai/mem0**](https://github.com/mem0ai/mem0) | ⭐ 63,211 | Agent 通用记忆层，跨会话持久化，已成为 Agent 记忆层的事实标准。 |
| [**topoteretes/cognee**](https://github.com/topoteretes/cognee) | ⭐ 30,004 | 自托管知识图谱引擎，给 Agent 提供长期记忆。 |
| [**VectifyAI/PageIndex**](https://github.com/VectifyAI/PageIndex) | ⭐ 35,170 | **无向量、基于推理的 RAG**，挑战传统向量检索范式，技术路线值得追踪。 |
| [**milvus-io/milvus**](https://github.com/milvus-io/milvus) | ⭐ 45,628 | 云原生向量数据库基础设施，长期稳居前列。 |
| [**run-llama/llama_index**](https://github.com/run-llama/llama_index) | ⭐ 51,623 | 文档 Agent 与 OCR 平台，RAG 工具链核心组件。 |

---

## 3️⃣ 趋势信号分析

**Agent Skills 成为新范式，生态呈"协议化"扩张**。今日 Trending 中 Anthropic 官方 `skills`、Obsidian 垂直实现 `obsidian-skills`、通用模板 `agency-agents`、AI 桌面 `holaOS` 四件套同台亮相，说明 "Agent Skills" 正从 Claude Code 的实验性功能演化为跨平台协议——任何工具/IDE 都能以 Skill 形式接入 Agent。这与 MCP（Model Context Protocol）去年的崛起路径高度类似，预示 2026 下半年将出现 **Skills 集市/注册中心** 一类基础设施。

**端侧微型模型与多模态生成双线爆发**。`needle`（14MB 基础模型）与 `FluidVoice`（端侧 STT）、`modly`（本地 3D）共同指向 **Edge AI 落地化**；`LTX-2`（音视频生成）则代表多模态 AIGC 在开源侧的成熟——二者叠加反映出"模型够小就能跑在本地"成为新卖点。

**LLM 路由与图原生基础设施悄然走热**。NVIDIA 推出 Switchyard（跨模型 API 路由）和 `semantica`（Graph-Native AI），加上 `graphify` / `cognee` / `mem0` 持续走高，**"向量检索一家独大"格局正被打破**——基于知识图谱的推理式 RAG、Agent 长期记忆、跨模型路由治理，正在成为下一代 AI Infra 的三大新方向，与近期多模型混部、企业级 RAG 落地趋势高度吻合。

---

## 4️⃣ 社区关注热点

- 🔥 **[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)**（+4,475/日）— 单日涨幅断层第一，Claude Code 用户刚需工具，建议立刻 Star 收藏或复刻思路。
- 🤖 **[anthropics/skills](https://github.com/anthropics/skills)** — 官方 Agent Skills 协议仓库，是理解未来 Agent 生态的关键入口。
- 📱 **[cactus-compute/needle](https://github.com/cactus-compute/needle)** — 14MB 基础模型，端侧 AI 应用开发者的方向标。
- 🧭 **[NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard)** — 跨模型路由网关，多模型混部时代的"流量控制器"。
- 🧠 **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** / **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — 无向量 RAG 的两条不同路径，代表 RAG 下一步演进方向。

---
*数据来源：GitHub Trending（今日 stars）+ GitHub 主题搜索（近 7 天活跃）。仅纳入 AI/ML 明确相关项目；非 AI 通用工具已剔除。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*