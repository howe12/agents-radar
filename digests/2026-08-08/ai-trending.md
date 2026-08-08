# AI 开源趋势日报 2026-08-08

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-08 01:07 UTC

---

# 📊 AI 开源趋势日报 · 2026-08-08

---

## 1. 今日速览

今日 GitHub Trending 榜单几乎被 **"Agent Skills"** 主题霸屏——PrimeIntellect、Cloudflare、Google、Matt Pocock、Addy Osmani 等机构与个人同时推出围绕"技能/工作流"展开的 Agent 工具，标志 AI Agent 生态从"模型驱动"向"技能驱动"范式转变。RAG/向量检索与具身智能（Embodied AI）继续保持高活跃度，国内开源项目（Zvec、Embodied-AI-Guide、PhyAgentOS 等）持续走强。本日非 AI 项目（authentik、mise、guava、witr、celld 等）已全部略去。

---

## 2. 各维度热门项目

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | 0 | **+2,293** | 面向编码工作流的自我进化 RLM Agent，主打长时自治任务 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 0 | **+2,152** | 知名工程师的 .agents 目录开源，工程师级 Agent Skills 模板 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 0 | **+1,131** | Google Chrome 团队负责人出品，生产级 AI 编码 Agent 技能集 |
| [cloudflare/computer](https://github.com/cloudflare/computer) | 0 | **+872** | 为 Agent 提供云端"虚拟计算机"基础设施 |
| [obra/superpowers](https://github.com/obra/superpowers) | 0 | **+782** | Agentic Skills 框架 + 软件开发方法论 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐186k | +355 | 经典自主 Agent 标杆项目持续活跃 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐227k | — | 与用户共同成长的 Agent（topic:llm） |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐238k | — | Claude Code/Codex 全栈 Agent Harness 性能优化系统 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐90k | — | 跨会话持久化记忆层，兼容 Claude Code、Codex、Gemini 等 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) / [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | ⭐98k/96k | — | 通过"懒惰/极简"风格 prompt 将 Agent Token 削减 65% |

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐151k | Agentic 工作流 + RAG 一体化协作平台 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐143k | 事实标准的 Agent 工程平台 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | ⭐39k | 构建有状态、可恢复 Agent 的编排框架 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐51k | 文档 Agent 与 OCR 平台 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐178k | 本地多模型推理的事实标准（已支持 Kimi-K2.6、GLM-5.2 等） |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐31k | 高性能 LLM/多模态推理服务框架 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐65k | 在 Token 进 LLM 前压缩 20%-95% 的上下文 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8.2k | Rust 编写的模块化 LLM 应用框架 |

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐148k | — | 兼容 Ollama/OpenAI 的本地友好 AI 界面 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐162k | — | 为 AI 提供规模化网页搜索、爬取与交互的 Context API |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐108k | — | 让网站对 AI Agent 可访问，自动化操作 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐102k | — | 一键生成高清短视频的 AI 工作流 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐50k | — | 聚合 300+ 助手与多模型的生产力客户端 |
| [chenyme/grok2api](https://github.com/chenyme/grok2api) | 0 | **+55** | Grok 多账号 API 网关，绕开官方计费 |
| [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | 0 | **+141** | 简洁通用的群体智能引擎，用于万物预测 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐43k | — | 文档→原生 PowerPoint 的 AI 转换工具 |

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐163k | 文本/视觉/音频/多模态模型定义与训练框架 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐102k | 深度学习基础框架 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐196k | 老牌端到端 ML 平台 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐69k | 本地 UI 训练/运行 Kimi K3、Qwen3.6、DeepSeek-V4 等 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10k | 基于 GRPO 的多步 Agent 强化学习训练器 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐54k | 2 小时从零训练 64M 参数 LLM |
| [NVlabs/Sana](https://github.com/NVlabs/Sana) | ⭐8.7k | 高分辨率图像合成的高效线性 DiT |

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45k | 云原生向量数据库标杆 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐87k | RAG + Agent 一体的开源引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐62k | AI Agent 的通用记忆层 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33k | 高性能大规模向量搜索引擎 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐104k | 代码库→可查询知识图谱（替代向量库方案） |
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐15k | 轻量、极速进程内向量数据库（阿里出品） |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35k | 无向量化、基于推理的 RAG 文档索引 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐29k | 自托管知识图谱驱动的 Agent 长期记忆 |

### 🦾 具身智能 / 机器人（高活跃板块，额外列出）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [TianxingChen/Embodied-AI-Guide](https://github.com/TianxingChen/Embodied-AI-Guide) | ⭐15k | 具身智能技术指南（中文社区核心资料） |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | ⭐4.4k | 面向具身与 Agentic AI 的强化学习基础设施 |
| [datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied) | ⭐3k | 从零构建 VLA/OpenVLA/SmolVLA/Pi0 的中文教程 |
| [PhyAgentOS-Dev/PhyAgentOS](https://github.com/PhyAgentOS-Dev/PhyAgentOS) | ⭐1.6k | 基于 Agentic 工作流的自演化具身 AI 操作系统 |
| [RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin) | ⭐2.7k | ICML 2026 收录的双臂机器人仿真基准 |
| [syswonder/robonix](https://github.com/syswonder/robonix) | ⭐313 | Rust 实现的具身 AI 操作系统（EAIOS） |

---

## 3. 趋势信号分析

**🎯 "Agent Skills" 成为今日最强叙事。** 今日 Trending 前 6 名中有 5 个直接围绕 Agent Skills 概念展开（prime-agent、agent-skills、skills、superpowers、skills），合计贡献超 7,000 颗日增 Star。这并非偶然——它反映了社区共识正在从"用什么模型"转移到"给模型什么技能/工具"：模型能力趋同后，决定 Agent 表现的是可复用、可分发、可组合的 Skills 库与 Harness 框架。Cloudflare "computer" 与 PrimeIntellect "RLM" 的同步亮相则暗示**基础设施层正在被重新分层**——Cloudflare 切入沙箱执行环境，PrimeIntellect 押注递归语言模型作为 Agent 推理引擎。

**🚀 "轻量级 Rust / Shell 系 Agent 工具"首次大规模涌现。** robonix（Rust EAIOS）、rig（Rust LLM 框架）、Copper（Rust 机器人 OS）连续登榜，显示**性能敏感型 AI 基础设施正从 Python 一统天下转向多语言共存**，尤其是具身智能与高频推理场景。

**🔗 与近期大模型/行业事件关联：** 榜单中 ollama 已支持 Kimi-K2.6、GLM-5.2、DeepSeek-V4 等国产前沿模型，unsloth 同步更新训练支持，表明 8 月初国内大模型新一轮迭代直接拉动了推理/训练工具链热度；grok2api 的上榜则反映 Grok 系列模型在开发者群体中的实际渗透。

---

## 4. 社区关注热点

- 🏆 **[PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent)**：单日 +2,293 Star，自进化 RLM Agent 范式值得关注，可能定义下一阶段 Agent 架构标准。
- ⚡ **[mattpocock/skills](https://github.com/mattpocock/skills) + [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)**：两个高质量 Skills 仓库同日爆发，是学习 Agent 工程化最佳实践的"教科书级"入口。
- 💾 **[mem0ai/mem0](https://github.com/mem0ai/mem0) / [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)**：跨会话记忆层成为 Agent 落地的关键瓶颈，相关项目值得架构师优先评估。
- 🧠 **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**：用确定性 AST + 知识图谱替代向量检索，可能颠覆传统 RAG 实现路径。
- 🤖 **[RLinf/RLinf](https://github.com/RLinf/RLinf) + [PhyAgentOS-Dev/PhyAgentOS](https://github.com/PhyAgentOS-Dev/PhyAgentOS)**：具身智能 RL 基础设施与自演化 OS 双双登榜，反映 VLA/Embodied 正在从研究走向工程化。

---

*报告生成时间：2026-08-08 ｜ 数据源：GitHub Trending + Topic Search API*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*