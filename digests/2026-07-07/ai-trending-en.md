# AI Open Source Trends 2026-07-07

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-07 06:00 UTC

---

# AI Open Source Trends Report — 2026-07-07

## 1. Today's Highlights

The AI open-source ecosystem today is dominated by a massive wave of **agent skill/plugin development**, with multiple projects exceeding 1,000 stars in a single day. The trending list reveals an explosive community interest in extending coding agents like Claude Code and OpenAI Codex with specialized skills — from video processing and meeting transcription to system prompt extraction and content quality control. Notably, **system prompt leakage** has become a hot topic, with one repo collecting prompts from dozens of major AI products. Meanwhile, the topic search data shows sustained high activity in **multi-agent frameworks**, **RAG pipelines**, and **embodied AI research**, suggesting the field is maturing across both application and research dimensions.

## 2. Top Projects by Category

### 🔧 AI Infrastructure
- [**alibaba/zvec**](https://github.com/alibaba/zvec) ⭐13,632 (+382 today) — A lightweight, lightning-fast in-process vector database written in C++, designed for embedding-heavy applications where latency is critical.
- [**firecrawl/firecrawl**](https://github.com/firecrawl/firecrawl) ⭐146,564 (+867 today) — The leading API for web scraping and search at scale, increasingly used by AI agents to fetch live data.
- [**steipete/CodexBar**](https://github.com/steipete/CodexBar) ⭐598 (+598 today) — A macOS menu bar app showing real-time usage stats for OpenAI Codex and Claude Code, addressing the growing need for cost monitoring.

### 🤖 AI Agents / Workflows
- [**Zackriya-Solutions/meetily**](https://github.com/Zackriya-Solutions/meetily) ⭐2,494 (+2,494 today) — Privacy-first AI meeting assistant with local-only processing (Whisper transcription, speaker diarization, Ollama summarization) built in Rust.
- [**addyosmani/agent-skills**](https://github.com/addyosmani/agent-skills) ⭐1,112 (+1,112 today) — A production-grade collection of engineering skills for AI coding agents, authored by a well-known Chrome developer.
- [**alirezarezvani/claude-skills**](https://github.com/alirezarezvani/claude-skills) ⭐610 (+610 today) — 345 curated skills and plugins for Claude Code and 8 other coding agents, covering engineering, marketing, product, and compliance.
- [**ogulcancelik/herdr**](https://github.com/ogulcancelik/herdr) ⭐779 (+779 today) — An agent multiplexer living in your terminal, enabling simultaneous interaction with multiple AI agents.
- [**gastownhall/gastown**](https://github.com/gastownhall/gastown) ⭐291 (+291 today) — A multi-agent workspace manager for organizing and orchestrating agent teams.

### 📦 AI Applications
- [**ruvnet/RuView**](https://github.com/ruvnet/RuView) ⭐470 (+470 today) — Turns commodity WiFi signals into spatial intelligence and vital sign monitoring without any cameras — a novel application of AI in edge computing.
- [**bradautomates/claude-video**](https://github.com/bradautomates/claude-video) ⭐427 (+427 today) — Gives Claude the ability to watch any video by downloading frames and transcriptions, then feeding them to the LLM.
- [**karakeep-app/karakeep**](https://github.com/karakeep-app/karakeep) ⭐199 (+199 today) — Self-hostable bookmark-everything app with AI-based automatic tagging and full-text search.
- [**mvanhorn/last30days-skill**](https://github.com/mvanhorn/last30days-skill) ⭐458 (+458 today) — An AI agent skill that researches topics across Reddit, X, YouTube, HN, and Polymarket, synthesizing grounded summaries.

### 🧠 LLMs / Training
- [**unslothai/unsloth**](https://github.com/unslothai/unsloth) ⭐67,867 — A web UI and library for training and running open models locally (Gemma 4, Qwen3.6, DeepSeek), now with reinforcement learning support.
- [**OpenRLHF/OpenRLHF**](https://github.com/OpenRLHF/OpenRLHF) ⭐9,753 — An easy-to-use, scalable agentic RL framework supporting PPO, DAPO, REINFORCE++, and integration with vLLM and Ray.
- [**OpenPipe/ART**](https://github.com/OpenPipe/ART) ⭐10,337 — Agent Reinforcement Trainer using GRPO for training multi-step agents on real-world tasks.
- [**vllm-project/vllm**](https://github.com/vllm-project/vllm) ⭐85,553 — High-throughput LLM inference engine, increasingly used as the backbone for agent systems.

### 🔍 RAG / Knowledge
- [**mem0ai/mem0**](https://github.com/mem0ai/mem0) ⭐60,262 — Universal memory layer for AI agents, enabling persistent context across sessions.
- [**thedotmack/claude-mem**](https://github.com/thedotmack/claude-mem) ⭐86,204 (+86,204 overall) — Captures everything an agent does during sessions, compresses it, and injects relevant context into future sessions.
- [**infiniflow/ragflow**](https://github.com/infiniflow/ragflow) ⭐84,457 — Leading open-source RAG engine combining retrieval with agent capabilities for a superior context layer.
- [**headroomlabs-ai/headroom**](https://github.com/headroomlabs-ai/headroom) ⭐57,229 — Compresses tool outputs, logs, and RAG chunks before they reach the LLM, achieving 60-95% token reduction.
- [**Graphify-Labs/graphify**](https://github.com/Graphify-Labs/graphify) ⭐78,897 — Turns any folder of code, docs, or schemas into a queryable knowledge graph for AI coding assistants.

## 3. Trend Signal Analysis

**Explosive growth in agent skill ecosystems**: The most striking signal today is the viral spread of "skill" and "plugin" repositories for coding agents. Projects like `agent-skills` (+1,112), `claude-skills` (+610), and `taste-skill` (+1,458) indicate that the community is rapidly building a **marketplace-like ecosystem** for extending Claude Code, Codex, and Gemini CLI. The `system_prompts_leaks` repo (+1,378) taps into this by revealing the underlying instructions for major AI products, suggesting developers are reverse-engineering agent behaviors to build better skills.

**Rust emerging as the agent infrastructure language**: Three Rust-based projects — `meetily` (meeting assistant), `herdr` (agent multiplexer), and `RuView` (WiFi sensing) — all gained significant traction. Rust's performance and safety advantages are making it the go-to language for agent-adjacent infrastructure tools that need low latency and local-first processing.

**Memory and context management as critical infrastructure**: The massive star counts for `claude-mem` (86K), `mem0` (60K), and `headroom` (57K) reflect a maturing understanding that **agent quality depends on good memory systems**. The community is moving beyond simple RAG toward sophisticated context compression, persistent memory layers, and knowledge graphs.

**First appearance of agent multiplexing**: `herdr` introduces the concept of an "agent multiplexer" — a terminal tool that lets users interact with multiple agents simultaneously. This is a new architectural pattern that could lead to agent orchestration standards.

**Connection to LLM releases**: The ollama repo now references Kimi-K2.6, GLM-5.1, and Qwen — indicating continued rapid iteration of foundation models. The agent skill rush correlates with the increasing capability and availability of these models via open-source frameworks.

## 4. Community Hot Spots

- **📡 `system_prompts_leaks`** — A controversial but highly followed project revealing the system prompts behind Claude, ChatGPT, Gemini, and Grok. Developers should monitor this for understanding how major AI products are engineered under the hood.
- **🎯 `meetily`** — The #1 trending repo today (2,494 stars). Demonstrates that privacy-first, local-only AI meeting assistants are a massive unmet need, especially with Rust-based performance.
- **🧩 Agent skill ecosystems (addyosmani/agent-skills, alirezarezvani/claude-skills)** — These are becoming de facto skill registries. Developers building for Claude Code or Codex should contribute skills here for community visibility.
- **🧠 Memory infrastructure (mem0, claude-mem, headroom)** — Persistent, compressed, and structured memory for agents is a foundational technology. These projects are likely to become essential components of the agent tech stack.
- **🔌 Agent multiplexing (herdr)** — A new architectural approach for managing multiple agents simultaneously in the terminal. Worth watching as the "agent operating system" concept evolves.