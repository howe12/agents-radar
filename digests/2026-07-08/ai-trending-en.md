# AI Open Source Trends 2026-07-08

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-08 02:49 UTC

---

# 🔥 GitHub AI Open Source Trends Report
**Date:** 2026-07-08

---

## Step 1: AI Relevance Filter

**Excluded (non-AI):**
- `AhmadIbrahiim/Website-downloader` — generic web scraping tool, no AI component

**Borderline (included with caveat):**
- `ruvnet/RuView` — WiFi-based sensing (not traditional AI; included in Infrastructure as an edge-AI sensor project)

**All other 12 trending repos and the topic-search repos are AI-relevant.**

---

## Step 2 & 3: Categorized Report

## 1. Today's Highlights

Today's trending list is dominated by the **Claude Code ecosystem and AI-agent tooling** — the #1 trending repo (2,514 stars/day) is an AI job-search framework built on Claude Code, and at least 5 of the 13 trending repos are explicitly Claude Code companions (skills, video, awesome list, sandbox, usage bar). A second major signal is **local / on-device AI**: Kyutai's `pocket-tts` (CPU-only TTS) and `meetily` (Rust-based offline meeting assistant) are both trending simultaneously, reflecting strong community appetite for privacy-preserving inference. A third notable theme is **agent-ready infrastructure** — `OfficeCLI` (Office suite for agents), `CubeSandbox` (agent sandbox), and `agent-skills` all push toward "AI agents as first-class software users." Underneath, the topic-search layer shows the agentic-RL stack (OpenPipe/ART, OpenRLHF) maturing fast as the post-training wave after the initial agent boom.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Stars | Why it matters today |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐175,679 | De-facto local-LLM runtime; trending because it's the backbone of meetily and other local apps. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐85,646 | High-throughput inference engine, the production workhorse behind LLM serving. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,356 | Foundational model-definition framework, still the entry point for new architectures. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐141,237 | Now repositioned as "agent engineering platform" — the orchestrator layer. |
| [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox) | ⭐0 (+664 today) | Instant concurrent sandbox purpose-built for AI agents; first time trending. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,857 | Rust-native LLM application framework — part of the Rust-AI infrastructure wave. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐35,832 | Frontend stack + AG-UI protocol for embedding agents in web/mobile apps. |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | ⭐0 (+376 today) | macOS menubar app exposing OpenAI/Claude Code usage stats — reflects the "agent CLI" era. |

### 🤖 AI Agents / Workflows
| Project | Stars | Why it matters today |
|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐211,047 | "The agent that grows with you" — leading the open-weights agent model category. |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐79,875 | Mature AI-driven development agent; reference implementation for software-engineering agents. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐45,853 | Self-evolving agent with memory + skills (formerly ChatGPT-on-WeChat) — strong Chinese community adoption. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐45,108 | Lightweight agent harness for tool/chat/workflow integration. |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | ⭐0 (+2,514 today) | **#1 trending repo** — Claude Code–driven job application automation. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐0 (+1,317 today) | Production-grade engineering skills for AI coding agents, by Google's Addy Osmani. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐26,342 | Terminal coding agent optimized for DeepSeek prefix-cache stability. |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | ⭐29,470 | 24/7 cowork app unifying 20+ agent CLIs (Claude Code, Codex, Hermes, etc.). |

### 📦 AI Applications
| Project | Stars | Why it matters today |
|---|---|---|
| [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) | ⭐0 (+1,777 today) | Privacy-first Rust meeting assistant; #1 self-hosted AI meeting-note taker. |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | ⭐0 (+893 today) | First Office suite built **for** AI agents to read/edit Word/Excel/PowerPoint. |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | ⭐0 (+965 today) | Gives Claude video-understanding via a simple `/watch` slash command. |
| [kyutai-labs/pocket-tts](https://github.com/kyutai-labs/pocket-tts) | ⭐0 (+531 today) | CPU-only TTS from Kyutai — "fits in your pocket," a new on-device inflection point. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐48,284 | Multi-LLM productivity studio with 300+ assistants. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐37,517 | AI generates **editable** PowerPoints (not slide images) — preserves native shapes/charts. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐55,592 | LLM-driven multi-market stock analysis — a leading Chinese vertical agent. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐144,624 | Most popular self-hosted chat UI for Ollama/OpenAI APIs. |

### 🧠 LLMs / Training
| Project | Stars | Why it matters today |
|---|---|---|
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,172 | Standard LLM evaluation harness across 100+ datasets. |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐67,898 | Studio UI for training Gemma 4 / Qwen3.6 / DeepSeek locally — the LoRA fine-tuning default. |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | ⭐10,346 | GRPO-based agent RL trainer; the leading open recipe for "on-the-job agent training." |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | ⭐9,759 | Scalable Ray-based RLHF/Agentic-RL framework (PPO, DAPO, REINFORCE++, VLM). |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | ⭐6,032 | "Atomic" composable agent-building framework. |
| [gluonfield/enchanted](https://github.com/gluonfield/enchanted) | ⭐5,974 | Native iOS/macOS UI for Ollama-hosted models. |
| [starpig1129/DATAGEN](https://github.com/starpig1129/DATAGEN) | ⭐1,764 | Multi-agent research assistant for automated hypothesis + analysis. |
| [om-ai-lab/VLM-R1](https://github.com/om-ai-lab/VLM-R1) | ⭐6,002 | Reinforcement-trained VLMs for visual understanding — RL-for-VLM is heating up. |

### 🔍 RAG / Knowledge
| Project | Stars | Why it matters today |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐84,540 | Leading open-source RAG engine fusing retrieval with agent capabilities. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50,719 | The document-agent and OCR platform; canonical RAG framework. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,125 | Cloud-native vector database at massive scale. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,018 | High-performance vector search engine in Rust. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐60,334 | Universal memory layer for agents — persistent long-term memory is becoming standard. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐33,864 | **Vectorless**, reasoning-based RAG — a notable architectural shift from embedding-only retrieval. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,655 | 97% storage savings for on-device RAG — privacy-first retrieval. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐27,311 | Knowledge-graph memory engine for agent long-term memory. |

---

## 3. Trend Signal Analysis

The dominant narrative today is the **rise of the "agent CLI" as a new software category**. At least 7 of the 13 trending repos are not models or apps in the traditional sense — they are *companion tools* for existing agent CLIs (Claude Code, Codex, OpenCode, Hermes, OpenClaw). This signals that the agent ecosystem has matured past "build an agent" into "ship tooling, skills, sandboxes, usage bars, and content plugins around agents." The "skills" pattern in particular — `agent-skills`, `dotnet/skills`, the `awesome-claude-code` showcase — is an emerging abstraction layer paralleling npm packages but optimized for prompt + tool definitions consumable by coding agents.

A second, separate signal is **the local-AI inflection**. `pocket-tts` (CPU-only TTS), `meetily` (Rust meeting assistant), `LEANN` (on-device RAG), and `enchanted` (native macOS LLM chat) all trending together indicates that 2026 is becoming the year edge/local inference becomes product-grade. The Rust adoption — visible in `meetily`, `rig`, `qdrant`, and `Copper` — is the enabling technical substrate.

A third subtle signal is the **diversification of agent post-training**. `OpenPipe/ART`, `OpenRLHF`, `VLM-R1`, and `NVlabs/Sana` all trending in the same window show that GRPO/RLHF tooling is catching up to the agent boom, foreshadowing an "agent-RL" wave analogous to the 2024 LLM-RLHF wave. Connection to industry: this aligns with rumored post-training focus in Claude Opus 4.8 / GPT 5.5 / Gemini 3.5 (all referenced in `system_prompts_leaks`) — model providers are racing to ship agentic RL recipes, and the open-source community is racing to reproduce them.

---

## 4. Community Hot Spots

- **Claude Code companion ecosystem** — `ai-job-search`, `agent-skills`, `claude-video`, `awesome-claude-code`, `CodexBar`, `dotnet/skills`: developers should treat "Claude Code skill/plugin authoring" as a genuine new skill category worth investing in.
- **Agent-first desktop/CLI tools** — `meetily`, `OfficeCLI`, `AionUi`, `pocket-tts`: the boundary between "app" and "agent surface" is dissolving; expect an explosion of single-binary agent utilities.
- **Vectorless RAG & agent memory** — `PageIndex`, `cognee`, `mem0`, `claude-mem`: reasoning-based and graph-based retrieval are challenging pure-vector RAG as the default architecture for agent knowledge.
- **Agent RL / post-training** — `OpenPipe/ART`, `OpenRLHF`, `VLM-R1`: GRPO-based agent training is the next open-source battleground; early contributors can define the recipes.
- **Rust for AI infrastructure** — `meetily`, `rig`, `qdrant`, `Copper`, `rerun`: Rust is quietly becoming the default language for performance-critical AI infrastructure (serving, vector search, robotics, edge inference).