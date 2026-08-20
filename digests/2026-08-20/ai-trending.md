# AI 开源趋势日报 2026-08-20

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-20 00:52 UTC

---

# 📊 AI 开源趋势日报 · 2026-08-20

---

## 第一步：AI 相关性筛选

### ✅ Trending 榜单中纳入分析（9/13）

| 仓库 | 今日 stars | AI 相关性 |
|---|---|---|
| harry0703/MoneyPrinterTurbo | +2221 | AI 视频生成 |
| mattpocock/skills | +1894 | Agent 技能市场 |
| volcengine/OpenViking | +804 | Agent 上下文数据库 |
| chaitanyagiri/munder-difflin | +795 | 多 Agent 编排 |
| mukul975/Anthropic-Cybersecurity-Skills | +766 | Agent 安全技能 |
| obra/superpowers | +557 | Agent 技能框架 |
| jundot/omlx | +472 | LLM 推理引擎 |
| santifer/career-ops | +198 | AI 求职助手 |
| genlayerlabs/genlayer-project-boilerplate | +430 | AI 智能合约（边缘） |

### ❌ 已排除（非 AI 通用工具）
nautilus_trader（量化交易）、amadeusprotocol/node（区块链）、immich（自托管相册）、prettymaps（地图可视化）

---

## 第二步：分类报告

---

### 1️⃣ 今日速览

今日 GitHub AI 开源生态呈现**"Agent 技能层（Agent Skills）爆发"**与**"端侧/本地推理实用化"**双主线。多款 Agent 技能框架（mattpocock/skills、obra/superpowers、Anthropic-Cybersecurity-Skills）单日新增近千 stars，反映 Claude Code / Codex CLI 生态的"Skills 即资产"模式正在标准化。火山引擎开源 OpenViking 切入 Agent Memory 与 RAG 融合赛道。同时，MoneyPrinterTurbo 单日 +2221 stars 持续验证 AI 短视频工作流的大众化需求；Apple Silicon 端侧 LLM 推理（omlx）成为新热点。

---

### 2️⃣ 各维度热门项目

#### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** [Python] ⭐89,472 — 高吞吐 LLM 推理与服务的业界事实标准。
- **[sgl-project/sglang](https://github.com/sgl-project/sglang)** [Python] ⭐32,123 — 高性能多模态 LLM serving 框架，与 vLLM 路线正面竞争。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐178,984 — 本地运行 Kimi-K2.6、GLM-5.2、DeepSeek 等模型的最简工具，仍是开发者装机标配。
- **[jundot/omlx](https://github.com/jundot/omlx)** [Python] ⭐0（+472 today）— **今日新热点**：面向 Apple Silicon 的 LLM 推理服务器，集成 continuous batching 与 SSD 缓存，支持 macOS 菜单栏管理，填补 M 系列芯片本地推理最后一公里。
- **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** [TypeScript] ⭐36,861 — Agent 生成式 UI 的前端事实标准（AG-UI 协议发起者）。
- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** [Rust] ⭐8,322 — Rust 生态下 LLM 应用框架，受关注度持续上升。
- **[kvcache-ai/Mooncake](https://github.com/kvcache-ai/Mooncake)** [C++] ⭐6,321 — 月之暗面 Kimi 背后的 serving 平台，KV-cache 架构设计标杆。

#### 🤖 AI 智能体 / 工作流（Agent 框架、自动化）

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐110,654（+2221 today）— **今日榜首**：AI 一键生成短视频工作流的中文社区代表性项目，持续验证 AI + 短视频的工业化链路。
- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell] ⭐0（+1894 today）— **今日爆款**：前 TS 布道师 Matt Pocock 开源的 `.agents` 技能包，标志"Agent Skills 作为可分享资产"模式被主流接受。
- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐0（+557 today）— Agent 技能框架 + 软件开发方法论，定位为 Claude Code 的"能力库"。
- **[chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin)** [TypeScript] ⭐0（+795 today）— 本地多 Agent 编排 harness，演示 Agent 协作完成复杂任务。
- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** [Python] ⭐0（+766 today）— 覆盖 MITRE ATT&CK、NIST AI RMF 等 6 大框架的 817 个安全技能，Agent 安全方向的首批结构化资产。
- **[santifer/career-ops](https://github.com/santifer/career-ops)** [JavaScript] ⭐65,790（+198 today） — 在 Claude Code / Codex CLI 中本地运行的 AI 求职助手，反映 Agent 已渗透到职场工具。
- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** [Python] ⭐74,682 — 中文社区从 0 实现的"nano Claude Code"教学项目，Agent harness 教学标杆。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐109,782 — 让 AI Agent 真正"上网办事"的浏览器自动化层。

#### 🧠 大模型 / 训练（模型权重、训练框架、微调）

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐164,268 — 多模态模型定义框架，生态中立性最高的开源基座。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐102,489 — 深度学习框架事实标准。
- **[unslothai/unsloth](https://github.com/unslothai/unsloth)** [Python] ⭐73,867 — 本地微调 LLM / Diffusion 模型的轻量化方案，覆盖 Qwen3.8、Kimi K3、MiniMax-H3 等最新模型。
- **[AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio)** [Rust] ⭐78 — 纯 Rust + Candle 从零构建 decoder-only LLM（25M–1.3B），Gated DeltaNet + 稀疏 MoE，Rust 训练栈新尝试。
- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** [Python] ⭐4,508 — "从 0 写一个 mini vLLM + Qwen"的系统工程师实战教程。
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** [Python] ⭐7,317 — 覆盖 100+ 数据集的开源 LLM 评测平台，模型选型必参考。

#### 📦 AI 应用（垂直场景产品）

- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** [TypeScript] ⭐50,790 — 国产 AI 生产力桌面客户端，集成 300+ 助手。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐48,015 — AI 生成原生 PowerPoint（含动画、图表、音频旁白），企业办公场景刚需。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐63,390 — LLM 驱动的多市场股票分析系统，零成本定时运行，金融 Agent 标杆。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Python] ⭐149,272 — 本地化 AI 对话界面首选，支持 Ollama 与 OpenAI 协议。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐169,648 — 为 LLM 提供"上下文 API"、规模化网页抓取与结构化。
- **[earthtojake/text-to-cad](https://github.com/earthtoake/text-to-cad)** [Python] ⭐13,676 — 文生 CAD 的 Agent 技能库，AI × 工业设计新场景。
- **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)** [Python] ⭐47,184 — 港大开源的超轻量自托管个人 Agent 框架，支持 WebUI / MCP / 多 Agent。

#### 🔍 RAG / 知识库（向量库、检索增强、知识管理）

- **[langgenius/dify](https://github.com/langgenius/dify)** [TypeScript] ⭐152,925 — Agentic workflow + RAG 一体化协作平台，国产 LLM 应用层事实标准。
- **[volcengine/OpenViking](https://github.com/volcengine/OpenViking)** [Python] ⭐0（+804 today）— **今日新焦点**：字节/火山引擎开源的 AI Agent 自演化上下文数据库，统一 Agent Memory + Knowledge RAG + Skills，定位"Agent 时代的 context 层"。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐88,841 — RAG + Agent 融合引擎，企业级开源标杆。
- **[run-llama/llama_index](https://github.com/run-llama/llama_index)** [Python] ⭐51,747 — 文档 Agent 与 OCR 平台。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐63,619 — Agent 通用记忆层，跨会话长期记忆的事实标准。
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** [Rust] ⭐34,065 — 云原生高性能向量数据库。
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** [Python] ⭐35,254 — 无向量、基于推理的"Vectorless RAG"，针对长文档/财报的新范式。
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** [Python] ⭐30,131 — 基于知识图谱的 Agent 长期记忆平台，与 mem0 路线差异互补。

---

### 3️⃣ 趋势信号分析

今天的 Trending 榜单传递出三个清晰信号：

**第一，Agent Skills 正在成为新的"开源资产类别"。** 过去一周，mattpocock/skills（+1894）、obra/superpowers（+557）、Anthropic-Cybersecurity-Skills（+766）同时登顶，本质上呼应了 Anthropic 在 2025 年底推出的 Agent Skills 开放标准（agentskills.io）。开发者开始把"提示词 + 工具 + 工作流"打包成可复用、可分享的 skills 包，类似 npm 之于 Node.js 的关系正在 Agent 生态中成型。

**第二，端侧 / 本地推理正在从"玩具"走向"生产力"。** omlx 单日 +472 stars、ollama 持续高活跃、aarambh-studio 用 Rust 复刻 LLM、tiny-llm 教学 vLLM，体现 Apple Silicon 与消费级 GPU 的本地推理栈正在快速成熟，与云端 API 形成清晰分层。

**第三，大厂押注 Agent Memory 赛道。** OpenViking（字节/火山引擎）将 Agent Memory、Knowledge RAG、Skills 三者统一为"上下文数据库"，与海外的 mem0、cognee、OpenAI Memory 形成正面竞争，预示 Agent 中间件层（context layer）成为下一阶段主战场。叠加今日 MoneyPrinterTurbo 持续登顶、短视频 Agent 工业链路验证，AI 开源从"模型层"竞争正式进入"Agent 工作流与中间件层"竞争的新阶段。

---

### 4️⃣ 社区关注热点

- 🟢 **[mattpocock/skills](https://github.com/mattpocock/skills)** — Agent Skills 作为可分享资产的范式开端，建议开发者尽快建立自己的 `.agents` 技能库。
- 🟢 **[volcengine/OpenViking](https://github.com/volcengine/OpenViking)** — 大厂首个开源 Agent 上下文数据库，Agent Memory + RAG 融合趋势的标志性项目。
- 🟢 **[jundot/omlx](https://github.com/jundot/omlx)** — Apple Silicon 本地 LLM 推理服务器的"开箱即用"方案，macOS 开发者强烈推荐。
- 🟢 **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** — 单日 +2221 stars 验证 AI 短视频工业化链路，是内容生产赛道最具复制性的模板。
- 🟢 **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** — Agent 安全方向首批结构化资产，预示垂直领域 Skills 标准化将快速跟进金融、医疗、法律。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*