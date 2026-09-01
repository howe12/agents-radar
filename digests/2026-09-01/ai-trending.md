# AI 开源趋势日报 2026-09-01

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-01 03:02 UTC

---

# AI 开源趋势日报 · 2026-09-01

---

## 今日速览

今日 GitHub Trending 中 AI 相关项目占比近三分之二，最显著的现象是 **"Agent Skills / Skill Pack" 生态集中爆发**——多个为 Claude Code、Cursor、Codex 等编码 Agent 提供领域能力的 Skill 仓库同日登榜，涵盖科学研究、架构绘图、专利撰写、渗透安全等垂直场景。Agent Harness 性能优化、LLM 从零实现（MiniMind）、多智能体课堂（OpenMAIC）继续维持高热度，反映出社区对 **"Agent 工具链标准化 + 领域专业化"** 的强烈需求。

---

## 🔧 AI 基础工具

| 项目 | Stars（总量 / 今日） | 一句话说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐179,853 / — | 本地运行与训练 LLM、扩散模型的事实标准 CLI，原生支持 Kimi-K2.6、GLM-5.2、Qwen 等主流模型 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐33,002 / — | 高性能 LLM / 多模态模型推理服务框架，追求低延迟高吞吐生产部署 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,473 / — | Rust 编写的模块化 LLM 应用框架，主打可扩展与生产就绪 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐12,987 / — | JVM 生态的 LangChain 原生实现，统一多模型 / 向量库 / MCP 接口 |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | ⭐ — / +537 today | 自动移除语言模型内置审查限制（uncensoring）的工具，引发伦理与开源边界争议 |
| [Osmantic/ODS](https://github.com/Osmantic/ODS) | ⭐ — / +77 today | 将 PC/Mac/Linux 一键改造为本地 AI 服务器：推理 + 聊天 + 语音 + Agent + RAG + 图像生成全家桶 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐174,900 / — | 为 AI Agent 提供规模化网页抓取与结构化数据接口 |

---

## 🤖 AI 智能体 / 工作流

| 项目 | Stars（总量 / 今日） | 一句话说明 |
|---|---|---|
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | ⭐ — / **+2824 today** | 清华 MAIC 开源的多智能体交互课堂，一键开启沉浸式多 Agent 协作学习 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | ⭐ — / **+1980 today** | 165+ 经过验证的科学 Agent Skills + 100+ 科学数据库，让任意 Agent 化身"AI 科学家"，覆盖生物、化学、医药、药物发现 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | ⭐ — / **+1401 today** | 面向 Claude Code / Kiro / Cursor 的逆向与渗透测试技能路由包，AI 自动路由 + 按需自举工具链 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐ — / +512 today | Agent Harness 性能优化系统：技能 / 直觉 / 记忆 / 安全 / 研发流程一体化框架 |
| [handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill) | ⭐ — / +571 today | 中国专利交底书 Skill：AI 自动挖掘专利点 + 生成发明 / 实用新型 / 外观文档 + 辅助答复审查 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | ⭐ — / +3991 today | Agent 专用架构图 / 流程图 / 时序图 / 数据流图生成 Skill，自包含 HTML + 动效 + 高清导出 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐47,584 / — | 极轻量自托管个人 AI Agent 框架，内置 WebUI、工具、记忆、MCP、多 Agent 编排 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐37,135 / — | Agent 前端全家桶（React / Angular / Mobile / Slack），AG-UI 协议制定者 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | ⭐34,743 / — | 一键部署的个人 AI 助手，支持多聊天 App + 可扩展技能系统 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐111,875 / — | 让网站对 AI Agent 可访问，浏览器自动化的事实标准 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐75,770 / — | "Bash is all you need"，从零到一构建 nano Claude Code 风格的 Agent Harness |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐239,070 / — | 自我成长的 Agent："与你共成长"的开放 Agent 框架 |

---

## 📦 AI 应用

| 项目 | Stars（总量 / 今日） | 一句话说明 |
|---|---|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐150,532 / — | 最流行的本地 LLM 聊天 UI，原生支持 Ollama / OpenAI API |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐51,316 / — | AI 生产力工作室：智能对话 + 自主 Agent + 300+ 助手，统一访问前沿 LLM |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐65,444 / — | 本地优先的全栈 Agent 体验：私有 RAG + 多模型支持 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐119,099 / — | 利用 LLM + 自动化工作流一键生成高清短视频 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐154,037 / — | Agent 工作流 + RAG 管线协作平台，云 / 私有化部署灵活切换 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | ⭐32,471 / — | 24/7 协作型 Cowork App，统一调度 20+ CLI Agent |
| [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | ⭐40,884 / — | Rust 编写的开源终端编程 Agent |
| [pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl) | ⭐ — / +385 today | 基于 mjlab 的微型机器人 RL 训练环境 |

---

## 🧠 大模型 / 训练

| 项目 | Stars（总量 / 今日） | 一句话说明 |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐56,268 / +495 today | 2 小时从零训练 64M 参数 LLM，教育性极强的小型训练项目典范 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐75,372 / — | 本地训练 LLM / 扩散模型的 UI + 加速库，支持 GGUF / MLX / 多硬件 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,681 / — | Agent Reinforcement Trainer：基于 GRPO 的多步骤 Agent 真实任务强化学习 |
| [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | ⭐17,936 / — | 微软开源的 Agent 训练框架，让任意 Agent 具备持续学习能力 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐198,098 / — | 老牌深度学习框架 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐164,674 / — | 文本 / 视觉 / 音频 / 多模态模型定义与训练的事实标准 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐102,695 / — | GPU 加速的动态图深度学习框架 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐61,136 / — | YOLO26 / YOLO11 / YOLOv8 目标检测 / 分割 / 分类全家桶 |

---

## 🔍 RAG / 知识库

| 项目 | Stars（总量 / 今日） | 一句话说明 |
|---|---|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐145,377 / — | LLM 应用编排平台的事实标准，向 Agent 工程平台演进 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | ⭐40,807 / — | 基于图的可恢复 Agent / 工作流编排框架 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐89,769 / — | 领先的开源 RAG 引擎，融合 RAG + Agent 能力 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐51,947 / — | 文档 Agent 与 OCR 平台领头羊 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,911 / — | 云原生高性能向量数据库 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐34,303 / — | 大规模高性能向量搜索引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐64,461 / — | AI Agent 通用记忆层 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,463 / — | 无向量、基于推理的 RAG 文档索引（Vectorless RAG） |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,877 / — | MLsys2026 Best Paper，97% 存储节省的个人设备 RAG |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐15,551 / — | 阿里开源的轻量级进程内向量数据库 |

---

## 📈 趋势信号分析

今日 Trending 榜单最强烈的趋势是 Agent 工具链从"通用编排框架"（LangChain / AutoGPT 时代）向 **"垂直领域 Skill Pack"** 迁移。K-Dense-AI 的 Scientific Agent Skills（+1980）、zhaoxuya520 的 Reverse Skill（+1401）、tt-a1i 的 Archify（+3991）、handsomestWei 的 Patent Skill（+571）几乎都遵循同一模式：**为 Claude Code / Cursor / Codex 等宿主 Agent 提供一个独立的、可插拔的领域技能包**，通过统一的 SKILL.md 描述文件声明能力边界。这是 MCP（Model Context Protocol）之后，Agent 生态又一标准化信号——Skill 正在成为继 Tool、Prompt、MCP 之后的新原子化单位。

其次，**LLM 从零训练**继续维持热度：MiniMind 以 2 小时训练 64M LLM 的极简范式成为中文 AI 教学类项目标杆，呼应了社区对"模型不再神秘"的认知平权诉求。多智能体协作（OpenMAIC）与具身智能基础设施（microduck_rl）则代表了 Agent 在教育与机器人两条赛道继续落地。

整体看，今日热榜与近期的 **MCP / Agent Harness 标准化进程**高度共振——Anthropic、OpenAI 等厂商推动的 Agent 协议层正在让"个人开发者贡献 Skill"成为新范式，类似于移动时代的"小程序"生态。

---

## 🎯 社区关注热点

- 🧪 **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)**（+1980 today）— "让 Agent 成为 AI 科学家"，Skill 范式的标杆项目，反映科研 + AI 交叉的爆发需求
- 🎨 **[tt-a1i/archify](https://github.com/tt-a1i/archify)**（+3991 today）— 今日涨幅冠军，Agent 绘图 Skill 的代表作，预示 Skill 市场向"高频办公场景"扩散
- 🔁 **[affaan-m/ECC](https://github.com/affaan-m/ECC)**（+512 today）— Agent Harness 性能优化框架，聚焦上下文、记忆、安全瓶颈，是工程化 Agent 的关键基础设施
- 🧠 **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)**（+495 today）— 极简 LLM 训练教学，适合每个想理解模型本质的开发者
- 🛡 **[p-e-w/heretic](https://github.com/p-e-w/heretic)**（+537 today）— 自动解除 LLM 审查工具，引发模型安全与开源边界讨论，值得关注但需谨慎使用

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*