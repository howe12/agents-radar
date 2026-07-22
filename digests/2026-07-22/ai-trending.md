# AI 开源趋势日报 2026-07-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-22 02:02 UTC

---

# 📊 AI 开源趋势日报 · 2026-07-22

---

## 一、今日速览

今日 GitHub AI 开源生态呈现**"Agent Harness 全面爆发"**的鲜明特征——Trending 榜单中近 60% 的 AI 项目都围绕 AI 编程/智能体框架展开，涵盖代码评审图、ADHD 友好输出、CAD/Robotics 技能、Coding Agent Harness 等细分方向。与此同时，**AI Gateway/聚合路由**（OmniRoute）和**LLM 硬件适配工具**（llmfit）成为基础层的两大新热点，反映出"多模型、多供应商、本地硬件"已成为开发者选型的核心痛点。值得关注的是，李博杰的《深入理解 AI Agent》中文开源书以 +4624 stars/日 成为今日最大黑马，预示中文 AI 智能体系统性内容的需求缺口正在快速释放。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 说明 |
|---|---|---|
| [OmniRoute](https://github.com/diegosouzapw/OmniRoute) | ⭐0 (+2034 today) | 统一接入 268+ AI 供应商/500+ 模型的免费 MIT 网关，支持配额感知自动降级、RTK 压缩省 15-95% tokens，今日 Trending 最大基础设施级爆款 |
| [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) | ⭐0 (+65 today) | 专注 LLM 结构化输出（JSON/正则/语法约束），今日重新进入 Trending，反映结构化生成仍是生产级 LLM 应用的关键需求 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | ⭐0 (+129 today) | Rust 编写的 LLM 硬件适配 CLI，"一行命令找能在本地跑的模型"，适配本地化部署浪潮 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐68,688 | 本地 UI 训练/运行 Gemma4/Qwen3.6/DeepSeek/Kimi/GLM，主流模型适配速度行业最快 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐86,821 | 高吞吐 LLM 推理/服务引擎，工业部署事实标准 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐30,596 | 高性能 LLM/多模态服务框架，与 vLLM 并列的推理引擎 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | ⭐525 | 通用 LLM 网关，OpenAI/Anthropic 兼容端点 + 多供应商翻译 + 智能负载均衡 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | — | — |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|---|---|---|
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | ⭐0 (+4624 today) | 《深入理解 AI Agent》开源主仓库，今日最大黑马，中文系统性 AI Agent 教程 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | ⭐0 (+1925 today) | Local-first 代码智能图谱，为 MCP/CLI 的 AI 编程工具精准提供上下文，大仓库 token 节省显著 |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | ⭐0 (+1866 today) | 让 Coding Agent 避免"埋答案"的输出风格 Skill，ADHD 友好——首次出现 UX 化的 Agent 输出控制 |
| [1jehuang/jcode](https://github.com/1jehuang/jcode) | ⭐0 (+843 today) | Rust 写的"最智能代码 Agent Harness"，主打工程化与极致性能 |
| [agegr/pi-web](https://github.com/agegr/pi-web) | ⭐0 (+298 today) | Pi Coding Agent 的 Web UI，Coding Agent 全平台化趋势 |
| [KnockOutEZ/wigolo](https://github.com/KnockOutEZ/wigolo) | ⭐0 (+642 today) | Coding Agent 的本地优先搜索/抓取/爬虫 MCP，$0/query、无需 API Key |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | ⭐0 (+416 today) | 集成多 IM 平台 + LLM + 插件的 AI Agent 框架，开源版"龙虾" |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | ⭐0 (+291 today) | 面向 CAD、机器人、硬件设计的 Agent Skills 集合——Agent 进入工业设计的标志 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐231,911 | Agent Harness 性能优化系统，提供 Skills/Instincts/Memory/Security 全栈能力 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐218,432 | "与你共同成长的 Agent"，Nous 在 Agent 层的旗舰 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐46,025 | 轻量级开源 AI Agent，针对工具/聊天/工作流 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐27,497 | DeepSeek 原生 AI 编程 Agent，专注 prefix-cache 稳定性 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|---|---|---|
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | ⭐0 (+1295 today) | 实时全球情报仪表盘，AI 驱动的新闻聚合/地缘政治监控，Trending 第一 |
| [tradingview-mcp](https://github.com/tradesdontlie/tradingview-mcp) | ⭐0 (+114 today) | AI 辅助的 TradingView 图表分析，连 Claude Code 实现个人交易自动化 |
| [huangjunsen0406/py-xiaozhi](https://github.com/huangjunsen0406/py-xiaozhi) | ⭐3,419 | 开源 AI 助手生态，MCP 集成 + 多模态 + IoT + 跨平台语音 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐40,365 | AI 将文档/主题一键转为原生 PowerPoint（含动画、图表、语音旁白） |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐93,984 | 多 Agent LLM 金融交易框架，垂直行业 Agent 标杆 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐98,511 | 一键生成高清短视频，AI+自动化工作流标杆 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐59,163 | 给 AI Agent 一双"看全网"的眼睛，覆盖 Twitter/Reddit/B站/小红书等 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|---|---|---|
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐68,688 | Gemma4/Qwen3.6/DeepSeek/Kimi/GLM 训练神器，资源受限场景首选 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,514 | Agent 强化训练器（GRPO），支持 Qwen3.6/GPT-OSS/Llama 等多模型 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | ⭐17,408 | 微软开源的 Agent 训练框架，"为 AI Agent 点亮" |
| [Skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,385 | 在 Apple Silicon 上从零搭迷你 vLLM + Qwen，面向系统工程师 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐290 | 极简可扩展的基础/世界模型预训练库 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,812 | LLM/VLM/多模态模型定义框架，行业事实标准 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐85,597 | RAG + Agent 融合的领先开源引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐61,402 | AI Agent 通用记忆层，跨会话长期记忆方案 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐61,023 | 压缩工具输出/日志/文件/RAG 块后送达 LLM，JSON 场景省 60-95% tokens |
| [run-lluma/llama_index](https://github.com/run-llama/llama_index) | ⭐50,988 | 文档 Agent + OCR 领先平台 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐34,156 | Vectorless、基于推理的 RAG 文档索引，新一代无向量 RAG 范式 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐29,029 | 自托管知识图谱引擎，AI Agent 长期记忆平台 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,483 | 高性能向量数据库，下一代 AI 基础设施 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,715 | 个人设备 RAG（97% 存储节省），MLsys2026 论文 |

---

## 三、趋势信号分析

**Agent Harness 与"AI 编程工具链"成为今日最大爆点。** Trending 榜单中 5 个项目（code-review-graph、i-have-adhd、jcode、pi-web、wigolo）均围绕 Coding Agent Harness / Skill / MCP 展开，开发者已经从"用 AI 写代码"进入"为 AI Agent 造基础设施"的下半场。其中 **code-review-graph (+1925)** 和 **wigolo (+642)** 分别从"上下文压缩"和"本地优先工具调用"两个角度回应了 Agent 在大仓库中面临的真实瓶颈。

**AI Gateway 与硬件适配形成基础层双热点。** OmniRoute (+2034) 和 llmfit (+129) 共同指向一个趋势：**多模型生态带来的供应商碎片化**已成为生产级部署的最大摩擦，单一模型依赖正在被"网关 + 硬件感知选型"取代。这与近期各大厂商密集发布新模型（Kimi-K2.6、GLM-5.2、MiniMax 等）形成正反馈。

**新兴方向首次登榜**：① **面向工业/物理世界的 Agent Skills**（text-to-cad）首次进入 Trending，标志 Agent 从数字世界向硬件设计领域渗透；② **AI 输出 UX 控制**（i-have-adhd）作为"Agent 输出风格定制"首次出现，提示 Agent 人机交互进入精细化阶段；③ **Vectorless RAG**（PageIndex）正在挑战传统向量检索范式，与 OpenAI o1/o3 系列的"推理检索"路线一致。

---

## 四、社区关注热点 🔥

- **📘 [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book)** — 中文 AI Agent 系统性教程，+4624 stars/日断层第一，反映中文开发者对 Agent 系统化知识的强烈饥渴，工程实践导向尤为难得
- **🌐 [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)** — 268+ 供应商/500+ 模型的统一网关 + RTK 压缩，Claude Code/Codex/Cursor 等全兼容，多模型时代基础设施层必看
- **🧠 [mem0ai/mem0](https://github.com/mem0ai/mem0)** — AI Agent 通用记忆层，⭐61K，长期记忆是 Agent 走向"个性化助手"的关键拼图
- **🗺️ [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)** — 为 Coding Agent 解决"上下文洪水"问题，代码图谱是 Agent 走向企业级大仓库的必经之路
- **📐 [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — 无向量化、推理驱动的 RAG 新范式，⭐34K 且快速攀升，代表 RAG 下一代方向
- **🦀 [1jehuang/jcode](https://github.com/1jehuang/jcode)** — Rust 写的 Coding Agent Harness，性能与工程化标杆，值得关注 Agent 系统层新语言选择

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*