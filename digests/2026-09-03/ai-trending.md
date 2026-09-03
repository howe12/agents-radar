# AI 开源趋势日报 2026-09-03

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-03 02:31 UTC

---

# AI 开源趋势日报 · 2026-09-03

---

## 一、今日速览

今日 GitHub Trending 榜单明显被 **AI Agent 生态**主导，单日新增千星级别的项目中，`DietrichGebert/ponytail`（+1354）、`mattpocock/skills`（+1166）、`pacifio/atlas`（+888）等围绕 Coding Agent 的 Skills / Harness / 版本控制工具悉数登顶。与此同时，`google-research/timesfm`（+343）作为时间序列基础模型代表持续受到产业关注，`debpalash/VoiceStudio`（+832）则代表了"全本地化语音克隆"的进一步平民化。整体来看，**Agent Skills 化、推理基础设施垂直化、垂直应用本地化**是今日最清晰的三个信号。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 亮点 |
|---|---|---|
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | +148 today | Google 官方把 Chrome DevTools 包装为 MCP，让 Coding Agent 可调用浏览器调试能力 |
| [superlinked/sie](https://github.com/superlinked/sie) | +60 today | 面向 Agent 的统一推理服务器 + 生产集群，一处调度多模型 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | +775 today | "runs anywhere, uses anything"——Claude Code 的多后端兼容层 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐33.5k | 高性能 LLM/多模态推理服务框架，与 vLLM 并列的主力引擎 |
| [kvcache-ai/Mooncake](https://github.com/kvcache-ai/Mooncake) | ⭐6.4k | Moonshot Kimi 的 KV-cache 分离推理架构，已成业内参考实现 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐180k | 本地模型运行的事实标准，支持 Kimi-K2.6 / GLM-5.2 / DeepSeek / gpt-oss |
| [ray-project/ray](https://github.com/ray-project/ray) | ⭐43.7k | 分布式 AI 计算引擎，训练/推理/RL 一体化 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8.5k | Rust 生态下少见的生产级 LLM 应用框架 |

### 🤖 AI 智能体 / 工作流（Agent 框架、Skills、Harness）

| 项目 | Stars | 亮点 |
|---|---|---|
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | +1354 today | **今日全榜 Stars 第一**——以"懒人哲学"驱动 AI Agent 写更少代码 |
| [mattpocook/skills](https://github.com/mattpocock/skills) | +1166 today | TypeScript/JS 大佬 mattpocock 开源自家 `.agents` 目录，Skills 范式标杆 |
| [pacifio/atlas](https://github.com/pacifio/atlas) | +888 today | 面向多 Coding Agent 的"源码控制"，可同时调度 Claude Code / Codex 等 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | +799 today | 学术研究全流程 Skills：检索→写作→评审→修订→终稿 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | +516 today | Agent Harness 性能优化系统，强调"研究优先"的开发范式 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | +533 today | Nous Research 的持续学习 Agent，强调随用户共同成长 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | +238 today | "少 token 多办事"——Claude Code Token 压缩 65% |
| [blader/humanizer](https://github.com/blader/humanizer) | +374 today | 去除 AI 生成文本痕迹的 Agent Skill，反"AI 味"刚需 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | ⭐40.9k | 构建有状态、可恢复 Agent 的标准框架 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐47.7k | 超轻量级自托管 Personal Agent 框架 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐37.2k | Agent 前端栈与 AG-UI 协议 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐35.3k | DeepSeek 原生 Coding Agent，围绕 prefix-cache 稳定性设计 |

### 📦 AI 应用（具体产品、垂直场景）

| 项目 | Stars | 亮点 |
|---|---|---|
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | +832 today | **全本地 ElevenLabs 替代品**：支持 646 语言、克隆/设计/翻译/有声书一站完成 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐119.9k | 关键词一键生成高清短视频，AI 短视频流水线的明星项目 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐154.3k | Agent 工作流 + RAG 编排平台，LLM 应用层第一梯队 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐150.7k | 最流行的本地/私有化 LLM 聊天前端 |
| [browser-use/browser

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*