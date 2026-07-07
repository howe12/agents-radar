# AI 开源趋势日报 2026-07-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-07 03:56 UTC

---

好的，作为专注于 AI 开源生态的技术分析师，我根据您提供的 2026-07-07 数据，为您呈现今日的《AI 开源趋势日报》。

---

## AI 开源趋势日报 | 2026-07-07

### **第一步 & 第二步：AI 相关性过滤与分类**

**（一）Trending 榜单过滤结果：**
经筛选，16 个仓库中 **14 个** 与 AI/ML 明确相关，过滤掉 `sindresorhus/awesome`（通用列表） 和 `gastownhall/gastown`（通用多智能体工作区，缺少 AI 核心描述）。

**（二）分类结果：**

| 分类 | 项目列表 |
| :--- | :--- |
| **🔧 AI 基础工具** | `asgeirtj/system_prompts_leaks` (通用), `ogulcancelik/herdr`, `steipete/CodexBar`, `alibaba/zvec` |
| **🤖 AI 智能体/工作流** | `addyosmani/agent-skills`, `alirezarezvani/claude-skills`, `openai/codex-plugin-cc`, `mvanhorn/last30days-skill`, `bradautomates/claude-video` |
| **📦 AI 应用** | `Zackriya-Solutions/meetily`, `Leonxlnx/taste-skill`, `ruvnet/RuView`, `karakeep-app/karakeep`, `firecrawl/firecrawl` |
| **🧠 大模型/训练** | 今日 Trending 中暂无新项目上榜，但主题搜索中有大量相关项目。 |
| **🔍 RAG/知识库** | `karakeep-app/karakeep` (兼具), `alibaba/zvec` (向量数据库) |

*(注：主题搜索中的 147 个项目已根据标签和描述自动归类至对应维度，并在报告中引用。)*

---

### **第三步：趋势报告**

#### 1. 🗞️ 今日速览

今日 AI 开源社区的两大核心趋势是 **Agent 技能(Skills)生态的爆发** 和 **本地化 AI 工具的深化**。以 `addyosmani/agent-skills` 和 `alirezarezvani/claude-skills` 为代表，为 AI 代码助手（如 Claude Code, Codex）提供“专业技能”的项目获得了极高的关注度，这标志着 AI 编程正从“通用能力”向“领域专家”过渡。同时，`Zackriya-Solutions/meetily` 和 `ruvnet/RuView` 等项目展示了AI在会议记录、空间感知等场景下，**完全本地化、隐私优先**的处理能力，成为用户新宠。此外，`system_prompts_leaks` 项目揭示大模型 Prompt 策略的透明化需求，成为开发者研究的焦点。

#### 2. 📊 各维度热门项目

##### 🔧 AI 基础工具

- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** [⭐0 (+1378 today)]
  - 提取并泄露了来自 Anthropic、OpenAI、Google、xAI 等众多主流大模型的系统提示词（System Prompts）。这是理解大模型“底层指令”和“安全护栏”的一手资料，极具研究价值。
- **[ogulcancelik/herdr](https://github.com/ogulcancelik/herdr)** [⭐0 (+779 today)]
  - 一个终端内的“Agent 多路复用器”。允许你在同一终端会话中无缝切换和管理多个AI编码Agent（如 Claude Code, Codex），并让它们协同工作，是提升 AI 编程效率的新型基础设施。
- **[steipete/CodexBar](https://github.com/steipete/CodexBar)** [⭐0 (+598 today)]
  - 一个macOS菜单栏应用，用于轻松查看 OpenAI Codex 和 Claude Code 的使用配额和费用。解决了开发者对AI编码工具成本缺乏可视化的痛点。
- **[alibaba/zvec](https://github.com/alibaba/zvec)** [⭐0 (+382 today)] / [⭐13,588 total]
  - 阿里巴巴开源的轻量级、闪电般快速的进程内向量数据库。专为需要低延迟检索的AI应用设计，与小而专的本地应用场景完美契合。

##### 🤖 AI 智能体/工作流

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** [⭐0 (+1112 today)]
  - 一套为 AI 编码 Agent 设计的“生产级”工程技能合集。它封装了大型项目的最佳实践和专业知识，让 Agent 不再只会写“Hello World”，而是能处理复杂的工程任务。
- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** [⭐0 (+610 today)]
  - 一个包含 345+ Claude Code 技能、30+ Agent 和 70+ 自定义命令的巨大技能库。覆盖工程、营销、产品、合规等多个领域，是“AI 技能插件化”的集大成者。
- **[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)** [⭐0 (+906 today)]
  - 官方出品，让 Claude Code 能够调用 OpenAI Codex 来审查代码或委派任务。这是一个重要的生态融合信号，两大AI编码工具开始互联互通。
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** [⭐0 (+458 today)]
  - 一个能自动研究 Reddit、X、YouTube 等平台热门话题，并生成有深度摘要的 Agent 技能。是信息收集与洞察工具的有效补充。
- **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)** [⭐0 (+427 today)]
  - 赋予 Claude“看视频”的能力。通过下载、提取帧、转录音频，让多模态大模型实现对视频内容的深度理解和交互。
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [⭐91,424 total]
  - 多智能体金融交易框架。利用多个LLM代理模拟不同交易策略和角色，并进行协作与竞争，代表了AI在复杂金融决策场景的应用。

##### 📦 AI 应用

- **[Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily)** [⭐0 (+2494 today)]
  - 一款以隐私为核心的AI会议助手。基于Rust构建，100%本地处理，提供4倍速实时转录、说话人识别和本地大模型总结（Ollama）。是今日“私隐本地化”趋势的代表性项目。
- **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** [⭐0 (+1458 today)]
  - 一个有趣的应用：通过注入“品味”评论文本，引导AI生成更个性化、更有创意的内容，避免“千篇一律”。体现了AI应用从“工具化”向“人格化”演进的探索。
- **[ruvnet/RuView](https://github.com/ruvnet/RuView)** [⭐0 (+470 today)]
  - 利用WiFi信号进行空间感知、生命体征监测和存在检测。无需摄像头即可实现“隔墙探物”，是传感器与AI结合的创新应用。
- **[karakeep-app/karakeep](https://github.com/karakeep-app/karakeep)** [⭐0 (+199 today)]
  - 一款自托管的“书签一切”应用。利用AI进行自动标签和全文搜索，帮助用户管理链接、笔记和图片，是知识管理赛道的强力竞争者。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [⭐103,176 total]
  - 让AI Agent更容易地操控网页。提供API和工具，使自动化在线任务（如填写表单、获取数据）变得前所未有的简单。

##### 🧠 大模型/训练 & 🔍 RAG/知识库

- 这两类虽无新项目在Trending榜单爆发，但主题搜索中的成熟项目稳居头部，是生态的基石。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** [⭐162,321 total]: 永远是大模型生态的核心库。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [⭐144,481 total]: 用户友好的AI界面，支持Ollama和OpenAI API，本地部署首选。
- **[langgenius/dify](https://github.com/langgenius/dify)** [⭐147,954 total]: Agentic工作流开发的领先平台，生产级应用的首选。
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** [⭐45,105 total]: 高性能云原生向量数据库，RAG系统的关键基础设施。
- **[unslothai/unsloth](https://github.com/unslothai/unsloth)** [⭐67,866 total]: 微调大模型的高效工具，加速了模型定制化进程。

#### 3. 🔍 趋势信号分析

1.  **“Agent 技能 (Skills)” 品类爆发式增长：**
    `agent-skills` 和 `claude-skills` 的单日新增Stars均超过 600，前者更是破千。这标志着社区共识已从“开发一个通用Agent”转向“为其配备**专业领域知识**”。技能插件化、市场化的生态雏形初现，预示着未来AI编码Agent之间的竞争将转向其背后“技能商店”的丰富程度。

2.  **AI 编程工具的“多元化与融合”：**
    `herdr`（Agent多路复用器）和 `codex-plugin-cc`（Claude Code与Codex的互通）的出现，表明开发者不再满足于绑定一个AI工具。他们希望在不同模型、不同Agent之间自由切换、协同工作，甚至让它们相互审查代码。**一个去中心化、可组合的AI编程生态正在形成。**

3.  **“隐私优先”与“完全本地化”成为硬需求：**
    从今天排名第一的 `meetily` 到 `karakeep`，都在强调“自托管”、“100%本地”、“无云依赖”。这与用户对数据安全的担忧以及边缘计算的成熟度提升有关，**“本地AI”不再是妥协选择，而是成为一种更具竞争力的产品形态。**

4.  **“系统提示词”透明化与逆向工程成焦点：**
    `system_prompts_leaks` 仅一天就获得1300+ Stars，揭示了开发者社区对“黑盒”大模型底层指令的强烈好奇心。这不仅是技术行为，更是一种对透明度和可控性的诉求，可能会催生新的Prompt分析和审计工具。

#### 4. ⭐️ 社区关注热点

- **🚀 为你的 AI 编码 Agent 安装“技能包”：** 重点关注 **`addyosmani/agent-skills`** 和 **`alirezarezvani/claude-skills`**。它们是当前最炙手可热的方向，能立即提升你的AI编码助手在具体项目中的表现力。
- **🤖 拥抱 Agent 生态的互联互通：** 关注 **`openai/codex-plugin-cc`** 和 **`ogulcancelik/herdr`**。学习如何让不同AI Agent协同工作，是掌握下一代开发范式的关键技能。
- **🔒 用本地AI保护你的数据隐私：** 部署 **`Zackriya-Solutions/meetily`** 或 **`karakeep-app/karakeep`**。体验完全在本地运行、不依赖云端的高性能AI应用，享受隐私带来的安全感。
- **🧠 深挖大模型运行基石：** 研究 **`asgeirtj/system_prompts_leaks`** 中的泄露Prompt。了解不同大模型的设计哲学和安全策略，能让你在未来构建更鲁棒的AI应用。
- **💡 探索AI与硬件结合的新奇点：** 关注 **`ruvnet/RuView`** 和 **`newton-physics/newton`**。前者将AI与普通WiFi信号结合，创造新的感知维度；后者是用于机器人模拟的GPU加速物理引擎，代表了AI在物理世界应用的巨大潜力。