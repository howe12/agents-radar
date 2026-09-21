# AI 开源趋势日报 2026-09-21

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-21 02:48 UTC

---

# 📊 AI 开源趋势日报 · 2026-09-21

---

## 一、今日速览

今日 GitHub Trending 几乎被 **AI Agent 基础设施** 占领——围绕 Claude Code、Codex、Cursor 的 "skill / harness / memory / security" 工具呈现集中爆发，`cloudflare/security-audit-skill` 单日狂揽 **+2,428 stars** 成为现象级项目。与此同时，**Computer-Use 2.0**（`trycua/cua`，+1,018）、**生成式 UI**（`vercel-labs/json-render`，+291）、**万亿参数 GPU 编排**（`higgsfield-ai/higgsfield`，+465）三个新方向首次在同日 Trending 同台亮相，标志着 Agent 生态正从「能跑」走向「可信、可审计、可视化」。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理 / CLI）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐ 146,753 | 主流 Agent 工程化平台，生态最广 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 181,333 | 本地 LLM 一键运行，覆盖 Kimi/Qwen/DeepSeek/MiniMax 等主流模型 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐ 36,222 | 高性能 LLM/VLM 推理服务框架，vLLM 替代方案 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐ 166,453 | 最通用的多模态模型定义与训练框架 |
| [ray-project/ray](https://github.com/ray-project/ray) | ⭐ 43,880 | AI 分布式计算引擎，RL/训练/服务全栈 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐ 76,511 | 本地微调/运行 LLM 与 Diffusion 模型，内存优化显著 |
| [vercel-labs/json-render](https://github.com/vercel-labs/json-render) | ⭐ +291 today | "Generative UI" 框架，让 LLM 直接产出可渲染 UI，今日首次登榜 |
| [coder/coder](https://github.com/coder/coder) | ⭐ +379 today | 为开发者与 AI Agent 提供安全的云端开发环境 |

---

### 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 一句话说明 |
| --- | --- | --- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐ +826 today | Claude Code / Codex / Cursor 的 "Agent Harness" 性能优化系统，今日热门第一 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | ⭐ +2,428 today | Cloudflare 出品的 Coding Agent 安全审计 Skill，可机器验证，今日爆款 |
| [trycua/cua](https://github.com/trycua/cua) | ⭐ +1,018 today | "Computer-Use 2.0" 开源驱动 + 跨 OS 集群 + 评测基准 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐ +936 today | Google 工程负责人出品，生产级 AI 编程 Agent 技能集 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | ⭐ +419 today | Anthropic 官方终端 Agentic 编程工具，自然语言驱动开发 |
| [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) | ⭐ +98 today | 构建 Agentic 应用的 TypeScript 框架 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐ 247,506 | "与你共同成长的 Agent"，长期高 Star 仓库 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐ 115,575 | 浏览器自动化 Agent，最成熟的 GUI Agent 之一 |
| [Microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | ⭐ 18,410 | 微软出品，"点亮 Agent" 的训练框架 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐ 37,435 | Agent 前端栈与 AG-UI 协议 |

---

### 📦 AI 应用（垂直场景解决方案）

| 项目 | Stars | 一句话说明 |
| --- | --- | --- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐ 124,873 | 一键生成高清短视频，AI 短视频工厂标杆 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐ 55,582 | 文档/主题一键生成原生 PowerPoint，含图表动画与音频 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐ 89,901 | 100+ 语言 OCR，图像/PDF → 结构化数据喂给 LLM |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | ⭐ +260 today | Anthropic 官方金融行业 Agent 应用示例 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐ 65,384 | LLM 驱动的多市场股票分析系统，支持定时零成本运行 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐ 73,315 | 面向分析师/量化/AI Agent 的开源金融数据平台 |
| [microsoft/qlib](https://github.com/microsoft/qlib) | ⭐ 48,694 | AI 量化投研平台，集成 RD-Agent 自动化研究流程 |
| [higgsfield-ai/higgsfield](https://github.com/higgsfield-ai/higgsfield) | ⭐ +465 today | 容

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*