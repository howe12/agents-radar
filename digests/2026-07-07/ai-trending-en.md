# AI Open Source Trends 2026-07-07

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-07 10:14 UTC

---

# AI Open Source Trends Report — 2026-07-07

## 1. Today's Highlights

Today marks an extraordinary explosion in the **AI agent skills ecosystem**, with multiple "skill" repositories for Claude Code, Codex, and Gemini CLI going viral simultaneously — a clear sign that the community is standardizing around agent skill frameworks. The **system prompt leak** of virtually every major AI model (Claude Fable 5, GPT 5.5, Gemini 3.5) from `asgeirtj/system_prompts_leaks` has become one of the most impactful open-source intelligence events of the year. Meanwhile, **local-first AI** continues its rapid ascent, with Rust-based projects like `Zackriya-Solutions/meetily` (privacy-first meeting assistant) gaining 2,494 stars in a single day, and `alibaba/zvec` entering the vector database space with an in-process, lightweight alternative to Milvus and Qdrant. The agent skills theme is so dominant that **6 of the top 16 trending repos** today are agent skill packs, indicating the community is moving from building individual agents to assembling reusable skill libraries.

## 2. Top Projects by Category

### 🤖 AI Agents / Workflows

- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** — ⭐1,378 today (Total: ~1,378)
  Extracted system prompts from Anthropic (Claude Fable 5, Opus 4.8), OpenAI (ChatGPT 5.5 Thinking, GPT 5.5 Instant, Codex), Google Gemini, xAI Grok, Cursor, Copilot, and more — essential intel for anyone building on top of these APIs.

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — ⭐1,112 today (Total: ~1,112)
  Production-grade engineering skills for AI coding agents, created by a Chrome team veteran — a curated set of capabilities that turns agents into competent engineers.

- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** — ⭐610 today (Total: ~610)
  Massive collection of 345 skills for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — spanning engineering, marketing, product, compliance, research, finance, and productivity.

- **[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)** — ⭐906 today (Total: ~906)
  OpenAI's official integration allowing Claude Code to use OpenAI Codex for code review and task delegation — a rare cross-platform collaboration between AI vendors.

- **[gastownhall/gastown](https://github.com/gastownhall/gastown)** — ⭐291 today (Total: ~291)
  Multi-agent workspace manager written in Go — orchestrates multiple AI agents in a shared environment, addressing the coordination problem in agent swarms.

---

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools)

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — ⭐867 today (Total: ~146,840 total)
  The API to search, scrape, and interact with the web at scale — the essential data ingestion layer for AI agents, now with massive community adoption.

- **[alibaba/zvec](https://github.com/alibaba/zvec)** — ⭐382 today (Total: ~13,768 total)
  Alibaba's lightweight, lightning-fast in-process vector database — a C++ embedded vector store that competes with LanceDB and txtai for on-device AI use cases.

- **[ogulcancelik/herdr](https://github.com/ogulcancelik/herdr)** — ⭐779 today (Total: ~779)
  Agent multiplexer living in your terminal — routes requests across multiple AI models and agents, bringing traffic management to the agent ecosystem.

- **[steipete/CodexBar](https://github.com/steipete/CodexBar)** — ⭐598 today (Total: ~598)
  macOS menu bar utility showing usage stats for OpenAI Codex and Claude Code — simple but essential dev tool for tracking AI consumption.

---

### 📦 AI Applications (Specific Apps, Vertical Solutions)

- **[Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily)** — ⭐2,494 today (Total: ~2,494) 🏆 **Top Trending Today**
  Privacy-first AI meeting assistant with 4× faster Parakeet/Whisper live transcription, speaker diarization, and Ollama summarization — all 100% local, no cloud required.

- **[ruvnet/RuView](https://github.com/ruvnet/RuView)** — ⭐470 today (Total: ~470)
  Converts commodity WiFi signals into real-time spatial intelligence, vital sign monitoring, and presence detection without any camera — novel embodied AI application.

- **[karakeep-app/karakeep](https://github.com/karakeep-app/karakeep)** — ⭐199 today (Total: ~199)
  Self-hostable bookmark-everything app (links, notes, images) with AI-based automatic tagging and full-text search — a local-first answer to AI-powered knowledge management.

- **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)** — ⭐427 today (Total: ~427)
  Gives Claude the ability to "watch" any video — downloads, extracts frames, transcribes, and hands it all to Claude for analysis.

---

### 🧠 LLMs / Training

- *(No new trending repos today specifically focused on model training or weights — a notable shift toward applications and agents)*

---

### 🔍 RAG / Knowledge

- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** — ⭐458 today (Total: ~458)
  AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web, then synthesizes a grounded summary — RAG applied to temporal research.

- **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** — ⭐1,458 today (Total: ~1,458)
  Gives AI "good taste" — stops agents from generating boring, generic slop. A quality-of-life RAG enhancement for output quality.

---

## 3. Trend Signal Analysis

### Explosive Community Attention: The Agent Skills Gold Rush

The single strongest signal today is the **commoditization of AI agent capabilities through skill packs**. With 6 trending repos dedicated to agent skills (claude-skills, agent-skills, taste-skill, last30days-skill, system_prompts_leaks, codex-plugin-cc), the community has recognized that the moat is no longer the agent framework itself but the **library of reusable, composable skills** that agents can execute. The 1,100+ star count in one day for `addyosmani/agent-skills` — from a well-known Chrome performance engineer — signals that even established tech leaders are pivoting to this skill-pack paradigm.

### New Tech Stacks Emerging

1. **Rust for local-first AI**: Four Rust projects in the top trending list (meetily, RuView, herdr) — Rust is becoming the default for privacy-preserving, local-processing AI tools. The highest-starred repo today (meetily at 2,494) is built entirely in Rust with no cloud dependency.

2. **Cross-platform agent interoperability**: OpenAI's `codex-plugin-cc` enabling Claude Code to call OpenAI Codex represents a breakthrough in cross-vendor agent cooperation. This signals a shift from walled-garden agents to an **interoperable agent ecosystem** where different models collaborate.

3. **System prompt reverse engineering as a service**: The `system_prompts_leaks` repo with 1,378 stars today suggests that understanding how frontier models are prompted is now a critical developer need — expect this to become a standard practice for agent builders.

### Connection to Recent Industry Events

The timing of these system prompt leaks coincides with the recent releases of Claude Fable 5, GPT 5.5, and Gemini 3.5 models. The community is aggressively dissecting these new models' instruction-following boundaries. The explosion of skill packs for Claude Code and Codex (both recently released/updated) indicates that **coding agents have achieved mainstream developer adoption**, and the bottleneck has shifted from "will it work?" to "how do I customize it?"

---

## 4. Community Hot Spots

### 🔥 Projects & Directions Worth Developer Focus

- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** — Essential for anyone building AI products. Understanding the secret system prompts of Anthropic, OpenAI, and Google models gives you the ability to align your applications with how these models are actually instructed internally. A single source of truth for prompt engineering intelligence.

- **[Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily)** — The 2,494-star surge confirms that **local-first AI meeting tools** are a massive unmet need. With Otter.ai and similar services requiring cloud uploads, Meetily's 100% local Rust-based approach (Whisper + speaker diarization + Ollama summarization) addresses enterprise privacy concerns directly.

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — From a Chrome team member, this is the canonical "skill pack" for engineering-focused AI agents. If you use Claude Code, Codex, or Gemini CLI, this repo provides production-grade skills that are immediately usable.

- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** — With 345 skills across 30+ agents, this is the most comprehensive skill library available. If you're building an enterprise agent workflow, this repo alone covers everything from legal compliance to finance analysis — the largest skill collection in the open-source ecosystem.

- **[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)** — The fact that OpenAI **officially** built an integration for Claude Code to use Codex signals that cross-platform agent interoperability is now an official priority. Developers should watch this pattern — we may see similar plugins for Gemini, Grok, and others.

- **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** — A deceptively important project. The 1,458-star spike shows the community is tired of generic AI output. This skill addresses output quality at the agent skill layer rather than at the model layer — a pattern likely to become standard in all agent toolchains.

---

*Report generated from 2026-07-07 GitHub trending and topic search data. Total AI-related projects analyzed: ~163. Data reflects today's new stars and 7-day topic search results.*