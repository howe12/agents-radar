# AI 开源趋势日报 2026-07-08

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-08 06:22 UTC

---

# 📊 AI 开源趋势日报 · 2026-07-08

---

## 一、今日速览

今日 GitHub Trending 几乎被 AI 项目"屠榜"——13 个热门仓库中 12 个与 AI 直接相关，其中 **6 个围绕 Claude Code / AI Agent 工具链**展开，标志着 **Coding Agent 生态从单一模型走向"技能(Skills) + CLI + 运行容器"的完整外围栈**。本地化、隐私优先的 AI 应用持续爆发：`meetily`（+1777 stars）以纯本地会议助手登顶，`RuView`（+1129）用 WiFi 信号做空间感知，体现 **"反云端、重边缘"的工程范式回归**。此外，`system_prompts_leaks` 一次性泄露 Claude Fable 5 / Opus 4.8 / Gemini 3.5 Flash 等前沿模型系统提示，反映社区对新版本大模型的强烈兴趣。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理 / CLI）

| 项目 | Stars | 一句话 |
|---|---|---|
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐85,657 | 高吞吐 LLM 推理与 serving 引擎，事实上的开源推理标准 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐30,064 | 高性能多模态 LLM serving 框架，针对结构化生成优化 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐48,293 | 统一接入多家前沿 LLM 的桌面 AI 工作台，含 300+ 助手 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | ⭐0 (+376 today) | 今日新星：无需登录即可查看 OpenAI Codex & Claude Code 用量统计的 macOS 菜单栏工具 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | ⭐29,861 | "runs anywhere. uses anything"——跨平台 Claude Code 运行时 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐26,367 | DeepSeek 原生 AI 终端编码 Agent，专为 prefix-cache 稳定性设计 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | ⭐26,261 | 把任意网站"包"成 CLI，复用登录态浏览器供 AI Agent 调用 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | ⭐29,490 | 7×24 本地 Cowork 客户端，同时调度 Claude Code / Codex / Hermes 等 20+ CLI |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话 |
|---|---|---|
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | ⭐0 (+2514 today) | 🔥 **今日榜首**：基于 Claude Code 的求职框架，Fork 后自动评估岗位、定制简历与面试准备 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐0 (+1317 today) | 🔥 Google 团队出品，生产级 AI Coding Agent 工程技能库 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐211,151 | "和你一起成长的 Agent"——Nous Research 开源通用代理核心 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐79,912 | 老牌 AI-Driven 全自动开发平台 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐91,714 | 多 Agent LLM 金融交易框架，量化研究新范式 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐52,842 | 让 AI Agent 读取 Twitter / Reddit / YouTube / 小红书等全网信息，零 API 费用 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐57,637 | Agent 工具上下文压缩器，减少 60–95% token 消耗 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐45,115 | 港大数据团队开源的轻量级 AI Agent 框架 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐45,861 | 自主演进的开源超级 Agent（原 chatgpt-on-wechat） |

### 📦 AI 应用（垂直场景）

| 项目 | Stars | 一句话 |
|---|---|---|
| [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) | ⭐0 (+1777 today) | 🔥 Rust 写的隐私优先 AI 会议助手，Parakeet/Whisper 本地转写 + Ollama 摘要，号称 macOS/Windows 上最强自托管方案 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | ⭐0 (+1129 today) | 🔥 **不需要摄像头**：用 WiFi 信号实现人体感知、姿态估计与生命体征监测 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | ⭐0 (+893 today) | 🔥 首个专为 AI Agent 操作 Word/Excel/PPT 而生的 Office CLI，单二进制、零依赖 |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | ⭐0 (+965 today) | 给 Claude "装上眼睛"：自动下载视频、抽帧、转写后送入 Claude 推理 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐55,657 | LLM 驱动的多市场股票分析系统，含自动推送与定时运行 |
| [huangjunsen0406/py-xiaozhi](https://github.com/huangjunsen0406/py-xiaozhi) | ⭐3,392 | 含 MCP、多模态、IoT 的开源 AI 语音助手生态 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐70,291 | 面向分析师、量化与 AI Agent 的开放金融数据平台 |

### 🧠 大模型 / 训练 / 推理引擎

| 项目 | Stars | 一句话 |
|---|---|---|
| [kyutai-labs/pocket-tts](https://github.com/kyutai-labs/pocket-tts) | ⭐0 (+531 today) | 🔥 Kyutai 出品，"装得进口袋"的 CPU 端 TTS 模型 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐67,903 | 本地训练与运行 Gemma 4 / Qwen3.6 / DeepSeek / GPT-OSS 的 Web UI |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,346 | Agent Reinforcement Trainer，用 GRPO 让 Agent 在真实任务中边训边学 |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | ⭐9,759 | 基于 Ray 的高可扩展 Agentic RL 框架，支持 PPO/DAPO/REINFORCE++ |
| [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox) | ⭐0 (+664 today) | 🔥 面向 AI Agent 的轻量、高并发、强隔离安全沙箱 |
| [NVlabs/Sana](https://github.com/NVlabs/Sana) | ⭐8,449 | 英伟达出品，用线性 Diffusion Transformer 做高分辨率图像生成 |
| [Isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | ⭐7,630 | 基于 Isaac Sim 的统一机器人学习框架 |

### 🔍 RAG / 知识库 / 向量检索

| 项目 | Stars | 一句话 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐84,553 | RAG + Agent 双引擎，主打开源最完整的企业级上下文层 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐148,111 | 生产级 Agentic 工作流编排平台，国产开源 LLMOps 标杆 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐144,651 | 最受欢迎的自托管 LLM 前端，原生兼容 Ollama / OpenAI API |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐141,264 | Agent 工程化事实标准 SDK |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐60,348 | AI Agent 通用记忆层，跨会话持久化偏好与上下文 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐27,323 | 用知识图谱为 Agent 构建长期记忆，开源版"AI 海马体" |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,132 | 云原生向量数据库，主打亿级 ANN 检索 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,022 | Rust 写的下一代高性能向量检索引擎 |

> 同时登榜的还有 [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)（+1691 today）——收录了 Claude Fable 5、Opus 4.8、Gemini 3.5 Flash、GPT 5.5、Codex、Grok 等前沿模型系统提示，对 Prompt Engineering 研究极具价值。

---

## 三、趋势信号分析

**1️⃣ Coding Agent 生态进入"外围栈"爆发期。** 今日 Trending 中 `agent-skills`（+1317）、`dotnet/skills`（+64）、`awesome-claude-code`（+144）、`CodexBar`（+376）、`deepclaude` 与多个 CLI Wrapper 同时登榜，说明社区焦点已从"哪个 Agent 最强"转移到 **"如何让 Agent 接入更多工具与企业栈"**——Skills、CLI、Sandbox 三件套开始标准化。腾讯 `CubeSandbox`（+664）切入"Agent 安全沙箱"这一空白赛道，呼应企业对 Agent 可控执行的迫切需求。

**2️⃣ "反云端"本地 AI 形成稳定产品线。** `meetily` 强调"100% 本地处理"，`RuView` 用 WiFi 信号绕开摄像头做感知，`pocket-tts` 把 TTS 塞进 CPU——三者共同体现 **"不依赖云、不采集视频、硬件极简"** 的边缘 AI 趋势，与年初以来 Apple Intelligence / Privacy-first LLM 的行业方向一脉相承。

**3️⃣ 新一代模型版本号暗藏行业事件。** `system_prompts_leaks` 的版本号迭代（Claude Opus 4.8、Gemini 3.5 Flash、GPT 5.5、Antigravity）显示 Anthropic、Google、OpenAI 近期均有重大模型发布；Kyutai Labs 的 `pocket-tts` 与 Nous Research 的 `hermes-agent` 各自巩固欧洲系开源地位的意图明显。

---

## 四、社区关注热点

- 🔥 **[MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search)**（+2514 today）——Agent 应用范式的"小白入门级"案例，Fork 即用，最能体现 AI Coding Agent 的实际生产力价值。
- 🔥 **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)**（+1317 today）——Google 工程团队出品，是打造企业内部 Agent 的优质"技能模板"起点。
- 🔥 **[Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily)**（+1777 today）——纯本地 Rust 会议助手，企业合规场景刚需，建议关注 Parakeet 转写 + Ollama 摘要的技术组合。
- 🔥 **[ruvnet/RuView](https://github.com/ruvnet/RuView)**（+1129 today）——用 WiFi CSI 做感知，开创了 **"无摄像头人体感知"** 的全新应用空间，值得硬件与 IoT 开发者深入研究。
- 🔥 **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)**（+893 today）——当"Agent 操作 Office"成为标配，Office 自动化赛道将被彻底重写，是 B 端 SaaS 开发者不可忽视的信号。

---

*📌 数据口径：Trending 榜单为 GitHub 当日实时榜；主题搜索为近 7 天活跃项目，已去除纯机器人、游戏、ROS 驱动等非 AI 核心方向（部分嵌入式/具身智能项目因明确服务于 AI 模型训练保留展示）。*