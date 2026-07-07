# OpenClaw Ecosystem Digest 2026-07-07

> Issues: 264 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-07 10:14 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

Here is the OpenClaw project digest for July 7, 2026.

---

## OpenClaw Project Digest
**Date:** 2026-07-07
**Data Sources:** GitHub Issues, Pull Requests, Releases (OpenClaw Repository)

### 1. Today's Overview
The OpenClaw project remains in a state of high, sustained activity. With **264 issues** and **500 pull requests** updated in the last 24 hours, the community and development team are deeply engaged. The volume is driven by a massive backlog of high-priority bugs (especially around multi-agent orchestration, session state, and message loss) and a constant influx of new feature requests. The 223 closed/merged PRs today indicate a strong focus on resolution, though the 277 open PRs suggest the team is struggling to keep pace with contributions. No new releases today mark a pause in the fast-paced shipping cycle seen in prior weeks.

### 2. Releases
**None**
There were no new releases published today. The project remains on its previous version (likely v2026.6.x or v2026.3.x based on issue context).

### 3. Project Progress
The community merged or closed **223 pull requests** today. Key advancements include:
- **Security Hardening:** Several "size S" fixes were submitted to prevent resource exhaustion (OOM) by bounding reads of `IDENTITY.md`, `.gitignore`, and trajectory files (PRs [#101429](https://github.com/openclaw/openclaw/pull/101429), [#101447](https://github.com/openclaw/openclaw/pull/101447), [#101450](https://github.com/openclaw/openclaw/pull/101450)).
- **Encoding Safety:** A series of fixes addressed UTF-16 truncation bugs causing broken characters (`�`) in Discord threads, plugin approval titles, and CLI status output (PRs [#101307](https://github.com/openclaw/openclaw/pull/101307), [#101478](https://github.com/openclaw/openclaw/pull/101478), [#101503](https://github.com/openclaw/openclaw/pull/101503)).
- **Model Failover:** A fix for the `invalid_request_error` classification for Anthropic models was submitted, which should improve the robustness of model failover chains (PR [#101414](https://github.com/openclaw/openclaw/pull/101414)).
- **Feature Addition:** A new `SenseAudio web_search` provider was proposed (PR [#100886](https://github.com/openclaw/openclaw/pull/100886)).
- **Refactoring:** A major effort to retire the standalone Matrix QA runtime in favor of the canonical QA Lab was opened (PR [#101253](https://github.com/openclaw/openclaw/pull/101253)).

### 4. Community Hot Topics
The community is most concerned with reliability, security, and core architectural features. The most heavily debated and reacted-to items include:

- **Text Leakage Between Tool Calls (Issue [#25592](https://github.com/openclaw/openclaw/issues/25592)):** A **P1 Diamond Lobster** bug where internal processing text gets sent to messaging channels. With 33 comments, this is a top UX pain point that touches on the core of how agents interact with users.
- **Signal Daemon Race Condition (Issue [#22676](https://github.com/openclaw/openclaw/issues/22676)):** A high-impact bug causing orphaned processes and send failures upon restart. Its 17 comments and "Diamond Lobster" rating highlight its severity for users on the Signal channel.
- **Private Network Access via web_fetch (Issue [#39604](https://github.com/openclaw/openclaw/issues/39604)):** A **P2** feature request with 11 👍 reactions and 13 comments. Users strongly desire a config opt-in (`tools.web.fetch.allowPrivateNetwork`) to allow agents to interact with local network services, which is currently blocked by default for security.
- **Bootstrap Files Ignored in agentDir (Issue [#29387](https://github.com/openclaw/openclaw/issues/29387)):** A **P1 Diamond Lobster** bug where per-agent configuration files (SOUL.md, AGENTS.md) are ignored. This directly undermines a major feature for complex setups, evidenced by 5 👍 and 14 comments.
- **Per-Agent Cost Budget Enforcements (Issue [#42475](https://github.com/openclaw/openclaw/issues/42475)):** A **P2** feature with 12 comments about the need for gateway-level cost controls to prevent runaway LLM spend.

### 5. Bugs & Stability
The project is grappling with several critical stability and regressions. The most severe bugs reported today include:

- **Critical (P1):**
    - **Multi-agent orchestration instability (Issue [#43367](https://github.com/openclaw/openclaw/issues/43367)):** Concurrent agent config overwrites, session-lock failures, and detached child work. This is a systemic issue for a core feature.
    - **Signal Daemon race condition (Issue [#22676](https://github.com/openclaw/openclaw/issues/22676)):** Cause of orphaned processes and message send failures.
    - **Heartbeat blocks Telegram (Issue [#40611](https://github.com/openclaw/openclaw/issues/40611)):** A regression from a previous fix that now blocks message handling during active conversations.
    - **`exec` tool not inheriting `env` variables (Issue [#31583](https://github.com/openclaw/openclaw/issues/31583)):** A regression breaking secret injection for subprocesses.
- **High (P2):**
    - **Webchat Avatar broken (Issue [#38439](https://github.com/openclaw/openclaw/issues/38439) & [#41201](https://github.com/openclaw/openclaw/issues/41201)):** Multiple reports of a regression where agent avatars return 404.
    - **Write tool overwrites shared files (Issue [#40001](https://github.com/openclaw/openclaw/issues/40001)):** Isolated cron sessions destroy shared data, a critical issue for automated workflows.
    - **Google Vertex/Gemini crash (Issue [#38327](https://github.com/openclaw/openclaw/issues/38327)):** A regression causing a "Cannot convert undefined or null to object" error.

Several corresponding fix PRs were submitted today (e.g., for OOM risks), but no PRs directly referencing the most critical bugs above were merged today.

### 6. Feature Requests & Roadmap Signals
The feature request pipeline is full of ambitious ideas. The most signal-rich topics are:

- **Distributed Agent Runtime (Issue [#42026](https://github.com/openclaw/openclaw/issues/42026)):** A proposal to split the monolithic gateway into a Control Plane and Agent Runtime. This is a significant architectural shift that could be a long-term roadmap item.
- **Tiered Bootstrap File Loading (Issue [#22438](https://github.com/openclaw/openclaw/issues/22438)):** A **P2** feature to allow progressive context loading, saving tokens on large workspaces. This is a high-impact optimization that is likely to be implemented. A related bug about bootstrap files being ignored (Issue [#29387](https://github.com/openclaw/openclaw/issues/29387)) suggests this area is a priority.
- **PostgreSQL Backend Support (Issue [#90370](https://github.com/openclaw/openclaw/issues/90370)):** A strong demand from Chinese-speaking users and teams for an alternative to the hardcoded SQLite storage. The fact that it was closed today but has 12 comments indicates it was discussed but perhaps deprioritized.
- **Capability Profiling & Shared Blackboard (Issue [#35203](https://github.com/openclaw/openclaw/issues/35203)):** A comprehensive proposal to improve multi-agent collaboration with capability profiling, shared blackboards, and cost governance. This suggests the community sees multi-agent as a core future use case.

**Prediction for next minor release:** The persistent "Tiered Bootstrap Loading" and fixes for the "Text Leakage Between Tool Calls" are high-likelihood candidates based on community demand and P1 priority.

### 7. User Feedback Summary
Real users are expressing both frustration and hope:

- **Pain Points:** The most common frustration is **unpredictable behavior in core workflows**. This includes messages leaking to wrong channels, cron jobs corrupting data, and multi-agent orchestration breaking down (Issues [#25592](https://github.com/openclaw/openclaw/issues/25592), [#40001](https://github.com/openclaw/openclaw/issues/40001), [#43367](https://github.com/openclaw/openclaw/issues/43367)). Another major pain point is **broken regressions**, particularly around Docker installations (Issue [#31331](https://github.com/openclaw/openclaw/issues/31331)) and the Web UI avatar (Issue [#38439](https://github.com/openclaw/openclaw/issues/38439)).
- **Use Cases:** Users are clearly **pushing the project to be a production-ready, multi-agent runtime**. Requests for distributed runtimes, cost budgets, isolated browser profiles, and PostgreSQL support all point to professional, enterprise-grade deployments.
- **Dissatisfaction:** The volume of "regression" labeled bugs points to a cycle of fixes introducing new problems, eroding user confidence in stability.

### 8. Backlog Watch
Several critical items remain open and are waiting for maintainer action or product decisions.

- **Signal Daemon Race Condition (Issue [#22676](https://github.com/openclaw/openclaw/issues/22676)):** A **P1 Diamond Lobster** bug from **February 21**. Despite its severity, it remains open with no linked fix PR.
- **Multi-agent Orchestration Instability (Issue [#43367](https://github.com/openclaw/openclaw/issues/43367)):** A **P1 Diamond Lobster** bug from **March 11**. This is a cornerstone feature that is broken, yet it lingers.
- **Bootstrap Files in agentDir Ignored (Issue [#29387](https://github.com/openclaw/openclaw/issues/29387)):** A **P1 Diamond Lobster** bug from **February 28**. This is a fundamental configuration issue that undermines the "agent" concept and has seen no fix.
- **`exec` tool env variable regression (Issue [#31583](https://github.com/openclaw/openclaw/issues/31583)):** A **P1 Diamond Lobster** regression from **March 2** that breaks secret management. No fix PR is linked.
- **Per-Agent Cost Budget Enforcement (Issue [#42475](https://github.com/openclaw/openclaw/issues/42475)):** A **P2 Diamond Lobster** feature from **March 10** waiting on a product decision. This is critical for operationalizing agent deployments.

The number of high-priority, long-standing issues without clear resolution paths is a significant concern for the overall health and stability of the project.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report.

---

## Cross-Project Ecosystem Comparison Report
**Date:** 2026-07-07
**Audience:** Technical decision-makers and developers

### 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing a healthy tension between rapid feature expansion and urgent security hardening. On July 7, 2026, the landscape is defined by a surge in coordinated security audits across multiple projects (NanoBot, TinyClaw, LobsterAI), while core reference implementations like OpenClaw struggle with P1 backlog items that undermine multi-agent reliability. The community is collectively pushing projects toward enterprise-grade stability—demanding distributed runtimes, cost governance, per-channel isolation, and robust failover—signaling a maturation from experimental "agent frameworks" toward production-ready deployments. Projects are converging on common pain points around tool call safety, workspace isolation, and provider compatibility, but differentiating significantly in their architectural approaches and target user segments.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | New Release | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 264 | 500 | 223 | None | 🟡 **High volume, but struggling under backlog** |
| **NanoBot** | 43 | 33 | 12 | None | 🟡 **High security churn; audit-driven** |
| **Hermes Agent** | 19 | 50 | 18 | None | 🟢 **Strong throughput, rapid bug fixes** |
| **PicoClaw** | 3 | 5 | 0 | None | 🟢 **Stable, low volume** |
| **NanoClaw** | 0 | 17 | 3 | None | 🟢 **Documentation refresh; steady** |
| **NullClaw** | 0 | 0 | 0 | None | ⚪ **Inactive** |
| **IronClaw** | 14 | 50 | 19 | None | 🟢 **Healthy bug bash + infrastructure** |
| **LobsterAI** | 8 | 17 | 15 | None | 🟡 **High velocity + 3 critical vulns** |
| **TinyClaw** | 9 | 0 | 0 | None | 🔴 **9 security vulns; zero fixes** |
| **Moltis** | 0 | 5 | 3 | None | 🟢 **Steady maintenance** |
| **CoPaw** | 17 | 38 | 20 | v2.0.0-beta.3, v1.1.12.post3 | 🟢 **Pre-release transition; healthy** |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚪ **Inactive** |
| **ZeroClaw** | 9 | 50 | 13 | None | 🟢 **High activity; security fix day** |

**Note on Health Score:**
- 🟢 Healthy: Active development, responsive maintainers, manageable backlog.
- 🟡 Caution: High volume with emerging risks (security vulns, long-standing P1 bugs).
- 🔴 Critical: Unaddressed security vulnerabilities with no available fixes.
- ⚪ Inactive: No activity in the reporting period.

### 3. OpenClaw's Position

OpenClaw remains the **ecosystem's flagship reference implementation** by a significant margin, with 264 issues and 500 PRs updated in a single day—an order of magnitude more activity than any peer. However, this volume is partially a liability: the project is drowning in a massive backlog of 277 open PRs and several "P1 Diamond Lobster" bugs—including multi-agent orchestration instability and Signal daemon race conditions—that have remained unresolved for months. In contrast, **IronClaw** and **CoPaw** demonstrate stronger closure rates relative to their issue volumes, suggesting more efficient triage.

**Key advantages:**
- **Community size:** Unmatched contributor base; 14 unique authors in a single day for Hermes Agent, but OpenClaw sees orders of magnitude more.
- **Feature breadth:** Advanced multi-agent orchestration, distributed runtime proposals, and tiered bootstrap loading are already in design.
- **Ecosystem gravity:** The "Claw" naming convention across PicoClaw, NanoClaw, ZeroClaw, etc., signals OpenClaw's role as the architectural ancestor.

**Key weaknesses:**
- **Stability debt:** Long-standing P1 bugs (some dating to February) erode confidence; "regression" is a recurring label.
- **Review bottleneck:** 277 open PRs suggests maintainer bandwidth is insufficient for the contribution inflow.
- **Security posture:** While security fixes are merging, the volume of P1 issues suggests reactive rather than proactive hardening.

**Technical approach differences:** OpenClaw uses a monolithic gateway architecture (with a proposal to split into Control Plane + Agent Runtime), whereas **NanoBot** and **Hermes Agent** favor more modular, provider-agnostic designs. **CoPaw** is investing in a plugin system for custom channel registration, while **ZeroClaw** is building an OpenAI-compatible HTTP endpoint.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating ecosystem-wide priorities:

| Requirement | Affected Projects |
|---|---|
| **Workspace / File system isolation** | OpenClaw (web_fetch private network opt-in), NanoBot (restrict_to_workspace defaults), TinyClaw (agent ID path traversal), CoPaw (Windows sandbox ACE pollution) |
| **Multi-agent orchestration reliability** | OpenClaw (P1 instability), LobsterAI (delegated subagent collaboration), Hermes Agent (generalized ACP client), ZeroClaw (delegate tool access) |
| **Cost governance & rate limiting** | OpenClaw (per-agent cost budgets), PicoClaw (rate limiting broken without fallback), CoPaw (multi-dimensional rate limiting in v2.0.0-beta.3) |
| **OAuth / credential management** | Moltis (MCP OAuth fix), NanoClaw (Teams CLI-first credentials), TinyClaw (unauthenticated token proxy), LobsterAI (unauthenticated token proxy) |
| **Provider-agnostic tool calling** | NanoBot (Gemini thought_signature), OpenClaw (Anthropic failover fix), PicoClaw (Gemini OpenAI compat), CoPaw (Gemini const schema sanitization) |
| **Localization / i18n** | IronClaw (11-language i18n PR), ZeroClaw (Fluent locale lags), LobsterAI (Chinese UI breakage) |
| **Real-time activity observability** | IronClaw (activity panel UX fix), OpenClaw (text leakage between tool calls), NanoClaw (audit logging merged) |
| **Channel-specific security (WhatsApp, DingTalk, Slack)** | CoPaw (DingTalk isolation), Hermes Agent (WhatsApp regression), Moltis (WhatsApp LID migration), ZeroClaw (Telegram setup docs), OpenClaw (Signal daemon race) |

### 5. Differentiation Analysis

| Project | Core Differentiator | Target User | Architecture |
|---|---|---|---|
| **OpenClaw** | **Ecosystem hub & reference** — broadest feature surface, largest community | Power users, integrators, multi-agent orchestrators | Monolithic gateway → splitting to Control/Agent planes |
| **NanoBot** | **Security-first hardening** — rapid response to audits, workspace isolation | Security-conscious developers, enterprise pilots | Modular, provider-agnostic |
| **Hermes Agent** | **Multi-agent CLI orchestration hub** — ACP client generalization | Developers managing multiple coding agents | Gateway-centric, Discord-first |
| **PicoClaw** | **Lightweight embedded agent** — WebSocket remote mode | Embedded/IoT, headless pipelines | Minimal footprint |
| **NanoClaw** | **Voice + enterprise integration** — Zoom voice agent, K-ai vision | Enterprise teams, multimodal use cases | Skills-based, SSF-structured |
| **IronClaw** | **Postgres-scale infrastructure** — HST v2, localization, WebUI v2 | Enterprise single-tenant deployments | Rust backend, i18n-ready |
| **LobsterAI** | **Agent delegation & scheduled tasks** — Cowork, cron, email skill | Task automation, collaborative agents | Monorepo with release branches |
| **TinyClaw** | **Ultra-lightweight** — but critically insecure by default | Hobbyists, local-only experimentation | Minimal attack surface (unachieved) |
| **Moltis** | **Integration reliability** — MCP OAuth, WhatsApp LID, Docker | Integration-heavy users, bridging services | Rust-based, dependency-focused |
| **CoPav** | **Pre-release v2.0 innovation** — plugin system, computer-use, bundled Node | Early adopters, Windows desktop automation | Plugin system + Tauri desktop |
| **ZeroClaw** | **SOP engine & enterprise governance** — approval gates, tool policy | Compliance-heavy enterprises, workflow automation | Rust + Web UI, OpenAI compat endpoint |
| **NullClaw / ZeptoClaw** | **Inactive** — no community momentum | N/A | N/A |

### 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (High Innovation + High Bug Fixing Velocity):**
- **OpenClaw**, **IronClaw**, **CoPaw**, **ZeroClaw**, **Hermes Agent**: These projects are shipping significant features, merging double-digit PRs daily, and attracting diverse contributors. CoPaw is in a pre-release transition (v2.0.0-beta.3), while IronClaw is deep into a bug bash cycle with strong QA coverage.
- **NanoBot**, **LobsterAI**: High activity driven by security audits and vulnerability disclosure, creating a temporary spike that may stabilize into a more secure codebase.

**Tier 2 — Stabilizing (Lower Volume, Consolidation Focus):**
- **NanoClaw**, **Moltis**, **PicoClaw**: These projects are in a steady maintenance phase, focusing on documentation refresh, dependency bumps, and targeted bug fixes. NanoClaw is modernizing its developer documentation; Moltis is cleaning up Docker and OAuth edge cases.

**Tier 3 — Inactive / Critical Risk:**
- **TinyClaw**: **No development activity, 9 unaddressed critical security vulnerabilities.** Any user with a network-accessible deployment is at risk of full system compromise. **Recommendation:** Do not deploy or use until maintainers engage.
- **NullClaw**, **ZeptoClaw**: No activity in the reporting period; effectively abandoned.

**Key maturity indicators:**
- **Dependency management:** Moltis and ZeroClaw show proactive dependency bumping (WhatsApp library, crossbeam-epoch).
- **Testing culture:** IronClaw merged a comprehensive fault-coverage matrix test PR (#5613); CoPaw submitted 29 regression test cases for large-session crashes.
- **Security disclosure:** NanoBot, TinyClaw, and LobsterAI received security audit disclosures this week—a sign of security researchers taking interest, but only NanoBot has begun landing fixes.

### 7. Trend Signals

1. **Security is the #1 community concern.** Three projects received coordinated vulnerability disclosures this week. The ecosystem is moving from "build fast" to "secure the basics"—workspace isolation, authentication on control planes, and consistent tool policy enforcement. Developers building on these frameworks should prioritize **defense-in-depth** from day one.

2. **Multi-agent orchestration is the next battleground.** OpenClaw, Hermes Agent, LobsterAI, and ZeroClaw are all investing in delegation, subagent collaboration, and shared context. However, the technology is still brittle—OpenClaw's P1 orchestration instability and CoPaw's DingTalk isolation gaps show the gap between ambition and reliability.

3. **Enterprise requirements are driving architectural decisions.** Demand for PostgreSQL backend, cost budgets, audit logging, localization, and role-based access controls is rising across projects. Developers targeting enterprise deployments should evaluate **IronClaw** (Postgres v2), **ZeroClaw** (SOP engine), or **NanoClaw** (audit logging) for compliance-heavy use cases.

4. **Platform-specific pain points remain underserved.** Windows corporate environments (Hermes Agent), Chinese IM platforms (CoPaw's DingTalk, ZeroClaw's Bocha search), and WhatsApp LID migration (Moltis) all represent friction points for global deployments. Expect this to drive stronger CI/CD matrix testing and provider abstraction layers.

5. **Developer experience (DX) is splitting.** The ecosystem is polarizing between **CLI-first** (Hermes Agent's ACP orchestration, NanoBot's CLI improvements) and **WebUI-first** (IronClaw's WebUI v2, CoPaw's console, ZeroClaw's dashboard) approaches. Developers should choose based on their team's workflow preference and automation needs.

**Bottom line for AI agent developers:** The ecosystem is viable for production use, but requires careful vendor selection. For stability and security, favor **IronClaw**, **CoPaw**, or **ZeroClaw** (with proper review). For innovation and community size, **OpenClaw** remains unmatched but comes with stability risk. **Avoid TinyClaw** in any network-accessible deployment until security patches land.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot on 2026-07-07.

---

## NanoBot Project Digest: 2026-07-07

### 1. Today's Overview
The NanoBot project is experiencing a surge in activity, driven primarily by a comprehensive security and correctness audit that dropped yesterday. Today saw a high volume of new issues (43 updated) reporting specific vulnerabilities and bugs, alongside a flurry of pull requests (33 updated) aimed at fixing them. The focus has shifted significantly from feature development to hardening the codebase, with critical security patches being prioritized. The maintainers are actively engaging with these reports, as evidenced by the rapid merging of several high-priority fixes.

### 2. Releases
No new releases were published today.

### 3. Project Progress
The project saw 12 pull requests merged or closed today, reflecting a strong focus on stabilizing the codebase.

- **Security Fixes:**
    - **[PR #4671]** (Merged) *fix: pin validated dns for ssrf checks*: This high-priority fix directly addresses the critical SSRF TOCTOU vulnerability reported in issue #4611.
    - **[PR #4669]** (Open) *fix: require api key for serve*: A high-priority PR attempting to fix issue #4078 by enforcing API key configuration before the API server starts.
- **Code Quality & Refactoring:**
    - **[PR #4824]** (Merged) *chore: remove unused dead code*: A PR that removes orphaned functions and unused exports, directly addressing findings from the recent audit (issue #4806).
    - **[PR #4766]** (Merged) *refactor(webui): drive slash commands from lifecycle metadata*: Refactors the WebUI to use backend metadata for slash command behavior, improving accuracy and maintainability.
- **Bug Fixes:**
    - **[PR #4821]** (Merged) *fix(webui): show generic tool arguments in activity*: Improves the WebUI's display of tool arguments, making debugging easier.
    - **[PR #4614]** (Merged) *feat(cli): support multiline input via Alt+Enter*: This feature and fix are now merged, improving the CLI user experience.
    - **[PR #3232]** (Merged) *refactor(agent): simplify task done-callback ...*: Refactors internal agent callback logic for better readability and to fix a bug from a previous sync.

### 4. Community Hot Topics
The community's focus is almost entirely on the recently surfaced security audit.

- **[Issue #4815]** `Audit summary: 35 security / bug / refactor findings from deep code audit` (0 comments, but the source of today's activity): This is the root cause of the current activity spike. The high number of issues filed today (from `#4789` to `#4815`) all trace back to this single comprehensive audit.
- **[Issue #4013]** `Error calling LLM: stream stalled for more than 90 seconds` (6 comments): A longstanding user-reported issue detailing a regression in `v0.2.0` where LLM streaming stalls. The user reports this makes the project "useless" for real work, indicating a high-impact user-facing bug.
- **[Issue #4823]** `[bug, regression] whatsapp - groups` (3 comments): A post-`v0.2.2` regression where the WhatsApp group allowlist functionality is broken, causing the bot to respond in all groups instead of allowed ones. A fix is already available in **[PR #4834]**.

### 5. Bugs & Stability
Today is dominated by new bug and security reports from the comprehensive audit.

**Critical Severity (Security by Design):**
- **[Issue #4827]**, **[Issue #4826]**, **[Issue #4825]**: Three separate issues detail a significant security vulnerability where the embedded WebUI can issue unrestricted API bearer tokens to any unauthenticated localhost process. This is a severe design flaw.
- **[Issue #4796]** `restrict_to_workspace defaults to False`: The agent’s filesystem tools are not confined by default, exposing the entire filesystem to the LLM.

**High Severity (Data Integrity & Stability):**
- **[Issue #4798]** `Concurrent file writes...workspace file corruption`: No file-level locking can lead to data corruption from parallel agent sessions.
- **[Issue #4794]** `Exec sessions have no shutdown cleanup...` (Orphaned processes): A reliability issue where child processes are not cleaned up on shutdown.
- **[Issue #4793]** `Global ExecSessionManager singleton...cross-session data visibility`: A design flaw allowing one user's exec session to be accessed by another user.

**Medium Severity (Bugs & Regressions):**
- **[Issue #4829]** `aiohttp missing in the slack dependencies`: A build dependency bug preventing the Slack plugin from working.
- **[Issue #4823]** `whatsapp - groups` (Regression): The WhatsApp allowlist bug is a regression affecting a core feature. A fix PR [#4834] is open.
- **[Issue #4802]** `Token budget returns spurious 128 when context window is disabled`: A configuration bug where disabling the budget doesn't work as expected.
- **[Issue #4805]** `suppress(Exception) on prepare_call silently swallows tool validation errors`: Causes silent failures when tool preparation fails, making debugging very difficult. A fix is proposed in **[PR #4811]**.

### 6. Feature Requests & Roadmap Signals
There were no standard feature requests filed today. All new issues are focused on bugs and security. However, the open pull requests signal strong direction for the immediate future:

- **[PR #4828]** `Add WebUI file edit diff view`: This indicates a strong focus on improving the developer experience within the WebUI.
- **[PR #4833]** `Gate sustained goals behind explicit runtime mode`: Suggests a maturing of the "goals" feature, making its powerful `create_goal`/`update_goal` tools less error-prone by gating them behind a specific mode.
- **[PR #4430]** `configure web_fetch provider`: The project is expanding its web-fetching capabilities by making the provider (Tavily, Jina, etc.) configurable.

### 7. User Feedback Summary
- **Serious Dissatisfaction (Regression):** User `mxnbf` in Issue #4013 describes a major regression in `v0.2.0` where LLM calls stall after 90 seconds, rendering the tool "useless for any real work." The tone suggests high frustration with the instability of a new release.
- **Real-World Use Case Pain:** The WhatsApp regression in Issue #4823 highlights a real-world deployment issue where the bot's behavior changed unexpectedly post-update, causing it to spam all groups instead of targeted ones.
- **Security Consciousness:** The submission of three security advisories from `YLChen-007` and the detailed audit from `hamb1y` show that the user base is actively looking for and reporting security flaws, indicating the project is used in environments where security is a concern.

### 8. Backlog Watch
- **[Issue #4013]** `Error calling LLM: stream stalled for more than 90 seconds` (Closed): While closed, the underlying problem of streaming reliability for certain users may not be fully resolved. A closed issue without a linked long-term fix PR could be a point of future frustration.
- **[PR #2060]** `feat: shell tool: allow configurable specific paths...` (Closed, conflict): This is a detailed, user-contributed feature to allow specific system paths (like `/dev/null`) when `restrict_to_workspace` is enabled. It was closed due to conflict. The core requirement (making the workspace restriction smarter) is still relevant and should be revisited in light of the new security restrictions being implemented.
- **[PR #4430]** `feat(web): configure web_fetch provider` (Open, conflict): This feature PR to add configurable web fetching providers has been open since June 21st and is now conflicting. It addresses a user-requested feature and needs maintainer attention to resolve conflicts and merge.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-07

---

## 1. Today's Overview

The Hermes Agent project shows **high activity** with 19 issues and 50 pull requests updated in the last 24 hours, indicating a robust development cadence. Critical bug fixes dominate the day's work, with 18 PRs merged/closed and 4 issues resolved, particularly around Windows installer reliability, gateway session management, and provider-specific compatibility. A significant cluster of Windows-specific installer bugs (#60129–#60132) suggests recent deployment stress on corporate-managed environments, while the opening of 4 new issues today indicates active community engagement. No new releases were published, but the volume of fix PRs suggests a patch release may be imminent.

---

## 2. Releases

**No new releases today.** The latest available version remains v0.18.0 (referenced in issue #60144).

---

## 3. Project Progress

**18 PRs merged/closed today,** reflecting substantial project advancement:

**Critical Bug Fixes:**
- **Dashboard Authentication Fix (#60123, CLOSED):** Resolved HTTP 500 errors when accessing the dashboard root path (`/`) with password-only auth providers (BasicAuthProvider) configured. This was a high-priority (P2) fix.
- **Multi-type JSON Schema Preservation (#48711, CLOSED):** Fixed schema handling for MCP tool definitions using `["number","string"]`-style arrays, ensuring Gemini and llama.cpp backends receive complete `anyOf` representations instead of dropping all but the first type.

**Feature Implementations:**
- **Discord Branching/Merging (#60146, OPEN):** New `/branch` command spawns a thread under a parent text channel, while `/merge` folds the branch back, enabling structured conversation workflows on Discord.

**Infrastructure & Stability:**
- **File Descriptor Leak Fix (#60151, OPEN):** Corrects a file descriptor leak in the cron locking mechanism when flock/locking operations fail.
- **Python 3.14 Support (#60150, OPEN):** Raises `requires-python` to `<3.15`, enabling installation on Python 3.14 without compilation errors.
- **Weixin Connection Pool Fix (#60149, OPEN):** Mitigates aiohttp connection pool poisoning for Weixin/iLink connections with `force_close=True` and retry logic.
- **Tool Repetition Detection (#60148, OPEN):** Adds a content-hash tracker to `ToolCallGuardrailController` to catch loops where tool arguments vary but results remain identical.

---

## 4. Community Hot Topics

### Most Active Issues

1. **#5257 - Generalized ACP Client for Multi-Agent CLI Orchestration** (14 comments, 18 👍)
   [GitHub Link](https://github.com/NousResearch/hermes-agent/issues/5257)
   *Analysis:* This feature request has sustained high interest for 3 months. The community wants Hermes to move beyond its Copilot-specific ACP client to support all ACP-compatible coding agents (Claude Code, open-codex, Goose). This signals a strategic desire for Hermes to become an **orchestration hub** rather than just an agent framework—users envision managing multiple AI coding agents from a single CLI.

2. **#60105 - Dashboard HTTP 500 on Root Path with Password-Only Auth** (2 comments)
   [GitHub Link](https://github.com/NousResearch/hermes-agent/issues/60105)
   *Analysis:* Already fixed by PR #60123 (merged today). This rapid turnaround demonstrates strong maintainer responsiveness to authentication bugs.

3. **#14980 - WhatsApp Bridge npm Install Timeout** (6 comments, 3 👍, CLOSED)
   [GitHub Link](https://github.com/NousResearch/hermes-agent/issues/14980)
   *Analysis:* A long-standing P1 bug (2+ months) that was finally closed today. Affected NAS/slow-disk Docker environments where the 60-second npm install timeout was insufficient.

### Most Active PRs

- **#60146 - Discord Branch/Thread Feature** (new feature generating discussion)
- **#60137 - Telegram Polling Watchdog** (critical reliability fix for Telegram gateway)

---

## 5. Bugs & Stability

### Critical/High Severity (P1-P2)

| Issue | Severity | Problem | Fix PR? |
|-------|----------|---------|---------|
| [#60105](https://github.com/NousResearch/hermes-agent/issues/60105) | P2 | Dashboard 500 with BasicAuthProvider | ✅ #60123 (merged) |
| [#60129](https://github.com/NousResearch/hermes-agent/issues/60129) | P2 | Windows installer fails on corp-managed PowerShell (StandardErrorEncoding) | ✅ #60143 (open) |
| [#60130](https://github.com/NousResearch/hermes-agent/issues/60130) | P2 | Windows installer merge conflict on re-run (i18n docs) | ❌ No fix |
| [#60131](https://github.com/NousResearch/hermes-agent/issues/60131) | P2 | Desktop npm install fails on Windows | ❌ No fix |
| [#60132](https://github.com/NousResearch/hermes-agent/issues/60132) | P2 | `uv --version` fails with "Access denied" on corp-managed Windows | ❌ No fix |
| [#60136](https://github.com/NousResearch/hermes-agent/issues/60136) | P2 | Gateway `/resume` ignores search results numbering | ✅ #60138 (open) |
| [#60144](https://github.com/NousResearch/hermes-agent/issues/60144) | P2 | Desktop boot fails when platform adapter import exceeds 15s timeout | ❌ No fix |
| [#36801](https://github.com/NousResearch/hermes-agent/issues/36801) | P2 | Long Codex sessions grow unbounded (no compaction) | ❌ Closed without fix |
| [#21126](https://github.com/NousResearch/hermes-agent/issues/21126) | P2 | Weixin rate limiting causes message loss | ❌ No fix |
| [#53002](https://github.com/NousResearch/hermes-agent/issues/53002) | P2 | Z.ai 429/1305 persists on chat/completions path | ❌ No fix (needs repro) |

### Medium Severity (P3)

- **#60141 - TUI low-contrast text on macOS Terminal.app light profile** (new)
- **#60142 - Invalid/spam feature request** (marked invalid)
- **#54922 - custom_providers[].extra_body silently dropped on gateway paths** (CLI works)
- **#59260 - Plugin tool approval prompts fail over gateway bridge with 300s timeout**
- **#54745 - Discord REST helper reads response bodies without size cap** (CLOSED)

### Windows Platform Concerns
Four Windows-specific bugs (#60129–#60132) were opened today by `chirag127`, all P2 severity, specifically affecting **corporate-managed Windows 11** environments. Three of these lack fix PRs, indicating a gap in Windows platform testing coverage.

---

## 6. Feature Requests & Roadmap Signals

### High-Likelihood for Next Release

1. **#5257 - Generalized ACP Client** (18 👍, 3 months old)
   - *Prediction:* Likely to be scheduled for v0.19.0 given sustained community interest and the strategic value of Hermes becoming a multi-agent orchestrator.

2. **#60124 - Native Android App** (new, duplicate flag)
   - *Prediction:* Low priority (P3, marked duplicate). No existing Android codebase, so this is likely months away.

3. **#33130 - OpenAI Codex Compaction API** (CLOSED without resolution)
   - *Prediction:* The closure without merging suggests the maintainers chose the internal compaction approach. Unlikely to be revisited unless users demand it.

4. **#58282 - Telegram Mini App Dashboard** (open PR, P3)
   - *Prediction:* This feature is already in PR form. If it passes review, it could land in v0.19.0, providing Telegram-native dashboard access.

### Strategic Signals

- **Multi-agent orchestration** (#5257) is the strongest roadmap signal—it would transform Hermes from "one agent framework" to "agent hub."
- **Mobile access** (#60124) represents growing demand for companion apps beyond Telegram/WhatsApp.
- **Cross-platform reliability** (especially Windows corporate environments) is an emerging pain point the team must address.

---

## 7. User Feedback Summary

### Positive Signals
- **Rapid bug fixing:** The #60105 → #60123 turnaround (same-day fix) shows responsiveness to critical auth bugs.
- **Community tool contributions:** Multiple new contributors (chirag127, GodsBoy, kshitijk4poor, kyssta-exe) are actively submitting fixes for edge cases.

### Pain Points

| Theme | Evidence | Impact |
|-------|----------|--------|
| **Windows corporate deployment** | #60129–#60132 | Installer completely fails on managed Windows 11 |
| **Gateway bridge reliability** | #59260, #60136, #60125 | Silent failures on tool approval, session search |
| **Provider compatibility** | #53002 (Z.ai), #36801 (Codex) | Unbounded context, persistent 429 errors |
| **Desktop app stability** | #60144, #60131 | Boot failures, npm install crashes |
| **Documentation inaccuracies** | #60134 (Discord permissions) | Users hitting 403 errors from wrong invite integers |

### Notable User Narrative
The cluster of Windows bugs from a single user (`chirag127`) reveals that **corporate-managed Windows environments** (with group policy restrictions on PowerShell, stdout encoding, and file permissions) are **currently unsupported** despite documentation suggesting Windows compatibility. This represents an underserved segment of potential enterprise users.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Status | Why Overdue |
|-------|-----|--------|-------------|
| [#21126 - Weixin Rate Limiting](https://github.com/NousResearch/hermes-agent/issues/21126) | 2 months | P2, needs-repro | Message loss bug; requires exponential backoff implementation |
| [#53002 - Z.ai 429/1305](https://github.com/NousResearch/hermes-agent/issues/53002) | 11 days | P2, needs-repro | Critical provider broken; previous fix (#47685) was incomplete |
| [#54922 - extra_body silently dropped](https://github.com/NousResearch/hermes-agent/issues/54922) | 8 days | P3 | Configuration silently ignored on gateway paths; CLI works fine |
| [#59260 - Gateway tool approval timeout](https://github.com/NousResearch/hermes-agent/issues/59260) | 1 day | P3, needs-repro | New issue; approval flow completely broken over bridges |

### PRs Awaiting Review

| PR | Age | Priority | Notes |
|----|-----|----------|-------|
| [#60143 - Windows installer StandardErrorEncoding fix](https://github.com/NousResearch/hermes-agent/pull/60143) | Today | P2 | Blocks all corporate Windows installations |
| [#60138 - Gateway resume search results](https://github.com/NousResearch/hermes-agent/pull/60138) | Today | P2 | Fixes UX bug in session navigation |
| [#60137 - Telegram polling watchdog](https://github.com/NousResearch/hermes-agent/pull/60137) | Today | P2 | Prevents complete Telegram communication freeze |
| [#48637 - Lazy deps skip ensurepip](https://github.com/NousResearch/hermes-agent/pull/48637) | 19 days | P2 | Performance optimization for NixOS/Homebrew |

### Project Health Assessment

**Green flags:** High PR throughput (50 updated, 18 merged), rapid bug fix turnaround, diverse contributor base (14 unique authors in today's PR list).

**Yellow flags:** 4 unresolved P2 Windows bugs from today alone, 2+ month old Weixin issues still unaddressed, incomplete Z.ai provider fix creating user frustration.

**Recommendation:** The team should prioritize the Windows corporate deployment blockers (#60129–#60132) and the Z.ai provider regression (#53002) before the next release to avoid losing enterprise and China-market users respectively.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-07

*Generated from GitHub activity (sipeed/picoclaw)*

---

## 1. Today's Overview

Project activity is moderate today with 3 open issues and 5 pull requests updated in the last 24 hours. No new releases or merged PRs were recorded, suggesting the core team is currently focused on review and refinement rather than cutting new versions. The community remains engaged, with both bug reports and feature requests arriving from different contributors. Notably, one PR (#3227) was closed without merge, likely rejected or withdrawn, indicating a cautious approach to changes. Overall, the project appears stable but with several known friction points around provider compatibility and tool safety.

---

## 2. Releases

No new releases. The latest version on the repository remains at the pattern seen in recent issues (0.3.x range).

---

## 3. Project Progress

No PRs were merged or closed as accepted today.

**Closed without merge:**
- **#3227** [CLOSED] `fix(providers): resolve tool_use name/args from Function on reloaded history` — Proposed to fix a session-history corruption bug where tool call fields are lost after round-tripping through JSON. The PR author (AayushGupta16) appears to have retracted or maintainers declined the approach. No discussion comments are visible, so the reason is unclear.

**Still open and under review:**
- **#3226** [OPEN] `fix(tools): stop write_file from coaching destructive overwrite` — Addresses a behavioral issue where the write_file tool encourages overwriting existing memory files. Second update today suggests active maintainer attention.
- **#3118** [OPEN] `Add remote Pico WebSocket mode to picoclaw agent` — Still lingering after 25 days, likely waiting for design approval or additional testing.
- **#3115** [OPEN] `Fix inline data URL media extraction for generic tool output` — Another long-standing PR (25 days) addressing data-URL handling in session logs.

---

## 4. Community Hot Topics

No issues or PRs have comments or reactions today. However, the following items show renewed attention:

- **#3226** `fix(tools): stop write_file from coaching destructive overwrite` — Updated today by maintainers. The PR addresses a subtle but important UX issue where the generic file-overwrite guard proactively suggests rewriting `MEMORY.md`. This touches on the core agent autonomy debate: how much should the tool guide versus constrain the model? Underlying need: users want safe defaults that don't nudge the model toward risky file changes.

- **#3118** `Add remote Pico WebSocket mode to picoclaw agent` — An older PR (25 days) that was updated yesterday. This feature would allow running the agent in a headless/remote mode over WebSocket, which likely appeals to users integrating PicoClaw into larger pipelines or serving environments. The long open time suggests internal deliberation about architecture or security implications.

---

## 5. Bugs & Stability

**High Severity:**

1. **#3232** `[BUG] Rate limiting doesn't work if no fallback models is configured` — *New today* (VictorSu000). When users set only `agents.defaults.model_name` without any fallback models, the RPM limit on that model is ignored entirely. This means rate limiting is effectively broken for the most common single-model setup. No fix PR exists yet. **Impact:** All single-provider users relying on rate limits may experience runaway API costs or throttling by the upstream provider. **Priority:** High.

2. **#3230** `[BUG] Function call is missing thought_signature when calling Gemini API via OpenAI compat format` — *Opened yesterday* (VictorSu000). When using Gemini through Cloudflare AI Gateway in OpenAI-compatible mode, tool use calls fail because Gemini requires a `thought_signature` field that PicoClaw doesn't include. This affects all users trying to use Gemini as a drop-in replacement via OpenAI-compatible endpoints. **Impact:** Moderate–high; prevents Gemini usage entirely for tool-calling workflows. No fix PR exists.

**Medium Severity:**
- **#3227** (CLOSED) — The underlying bug (tool call fields lost on history reload) remains unfixed since the PR was closed. This could cause subtle issues in multi-turn conversations where tool call context is needed.

**Low Severity:**
- None reported today.

---

## 6. Feature Requests & Roadmap Signals

**Explicit requests in issues:**
- **#3231** `[Feature] 给searxng搜索加入basicauth请求头验证` — A Chinese-language request to add Basic Authentication header support for SearXNG search integration. The user reports that appending credentials directly in the URL doesn't work. This is a small, well-scoped feature that would improve self-hosted search setups.

**Signals from PRs:**
- **#3118** (Remote WebSocket mode) — If merged, this would be a significant new capability for headless/remote agent operation.
- **#3226** (Tool safety improvements) — The project is clearly thinking about how to make tool use safer without sacrificing functionality. This aligns with broader AI safety trends in the open-source agent ecosystem.

**Prediction for next release:**  
Given the cluster of bug fixes and the remote mode PR, version 0.4.0 (if such a jump occurs) would likely include:
- The WebSocket remote mode
- SearXNG auth support
- Rate-limiting fix for single-model setups
- Gemini OpenAI-compatible tool calling fix
- Safer file-overwrite behavior

---

## 7. User Feedback Summary

**Pain points expressed today:**
- *"Rate limiting doesn't work if no fallback models is configured"* — User feels the basic configuration path is broken; this is a fundamental trust issue.
- *"Gemini returns a missing thought_signature error"* — User tried to use Gemini via Cloudflare AI Gateway and hit an incompatibility that makes tool calling impossible.
- *"不用请求头直接拼接在url里面用不了"* (credentials in URL don't work for SearXNG) — User is blocked from using a self-hosted search tool due to missing auth header support.

**Satisfaction signals:**  
None explicit today. No positive comments or reactions were recorded.

---

## 8. Backlog Watch

**Long-unanswered issues needing maintainer attention:**
- **#3118** — Remote WebSocket mode PR, open since 2026-06-12 (25 days). No maintainer comments visible. This represents significant community contribution effort that has not received feedback.
- **#3115** — Inline data URL fix PR, open since 2026-06-12 (25 days). Same contributor (jp39) as #3118. Two PRs from the same author going unanswered is a risk for contributor retention.

**Items that may need re-evaluation:**
- **#3227** — The closed PR about tool call history loss. Since the bug likely still exists, a different fix approach will be needed. Maintainers should either re-open or prioritize a replacement PR.
- **#3230** — Gemini thought_signature bug. This is a cross-provider compatibility issue that could affect more providers in the future. Should be tracked as a general pattern, not just a one-off fix.

---

*Generated from sipeed/picoclaw GitHub data. All links: https://github.com/sipeed/picoclaw/issues/ and https://github.com/sipeed/picoclaw/pulls/*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-07

## Today's Overview

NanoClaw shows strong development velocity today with **17 pull requests** updated in the last 24 hours, though only 3 were merged or closed. The project is in a **documentation modernization phase**, with four PRs from contributor `glifocat` performing a systematic code-grounded staleness sweep across the repo's docs (architecture, SDK deep-dive, DB schema, and README). A significant **security vulnerability** (#2970) was filed today involving unauthenticated loopback webhook forgery, which will require prompt maintainer attention. Development across **skills infrastructure** (Slack Socket Mode fixes, Teams CLI-first credential flow, RTK mount fix) and **foundational features** (audit logging, agent templates) continues in parallel, though long-running PRs from May (#2591, #2624) remain open, suggesting sustained refactoring efforts are pending review. Overall project health is **active but with a widening review backlog**, as 14 of 17 updated PRs remain open.

---

## Releases

**No new releases** today. The last tracked version is v2.1.38 referenced in documentation updates.

---

## Project Progress

**Merged/Closed PRs (3 items):**

| PR | Author | Summary |
|---|---|---|
| [#2967 — Closed](https://github.com/nanocoai/nanoclaw/pull/2967) | moshe-nanoco | **Audit logging feature**: Opt-in local audit log with `AUDIT_ENABLED`, NDJSON day-files under `data/audit/`, `ncl audit list` read-back, and post-write hook registry for future exporters. Surfaces all `ncl` commands including scope/identity/timing metadata. |
| [#662 — Closed](https://github.com/nanocoai/nanoclaw/pull/662) | bashfulrobot | **NixOS fix**: Service PATH broken on Nix-managed systems — systemd/launchd now include `/run/current-system/sw/bin` so NanoClaw doesn't crash at startup on NixOS/nix-darwin. |
| [#16 — Closed](https://github.com/nanocoai/nanoclaw/pull/16) | gavrielc | **Regex safety fix**: `ASSISTANT_NAME` special regex characters are now escaped to prevent unintended trigger pattern breakage (earliest PR in the dataset, dating back to February). |

**Key advances visible across open PRs:**
- **Agent templates** (#2909): Setup wizard now offers "Fresh agent" vs template-based creation, with skippable first-agent stamping — part 2 of 2 landing this feature.
- **Slack Socket Mode fixes** (#2972): Bot-event subscription restored, wizard UX improved with pairing cards and quiet bounces.
- **Teams integration** (#2958): Rebuilt on structured-skill-format (SSF) with Teams-CLI-first credential flow, replacing 7-step Azure portal walk.
- **SDK compatibility** (#2965): Rate-limit events now handled as top-level SDK message types to match `@anthropic-ai/claude-agent-sdk` 0.3.x.

---

## Community Hot Topics

🔹 **Most active discussion — #2960 (CLOSED):**  
*Proposal: Live Zoom voice agent + K-ai KB integration*  
→ [Issue #2960](https://github.com/nanocoai/nanoclaw/issues/2960) by vishalsachdev (1 comment)  
**Analysis:** This design proposal for a voice agent joining Zoom meetings via RTMS, answering KB questions on wake phrase, and feeding transcripts into action-item extraction signals **enterprise demand for real-time voice AI integration**. The "K-ai" naming suggests internal product alignment. While closed, the proposal framework may influence a roadmap item for multimodal (voice+transcript) agent capability.

🔹 **Longest-running open PRs with recent activity:**
- [#2624](https://github.com/nanocoai/nanoclaw/pull/2624) (43 days open) — Per-server `disabledTools` in McpServerConfig by mmahmed: still under discussion, needs maintainer bandwidth.
- [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) (46 days open) — User ID namespace by channel-type prefix: another deep refactor awaiting review.

**Takeaway:** The community is contributing substantial refactoring and documentation work, but **review bandwidth is the bottleneck** — two critical infrastructure PRs have languished for over six weeks.

---

## Bugs & Stability

### 🔴 Critical

| Issue | Summary | Severity |
|---|---|---|
| [#2970 — OPEN](https://github.com/nanocoai/nanoclaw/issues/2970) | **Local action forgery via unauthenticated forwarded gateway loopback webhook** — webhook trusts sender without authentication, enabling local command forgery. | **Critical** — security vulnerability with no fix PR yet |
| [#2968 — OPEN](https://github.com/nanocoai/nanoclaw/issues/2968) | **MCP server spawn/connect failures are silent** — agent runs with missing tools but claims success; `docker logs` shows registration but no user-facing error. | **High** — silent degradation of agent capabilities |

### 🟡 Medium

| PR | Summary | Fix Status |
|---|---|---|
| [#2969 — OPEN](https://github.com/nanocoai/nanoclaw/pull/2969) | `add-rtk` skill mount rejected on v2 — relative `containerPath` + PATH issues | **Fix PR open** |
| [#2965 — OPEN](https://github.com/nanocoai/nanoclaw/pull/2965) | Rate-limit events not matched as top-level SDK message type in agent-runner (SDK 0.3.x migration break) | **Fix PR open** |
| [#2966 — OPEN](https://github.com/nanocoai/nanoclaw/pull/2966) | Provider errors recorded as `completed` indistinguishable from success; failed acks not mirrored to container | **Fix PR open (draft)** |

---

## Feature Requests & Roadmap Signals

**Likely to land in next version:**

1. **Local audit logging** (#2967, just merged) — Opt-in structured audit with NDJSON output, `ncl audit list` read-back, and extensible exporter hooks. Foundational for compliance and observability.

2. **Agent templates** (#2909, nearing merge) — Template loader (#2890) landed; now wizard flow and first-agent stamping. Enables pre-configured agent patterns for rapid deployment.

3. **Teams CLI-first credentials** (#2958) — Rebuild of add-teams skill on structured-skill-format, drastically simplifying setup from 7 Azure portal steps to 2 CLI commands.

**Longer-term signals:**
- **Zoom voice agent integration** (#2960) — Live meeting participation with wake-word KB queries suggests a **voice add-on product feature** (potentially "K-ai") under evaluation.
- **Security policy framework** (#2954) — Phase-1 security reporting & triage policy being added, signaling formalization of vulnerability management.

---

## User Feedback Summary

**Pain points surfaced today:**

| Pain Point | Source | Evidence |
|---|---|---|
| **Silent tool failures** | #2968 | MCP server failures produce no user-visible error; agent claims success with missing tools |
| **Security gaps in webhook design** | #2970 | Loopback webhook trusts sender IP without authentication |
| **Documentation staleness** | #2961, #2962, #2963, #2964 | Four simultaneous doc-fix PRs confirm docs had significantly drifted from code (glifocat's systematic sweep) |
| **SDK migration friction** | #2965, #2966 | SDK version bumps (0.2.x → 0.3.x) broke event type matching and error recording semantics |

**Positive signals:** Contributor ecosystem is healthy — 8 unique authors active across today's PRs, with `glifocat` contributing 5 documentation/code PRs. The security vulnerability disclosure (#2970) came with detailed advisory format suggesting responsible disclosure culture.

---

## Backlog Watch

### High-importance items needing maintainer attention

| Item | Age | Issue |
|---|---|---|
| [#2624 — OPEN](https://github.com/nanocoai/nanoclaw/pull/2624) | **43 days** | Per-server `disabledTools` in McpServerConfig — refactor affecting MCP server tool management |
| [#2591 — OPEN](https://github.com/nanocoai/nanoclaw/pull/2591) | **46 days** | User ID namespace by channel-type prefix — breaking change for user identification across channels |
| [#2954 — OPEN](https://github.com/nanocoai/nanoclaw/pull/2954) | **3 days** | Security reporting & triage policy — awaiting maintainer sign-offs; foundational for vulnerability handling |

**Immediate concern:** The **security vulnerability #2970** (local action forgery) has no corresponding fix PR or maintainer acknowledgment. Given the advisory details are publicly posted, this should be prioritized for a hotfix to prevent potential exploitation before the next release.

### Stale documentation items
The 4 documentation PRs by `glifocat` (#2961–#2964) represent a substantial (~10 files) refresh effort. These are mechanically safe (no code changes) but require maintainer review to merge, as they fix claims that are currently misleading in the repo's docs.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-07

## Today's Overview

IronClaw saw elevated activity on July 7, 2026, with 14 issues updated and 50 pull requests updated in the last 24 hours, indicating sustained development velocity. The project is currently processing a major infrastructure stack for Postgres latency improvements (the HST Postgres v2 series across four XL-sized PRs), while simultaneously churning through a bug bash cycle with multiple P2 and P3 issues filed by QA. Community contributions are visible via two `ironloopai[bot]` PRs that directly address two of today's most impactful bugs. No new releases were published today, with the last release candidate (#5598) still in open review status.

## Releases

No new releases today. The last release PR (#5598) remains open and proposes version bumps: `ironclaw` from 0.24.0 to 0.29.1, with breaking API changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). This release has been in review since July 3 and is not yet merged.

## Project Progress

19 pull requests were merged or closed today. Notable merged fixes include:

- **[#5757](https://github.com/nearai/ironclaw/pull/5757) — fix: use supported GitHub REST API version** — Resolves the HTTP 403 error plaguing GitHub issue search and creation by pinning the API version from `2026-03-10` (unsupported) to `2022-11-28`. This directly fixes Issue #5702.

- **[#5699](https://github.com/nearai/ironclaw/pull/5699) — fix(webui-v2): surface tool permission save errors** — Stops silent failures in Settings → Tools permission toggles by rendering the error state from `useTools()` mutation errors. Fixes Issue #5698.

- **[#5682](https://github.com/nearai/ironclaw/pull/5682) — fix(reborn): prevent mobile chat horizontal overflow** — Adds CSS containment and wrapping for mobile chat to eliminate horizontal scrollbars. Fixes Issue #5554.

- **[#5695](https://github.com/nearai/ironclaw/pull/5695) — fix(reborn): make WebUI v2 clientActionId survive insecure origins** — Fixes a `TypeError` that broke all mutating requests on plain HTTP deployments. Fixes Issue #5694.

- **[#5697](https://github.com/nearai/ironclaw/pull/5697) — fix(webui-v2): hide unsupported inference config fields** — Removes temperature and embeddings fields from Settings → Inference that were causing invalid API requests. Fixes Issue #5696.

- **[#5252](https://github.com/nearai/ironclaw/pull/5252) — fix(reborn): persist Slack host conversation bindings** — Routes Slack pairing through durable conversation services, ensuring bindings survive restarts.

- **[#5493](https://github.com/nearai/ironclaw/pull/5493) — perf(turns): persist compact recovery snapshot on flush/block** — Reduces turn-state write overhead by saving recovery snapshots instead of full read-models.

- **[#5471](https://github.com/nearai/ironclaw/pull/5471) — perf(loop): write finalized assistant reply via one-shot append path** — Eliminates a two-write sequence in turn finalization for performance gains.

- **[#5613](https://github.com/nearai/ironclaw/pull/5613) — test(reborn): LoopFailureKind fault-coverage matrix** — Adds comprehensive test coverage for all error types in the recoverability stack.

- **[#5600](https://github.com/nearai/ironclaw/pull/5600) — Reject Slack DM IDs in shared-channel routes** — Prevents misrouting of direct messages as shared-channel conversations.

**Still open, progressing:** The HST Postgres v2 replacement stack (PRs #5724→#5727) represents a significant infrastructure overhaul for hosted-single-tenant deployments, now rebuilt from the latest `main` after prior versions were replaced. The localization PR ([#5685](https://github.com/nearai/ironclaw/pull/5685)) extends i18n coverage across 11 language locales for shell, chat, and extensions UI.

## Community Hot Topics

The most active issues today (by comment count):

1. **[#5702 — GitHub issue search and create capabilities fail with HTTP 403](https://github.com/nearai/ironclaw/issues/5702)** (4 comments, P2) — Critical integration breakage. The root cause was identified as an unsupported GitHub API version string. **Fix PR #5757 was merged today**, resolving this issue.

2. **[#5704 — Image preview becomes transparent while chat is active](https://github.com/nearai/ironclaw/issues/5704)** (2 comments, P3) — A visual regression where image thumbnails lose opacity during agent processing. **No fix PR exists yet.**

3. **[#5701 — Activity panel hides tool details and does not update during active run](https://github.com/nearai/ironclaw/issues/5701)** (2 comments, P2) — Users cannot see live tool activity. **Fix PR #5759 is open** and shows tool input summaries and running status in live activity cards.

4. **[#5747 — No way to unpair Slack on built-in host-beta mount](https://github.com/nearai/ironclaw/issues/5747)** (1 comment) — A user experience gap where Slack pairing is irreversible via UI or commands. This is a recently filed issue (today) and has no fix yet.

**Pull requests with the most attention:** The HST Postgres v2 stack (PRs #5724–#5727) and the localization PR (#5685) are the largest code changes under active review, each sized XL and involving core contributors.

## Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P2** | [#5702](https://github.com/nearai/ironclaw/issues/5702) — GitHub API 403 errors breaking issue search/create | **FIXED** | [#5757](https://github.com/nearai/ironclaw/pull/5757) merged |
| **P2** | [#5701](https://github.com/nearai/ironclaw/issues/5701) — Activity panel hides tool details, no live updates during runs | Fix open | [#5759](https://github.com/nearai/ironclaw/pull/5759) in review |
| **P2** | [#5694](https://github.com/nearai/ironclaw/issues/5694) — `clientActionId()` breaks on insecure origins, blocking all mutations | **FIXED** | [#5695](https://github.com/nearai/ironclaw/pull/5695) merged |
| **P2** | [#5696](https://github.com/nearai/ironclaw/issues/5696) — Unsupported inference config fields cause invalid API requests | **FIXED** | [#5697](https://github.com/nearai/ironclaw/pull/5697) merged |
| **P2** | [#5698](https://github.com/nearai/ironclaw/issues/5698) — Silent tool permission save failures in Settings UI | **FIXED** | [#5699](https://github.com/nearai/ironclaw/pull/5699) merged |
| **P2** | [#5554](https://github.com/nearai/ironclaw/issues/5554) — Mobile chat horizontal overflow | **FIXED** | [#5682](https://github.com/nearai/ironclaw/pull/5682) merged |
| **P2** | [#3083](https://github.com/nearai/ironclaw/issues/3083) — Duplicate user creation via missing debounce (filed Apr 29, no fix) | Open | None |
| **P2** | [#4338](https://github.com/nearai/ironclaw/issues/4338) — Misleading execution driver error on disconnect (filed Jun 2) | Open | None |
| **P2** | [#3081](https://github.com/nearai/ironclaw/issues/3081) — Portfolio extension shows misleading "Configure" button | Open | None |
| **P3** | [#5704](https://github.com/nearai/ironclaw/issues/5704) — Image preview transparency during active runs | Open | None |
| **P3** | [#5705](https://github.com/nearai/ironclaw/issues/5705) — Terminal icon in chat has no disable option | Open | None |
| **P3** | [#5706](https://github.com/nearai/ironclaw/issues/5706) — Sidebar shows raw thread ID during latency | Open | None |
| **P1** | [#3535](https://github.com/nearai/ironclaw/issues/3535) — UI timestamps incorrect for conversations (filed May 12) | Open | None |

**Assessment:** Today was a strong bug-fix day. Six P2 bugs were closed via merged PRs, and a seventh has an in-review fix (#5759 for #5701). The remaining P1 issue (#3535, timestamp correctness) and three P2 issues (#3083, #4338, #3081) have been open for 1–2.5 months without resolution, suggesting they may be lower-priority despite their labels.

## Feature Requests & Roadmap Signals

Today's data reveals several user-facing needs and roadmap directions:

- **Slack lifecycle management:** Issue #5747 highlights that once a Slack user is paired, there is no way to unpair — neither via `/pair` (which short-circuits with "You're already connected") nor via the WebUI. This suggests the Slack integration is missing a full lifecycle UX. Likely to be addressed in the next release given the P2 nature of the Slack integration work visible in PRs.

- **Live tool observability:** The activity panel bug (#5701, fix under review in #5759) and the open request for real-time tool activity indication indicate users need better visibility into what the agent is doing during a run. This is being actively worked.

- **UI customization:** Issue #5705 (terminal icon can't be disabled) and the related #5555 (terminal button overlap) show user demand for customizable UI elements. These are minor but persistent complaints.

- **Localization:** The large i18n PR (#5685, still open) signals that IronClaw is preparing for internationalization, covering 11 language locales. This is likely targeting the next release.

- **Hosted Postgres performance:** The four-PR HST Postgres v2 stack (#5724–#5727) is a clear roadmap item targeting latency parity for hosted-single-tenant deployments. This is infrastructure work unlikely to be user-visible but critical for deployment viability.

**Prediction for next release:** The next release (proposed in #5598 as v0.29.1) will likely include the localization work, the Slack conversation binding persistence, the bug bash fixes from today, and possibly the Postgres latency improvements if they merge in time.

## User Feedback Summary

**Real pain points visible in today's data:**

1. **GitHub integration broken** — Users reported that GitHub issue search and creation were completely non-functional due to an API version mismatch. This blocks a core agent capability. (Fixed in #5757, merged today.)

2. **Self-hosted deployments broken** — Users running IronClaw over plain HTTP (e.g., on a LAN) could not use any mutating WebUI v2 features due to a `crypto.randomUUID` fallback bug. (Fixed in #5695, merged today.)

3. **Slack pairing is irreversible** — Users who have paired Slack on the built-in mount have no way to disconnect, effectively locking them into the integration. This is a significant UX gap.

4. **Mobile experience degraded** — Horizontal overflow on mobile makes long messages unreadable. (Fixed in #5682, merged today.)

5. **Activity visibility poor** — Users cannot see which tools are being called during a run; the activity panel shows only "Activity - N tools" with no detail and no live updates.

6. **Confusing UI elements** — Users see a terminal icon they cannot remove (#5705), a Portfolio extension with a useless "Configure" button (#3081), and incorrect conversation timestamps (#3535).

**Satisfaction indicators:** The bug bash cycle is producing tangible results — multiple P2 issues filed on July 6 already have fix PRs merged by July 7, suggesting good turnaround time for critical regressions. The influx of issues from QA (`joe-rlo`, `italic-jinxin`) indicates methodical testing coverage.

## Backlog Watch

Issues and PRs that have been open for extended periods without resolution or maintainer response:

| Issue | Age | Summary | Concern Level |
|-------|-----|---------|---------------|
| [#3535](https://github.com/nearai/ironclaw/issues/3535) — P1 | Since May 12 (57 days) | UI timestamps incorrect for conversations | **High** — This is the only P1 issue open; timestamps are a fundamental UX element that has been wrong for nearly two months. |
| [#3083](https://github.com/nearai/ironclaw/issues/3083) — P2 | Since Apr 29 (69 days) | Duplicate user creation via missing debounce | **Medium** — Admin UX bug that could allow account creation abuse. |
| [#4338](https://github.com/nearai/ironclaw/issues/4338) — P2 | Since Jun 2 (35 days) | Misleading execution driver error when disconnected | **Medium** — Poor error messaging that misleads users about the cause of failure. |
| [#3081](https://github.com/nearai/ironclaw/issues/3081) — P2 | Since Apr 29 (69 days) | Portfolio extension shows misleading "Configure" button | **Low** — Minor UI annoyance but has been open for over two months. |

**Observation:** The P1 timestamp issue (#3535) going unfixed for 57 days while multiple P2 bugs from the same QA author are turned around in 24 hours suggests that either the timestamp fix is technically complex, or the P1 label does not reflect actual prioritization. The maintainers may benefit from revisiting this issue's severity classification.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-07

## 1. Today's Overview
The project shows **high activity** with **17 PRs updated** and **8 issues updated** in the last 24 hours. A major release branch (`release/2026.7.6`) was merged into `main`, indicating a significant version deployment is underway or completed. Notably, **three critical security vulnerabilities** were reported today (Issues #2286, #2287, #2288), representing the most pressing concerns. Meanwhile, a batch of older stale issues from April were bulk-closed, suggesting the team is cleaning up the backlog alongside active development. Overall project health is **moderate-to-cautious** — high feature velocity with emerging security risks.

## 2. Releases
No new releases were published today. The last known release cycle appears to be captured in PR #2291 (`chore(release): merge release/2026.7.6 into main`), which bundles significant updates across scheduled tasks, OpenClaw integration, email skill configuration, MCP import, provider settings, Cowork UX, and runtime reliability improvements. Users should monitor for an official tagged release following this merge.

## 3. Project Progress
**15 PRs merged/closed** today, spanning multiple areas:

- **Release merge**: PR [#2291](https://github.com/netease-youdao/LobsterAI/pull/2291) — merged `release/2026.7.6` into `main`
- **Agent delegation (feature)**: PR [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) — added delegated subagent collaboration with explicit allowlists and Cowork child session support
- **Scheduled task UX**: PR [#2290](https://github.com/netease-youdao/LobsterAI/pull/2290) — made notify target user-selectable
- **Cowork stability**: PR [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) — fixed stalled compaction retry maintenance; PR [#2281](https://github.com/netease-youdao/LobsterAI/pull/2281) — prevented stale final sync from restarting context maintenance
- **Settings & UI cleanup**: PR [#2284](https://github.com/netease-youdao/LobsterAI/pull/2284) — redesigned model provider settings UI, removed home recent tasks card, fixed cron archiving and Windows Python console
- **Skill/MCP/Memory/Mail UI**: PR [#2283](https://github.com/netease-youdao/LobsterAI/pull/2283) — optimization across multiple UI areas
- **Scheduled task notification fix**: PR [#2256](https://github.com/netease-youdao/LobsterAI/pull/2256) — fixed "no notification" channel not taking effect and white screen on deleting active model
- **Stale PRs closed (April batch)**: PRs #1407–#1421 (10 PRs) from April were bulk-closed, covering security fixes (token proxy request body limit), MCP Bridge error handling, SQLite performance improvements, NIM group type mapping, cron polling concurrency, and memory query caching

**Open PRs** (2): Dependabot electron dependency bump [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) and the new Agent collaboration feature [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) (still open despite being created today).

## 4. Community Hot Topics
- **Security vulnerability disclosures** (Issues [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288), [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287), [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286)) — reported by security researcher **YLChen-007**, all with 0 comments but high severity. These represent the most consequential community contributions today, demanding immediate maintainer attention.
- **Agent delegation feature** (PR [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285)) — a substantial new capability for subagent collaboration, still open and gathering feedback potential.
- No issues or PRs had non-zero reactions or more than 2 comments, indicating the community is primarily focused on bug reporting and technical contributions rather than discussion.

## 5. Bugs & Stability
**Three critical security vulnerabilities reported today (ranked by severity):**

1. **[CRITICAL] HTML preview server local file disclosure** — Issue [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288): `LobsterAI HTML preview server follows in-root symlinks and discloses arbitrary local files`. Allows reading any file on the host system via symlink traversal in the localhost HTML preview server. **No fix PR yet.**

2. **[CRITICAL] NIM media flow file exfiltration** — Issue [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287): `LobsterAI NIM outbound media flow allows arbitrary host-local file exfiltration via assistant-generated absolute paths`. An AI assistant can generate absolute file paths that get treated as outbound media attachments, enabling data theft. **No fix PR yet.**

3. **[HIGH] Unauthenticated local token proxy** — Issue [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286): `Unauthenticated local token proxy in LobsterAI allows any local process to replay the victim's authenticated server-model API capability`. The loopback token proxy is unauthenticated, allowing any process on the host to reuse the user's API tokens. **No fix PR yet.**

**Older bugs resolved in stale PR batch:**
- Token proxy request body size limit (PR [#1407](https://github.com/netease-youdao/LobsterAI/pull/1407))
- SQLite synchronous flush performance issue (PR [#1410](https://github.com/netease-youdao/LobsterAI/pull/1410))
- Cron polling concurrency and ghost events (PR [#1420](https://github.com/netease-youdao/LobsterAI/pull/1420))

## 6. Feature Requests & Roadmap Signals
- **Agent collaboration** (PR [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285)) — delegated subagent collaboration with explicit allowlists and Cowork integration is a strong signal for multi-agent orchestration becoming a core product capability
- **Scheduled task UX improvements** (PR [#2290](https://github.com/netease-youdao/LobsterAI/pull/2290), PR [#2256](https://github.com/netease-youdao/LobsterAI/pull/2256)) — user-selectable notification targets and notification channel fixes suggest the scheduled task system is under active iteration for better usability
- **Model provider settings redesign** (PR [#2284](https://github.com/netease-youdao/LobsterAI/pull/2284)) — a refactored UI for model provider configuration, likely to appear in the next release
- **Email skill configuration** (mentioned in release notes for #2291) — new email skill capabilities are maturing

**Prediction for next version:** The merged release branch (`release/2026.7.6`) already includes most of the above. The next version will likely feature: agent delegation, redesigned settings UI, improved scheduled task UX, and email skill integration.

## 7. User Feedback Summary
The three security vulnerabilities reported today (Issues #2286–#2288) represent **high-concern user pain points** with potential for data loss and unauthorized API usage. The detailed advisory-style reports indicate security-conscious users are scrutinizing the project.

Older closed issues (from April) reveal recurring pain points:
- **Dashboard/overview accuracy**: Users reported "total session count" stuck at 0 (Issue [#1414](https://github.com/netease-youdao/LobsterAI/issues/1414)), time filter not responding (Issue [#1411](https://github.com/netease-youdao/LobsterAI/issues/1411)), and English UI layout breaking (Issue [#1416](https://github.com/netease-youdao/LobsterAI/issues/1416))
- **Visual polish**: Skills overflow in input box (Issue [#1413](https://github.com/netease-youdao/LobsterAI/issues/1413)) and scheduled task history not generating (Issue [#1409](https://github.com/netease-youdao/LobsterAI/issues/1409))
- **No satisfaction indicators** (no positive feedback or "like" reactions across any issue or PR)

**Overall sentiment**: The active user base appears technical and focused on identifying vulnerabilities and edge cases rather than expressing satisfaction.

## 8. Backlog Watch
- **Dependabot PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** — bumping Electron from 40.2.1 to 43.0.0, opened April 2nd, still open after 3 months. Electron 43 is a major version jump and may require significant testing for breaking changes. **High priority** to merge.
- **Agent collaboration PR [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285)** — opened today, still open. A major new feature that should be reviewed promptly to land with the current release cycle.
- **Three security vulnerabilities** (Issues [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286), [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287), [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288)) — opened today, **zero comments** from maintainers. These are the most urgent items in the backlog and require immediate triage and fix PRs.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest – 2026-07-07

## Today's Overview
The TinyClaw project is currently in a **high-severity security review period**. In the last 24 hours, **9 security-focused issues** were filed, all remaining open with no associated pull requests or fixes. There are no new releases or merged PRs today. The activity pattern suggests a coordinated audit or responsible disclosure batch, likely requiring immediate maintainer attention. The project's operational stability is **critically impacted**, with multiple unauthenticated control-plane vulnerabilities reported across core REST, SSE, and pairing management endpoints.

## Releases
**None.** No new releases have been published. The latest available release version is unaffected by today's vulnerability batch.

## Project Progress
**No pull requests were merged or closed today.** There is no evidence of feature advancement, bug fixes, or code changes in the repository over the last 24 hours.

## Community Hot Topics
All 9 issues were created by **YLChen-007** and have **zero comments or reactions** as of now, indicating they are likely newly submitted and unacknowledged by maintainers. The underlying need is clearly **urgent security remediation**, covering:

- **Issue #286** – Unauthenticated local control API (settings mutation, prompt overwrite, event stream access)  
  [Link](https://github.com/TinyAGI/tinyagi/issues/286)
- **Issue #287** – Unauthenticated pairing management API (arbitrary approval of pending senders)  
  [Link](https://github.com/TinyAGI/tinyagi/issues/287)
- **Issue #288** – Unauthenticated local control plane (live event leaks, persistent settings modification)  
  [Link](https://github.com/TinyAGI/tinyagi/issues/288)
- **Issue #289** – Unauthenticated file exfiltration via outbound channel attachments  
  [Link](https://github.com/TinyAGI/tinyagi/issues/289)
- **Issue #290** – Terminal escape injection via `POST /api/message` (operator log spoofing)  
  [Link](https://github.com/TinyAGI/tinyagi/issues/290)
- **Issue #291** – Anthropic adapter disables dangerous-tool confirmation (`--dangerously-skip-permissions`)  
  [Link](https://github.com/TinyAGI/tinyagi/issues/291)
- **Issue #292** – Unauthenticated administrative API (persistent settings and agent prompt modification)  
  [Link](https://github.com/TinyAGI/tinyagi/issues/292)
- **Issue #293** – Agent ID path traversal escapes workspace root  
  [Link](https://github.com/TinyAGI/tinyagi/issues/293)
- **Issue #294** – Unauthenticated control-plane routes (system prompt overwrite and daemon restart)  
  [Link](https://github.com/TinyAGI/tinyagi/issues/294)

## Bugs & Stability

All reported issues today are **security vulnerabilities**, ranked by criticality:

**Critical Severity (7 issues):**
- **#294** – Unauthenticated control-plane allows daemon restart and system prompt overwrite — attacker gains persistence and operational control  
- **#293** – Path traversal via agent ID `..` breaks workspace sandbox isolation  
- **#292** – Persistent settings and agent prompt modification without auth  
- **#291** – Anthropic adapter disables safe-tool confirmation, enabling arbitrary command execution  
- **#289** – Arbitrary local file exfiltration via `files[]` attachment parameter  
- **#288** – Unauthenticated local control plane leaks live SSE events and modifies settings  
- **#286** – Unauthenticated local API for settings, prompts, and event stream access  

**High Severity (2 issues):**
- **#287** – Pairing management API allows unauthorized approval of pending senders  
- **#290** – Terminal escape injection leads to operator log spoofing  

**No fix PRs exist for any of these issues.** The project currently has **zero defensive measures or patches** in progress.

## Feature Requests & Roadmap Signals
There are **no feature requests** in today's issue feed. The only signals are **security hardening requirements**, which are critical blockers for production deployment. The next version (whenever released) must include:
- Authentication for all control-plane HTTP endpoints
- Authorization checks on settings mutation and agent prompt modification
- Path traversal and injection sanitization
- Removal or conditional use of `--dangerously-skip-permissions`
- Rate limiting and input validation on `POST /api/message` and file attachments

## User Feedback Summary
No direct user pain points or satisfaction indicators are visible in today's data. However, the **nature of the 9 security disclosures** implies a strong unspoken user concern: **the project is currently insecure by default in its unauthenticated API surface**. Users running TinyClaw in any network-accessible deployment are exposed to full system compromise, data exfiltration, and operator impersonation. No positive feedback was recorded.

## Backlog Watch
All 9 issues reported today are **less than 24 hours old** and have **zero maintainer responses**. There are no older unanswered issues or PRs in the data. The critical backlog item is the **entire security issue set (#286–#294)** — these require immediate triage, confirmation, and patching. Without maintainer engagement, the project's trust and viability are at risk.

**Key issue requiring urgent attention:**  
- [#294 – Unauthenticated control-plane routes allow system prompt overwrite and daemon restart](https://github.com/TinyAGI/tinyagi/issues/294) — highest immediate operational impact.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for **2026-07-07**.

---

## Moltis Project Digest — 2026-07-07

### 1. Today's Overview
Moltis had a quiet but productive 24 hours with zero new issues but five pull requests (PRs) updated, three of which were closed or merged. The project appears to be in a steady maintenance phase, with the development team focused on fixing integration bugs (MCP OAuth, Docker volume conflicts) and upgrading third-party dependencies (WhatsApp library). No new releases were cut today, suggesting that the next stable release is likely being prepared with these accumulated fixes.

### 2. Releases
**None.** No new releases were published in the last 24 hours. The most recent release remains earlier versions (not specified in this data window).

### 3. Project Progress
Three PRs were merged or closed today, advancing the following areas:

- **MCP OAuth Fix (PR #1120)** – *Open but actively updated.* Fixes a critical authentication failure (`invalid_target`) with MCP servers from Notion and Linear. The root cause was a malformed URL passed to `fetch_resource_metadata()` when it was extracted incorrectly from the `WWW-Authenticate` header.
- **Docker Volume Cleanup (PR #1122)** – *Closed.* Removes hard-coded `VOLUME` declarations that previously shadowed user-specified bind mounts for the home directory. This resolves a "pathological case" where container deployments with full home bind-mounts (`./moltis-home:/home/moltis`) would fail due to Docker’s volume precedence rules.
- **Telegram Streaming Hotfix (PR #1113)** – *Closed.* Fixes a regression introduced in PR #1099 where the final streamed reply in Telegram was not sent when "completion notifications" were disabled. Now the final answer is always streamed regardless of notification settings.

### 4. Community Hot Topics
The most active discussion this period revolves around:

- **WhatsApp LID Migration (PR #1144)** – *Closed.* Bumps `whatsapp-rust` from v0.5 to v0.6 to support LID (Login ID) native addressing. This is critical because WhatsApp recently migrated some device registrations to LID format, causing inbound messages to fail on old clients. The PR pins to a specific merge commit that gates the DM LID migration. This is a high-impact fix for any Moltis user relying on WhatsApp integration.

### 5. Bugs & Stability
No new bugs were filed today. The following existing bugs were addressed:

- **High severity – MCP OAuth failure (PR #1120)** : Servers like Notion and Linear return `resource_metadata` in the `WWW-Authenticate` header. The previous code incorrectly passed this URL, causing `invalid_target` errors. Fix is pending merge, but actively reviewed.
- **Medium severity – Docker volume shadowing (PR #1122)** : Deployments using home bind mounts failed silently because Docker refused to mount over a declared `VOLUME`. Fix merged.
- **Medium severity – Telegram streaming regression (PR #1113)** : Users with completion notifications off lost the final reply. Fix merged.

### 6. Feature Requests & Roadmap Signals
- **WhatsApp LID support (PR #1144)** : This is a straightforward dependency bump, but it signals that Moltis is proactively maintaining compatibility with evolving third-party APIs. Expect this to be included in the next minor release.
- **MCP OAuth robustness (PR #1120)** : While a bug fix, the pattern indicates growing support for external MCP servers that use dynamic `resource_metadata` URLs. This points toward deeper OAuth flow flexibility in upcoming versions.

### 7. User Feedback Summary
No direct user comments or reactions were recorded in this data window. However, the nature of the closed PRs reveals two key pain points:
- **Integration friction:** Users integrating with Notion and Linear (MCP) and WhatsApp are hitting authentication or message delivery issues that depend on server-side changes beyond Moltis's control.
- **Deployment confusion:** The Docker volume issue (PR #1122) highlights that users deploying with custom home directories encounter silent failures — a reliability and UX pain point that has now been resolved.

### 8. Backlog Watch
- **Dependabot PR #1087** – *Open since 2026-05-29.* Bumps `tar` crate from 0.4.45 to 0.4.46. This is a low-severity security/dependency update, but it has been open for over five weeks with no maintainer feedback. While the change is minor and likely safe, the long wait suggests the team may prefer to batch dependency updates into a single release or are prioritizing other work. Recommend review and merge if no compatibility issues arise.
  - URL: [PR #1087](https://github.com/moltis-org/moltis/pull/1087)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-07

**Generated from GitHub data (agentscope-ai/CoPaw) — snapshot 2026-07-07**

---

## 1. Today's Overview

CoPaw shows **high activity** on 2026-07-07: 17 issues updated (12 open, 5 closed), 38 PRs updated (18 open, 20 merged/closed), and **2 new releases** published. The project is in a **pre-release transition** phase, with v2.0.0-beta.3 shipping alongside a critical 1.x compatibility patch (v1.1.12.post3). The v2.0.0 pre-release bug tracker (#5273) remains the central coordination point, with significant community engagement around **Windows sandbox security issues**, **DingTalk multi-user isolation gaps**, and **frontend performance regressions** affecting large sessions. Six first-time contributors submitted PRs today, indicating healthy community inflow.

---

## 2. Releases

### v2.0.0-beta.3 (Beta)
- **What's New:** CI fixes for macOS bash 3.2 compatibility; enhanced rate limiting with multi-dimensional protection (auth layer hardening).
- **Breaking Changes:** None announced in release notes.
- **Migration Notes:** Users upgrading from earlier 2.x alphas should ensure their CI pipelines use bash 4+ compatible syntax.
- **Link:** https://github.com/agentscope-ai/CoPaw/releases/tag/v2.0.0-beta.3

### v1.1.12.post3 (Stable patch for 1.x line)
- **What's Fixed:** Pinned ACP version to resolve a breaking change that caused historical 1.x versions to malfunction.
- **Compatibility Note for 1.x Users:** Explicitly called out in release notes — users staying on 1.x should upgrade immediately.
- **Link:** https://github.com/agentscope-ai/CoPaw/releases/tag/v1.1.12.post3

---

## 3. Project Progress

Today's **20 merged/closed PRs** show broad progress across frontend, backend, channels, and security:

### Notable Merged Features & Fixes

| PR | Summary | Area |
|----|---------|------|
| [#5828](https://github.com/agentscope-ai/CoPaw/pull/5828) | **Coding mode: allow selecting hidden folders** — Eye/EyeOff toggle in project browser toolbar | Frontend |
| [#5827](https://github.com/agentscope-ai/CoPaw/pull/5827) | **Gemini: sanitize `const` schema fields** — fixes Pydantic validation error for tools with const params | Backend |
| [#5820](https://github.com/agentscope-ai/CoPaw/pull/5820) | **Memory: usage-aware auto search + backend-specific embeddings** — synthetic auto memory search accounting | Memory |
| [#5786](https://github.com/agentscope-ai/CoPaw/pull/5786) | **Triple bugfix bundle:** model matching by provider_id, search result index fix, select-all rewrite | Core |
| [#5585](https://github.com/agentscope-ai/CoPaw/pull/5585) | **Matrix channel: streaming mode** — adds Discord-like streaming support to Matrix channel (community contribution) | Channels |
| [#4693](https://github.com/agentscope-ai/CoPaw/pull/4693) | **Plugin system: schema-driven custom channel registration** — replaces legacy directory-based mechanism | Plugin |
| [#5825](https://github.com/agentscope-ai/CoPaw/pull/5825) | **Website: blog page added** | Docs/Website |
| [#5830](https://github.com/agentscope-ai/CoPaw/pull/5830) | **Pet plugin: fix approval monkey-patch missing scope parameter** | Plugins |
| [#5831](https://github.com/agentscope-ai/CoPaw/pull/5831) | **Offloader: handle TextBlock objects in offload_tool_result** | Backend |
| [#5832](https://github.com/agentscope-ai/CoPaw/pull/5832) | **Console: remove default mode of session approval level** | Console |

### Key Open PRs Advancing Today
- [#5765](https://github.com/agentscope-ai/CoPaw/pull/5765) — Scroll context strategy improvements (protect active turn, graduated pressure relief) — under human review
- [#5810](https://github.com/agentscope-ai/CoPaw/pull/5810) — Large session regression tests for #5479 (29 test cases)
- [#5799](https://github.com/agentscope-ai/CoPaw/pull/5799) — Streaming OpenAI API retry for body status codes (new contributor)

---

## 4. Community Hot Topics

### Most Active Issues (by comments + reactions)

| Issue | Title | Comments | Signals |
|-------|-------|----------|---------|
| [#5401](https://github.com/agentscope-ai/CoPaw/issues/5401) | Console: large tool-use history crashes frontend | **15 comments** | High severity frontend crash — root cause identified (type: "data" content blocks) |
| [#5273](https://github.com/agentscope-ai/CoPaw/issues/5273) | v2.0.0 Pre-release Bug & Issue Tracker | **10 comments** + 1 👍 | Central coordination for 2.0.0 pre-release |
| [#5479](https://github.com/agentscope-ai/CoPaw/issues/5479) | Large sessions (>500KB) crash frontend | **6 comments** | Performance regression — test PR #5810 submitted |
| [#5829](https://github.com/agentscope-ai/CoPaw/issues/5829) | Windows sandbox ACE pollutes system directories | **3 comments** — **NEW** | Critical security/stability — GPU process crashes for Chromium apps |

### Underlying Needs Analysis
1. **Frontend reliability under load** — #5401 and #5479 both show users hitting hard crashes with large sessions. The solution likely requires both backend pagination and frontend progressive rendering fixes.
2. **Windows sandbox safety** — #5829 reveals unintended side effects of AppContainer ACLs affecting third-party applications. Community expects isolation boundaries to be self-contained.
3. **Multi-user isolation** — #5835 shows DingTalk DM sessions lacking proper user-level isolation for `/stop` command. Enterprise users hitting cross-user cancellation.

---

## 5. Bugs & Stability

### Critical Bugs (Active Today)

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **🔴 Critical** | [#5829](https://github.com/agentscope-ai/CoPaw/issues/5829) | Windows AppContainer sandbox ACE pollutes `C:\`, `C:\Users`, `%USERPROFILE%` — causes Hermes Desktop Electron GPU process crashes | No fix PR yet — reported today |
| **🔴 Critical** | [#5401](https://github.com/agentscope-ai/CoPaw/issues/5401) | Console frontend crashes on large tool-use history — `type: "data"` content blocks unhandled | Root cause identified; no fix PR linked |
| **🟡 High** | [#5479](https://github.com/agentscope-ai/CoPaw/issues/5479) | Sessions >500KB cause frontend crash (rendering error) | Test PR #5810 submitted; fix still in progress |
| **🟡 High** | [#5835](https://github.com/agentscope-ai/CoPaw/issues/5835) | DingTalk `/stop` command lacks user-level isolation — cross-user task cancellation | Reported today; no fix yet |
| **🟡 High** | [#5789](https://github.com/agentscope-ai/CoPaw/issues/5789) | Context compression crashes when model output exceeds JSON Schema `maxLength` | No fix PR |
| **🟡 High** | [#5775](https://github.com/agentscope-ai/CoPaw/issues/5775) | Auto-memory interval never triggers — MemoryMiddleware state lost across per-request agent rebuilds (v2.0.0b3) | Closed — likely fixed |
| **🟢 Medium** | [#5759](https://github.com/agentscope-ai/CoPaw/issues/5759) | Plan mode repeatedly reads same file — file read caching missing | Open |

### Recently Closed Bugs
- [#5775](https://github.com/agentscope-ai/CoPaw/issues/5775) — Auto-memory interval never triggers (closed, fix merged)
- [#5782](https://github.com/agentscope-ai/CoPaw/issues/5782) — Google Gemini embedding `index=None` causes silent vector search fallback (closed)
- [#5774](https://github.com/agentscope-ai/CoPaw/issues/5774) — Google Gemini format endpoint error (closed)
- [#5785](https://github.com/agentscope-ai/CoPaw/issues/5785) — Coding mode cannot select hidden folders (closed, fix in #5828 merged today)

---

## 6. Feature Requests & Roadmap Signals

### Today's New Feature Requests

| Issue | Summary | Potential Impact |
|-------|---------|------------------|
| [#5821](https://github.com/agentscope-ai/CoPaw/issues/5821) | Granular `rejects_media` capability — per-media-type instead of all-or-nothing | Enables image-only fallback when video fails |
| [#5797](https://github.com/agentscope-ai/CoPaw/issues/5797) | Scheduled task popup notification toggle — user-configurable | UX quality-of-life for cron-based workflows |

### Strong Roadmap Signals
1. **Windows desktop automation** — PR #5187 (Windows GUI automation with UIA + Tauri control mode) was updated today, suggesting active development
2. **Bundled Node runtime** — PR #5814 bundles Node.js with Tauri desktop for ACP agent support — likely v2.0.0-beta.4 or GA
3. **Plugin system maturation** — #4693 (merged today) enables schema-driven custom channels, signaling shift toward extensibility
4. **qwen3-rerank for memory** — PR #5669 introduces re-ranking stage for ReMe memory search — low risk, likely to land soon

### Prediction for Next Release (v2.0.0-beta.4 or RC1)
Likely candidates: Windows computer-use integration (#5187), bundled Node runtime (#5814), granular media rejection (#5821), and scroll context strategy improvements (#5765).

---

## 7. User Feedback Summary

### Pain Points Expressed
1. **"一刀切" (one-size-fits-all) decisions frustrate power users** — #5797: scheduled task popups were completely disabled after complaints, but users who rely on them feel abandoned
2. **"千问不要因噎废食"** (literal: "don't stop eating for fear of choking") — community pushback against binary feature decisions without user choice
3. **Windows stability concerns** — #5829: sandbox implementation has real-world side effects affecting other applications
4. **Enterprise communication tool gaps** — #5835: DingTalk multi-user isolation missing; #5823: Feishu markdown images not rendered

### Satisfaction Signals
- **First-time contributors active** — 6 new contributors today (#5834, #5826, #5669, #5799, #5823) indicates good onboarding
- **Quick bug turnaround** — #5785 (hidden folders) opened 2 days ago, fix already merged today
- **Memory and search improvements landing** — PR #5820 and #5669 show investment in core AI agent functionality

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Summary | Reason for Concern |
|-------|-----|---------|-------------------|
| [#5312](https://github.com/agentscope-ai/CoPaw/issues/5312) | 19 days | Desktop: close button should minimize to system tray | Feature request with 2 comments; no maintainer response |
| [#5273](https://github.com/agentscope-ai/CoPaw/issues/5273) | 20 days | v2.0.0 Pre-release Bug Tracker (1 👍) | Central tracker — needs regular triage updates |
| [#5788](https://github.com/agentscope-ai/CoPaw/issues/5788) | 2 days | Skills list shows only 20 items, scroll-to-load-more broken | CSS overflow issue — likely quick fix, no PR yet |

### Open PRs Awaiting Review

| PR | Age | Summary | Notes |
|----|-----|---------|-------|
| [#5654](https://github.com/agentscope-ai/CoPaw/pull/5654) | 7 days | DingTalk delivery failure surface — marked "Under Review" | Important for enterprise DingTalk users |
| [#5669](https://github.com/agentscope-ai/CoPaw/pull/5669) | 7 days | qwen3-rerank for memory search — marked "Under Review" | First-time contributor; requested feature |
| [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) | 23 days | Windows GUI automation — large, complex PR | Key v2.0.0 feature; risk of staleness |
| [#5765](https://github.com/agentscope-ai/CoPaw/pull/5765) | 4 days | Scroll context strategy improvements — needs human review | Complex; fixes three related scroll bugs |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-07

## Today's Overview

The ZeroClaw project shows high activity on 2026-07-07, with 50 pull requests updated in the last 24 hours (37 open, 13 merged/closed) and 9 issues updated (7 open/active, 2 closed). No new releases were published. The development velocity is robust, with significant focus on security hardening, tool registration fixes, and Web UI improvements. A critical security vulnerability in the SOP engine (issue #8678) was closed with a fix merged today, and multiple contributor-driven PRs addressing long-standing bugs demonstrate healthy community engagement. However, several S1 (workflow-blocked) severity bugs remain open.

## Releases

**No new releases** since the previous digest. The project dashboard shows version `v0.8.2` in the sidebar. The tracker issue #8073 for v0.8.3 observability, CI, docs, dependencies, and release support is still active and was updated today, suggesting a release is being prepared but not yet cut.

## Project Progress

**13 pull requests were merged or closed today.** Notable advancements include:

- **Security & Bug Fixes:**
  - [#8782](https://github.com/zeroclaw-labs/zeroclaw/issues/8782) (CLOSED) — Bumped `crossbeam-epoch` 0.9.18→0.9.20 to clear RUSTSEC-2026-0204 vulnerability (fix by @wangmiao0668000666)
  - [#8747](https://github.com/zeroclaw-labs/zeroclaw/pull/8747) (CLOSED) — Closed #8678: Added run-status guard to `sop_advance` to prevent bypassing approval gates
  - [#8711](https://github.com/zeroclaw-labs/zeroclaw/pull/8711) (CLOSED) — Routed `Agent::from_config` through the gated `ScopedToolRegistry::assemble` seam, unifying tool assembly
  - [#8737](https://github.com/zeroclaw-labs/zeroclaw/pull/8737) (CLOSED) — Added Bocha AI as a web search provider, enabling mainland-China deployments (previously blocked by DuckDuckGo/Brave inaccessibility)

- **CI & Infrastructure:**
  - [#8793](https://github.com/zeroclaw-labs/zeroclaw/pull/8793) (CLOSED) — Fixed CI quality gate to include `--workspace` flag for Rust

- **Testing:**
  - [#8750](https://github.com/zeroclaw-labs/zeroclaw/pull/8750) (CLOSED) — Made gateway persistence tests root-safe (ENOTDIR, not DAC)

## Community Hot Topics

Most active discussions (by issue/PR comments and reactions):

1. **[#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698)** — Fluent locale files lag English app-string sources (3 comments, open since May 16, updated today)
   - *Underlying need*: Internationalization lag creates a poor experience for non-English users; the Chinese locale (`zh-CN`) is missing `tools.ftl`. Community member @Audacity88 flagged this 7 weeks ago, and it remains unaddressed despite today's PR [#8790](https://github.com/zeroclaw-labs/zeroclaw/pull/8790) from @IftekharUddin which attempts to sync Fluent locale catalogues.

2. **[#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678)** — SOP engine approval-gate bypass vulnerability (2 comments, closed today)
   - *Underlying need*: Security-conscious users need assurance that approval gates cannot be bypassed by drivers. The fix was merged the same day via [#8747](https://github.com/zeroclaw-labs/zeroclaw/pull/8747).

3. **[#8787](https://github.com/zeroclaw-labs/zeroclaw/issues/8787)** — Skill-registered tools bypass `allowed_tools/excluded_tools` filter (0 comments, opened today)
   - *Underlying need*: Security policy enforcement must be consistent across all tool registration paths. A matching fix PR [#8788](https://github.com/zeroclaw-labs/zeroclaw/pull/8788) was also opened today.

## Bugs & Stability

Bugs reported today, ranked by severity:

**S1 — Workflow Blocked:**
- **[#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794)** — Stopping the agent mid-work (while calling tools) erases tool calls and thinking from context; next message loses the entire step. *No fix PR open yet.*

**S2 — Degraded Behavior:**
- **[#8792](https://github.com/zeroclaw-labs/zeroclaw/issues/8792)** — Left sidebar missing Skills navigation entry (exists at `/skills`, but no nav link). *Fix PR [#8795](https://github.com/zeroclaw-labs/zeroclaw/pull/8795) opened today.*
- **[#8787](https://github.com/zeroclaw-labs/zeroclaw/issues/8787)** — Skill-registered tools bypass `excluded_tools` denylist. *Fix PR [#8788](https://github.com/zeroclaw-labs/zeroclaw/pull/8788) opened today.*

**S3 — Minor Issue:**
- **[#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797)** — Telegram setup instructions reference an unknown config property; `bind-telegram` CLI doesn't recognize the key it tells users to configure.
- **[#8791](https://github.com/zeroclaw-labs/zeroclaw/issues/8791)** — Left sidebar has incorrect width causing horizontal scrollbar at the bottom.

**Previously reported (S2 severity):**
- [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) — Internationalization lag (still open since May 16)

## Feature Requests & Roadmap Signals

- **[#8788](https://github.com/zeroclaw-labs/zeroclaw/pull/8788)** — Consistent security policy enforcement for skill tools (likely for v0.8.3)
- **[#8789](https://github.com/zeroclaw-labs/zeroclaw/pull/8789) / [#8761](https://github.com/zeroclaw-labs/zeroclaw/pull/8761)** — Independent delegates now receive target agent MCP and skill tools (critical for delegation workflow users)
- **[#8737](https://github.com/zeroclaw-labs/zeroclaw/pull/8737)** — Bocha AI search provider for China-region users (merged today)
- **[#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)** — OpenAI chat completions HTTP endpoint (open, needs maintainer attention) — would enable compatibility with LangChain, OpenAI SDK, Continue.dev, Aider
- **[#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173)** — In-app upgrade with auto-restart from web dashboard (open since June 22, needs maintainer review)

**Predictions for v0.8.3:** Based on tracker #8073 and active PRs, expect the Bocha search provider, delegate MCP tool access, the SOP security fix, and the OpenAI-compatible endpoint if #8486 is reviewed.

## User Feedback Summary

- **Pain Points:**
  - **Workflow disruption:** S1 bug #8794 shows mid-task interruption erases context — an extremely disruptive user experience for anyone running extended agent workflows.
  - **Security gaps:** Two distinct tool registration bypasses (SOP gates #8678, skill tools #8787) undermine user trust in access controls. The community response was swift (both fixed the same day they were reported).
  - **Localization:** Chinese (`zh-CN`) locale is missing tools.ftl (since May 16). Contributors are stepping up (PR #8790), but maintainers haven't resolved the root cause.
  - **Onboarding friction:** Telegram setup instructions are broken (#8797), a minor but frustrating experience for new users.

- **Satisfaction Signals:**
  - Responsive fix for #8678 (closed within 2 days of reporting) demonstrates good security incident response.
  - Community contributors (Nillth, wangmiao0668000666, NiuBlibing, IftekharUddin) are actively filing fix PRs for bugs they discover — healthy contributor ecosystem.

## Backlog Watch

Items needing maintainer attention:

| ID | Description | Age | Status |
|----|-------------|-----|--------|
| [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) | Fluent locale files lagging (Chinese missing tools.ftl) | 7 weeks | Open, PRIORITY P2, ACCEPTED |
| [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) | v0.8.3 release tracker | 2.5 weeks | Open (updated today, no maintainer comments) |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | OpenAI chat completions endpoint (XL PR) | 8 days | Needs maintainer review |
| [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) | In-app upgrade from web dashboard | 2 weeks | Needs maintainer review |
| [#6622](https://github.com/zeroclaw-labs/zeroclaw/pull/6622) | WhatsApp LID→phone resolution fix | 8 weeks | Needs author action (stale) |
| [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689) | Goal command admission (XL PR) | 3 days | Open, no maintainer response |
| [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) | Trusted goal tools and delegation boundaries (XL PR) | 3 days | Open, no maintainer response |

The multiple **XL-sized** PRs from @vrurg (goal admission, goal tools, goal self-resume loops) represent significant architectural changes and have not yet received maintainer feedback. Two of these (#8688, #8689) depend on each other and touch 10+ components, creating risk of merge conflicts if left unreviewed.

</details>