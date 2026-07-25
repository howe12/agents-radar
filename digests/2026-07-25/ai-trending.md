# AI 开源趋势日报 2026-07-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-25 02:04 UTC

---

# AI 开源趋势日报 · 2026-07-25

---

## 今日速览

今日 GitHub 趋势榜单 AI 相关项目占比近七成，**AI Agent 工具链呈现爆发态势**——`mattpocock/skills`、`citrolabs/ego-lite`、`diegosouzapw/OmniRoute`、`ComposioHQ/awesome-claude-skills` 同时登顶，显示开发者正围绕 Claude Code、Codex 等编程 Agent 构建基础设施。垂直领域基础模型（如 `shiyu-coder/Kronos` 面向金融市场）和 AI 网关聚合层（OmniRoute 接入 290+ 模型供应商）成为新兴热点，而 RAG 与向量检索方向虽未出现爆款，但底层生态持续扩张。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI / 网关）

| 项目 | Stars | 说明 |
|---|---|---|
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | ⭐0（+1841 today） | MIT 协议 AI 网关，统一端点接入 290+ 模型供应商（90+ 免费），内置 RTK 压缩节省 15-95% tokens，今日热度榜首 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐142,541 | Agent 工程平台的事实标准框架 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐87,092 | 高吞吐、低显存占用的 LLM 推理引擎，社区部署首选 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐30,713 | 高性能 LLM / 多模态服务框架，RL 场景常用 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐27,732 | 基于 DeepSeek 的终端 AI 编程 Agent，专为 prefix-cache 稳定性优化 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐176,814 | 本地运行开源模型的标杆工具 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,950 | 多模态模型定义与训练的标准框架 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | ⭐29,986 | Google Workspace CLI，内置 AI Agent 技能模块 |

### 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|---|---|---|
| [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐0（+2251 today） | 工程师级 Agent Skills 集合（.agents 目录），今日涨幅最高 |
| [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | ⭐0（+880 today） | 为 AI Agent 量身打造的浏览器，零成本共享登录态，专为 Codex/Claude Code 设计 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | ⭐0（+663 today） | Claude Skills 精选资源库，反映 Claude 生态扩展 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐220,042 | 与用户协同成长的 Agent |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐46,199 | 轻量级开源 Agent，统一工具、对话与工作流 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐60,626 | 为 Agent 提供跨平台阅读/搜索能力（Twitter、Reddit、B站等），零 API 费用 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐106,630 | 让网站可被 AI Agent 访问的浏览器自动化层 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐81,995 | AI 驱动的软件开发 Agent 平台 |

### 📦 AI 应用（垂直产品 / 场景化解决方案）

| 项目 | Stars | 说明 |
|---|---|---|
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | ⭐0（+2184 today） | 实时全球情报仪表盘，AI 新闻聚合 + 地缘政治监控，今日榜单第二 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | ⭐0（+1022 today） | 将 WiFi 信号转为空间感知与生命体征监测，无摄像头方案值得关注 |
| [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | ⭐0（+328 today） | 中文社区系统性 LLM 实战教程，配套编程实践 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐48,955 | AI 生产力工作站，统一接入多种前沿 LLM |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | ⭐27,322 | 个人交易 Agent |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐40,967 | 文档→原生 PowerPoint 的 AI 生成器，含动画/图表/语音 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐99,146 | 一键生成 AI 短视频 |
| [OtterMind/Chat2DB](https://github.com/OtterMind/Chat2DB) | ⭐0（+82 today） | AI 驱动的数据库客户端，Text-to-SQL |

### 🧠 大模型 / 训练（基础模型、训练框架、微调）

| 项目 | Stars | 说明 |
|---|---|---|
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | ⭐0（+499 today） | 首个面向**金融市场语言**的基础模型，K 线序列预训练范式 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐53,819 | 2 小时从零训练 64M 参数 LLM 的教学项目 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐68,853 | 本地训练与运行 Gemma4/Qwen3.6/DeepSeek 等模型 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐59,843 | YOLO11/YOLO26 视觉模型官方实现 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,529 | Agent 强化训练器（GRPO），支持多步真实任务 |
| [Ray Project/ray](https://github.com/ray-project/ray) | ⭐43,339 | 分布式 AI 计算引擎 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐86,208 | 文档→结构化数据的 OCR 工具包，RAG 文档预处理关键组件 |

### 🔍 RAG / 知识库（向量库、检索增强、记忆层）

| 项目 | Stars | 说明 |
|---|---|---|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐88,481 | 跨会话持久化 Agent 上下文，自动压缩注入 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐85,928 | 开源 RAG 引擎，融合 Agent 能力 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐61,634 | AI Agent 通用记忆层 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐150,149 | Agent 工作流 + RAG 一体化平台 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | ⭐38,096 | EMNLP2025 论文，简单高效的 RAG 实现 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐34,449 | 无向量、基于推理的 RAG 文档索引 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐29,273 | Agent 长期记忆 + 自托管知识图谱 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,728 | 个人设备 RAG，97% 存储节省 |

---

## 趋势信号分析

**Agent 基础设施是今日最强主线。** 涨幅前五中有四个明确围绕 Agent 工程展开：`mattpocock/skills`（+2251）、`koala73/worldmonitor`（+2184，但核心是 Agent 编排）、`OmniRoute`（+1841）、`citrolabs/ego-lite`（+880）。这反映出开发者社区正从"模型选型"快速转向"Agent 工程化"——浏览器自动化、技能市场（Skills）、网关路由成为新增量。

**AI 网关 / 模型聚合层首次形成独立赛道。** OmniRoute 单日 +1841 stars，接入 290+ 模型供应商并内置 token 压缩；`langchain-ai/langchain`（142k）也定位为 Agent 工程平台。表明多模型路由、容灾切换、成本压缩已成为生产级 Agent 的刚需。

**垂直领域基础模型继续涌现。** `shiyu-coder/Kronos`（金融 K 线基础模型，+499）是继生物医学、代码之后又一行业大模型；`ruvnet/RuView` 利用 WiFi CSI 信号做感知，替代视觉方案——这两个项目代表了"专用小模型 + 场景深度"的路径。

**RAG 方向进入"记忆层"阶段。** `claude-mem`（88k）、`mem0`（61k）这类 Agent 持久化记忆项目热度持续，反映 RAG 正从静态文档检索向"动态 Agent 上下文管理"演进。

**新兴技术栈信号：** Rust 正在 AI 工具链中回归（OmniRoute、esengine/Reasonix、cognee 等），同时 MCP（Model Context Protocol）已成 Agent 工具接入的事实标准。

---

## 社区关注热点

- 🔥 **[OmniRoute](https://github.com/diegosouzapw/OmniRoute)** — AI 网关聚合 290+ 模型供应商，RTK 压缩显著降本，是 Agent 生产化的关键中间件，值得架构师重点关注
- 🔥 **[citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)** — 首个面向 AI Agent 的浏览器，零成本共享登录态，直接解决 Web Agent 落地的最大痛点
- 🔥 **[mattpocock/skills](https://github.com/mattpocock/skills)** — 工程师级 Agent Skills 集合，揭示 Skills 市场将成为 Agent 生态的新增长极
- 🔥 **[Kronos](https://github.com/shiyu-coder/Kronos)** — 金融市场首个基础模型，K 线序列预训练范式具有方法论参考价值
- 🔥 **[RuView](https://github.com/ruvnet/RuView)** — WiFi 信号非视觉感知方案，边缘计算 + 隐私场景下的差异化选择

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*