# AI 开源趋势日报 2026-07-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-10 02:25 UTC

---

# 🚀 AI 开源趋势日报 · 2026-07-10

---

## 一、今日速览

今日 GitHub Trending 榜单几乎被 **AI Coding Agent 生态** 全面占领——围绕 Claude Code 及其相关工具链的衍生项目占据榜单半壁江山，其中 `MadsLorentzen/ai-job-search` 以单日 +3716 stars 登顶全站热榜，`addyosmani/agent-skills`（+2554）和 `iOfficeAI/OfficeCLI`（+1929）紧随其后。与此同时，**MCP（Model Context Protocol）协议** 相关工具（DesktopCommanderMCP）继续走热，**AI 智能体操作办公文档**（OfficeCLI、ppt-master）成为新的爆款方向，AI 辅助创作的"最后一公里"（Office 套件、PPT、视频理解）正快速被开源化。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理 / Dev Tools / CLI）

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 25,400+ | **+2554** | Google Chrome 团队推出的"生产级 AI 编程 Agent 技能库"，定位为 AI 编码 Agent 的工程最佳实践集，被视为 AI 编程 Agent 的"标准教材"。 |
| [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) | 18,500+ | +185 | 面向 Claude 的 MCP 服务器，让 Claude 获得**终端控制、文件检索、diff 编辑**等本地系统操作能力，是 MCP 生态最受欢迎的实现之一。 |
| [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | 38,700+ | +194 | Anthropic 官方维护的 Claude Notebook 实战手册，覆盖 RAG、Tool Use、多模态等典型场景。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | 52,000+ | +215 | 开源 **LLM 友好型** 网页爬虫，专为 RAG 与 Agent 数据采集设计，社区 Discord 活跃度高。 |
| [ollama/ollama](https://github.com/ollama/ollama) | 175,835 | — | 本地大模型运行的事实标准，本次更新已支持 Kimi-K2.6、GLM-5.1、gpt-oss 等最新模型。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 85,849 | — | 高吞吐 LLM 推理引擎，是生产部署 LLM 的首选基础设施。 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 3,700+ | **🔥 +3716** | 基于 **Claude Code** 的求职自动化框架，自动评估岗位、定制简历、撰写求职信，被 Fork 后直接使用——**今日全站热度第一**。 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 1,900+ | **+1929** | 首个为 **AI Agent 量身定制的 Office 套件**，无需安装 Office 即可让 Agent 读写编辑 Word/Excel/PPT，单二进制开源。 |
| [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 1,400+ | **+1391** | 汇总主流品牌设计系统的 DESIGN.md 文件，让编码 Agent 自动生成风格统一的前端 UI——**"设计即代码"** 范式具象化。 |
| [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | 530+ | +535 | 完全自主的 AI Agent 渗透测试系统，集成多 Agent 协作完成复杂安全任务。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 212,251 | — | 标榜"与用户共同成长的 Agent"，强调长期记忆与个性化。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 103,990 | — | 让 AI Agent 像人一样操控浏览器的明星项目。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 45,187 | — | 香港大学数据智能实验室推出的轻量级开源 Agent，专注工具调用与工作流。 |

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 55,207 | **+1125** | 持续更新的 **AI 产品系统提示词泄露合集**，覆盖 Claude Fable 5/Opus 4.8、GPT 5.5、Gemini 3.5、Cursor、Copilot 等，是 Prompt 工程研究的"金矿"。 |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | 720+ | **+718** | 为 Claude 加上**视频观看能力**——自动下载、抽帧、转录并交付多模态上下文，视频理解的轻量级方案。 |
| [kyutai-labs/pocket-tts](https://github.com/kyutai-labs/pocket-tts) | 240+ | **+235** | Kyutai Labs 开源的**超轻量 TTS 模型**，CPU 即可实时运行，定位"口袋级"语音合成。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 38,039 | — | 从任意文档一键生成**可编辑的 PPT**（非图片），支持原生图表、动画、语音旁白。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 48,375 | — | 集成 300+ 助手的 AI 生产力桌面端。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 56,259 | — | LLM 驱动的多市场股票分析系统，零成本定时运行。 |

### 🧠 大模型 / 训练

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162,422 | — | 仍是模型定义与训练的首选框架，覆盖文本/视觉/音频/多模态。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 59,300 | — | YOLO26/YOLO11 主仓库，**目标检测/分割/姿态估计** 标杆。 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 67,974 | — | 本地训练/微调工具，Unsloth Studio 支持 Gemma 4、Qwen3.6、DeepSeek。 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,358 | — | 面向真实任务的多步 Agent **强化学习训练** 框架，基于 GRPO。 |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | 9,772 | — | 易用、高性能的 **Agentic RL** 框架，支持 PPO/DAPO/REINFORCE++。 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | 30,121 | — | 高性能 LLM/多模态服务框架，与 vLLM 并列推理基础设施双雄。 |

### 🔍 RAG / 知识库

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 84,710 | — | 融合 RAG 与 Agent 能力的企业级开源引擎，定位为 LLM 的"超级上下文层"。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 86,629 | — | 为 **Agent 提供跨会话持久化记忆**，自动压缩历史并注入相关上下文，兼容 Claude Code/Codex/Copilot 等。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 60,500 | — | AI Agent 的**通用记忆层**，已被多个 Agent 框架集成。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 50,751 | — | 领先的文档 Agent 与 OCR 平台，构建 RAG 的标准选择。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,156 | — | 云原生向量数据库，云端部署最广泛。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,106 | — | Rust 实现的高性能向量搜索引擎，AI 原生应用首选。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 27,436 | — | 为 Agent 提供**基于知识图谱的长期记忆**，与 mem0 路线互补。 |

---

## 三、趋势信号分析

**AI Coding Agent 生态迎来"应用层爆发期"**。今日 Trending 榜单中超过 60% 的项目直接或间接服务于"AI 编码 Agent"这一主题——从技能规范（agent-skills）、设计资产（awesome-design-md）、办公文档操作（OfficeCLI）、视频理解（claude-video）到求职自动化（ai-job-search），呈现出 **"Agent × 垂直场景"** 的快速分化趋势。这表明社区的关注点已从"如何造一个 Agent"转向"如何让 Agent 在具体场景中真正可用"。

**MCP 协议从实验走向标配**。DesktopCommanderMCP 持续热榜，意味着 Anthropic 推动的 **Model Context Protocol** 已成为 Agent 工具调用的事实标准，本地文件系统、终端、设计稿等"现实世界工具"正在被快速 MCP 化，Agent 工具生态进入"插件化"阶段。

**模型层"轻量化 + 端侧化"信号明确**。kyutai-labs/pocket-tts 强调 CPU 即可运行的 TTS，呼应了 unsloth 本地微调、ollama 本地推理的趋势——大模型应用正向**边缘/端侧**快速下沉。同时，Claude Opus 4.8、GPT 5.5、Gemini 3.5 等前沿模型已出现在 system_prompts_leaks 仓库中，提示新一轮闭源模型迭代可能正在发生。

**多 Agent 协作与 RAG 融合加速**。ragflow、claude-mem、cognee、ART 等项目同时登上热榜，反映出 **"RAG + 记忆 + 强化学习 + Agent"** 四件套正在成为下一代 AI 应用的标配组合。

---

## 四、社区关注热点

- 🔥 **[MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search)** — 今日全站第一，Claude Code 作为"个人 AI 员工"的真实落地方案，是观察 AI Coding Agent 商业化潜力的最佳样本。
- 🔥 **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — Google Chrome 团队出品，将成为 AI 编码 Agent 技能工程的**事实标准**，开发者应优先关注。
- 🔥 **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** — 首个面向 AI Agent 的 Office 套件，**Agent 操作办公软件**的范式创新，垂直 Agent 创业方向标。
- 🔥 **[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)** — "设计即代码"理念落地，让 AI 生成 UI 从"能用"走向"好看"，前端 + AI 的关键拼图。
- 🔥 **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** — 全网最全的 AI 产品系统提示词合集，**Prompt 工程师与产品经理必读**，也是洞察大厂 AI 产品设计哲学的窗口。

---

*📊 数据来源：GitHub Trending + GitHub Search API（topic 检索） · 报告时间：2026-07-10*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*