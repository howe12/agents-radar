# AI CLI Tools Community Digest 2026-07-08

> Generated: 2026-07-08 02:49 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report
**Snapshot date:** 2026-07-08 · **Tools covered:** 9 (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI / CodeWhale)

---

## 1. Ecosystem Overview

The AI CLI tools market in mid-2026 is a **mature, multi-vendor landscape** where the four hyperscalers (Anthropic, OpenAI, Google, GitHub) dominate user-facing volume while a vibrant long tail of independent and regional projects (OpenCode, Pi, Qwen Code, CodeWhale, Kimi) competes on architectural philosophy, extensibility, and platform reach. Today's snapshot reveals an industry in a **stabilization-and-platformization phase**: vendors are shifting from raw capability to plumbing concerns — sandbox policy, MCP lifecycle, multi-session orchestration, SDK parity, and cross-platform parity (especially Windows/WSL). Cost transparency, session isolation, and resilience to safety-classifier outages are emerging as table-stakes rather than differentiators. Meanwhile, agent observability and sub-agent/fleet coordination are the new battlegrounds.

---

## 2. Activity Comparison

| Tool | Hot Issues Today | PRs Updated (24h) | Releases (24h) | Notable |
|---|---|---|---|---|
| **Claude Code** | 10 | 2 (docs only) | 2 (v2.1.203, v2.1.204) | Same-day regression on `claude --resume`; security-relevant ZDR thread |
| **OpenAI Codex** | 10 | 10 | 3 (v0.143.0 + 2 alphas) | Headline release: remote plugins by default + system proxy |
| **Gemini CLI** | 10 | 10 | 0 | Heavy PR throughput (Caretaker triage pipeline); no tag in 24h |
| **GitHub Copilot CLI** | 10 | 0 | 2 (v1.0.69, v1.0.69-3) | Release-led day; engineering currently in triage mode |
| **Kimi Code CLI** | 1 | 0 | 0 | Effectively dormant window |
| **OpenCode** | 10 | 10 | 1 (v1.17.15) | Balanced across all three; V2 architecture dominant |
| **Pi** | 10 | 10 (all closed) | 0 | Heavy merge cadence; extension API surface hardening |
| **Qwen Code** | 6 | 10 | 3 (stable + preview + nightly) | Highest release density; Fleet View + SDK parity |
| **DeepSeek TUI (CodeWhale)** | 10 | 10 | 1 (v0.8.67, rebrand) | Stopship v0.8.68 in final review; aggressive PR cadence |

**Aggregate:** ~77 hot issues, ~62 PRs, ~12 releases across 9 tools in 24 hours — a high-velocity day ecosystem-wide, with **Qwen Code and Codex** leading on release cadence and **OpenCode/Pi/CodeWhale** leading on PR throughput.

---

## 3. Shared Feature Directions

Requirements recurring across multiple communities — strong signal of where the market is converging:

| Direction | Tools Expressing Demand | Specific Needs |
|---|---|---|
| **Granular cost telemetry & billing explainability** | Claude Code (#41506, #75142, #75518), Codex (#30364 token clustering), OpenCode (#34712 token counter drift), CodeWhale (V4 cached-input economics, #528/#2953–2957) | Per-session / per-tool / per-cache-invalidation breakdowns; transparent reasoning budgets; cache-hit visibility |
| **Windows / WSL / cross-platform parity** | Claude Code (#75496, #59720, #61021, #47327), Codex (#18451, #31511, #15016, #31206), Gemini (#23926, #23848, #24142), Copilot CLI (#4001, #4046), OpenCode (#35327, #35828, #35839, #32932) | Terminal text selection, JetBrains path handling, sandbox stability, encoding preservation, update UX |
| **MCP lifecycle robustness** | Claude Code (#75502 binary uploads), Codex (#24103, #23840), Kimi (#1604 pre-registration), Copilot CLI (#3440 not terminated on disconnect, #4049 double-spawn), Pi (#6400 install location docs) | OAuth scope completeness, process cleanup on session end, no-touch auth, error telemetry |
| **Multi-session / multi-workspace orchestration** | Qwen Code (#6378 RFC, #6451 Fleet View, #6456 worktree pinning), CodeWhale (Fleet overhaul #3932–3935, v0.9.0 WhaleFlow #2981), Pi (session JSONL metadata #6402, repo remap #6394/#6407) | One daemon = many workspaces; sub-agent scoping; session relocation |
| **Auto-mode safety classifier resilience** | Claude Code (#63819, #73365 — Opus 4.8 classifier unavailable blocks all mutating tools) | Graceful degradation / smaller-model fallback when classifier is offline |
| **Sandbox ergonomics & least-privilege policy** | Copilot CLI (v1.0.69 work, #4041, #2643), Codex (Windows sandbox #18451, #31511), Claude Code (false-positive blocks on security work #75491/#75503–506) | Distinguish policy enforcement from OS sandbox; bypass UX; appeal paths for false positives |
| **Extension / plugin API surface hardening** | Pi (#5085 getAllTools, #4954, #5756, #5202 — "Pi-as-SDK"), OpenCode (V2 plugin readiness #35755, ecosystem registry #35768), Codex (remote plugins by default, #31482 migration to skills) | Stable tool schemas, registration contracts, observability hooks, system-prompt customization |
| **Memory & context-management trust** | Qwen Code (#6487 stale index + compaction loss), OpenCode (#20695 memory megathread, #34712), Pi (#6206/#6326/#6378 context leaks) | Reliable `/remember` semantics; compaction accounting correctness; durable instruction routing |
| **Agent observability / diagnostics** | Codex (#31466 `/feedback` tool-search snapshot, #31518 sub-error telemetry), Gemini (#28305 tool-call timeline, #28169 eval coverage), CodeWhale (#4182 sub-agent detail panel), OpenCode (#35820 resume diagnostics) | Always-on, no-build-flag diagnostic capture; per-extension/per-tool instrumentation |

---

## 4. Differentiation Analysis

| Dimension | Hyperscaler CLIs (Claude, Codex, Gemini, Copilot) | Independent / Architectural CLIs (OpenCode, Pi) | Regional / Specialized (Qwen, Kimi, CodeWhale) |
|---|---|---|---|
| **Feature focus** | Cloud model integration, billing/quota UX, multi-platform reliability | Extensibility, plugin API surface, V2 architecture, open provider model | Multi-workspace orchestration, channel integration (WeCom), terminal UX polish |
| **Target users** | Mainstream developers on subscription tiers; enterprise (ZDR, Pro/Ultra) | Power users, plugin authors, local-model (LM Studio/Ollama) users | Multi-repo enterprise teams, design-tooling workflows, keyboard-first TUI purists |
| **Technical approach** | Proprietary stacks with managed safety classifiers; opaque reasoning budgets | Open provider abstraction; explicit extension SDK; durable agent loop primitives | Strong SDK parity (Python + TS), agent orchestration layers, role/profile rosters |
| **Pricing/distribution** | Subscription-tied (Max, Pro, ChatGPT, Copilot); first-party auth | Open-source; BYOK; local-first friendly | Hybrid; enterprise channel distribution |
| **Risk profile** | Single-vendor outage (Opus classifier, GPT-5.5 throttling) freezes workflows | Leaks in provider abstraction (#26063 LM Studio aborts); less platform hardening | Smaller communities; concentrated bus-factor risk (e.g. CodeWhale's heavy reliance on Hmbown) |

**Key differentiator signal:** Hyperscalers are investing in **policy plumbing** (sandbox bypass, quota telemetry, classifier fallbacks); independents are investing in **extensibility primitives**; regional/specialized tools are investing in **multi-agent orchestration** — implying that developers will increasingly choose based on workflow shape (single-agent at scale vs. pluggable SDK vs. multi-session enterprise) rather than model quality alone.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|---|---|---|
| **High momentum, high maturity** | Claude Code, OpenAI Codex, Gemini CLI | Daily release cadence; hundreds of comments on flagship issues (#30364 has 156 / 👍252; #41506 has 54 / 👍26); enterprise-grade incident threads (ZDR session-leakage); documented APIs and SDKs |
| **High momentum, growing** | GitHub Copilot CLI, OpenCode, Qwen Code, CodeWhale | Frequent releases; PR throughput at parity with hyperscalers; architectural transitions underway (V2, v0.9.0 WhaleFlow, Fleet rework); strong opinionated roadmaps |
| **High momentum, niche** | Pi | Heavy merge cadence (10/10 PRs closed in 24h); concentrated vision via xl0-led workstream; "Pi-as-SDK" positioning distinct from all peers |
| **Low momentum / quiet window** | Kimi Code CLI | 1 issue, 0 PRs, 0 releases — likely temporary; Figma MCP request is the lone signal |

**Engineering intensity ranking** (PRs + releases in 24h, normalised):
1. **Qwen Code** — 13 actions (3 releases + 10 PRs)
2. **OpenAI Codex** — 13 actions (3 releases + 10 PRs)
3. **DeepSeek TUI / CodeWhale** — 11 actions
4. **OpenCode, Pi** — 11 actions each
5. **Gemini CLI** — 10 actions (PRs only)
6. **Claude Code** — 4 actions (heavy on issues, light on PRs)
7. **GitHub Copilot CLI** — 2 actions (release-led, PR pause)
8. **Kimi Code CLI** — 0 actions

**Maturity read:** Claude Code and Codex have the largest absolute community size and most enterprise touchpoints; OpenCode and CodeWhale show the most aggressive architectural ambition; Pi shows the most disciplined execution velocity per active contributor.

---

## 6. Trend Signals

For developers and technical decision-makers, the following industry-level trends are visible from today's cross-section:

1. **Cost trust is the next reliability frontier.** Token-consumption spikes with no configuration change (Claude #41506), hidden reasoning-budget clustering (Codex #30364), and token-counter drift after compaction (OpenCode #34712) collectively indicate that **transparent, fine-grained usage telemetry is becoming a competitive moat** rather than a back-office feature.

2. **MCP is shifting from "supported" to "operationalized."** The conversation has moved past "does it work?" to lifecycle concerns — process cleanup on disconnect (Copilot #3440), double-spawn on `/new` (#4049), OAuth scope gaps (Codex #31506, #24103), pre-registration friction (Kimi #1604), and binary/multipart completeness (Claude #75502). Vendors shipping MCP-aware diagnostics (Codex #31466, #31518; Gemini SSRF guards #28112) are pulling ahead.

3. **Multi-agent orchestration is the new architectural axis.** Qwen's Fleet View + multi-workspace RFC (#6378, #6451, #6456), CodeWhale's Fleet role/profile roster (#4181) + WhaleFlow branch/leaf workflow (#2981), and OpenCode's V2 durable AGENTS.md routing (#34341, #35497) signal that **single-agent CLIs are being re-architected around multi-session/multi-worktree primitives** in parallel across vendors.

4. **Windows is the universal cross-vendor tax.** Every tool with a meaningful Windows surface — Claude Code, Codex, Gemini, Copilot CLI, OpenCode — ships same-week Windows regressions in this snapshot: restricted-token failures, false filename errors, Git Bash signal pipes, terminal text selection, window-not-appearing on macOS 26. Treat Windows support as a leading indicator of engineering depth, not a given.

5. **Extension/plugin systems are maturing into first-class SDK surfaces.** Pi's `getAllTools` (#5085) plus system-prompt control (#5306); Codex's command→skill migration (#31482); OpenCode's V2 plugin-readiness barrier (#35755) and Copilot Quota plugin registry (#35768); Copilot CLI's `/plugins` dashboard and `web_fetch` bypass UX (#v1.0.69) all point to **plugins evolving from opt-in extras into the primary extensibility story**.

6. **Safety-classifier single points of failure are surfacing.** Claude Code's Opus 4.8 classifier returning "unavailable" (#63819, #73365) hard-blocks every mutating tool with no automatic recovery — a pattern other vendors should monitor proactively as they adopt similar classifiers.

7. **Security disclosures are migrating into platform scope.** Anthropic has not publicly documented cross-workspace isolation guarantees (#74066); Gemini closed an SSRF coverage gap via PR #28112; Codex routed auth/Responses traffic through system proxies (v0.143.0) — the **trust perimeter is moving from "does it run?" to "what does it leak?"**, particularly for ZDR/Enterprise tenants.

8. **PR pauses correlate with release-heavy windows.** GitHub Copilot CLI's 0-PR day coincides with v1.0.69 release work; Claude Code's PR-light day (2 docs-only) sits next to a same-day regression in v2.1.204. **For developers tracking upgrade risk, prefer mid-cycle weeks over release-day weeks.**

---

*Report compiled from 9 GitHub community digests dated 2026-07-08. All issue/PR numbers, comment counts, and reaction counts are drawn directly from the source digests. "Today" denotes activity within the preceding 24-hour window.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
**Data as of 2026-07-08** | Repository: [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking (Most-Discussed PRs)

> Note: PR comment counts are not exposed in this dataset; the ranking below combines recency of activity, breadth of cross-references in Issues, and the strategic importance of each submission to the Skills ecosystem.

### 🥇 #1298 — Fix `run_eval.py` reporting 0% recall (skill-creator)
- **Author:** MartinCajiao | **Status:** OPEN | [PR #1298](https://github.com/anthropics/skills/pull/1298)
- Fixes the description-optimization loop's signal source: `run_eval.py` is currently returning `recall=0%` for every description, making the optimizer tune against noise. This PR installs the eval artifact as a real skill and addresses Windows stream reading, trigger detection, and parallel-worker issues.
- **Why it matters:** The same root cause threads through **at least 6 other reports** (#362, #361, #539, #1099, #1050, #1169, #1323, Issue #556) — this is the canonical "fix" PR for the most-reported Skills bug of the cycle.

### 🥈 #1367 — `self-audit`: mechanical verification + 4-dimension reasoning gate (v1.3.0)
- **Author:** YuhaoLin2005 | **Status:** OPEN | [PR #1367](https://github.com/anthropics/skills/pull/1367)
- A meta-skill that audits AI output before delivery: first mechanically verifies every claimed output file exists, then runs a reasoning-quality audit in damage-severity order. Universal — claims to work with any project, model, or stack.
- **Why it matters:** It's the most recent "v1.3.0" of a contributor-built quality gate, signaling community appetite for **verification skills** that close the loop on agent output.

### 🥉 #514 — `document-typography` skill
- **Author:** PGTBoos | **Status:** OPEN | [PR #514](https://github.com/anthropics/skills/pull/514)
- Typographic quality control for AI-generated documents: prevents orphan word wraps, widow paragraphs, and numbering misalignment. Targets problems that "affect every document Claude generates."
- **Why it matters:** A long-lived, cross-cutting enhancement to document skills (PDF, DOCX, PPTX families) with broad applicability.

### 4. #486 — `odt` skill (OpenDocument text)
- **Author:** GitHubNewbie0 | **Status:** OPEN | [PR #486](https://github.com/anthropics/skills/pull/486)
- Adds create/fill/parse/convert support for ODT/ODS (LibreOffice native, ISO-standard open format). Triggers on "ODT", "ODS", "OpenDocument", "LibreOffice document" mentions.
- **Why it matters:** Closes a major format gap — open-source / government / EU-public-sector users currently have no native path.

### 5. #723 — `testing-patterns` skill
- **Author:** 4444J99 | **Status:** OPEN | [PR #723](https://github.com/anthropics/skills/pull/723)
- Comprehensive testing-stack skill: Testing Trophy philosophy, AAA pattern, React component testing, mocks/stubs, integration vs. unit, "what NOT to test."
- **Why it matters:** Fills one of the most-requested capability areas (see Issue #202's call to upgrade skill-creator best practices).

### 6. #1302 — `color-expert` skill
- **Author:** meodai | **Status:** OPEN | [PR #1302](https://github.com/anthropics/skills/pull/1302)
- Self-contained color expertise: ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS named colors, plus a "what space to use when" table (OKLCH, OKLAB, CAM16).
- **Why it matters:** Author `meodai` is a known color-systems expert; the skill is opinionated and reference-grade.

### 7. #210 — Improve `frontend-design` skill
- **Author:** justinwetch | **Status:** OPEN | [PR #210](https://github.com/anthropics/skills/pull/210)
- Rewrites the existing frontend-design skill so every instruction is single-conversation-actionable and specific enough to steer behavior without over-constraining it.
- **Why it matters:** Refining a flagship design skill — quality bar for "single-conversation actionability" is the same standard flagged in Issue #202.

### 8. #83 — `skill-quality-analyzer` + `skill-security-analyzer`
- **Author:** eovidiu | **Status:** OPEN | [PR #83](https://github.com/anthropics/skills/pull/83)
- Two meta-skills: a 5-dimension quality analyzer (structure 20%, examples, resources…) and a security analyzer. Pairs naturally with Issue #492 (trust-boundary concern).

---

## 2. Community Demand Trends (from Issues)

| # | Direction | Signal | Discussion Volume | Status |
|---|---|---|---|---|
| 1 | **Trust / security boundaries for community Skills** | Issue [#492](https://github.com/anthropics/skills/issues/492) — community skills distributed under `anthropic/` namespace enable trust-boundary abuse | **34 comments** (highest in dataset) | OPEN |
| 2 | **Org-level skill sharing in Claude.ai** | Issue [#228](https://github.com/anthropics/skills/issues/228) — eliminate the manual `.skill` download → Slack/Teams → Settings > Capabilities upload dance | 14 comments | OPEN |
| 3 | **Skill creation / description optimization is broken** | Issues [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#202](https://github.com/anthropics/skills/issues/202) (CLOSED) — `run_eval.py` 0%-trigger bug, optimizer optimizing against noise, skill-creator is "developer docs not operational skill" | 12 + 3 + 8 comments | Mixed |
| 4 | **Cross-platform (Windows) parity** | Issues [#1061](https://github.com/anthropics/skills/issues/1061), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) — `PATHEXT`, `cp1252` encoding, `select()` on pipes | 3 + PR comments | OPEN |
| 5 | **Compact / symbolic agent memory** | Issue [#1329](https://github.com/anthropics/skills/issues/1329) — `compact-memory` skill for long-running agents that spend too much context on prose notes | 9 comments | OPEN |
| 6 | **Agent governance / safety patterns** | Issue [#412](https://github.com/anthropics/skills/issues/412) (CLOSED) — policy enforcement, threat detection, trust scoring, audit trails | 6 comments | CLOSED |
| 7 | **Plugin de-duplication** | Issue [#189](https://github.com/anthropics/skills/issues/189) — `document-skills` and `example-skills` install identical content → duplicate skills in context window | 6 comments | OPEN |
| 8 | **Skills as MCP servers** | Issue [#16](https://github.com/anthropics/skills/issues/16) — expose Skills as MCPs so `algorithmic-art` becomes `generateAlgorithmArt({...})` | 4 comments | OPEN |
| 9 | **Enterprise integration (Bedrock, SharePoint)** | Issues [#29](https://github.com/anthropics/skills/issues/29), [#1175](https://github.com/anthropics/skills/issues/1175) (CLOSED) — AWS Bedrock usage; SharePoint governance concerns | 4 + 4 comments | Mixed |
| 10 | **Toolchain drift (pnpm ≥10.1, favicon, font inlining)** | Issue [#1362](https://github.com/anthropics/skills/issues/1362) — `web-artifacts-builder` bundle/init scripts broken on current toolchain | 3 comments | OPEN |

**Top emerging skill directions:** *verification/quality-gating, agent governance & trust, Windows parity, compact agent memory, format coverage (ODT), and design discipline (typography, color, frontend).*

---

## 3. High-Potential Pending Skills (Active PRs likely to land)

| PR | Title | Why it's close | Link |
|---|---|---|---|
| **#1298** | skill-creator: `run_eval.py` 0% recall fix | Tied to the single most-cross-referenced bug; the proposed fix consolidates 4+ existing partial fixes | [#1298](https://github.com/anthropics/skills/pull/1298) |
| **#1099** | Windows subprocess pipe fix | One of the most independently reproduced bugs (10+ reproductions in #556); surgical 1-line fix | [#1099](https://github.com/anthropics/skills/pull/1099) |
| **#1050** | Windows subprocess + encoding | Pairs with #1099; both ship together to fully unblock Windows users | [#1050](https://github.com/anthropics/skills/pull/1050) |
| **#539** | YAML special-character warning | Pre-parse validation closes a silent-corruption class; small surface area | [#539](https://github.com/anthropics/skills/pull/539) |
| **#362** | UTF-8 panic fix | Replaces char-based length checks with byte-length validation; unblocks non-ASCII users | [#362](https://github.com/anthropics/skills/pull/362) |
| **#361** | Detect unquoted YAML special chars | Overlaps with #539 — likely to merge as one | [#361](https://github.com/anthropics/skills/pull/361) |
| **#538** | PDF case-sensitive file references | Trivial but high-bug-prevention value; clear scope | [#538](https://github.com/anthropics/skills/pull/538) |
| **#541** | DOCX tracked-change `w:id` collision | Fixes document corruption for an entire category of users | [#541](https://github.com/anthropics/skills/pull/541) |
| **#509** | Add `CONTRIBUTING.md` | Closes the community-health gap flagged in Issue #452; political will is high | [#509](https://github.com/anthropics/skills/pull/509) |
| **#1323** | `run_eval` trigger detection | Alternative fix to the same family as #1298; whichever lands first supersedes | [#1323](https://github.com/anthropics/skills/pull/1323) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for a "Skills trust & quality layer"** — verification skills that audit agent output, security analyzers that flag impersonation (e.g. `anthropic/` namespace abuse), and a reliable description-optimization loop — all of which the current `skill-creator` toolchain claims to provide but, per Issues #202, #492, #556, and PRs #1298/#1323, currently delivers broken signals that the community is racing to patch.

---

# Claude Code Community Digest — 2026-07-08

## 1. Today's Highlights

The 2.1.204 release shipped a critical fix for headless `SessionStart` hook streaming, but it appears to have introduced a regression cluster around `claude --resume` / Agents view rendering — multiple users on macOS, Windows, and WSL2 report frozen or unresponsive screens immediately after upgrade. Meanwhile, cost-related complaints (token consumption spikes, false overage reports, session-limit errors on fresh logins) continue to dominate the issue tracker, and a cross-workspace session-leakage report on Enterprise ZDR has drawn serious security attention.

## 2. Releases

**v2.1.204** ([release notes](https://github.com/anthropics/claude-code/releases))
- Fixed hook events not streaming during `SessionStart` hooks in headless sessions, which could cause remote workers to be idle-reaped mid-hook.

**v2.1.203** ([release notes](https://github.com/anthropics/claude-code/releases))
- Added a warning when your login is about to expire, so you can re-authenticate before background sessions are interrupted.
- Added a grey ⏸ badge to the footer when in manual permission mode, making the active mode always visible.
- Added the session's additional working directori[es listing] (truncated in feed).

## 3. Hot Issues

1. **#41506 — Max Plan: Token usage increased ~3-5x without any configuration change** ([link](https://github.com/anthropics/claude-code/issues/41506))
   *54 comments · 👍26* — The most-discussed cost issue on the tracker. A Max-plan user reports a sustained 3-5x token burn since late March, undermining budgeting and triggering copy-paste template bug reports. High signal because it has survived multiple duplicate closures.

2. **#73365 — Advisor always "unavailable" with Fable 5 advisor (Opus 4.8)** ([link](https://github.com/anthropics/claude-code/issues/73365))
   *12 comments · 👍31* — Top thumbs-up in the set. Reports that the auto-mode safety classifier returns "unavailable" across every session on 2.1.198, effectively blocking Bash/PowerShell/Write/Edit tool calls. The 👍/comment ratio suggests broad agreement the regression is widespread.

3. **#74066 — Potential session/cache leakage between workspace instances** ([link](https://github.com/anthropics/claude-code/issues/74066))
   *17 comments · 👍0* — Security-critical. An Enterprise ZDR user reports the agent started answering questions about a Minecraft temple while authenticated to a different workspace — implying prompts or cached context crossed a tenant boundary. Zero likes but 17 comments suggest careful triage discussion.

4. **#63819 — Auto mode classifier (claude-opus-4-8) repeatedly unavailable** ([link](https://github.com/anthropics/claude-code/issues/63819))
   *13 comments · 👍18* — Long-standing twin of #73365. Users on Windows + VS Code extension + Opus 4.8 are routinely blocked from Bash/Write/Edit with no fallback path. Labeled `duplicate` but still accumulating votes.

5. **#39678 — Code Review incorrectly reports overage limit reached when spend is $0/$250** ([link](https://github.com/anthropics/claude-code/issues/39678))
   *17 comments · 👍13* — Anthropic-managed GitHub Code Review is refusing to run on paid orgs because of an internal spend-counter bug. Bypasses CI gating and breaks developer trust in the GitHub App.

6. **#47327 — Cowork tab disabled — yukonSilver "unsupported" on Windows 11** ([link](https://github.com/anthropics/claude-code/issues/47327))
   *18 comments · 👍3* — Four months and counting without resolution; the Cowork feature is effectively Windows-unannounced. Windows-tier users feel like second-class citizens.

7. **#75142 — Loading a tool for the first time mid-session invalidates cache** ([link](https://github.com/anthropics/claude-code/issues/75142))
   *2 comments · 👍0* — Reproducible cache-invalidation bug tied to first-time skill/MCP/tool-search loads. Materially drives up cost and latency; the write-up is unusually detailed and likely to gain traction.

8. **#61021 — Can no longer easily select text to copy and paste (VS Code)** ([link](https://github.com/anthropics/claude-code/issues/61021))
   *10 comments · 👍7* — A small but universally-felt UX regression: mouse selection in the VS Code terminal breaks while Claude Code is running. The kind of friction that erodes daily-driver quality.

9. **#75496 — `claude --resume` renders a screen that accepts no keyboard input on WSL2 (v2.1.204)** ([link](https://github.com/anthropics/claude-code/issues/75496))
   *4 comments · 👍0* — Filed the same day as the 2.1.204 release. Confirms a fresh regression, not a stale report. Important because `claude --resume` is a core power-user flow.

10. **#75518 — $115 Total cost on Max subscription while weekly quota bar sits at 73%** ([link](https://github.com/anthropics/claude-code/issues/75518))
    *1 comment · 👍0* — Concrete counter-example to the quota UI: a Max subscriber was charged for overage despite plan capacity being available. A trust-critical billing-transparency issue.

## 4. Key PR Progress

Only 2 PRs updated in the last 24h; both are documentation-only and worth a quick mention:

1. **#73476 — docs: fix GitHub capitalization in README** ([link](https://github.com/anthropics/claude-code/pull/73476))
   Trivial typo fix (`Github` → `GitHub`); author **Elmahditcham**. Open since 2026-07-02 with no review activity — low priority but harmless.

2. **#75252 — docs: clarify plugin MCP configuration scope** ([link](https://github.com/anthropics/claude-code/pull/75252))
   Reopened from #74857 after the fork was deleted. Author **andrewmuratov** clarifies that plugin `mcpServers` config is for plugin-bundled MCP servers and is distinct from the user-level allow/deny list in `~/.claude.json`. Directly addresses confusion that surfaces in multiple open issues about plugin scope behavior in the VS Code extension (e.g. #74612).

> *Note: only 2 PRs were updated in the last 24h, so the "top 10" PR list cannot be filled. The two above are the full set.*

## 5. Feature Request Trends

Distilled across the open issue tracker:

- **Granular cost telemetry & billing explainers.** Per-session, per-tool, and per-cache-invalidation breakdowns; show *why* a token count jumped. (Demand driven by #41506, #74803, #75142, #75518.)
- **Auto-mode safety-classifier redundancy / graceful degradation.** When the `claude-opus-4-8` classifier is unavailable, fall back to a user-controlled prompt-permission path or a smaller model rather than hard-blocking Bash/Write/Edit. (#63819, #73365, #38618.)
- **Cross-workspace / cross-account isolation guarantees for ZDR and Enterprise tenants.** Documented isolation story for sessions, prompt cache, and agent memory. (#74066.)
- **MCP connector completeness: binary/multipart uploads.** First-class support for `format: binary` parameters (e.g. Zoho Books `doc`). (#75502.)
- **Resume / Agents view stability across platforms.** Make the dashboard degrade gracefully on WSL, Windows terminals, and Warp. (#75496, #75497, #75513, #75521, #59720.)
- **Reduced safety-filter false positives for legitimate security / RE / forensics work**, with an audit trail and a faster appeal path. (#75491, #75503, #75504, #75506.)
- **CLI ⇄ VS Code parity for plugins and MCP servers.** Same `.claude.json` semantics in both surfaces; no silent filtering of project-scoped installs. (#74612.)
- **Window/IDE integration hardening** — JetBrains WSL path handling, IntelliJ serialization, Windows text-selection, iOS dispatch pairing. (#75498, #75499, #61021.)

## 6. Developer Pain Points

- **Cost unpredictability on Max plans.** The single largest community grievance. Multiple independent reports of 3-5x token spikes, false overage alerts, and "$115 charged with 73% quota remaining" — together these erode trust in the billing UI and `/usage` page.
- **Auto mode is fragile in production.** The Opus-based safety classifier going offline blocks every mutating tool (Bash, Write, Edit) with no automatic recovery path; only Sonnet/Opus reasoning still works. This is the modal "I can't ship today" complaint.
- **v2.1.204 resume regression.** Multiple same-day reports across macOS, Windows, and WSL2 of `claude --resume` and the Agents view ignoring all keyboard input or freezing entirely. Developers are (correctly) cautious about upgrading until this resolves.
- **False-positive safety blocks on legitimate security work.** Several reports of authorized reverse-engineering, cert analysis, and memory-forensics work being killed with no override path.
- **Windows/WSL/JetBrains parity gap.** Recurring class of issues: terminal text selection, JetBrains workspaceFolders serialization, Cowork unavailability, iPhone↔Windows dispatch pairing — Windows users consistently feel like second-class.
- **Trust gap around session isolation.** The ZDR session-leakage report, even if ultimately benign, has highlighted that Anthropic has not publicly documented cross-workspace isolation guarantees — a gap ZDR customers specifically need filled.

---
*Source: github.com/anthropics/claude-code — issues, PRs, and releases updated within the last 24h on 2026-07-08.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-08

## 1. Today's Highlights

The **rust-v0.143.0** release ships a significant shift: **remote plugins are enabled by default**, with npm marketplace sources and visible local/remote versions in the catalog. Authentication and Responses API traffic now route through macOS/Windows system proxies (including PAC and proxy auth). On the issue side, the most-discussed thread of the day is **#30364**, where GPT‑5.5 Codex reasoning tokens are clustering at suspicious boundaries (516/1034/1552), with broad community speculation about throttling or rate-limit interactions.

## 2. Releases

### rust-v0.143.0
- **Remote plugins enabled by default** with richer catalog rows, npm marketplace sources, and visible local/remote versions (#30297, #26705, #29375, #30981).
- **System proxy support** on macOS and Windows — Codex can route auth and Responses API traffic through OS-level proxies, including PAC files and proxy authentication.

### rust-v0.143.0-alpha.38 / 0.143.0-alpha.39
Routine alpha cuts on the way to the next stable. No published notes beyond version bumps.

## 3. Hot Issues

1. **[#30364](https://github.com/openai/codex/issues/30364)** — *GPT‑5.5 Codex reasoning-token clustering at 516/1034/1552 may be degrading performance on complex tasks.* 156 comments, 👍252. By far the highest-engagement thread of the day; the author found an aggregate pattern in `token_count` metadata suggesting internal token-budget truncation. Community signal: strongly implicates a rate-limit or cost-control interaction.
2. **[#14297](https://github.com/openai/codex/issues/14297)** — *New Codex app performs 5× "Reconnecting..." before every reply.* 52 comments, recently closed. Long-standing quality-of-life complaint on macOS; closure suggests a fix is in flight.
3. **[#24103](https://github.com/openai/codex/issues/24103)** — *Official Meta Ads MCP fails OAuth with `invalid_client_metadata`.* 12 comments. Blocks a documented first-party MCP integration before the consent flow even opens.
4. **[#23840](https://github.com/openai/codex/issues/23840)** — *Codex Desktop Computer Use MCP `initialize` times out, but the same client works from Terminal.* 11 comments. Important because Computer Use is a flagship Pro feature and the divergence between Desktop and CLI stacks is unexplained.
5. **[#18451](https://github.com/openai/codex/issues/18451)** — *Windows sandboxed shell fails with `CreateRestrictedToken failed: 87` even with `sandbox = "unelevated"`.* Persistent regression against the Windows sandbox path.
6. **[#31206](https://github.com/openai/codex/issues/31206)** — *Windows app: project list shows stray vertical arrow controls and broken localization after switching zh/en.* Cosmetic but embarrassing for paying users on Windows.
7. **[#31511](https://github.com/openai/codex/issues/31511)** — *`apply_patch` and `view_image` falsely report "filename too long" under restricted permission profile on Windows.* Real paths are 60–70 chars; PowerShell succeeds. Strongly suggests a path-translation bug in the elevated sandbox.
8. **[#15016](https://github.com/openai/codex/issues/15016)** — *Git Bash fails inside Windows sandbox with "couldn't create signal pipe, Win32 error 5".* Broke between 0.114.0 and 0.115.0 and remains open despite 👍7.
9. **[#31208](https://github.com/openai/codex/issues/31208)** — *Codex Desktop window never appears on macOS 26.4 — all 14 processes run but window count stays 0.* Notable as a macOS 26 beta blocker.
10. **[#31506](https://github.com/openai/codex/issues/31506)** — *ChatGPT login token missing `api.responses.write` scope.* Closed quickly, but flagged a real OAuth scope gap that affects ChatGPT Plus users.

## 4. Key PR Progress

1. **[#31482](https://github.com/openai/codex/pull/31482)** — *Migrate plugin commands into skills.* Moves command→skill conversion out of `codex-external-agent-migration` into `codex-core-plugins`, fixing a dependency cycle when plugin install uses the conversion. Strategic groundwork for the new remote-plugins-by-default model.
2. **[#31466](https://github.com/openai/codex/pull/31466)** — *Capture tool-search pipeline diagnostics in `/feedback`.* Replaces RUST_LOG/build-flag hacks with an always-on, per-thread tool-search snapshot — directly addresses the observability gap behind #30364.
3. **[#31518](https://github.com/openai/codex/pull/31518)** — *Add import-failure sub-error telemetry.* Adds `sub_error_type` to plugin-install and external-agent import analytics with privacy-safe classification. Aligns with #31466 in building the post-mortem tooling.
4. **[#31500](https://github.com/openai/codex/pull/31500)** — *code-mode: move to hosted mode by default.* Promotes `code_mode_host` to stable and flips the default; keeps `false` as opt-out. Big architectural change for core-mode isolation.
5. **[#31516](https://github.com/openai/codex/pull/31516)** + **[#31515](https://github.com/openai/codex/pull/31515)** — *Standalone web search previews and client-only result metadata.* Adds bounded URL/title/snippet previews end-to-end: from `/alpha/search`, through rollout events, app-server v2, and exec JSONL.
6. **[#31503](https://github.com/openai/codex/pull/31503)** — *Detect Codex installs managed by pnpm.* Stops the JS shim from falling back to npm for global pnpm installs; affects `codex doctor` and update flows.
7. **[#31514](https://github.com/openai/codex/pull/31514)** — *Reduce redundant filesystem syscalls.* Atomic writes through already-open temp files, cached directory classification, symlink metadata ordering. Pure perf win for file-search-heavy sessions.
8. **[#31509](https://github.com/openai/codex/pull/31509)** — *Support SQLite-disabled degraded mode.* Restores `[features] sqlite = false` as a supported escape hatch (notably for NFS homes), skipping state DB init/recovery.
9. **[#31283](https://github.com/openai/codex/pull/31283)** — *core: support extension-owned turn items.* New `codex-extension-items` crate lets extensions add `TurnItem` schemas without Core knowing about them — first consumer is standalone image generation.
10. **[#31333](https://github.com/openai/codex/pull/31333)** / **[#31338](https://github.com/openai/codex/pull/31338)** / **[#31349](https://github.com/openai/codex/pull/31349)** / **[#31350](https://github.com/openai/codex/pull/31350)** — *Closed thread-lifecycle hardening series (winston-openai).* Four-layer rollout/activity-locking refactor: turn transitions serialized under a per-session lock, activity reservations preserved across replacement/interrupt, and a manager-scoped thread tree with incarnation generations. All closed — the underlying races are considered addressed, even though #31304 (the prerequisite) was closed as no-longer-needed.

## 5. Feature Request Trends

- **Localization, especially Simplified Chinese** (#31513, #31206) — multiple requests for zh-CN UI in Codex Desktop, plus localization-consistency bugs after language switching.
- **VS Code extension polish** (#31519) — native completion notifications when an agent turn or task finishes.
- **pnpm as a first-class install path** (#31503) — users running global pnpm installs want the shim, `doctor`, and update flows to recognize pnpm.
- **Better in-app diagnostics** (#31466) — feedback command should capture tool-search pipeline state without requiring custom builds.
- **Cheaper / less truncated reasoning on GPT‑5.5 Codex** (#30364) — implicit but loud demand for either transparent reasoning budgets or restored long-context reasoning quality.
- **Hosted code-mode default** (#31500) — strong signal from power users that isolation beats in-process execution for safety.

## 6. Developer Pain Points

- **Windows sandbox fragility dominates the issue list**: #18451, #31511, #15016, #31206 all touch Windows-only regressions — restricted-token failures, false filename-too-long errors under custom profiles, broken Git Bash signal pipes, and localization glitches. Windows users are clearly paying a disproportionate tax on 0.142.x.
- **MCP integration gaps**: Meta Ads OAuth (#24103) and Codex Desktop Computer Use handshake (#23840) suggest first-party MCP integrations are not being tested against Codex's auth/transport layers before shipping.
- **ChatGPT-account auth scopes keep regressing**: #31506 (missing `api.responses.write`) is the latest in a pattern where `codex login` produces a token that doesn't cover the endpoints the CLI actually calls.
- **Token-budget / rate-limit opacity**: #30364's clustering evidence makes developers suspect hidden throttling on GPT‑5.5 Codex; the absence of a public `reasoning_budget` knob forces guesswork.
- **Sandbox permission UX**: #28715 (TUI "Full Access" picker selecting a `:danger-no-sandbox` profile that was explicitly rejected) shows the TUI permission surface still has unsafe defaults in edge cases.
- **macOS 26 beta readiness**: #31208 (window never appears) means Codex Desktop is not yet verified against the next macOS major.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-08

## Today's Highlights
No new releases shipped in the last 24 hours, but community activity remained steady with 44 updated issues and 18 active PRs. The most urgent signal is a cluster of **P1 authentication and startup crashes** affecting macOS, Windows, and WSL users — particularly around the 0.35.x and 0.36.x lines. On the engineering side, the **Caretaker Agent Triage Worker** pipeline (Cloud Run + Octokit + LLM orchestration) is taking shape via a coordinated set of PRs.

## Releases
*No new releases in the last 24 hours.* The most recent tagged versions in active discussion remain **0.35.x** and **0.36.x**, which are the sources of multiple P1 regressions reported below.

## Hot Issues

1. **[#23973 — Pro account treated as standard-tier](https://github.com/google-gemini/gemini-cli/issues/23973)** — Google AI Pro users are seeing tier-detection misread as `standard-tier`, blocking CLI usage entirely. 11 comments; high visibility because it affects paying users.

2. **[#25672 — Excessive project-wide scanning](https://github.com/google-gemini/gemini-cli/issues/25672)** — Even trivial edits trigger full workspace scans, Go stdlib loads, and cgo/vuln checks, making simple patches painfully slow. Indicates a perf regression in the agent's pre-edit pipeline.

3. **[#24835 — Corrupted credentials on macOS Tahoe 26.3.1](https://github.com/google-gemini/gemini-cli/issues/24835)** — ZDR API keys repeatedly trigger "corrupted credentials" errors; re-entering the key fails the same way. P1 and recurring for affected users.

4. **[#23848 — v0.35 fails to authenticate on Ubuntu/WSL](https://github.com/google-gemini/gemini-cli/issues/23848)** — Auth flow regressed specifically in 0.35.0 and 0.35.1 for WSL users, persisting even after clearing local config.

5. **[#19344 — Undocumented 20MB `read_file` limit](https://github.com/google-gemini/gemini-cli/issues/19344)** — A hard limit not mentioned in `docs/tools/file-system.md`, `faq.md`, or `troubleshooting.md`. Users only discover it via obscure errors; pure documentation fix needed.

6. **[#23085 — `.gitignore` ignored by `readManyFiles`](https://github.com/google-gemini/gemini-cli/issues/23085)** — Files excluded by `.gitignore` inside `includeDirectories` are still read, violating a long-standing user expectation.

7. **[#24142 — `sysctl ENOENT` crash on macOS Intel + Node v25](https://github.com/google-gemini/gemini-cli/issues/24142)** — Hard startup crash via Homebrew installation on macOS 15.7.5 with Node 25.8.2. Blocks first-run for a non-trivial segment of users.

8. **[#24692 — Inner session enters plan mode unintentionally](https://github.com/google-gemini/gemini-cli/issues/24692)** — Subagents unexpectedly trigger plan mode, suggesting a state-propagation bug across nested sessions.

9. **[#23926 — Confusing Windows Auth/Setup UX](https://github.com/google-gemini/gemini-cli/issues/23926)** — The update flow spawns a secondary terminal that closes on cancel and breaks installation. P1 install-blocking UX on Windows.

10. **[#24109 — `ProceedAlwaysAndSave` falls through to `REJECT`](https://github.com/google-gemini/gemini-cli/issues/24109)** — Telemetry silently misclassifies "Proceed Always and Save" as rejection due to a missing case in `getDecisionFromOutcome()`.

## Key PR Progress

1. **[#28223 — Bypass LLM correction for JSON/IPYNB](https://github.com/google-gemini/gemini-cli/pull/28223)** — Fixes a critical corruption bug where `write_file` and `replace` mangled `.json` and `.ipynb` files; surgical change targeting only the LLM-correction path.

2. **[#28112 — SSRF protection for OAuth metadata discovery](https://github.com/google-gemini/gemini-cli/pull/28112)** — Closes a coverage gap versus `web-fetch.ts`; validates MCP-provided URLs against loopback/DNS checks before fetching.

3. **[#28103 — Avoid keep-alive socket reuse during OAuth exchange](https://github.com/google-gemini/gemini-cli/pull/28103)** — Mitigates "Premature close" failures tied to CVE-2026-48931 on Node 24.17.0 / 22.23.0 / 26.3.0.

4. **[#28304 — Friendly `/privacy` message when no Code Assist tier](https://github.com/google-gemini/gemini-cli/pull/28304)** — Replaces the raw `User does not have a current tier` backend error with a contextual dialog for Workspace/enterprise and bare-OAuth users.

5. **[#27971 — Strip thoughts from scrubbed history turns](https://github.com/google-gemini/gemini-cli/pull/27971)** — Resolves "Thought Leakage" where the model's internal monologues bled into subsequent turns, causing infinite-loop emulations.

6. **[#28224 — Emoji-safe truncation in `sanitizeForDisplay`](https://github.com/google-gemini/gemini-cli/pull/28224)** — Fixes surrogate-pair splitting that produced replacement characters in terminal output.

7. **[#28219 — Parse `settings.json` with comments in parent bootstrap](https://github.com/google-gemini/gemini-cli/pull/28219)** — Lets the lightweight CLI parent read `//`-commented settings without silently falling back to defaults.

8. **[#28306 — Caretaker Triage Worker main loop + egress publisher](https://github.com/google-gemini/gemini-cli/pull/28306)** — Implements the Cloud Run Job execution loop and Pub/Sub egress, plus a stubbed orchestrator for follow-up PRs.

9. **[#28305 — Tool-call timeline + failure summaries for evals](https://github.com/google-gemini/gemini-cli/pull/28305)** — Prints numbered tool-call traces with arguments, status, and error details directly in eval failure output.

10. **[#27200 — Retry transient directory cleanup on extension update](https://github.com/google-gemini/gemini-cli/pull/27200)** — Works around Windows file-lock timing during extension install/uninstall.

## Feature Request Trends

- **Privacy & Account UX**: A clear, contextual privacy dialog when no Code Assist tier is present ([#28304](https://github.com/google-gemini/gemini-cli/pull/28304)); better tier detection for Pro/Ultra accounts ([#23973](https://github.com/google-gemini/gemini-cli/issues/23973), [#24112](https://github.com/google-gemini/gemini-cli/issues/24112)).
- **Pre-flight Secret Scanning**: A dedicated request ([#25837](https://github.com/google-gemini/gemini-cli/issues/25837)) to redact credentials, API keys, and PII from context before transmission.
- **Eval Observability**: Tool-call timeline formatting ([#28305](https://github.com/google-gemini/gemini-cli/pull/28305)) and an `eval:coverage` reporting command ([#28169](https://github.com/google-gemini/gemini-cli/pull/28169)) reflect a growing need for diagnostics around agent behavior.
- **Automated Triage Pipeline**: The Caretaker Agent Triage Worker PRs ([#28163](https://github.com/google-gemini/gemini-cli/pull/28163), [#28303](https://github.com/google-gemini/gemini-cli/pull/28303), [#28306](https://github.com/google-gemini/gemini-cli/pull/28306), [#28307](https://github.com/google-gemini/gemini-cli/pull/28307)) show investment in a server-side LLM-driven GitHub issue triage loop.

## Developer Pain Points

- **Authentication fragility across platforms**: Mac (Tahoe), Windows, and WSL all show distinct auth regressions in the 0.35.x line, often forcing users to clear configs or downgrade. Top complaint by a wide margin.
- **Tier/quota confusion**: Flash-quota errors firing when the model is set to Pro ([#23737](https://github.com/google-gemini/gemini-cli/issues/23737)), Pro accounts misread as standard ([#23973](https://github.com/google-gemini/gemini-cli/issues/23973)), Ultra not recognized on OAuth ([#24112](https://github.com/google-gemini/gemini-cli/issues/24112)) — a recurring pain that erodes trust.
- **File-handling correctness**: `.gitignore` ignored by `readManyFiles` ([#23085](https://github.com/google-gemini/gemini-cli/issues/23085)), JSON/IPYNB corruption on write ([#28223](https://github.com/google-gemini/gemini-cli/pull/28223)), and an undocumented 20MB `read_file` cap ([#19344](https://github.com/google-gemini/gemini-cli/issues/19344)).
- **Agent inefficiency**: Excessive pre-edit scanning ([#25672](https://github.com/google-gemini/gemini-cli/issues/25672)), runaway "Thinking…" sessions ([#25667](https://github.com/google-gemini/gemini-cli/issues/25667)), and context bloat after /compress ([#25688](https://github.com/google-gemini/gemini-cli/issues/25688)).
- **Cross-platform startup failures**: `sysctl ENOENT` on macOS ([#24142](https://github.com/google-gemini/gemini-cli/issues/24142)), SIGSEGV on cachyos ([#24324](https://github.com/google-gemini/gemini-cli/issues/24324)), and the broken Windows update UX ([#23926](https://github.com/google-gemini/gemini-cli/issues/23926)).
- **Documentation drift**: Several "undocumented limit/behavior" issues suggest that the docs site is lagging behind shipped behavior, particularly around file-system tooling and the policy engine.

---
*Sources: [google-gemini/gemini-cli Issues](https://github.com/google-gemini/gemini-cli/issues) · [Pull Requests](https://github.com/google-gemini/gemini-cli/pulls) — data snapshot 2026-07-08.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI — Community Digest
**Date:** 2026-07-08

---

## 1. Today's Highlights

The 1.0.69 release ships significant improvements to the **sandbox policy model** — built-in file edits can now be approved to bypass the sandbox, `web_fetch` honors the active sandbox network policy, and a `/plugins` dashboard plus hot-reload for plugin extensions make day-to-day development workflows smoother. Meanwhile, the **long-standing #53 thread** (most-reacted issue ever, 75 👍) asking to restore GitHub-Copilot-in-CLI flags continues to drive community churn, prompting users to fork their own clients.

---

## 2. Releases

### v1.0.69 (2026-07-07)
- Built-in file edits now carry a `(sandbox policy)` badge rather than `(sandboxed)`, since they enforce policy best-effort rather than running in the OS-level sandbox.
- Plugin extensions can be reloaded without restarting a session.
- New `/plugins` dashboard for managing installed extensions.

### v1.0.69-3
- Built-in file edits can bypass the sandbox when explicitly approved.
- `web_fetch` now respects the active sandbox network policy; when `sandbox.allowBypass` is opted in, users can approve a one-time bypass directly from the fetch prompt.

---

## 3. Hot Issues

| # | Issue | Why it matters | Community Reaction |
|---|-------|----------------|--------------------|
| [#53](https://github.com/github/copilot-cli/issues/53) — *Bring back the GitHub Copilot in CLI commands* | Top-reacted issue in the repo; users complain removal broke existing shell scripts and tooling. | ⭐ 75 / 💬 37 |
| [#2643](https://github.com/github/copilot-cli/issues/2643) — *preToolUse hook can't silently rewrite commands* | A `preToolUse` hook returning `permissionDecision: allow` with `updatedInput` still triggers a confirmation dialog — undermines programmatic trust policies for plugin authors. | ⭐ 2 / 💬 12 |
| [#3123](https://github.com/github/copilot-cli/issues/3123) — */research can't write its report* | The research agent completes work but can't persist the markdown — the `create` tool is unavailable to it, leaving users with un-saved research. | ⭐ 5 / 💬 5 |
| [#2729](https://github.com/github/copilot-cli/issues/2729) — */delegate ignores source branch + branch name* | Workflow breakage: the delegation agent disregards explicit branch arguments, silently working from a different base. | ⭐ 2 / 💬 3 |
| [#4001](https://github.com/github/copilot-cli/issues/4001) — *Windows `.claude/settings.json` hooks broken* | Hooks execute via PowerShell instead of bash and `$CLAUDE_PROJECT_DIR` is unset, breaking every cross-Claude hook on Windows. | ⭐ 0 / 💬 3 |
| [#4053](https://github.com/github/copilot-cli/issues/4053) — *TUI hangs at "Loading: N skills" on NFS/GPFS* | A SIGCHLD race with Tokio-spawned `which gh` subprocesses hangs the TUI indefinitely on network filesystems — affects CI/cluster workflows. | ⭐ 0 / 💬 1 |
| [#3954](https://github.com/github/copilot-cli/issues/3954) — *`explore` tool hardcodes `gpt-5.4-mini`* | Custom model/DeepSeek endpoint configs are bypassed, causing API failures for users running their own backends. | ⭐ 1 / 💬 1 |
| [#3604](https://github.com/github/copilot-cli/issues/3604) — *Windows-1252 files get re-saved as UTF-8* | Encoding corruption on edit — significant data-integrity risk for legacy codebases and Windows users. | ⭐ 1 / 💬 1 |
| [#4038](https://github.com/github/copilot-cli/issues/4038) — *Empty user message injected with large MCP server sets* | In `-p` mode, ≥7 MCP tools trigger an empty trailing user turn; the model echoes its system prompt instead of answering. | ⭐ 0 / 💬 1 |
| [#4054](https://github.com/github/copilot-cli/issues/4054) — */resume broken for non-git sessions* | Sessions created outside a git repo store `repository = '/'`, making them impossible to select in `/resume` — a UX deadlock. | ⭐ 0 / 💬 1 |

---

## 4. Key PR Progress

> **No pull requests were updated in the last 24 hours.** The current development cycle is issue-driven; maintainers are triaging bug reports and feature requests ahead of the next merge window. Track newly opened PRs on the [PRs tab](https://github.com/github/copilot-cli/pulls).

---

## 5. Feature Request Trends

- **Sandbox ergonomics** — finer-grained bypass controls for `web_fetch` and file edits, plus clearer UI badges so users can distinguish enforced policy from OS-level sandboxing ([v1.0.69 release notes](#), [#4041](https://github.com/github/copilot-cli/issues/4041)).
- **Plugin & extension maturity** — `/plugins` dashboard, interactive `${input:...}` variables in plugin manifests, project-scoped canvas routing, and fixing skills not being exposed as slash commands ([#4050](https://github.com/github/copilot-cli/issues/4050), [#4042](https://github.com/github/copilot-cli/issues/4042), [#4048](https://github.com/github/copilot-cli/issues/4048), [#4056](https://github.com/github/copilot-cli/issues/4056)).
- **Cross-IDE / BYOK parity** — bring-your-own-key support for the ACP server mode so JetBrains and other ACP clients can route through user-controlled models ([#4037](https://github.com/github/copilot-cli/issues/4037)).
- **Programmatic workflow APIs** — exposing branch-prefix controls for worktree-backed sessions via `create_project`/`create_session` (closed #[4044](https://github.com/github/copilot-cli/issues/4044)).
- **Editor-grade input inside the TUI** — Ctrl-G to launch `$EDITOR` for long freeform answers in `ask_user` ([#4050](https://github.com/github/copilot-cli/issues/4050)).

---

## 6. Developer Pain Points

- **MCP lifecycle fragility** — stdio MCP servers spawned for a session are **not terminated on `session.disconnect()`** ([#3440](https://github.com/github/copilot-cli/issues/3440)) and **double-spawn** on every `/new` / `/resume` ([#4049](https://github.com/github/copilot-cli/issues/4049)). Resource leak, port-conflict, and confusion for plugin authors.
- **Sandbox is too leaky / too restrictive in equal measure** — `web_fetch` breaks inside IPv4-only sandboxes ([#4041](https://github.com/github/copilot-cli/issues/4041)) while hook-driven commands ignore `permissionDecision: allow` ([#2643](https://github.com/github/copilot-cli/issues/2643)). Users cannot build predictable, least-privilege policies.
- **Session & agent state isn't persistent enough** — `/resume` is unusable outside git repos ([#4054](https://github.com/github/copilot-cli/issues/4054)), `/delegate` ignores branch parameters ([#2729](https://github.com/github/copilot-cli/issues/2729)), `/research` can't write its own report ([#3123](https://github.com/github/copilot-cli/issues/3123)), and custom agent selections drift back to `Default` mid-session ([#4047](https://github.com/github/copilot-cli/issues/4047)).
- **Configuration overrides are silently ignored** — the `explore` tool hardcodes `gpt-5.4-mini` even when a custom model/DeepSeek is configured ([#3954](https://github.com/github/copilot-cli/issues/3954)); enterprise-managed plugins are marked "enabled" but never downloaded to disk ([#4039](https://github.com/github/copilot-cli/issues/4039)).
- **Windows & macOS desktop parity gaps** — `.claude/settings.json` hooks fail-closed on Windows ([#4001](https://github.com/github/copilot-cli/issues/4001)), the sandbox docs/system-requirements are inconsistent across platforms ([#4046](https://github.com/github/copilot-cli/issues/4046)), and desktop notifications don't fire when the Copilot tab is the active tab but the terminal is backgrounded ([#4036](https://github.com/github/copilot-cli/issues/4036)).
- **Encoding & rendering regressions** — Windows-1252 files get re-saved as UTF-8 ([#3604](https://github.com/github/copilot-cli/issues/3604)), the model picker is obscured by the statusline ([#4043](https://github.com/github/copilot-cli/issues/4043)), holding Ctrl+V pastes the same image ~100× ([#4045](https://github.com/github/copilot-cli/issues/4045)), and iTerm2 corrupts the input field on resize ([#4051](https://github.com/github/copilot-cli/issues/4051)).
- **Reliability complaints on free tier** — non-English users are reporting qualitative regressions ("unstable, incoherent, no longer follows instructions"); signal worth watching: [#4055](https://github.com/github/copilot-cli/issues/4055).

---

*Digest generated from public GitHub activity on `github/copilot-cli`. For real-time updates, follow the [release feed](https://github.com/github/copilot-cli/releases) and [issue triage queue](https://github.com/github/copilot-cli/issues?q=is%3Aissue+is%3Aopen+label%3Atriage).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-08

## 1. Today's Highlights

Activity in the MoonshotAI/kimi-cli repository was notably quiet over the past 24 hours, with **no new releases and no merged or open pull requests**. Only **one issue** saw an update — a longstanding enhancement request for **Figma MCP support** — indicating a slow news day for the project. The community should not read too much into the lull; sustained momentum continues around MCP integrations and developer tooling refinements.

---

## 2. Releases

**No new releases in the last 24 hours.** This section is omitted in accordance with digest guidelines.

---

## 3. Hot Issues

Only one issue was updated in the last 24h, so the full list is presented below.

| # | Issue | Author | Reaction | Why It Matters |
|---|-------|--------|----------|----------------|
| [#1604](https://github.com/MoonshotAI/kimi-cli/issues/1604) | **Figma MCP Support** | [maoxian-1](https://github.com/maoxian-1) | 👍 2 · 💬 1 | Asks for native integration with the [Figma MCP catalog](https://www.figma.com/mcp-catalog/). The author notes that Figma MCP requires pre-registration, creating a friction point for design-aware coding workflows. With 2 thumbs-up and active discussion, it reflects community demand for richer design-to-code pipelines directly inside the CLI. |

> *Note: Repository activity in the last 24 hours was limited to a single issue update. For broader trending topics, please refer to prior digest editions.*

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours.** This section is omitted in accordance with digest guidelines.

---

## 5. Feature Request Trends

Based on the limited 24-hour sample, only one thematic signal is observable:

- **🧩 MCP Ecosystem Expansion** — Community interest continues to lean toward richer Model Context Protocol (MCP) integrations. Figma joins a growing list of third-party tool integrations developers are requesting, suggesting MCP extensibility is becoming a key value driver for the CLI.

---

## 6. Developer Pain Points

The 24-hour data window is too narrow to extract statistically meaningful pain-point patterns. However, the lone updated issue surfaces one recurring friction:

- **🔐 Pre-registration friction for MCP servers** — Developers report that services like Figma require manual pre-registration before MCP can connect, slowing down plug-and-play workflows. As more MCPs are added, on-demand authentication and zero-touch setup are likely to become recurring community asks.

---

*Digest generated from GitHub public activity. For deeper trend analysis, please consult the rolling 7-day or 30-day archives.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-08

## 1. Today's Highlights
OpenCode shipped **v1.17.15**, fixing Z.ai context-window error classification and a desktop regression that hid model details. The community's attention has shifted firmly toward V2 architecture work — durable AGENTS.md routing, plugin readiness, and session recovery — while several **v1.17.x regressions on Windows** (TUI startup crashes, CLI self-deletion, port zombies) are landing fresh on the tracker. Memory leaks remain the single largest sustained engineering effort, with the ongoing megathread now at 108 comments and 82 thumbs-up.

## 2. Releases
**[v1.17.15](https://github.com/anomalyco/opencode/releases/tag/v1.17.15)** (last 24h)
- **Core / Bugfixes**
  - Better classification of Z.ai context-window overflow errors so oversized requests surface the correct failure mode (credit: [@fengjikui](https://github.com/fengjikui)).
  - Graceful handling of unavailable config directories when reading config files.
- **Desktop / Improvements**
  - Restored model details tooltips in the model picker.

## 3. Hot Issues

| # | Issue | Why it matters | Community signal |
|---|---|---|---|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** | Central collection point for heap snapshots across the codebase; affects long-running sessions and is the project's largest open thread. | 108 comments, 👍82 |
| [#26063](https://github.com/anomalyco/opencode/issues/26063) | **Tool execution aborted/terminated with LM Studio** | Reproducible abort against local Qwen3.6-35b-A3B on v1.14.39 — relevant to anyone running opencode in local-only mode. | 29 comments |
| [#35772](https://github.com/anomalyco/opencode/issues/35772) | **Desktop v1.17.14 Provider.list() TypeError on startup** | Every startup crashes UI's model/provider list with `Cannot read properties of undefined (reading 'provider')`. Blocks Desktop usability. | 4 comments |
| [#34341](https://github.com/anomalyco/opencode/issues/34341) | **V2: route progressive AGENTS.md through durable Instructions** | Foundational design issue: replaces lossy synthetic-message injection with durable shell-side instructions that survive compaction. Drives V2 prompt semantics. | 7 comments |
| [#31217](https://github.com/anomalyco/opencode/issues/31217) | **TUI prompt input fail on Enter** | Pressing Enter swallows text instead of submitting — affects both CN/EN input; slash commands still work. High-frequency UX regression. | 5 comments |
| [#35327](https://github.com/anomalyco/opencode/issues/35327) | **`/exit` closes parent terminal on Windows** | `process.exit()` propagates `CTRL_CLOSE_EVENT`, killing PowerShell — a real data-loss surface for Windows users. | 4 comments, 👍1 |
| [#35839](https://github.com/anomalyco/opencode/issues/35839) | **Third OpenCode instance removes global CLI on Windows** | After launching multiple instances via `npm install -g opencode-ai`, the CLI binary disappears — high-severity regression reported today. | 3 comments |
| [#35828](https://github.com/anomalyco/opencode/issues/35828) | **Windows TUI fails in v1.17.15 when `.opencode` exists** | Fresh regression: `Config.loadInstanceState` fails on existing project dir. Tied to the v1.17.15 release day. | 2 comments, 👍1 |
| [#34712](https://github.com/anomalyco/opencode/issues/34712) | **Input tokens inconsistent with circle context** | Token counter grows incorrectly and doesn't decrease after compact — undermines trust in cost feedback. | 2 comments, 👍4 |
| [#32932](https://github.com/anomalyco/opencode/issues/32932) | **`opencode serve` zombie self-loopback on Windows** | Dead server leaves an ESTABLISHED `127.0.0.1` pair that locks the LISTENING socket; breaks `serve` re-launches. | 1 comment, 👍1 |

## 4. Key PR Progress

| # | PR | What it does |
|---|---|---|
| [#35817](https://github.com/anomalyco/opencode/pull/35817) | **fix(core): preserve provider metadata namespaces** *(closed)* | Normalises reasoning/tool metadata namespaces across start/delta/end events; preserves flattened session shape for back-compat. |
| [#34123](https://github.com/anomalyco/opencode/pull/34123) | **fix(tui): add plain-text paste** | New `prompt.paste_plain` command bound to `Ctrl+Alt+V`, reads clipboard text directly to dodge rich-paste encoding issues. *(Closes #34006)* |
| [#35838](https://github.com/anomalyco/opencode/pull/35838) | **fix(tool): decode webfetch bodies via charset** | Uses `iconv-lite` with the `charset` already parsed from `Content-Type`, so non-UTF-8 pages (windows-1251, GBK…) no longer mojibake. *(Closes #35752)* |
| [#35755](https://github.com/anomalyco/opencode/pull/35755) | **fix(core): wait for plugin readiness** | Adds a fixed-target readiness barrier before V2 Session agent resolution; fail-closed with typed `Session.AgentNotFoundError` if the agent never wakes. |
| [#35826](https://github.com/anomalyco/opencode/pull/35826) | **fix(cli): elect one managed daemon** | Channel-scoped process-lifetime `EffectFlock` lock so losing service candidates exit cleanly instead of briefly serving and stealing the registration. *(Prereq for #35646)* |
| [#35812](https://github.com/anomalyco/opencode/pull/35812) | **fix(core): preserve AI SDK provider metadata** | Keeps provider-native continuation data (thought signatures, provider item IDs) when lowering canonical messages into AI SDK prompts. |
| [#35820](https://github.com/anomalyco/opencode/pull/35820) | **fix(core): resume sessions after restart** *(closed)* | Durably records session execution outcomes so post-shutdown interrupted sessions are recovered on next startup via the existing `EffectFlock`. *(Addresses #35646)* |
| [#35777](https://github.com/anomalyco/opencode/pull/35777) | **fix(core): refresh stale `@latest` npm cache** | `Npm.add` no longer short-circuits when `node_modules/{name}` exists — fixes plugins stuck on outdated `@latest` installs. *(Closes #25293)* |
| [#35835](https://github.com/anomalyco/opencode/pull/35835) | **fix(ui): preserve code spans adjacent to tildes** | Markdown composes a workaround for backtick runs adjacent to literal `~` so inline code isn't swallowed. |
| [#35497](https://github.com/anomalyco/opencode/pull/35497) | **feat(core): make path-local instruction discovery durable** | Schema/event surface for V2 AGENTS.md discovery — subdirectory files stop being injected as disposable synthetic history. *(Stacked on #35583; companion issue #34341)* |

## 5. Feature Request Trends
- **V2 prompt surface hardening** — file attachments ([#34497](https://github.com/anomalyco/opencode/issues/34497)), `@`-tagged files/folders ([#34387](https://github.com/anomalyco/opencode/issues/34387)), and durable AGENTS.md ([#34341](https://github.com/anomalyco/opencode/issues/34341)) are being designed in parallel as the V2 composer/agent loop solidifies.
- **Provider resilience** — model fallback chains ([#35188](https://github.com/anomalyco/opencode/pull/35188)), `@latest` cache refresh ([#35777](https://github.com/anomalyco/opencode/pull/35777)), and protocol-change metadata reset ([#35827](https://github.com/anomalyco/opencode/issues/35827)) point to community demand for *survivable* provider integrations.
- **Localisation / i18n** — complete pt-BR parity ([#35836](https://github.com/anomalyco/opencode/pull/35836), [#35831](https://github.com/anomalyco/opencode/issues/35831)) signals non-English contributors want first-class locale coverage.
- **Permission model refinement** — orthogonal permission profiles decoupled from agent identity ([#35830](https://github.com/anomalyco/opencode/issues/35830)) and clearer ruleset inheritance.
- **Ecosystem plugin discoverability** — adding the Copilot Quota plugin to ecosystem docs ([#35768](https://github.com/anomalyco/opencode/issues/35768)) shows demand for a curated plugin registry.
- **Port resource tools to V2** — held pending the V2 tool-plugin API settlement ([#34546](https://github.com/anomalyco/opencode/issues/34546)).

## 6. Developer Pain Points
- **Cross-platform terminal interaction** is becoming the dominant reliability class — `/exit` killing the parent shell ([#35327](https://github.com/anomalyco/opencode/issues/35327)), self-deletion of the global CLI on third instance ([#35839](https://github.com/anomalyco/opencode/issues/35839)), `serve` leaving zombie self-loopback sockets ([#32932](https://github.com/anomalyco/opencode/issues/32932)), and `.opencode` directory races on startup ([#35828](https://github.com/anomalyco/opencode/issues/35828)). Windows is over-represented in this category.
- **TUI input semantics** — Enter swallowing text without submission ([#31217](https://github.com/anomalyco/opencode/issues/31217)), blank code blocks on CentOS 7 ([#28656](https://github.com/anomalyco/opencode/issues/28656)), and rich-clipboard corruption fill a clear gap that [#34123](https://github.com/anomalyco/opencode/pull/34123) and [#35835](https://github.com/anomalyco/opencode/pull/35835) are addressing.
- **Memory & long-session stability** — the megathread ([#20695](https://github.com/anomalyco/opencode/issues/20695)) is unclosed and high-priority; token-counter drift after compaction ([#34712](https://github.com/anomalyco/opencode/issues/34712)) compounds distrust.
- **Local provider parity** — LM Studio/GGUF users keep reporting tool-loop aborts ([#26063](https://github.com/anomalyco/opencode/issues/26063)), suggesting opencode's provider abstraction still leaks local-only model behaviours.
- **Crash transparency on Desktop** — opaque `TypeError: Object has been destroyed` ([#35825](https://github.com/anomalyco/opencode/issues/35825)) and same-name-file path caching ([#35834](https://github.com/anomalyco/opencode/issues/35834)) point to a need for better diagnostics and a stale-cache invalidation strategy in the desktop shell.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-08

## 1. Today's Highlights

The past 24 hours show a heavy triage pass — many incoming issues landed in `closed` with `untriaged`/`no-action`/`last-read` labels, while the **xl0-led TUI/extension workstream** continued merging PRs around markdown streaming stability, extension API surface, and session events. A handful of substantive **open bugs** remain around context-window clamping, scoped-model selection, and `modelOverrides` not reaching extension-registered providers.

## 2. Releases

_No new releases in the last 24h._

## 3. Hot Issues

| # | Issue | Status | Why it matters |
|---|-------|--------|----------------|
| [#3896](https://github.com/earendil-works/pi/issues/3896) | TUI cursor stays active when terminal loses focus | CLOSED | **👍 7** — highest community score today; tiny UX but a clear behavioral gap vs. Codex CLI. |
| [#6206](https://github.com/earendil-works/pi/issues/6206) | Clamping to context window prevents distinct `maxTokens` limits | OPEN | Unintended consequence of the fix for #5595; users can no longer configure an artificial cap. |
| [#6210](https://github.com/earendil-works/pi/issues/6210) | `/scoped-models` cannot select ids containing brackets | OPEN | Real-world model IDs like `custom/bracketed-model[1m]` silently fail to resolve. |
| [#6378](https://github.com/earendil-works/pi/issues/6378) | Context-length 400 error has no built-in fix path | OPEN | Points to the broader missing UX for hitting context caps inside Pi itself. |
| [#6367](https://github.com/earendil-works/pi/issues/6367) | `modelOverrides` not applied to extension-registered providers | OPEN | Breaks the documented `thinkingLevelMap` contract for any provider added via `pi.registerProvider`. |
| [#6326](https://github.com/earendil-works/pi/issues/6326) | `custom_message` entries bypass compaction budgeting | OPEN | Compaction accounting is being skipped for a documented LLM-context type. |
| [#6167](https://github.com/earendil-works/pi/issues/6167) | `transformMessages` thinking-block normalization clashes with reasoning-content compat flag | OPEN | Model-switching can introduce hidden reasoning-content issues. |
| [#6395](https://github.com/earendil-works/pi/issues/6395) | README `/reload` description inconsistent with source | OPEN | Docs drift; mentions themes, source actually says "keybindings, extensions, skills, prompts". |
| [#6406](https://github.com/earendil-works/pi/issues/6406) | Read-only `~/.pi/agent` breaks every credential read | CLOSED (untriaged) | Locks are taken even for reads; users on immutable configs lose auth. |
| [#6399](https://github.com/earendil-works/pi/issues/6399) | `Kimi-K2.7-Code` via DeepInfra returns corrupted output | CLOSED (untriaged) | Provider/model-specific failure that direct DeepInfra calls don't reproduce. |

## 4. Key PR Progress

All closed; representative of the **xl0-driven UI/API hardening** push:

| PR | Title | What it does |
|----|-------|--------------|
| [#6169](https://github.com/earendil-works/pi/pull/6169) | Disable padding for assistant messages | Tighter message rendering (#6168). |
| [#6026](https://github.com/earendil-works/pi/pull/6026) | Stabilize working status row | TUI flicker fix (ref #5825). |
| [#5913](https://github.com/earendil-works/pi/pull/5913) | Stable markdown working | Improved markdown rendering during streaming. |
| [#5846](https://github.com/earendil-works/pi/pull/5846) | Stabilize streaming code fence rendering | Closes #5825 — code fences during streaming. |
| [#6175](https://github.com/earendil-works/pi/pull/6175) | Emit session name changes to extensions | Lets extensions react when sessions are renamed (#6174). |
| [#5085](https://github.com/earendil-works/pi/pull/5085) | Expose full tool definitions from `getAllTools` | Bold move: hands extensions the entire tool schema, enabling manual `/tool`-style UIs. |
| [#6063](https://github.com/earendil-works/pi/pull/6063) | Extension stats | Per-extension instrumentation; also fixes OSC garbage after benchmark timing exits. |
| [#5708](https://github.com/earendil-works/pi/pull/5708) | Wrap question extension text instead of truncating | Better extension UX in prompts (#5707). |
| [#5306](https://github.com/earendil-works/pi/pull/5306) | Add system-prompt options to extension commands | Extension authors can now control system prompts (#5305). |
| [#6405](https://github.com/earendil-works/pi/pull/6405) | Document extension install locations | Pragmatic docs fix: lists `npm`/`git` install paths so the LLM can actually find them (#6400). |

## 5. Feature Request Trends

- **Richer extension API surface.** Multiple converged asks: `getAllTools` (#5085), `getToolDefinition` (#4954), `edit-diff` (#5756), `CLI argument parser` (#5202), `convertToPng` (#5167), `image resize utils` (#4775), `exportConfigDirname` (#5869), system-prompt customization (#5306), session-name change events (#6175). Direction: **Pi-as-sdk**, not just Pi-as-CLI.
- **First-class provider support.** Eden AI requested as a turnkey provider mirroring OpenRouter (#6403); Azure Responses / `openai-responses` cache behavior (#6240, #6409) is another provider parity hot spot.
- **Session/JSONL extensibility.** Demand for opaque metadata in the v3 JSONL session header (#6402), plus hooks to relocate or remap sessions when repos move (#6394, #6407).
- **Operational polish.** Default to `bun` when Pi is running under Bun (#6396); set a real `User-Agent` on LLM calls (#6392); allow `/share` to be disabled (#6393); support a true "no-session" with `open -r` (#6401); enable inline settings factories in `main()` (#6398).

## 6. Developer Pain Points

- **Context management.** Limits are leaky — `max_tokens` is clamped to the reported context window (#6206), `custom_message` bypasses compaction budgeting (#6326), and overflow yields a hard `400` with no in-tool recovery path (#6378).
- **Extensions: install, find, document.** Docs and runtime disagree on where extensions actually land (#6400, #6405), and `modelOverrides`/`thinkingLevelMap` don't propagate to extension providers (#6367).
- **Provider/model fragility.** Kimi-K2.7 via DeepInfra corrupts output only inside Pi (#6399); Azure Responses reasoning replay still 400s when `store:false` (#6409); `openai-responses` misses cache on the first request (#6240); `/scoped-models` chokes on bracket-style ids (#6210).
- **Shell & filesystem ergonomics.** Multi-line shell aliases break the documented `shellCommandPrefix` recipe (#6404); read-only `~/.pi/agent` breaks auth reads (#6406); lost repo location orphans sessions (#6394, #6407).
- **TUI polish.** Working/status row flicker, streaming code-fence instability (#5825 family), and the terminal losing focus leaves an "alive" cursor (#3896).
- **Trust signals.** Pi already builds a `getPiUserAgent()` but doesn't send it on LLM calls (#6392); auto-retry emits a terminal `agent_end` mid-turn, flashing a "done" state in downstream UIs (#6410).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-08

## 1. Today's Highlights

Qwen Code shipped **v0.19.7** plus a nightly and preview cut, with the CLI gaining a **Fleet View for multi-session management** and the SDKs (Python + TypeScript) absorbing a large batch of **transport, query, and control-request options**. On the stability side, the community surfaced a meaningful **memory-system reliability thread** (stale `MEMORY.md` index + compaction loss) and a long-running RFC for **multiple workspaces per `qwen serve` daemon** that is now driving follow-up UX work.

## 2. Releases

- **v0.19.7** — Strengthens the PR triage gate (batch detection, problem-existence check, red-flag patterns) and adds a routing change in code review. ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.7))
- **v0.19.6-preview.0** — Documentation: adds **WeCom** to the channels overview. ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6-preview.0))
- **v0.19.7-nightly.20260708.394c1a289** — Nightly cut of the same WeCom docs change. ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.7-nightly.20260708.394c1a289))

## 3. Hot Issues

1. **#6378 — RFC: Multiple workspaces in one `qwen serve` daemon** (P2, needs-discussion) — Highest-engagement thread of the day (19 comments). The author argues the current *1 daemon = 1 workspace × N sessions* model is an arbitrary constraint that blocks legitimate workflows (multi-repo agents, dev/test isolation). Drives the Fleet View PR. ([issue](https://github.com/QwenLM/qwen-code/issues/6378))
2. **#6384 — `hard limit: 0` when env-configured model reserves its full default context for output** (P2, bug) — Qwen Code fails pre-flight with `Context is too large to send safely after automatic compression… hard limit: 0` because the effective context window collapses to zero under certain model configs. Breaks `NOOP` compression; users must start a new session. ([issue](https://github.com/QwenLM/qwen-code/issues/6384))
3. **#6414 — VS Code: "Failed to connect to Qwen agent"** (bug, needs-triage) — Reported 2026-07-07 with screenshot; a fresh connection-failure regression in the VS Code extension. Needs reproductions and environment info. ([issue](https://github.com/QwenLM/qwen-code/issues/6414))
4. **#6487 — Memory index stale after `/remember`; memory lost on compaction** (P2, bug) — Two coupled failures: (1) `MEMORY.md` is written to disk but the system instruction shown to the model isn't refreshed, and (2) managed memory content is silently dropped during compaction in long sessions. This is the single most important reliability gap of the day. ([issue](https://github.com/QwenLM/qwen-code/issues/6487))
5. **#6496 — Show permission/approval mode badge in footer for all modes including default** (P2, `welcome-pr`) — Default ("Ask permissions") mode currently shows nothing in the footer, creating visual ambiguity vs. PLAN/AUTO_EDIT/AUTO/YOLO indicators. Tracked as a first-PR-friendly issue. ([issue](https://github.com/QwenLM/qwen-code/issues/6496))
6. **#6401 — `ProxyAgent` does not honor `NO_PROXY`** (CLOSED, P2, bug) — `setGlobalDispatcher(new ProxyAgent(proxyUrl))` unconditionally proxies all traffic, ignoring `no_proxy` exclusions. Closed after triage progress was reported; flagged as `autofix/in-progress`. ([issue](https://github.com/QwenLM/qwen-code/issues/6401))

## 4. Key PR Progress

1. **#6451 — feat(cli): Fleet View for multi-session management** — Fullscreen TUI (trigger `← ←` within 800 ms) for listing/routing multiple sessions, status icons (●), and quick-switch. Directly responds to the multi-workspace RFC. ([PR](https://github.com/QwenLM/qwen-code/pull/6451))
2. **#6491 — feat(sdk): Expose transport and query options in both SDKs** — Consolidates 11 additive `QueryOptions` fields (`fork_session`, etc.) across Python and TypeScript; backward compatible. ([PR](https://github.com/QwenLM/qwen-code/pull/6491))
3. **#6492 — feat(sdk): Control request methods for effort, models, usage, context** — Adds `set_effort / setEffort`, model switching, usage, and context control to both SDKs plus matching CLI handlers. ([PR](https://github.com/QwenLM/qwen-code/pull/6492))
4. **#6497 — fix(memory): Refresh instructions after `/remember`** — Uses the existing `submit_prompt.onComplete` hook to reload hierarchical memory and refresh the system instruction; closes the half of #6487 caused by stale instructions. ([PR](https://github.com/QwenLM/qwen-code/pull/6497))
5. **#6499 — fix(cli): Unblock `/clear` after task cancellation (and surface reason)** — Fixes #5949: `/new`/`/clear` silently no-op'd after cancel due to an over-strict `hasBlockingBackgroundWork` gate and swallowed `cancelled` tasks. ([PR](https://github.com/QwenLM/qwen-code/pull/6499))
6. **#6498 — feat(cli): Show permission mode badge in footer for DEFAULT mode** — Implements #6496; always shows the current approval mode in the footer with consistent styling. ([PR](https://github.com/QwenLM/qwen-code/pull/6498))
7. **#6377 — fix(shell): Block kill commands using `pgrep` command substitution** — Closes #6246: `kill -9 $(pgrep node)` previously bypassed the self-kill guard (which only matched `killall`/`pkill`-style patterns) and could kill Qwen Code itself. ([PR](https://github.com/QwenLM/qwen-code/pull/6377))
8. **#6466 — fix(core): Detect non-SSE HTTP 200 responses in OpenAI streaming pipeline** — Throws `NonSSEResponseError` with diagnostic metadata when a gateway returns `text/html`/non-SSE under HTTP 200, instead of confusing stream failures downstream. ([PR](https://github.com/QwenLM/qwen-code/pull/6466))
9. **#6456 — feat(core): `working_dir` for the Agent tool (pin subagents to an existing worktree)** — Opt-in parameter that pins a sub-agent's entire FS/shell context to a caller-owned git worktree, preventing drift between subagents and the main worktree. ([PR](https://github.com/QwenLM/qwen-code/pull/6456))
10. **#6446 — fix(channel): Relay ACP permission requests** — Routes ACP permission prompts through channel chat (approve once / approve always / deny) instead of auto-approving, with proper handling for failed delivery, missing routes, and session cancellation. ([PR](https://github.com/QwenLM/qwen-code/pull/6446))

## 5. Feature Request Trends

- **Multi-workspace / multi-session orchestration** — The dominant theme. RFC #6378 (19 comments), Fleet View #6451, daemon session accounting #6493, and subagent worktree pinning #6456 all point to users wanting Qwen Code to natively manage several concurrent work contexts rather than one session at a time.
- **SDK parity and control surface** — Two stacked PRs (#6491, #6492) push transport/query/control options into both Python and TypeScript SDKs, signaling that the SDK is being positioned as a first-class programmatic surface, not just a CLI wrapper.
- **Skill creation and memory authoring** — `/learn` (PR #6440) plus the cluster of memory PRs (#6497, #6434, #6431) suggest a clear roadmap toward user-curated, persistent agent capabilities.
- **Channel extensibility** — Webhook-triggered channel tasks (#6495) and WeCom docs in v0.19.7 preview show Qwen Code is being integrated into enterprise chat surfaces.
- **Persistent UI affordances** — Footer permission badge (#6496/#6498), refined markdown tables (#6500), and ACP permission relay (#6446) all reflect requests for clearer, less-ambiguous state visibility in the CLI/TUI.

## 6. Developer Pain Points

- **Memory system trust erosion** — #6487 is the clearest signal: developers can't rely on `/remember` or long-session compaction to actually preserve what was learned. The fix in #6497 only addresses the first half; the compaction-loss path remains open.
- **Session/command state machine is too strict** — #6499 (`/clear` swallowed after cancel) and #6384 (`hard limit: 0` blocking all work) both reflect cases where the CLI refuses to make forward progress instead of degrading gracefully.
- **Editor integration flakiness** — #6414 is the second VS Code connection bug in recent memory; the extension integration needs more resilient reconnection logic and clearer error reporting.
- **Proxy environment correctness** — #6401 (`ProxyAgent` ignoring `NO_PROXY`) is a recurring class of bug in JS fetch stacks; users running Qwen Code behind corporate proxies need correct `NO_PROXY` semantics.
- **Safety/guardrail gaps** — #6377 (`pgrep`-based self-kill bypass) shows that command-injection patterns through `$()` are still under-covered by the shell sandbox; expect more class-of-bug issues along this line.
- **Rendering quirks under load** — #6421 (streaming-table scroll lock, header flash, stall-then-dump) and #6500 (markdown table interactions) point to the TUI still struggling with wide, fast-updating content.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-08

> **Note on naming:** The project has officially rebranded to **CodeWhale**. The legacy `deepseek-tui` npm package is deprecated and receives no further releases. All links below use the canonical `Hmbown/CodeWhale` repo. See [v0.8.67 release notes](https://github.com/Hmbown/CodeWhale) and `docs/REBRAND.md` for migration details.

---

## 🔥 Today's Highlights

1. **v0.8.68 (stopship lane) is in final wave review.** The 0.8.68 release train PR [#4099](https://github.com/Hmbown/CodeWhale/pull/4099) bundles six commits covering the three H1–H3 release blockers (completion polling, cancel interrupt), TUI stability, fleet/routing cleanup, and security hardening. Maintainer [Hmbown] is also sequencing a closed v0.8.68 dogfood canonical packet at [#4092](https://github.com/Hmbown/CodeWhale/issues/4092) that replaces the July 7 triage packet.

2. **Sub-agent observability gap closed.** The reported "sub-agent detail panel shows a blank screen during active work" ([#4094](https://github.com/Hmbown/CodeWhale/issues/4094), lane-stopship) is fixed in [#4182](https://github.com/Hmbown/CodeWhale/pull/4182), which now streams a bounded live activity trail of tool calls, handoff summaries, and artifact handles into the panel.

3. **Five-month TUI freeze saga accumulating fixes.** The persistent "Turn stalled — no completion signal received" in `yolo` mode ([#2487](https://github.com/Hmbown/CodeWhale/issues/2487), 20 comments) and the Windows crossterm-poll freeze ([#1812](https://github.com/Hmbown/CodeWhale/issues/1812)) are both CLOSED ahead of v0.8.68, alongside a Ctrl+C byte normalization fix ([#4180](https://github.com/Hmbown/CodeWhale/pull/4180)) and the broader five-hot-path TUI perf pass ([#3902](https://github.com/Hmbown/CodeWhale/pull/3902)).

---

## 📦 Releases

- **v0.8.67** — Maintenance release. Primary content is the **CodeWhale rebrand announcement**: `CodeWhale` is now the canonical project, command, npm package, and release-asset name. The legacy `deepseek-tui` npm package is deprecated and receives no further releases. Users migrating from v0.8.x legacy `deepseek` / `deepseek-tui` names should follow `docs/REBRAND.md`. No other functional changes are surfaced.

---

## 🐛 Hot Issues (10 noteworthy)

| # | Title | Why it matters | Reaction |
|---|-------|----------------|----------|
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | `yolo` mode freezes, "Turn stalled — no completion signal received" | Most-commented issue (20). Five-month reliability pain; recursive `continue` cannot resume. Closed pre-v0.8.68. | 👍 1 |
| [#3144](https://github.com/Hmbown/CodeWhale/issues/3144) | v0.8.64: Add natural-language auto-review policy + pre-push review gate | Frames a Cursor-style middle ground between manual approvals and unchecked autonomy. Influences v0.8.69 security/reliability review surface. | 👍 0, 14 comments |
| [#4092](https://github.com/Hmbown/CodeWhale/issues/4092) | **v0.8.68 execution board — canonical agent packet** | The single entry point for any agent working v0.8.68. Lanes are now queryable via `lane-*` labels (replaces the deleted July 7 packet). | 👍 0, 11 comments |
| [#3063](https://github.com/Hmbown/CodeWhale/issues/3063) | v0.8.59 release tracker (mouse-report leak, runtime safety) | Models the maintainer-template approach to release triage and is still informing v0.8.68 release choreography. | 👍 0, 11 comments |
| [#1812](https://github.com/Hmbown/CodeWhale/issues/1812) | TUI freeze on Windows 11 via crossterm poll | High-impact Windows-specific reliability bug with deep-dive logs/thread-state analysis. Closed ahead of v0.8.68. | 👍 0, 11 comments |
| [#2300](https://github.com/Hmbown/CodeWhale/issues/2300) | Multi-model compatibility, provider docs, Fleet auto-loadout | Acceptance fixture for v0.8.65 routing; directly motivates the Fleet rework in v0.8.69. | 👍 0, 8 comments |
| [#2791](https://github.com/Hmbown/CodeWhale/issues/2791) | v0.9.0: Refactor command dispatch → modular strategy pattern | Architectural cleanup that decouples v0.9.0's WhaleFlow and Hotbar surfaces from the monolithic command tree. | 👍 0, 7 comments |
| [#2261](https://github.com/Hmbown/CodeWhale/issues/2261) | TUI 对话中进程崩溃,输入内容泄漏到 PowerShell 终端 | Windows/Terminal-specific focus-loss bug exposing a security/privacy leak (input escaped TUI and ran as PowerShell cmdlets). | 👍 0, 6 comments |
| [#2061](https://github.com/Hmbown/CodeWhale/issues/2061) | **Hotbar: MMO-style 8-slot quick action bar** (umbrella) | Anchors v0.8.69's keyboard-first UX push: hidden by default, opt-in via [#2071](https://github.com/Hmbown/CodeWhale/issues/2071) setup wizard, documented in [#2072](https://github.com/Hmbown/CodeWhale/issues/2072). | 👍 0, 6 comments |
| [#4094](https://github.com/Hmbown/CodeWhale/issues/4094) | **Sub-agent detail panel empty + can freeze TUI during active work** | Active lane-stopship blocker for v0.8.68; fundamental UX gap for any user running background workers. | 👍 0, 4 comments |

---

## 🔧 Key PR Progress (10)

1. **[#4099 — 0.8.68 release train](https://github.com/Hmbown/CodeWhale/pull/4099)** *(open)* — Five logical commits + reconcile merge. Closes H1–H3 release blockers (completion polling fails closed; cancel actually interrupts), TUI stability, modes/permissions, security hardening. The single PR to watch for v0.8.68.
2. **[#4181 — Fleet setup role/profile roster editor](https://github.com/Hmbown/CodeWhale/pull/4181)** *(open)* — Fixes [#4093](https://github.com/Hmbown/CodeWhale/issues/4093). Replaces provider-scoped model picker with role/profile roster editing; exposes routes from all configured providers; ratifies draft preview.
3. **[#4182 — Populate sub-agent detail panel](https://github.com/Hmbown/CodeWhale/pull/4182)** *(closed)* — Fixes [#4094](https://github.com/Hmbown/CodeWhale/issues/4094). Bounded live activity trail with tool call name/status/compact result state, handoff summaries, artifact handles.
4. **[#4180 — Normalize raw Ctrl+C byte for PTY quit-arm](https://github.com/Hmbown/CodeWhale/pull/4180)** *(closed)* — Fixes [#4090](https://github.com/Hmbown/CodeWhale/issues/4090). Normalizes raw `0x03` to canonical Ctrl+C before disposition; preserves cancel/copy semantics; regression tests on the real key → disposition path.
5. **[#3902 — perf(tui): fix the five render/input hot paths](https://github.com/Hmbown/CodeWhale/pull/3902)** *(open)* — Closes [#3896](https://github.com/Hmbown/CodeWhale/issues/3896)–[#3900](https://github.com/Hmbown/CodeWhale/issues/3900) plus four adversarial-review regressions; merges v0.8.67 main.
6. **[#4163 — v0.8.68 agent execution lanes + milestone sync](https://github.com/Hmbown/CodeWhale/pull/4163)** *(closed)* — Wave-based agent workflow files, `docs/AGENT_WORKFLOWS_0868.md` playbook, and `.github/workflows/v0868-milestone-sync.yml`.
7. **[#4183 — Architecture phase links to v0.8.68 playbook](https://github.com/Hmbown/CodeWhale/pull/4183)** *(closed)* — Cross-links #4175–#4179 phase issues + Fleet/Workflow/Lane/Runtime vocabulary table into the playbook.
8. **[#3969 — Per-sub-agent provider routing](https://github.com/Hmbown/CodeWhale/pull/3969)** *(open, held for v0.8.68)* — Explicit per-sub-agent provider/model choice, held until the fleet/routing redesign lands; nothing in the approach was rejected.
9. **[#3818 — Expand active tool run summaries](https://github.com/Hmbown/CodeWhale/pull/3818)** *(closed)* — Includes in-flight entries when resolving dense tool-run expansion; regression test for the active-before-flush toggle.
10. **[#4189 — CI: only auto-label agent-ready on issue open](https://github.com/Hmbown/CodeWhale/pull/4189)** *(closed)* — Stops the `v0.8.68 milestone hygiene` action from re-adding `agent-ready` on every label event when a triage pass deliberately removed it.

---

## 📈 Feature Request Trends

1. **Fleet/routing overhaul (v0.8.69)** — The dominant theme. [#3932](https://github.com/Hmbown/CodeWhale/issues/3932)–[#3935](https://github.com/Hmbown/CodeWhale/issues/3935) redesign Fleet around role/profile rosters ([#4181](https://github.com/Hmbown/CodeWhale/pull/4181)) instead of provider-scoped pickers; retired `model_class_hint` and `route_tier` are removed in [#4084](https://github.com/Hmbown/CodeWhale/pull/4084). Per-sub-agent routing ([#3969](https://github.com/Hmbown/CodeWhale/pull/3969)) is queued behind this.

2. **WhaleFlow branch/leaf workflow mode (v0.9.0 EPIC, [#2981](https://github.com/Hmbown/CodeWhale/issues/2981))** — Re-establishes the deleted v0.9.0 primary tracker. `crates/whaleflow` (~5.2k lines: typed IR + Starlark authoring) is real. Active children: async executor ([#2973](https://github.com/Hmbown/CodeWhale/issues/2973)), TUI monitoring surfaces ([#2979](https://github.com/Hmbown/CodeWhale/issues/2979)). A pull-style `/workflows` panel is the UX contract.

3. **Cache-maximalism (V4 cached-input economics)** — [#528](https://github.com/Hmbown/CodeWhale/issues/528) (cache-maximal context mode: re-read active files), [#2953](https://github.com/Hmbown/CodeWhale/issues/2953) (slim default prompt toward Codex parity), [#2956](https://github.com/Hmbown/CodeWhale/issues/2956) (reduce repeated transcript payload), [#2957](https://github.com/Hmbown/CodeWhale/issues/2957) (output discipline), and [#2954](https://github.com/Hmbown/CodeWhale/issues/2954) (shell-only benchmark parity) form a coherent benchmark-vs-Codex cost-reduction track.

4. **Sub-agent observability + scoping** — [#4094](https://github.com/Hmbown/CodeWhale/issues/4094) panel fix is shipping in [#4182](https://github.com/Hmbown/CodeWhale/pull/4182); tooling-facing sub-agent tool scoping ([#4042](https://github.com/Hmbown/CodeWhale/issues/4042), [#4096](https://github.com/Hmbown/CodeWhale/pull/4096)) and parent→scout routing ([#2024](https://github.com/Hmbown/CodeWhale/issues/2024)) define the next iteration. Anti-polling guidance for sub-agent waiting ([#4098](https://github.com/Hmbown/CodeWhale/pull/4098)) is also queued.

5. **Keyboard-first Hotbar (v0.8.68 opt-in)** — Hidden by default ([#3807](https://github.com/Hmbown/CodeWhale/issues/3807)); opt-in setup wizard with curated recommendations ([#2071](https://github.com/Hmbown/CodeWhale/issues/2071)); docs + screenshots ([#2072](https://github.com/Hmbown/CodeWhale/issues/2072)).

6. **Hook module split + Codex parity** — Hooks config vs. executor will be separated ([#4087](https://github.com/Hmbown/CodeWhale/pull/4087)). The startup maintenance cleanup deferral ([#3761](https://github.com/Hmbown/CodeWhale/pull/3761), fixes [#3757](https://github.com/Hmbown/CodeWhale/issues/3757)) reduces interactive-path latency.

7. **Remote workbench + cross-region onboarding** — A 15-minute remote workbench on DigitalOcean + Telegram bridge is shipped in v0.8.56 ([#2964](https://github.com/Hmbown/CodeWhale/issues/2964)).

---

## 😤 Developer Pain Points (recurring)

- **TUI freezes / unrecoverable hangs on Windows.** Crossterm poll ([#1812](https://github.com/Hmbown/CodeWhale/issues/1812)), PowerShell focus loss where input escapes the TUI and runs as cmdlets ([#2261](https://github.com/Hmbown/CodeWhale/issues/2261)), IME composition deadlock under Chinese IME ([#1835](https://github.com/Hmbown/CodeWhale/issues/1835)), and a Linux/WSL `pipe_read` deadlock when the API stalls ([#1472](https://github.com/Hmbown/CodeWhale/issues/1472)) all share the same shape: process stays "alive" but the UI is bricked; `Ctrl+C` does not work. The Ctrl+C byte-normalization fix ([#4180](https://github.com/Hmbown/CodeWhale/pull/4180)) and the five-hot-path perf pass ([#3902](https://github.com/Hmbown/CodeWhale/pull/3902)) target exactly this class.

- **Stream/Turn completion signal failures.** [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) (`Turn stalled — no completion signal received`), [#1060](https://github.com/Hmbown/CodeWhale/issues/1060) (`Stream stalled: no data received for

</details>