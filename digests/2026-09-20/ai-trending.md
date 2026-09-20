# AI 开源趋势日报 2026-09-20

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-20 02:51 UTC

---

# AI 开源趋势日报 · 2026-09-20

---

## 今日速览

今日 GitHub Trending 几乎被 **AI Coding Agent** 生态全面占领，cloudflare 的 security-audit-skill 单日暴涨 +3,155 stars，与 addyosmani/agent-skills、anthropics/claude-code、coder/coder 共同印证"Agent Skills"正在成为新的开源基础范式。**Computer-Use 方向**持续走热，trycua/cua（+859）以跨操作系统设备集群+评测基准抢占制高点，预示"通用 GUI Agent"开源化提速。**端侧/极小模型**（cactus-compute/needle, +234）和**万亿参数训练基础设施**（higgsfield-ai, +196）形成有趣对比：一边是 2-bit / 8MB 的设备端自动化基础模型，一边是面向超大规模训练的容错 GPU 编排。社区整体关注重心明显从"模型本身"转向 **Agent 工具链、Skill 生态、向量检索与具身智能**。

---

## 一、🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [higgsfield-ai/higgsfield](https://github.com/higgsfield-ai/higgsfield) | 0 (+196 today) | 面向万亿参数模型的容错 GPU 编排与 ML 框架，今日因大规模训练需求回榜 |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | 0 (+234 today) | **设备端 2-bit 8~29MB 自动化基础模型**，支持 tool call / 结构化抽取，端侧 Agent 全新形态 |
| [docling-project/docling](https://github.com/docling-project/docling) | 0 (+129 today) | IBM 出品的文档预处理工具，专为 GenAI 准备结构化数据，长期位于企业 RAG 流水线上游 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐181,283 | 本地运行 Kimi/GLM/DeepSeek/Qwen/Gemma 等模型的标配 CLI，事实标准 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐36,181 | LLM/多模态高性能推理框架，Agent RL 场景首选 serving 引擎 |
| [ray-project/ray](https://github.com/ray-project/ray) | ⭐43,873 | 分布式 AI 计算引擎，RL 与大模型训练的事实编排底座 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐76,450 | 轻量本地 UI 训练/推理 LLM 与扩散模型，已支持 Qwen3.8/DeepSeek-V4/MiniMax-H3 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐146,692 | Agent 工程平台，仍然是 LLM 应用编排基础设施 |

---

## 二、🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | 0 (**+3,155 today**) | 多阶段安全审计 Agent Skill，机器可读验证产出——**今日全站 Trending #1**，标志 "Skill 标准化" 开端 |
| [trycua/cua](https://github.com/trycua/cua) | 0 (+859 today) | **Computer-Use 2.0** 开源驱动 + 跨 OS 设备集群 + 训练/评测基准，是 OS-level Agent 时代的 Linux |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 0 (+556 today) | Google 工程效能团队出品，生产级 AI 编码 Agent 工程 Skill 集合 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | 0 (+483 today) | 终端内 Agentic 编码工具，自然语言驱动 Git 工作流与代码理解 |
| [coder/coder](https://github.com/coder/coder) | 0 (+402 today) | 为开发者与 Agent 提供安全隔离的开发环境，Coding Agent 时代的基础设施 |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | 0 (+281 today) | Claude Cowork 知识工作者插件生态，企业 Agent 落地入口 |
| [yynxxxxx/Codex-X](https://github.com/yynxxxxx/Codex-X) | 0 (+32 today) | OpenAI Codex 桌面/CLI 可视化管理工具，Provider 切换 + Skills/MCP 管理 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐247,185 | "与你共同成长的 Agent"，长期居 AI-Agent 主题榜首 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐37,421 | Agent + Generative UI 的前端栈，AG-UI 协议作者 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐48,368 | 轻量级自托管个人 AI Agent 框架，含 MCP/多 Agent/记忆 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | ⭐18,383 | 微软出品的 Agent RL 训练框架，Agent 后训练的新底座 |

---

## 三、📦 AI 应用（产品化、垂直场景）

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐152,578 | 兼容 Ollama / OpenAI 的本地优先 AI 对话界面，社区首选前端 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐115,358 | 让 Agent 直接操控浏览器的开源实现，GUI Agent 标杆项目 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐124,739 | 一句话生成高清短视频，AIGC 内容创作流水线的代表案例 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐107,632 | 多 Agent LLM 金融交易框架，量化研究热门参考 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐55,371 | 文档/主题一键生成原生 PowerPoint，含动画、图表、语音旁白 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐65,324 | LLM 驱动多市场股票分析系统，中文社区量化 Agent 代表 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐52,004 | 统一接入前沿 LLM 的 AI 生产力桌面端，支持 300+ 助手与自治 Agent |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | ⭐79,934 | 中文社区《从零开始构建智能体》教程，合规学习资源 |

---

## 四、🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [transformers](https://github.com/huggingface/transformers) | ⭐166,406 | 文本/视觉/音频/多模态模型定义与训练的事实标准 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐61,718 | 2 小时训练 64M 参数 LLM，入门级 LLM 训练教学代表 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,679 | Rust 实现的模块化可扩展 LLM 应用框架，系统级 AI 工程新选择 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,457 | 100+ 数据集、覆盖主流 LLM 的开源评测平台 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,580 | Apple Silicon 上手写 vLLM + Qwen 推理引擎，系统工程师视角 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | ⭐554 | 统一 OpenAI/Anthropic 协议的多 LLM 网关 + 智能负载均衡 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,758 | Agent Reinforcement Trainer：GRPO 多步真实任务 Agent RL |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | ⭐10,018 | 基于 Ray 的高性 Agentic RL 框架（PPO/DAPO/REINFORCE++/VLM） |

---

## 五、🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|------|-------|-----------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐91,011 | 融合 Agent 能力的开源 RAG 引擎，企业级"LLM 上下文层"代表 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐89,848 | PDF/图像 → 结构化数据的 OCR 工具，RAG 数据接入的关键前置组件 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐65,663 | Agent 持久化记忆基础设施，"跨会话上下文"已成 RAG 标配 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐119,666 | 把代码库/SQL/PDF 转成可查询知识图谱，无向量存储的 GraphRAG 路线 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐73,120 | 为 Coding Agent 压缩工具输出与 RAG 片段，节省 20–95% token |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐94,278 | 跨会话持久化上下文，兼容 Claude Code/Codex/Copilot 等多 Agent |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐46,166 | 云原生高性能向量数据库，RAG 默认存储 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,761 | 基于推理的"无向量"RAG 文档结构，正挑战传统 chunk+embedding 范式 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,946 | MLsys2026 Best Paper，97% 存储节省的个人设备 RAG 方案 |

---

## 趋势信号分析

今日 Trending 列表呈现一个非常清晰的信号——**"Agent Skill 标准化"正在成为开源生态的新爆点**。cloudflare/security-audit-skill 单日 +3,155 stars 创下本月最高单日涨幅之一，与 addyosmani/agent-skills（+556）、anthropics/claude-code（+483）、coder/coder（+402）共同构成一个完整的"Agent Skill + 运行环境 + Coding 入口"生态闭环。这与 Anthropic 在 Cowork 产品上推出 knowledge-work-plugins 的官方动作相互呼应，说明企业级 Agent 正在从"单点工具"演化为"可复用、可分发、可验证的 Skill 资产市场"。

第二个显著信号是 **Computer-Use 与设备端模型的"两极化并行"**。一方面 trycua/cua（+859）以"跨 OS 设备集群 + 训练/评测基准"的姿态将 Computer-Use 推向 OS 级基础设施竞赛；另一方面 cactus-compute/needle（+234）展示 2-bit / 8MB 量级、可在手机/穿戴/微控制器上运行的端侧基础模型，预示 AI 部署从云端向"毛细血管级"设备扩散。

第三，从 147 个主题搜索结果的分布看，**RAG/Vector-DB（26 个）+ AI-Agent（14 个）+ Embodied-AI/Robot-Learning（24 个）+ ROS（12 个）合计超过 76 个项目**，远超纯模型训练类项目。社区关注重心已经从"训更大的模型"明确迁移到"如何让模型在 Agent、具身机器人、长期记忆中更好地被使用"——这与近期多模态 Agent 框架、VLA（Vision-Language-Action）模型、World Model 论文的密集发布节奏高度吻合。

---

## 社区关注热点（开发者重点关注方向）

- **[trycua/cua](https://github.com/trycua/cua)** — Computer-Use 正成为下一个 OS 级战场，跨平台驱动 + 评测基准的组合稀缺性极高，值得跟踪贡献。
- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** — 单日涨幅第一，预示 Agent Skill 将以"安全/合规可验证"为核心卖点重构生态。
- **[cactus-compute/needle](https://github.com/cactus-compute/needle)** — 端侧 2-bit 基础模型是少有人涉足的蓝海，移动端/IoT Agent 的关键拼图。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** 与 **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — "无向量"或"知识图谱"RAG 路线正在挑战传统 embedding 范式，可能改变 RAG 架构选型。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** / **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** / **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — 记忆层 + 上下文压缩已成 Agent 三大基础设施组件，Token 成本压力下价值持续放大。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*