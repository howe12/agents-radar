# AI CLI Tools Community Digest 2026-07-07

> Generated: 2026-07-07 06:00 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Date: 2026-07-07**

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem exhibits a three-tier maturity structure: **established platforms** (Claude Code, OpenAI Codex, GitHub Copilot CLI) with large user bases and complex issue backlogs; **fast-followers** (Gemini CLI, Qwen Code, DeepSeek TUI/CodeWhale) shipping daily releases with aggressive feature velocity; and **niche players** (Kimi Code, Pi, OpenCode) targeting specific developer workflows with smaller but engaged communities. Across all tools, the dominant themes are **agent reliability**, **MCP protocol integration**, **multi-model orchestration**, and **cross-platform compatibility** — particularly Windows support gaps. The ecosystem is converging on common architectural patterns (sub-agent delegation, sandboxed execution, context window management) while differentiating on pricing models, model provider lock-in, and IDE integration depth.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Community Signal |
|------|-------------|-----------|----------------|------------------|
| **Claude Code** | 10+ notable (15+ safety filter reports) | 3 active | **v2.1.202** (today) | 464👍 top issue (INR pricing); high engagement |
| **OpenAI Codex** | 24 new issues | 10 active (50 total) | **2 alpha releases** (today) | 5 rate limit reports; plugin state loss concerns |
| **Gemini CLI** | 10 top-commented | 10 (7 closed, 3 open) | **v0.51.0-nightly** (today) | Sub-agent reliability dominates; 7/10 top issues agent-related |
| **GitHub Copilot CLI** | 10 notable | 0 (24h) | **v1.0.69-2** (recent) | Plugin scoping (#1665, 18👍); voice mode broken |
| **Kimi Code** | 2 | 0 | **v0.22.0** (stable) | Low activity; ACP integration request noteworthy |
| **OpenCode** | 10 notable | 10 active | **v1.17.14** (today) | MCP resource support across 3 PRs; 14-issue fix merged |
| **Pi** | 10 notable | 10 (4 merged, 6 open) | No new release | API server PRD; extension lifecycle fixes |
| **Qwen Code** | 13 surfaced | 11 active | **v0.19.6-nightly** (today) | Token management #1 pain; Windows gaps |
| **DeepSeek TUI** | ~20+ from QA cycle | 10 tracked | **v0.8.67** (recent); v0.8.68 in prep | Systematic QA-driven releases; SIGPIPE crash fixed |

**Key Takeaway**: Claude Code and OpenAI Codex dominate by raw issue volume, but Gemini CLI and DeepSeek TUI show highest *issue-to-PR throughput* — indicating more responsive maintainer teams.

---

## 3. Shared Feature Directions

| Feature Direction | Tools Expressing Need | Specific Requirements |
|------------------|----------------------|----------------------|
| **MCP Resource/Protocol Enhancements** | OpenCode, Gemini CLI, Copilot CLI, CodeWhale | Resource catalogs (#35656-9 OpenCode), MCP elicitation (#28089 Gemini), permissions scoping (#3028 Copilot), deferred-load optimization (#4027 CodeWhale) |
| **Multi-Agent/Sub-Agent Orchestration** | Claude Code, Gemini CLI, Copilot CLI, Qwen Code, CodeWhale | Model routing (#43869 Claude), false success (#22323 Gemini), maxSubAgents (#6354 Qwen), per-sub-agent provider routing (#3969 CodeWhale) |
| **Context Window & Token Management** | Claude Code, Qwen Code, Pi | 1M context enforcement (#70609/#75147 Claude), bounded reads (#6403 Qwen), cache hit rate fix (#6355 Pi) |
| **Cross-Platform Parity (Windows/Linux)** | Gemini CLI, CodeWhale, Qwen Code, OpenCode | Shell tool failures (#6298 Qwen), CRLF git diffs (#35654 OpenCode), Dropbox access (#4085 CodeWhale) |
| **Pricing & Usage Transparency** | Claude Code, Copilot CLI, OpenCode, Kimi Code | INR pricing (#17432 Claude), ACP-exposed limits (#2486 Kimi), subscription orphan (#33102 OpenCode) |
| **Memory & Context Continuity** | Claude Code, OpenAI Codex, Gemini CLI | Shared claude.ai memory (#14228 Claude), writability control (#19195 Codex), Auto Memory retry (#26522 Gemini) |

**Emerging Consensus**: MCP is becoming the universal integration layer; sub-agent reliability is the top trust-buster; and Windows/Linux parity remains a persistent competitive differentiator.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Qwen Code | DeepSeek/CodeWhale |
|-----------|-------------|--------------|------------|-------------|-----------|-------------------|
| **Primary Model** | Opus 4.8 | GPT-5+ family | Gemini 2.x/3.x | GPT-4o+ | Qwen models | DeepSeek models |
| **Target User** | Professional devs, enterprise | Early adopters, alpha testers | Google ecosystem devs | GitHub ecosystem devs | Qwen/AliCloud ecosystem | Cost-sensitive, open-source advocates |
| **Architecture** | Agent + sub-agents | Agent + skills | Agent + sub-agents + MCP | Agent + plugins | Agent + deferred tools | Agent + Fleet/Workflow |
| **Release Cadence** | Weekly patches | Daily alpha | Daily nightly | Weekly patch | Daily nightly | QA-driven cycles |
| **Key Differentiator** | Safety classifier (controversial) | Sandbox + skills system | AST-aware code understanding | GitHub integration depth | Per-project model config | Open-source, community-driven |
| **Major Weakness** | Safety false positives | Rate limit instability | Sub-agent reliability | Session auth breakage | Token management | Panic/crash frequency |

**Strategic Insight**: Claude Code and OpenAI Codex compete on *model quality and safety*, while Gemini CLI and Copilot CLI differentiate on *ecosystem integration*. Qwen Code and CodeWhale compete on *cost and openness* — but all chase the same core developer workflow.

---

## 5. Community Momentum & Maturity

| Tool | Momentum | Maturity Indicators |
|------|----------|---------------------|
| **Claude Code** | **High** — 464👍 top issue, daily releases, large tracker | Mature but strained — safety filter backlash shows scaling pains |
| **OpenAI Codex** | **Very High** — 24 issues/day, 50 PRs, 2 alphas | Pre-1.0 volatility — rate limit regressions and plugin state loss suggest rapid iteration over stability |
| **Gemini CLI** | **High** — 10 PRs closed today, nightly builds | Maturing fast — Thought Leakage fix (#27971) and sandbox hardening show production focus |
| **GitHub Copilot CLI** | **Moderate** — low PR velocity, closed issues pile | Stable but stagnant — v1.0.69-2 patches rather than features; community wants plugin scoping |
| **Kimi Code** | **Low** — 2 issues, 0 PRs | Niche — ACP integration request signals ambition but low engagement |
| **OpenCode** | **High** — 3-layer MCP resource PRs, 14-issue fix | Maturing — v1.17.14 with structured feature work; SDK version drift is growing pain |
| **Pi** | **Moderate** — 10 PRs, 4 merged | Stable — extension lifecycle improvements signal mature plugin ecosystem |
| **Qwen Code** | **High** — 11 PRs, nightly releases | Pre-1.0 growth — token management pain and Windows gaps indicate early adoption |
| **DeepSeek TUI (CodeWhale)** | **Very High** — 20+ QA items, systematic releases | Rapid iteration — v0.8.67→v0.8.68 cycle shows structured development; SIGPIPE and Unicode fixes show production readiness |

**Maturity Rankings** (by community health, not release version):
1. **Claude Code** — Largest community, most features, but safety filter eroding trust
2. **OpenAI Codex** — Fastest iteration, most PR activity, but unstable for production
3. **Gemini CLI** — Strong Google backing, improving stability, sub-agent issues remain
4. **GitHub Copilot CLI** — Stable but slow-moving; plugin ecosystem needs investment
5. **OpenCode** — Solid MCP focus, growing rapidly
6. **Pi** — Niche but reliable; extension ecosystem maturing
7. **DeepSeek TUI** — Fast-growing open-source alternative; crash-frequency a concern
8. **Qwen Code** — Promising but early; Windows and token issues need resolution
9. **Kimi Code** — Minimal activity; strategic potential via ACP

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **MCP as Universal Protocol** | OpenCode (3 PRs), Gemini CLI (#28089), CodeWhale (#4027), Copilot CLI (#3028) all enhancing MCP | Invest in MCP-compatible tooling; expect standardization within 6 months |
| **Multi-Agent Architecture Becoming Default** | 5/9 tools have sub-agent features; reliability is #1 pain | Plan for multi-agent workflows; budget for debugging agent-to-agent communication |
| **Safety/Guardrail Tension** | Claude Code 15+ false positives vs. CodeWhale "not following constitution" (#4032) | Balance between safety and developer productivity is unresolved; expect market differentiation |
| **Windows as Competitive Battleground** | Qwen Code (#6298), OpenCode (#35654), CodeWhale (#4085), Copilot CLI (#4001) all have Windows-specific bugs | Windows developers face friction; tools investing here will win cross-platform loyalty |
| **Token Economics Shifting** | Claude Code context cap bugs (#70609), Qwen Code token overflow (#6408), Pi cache accounting (#6355) | Token tracking is unreliable across tools; demand for transparency will grow |
| **Plugin/Skill Ecosystems Maturing** | Pi (#6360 defer loading), CodeWhale (#4027 always_load), Copilot CLI (#1665 scoping) | Extension management is the next UX frontier; expect config UI and performance optimization |
| **Regional Pricing Pressure** | Claude Code #17432 (464👍), OpenAI Codex (no parallel yet) | Developers in India and emerging markets are organizing; tools ignoring regional pricing risk market share |
| **Autonomous Code Understanding** | Gemini CLI (#22745 AST-aware), CodeWhale (#4052 nested repos) | Beyond file editing toward true codebase comprehension; AST integration is the next leap |

---

## Summary for Decision-Makers

**If you need:** | **Choose:** | **Because:**
----------------|-------------|--------------
Most capable model | **Claude Code** | Opus 4.8 leads on reasoning, but safety filter may block legitimate work
Fastest iteration | **OpenAI Codex** | Daily alphas, 50 PRs/day — but expect instability
GitHub integration | **Copilot CLI** | Deepest GitHub ecosystem tie-in; stable but slower
Cost-effective open source | **DeepSeek TUI / Qwen Code** | Free models, active communities, but Windows support lags
Google ecosystem | **Gemini CLI** | Strong nightly cadence, sandbox hardening, improving sub-agents
MCP-centric workflow | **OpenCode** | Most aggressive MCP resource implementation; 3-layer PR stack today

**Bottom Line**: The AI CLI tools ecosystem is converging on a shared architecture (agent + sub-agents + MCP + sandbox) while diverging on model strategy, pricing, and ecosystem integration. The tools that solve **agent reliability** and **cross-platform parity** first will win long-term developer trust.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the `anthropics/skills` repository, based on the analysis of Pull Requests and Issues data.

---

### Claude Code Skills Community Highlights Report (2026-07-07)

#### 1. Top Skills Ranking (by Discussion Activity)

The following Pull Requests (PRs) represent the most-discussed Skill submissions, indicating high community interest or scrutiny.

1.  **Skill-Creator Reliability Overhaul (PR #1298)**
    - **Functionality:** Fixes the core `run_eval.py` script, which is the engine for testing and optimizing Skill descriptions. The fix addresses a critical bug where the script always reported a 0% recall rate, making the entire skill-creation optimization loop unproductive.
    - **Discussion Highlights:** The community identified that the optimization loop was "optimizing against noise." This PR is the culmination of multiple bug reports and fixes targeting the same root cause.
    - **Status:** Open (highly active).

2.  **Document Typography Skill (PR #514)**
    - **Functionality:** An automated quality control skill for AI-generated documents. It prevents common typographic issues such as orphaned words/widows, stranded section headers, and numbered list misalignment.
    - **Discussion Highlights:** The community recognizes this as a universal pain point for all documents generated by Claude, making it a highly practical and requested utility.
    - **Status:** Open.

3.  **OpenDocument (ODT) Skill (PR #486)**
    - **Functionality:** Enables creation, template filling, reading, and conversion of OpenDocument Format files (.odt, .ods). This extends Claude's document capabilities beyond proprietary formats.
    - **Discussion Highlights:** The discussion focuses on the demand for open-source and ISO-standard document handling, particularly for users in government, academia, and enterprise environments where ODF is mandated.
    - **Status:** Open.

4.  **Windows Platform Fixes (PR #1099, #1050, #539, #541)**
    - **Functionality:** These PRs address critical bugs preventing `skill-creator` scripts, PDF handling, and DOCX manipulation from working correctly on Windows. Issues include subprocess calls failing, file encoding errors, and document corruption.
    - **Discussion Highlights:** A significant portion of community discussion revolves around cross-platform compatibility. The number of Windows-specific fixes highlights a strong user base on that platform.
    - **Status:** Open (multiple PRs).

5.  **Self-Audit Skill (PR #1367)**
    - **Functionality:** This meta-skill instructs Claude to audit its own output before delivery. It performs mechanical verification (e.g., checking that all mentioned files exist) and a four-dimension reasoning quality audit.
    - **Discussion Highlights:** A very recent and highly-discussed addition. The community is debating the trade-offs of increased output reliability versus the additional context window usage and latency.
    - **Status:** Open (recent).

6.  **Testing Patterns Skill (PR #723)**
    - **Functionality:** A comprehensive skill covering the testing stack, including unit testing (AAA pattern, naming conventions), React component testing, integration testing, and end-to-end testing.
    - **Discussion Highlights:** Conversations center on the skill's completeness and its choice of the "Testing Trophy" model over the traditional "Testing Pyramid."
    - **Status:** Open.

7.  **Sensory Skill (macOS Automation) (PR #806)**
    - **Functionality:** Teaches Claude to use native `osascript` (AppleScript) for macOS automation, bypassing the slower, screenshot-based "computer use" method. It includes a two-tier permission system for safety.
    - **Discussion Highlights:** Mac users are actively discussing its potential for automating complex desktop workflows and its limitations with different permission levels.
    - **Status:** Open.

#### 2. Community Demand Trends (from Issues)

Analysis of the most active Issues reveals the following key demand trends from the community:

- **Enterprise & Security Governance (Issue #492):** The highest-volume discussion (34 comments) is about a **trust boundary vulnerability**. Community members are concerned that skills are distributed under the `anthropic/` namespace, which could trick users into granting elevated permissions to community-authored, potentially malicious skills. The demand is for a clear **security labeling and verification system**.
- **Organizational Skill Management (Issue #228):** A strong demand for **org-wide skill sharing and management**. The current workflow of manually downloading and sharing `.skill` files is seen as a significant barrier to enterprise adoption. Users want a shared skill library or direct sharing links.
- **Core Utility Reliability: Skill-Creator Fixes (Issues #556, #1169, #1061):** A cluster of issues with 12-3 comments each revolves around the **broken `run_eval.py` script** (the 0% recall bug mentioned in PRs). This is the biggest operational pain point for skill developers. The community is actively debugging and proposing fixes, with a strong focus on **Windows compatibility**.
- **Duplicate & Usability Issues (Issue #189):** Users are frustrated with **duplicate skills** being installed when using default plugin bundles. This indicates a need for better de-duplication logic and clearer documentation of what each plugin contains.

#### 3. High-Potential Pending Skills (Active PRs)

These PRs have significant community engagement and are likely to be merged soon:

- **skill-creator: Fix run_eval.py crash on Windows (PR #1099) & compatibility fixes (PR #1050):** These are critical blocker fixes for Windows users. Given the high volume of related issues, they are expected to be incorporated quickly to unblock the developer base.
- **skill-creator: Fix trigger detection (PR #1323):** Directly addresses the core bug in the skill evaluation loop. This is a high-priority fix that will restore the functionality of the description-optimization pipeline.
- **color-expert skill (PR #1302):** A self-contained, highly specific skill for color knowledge (naming systems, spaces, harmonies). It is likely to be merged due to its well-defined scope and utility for designers and front-end developers.
- **Add CONTRIBUTING.md (PR #509):** This is not a Skill but a governance document. It is crucial for community health and is directly tied to an open issue requesting it. It is a strong candidate for fast-track merging.

#### 4. Skills Ecosystem Insight

The community's most concentrated demand is the **reliability and trustworthiness of the core skill development and execution infrastructure itself**, specifically fixing platform-specific bugs and establishing security boundaries, before focusing on the creation of new, domain-specific Skills.

---

# Claude Code Community Digest — 2026-07-07

## Today's Highlights
A flood of **cybersecurity safety-filter false positives** dominates today's issue tracker, with a single reporter filing over 15+ detailed bug reports of legitimate Android debugging and low-level development work being halted by Opus 4.8's safety classifier. Meanwhile, the **most-voted open issue** (464 👍) continues to be India-specific INR pricing, and a **new v2.1.202 release** introduces dynamic workflow sizing controls and expanded OpenTelemetry attributes.

---

## Releases

### v2.1.202 — Released 2026-07-07
- **Dynamic workflow size** setting added in `/config` — advisory guideline (small/medium/large agent counts), not an enforced cap
- **New telemetry attributes**: `workflow.run_id` and `workflow.name` added to OpenTelemetry output

[View Release →](https://github.com/anthropics/claude-code/releases/tag/v2.1.202)

---

## Hot Issues (10 Noteworthy)

### 1. **[#17432] Feature Request: India-Specific Pricing Plans (INR)**
*464 👍, 205 comments — Open since Jan 2026*
The community's most-demanded feature. Users cite OpenAI and Google as benchmarks for regional pricing parity. No official response yet, but sustained engagement indicates strong developer demand across India's growing AI tooling market.

[Issue #17432](https://github.com/anthropics/claude-code/issues/17432)

### 2. **[#18170] Copy/paste from terminal includes unwanted indentation/trailing spaces**
*270 👍, 129 comments — Open since Jan 2026*
A long-standing TUI annoyance: selecting output from Claude Code's terminal copies leading prompt-alignment whitespace and trailing spaces. Heavily upvoted, suggesting this affects daily workflow for many developers.

[Issue #18170](https://github.com/anthropics/claude-code/issues/18170)

### 3. **[#23626] Support diff comparison against branches other than main**
*81 👍, 25 comments*
When using `/diff` or similar review commands, Claude Code is locked to comparing against `main`. Users working on feature branches off `develop` or `staging` want configurable base branch selection.

[Issue #23626](https://github.com/anthropics/claude-code/issues/23626)

### 4. **[#14228] Claude Code should access claude.ai memory and context**
*27 👍, 15 comments — Open since Dec 2025*
Users want a unified Claude experience: preferences and context established on claude.ai should carry over to Claude Code sessions. The "stranger vs. known assistant" disconnect is a recurring theme.

[Issue #14228](https://github.com/anthropics/claude-code/issues/14228)

### 5. **[#43869] Subagent model routing is broken — all mechanisms resolve to parent model (Opus)**
*11 👍, 11 comments — Open since Apr 2026*
Agent orchestration suffers a critical bug: every documented method for assigning subagents to cheaper models (Sonnet) is silently ignored. Subagents always run on the parent model (Opus), burning premium tokens.

[Issue #43869](https://github.com/anthropics/claude-code/issues/43869)

### 6. **[#74803] Burning through more tokens while doing nothing different**
*4 👍, 7 comments — Opened Jul 6*
Users report sudden token consumption spikes without workflow changes. Potential regression or model behavior shift; monitoring warranted.

[Issue #74803](https://github.com/anthropics/claude-code/issues/74803)

### 7. **[#72504] Cowork Tab Missing from Sidebar — Runtime Not Initializing (macOS M4)**
*0 👍, 5 comments — Regression on v1.15962.1*
The Cowork feature fails to initialize on Apple Silicon M4 Macs after a recent update. Tagged as regression.

[Issue #72504](https://github.com/anthropics/claude-code/issues/72504)

### 8. **[#70609] Pro plan + usage credits still capped at 200K instead of 1M for Opus 4.8**
*0 👍, 3 comments*
Documentation states Pro plan users with usage credits enabled get 1M context for Opus 4.8, but the tool enforces 200K. Billing/entitlement mismatch.

[Issue #70609](https://github.com/anthropics/claude-code/issues/70609)

### 9. **[#75147] Opus 4.8 1M context not enforced on Max 5x despite entitlement flag**
*0 👍, 1 comment — Opened today*
Similar to #70609 but on the Max plan: entitlement flag returns null, capping context at 200K on fresh sessions.

[Issue #75147](https://github.com/anthropics/claude-code/issues/75147)

### 10. **[#66192] Copy-paste does not work (macOS)**
*21 👍, 24 comments — Open since Jun 2026*
On certain macOS configurations, standard copy/paste operations fail entirely within Claude Code TUI. High signal from community workarounds.

[Issue #66192](https://github.com/anthropics/claude-code/issues/66192)

---

## Key PR Progress

### 1. **[#41453] examples(hooks): add safe Stop hook wrapper with PID lock and timeout**
*Open — Proposed solution to runaway background processes in Stop hooks*
Adds a reference implementation for running post-session tasks without violating Stop hook JSON return requirements. Addresses the "runaway process" problem from #41393.

[PR #41453](https://github.com/anthropics/claude-code/pull/41453)

### 2. **[#74857] docs: clarify plugin MCP configuration scope**
*Closed Jul 6 — Documentation fix*
Clarifies that `mcpServers` in plugin configuration is distinct from user-level MCP allow/deny lists in `~/.claude.json`. Reduces confusion between plugin-bundled MCP servers and user settings.

[PR #74857](https://github.com/anthropics/claude-code/pull/74857)

### 3. **[#74722] feat(commit-commands): support Conventional Branch naming in `/commit-push-pr`**
*Open — Adds Conventional Branch 1.0.0 compliance*
Adds an optional `conventional` argument to `/commit-push-pr` for auto-naming branches per the Conventional Branch spec (`feature/`, `bugfix/`, `hotfix/`, `release/`, `chore/`, `docs/`, `test/`), inferred from diff content.

[PR #74722](https://github.com/anthropics/claude-code/pull/74722)

---

## Feature Request Trends

1. **Regional Pricing & Localization**: The #1 voted issue (464 👍) demands INR pricing. Unaddressed for 6+ months — growing sentiment that Anthropic trails competitors on global market accessibility.

2. **Unified Memory/Context**: Multiple requests (#14228, related) want claude.ai preferences, conversation history, and user profiles to be shared with Claude Code. The "two Claudes" experience is a top UX friction point.

3. **Configurable Diff/Review Targets**: Developers increasingly work on branching models beyond `main` → `develop`, `staging`, `release/*`. Requests for configurable base branch selection in diff, review, and PR commands are rising.

4. **Multi-Model Agent Orchestration**: Requests for native planning/execution model splitting (#67172: "Fable for planning, Sonnet for execution") align with the broken subagent routing bug (#43869) — users want cost optimization via model tiering.

5. **Plugin MCP Ecosystem Clarity**: The closed PR #74857 and related issues show the community is struggling with MCP configuration scoping. Expect clearer documentation and perhaps GUI configuration tooling requests.

---

## Developer Pain Points

- **Safety Filter Overreach (Critical)**: Today's tracker shows a concentrated wave of ~20+ cybersecurity false-positive reports from a single reporter (sworrl), all involving Opus 4.8 blocking legitimate Android debugging, memory scanning, and ADB workflows. This is a systemic problem for developers working on mobile, embedded, or security-adjacent code — the classifier cannot distinguish between malicious behavior and legitimate device debugging.

- **Context Window Entitlement Bugs**: Two separate reports (#70609, #75147) confirm that Opus 4.8's advertised 1M context window is not consistently enforced on Pro *or* Max plans. Users paying for premium access are silently capped at 200K.

- **Subagent Model Routing Broken (#43869)**: A core agent orchestration feature has been broken since at least April 2026 with no fix. Users relying on cheaper subagent models for cost management are unknowingly burning Opus-tier tokens on all sub-tasks.

- **Copy/Paste Degradation**: A top-3 upvoted issue (#18170, 270 👍) remains unresolved since January 2026. For a terminal-based tool, broken copy behavior is a fundamental productivity blocker.

- **Token Consumption Regressions (#74803)**: Sporadic reports of unexplained token budget depletion may indicate model-level changes or prompt inefficiencies introduced in recent releases.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date: 2026-07-07**

---

## Today's Highlights
Two new Rust alpha releases (0.143.0-alpha.37 and .38) landed today alongside a flurry of 24 issues and 50 pull requests. The community is actively reporting regressions in rate limit tracking, sandbox stability on Windows and Ubuntu, and a critical bug where the app upgrade process silently drops installed plugins. Internally, OpenAI engineers are pushing major refactors to thread lifecycle management, proxy-aware HTTP routing, and model compaction retry logic.

---

## Releases
- **[rust-v0.143.0-alpha.37](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.37)** — Alpha release with no changelog detail provided.
- **[rust-v0.143.0-alpha.38](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.38)** — Subsequent alpha release; likely contains hotfixes from .37.

---

## Hot Issues (Top 10)

1. **[#20552 — Toggle File Tree does not reliably reveal the file tree](https://github.com/openai/codex/issues/20552)** [CLOSED]
   A long-running macOS bug (44 comments, 14 👍) where the `View > Toggle File Tree` menu item is enabled but fails to show the file tree. Reaching resolution after two months of back-and-forth signals this was a persistent UI annoyance for desktop users.

2. **[#29627 — Agent cancels pending manual approvals instead of waiting](https://github.com/openai/codex/issues/29627)** [OPEN]
   Enterprise CLI users report that the agent prematurely cancels pending manual approval dialogs, treating them as unapproved rather than pausing. This undermines a core safety mechanism for human-in-the-loop workflows. 11 comments, no upvotes — suggests an under-reported but critical trust issue.

3. **[#19195 — Make Codex memory writability explicit](https://github.com/openai/codex/issues/19195)** [OPEN]
   A feature request turned bug report: when `memories = true` is enabled, the model-visible prompt contradicts the configuration by injecting "Never update memory" instructions. Community members note this creates confusing agent behavior. 11 comments.

4. **[#31243 — Local file edits accidentally rewrite whole files](https://github.com/openai/codex/issues/31243)** [OPEN]
   On Codex CLI 0.142.5, applying edits can silently overwrite entire files rather than making targeted changes, destroying prior work. Filed just yesterday and already 6 comments — expect this to escalate as users encounter data loss.

5. **[#30946 — apply_patch: pure-addition chunk ignores @@ context](https://github.com/openai/codex/issues/30946)** [OPEN]
   A subtle diff application bug where patches that only add lines ignore the specified file location context and insert at end of file — but report "Success." Could silently corrupt codebases. 4 comments.

6. **[#31345 — 5h limits totally broken](https://github.com/openai/codex/issues/31345)** [OPEN]
   Users on the Plus plan report hitting the 5-hour cap after light usage, with usage graphs showing a stark spike compared to prior days. Filed today with 2 comments but no official response yet — likely to attract more attention rapidly.

7. **[#30270 — Bundled plugins disappear after Windows app updates](https://github.com/openai/codex/issues/30270)** [OPEN]
   The Browser/Chrome/Computer Use plugins vanish post-update due to a stale bundled marketplace path. Forced reinstallation after every update is a poor UX for Windows users. 10 comments.

8. **[#30524 — Codex Desktop intermittently corrupts structured tool-call arguments](https://github.com/openai/codex/issues/30524)** [OPEN]
   Malformed tool-call argument payloads and related Computer Use app-signature failures. If arguments get corrupted mid-stream, downstream automation breaks unpredictably. 2 comments.

9. **[#30861 — macOS x86_64: CLI SIGTRAP on gpt-5.6-sol shell tool call](https://github.com/openai/codex/issues/30861)** [OPEN]
   Codex CLI 0.142.5 crashes with SIGTRAP (exit 133) specifically when using `gpt-5.6-sol` with shell tool calls on Intel Macs. Works on Oracle Linux and with gpt-5.5 — suggests a platform-specific regression.

10. **[#31359 — New task creation times out when MCP server is unreachable](https://github.com/openai/codex/issues/31359)** [OPEN]
    After upgrading to version 26.623.141536, any new task hangs indefinitely if a configured MCP server is down. Blocks all productivity for users relying on MCP connectors. 2 comments.

---

## Key PR Progress (Top 10)

1. **[#31316 — chore: extract remote compaction request attempts](https://github.com/openai/codex/pull/31316)** [OPEN, code-reviewed]
   Behavior-preserving refactor to pre-sampling compaction logic. Sets the stage for [#30319](https://github.com/openai/codex/pull/30319) which will add retry with the user's selected model when the thread's original model has been retired.

2. **[#30319 — Retry retired-model compaction with selected model](https://github.com/openai/codex/pull/30319)** [OPEN]
   Stacked on #31316. If a thread's stored model slug is retired, pre-turn compaction will try the old model first but gracefully fall back to the user's selected model on backend rejection — preventing thread wedge.

3. **[#31295 — bench: add delayed cold thread start benchmark](https://github.com/openai/codex/pull/31295)** [OPEN]
   Adds a durable CI benchmark for cold remote thread start latency with configurable network delay, using the `TestAppServer` harness — no Docker required.

4. **[#31355 — refactor: make ExternalAuth return CodexAuth](https://github.com/openai/codex/pull/31355)** [OPEN]
   Simplifies the auth flow by having `ExternalAuth` resolve directly to `CodexAuth`, removing the parallel `ExternalAuthTokens` wrapper. Preserves all existing behavior.

5. **[#31058 — fix(core): retry model capacity errors](https://github.com/openai/codex/pull/31058)** [OPEN, code finalized]
   Critical reliability improvement: retries model capacity errors (HTTP 503) up to 3 times per turn with jittered delays (30s, 2m, 5m). Deferred retries avoid the fast transport retry path.

6. **[#31338 — core: make thread activity lifecycle atomic](https://github.com/openai/codex/pull/31338)** [OPEN]
   Ensures thread activity registration and idle-shutdown are atomic operations — prevents race conditions where a fast receiver could "leak" committed activity from a sender that hasn't finished yielding.

7. **[#31333 — core: track thread publication lifecycle](https://github.com/openai/codex/pull/31333)** [OPEN]
   Introduces a manager-scoped tree that registers threads under stable IDs with parent tracking and incarnation generations. Prevents stale handles from mutating replaced threads.

8. **[#31360 — app-server: own thread listener teardown](https://github.com/openai/codex/pull/31360)** [OPEN]
   Makes listener registry own abort handles atomically, with proper teardown during app-server shutdown. Rolls back only the exact registered listener on error — more resilient shutdown semantics.

9. **[#31342 — core: use HTTP Responses with system proxy](https://github.com/openai/codex/pull/31342)** [OPEN, code-reviewed]
   Routes HTTP Responses endpoints through the proxy-aware client factory (from #31335) — fixes WebSocket dials that previously bypassed `features.respect_system_proxy`.

10. **[#31368 — feat(core): expose turn TTFT in traces](https://github.com/openai/codex/pull/31368)** [OPEN]
    Adds OpenTelemetry tracing for Time To First Token (TTFT) — a `codex.turn.ttft` span with millisecond duration. Essential for performance debugging and monitoring.

---

## Feature Request Trends
- **Executable / verifiable procedural skills** ([#28999](https://github.com/openai/codex/issues/28999)) — Users want agents to be able to record and replay successful multi-step procedures as reusable, verifiable skills. This extends beyond read-only skills into agent-authored "memory of how to do things."
- **Explicit memory writability control** ([#19195](https://github.com/openai/codex/issues/19195)) — The community is pushing for clear, non-contradictory UI around when and how the agent can write to memory, especially when `memories = true` is enabled.
- **Thread catalog metadata subscriptions** (tracked via PRs [#29894](https://github.com/openai/codex/pull/29894), [#29902](https://github.com/openai/codex/pull/29902)) — App-side request for better real-time catalog updates without needing to resume every thread.

---

## Developer Pain Points
- **Rate limit confusion** — Multiple reports ([#31345](https://github.com/openai/codex/issues/31345), [#31195](https://github.com/openai/codex/issues/31195)) of limits resetting unexpectedly or hitting caps far earlier than historical usage suggests. Users described this as "totally broken" and "messed up."
- **Plugin/skill state lost on upgrade** — [#30270](https://github.com/openai/codex/issues/30270) (Windows) and [#31365](https://github.com/openai/codex/issues/31365) (macOS) both report that app updates silently uninstall or deactivate previously installed plugins and skills.
- **Sandbox fragility on non-standard filesystems** — [#29908](https://github.com/openai/codex/issues/29908) (Ubuntu 24.04 Bubblewrap), [#30840](https://github.com/openai/codex/issues/30840) (ReFS/Dev Drive deletes), and [#31220](https://github.com/openai/codex/issues/31220) (Windows sandbox split-root) show that sandbox stability varies significantly by OS/filesystem combination.
- **MCP server unavailability blocks all productivity** — [#31359](https://github.com/openai/codex/issues/31359) demonstrates that an unreachable MCP server completely prevents new task creation, with no timeout fallback or graceful degradation.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-07

## Today's Highlights
The team shipped **v0.51.0-nightly.20260707** with critical sandbox hardening and escape sequence fixes. A major **Thought Leakage** PR landed, preventing internal model reasoning from polluting history turns. A significant cluster of issues around subagent reliability (false GOAL success, hangs, permission bypasses) continues to dominate community attention, with 7 out of the top 10 most-commented issues being agent-related bugs.

---

## Releases
**[v0.51.0-nightly.20260707.g15a9429b6](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260707.g15a9429b6)**
- **fix(sandbox):** `~/.gitconfig` is now read-only in the macOS sandbox. This closes a sandbox escape vector where malicious code could alter git config (aliases, hooks, core.pager) from inside a sandboxed process ([PR #28221](https://github.com/google-gemini/gemini-cli/pull/28221))
- **fix(core):** Valid escape sequences (e.g., `\n`, `\t`) inside string literals are no longer converted to literal characters when writing files, fixing a long-standing file corruption bug for modern Gemini 2.x/3.x models ([PR #28299](https://github.com/google-gemini/gemini-cli/pull/28299))

---

## Hot Issues (Top 10 by Community Activity)

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
   A `codebase_investigator` subagent reports `status: "success"` even when it hit its max turn limit and performed zero analysis. This silently breaks user trust: the agent thinks it succeeded while the user’s request went unhandled. 10 comments, opened 4 months ago, still open.

2. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**
   An EPIC tracking the expansion of the "behavioral evals" framework from 76 tests to comprehensive component-level coverage across 6 Gemini models. Critical for ensuring release quality. 7 comments.

3. **[#22745 — AST-aware file reads, search, and codebase mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
   Investigates using AST-based tools to precisely read method bounds in a single tool call, reducing token noise and turn count. A potential major leap in code understanding quality. 7 comments, 1 👍.

4. **[#21409 — Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)**
   Simple folder creation defers to the generalist subagent and hangs forever (up to an hour). The community workaround is to instruct the model not to use subagents at all. 8 👍 — the highest-reacted open issue.

5. **[#21968 — Gemini doesn't use custom skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**
   “Purely anecdotal but IME Gemini does not use custom skills and sub-agents on its own, basically at all.” Users define git/gradle skills with clear descriptions, yet the model ignores them. 6 comments.

6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**
   Auto Memory only marks sessions as processed when the extraction agent successfully reads them. Low-signal sessions are skipped but keep resurfacing, causing wasted processing. 5 comments.

7. **[#25166 — Shell command execution stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**
   Simple CLI commands (e.g., `ls`, `echo`) hang after completing, showing "Awaiting user input" despite no input being expected. 3 👍 — a high-frequency frustration. Effort/medium.

8. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
   The browser agent fails on Linux Wayland sessions with a “GOAL” termination reason reported prematurely. Linux desktop users hit this regularly. 4 comments.

9. **[#25783 — Edit tool CLI output ≠ actual file changes](https://github.com/google-gemini/gemini-cli/issues/25783)**
   The Edit tool displays satisfying changes in CLI output, but when the user checks GitHub, the actual file was never modified. Silent data loss scenario. 3 comments, 1 👍.

10. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**
    The model occasionally uses `git reset`, `--force`, and other destructive commands when safer alternatives exist. Users want proactive guardrails, especially for database and production resources. 3 comments, 1 👍.

---

## Key PR Progress (Top 10)

1. **[#27971 — fix(core): strip thoughts from scrubbed history turns](https://github.com/google-gemini/gemini-cli/pull/27971)** 🟢 CLOSED
   Resolves **Thought Leakage**: the model’s internal reasoning/scratchpad was leaking into plain-text history, causing infinite loops and monologue emulation. A surgical fix in the history scrubbing pipeline. Size/large.

2. **[#28089 — feat(core): implement MCP elicitation (form + url) capability](https://github.com/google-gemini/gemini-cli/pull/28089)** 🟢 CLOSED
   Implements the MCP 2025-11-25 elicitation spec (form + URL modes). The MCP client can now advertise elicitation capabilities. P2, size/large.

3. **[#28094 — fix(a2a-server): deep-merge user and workspace settings](https://github.com/google-gemini/gemini-cli/pull/28094)** 🟢 CLOSED
   Shallow object spread was silently dropping workspace settings (telemetry, fileFiltering, experimental) when user settings existed. Deep merge fixes nested configuration loss.

4. **[#28093 — fix(core): buffer chat compression telemetry until SDK is initialized](https://github.com/google-gemini/gemini-cli/pull/28093)** 🟢 CLOSED
   `logChatCompression()` bypassed the telemetry buffer, causing missing metrics when SDK initialization was delayed. Now respects the deferred path like all other loggers.

5. **[#28099 — fix(cli): show descriptive sandbox label instead of 'current process'](https://github.com/google-gemini/gemini-cli/pull/28099)** 🟢 CLOSED
   `SandboxIndicator` now reads `$SANDBOX` and `$SEATBELT_PROFILE` env vars to show e.g., `sandbox-exec` instead of the generic "current process." Fixes [#26697](https://github.com/google-gemini/gemini-cli/issues/26697).

6. **[#28096 — fix(core): drop late tool calls after SIGINT cancellation](https://github.com/google-gemini/gemini-cli/pull/28096)** 🟢 CLOSED
   Closes [#28091](https://github.com/google-gemini/gemini-cli/issues/28091): tool call chunks arriving after Ctrl+C were still executing and submitting results. Now properly discarded.

7. **[#28100 — fix(vscode-ide-companion): register Disposables leaked by comma operators](https://github.com/google-gemini/gemini-cli/pull/28100)** 🟢 CLOSED
   Two comma operators (`(A, B)` inside `push()`) collapsed to only the last operand, silently leaking disposable subscriptions. Now correctly pushes both.

8. **[#28223 — fix(core-tools): bypass LLM correction for JSON and IPYNB files](https://github.com/google-gemini/gemini-cli/pull/28223)** 🔵 OPEN
   LLM post-processing was corrupting `.json` and `.ipynb` files. This surgically disables the correction path for these formats to avoid regressions in other file types.

9. **[#27200 — fix(extensions): retry transient directory cleanup failures](https://github.com/google-gemini/gemini-cli/pull/27200)** 🔵 OPEN
   Windows file-lock timing during extension updates causes aborted updates. Retries transient cleanup failures so updates succeed despite brief handle retention.

10. **[#28244 — docs(policy-engine): use a safe test command instead of rm -rf /](https://github.com/google-gemini/gemini-cli/pull/28244)** 🔵 OPEN
    The policy engine quick-start documentation literally told users to test denial by asking Gemini to run `rm -rf /`. Replaced with a safe test command. Fixes [#28231](https://github.com/google-gemini/gemini-cli/issues/28231).

---

## Feature Request Trends

1. **AST-aware code understanding** — Multiple EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) request AST-based file reading, search, and codebase mapping to reduce turn count and token noise.

2. **Component-level behavioral evals** — [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) pushes for systematic evaluation of subagents' individual capabilities beyond the current 76 end-to-end tests.

3. **Agent self-awareness** — [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) asks that the CLI understand its own hotkeys, flags, and mechanics so it can act as its own expert guide.

4. **Subagent trajectory sharing** — [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) requests `/chat share` support for subagent trajectories to aid debugging and eval review.

5. **Browser agent resilience** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) proposes automatic session takeover and lock recovery for persistent browser sessions, rather than fail-fast crash on locked profiles.

6. **Auto Memory improvements** — [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) all request sanitization: avoid indefinite retries, quarantine invalid patches, and redact secrets deterministically.

---

## Developer Pain Points

- **Subagent reliability is the #1 pain point.** False GOAL success on turn limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), indefinite hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), and permission bypasses ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) erode user trust in the multi-agent system.

- **Shell execution is fragile.** Commands hang after completion with "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)). The model creates random tmp scripts across directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)). Interactive prompts (like `vite create`) stall the agent ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).

- **Tool output contradictions.** The Edit tool reports changes that never materialize ([#25783](https://github.com/google-gemini/gemini-cli/issues/25783)). The Browser agent silently ignores `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

- **Tool proliferation problems.** With >128 available tools, the model hits a 400 error ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)). Users observe that custom skills and subagents are rarely used autonomously ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).

- **Terminal & sandbox UX regressions.** Terminal resize flickers ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), external editor exit corrupts the display ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), and sandbox labels show unhelpful "current process" ([#28099](https://github.com/google-gemini/gemini-cli/pull/28099) fix addresses this).

- **Memory system quality.** Auto Memory retries low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), silently skips invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and redacts secrets only after content is sent to model context ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date**: 2026-07-07

## Today's Highlights
A new patch release (v1.0.69-2) landed with improvements to MCP server authentication via the CLI OAuth callback flow and a fix for file inclusion inside `n`. The community engagement remains high around plugin scoping and multi-agent workflows, while several new triage issues surfaced around voice mode failures, enterprise plugin sync, and non-interactive MCP behavior.

## Releases
**v1.0.69-2** — [View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.69-2)
- **Added**: `/rubber-duck` command now visible in pre-auth help and self-documentation
- **Improved**: Sign-in to MCP servers through the CLI OAuth callback flow; full `/user` switch picker revealed when timeline is full (fixes clipping below terminal)
- **Fixed**: Files inside `n` are now properly included

## Hot Issues

1. **[#1665](https://github.com/github/copilot-cli/issues/1665) — [CLOSED] Support Plugin Scoping to Project/Repository (👍 18)**
   *Why it matters*: Users want per-project plugin configurations instead of global installs. This was the most upvoted closed issue. Community reaction: 18 thumbs-up, 10 comments — strong demand for workspace-level plugin isolation.

2. **[#3596](https://github.com/github/copilot-cli/issues/3596) — [CLOSED] "Not authenticated" error on session resume (👍 11)**
   *Why it matters*: Session continuity is broken for model listing. Users hit authentication failures when resuming sessions, forcing restarts. Affects v1.0.56. 11 thumbs-up, 9 comments.

3. **[#1389](https://github.com/github/copilot-cli/issues/1389) — [CLOSED] Multi-Agent Workflow System (👍 18)**
   *Why it matters*: Proposes replacing single-agent interactions with collaborative AI teams for end-to-end development. 18 thumbs-up suggests strong interest in orchestrated multi-agent workflows.

4. **[#3028](https://github.com/github/copilot-cli/issues/3028) — [OPEN] MCP Permissions Configuration (👍 5)**
   *Why it matters*: Users need configurable allowances for MCP server tools, similar to trusted folder patterns. 5 thumbs-up, 8 comments — growing concern about MCP security boundaries.

5. **[#3074](https://github.com/github/copilot-cli/issues/3074) — [OPEN] `/effort` command for reasoning effort switching (👍 6)**
   *Why it matters*: Switching reasoning effort currently requires multi-step `/model` commands. This requests a quick-toggle to adjust reasoning depth per prompt.

6. **[#4001](https://github.com/github/copilot-cli/issues/4001) — [OPEN] .claude/settings.json hooks broken on Windows**
   *Why it matters*: Windows users hit fail-closed behavior because hooks run in PowerShell, not bash, and `$CLAUDE_PROJECT_DIR` is unset. Breaks all repo settings on Windows.

7. **[#4024](https://github.com/github/copilot-cli/issues/4024) — [OPEN] Voice mode: all ASR models return empty transcriptions**
   *Why it matters*: Voice mode is non-functional — audio captures, but all bundled models produce empty output. Likely a routing bug for nemotron_speech RNNT.

8. **[#4038](https://github.com/github/copilot-cli/issues/4038) — [OPEN] Non-interactive MCP server injects empty user message**
   *Why it matters*: Using `copilot -p "..."` with MCP servers exposing 7+ tools causes an empty message injection. Model echoes system prompts instead of answering.

9. **[#4041](https://github.com/github/copilot-cli/issues/4041) — [OPEN] `web_fetch` tool fails in IPv4-only sandbox environments**
   *Why it matters*: Built-in web fetch is completely broken in sandboxed/restricted environments. Every URL fails with `TypeError: fetch failed`.

10. **[#4035](https://github.com/github/copilot-cli/issues/4035) — [OPEN] Voice installer fails with 401 on private Azure Artifacts feed**
    *Why it matters*: Voice mode setup requires Microsoft.AI.Foundry.Local.Core from a private Azure Artifacts feed, causing 401 errors. Package is publicly available on nuget.org.

## Key PR Progress
*No pull requests were updated or created in the last 24 hours.*

## Feature Request Trends
1. **Plugin Scoping & Configuration** — Strong demand for per-project/repository plugin configurations instead of global user-level installs ([#1665](https://github.com/github/copilot-cli/issues/1665)). Related: interactive input variables (`${input:...}`) for plugins ([#4042](https://github.com/github/copilot-cli/issues/4042)).

2. **Multi-Agent Orchestration** — Community interest in collaborative AI teams for complex workflows, with specialized agents for architecture, development, research, etc. ([#1389](https://github.com/github/copilot-cli/issues/1389)).

3. **Reasoning Effort Controls** — Quick-switching reasoning effort via `/effort` command to adapt per-prompt complexity ([#3074](https://github.com/github/copilot-cli/issues/3074)).

4. **MCP Permissions & Security** — Configurable trust boundaries for MCP server tools, similar to trusted folder patterns ([#3028](https://github.com/github/copilot-cli/issues/3028)).

5. **BYOK for ACP Server Mode** — Bring-your-own-key support for custom LLM models in Agent Client Protocol server mode ([#4037](https://github.com/github/copilot-cli/issues/4037)).

## Developer Pain Points
1. **Authentication Session Breakage** — Resuming sessions triggers "Not authenticated" errors for model listing, forcing session restarts ([#3596](https://github.com/github/copilot-cli/issues/3596)).

2. **Windows Hook Incompatibility** — `.claude/settings.json` hooks fail-closed on Windows due to PowerShell execution and missing `$CLAUDE_PROJECT_DIR` ([#4001](https://github.com/github/copilot-cli/issues/4001)).

3. **Voice Mode Unusable** — All ASR models return empty transcriptions ([#4024](https://github.com/github/copilot-cli/issues/4024)), and the installer fails behind corporate proxies/private feeds ([#4035](https://github.com/github/copilot-cli/issues/4035)).

4. **Non-interactive MCP Instability** — Empty message injection in `copilot -p "..."` mode with many MCP tools causes model hallucination ([#4038](https://github.com/github/copilot-cli/issues/4038)).

5. **Network Sandbox Failures** — `web_fetch` tool completely broken in IPv4-only environments ([#4041](https://github.com/github/copilot-cli/issues/4041)).

6. **Enterprise Plugin Sync Failures** — Plugins marked installed in config but never synced to disk in managed enterprise settings ([#4039](https://github.com/github/copilot-cli/issues/4039)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-07

## Today's Highlights
A quiet day for the Kimi Code CLI with no new releases or pull requests. The community identified two notable issues: a terminal rendering bug on Windows 11 affecting long-running CLI sessions, and a feature request to expose usage limits via the ACP protocol for IDE integration.

---

## Releases
No new releases in the last 24 hours. Current stable version: **0.22.0**.

---

## Hot Issues (2 items — all noteworthy)
All issues updated within the last 24 hours are covered here due to low volume.

### #2485 — [bug] code cli 错乱 || code cli is confused
- **Author**: mynameiscuining  
- **Created/Updated**: 2026-07-06  
- **Comments**: 1 | 👍: 0  
- **Link**: [Issue #2485](https://github.com/MoonshotAI/kimi-cli/issues/2485)  

**Summary**: On Windows 11 with CLI version 0.22.0 and `kimi-for-coding` model (Moderato subscription), the terminal display becomes corrupted after prolonged use. The first option disappears, and partial rendering occurs.  
**Why it matters**: Terminal corruption directly impacts user productivity, especially during long coding sessions. This is a recurring class of issues for CLI tools on Windows — the lack of a quick workaround (like a `clear` hotkey) is a pain point.  
**Community reaction**: Only one comment so far, likely from the reporter. No upvotes yet; low visibility suggests it may affect a niche user base.

---

### #2486 — [enhancement] Feature Request: Expose Kimi Code usage limits and reset times through ACP
- **Author**: jgiacomini  
- **Created/Updated**: 2026-07-06  
- **Comments**: 0 | 👍: 0  
- **Link**: [Issue #2486](https://github.com/MoonshotAI/kimi-cli/issues/2486)  

**Summary**: The author is building an ACP client for Visual Studio 2026 and wants to display usage data (limits, reset times) that is currently only visible in the Kimi Code Console via `/usage`. They request exposing this through the Anthropic Client Protocol (ACP).  
**Why it matters**: ACP is becoming the standard interface for AI coding assistants. This request is strategic: enabling IDE integration is critical for enterprise adoption and embedded tools.  
**Community reaction**: No discussion yet. The lack of traction may indicate limited awareness of ACP integration needs — but this is a signal of future demand.

---

## Key PR Progress
No pull requests were updated or created in the last 24 hours. This suggests a stable branch with no active changes under review.

---

## Feature Request Trends
Based on the two issues present, emerging themes include:

- **IDE / Protocol Integration**: ACP-level access to usage data (#2486) signals a push for deeper embedding of Kimi Code into IDEs and custom toolchains.
- **Cross-Platform Reliability**: Terminal corruption on Windows (#2485) highlights a long-standing need for better Windows CI and terminal compatibility testing.

No new feature requests beyond these surfaced today.

---

## Developer Pain Points
Recurring frustrations visible in the current data:

- **Windows Terminal Stability**: Issue #2485 is a classic "long-running CLI session" bug — terminal output corruption without a recovery mechanism is a major productivity drain for Windows developers.
- **Usage Transparency in Embedded Contexts**: Without ACP-exposed limits (#2486), developers building custom IDE plugins cannot replicate the `/usage` command behavior, forcing users to switch between CLI and IDE — a friction point for workflows.
- **Low Community Engagement**: Both issues have zero upvotes, indicating either low awareness or that users are hitting other boundaries (e.g., documentation gaps, non-reproducible bugs) more frequently.

---

**Prepared by**: AI Developer Tools Analyst  
**Data snapshot**: GitHub — MoonshotAI/kimi-cli — Activity for 2026-07-06 to 2026-07-07

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-07

## Today's Highlights

A significant **v1.17.14** release landed with a new **Code Mode MCP adapter** and critical fixes for paginated MCP tool catalogs. The community remains focused on **MCP resource support** across the stack—three coordinated PRs from `rekram1-node` introduce resource catalog APIs in the core, TUI, and app simultaneously. A long-standing **multi-clone repo identity bug** is finally being addressed in a sweeping PR that closes 14 related issues.

---

## Releases

**v1.17.14** was published in the last 24 hours. Key changes:

- **Added** a Code Mode MCP adapter for running confined orchestration scripts against connected MCP tools
- **Hid** the `execute` tool unless code mode is enabled
- **Fixed** paginated MCP tool catalogs losing tool metadata and output schema validation
- **Preserved** LSP state across session restarts

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| [#25873](https://github.com/anomalyco/opencode/issues/25873) | Bash tool crashes with `TypeError: Attempted to assign to readonly property` | Closed but historically severe—affected users with `OPENCODE_EXPERIMENTAL=true` (v2 event system). 9 comments, 2 👍 |
| [#34743](https://github.com/anomalyco/opencode/issues/34743) | Xcode 27 beta 2 ACP ignores `opencode.json` model config | Critical for macOS developers; OpenCode defaults to `big-pickle` instead of user-selected model. 6 comments, 0 👍 |
| [#30381](https://github.com/anomalyco/opencode/issues/30381) | Cloudflare Workers AI: `AiError: Bad input` from inconsistent `content` field types | Blocks all CF Workers AI model usage; schema validation mismatch between user messages. 5 comments, 1 👍 |
| [#33102](https://github.com/anomalyco/opencode/issues/33102) | OpenCode Go subscription orphaned—billing charges but no dashboard visibility | Payment/account-linking bug; users can't manage or cancel recurring charges. 5 comments, 1 👍 |
| [#35009](https://github.com/anomalyco/opencode/issues/35009) | High resource usage in v1.17.13: ~1GB RAM, 22% CPU | Regression after upgrading; performance impact on normal conversations. 5 comments, 2 👍 |
| [#34375](https://github.com/anomalyco/opencode/issues/34375) | OpenCode v1.17.11 doesn't open—shows black screen | Launch-blocking issue across multiple shells (fish, bash, sh). 4 comments, 0 👍 |
| [#35661](https://github.com/anomalyco/opencode/issues/35661) | Figma MCP output truncated at 50KB → silent design data loss | Meaningful real-world impact: generated frontend code gets wrong colors, missing nodes, broken layout. 1 comment |
| [#35444](https://github.com/anomalyco/opencode/issues/35444) | Windows: clicking notification from maximized window loses maximize state | Desktop UX regression on Windows 11. 1 comment |
| [#35651](https://github.com/anomalyco/opencode/issues/35651) | Desktop v1.17.14: top activity indicator bar missing after v2 UI redesign | Regression—users lose visual feedback that AI is processing. Reported same day as release. 0 comments |
| [#26245](https://github.com/anomalyco/opencode/issues/26245) | Monthly token limit ends 15 days early | Subscription/billing frustration; user's account locked despite remaining subscription days. 6 comments |

---

## Key PR Progress

| PR | Description |
|----|-------------|
| [#35311](https://github.com/anomalyco/opencode/pull/35311) — `belisoful` | **Major bug fix**: Multiple clones of same repo treated as different projects. Closes **14 issues** including #17940, #19348, #29869, #29936, and others. Changes how project identity is resolved. |
| [#35656](https://github.com/anomalyco/opencode/pull/35656) — `rekram1-node` | **Core MCP resource support**: Adds canonical resource contracts, paginated discovery, lazy cached catalogs, and URI subscriptions. Foundational work for the MCP resources feature. |
| [#35658](https://github.com/anomalyco/opencode/pull/35658) — `rekram1-node` | **TUI MCP resources**: Loads Location-scoped catalogs, adds resources to `@` autocomplete with stable server/URI identity, preserves references in prompt history. |
| [#35659](https://github.com/anomalyco/opencode/pull/35659) — `rekram1-node` | **App MCP resources**: Replaces experimental V1 resource catalog with canonical V2 MCP catalog, reads resource content through V2 after worktree readiness. |
| [#35629](https://github.com/anomalyco/opencode/pull/35629) — `rekram1-node` | **Code Mode**: Exposes server API as tools under `tools.opencode`, passes Basic auth headers. Enables confined orchestration scripts. |
| [#35617](https://github.com/anomalyco/opencode/pull/35617) — `rekram1-node` | **Code Mode**: Adds promise chaining in sandbox (`then`, `catch`, `finally`) and chainable `all`/`allSettled`/`race`. |
| [#35654](https://github.com/anomalyco/opencode/pull/35654) — `iiAhmedYT` | **Windows git fix**: Adds `--ignore-cr-at-eol` to git diff commands. Closes #27276 and #30357—stops entire files appearing as rewritten on Windows. |
| [#35078](https://github.com/anomalyco/opencode/pull/35078) — `Hona` | **UI fix**: Chat panel resize handle no longer capped at 45%, freeing review pane to be reasonably sized on wide monitors. |
| [#34942](https://github.com/anomalyco/opencode/pull/34942) — `493Arceus` | **Windows desktop**: Config option to disable native menu accelerators. Closes #34937—fixes Ctrl+M minimising the window. |
| [#35660](https://github.com/anomalyco/opencode/pull/35660) — `fengjikui` | **Core stability**: `PluginInternal` now waits for boot fiber before session turns. Closes #35556—prevents race conditions on startup. |

---

## Feature Request Trends

1. **MCP resources and integrations**: The dominant theme today. Requests for Figma MCP support, better MCP tool-output handling, and the simultaneous three-layer MCP resource PRs signal that MCP is the top infrastructure priority.

2. **Desktop UX polish**: Several requests for activity indicators, font size adjustments, RTL support, and window state preservation. The missing activity bar in v1.17.14 is a notable regression.

3. **Delayed/scheduled prompts**: [#35653](https://github.com/anomalyco/opencode/issues/35653) requests queuing prompts to send later—a power-user feature for automated workflows.

4. **Cost transparency**: Continued interest in displaying conversation costs in the web interface ([#20680](https://github.com/anomalyco/opencode/issues/20680), closed) and hiding $0.00 for local models ([#15903](https://github.com/anomalyco/opencode/issues/15903), closed with 22 👍).

5. **Editor integration**: Requests for `@filename` resolution from external editors ([#26252](https://github.com/anomalyco/opencode/issues/26252)) and Neovim editor context support ([#26232](https://github.com/anomalyco/opencode/issues/26232)).

---

## Developer Pain Points

- **Plugin/SDK version drift**: [#35652](https://github.com/anomalyco/opencode/issues/35652) highlights that upgrading the CLI globally silently desyncs workspace-level plugin SDKs—only manual `node_modules` deletion fixes it.
- **Tool output truncation**: [#35661](https://github.com/anomalyco/opencode/issues/35661) demonstrates that the 50KB/2000-line hard limit silently drops critical design data from Figma MCP, leading to broken generated code.
- **Subscription management confusion**: [#33102](https://github.com/anomalyco/opencode/issues/33102) and [#26245](https://github.com/anomalyco/opencode/issues/26245) both point to opaque billing behavior—orphaned subscriptions and premature token exhaustion.
- **OS-specific regressions**: Windows users face the notification/maximize bug ([#35444](https://github.com/anomalyco/opencode/issues/35444)), CRLF git diffs ([#35654](https://github.com/anomalyco/opencode/issues/35654) fix incoming), and window accelerator conflicts ([#34942](https://github.com/anomalyco/opencode/issues/34942)).
- **Model/provider issues**: Cloudflare Workers AI ([#30381](https://github.com/anomalyco/opencode/issues/30381)), Minimax M3 thinking variants on Nvidia ([#35027](https://github.com/anomalyco/opencode/issues/35027)), and custom provider 404 errors ([#26265](https://github.com/anomalyco/opencode/issues/26265)) all indicate fragile provider integration.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-07

## Today's Highlights

The community is buzzing around the newly proposed **OpenAI-Compatible API Server** (PRD in #6383), a major infrastructure push to expose Pi's agent capabilities via standard HTTP endpoints. Separately, **extension loading performance** is now a hot topic, with a three-tier preload strategy proposed in #6360. On the fix side, a critical **cache hit rate double-counting bug** (#6355, #6353) was identified and patched in PR #6352.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#6234 — Escape leaves Pi stuck in Working when extension context hook never settles**  
   A persistent TUI frustration: pressing `Escape` during an active run can fail to abort if an extension's context hook never settles, requiring a second `Escape` or force-kill. 10 comments, still open.  
   [GitHub](https://github.com/earendil-works/pi/issues/6234)

2. **#6376 — Thinking blocks inappropriately stripped in newer Claude models**  
   Claude Sonnet 5 / Opus 4.7+ omit `thinking` blocks from API responses, breaking Pi's downstream stripping logic. Users report missing reasoning output. 3 comments, open.  
   [GitHub](https://github.com/earendil-works/pi/issues/6376)

3. **#6360 — Defer extension loading: three preload modes (lazy / async / sync)**  
   A high-impact proposal: eager loading of 30+ extensions causes noticeable startup lag. The author suggests default-lazy, optional-async, optional-sync tiers. 3 comments, closed for no-action but community interest is clear.  
   [GitHub](https://github.com/earendil-works/pi/issues/6360)

4. **#6366 — Support session IDs for OpenRouter**  
   OpenRouter requires `x-session-id` or `session_id` for proper caching, but Pi only sends `session_id` header and `prompt_cache_key` JSON key — missing the body field. 2 comments, open.  
   [GitHub](https://github.com/earendil-works/pi/issues/6366)

5. **#6250 — Ctrl+V image paste silently fails on Linux/X11 in Bun release binary**  
   A native clipboard binding (`@mariozechner/clipboard`) cannot be resolved inside compiled Bun executables, breaking image paste on X11. Regressed between 0.78.0 and 0.80.3. 2 comments, open.  
   [GitHub](https://github.com/earendil-works/pi/issues/6250)

6. **#6321 — /fork spawns one extra session per Enter while the fork is running**  
   Fork selector's `onSelect` awaits the full `runtimeHost.fork()` before closing, causing duplicate sessions on rapid Enter presses. 2 comments, open.  
   [GitHub](https://github.com/earendil-works/pi/issues/6321)

7. **#6363 — Add extension/RPC event for "agent run fully settled / idle"**  
   Extensions need a reliable `agent_idle` event instead of the ambiguous `agent_end` (which also fires on errors). 2 comments, open.  
   [GitHub](https://github.com/earendil-works/pi/issues/6363)

8. **#6355 — Cache hit rate denominator double-counts cache tokens**  
   Anthropic's API convention includes `cache_read`/`cache_write` inside `input_tokens`, but Pi's footer code adds them again, inflating CH% and context %. 2 comments, closed with fix.  
   [GitHub](https://github.com/earendil-works/pi/issues/6355)

9. **#6383 — PRD: OpenAI-Compatible API Server (packages/api-server)**  
   A full PRD for exposing Pi as an HTTP API — `GET /v1/models`, `POST /v1/chat/completions`, file uploads, auth middleware. 1 comment, closed (triaged).  
   [GitHub](https://github.com/earendil-works/pi/issues/6383)

10. **#6381 — Prompt for Azure OpenAI endpoint and Bedrock bearer token during /login**  
    `/login` currently only asks for an API key, but Azure also needs a resource endpoint, and Bedrock needs a bearer token — both require manual env-var setup. 1 comment, closed.  
    [GitHub](https://github.com/earendil-works/pi/issues/6381)

## Key PR Progress

1. **#6341 — feat(ai): support constrained sampling**  
    Adds `constrainedSampling` config for tools, enabling JSON-schema-constrained argument generation (e.g., `strict` for OpenAI, `guided_json` for vLLM). Open, to-discuss.  
    [GitHub](https://github.com/earendil-works/pi/pull/6341)

2. **#6285 — fix(agent): fail tool calls from length-truncated assistant messages**  
    Reworks tool-call handling so `length` stop reasons trigger error-state tool execution instead of silently passing malformed arguments. Open, to-discuss.  
    [GitHub](https://github.com/earendil-works/pi/pull/6285)

3. **#6350 — feat(coding-agent): add before_provider_headers extension hook**  
    Allows extensions to add/override outgoing provider request headers, enabling integration with LLM gateways and proxy services. Merged.  
    [GitHub](https://github.com/earendil-works/pi/pull/6350)

4. **#6290 — fix(ai): use "(no tool output)" placeholder for empty tool results without images**  
    Fixes the OpenAI provider's misleading "(see attached image)" placeholder for tools that return empty text but no images. Merged.  
    [GitHub](https://github.com/earendil-works/pi/pull/6290)

5. **#6241 — fix(tui): avoid offscreen redraws for stable-height updates**  
    Optimizes TUI rendering by clamping repaints to visible rows when scrollback changes but total line count stays the same. Merged.  
    [GitHub](https://github.com/earendil-works/pi/pull/6241)

6. **#6309 — Improve project-local pi config**  
    Makes `pi config` open global settings by default, and `pi config -l` for project-local config — enabling per-project resource selection. Merged.  
    [GitHub](https://github.com/earendil-works/pi/pull/6309)

7. **#6343 — fix(ai,agent,coding-agent): normalize null message content at ingestion boundaries**  
    Defensively normalizes null/missing `content` fields across message boundaries to prevent crashes (referenced issues #6259, #6276, #4909, #2785, #1670). Merged.  
    [GitHub](https://github.com/earendil-works/pi/pull/6343)

8. **#6356 — fix(ai): support GLM-5.2 tool calls**  
    Falls back to non-streaming chat completions when GLM-5.2 is used with tools, since its streamed response can miss tool-call deltas. Merged.  
    [GitHub](https://github.com/earendil-works/pi/pull/6356)

9. **#6352 — fix(coding-agent): correct cache hit rate denominator and context token double-count**  
    Fixes the double-counting bug reported in #6355/#6353 — CH% and context % are now accurate. Merged.  
    [GitHub](https://github.com/earendil-works/pi/pull/6352)

10. **#5472 — feat(ai,coding-agent): add Requesty as native provider**  
    Adds Requesty (AI gateway with 60k+ users) as a native provider, so `requesty/...` models work out of the box. Merged.  
    [GitHub](https://github.com/earendil-works/pi/pull/5472)

## Feature Request Trends

1. **OpenAI-Compatible API Server** — A multi-issue batch (#6383–#6390) defines a full HTTP API for Pi, covering models, chat completions, file uploads, auth, and key management. This is the most significant new feature direction this week.

2. **Extension Loading Performance** — #6360 (three-tier preload) and #6380 (inconsistent lifecycle) both highlight growing pain as extension ecosystems scale. Users with 30+ extensions demand smarter loading strategies.

3. **Session-Scoped Model Overrides** — #6375 proposes `pi.setModel(model, { persist: false })` so extensions can temporarily switch models without mutating global settings. Supported by related OpenRouter session-ID requests (#6366).

4. **Provider-Specific Features** — #6375 (OpenRouter server tools), #6366 (session IDs), and #6381 (Azure/Bedrock `/login` improvements) show demand for deeper provider integration beyond basic API-key configuration.

5. **Extension Lifecycle Events** — #6363 (`agent_idle` event) and #6380 (lifecycle consistency) indicate the community needs more granular hooks for building reliable extensions.

## Developer Pain Points

1. **Extension Context Hooks Blocking UI** — #6234 (Escape stuck in Working) is a recurring complaint: extensions that fail to settle on context hooks can lock the entire TUI, with no timeout or fallback.

2. **TUI Crashes on Non-Standard Node Builds** — #6359 (segfault on RHEL small-ICU Node) and #6237 (Bun install uses `/usr/bin/node` shebang) both expose fragility around runtime environments. Developers on minimal Linux containers or non-standard Node builds hit hard crashes.

3. **Token Accounting Confusion** — #6355/#6353 (cache hit rate double-counting) reveal that token metrics in the TUI footer have been misleading for some time, undermining user trust in displayed statistics.

4. **Clipboard & Paste Fragility** — #6250 (Linux X11 image paste broken in Bun binary) and #6362 (paste counter not reverted on delete) show that both native clipboard integration and TUI paste management are brittle.

5. **Inconsistent Extension Lifecycle** — #6380 documents that extensions are not reliably scanned/loaded/unloaded across restart, resume, and `/new` — a critical reliability gap for anyone building persistent extension workflows.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-07

## Today's Highlights
The v0.19.6 nightly release brings critical fixes to PR triage automation with strengthened batch detection and problem existence checks. A cluster of 13 issues surfaced around token management and session handling, with users reporting context overflow from large file reads and KV-cache invalidation on deferred-tool discovery. The community is actively contributing PRs addressing Windows shell compatibility, sub-agent parallelism limits, and streaming-table rendering defects.

## Releases
- **v0.19.6-nightly.20260707.bcdb44c5d** — Release includes a single fix: strengthening the PR triage gate with batch detection, problem existence check, and red flag patterns ([View release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6-nightly.20260707.bcdb44c5d))

## Hot Issues
1. **#6264** — `/review` skill consumes large token amounts ([Issue](https://github.com/QwenLM/qwen-code/issues/6264))  
   *User reports excessive token usage; 8 comments, community discussing optimization strategies.*

2. **#6384** — Hard limit: 0 when env-configured model reserves full context for output ([Issue](https://github.com/QwenLM/qwen-code/issues/6384))  
   *Qwen Code fails before sending requests due to context miscalculation; 5 comments, likely related to model-switching logic.*

3. **#6298** — Shell tool fails on Windows when command produces stdout ([Issue](https://github.com/QwenLM/qwen-code/issues/6298))  
   *`run_shell_command` pipes through Unix-only `cat`; critical for Windows users, 5 comments.*

4. **#6265** — `tool_search` invalidates LLM server KV-cache on deferred-tool load ([Issue](https://github.com/QwenLM/qwen-code/issues/6265))  
   *Performance bug: every deferred-tool discovery forces re-caching; 5 comments, welcome-pr tagged.*

5. **#6318** — Unable to `/rewind` after `/compress` even to non-compressed positions ([Issue](https://github.com/QwenLM/qwen-code/issues/6318))  
   *Session navigation broken after compression; now closed with fix in PR #6358.*

6. **#6321** — PreToolUse hook `permissionDecision: "ask"` silently denied ([Issue](https://github.com/QwenLM/qwen-code/issues/6321))  
   *Documented behavior not implemented; confirmation prompt never shown; 3 comments.*

7. **#6334** — Extensions install fails on Windows ([Issue](https://github.com/QwenLM/qwen-code/issues/6334))  
   *Git-based extension download fails even with stable network; non-English report, needs triage.*

8. **#6419** — Session auto-title polluted by startup context ([Issue](https://github.com/QwenLM/qwen-code/issues/6419))  
   *Titles like "handle code review comments" generated for unrelated queries; fresh issue, 1 comment.*

9. **#6408** — Large PDF reads overflow prompt context ([Issue](https://github.com/QwenLM/qwen-code/issues/6408))  
   *100-page PDF injects 100k characters into next prompt causing overflow; closed, welcome-pr.*

10. **#6403** — `read_file` should support bounded reads for large text files ([Issue](https://github.com/QwenLM/qwen-code/issues/6403))  
    *10MB file-size limit is too blunt; users want line-range reads; welcome-pr tagged.*

11. **#6414** — VSCode Qwen Code fails to connect to Qwen agent ([Issue](https://github.com/QwenLM/qwen-code/issues/6414))  
    *New issue, 2 comments, needs triage — likely VSCode extension networking.*

## Key PR Progress
1. **#6421** — fix(cli): bound live streaming-table pending height ([PR](https://github.com/QwenLM/qwen-code/pull/6421))  
   *Fixes scroll-to-top lock, stall-then-dump, and header flash in wide-terminal table rendering.*

2. **#6417** — docs: consolidate design docs under `docs/` ([PR](https://github.com/QwenLM/qwen-code/pull/6417))  
   *Unifies design docs from three competing homes into version-controlled directories.*

3. **#6416** — feat(cli): Add serve env isolation and total admission ([PR](https://github.com/QwenLM/qwen-code/pull/6416))  
   *Phase 2a multi-workspace guardrails: runtime-local environment snapshot for `qwen serve`.*

4. **#6361** — feat(cli): support stacked slash-skill invocations ([PR](https://github.com/QwenLM/qwen-code/pull/6361))  
   *Chain multiple `/skill-name` commands in one prompt; e.g., `/feat-dev /e2e-testing implement X`.*

5. **#6372** — feat(core): add `tools.visible` config for selective deferred-tool visibility ([PR](https://github.com/QwenLM/qwen-code/pull/6372))  
   *Users can promote selected deferred tools to visible-at-startup without `tool_search`.*

6. **#6377** — fix(shell): block kill commands using pgrep command substitution ([PR](https://github.com/QwenLM/qwen-code/pull/6377))  
   *Prevents `kill -9 $(pgrep node)` from killing Qwen Code itself; fixes #6246.*

7. **#6404** — fix(core): Support large text range reads ([PR](https://github.com/QwenLM/qwen-code/pull/6404))  
   *Replaces 10MB file-size rejection with bounded line-range reads for text files.*

8. **#6390** — fix(shell): avoid Unix pager default on Windows ([PR](https://github.com/QwenLM/qwen-code/pull/6390))  
   *Platform-aware `PAGER` default: Windows leaves unset, Unix defaults to `cat`.*

9. **#6420** — fix(core): prevent KV-cache invalidation on tool_search ([PR](https://github.com/QwenLM/qwen-code/pull/6420))  
   *Reorders `reminderParts` array to keep stable system-reminder KV-cache intact; fixes #6265.*

10. **#6354** — feat(core): add `maxSubAgents` setting ([PR](https://github.com/QwenLM/qwen-code/pull/6354))  
    *Caps parallel sub-agents and queues extras without timeout countdown; closes #5176.*

11. **#6393** — feat(cli): review auto-generated skills with inline preview ([PR](https://github.com/QwenLM/qwen-code/pull/6393))  
    *Confirmation dialog now shows editor handoff and off-switch for skill reviewer.*

## Feature Request Trends
- **Sub-agent parallelism control**: Multiple requests (#5176, #6354) for configurable `maxSubAgents` to handle local LLM resource constraints — now merged.
- **Context-aware file handling**: Users want bounded reads for large files (#6403, #6408) instead of hard 10MB limits or context overflows.
- **Per-project model configuration**: Request (#6052) to decouple default model from per-project overrides, enabling project-specific model.name.
- **Chat compression model independence**: PR #6019 adds `/model --compaction` flag for dedicated compaction models, addressing repetitive context-window issues.
- **Deferred-tool visibility control**: PR #6372 adds `tools.visible` config, letting users bypass `tool_search` for frequently-used tools.

## Developer Pain Points
- **Token management remains the #1 frustration**: Issues #6264 (/review token consumption), #6384 (hard limit: 0), #6408 (PDF overflows) all highlight painful token tracking and context-window management.
- **Windows compatibility is a recurring gap**: Issues #6298 (shell tool fails), #6334 (extensions install), #6390 (Unix pager default) show ongoing cross-platform friction.
- **Session navigation after compression broken**: Issue #6318 and PR #6358 demonstrate that `/rewind` after `/compress` is non-obvious and fragile — a core UX issue.
- **KV-cache invalidation on deferred-tool discovery**: Issue #6265 and PR #6420 reveal a performance-critical bug affecting prefix-caching LLM servers (llama.cpp, vLLM, Ollama).
- **Startup context polluting session titles**: Issue #6419 shows that skills lists and system reminders leak into auto-titles, degrading user experience.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-07-07  
**Repository:** [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

---

## 1. Today's Highlights

The CodeWhale (formerly DeepSeek TUI) team accelerated toward **v0.8.68** with a massive wave of issue-driven QA and refactoring, closing over 20 items from the `V0867_REVIEW_AND_REBUILD_PROMPT.md` pass. Maintainer **Hmbown** drove a structured review cycle addressing sub-agent reliability, TUI polish, localization parity, and palette/command-group refactors. A critical **SIGPIPE crash** when piping output was fixed via community PR #4043, and a **UTF-8 fuzzy match panic** in `edit_file` was patched in PR #4045. The v0.8.67 release shipped with Fleet/Workflow usability improvements, but already spawned a dense v0.8.68 backlog focused on testing coverage and code quality.

---

## 2. Releases

**No new releases** in the last 24 hours. The most recent release is **v0.8.67** (tracked in PR #4047), which included Fleet/Workflow usability fixes, a goal-timer bug fix, and the `whaleflow→workflow` rename. Release candidate was cleanly fast-forwarded to `main` (78 commits ahead).

---

## 3. Hot Issues (Top 10)

1. **[#4032 – Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)**  
   *22 comments | OPEN*  
   **Why it matters:** A behavioral issue where `codewhale` ignores user-provided scripts and writes temporary ones instead, then justifies the behavior. This undermines trust in agent autonomy and has the highest community engagement today.

2. **[#4042 – Environment-level tool sandboxing for sub-agents](https://github.com/Hmbown/CodeWhale/issues/4042)**  
   *9 comments | OPEN*  
   **Why it matters:** Proposes runtime enforcement of `--disallowed-tools` across sessions, sub-agents, Fleet workers, and MCP servers. Directly addresses security and policy control for multi-agent workflows.

3. **[#4027 – `always_load` MCP server field to skip defer_loading](https://github.com/Hmbown/CodeWhale/issues/4027)**  
   *3 comments | OPEN*  
   **Why it matters:** High-frequency MCP tools incur a retry round-trip on first invocation due to default deferred loading. This feature would eliminate that latency for frequently-used tools.

4. **[#4085 – Cannot read/write files under macOS CloudStorage/Dropbox](https://github.com/Hmbown/CodeWhale/issues/4085)**  
   *1 comment | OPEN*  
   **Why it matters:** Affects macOS users on File Provider framework. Binary is ad-hoc signed with zero entitlements — a platform integration bug that blocks Dropbox-using developers.

5. **[#4029 – Planning to create an interface similar to Reasonix?](https://github.com/Hmbown/CodeWhale/issues/4029)**  
   *2 comments | OPEN*  
   **Why it matters:** Community inquiry about emulating Reasonix's interface. Signals interest in alternative TUI paradigms.

6. **[#4061 – v0.8.67 tracker: convert review prompt into issue-driven release work](https://github.com/Hmbown/CodeWhale/issues/4061)**  
   *3 comments | CLOSED*  
   **Why it matters:** Systematic methodology shift — replacing ad-hoc review prompts with tracked, verifiable issues for release cycles.

7. **[#4052 – `worktree=true` should discover nested repos from harness directories](https://github.com/Hmbown/CodeWhale/issues/4052)**  
   *3 comments | CLOSED*  
   **Why it matters:** Workflow sub-agent failure — when CWD is a harness directory, nested repos are missed. Fixed for v0.8.67.

8. **[#4030 – Panic on broken pipe (SIGPIPE) when piping output](https://github.com/Hmbown/CodeWhale/issues/4030)**  
   *2 comments | CLOSED*  
   **Why it matters:** `codewhale doctor | head` would crash with a noisy dump. Already fixed by community PR #4043.

9. **[#3971 – `edit_file` panics on non-ASCII text after fuzzy match](https://github.com/Hmbown/CodeWhale/issues/3971)**  
   *1 comment | CLOSED*  
   **Why it matters:** CJK/multibyte characters triggered a slice panic in the TUI file editor. Fixed in PR #4045.

10. **[#4076 – v0.8.68 QA: backfill release regression tests for bug fixes](https://github.com/Hmbown/CodeWhale/issues/4076)**  
    *1 comment | CLOSED*  
    **Why it matters:** Systematic test debt repayment — ensures v0.8.67 fixes are covered before v0.8.68 ships.

---

## 4. Key PR Progress (Top 10)

1. **[#4043 – fix(cli): reset SIGPIPE to SIG_DFL so piped output exits cleanly](https://github.com/Hmbown/CodeWhale/pull/4043)**  
   *CLOSED | Author: aznikline*  
   **Fix:** Resolves panic when piping to `head`/early-exit commands. Simple signal handler reset — clean, targeted fix with high impact.

2. **[#4084 – fix(fleet): reject retired profile loadout aliases](https://github.com/Hmbown/CodeWhale/pull/4084)**  
   *OPEN | Author: cyq1017*  
   **Fix:** Removes deprecated `model_class_hint` and `route_tier` from workspace profile TOML, enforcing canonical `loadout` field.

3. **[#4047 – Release 0.8.67 — Fleet/Workflow usability, goal-timer fix, rename](https://github.com/Hmbown/CodeWhale/pull/4047)**  
   *CLOSED | Author: Hmbown*  
   **Release:** Merged 78 commits — Fleet/Workflow UX improvements, `whaleflow→workflow` rename. Fast-forward to `main`.

4. **[#4046 – Layer 5.1: User command registry and loading boundary](https://github.com/Hmbown/CodeWhale/pull/4046)**  
   *CLOSED | Author: aboimpinto*  
   **Architecture:** Verified existing user-command registry satisfies all criteria for Markdown/frontmatter commands. No code changes needed — purely validation.

5. **[#3969 – Add per-sub-agent provider routing](https://github.com/Hmbown/CodeWhale/pull/3969)**  
   *OPEN | Author: heyparth1*  
   **Feature:** Held for v0.8.68 — adds provider routing per sub-agent, aligned with fleet/routing redesign. Blocks until taxonomy work lands.

6. **[#4045 – [codex] fix edit_file UTF-8 fuzzy cursor panic](https://github.com/Hmbown/CodeWhale/pull/4045)**  
   *OPEN | Author: nightt5879*  
   **Fix:** Prevents panic when normalized fuzzy match lands on CJK/multibyte characters. Advances cursor by grapheme cluster, not byte.

7. **[#4044 – fix(onboarding): localize dynamic welcome steps](https://github.com/Hmbown/CodeWhale/pull/4044)**  
   *OPEN | Author: nightt5879*  
   **Feature:** Localizes first-run welcome screen via `MessageId` registry. Shows only relevant onboarding gates. Includes `zh-Hant` locale.

8. **[#4071 – v0.8.68 Engine: auto-inject git workspace snapshot into turn_meta](https://github.com/Hmbown/CodeWhale/pull/4071)**  
   *(Issue tracked; PR not yet filed)*  
   **Feature:** Per-turn automatic git workspace context injection — distinct from user-triggered `@git` mentions.

9. **[#4074 – v0.8.68 Tools: auto-retry deferred tool once after schema hydration](https://github.com/Hmbown/CodeWhale/pull/4074)**  
   *(Issue tracked; PR not yet filed)*  
   **Fix:** First deferred-tool invocation today fails when schema was hidden. Auto-retry would eliminate this common friction.

10. **[#4081 – v0.8.68 refactor(palette): separate theme tokens from adaptation logic](https://github.com/Hmbown/CodeWhale/pull/4081)**  
    *(Issue tracked; PR not yet filed)*  
    **Refactor:** 2,628-line `palette.rs` mixes stable RGB tokens with OS/terminal adaptation code. Separation improves maintainability.

---

## 5. Feature Request Trends

1. **Agent Behavioral Governance**  
   Multiple issues (#4032, #4042) demand stricter control over agent autonomy — banning script generation, enforcing tool restrictions, and requiring verifiable completion receipts.

2. **MCP Tool Latency Optimization**  
   Issue #4027 requests `always_load` to skip deferred loading for high-frequency MCP tools. Community wants to eliminate the first-invocation retry round-trip.

3. **Localization & Onboarding Parity**  
   Consistent requests for full locale support (zh-Hant, others) and non-DeepSeek-first onboarding (#4057, #4062, #4044). The product is actively expanding beyond DeepSeek-centric messaging.

4. **Sub-Agent Runtime Reliability**  
   Multiple v0.8.67 child issues (#4050–#4055) address empty child output, token-budget exhaustion, non-verifiable goals, and UI rendering race conditions in sub-agent workflows.

5. **macOS File Provider Integration**  
   Issue #4085 exposes a gap in CloudStorage/Dropbox access. Likely to grow as macOS developers adopt File Provider framework.

---

## 6. Developer Pain Points

1. **Panic on Piped Output**  
   `codewhale doctor | head` would crash (SIGPIPE panic). Fixed by #4043, but reflects a broader need for robust process lifecycle handling.

2. **CJK/Multibyte Text Handling**  
   Issue #3971: `edit_file` panics on non-ASCII text after normalized fuzzy matching. Highlights insufficient Unicode/UTF-8 testing in TUI file tools.

3. **Sub-Agent Completion Without Output**  
   Issue #4050: agents can "complete" with empty output when hitting max-steps or tool errors. No structured failure surface for parents.

4. **Non-verifiable Goals Loop**  
   Issue #4054: documentation/research goals cannot be marked complete because verifier receipt is required. Creates infinite continuation loops.

5. **Stale Feature Labels in UI**  
   Issue #4056: shipped features (MCP, web tools) still labeled `experimental` in Session Configuration. Undermines user confidence in stable features.

6. **Locale Incompleteness**  
   Issue #4057: partial locale packs ship without failing CI — only core messages are validated. Users in non-English locales see mixed-language UIs.

---

*Digest generated from Hmbown/DeepSeek-TUI issues and PRs activity on 2026-07-07.*

</details>