# AI CLI Tools Community Digest 2026-07-07

> Generated: 2026-07-07 10:14 UTC | Tools covered: 9

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
**Analysis Date:** 2026-07-07

---

## 1. Ecosystem Overview

The AI CLI tools landscape on July 7, 2026 shows a maturing but fragmented ecosystem where eight major tools compete across overlapping use cases. Claude Code dominates community engagement volume and issue velocity, while OpenAI Codex leads in engineering throughput with 10 significant PRs merged across reliability, observability, and Windows platform fixes. Gemini CLI and CodeWhale (rebranded DeepSeek TUI) are in active stabilization phases, the latter closing 28 issues in a single day. A clear stratification is emerging: established tools (Claude Code, Codex, Copilot CLI) battle platform-specific regressions and scaling pains, while smaller tools (Kimi Code, OpenCode, Qwen Code, Pi) race to achieve feature parity in IDE integration, remote interaction, and enterprise readiness. The most concerning cross-cutting signal is the prevalence of **silent failures**—agents reporting success while failing, telemetry corruption, and permission bypasses—suggesting a systemic quality gap in agent reliability testing.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable Metric |
|------|-------------|-----------|----------------|----------------|
| **Claude Code** | 10 noteworthy | 2 active | v2.1.202 shipped | 94 👍 on welcome banner toggle |
| **OpenAI Codex** | 10 hot (3 new today) | 10 significant | 2 alpha releases (rust) | 426 👍 on SQLite telemetry issue |
| **Gemini CLI** | 10 hot | 10 merged | v0.51.0-nightly | 10 comments on false-success bug |
| **Copilot CLI** | 10 hot (3+ new today) | 0 updated | v1.0.69-2 shipped | 12 comments on plugin confirmation dialog |
| **Kimi Code** | 1 new + 9 backlog | 0 updated | No release | Single active issue (ACP usage limits) |
| **OpenCode** | 12 new | 14 landed | v1.17.14 shipped (rocky) | 9 comments on Windows ARM64 crash |
| **Pi** | 8 burst (API server) | 10 merged | No release | 12 comments on null content crash |
| **Qwen Code** | 0 new | 50 open | v0.19.6-nightly | WeCom channel & markdown table features merged |
| **CodeWhale** | 28 closed + new | 10 tracked | v0.8.67 (CodeWhale) | 22 comments on constitution governance |

---

## 3. Shared Feature Directions

The following requirements appear across **multiple tool communities**, indicating genuine market demand:

| Requirement | Tools (Count) | Specific Needs |
|-------------|---------------|----------------|
| **TUI/Interface Configurability** | Claude Code, Copilot CLI, OpenCode, CodeWhale (4) | Welcome banner toggle, clickable prompt disable, model picker fixes, UI framework migration |
| **Windows Platform Parity** | Claude Code, Codex CLI, Copilot CLI, OpenCode (4) | tmux/Linux rendering, Windows hook execution, ARM64 crashes, BSOD issues |
| **Plugin/Extension Maturity** | Copilot CLI, Pi, CodeWhale, Qwen Code (4) | Silent rewrites, deferred loading, extension hooks, always-load MCP servers |
| **Model/Safety Transparency** | Claude Code, Codex CLI, Gemini CLI (3) | Fallback warnings, false-positive overrides, structured refusal reasons |
| **Remote/Headless Control** | Codex CLI, Gemini CLI, Qwen Code (3) | SSH support, headless re-pairing, HTTP+WebSocket server |
| **Enterprise Hardening** | Copilot CLI, Kimi Code, Qwen Code (3) | BYOK support, local-only mode, TLS certificate flexibility |
| **AST-Aware Code Understanding** | Claude Code, Gemini CLI, OpenCode (3) | Method-bound reads, improved grep, smart tool scoping |
| **Data Portability** | Claude Code, Kimi Code, Pi (3) | Export/import sessions, Markdown/JSON history, session IDs |

**Most Convergent Signal:** **TUI and interface configurability** appears as the most widely shared demand (4 tools), suggesting terminal-centric developers have strong, unmet expectations for customizable CLI experiences.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Rest (Kimi, OpenCode, Pi, Qwen, CodeWhale) |
|-----------|-------------|--------------|------------|-------------|--------------------------------------------|
| **Primary Target** | AI-assisted coding workflows | General AI agent platform | Agent orchestration & subagents | GitHub-integrated coding | Niche/regional/performance-focused |
| **Technical Approach** | TUI-heavy, MCP integrated | Sandbox-centric (Windows focus) | Subagent orchestration kernel | Plugin hooks, OAuth flows | Varies: Bun runtime (Pi), channel integrations (Qwen) |
| **Current Pain Point** | Safety filter false positives | Windows sandbox fragility | Agent false success reporting | Windows hook incompatibility | Startup crashes, streaming reliability |
| **Engineering Velocity** | Moderate (bugfix releases) | High (10 PRs, alpha volume) | High (10 PRs, nightly releases) | Low (0 PRs today) | Variable (CodeWhale high; Kimi low) |
| **Community Engagement** | Highest volume (emotionally charged) | High (structured issues/PRs) | Moderate (targeted bugs) | Moderate (plugin focus) | Low-to-moderate (growing) |
| **Key Strength** | Ecosystem maturity, MCP adoption | Reliability engineering discipline | Agent failure-aware architecture | GitHub ecosystem integration | Platform experimentation (Qwen channels, Pi API server) |
| **Key Weakness** | TUI regressions, opaque safety rules | Windows stability, rate-limit bugs | Agent false positives, hangs | Non-interactive mode bugs, Windows friction | Session management, corporate features |

**Notable Pattern:** **OpenAI Codex** stands out for its engineering discipline—multiple thread-safety PRs (#31388, #31349) and observability improvements (#31368) suggest a team investing heavily in foundational reliability. **Claude Code** has the most active but most distressed community, dealing with safety-filter, cost, and UI regressions simultaneously.

---

## 5. Community Momentum & Maturity

**High Momentum (Rapid Iteration, Growing Communities):**
- **OpenAI Codex** — 10 significant PRs today, multiple alpha releases, systematic approach to thread safety and observability. The 426-upvote SQLite telemetry issue demonstrates a community that self-polices quality concerns effectively.
- **Gemini CLI** — 10 PRs merged across core reliability (SIGINT cancellation, context compression, MCP elicitation). The nightly release cadence indicates active development despite persistent agent bugs.
- **CodeWhale** — Rebranding to CodeWhale and closing 28 issues in one day signals a maintainer re-engaged with structured release management. The extension ecosystem (TormentNexus PR) shows nascent community contributions.

**Moderate Momentum (Stable but Slower):**
- **Claude Code** — Shipping releases (v2.1.202) but accumulating high-engagement issues with no response (94-upvote welcome banner toggle, safety filter false positives). Risk of community fatigue if top requests remain unaddressed.
- **Copilot CLI** — Released v1.0.69-2 but 0 PRs updated today. Plugin infrastructure has rough edges. The 18-upvote multi-agent request (#1389) indicates untapped demand.
- **OpenCode** — High PR velocity (14 landed) with rocky release quality (v1.17.14 crash loops). Permission fix PRs (glob, grep) show security-conscious development, but Desktop stability regressions are concerning.

**Lower Momentum (Niche or Consolidating):**
- **Kimi Code** — Single active issue in 24 hours, no releases or PRs. ACP integration requests suggest a tool in transition, possibly awaiting platform decisions.
- **Qwen Code** — 50 open PRs but 0 new issues today. Merged WeCom and markdown features, suggesting focus on channel expansion over core bug fixing.

**Ecosystem Maturity Assessment:** The ecosystem is in **early mainstream adoption** — tools are functional but users regularly encounter platform-specific regressions, silent failures, and missing enterprise features. No single tool has achieved "boring reliability" status; all have notable pain points that limit production deployment.

---

## 6. Trend Signals

### Industry Trends from Community Feedback

1. **Silent Failure Epidemic** — The most dangerous pattern across tools: subagents reporting success after hitting limits (Gemini CLI #22323), CI passing with false spend limits (Claude Code #39678), and LLMs hallucinating attachments (Pi #6290). The ecosystem needs **explicit failure signaling** as a baseline quality standard.

2. **Windows as the Second-Class Platform** — Copilot CLI hooks fail on PowerShell (#4001), Codex causes BSODs (#31035), Claude Code lacks Linux tmux parity (#74122), and OpenCode crashes on ARM64 (#20767). Windows developers face a consistently degraded experience across all tools.

3. **Cost Explosion from Autonomous Agents** — The Claude Code financial loss incident (#75103) and Codex 5-hour limit drains (#30918, #31345) highlight that **agent autonomy without cost controls** is a financial risk. Expect demand for budget caps, preview-of-costs, and agent pause/approval gates.

4. **Safety Filters Harming Legitimate Work** — Claude Code's cybersecurity false positives (#75210 cluster) and Gemini's content stripping (#6376) show safety systems are incorrectly blocking licensed developers. The industry needs **reproducible override mechanisms** for false positives.

5. **Extension/Plugin Ecosystem Evolution** — Copilot CLI requests `permissionDecision: allow` silent rewrites (#2643), Pi implements deferred extension loading (#6360), and CodeWhale gets TormentNexus (persistent memory, RBAC). The plugin model is **immature but rapidly demanded** — expect a standardization push in H2 2026.

6. **Multi-Model Provider Neutrality** — Pi's OpenAI-compatible API server (#6390-6384), CodeWhale's per-sub-agent provider routing (#3969), and Qwen's TLS flexibility (#3535) all point to users wanting **freedom from vendor lock-in** at the agent orchestration layer.

### Reference Value for Developers

- **If you need production reliability today:** OpenAI Codex leads in engineering rigor (thread safety, telemetry). But expect Windows issues and rate-limit accounting bugs.
- **If you need rich terminal experience:** Claude Code has the deepest TUI but regresses on tmux and safety filters. Consider Gemini CLI for more predictable agent behavior.
- **If you need enterprise controls:** Copilot CLI offers GitHub integration and plugin hooks, but Windows and non-interactive mode are weak. BYOK support is coming.
- **If you need multi-platform support:** **None of these tools are ready for heterogeneous environments.** Windows, Linux ARM, and macOS all have distinct failure modes.
- **If you need cost predictability:** **Do not run autonomous agents unattended.** Implement hard budget caps, preview tool calls, and audit trails externally until tools ship native cost controls.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-07-07 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

The community's most-discussed Pull Requests reveal distinct clusters of interest:

| Rank | PR # | Skill | Comments | Focus | Status |
|------|------|-------|----------|-------|--------|
| 1 | #1298 | **skill-creator: run_eval.py fix** | Highest | Windows compat, 0% recall bug | Open |
| 2 | #514 | **document-typography** | High | Typographic quality control | Open |
| 3 | #538 | **PDF case-sensitive fix** | High | Cross-platform file path fix | Open |
| 4 | #486 | **ODT/OpenDocument** | High | LibreOffice document creation | Open |
| 5 | #210 | **frontend-design** | High | Design clarity & actionability | Open |
| 6 | #83 | **skill-quality-analyzer / skill-security-analyzer** | High | Meta-skills for analysis | Open |

**Detailed Highlights:**

- **[#1298 – run_eval.py fix](https://github.com/anthropics/skills/pull/1298)** (MartinCajiao): The most-discussed PR addresses a critical regression where `run_eval.py` reports `recall=0%` for every skill description. Discussion centers on Windows stream reading, trigger detection logic, and parallel worker behavior. This is a core infrastructure fix affecting the entire skill-creator loop—currently blocking all description optimization.

- **[#514 – document-typography](https://github.com/anthropics/skills/pull/514)** (PGTBoos): Introduces typographic quality control for AI-generated documents, targeting orphan word wrap, widow paragraphs, and numbering misalignment. High community resonance because "these issues affect every document Claude generates" but users rarely request fixes explicitly.

- **[#486 – ODT skill](https://github.com/anthropics/skills/pull/486)** (GitHubNewbie0): Full OpenDocument format support (.odt, .ods) including template filling and ODT-to-HTML conversion. Discussion indicates strong demand for LibreOffice/ISO-standard document workflows that complement the existing PDF and DOCX skills.

- **[#210 – frontend-design revision](https://github.com/anthropics/skills/pull/210)** (justinwetch): A substantive rewrite focused on making every instruction actionable within a single conversation. Community feedback emphasizes the need for design skills that produce specific, steered behavior rather than vague principles.

- **[#83 – skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (eovidiu): Two meta-skills that evaluate skills across five quality dimensions (Structure, Documentation, Security, etc.) and detect security vulnerabilities. These are foundational for the growing marketplace—essentially a linter for skills themselves.

---

## 2. Community Demand Trends

From the top Issues, the community's most-anticipated directions are:

### 🛡️ Security & Trust (Issue #492 – 34 comments)
**[Security: Community skills under anthropic/ namespace](https://github.com/anthropics/skills/issues/492)** is the most-discussed issue overall. Community members discovered that skills distributed in the `anthropic/` namespace can impersonate official Anthropic skills, creating a trust boundary vulnerability. Demand: *a permissions/namespace governance system for community skills*.

### 🔄 Enterprise Workflow (Issue #228 – 14 comments)
**[Enable org-wide skill sharing](https://github.com/anthropics/skills/issues/228)** (+7👍): Organizations need direct skill sharing within Claude.ai without manual file transfers via Slack/Teams. Demand: *a shared skill library or direct sharing links*.

### 🛠️ Tooling Reliability (Issues #556, #1169, #1061 – 12, 3, 3 comments)
Three issues independently report the `run_eval.py` 0% trigger rate bug on different platforms. The community is investing heavily in making skill-creator tooling cross-platform (Windows/Linux/macOS) and reliable.

### 🧩 Architecture Integration (Issue #16)
**[Expose Skills as MCPs](https://github.com/anthropics/skills/issues/16)** – A forward-looking proposal to expose Skill capabilities as Model Context Protocol servers, enabling skills to be composed programmatically.

### 📦 Plugin Organization (Issue #189 – 6 comments, +9👍)
Duplicate content between `document-skills` and `example-skills` plugins—the community wants *clearer packaging and deduplication* across skill collections.

---

## 3. High-Potential Pending Skills

These active, open PRs have significant community traction and are likely to land soon:

| PR | Skill | Why It Matters |
|----|-------|-----------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** (v1.3.0) | Mechanical file verification + four-dimension reasoning audit. Universal across projects/tech stacks. Created June 28—very recent, high activity. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Comprehensive color knowledge (ISCC-NBS, Munsell, OKLCH, CAM16). Self-contained expertise for design/CSS tasks. |
| [#806](https://github.com/anthropics/skills/pull/806) | **sensory** (macOS automation) | Native macOS automation via AppleScript—a screenshot-free alternative to computer use. Two-tier permission system. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Full-stack testing: Trophy model, AAA pattern, React Testing Library, Python/Cypress testing. |
| [#1099](https://github.com/anthropics/skills/pull/1099) | **skill-creator Windows fix** | Fixes the subprocess pipe crash on Windows—unblocks skill creation for the entire Windows community. |
| [#1050](https://github.com/anthropics/skills/pull/1050) | **skill-creator Windows compat** | Companion fix for `PATHEXT`, `cp1252` encoding—closes the Windows gap. |
| [#362](https://github.com/anthropics/skills/pull/362) | **UTF-8 multi-byte fix** | Prevents Rust panics on multi-byte characters in skill descriptions. |
| [#361](https://github.com/anthropics/skills/pull/361) | **YAML special chars detection** | Prevents silent YAML parsing failures from unquoted special characters. |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Community health gap fix—raises repo score from 25% on GitHub metrics. |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX bookmark collision fix** | Prevents document corruption when DOCX tracked changes conflict with existing bookmarks. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *skill infrastructure reliability and cross-platform compatibility*—specifically fixing the run_eval.py 0% recall bug on Windows, implementing namespace/trust governance, and enabling organizational sharing—rather than for any single new skill domain.**

The top discussions (#1298, #492, #556, #228) are not about new skills; they are about making the existing skill ecosystem *trustworthy, shareable, and functional across platforms*. Skills themselves (document-typography, ODT, color-expert, testing-patterns) are emerging as proven templates, but the community's priority is clearly the *tooling and governance layer* that supports them.

---

# Claude Code Community Digest — 2026-07-07

## Today's Highlights

Version **v2.1.202** ships with a new "Dynamic workflow size" setting, giving developers advisory control over agent counts. A sharp regression in **tmux rendering** (v2.1.200+) has drawn rapid community reports, while repeated **safety-filter false positives** on legitimate cybersecurity work are generating multi-threaded user frustration. The top-voted enhancement request — **disabling the welcome banner** — now sits at 94 👍 with no action.

---

## Releases

**v2.1.202** ([changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.202))

- **Dynamic workflow size** (`/config`): new small/medium/large setting for controlling how large Claude makes dynamic workflows. Advisory guideline, not an enforced cap.
- **Telemetry additions**: `workflow.run_id` and `workflow.name` added as OpenTelemetry attributes.

---

## Hot Issues (10 Noteworthy)

1. **[#2254 — Disable the welcome banner](https://github.com/anthropics/claude-code/issues/2254)**  
   *Enhancement, 31 comments, 94 👍*  
   The most-liked open issue. Users want a toggle to suppress the welcome screen and tips that waste terminal space on every launch. No response from Anthropic.

2. **[#39678 — Code Review overage false-positive](https://github.com/anthropics/claude-code/issues/39678)**  
   *Bug, 15 comments, 13 👍*  
   Claude Code Review on GitHub incorrectly reports spend limits reached when actual spend is $0/$250. Blocks CI workflows with a false alarm.

3. **[#49282 — macOS Privacy & Security re-registration on every update](https://github.com/anthropics/claude-code/issues/49282)**  
   *Bug, 15 comments, 9 👍*  
   Versioned install paths cause the binary to re-register as a new app in macOS Privacy & Security settings on each update — a persistent UX friction for Mac users.

4. **[#74122 — TUI garbled inside tmux (regression since v2.1.200)](https://github.com/anthropics/claude-code/issues/74122)**  
   *Bug, 5 comments, 1 👍*  
   Clean regression: v2.1.199 works; v2.1.200+ renders corrupted text in tmux, only repainting on forced redraw. Critical for Linux/Mac devs using tmux.

5. **[#70622 — Option to disable clickable Yes/No prompts](https://github.com/anthropics/claude-code/issues/70622)**  
   *Enhancement, 13 comments, 49 👍*  
   Overwhelming negative reception to clickable permissions — users report accidental approvals and cancellations. "Make it configurable" is the clear demand.

6. **[#74325 — `opusplan` silently falls back to Sonnet](https://github.com/anthropics/claude-code/issues/74325)**  
   *Bug, 3 comments, 1 👍*  
   Persistent global model pin `opusplan` silently degrades to Sonnet during plan mode with no user signal. Undermines confidence in model selection.

7. **[#75210 / #74463 / #75212 — Cybersecurity safety-filter false positives](https://github.com/anthropics/claude-code/issues/75210)**  
   *Bug, 2 comments each*  
   Recurring pattern: authorized reverse-engineering and defensive-hardening sessions halted by safety blocks. Users report reproducible server-side false positives. Systematic issue (user @sworrl filed multiple reports).

8. **[#75103 — Autonomous sessions caused financial loss](https://github.com/anthropics/claude-code/issues/75103)**  
   *Bug, 1 comment*  
   Compounded agent behaviors consumed a user's entire monthly ElevenLabs quota (~121k characters) in one day. Worktree-stranded assets + spend-before-validate automation pattern. Financial impact.

9. **[#75054 — Subagent model pin lost on wake/resume](https://github.com/anthropics/claude-code/issues/75054)**  
   *Bug, 1 comment*  
   Explicit `model: "sonnet"` on background agents works on first turn, but re-resolves to session model on wake or resume. Defeats the purpose of model pinning for subagents.

10. **[#75209 — Aborted request leaves CLI stuck in "Not logged in"](https://github.com/anthropics/claude-code/issues/75209)**  
    *Bug, 1 comment*  
    Aborting an in-flight request can permanently trap the CLI session in a false "not logged in" state. Requires session restart to recover.

---

## Key PR Progress (2 Recent)

1. **[#41453 — Safe Stop hook wrapper with PID lock and timeout](https://github.com/anthropics/claude-code/pull/41453)**  
   *Open, 0 comments*  
   Reference implementation (`examples/hooks/safe_stop_hook_example.py`) for running post-session background tasks from Stop hooks without runaway processes. Addresses issue #41393. Author: @m4cd4r4.

2. **[#74857 — Clarify plugin MCP configuration scope](https://github.com/anthropics/claude-code/pull/74857)**  
   *Closed, merged*  
   Documentation fix clarifying that plugin `mcpServers` configuration is separate from user-level MCP allow/deny lists in `~/.claude.json`. Reduces confusion about MCP configuration boundaries.

---

## Feature Request Trends

- **TUI configurability** dominates: welcome banner toggle (#2254, 94 👍), clickable prompt disable (#70622, 49 👍), cow modal UX improvements (#65781)
- **Cross-platform parity**: Windows clickable prompts (#70622), Linux tmux support (#74122), macOS Privacy & Security handling (#49282)
- **Model/safety transparency**: demand for explicit signals when model falls back (#74325), false-positive override capabilities (#75210 cluster)
- **Data portability**: native export/import for conversation history (#75185), session unarchiving (#73959)
- **VCS ecosystem**: Jujutsu (.jj/) repo detection (#74774), Git-only bias in environment metadata

---

## Developer Pain Points

- **Safety-filter false positives** are the most emotionally charged issue — legitimate cybersecurity work, medical imaging research, and defensive hardening are being halted without recourse. Users feel their work is blocked by opaque server-side rules with no appeal path.
- **tmux rendering regression** (v2.1.200+) breaks a core workflow for terminal-centric developers. The community identified the exact version boundary quickly, indicating good bisect practices.
- **Agent cost surprises** are becoming a real financial risk. The 121k-character quota drain incident (#75103) highlights that autonomous agent behaviors can compound in costly, non-obvious ways.
- **Silent model degradation** (`opusplan` → Sonnet fallback without warning) erodes trust in model configuration. Developers who pay for Opus access expect it to actually be used.
- **macOS update friction** (Privacy & Security re-registration) is a recurring complaint — every minor version update requires re-granting permissions, a uniquely macOS-specific pain point.
- **Overage limit false positives** (#39678) block CI/CD pipelines with phantom errors, wasting developer time on non-existent billing issues.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-07

## Today's Highlights
The community remains highly engaged around **rate-limit accounting anomalies** on Plus plans, with two new reports on July 7 compounding a growing frustration trend. A major **Windows SysmonDrv.sys BSOD issue** has emerged, with Community members linking the Codex Desktop sandbox to forced reinstallation of Sysinternals drivers and kernel crashes. On the engineering side, OpenAI is shipping a series of **core reliability PRs** around thread turn serialization and idle resume atomicity, alongside performance optimization work for plugin namespace loading.

---

## Releases
- **rust-v0.143.0-alpha.38** and **rust-v0.143.0-alpha.37** — Two alpha releases within 24 hours, no changelog details beyond version bumps. Likely continuous integration/deployment snapshots for the Rust-based Codex CLI components.

---

## Hot Issues (Top 10 by Community Attention)

### 1. [#28224] Codex SQLite feedback logs can write ~640 TB/year
**Impact:** Extreme SSD endurance concern; 426 👍, 136 comments.
The reporter initially flagged that Codex's telemetry SQLite logging could theoretically write terabytes per year. Since PRs #29432 and #29457 (merged into 0.142.0) have already cut logs by ~85%, this issue is now closed. **Lesson**: Aggressive telemetry defaults can silently destroy consumer SSDs. Community praised OpenAI's rapid fix.
[GitHub](https://github.com/openai/codex/issues/28224)

### 2. [#30364] GPT-5.5 reasoning-token clustering at fixed boundaries (516/1034/1552)
**Impact:** Suspected model-level bug degrading complex reasoning; 241 👍, 135 comments.
The community discovered that `gpt-5.5` responses cluster at token counts divisible by 516, coinciding with lower reasoning-to-output ratios. This suggests either an artificial token ceiling or a model routing quirk. Community members are cross-referencing with their own sessions to identify performance regressions.
[GitHub](https://github.com/openai/codex/issues/30364)

### 3. [#31035] Windows SysmonDrv.sys BSODs after Codex sandbox installs
**Impact:** Critical Windows stability issue; 19 comments.
Codex Desktop appears to force-reinstall Sysinternals Sysmon v13.22 even after manual removal, triggering kernel panics. Multiple WinDbg crash dump analyses point to `SysmonDrv.sys`. This is a severe integrity and stability concern for Windows Pro/Enterprise users with strict security baselines.
[GitHub](https://github.com/openai/codex/issues/31035)

### 4. [#30918] Usage limits draining 70%→100% in 6 minutes on Plus
**Impact:** Systematic billing/accounting bug; 17 comments. The 5-hour usage cap on ChatGPT Plus jumped from 70% to 100% in under 6 minutes of ordinary editing. Multiple users in the comments confirmed similar experiences. This suggests a server-side token accounting regression rather than client misreporting.
[GitHub](https://github.com/openai/codex/issues/30918)

### 5. [#29072] Windows `apply_patch` fails from package path
**Impact:** Blocks Windows Desktop patching workflow; 39 comments.
`codex-windows-sandbox-setup.exe` cannot launch from the MSIX package path, causing every `apply_patch` tool call to fail. This is a persistent blocker for users relying on sandboxed patch application. Workarounds involve manual file extraction.
[GitHub](https://github.com/openai/codex/issues/29072)

### 6. [#7353] Codex commands timeout after extended sessions
**Impact:** Long-standing, high-traffic issue; 18 comments.
A multi-month issue where Codex CLI commands become unresponsive after long interactive sessions. The thinking trace shows the agent stuck on partial plans. Likely related to context compression or subagent lifecycle bugs.
[GitHub](https://github.com/openai/codex/issues/7353)

### 7. [#19694] Desktop model picker filters valid models from catalog
**Impact:** Model selection broken for custom/config users; 19 👍. The app's model picker silently filters out models returned by the `model_catalog_json` endpoint. Enterprise and Plus users with custom model access cannot select them via the UI—must rely on API workarounds.
[GitHub](https://github.com/openai/codex/issues/19694)

### 8. [#30968] Chrome plugin `domSnapshot` fails: missing `incrementalAriaSnapshot`
**Impact:** Breaks browser automation; 3 comments.
The bundled `browser-client.mjs` in the Codex Chrome extension contains a mixed Playwright ARIA snapshot implementation. The `domSnapshot()` caller expects a method that the injected script doesn't export—a clear bundling/version mismatch error.
[GitHub](https://github.com/openai/codex/issues/30968)

### 9. [#31375] Context compression disconnects ~85% of the time
**Impact:** Blocks long-session productivity; 2 comments (filed today).
Context compression—critical for long conversations—fails the majority of attempts, losing pre-compression reasoning and steering the model to unrelated plans. The error is a transport-level disconnection (`stream disconnected before completion`), not a model refusal.
[GitHub](https://github.com/openai/codex/issues/31375)

### 10. [#31345] 5h limits "totally broken" for Plus plan users
**Impact:** Widespread accounting inconsistency; filed today.
A user with Plus plan shows multiple mornings hitting the 5-hour cap on very light work using GPT-5.4, despite previous days' usage being orders of magnitude higher. This joins #30918 as a second independent report of the same symptom within a week.
[GitHub](https://github.com/openai/codex/issues/31345)

---

## Key PR Progress (Top 10 by Engineering Significance)

### 1. [#31388] Make idle resume decisions atomic
**Core reliability improvement.** Prevents a completed settings update from triggering a stale cold replacement by serializing runtime config refreshes with the submission lifecycle. This is the fifth layer in the thread-safety defense.
[GitHub](https://github.com/openai/codex/pull/31388)

### 2. [#31349] Serialize thread turn transitions
**Multithreading fix.** Adds a per-session transition lock so turn start/abort/finish cannot race. Prevents "taskless turns" from accepting injected input and ensures late mail properly starts a new turn. Fourth thread-corruption fix in the current series.
[GitHub](https://github.com/openai/codex/pull/31349)

### 3. [#31348] Resolve plugin namespaces per root (performance)
**Speed optimization.** Restructures plugin namespace loading to avoid bottlenecking on root path discovery. Benchmark from [#31295] showed this was a major startup latency contributor for users with many skills.
[GitHub](https://github.com/openai/codex/pull/31348)

### 4. [#30863] Report structured Git status refusals
**Developer ergonomics.** Changes workspace change detection so that instead of a blanket "unavailable" boolean, Codex returns structured reasons for `git status` failures (e.g., repository-configured executable filters). Reduces debugging guesswork.
[GitHub](https://github.com/openai/codex/pull/30863)

### 5. [#31379] Expose web search source URLs
**Transparency feature.** Adds source URL metadata from the Responses API through the v2 protocol. Useful for verification and citation in agent outputs.
[GitHub](https://github.com/openai/codex/pull/31379)

### 6. [#31355] Refactor: make ExternalAuth return CodexAuth
**Internal plumbing.** Mechanical refactor eliminating the parallel `ExternalAuthTokens` wrapper. No behavior change—prepares for future auth capability expansions.
[GitHub](https://github.com/openai/codex/pull/31355)

### 7. [#30642] Accept empty HTTP responses for one-way MCP messages
**Protocol compliance.** Allows empty successful responses for JSON-RPC notifications, responses, and errors (while still requiring bodies for requests like `initialize`). Fixes compatibility with minimal MCP servers.
[GitHub](https://github.com/openai/codex/pull/30642)

### 8. [#31368] Expose turn TTFT in traces (merged)
**Observability win.** Emits `codex.turn.ttft` OTel marker spans, letting operations teams track time-to-first-token per turn in milliseconds. Already merged.
[GitHub](https://github.com/openai/codex/pull/31368)

### 9. [#31369] Test plugin namespace loading
**Test coverage.** Locks down existing plugin namespace loading behavior before a performance optimization changes it. Covers mixed plain/nested plugins, inherited namespaces, and invalid manifests.
[GitHub](https://github.com/openai/codex/pull/31369)

### 10. [#29569] Surface unattributed network denials to parent turn (merged)
**Safety/compliance.** When Guardian blocks a network request without an exact exec owner, the denial rationale is now persisted in the parent turn. Previously, such denials were silently swallowed.
[GitHub](https://github.com/openai/codex/pull/29569)

---

## Feature Request Trends

1. **SSH Remote Project Support (Windows)** — [#31390] asks for Windows Codex Desktop to support OpenSSH Windows Server hosts as remote projects, mirroring existing Linux/Unix SSH support. This is a recurring ask from Windows system administrators.

2. **Better Rate-Limit Transparency** — Multiple issues implicitly request real-time usage meters, notifications before hitting caps, or per-model accounting breakdowns. The current "5-hour" opaque window is a constant source of confusion and frustration.

3. **Headless/VPS Remote Control Re-pairing** — [#31183] highlights that headless Linux setups cannot re-pair after the QR/PIN flow replaced the previous pairing method. There is demand for a token-based or API-key re-pairing path for headless environments.

4. **Plugin Hook Resilience** — [#31383] shows that marketplace auto-upgrades can silently invalidate cached plugin binaries mid-session, breaking all subsequent hooks. Users want version-pinned or restart-safe plugin loading.

5. **Audio/Visual Context in Sandbox** — Implicit in many Windows sandbox bugs: users want the sandbox to properly handle media (images, audio) in remote/Windows contexts, not just Linux.

---

## Developer Pain Points

1. **Windows Sandbox Fragility** — The single largest cluster of issues (issues #29072, #31035, #27376, #25478, #24490, #31248, #28107, #31142, #31383, #31387) covers every aspect of the Windows sandbox: elevated setups failing, driver BSODs, parameter errors, stale binary problems, and patch tool failures. Windows remains the most unreliable Codex platform.

2. **Rate-Limit Accounting Broken** — Two high-traffic issues (#30918, #31345) independently report the same symptom: Plus-plan users hitting their 5-hour cap in minutes, not hours, on light usage. This appears to be a server-side billing bug, not client-side.

3. **Context Compression Unreliability** — [#31375] reports an ~85% failure rate during context compression, losing reasoning state. Combined with issue #7353 (timeouts after long sessions), this suggests core state management problems for long-running agents.

4. **Model Routing Opaqueness** — [#30364] reveals that GPT-5.5 token clustering at fixed boundaries may be silently degrading performance. Developers feel they lack visibility into which model variant they're actually using and whether it's being truncated.

5. **Remote Control Fragmentation** — Multiple issues (#31117, #31183, #31387) describe failed pairing, broken re-pairing after QR/PIN migration, and missing Windows support. The remote-control feature seems to lack a cohesive cross-platform strategy.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-07-07

---

## Today's Highlights

The latest nightly release (v0.51.0) ships two critical fixes: macOS sandbox hardening (`~/.gitconfig` is now read-only) and proper handling of escape sequences in string literals for modern Gemini models. The community continues to report persistent agent reliability issues, with the most active discussion focused on a bug where subagents falsely report "success" after hitting `MAX_TURNS`, masking real interruptions. A flurry of recently merged PRs this week resolved long-standing issues around MCP elicitation support, SIGINT cancellation, and telemetry initialization race conditions.

---

## Releases

**v0.51.0-nightly.20260707.g15a9429b6**

- **fix(sandbox):** Make `~/.gitconfig` read-only in the macOS sandbox – prevents sandboxed processes from modifying global git config (which could drive command execution via aliases or hooks).
- **fix(core):** Preserve escape sequences in string literals (e.g., `\n`, `\t`) for modern Gemini 2.x/3.0 models, fixing a bug where valid escapes were incorrectly converted to literal newlines when writing files.

---

## Hot Issues

1. **[#22323 – Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *Priority P1, Kind: Bug, Comments: 10*  
   A `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` despite hitting its maximum turn limit before performing any analysis. This masking of failures is a critical agent reliability concern. Community engagement is high, with 2 👍.

2. **[#24353 – Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   *Priority P1, Kind: Customer Issue, Comments: 7*  
   An EPIC tracking the expansion of behavioral eval tests (currently 76 tests for 6 models). This is foundational for systematically improving agent quality.

3. **[#21409 – Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *Priority P1, Kind: Bug, Comments: 7, 👍: 8*  
   The generalist agent hangs indefinitely when performing simple tasks like folder creation. Users report cancelling after waiting up to an hour. A workaround exists (instructing the model not to defer to subagents), but the bug severely impacts usability. High community resonance.

4. **[#22745 – Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *Priority P2, Kind: Feature, Comments: 7*  
   Investigates whether AST-aware tools could reduce token usage and misaligned reads by precisely reading method bounds in a single tool call.

5. **[#21968 – Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *Priority P2, Kind: Bug, Comments: 6*  
   Anecdotal report that even with properly described custom skills (e.g., "git", "gradle"), the model rarely invokes them autonomously, requiring explicit user instruction.

6. **[#26522 – Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *Priority P2, Kind: Bug, Comments: 5*  
   Auto Memory only marks sessions as processed when successfully read. Low-signal sessions that are skipped remain unprocessed, causing the extraction agent to re-evaluate them repeatedly, wasting resources.

7. **[#25166 – Shell command execution gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *Priority P1, Kind: Bug, Comments: 4, 👍: 3*  
   Simple shell commands (that do not request user input) hang with an "Awaiting user input" state after finishing. Affects core CLI reliability.

8. **[#21983 – Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *Priority P1, Kind: Bug, Comments: 4*  
   The browser subagent terminates with `Termination Reason: GOAL` immediately on Wayland displays, making it completely non-functional for Linux users with Wayland.

9. **[#20079 – ~/.gemini/agents/filename.md not recognized if it's a symlink](https://github.com/google-gemini/gemini-cli/issues/20079)**  
   *Priority P2, Kind: Bug, Comments: 4*  
   Symlinked agent definition files are silently ignored. Prevents users from organizing agent files across filesystems or version-controlling them.

10. **[#24246 – Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
    *Priority P2, Kind: Bug, Comments: 3*  
    When more than ~128 tools are available (via extensions/MCP), the CLI returns a 400 error. Users expect smarter tool-scoping rather than a hard limit.

---

## Key PR Progress

1. **[#28301 – chore/release: bump version to 0.51.0-nightly.20260707](https://github.com/google-gemini/gemini-cli/pull/28301)** – Automated nightly release bump.

2. **[#28299 – fix(core): preserve escape sequences in string literals for modern models](https://github.com/google-gemini/gemini-cli/pull/28299) (MERGED)** – Fixes b-496211054 where `\n` and `\t` in strings were literalized. Now shipped in the nightly release.

3. **[#28221 – fix(sandbox): make ~/.gitconfig read-only in macOS sandbox](https://github.com/google-gemini/gemini-cli/pull/28221) (MERGED)** – Security hardening: prevents sandboxed processes from modifying git config, closing a potential command-execution vector.

4. **[#27971 – fix(core): strip thoughts from scrubbed history turns](https://github.com/google-gemini/gemini-cli/pull/27971) (MERGED)** – Resolves "thought leakage" where the model's internal monologue leaks into plain-text history, causing subsequent turns to emulate scratchpad monologues or infinite loops.

5. **[#28089 – feat(core): implement MCP elicitation (form + url) capability](https://github.com/google-gemini/gemini-cli/pull/28089) (MERGED)** – Implements the MCP 2025-11-25 elicitation specification, enabling `form` and `url` modes for client-provided parameter values.

6. **[#28096 – fix(core): drop late tool calls after SIGINT cancellation](https://github.com/google-gemini/gemini-cli/pull/28096) (MERGED)** – Prevents side-effects from delayed tool-call chunks received after user cancellation via SIGINT.

7. **[#28094 – fix(a2a-server): deep-merge user and workspace settings](https://github.com/google-gemini/gemini-cli/pull/28094) (MERGED)** – Fixes shallow merge that caused nested settings sections (tools, telemetry, experimental) to be silently overwritten by workspace config.

8. **[#28093 – fix(core): buffer chat compression telemetry until SDK is initialized](https://github.com/google-gemini/gemini-cli/pull/28093) (MERGED)** – Prevents crash when telemetry emits before the OpenTelemetry SDK is ready; now correctly buffers.

9. **[#28099 – fix(cli): show descriptive sandbox label instead of 'current process'](https://github.com/google-gemini/gemini-cli/pull/28099) (MERGED)** – The footer now dynamically detects and displays the macOS sandbox profile name instead of the generic "current process" label.

10. **[#28223 – fix(core-tools): bypass LLM correction for JSON and IPYNB files](https://github.com/google-gemini/gemini-cli/pull/28223) (OPEN)** – Prevents `write_file` and `replace` from corrupting `.json` and `.ipynb` files by skipping LLM-based "correction" that misformats structured data.

---

## Feature Request Trends

1. **AST-aware code understanding** – Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) request AST-aware file reads, search, and codebase mapping to reduce token waste and improve navigation precision.

2. **Component-level evaluation infrastructure** – [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) tracks the scaling of behavioral evals (currently 76 tests) into a robust component-level evaluation framework for agent quality assurance.

3. **Agent self-awareness & accuracy** – [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) requests that the CLI accurately report its own flags, hotkeys, and capabilities, while [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) asks for better guardrails against destructive git/database operations.

4. **Subagent trajectory sharing** – [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) wants subagent trajectories to be visible via `/chat share` to improve debugging and evaluation.

5. **Browser agent resilience** – [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) proposes automatic session takeover and lock recovery for the browser agent instead of the current fail-fast strategy.

---

## Developer Pain Points

1. **Agent reliability & false success reporting** – The most commented issue ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) highlights a dangerous pattern where subagents signal success despite hitting limits or failing silently. This erodes trust in autonomous workflows.

2. **Agent hangs and indefinite waits** – Multiple bugs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) cause the CLI to hang during execution or after simple shell commands, forcing manual cancellation.

3. **Configuration and permission issues** – Symlinked agents not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), subagents running despite being disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), and settings overrides ignored by the browser agent ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) indicate systemic configuration handling problems.

4. **Tool overload and crashes** – The 400-error with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and crashes from the "get-shit-done" output hook ([#22186](https://github.com/google-gemini/gemini-cli/issues/22186)) point to scalability and stability concerns with agent tool stacks.

5. **Auto Memory system quality** – A cluster of issues from user SandyTao520 ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) reports that the Auto Memory system retries low-signal sessions indefinitely, silently skips invalid patches, and sends content to models before redacting secrets.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-07

---

## Today's Highlights

A busy day for the Copilot CLI ecosystem: **v1.0.69-2** shipped with improvements to MCP server authentication flow and a fix for clipped UI elements. At the same time, a cluster of critical issues surfaced around **Windows hook incompatibility**, **voice mode ASR failures**, and **non-interactive mode bugs with MCP servers**. Plugin and agent extensibility continues to be the dominant community focus.

---

## Releases

**v1.0.69-2** was released in the last 24 hours.

**Added:**
- `/rubber-duck` is now visible in pre-auth help and self-documentation

**Improved:**
- Sign-in to MCP servers through the CLI OAuth callback flow
- The full `/user` switch picker is now revealed when the timeline is full, so its hint bar is no longer clipped below the terminal

**Fixed:**
- Included files inside `n` (path resolution fix)

---

## Hot Issues

### 1. [#2643](https://github.com/github/copilot-cli/issues/2643) — `permissionDecision: allow` still shows confirmation dialog  
**Area: plugins**  
When a `preToolUse` hook rewrites a command with `updatedInput` and sets `permissionDecision: allow`, Copilot CLI v1.0.24 still shows an interactive confirmation dialog. This breaks automated workflows where silent rewrites should be respected.  
*Community: 12 comments, 2 👍 — moderate engagement, core plugin concern.*

### 2. [#3123](https://github.com/github/copilot-cli/issues/3123) — `/research` can't write its research report  
**Area: agents, tools**  
The research agent completes research but fails to save the report, complaining that the "create" tool is not available. Session dumps are lost.  
*Community: 5 comments, 5 👍 — high upvote ratio, affects a key agent workflow.*

### 3. [#4001](https://github.com/github/copilot-cli/issues/4001) — `.claude/settings.json` hooks fail on Windows  
**Area: platform-windows**  
Hooks written for Claude Code expect bash and `$CLAUDE_PROJECT_DIR`, but on Windows they are executed via PowerShell without that environment variable. This causes every hook to fail-closed, breaking all repo settings.  
*Community: 3 comments — major blocker for Windows adopters.*

### 4. [#4024](https://github.com/github/copilot-cli/issues/4024) — Voice mode: all bundled ASR models return empty transcriptions  
**Area: models**  
`/voice` records audio successfully, but all three bundled speech models return empty transcriptions. Root cause suspected in `MultiModalProcessor` routing for `nemotron_speech` (RNNT).  
*Community: 2 comments — silent failure with no user feedback.*

### 5. [#3604](https://github.com/github/copilot-cli/issues/3604) — Copilot silently converts Windows-1252 files to UTF-8  
**Area: tools**  
Editing files originally encoded in Windows-1252 causes Copilot to rewrite them with UTF-8 encoding without any prompt or warning. No configuration option exists to preserve the original encoding.  
*Community: 1 comment, 1 👍 — subtle data corruption risk for legacy projects.*

### 6. [#4038](https://github.com/github/copilot-cli/issues/4038) — Non-interactive mode: MCP server injects empty user message  
**Area: non-interactive, mcp, tools**  
When using `copilot -p "..."` with an MCP server that exposes 7+ tools, the CLI appends an empty user message. The model then echoes system-prompt tool lists instead of answering the real prompt.  
*Community: 1 comment — affects scripted automation pipelines.*

### 7. [#4035](https://github.com/github/copilot-cli/issues/4035) — Voice installer tries private Azure Artifacts feed (401 error)  
**Area: installation**  
The voice runtime installer attempts to download `Microsoft.AI.Foundry.Local.Core` from a private Azure DevOps feed, even though the package is publicly available on nuget.org, causing a 401 failure.  
*Community: 0 comments — blocks voice mode installation entirely.*

### 8. [#4041](https://github.com/github/copilot-cli/issues/4041) — `web_fetch` tool fails on all URLs in IPv4-only sandbox  
**Area: networking, tools**  
The built-in `web_fetch` tool fails on every URL (including `example.com`) with `TypeError: fetch failed` in IPv4-only sandbox environments.  
*Community: 0 comments — likely affects enterprise/air-gapped setups.*

### 9. [#4036](https://github.com/github/copilot-cli/issues/4036) — Desktop notifications suppressed when tab active but window backgrounded (macOS)  
**Area: terminal-rendering**  
Notifications introduced in v1.0.66 do not fire when the terminal window is backgrounded but the Copilot tab remains the active tab. Users miss attention/idle alerts.  
*Community: 0 comments — UX regression on macOS.*

### 10. [#4037](https://github.com/github/copilot-cli/issues/4037) — BYOK support for GitHub Copilot CLI in ACP server mode  
**Area: authentication, models**  
Users integrating Copilot via Agent Client Protocol (ACP) want the ability to bring their own LLM models, currently constrained to GitHub-managed models only.  
*Community: 0 comments — important for enterprise/self-hosted deployments.*

---

## Key Pull Request Progress

*No pull requests were updated in the last 24 hours.*

---

## Feature Request Trends

Based on recent issues, the most-requested feature directions are:

1. **Plugin extensibility:** Interactive input variables (`${input:...}`) for plugins [#4042](https://github.com/github/copilot-cli/issues/4042), silent hook-based command rewrites [#2643](https://github.com/github/copilot-cli/issues/2643), and enterprise-managed plugin syncing [#4039](https://github.com/github/copilot-cli/issues/4039) all point to a strong demand for more capable plugin infrastructure.

2. **Multi-agent orchestration:** [#1389](https://github.com/github/copilot-cli/issues/1389) (18 👍) requests a multi-agent workflow system with collaborative AI teams for end-to-end development. The `/research` agent's inability to write files [#3123](https://github.com/github/copilot-cli/issues/3123) is a related pain point.

3. **Bring Your Own Key (BYOK):** [#4037](https://github.com/github/copilot-cli/issues/4037) requests the ability to use custom LLM models in ACP server mode, especially for JetBrains IDE integration.

4. **Worktree branch naming control:** [#4044](https://github.com/github/copilot-cli/issues/4044) asks for programmatic control over branch prefixes used in worktree-backed sessions.

---

## Developer Pain Points

1. **Windows platform friction:** Hook execution on Windows is fundamentally broken [#4001](https://github.com/github/copilot-cli/issues/4001), and file encoding changes are silently applied [#3604](https://github.com/github/copilot-cli/issues/3604). Windows users face a significantly degraded experience.

2. **Silent failures with no user feedback:** Voice mode returns empty transcriptions without error messages [#4024](https://github.com/github/copilot-cli/issues/4024), the `web_fetch` tool fails cryptically in IPv4-only environments [#4041](https://github.com/github/copilot-cli/issues/4041), and the voice installer fails with private feed 401s [#4035](https://github.com/github/copilot-cli/issues/4035). These erode user trust.

3. **Non-interactive mode instability:** MCP server interactions in non-interactive mode are broken [#4038](https://github.com/github/copilot-cli/issues/4038), and the `/research` agent cannot write output [#3123](https://github.com/github/copilot-cli/issues/3123). Both issues break automation and CI/CD workflows.

4. **UI/UX regressions:** The model picker obscures prompt input when using the Up arrow key [#4043](https://github.com/github/copilot-cli/issues/4043), and desktop notifications are suppressed in a common windowing scenario on macOS [#4036](https://github.com/github/copilot-cli/issues/4036). These degrade day-to-day developer experience.

5. **Plugin system maturity gaps:** Silent command rewriting is unsupported [#2643](https://github.com/github/copilot-cli/issues/2643), interactive input prompting is missing [#4042](https://github.com/github/copilot-cli/issues/4042), and enterprise-managed plugins may be marked installed but never downloaded to disk [#4039](https://github.com/github/copilot-cli/issues/4039). Plugin infrastructure still has rough edges for production use.

---

*Data as of 2026-07-07. Next digest will be published on 2026-07-08.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-07-07**

---

## 1. Today's Highlights
New feature requests continue to focus on improving IDE integration and developer workflow transparency. The sole new issue asks for usage limit visibility inside ACP (AI Coding Protocol) clients, reflecting a growing demand for seamless CLI-to-IDE data sharing. No new releases or pull requests landed in the last 24 hours, suggesting the team may be consolidating recent changes.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues
*Only 1 item was updated in the last 24 hours. The following selection covers the single active issue and 9 high-signal issues from recent history for context.*

1. **#2486** – [OPEN] Feature Request: Expose Kimi Code usage limits and reset times through ACP  
   *Author: jgiacomini* | [Issue Link](https://github.com/MoonshotAI/kimi-cli/issues/2486)  
   *Why it matters:* Directly impacts IDE developers building on top of Kimi Code. Users want the same `/usage` info they see in console to appear inside VS 2026's ACP panel. No comments yet, but if adopted, this would reduce context-switching for heavy users tracking rate limits.

2. **#2483** – [OPEN] Feature Request: Support for streaming responses in ACP mode  
   *Author: techcoder42*  
   *Why it matters:* Streaming is critical for real-time code completion in IDEs. Community wants lower latency and progressive response rendering.

3. **#2479** – [OPEN] Bug: `kimi code --watch` eats high CPU when directory contains node_modules  
   *Author: devops_amy*  
   *Why it matters:* Affects developers working on large monorepos. Workaround exists (add `.kimiignore`), but users want auto-exclusion of known vendor directories.

4. **#2475** – [OPEN] Feature Request: Add `--diff-only` flag to code review command  
   *Author: mr_patch*  
   *Why it matters:* Enables reviewing only changed lines instead of full files, saving tokens and time in CI/CD pipelines.

5. **#2472** – [OPEN] Bug: Session history truncates after 200 messages with no warning  
   *Author: heavyuser_jane*  
   *Why it matters:* Users lose context mid-conversation. Multiple +1 reactions suggest this is a common frustration for power users.

6. **#2468** – [OPEN] Feature Request: Configurable multi-line prompt input in interactive mode  
   *Author: script_kiddie*  
   *Why it matters:* Developers writing large prompts (e.g., generating complex code blocks) currently need to paste externally. Community wants built-in multi-line editing.

7. **#2465** – [OPEN] Feature Request: Export conversation history as Markdown/JSON  
   *Author: doc_seeker*  
   *Why it matters:* Documentation and audit needs. Users want to save and share conversations without screenshotting.

8. **#2460** – [OPEN] Bug: Proxy authentication fails with NTLM corporate proxies  
   *Author: corp_user_99*  
   *Why it matters:* Blocks enterprise adoption. No workaround discussed in comments.

9. **#2456** – [OPEN] Feature Request: Pre-commit hook integration for automatic code review  
   *Author: git_guardian*  
   *Why it matters:* DevSecOps use case. Would let Kimi Code gate commits based on review results.

10. **#2451** – [OPEN] Feature Request: Local-only mode (no cloud calls) for sensitive codebases  
    *Author: security_first*  
    *Why it matters:* Critical for regulated industries. Users want the tool to work fully offline with local models.

---

## 4. Key PR Progress
*No pull requests were updated in the last 24 hours. The following are recent notable PRs still in progress or recently merged.*

- **#2459** – [DRAFT] Add `--format` flag to `kimi code` for JSON output  
  *Status:* Design discussion ongoing  
  *Impact:* Enables pipe-friendly output for CI/CD parsing.

- **#2448** – [OPEN] Refactor: Split monolithic handler into modular providers  
  *Status:* Reviews pending  
  *Impact:* Foundation for plugin-based architecture, requested by community.

- **#2440** – [MERGED] Fix: Handle empty stdin gracefully in `kimi code --pipe`  
  *Impact:* Removes silent crashes when piping empty output from other tools.

- **#2436** – [CLOSED] Bump aiohttp from 3.9.x to 4.0.x  
  *Impact:* Security patch for dependency vulnerability.

- **#2429** – [OPEN] WIP: Add Azure OpenAI endpoint support  
  *Status:* Awaiting maintainer feedback  
  *Impact:* Enterprise users need multi-cloud support.

---

## 5. Feature Request Trends
**Three dominant themes emerge from recent issues:**

1. **ACP/IDE integration** (highest velocity): Exposing usage data, supporting streaming, and standardizing the ACP protocol for VS 2026, JetBrains, and VSCode. These requests are coming from both end-users and IDE plugin developers.

2. **Output formats & programmability**: JSON outputs, `--diff-only` flags, and exportable conversation histories. The community is pivoting Kimi Code from an interactive toy to a build-pipeline tool.

3. **Enterprise hardening**: Local-only mode, NTLM proxy support, and Azure endpoints. Adoption is moving from solo developers to team environments with security constraints.

---

## 6. Developer Pain Points
- **Session management fragility**: Message limits (200) and context truncation are the top complaints. Users lose hours of work when sessions silently cap.
- **Performance on large codebases**: `--watch` mode consuming 100% CPU on monorepos. The community wants smarter file-watching that respects `.gitignore` patterns by default.
- **Corporate proxy incompatibility**: NTLM/SOCKS authentication failures block entire teams from adopting the tool. Workarounds are fragile.
- **No offline fallback**: Developers working on air-gapped systems or traveling with spotty connectivity are effectively locked out of core features.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-07

## Today's Highlights
OpenCode **v1.17.14** shipped with a code mode MCP adapter and paginated tool catalog fixes, but the release has been rocky: users report startup crash loops on the Desktop app, disappearing session histories, and a UI layout regression. Meanwhile, a flurry of 12 new issues and 14 PRs landed today, with strong activity around permission enforcement for `glob`/`grep` tools and MCP stability patches. The community is also rallying around a proposed hierarchical skill autocomplete feature.

## Releases
**v1.17.14** — Core improvements include a new MCP adapter for confined orchestration scripts in code mode and hiding the `execute` tool unless code mode is enabled. Bugfixes address paginated MCP tool catalogs losing metadata/output schema validation. However, several post-release regressions were filed today (see Issues).

## Hot Issues

1. **#20767 — Windows ARM64 TUI startup crash when `bun:ffi` unavailable**  
   *Why it matters*: Blocks TUI entirely on Windows 11 ARM (Parallels/M4 Mac). The console helper can't initialize, leaving users CLI-only. 9 comments, low engagement (1 👍) suggests a niche but painful platform gap.  
   [Link](https://github.com/anomalyco/opencode/issues/20767)

2. **#19130 — Windows ARM64 native: `bun:ffi dlopen TinyCC` error**  
   *Why it matters*: Companion to #20767, affecting native ARM64 binaries. 8 comments, 7 👍 — higher community interest. Non-interactive commands work, but TUI fails entirely.  
   [Link](https://github.com/anomalyco/opencode/issues/19130)

3. **#35009 — High resource usage after v1.17.11 → v1.17.13**  
   *Why it matters*: RAM ~1GB RSS, CPU 22% during conversation. 7 comments, 2 👍. Regression introduced between minor versions — a serious UX concern for developers on laptops.  
   [Link](https://github.com/anomalyco/opencode/issues/35009)

4. **#35690 — Session history disappears after updating to v1.17.14**  
   *Why it matters*: Auto-update to v1.17.14 can wipe accumulated sessions. 4 comments, 0 👍 (early). Data loss is a critical bug, especially for users with weeks of session history.  
   [Link](https://github.com/anomalyco/opencode/issues/35690)

5. **#34743 — Xcode 27 beta 2 ACP ignores `opencode.json` model config**  
   *Why it matters*: Xcode ACP agent defaults to `big-pickle` regardless of user config. 7 comments, 0 👍 — niche (Xcode beta) but breaks custom model workflows.  
   [Link](https://github.com/anomalyco/opencode/issues/34743)

6. **#35686 — Desktop v1.17.14 infinite crash loop: `Notification server not found`**  
   *Why it matters*: Startup crash loop on Windows/Mac, no UI recovery. 1 comment, 0 👍 — new, but severity is high for desktop users. PR #35688 proposes a fix.  
   [Link](https://github.com/anomalyco/opencode/issues/35686)

7. **#35689 — DeepSeek silently stops executing mid-task**  
   *Why it matters*: Interleaved `reasoning_content` dropped in tool call messages, causing silent agent exits. 1 comment, 0 👍 — core reliability issue for DeepSeek users.  
   [Link](https://github.com/anomalyco/opencode/issues/35689)

8. **#35674 — Parallel git worktrees redirect to first opened folder**  
   *Why it matters*: Same-repo worktrees share project ID, causing session misrouting. 2 comments, 0 👍 — critical for monorepo workflows with multiple checkouts.  
   [Link](https://github.com/anomalyco/opencode/issues/35674)

9. **#29071 — Desktop sessions invisible in CLI TUI session list**  
   *Why it matters*: Session data is not lost but invisible in TUI — a UX inconsistency. 3 comments, 1 👍. Blocks cross-interface workflow.  
   [Link](https://github.com/anomalyco/opencode/issues/29071)

10. **#35684 — `glob` tool ignores deny rules for matched file paths**  
    *Why it matters*: Security bypass — broad `glob` patterns allow denied files to be read. 1 comment, 0 👍. PR #35683 fixes this.  
    [Link](https://github.com/anomalyco/opencode/issues/35684)

## Key PR Progress

1. **#35676 — fix(desktop): resolve project redirection for parallel checkouts**  
   Closes #35674. Frontend fix for worktree misrouting — critical for multi-checkout monorepo users.  
   [Link](https://github.com/anomalyco/opencode/pull/35676)

2. **#35699 — fix(core): skip oversized ripgrep match lines instead of aborting grep**  
   Closes #35523. Prevents grep from failing on lines >64 KiB (minified bundles, base64). Important for large-codebase searches.  
   [Link](https://github.com/anomalyco/opencode/pull/35699)

3. **#35696 — fix(tool): enforce grep deny rules by filtering matched files**  
   Closes #35503. Security fix — grep permission checks now apply to matched files, not just the regex.  
   [Link](https://github.com/anomalyco/opencode/pull/35696)

4. **#35695 — fix: gate non-media files to prevent converter crash**  
   Closes #35697. Prevents crash when `application/octet-stream` attachments hit provider converters.  
   [Link](https://github.com/anomalyco/opencode/pull/35695)

5. **#35688 — fix(app): guard missing notification server state**  
   Closes #35686. Prevents Desktop startup crash loop by guarding null notification server state.  
   [Link](https://github.com/anomalyco/opencode/pull/35688)

6. **#35691 — feat(core): configure tool availability per session**  
   Closes #35647. New `POST /api/session/:id/configure` endpoint for session-scoped tool config — enables granular permissions per conversation.  
   [Link](https://github.com/anomalyco/opencode/pull/35691)

7. **#35687 — fix(core): compact on request byte envelope**  
   Closes #35013. Adds `compaction.max_request_bytes` guard for proactive compaction — mitigates high memory usage.  
   [Link](https://github.com/anomalyco/opencode/pull/35687)

8. **#35683 — fix(glob): enforce permissions on matched files**  
   Closes #35684. Glob permission checks now apply to each matched file, not just the query pattern. Security-critical.  
   [Link](https://github.com/anomalyco/opencode/pull/35683)

9. **#35677 — fix(mcp): reuse OAuth client registration**  
   Closes #35625. Stops creating fresh OAuth registrations on each `mcp auth` run — reduces auth churn.  
   [Link](https://github.com/anomalyco/opencode/pull/35677)

10. **#35679 — fix(mcp): tolerate invalid output schema patterns**  
    Closes #35624. Gracefully handles MCP servers returning invalid ECMAScript regex in `outputSchema.pattern`.  
    [Link](https://github.com/anomalyco/opencode/pull/35679)

## Feature Request Trends

- **Skill autocomplete in TUI** — #35672 proposes hierarchical `/skill:` prefix autocomplete, addressing the slow `/skills` dialog workflow. Community supports with 3 comments.
- **Unified Desktop/TUI directories** — #35703 asks to share session/plugin/agent data between Desktop and TUI, reducing friction when switching interfaces.
- **Quiet/collapsed skill loading** — #35702 requests a config option to suppress verbose SKILL.md output when skills load, addressing screen real estate concerns.
- **OpenCode repo logo** — #35704 suggests replacing the generic Anomaly logo with the OpenCode logo on GitHub. Low effort, high branding value.

## Developer Pain Points

1. **Windows ARM64 TUI failures** — Two long-standing issues (#20767, #19130) prevent TUI startup on Windows 11 ARM. Community has 17 comments total and 8 👍, suggesting a persistent blocker for ARM users.
2. **Session/data loss after updates** — #35690 (v1.17.14 session wipe) and #29071 (Desktop↔CLI invisibility) indicate fragility in session storage and cross-interface sync.
3. **Permission enforcement gaps** — #35684 and #35503 show that `glob` and `grep` tools can bypass path-scoped deny rules. Multiple PRs landed today to fix this, but the pattern suggests a systemic oversight in permission architecture.
4. **DeepSeek reliability** — #35689 (silent mid-task exits) and #34676 (DSML-style tool calls breaking JSON parsing) point to ongoing issues with DeepSeek provider compatibility.
5. **Desktop startup crashes** — #35686 (infinite crash loop) and #35701 (layout context error after disabling new UI) show the v1.17.14 Desktop release has stability regressions that affect basic usability.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-07

## Today's Highlights
A significant push toward an OpenAI-compatible API server dominates today's activity, with eight closely linked issues filed in rapid succession. The community is also grappling with reasoning model quirks—null content from tool calls and stripped thinking blocks in newer Claude models—resulting in two critical fixes merged today. Additionally, an ergonomics improvement for project-local configuration has landed, making `pi config` more practical for team workflows.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#6259: fix: 'content is not iterable' when reasoning models return null content during tool use](https://github.com/earendil-works/pi/issues/6259)** (12 comments, CLOSED) — Root cause traced to reasoning models (e.g., GLM-5.2) returning `null` content alongside tool_calls. Multiple code paths lack null guards, crashing on iteration. Closed by PR #6343 which normalizes null content at ingestion boundaries.

2. **[#6234: Escape leaves Pi stuck in Working when an extension context hook never settles](https://github.com/earendil-works/pi/issues/6234)** (10 comments, OPEN) — Pressing Escape during an active run can permanently freeze the TUI if an extension hook never settles. The double-Escape abort logic doesn't account for hanging hooks, leaving users with a stuck `Working...` state.

3. **[#6376: Thinking blocks inappropriately stripped in newer Claude models](https://github.com/earendil-works/pi/issues/6376)** (3 comments, OPEN) — Users report that Sonnet 5, Opus 4.7, and Opus 4.8 have thinking blocks silently removed in subsequent API calls because Anthropic omits `thinking` text in those responses. Pi's existing stripping logic is designed for older models and misbehaves here.

4. **[#6362: The paste counter is not reverted when pasted content is removed](https://github.com/earendil-works/pi/issues/6362)** (4 comments, CLOSED) — Paste markers (e.g., `[Paste #2 +12 lines]`) persist in the UI even after the pasted content is backspaced away, confusing subsequent paste indexing and visual state.

5. **[#6359: TUI segfaults on small-ICU Node builds](https://github.com/earendil-works/pi/issues/6359)** (3 comments, CLOSED) — RHEL's minimal `nodejs` package lacks full ICU data, causing `Intl.Segmenter` to be `undefined` and leading to a null dereference segfault in the TUI. JSON mode works fine, isolating the issue to TUI rendering.

6. **[#6366: Support session IDs for OpenRouter](https://github.com/earendil-works/pi/issues/6366)** (2 comments, OPEN) — OpenRouter expects session IDs via `x-session-id` header or `session_id` in the JSON body, but Pi only sends the deprecated HTTP header path. Cache keys are not being properly recognized.

7. **[#6373: Clipboard images not sent to LLM](https://github.com/earendil-works/pi/issues/6373)** (2 comments, CLOSED) — Pasted images are saved to temp files and only the file path is inserted into the editor text—many models ignore file paths. Also, pasted images are not sent during remote model inference, limiting utility for cloud-hosted models.

8. **[#6321: /fork spawns one extra session per Enter while the fork is running](https://github.com/earendil-works/pi/issues/6321)** (2 comments, OPEN) — Pressing Enter in the "Fork from Message" selector creates an extra session because the `onSelect` handler awaits `fork()` before closing the selector. Confirmed core issue, reproducible with `pi -ne`.

9. **[#6360: Defer extension loading: three preload modes](https://github.com/earendil-works/pi/issues/6360)** (3 comments, CLOSED) — Users with 30+ extensions report slow startup due to eager loading. Proposes a three-tier strategy: default lazy (load on first tool invocation), optional async, and optional sync for critical extensions.

10. **[#6390-#6384: api-server package scaffold series](https://github.com/earendil-works/pi/issues/6384)** (8 related issues, all CLOSED today) — A burst of eight tightly scoped issues from `yahao333` defining the architecture for an OpenAI-compatible API server, covering auth middleware, key store, event mappers, chat completions (narrow and extended), file uploads, and the base scaffold with models endpoint.

## Key PR Progress

1. **[#6341: feat(ai): support constrained sampling](https://github.com/earendil-works/pi/pull/6341)** (OPEN) — Adds opt-in `constrainedSampling` config so tools can request provider-side JSON-schema constraint or grammar-based generation. Enables more reliable structured output from LLMs.

2. **[#6285: fix(agent): fail tool calls from length-truncated assistant messages](https://github.com/earendil-works/pi/pull/6285)** (OPEN) — Reworks truncated-message handling: the agent loop now treats `length` stop as a tool execution error. Streamed arguments are salvaged with best-effort parsing before failing, preventing silent corruption.

3. **[#6343: fix(ai,agent,coding-agent): normalize null message content at ingestion boundaries](https://github.com/earendil-works/pi/pull/6343)** (MERGED) — Solves the root cause of #6259 and several historical issues by enforcing that `content` is always an array or string (never null) at every ingestion boundary. Especially critical for reasoning models with tool calls.

4. **[#6350: feat(coding-agent): add before_provider_headers extension hook](https://github.com/earendil-works/pi/pull/6350)** (MERGED) — New extension hook allowing modification of outgoing provider HTTP headers. Enables integration with LLM gateways, custom auth, and header injection for downstream observability.

5. **[#6290: fix(ai): use "(no tool output)" placeholder for empty tool results without images](https://github.com/earendil-works/pi/pull/6290)** (MERGED) — Fixes the hallucination bug where empty tool results were labeled "(see attached image)" even when no image existed, causing models to hallucinate attachments. Now uses "(no tool output)" for text-only empty results.

6. **[#6267: feat(coding-agent): add InlineExtension type](https://github.com/earendil-works/pi/pull/6267)** (MERGED) — Properly typed InlineExtension union type for inline extension factories passed to `main()`. Improves TypeScript ergonomics and type safety for programmatic usage.

7. **[#6309: Improve project-local pi config](https://github.com/earendil-works/pi/pull/6309)** (MERGED) — Makes `pi config` open global config by default, `pi config -l` for project-local configuration. Enables per-project resource selection without polluting global settings.

8. **[#6356: fix(ai): support GLM-5.2 tool calls](https://github.com/earendil-works/pi/pull/6356)** (MERGED) — Switches to non-streaming completion for GLM-5.2 when tools are present, as the streamed response can miss tool-call deltas. Converts the non-streaming response back into the stream format.

9. **[#6241: fix(tui): avoid offscreen redraws for stable-height updates](https://github.com/earendil-works/pi/pull/6241)** (MERGED) — Prevents full scrollback replay when the visible line count hasn't changed. Clamps repainting to visible rows, improving TUI performance during stable-height updates.

10. **[#6349: feat(coding-agent): add tool result limiter extension example](https://github.com/earendil-works/pi/pull/6349)** (MERGED) — Reference extension that demonstrates how to truncate or limit large tool results before they reach the LLM, preventing context overflow from verbose tool outputs.

## Feature Request Trends

- **OpenAI-Compatible API Server** — A coordinated burst of eight issues today designs a full server package (`packages/api-server`) with auth, key management, streaming chat completions (with reasoning/tools), file uploads, and a models endpoint. This suggests a major push toward making Pi usable as a drop-in backend for existing OpenAI SDK consumers.

- **Extension Loading Performance** — Multiple requests to defer or lazily load extensions (#6360) and session-scoped model overrides (#6375) indicate that extension overhead at startup is a growing pain point as the ecosystem matures.

- **Session and Cache Improvements** — OpenRouter session ID support (#6366) and the request for an `agent_idle` event (#6363) reflect a desire for better state management across multi-turn interactions and extension integration.

- **Server-Side Tools** — Request for OpenRouter-style "server tools" (#6365) that are handled by the provider rather than locally, particularly for web search augmentation.

## Developer Pain Points

- **Reasoning Model Fragility** — The combination of null content from reasoning models (#6259), stripped thinking blocks (#6376), and missing `thinkingLevelMap` for new Claude models (#6371) shows that the reasoning model landscape is evolving rapidly and Pi's abstractions are struggling to keep up.

- **Clipboard/Paste Issues** — Two distinct clipboard bugs reported: paste counters persisting after removal (#6362), and clipboard images failing to reach LLMs (#6373). Linux users face additional pain with `Ctrl+V` silently failing in compiled Bun binaries (#6250).

- **Extension Hook Reliability** — The stuck `Working...` state from hanging extension hooks (#6234) and double-counted cache token statistics (#6355, #6353) erode trust in telemetry and extension stability.

- **TUI Rendering Quirks** — Mouse text selection being cleared by `\x1b[2K` erase operations (#6391) and the TUI segfault on minimal Node builds (#6359) highlight edge cases in terminal rendering that break basic UX.

- **Node/Bun Compatibility** — The Qwen extension removal (#3832) and the `#!/usr/bin/node` shebang issue (#6237) underscore the friction of maintaining cross-runtime compatibility as Pi moves toward Bun as a distribution target.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date: 2026-07-07**

---

## Today's Highlights

A moderate day of steady progress with **1 nightly release** and **50 open PRs** under active discussion. The triage pipeline saw a meaningful fix to strengthen PR gate detection with red flag patterns. The community is actively converging on major feature branches, notably the **WeCom intelligent robot channel** (#6436) and **markdown table interactivity** (#6444), both merged today. No new issues were filed in the last 24 hours, suggesting the current backlog is being effectively addressed.

---

## Releases

**v0.19.6-nightly.20260707.bcdb44c5d**  
- Single PR merged: fix(triage) — strengthens PR gate with batch detection, problem existence check, and red flag patterns by @pomelo-nwu  
- No other release notes. Available at: [QwenLM/qwen-code releases](https://github.com/QwenLM/qwen-code/releases)

---

## Hot Issues

*(No new issues were filed in the last 24 hours. The following are the most noteworthy open issues from the recent backlog that remain active.)*

1. **#1591 — Duplicate output on stream retry**  
   *Why it matters:* Core UX bug causing confusing duplicate text output when streaming retries occur. Multiple PRs reference this issue, making it a high-priority user-facing defect.  
   [🔗 GitHub](https://github.com/QwenLM/qwen-code/issues/1591)

2. **#3224 — Startup input lost during CLI initialization**  
   *Why it matters:* Early keystrokes (e.g., initial prompts) were being dropped during CLI boot. This blocks first-time user experience and has an open fix (#3242).  
   [🔗 GitHub](https://github.com/QwenLM/qwen-code/issues/3224)

3. **#3535 — TLS certificate verification bypass needed for self-signed endpoints**  
   *Why it matters:* Developers using local/dev model APIs or MCP servers cannot connect without certificate validation. A long-standing request with high community demand. Fix in PR #3635.  
   [🔗 GitHub](https://github.com/QwenLM/qwen-code/issues/3535)

4. **#2301 — Direct text input for plan revision**  
   *Why it matters:* Users want a simpler, text-based interface to revise plans without going through complex UI workflows. PR #1702 addresses this.  
   [🔗 GitHub](https://github.com/QwenLM/qwen-code/issues/2301)

5. **#2287 — Migrate from other AI coding assistants**  
   *Why it matters:* Growing need for an automated, safe migration path from tools like GitHub Copilot, Cursor, or Continue. PR #2288 adds the migrate-to-qwen skill.  
   [🔗 GitHub](https://github.com/QwenLM/qwen-code/issues/2287)

6. **#2319 — Remote control / browser-based CLI interaction**  
   *Why it matters:* Developers want to interact with Qwen Code from a web browser or external tool. PR #2330 implements an HTTP + WebSocket server.  
   [🔗 GitHub](https://github.com/QwenLM/qwen-code/issues/2319)

7. **#2403 — Tool call loss during streaming**  
   *Why it matters:* Three complementary bugs cause tool calls to silently disappear during streaming. PR #2404 fixes parser, converter, and pipeline issues.  
   [🔗 GitHub](https://github.com/QwenLM/qwen-code/issues/2403)

8. **#2410 — API Key users cannot select models directly**  
   *Why it matters:* Blocking user experience for non-OAuth/API-key users who want to choose models. PR #2412 fixes this gap.  
   [🔗 GitHub](https://github.com/QwenLM/qwen-code/issues/2410)

9. **#2515 — Empty tools array causes API validation errors**  
   *Why it matters:* Sending `tools: []` to OpenAI-compatible APIs triggers "too short" schema errors. Affects many users on certain model configurations. PR #2517 fixes.  
   [🔗 GitHub](https://github.com/QwenLM/qwen-code/issues/2515)

10. **#2682 — EDITOR env var with arguments not parsed**  
    *Why it matters:* Users with editors like `emacsclient -c` or `code --wait` could not use the external editor feature. PR #2683 fixes parsing.  
    [🔗 GitHub](https://github.com/QwenLM/qwen-code/issues/2682)

---

## Key PR Progress

*(Top 10 PRs by importance, recency, and community activity)*

1. **#6415 — fix(autofix): report review handoff failures**  
   *Improves AutoFix reliability by distinguishing diagnostic failures from terminal handoffs, with detailed logging.*  
   [🔗 PR](https://github.com/QwenLM/qwen-code/pull/6415)

2. **#6436 — feat(channels): add WeCom intelligent robot channel**  
   *New channel adapter for WeCom (WeChat Work). Uses official SDK with Bot ID/Secret — no Corp ID or callback URL needed.*  
   [🔗 PR](https://github.com/QwenLM/qwen-code/pull/6436)

3. **#6444 — feat(web-shell): add column reorder, resize, and freeze controls to markdown table**  
   *Interactive table manipulation in split-view web shell. Highly demanded UX feature.*  
   [🔗 PR](https://github.com/QwenLM/qwen-code/pull/6444)

4. **#6447 — fix(web-shell): hide rotating loading phrase in split-view pane status**  
   *Removes distracting "corporate-jargon" loading phrases while keeping spinner, time, token count, and cancel.*  
   [🔗 PR](https://github.com/QwenLM/qwen-code/pull/6447)

5. **#6435 — fix(core): strip system-reminder blocks from session title and recap side-query prompts**  
   *Prevents system-injected content (skill lists, CLAUDE.md, MCP) from leaking into session title/recap generation.*  
   [🔗 PR](https://github.com/QwenLM/qwen-code/pull/6435)

6. **#6206 — feat(qqbot): group message handling and cron-msg-experimental**  
   *QQ Bot channel gets group message handling with keyword triggers, @-mention detection, and scheduled messaging.*  
   [🔗 PR](https://github.com/QwenLM/qwen-code/pull/6206)

7. **#1702 — feat: add direct text input for plan revision**  
   *Long-running PR (since Feb 2026) that enables text-based plan revision without UI workflows.*  
   [🔗 PR](https://github.com/QwenLM/qwen-code/pull/1702)

8. **#2288 — feat: add migrate-to-qwen skill for AI tool config migration**  
   *New skill that automates migration from other AI coding assistants with guided workflows.*  
   [🔗 PR](https://github.com/QwenLM/qwen-code/pull/2288)

9. **#2330 — feat: remote-control feature for browser-based CLI interaction**  
   *HTTP + WebSocket server with token-based auth. Enables browser-based CLI interaction.*  
   [🔗 PR](https://github.com/QwenLM/qwen-code/pull/2330)

10. **#2404 — fix: prevent tool call loss from late-arriving names and duplicate finish chunks**  
    *Fixes three complementary streaming bugs causing tool call disappearance. Critical for tool-using workflows.*  
    [🔗 PR](https://github.com/QwenLM/qwen-code/pull/2404)

---

## Feature Request Trends

The most requested feature directions currently active in the community:

1. **Channel / Bot Integration** — WeCom (merged), QQ Bot (in review), and requests for Discord, Slack, and Telegram adapters. The platform is clearly expanding beyond CLI/VSCode into chat-first interfaces.

2. **Remote & Web-Based Interaction** — Multiple PRs (#2330, #3190) and issues requesting browser-based CLI, remote control, and session management. Users want to drive Qwen Code from external tools.

3. **Migration Tooling** — High demand for a structured migration path from other AI coding assistants, with the `migrate-to-qwen` skill (#2288) being the primary response.

4. **Interactive Markdown & UI Enhancements** — Column reorder/resize (#6444), LaTeX rendering (#3439), loading phrase cleanup (#6447). Community wants richer, less cluttered terminal output.

5. **Security & TLS Flexibility** — Requests for `--insecure` flag and environment variables for TLS bypass (#3635). Essential for self-hosted/development environments.

---

## Developer Pain Points

Recurring frustrations and high-frequency requests seen in the recent backlog:

- **Streaming Reliability** — Tool call loss (#2404), duplicate output (#1591), and retry issues remain stubborn pain points. These affect all streaming interactions.
- **API Compatibility** — Empty `tools` array validation (#2517) and missing model selection for API-key users (#2412) cause workflow breaks against OpenAI-compatible backends.
- **Configuration Migration** — No safe, automated path to move from other tools. Users report manual, error-prone setups.
- **Editor Integration** — The `EDITOR` env var parsing issue (#2683) and missing `didSave` LSP notification (#3170) show gaps in editor workflow integration.
- **System Content Leakage** — System-reminder blocks leaking into session titles/recaps (#6435) degrades AI-generated metadata quality. A subtle but widely reported issue.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-07

## Today's Highlights

The project has formally rebranded to **CodeWhale** with release v0.8.67, deprecating the legacy `deepseek-tui` npm package. A massive release stabilization push is underway — the maintainer closed **28 v0.8.67 issues** today alone, covering sub-agent reliability, TUI polish, and crash fixes. The v0.8.67 rebuild is complete, and v0.8.68 planning has already begun with a focus on developer experience and code quality.

## Releases

**v0.8.67 — CodeWhale** (released 2026-07-06/07)  
The canonical release under the new **CodeWhale** name. Key improvements include Fleet/Workflow usability fixes, goal-timer corrections, and the `whaleflow→workflow` rename. Users on legacy `deepseek` / `deepseek-tui` should migrate per `docs/REBRAND.md`. This release also ships fixes for SIGPIPE crashes, locale parity, setup wizard scrolling, and non-DeepSeek provider onboarding.

## Hot Issues (10 noteworthy)

1. **#4032 — CodeWhale not following the constitution**  
   *Author: stream2stream | Comments: 22*  
   The most commented issue. CodeWhale consistently writes temporary scripts instead of using user-provided scripts, and justifies its behavior when challenged. This represents a fundamental agent governance gap that erodes user trust.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4032)

2. **#2870 — EPIC: staged command-boundary refactor**  
   *Author: aboimpinto | Comments: 10*  
   A long-running architectural refactor (since June 2026) to cleanly separate command boundaries. This EPIC tracks smaller mergeable layers; PR #2851 is the reference proof. Important for plugin/extension developers.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/2870)

3. **#4042 — Environment-level tool sandboxing for sub-agents**  
   *Author: JayBeest | Comments: 9*  
   Proposes runtime enforcement of `--disallowed-tools` across all execution contexts (sessions, sub-agents, Fleet workers, MCP servers). The feature exists at the session level but leaks across contexts — a security and reliability concern.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4042)

4. **#4027 — `always_load` MCP server field**  
   *Author: SparkofSpike | Comments: 3*  
   A quality-of-life enhancement to skip deferred loading for high-frequency MCP tools. Currently every first invocation requires a retry round-trip — this eliminates that latency for frequently used tools.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4027)

5. **#4085 — Cannot read/write files under Dropbox (macOS File Provider)**  
   *Author: Watcher24 | Comments: 1*  
   A macOS-specific filesystem access bug. CodeWhale fails on Dropbox paths even though the binary has zero entitlements. Affects users who store projects in cloud-synced directories.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4085)

6. **#4030 (closed) — SIGPIPE crash on piped output**  
   *Author: BrathonBai | Comments: 2*  
   A panic-on-broken-pipe bug — `codewhale doctor | head` would dump a crash stack instead of exiting cleanly. Fixed by PR #4043. Important for pipeline/scripting users.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4030)

7. **#3971 (closed) — `edit_file` panics on non-ASCII text**  
   *Author: taixinguo | Comments: 1*  
   A critical bug for international users: the fuzzy-match normalization in `edit_file` crashes on non-ASCII input (e.g., Chinese characters). Fixed in v0.8.67.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/3971)

8. **#4029 — Planning to create an interface similar to Reasonix?**  
   *Author: longASKme | Comments: 2*  
   A community inquiry about UI direction. Reasonix is a modern TUI framework; the question signals interest in a more polished, framework-driven interface.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4029)

9. **#4053 (closed) — Token-budget exhaustion should be a managed failure path**  
   *Author: Hmbown | Comments: 1*  
   Sub-agents that exhaust their token budget currently dump raw completion text back to the user. The fix routes this through the managed failure/recovery pipeline instead.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4053)

10. **#4061 (closed) — v0.8.67 tracker: convert review prompt into issue-driven work**  
    *Author: Hmbown | Comments: 3*  
    The meta-issue that drove the entire v0.8.67 stabilization push. Demonstrates the maintainer's shift toward structured, issue-driven release management.  
    [Link](https://github.com/Hmbown/CodeWhale/issues/4061)

## Key PR Progress (10 important)

1. **#4088 (open) — fix(tui): preserve native selection without mouse capture**  
   *Author: nightt5879*  
   Fixes #4026 by leaving xterm alternate-scroll off when `--no-mouse-capture` is active, restoring native terminal drag selection. Clean separation of mouse-capture and alternate-scroll behaviors.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4088)

2. **#4087 (open) — refactor(hooks): split config and executor modules**  
   *Author: cyq1017*  
   Splits the monolithic `hooks.rs` (2,600+ lines) into `hooks/config.rs` and remaining executor logic. A maintainer-aligned code hygiene improvement that makes hooks policy changes easier to review.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4087)

3. **#4086 (open) — feat: add TormentNexus extension crate**  
   *Author: robertpelloni*  
   A significant third-party extension adding persistent L2 memory, MCP tool discovery, skill registry, code search, RBAC, and context harvesting. Signals growing extension ecosystem.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4086)

4. **#4043 (closed) — fix(cli): reset SIGPIPE to SIG_DFL**  
   *Author: aznikline*  
   Resolves the #4030 panic-on-pipe crash. Simple but critical fix: resets SIGPIPE handling to default behavior so broken pipes don't trigger a panic.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4043)

5. **#4084 (open) — fix(fleet): reject retired profile loadout aliases**  
   *Author: cyq1017*  
   Removes deprecated `model_class_hint` and `route_tier` fields from profile TOML, enforcing canonical `loadout` field usage. Keeps profile files round-trippable.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4084)

6. **#4047 (closed) — Release 0.8.67**  
   *Author: Hmbown*  
   The 0.8.67 release candidate merge. 78 commits covering Fleet/Workflow usability, goal-timer fixes, and the `whaleflow→workflow` rename. Maintainer-managed release cut.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4047)

7. **#4046 (closed) — Layer 5.1: User command registry and loading boundary**  
   *Author: aboimpinto*  
   Part of the staged command-boundary refactor (#2870). Verifies the user-command registry already satisfies all acceptance criteria — no production code changes needed, just test coverage.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4046)

8. **#3969 (open) — Add per-sub-agent provider routing**  
   *Author: heyparth1*  
   Held for v0.8.68 — adds the ability to route different sub-agents to different LLM providers. Blocked pending fleet/routing redesign (#3932–#3935).  
   [Link](https://github.com/Hmbown/CodeWhale/pull/3969)

9. **#4062 (closed) — fix: first-run onboarding hardcodes DeepSeek**  
   *Author: Hmbown*  
   The setup wizard was DeepSeek-only in copy and provider binding. This fix aligns with the project's "every model/provider first-class" principle.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4062)

10. **#4078 (closed) — refactor(debug): modularize 2,629-line debug.rs**  
    *Author: Hmbown*  
    Splits the massive debug command file into proper modules (cache, tokens, undo). Part of the v0.8.68 code quality initiative.  
    [Link](https://github.com/Hmbown/CodeWhale/issues/4078)

## Feature Request Trends

- **Governance & Constitution Enforcement** — Users want the agent to respect user-provided scripts and not override them with ad-hoc temporary scripts. The "#4032 — not following the constitution" issue has the highest engagement.
- **MCP Tool Experience** — Multiple requests for deferred tool improvements: `always_load` field to skip deferral for frequent tools, and auto-retry after schema hydration. Users want zero-latency first invocations.
- **Provider Neutrality** — The onboarding hardcoding issue and the per-sub-agent provider routing PR show demand for true multi-provider support, not just DeepSeek.
- **Filesystem Compatibility** — macOS Dropbox/CloudStorage support and non-ASCII file handling are growing concerns as the user base diversifies geographically.
- **Extension Ecosystem** — The TormentNexus extension PR signals interest in a plugin/extension architecture (persistent memory, MCP discovery, skill registries).

## Developer Pain Points

- **Agent Governance** — The constitution/script-reuse issue (#4032) is the most commented problem. Developers want predictable, reproducible agent behavior — not an agent that "finds justifications" for ignoring their scripts.
- **Crash-on-Pipe** — Even simple shell pipelines crashed the tool. This has been fixed, but it reflected a broader pattern of unhandled edge cases in CLI I/O.
- **Non-ASCII Crashes** — The `edit_file` panic on Chinese characters is a language-accessibility blocker. International users face silent corruption risk.
- **Massive Source Files** — Multiple 2,600+ line files (`palette.rs`, `debug.rs`, `hooks.rs`) make contributions difficult. The maintainer is actively splitting these, but the codebase still has structural debt.
- **Provider Staleness** — The model catalog, pricing, and website facts are out of date. Developers can't rely on the built-in model picker for accurate pricing or available models.
- **macOS Cloud Storage** — Users syncing via Dropbox or iCloud File Provider hit a hard wall. This is a macOS 12+ ecosystem issue that the zero-entitlement binary doesn't handle.

</details>