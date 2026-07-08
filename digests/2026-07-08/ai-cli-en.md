# AI CLI Tools Community Digest 2026-07-08

> Generated: 2026-07-08 05:43 UTC | Tools covered: 9

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

# AI CLI Tools — Cross-Tool Community Digest Comparison
**Window: 2026-07-07 → 2026-07-08**

---

## 1. Ecosystem Overview

The AI coding-CLI space has clearly moved past the "single-binary REPL" stage and into **platform/SDK territory**, with every major tool now investing in plugin systems, sub-agent orchestration, and embeddable SDK surfaces. Mature tools (Claude Code, Codex, Qwen Code) are shipping **architectural refactors** — extension-owned turn items, multi-session Fleet views, Python/TypeScript control requests — while smaller tools (Pi, OpenCode, DeepSeek/CodeWhale) are racing to add the TUI parity features that have become table stakes: status lines, hook validation, and reasoning-content plumbing. A recurring pain signal across all nine tools is **sub-agent lifecycle management** — termination, resumability, token attribution, and isolation remain under-specified relative to how heavily the feature is being adopted. Windows continues to be the most divergent target platform, with bugs concentrating in MCP stdio, IME/CJK input, TTY raw-mode, and networked filesystem race conditions.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues | Key PRs | Maintainer Signal |
|---|---|---|---|---|
| **Claude Code** | 2 (v2.1.203, v2.1.204) | 10 + 7 honorable mentions | 6 | High — closes top issue of cycle (#73125) |
| **OpenAI Codex** | 2 (rust-v0.143.0 + alpha.39) | 10 + 3 surfaced | 10 + 4 honorable mentions | High — coordinated architectural PR stack |
| **Gemini CLI** | 0 (nightly failed) | 10 (of 49 active) | 10 + 1 honorable mention | High — Caretaker agent infra landing |
| **GitHub Copilot CLI** | 2 (v1.0.69, v1.0.69-3) | 10 | 2 | Medium — quieter merge window |
| **Kimi Code CLI** | 0 | 1 | 0 | **Very low** — only one issue updated |
| **OpenCode** | 1 (v1.17.15) | 10 | 10 | Medium-high — long-running Windows stability bugs |
| **Pi** | 0 | 10 | 10 (all closed) | High triage velocity — ~17 stale issues closed overnight |
| **Qwen Code** | 3 (v0.19.7, preview, nightly) | 10 | 10 + 5 honorable mentions | Very high — preview + nightly channels maturing |
| **DeepSeek TUI / CodeWhale** | 1 (v0.8.67) | 11 (mostly closed stopship) | 10 | High — v0.8.68 stopship in progress |

---

## 3. Shared Feature Directions

| Direction | Tools (specific signal) |
|---|---|
| **Configurable / shell-script TUI status line** | Claude Code (built-in), Codex (#17827, 88 👍), Pi (renderer work), Qwen (#6514 status-line fix) |
| **Sub-agent / multi-session orchestration** | Claude Code (#50246 queue, #75548 desktop archive), Qwen (#6451 Fleet View, #6456 `working_dir` pinning), Gemini (subagent recovery #22323), DeepSeek (#4137 Fleet profiles, #4181 roster editor), OpenCode (#35850 background completion resume) |
| **MCP ecosystem hardening** | Codex (#31498 sandbox corruption, #31499 183-process leak), Copilot (#3440/#4038/#4049 lifecycle), Claude Code (#75537 hook types), Kimi (#1604 Figma MCP), OpenCode (#35860 skill/environment schemas) |
| **Reasoning-content / thinking-block plumbing** | Pi (#6167, #6409 Azure store-mode), Claude Code (#74273 Sonnet 5 compaction plateau), DeepSeek (#4195 per-role reasoning effort) |
| **BYOK / multi-provider routing** | Copilot (#3954, #4037), Pi (#6367 `modelOverrides`, #6403 Eden AI), OpenCode (#25912 Vertex, #35855 `/v1/models` autodiscovery, #35859 disable CopilotAuth) |
| **Windows-specific reliability** | Codex (5+ open bugs), OpenCode (#35847 42 GB leak), Copilot (#3604 code-page re-encoding), Claude Code (#73487), DeepSeek (#2261 PowerShell input leak, #1835 IME deadlock) |
| **Localization parity** | Gemini (#28309 CJK, #28224 emoji), OpenCode (PT-BR #35836, Korean #34741), Codex (#31513 Simplified Chinese) |
| **Hook/permission system documentation** | Claude Code (#75534 IDE rendering, #75537 validator), Copilot (#2643 silent rewrite), Qwen (#6496 default-mode badge) |
| **Memory as a strategic surface** | Gemini (Auto Memory cluster #26516/#26522/#26523/#26525), OpenCode (#35853 Vestige MCP example) |
| **Rebrand / compliance handling** | DeepSeek → CodeWhale (v0.8.67 canonical), OpenCode (#35865 xAI → SpaceXAI) |

---

## 4. Differentiation Analysis

**Claude Code** — Polished enterprise UX and the strongest background-agent story (despite that story being the source of its biggest current bugs). Heavy emphasis on Fable 5 cost/routing transparency and IDE hook ergonomics; deeply integrated with VS Code extension surface.

**OpenAI Codex** — The most aggressive **plugin/extension platform** of the cohort (npm marketplace, extension-owned `TurnItem` architecture, hosted code-mode). Architectural PRs (#31526 tool allowlists, #31460 unified `ApprovalReviewer`, #31525 extension items) signal a long-term bet on multi-tenant hosted deployments.

**Gemini CLI** — Differentiates through **Auto Memory** as a product surface and the only tool explicitly investing in **AST-aware tooling** (#22745, #22746). Caretaker triage agent (#28303-#28307) is a unique dogfood approach to issue-triage automation.

**GitHub Copilot CLI** — Sandbox-policy model (renamed from "OS-level sandbox" in v1.0.69) and GitHub-native identity are the moats; BYOK/ACP server-mode (#4037) is the most active user-asks. Lowest PR velocity of the major tools.

**Kimi Code CLI** — Lowest activity by an order of magnitude; positioning appears to be **MCP-driven design/tool interop** (Figma) rather than platform breadth. Caveat: digest window was unusually quiet.

**OpenCode** — **Desktop-first Electron** architecture with models.dev catalog as source of truth; built-in `browser` tool via browser-use (#35844) is unique. Most exposed to long-running Windows stability problems (Bun runtime, SQLite contention).

**Pi** — The **extension SDK** tool of the cohort (full tool-schema exposure #5085, prompt guideline API #5711, lifecycle hooks #6175). Pushing hardest to be **embeddable as a library** with RPC mode hardening. Smallest issue comments but highest close rate.

**Qwen Code** — Only tool shipping a **multi-channel SDK story** (Python + TypeScript parity in #6491/#6492), a **daemon/serving** model (`qwen serve`), and webhook-triggered channels (#6495). Preview + nightly release cadence is unique. Fleet View is its Claude-Code-Agents-view analog.

**DeepSeek TUI / CodeWhale** — Mid-rebrand to **CodeWhale**; the **test-time compute** direction (#4196 verify/critique tool, #4199 PR, #4201 design doc) is unique to this cohort. WhaleFlow async executor (#2973-#2980) replaces `MockWorkflowExecutor` — a clear "make the workflow runtime real" pivot.

---

## 5. Community Momentum & Maturity

**Most mature / highest-velocity:** Claude Code, OpenAI Codex, Qwen Code, Gemini CLI. Indicators:
- 2–3 releases in 24h, all with structured changelogs
- 6–10+ PRs updated per day across architectural, docs, and bug-fix layers
- Top-upvoted issues resolved within cycle (Claude Code #73125 closed with 378 👍)

**Rapid iteration, smaller community:** Pi (10 PRs closed overnight — strong merge discipline), DeepSeek/CodeWhale (10 PRs all part of single v0.8.68 stopship push).

**Quiet / maintenance mode:** GitHub Copilot CLI (2 PRs), Kimi Code CLI (1 issue). Copilot still has the highest community-friction signal (#53, 75 👍, 9 months without maintainer response).

**Architecturally active signals:**
- Codex: extension-owned `TurnItem` is a foundation change with downstream PR stack
- Qwen: SDK control requests + transport options = embeddability bet
- Pi: extension API exports are SDK-stabilization
- Gemini: Caretaker agent infra (5-PR drop) is a meta-tooling bet
- DeepSeek/CodeWhale: WhaleFlow async executor replaces a mock — runtime rewrite

**Risk signals:** OpenCode's Windows Bun panic with 42 GB memory growth (#35847) is the single most severe operational report in the digest window.

---

## 6. Trend Signals

1. **Sub-agent lifecycle is the new reliability frontier.** Every tool with sub-agents reports lifecycle bugs (termination, ownership, isolation, token accounting). Qwen Code's #6505 (LoopDetectionService missing in subagents) and Claude Code's #41461 (1.4M tokens wasted on unstoppable background) are the worst-case manifestations. Expect this to remain the dominant bug class through 2026.

2. **TUI is becoming a feature parity battleground.** Status line (#17827 Codex), hook validation (#75537 Claude), model-toggle hotkeys (#6486 Q

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Snapshot date: 2026-07-08 · Source: github.com/anthropics/skills*

> Note on data: comment counts for PRs in the source feed came back undefined, so the "Top Skills Ranking" below is ordered by the feed's pre-sorted attention ranking and supplemented by cross-referenced Issues (which do have comment counts). Where a PR is anchored to a high-comment Issue, that linkage is called out.

---

## 1. Top Skills Ranking (Most-Watched PRs)

**1. PR #1298 — `fix(skill-creator): run_eval.py always reports 0% recall`** — [link](https://github.com/anthropics/skills/pull/1298)
Anchors the largest open bug cluster in the repo (Issue [#556](https://github.com/anthropics/skills/issues/556), 12 comments). The author argues the description-optimization loop (`run_loop.py` / `improve_description.py`) is currently optimizing against noise because `run_eval.py` returns `recall=0%` on every iteration. Beyond the eval artifact install, the PR fixes Windows stream reading, trigger detection, and parallel worker behavior. **Status: OPEN** · high priority — 10+ independent reproductions cited.

**2. PR #514 — Add `document-typography` skill** — [link](https://github.com/anthropics/skills/pull/514)
Targets a quality problem that touches every Claude-generated document: orphan word wrap, widow paragraphs, and numbering misalignment. The skill is positioned as a typographic QC layer rather than a content skill. **Status: OPEN**.

**3. PR #486 — Add `odt` skill (OpenDocument creation / template filling / ODT→HTML)** — [link](https://github.com/anthropics/skills/pull/486)
Extends the document-skill family beyond DOCX/PDF to the ISO-standard ODF format (.odt/.ods), explicitly framing itself around open-source document workflows and template-driven authoring. **Status: OPEN**.

**4. PR #1367 — `self-audit` skill v1.3.0 (mechanical + four-dimension reasoning audit)** — [link](https://github.com/anthropics/skills/pull/1367)
A universal, model-agnostic output auditor: file-existence verification first, then a severity-ordered reasoning audit (correctness, completeness, safety, clarity). Most recent high-attention submission; explicit "works with any project, any tech stack" framing. **Status: OPEN**.

**5. PR #83 — Add `skill-quality-analyzer` and `skill-security-analyzer` to marketplace** — [link](https://github.com/anthropics/skills/pull/83)
Meta-skills that score existing Skills across five dimensions (Structure 20%, plus four others) and inspect them for security issues. Notable because it pairs with Issue [#492](https://github.com/anthropics/skills/issues/492) (community-skills-in-official-namespace abuse, 34 comments — the single most-discussed thread in the repo). **Status: OPEN**.

**6. PR #723 — Add `testing-patterns` skill** — [link](https://github.com/anthropics/skills/pull/723)
Comprehensive testing reference: Testing Trophy philosophy, AAA, React component testing, mocks vs. fakes, coverage economics. Treated as a counterpart to the existing frontend-design work, broadening the engineering-Skills coverage. **Status: OPEN**.

**7. PR #1302 — Add `color-expert` skill** — [link](https://github.com/anthropics/skills/pull/1302)
A reference-grade color knowledge skill: ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS named, plus a "what color space to use when" table (OKLCH for scales, OKLAB for gradients, CAM16 for perception). Distinct from `frontend-design` because it is a pure-knowledge skill rather than a workflow skill. **Status: OPEN**.

**8. PR #210 — Improve `frontend-design` skill clarity & actionability** — [link](https://github.com/anthropics/skills/pull/210)
Rewrites an existing high-traffic skill so that every instruction is something Claude can execute in one turn, addressing the recurring complaint that the original reads as reference material rather than executable guidance. **Status: OPEN**.

---

## 2. Community Demand Trends (from Issues)

| Demand signal | Anchor | Comment volume |
|---|---|---|
| **Trust & namespace integrity** — community skills impersonating `anthropic/` are a security boundary problem | [Issue #492](https://github.com/anthropics/skills/issues/492) | **34** (highest in repo) |
| **Org-wide Skills distribution on Claude.ai** — current flow (download .skill → Slack → manual upload) is friction-heavy | [Issue #228](https://github.com/anthropics/skills/issues/228) | 14 |
| **Skill-creator eval pipeline reliability** — `run_eval.py` cannot measure descriptions on multiple platforms | [Issue #556](https://github.com/anthropics/skills/issues/556) | 12 |
| **Compact, symbolic agent memory** — long-running agents burn context on prose-style notes | [Issue #1329](https://github.com/anthropics/skills/issues/1329) | 9 |
| **Skill-creator as operational skill, not human-facing docs** — token efficiency, naming, intent | [Issue #202](https://github.com/anthropics/skills/issues/202) (CLOSED) | 8 |
| **Plugin packaging hygiene** — `document-skills` and `example-skills` install duplicate content | [Issue #189](https://github.com/anthropics/skills/issues/189) | 6 |
| **Agent governance / safety patterns** — policy enforcement, threat detection, audit trails | [Issue #412](https://github.com/anthropics/skills/issues/412) (CLOSED) | 6 |
| **Skills ↔ MCP unification** — package Skills so they expose typed APIs like MCP servers | [Issue #16](https://github.com/anthropics/skills/issues/16) | 4 |
| **Enterprise deployment surfaces** — AWS Bedrock compatibility, SharePoint / SPO access patterns | [Issue #29](https://github.com/anthropics/skills/issues/29) · [Issue #1175](https://github.com/anthropics/skills/issues/1175) | 4 each |

**Convergent themes** (across multiple issues):
- **Skill-creator is broken on the most important path** — the description-optimization loop, which is how every new Skill gets tuned, returns 0% recall on Linux *and* Windows. This is the single largest functional gap in the repo.
- **Security is no longer a side topic** — namespace spoofing (Issue #492) plus a closed governance proposal (Issue #412) plus SharePoint access-control concerns (Issue #1175) suggest the community is treating Skills as a trust-bearing surface, not just prompts.
- **Skills need to escape the local machine** — org sharing (Issue #228), Bedrock (Issue #29), and packaging-as-MCP (Issue #16) all point to the same underlying request: Skills should be a first-class distributable unit, like a package or plugin.

---

## 3. High-Potential Pending Skills (Active, Not Yet Merged)

All PRs below are OPEN and reflect strong author investment (multiple iterations, detailed summaries, sometimes paired fixes):

| Skill | PR | Why it's likely to land soon |
|---|---|---|
| `self-audit` (v1.3.0, universal output auditor) | [#1367](https://github.com/anthropics/skills/pull/1367) | Universal scope, mechanical-first design; high demand for pre-delivery verification |
| `color-expert` (color knowledge & color-space guidance) | [#1302](https://github.com/anthropics/skills/pull/1302) | Clear differentiation from `frontend-design`; well-defined domain |
| `document-typography` (typographic QC) | [#514](https://github.com/anthropics/skills/pull/514) | Closes a gap every Claude document has today |
| `odt` (OpenDocument creation / parse) | [#486](https://github.com/anthropics/skills/pull/486) | Completes the doc-format family alongside DOCX & PDF |
| `testing-patterns` | [#723](https://github.com/anthropics/skills/pull/723) | Broad engineering demand; complements `frontend-design` |
| `sensory` (macOS-native AppleScript automation) | [#806](https://github.com/anthropics/skills/pull/806) | Tiered permissions design reduces platform risk |
| `SAP-RPT-1-OSS` tabular predictor | [#181](https://github.com/anthropics/skills/pull/181) | Niche enterprise use case but self-contained |
| `skill-quality-analyzer` + `skill-security-analyzer` | [#83](https://github.com/anthropics/skills/pull/83) | Directly addresses the #492 namespace-trust thread |

Also worth tracking as **infrastructure fixes** (not new Skills, but unblock every Skill above):
- [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323) — the four-PR cluster fixing `run_eval.py` 0%-recall on Linux and Windows
- [#361](https://github.com/anthropics/skills/pull/361), [#362](https://github.com/anthropics/skills/pull/362), [#539](https://github.com/anthropics/skills/pull/539) — frontmatter parsing/UTF-8 hardening for `quick_validate.py`
- [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541) — DOCX/PDF case-sensitivity and `w:id` collision fixes

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *Skills that improve other Skills* — auditors, validators, governance layers, and a trustworthy optimization loop — because until those meta-capabilities work, every new domain Skill is shipped untuned and unverified.**

Supporting signal: the top two discussion threads by volume (Issues #492 and #556, 34 + 12 comments) and four of the top eight PRs (#1298, #83, #1367, #210) all sit in the meta-layer, while domain Skills (typography, color, ODT, testing, SAP) sit below them as beneficiaries of a working pipeline.

---

# Claude Code Community Digest — 2026-07-08

## 1. Today's Highlights

Two releases shipped in 24 hours: **v2.1.204** fixes a headless hook-streaming bug that caused remote workers to be idle-reaped mid-SessionStart, and **v2.1.203** adds a login-expiration warning and a visible mode badge in the footer. The issue surface is dominated by three converging pain points — **`AskUserQuestion`'s 60-second default-select behavior** (top-voted issue of the cycle at 378 👍, now closed), **background-agent lifecycle / token accounting under Fable 5**, and **TUI hangs on `claude --resume` across macOS and WSL2**. A wave of nested-subagent and Desktop auto-archive bugs suggests the agent-orchestration and desktop integration layers are the new reliability frontier.

## 2. Releases

**[v2.1.204](https://github.com/anthropics/claude-code/releases)** — Fixed hook events not streaming during `SessionStart` hooks in headless sessions, which could cause remote workers to be idle-reaped mid-hook.

**[v2.1.203](https://github.com/anthropics/claude-code/releases)** —
- Added a warning when login is about to expire, so background sessions are not silently interrupted.
- Added a grey ⏸ badge to the footer in manual permission mode so the active mode is always visible.
- (Truncated) Added the session's additional working directories.

## 3. Hot Issues

1. **[#73125 — AskUserQuestion: "No response after 60s — continued without an answer"](https://github.com/anthropics/claude-code/issues/73125)** (CLOSED, 142 comments, 👍378)
The single highest-upvoted bug of the cycle. On Bedrock/Linux/VSCode, `AskUserQuestion` silently auto-picks after 60s, causing the agent to continue on a never-made choice. 378 thumbs-up confirms this is the top community-priority TUI bug.

2. **[#50246 — Feature Request: Message queue mode](https://github.com/anthropics/claude-code/issues/50246)** (OPEN, 37 comments, 👍134)
A long-running, well-aged enhancement request: queue follow-up messages during active tasks instead of forcing an interrupt. 134 👍 suggests the current interrupt-or-remember UX is broadly disliked.

3. **[#47166 — JetBrains: a real Claude AI Assist interface plugin](https://github.com/anthropics/claude-code/issues/47166)** (OPEN, 28 comments)
A standing request for first-party JetBrains IDE support, distinct from the CLI. The thread is active and references the existing community plugin — implies users want parity with the VSCode extension.

4. **[#41461 — Background agents cannot be stopped, ~1.4M tokens wasted](https://github.com/anthropics/claude-code/issues/41461)** (CLOSED, 16 comments)
A costly bug report: background agents could not be terminated, the model falsely claimed it could stop them, and the session drained an estimated $55–106 in tokens. Now closed; tracked because the design implications recur across other open background-agent bugs.

5. **[#73365 — Advisor always "unavailable" with Fable 5 advisor (Opus 4.8 main) on v2.1.198](https://github.com/anthropics/claude-code/issues/73365)** (OPEN, 13 comments, 👍31)
A reproducible advisory model-routing bug: when the main model is Opus 4.8 and the advisor is Fable 5, the advisor returns unavailable across all sessions.

6. **[#67506 — Token consumption with Fable 5 is not matching its description](https://github.com/anthropics/claude-code/issues/67506)** (OPEN, 9 comments)
A cost-transparency complaint: observed token usage with Fable 5 (advisor / cowork) diverges from the documented profile. Pairs with #73365 and #74006 as part of a Fable-5-billing cluster.

7. **[#74273 — Auto-compaction plateaus near ~75% on Sonnet 5 (v2.1.201)](https://github.com/anthropics/claude-code/issues/74273)** (OPEN, 9 comments)
After switching executor-default to Sonnet 5, context fills faster and auto-compaction no longer reduces usage below ~75%, producing a compact/work loop. Relevant for anyone running long Sonnet-5 sessions.

8. **[#74006 — Contradictory 'session limit resets at X' times in one session](https://github.com/anthropics/claude-code/issues/74006)** (OPEN, 8 comments)
On macOS Fable-5 with heavy subagent use, projected reset times drift, background subagents die terminally, and `session limit` messaging contradicts itself mid-session — a follow-on cost-UX issue from the Fable 5 cluster.

9. **[#74803 — Burning through more tokens while doing nothing different](https://github.com/anthropics/claude-code/issues/74803)** (OPEN, 8 comments, 👍4)
User-perceived token regression with no workflow change. Marked duplicate but symptomatic of the broader Fable 5 / cache-invalidation cost complaints (see also #75142).

10. **[#73487 — AskUserQuestion auto-selects default after ~60s on Windows (v2.1.198)](https://github.com/anthropics/claude-code/issues/73487)** (OPEN, 8 comments, 👍8)
Windows counterpart to the closed #73125. Requests a configurable timeout or a way to disable auto-selection. The fact that two separate threads reached the same conclusion reinforces the urgency of the fix.

*Honorable mentions* (lower comment counts but operationally important): **[#73754](https://github.com/anthropics/claude-code/issues/73754)** (attaching to a stopped background agent crashes the worker), **[#75043](https://github.com/anthropics/claude-code/issues/75043)** (nested subagents always async; `TaskStop` ownership errors), **[#75045](https://github.com/anthropics/claude-code/issues/75045)** (worktree isolation forks from default branch, not HEAD), **[#75521](https://github.com/anthropics/claude-code/issues/75521)** (`claude --resume/--continue` Agents view ignores keyboard on macOS 2.1.204), **[#75561](https://github.com/anthropics/claude-code/issues/75561)** (`claude --resume` hangs indefinitely, SIGINT unkillable, connector discovery stall), and **[#75548](https://github.com/anthropics/claude-code/issues/75548)** (Desktop auto-archive terminates in-flight background subagents).

## 4. Key PR Progress

Note: only 6 PRs updated in the last 24h; all listed.

1. **[#68673 — fix(scripts): break pagination when page is not full, not only when empty](https://github.com/anthropics/claude-code/pull/68673)** (OPEN)
Corrects a pagination-stop condition in the repo's automation scripts — relevant because the wrong stop condition could under- or over-fetch on the last page of any paginated GitHub API call.

2. **[#75541 — fix(sweep): paginate issue events and honor unlabeled when closing expired issues](https://github.com/anthropics/claude-code/pull/75541)** (OPEN)
`scripts/sweep.ts`'s `closeExpired()` was determining a lifecycle label's application time from a single page of events. Fix paginates the events call and adds an `unlabeled` guard, preventing the sweeper from auto-closing issues whose `invalid` / `needs-repro` / `needs-info` / `stale` label was applied on an earlier page.

3. **[#75537 — fix(hook-development): recognize all five hook handler types](https://github.com/anthropics/claude-code/pull/75537)** (OPEN)
The `plugin-dev` **hook-development** skill and `scripts/validate-hook-schema.sh` had drifted: they knew only 2 of the 5 hook handler types Claude Code actually supports. Aligns the docs and the bundled validator with the product.

4. **[#75529 — docs(code-review plugin): clarify relationship to bundled `/code-review` skill](https://github.com/anthropics/claude-code/pull/75529)** (OPEN)
Clarifies that the `code-review` plugin (PR review via `gh`) is separate from the bundled `/code-review` skill (local working-diff review), and that the plugin's command is namespaced as `code-review:code-review`. Also fixes the Installation section.

5. **[#73476 — docs: fix GitHub capitalization in README](https://github.com/anthropics/claude-code/pull/73476)** (OPEN)
Minor: `Github` → `GitHub` in `README.md`. Trivial in scope but useful as a tidy-up signal.

6. **[#75252 — docs: clarify plugin MCP configuration scope](https://github.com/anthropics/claude-code/pull/75252)** (OPEN)
Reopened (the original #74857 fork was deleted). Clarifies that plugin `mcpServers` config is for plugin-bundled MCP server definitions and is separate from the user-level allow/deny list in `~/.claude.json` — an easy-to-misread docs area given the recent MCP changes.

## 5. Feature Request Trends

Distilled from open issues and the top of the comment list:

- **Non-interruptive task continuation** — message queue mode (#50246) and the desire to inject follow-ups into running work without losing context are a recurring, strongly-upvoted direction.
- **Configurable / disable-able `AskUserQuestion` timeout** — #73125 and #73487 both push for the auto-default behavior to be tunable per-session, not a hard 60s.
- **First-party JetBrains / IDE parity** — #47166 continues to gather engagement; users want the same surface area as the VSCode extension.
- **Worktree isolation from current branch, not default** — #75045 formalizes the expectation that `Agent` / `Workflow` `isolation: "worktree"` should fork from `HEAD`, not the repo default.
- **Cost / quota transparency under Fable 5** — three open issues (#67506, #74006, #74803) ask for visible token consumption that matches documented behavior, including subagent contribution and stable "limit resets at" projections.
- **Hook ergonomics** — #75534 (block-reason rendering in VS Code/Cursor) and #75537 (validator for all 5 hook handler types) point to a broader need for more complete hook lifecycle tooling.
- **Permission system clarity** — #75549 raises that compound-command decomposition is not documented as quote-aware, asking for an explicit contract.

## 6. Developer Pain Points

- **Background agents are not safe to leave running unattended.** Cannot-stop backgrounds (#41461), contradictory state on attach (#73754), nested-subagent ownership failures (#75043), Desktop auto-archive terminating in-flight agents (#75548), and projection drift on subagent death (#74006) all point to the same root: the lifecycle of `Agent` / `Workflow` jobs is under-specified relative to how heavily it's being used.
- **`AskUserQuestion`'s 60s default is a footgun.** Two top-engagement bugs (#73125, #73487) and the need for a configurable timeout indicate the feature as-shipped does not match the implicit mental model for batched, scripted, or remote workflows.
- **`claude --resume` / `--continue` reliability.** Cold-start hangs on WSL2 (#75496), Agents view ignoring keyboard on macOS (#75521), indefinite connector-discovery stalls unkillable by SIGINT (#75561), and silent session-history loss on stale CLI session IDs in Desktop (#75229) form a coherent cluster: resume is the most fragile entry point in 2.1.204.
- **Fable 5 cost and routing transparency.** Users cannot reconcile observed token use with documented behavior across advisor (#73365), exec (#67506, #74803), and session-limit projection (#74006). A first-party cost-dashboard breakdown by advisor/exec/subagent would address most of these in one move.
- **Hooks are under-documented in the IDE surface.** The `UserPromptSubmit` `decision:block reason` not rendering in VS Code/Cursor (#75534) — fixed in CLI but not the extension — and the validator missing hook handler types (#75537) suggest hooks-as-API is being adopted faster than the IDE integration is keeping up.
- **Sonnet 5 long-session compaction regression.** #74273 documents that auto-compaction plateaus at ~75%, producing a compact/work loop — a model-version-specific behavior that long-running Sonnet 5 users will hit deterministically.

---
*Sources: [anthropics/claude-code issues](https://github.com/anthropics/claude-code/issues) and [pull requests](https://github.com/anthropics/claude-code/pulls), 2026-07-07 → 2026-07-08.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-08

## 🔥 Today's Highlights

The headline release of **v0.143.0** ships remote plugins enabled by default with npm marketplace integration and native macOS/Windows system proxy support (including PAC). Meanwhile, the most-discussed thread of the day (#30364, 158 comments, 252 👍) surfaces an alarming GPT-5.5 reasoning-token clustering pattern at 516/1034/1552 tokens that may explain widespread reports of degraded performance. On the engineering side, a coordinated set of PRs advances the **extension-owned `TurnItem` architecture**, paving the way for cleaner plugin/extensibility boundaries in Core.

---

## 📦 Releases

### rust-v0.143.0 — [Release notes](https://github.com/openai/codex/releases/tag/rust-v0.143.0)

**New Features:**
- Remote plugins now default-enabled with richer catalog rows, npm marketplace sources, and visible remote/local version labels. ([#30297](https://github.com/openai/codex/pull/30297), [#26705](https://github.com/openai/codex/pull/26705), [#29375](https://github.com/openai/codex/pull/29375), [#30981](https://github.com/openai/codex/pull/30981))
- Codex routes auth + Responses API traffic through macOS and Windows system proxies (incl. PAC).

### rust-v0.143.0-alpha.39 — Pre-release build tracking the v0.143.0 line.

---

## 🐛 Hot Issues

1. **[#30364](https://github.com/openai/codex/issues/30364) — GPT-5.5 reasoning-token clustering at 516/1034/1552** *(158 💬, 252 👍)*
   Aggregated metadata suggests `gpt-5.5` disproportionately lands on fixed reasoning-token boundaries, correlating with degraded output on complex tasks. Top-voted issue in the snapshot — directly addresses the wave of "GPT-5.5 feels downgraded" complaints.

2. **[#18993](https://github.com/openai/codex/issues/18993) — VS Code extension cannot open past conversation history** *(43 💬, 53 👍, CLOSED)*
   Regression in extension 1.117.0 broke access to prior threads on Windows. High 👍-to-comment ratio indicates broad pain for paying users.

3. **[#17827](https://github.com/openai/codex/issues/17827) — Customizable status line for TUI** *(21 💬, 88 👍)*
   Feature request mirroring Claude Code's shell-script status line (tokens, rate limits, branch, model). One of the highest 👍 counts on a non-bug issue.

4. **[#14297](https://github.com/openai/codex/issues/14297) — Codex app shows 5× "Reconnecting…" before replying** *(52 💬, CLOSED)*
   Repeated regression affecting Codex App users on macOS arm; resolved recently.

5. **[#28507](https://github.com/openai/codex/issues/28507) — "Selected model is at capacity" persistent failures** *(24 💬)*
   Pro 5x users on Windows report being locked out despite available capacity.

6. **[#29089](https://github.com/openai/codex/issues/29089) — Missing `codex-windows-sandbox-setup.exe`** *(13 💬)*
   Windows sandbox bootstrap fails to find required module, blocking local sandbox execution.

7. **[#30137](https://github.com/openai/codex/issues/30137) — "gpt 5.5 got downgraded to 5.3"** *(7 💬)*
   User-perceived intelligence regression; complements the token-clustering investigation above.

8. **[#24069](https://github.com/openai/codex/issues/24069) — Regression: CLI 0.133.0 breaks native subagent spawning for Ollama** *(6 💬)*
   Local-model workflows via Ollama regressed in the 0.132 → 0.133 CLI cut; 0.132 confirmed working.

9. **[#28919](https://github.com/openai/codex/issues/28919) — Windows Codex app missing "Control other devices" tab** *(7 💬, 15 👍)*
   Remote-control entrypoint hidden on Windows builds, breaking cross-device workflows.

10. **[#17764](https://github.com/openai/codex/issues/17764) — Usage quota and credit balance appear inconsistent** *(9 💬)*
    Plus-tier users seeing stale or stuck quota/credit displays in the CLI.

**Also surfaced today:** [#31517](https://github.com/openai/codex/issues/31517) (Responses API `tool_search_call.arguments` typed as JSON string), [#31499](https://github.com/openai/codex/issues/31499) (Windows MCP stdio process duplication — 183 node.exe / 13 GB RAM), [#31498](https://github.com/openai/codex/issues/31498) (curated-plugin startup sync corrupting repos when codex runs inside a git hook).

---

## 🔧 Key PR Progress

1. **[#31526](https://github.com/openai/codex/pull/31526) — Restrict hosted threads to server-registered tools**
   Adds `server_registered_tools_only` with a raw MCP allowlist so hosted app-server clients only see the tool inventory they explicitly register — important hardening for multi-tenant deployments.

2. **[#31460](https://github.com/openai/codex/pull/31460) — Centralize tool review routing (approvals refactor)**
   Unifies PermissionRequest hooks, Guardian, and user review under a single `ApprovalReviewer` abstraction. Strict auto-review now respects hook allow/deny decisions.

3. **[#31525](https://github.com/openai/codex/pull/31525) — Migrate standalone web search to extension-owned turn items**
   Standalone web search now emits `ExtensionItem::WebSearch` via `TurnItem::Extension`, decoupling Core from per-feature item schemas (follows [#31283](https://github.com/openai/codex/pull/31283)).

4. **[#31500](https://github.com/openai/codex/pull/31500) — code-mode moves to hosted mode by default**
   `code_mode_host` promoted to stable + enabled by default; opt-out flag preserved. Tests now run through the standalone host.

5. **[#31524](https://github.com/openai/codex/pull/31524) — Use UUIDv7 for generated item IDs**
   Item IDs (user/agent messages, hook prompts, context compactions) switch to time-ordered UUIDv7 for better index locality.

6. **[#30188](https://github.com/openai/codex/pull/30188) — Persist TurnItems for paginated thread rollouts**
   Threads with `history_mode = "paginated"` now persist `ItemCompleted(item: <turn_item>)` in rollout JSONL. Legacy threads untouched.

7. **[#31473](https://github.com/openai/codex/pull/31473) — Emit canonical review mode items**
   `TurnItem::EnteredReviewMode` / `TurnItem::ExitedReviewMode` now flow through the canonical `ItemStarted` / `ItemCompleted` lifecycle.

8. **[#31515](https://github.com/openai/codex/pull/31515) / [#31379](https://github.com/openai/codex/pull/31379) / [#31516](https://github.com/openai/codex/pull/31516) — Web search metadata surface area**
   A coordinated stack adds URL/title/snippet previews, deserializes hosted sources, and exposes them via app-server v2 + exec JSONL.

9. **[#31357](https://github.com/openai/codex/pull/31357) — CI: route build IO through Dev Drives**
   Windows Cargo + Bazel jobs moved under `CI_BUILD_ROOT` to leverage Dev Drive performance characteristics; Unix gets a stable cache root.

10. **[#31503](https://github.com/openai/codex/pull/31503) — Detect Codex installs managed by pnpm**
    JS shim now correctly identifies pnpm-managed global installs so doctor/update flows stop running npm commands against pnpm-owned directories.

**Honorable mentions:** [#28845](https://github.com/openai/codex/pull/28845) (plugin agent roles), [#31482](https://github.com/openai/codex/pull/31482) (migrate plugin commands into skills), [#31295](https://github.com/openai/codex/pull/31295) (cold skill-load macrobenchmark), [#31466](https://github.com/openai/codex/pull/31466) (tool-search diagnostics in `/feedback`).

---

## 💡 Feature Request Trends

- **LSP integration** ([#31504](https://github.com/openai/codex/issues/31504)) — top emerging ask for cross-file project understanding in the desktop app.
- **Configurable TUI status line** ([#17827](https://github.com/openai/codex/issues/17827)) — Claude Code-style real-time metrics shell hook.
- **Plugin hook identification** ([#31469](https://github.com/openai/codex/issues/31469)) — per-hook names/descriptions in the trust UI so operators can audit what they're approving.
- **Localized UI** ([#31513](https://github.com/openai/codex/issues/31513)) — Simplified Chinese for Codex Desktop is the first explicit i18n ask.
- **VS Code extension notifications** ([#31519](https://github.com/openai/codex/issues/31519)) — native completion alerts when agent turns finish.

---

## 😤 Developer Pain Points

- **Windows is the recurring pain surface** — sandbox-exe missing (#29089), MCP process duplication leaking memory (#31499), thread reorder after reopen (#29561), retired-model auth defaults (#31016), missing remote-control tab (#28919). Almost half the open app/server bugs in this digest are Windows-specific.
- **GPT-5.5 quality concerns are converging into data** — the token-clustering analysis (#30364) provides a testable hypothesis for the subjective "feels dumber" reports (#30137, #31523).
- **Plugin sandboxing isn't airtight yet** — curated-plugin sync corrupts host repos when invoked inside a git hook (#31498); isolation fix #29785 hasn't shipped to a release.
- **Local/CLI workflows regress on minor bumps** — Ollama subagent regression in 0.133.0 (#24069); `codex resume` dumping raw base64 to IntelliJ terminals (#31521).
- **Rate-limit / quota UI is opaque and inconsistent** — capacity errors on available models (#28507), stuck balances after plan upgrades (#31415), stale quota displays (#17764).
- **Remote-control reliability** — relay connections silently dropping after 20–55 min in WSL2 (#26786), device list vanishing on macOS (#30637), host invisible unless Codex.app is foregrounded (#24396).

---

*Digest generated from GitHub data for `openai/codex`. Activity window: 2026-07-07 → 2026-07-08.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-08

## Today's Highlights

The repository remains in a heavy maintenance cycle with **no new releases** in the last 24 hours, but a **nightly release for v0.51.0-nightly.20260708 failed** (#28308), which may delay the next stable cut. Activity is dominated by subagent reliability fixes, an emerging cluster of **Auto Memory quality and security concerns** (issues #26516, #26522, #26523, #26525), and the first merged pieces of the new **Caretaker triage/egress agent** infrastructure. A noteworthy security patch landed for **SSRF protection in OAuth discovery** (#28112) along with a fix for OAuth token exchange breakage on Node.js CVE-2026-48931 (#28103).

## Releases

*No new releases in the last 24 hours.*

## Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS reported as GOAL success** *(p1, 10 comments, 2 👍)*  
   `codebase_investigator` subagents mask turn-limit exhaustion as a successful `GOAL` termination, hiding real interruptions from users. High-impact correctness bug for any long-running agentic workflow.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs** *(p1, 7 comments, 8 👍)*  
   Deferring to the generalist subagent causes indefinite hangs even on trivial folder-creation tasks. One of the most upvoted recent bugs; suggests a fundamental routing/state issue.

3. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command execution stuck on "Waiting input"** *(p1, 4 comments, 3 👍)*  
   After successful shell command completion, the CLI remains stuck awaiting user input. Frequently reported and affects basic usability.

4. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — browser subagent fails in Wayland** *(p1, 4 comments)*  
   Browser agent terminates with `GOAL` but no useful output under Wayland compositors, hinting at environment-specific browser subprocess behavior.

5. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component level evaluations** *(p1, 7 comments)*  
   Follow-up EPIC to the behavioral-eval framework. Documents 76 behavioral tests across 6 supported models; sets the agenda for scaling eval coverage.

6. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — Assess impact of AST-aware file reads/search/mapping** *(p2, 7 comments)*  
   Investigates whether AST-aware tooling (e.g., `tilth`, `glyph`) can reduce token noise and turn counts for method-bounded reads.

7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini does not use skills and sub-agents enough** *(p2, 6 comments)*  
   Anecdotal but consistent report that the model rarely invokes configured skills/subagents unless explicitly prompted — a discoverability/prompting gap.

8. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Stop Auto Memory from retrying low-signal sessions indefinitely** *(p2, 5 comments)*  
   Auto Memory extraction agent can keep re-reading sessions it judges low-signal, wasting API calls. First of a four-issue Auto Memory quality cluster.

9. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Add deterministic redaction and reduce Auto Memory logging** *(p2, security, 3 comments)*  
   Transcripts reach the extraction model before prompt-time redaction runs; needs deterministic pre-redaction to mitigate secret leakage.

10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 400 error with >128 tools** *(p2, 3 comments)*  
    Hard backend limit surfaced as a generic 400. The fix requires smarter tool scoping rather than naive registration of all available tools.

## Key PR Progress

1. **[#28309](https://github.com/google-gemini/gemini-cli/pull/28309) — fix(cli): CJK text wrapping and `__bold__` syntax in markdown renderer**  
    Reworks per-line `<Box>` splitting so CJK characters (no whitespace) and double-underscore bold render correctly in the terminal.

2. **[#28112](https://github.com/google-gemini/gemini-cli/pull/28112) — fix(mcp): SSRF protection in OAuth metadata discovery** *(closed, security)*  
    Brings `oauth-utils.ts`/`oauth-provider.ts` in line with `web-fetch.ts` by applying `isLoopbackHost()` + DNS validation to URLs returned by MCP servers.

3. **[#28103](https://github.com/google-gemini/gemini-cli/pull/28103) — fix(core): avoid keep-alive socket reuse during OAuth token exchange** *(closed)*  
    Works around `Premature close` errors on Node 24.17.0 / 22.23.0 / 26.3.0 caused by CVE-2026-48931's response-queue poisoning fix.

4. **[#27971](https://github.com/google-gemini/gemini-cli/pull/27971) — fix(core): strip thoughts from scrubbed history** *(closed)*  
    Closes the "Thought Leakage" class of bugs where the model's scratchpad monologues bleed into plain history turns and trigger infinite-loop emulation.

5. **[#28304](https://github.com/google-gemini/gemini-cli/pull/28304) — fix(privacy): clearer message when account has no Code Assist tier** *(p1, open)*  
    `/privacy` no longer dumps the raw backend string on Workspace/enterprise or OAuth-without-GCP accounts.

6. **[#28223](https://github.com/google-gemini/gemini-cli/pull/28223) — fix(core-tools): bypass LLM correction for `.json` and `.ipynb`**  
    Prevents the WriteFile/Replace tools from corrupting JSON and Jupyter Notebook files via misapplied diffs.

7. **[#28224](https://github.com/google-gemini/gemini-cli/pull/28224) — fix(cli): avoid splitting emoji when truncating display strings**  
    Replaces UTF-16 code-unit truncation with grapheme-aware logic so emojis survive the `sanitizeForDisplay` cut.

8. **[#28219](https://github.com/google-gemini/gemini-cli/pull/28219) — fix(cli): parse commented `settings.json` in memory bootstrap**  
    Lightweight parent process now respects JSON-with-comments, avoiding silent fallback to default memory configuration.

9. **[#28305](https://github.com/google-gemini/gemini-cli/pull/28305) — feat(evals): tool-call timeline + failure summaries** *(open)*  
    When a behavioral eval fails, the runner prints a numbered timeline of tool calls with args/status/error context — a major step toward actionable eval failures.

10. **[#28306](https://github.com/google-gemini/gemini-cli/pull/28306) / [#28307](https://github.com/google-gemini/gemini-cli/pull/28307) / [#28303](https://github.com/google-gemini/gemini-cli/pull/28303) — Caretaker agent infra**  
    Multi-PR push delivering the Triage Worker's main loop, LLM orchestrator via Antigravity SDK, GCS debug logger, Dockerfile, and Octokit-based GitHub egress handler. Establishes the automated issue-triage pipeline.

*(Honorable mention: [#28169](https://github.com/google-gemini/gemini-cli/pull/28169) adds an `eval:coverage` command for cross-referencing eval inventory vs. tool registry.)*

## Feature Request Trends

- **AST-aware tooling as a first-class capability.** A dedicated EPIC (#22745, #22746) is evaluating AST-based file reads, search, and codebase mapping to reduce token waste and turn counts — a clear signal the team sees structural code awareness as a differentiator.
- **Subagent ergonomics & observability.** Trajectory sharing via `/chat share` (#22598), subagent context in `/bug` reports (#21763), settings.json override support for the Browser Agent (#22267), and a self-awareness overhaul for the agent's own CLI/hotkeys (#21432) point to a "make subagents first-class citizens" roadmap.
- **Auto Memory as a strategic surface.** Four open issues (#26516, #26522, #26523, #26525) converge on making memory deterministic, secure, and observable — preparing it for production workloads.
- **Eval platform maturity.** Multiple PRs (#28169, #28305, #24353) invest in coverage reports, tool-call timelines, and component-level evaluation — i.e., a shift from "do evals run" to "do evals give us signal."
- **Localized rendering polish.** CJK (#28309) and emoji (#28224) handling suggest growing international usage that the Ink renderer hasn't fully caught up with.

## Developer Pain Points

- **Subagent reliability is the #1 frustration.** Hangs (#21409), misreported termination (#22323), ignored settings (#22267), and missing subagent context in bug reports (#21763) form a coherent pattern: subagents frequently misbehave in ways that are hard to diagnose.
- **Shell interactivity is brittle.** Commands hang after completion (#25166) and interactive prompts stop the agent dead (#22465) — both common flows.
- **Tool scaling breaks.** Hitting a backend limit at 128/400 tools (#24246) without graceful degradation is a ceiling users hit in real configurations.
- **Auto Memory security & determinism.** Secret redaction happens after content is in model context (#26525), invalid patches are silently dropped (#26523), and low-signal sessions loop (#26522) — a bundle of correctness concerns before it can be trusted.
- **Browser agent is fragile in non-default environments.** Wayland failures (#21983) and lock-recovery issues (#22232) make the Browser Agent unreliable outside ideal setups.
- **Hygiene problems from the model.** Random tmp scripts scattered across the workspace (#23571) and use of destructive git flags (#22672) force manual cleanup and reflect a gap between capability and guardrails.

---
*Sources: google-gemini/gemini-cli Issues & PRs updated 2026-07-08. Truncated to top 30 issues by comment count (of 49) and all 17 PRs in window.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-08

## 1. Today's Highlights
The v1.0.69 / v1.0.69-3 release lands a substantial sandbox UX overhaul: built-in file edits now follow a "sandbox policy" model rather than an OS-level sandbox, can be approved to bypass the sandbox, and `web_fetch` respects active sandbox network policies with optional one-time bypass approval. Plugin management also got a quality-of-life lift with a new `/plugins` dashboard and hot-reload of installed extensions. On the issue side, the long-standing request to **restore the classic GitHub Copilot CLI commands (#53)** continues to dominate community attention at 75 👍 and 37 comments, while several MCP/session-lifecycle regressions are surfacing in the latest builds.

## 2. Releases

**v1.0.69** — [Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.69)
- Renamed the badge for sandboxed built-in edits to **(sandbox policy)** to better reflect best-effort enforcement vs. an OS-level sandbox.
- New `/plugins` dashboard for managing installed extensions.
- Installed plugin extensions can now be reloaded **without restarting a session**.

**v1.0.69-3**
- Built-in file edits can be **approved to bypass the sandbox** on demand.
- `web_fetch` now respects the active sandbox network policy (denying blocked outbound/local targets) and, when the host enables `sandbox.allowBypass`, surfaces a **one-time bypass approval** from the fetch prompt.

## 3. Hot Issues

1. **#53 — Bring back the GitHub Copilot in the CLI commands to not break workflows** — the top-voted issue on the repo (75 👍, 37 comments, still open after 9+ months). Maintainers remain silent and the community has begun shipping alternatives (e.g. `shell-ai` by @Deltik). [github/copilot-cli#53](https://github.com/github/copilot-cli/issues/53)

2. **#2643 — `preToolUse` hooks: silent command rewrite via `updatedInput` still triggers confirmation** — Plugins can't silently rewrite a command even with `permissionDecision: allow`. Blocks automation use cases for plugin authors. [github/copilot-cli#2643](https://github.com/github/copilot-cli/issues/2643)

3. **#3123 — `/research` can't write its research report** — The research agent finishes the report but claims the `create` tool isn't available, so output never reaches disk. [github/copilot-cli#3123](https://github.com/github/copilot-cli/issues/3123)

4. **#2729 — `/delegate` ignores specified source branch / branch name** — Multi-agent delegation silently ignores branch hints, producing wrong worktrees. [github/copilot-cli#2729](https://github.com/github/copilot-cli/issues/2729)

5. **#4053 — TUI hangs at "Loading: N skills" on NFS/GPFS** — Brand-new report of a SIGCHLD race where Tokio spawns `which gh` with 30+ concurrent threads; TUI becomes unresponsive. [github/copilot-cli#4053](https://github.com/github/copilot-cli/issues/4053)

6. **#4054 — `/resume` broken for all non-git sessions** — Catch-22 bug: non-git sessions store `repository = '/'`, which the resume picker's git gate then refuses to select. [github/copilot-cli#4054](https://github.com/github/copilot-cli/issues/4054)

7. **#3954 — `explore` tool hardcodes `gpt-5.4-mini`, ignoring custom/DeepSeek API** — Regressed in v1.0.65; BYOK users get a model that doesn't exist on their endpoint. [github/copilot-cli#3954](https://github.com/github/copilot-cli/issues/3954)

8. **#3604 — Windows-1252 files silently re-encoded to UTF-8 on edit** — Affects legacy codebases with non-UTF-8 encodings and damages files without warning. [github/copilot-cli#3604](https://github.com/github/copilot-cli/issues/3604)

9. **#4038 — Non-interactive mode: late-connecting MCP server injects empty user message** — Running `copilot -p "..."` with ≥7 MCP tools appends an empty turn; the model then echoes system-prompt fragments instead of answering the real prompt. [github/copilot-cli#4038](https://github.com/github/copilot-cli/issues/4038)

10. **#4056 — Project-scoped extension canvases declared but not routable by `open_canvas`** — Today's newest issue; canvases from `.github/extensions/` initialize but never enter the runtime routing table. [github/copilot-cli#4056](https://github.com/github/copilot-cli/issues/4056)

## 4. Key PR Progress

1. **#4057 — "Install"** — Freshly opened; minimal description, likely a packaging/installer tweak by contributor EverydayEvertime. Worth watching for what it actually ships. [github/copilot-cli#4057](https://github.com/github/copilot-cli/pull/4057)

2. **#3708 — "Add files via upload"** — Older upload-driven PR refreshed today by panchofrancisco1987-ui; pending review with no prior discussion, so still likely needs a maintainer to clarify scope. [github/copilot-cli#3708](https://github.com/github/copilot-cli/pull/3708)

> Note: only 2 PRs saw activity in the last 24h; both are still open with minimal context, suggesting the repo is in a quieter-than-usual merge window.

## 5. Feature Request Trends

- **BYOK / bring-your-own-model everywhere.** ACP server mode and custom-DepSeek endpoints both want first-class support (#4037, #3954), and the community is increasingly unhappy with hardcoded model references in built-in agents.
- **Richer plugin authoring surface.** Interactive `${input:...}` variables in `.mcp.json` (#4042), broader hook control (silent command rewrites in #2643), and skill→slash-command discoverability (#4048) are the top asks from plugin developers.
- **Session/worktree ergonomics.** Programmatic branch prefix control (#4044) and reliable cross-platform sandbox stability (#4046) are being requested by IDE integrators (notably JetBrains and IntelliJ).
- **Editor-style input UX.** Long-form answer composition via `$EDITOR` for `ask_user` (#4050) and project-level canvas routing (#4056) round out the most-asked UX improvements.

## 6. Developer Pain Points

- **MCP server lifecycle is fragile.** Multiple reports of stdio MCP processes surviving `session.disconnect()` (#3440, closed), docker stdio MCP clients duplicating on `/new`/`/resume` (#4049), and late-connecting servers corrupting non-interactive prompts (#4038).
- **Session continuity regressions.** `/resume` is effectively unusable outside git repos (#4054), custom agent selections silently revert to Default mid-session (#4047), and `/research`/`/delegate` lose their output or branch hints (#3123, #2729).
- **Sandbox/network edge cases.** `web_fetch` dead-ends on IPv4-only sandboxes (#4041), the TUI hangs on networked filesystems (#4053), and the voice runtime installer pulls from a private Azure Artifacts feed behind a 401 (#4035).
- **Quality-of-life UI bugs.** Pasted images repeat with no debounce (#4045), terminal input gets spurious text on resize (#4051), and the model picker's statusline obscures the input on Up-arrow (#4043).
- **Long-running community frustration.** #53 — restoring the legacy Copilot CLI command surface — is by far the most-upvoted open issue, signaling meaningful regression pain for existing automation workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-07-08**

## 1. Today's Highlights

Repository activity in the last 24 hours was minimal, with no new releases and no pull request updates. The single notable event is a continued discussion on Issue #1604 regarding Figma MCP integration, indicating ongoing community interest in expanding the tool's design ecosystem connectivity.

## 2. Releases

_No new releases published in the last 24 hours._

## 3. Hot Issues

The issue tracker saw very limited activity, with only one issue updated in the last 24 hours. There are insufficient items to populate a top-10 list; the following is the lone updated issue:

1. **[#1604 — Figma MCP Support](https://github.com/MoonshotAI/kimi-cli/issues/1604)** _(OPEN, enhancement)_
   Author `maoxian-1` requested native support for Figma's MCP catalog. The author specifically noted that Figma's MCP requires pre-registration and hopes the CLI can streamline this workflow. The issue carries 2 thumbs-up and 1 comment, suggesting modest but clear community backing for tighter Figma integration—relevant for designers and developers bridging code and design assets.

> **Note:** Only 1 issue was updated in the last 24h, so a broader top-10 ranking is not possible for this digest window.

## 4. Key PR Progress

_No pull requests were updated in the last 24 hours. The PR queue appears inactive during this period._

## 5. Feature Request Trends

Based on available data, the dominant feature direction emerging is **third-party tool/MCP ecosystem integration**, specifically:

- **Design tool interoperability** — Figma MCP support signals demand for tighter coupling between Kimi CLI and mainstream design platforms.
- **Pre-registered MCP handling** — The community wants first-class support for MCP servers that require authentication or registration steps, reducing manual configuration friction.

## 6. Developer Pain Points

From the limited data, one recurring theme surfaces:

- **Friction with authenticated/pre-registered MCPs** — Developers integrating with services like Figma must currently handle registration and credential setup manually. A smoother, CLI-native flow for such MCPs would reduce onboarding time and configuration errors.
- **Gaps in design-to-code workflows** — Lack of direct Figma connectivity forces users to context-switch or build workarounds, a pain point likely shared across design-aware developer teams.

---

**Caveat:** This digest reflects very low activity over the 24-hour window (1 issue, 0 PRs, 0 releases). The "Hot Issues" and "Key PR Progress" sections are constrained by available data; a richer picture would emerge by expanding the lookback window or aggregating across multiple days.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-08

## Today's Highlights
OpenCode shipped **v1.17.15** with improved Z.ai context-window error classification and more graceful handling of unavailable config directories. The community is actively flagging critical stability issues, most notably a Bun runtime panic accompanied by a 42.90 GB memory leak on Windows after ~12-hour sessions, alongside a long-running push to surface archived sessions in the desktop UI. A wave of contributor PRs focused on localization parity (Portuguese-BR, Korean), a SpaceXAI branding update, and a new built-in `browser` tool powered by browser-use.

## Releases
**v1.17.15** — 
- **Core**: Better classification of Z.ai context-window overflow errors (`@fengjikui`); more graceful handling of unavailable config directories when reading config files.
- **Desktop**: Restored model details tooltips in the model picker.

## Hot Issues

1. **[#6680 — View archived sessions on desktop](https://github.com/anomalyco/opencode/issues/6680)** — Long-standing request (35 comments, 22 👍) for an "Archived sessions" entry in the sidebar `...` menu opening a list modal. High community engagement and still open.
2. **[#35847 — Bun panic + 42.90 GB memory leak on 1.17.14](https://github.com/anomalyco/opencode/issues/35847)** — Reports `Illegal instruction` panic with RSS peaking at 45.29 GB and 94% system memory usage after ~12-hour sessions on Windows 11 — potentially severe.
3. **[#35846 — Session list crashes with limit >= 19](https://github.com/anomalyco/opencode/issues/35846)** — 'Unexpected error' on Windows with 1.17.15 when another instance is running and the `limit` query is ≥19; tied to SQLite contention.
4. **[#35859 — Disable built-in CopilotAuthPlugin](https://github.com/anomalyco/opencode/issues/35859)** — Repeated "Connect to GitHub" OAuth popups on every startup; needs an opt-out flag for the compiled-in `INTERNAL_PLUGIN`.
5. **[#6680 again noted] [#27871 — Empty bash args `{}` interrupt sessions](https://github.com/anomalyco/opencode/issues/27871)** — Submitted empty bash args still abort the tool; belongs to a long-standing empty-input/aborted-tool family.
6. **[#35863 — Hardcoded 200k context window](https://github.com/anomalyco/opencode/issues/35863)** — Context handling relies on `models.generated.js` snapshots rather than live provider metadata, causing premature auto-compaction.
7. **[#26170 — `finishReason="other"` with zero output silently persisted](https://github.com/anomalyco/opencode/issues/26170)** — Upstream truncation gets accepted as a normal step, saving half-finished assistant messages with no error or retry.
8. **[#35865 — Update xAI branding to SpaceXAI](https://github.com/anomalyco/opencode/issues/35865)** *(needs:compliance)* — xAI has been visibly rebranded; OpenCode still shows old branding while technical identifiers (`XAI_API_KEY`, `@ai-sdk/xai`) remain valid.
9. **[#26185 — Slash-command skills double-inject content + tool](https://github.com/anomalyco/opencode/issues/26185)** — `/osiris` style invocations inject SKILL.md *and* still expose the `skill` tool, doubling context and confusing smaller models (Claude Haiku 4.5).
10. **[#35825 — macOS `BrowserWindow` destroyed error](https://github.com/anomalyco/opencode/issues/35825)** — `TypeError: Object has been destroyed` in the main process, classic Electron lifecycle bug.

## Key PR Progress

1. **[#35866 — docs: update xAI branding to SpaceXAI](https://github.com/anomalyco/opencode/pull/35866)** *(needs:compliance)* — Updates visible provider labels to SpaceXAI while preserving `XAI_API_KEY`, `@ai-sdk/xai`, and `api.x.ai`. Closes [#35865](https://github.com/anomalyco/opencode/issues/35865).
2. **[#35844 — feat: add browser tool powered by browser-use](https://github.com/anomalyco/opencode/pull/35844)** — New built-in `browser` tool letting agents open pages, click, run JS, and extract content.
3. **[#35838 — fix(tool): decode webfetch bodies via iconv-lite](https://github.com/anomalyco/opencode/pull/35838)** *(Closes [#35752](https://github.com/anomalyco/opencode/issues/35752))* — Honors declared `charset` on `Content-Type` instead of forcing UTF-8, fixing `windows-1252`/`Shift_JIS` pages.
4. **[#35848 — fix(core): normalize model input capabilities](https://github.com/anomalyco/opencode/pull/35848)** *(superseded by [#35845](https://github.com/anomalyco/opencode/pull/35845))* — Defaults missing modality metadata, translates legacy `attachment`, filters unsupported inputs before provider calls.
5. **[#35850 — fix(core): resume background completions](https://github.com/anomalyco/opencode/pull/35850)** — Forces a follow-up drain when synthetic context is published and preserves wake intent on coalesced Session execution; targets the instant background-completion race.
6. **[#35857 — fix(app): increase initial message page size](https://github.com/anomalyco/opencode/pull/35857)** — Bumps the server context's initial message fetch from 2 → 20 to reduce empty state churn.
7. **[#35858 — fix(app): prevent command palette first-open flash](https://github.com/anomalyco/opencode/pull/35858)** — Eagerly loads the V2 command palette to avoid the Suspense fallback that blanks the session on first open.
8. **[#34123 — fix(tui): add plain text paste](https://github.com/anomalyco/opencode/pull/34123)** *(Closes [#34006](https://github.com/anomalyco/opencode/issues/34006))* — Adds `prompt.paste_plain` bound to `Ctrl+Alt+V`, inserting clipboard text without bracketed-paste escape sequences.
9. **[#35755 — fix(core): wait for plugin readiness](https://github.com/anomalyco/opencode/pull/35755)** *(Closes [#35752-adjacent])* — Plugin readiness barrier before V2 Session agent resolution, fail-closed with `Session.AgentNotFoundError`.
10. **[#35853 — docs: add Vestige as a local MCP memory server example](https://github.com/anomalyco/opencode/pull/35853)** *(Closes [#31402](https://github.com/anomalyco/opencode/issues/31402))* — Adds a `type: "local"` MCP example plus a feature section in MCP docs.

## Feature Request Trends

- **Archived/historical session UX** — #6680 (sidebar modal), #26172 (last-session switch keybind) point to a broader "session timeline navigation" theme.
- **Provider flexibility** — #35859 (disable CopilotAuth), #25912 (Google Vertex AI), #35855 (auto-fetch OpenAI-compatible `/v1/models`), #35865 (SpaceXAI brand sync) show strong demand for pluggable providers and adaptable branding.
- **TUI/Terminal ergonomics** — #35860 (skill/`environment` MCP schema), #35854 (hierarchical `/skill:` autocomplete), #26194 (OS context menu on right-click URLs), #26283 (Ctrl+V paste fixes), #18906 (auto-start server with Desktop).
- **Skills & context handling** — #26185 (slash-command skill deduplication), #35863 (dynamic context window resolution), #27871 (empty bash args).
- **Discovery & navigation** — #35854 (skill autocomplete), #26172 (session switching), #6680 (archived sessions).
- **Compliance/Branding** — #35865/#35866 (xAI → SpaceXAI) signals a new category as upstream vendors rebrand.

## Developer Pain Points

- **Long-running session stability on Windows** — #35847 (Bun panic + memory explosion after ~12h) and #35825 (Electron `Object has been destroyed`) indicate desktop+Bun lifecycle issues at extended uptime.
- **Database/SQLite contention under multi-instance use** — #35846 limits the safe `limit` query under ~19 entries when another OpenCode instance is live.
- **Silent provider failures / context handling** — #26170 (`finishReason="other"`), #24709 ("Bad Request" with no diagnostics), #35807 (V2 OpenAI Responses stream error after model switch), and #35863 (hardcoded 200k context) all degrade trust in long sessions.
- **Terminal/IDE integration friction** — #21108 (unscrollable VS Code/Cursor terminal), #26283 (Ctrl+V broken on Windows), #34123 (workaround PR pending).
- **Skill & tool double-execution** — #26185 shows slash-command skills duplicating context, hitting model context budgets twice and confusing weaker models.
- **Localization & docs regressions** — #17343 (broken docs search), #26157 (homepage search in non-en locales), #26176 (`%200` folder slowness), plus active PRs to bring Portuguese-BR (#35836) and Korean (#34741) to parity.
- **Internal plugins can't be disabled** — #35859 highlights how `INTERNAL_PLUGIN` compilation removes user opt-out for OAuth popups.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-08

*Data sourced from [`badlogic/pi-mono`](https://github.com/badlogic/pi-mono) — the pi coding agent monorepo.*

---

## 🔥 Today's Highlights

Pi saw heavy triage activity overnight, with maintainers closing out ~17 mostly stale issues while real work landed on TUI stability, session/harness extensibility, and provider plumbing. An open PR (#6413) now surfaces git commit/branch info when running pi straight from a checkout, and several longstanding bugs around reasoning-replay on Azure and `transformMessages` thinking-block normalization are getting fresh attention. No new tagged release shipped in the last 24h.

---

## 📦 Releases

_No new releases in the last 24 hours._

---

## 🐛 Hot Issues

1. **[#6206 — Clamping to `max_tokens` prevents artificial context limits](https://github.com/earendil-works/pi/issues/6206)** *(OPEN, 5 comments)*
   The recent fix for #5595 that clamps `max_tokens` to the model’s reported context window is correct for hard ceilings but breaks setups that intentionally set smaller limits. Worth watching — affects every provider with oversized advertised windows.

2. **[#6378 — "Nothing I can do to fix this error"](https://github.com/earendil-works/pi/issues/6378)** *(OPEN)*
   A user hitting a 400-token-overflow error with no in-product remediation path. Highlights the need for friendlier recovery hints around the context-compression plugin when limits are exceeded.

3. **[#6326 — `custom_message` entries bypass compaction `keepRecentTokens`](https://github.com/earendil-works/pi/issues/6326)** *(OPEN)*
   `custom_message` projections are sent to the LLM but aren’t accounted for during compaction budgeting. Real risk of silent context-window overruns for extension authors.

4. **[#6367 — `modelOverrides` doesn’t apply to extension-registered providers](https://github.com/earendil-works/pi/issues/6367)** *(OPEN)*
   `thinkingLevelMap` from `~/.pi/agent/models.json` is ignored for `pi.registerProvider()` providers, breaking Shift+Tab cycling. Important for extension authors building custom providers.

5. **[#6210 — `/scoped-models` can’t match IDs with brackets](https://github.com/earendil-works/pi/issues/6210)** *(OPEN)*
   Glob-style matching misreads `[` and `]` as character classes, breaking custom IDs like `custom/bracketed-model[1m]`.

6. **[#6167 — `transformMessages` × `requiresReasoningContentOnAssistantMessages` conflict](https://github.com/earendil-works/pi/issues/6167)** *(OPEN)*
   Model-switch normalization inlines thinking blocks into assistant content, but a separate compat flag expects them in a dedicated channel. Interaction causes content loss across switches.

7. **[#6409 — Azure OpenAI Responses (`store:false`) 400s on multi-turn reasoning replay](https://github.com/earendil-works/pi/issues/6409)** *(untriaged)*
   Bare `rs_*` IDs without `encrypted_content` backfill are rejected. Real-world blocker for reasoning models on Azure with ephemeral storage.

8. **[#3896 — TUI cursor stays active when terminal loses focus](https://github.com/earendil-works/pi/issues/3896)** *(CLOSED, 👍 7)*
   Long-standing UX papercut now closed. pi’s prompt cursor remained a filled block while other CLIs (Codex CLI) dim it on blur.

9. **[#6395 — README `/reload` command description is out of sync with source](https://github.com/earendil-works/pi/issues/6395)** *(OPEN)*
   README still mentions “themes” while the source actually reloads keybindings/extensions/skills/prompts. Classic doc-rot.

10. **[#5501 — Tolerate extra keys on edit tool `edits[]` items](https://github.com/earendil-works/pi/issues/5501)** *(CLOSED with fix, 11 comments)*
    Schema was too strict — models frequently emit near-duplicate keys (`newText_strip: ""`, `newText_2: ""`) after long `newText` values, breaking edits. Now resolved by relaxing `additionalProperties` on inner edits.

---

## 🔧 Key PR Progress

1. **[#6413 — feat(coding-agent): show git info in local version](https://github.com/earendil-works/pi/pull/6413)** *(OPEN)*
    Surfaces commit/branch/tag when running pi directly from a git checkout — closes #6412.

2. **[#5085 — Expose full tool definitions from `getAllTools`](https://github.com/earendil-works/pi/pull/5085)** *(CLOSED)*
    Gives extensions read-only access to canonical tool schemas, enabling `/tool`-style manual invocation UIs.

3. **[#6026 — fix(tui): stabilize working status row](https://github.com/earendil-works/pi/pull/6026)** *(CLOSED)*
    Targets flicker on the persistent "working" status indicator (ref #5825).

4. **[#5913 — Stable markdown working](https://github.com/earendil-works/pi/pull/5913)** *(CLOSED)*
    One of two competing markdown-stability PRs — closing in favor of the alternative.

5. **[#5846 — fix(tui): stabilize streaming code fence rendering](https://github.com/earendil-works/pi/pull/5846)** *(CLOSED)*
    Closes #5825 with more focused code-fence flicker fix.

6. **[#5711 — feat(coding-agent): add extension prompt guideline API](https://github.com/earendil-works/pi/pull/5711)** *(CLOSED)*
    Lets extensions register prompt guidance without monkey-patching system prompts.

7. **[#6175 — fix(coding-agent): emit session name changes to extensions](https://github.com/earendil-works/pi/pull/6175)** *(CLOSED)*
    Lifecycle hook so extensions can react to session-rename events.

8. **[#6030 — fix(coding-agent): print benchmark timings after TUI stop](https://github.com/earendil-works/pi/pull/6033)** *(CLOSED)*
    Makes `PI_STARTUP_BENCHMARK=1 PI_TIMING=1` actually emit readings after the TUI exits.

9. **[#6063 — Extension stats](https://github.com/earendil-works/pi/pull/6063)** *(CLOSED)*
    Adds tracking/telemetry API for extensions; also fixes stray OSC escape output on benchmark exits.

10. **[#5383 — docs: document commit message format](https://github.com/earendil-works/pi/pull/5383)** *(CLOSED)*
    First-pass convention guide for commit messages — useful given pi’s high PR throughput.

---

## 📈 Feature Request Trends

- **Reasoning-content plumbing**: multiple open issues (#6167, #6409) demand first-class handling for thinking blocks across `transformMessages`, model switches, and stateless provider modes.
- **First-class providers**: Eden AI (#6403) and broader OpenAI-compatible gateways are knocking — a single OpenAI-compatible adapter with model gating would absorb most of these.
- **Extension API surface expansion**: requests for more exports (`getAllTools`, `edit-diff`, `convertToPng`, CLI parser, settings factories, prompt guidelines) point to a clear "extension SDK" maturation path.
- **Session/harness ergonomics**: opaque metadata, runtime `appName` overrides (#6411), and reusable CLI harnesses (#6398) all push toward making pi embeddable as a library.
- **CLI/RPC mode hardening**: `--session-id` with an unknown id silently spawning a new session (#6407) plus a "no-session" mode for third-party launchers (#6401) indicate RPC consumers are becoming a real audience.
- **Git awareness in-flight**: display git info (#6412), commit message conventions (#5382/5383), and partial-JSON stream validation (#6284).

---

## 😤 Developer Pain Points

- **Cryptic context-window failures** with no in-product remediation (#6378, #6326) — users are left guessing.
- **Provider fragmentation**: per-provider quirks (Azure Responses store-mode, DeepInfra/Kimi-K2.7 corruption in #6399, scoped-model glob parsing in #6210, openai-responses `instructions` caching in #6240) — each fix is bespoke.
- **Extension discoverability**: config locations for installed extensions don’t match what the LLM was told in docs (#6400), and global skill paths are misresolved (#6408).
- **Filesystem/configuration frictions**: locking `auth.json` even on read-only filesystems (#6406), multi-line shell alias breakage from doc-recommended patterns (#6404).
- **TUI rendering churn**: ongoing stream-of-PRs around code-fence, markdown, and working-row stability (#5846, #5913, #6026) signal the renderer is still a moving target.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-08

## 1. Today's Highlights

A packed release cycle lands **v0.19.7** alongside a **v0.19.6-preview.0** and the **v0.19.7-nightly** build, with PR gating and review tooling hardening. Day's PR activity skews strongly toward **session-resilience fixes** (broken `parentUuid` chains, replay snapshot bounding, status-line/model drift), **SDK surface expansion** (control requests, transport/query options, working-dir for subagents), and **multi-session UX** (Fleet View, multi-workspace routing, model-toggle hotkey). Notable quality-of-life gains include a 10× large-paste speedup and webhook-triggered channel tasks for daemon deployments.

---

## 2. Releases

- **[v0.19.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.7)** — Strengthens the PR triage gate (batch detection, problem-existence checks, red-flag patterns, [#5723](https://github.com/QwenLM/qwen-code/pull/5723)) and ships review-process improvements. The new "preview" + "nightly" channel pattern continues to mature, giving adopters more deployment cadences.
- **[v0.19.6-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6-preview.0)** — Preview release; channels docs now cover **WeCom** integration ([#6490](https://github.com/QwenLM/qwen-code/pull/6490)).
- **[v0.19.7-nightly.20260708.394c1a289](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.7-nightly.20260708.394c1a289)** — Nightly snapshot reflecting the same WeCom documentation update.

---

## 3. Hot Issues

1. **[#6505 — Subagent reasoning loop can repeat identical tool calls indefinitely](https://github.com/QwenLM/qwen-code/issues/6505)** *(OPEN, P2)* — A serious reliability bug: a built-in subagent gets stuck calling the same tool with the same args, and the main agent's `LoopDetectionService` does not fire on the subagent. Multi-agent is on the roadmap, so this gap is increasingly relevant.
2. **[#6501 — Session history silently truncated when `parentUuid` chain has a missing link](https://github.com/QwenLM/qwen-code/issues/6501)** *(OPEN, P2, welcome-pr)* — Partial/failed JSONL writes can cause `SessionService.reconstructHistory` to drop entire history prefixes without warning. A "welcome PR" makes this an easy contribution target.
3. **[#6512 — Status line can show the fast model after a background subagent runs](https://github.com/QwenLM/qwen-code/issues/6512)** *(OPEN, P2)* — Content generator scope leaks into the status bar, confusing users about which model is actually serving their session.
4. **[#6507 — Deferred IDE startup can show a stale failure state after late connection success](https://github.com/QwenLM/qwen-code/issues/6507)** *(OPEN, P2, welcome-pr)* — Uncancelled connection promises leave a wrong UI state when timeout races with eventual success.
5. **[#6503 — Slash completion: recent usage overrides name-vs-alias ranking](https://github.com/QwenLM/qwen-code/issues/6503)** *(OPEN, P2)* — Regression that re-introduces a bug [#5577](https://github.com/QwenLM/qwen-code/pull/5577) was meant to fix; `/clear` matches via `reset` alias outranks `/resume`.
6. **[#6384 — `hard limit: 0` when env-configured model reserves its full default context window for output](https://github.com/QwenLM/qwen-code/issues/6384)** *(OPEN, P2, needs retesting)* — Token-management + model-switching interplay causes pre-request aborts; community flagged this as P2 and is awaiting verification of a fix.
7. **[#6401 — `ProxyAgent` does not support `NO_PROXY`](https://github.com/QwenLM/qwen-code/issues/6401)** *(CLOSED, autofix in-progress)* — `setGlobalDispatcher(new ProxyAgent(url))` ignores `no_proxy` exclusions. Now under active autofix.
8. **[#6496 — Show permission/approval-mode badge in footer for all modes including default](https://github.com/QwenLM/qwen-code/issues/6496)** *(CLOSED)* — Feature request for UX consistency: only non-default modes currently show a badge.
9. **[#2757 — 0.13.2 git-commit/push error](https://github.com/QwenLM/qwen-code/issues/2757)** *(CLOSED)* — Older bug report finally closed after months of inactivity — useful historical signal that long-tail install/runtime issues are being audited.
10. **[#4278 — Task interrupted, no auto-resume](https://github.com/QwenLM/qwen-code/issues/4278)** *(CLOSED)* — Session-management complaint resolved; reflects community pressure for more robust background-task semantics.

---

## 4. Key PR Progress

1. **[#6492 — SDK control requests: effort / models / usage / context](https://github.com/QwenLM/qwen-code/pull/6492)** — Adds `set_effort()`, `set_models()`, `set_usage()`, `set_context()` to both Python and TypeScript SDKs with matching CLI handlers, plus an `effort` option in `QueryOptions`. A major SDK capability jump.
2. **[#6502 — Bridge broken `parentUuid` chains instead of truncating](https://github.com/QwenLM/qwen-code/pull/6502)** — Direct fix for [#6501](https://github.com/QwenLM/qwen-code/issues/6501): reconstruct history by treating orphaned records as new roots, preserving prior turns instead of silently dropping them.
3. **[#6514 — Keep status line on session model](https://github.com/QwenLM/qwen-code/pull/6514)** — Locks the model display name to the active session model even when a fast model is temporarily in scope; closes the symptom side of [#6512](https://github.com/QwenLM/qwen-code/issues/6512).
4. **[#6482 — Bound replay snapshot history](https://github.com/QwenLM/qwen-code/pull/6482)** — Adds a serialized-byte cap on replay buffers; live-session loads now return only the retained window, keeping daemon memory predictable.
5. **[#6491 — Expose transport + 11 query options in both SDKs](https://github.com/QwenLM/qwen-code/pull/6491)** — Consolidates additive flags (`fork_session`, etc.) with matching CLI flags and full backward compatibility.
6. **[#6451 — Fleet View for multi-session management](https://github.com/QwenLM/qwen-code/pull/6451)** — New fullscreen TUI (trigger `← ←` within 800ms) with session status icons, search, sorting, and connection controls — the Qwen analog to Claude Code's agent view.
7. **[#6506 — Optimize large paste + progress indicator](https://github.com/QwenLM/qwen-code/pull/6506)** — Intercepts bracketed paste at the raw-stdin level, cutting ~1.7s of readline event-processing down to ~70ms for 260K-char pastes; ships a progress indicator.
8. **[#6456 — `working_dir` on the Agent tool](https://github.com/QwenLM/qwen-code/pull/6456)** — Opt-in parameter pins a sub-agent's entire file/shell context to a caller-owned git worktree; cannot escape via `cd`. Powerful for monorepo and parallel-review workflows.
9. **[#6495 — Webhook-triggered channel tasks](https://github.com/QwenLM/qwen-code/pull/6495)** — External webhooks can POST events to `qwen serve`; Qwen generates a response and the channel worker proactively delivers it back to the chat — enables true push-based automations.
10. **[#6486 — Model toggle hotkey (Alt+S / Ctrl+F)](https://github.com/QwenLM/qwen-code/pull/6486)** — Dynamic hotkey to flip between the active model and a `model.toggleModel` alternate, with header/status reflection and an info message. Complements the trend toward rapid model switching.

*Honorable mentions:* **[#6513](https://github.com/QwenLM/qwen-code/pull/6513)** auto-retries the next free port when 4170 is busy; **[#6511](https://github.com/QwenLM/qwen-code/pull/6511)** ships Phase 2a multi-workspace routing for `qwen serve`; **[#6377](https://github.com/QwenLM/qwen-code/pull/6377)** closes a self-kill escape hatch via `kill -9 $(pgrep node)`; **[#6347](https://github.com/QwenLM/qwen-code/pull/6347)** adds extension file hot-reload with `/reload-plugins`; **[#6481](https://github.com/QwenLM/qwen-code/pull/6481)** fixes release workflow crashes on missing NPM dist-tags.

---

## 5. Feature Request Trends

- **Multi-session / multi-workspace orchestration** — Fleet View ([#6451](https://github.com/QwenLM/qwen-code/pull/6451)), multi-workspace session routing ([#6511](https://github.com/QwenLM/qwen-code/pull/6511)), and webhook-triggered channels ([#6495](https://github.com/QwenLM/qwen-code/pull/6495)) form a coherent push toward orchestrating many parallel Qwen sessions from one daemon.
- **Richer SDK surface for embedding Qwen** — Two large SDK PRs ([#6492](https://github.com/QwenLM/qwen-code/pull/6492), [#6491](https://github.com/QwenLM/qwen-code/pull/6491)) add control requests and 11 query options across Python and TypeScript — a clear signal the maintainers want Qwen to be embeddable, not just a CLI.
- **Sub-agent isolation primitives** — `working_dir` pinning to a worktree ([#6456](https://github.com/QwenLM/qwen-code/pull/6456)) plus forthcoming loop-detection (gap noted in [#6505](https://github.com/QwenLM/qwen-code/issues/6505)) point to safer multi-agent composition.
- **Status/model observability** — Persistent header indicators for approval mode ([#6496](https://github.com/QwenLM/qwen-code/issues/6496)), model toggle hotkey ([#6486](https://github.com/QwenLM/qwen-code/pull/6486)), and fixed status-line behavior ([#6514](https://github.com/QwenLM/qwen-code/pull/6514)) make session state legible at a glance.
- **Extension / plugin hot-reload** — Auto-watching extension files ([#6347](https://github.com/QwenLM/qwen-code/pull/6347)) lowers the iteration cost for plugin authors.

---

## 6. Developer Pain Points

- **Session-state fragility** — Silent history truncation on broken `parentUuid` chains ([#6501](https://github.com/QwenLM/qwen-code/issues/6501)) and stale IDE-connection state ([#6507](https://github.com/QwenLM/qwen-code/issues/6507)) are the top trust issues: developers lose context without any warning.
- **Sub-agent / loop detection gaps** — [#6505](https://github.com/QwenLM/qwen-code/issues/6505) shows `LoopDetectionService` doesn't fire inside subagents, leading to runaway tool calls. Several status-line/PR fixes touch the same area, suggesting the sub-agent runtime needs a broader audit.
- **Context-window edge cases** — `hard limit: 0` from env-configured models reserving output budget ([#6384](https://github.com/QwenLM/qwen-code/issues/6384)) keeps tripping users up at the worst moment — pre-request, before any retry.
- **Proxy / network configuration friction** — `ProxyAgent` ignoring `NO_PROXY` ([#6401](https://github.com/QwenLM/qwen-code/issues/6401)) is a recurring source of pain behind corporate firewalls and proxies.
- **CLI UX regressions** — Slash-command completion ordering regression ([#6503](https://github.com/QwenLM/qwen-code/issues/6503)) and missing default-mode badge ([#6496](https://github.com/QwenLM/qwen-code/issues/6496)) indicate the rapid iteration cadence is occasionally introducing small but visible regressions.
- **Long-tail install/runtime bugs** — Older issues like [#2757](https://github.com/QwenLM/qwen-code/issues/2757) and [#3845](https://github.com/QwenLM/qwen-code/issues/3845) only just closed, suggesting first-run friction persists far longer than it should.
- **Port collisions for local daemons** — Hardcoded port 4170 prompted [#6513](https://github.com/QwenLM/qwen-code/pull/6513); common developer complaint when running multiple `qwen serve` instances.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-08

## 1. Today's Highlights

The project continues its **rebrand to "CodeWhale"** while pushing hard on the v0.8.68 stopship milestone, with **stopship/UX bugs in Fleet, sub-agent panels, and Ctrl+C handling** all landing fixes in the last 24 hours. The emerging **v0.8.69 roadmap centers on "test-time compute"** — a model-decided `verify/critique` tool plus auto-review gates, foreshadowing a more autonomous review loop. Underneath, **v0.9.0 WhaleFlow** (branch/leaf workflow runtime) is getting a real Rust async executor and CI to replace the long-standing `MockWorkflowExecutor`.

## 2. Releases

**v0.8.67** shipped. Headline item: **`CodeWhale` is now the canonical project, command, npm package, and release-asset name**. The legacy `deepseek-tui` npm package is deprecated and receives no further releases; users on v0.8.x legacy names should migrate via `docs/REBRAND.md`. ([release notes](https://github.com/Hmbown/DeepSeek-TUI))

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|---|---|
| [#4092](https://github.com/Hmbown/CodeWhale/issues/4092) | **v0.8.68 execution board: lane order, dependencies, and agent protocol** (open) | The canonical entry point for any agent working the v0.8.68 milestone — 13 comments, with `lane-*` labels now driving lane queries. Defines the agent working contract for the release. |
| [#3144](https://github.com/Hmbown/CodeWhale/issues/3144) | **Add natural-language auto-review policy and a pre-push review gate** (closed, 14 comments) | Codifies the Cursor-style "middle ground" between manual approvals and unchecked autonomy; sets up v0.8.69's verify-tool direction. |
| [#4093](https://github.com/Hmbown/CodeWhale/issues/4093) | **Fleet setup modal is provider-scoped instead of a role/profile roster editor** (closed) | Release blocker — Fleet setup couldn't reliably assign model routes to worker profiles across providers. Headline cross-provider Fleet fix. |
| [#4094](https://github.com/Hmbown/CodeWhale/issues/4094) | **Sub-agent detail panel is empty and can freeze the TUI** (closed) | Live dogfood surfaced a blank panel and a TUI freeze — now fixed with state coverage + artifact handles. |
| [#4090](https://github.com/Hmbown/CodeWhale/issues/4090) | **Repeated Ctrl+C re-prompts instead of exiting in PTY/raw-mode path** (closed) | Stop ship for v0.8.68 — raw-mode double Ctrl+C was re-arming the quit prompt instead of exiting. |
| [#4196](https://github.com/Hmbown/CodeWhale/issues/4196) | **Agent-callable verify/critique tool** (open) | The model-decided version of multi-pass review — extra test-time compute when the agent judges warranted. Implementation planned for v0.8.69. |
| [#4137](https://github.com/Hmbown/CodeWhale/issues/4137) | **Let Fleet profiles save provider, model, and thinking effort** (open) | Extends Fleet profiles from "name only" to a full route, enabling reproducible worker setups. |
| [#4185](https://github.com/Hmbown/CodeWhale/issues/4185) | **Accept current live Models.dev schema in the catalog parser** (closed) | Live `models.dev` sent `interleaved` as both bool *and* object — parser was failing before catalog could become source of truth. |
| [#4195](https://github.com/Hmbown/CodeWhale/issues/4195) | **Un-cap the Low reasoning default for sub-agents** (closed) | `auto_reasoning.rs` was hard-capping *all* sub-agents to `ReasoningEffort::Low`, hurting hard work. Adds a per-Fleet-role tier. |
| [#2261](https://github.com/Hmbown/CodeWhale/issues/2261) | **TUI: process crash leaks input to PowerShell** (closed, 6 comments) | Windows-specific crash where TUI input fell through to the host shell — a longstanding data-integrity hazard. |
| [#1835](https://github.com/Hmbown/CodeWhale/issues/1835) | **Windows IME composition event deadlock** (closed, 👍1) | Chinese IME (Sogou) users got fully unresponsive input on Windows; a key international-user fix. |

## 4. Key PR Progress

| PR | What It Does |
|---|---|
| [#4199](https://github.com/Hmbown/CodeWhale/pull/4199) | **feat(tools): verify/critique tool** — agent-callable adversarial self-review with elevated reasoning + independent critic. Open, implementation of #4196. |
| [#4201](https://github.com/Hmbown/CodeWhale/pull/4201) | **docs: test-time-compute design** — `docs/TTC_DESIGN.md` codifying 3-way consensus (verify-tool contributor + GLM 5.2 + internal). Design only, ships behind v0.8.68 stopship. |
| [#4198](https://github.com/Hmbown/CodeWhale/pull/4198) | **fix(fleet): honor profile-pinned provider on in-process TUI spawn** — completes the interactive-TUI half of #4093. Merged. |
| [#4197](https://github.com/Hmbown/CodeWhale/pull/4197) | **fix(tui): complete sub-agent detail panel state coverage + artifact handles** — closes #4094. Single-file change to `sidebar.rs`. |
| [#4200](https://github.com/Hmbown/CodeWhale/pull/4200) | **fix(providers): Fireworks/Together metadata + Models.dev id normalization** — bounded provider-correctness pass; merged. |
| [#4191](https://github.com/Hmbown/CodeWhale/pull/4191) | **fix(catalog): accept current live Models.dev schema** — handles both `interleaved` shapes from `models.dev`; merged. |
| [#4192](https://github.com/Hmbown/CodeWhale/pull/4192) | **fix(tui): transcript copy polish batch** — covers #4142/#4143/#4144/#4145; merged. |
| [#4182](https://github.com/Hmbown/CodeWhale/pull/4182) | **fix(tui): populate sub-agent detail panel with live activity** — live trail, tool-call status, final handoff, bounded history; merged. |
| [#4181](https://github.com/Hmbown/CodeWhale/pull/4181) | **fix(tui): Fleet setup role/profile roster editor** — headline cross-provider Fleet fix for the headless CLI path; merged. |
| [#4180](https://github.com/Hmbown/CodeWhale/pull/4180) | **fix(tui): normalize raw Ctrl+C byte for PTY quit-arm flow** — closes #4090; merged. |

## 5. Feature Request Trends

- **Model-decided test-time compute** — the dominant new direction. Verify/critique tools, configurable per-role reasoning effort (#4195), and pre-push review gates (#3144) all push toward the agent *choosing* to spend extra compute on self-review. ([#4196](https://github.com/Hmbown/CodeWhale/issues/4196), [#3144](https://github.com/Hmbown/CodeWhale/issues/3144))
- **Fleet as a first-class role/profile roster** — Fleet workers need provider+model+thinking pinned per profile, with a proper editor UI rather than a provider picker. ([#4137](https://github.com/Hmbown/CodeWhale/issues/4137), [#4093](https://github.com/Hmbown/CodeWhale/issues/4093))
- **Provider catalog & model routing** — accept live `models.dev` as source of truth, normalize Fireworks/Together metadata, document `provider = vllm` vs `openai`. ([#4185](https://github.com/Hmbown/CodeWhale/issues/4185), [#4200](https://github.com/Hmbown/CodeWhale/pull/4200), [#2300](https://github.com/Hmbown/CodeWhale/issues/2300))
- **Async workflow runtime (WhaleFlow)** — replace `MockWorkflowExecutor` with a real Rust async executor, add CI, pod-style TUI monitoring, and TeacherReview→StudentReplay→PromotionGate. ([#2973](https://github.com/Hmbown/CodeWhale/issues/2973), [#2976](https://github.com/Hmbown/CodeWhale/issues/2976), [#2979](https://github.com/Hmbown/CodeWhale/issues/2979), [#2980](https://github.com/Hmbown/CodeWhale/issues/2980))
- **Agent delegation heuristics** — auto-detect when parent work should hand off to scouts/RLM rather than bloat the parent transcript. ([#2024](https://github.com/Hmbown/CodeWhale/issues/2024), [#2023](https://github.com/Hmbown/CodeWhale/issues/2023))
- **Async "send later"** — let the agent schedule a future message back into the same work context, à la Claude Code Remote. ([#4190](https://github.com/Hmbown/CodeWhale/issues/4190))

## 6. Developer Pain Points

- **Windows TUI input fragility** — a recurring cluster: focus loss after AI replies leaks keystrokes to PowerShell ([#2261](https://github.com/Hmbown/CodeWhale/issues/2261)), IME composition deadlocks with Chinese input methods ([#1835](https://github.com/Hmbown/CodeWhale/issues/1835)), and a separate mouse-report input leak on macOS. Windows/IME users have been the loudest constituency.
- **TTY/PTY state machines are brittle** — raw-mode Ctrl+C re-armed instead of exiting ([#4090](https://github.com/Hmbown/CodeWhale/issues/4090)), TUI sub-agent panels rendering blank or freezing ([#4094](https://github.com/Hmbown/CodeWhale/issues/4094)). Most dogfood pain shows up at the I/O boundary first.
- **Fleet setup did not match mental model** — users expected a role/profile roster editor; got a provider-scoped model picker, breaking cross-provider workflow. ([#4093](https://github.com/Hmbown/CodeWhale/issues/4093))
- **Cross-provider model identity is leaky** — Fireworks/Together metadata and `models.dev` schema mismatches broke the catalog chain end-to-end. ([#4185](https://github.com/Hmbown/CodeWhale/issues/4185), [#4200](https://github.com/Hmbown/CodeWhale/pull/4200))
- **Reasoning defaults punish hard work** — hard-coded `Low` reasoning on every sub-agent underperforms exactly where depth matters; users want a per-Fleet-role tier. ([#4195](https://github.com/Hmbown/CodeWhale/issues/4195))
- **Rebrand migration friction** — `CodeWhale` is now canonical; legacy `deepseek-tui`/`deepseek` users must follow `docs/REBRAND.md`. ([v0.8.67 release](https://github.com/Hmbown/DeepSeek-TUI))
- **UI copy duplication** — six near-identical setup hints and redundant mode-picker chrome add visual noise; now being consolidated. ([#4144](https://github.com/Hmbown/CodeWhale/issues/4144), [#4143](https://github.com/Hmbown/CodeWhale/issues/4143))

</details>