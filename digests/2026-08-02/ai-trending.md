# AI 开源趋势日报 2026-08-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-02 02:08 UTC

---

# AI 开源趋势日报 · 2026-08-02

---

## 一、今日速览

今日 GitHub Trending 中 AI 相关项目占比近 **2/3（10/15）**，AI 编程 Agent 的"技能/工具链"生态出现集中爆发——`reverse-skill`（+1320 stars）、`TencentDB-Agent-Memory`（+227）、`NomaDamas/k-skill`（+53）同日登榜，显示开发者正围绕 Claude Code / Cursor / Codex 等 Agent 客户端构建"可路由、可自举、可记忆"的外挂能力。语音侧延续热度（HuggingFace `speech-to-speech` +442、`voice-pro` +58），ByteDance 推出长时程 SuperAgent 框架 `deer-flow`（+209），微软开源 3D 生成模型 `TRELLIS.2`（+107），整体仍呈现"Agent 工具化 × 多模态生成"双主线。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [**github/copilot-sdk**](https://github.com/github/copilot-sdk) | ⭐142 today | GitHub 官方多平台 SDK，将 Copilot Agent 能力嵌入第三方应用，Agent 基础设施层 |
| [**zhaoxuya520/reverse-skill**](https://github.com/zhaoxuya520/reverse-skill) | ⭐1320 today | 面向 Claude Code / Kiro / Cursor 的 AI 路由 + 按需工具链自举 + 自我进化经验库，今日 Trending 最热 AI 工具 |
| [**NomaDamas/k-skill**](https://github.com/NomaDamas/k-skill) | ⭐53 today | 韩国社区出品的 Agent Skill 集合，本地化场景的 Agent 技能包 |
| [**0xPlaygrounds/rig**](https://github.com/0xPlaygrounds/rig) | ⭐8,127 | Rust 编写的模块化、可扩展 LLM 应用框架，LLMOps 工具栈新选择 |
| [**langchain4j/langchain4j**](https://github.com/langchain4j/langchain4j) | ⭐12,759 | Java/JVM 生态的 LLM 开发库，与 Spring Boot / Quarkus 深度集成，企业级首选 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [**bytedance/deer-flow**](https://github.com/bytedance/deer-flow) | ⭐209 today | 字节开源的长时程 SuperAgent Harness：研究 / 编码 / 创作，支持沙箱、记忆、子 Agent、消息网关 |
| [**TencentCloud/TencentDB-Agent-Memory**](https://github.com/TencentCloud/TencentDB-Agent-Memory) | ⭐227 today | 腾讯云推出的团队级 Agent 记忆中枢，将对话 / 文档 / 代码沉淀为 Chat Memory、Skill、LLM-Wiki、Code-Graph 四类资产 |
| [**shareAI-lab/learn-claude-code**](https://github.com/shareAI-lab/learn-claude-code) | ⭐72,932 | "Bash is all you need"，从 0 到 1 教学实现类 Claude Code 的 nano Agent Harness |
| [**HKUDS/nanobot**](https://github.com/HKUDS/nanobot) | ⭐46,502 | 港大开源的超轻量自托管个人 Agent 框架，含 WebUI / MCP / 多 Agent 工作流 |
| [**zhayujie/CowAgent**](https://github.com/zhayujie/CowAgent) | ⭐46,267 | 开源超级 AI 助手，任务规划 + 工具调用 + 记忆进化，前身为 chatgpt-on-wechat |
| [**NousResearch/hermes-agent**](https://github.com/NousResearch/hermes-agent) | ⭐223,857 | "The agent that grows with you"，强调随用户共同成长的 Agent 范式 |
| [**affaan-m/ECC**](https://github.com/affaan-m/ECC) | ⭐236,846 | Agent Harness 性能优化系统：技能 / 直觉 / 记忆 / 安全，覆盖 Claude Code、Cursor、Codex |
| [**CopilotKit/CopilotKit**](https://github.com/CopilotKit/CopilotKit) | ⭐36,400 | Agent 前端 UI 栈，支持 React/Angular/Mobile/Slack，AG-UI 协议提出者 |

### 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [**huggingface/speech-to-speech**](https://github.com/huggingface/speech-to-speech) | ⭐442 today | HuggingFace 官方：基于开源模型构建本地化语音 Agent |
| [**abus-aikorea/voice-pro**](https://github.com/abus-aikorea/voice-pro) | ⭐58 today | Gradio WebUI 集成 Edge-TTS / Kokoro / CosyVoice / Whisper，含零样本声音克隆 |
| [**microsoft/TRELLIS.2**](https://github.com/microsoft/TRELLIS.2) | ⭐107 today | 微软开源：原生紧凑结构化潜变量驱动的 3D 生成 |
| [**harry0703/MoneyPrinterTurbo**](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐101,019 | 一键生成高清短视频的 AI 工作流，视频生产自动化标杆 |
| [**hugohe3/ppt-master**](https://github.com/hugohe3/ppt-master) | ⭐42,398 | 文档 / 主题 → 原生 PowerPoint（含动画、图表、语音旁白）的 AI 办公应用 |
| [**HKUDS/Vibe-Trading**](https://github.com/HKUDS/Vibe-Trading) | ⭐29,171 | "Vibe-Trading：你的个人交易 Agent"，金融场景 Agent 化 |

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [**ollama/ollama**](https://github.com/ollama/ollama) | ⭐177,527 | 本地运行 Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek、Qwen 等多模型的标杆工具 |
| [**huggingface/transformers**](https://github.com/huggingface/transformers) | ⭐163,230 | 文本/视觉/音频/多模态模型定义与训练的事实标准框架 |
| [**vllm-project/vllm**](https://github.com/vllm-project/vllm) | ⭐87,883 | 高吞吐、低显存 LLM 推理与服务平台 |
| [**unslothai/unsloth**](https://github.com/unslothai/unsloth) | ⭐69,359 | 本地 UI 训练与运行 Kimi K3、Gemma 4、Qwen3.6、DeepSeek-V4 的轻量方案 |
| [**sgl-project/sglang**](https://github.com/sgl-project/sglang) | ⭐31,059 | LLM 与多模态模型的高性能服务框架 |
| [**rasbt/LLMs-from-scratch**](https://github.com/rasbt/LLMs-from-scratch) | ⭐100,316 | 从零用 PyTorch 实现类 ChatGPT LLM 的经典教学仓库 |

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [**langgenius/dify**](https://github.com/langgenius/dify) | ⭐151,015 | 一体化 Agentic Workflow + RAG 协作平台，云 / VPC / 自托管皆可 |
| [**langchain-ai/langchain**](https://github.com/langchain-ai/langchain) | ⭐143,185 | "The agent engineering platform"，Agent 工程化标杆 |
| [**infiniflow/ragflow**](https://github.com/infiniflow/ragflow) | ⭐86,575 | 领先开源 RAG 引擎，深度融合 RAG 与 Agent 能力 |
| [**mem0ai/mem0**](https://github.com/mem0ai/mem0) | ⭐62,279 | AI Agent 的通用记忆层 |
| [**run-llama/llama_index**](https://github.com/run-llama/llama_index) | ⭐51,282 | 领先的文档 Agent 与 OCR 平台 |
| [**topoteretes/cognee**](https://github.com/topoteretes/cognee) | ⭐29,678 | 基于知识图谱为 Agent 提供持久化长期记忆 |
| [**VectifyAI/PageIndex**](https://github.com/VectifyAI/PageIndex) | ⭐34,950 | 无向量化、基于推理的 RAG 文档索引新范式 |
| [**alibaba/zvec**](https://github.com/alibaba/zvec) | ⭐15,355 | 阿里开源：轻量、极速、进程内向量数据库 |
| [**StarTrail-org/LEANN**](https://github.com/StarTrail-org/LEANN) | ⭐12,758 | 个人设备上 97% 存储节省的 RAG 方案（MLsys2026） |

---

## 三、趋势信号分析

今日最显著的信号是 **"AI 编程 Agent 的工具链 / 技能生态集中爆发"**。在 10 个上榜 AI 项目中，**至少 4 个**（`reverse-skill`、`TencentDB-Agent-Memory`、`NomaDamas/k-skill`、`copilot-sdk`）直接服务于 Claude Code / Cursor / Codex / Copilot 等 Agent 客户端，构建包括技能路由、记忆中枢、本地化 Skill 包、官方 SDK 在内的外延能力栈。这表明社区共识正在收敛：**Agent 的差异化竞争已从"模型能力"迁移至"工具调用 + 记忆管理 + 上下文压缩"**。`headroom`（压缩 Agent 工具输出节省 20-95% tokens）、`claude-mem`（跨会话持久化上下文）、`cognee`（知识图谱记忆）等的持续活跃印证了这一趋势。

第二信号来自 **语音 Agent 与多模态生成的持续渗透**。HuggingFace 官方亲自下场做 `speech-to-speech`，`voice-pro` 集成 Kokoro / CosyVoice / F5-TTS 等开源语音栈，反映出端到端语音对话正成为继 RAG 之后下一个"标准化应用形态"。`TRELLIS.2` 的爆量（+107 today）则说明 3D / 4D 生成作为新一代原生内容资产，已进入主流开发者视野。

第三信号是 **长时程 Agent Harness 成为新热点**。`deer-flow`、`hermes-agent`、`nanobot`、`CowAgent`、`ECC`、`learn-claude-code` 不约而同强调"hours-level 任务 + 记忆 + 子 Agent + 沙箱"四要素，这是对单轮 LLM 调用范式的根本性升级，也呼应了近期 Anthropic / OpenAI 关于 Agent Computer Use 与长任务执行的行业焦点。

---

## 四、社区关注热点

- **🛠️ [`zhaoxuya520/reverse-skill`](https://github.com/zhaoxuya520/reverse-skill)** ——单日 +1320 stars、Trending 第一，揭示"AI 安全/逆向技能路由"成为 Agent 工具链中最强增量赛道，安全研究 + Agent 范式的交叉值得跟进。
- **🧠 [`TencentCloud/TencentDB-Agent-Memory`](https://github.com/TencentCloud/TencentDB-Agent-Memory)** ——大厂亲自下场定义 Agent 团队记忆协议（Chat Memory / Skill / LLM-Wiki / Code-Graph 四类资产），团队级 Agent 协作正从概念走向工程化。
- **🤖 [`bytedance/deer-flow`](https://github.com/bytedance/deer-flow)** ——字节级 SuperAgent Harness，标志长时程、多工具、自演化的 Agent 框架进入大厂开源竞速阶段，建议重点研究其架构设计。
- **🎙️ [`huggingface/speech-to-speech`](https://github.com/huggingface/speech-to-speech)** ——HF 官方亲自运营的语音 Agent 模板库，端到端语音交互的开源标准正在被锁定，开发语音类产品时可直接基于其生态。
- **🗄️ [`StarTrail-org/LEANN`](https://github.com/StarTrail-org/LEANN)** ——个人设备级 RAG，97% 存储节省、100% 隐私，MLsys2026 收录，代表 RAG 走向"端侧 + 极轻量"的新方向，与 Apple Silicon / 边缘 AI 浪潮契合。

---

*报告基于 GitHub Trending 当日榜单与 AI 主题搜索结果交叉分析，数据时点 2026-08-02。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*