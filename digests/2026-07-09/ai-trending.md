# AI 开源趋势日报 2026-07-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-09 02:36 UTC

---

# 📊 AI 开源趋势日报 · 2026-07-09

---

## 第一步：AI 相关性筛选结果

**Trending 榜单（15 个）筛除非 AI 项目 5 个**，保留 **10 个 AI 相关项目**：

| 筛除项目 | 理由 |
|---|---|
| prisma/prisma | Node.js 通用 ORM |
| ruvnet/RuView | WiFi 信号处理（传统信号处理技术） |
| argoproj/argo-cd | Kubernetes 持续部署 |
| Diolinux/PhotoGIMP | GIMP 图像处理补丁 |
| huxingyi/autoremesher | 3D 几何重网格化工具 |

**主题搜索结果（149 个）** 全部保留——均来自 AI 主题标签检索（ai-agent / llm / ml / rag / vector-db / ros / llm-model / robotics / embodied-ai / rl / robot-learning）。

---

## 第二步 & 第三步：分类与趋势报告

---

## 1. 今日速览

> **今日 GitHub AI 热榜被"AI Agent 技能/工具链"全面主导。** OfficeCLI（+1,717）、agent-skills（+1,297）、superpowers（+1,116）等"为 Agent 提供专项能力"的仓库集体爆发，叠加 Tencent 的 Agent Memory 与 CubeSandbox，标志 Agent 生态正从"框架层（LangChain/AutoGen）"下沉到"技能/工具层"的工业化阶段。**向量数据库**（alibaba/zvec 首次登顶，+395）与**大模型系统提示词泄露**（system_prompts_leaks，+1,218）两大经典赛道依然保持高热度。值得关注的是，**具身智能（Embodied AI）与机器人学习**在主题搜索中占比超过 25%，RLinfra、VLA、World Model 等项目正形成第二增长极。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架/SDK/推理引擎/CLI）

| 项目 | Stars | 今日 | 一句话说明 |
|---|---|---|---|
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | — | **+1,297** | Google Chrome 团队出品的"生产级 Agent 编程技能包"，标准化 Agent 工程能力 |
| [obra/superpowers](https://github.com/obra/superpowers) | — | **+1,116** | Agentic 技能框架 + 软件开发方法论，提出"可被 Agent 调用的工作流" |
| [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox) | — | **+564** | 面向 AI Agent 的轻量安全沙箱（Rust），解决代码执行隔离痛点 |
| [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) | — | **+28** | Claude 的 MCP 服务器，赋予终端控制、文件系统、Diff 编辑能力 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 85,742 | — | 高吞吐 LLM 推理引擎，Agent 后端标配 |
| [ollama/ollama](https://github.com/ollama/ollama) | 175,760 | — | 一键运行 Kimi-K2.6 / GLM-5.1 / DeepSeek / Qwen 等开源模型 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 12,558 | — | Java 生态 LangChain，对接 Quarkus/Spring Boot，企业级 LLM 集成首选 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | 30,081 | — | 高性能 LLM/多模态服务框架，与 RL 训练紧耦合 |

### 🤖 AI 智能体/工作流（Agent 框架/自动化/多智能体）

| 项目 | Stars | 今日 | 一句话说明 |
|---|---|---|---|
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | — | **+1,717** | 🏆 今日 AI 榜冠军。首个专为 Agent 设计的 Office 工具链，单二进制免安装 |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | — | **+1,218** | 收录 Claude/GPT-5.5/Gemini-3.5/Grok 等十余款产品系统提示词，是 Prompt 工程研究宝库 |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | — | **+951** | 让 Claude 看视频：自动抽帧+转录+多模态喂入，扩展 Agent 感知能力 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | — | **+318** | 腾讯云出品，4 级渐进式管道实现 Agent 长期记忆，零外部 API 依赖 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | — | **+352** | Agent 技能：聚合 Reddit/X/YouTube/HN/Polymarket 数据做主题研究 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 211,640 | — | "与你共同成长的 Agent"，Hermes 系列持续高产 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 48,323 | — | 一体化 AI 生产力工室，集成 300+ 助手 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 53,312 | — | 给 Agent 装上"互联网之眼"：统一 CLI 接入 6 大平台、零 API 费用 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 91,892 | — | 多 Agent 金融交易框架，LLM 驱动投研自动化 |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | 6,032 | — | "原子化"构建 AI Agent，主打可组合与可测试 |

### 📦 AI 应用（具体产品/垂直场景）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 55,933 | LLM 驱动的多市场股票分析系统，零成本定时运行 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 37,787 | 文档一键生成可编辑 PPT（非图片），原生图表动画+语音旁白 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 44,998 | 隐私优先的本地知识管理，深度集成 AI 能力 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 70,337 | 面向分析师/量化/Agent 的开放数据平台 |
| [nocobase/nocobase](https://github.com/nocobase/nocobase) | 23,288 | AI + 无代码双驱动，业务系统搭建平台 |
| [huangjunsen0406/py-xiaozhi](https://github.com/huangjunsen0406/py-xiaozhi) | 3,393 | 开源 AI 助手生态，支持 MCP+多模态+IoT+跨平台语音 |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | 46,973 | 国内流行 AI 低代码平台，AI 生成+配置+代码生成开发闭环 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 80,064 | 老牌 AI 驱动开发代理，能独立完成 PR 级工作 |

### 🧠 大模型/训练（模型权重/训练框架/微调）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162,392 | 事实标准的模型定义框架，覆盖文本/视觉/音频/多模态 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 67,937 | 消费级显卡微调 Gemma4/Qwen3.6/DeepSeek 的"平民化"工具 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 59,261 | YOLO26/YOLO11/YOLOv8 一体化仓库，计算机视觉基础设施 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,350 | Agent 强化学习训练器（GRPO），让 Agent "在职培训" |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | 9,769 | 基于 Ray 的大规模 Agentic RL 框架（PPO/DAPO/REINFORCE++） |
| [NVlabs/Sana](https://github.com/NVlabs/Sana) | 8,451 | 线性 Diffusion Transformer，高分辨率图像生成新 SOTA |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,174 | 权威 LLM 评测平台，覆盖 100+ 数据集与主流模型 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 281 | 新兴：可靠/极简/可扩展的预训练库，主攻基础与世界模型 |

### 🔍 RAG / 知识库（向量库/检索/知识管理）

| 项目 | Stars | 今日 | 一句话说明 |
|---|---|---|---|
| [alibaba/zvec](https://github.com/alibaba/zvec) | 14,445 | **+395** | 阿里出品的进程内轻量向量数据库，主打"闪电级"嵌入式检索 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 141,325 | — | "Agent 工程平台"，事实标准已从链式扩展到全 Agent 栈 |
| [langgenius/dify](https://github.com/langgenius/dify) | 148,230 | — | 生产级 Agentic 工作流平台，可视化编排 LLM 应用 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 84,628 | — | 领先的开源 RAG 引擎，RAG + Agent 双能力融合 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 60,429 | — | 通用 Agent 记忆层，为 LLM 提供跨会话持久记忆 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 50,741 | — | 文档 Agent + OCR 平台 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,062 | — | 高性能 Rust 写就的向量数据库 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,139 | — | 云原生向量数据库，大规模 ANN 搜索首选 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 27,371 | — | 开源 Agent 记忆平台，基于自托管知识图谱 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,659 | — | 边缘设备 RAG，节省 97% 存储、完全本地化 |

### 🦾 具身智能 / 机器人（今日次热点）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | 4,045 | 面向具身与 Agentic AI 的强化学习基础设施 |
| [huangjunsen0406/py-xiaozhi](https://github.com/huangjunsen0406/py-xiaozhi) | 3,393 | MCP 集成的

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*