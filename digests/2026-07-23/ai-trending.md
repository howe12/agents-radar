# AI 开源趋势日报 2026-07-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-23 02:09 UTC

---

# 📊 AI 开源趋势日报 · 2026-07-23

---

## 第一步 · AI 相关性筛选结果

### 从今日 Trending 榜中筛出的 AI 项目（11/19）

| 项目 | 今日 +Stars | AI 类别 |
|---|---|---|
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | +4,139 | AI 应用 |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | +1,651 | AI 基础工具 |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | +1,699 | AI 智能体 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | +882 | AI 智能体 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | +741 | AI 应用 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | +652 | AI 教育/基础 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | +557 | AI 应用 |
| [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) | +364 | AI 基础工具 |
| [agegr/pi-web](https://github.com/agegr/pi-web) | +314 | AI 智能体 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | +163 | AI 智能体 |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | +137 | 大模型 |

> 已忽略：croc / likec4 / Apollo-11 / openship / cloudflare_temp_email / dioxus / Hyprland / Pumpkin——均为通用工具，与 AI 无明确关联。

---

## 第二步 · 分类与报告

---

## 1️⃣ 今日速览

今天 GitHub Trending 释放出一个非常清晰的信号：**AI Agent 基础设施正在成为新的爆点**。以 [OmniRoute](https://github.com/diegosouzapw/OmniRoute) 为代表的多模型 API 聚合网关单日 +1,651 stars，把 Claude Code、Codex、Cursor 等十几种编码 Agent 统一在一个 endpoint 之下；与此同时，code-review-graph、pi-web、Claude Skills 等 Agent 辅助生态同步爆发，显示 Agent 生态已进入 **"基础设施 + 工具链"军备竞赛**阶段。同时，垂直领域基础模型（金融 Kronos）与非视觉感知（WiFi 信号 RuView）首次登榜，预示新一轮 **多模态/垂直基础模型** 浪潮。

---

## 2️⃣ 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 今日亮点 |
|---|---|---|
| [OmniRoute](https://github.com/diegosouzapw/OmniRoute) | +1,651 today | **单 endpoint 打通 268+ 提供商 / 500+ 模型**，原生支持 Claude Code、Cursor、Cline，配合 token 压缩与自动 fallback，是 Trending 上最爆的 AI 中间件 |
| [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) | +364 today | 结构化输出（JSON / 正则 / CFG）事实标准框架，几乎所有需要可靠 LLM 输出的项目都依赖它 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 86.9k | 当前最高吞吐 LLM 推理引擎，是自部署推理的事实工业标准 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | 30.6k | 与 vLLM 并列的高性能多模态服务框架，对 RL 训练/agent 调用尤为友好 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | +163 today | Claude Skills 资源精选，反映官方 Agent 扩展协议的生态热度 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 61.2k | 对 Agent 日志、JSON、检索 chunk 做压缩，专治上下文爆炸 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 68.7k | 本地训练 Gemma4/Qwen3.6/DeepSeek 等模型的轻量 UI，微调首选 |

---

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 今日亮点 |
|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 218.9k | "伴随用户成长的 Agent"，目前话题热度最高的 agent 项目 |
| [i-have-adhd](https://github.com/ayghri/i-have-adhd) | +1,699 today | 让编码 Agent 输出更"ADHD 友好"——精准扼要，反对长篇啰嗦 |
| [code-review-graph](https://github.com/tirth8205/code-review-graph) | +882 today | **本地优先的代码情报图**，专为 MCP / CLI Agent 提供按需上下文 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36.2k | AG-UI 协议事实标准，前端接入 Agent 的首选 SDK |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 59.7k | 给 Agent "装上眼睛"——零 API 费访问 Twitter/Reddit/YouTube 等 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46.0k | 自我演化的 Agent Harness，自带记忆 / 知识 / 工具 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10.5k | 真实业务 Agent 的 GRPO 在线训练，工业落地关键工具 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 27.5k | DeepSeek 原生终端编码 Agent，专为 prefix-cache 稳定性设计 |

---

### 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 今日亮点 |
|---|---|---|
| [worldmonitor](https://github.com/koala73/worldmonitor) | +4,139 today 🏆 | **今日 Trending 全榜冠军**——实时全球情报仪表盘，AI 聚合新闻 / 地缘政治 / 基础设施监控 |
| [RuView](https://github.com/ruvnet/RuView) | +741 today | **WiFi 信号即感知**：无摄像头实现活体检测 / 姿态识别，隐私敏感场景的颠覆性方案 |
| [voicebox](https://github.com/jamiepine/voicebox) | +557 today | 开源 AI 语音工作室，集成克隆 / 听写 / 创作 |
| [Kronos](https://github.com/shiyu-coder/Kronos) | +137 today | **金融市场语言基础模型**，垂直域 Foundation Model 的新代表 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 94.1k | 多 Agent 金融交易框架，跨数据源 / 因子 / 风控 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 98.6k | 关键词 → 短视频的端到端流水线，现象级内容创作应用 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 40.5k | 文档 → 真实 PPT（带原生动画 + 数据图表 + 音频旁白） |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 58.3k | LLM 驱动的多市场股票分析与自动推送系统 |

---

### 🧠 大模型 / 训练

| 项目 | Stars | 今日亮点 |
|---|---|---|
| [Kronos](https://github.com/shiyu-coder/Kronos) | +137 today | 金融行情的预训练 foundation model，类比文本 GPT 的"金融版" |
| [ollama/ollama](https://github.com/ollama/ollama) | 176.6k | 本地跑 Kimi-K2.6 / GLM-5.2 / DeepSeek / Qwen 的事实标准 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162.8k | 模型定义的事实框架 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 101.8k | 深度学习基础设施 |
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 14.2k | 通用物理仿真器，机器人 / RL 训练的关键基础设施 |
| [NVlabs/Sana](https://github.com/NVlabs/Sana) | 8.5k | 线性扩散 Transformer，高分辨率图像生成新方案 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 59.7k | YOLO26 / YOLO11 主线仓库，计算机视觉工业基线 |
| [ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | +652 today | 0→1 AI 工程入门教程，呼应 Agent 时代的人才缺口 |

---

### 🔍 RAG / 知识库

| 项目 | Stars | 今日亮点 |
|---|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | 149.8k | Agentic workflow + RAG 一体化工作台，企业落地最常用 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 146.3k | Ollama 原生 UI，自托管 LLM 对话首选 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 142.3k | Agent 工程化平台的事实标准 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 85.7k | RAG + Agent 双引擎，企业级上下文层 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 88.2k | Agent 跨会话持久化记忆，注入相关上下文 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 61.4k | Agent 通用记忆层 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 34.1k | **无向量、推理驱动的 RAG**，是向量检索外的另一条路线 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33.5k | Rust 编写的高性能向量数据库 |
| [alibaba/zvec](https://github.com/alibaba/zvec) | 15.2k | 轻量、进程内向量数据库，性能对标 Qdrant |

---

## 3️⃣ 趋势信号分析

**1. Agent 基础设施进入"军备竞赛"阶段。** 今日 Trending 前 11 个 AI 项目中有 6 个直接服务于 Agent 生态，其中 [OmniRoute](https://github.com/diegosouzapw/OmniRoute)（+1,651）作为多模型聚合网关几乎重新定义了"模型无关 Agent"的接入方式；[code-review-graph](https://github.com/tirth8205/code-review-graph)（+882）和 [pi-web](https://github.com/agegr/pi-web)（+314）则代表 Agent 上下文优化与人机交互的成熟化。叠加 [ECC](https://github.com/affaan-m/ECC)、[Hermes-Agent](https://github.com/NousResearch/hermes-agent) 等长期热门项目，"Agent Harness 性能优化"正在演变为一个独立工程学科。

**2. 多模型网关成为新基础设施。** OmniRoute 单仓聚合 268 家供应商、500+ 模型——这背后的本质是开发者对**模型锁定风险**的强烈焦虑，类似"模型时代的 Kong / NGINX"。结合主题搜索里 [Ragflow](https://github.com/infiniflow/ragflow) / [Dify](https://github.com/langgenius/dify) 等仍在持续增长，说明 LLM 中间件层远未收敛。

**3. 垂直领域 Foundation Model 出现新样本。** 今日 +137 stars 的 [Kronos](https://github.com/shiyu-coder/Kronos) 专攻金融市场，结合主题搜索里 Embodied AI 主题下 [VLA 模型](https://github.com/sou350121/VLA-Handbook)、[世界模型 Awesome 列表](https://github.com/knightnemo/Awesome-World-Models) 的持续火热，**行业大模型（Domain LLM）** 是 2026 下半年最值得追踪的方向。

**4. 非视觉感知路线登榜。** [RuView](https://github.com/ruvnet/RuView)（+741）用 WiFi CSI 信号做空间感知，无需任何摄像头——这是边缘 AI / 隐私计算领域的标志性突破，也可能拉动 RSS / BLE 等其他非视觉感知模态的研发浪潮。

**5. 与近期行业事件的可能关联。** Claude Skills 生态（awesome-claude-skills、openclaude）的全面繁荣提示 Anthropic Agent SDK 正在快速扩展；OmniRoute / Tiny-LLM 对 Kimi-K2.6 / GLM-5.2 的支持反映国产开源大模型生态已具备全球开发者关注度。

---

## 4️⃣ 社区关注热点（开发者重点关注清单）

- 🔥 **[OmniRoute](https://github.com/diegosouzapw/OmniRoute)**——模型聚合网关标准之争的早期领跑者，今天是非 SDK 类最爆 AI 项目，建议优先体验其多 Provider fallback 与 token 压缩设计。
- 🔥 **[RuView](https://github.com/ruvnet/RuView)**——WiFi 感知为 AIoT / 隐私场景开辟新维度，是少有的"非视觉 + 非文本"模态创新，值得研究其信号处理 pipeline。
- 🔥 **[Kronos](https://github.com/shiyu-coder/Kronos)**——首个高 star 的金融垂直基础模型，预示着"行业大模型"开源潮，建议关注其 tokenizer 与预训练数据策略。
- 🔥 **[code-review-graph](https://github.com/tirth8205/code-review-graph)**——本地优先、可量化的代码 Agent 上下文管理，是 Agent 落地的工程范本。
- 🔥 **[i-have-adhd](https://github.com/ayghri/i-have-adhd)**——虽小众但出圈，反映开发者对**Agent 输出风格化**的强烈需求；社区已经出现"Agent UX"独立赛道。

---

*报告生成基于 GitHub Trending（2026-07-23）及 topic 搜索（embodied-ai / rag / robotics / ai-agent / rl / ml / llm / ros / robot-learning / llm-model / vector-db）。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*