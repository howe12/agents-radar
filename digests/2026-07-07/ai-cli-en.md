# AI CLI Tools Community Digest 2026-07-07

> Generated: 2026-07-07 03:56 UTC | Tools covered: 9

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

# AI CLI Developer Tools Ecosystem — Cross-Tool Comparison Report
**Date:** 2026-07-07

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing a pronounced tension between rapidly growing feature surface area and fundamental reliability regressions. Across all seven tools surveyed—Claude Code, Codex CLI, Gemini CLI, Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, and DeepSeek TUI—the dominant community frustrations center on **rate-limit unpredictability**, **subagent reliability failures**, **cross-platform compatibility gaps**, and **silent configuration regressions**. While each tool pursues distinct architectural philosophies—from Anthropic's workflow-orchestration approach to Google's sandbox-first security model and OpenAI's thread-lifecycle engineering—all are converging on similar solutions for agent orchestration, MCP ecosystem integration, and usage transparency. The pace of iteration remains high, with multiple nightly releases and substantial PR pipelines, but the volume of regressions suggests that quality assurance infrastructure has not kept pace with feature velocity.

---

## 2. Activity Comparison

| Tool | Open Issues | PRs Today | Release Status | Key Note |
|------|------------|-----------|----------------|----------|
| **Claude Code** | ~10 high-profile | 3 | v2.1.202 shipped | 48-comment bug #33969 dominates |
| **Codex CLI** | ~10 critical | 9 | `rust-v0.143.0-alpha.37` | Rate-limit crisis; 6 canonical-emission PRs |
| **Gemini CLI** | 10 selected | 10 | v0.51.0-nightly | 7 of 10 PRs closed; strong velocity |
| **Copilot CLI** | 10 | 0 | v1.0.69-2 | Quiet day; configuration gaps persist |
| **Kimi Code** | 2 | 0 | No release | Quietest; Windows display corruption reported |
| **OpenCode** | ~10 | 10 | v1.17.14 shipped | Durable compaction barrier merged |
| **Pi** | ~10 | 10 | 0.80.3 (no update) | 9 closed PRs; constrained sampling PR open |
| **Qwen Code** | 10 | 10 | v0.19.6-nightly | Multi-workspace RFC (19 comments) |
| **DeepSeek TUI** | 10 | 10 | v0.8.67 merged | 78 commits in release; pivoted to v0.8.68 |

**Observations:**
- **Codex CLI** and **Gemini CLI** have the highest PR velocity today (9-10 each), reflecting active engineering investment.
- **Kimi Code** and **Copilot CLI** show minimal daily activity, suggesting either slower iteration cycles or maintenance-phase focus.
- **Claude Code**'s single issue (#33969) with 48 comments signals a community coordination problem that may require escalation.
- **DeepSeek TUI**'s structured v0.8.67 → v0.8.68 pipeline demonstrates disciplined release engineering.

---

## 3. Shared Feature Directions

| Requirement | Tools Reporting | Specific Ask |
|-------------|----------------|--------------|
| **Per-turn tool call limits** | Claude Code (#33969), Gemini CLI (#22323) | Regressions silently capping agentic workflows; community demanding configurable limits |
| **Rate-limit / usage transparency** | Codex CLI (#31345, #31322), Kimi Code (#2486), OpenCode (#15903) | Real-time token cost breakdowns, dashboard integration, ACP protocol exposure |
| **Subagent model routing** | Claude Code (#43869), Gemini CLI (#22093), DeepSeek TUI (#3969) | Per-subagent provider/model assignment; broken routing defaults to expensive models |
| **Authentication state persistence** | Copilot CLI (#3596), Qwen Code (#6414) | Session resume loses auth; force restarts |
| **Cross-platform Windows parity** | Copilot CLI (#4001), Gemini CLI (implicit), Qwen Code (#6298), Kimi Code (#2485) | Hook execution, shell tooling, display corruption |
| **MCP granular permissions** | Claude Code (#74857), Copilot CLI (#3028), DeepSeek TUI (#4027) | Tool-level allow/deny, deferred loading opt-out |
| **Large file / PDF handling** | Qwen Code (#6403, #6408) | Bounded reads, page-range extraction; context overflow prevention |
| **Session handoff / checkpointing** | Claude Code (#66373), Codex CLI (feature request trend) | Local→cloud transfer; crash recovery without replay |
| **Memory isolation** | Copilot CLI (#3945), Gemini CLI (#26522) | Cross-repo contamination; low-signal retry loops |
| **Token economy predictability** | Qwen Code (#6264), Gemini CLI (#24246) | `/review` overspend; hard limits on model switch |

**Pattern:** The ecosystem is converging on **agent lifecycle management** (subagent routing, checkpointing, permissions) and **economic transparency** (rate limits, token costs) as the two most pressing shared challenges. No tool has solved either satisfactorily.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex CLI | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|-----------|------------|-------------|----------|-----|-----------|--------------|
| **Primary innovation** | Dynamic workflow sizing, OpenTelemetry attributes | Canonical TurnItem lifecycle, thread-safety stack | Sandbox security hardening, thought-leakage scrubbing | MCP OAuth callback flow, plugin distribution | Durable compaction barrier, code mode MCP adapter | Constrained sampling, provider extension hooks | Multi-workspace daemon, slash-skill composability | Staged command-boundary refactor, git workspace snapshots |
| **Target user** | Enterprise agentic workflows | Rate-limited power users | Security-conscious developers | GitHub ecosystem developers | Plugin extensibility enthusiasts | Provider-agnostic power users | Qwen model ecosystem users | DeepSeek model ecosystem users |
| **Platform strength** | MCP/SSH agent workflows | Intel macOS (SIGTRAP weakness) | macOS sandbox, Wayland weakness | GitHub integration | Cross-platform (WSL weakness) | Provider compatibility breadth | Windows (improving) | macOS (Dropbox sandbox issue) |
| **Community size signal** | 48 comments on top issue | 14 comments on #21211 | 10 comments on #22323 | 18 👍 on #1665 | 22 👍 on #15903 | 9 comments on #6234 | 19 comments on #6378 | 22 comments on #4032 |
| **Release cadence** | Monthly | Alpha/nightly | Nightly | Patch | Feature | Feature | Nightly | Structured sprints |

**Key Differentiators:**
- **Codex CLI** leads on **thread-safety engineering** (6 canonical-emission PRs) but suffers most from **rate-limit trust erosion**.
- **Gemini CLI** is furthest along on **security hardening** (sandbox, thought scrubbing, SIGINT cancellation) but has weakest **agent orchestration** (#21409 hangs).
- **Claude Code** has the most **enterprise-oriented feature set** (dynamic workflows, telemetry) but the most **community frustration** (#33969, #68780).
- **Pi** leads on **provider compatibility** (Requesty, NVIDIA NIM, GLM) and **extension hooks** (before_provider_headers).
- **DeepSeek TUI** demonstrates the most **disciplined release engineering** (structured tracker → release → next-sprint pipeline).

---

## 5. Community Momentum & Maturity

**High Momentum (rapid iteration, active community):**
- **Codex CLI**: 9 PRs today, deepest thread-safety engineering, but rate-limit crisis threatening user trust.
- **Gemini CLI**: 10 PRs, 7 closed today, nightly releases—strong velocity but agent reliability issues are chronic.
- **Pi**: 9 closed PRs today, core contributor mitsuhiko driving constrained sampling—growing extension ecosystem.
- **DeepSeek TUI**: 78 commits in v0.8.67, structured v0.8.68 planning—best release process in the ecosystem.

**Moderate Momentum (stable but slower iteration):**
- **Claude Code**: High community engagement (48 comments) but low PR velocity (3) and unresolved regressions suggest maintenance burden.
- **OpenCode**: v1.17.14 shipped, 10 PRs—healthy but fewer community pain-point signals.
- **Qwen Code**: Strong RFC discussion (19 comments on #6378) and 10 PRs—architectural thinking but early-stage.

**Low Momentum (quiet, likely maintenance):**
- **Copilot CLI**: Zero PRs today, configuration gaps unaddressed—may be in stabilization phase.
- **Kimi Code**: Only 2 issues, no PRs—smallest community, potential risk of stagnation.

**Maturity Signals:**
- **DeepSeek TUI** has the most mature release pipeline (tracker → issue-driven work → structured PRs per sprint).
- **Pi** has the strongest contributor diversity (mitsuhiko external PRs, multiple provider support).
- **Claude Code** has the most complex feature surface but the highest regression rate—maturity of a product scaling faster than its QA.

---

## 6. Trend Signals

### Tier 1: Immediately Actionable (for developers)

1. **Rate-limit transparency is table stakes.** Codex CLI's crisis (#31322, #31345) and Kimi Code's ACP request (#2486) confirm that users will not tolerate opaque consumption. Expect all tools to add per-request cost breakdowns within 2-3 releases.

2. **Subagent reliability is the #1 agentic workflow blocker.** Claude Code (#43869), Gemini CLI (#22323, #21409), and DeepSeek TUI (#4050) all report false-positive goal completion, indefinite hangs, and silent failures. This is the ecosystem's most damaging gap for production use.

3. **Windows parity is a competitive differentiator.** Qwen Code (#6298, #6334), Copilot CLI (#4001), and Kimi Code (#2485) all show Windows-specific breakage. The tool that solves cross-platform shell execution (no `cat` dependency, PowerShell hooks) gains enterprise Windows share.

### Tier 2: Strategic (for tool builders)

4. **MCP ecosystem integration is accelerating but fragmenting.** Claude Code adds OpenTelemetry attributes, Copilot CLI adds OAuth callbacks, DeepSeek TUI proposes `always_load`, Pi adds before_provider_headers. The lack of a shared MCP client schema risks ecosystem fragmentation.

5. **Session checkpointing and handoff are becoming expected.** Claude Code's teleport-inverse request (#66373) and Codex CLI's implicit checkpointing need point to a future where AI CLI sessions are portable across environments—critical for hybrid local/cloud workflows.

6. **Thought and state leakage is a security red line.** Gemini CLI's thought-scrubbing PR (#27971) and Claude Code's UTF-8 surrogate error (#69781) suggest model output sanitization is underinvested. Expect regulatory attention (EU legal threat in #68780).

### Tier 3: Emerging (watchlist)

7. **Constrained sampling for tool arguments** (Pi PR #6341) could become a standard for enforcing tool-call schema compliance across providers—reducing hallucination rates in tool execution.

8. **Multi-workspace daemon architectures** (Qwen Code RFC #6378) and **environment-level sandboxing** (DeepSeek TUI #4042) point to a future where a single daemon serves multiple isolated workspaces with separate memory, tools, and authentication—mirroring IDE workspace models.

9. **Auto-retry for deferred MCP tools** (DeepSeek TUI PR #4074) and **bounded file reads** (Qwen Code #6404) are low-hanging UX improvements that every tool should adopt: reduce first-call latency and prevent context overflow from large documents.

10. **The "constitution" problem** (DeepSeek TUI #4032) and **agent non-compliance** are emerging as trust issues akin to "model hallucination" but at the orchestration layer. Agents that ignore user-provided scripts or override permissions will face growing community backlash.

---

**Bottom Line for Decision-Makers:**

- **For adoption today:** Pi and DeepSeek TUI offer the best stability-to-feature ratio, with disciplined engineering and growing ecosystems.
- **For enterprise deployment:** Claude Code has the richest feature set but requires accepting regressions and unresolved rate-limit transparency.
- **For ecosystem investment:** Codex CLI's rate-limit crisis is a short-term risk, but its thread-safety engineering is the most forward-looking in the ecosystem.
- **For tool builders:** Prioritize subagent reliability, Windows parity, and usage transparency—these are the cross-cutting pain points that no tool has solved, and the market will reward the first to get them right.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the `anthropics/skills` repository, based on the provided data.

---

### Claude Code Skills Community Highlights Report (Data as of 2026-07-07)

#### 1. Top Skills Ranking (by Discussion & Attention)

The following Pull Requests represent the most actively discussed and impactful Skill submissions.

1.  **fix(skill-creator): run_eval.py always reports 0% recall**
    - **Functionality:** A critical fix for the `skill-creator` meta-skill. The `run_eval.py` script, which validates how well a skill's description triggers Claude, was returning 0% recall for all tests, rendering the entire skill optimization loop ineffective. This PR addresses the root cause.
    - **Highlights:** The most commented-on PR (#1298), referencing a community-reported critical bug (#556). The discussion centers on a fundamental flaw in the skill development pipeline. Multiple related fixes (#1099, #1050, #1323, #362) indicate this is the highest-priority technical debt in the ecosystem.
    - **Status:** **Open**

2.  **fix(pdf): correct case-sensitive file references in SKILL.md**
    - **Functionality:** A straightforward but essential fix for the `pdf` skill. It corrects 8 case-sensitivity mismatches in file references (e.g., `REFERENCE.md` -> `reference.md`), which broke the skill on Linux and macOS.
    - **Highlights:** High comment volume for a simple fix, likely because it affects a popular core skill and highlights the need for cross-platform testing.
    - **Status:** **Open**

3.  **fix(docx): prevent tracked change w:id collision with existing bookmarks**
    - **Functionality:** A fix for the `docx` skill that prevents document corruption when adding tracked changes to files that already contain bookmarks. The root cause was using hardcoded, low `w:id` values that conflicted with existing ones.
    - **Highlights:** Focused on a specific, high-impact bug in document generation. The deep OOXML knowledge required demonstrates the complexity of maintaining robust file-format skills. See also PR #538.
    - **Status:** **Open**

4.  **Add document-typography skill: typographic quality control for generated documents**
    - **Functionality:** A quality-of-life skill that prevents common typographic errors in AI-generated documents, such as orphaned words, widow paragraphs, and numbering misalignment.
    - **Highlights:** Addresses a universal and subtle pain point in AI text output. The proposition is that it fixes issues users rarely explicitly request but immediately notice, making it a high-value "quality gate" skill.
    - **Status:** **Open**

5.  **Add ODT skill — OpenDocument text creation and template filling**
    - **Functionality:** Extends Claude's document capabilities to the OpenDocument Format (.odt, .ods), enabling creation, template filling, parsing, and conversion to HTML. This provides a native open-source alternative to the existing DOCX/PDF skills.
    - **Highlights:** A response to demand for LibreOffice and ISO standard document support. The extensive coverage (create, fill, read, convert) suggests this is a comprehensive community effort to bridge a key format gap.
    - **Status:** **Open**

6.  **fix(skill-creator): warn on unquoted description with YAML special characters**
    - **Functionality:** A pre-parse validation fix for the `skill-creator` tool. It detects unquoted `description` fields containing characters like `:` that cause YAML parsing to fail silently, leading to corrupted skill configurations (see also PR #361).
    - **Highlights:** Tied to the broader effort to stabilize the `skill-creator` tooling. Shows deep engagement with the developer experience for creating new skills.
    - **Status:** **Open**

7.  **Improve frontend-design skill clarity and actionability**
    - **Functionality:** A revision of the existing `frontend-design` skill to make instructions more concrete and action-oriented, ensuring Claude can follow them effectively within a single conversation.
    - **Highlights:** Reflects a community effort to refine existing skills for better real-world performance. The focus on "actionability" and "single conversation" execution is a key heuristic in the skills design philosophy.
    - **Status:** **Open**

#### 2. Community Demand Trends

Analysis of the most active Issues reveals the following key demand vectors:

- **Skill Development Tooling Stability (Critical):** The most vocal demand is for a reliable and cross-platform `skill-creator`. Issues #556, #1169, and #1061 document a core pipeline problem where the evaluation and optimization loop (`run_eval.py`, `run_loop.py`) fails to detect skill triggers, reporting 0% recall. This is a hard blocker for any serious skill development, especially on Windows.
- **Security & Trust Boundaries:** Issue #492 raises a significant security concern regarding community skills distributed under the `anthropic/` namespace, which could trick users into granting elevated permissions. This suggests a demand for a clear trust framework and naming convention for official vs. community contributions.
- **Enterprise & Organizational Features:** Issue #228 requests organizational skill sharing within Claude.ai, highlighting demand from professional teams for administrative controls and convenient distribution, moving beyond the current manual file-transfer workflow.
- **Diverse Skill Ecosystem Expansion:** There is clear demand for skills in specialized domains: agent governance and safety patterns (#412), compact symbolic notation for agent memory (#1329), and integration with cloud services like AWS Bedrock (#29).

#### 3. High-Potential Pending Skills

These feature-rich PRs are actively discussed and may be merged soon to enrich the ecosystem:

- **Add testing-patterns skill** (PR #723): A comprehensive skill covering the full testing stack, from philosophy (Testing Trophy) to specific practices for unit, React, and E2E tests. This directly addresses the need for a structured code review and testing skill.
- **feat: add sensory skill — native macOS automation via AppleScript** (PR #806): A skill that teaches Claude to use `osascript` for native macOS automation, bypassing screenshot-based interaction. This is a high-potential skill for power users on macOS.
- **Add color-expert skill** (PR #1302): A specialized skill providing deep knowledge of color systems (ISCC-NBS, Munsell, OKLCH) and spaces. Targets a niche but demanding user base in design and data visualization.
- **Add skill-quality-analyzer and skill-security-analyzer to marketplace** (PR #83): Meta-skills designed to evaluate and secure other skills. This signals the community's maturity, creating tools for quality assurance and security auditing within the ecosystem itself.

#### 4. Skills Ecosystem Insight

The community's most concentrated demand is to **stabilize and professionalize the skill development toolchain** (specifically fixing the `skill-creator`'s evaluation loop), as this foundational issue blocks the creation, testing, and optimization of all other community skills.

---

# Claude Code Community Digest — 2026-07-07

## Today's Highlights

An unusually high volume of **cybersecurity safety-filter false positives** flooded the issue tracker today, with a single reporter (sworrl) filing over a dozen nearly identical blocks on legitimate rooted-device development work. Meanwhile, a long-running **per-turn tool call limit regression** (#33969) continues to be the most-discussed bug at 48 comments, and a new release v2.1.202 ships a "Dynamic workflow size" setting that gives users advisory control over agent counts.

## Releases

**v2.1.202** — [Release Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.202)
- Added a **"Dynamic workflow size"** setting in `/config` for controlling how large Claude generally makes dynamic workflows (small/medium/large agent counts). This is an advisory guideline, not an enforced cap.
- Added `workflow.run_id` and `workflow.name` **OpenTelemetry attributes** to telemetry for better observability.

## Hot Issues

1. **#33969 — Per-Turn Tool Call Limit Regression Breaks Agentic MCP/SSH Workflows** — [Link](https://github.com/anthropics/claude-code/issues/33969)
   *48 comments · 44 👍* — The top-voted open bug. Users report that a silently introduced per-turn tool call cap is breaking long-running MCP and SSH agent workflows. Persistent community frustration over lack of acknowledgment.

2. **#71542 — GitHub Connector Links Repos but Can't Access Content** — [Link](https://github.com/anthropics/claude-code/issues/71542)
   *30 comments · 20 👍* — A recent regression where the GitHub connector authenticates successfully but returns zero content for any repository (public or private). Still open with no fix confirmed.

3. **#68780 — Opus 4.8 Reasoning & Speed Degradation** — [Link](https://github.com/anthropics/claude-code/issues/68780)
   *23 comments · 28 👍* — Users allege severe reasoning degradation on Opus 4.8 even at max effort. One reporter threatens EU legal action, citing "deceptive business practices."

4. **#54394 — Ugrep Wrapper Amplifies Regex Backtracking into OOM** — [Link](https://github.com/anthropics/claude-code/issues/54394)
   *13 comments* — v2.1.117's embedded ugrep replacement routes every `grep` through the Claude process, causing regex backtracking on the host to balloon into an 8 GB V8 heap OOM that freezes WSL2 entirely.

5. **#43869 — Subagent Model Routing Broken — All Mechanisms Resolve to Opus** — [Link](https://github.com/anthropics/claude-code/issues/43869)
   *10 comments · 11 👍* — Users report that every documented method for routing subagents to cheaper models (e.g., Sonnet) is silently ignored. Subagents always consume expensive Opus tokens.

6. **#51168 — Pro Annual Plan Changed to Max Monthly Without Authorization** — [Link](https://github.com/anthropics/claude-code/issues/51168)
   *17 comments* — A billing issue where users report unauthorized plan migrations from Pro annual to Max monthly, with unsolicited "Gift Max 20X/5X" invoices generated on their accounts.

7. **#74122 — TUI Renders Garbled Inside tmux (Regression in 2.1.200)** — [Link](https://github.com/anthropics/claude-code/issues/74122)
   *2 comments* — A clean and frustrating regression: the TUI only repaints on forced redraws (pane switches, resizes) since the last release. Last good version was 2.1.199.

8. **#63025 — SSH Remote: `projects` Field Nulled After Restart** — [Link](https://github.com/anthropics/claude-code/issues/63025)
   *4 comments · 5 👍* — Desktop restart while connected via SSH Remote nulls out the `projects` field in `~/.claude.json`, causing every session to show "No messages yet" despite intact `.jsonl` transaction logs.

9. **#69781 — Image Attach Fails with UTF-8 Surrogate Error** — [Link](https://github.com/anthropics/claude-code/issues/69781)
   *6 comments · 2 👍* — Attaching or pasting images returns a 400 error claiming invalid UTF-8 surrogates. Blocks vision-related workflows entirely.

10. **#75090 — Permission Prompts Cause Focus Theft & Silent File Corruption in IDE** — [Link](https://github.com/anthropics/claude-code/issues/75090)
    *1 comment* — Claude Code's permission prompts in JetBrains IDEs steal keyboard focus and, in reported cases, cause silent file corruption when the prompt intercepts save operations mid-edit.

## Key PR Progress

1. **#41453 — Safe Stop Hook Wrapper with PID Lock and Timeout** — [Link](https://github.com/anthropics/claude-code/pull/41453)
   *Open · 0 comments* — Adds an example Python implementation for running post-session background tasks from Stop hooks without runaway processes (addresses issue #41393).

2. **#74722 — Conventional Branch Naming in `/commit-push-pr`** — [Link](https://github.com/anthropics/claude-code/pull/74722)
   *Open · 0 comments* — Adds an optional `conventional` argument to `/commit-push-pr` that auto-names branches per the Conventional Branch 1.0.0 spec, inferring type from commit diffs.

3. **#74857 — Clarify Plugin MCP Configuration Scope** — [Link](https://github.com/anthropics/claude-code/pull/74857)
   *Closed (merged)* — Documentation fix clarifying that plugin `mcpServers` config is separate from user-level MCP allow/deny lists in `~/.claude.json`. Reduces configuration confusion.

## Feature Request Trends

- **`/reloadSettings` Command** (#5513, 118 👍): The long-running highest-voted feature request. Users desperately want to reload `settings.json` without restarting the entire Claude Code process — over a year since filing, still unimplemented.
- **Session Handoff: Local → Cloud** (#66373): Request for a CLI command to transfer a running local session to the web UI (inverse of `--teleport`), enabling seamless context migration between environments.
- **Branch Naming Conventions**: PR #74722's Conventional Branch support signals growing demand for opinionated git workflow automation built into `/commit-push-pr` and related commands.

## Developer Pain Points

- **Safety Filter Overreach**: A major theme today — user sworrl filed 12+ nearly identical issues reporting that the cybersecurity safety filter (targeting `crypto-secrets` and `general` domains) is blocking entirely legitimate rooted-device development, memory debugging, and routine repo audits. All marked `duplicate` or left open, suggesting a systemic false-positive problem with no fix in sight.
- **Model Routing Broken**: Issue #43869 highlights that subagent model routing is completely broken — users paying for Opus cannot offload work to Sonnet subagents despite documented mechanisms.
- **Session State Corruption**: Two separate reports (#63025 and #74350) describe sessions stuck in "Running" state or having their project metadata nulled out on restart — both causing data-display issues with no data loss but significant workflow disruption.
- **TUI Quality Regressions**: Issue #74122's tmux rendering regression is the second recent TUI regression, indicating insufficient testing of terminal emulator edge cases before release.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-07

## Today's Highlights

A major rate-limiting reliability crisis dominates today's digest, with multiple reports of usage limits depleting 5x faster than normal, infinite auto-compaction loops consuming ~30% of quotas, and forked sessions incorrectly double-counting token usage. On the engineering side, a coordinated push toward canonical `TurnItem` lifecycle emissions across collaboration tools, sub-agents, and command execution reached critical mass with six related PRs open for review. Additionally, a system proxy support PR was reviewed and merged for the Responses API pathway, addressing a long-standing gap for enterprise users behind OS-managed proxies.

## Releases

**`rust-v0.143.0-alpha.37`** — Latest pre-release. No changelog details provided in the commit. Likely a nightly build.

## Hot Issues

1. **[#31345 — 5h limits totally broken](https://github.com/openai/codex/issues/31345)**
   A Plus plan user reports hitting their 5-hour cap "multiple mornings now on very light work" using version 5.4, with chart data showing usage far below the same thresholds on previous days. This is the clearest single-user evidence that the recent normalization regressed. Community upvote count is low due to recency, but it echoes a growing chorus.

2. **[#31322 — Usage limits normalized this morning but regressed by evening, draining ~5x faster again](https://github.com/openai/codex/issues/31322)**
   A deeply detailed report from a user who tracked the exact timeline: morning normalization on July 6, then regression by evening with 5x accelerated drain. This is the most actionable bug report of the day, including a prior feedback ID (`019eaf5c-26e2-79a0-b678-ffa25afc0863`) and graph data. This is likely the highest-priority incident for the rate-limits team.

3. **[#31351 — Codex App entered an infinite auto-compaction loop and consumed ~30% of my usage limit](https://github.com/openai/codex/issues/31351)**
   A Windows user on Pro X20 reports that the app entered an infinite loop of automatic context compaction, burning through ~30% of their daily usage allocation with zero productive output. This is a new variant of the usage-drain class: not just rate-limit calibration but an algorithmic bug that wastes budget on internal work.

4. **[#31346 — Forked thread token monitor over-accumulates usage after fork](https://github.com/openai/codex/issues/31346)**
   Closed today after a single comment, but the pattern is critical: forking a thread with existing token history causes the monitor to inflate usage far beyond the actual follow-up turns. If this is a systemic counting error, it could explain why heavy forking users are hitting caps disproportionately.

5. **[#21211 — Thread navigation/loading slows from unbounded metadata and eager large-history hydration](https://github.com/openai/codex/issues/21211)**
   An ancient issue updated today with 14 comments. The root cause has evolved from `threads.title` bloat to a broader architectural problem: unbounded thread metadata in SQLite path queries, combined with eager hydration of large histories. This is the most discussed performance issue in the tracker and is directly relevant to the "apps feel slow" reports.

6. **[#29627 — Agent cancels pending manual approvals automatically and treats them as unapproved instead of waiting](https://github.com/openai/codex/issues/29627)**
   An Enterprise user on Linux reports that CLI agents cancel pending manual approval requests rather than waiting, turning them into denials. This breaks the human-in-the-loop security model for sandboxed tool calls. Seven comments suggest internal discussion but no fix yet.

7. **[#30306 — codex-cli 0.142.3 still crashes with Trace/BPT trap: 5 (SIGTRAP) on tool calls on Intel macOS](https://github.com/openai/codex/issues/30306)**
   A regression of #29000 that persists into 0.142.3. Intel macOS users experience native SIGTRAP crashes the moment any tool (`web_search`, shell) is invoked. Three upvotes in a week indicate this is affecting a non-trivial minority. The reporter adds that no workaround exists.

8. **[#31351 — (repeat above; this entry could be omitted due to recency)](#)**

9. **[Usage limit conspiracy of silence]**
   No single issue captures this, but across #31345, #31322, and #31351, the pattern is unmistakable: rate-limit normalization is unstable, and the system lacks transparency. Users are comparing graphs, sharing timestamps, and trying to reverse-engineer the algorithm. Expect a coordinated community escalation if this persists another week.

10. **[Feature request: persistent tool call state across interruptions]**
    Implicit in #29627 and #30306: when an agent crashes or cancels approvals, the tool call state is lost. Multiple comment threads hint at wanting checkpointing for long-running tool chains, especially in Enterprise settings where audit trails matter.

## Key PR Progress

1. **[#31350 — core: preserve thread activity through completion](https://github.com/openai/codex/pull/31350)**
    A life-cycle fix: holds the thread-activity reservation from accepted turn dispatch through terminal delivery, preserving it across replacement and interrupt-to-restart transitions. This is the underlying mechanism to prevent "ghost" sessions from draining usage, directly related to the double-counting issue in #31346.

2. **[#31349 — core: serialize thread turn transitions](https://github.com/openai/codex/pull/31349)**
    The fourth layer of the thread-safety stack. Introduces a per-session transition lock for turn start, abort, and finish. Prevents injected input from reaching "provisional taskless turns" and ensures late mail doesn't get lost during transition. This is foundational work for any reliable thread lifecycle.

3. **[#30670 — perf(core): avoid duplicate first-turn filesystem discovery](https://github.com/openai/codex/pull/30670)**
    Reuses the project root discovered during AGENTS loading for the skills warmup, avoiding redundant remote filesystem work. The exact discovery-cwd match is required, and the hint is never retained across turns. This directly addresses cold-start latency that feeds into the "thread loading slow" complaints in #21211.

4. **[#31342 — core: use HTTP Responses with system proxy (code-reviewed)](https://github.com/openai/codex/pull/31342)**
    Extends the proxy-aware client from #31335 to WebSocket connections via `tokio-tungstenite`. Without this, `features.respect_system_proxy` would work for REST endpoints but fail for WebSocket-capable providers, which are preferred for normal turns. All test mocks updated.

5. **[#31300 — feat(core): emit canonical collab tool call items](https://github.com/openai/codex/pull/31300)**
    Migrates non-wait v1 collaboration tools (spawn, send input, resume, close) to emit canonical `TurnItem::CollabAgentToolCall` lifecycle. Part of the broader canonical item unification that will eventually simplify the app-server v2 event handling.

6. **[#31299 — feat(core): emit canonical sub-agent activity items](https://github.com/openai/codex/pull/31299)**
    MultiAgentV2 spawn, message/follow-up, and interrupt paths now emit canonical `TurnItem::SubAgentActivity` instead of raw `SubAgentActivityEvent`. This is one of six PRs from the same author in the canonical-emission pipeline, all depending on #31296 for event mappings.

7. **[#31297 — feat(core): emit canonical command execution items](https://github.com/openai/codex/pull/31297)**
    Both shell tool and `/shell` user commands now emit canonical `TurnItem::CommandExecution` lifecycle. Another piece of the same refactor, targeting app-server v2 consumption.

8. **[#30296 — Report MCP OAuth Auto store drift](https://github.com/openai/codex/pull/30296)**
    Complex 7-PR stack from `stevenlee-oai` implementing MCP OAuth login/logout serialization and credential store drift detection. The thread-based dependency chain is designed for safe independent merging at each layer. This addresses a compliance gap for OAuth-based MCP authentication.

9. **[#31348 — perf(skills): resolve plugin namespaces per root](https://github.com/openai/codex/pull/31348)**
    Skill loading previously walked manifest ancestors once per `SKILL.md`, which dominated cold thread start in remote-executor environments. By resolving namespaces once per root instead of per-file, this PR significantly reduces serialized metadata probes. Benchmark numbers from #31295 are referenced.

10. **[#30669 — perf(thread-store): project append metadata asynchronously](https://github.com/openai/codex/pull/30669)**
    Moves append-derived thread metadata projection off the synchronous rollout append path into a per-thread worker with generation barriers. Designed with careful retry, error propagation, shutdown, discard, and trace-parent semantics. This directly targets the SQLite bloat issue in #21211.

## Feature Request Trends

1. **Real-time usage transparency**: Users want per-request token cost breakdowns and projected cap exhaustion alerts. Multiple issues ask for a "rate-limit dashboard" within the app, not just after-the-fact graphs.

2. **Cancellation checkpointing**: When an agent crashes, is canceled, or has approvals denied mid-tool-chain, users want the option to resume from the last checkpoint rather than replaying the entire conversation.

3. **Persistent sandbox state across restarts**: Enterprise users in particular are requesting that sandbox environments (files, tool outputs, shell state) survive CLI restarts, not just session disconnects.

4. **Thread metadata invalidation**: The slow-thread-navigation problem (#21211) has generated requests for explicit user controls to purge old thread metadata, archive threads without loading history, and opt into lazy hydration only.

5. **Platform parity for Intel macOS**: The SIGTRAP regression (#30306) has renewed calls for CI testing on Intel Macs and a formal platform support matrix for x86_64 macOS.

## Developer Pain Points

- **Rate-limit unpredictability is the #1 frustration.** Users cannot plan their work because the same "light" usage pattern hits the cap some days and not others. The 5x speedup in drain (#31322) and the auto-compaction waste (#31351) compound the trust problem.
- **Fork-thread usage accounting is broken.** Forking a conversation, a common workflow for exploring alternative solutions, silently inflates token monitors (#31346). This punishes users who explore broadly before committing.
- **Intel macOS users are effectively second-class.** The SIGTRAP crash (#30306) has been open for 11 days across two versions. No workaround exists, and affected users must switch to Apple Silicon or Linux.
- **Human-in-the-loop approvals are unreliable.** The automatic cancelation of pending approvals (#29627) undermines the safety justification for sandboxed tool execution. Enterprise users are disproportionately affected because they are the primary audience for manual approval workflows.
- **Thread navigation performance degrades without warning.** Users with long conversation histories hit progressive slowdown that is invisible until it becomes unusable (#21211). The lack of progress indicators for metadata loading makes the app feel broken.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-07

## Today's Highlights
A **nightly release** (v0.51.0) shipped with sandbox security hardening and a fix for escape-sequence corruption in string literals for modern models. The issue tracker remains heavily focused on **agent reliability** — subagent recovery after turn limits, indefinite hangs, and tool-selection logic continue to dominate developer attention. Several high-value PRs landed this week, including thought-leakage scrubbing, MCP elicitation support, and post-SIGINT cancellation safety.

## Releases
- **v0.51.0-nightly.20260707.g15a9429b6** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260707.g15a9429b6)
  - `fix(sandbox): make ~/.gitconfig read-only in the macOS sandbox` — prevents sandboxed processes from modifying git config, closing a vector for alias/hook-based command execution.
  - `fix(core): preserve escape sequences in string literals for modern models` — stops the tool from converting valid `\n`/`\t` inside strings to literal newlines.

## Hot Issues (10 selected)

1. **#22323 — Subagent recovery after MAX_TURNS reported as GOAL success** — [Issue](https://github.com/google-gemini/gemini-cli/issues/22323)  
   *10 comments, 2 👍* — A `codebase_investigator` subagent reports `status: "success"` even after hitting its turn limit without doing work. This false-positive masking of agent failures is a critical evaluation integrity problem.

2. **#21409 — Generalist agent hangs** — [Issue](https://github.com/google-gemini/gemini-cli/issues/21409)  
   *7 comments, 8 👍* — High community engagement: subagent delegation causes indefinite hangs for simple tasks like folder creation. Workaround (disabling subagents entirely) is a major UX blocker.

3. **#25166 — Shell command hangs with "Waiting input" after completion** — [Issue](https://github.com/google-gemini/gemini-cli/issues/25166)  
   *4 comments, 3 👍* — After executing simple shell commands, the CLI shows them as still active and awaiting input. Frequent occurrence erodes trust in automation.

4. **#21968 — Gemini doesn't use skills and sub-agents enough** — [Issue](https://github.com/google-gemini/gemini-cli/issues/21968)  
   *6 comments* — Custom skills (gradle, git) with explicit descriptions are almost never invoked autonomously, even for directly related tasks. Agent orchestration remains under-powered.

5. **#24353 — Robust component-level evaluations** — [Issue](https://github.com/google-gemini/gemini-cli/issues/24353)  
   *7 comments* — Epic tracking expansion of the 76 behavioral eval tests to cover more agent components. A foundational investment for preventing regressions.

6. **#26522 — Auto Memory retrying low-signal sessions indefinitely** — [Issue](https://github.com/google-gemini/gemini-cli/issues/26522)  
   *5 comments* — Sessions the extraction agent chooses to skip remain unprocessed in the index, causing repeated re-examination. Memory system efficiency issue.

7. **#24246 — 400 error with >128 tools** — [Issue](https://github.com/google-gemini/gemini-cli/issues/24246)  
   *3 comments* — When more than ~128 tools are available, the CLI encounters a 400 API error. No tool-scoping logic exists to trim context — a scalability ceiling.

8. **#21983 — Browser subagent fails in Wayland** — [Issue](https://github.com/google-gemini/gemini-cli/issues/21983)  
   *4 comments, 1 👍* — The browser agent terminates with `GOAL` but fails silently under Wayland. Linux desktop users are impacted.

9. **#22267 — Browser Agent ignores settings.json overrides** — [Issue](https://github.com/google-gemini/gemini-cli/issues/22267)  
   *3 comments* — Configuration overrides like `maxTurns` are read by `AgentRegistry` but never applied by the browser agent. Configuration contract is broken.

10. **#22093 — Subagents running without permission since v0.33.0** — [Issue](https://github.com/google-gemini/gemini-cli/issues/22093)  
    *2 comments* — Agents mode set to "disabled" is ignored; subagents (including generalist) are invoked anyway. Permission model regression with security implications.

## Key PR Progress (10 selected)

1. **#27971 — Strip thoughts from scrubbed history turns** — [PR](https://github.com/google-gemini/gemini-cli/pull/27971) *(CLOSED)*  
   Surgical fix for thought leakage where model internal monologues leaked into plain-text history, causing infinite loops and scratchpad emulation in subsequent turns.

2. **#28089 — Implement MCP elicitation (form + url)** — [PR](https://github.com/google-gemini/gemini-cli/pull/28089) *(CLOSED)*  
   Adds MCP client support for form-based and URL-based elicitation per the 2025-11-25 spec. Enables interactive parameter requests from MCP servers.

3. **#28094 — Deep-merge user and workspace settings** — [PR](https://github.com/google-gemini/gemini-cli/pull/28094) *(CLOSED)*  
   Fixes shallow merge that caused workspace `tools`/`telemetry`/`experimental` settings to completely replace user defaults instead of merging.

4. **#28096 — Drop late tool calls after SIGINT cancellation** — [PR](https://github.com/google-gemini/gemini-cli/pull/28096) *(CLOSED)*  
   Prevents tool-call chunks received after cancellation from executing locally and submitting results back to the model. Fixes side-effect persistence after user interrupt.

5. **#28221 — Make ~/.gitconfig read-only in macOS sandbox** — [PR](https://github.com/google-gemini/gemini-cli/pull/28221) *(CLOSED)*  
   Security: removes `~/.gitconfig` from the Sandbox writable set, preventing malicious git alias/hook execution via config manipulation.

6. **#28299 — Preserve escape sequences in string literals** — [PR](https://github.com/google-gemini/gemini-cli/pull/28299) *(CLOSED)*  
   Disables aggressive unescaping for Gemini 2.x/3.x models. Fixes `b-496211054` where `\n` in strings became literal newlines.

7. **#28223 — Bypass LLM correction for JSON and IPYNB files** — [PR](https://github.com/google-gemini/gemini-cli/pull/28223) *(OPEN)*  
   Surgical fix: `write_file` and `replace` tools now skip LLM correction for `.ipynb` and `.json` files, resolving corruption of structured data.

8. **#28099 — Show descriptive sandbox label in footer** — [PR](https://github.com/google-gemini/gemini-cli/pull/28099) *(CLOSED)*  
   Replaces "current process" with the actual seatbelt profile name when sandbox is active, improving debuggability on macOS.

9. **#28100 — Register Disposables leaked by comma operators** — [PR](https://github.com/google-gemini/gemini-cli/pull/28100) *(CLOSED)*  
   Fixes VS Code extension leak where comma operators in `context.subscriptions.push()` caused half of all disposables to never be registered.

10. **#28244 — Use safe test command in policy-engine docs** — [PR](https://github.com/google-gemini/gemini-cli/pull/28244) *(OPEN)*  
    Replaces `rm -rf /` with `echo blocked` in policy engine quick-start docs — eliminates dangerous copy-paste examples.

## Feature Request Trends

- **AST-aware codebase tools** — Multiple issues (#22745, #22746) request AST-level file reads, search, and codebase mapping to reduce turns and token waste from misaligned reads.
- **Agent self-awareness** — The community wants the CLI to know its own flags, hotkeys, and capabilities (#21432) so it can act as its own expert guide rather than guessing.
- **Subagent trajectory sharing** — Users request that subagent trajectories be visible via `/chat share` (#22598) to enable debugging and evaluation of multi-agent workflows.
- **Destructive behavior guardrails** — Several threads (#22672, #23571) ask the agent to avoid dangerous git commands and creating temporary scripts in random locations, preferring safer alternatives.

## Developer Pain Points

- **False-positive agent successes** — Subagents frequently report `GOAL`/`success` even after hitting turn limits or failing (#22323, #21983), masking real failures and eroding evaluation trust.
- **Indefinite hangs and stuck state** — Generalist agent hangs (#21409), shell commands stuck on "Waiting input" (#25165), and interactive prompt deadlocks (#22465) are recurring — these destroy the "set and forget" developer workflow.
- **Configuration/permission regressions** — Subagents running when disabled (#22093), browser agent ignoring `settings.json` (#22267), and shallow-setting merges (#28094's fix) point to a fragile configuration stack.
- **Scalability with many tools** — The 400 error with >128 tools (#24246) and the model's refusal to invoke skills autonomously (#21968) limit real-world utility for developers with complex toolchains.
- **Memory system noise** — Auto Memory's indefinite retry of low-signal sessions (#26522) and logging of sensitive content before redaction (#26525) raise both efficiency and security concerns.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date: 2026-07-07**

---

## Today's Highlights

A minor patch release (v1.0.69-2) improves MCP server OAuth sign-in and fixes terminal clipping, but the community's attention is on mounting configuration gaps: cross-platform hook failures, enterprise plugin distribution bugs, and an emerging pattern of broken tooling in sandboxed or non-standard environments. Two long-standing feature requests—project-scoped plugins and multi-agent workflows—remain the most upvoted open topics.

---

## Releases

**v1.0.69-2** — [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.69-2)
- **Added**: `/rubber-duck` now visible in pre-auth help and self-documentation.
- **Improved**: MCP servers can now sign in through the CLI's OAuth callback flow; the `/user` switch picker is no longer clipped when the terminal timeline is full.
- **Fixed**: Files inside `n` directories are now properly included.

---

## Hot Issues

1. **[#1665 — Support Copilot CLI Plugins Scoped to Project or Repository](https://github.com/github/copilot-cli/issues/1665)** (CLOSED, 👍18)  
   A heavily requested feature: plugins currently install globally per-user, making repository-specific tooling impossible. Closed after months of discussion, but the resolved implementation details are not yet visible in a release.

2. **[#3596 — Error loading model list after resuming a session](https://github.com/github/copilot-cli/issues/3596)** (CLOSED, 👍11)  
   Users resuming a session hit "Not authenticated" when listing models via `/model`, forcing a full restart. Root cause appears to be stale authentication state in session persistence.

3. **[#3028 — MCP Permissions configuration](https://github.com/github/copilot-cli/issues/3028)** (OPEN, 👍5)  
   Request for granular allow/deny permissions on MCP server tools, analogous to VS Code's `trustedFolders`. Currently no mechanism to restrict what MCP tools can access.

4. **[#4001 — .claude/settings.json hooks fail on Windows](https://github.com/github/copilot-cli/issues/4001)** (OPEN)  
   Critical Windows bug: hooks are executed via PowerShell instead of bash, and `$CLAUDE_PROJECT_DIR` is not set, causing every hook to fail-closed. Enterprise Windows users are effectively blocked from using repository settings.

5. **[#3074 — Add `/effort` command for reasoning effort](https://github.com/github/copilot-cli/issues/3074)** (OPEN, 👍6)  
   Switching reasoning effort currently requires multi-step `/model` navigation. Users want a single command to toggle between Low/Medium/High reasoning for the current model.

6. **[#3945 — Memories leaking between repositories](https://github.com/github/copilot-cli/issues/3945)** (OPEN)  
   Cross-repository memory contamination: Copilot recalls facts from unrelated repos, breaking context isolation. A data separation/privacy concern for multi-project developers.

7. **[#4038 — Late-connecting MCP server injects empty user message](https://github.com/github/copilot-cli/issues/4038)** (OPEN)  
   In non-interactive mode (`copilot -p`), MCP servers with 7+ tools cause an empty user message to be appended, making the model echo tool lists instead of answering the actual prompt.

8. **[#4041 — web_fetch tool fails on all URLs in IPv4-only sandboxes](https://github.com/github/copilot-cli/issues/4041)** (OPEN)  
   The built-in `web_fetch` tool fails with `TypeError: fetch failed` on every URL in environments without IPv6. This impacts CI runners, containers, and corporate networks.

9. **[#4035 — Voice installer fails with 401 on private Azure Artifacts feed](https://github.com/github/copilot-cli/issues/4035)** (OPEN)  
   When enabling voice mode, the installer attempts to download packages from a private Azure DevOps feed instead of nuget.org, causing authentication errors for users without DevOps access.

10. **[#4039 — Enterprise-managed plugins marked installed but never synced](https://github.com/github/copilot-cli/issues/4039)** (OPEN)  
    Plugins listed in `managed-settings.json` appear as installed in the config file, but binaries are never downloaded to disk. Enterprise users cannot actually use managed plugins.

---

## Key PR Progress

*No pull requests were updated in the last 24 hours.*

---

## Feature Request Trends

The community is converging on three structural requests:

1. **Scoped configurations** — Plugins, memories, and settings should be configurable per project/repository, not only globally per-user. Issue #1665 (plugins) and #2930 (local auto-memory) both push in this direction.

2. **Granular MCP control** — Demand for tool-level permissions (#3028), configuration for trusted tool access, and better audit logging around what MCP servers can do.

3. **Reasoning effort shortcuts** — Multiple users are asking for a dedicated `/effort` command (#3074) to quickly toggle reasoning depth without switching models.

---

## Developer Pain Points

- **Authentication state fragility** — Session resume loses authentication (#3596, #3902), requiring restarts. The ACP protocol also has a persistent auth state refresh problem.
- **Windows as a second-class platform** — Hook execution (#4001), PowerShell compatibility, and Nix shell environment issues (#1428) signal inconsistent cross-platform testing.
- **Enterprise deployment friction** — Plugin sync failures (#4039), private feed authentication (#4035), and missing BYOK support (#4037) make enterprise rollout difficult.
- **Non-interactive mode fragility** — Empty message injection with MCP (#4038) and IPv6 dependency for web fetching (#4041) break headless/CI usage.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest**
**Date:** 2026-07-07

---

## 1. Today's Highlights

Today's digest is relatively quiet with no new releases or pull requests. Community activity is focused on two open issues: one reporting a significant terminal display corruption bug on Windows 11 after prolonged usage, and a feature request from a developer building a Visual Studio 2026 integration, asking for programmatic access to usage limits and reset times via the ACP protocol.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Hot Issues (2 items)

**#2485 – [bug] code cli 错乱 (Terminal Display Corruption)**
- **Author:** mynameiscuining | **Comments:** 1 | **👍:** 0
- **Link:** [Issue #2485](https://github.com/MoonshotAI/kimi-cli/issues/2485)
- **Summary:** Running Kimi Code CLI v0.22.0 on Windows 11 with the "kimi-for-coding" model. After using the CLI for a period of time, the terminal output becomes garbled and incomplete, with the first menu option disappearing entirely. The reporter attached a screenshot showing truncated text.
- **Why it matters:** This is a critical UX bug on a major platform (Windows 11). Display corruption can render the CLI unusable during a session, leading to user frustration and potential data loss. The lack of upvotes suggests this is an isolated report, but the severity warrants attention.

**#2486 – [enhancement] Feature Request: Expose usage limits and reset times through ACP**
- **Author:** jgiacomini | **Comments:** 0 | **👍:** 0
- **Link:** [Issue #2486](https://github.com/MoonshotAI/kimi-cli/issues/2486)
- **Summary:** A developer building an ACP client for Visual Studio 2026 requests that Kimi Code expose the same usage limit/reset information (currently visible via `/usage` in the Console) through the ACP protocol. This would allow IDE integrations to show usage quotas to users natively.
- **Why it matters:** This is a forward-looking platform integration request. As more developers use Kimi Code within IDEs, exposing billing/usage data through standard protocols (ACP) is essential for building transparent, third-party tools. The request aligns with the industry trend of making AI tool usage more visible and manageable.

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

## 5. Feature Request Trends

Based solely on today's limited data, a clear emerging trend is **programmatic access to usage metadata**. Issue #2486 specifically asks for usage limits and reset times to be exposed via the ACP protocol for IDE integrations. This suggests that developers are increasingly embedding Kimi Code deeper into their workflows and require API-level transparency to manage consumption and provide user feedback.

## 6. Developer Pain Points

The single bug report today highlights a core operational pain point: **terminal stability on Windows**. The "code cli is confused" issue (#2485) points to a recurring theme in CLI tools built with cross-platform display libraries: output corruption over time, especially on Windows 11. While there are no other reports of this today, the description (missing first option, garbled output after extended use) suggests a potential issue with terminal buffer management or ANSI escape sequence handling that could affect a wider user base if not addressed.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — July 7, 2026

## Today's Highlights

OpenCode ships **v1.17.14** with a new code mode MCP adapter for confined orchestration scripts and critical fixes to paginated MCP tool catalogs. Community attention is split between a **high-resource-usage regression** in v1.17.13 (Issue #35009) and a flurry of **durable compaction barrier** contributions from the Effect ecosystem. The project also merges RTL text support for the desktop client and a plugin hook to short-circuit tool execution.

## Releases

**v1.17.14** — Core improvements:
- Added a **code mode MCP adapter** for running confined orchestration scripts against connected MCP tools.
- The `execute` tool is now **hidden unless code mode is enabled**.
- Fixed paginated MCP tool catalogs losing **tool metadata and output schema validation**.
- Preserved large-context continuation stability.

## Hot Issues

1. **#35009** — *High resource usage after updating from 1.17.11 to 1.17.13*  
   Users report ~1GB RSS and 22% CPU during normal conversations. Still OPEN with 5 comments.  
   🔗 https://github.com/anomalyco/opencode/issues/35009

2. **#35027** — *Thinking type on Nvidia provider, Minimax M3 model*  
   Newly added Minimax M3 thinking variants have schema errors. 2 comments, still OPEN.  
   🔗 https://github.com/anomalyco/opencode/issues/35027

3. **#25873** *(CLOSED)* — *Bash tool fails with 'Attempted to assign to readonly property'*  
   Affects users with `OPENCODE_EXPERIMENTAL=true` and the v2 event system. 9 comments, 2 👍.  
   🔗 https://github.com/anomalyco/opencode/issues/25873

4. **#17624** *(CLOSED)* — *GUI gets stuck on "Thinking"*  
   OpenCode networking process consuming 3.92GB RAM. Six comments, no resolution for older v1.2.26.  
   🔗 https://github.com/anomalyco/opencode/issues/17624

5. **#19278** *(CLOSED)* — *Subagent output not printed in CLI run command*  
   Cron users cannot see subagent logs. Six 👍, 5 comments.  
   🔗 https://github.com/anomalyco/opencode/issues/19278

6. **#15903** *(CLOSED)* — *Option to hide cost display in TUI*  
   Local model users bothered by "$0.00" display. **22 👍** — most-upvoted issue in this batch.  
   🔗 https://github.com/anomalyco/opencode/issues/15903

7. **#17457** *(CLOSED)* — *Numpad Enter key does not send messages in TUI*  
   Kitty keyboard protocol mismatch. Six 👍, well-documented terminal compatibility bug.  
   🔗 https://github.com/anomalyco/opencode/issues/17457

8. **#25835** *(CLOSED)* — *Subagent asking for permission even though it already has*  
   GitLab subagent with explicit `allow` rules still prompts. 4 comments.  
   🔗 https://github.com/anomalyco/opencode/issues/25835

9. **#16254** *(CLOSED)* — *Subagent tool calls against external paths never return results*  
   Delegated subagent targeting `/tmp` hangs indefinitely. 2 comments.  
   🔗 https://github.com/anomalyco/opencode/issues/16254

10. **#26245** *(CLOSED)* — *Monthly token end in 15 days?*  
    Billing confusion due to token limits in subscription. 6 comments.  
    🔗 https://github.com/anomalyco/opencode/issues/26245

## Key PR Progress

1. **#35635** *(CLOSED)* — **RTL support for desktop**  
   Adds dynamic right-to-left alignment for Persian, Arabic, Hebrew text in markdown and editor.  
   🔗 https://github.com/anomalyco/opencode/pull/35635

2. **#35648** *(CLOSED)* — **Named drive instances for simulation**  
   Enables simulation-layer replacements with fixed WebSocket endpoints.  
   🔗 https://github.com/anomalyco/opencode/pull/35648

3. **#35634** *(OPEN)* — **Fix missing `required` in object schemas**  
   `additionalProperties: false` with no `required` field causes strict JSON Schema failures.  
   🔗 https://github.com/anomalyco/opencode/pull/35634

4. **#35636** *(OPEN)* — **Preserve compaction work details**  
   Keeps subheadings for completed/active/blocked work in compaction summaries.  
   🔗 https://github.com/anomalyco/opencode/pull/35636

5. **#35371** *(CLOSED)* — **Durable compaction barrier**  
   Generalizes `session_input` into a typed durable inbox; blocks unpromoted work behind a barrier.  
   🔗 https://github.com/anomalyco/opencode/pull/35371

6. **#35613** *(CLOSED)* — **Tool execute short-circuit via plugin hook**  
   `tool.execute.before` can now return a canned output, skipping real execution.  
   🔗 https://github.com/anomalyco/opencode/pull/35613

7. **#35510** *(OPEN)* — **Plugin `skip` option for session compaction**  
   `experimental.session.compacting` hook can skip cycles entirely, aiding memory management plugins.  
   🔗 https://github.com/anomalyco/opencode/pull/35510

8. **#35617** *(OPEN)* — **Code mode promise chaining**  
   Adds `then`, `catch`, `finally` support for sandbox promises in code mode.  
   🔗 https://github.com/anomalyco/opencode/pull/35617

9. **#35633** *(OPEN)* — **Fix app loading of capped review patches**  
   Reloads review patches omitted by the 10MB cap using directory-scoped VCS diff API.  
   🔗 https://github.com/anomalyco/opencode/pull/35633

10. **#35134** *(CLOSED)* — **Visual improvements to app**  
    Focus state on home page search menu and eased gradients in model picker.  
    🔗 https://github.com/anomalyco/opencode/pull/35134

## Feature Request Trends

- **Cost display customization** — Multiple users (including #15903 with 22 👍) want the ability to hide or customize the sidebar cost display, especially when using free/local models.
- **Keyboard & input ergonomics** — Requests for font size adjustment (#26269), a `/menu` slash command (#26238), and keyboard cycling between sessions (#16986) highlight demand for better TUI customization.
- **External editor integration** — Users want `@filename` tag resolution from external editor output (#26252) and Neovim editor context support (#26232) in the TUI.
- **Execution metadata exposure** — #23474 asks for tool/subagent run metadata (timing, status) to be surfaced to the active agent programmatically.

## Developer Pain Points

- **Subagent reliability** — Multiple issues (#19278, #25835, #16254) show subagents failing silently: output not printed, permission prompts repeating, and tool results never returning. This is the most painful recurring theme.
- **Resource bloat** — #35009 (1GB RAM regression) and #17624 (3.92GB stuck process) indicate memory management remains fragile, especially after version bumps.
- **Windows & WSL compatibility** — Drag-drop path loss (#17488), WSL-specific provider failures (#17501), and PowerShell UTF-8 wrapper PR (#31985) show ongoing cross-platform friction.
- **Plugin breakage on upgrade** — #25999 reports plugins failing to load after a minor version bump, indicating weak backward compatibility guarantees for plugin APIs.
- **MCP & tool schema fragility** — The v1.17.14 fix for paginated MCP catalogs and the `required` field fix (#35634) suggest schema validation is a persistent weak point.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-07

## Today's Highlights

A busy 24 hours with significant activity around provider compatibility, extension lifecycle improvements, and TUI stability fixes. Notably, the community is converging on solutions for caching accuracy (multiple PRs fixing token double-counting), provider-specific tool handling (NVIDIA NIM, GLM, OpenRouter), and extension loading performance. Two major PRs from core contributor mitsuhiko propose constrained sampling support and better handling of truncated tool calls.

## Releases

No new releases in the last 24 hours. Latest available version remains 0.80.3.

## Hot Issues

1. **[#6234 — Escape leaves Pi stuck in Working when extension context hook never settles](https://earendil-works/pi/issue/6234)** (OPEN, 9 comments)
   A critical UX bug where pressing Escape during an active run can leave the TUI permanently stuck in "Working..." if an extension's context hook doesn't settle. Double-Escape is swallowed by the streaming abort. High-priority as it breaks the core escape hatch for users with extensions.

2. **[#6103 — OpenAI Responses API mislabels empty tool results as "(see attached image)"](https://earendil-works/pi/issue/6103)** (CLOSED, 6 comments)
   Latent bug exposed by extension pi-hashline-edit-pro: empty tool results are incorrectly labeled as containing images, causing model hallucination. Community noted this affects any tool returning no output. Fixed via PR #6290.

3. **[#6226 — "Streams end without finish_reason" with providers that omit finish_reason for tool calls](https://earendil-works/pi/issue/6226)** (CLOSED, 4 comments)
   GLM 5.1 on NVIDIA NIM triggers an unhandled error by closing streams without finish_reason. Community requested a graceful fallback rather than hard error.

4. **[#6360 — Defer extension loading: three preload modes (lazy/async/sync)](https://earendil-works/pi/issue/6360)** (CLOSED, 3 comments)
   User with 30 extensions reports startup slowdown due to eager loading. Proposal for lazy-by-default loading with opt-in async/sync modes. Wide interest from extension-heavy users.

5. **[#6376 — Thinking blocks inappropriately stripped in newer Claude models](https://earendil-works/pi/issue/6376)** (OPEN, 3 comments)
   Sonnet 5, Opus 4.7/4.8 have thinking blocks removed because Anthropic API omits thinking text. Behavior is appropriate for older models but breaks newer ones. Community awaiting guidance on model-specific logic.

6. **[#6365 — Support server tools (OpenRouter search)](https://earendil-works/pi/issue/6365)** (CLOSED, 3 comments)
   Request to support OpenRouter's `type: "openrouter:web_search"` tool definition. Extension authors need this for search-augmented generation workflows.

7. **[#6318 — pi-keyrouter doesn't see its config](https://earendil-works/pi/issue/6318)** (CLOSED, 4 comments)
   Reported as "malicious or unsafe behavior" — the extension fails to detect expected configuration file after initial creation. Community flagged this as a lifecycle/loading issue rather than malice.

8. **[#6250 — Ctrl+V image paste silently fails on Linux/X11 in Bun release binary](https://earendil-works/pi/issue/6250)** (OPEN, 2 comments)
   Native clipboard binding not resolvable inside compiled executable. Regression from 0.78.0 to 0.80.3. Affects Linux users with X11.

9. **[#6321 — /fork spawns one extra session per Enter while fork is running](https://earendil-works/pi/issue/6321)** (OPEN, 2 comments)
   Core bug: pressing Enter in fork selector calls `onSelect` before closing the selector, spawning extra sessions. Confirmed without extensions.

10. **[#6364 — ResourceExhausted from NVIDIA NIM not recognized as retryable](https://earendil-works/pi/issue/6364)** (OPEN, 1 comment)
   `ResourceExhausted` error from gRPC-based model servers not in retry pattern list. Small fix, high impact for NVIDIA NIM users.

## Key PR Progress

1. **[#6341 — feat(ai): support constrained sampling](https://earendil-works/pi/pull/6341)** (OPEN, by mitsuhiko)
   Adds opt-in `constrainedSampling` config for tools — JSON schema strict mode and grammar-based sampling. Enables provider-side constraint enforcement for tool arguments.

2. **[#6285 — fix(agent): fail tool calls from length-truncated assistant messages](https://earendil-works/pi/pull/6285)** (OPEN, by mitsuhiko)
   Reworked from earlier approach: agent loop now treats `length` stop as error for tool execution, with best-effort salvage parser for truncated tool-call arguments.

3. **[#6350 — feat(coding-agent): add before_provider_headers extension hook](https://earendil-works/pi/pull/6350)** (CLOSED)
   New hook for modifying HTTP headers on outgoing provider requests. Enables LLM gateway integration without custom provider implementations.

4. **[#6290 — fix(ai): use "(no tool output)" placeholder for empty tool results without images](https://earendil-works/pi/pull/6290)** (CLOSED)
   Fixes issue #6103: empty tool results no longer falsely labeled as containing images. Uses "(no tool output)" instead.

5. **[#6241 — fix(tui): avoid offscreen redraws for stable-height updates](https://earendil-works/pi/pull/6241)** (CLOSED)
   Performance fix: clamps repainting to visible rows when rendered line count is unchanged. Reduces CPU usage for frequent updates.

6. **[#6309 — Improve project-local pi config](https://earendil-works/pi/pull/6309)** (CLOSED, by mitsuhiko)
   `pi config` now opens global config by default; `-l` flag for project-local. Makes resource selection usable at project level.

7. **[#6343 — fix(ai,agent,coding-agent): normalize null message content at ingestion boundaries](https://earendil-works/pi/pull/6343)** (CLOSED, by mitsuhiko)
   Null content crashes finally addressed — normalizes null/undefined content to empty arrays at provider boundaries. Addresses several recurring crash reports.

8. **[#6356 — fix(ai): support GLM-5.2 tool calls](https://earendil-works/pi/pull/6356)** (CLOSED)
   Non-streaming fallback for GLM-5.2 when tools are present, since streamed response misses tool-call deltas.

9. **[#6352 — fix(coding-agent): correct cache hit rate denominator and context token double-count](https://earendil-works/pi/pull/6352)** (CLOSED)
   Fixes cache statistics: Anthropic's `input_tokens` already includes cache tokens. Two code locations were double-counting, inflating CH% and context%.

10. **[#5472 — feat(ai,coding-agent): add Requesty as native provider](https://earendil-works/pi/pull/5472)** (CLOSED)
    Adds Requesty as a native provider — `requesty/...` models work out of the box for this 60K+ user AI gateway.

## Feature Request Trends

- **Provider expansion**: Multiple requests for native support — Doubao/Volcengine Ark, Azure OpenAI WebSocket, OpenRouter server tools, Requesty (now merged). Community pushing for broader provider compatibility.
- **Cache and token accuracy**: Three separate reports/PRs on cache hit rate miscalculation. Strong consensus on fixing token double-counting.
- **Extension lifecycle improvements**: Loading performance (lazy/async modes), configuration detection, reload consistency across restart vs `/new`. Extensions are a growing pain point.
- **Session-scoped overrides**: Model selection, session IDs for caching — users want per-session configuration without mutating global settings.
- **Clipboard and image handling**: Linux X11 clipboard regression, image paste not sent to LLM, remote model inference requests. Editing workflows for image inputs.

## Developer Pain Points

- **Provider inconsistency**: High frustration with provider-specific quirks (GLM missing tool deltas, NVIDIA NIM gRPC errors, OpenRouter cache key format, Anthropic thinking blocks). Each requires special-casing.
- **Extension reliability**: Extensions missing configs, context hooks preventing Escape, inconsistent loading across lifecycle events. The extension system needs hardening.
- **TUI regressions**: Clipboard failures on Bun binary, segfaults on minimal Node builds (missing `Intl.Segmenter`), offscreen redraws. TUI stability for edge-case environments is fragile.
- **Newcomer friction**: Configuration of local model servers not beginner-friendly. Need auto-discovery or simplified setup flows.
- **Message content null safety**: Despite type definitions stating `content` is always present, null-content crashes continue across multiple AI providers. PR #6343 addresses this but latent bugs remain.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-07

## Today's Highlights
A major RFC proposing multi-workspace support in `qwen serve` has sparked 19 comments and is shaping the daemon's future architecture. The team shipped a nightly release with strengthened PR triage automation, while critical token-economy bugs—large PDF ingestion, overspending `/review`, and shell failures on Windows—dominate the community's attention. Two welcome-PR issues were also closed, signaling active community contribution momentum.

## Releases
**v0.19.6-nightly.20260707.bcdb44c5d** — [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6-nightly.20260707.bcdb44c5d)
- Enhanced PR triage automation with batch detection, problem-existence checks, and red-flag pattern recognition
- Single fix commit targeting quality-of-life for maintainers

## Hot Issues

1. **[#6378 — RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)** (P2, feature-request)
   The most-discussed item today (19 comments). Proposes a 1-daemon → N-workspaces model while preserving backward compatibility. Community is actively debating session isolation and API boundary design. Core architectural decision for the serve subsystem.

2. **[#6264 — /review skill consumes large token budgets](https://github.com/QwenLM/qwen-code/issues/6264)** (P2, bug)
   Users report unexpectedly high token consumption when using the `/review` slash skill. Attached screenshots show usage spikes. High-impact for anyone running on metered APIs. Needs triage; community is requesting configurable token limits.

3. **[#6298 — Shell tool fails on Windows when command produces stdout](https://github.com/QwenLM/qwen-code/issues/6298)** (P2, bug)
   `run_shell_command` pipes through `cat`, which doesn't exist on Windows `cmd.exe`. Blocks Windows users from core shell functionality. Triggered a related PR (#6390) today.

4. **[#6265 — tool_search invalidates LLM server KV-cache on every deferred-tool load](https://github.com/QwenLM/qwen-code/issues/6265)** (P2, bug, welcome-pr)
   Performance-critical: each `tool_search` call flushes the KV-cache, doubling latency. A welcome-PR label suggests maintainers are open to contributions. Community has upvoted for priority attention.

5. **[#6318 — Unable to /rewind after /compress](https://github.com/QwenLM/qwen-code/issues/6318)** (P2, bug, welcome-pr)
   Users cannot rewind past a `/compress` boundary even when targeting non-compressed positions. Breaks core session navigation workflow. A fix PR (#6358) is already in progress.

6. **[#6321 — PreToolUse hook permissionDecision "ask" is silently denied](https://github.com/QwenLM/qwen-code/issues/6321)** (P2, bug)
   Documented hook behavior is broken: returning `permissionDecision: "ask"` never shows a confirmation prompt, silently falling back to deny. Affects all custom tool-security implementations.

7. **[#6384 — hard limit: 0 when env-configured model reserves full context for output](https://github.com/QwenLM/qwen-code/issues/6384)** (P2, bug)
   Session fails with "hard limit: 0" before sending any request—a zero-context-window guard that blocks model switching. Affects users who configure custom environment models.

8. **[#6403 — read_file should support bounded reads for large text files](https://github.com/QwenLM/qwen-code/issues/6403)** (P2, bug/enhancement, welcome-pr)
   10MB flat rejection blocks large log analysis. Community requesting line-range reads instead. A fix PR (#6404) was opened concurrently.

9. **[#6408 — Large PDF reads overflow prompt context](https://github.com/QwenLM/qwen-code/issues/6408)** (P2, bug, welcome-pr)
   100-page PDF → 100k chars injected directly into prompt, triggering "Context is too large" errors. A companion fix PR (#6409) landed same-day.

10. **[#6414 — vscode: Failed to connect to Qwen agent](https://github.com/QwenLM/qwen-code/issues/6414)** (bug, scope/vscode)
    Fresh issue with screenshot showing connection failure in VS Code extension. Limited information; likely related to daemon connectivity or authentication on newer VS Code builds.

## Key PR Progress

1. **[#6416 — Add serve env isolation and total admission](https://github.com/QwenLM/qwen-code/pull/6416)**
   Phase 2a guardrails for multi-workspace sessions. Runtime-local environment snapshot + workspace-scoped status consumers. Directly enables the RFC #6378 vision.

2. **[#6417 — Consolidate design docs under docs/](https://github.com/QwenLM/qwen-code/pull/6417)**
   Housekeeping: merges three competing doc locations into `docs/design/` and `docs/plans/`. Improves contributor onboarding.

3. **[#6361 — Support stacked slash-skill invocations](https://github.com/QwenLM/qwen-code/pull/6361)**
   Chain `/feat-dev /e2e-testing implement X` in a single prompt. Significant UX improvement for complex workflows.

4. **[#6415 — Report AutoFix review handoff failures](https://github.com/QwenLM/qwen-code/pull/6415)**
   Distinguishes diagnostic vs. terminal failures, adds `handoff.md` for explicit agent-failure reporting.

5. **[#6346 — Session artifact content retention](https://github.com/QwenLM/qwen-code/pull/6346)**
   Pinned artifact content retention with daemon APIs. Stacks on restart-recovery foundation. Enables durable workspace artifacts.

6. **[#6404 — Support large text range reads](https://github.com/QwenLM/qwen-code/pull/6404)**
   Fixes #6403: bounded line-range reads instead of 10MB flat rejection. Includes encoding metadata preservation and cancellation.

7. **[#6409 — Gate large PDF text extraction](https://github.com/QwenLM/qwen-code/pull/6409)**
   Fixes #6408: budget policy for PDF reads, falls back to `pages` parameter guidance instead of full injection.

8. **[#6358 — Allow rewind after compressed history](https://github.com/QwenLM/qwen-code/pull/6358)**
   Fixes #6318: treats `/compress` summary prefix as startup context, preserving rewinding capability.

9. **[#6390 — Avoid Unix pager default on Windows](https://github.com/QwenLM/qwen-code/pull/6390)**
   Fixes #6298: platform-aware shell pager default (`cat` on Unix, none on Windows). Blocks until user config.

10. **[#6349 — Add session start profiler](https://github.com/QwenLM/qwen-code/pull/6349)**
    Opt-in `QWEN_CODE_PROFILE_SESSION_START=1` for debugging session initialization latency. Records JSONL stage timings.

## Feature Request Trends

- **Multi-workspace daemon architecture** (#6378): The dominant architectural discussion. Community wants one daemon serving multiple isolated workspaces with separate session, memory, and tool contexts.
- **Enhanced file ingestion** (#6403, #6408): Users consistently requesting smarter handling of large files—bounded reads, page-range PDF extraction, and graduated file-size policies instead of flat rejections.
- **Channel intelligence** (#6224, #6376): Growing interest in natural-language memory management from chat channels (QQ Bot, WeCom), reducing reliance on slash commands.
- **Extension ecosystem** (#6347): Hot-reload for plugin/extension changes without restarting the daemon, improving development iteration speed.
- **Slash-skill composability** (#6361): Users want to combine multiple skills in single prompts, not just linear chaining.

## Developer Pain Points

- **Token economy unpredictability**: `/review` consuming excessive tokens (#6264) and hard context limits on model switch (#6384) create unpredictable billing and failure modes.
- **Windows parity gaps**: Shell tool piping through `cat` (#6298), extension install failures (#6334), and general Windows-specific breakage point to insufficient cross-platform testing.
- **KV-cache invalidation** (#6265): Performance regression from `tool_search` flushing caches on every deferred-tool load—critical for users on local or cloud LLM servers with non-trivial startup costs.
- **Session navigation broken by compression** (#6318): Core UX flow (rewind) fails after compression, forcing users to start new sessions.
- **Silent hook failures** (#6321): `PreToolUse` hooks with "ask" policy are silently denied, undermining trust in the hook system's documentation and making security policies unreliable.
- **Context overflow from large documents** (#6408, #6403): Flat 10MB limits and full PDF injection force users to manually pre-process documents, breaking the "just attach and ask" workflow.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-07

## 1. Today's Highlights

The v0.8.67 release cycle concluded overnight with 17 closed issues and a merged release PR, bringing production fixes for sub-agent reliability, TUI onboarding UX, and non-verifiable goal completion. Maintainers immediately pivoted to v0.8.68 planning, filing 10 structured issues targeting metacognitive harness improvements, refactoring two 2,600+ line modules, and adding CI checks for bot co-author trailers. A new crash-on-SIGPIPE bug (#4030) and a Dropbox File Provider sandbox issue (#4085) surfaced as critical regressions needing attention.

## 2. Releases

No new releases in the last 24 hours. The v0.8.67 release candidate was merged to `main` via PR #4047.

---

## 3. Hot Issues (Top 10 by Community Impact)

1. **#4032 — [bug] Codewhale not following the constitution** (22 comments)  
   *Author: stream2stream* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4032)  
   Codewhale repeatedly writes temporary scripts instead of using user-provided ones, then justifies the behavior when challenged. This undermines trust in agent compliance; the broadest discussion thread this week.

2. **#4085 — [bug] Cannot read/write files under ~/Library/CloudStorage/Dropbox/** (1 comment)  
   *Author: Watcher24* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4085)  
   Binary is ad-hoc signed with zero entitlements, blocking macOS File Provider access. Fresh, urgent — affects all macOS users with cloud-synced projects.

3. **#4030 — [bug] Panic on broken pipe (SIGPIPE)** (2 comments)  
   *Author: BrathonBai* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4030)  
   `codewhale doctor | head` crashes with a dump instead of clean termination. A fundamental reliability issue for CLI-first users.

4. **#4027 — [feat] MCP: add `always_load` server field** (2 comments)  
   *Author: SparkofSpike* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4027)  
   Proposes to skip deferred loading for high-frequency MCP tools to eliminate mandatory retry round-trips. Pragmatic UX improvement with clear design precedent in the ecosystem.

5. **#2870 — [EPIC] Staged command-boundary refactor** (10 comments)  
   *Author: aboimpinto* | [Issue](https://github.com/Hmbown/CodeWhale/issues/2870)  
   Long-running refactor tracking mergeable layers for #2791. PR #4046 landed as Layer 5.1, confirming zero code changes needed for the user-command boundary — evidence-based engineering.

6. **#4042 — [feat] Environment-level tool sandboxing for sub-agents** (9 comments)  
   *Author: JayBeest* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4042)  
   Proposes runtime enforcement of `--disallowed-tools` across sessions, sub-agents, Fleet workers, and MCP servers. High architectural relevance for multi-agent safety.

7. **#4029 — [question] Planning to create an interface similar to Reasonix?** (2 comments)  
   *Author: longASKme* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4029)  
   Community interest in an alternative UI paradigm; no maintainer response yet. Signals possible demand for visual agent orchestration.

8. **#4052 — [bug] `worktree=true` should discover nested repos** (3 comments)  
   *Author: Hmbown* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4052)  
   Closed in v0.8.67 — harness directories fail to find nested repos; now returns friendly errors instead of silent failure.

9. **#4053 — [bug] Token-budget exhaustion should be managed failure path** (1 comment)  
   *Author: Hmbown* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4053)  
   Closed — agents hitting budget limits produced raw completion text instead of structured recovery. Important for production-grade workflow reliability.

10. **#4061 — [tracker] v0.8.67 tracker** (3 comments)  
    *Author: Hmbown* | [Issue](https://github.com/Hmbown/CodeWhale/issues/4061)  
    Converted monolithic rebuild prompt into issue-driven work. Replaced ad-hoc process with traceable issues — a process win for future releases.

---

## 4. Key PR Progress (Top 10)

1. **#4047 — Release 0.8.67** — *Merged*  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4047)  
   Merged 78 commits covering Fleet/Workflow usability, goal-timer fix, and `whaleflow→workflow` rename. Core production release.

2. **#4046 — Layer 5.1: User command registry and loading boundary** — *Merged*  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4046)  
   Verified the boundary already meets all acceptance criteria; zero production code changed. Exemplary clean-sheet validation.

3. **#4044 — fix(onboarding): localize dynamic welcome steps** — *Open*  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4044)  
   Localizes first-run welcome through `MessageId` registry; adds zh-Hant sparse-pack support. Contributor: nightt5879.

4. **#4045 — fix edit_file UTF-8 fuzzy cursor panic** — *Open*  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4045)  
   Fixes panic when fuzzy match starts on multibyte CJK characters. Critical for non-Latin language users. Contributor: nightt5879.

5. **#4084 — fix(fleet): reject retired profile loadout aliases** — *Open*  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4084)  
   Removes deprecated `model_class_hint`/`route_tier` fields; enforces canonical `loadout` field. Contributor: cyq1017.

6. **#3969 — Add per-sub-agent provider routing** — *Open (held for v0.8.68)*  
   [PR](https://github.com/Hmbown/CodeWhale/pull/3969)  
   Adds explicit per-child model/provider routing. Maintainer held for fleet/routing redesign alignment. Contributor: heyparth1.

7. **#4071 — [v0.8.68] Engine: auto-inject git workspace snapshot into turn_meta** — *Closed*  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4071)  
   Automatic per-turn model context from cached git state — distinct from `@git` mention expansion. Enhances agent awareness.

8. **#4074 — [v0.8.68] Tools: auto-retry deferred tool once after schema hydration** — *Closed*  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4074)  
   Addresses #1419/#2253: first deferred-tool call fails when schema was hidden. Single auto-retry removes painful UX friction.

9. **#4081 — [v0.8.68] refactor(palette): separate theme tokens from adaptation logic** — *Closed*  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4081)  
   Splits 2,628-line `palette.rs` into token tables vs terminal-adaptation code. Architectural cleanup with immediate testability gain.

10. **#4078 — [v0.8.68] refactor(debug): finish command-group modularization** — *Closed*  
    [PR](https://github.com/Hmbown/CodeWhale/pull/4078)  
    Slice 2,629-line `debug.rs` into `debug/` submodule structure. Quick win for maintainability.

---

## 5. Feature Request Trends

- **Per-sub-agent provider routing** — Multiple issues/PRs (#4042, #3969) propose isolating model/provider configurations per child agent, not just per session. Extends sandboxing to provider level.
- **MCP deferred-loading opt-out** — #4027 requests `always_load` field to skip lazy loading for high-frequency MCP tools. Reduces first-call retry latency.
- **Non-verifiable goal completion** — #4054 (closed in v0.8.67) addressed "docs/research" goals that could never pass verification. Pattern suggests need for explicit "no-verifier" goal types.
- **Managed failure recovery paths** — #4053, #4050 (both closed) establish structured failure/retry patterns for token exhaustion and empty child output. Trend: replacing raw error surfacing with recovery logic.
- **Git context automation** — #4071 adds auto-injected git workspace snapshots per turn. Complements `@git` mentions; signals push toward always-contextual agents.

---

## 6. Developer Pain Points

1. **Agent non-compliance** — #4032's "Codewhale not following constitution" is the most-commented issue. Agents writing temp scripts despite user-provided scripts erodes developer trust.
2. **SIGPIPE crash dumps** — #4030: piping output causes panics. Breaks standard Unix pipeline patterns; surprising for CLI-native tool.
3. **macOS File Provider sandboxing** — #4085: ad-hoc signed binary cannot access Dropbox/cloud storage. Impacts all macOS users with cloud-synced workspaces.
4. **UTF-8 cursor handling** — #4045: fuzzy cursor panics on CJK characters. Signals incomplete multibyte string handling across the codebase schema.
5. **Empty child output** — #4050: sub-agents "succeed" with zero output. Defeats workflow debugging and necessitates the managed-failure pattern now being built.
6. **Onboarding provider lock-in** — #4062: first-run hardcodes DeepSeek in both UI copy and API key binding, despite the project's stated provider-agnostic principle.

</details>