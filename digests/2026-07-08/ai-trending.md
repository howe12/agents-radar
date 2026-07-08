# AI 开源趋势日报 2026-07-08

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-08 05:43 UTC

---

# 🚀 AI 开源趋势日报 · 2026-07-08

> 数据来源：GitHub Trending 实时榜单（13 仓）+ GitHub 主题搜索（147 仓，已去重）。本期 Trending 中 **12/13 为 AI 相关项目**，AI 渗透率创近期新高。

---

## 一、今日速览

1. **Agent "技能"生态爆发**：addyosmani/agent-skills、dotnet/skills、awesome-claude-code 同步登榜，"Skills/插件作为 Agent 增强方式"正在成为新的社区共识范式。
2. **Agent 工具链向 Office / 视频 / 沙箱延伸**：OfficeCLI（Office 自动化）、claude-video（视频理解）、TencentCloud/CubeSandbox（安全沙箱）三件套同时上榜，标志 Agent 正在从"能聊"走向"能用"。
3. **本地化与轻量化依然强势**：Meetily（4× 实时转录的本地会议助手）与 kyutai-labs/pocket-tts（CPU 级 TTS）持续引爆，证明端侧 AI 仍是开发者最关注的实战方向之一。
4. **System Prompts 泄露成为新型"民间文档"**：asgeirtj/system_prompts_leaks 收录 Claude、GPT、Gemini、Grok、Cursor 等系统提示，单日 +1691 stars，反映开发者对厂商 prompt 工程的好奇与逆向需求。
5. **"AI 求职"工具首次单日爆榜**：ai-job-search 以 **+2514 stars** 登顶，可能与近期就业市场波动及 Anthropic Claude Code 的持续热度相关。

---

## 二、各维度热门项目

### 🤖 AI 智能体 / 工作流（今日最热）

| 项目 | 数据 | 说明 |
|---|---|---|
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | ⭐ 0 (+2514 today) | 基于 Claude Code 的求职自动化框架：JD 评估、CV 定制、面试准备一站式，**今日 Trending 冠军** |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | ⭐ 0 (+965 today) | 给 Claude"看视频"的能力：自动下载、抽帧、转录、上下文打包 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | ⭐ 0 (+893 today) | **首个专为 Agent 设计的 Office CLI**，单二进制、无需安装 Office，让 Agent 直接读写 Word/Excel/PPT |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐ 211,123 | "与用户共同成长的 Agent"，主题榜 LLM 类别头部 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐ 185,432 | 老牌 Agent 框架持续高活跃，生态常青 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐ 227,146 | Agent Harness 性能优化系统：技能、本能、记忆、安全一体化 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐ 103,390 | 让网站对 Agent 可访问，浏览器自动化标杆 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐ 91,708 | 多 Agent LLM 金融交易框架，垂直 Agent 典范 |

---

### 🔧 AI 基础工具（框架 / SDK / CLI）

| 项目 | 数据 | 说明 |
|---|---|---|
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐ 0 (+1317 today) | Google Chrome 团队出品：面向 AI 编程 Agent 的**生产级工程技能集**，今日最值得关注的"Skills 范式"代表 |
| [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox) | ⭐ 0 (+664 today) | 腾讯云出品："**Agent 专用沙箱**"——即时、并发、安全、轻量，是为 Agent 时代补上的一环 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | ⭐ 0 (+376 today) | macOS 状态栏监控 OpenAI Codex / Claude Code 用量，开发者刚需工具 |
| [dotnet/skills](https://github.com/dotnet/skills) | ⭐ 0 (+64 today) | Microsoft 官方为 .NET/C# 添加的 Agent 技能，**官方下场=生态成熟标志** |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐ 85,655 | 高吞吐 LLM 推理引擎事实标准 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐ 30,063 | 与 vLLM 并列的高性能 LLM/多模态服务框架 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 175,688 | 本地模型运行标杆，社区热度不减 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐ 148,108 | Agentic workflow 生产级平台 |

---

### 📦 AI 应用（垂直场景）

| 项目 | 数据 | 说明 |
|---|---|---|
| [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) | ⭐ 0 (+1777 today) | 隐私优先的本地 AI 会议助手：Parakeet/Whisper + Ollama + 说话人分离，**100% 本地处理** |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | ⭐ 0 (+1691 today) | 收录 Claude 5/Opus 4.8、GPT 5.5、Gemini 3.5、Grok、Cursor 等厂商系统提示 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | ⭐ 0 (+1129 today) | 把 WiFi 信号转成"空间智能"与生命体征监测——**无摄像头感知** |
| [kyutai-labs/pocket-tts](https://github.com/kyutai-labs/pocket-tts) | ⭐ 0 (+531 today) | Moshi 团队新作：CPU 上可跑的 TTS，端侧语音里程碑 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐ 37,560 | 文档→可编辑 PPT（含原生图表 + 语音旁白） |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐ 52,824 | 一个 CLI 让 Agent 读遍 Twitter/Reddit/B站/小红书，零 API 费用 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐ 55,640 | LLM 驱动的多市场股票分析系统，中文社区代表作 |

---

### 🧠 大模型 / 训练 / 微调

| 项目 | 数据 | 说明 |
|---|---|---|
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐ 67,902 | Unsloth Studio 推出 web UI，**Qwen3.6、DeepSeek、gpt-oss 本地训练/推理一体化** |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | ⭐ 6,032 | "原子化构建 AI Agent"框架，低层可组合设计 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐ 59,232 | YOLO26/YOLO11 持续维护，视觉侧常青 |
| [NVlabs/Sana](https://github.com/NVlabs/Sana) | ⭐ 8,449 | 高分辨率线性 DiT 图像生成模型 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐ 162,361 | 多模态模型定义框架，事实标准 |

---

### 🔍 RAG / 知识库 / 向量检索

| 项目 | 数据 | 说明 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐ 84,551 | RAG + Agent 一体化引擎，国产 RAG 标杆 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐ 86,364 | Agent 跨会话持久记忆：捕获→压缩→注入 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐ 79,722 | **把任意目录转成可查询知识图谱**，Agent 时代"外脑" |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 60,345 | Agent 通用记忆层 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐ 57,628 | 工具输出 / 日志 / RAG 块压缩 60–95%，**降 token 利器** |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐ 62,841 | 本地优先的全栈 Agent 体验 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐ 50,720 | 文档 Agent 与 OCR 平台 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐ 45,131 | 云原生向量数据库标杆 |

---

## 三、趋势信号分析

今日 Trending 清晰地折射出 **"Agent 生产化"** 这条主线。与 2024–2025 年 Agent 元年的"概念验证"阶段不同，本期热榜几乎全是**工程化、补全工具链、完善开发者体验**的项目：

- **AI Coding Agent 的"应用层扩展"** 成为热点方向：给 Agent 加上 Office（OfficeCLI）、视频（claude-video）、用量监控（CodexBar）、沙箱（CubeSandbox）、Skills（agent-skills/dotnet/skills/awesome-claude-code）的"五件套"全部一日内登榜。这意味着开发者社区已经默认"LLM 是新的操作系统"，正在围绕它构建 **Plug-in/Harness/Skills 生态**——与当年围绕浏览器建立扩展生态如出一辙。

- **WiFi 感知（RuView）和 CPU TTS（pocket-tts）的同步爆发** 则代表 **"去视觉化、本地化"** 的暗线：在隐私与硬件成本约束下，无摄像头人体感知与端侧语音合成成为新热点，预期将催生一批医疗、养老、车载场景的开源项目。

- **System Prompts 泄露合集 +1691 stars** 说明开发者对前沿大模型 prompt 工程的学习需求强烈，但同时也带来**版权与合规风险**，长期看会推动"厂商官方 Skills / Tools 规范"的进一步标准化。

- 与近期行业事件的潜在关联：Anthropic Claude Code 持续迭代 + Claude 5/Opus 4.8 生态扩展 + 各类 Skills 框架相继开源——共同推动了"让 Agent 真正能干活"这一波开发者高潮。

---

## 四、社区关注热点（开发者重点 follow）

- 🛰️ **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** (+1317 today)：由 Google Chrome 团队出品，预示 **Skills/MCP 范式** 将成为 Agent 时代的事实标准，建议立即研究其目录结构和 skill 编写规范。
- 🛠️ **[TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox)** (+664 today)：Agent 安全的"最后一公里"——为 Agent 提供 OS 级隔离，企业级落地绕不开。
- 🎬 **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)** (+965 today)：把视频理解塞进 Claude CLI 的轻量方案，多模态 Agent 的样板工程，值得学习其 pipeline 设计。
- 📚 **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** (+1691 today)：研究各家大模型 prompt 工程思路的"民间教科书"，**但请注意合规风险**。
- 🧠 **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** (⭐57,628)：工具输出压缩 60–95% 的方案，在 GPT/Claude 长上下文越来越贵的当下，**直接降低 5–10 倍推理成本**，企业级 RAG 必看。

---

*报告生成时间：2026-07-08 · 数据为当日 GitHub Trending + 主题搜索快照*