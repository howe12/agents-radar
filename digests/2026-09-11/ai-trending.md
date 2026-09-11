# AI 开源趋势日报 2026-09-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-11 02:29 UTC

---

# 📊 AI 开源趋势日报 · 2026-09-11

---

## 1. 今日速览

今日 GitHub Trending 几乎被 **AI Agent Skills / Coding Agent 生态** 全面接管，13/16 的高 star 增长项目与 AI 直接相关。**"Agent Skills 框架化"** 成为最鲜明信号：`obra/superpowers`、`vercel-labs/skills`、`cathrynlavery/diagram-design`、`ayghri/i-have-adhd` 等多个项目同日登榜，显示社区正在围绕 Coding Agent 构建可复用能力市场。与此同时，**本地化推理**（`colibri` 纯 C 推理 MoE 模型、`llmfit` 硬件匹配）以及**企业级 AI Gateway**（`OmniRoute` 接入 352 家供应商）持续吸引流量，反映"去中心化、模型可替换"路线在工程社区的强劲需求。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | ⭐0 (+626 today) | MIT 协议的 AI 网关，统一端点覆盖 352 家供应商 / 1200+ 模型，RTK+Caveman 压缩可节省 15-95% token，今日热度极高 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | ⭐0 (+258 today) | 一条命令匹配本地硬件可运行的大模型，百家供应商支持，Rust 实现性能优秀 |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | ⭐0 (+98 today) | 纯 C、零依赖的 MoE 推理引擎，专家从磁盘流式加载，让老硬件跑前沿大模型 |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) | ⭐0 (+122 today) | Vercel Labs 出品的开放 Agent Skills 工具，`npx skills` 即可分发能力 |
| [Tencent/teamai-cli](https://github.com/Tencent/teamai-cli) | ⭐0 (+841 today) | 腾讯开源，让每个团队"AI Native"的 CLI 工具，大厂下场值得关注 |
| [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop) | ⭐0 (+624 today) | Local-first 的 AI 编码 Agent 桌面端：Electron + Rust 内核 + Pi Agent Harness，支持插件化 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐180,602 | 本地大模型运行的事实标准，已支持 Kimi-K2.6 / GLM-5.2 / MiniMax / Qwen3.8 等 2026 年最新模型 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐35,784 | 高性能 LLM / 多模态推理服务框架，与 vLLM 并列的工业级方案 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐0 (+732 today) | Agentic Skills 框架与软件开发方法论，"今日 Agent 基础设施类目下的标志性项目" |
| [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | ⭐0 (+277 today) | 自托管 AI 交易 Agent，跨 1000+ 市场（Polymarket/Kalshi/Hyperliquid 等）自主决策，支持 MCP/A2A 机器支付 |
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | ⭐0 (+837 today) | 清华 MAIC 出品的"多智能体交互课堂"，一键开启沉浸式多 Agent 学习 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐244,237 | Nous Research 的"成长型 Agent"，持续自我进化的开源 Agent 框架 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐37,290 | Agent + 生成式 UI 的前端栈，AG-UI 协议提出者 |
| [Career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | ⭐71,154 | 本地运行的 AI 求职 Agent：扫描职位 → 结构化评估 → 定制简历 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐46,884 | 开源超级 AI 助理（前身 chatgpt-on-wechat），具备记忆/技能/MCP 多 Agent 协作 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐114,098 | 让 Agent 真正"使用浏览器"，浏览器自动化 Agent 的标杆项目 |

### 📦 AI 应用（垂直产品 / 场景方案）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) | ⭐0 (+142 today) | 跨平台桌面应用，把文档增量构建为可链接的 LLM 知识库，区别于传统 RAG |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | ⭐0 (+962 today) | 530+ GPT Image 2 / 2.5 提示词案例 + 20+ 工业级模板 + Skills 复用 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐178,863 | 给 Agent 用的 Web 数据 API：搜索、爬取、交互一体化 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐122,271 | 一键生成高清短视频的 AI 工作流，标志性 C 端 AI 内容应用 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐151,574 | 最流行的本地 AI 对话前端，支持 Ollama 与 OpenAI 全协议 |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | ⭐47,720 | 企业级 AI 低代码平台，Skills 生成 → 配置 → 代码生成全链路 |

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | ⭐0 (+3882 today) | **今日全榜最高增长**，让 Coding Agent 输出对 ADHD 友好的 skill，3882 stars/日 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐165,094 | 文本/视觉/音频/多模态模型定义与训练的事实框架 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐102,915 | 深度学习基础设施基石 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐60,560 | 2 小时训练 64M 参数 LLM 从零开始，极简教学项目 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐76,002 | 本地训练/微调 LLM 与扩散模型，Qwen3.8 / DeepSeek-V4 / MiniMax-H3 全适配 |
| [ray-project/ray](https://github.com/ray-project/ray) | ⭐43,771 | AI 计算引擎，分布式 RL/训练基础设施 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,712 | Agent 强化训练器（GRPO），让 Agent 在真实任务上"在职训练" |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | ⭐9,994 | 基于 Ray 的高性能 Agentic RL 框架（PPO/DAPO/REINFORCE++） |

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐52,120 | 文档 Agent 与 OCR 平台，RAG 主流框架 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐155,369 | 一体化 Agentic 工作流 + RAG 流水线平台，云/VPC/自托管皆可 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐90,474 | 领先的开源 RAG 引擎，融合 RAG 与 Agent 能力 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐65,079 | Agent 的持久化记忆层，跨会话长期记忆基础设施 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | ⭐41,416 | 构建有状态、可恢复 Agent 的编排框架 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | ⭐39,553 | EMNLP2025 收录，简洁快速的 RAG 方案 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐30,633 | 开源 AI 记忆平台，为 Agent 提供自托管知识图谱引擎 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,618 | 无向量、基于推理的 RAG 文档索引，开辟新路径 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐93,647 | Agent 跨会话持久化上下文，AI 压缩后注入未来会话 |

---

## 3. 趋势信号分析

**Agent Skills 正在成为新的"应用商店"。** 今日 Trending 中 `obra/superpowers`（+732）、`vercel-labs/skills`（+122）、`cathrynlavery/diagram-design`（+1294）、`ayghri/i-have-adhd`（+3882）密集登榜，标志着 Coding Agent 生态正从"模型能做什么"转向"如何把能力标准化、可分发、可复用"。Skills 不再是 prompt hack，而是新的工程单元——这一趋势与 Anthropic 推动的 Claude Code Skills 体系、Pi Agent Harness 协议深度耦合。

**本地化与去中心化推理成为硬核刚需。** `JustVugg/colibri` 用纯 C 零依赖让家用硬件跑 MoE 模型、`AlexsJones/llmfit` 一键匹配本地可运行模型，与 Ollama 持续支持 Kimi-K2.6/GLM-5.2/MiniMax-H3 等 2026 年新模型遥相呼应，反映出**对云 API 依赖的警惕与本地主权意识的上升**。同时 `diegosouzapw/OmniRoute` 用单一端点聚合 352 家供应商+自动配额回退，恰好是这种"既要又要"心态的对冲方案。

**多 Agent 协作从研究走向产品。** 清华 `OpenMAIC`（+837）把多 Agent 课堂做成开箱即用产品，CloddsBot 在真实金融市场中部署自主交易 Agent，配合 MCP/A2A 机器支付协议，Agent 已开始具备经济行为能力——这与 2026 年 Agentic AI 行业"Agent 具备付费能力 / 工具使用能力" 的整体方向一致。

---

## 4. 社区关注热点

- 🔥 **[ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)** — 今日 +3882 stars，单日冠军，说明 **Agent UX / 输出质量** 开始成为差异化竞争点，值得开发者思考自家 Agent 产品的可读性设计。
- 🤖 **[obra/superpowers](https://github.com/obra/superpowers) + [vercel-labs/skills](https://github.com/vercel-labs/skills)** — Skills 框架双子星，未来 Agent 能力市场的基础设施，强烈建议关注协议层标准化动向。
- 🦀 **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — 纯 C 推理 MoE 模型是当前**边缘推理 / 端侧大模型**方向的代表性工程突破，对部署成本敏感的团队必看。
- 🌐 **[OmniRoute](https://github.com/diegosouzapw/OmniRoute)** — 多供应商自动回退 + 95% token 压缩，是企业构建 **生产级 AI 应用** 绕不开的中间件候选。
- 🧠 **[mem0ai/mem0](https://github.com/mem0ai/mem0) + [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — RAG 范式正在从"向量检索"向"持久记忆 + 无向量推理"演进，前者是 Agent 长期记忆的事实标准，后者代表 Vectorless RAG 的新路线。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*