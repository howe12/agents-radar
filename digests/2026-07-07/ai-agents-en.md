# OpenClaw Ecosystem Digest 2026-07-07

> Issues: 184 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-07 06:00 UTC

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

# OpenClaw Project Digest — 2026-07-07

## 1. Today's Overview

OpenClaw continues as a high-velocity project, with **184 issues updated** and **500 pull requests** active in the last 24 hours — indicating strong community engagement and sustained maintainer activity. Of those PRs, **239 were merged or closed**, showing healthy throughput. No new releases were published today, but the sheer volume of fixes in flight (especially around Windows compatibility, channel reliability, and session stability) suggests an imminent patch release. The project is currently processing an unusually high number of **P1/P2 regression bugs**, particularly around session state and provider authentication, which warrants attention from maintainers.

## 2. Releases

**No new releases today.** The latest release remains prior to today's activity. Given the volume of merged Windows shim fixes (PRs #101378, #101389, #101395) and channel reliability improvements, a minor patch release is likely within the next few days.

## 3. Project Progress

**239 pull requests were merged or closed today**, indicating active development. Notable merges include:

- **Windows compatibility fixes**: Multiple PRs addressed the recurring `.cmd` shim resolution issue for CLI backends on Windows. PR #101378 (`fix: Windows CLI backends fail through npm shims`) by **steipete** closed three related issues (#98573, #92054, #91489) and superseded earlier partial fixes. PR #101389 (`fix(process): handle async taskkill spawn errors to prevent Windows process leaks`) by **wm0018** improved process cleanup reliability.

- **Backup stability**: PR #101395 (`fix(backup): retry fs.rm on EBUSY to prevent retry-loop collapse on Windows`) by **tzy-17** fixed a Windows-specific backup failure mode where temp file locks could cascade.

- **Internal API hygiene**: PR #101393 (`refactor(github-copilot): localize internal helpers`) by **vincentkoc** cleaned up exposed declarations in the GitHub Copilot provider.

- **Documentation**: PR #101209 (`docs: document local text worker pattern`) by **clawsweeper[bot]** is queued for automerge, improving developer onboarding.

## 4. Community Hot Topics

The following issues and PRs attracted the most discussion:

- **#96857** (OPEN, 12 comments, 4 👍) — `[Bug] Normal tool text outputs can degrade to “(see attached image)” placeholders` by **cael-dandelion-cult**: This is a **major UX regression** where agents receive `(see attached image)` placeholders instead of actual tool text output, making agents functionally blind to CLI/status output. The 4 reactions suggest this affects a broad set of users. Underlying need: **reliable structured communication between tools and agent models**.

- **#85333** (OPEN, 15 comments, P1) — `[Bug]: openclaw doctor --fix 4-5x slower on 2026.5.20 vs 2026.5.19` by **samson1357924**: Users are experiencing pathological performance degradation in the `doctor --fix` command (55s → 229s+) due to a session snapshot path traversal bottleneck. Underlying need: **performance regression triage and root cause analysis**.

- **#90370** (OPEN, 12 comments, 2 👍) — `[Feature Request] 支持PostgreSQL替代SQLite作为内部存储` by **Alan761126**: Chinese-speaking users request PostgreSQL support for production deployments, citing resource waste from dual database maintenance and inability to use pgvector. Underlying need: **enterprise-grade storage flexibility**.

- **#28300** (OPEN, 6 comments, 5 👍) — `Theme Customization System — Preset Themes + Custom Theme Studio` by **xingzihai**: The most-reacted feature request today, asking for customizable Control UI themes with a theme studio. Underlying need: **user customization and branding control**.

## 5. Bugs & Stability

**Severity P1 regressions currently active:**

| Issue | Description | Fix PR? |
|---|---|---|
| **#85333** | `doctor --fix` 4-5x slower (session snapshot bottleneck) | No open fix PR |
| **#38327** | "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview | No fix PR |
| **#85773** | Agents ignore workspace files after reinstalling (generic replies) | Needs info |
| **#90288** | Non-Anthropic models output tool calls as plain text `[tool: exec]` | Needs product decision |
| **#87996** | Vertex beta INVALID_ARGUMENT wedges long sessions | No actionable recovery |
| **#95612** | `cli-backend` agent returns 401 despite working Claude CLI in shell | Needs live repro |
| **#86031** | Windows gateway blocks on health probes after Telegram polling stall | Needs live repro |
| **#87509** | `embedded_run` bootstrap-context blocks event loop for 14-22s | Linked PR open |
| **#98702** | Inherited OpenAI OAuth rejected at provider on built-in runtime | Needs live repro |
| **#38091** | WebSocket reconnect terminates active sessions | Needs live repro |
| **#39807** | Billing error (402) causes infinite retry death spiral (no backoff) | Linked PR open |
| **#70024** | Channel stop timeout leaves channel permanently dead | Linked PR open |

**Windows-specific bugs** dominated today's closed issues: **#92054** (Claude CLI spawn ENOENT), **#88818** (browser endpoint blocked with remote CDP), and **#101381** (Windows taskkill fallback) were all closed today via merged PRs.

**Emerging pattern**: Multiple issues report **session state corruption** across provider boundaries (Vertex, MiniMax, custom OpenAI-compatible), suggesting a systemic issue in the session context management layer introduced in recent releases.

## 6. Feature Requests & Roadmap Signals

**Top user-requested features by engagement today:**

- **#90370** — PostgreSQL storage backend (12 comments, 2 👍): High-demand for production deployments. Predicted: Likely to appear in next major release given the maintainer activity on storage-related PRs.

- **#28300** — Theme customization system (6 comments, 5 👍): Strong community desire for UI personalization. Predicted: Could land in a minor release within 2-3 sprints.

- **#40418** — Automated session memory preservation across `/new` resets (8 comments): Enables continuous learning across sessions. Under investigation — could be a **6.x or 7.0 candidate** as it touches core session architecture.

- **#49931** — Configurable shell override (`tools.exec.shell`) (7 comments): Windows users constrained by hardcoded PowerShell. Predicted: **Likely near-term**, given the current focus on Windows compatibility.

- **#38309** — SecretRef support in `sandbox.docker.env` (4 comments, 4 👍): Security-focused improvement for Docker sandbox environments.

## 7. User Feedback Summary

**Pain points expressed today:**

- **"Agents are blind to tool output"** — Issue #96857 describes a regression where normal text output becomes `(see attached image)` placeholders, making agents functionally useless for CLI-driven tasks.
- **"My agent forgot who it was"** — Issue #85773 (Ubuntu + Ollama): After reinstallation, agents ignore workspace identity and skills entirely, providing generic replies.
- **"Windows still breaks weekly"** — Multiple issues (#86031, #92054, #101381) from Windows users reporting gateway hangs, CLI spawn failures, and backup corruption.
- **"Production is unusably slow"** — Issue #85333: Performance regression in `doctor --fix` makes a routine maintenance command take 4 minutes on production VPS.
- **"Lost context = lost money"** — Issue #39807: 5,206 failed agent runs from a single billing error with no backoff, burning API credits.

**Satisfaction signals**: The rapid closure of Windows shim issues (3 PRs merged today) and the activity around **channel-specific fixes** (Signal, WhatsApp, Feishu, Discord) show maintainers responding quickly to the highest-impact user pain points.

## 8. Backlog Watch

**Issues needing maintainer attention (oldest, high impact):**

| Issue | Age (days) | Last Updated | Why It Matters |
|---|---|---|---|
| **#38439** — Avatar endpoint returns 404 | 122 | Today | P2 regression affecting all Webchat users; linked PR open but no maintainer review |
| **#38091** — WebSocket reconnect terminates sessions | 123 | Today | P1 bug causing complete session loss; no fix PR |
| **#38327** — Vertex provider crashes on null | 123 | Today | P1 regression blocking Google Vertex users; no fix PR |
| **#38844** — Browser file upload flaky with stale-click reports | 122 | Today | P2 affecting browser automation reliability |
| **#40678** — Cross-channel visibility in TUI broken | 120 | Today | P2 regression in core TUI functionality since v2026.3.7 |
| **#39807** — Billing error infinite retry spiral (no backoff) | 121 | Today | P1: 5,206 failed runs from one error, burns credits; linked PR open |
| **#41201** — Control UI Avatar not displaying (duplicate of #38439) | 120 | Today | P2 regression, same root cause |

**PRs waiting for maintainer review:**

- **#95333** (OPEN, P1) — Fix for trustless inbound decoration contract (#95279). Critical for transcript integrity but stale since June 20.
- **#95311** (OPEN, P1) — `disableBoundaryAwareCache` option for DeepSeek/Xiaomi users. Ready for maintainer look but unmerged since June 20.
- **#97162** (OPEN, P2) — Secrets audit severity threshold. Ready for maintainer look.

**Pipeline bottleneck**: Several P1 issues have been open for **120+ days** with no fix PRs (#38439, #38091, #38327), indicating either complexity in root cause analysis or maintainer capacity constraints. The 500 open PRs suggest the maintainer review queue is a significant bottleneck.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digests.

---

## Cross-Project Comparison Report: AI Agent & Personal Assistant Ecosystem (2026-07-07)

### 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is characterized by extremely high community activity and a sharp focus on production hardening. While the flagship project, **OpenClaw**, remains the epicenter of activity with hundreds of daily contributions, a diverse ecosystem of specialized agents is rapidly maturing. There is a clear industry-wide shift from feature experimentation toward solving enterprise-grade reliability issues, including session state persistence, multi-tenancy, cross-platform stability, and security auditing. The most salient trend is the collective struggle to manage **session state and context integrity** across diverse provider boundaries and hardware platforms, indicating that the core "memory" and "identity" problems of autonomous agents remain the primary bottleneck to widespread adoption.

### 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | New Release? | Health Score (1-5) | Key Signal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 184 | 500 (239 merged) | No | 4 | Very high velocity; significant regression bug backlog. |
| **ZeroClaw** | 9 | 50 (4 merged) | No | 4 | Strong security ops & infrastructure focus; CI reliability issues. |
| **Hermes Agent** | 15 | 50 (2 merged) | No | 3 | Good community contribution; PR review bottleneck. |
| **NanoBot** | 40 | 500 (9 merged) | No | 2 | Major security audit surfaced critical gaps; rapid fix response. |
| **NanoClaw** | 3 (surfaced) | 13 | No | 3 | Documentation overhaul; targeted bug fixes. |
| **IronClaw** | 8 | 50 (17 merged) | No | 5 | Exceptional velocity; major features (Slack OAuth, WebUI) merging. |
| **CoPaw** | 18 | 46 (19 merged) | Yes (v1.1.12.post3) | 3 | High dev activity; critical Windows sandbox side-effect bug. |
| **LobsterAI** | 5 (closed) | 17 (16 merged) | No | 3 | Cleanup wave of stale bugs; heartbeat cost control. |
| **PicoClaw** | 2 (new) | 5 (1 merged) | No | 2 | Targeted fixes; two PRs stalled for 25+ days. |
| **Moltis** | 0 (new) | 5 (3 merged) | No | 4 | Low but steady; critical Docker/OAuth fixes merged. |
| **TinyClaw** | 0 | 0 | - | - | Inactive. |
| **NullClaw** | 0 | 0 | - | - | Inactive. |
| **ZeptoClaw** | 0 | 0 | - | - | Inactive. |

### 3. OpenClaw's Position

OpenClaw maintains a dominant and defensible position as the **core reference implementation**. Its advantages are clear:

- **Community Size:** With 184 issues and 500 PRs updated in a single day, its community engagement dwarfs all other projects by an order of magnitude. This provides a massive buffer for testing, bug reporting, and plugin development.
- **Technical Approach:** OpenClaw is the most platform-agnostic, with specific emphasis on cross-platform (Windows, macOS, Linux) shim layers and a robust channel provider model (Telegram, Signal, Discord). This contrasts with projects like **IronClaw**, which is Rust-centric and deeply tied to its own "Reborn" runtime.
- **Feature Breadth:** It addresses the widest range of user needs, from CLI backends and backup stability to session management and UI theming. This breadth, however, leads to a higher surface area for regression bugs.
- **Performance Regressions:** A critical weakness is visible today: OpenClaw has the highest number of **P1/P2 regressions** (12 identified), particularly around session state, provider auth, and tool output rendering, which could erode trust if not resolved.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating industry-wide challenges:

| Requirement | Affected Projects | Specific Need |
| :--- | :--- | :--- |
| **Session State Persistence** | OpenClaw, Hermes Agent, PicoClaw, CoPaw | Agents losing context across restarts, `tool_use` blocks corrupted on reload, memory search state lost. |
| **Cross-Platform Reliability** | OpenClaw, NanoBot, Hermes Agent, CoPaw | Windows process spawning (`.cmd` shims), MacOS launchd hangs, NixOS PATH issues. |
| **Provider Interoperability** | OpenClaw, PicoClaw, ZeroClaw | Google Vertex / Gemini failing via OpenAI compat wrappers; malformed tool-call arguments causing provider 400s. |
| **Security Hardening** | NanoBot, ZeroClaw, LobsterAI | API keys as plaintext, no resource limits on subprocesses, TOCTOU race conditions, SSRF vulnerabilities. |
| **Multi-Tenancy & Isolation** | Hermes Agent, NanoBot, IronClaw | Need to run isolated agents without forking core; namespace user identities across channels. |
| **Enterprise Storage** | OpenClaw, NanoClaw | Demand for PostgreSQL backend over SQLite for production deployments and audit logging. |

### 5. Differentiation Analysis

The ecosystem is diverging along three primary axes: **target user**, **core architecture**, and **maturity stage**.

- **OpenClaw: The General-Purpose Hub.** Targets the widest audience of developers and power users with a plugin-based architecture. The high regression rate is a symptom of its ambitious scope.
- **IronClaw & ZeroClaw: The Secure, Rust-Based Foundation.** Both written in Rust, targeting high-reliability, secure, and performant deployments. **IronClaw** is aggressively adding features (Slack OAuth, WebUI), while **ZeroClaw** is focused on foundational security and CI infrastructure.
- **Hermes Agent: The Enterprise Multi-Platform OS.** Focuses on "platform completeness" (WhatsApp, cron, Telegram) and is the primary project grappling with multi-tenancy. It has the most mature "skills" auto-creation loop.
- **NanoBot & CoPaw: The Feature Velocity Champions.** Both prioritize rapid iteration, but this comes at a cost. **NanoBot** just underwent a massive security audit, while **CoPaw** shows high innovation (memory refactor, test infra) alongside critical stability bugs (Windows GPU crashes).
- **PicoClaw: The Lean & Focused Agent.** A minimal, targeted implementation. Lower activity but also a smaller regression footprint, appealing to users who want a stable, "batteries-included" experience without the bloat.
- **Moltis: The Quiet Maintainer.** Focuses on core platform compatibility (Docker, MCP OAuth, WhatsApp) with low drama. Ideal for users who value stability over new features.

### 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating & High Volume**
- **OpenClaw**, **IronClaw**, **ZeroClaw**: These projects are in a high-activity phase of feature development and bug fixing. They have strong maintainer presence and are likely to see new releases soon.

**Tier 2: Feature Velocity with Stability Challenges**
- **NanoBot**, **CoPaw**, **Hermes Agent**: These projects have high community contribution and feature innovation but are actively struggling with accumulated technical debt and security gaps. They are mid-maturity, transitioning from "cool tool" to "production system."

**Tier 3: Stabilization & Maintenance**
- **LobsterAI**, **Moltis**, **PicoClaw**: These projects are in a maintenance or cleanup phase. They are closing old bugs and fixing core issues rather than adding flashy new features, which is a sign of growing maturity.

**Tier 4: Dormant/Inactive**
- **TinyClaw**, **NullClaw**, **ZeptoClaw**: No activity suggests these projects are either complete for their niche, abandoned, or undergoing a silent period.

### 7. Trend Signals for AI Agent Developers

1.  **The "Memory Wall" is Real.** The most frequent pain point across all active projects is **session state corruption** and **context loss**. A system's ability to reliably serialize, persist, and restore an agent's state across tool calls, channel switches, and restarts is the single biggest differentiator between a toy and a production tool.

2.  **Security is No Longer Optional.** High-profile audits in **NanoBot** and security fixes in **ZeroClaw** and **IronClaw** signal that the ecosystem is past the "move fast and break things" phase. Users now expect API key encryption, subprocess sandboxing, TOCTOU prevention, and vulnerability management.

3.  **Windows is the Achilles' Heel.** A disproportionate number of high-severity bugs are Windows-specific (**OpenClaw**, **CoPaw**, **NanoBot**). The complexity of process management, shim resolution, and filesystem ACEs means that for any project targeting enterprise users (where Windows is dominant), Windows investment must be a top priority.

4.  **Tool-Output Rendering is a UX Crisis.** The bug in **OpenClaw** (#96857) where agents see `(see attached image)` instead of tool text is a critical UX failure. As agents become more autonomous, the format and reliability of the communication between tools and the model becomes as important as the model itself. "Can my agent *see* its own output?" is a fundamental question.

5.  **Cost Optimization Drives Architecture.** The demand for **PostgreSQL** (OpenClaw), **tool pre-selection** (Hermes Agent), and **heartbeat cost control** (LobsterAI) shows that developers are building for scale where API costs and database performance matter. The architecture is shifting from "Can it work?" to "Can it work profitably and at scale?"

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-07

## Today's Overview
NanoBot is experiencing a major code audit-driven activity spike, with 40 issues updated in the last 24 hours (38 open/active, 2 closed) and an extraordinary 500 PRs updated (491 open, 9 merged/closed). A comprehensive security and correctness audit submitted by contributor `hamb1y` has generated 35 detailed findings spanning command injection, path escape vulnerabilities, auth bypass risks, resource leaks, and code inefficiencies — dominating today's issue tracker. The project is processing a high-volume of targeted bug-fix and refactoring PRs stemming from these findings, with several already merged or under review. No new releases were published today, suggesting the team is consolidating fixes before the next version cut.

## Releases
No new releases were published today.

## Project Progress
Nine PRs were merged or closed today, reflecting active resolution of critical issues:
- **#1290** (closed) — `fix(heartbeat): restore HEARTBEAT_OK_TOKEN and legacy callback support` — Restores backward-compatible heartbeat functionality, addressing a regression in monitoring integrations.
- **#4459** (closed) — `feat: add Mattermost channel support` — Adds a full Mattermost channel integration with WebSocket real-time messaging, streaming responses, and auto-reconnect.
- **#4654** (closed) — `fix(cli): print response text when streaming fails in interactive mode` — Resolves silent response loss in CLI interactive mode when streaming does not produce deltas.
- **#4673** (closed) — `fix(dream): ground memory audit records in the real git diff` — Ensures Dream consolidation audit logs accurately reflect actual file changes.
- **#4818** (closed) — `fix(runtime): guard web_fetch signature against None URL` — Quick-fix for a cache-signature pollution bug discovered in the audit.
- **#4822** (open) — `fix(webui): preserve automation source on streamed replies` — Fixes WebUI metadata preservation for automation-triggered responses.
- Several other open PRs targeting the audit's high-priority findings (see Bugs & Stability).

## Community Hot Topics

### Most Active Issues

1. **#4511** [CLOSED] — *Windows `--background` gateway option inconsistency* (4 comments)  
   *Author: Quincy-Zh* — [Link](https://github.com/HKUDS/nanobot/issues/4511)  
   Reports that after `/restart`, the process info JSON file does not match actual runtime state on Windows. Underlying need: reliable daemon management across platforms, especially Windows process lifecycle.

2. **#4637** [OPEN] — *Telegram long message truncation — prior trunks fail to render* (2 comments)  
   *Author: MARJORIESHA-pBAD* — [Link](https://github.com/HKUDS/nanobot/issues/4637)  
   Screenshot shows Telegram markdown messages split into segments where only the last segment renders. User needs reliable long-form message delivery in Telegram channel.

3. **#4765** [CLOSED] — *Python SDK async context manager protocol error* (2 comments)  
   *Author: The-Markitecht* — [Link](https://github.com/HKUDS/nanobot/issues/4765)  
   Official Python SDK example from docs raises immediate exception. Indicates documentation/testing gap for the programmatic API.

### Most Active Pull Requests

- **#4671** [OPEN] — `fix: pin validated dns for ssrf checks` (priority: p0) — [Link](https://github.com/HKUDS/nanobot/pull/4671)  
  Addresses SSRF vulnerability by pinning validated DNS IPs for URL fetches. High community interest as a security-critical fix.
- **#4614** [OPEN] — `feat(cli): support multiline input via Alt+Enter` — [Link](https://github.com/HKUDS/nanobot/pull/4614)  
  Adds multiline composition to CLI; basic UX improvement long awaited by CLI power users.
- **#4766** [OPEN] — `fix(webui): keep slash commands out of streaming state` — [Link](https://github.com/HKUDS/nanobot/pull/4766)  
  Prevents slash commands from interfering with streaming response state in WebUI.

**Underlying needs**: Users are demanding (1) reliable multi-platform process management, (2) robust multimedia messaging across channels, (3) accurate documentation/APIs, (4) security hardening, and (5) better CLI UX.

## Bugs & Stability

A comprehensive security and correctness audit (Issue #4815) has surfaced **35 findings**, many classified as security vulnerabilities or critical bugs. Key findings ranked by severity:

### Critical / Security
- **API keys stored as plaintext** in `~/.nanobot/config.json` (#4803) — `ProviderConfig.api_key` has `repr=False` but not `exclude=True`, leaking to disk serialization. Fix PR: none yet.
- **`restrict_to_workspace` defaults to `False`** (#4796) — Full filesystem exposure by default. Fix PR: none yet.
- **No resource limits on shell subprocesses** (#4797) — LLM could issue fork bombs or resource-exhausting commands. Fix PR: none yet.
- **Symlink TOCTOU in filesystem tools** (#4790) — Race window between path resolution and access. Fix PR: none yet.
- **Streaming LLM calls bypass wall-clock timeout entirely** (#4795) — Indefinite resource consumption. Fix PR: #4814 (partial, for CancelledError propagation).

### High Severity
- **Concurrent file writes not serialized** (#4798) — Workspace file corruption risk. Fix PR: none yet.
- **Exec sessions have no shutdown cleanup** (#4794) — Orphaned child processes accumulate. Fix PR: none yet.
- **WeakValueDictionary GC can break mutual exclusion in Consolidator** (#4789) — Fix PR: #4819 (open, replaces with plain dict).
- **`except BaseException` catches KeyboardInterrupt/SystemExit** (#4788) — Fix PR: #4816 (open).
- **Leaked CancelledError silently swallowed in main agent loop** (#4804) — Fix PR: #4814 (open).

### Medium/Low Severity
- Duplicated markdown converters across 3 channels (#4810), dead code removal (#4806), inefficient `json.loads(json.dumps())` pattern (#4808), `setdefault({}).update()` allocation waste (#4809), `.strip()` on list-form msg.content (#4800), missing `role` key guard (#4801), spurious 128-token budget (#4802, fix PR: #4817), `None` URL cache signature (#4799, fix PR: #4820), `/stop` message loss (#4792), unbounded `Session.messages` list (#4787), unbounded `SessionManager._cache` (#4786), OOM on large file reads (#4785), channel-level rate limiting (#4791).

**Overall stability assessment**: The codebase has several critical security gaps and resource management issues. The audit suggests the project may have been prioritizing feature velocity over security hardening and resource governance. However, the rapid response with targeted fix PRs (at least 6 open PRs directly addressing audit findings) is a positive sign.

## Feature Requests & Roadmap Signals

### Explicit Requests
- **Mattermost channel support** (#4459, just merged) — Responds to demand for enterprise chat platform integration.
- **Document attachments in WebUI** (#4771, open PR) — Users want to upload PDFs, text files, etc. beyond images.
- **OAuth status and expiry warnings** (#4689, open PR) — Users need visibility into OAuth token health across CLI/WebUI.
- **Multiline CLI input** (#4614, open PR) — CLI users want to compose multi-line prompts.

### Predicted Next-Release Features
Based on active PRs and issue activity:
1. **Security hardening release** — Likely a v0.2.3 or v0.3.0 focused on addressing the audit findings: API key encryption, filesystem confinement by default, subprocess resource limits, and TOCTOU fixes.
2. **Mattermost channel support** — Now merged; will appear in next release.
3. **WebUI document attachments** — PR #4771 likely to land soon.
4. **OAuth status dashboard** — PR #4689 suggests improved provider credential management.
5. **WebUI streaming state improvements** — Multiple PRs (#4766, #4822) refining the WebUI real-time experience.

## User Feedback Summary

### Pain Points (High Confidence)
1. **Windows process management broken** (#4511) — `/restart` command produces incorrect process state files.
2. **Telegram message rendering broken** (#4637) — Long markdown messages fail to render intermediate segments.
3. **Python SDK broken out of the box** (#4765) — Official docs example throws immediate exception, eroding developer trust.
4. **SSRF vulnerability risk** (#4671, #4611) — Community concern about URL fetch security.
5. **No context window budget control** (#4802) — Setting `context_window_tokens=0` unexpectedly imposes a 128-token budget.

### Satisfaction Signals
- **Strong community contribution** — The `hamb1y` audit with 35 detailed findings shows deep engagement from power users/contributors.
- **Mattermost integration merged** — Enterprise users gain a new supported channel.
- **Multiple bug-fix PRs from new contributors** (axelray-dev, chengyongru) indicate a healthy contributor base.

### Overall Sentiment
Mixed — The project is actively evolving with new features (Mattermost, document attachments) but has accumulated significant technical debt and security gaps. The audit-driven cleanup suggests the maintainers are now prioritizing hardening after a period of rapid feature development.

## Backlog Watch

### Issues Needing Maintainer Attention
- **#4637** — *Telegram long message truncation* (updated July 6, 0 maintainer response) — UI-breaking bug for Telegram users. No assigned triage.
- **#4511** — *Windows `--background` inconsistency* (closed but root cause may persist) — Addresses cross-platform daemon management.

### PRs Needing Maintainer Review
- **#4614** — *Multiline CLI input* (updated July 7, no maintainer response) — Simple UX improvement, low risk, pending for 6+ days.
- **#4689** — *OAuth status and expiry warnings* (updated July 6, no maintainer response) — Feature PR with significant UX impact.
- **#4820** — *Guard external_lookup_signature against None URL* (updated July 6) — Direct audit fix, awaiting merge.
- **#4819** — *Replace WeakValueDictionary for consolidation locks* (updated July 6) — Fixes potential mutual exclusion bug.

### Risky Items
- **#4793** — *Global ExecSessionManager singleton shared across agent loops* — Cross-session data visibility bug; no fix PR yet, but could enable data leakage between user sessions.
- **#4787 & #4786** — *Unbounded session memory growth* — Silent OOM risk for long-running gateways; no fix PR yet.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — July 7, 2026

## 1. Today's Overview

Hermes Agent is experiencing a surge of community-driven development, with **50 pull requests** and **15 active issues** updated in the last 24 hours. The project shows strong operational health: maintainers are actively merging fixes (2 PRs closed/merged today), while the community contributes across multiple domains including security patches, platform support, and infrastructure reliability. Notably, the project is tackling systemic challenges around **multi-tenancy**, **session state persistence**, and **cross-platform delivery stability**, indicating a platform maturing from single-user to enterprise-grade deployments. The 2:1 ratio of open PRs to open issues suggests an active development pipeline, though the sheer volume (50 PRs in 24h) may strain review bandwidth.

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent releases remain those from prior periods. The absence of releases despite 50 active PRs may indicate that the project is accumulating changes for a larger planned release.

## 3. Project Progress

**Two PRs merged/closed today:**

- **PR #59966** (fix/skills-tool): Accept absolute skill paths under trusted Hermes skills roots — critical fix resolving cron-delivery failures for scheduled skills. *Merged.*

- **PR #50077** (fix/delegation): Correct `_adjust_thread_count` worker args to match stdlib signature, fixing a thread pool parameter mismatch. *Merged.*

**Key in-progress work (highlights from top 20 PRs):**
- **PR #60024** (fix/cron): Adds `whatsapp_cloud` to `_KNOWN_DELIVERY_PLATFORMS` — unblocking WhatsApp cron delivery.
- **PR #59993** (security/deps): Bumps Starlette/Cryptography/python-multipart for July 2026 CVEs — 15 known vulnerabilities addressed.
- **PR #60023** (fix/pricing): Fixes absurd pricing calculations ($1.4M/MTok) for custom providers resolving against models.dev.
- **PR #60018** (high-severity fixes): Prevents `/stop` signal loss and empty provider credential corruption — two deep bugs fixed in one PR.

## 4. Community Hot Topics

**Most active discussions (by comments/reactions):**

1. **#34352 — "Solving the Multi-Tenant Hermes Problem"** (9 comments, 1 👍)
   *[View Issue](https://github.com/NousResearch/hermes-agent/issues/34352)*
   *Analysis:* The most strategic discussion currently. The author has been running a production fix for months that bypasses memory hook system limitations. This signals enterprise adoption pressure — users need to run multiple isolated agents without forking core.

2. **#2990 — "Conversational cron delivery"** (8 comments, 1 👍)
   *[View Issue](https://github.com/NousResearch/hermes-agent/issues/2990)*
   *Analysis:* Users want cron to be a two-way conversational channel, not a one-way broadcast. This reflects a desire for agents to participate in scheduling, ask clarifying questions, and deliver results conversationally across platforms.

3. **#13332 — "Hybrid Tool Pre-Selection (Semantic + Keyword)"** (6 comments, 4 👍)
   *[View Issue](https://github.com/NousResearch/hermes-agent/issues/13332)*
   *Analysis:* Highest-reacted open issue. Users are hitting token limits with ~14,000 tokens of tool schemas per API call. The community is pushing for RAG-style schema injection — a significant optimization that could reduce costs 10x+ for complex setups.

4. **#25833 — "Self-created skills lack correctness guarantees"** (6 comments, 0 👍)
   *[View Issue](https://github.com/NousResearch/hermes-agent/issues/25833)*
   *Analysis:* The skill auto-creation loop creates reusable skills from tasks, but without mechanism-level correctness guarantees. This is a design tension — flexibility vs. reliability in autonomous skill generation.

## 5. Bugs & Stability

**Severity ranking (P1 → P3):**

| Severity | Issue | Summary |
|----------|-------|---------|
| **P1** | [#59824](https://github.com/NousResearch/hermes-agent/issues/59824) | Cron scheduler silently fails — absolute skill paths rejected by security check. *Fix PR #59966 merged.* |
| **P1** | [#60018 (PR)](https://github.com/NousResearch/hermes-agent/pull/60018) | `/stop` signal loss + empty provider credentials corruption — two bugs. *Fix PR open.* |
| **P2** | [#41219](https://github.com/NousResearch/hermes-agent/issues/41219) | Gateway event loop deadlock on Windows after first crash — 200-340MB RSS, no message processing. *No fix PR yet.* |
| **P2** | [#53861](https://github.com/NousResearch/hermes-agent/issues/53861) | macOS: gateway stays down after update — launchd defers respawn in on-demand-only mode. |
| **P2** | [#58958](https://github.com/NousResearch/hermes-agent/issues/58958) | Telegram messages disappearing due to deduplication logic — content_delivered flag fires before final send. |
| **P2** | [#59988](https://github.com/NousResearch/hermes-agent/issues/59988) | `whatsapp_cloud` missing from `_KNOWN_DELIVERY_PLATFORMS` — cron delivery broken. *Fix PR #60024 open.* |
| **P2** | [#60014](https://github.com/NousResearch/hermes-agent/issues/60014) | Module-level JOBS_FILE caching defeats test isolation — production jobs can leak in test. |
| **P3** | [#60020](https://github.com/NousResearch/hermes-agent/issues/60020) | Session title uniqueness is global — invisible TUI sessions block desktop renames. |
| **P3** | [#60019 (PR)](https://github.com/NousResearch/hermes-agent/pull/60019) | Desktop pinned sessions not preserved across refresh — store resync fix. |

**Security:**
- PR #59993 addresses 15 known CVEs across 3 major dependencies — recommended immediate review.

## 6. Feature Requests & Roadmap Signals

**High-probability for next release:**

1. **WhatsApp Business Cloud Platform** — Two PRs (#60024, #57093) and one issue (#59988) show coordinated effort. Likely shipping as full built-in platform support. *Probability: 90%*

2. **Scoped LLM Request Overrides** — PR #58312 allows platform agents and subsystems to override request fields without changing global model settings. *Probability: 70%*

3. **Multi-Tenant Memory Isolation** — Issue #34352 with production-proven fix. Critical for enterprise deployments. *Probability: 60%*

4. **Cron Conversational Delivery** — Issue #2990 (8 comments) — would enable cron to trigger agent conversations. *Probability: 40%*

5. **Hybrid Tool Pre-Selection** — Issue #13332 (4 👍) — RAG-style schema injection to reduce token overhead. *Probability: 35%*

6. **Claude Code as First-Class Provider** — Issue #33462 — local subprocess integration for Claude Max OAuth. *Probability: 30%*

**Emerging pattern:** The community is self-organizing around *platform completeness* (WhatsApp, Telegram guest mode), *cost optimization* (tool pre-selection), and *enterprise reliability* (multi-tenancy, session state).

## 7. User Feedback Summary

**Real pain points expressed today:**

- **"We've been running a fix in production for months"** (#34352) — Enterprise users are forking/modifying core to meet isolation requirements. Satisfaction high with workaround, but friction with upstream architecture.
- **"Agent hallucinates wrong project identity"** (#27013) — Session restart causes complete context loss. Users report agents claiming to work on different projects.
- **"$1,400,000/M input token pricing"** (#60023 PR) — Custom providers show absurd pricing estimates, confusing users and blocking deployment.
- **"Messages disappearing from Telegram"** (#58958) — Deduplication logic creates visible gaps in conversation history on macOS.
- **"Completely silent failure"** (#59976 PR) — Dead authentication tokens cause hard failures with no logging, requiring manual human intervention.

**Expressed satisfaction:**
- The skill auto-creation loop is acknowledged as "one of the system's strengths" (#25833), though users want correctness guarantees.
- Telegram guest mode (PR #56476, #56477) is being built — users appreciate the community's platform expansion efforts.

**Underlying need:** Users want Hermes to be a *reliable multi-platform operating system for agents*, not just a single-user tool. The tension between flexibility (skill creation, cron, multi-tenant) and reliability (state persistence, correct pricing, message delivery) is the dominant theme.

## 8. Backlog Watch

**Important issues needing maintainer attention:**

1. **#27013 — Agents lose project context across session restarts** (P2, opened 2026-05-16, 4 comments)
   *[View Issue](https://github.com/NousResearch/hermes-agent/issues/27013)*
   *Status:* 52 days open. No assignee, no linked PR. Root cause in session serialization/deserialization — critical for production reliability.

2. **#33462 — Register claude-code as first-class subprocess provider** (P3, opened 2026-05-27, 3 comments)
   *[View Issue](https://github.com/NousResearch/hermes-agent/issues/33462)*
   *Status:* 41 days open. No PR. Existing Claude integration is a thin API wrapper; full local subprocess mode is requested.

3. **#36144 — Agent session HOME points to wrong path** (P2, opened 2026-06-01, 3 comments)
   *[View Issue](https://github.com/NousResearch/hermes-agent/issues/36144)*
   *Status:* 36 days open. Tools resolve `~` to hermes profile directory instead of user's actual home — could cause tool failures in CI/CD and development environments.

4. **#53349 — Support cwd-local soul.md for per-directory agent identity** (P3, opened 2026-06-27, 3 comments)
   *[View Issue](https://github.com/NousResearch/hermes-agent/issues/53349)*
   *Status:* 10 days open. Emerging pattern: users want project-scoped identities, not just global persona.

**Longest-open high-impact issue:** #27013 (52 days) — session context loss is likely affecting multiple production deployments. The absence of maintainer response is concerning for enterprise users evaluating Hermes.

**Note:** The project's 15 open issues and 50 open PRs on the same day suggest the maintainer team may benefit from prioritizing PR review and backlog triage, as the volume of community contributions is significantly outpacing issue resolution.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-07

## 1. Today's Overview
Project activity is **moderate but focused**, with 2 new issues and 5 pull requests updated in the last 24 hours. The development team is actively addressing API compatibility and provider bugs, particularly around Anthropic and Gemini integrations. One PR was merged/closed (#3227), signaling steady progress on session-history correctness. No new releases are out today, but the volume of open PRs (4) suggests a minor release may be accumulating. Overall, the project appears healthy with a clear maintenance cadence.

## 2. Releases
**No new releases today.** The latest available version remains at v0.3.1, as referenced in bug reports.

## 3. Project Progress
One PR was merged/closed today:

- **#3227** — `fix(providers): resolve tool_use name/args from Function on reloaded history` (Author: AayushGupta16): This fix addresses a persistent session-history corruption bug in both Anthropic providers. When chat history round-trips through session files, `tool_use` blocks were losing their `Name` and `Arguments` fields because those fields were `json:"-"` (runtime-only) in the `ToolCall` struct. The fix ensures proper serialization/deserialization so tool calls survive session reloads. The PR was created and closed on the same day, indicating a quick, targeted fix.

## 4. Community Hot Topics

| Issue/PR | Type | Comments | Reactions | Summary |
|----------|------|----------|-----------|---------|
| **#3231** | Issue (Feature) | 0 | 0 | User requests Basic Auth header support for SearXNG search integration |
| **#3230** | Issue (Bug) | 0 | 0 | Gemini API returns `missing thought_signature` error when called via OpenAI-compatible format through Cloudflare AI Gateway |
| **#3226** | PR (Open) | 0 | 0 | Prevents `write_file` from coaching destructive overwrites of memory files |
| **#3118** | PR (Open) | 0 | 0 | Adds remote WebSocket mode to the `picoclaw agent` command (lingering ~3 weeks) |
| **#3115** | PR (Open) | 0 | 0 | Fixes session-history corruption from inline `data:` URLs in tool output (lingering ~3 weeks) |

**Analysis:** The most significant community interest currently centers on **provider interoperability and authentication**. Issue #3230 is a real production blocker for anyone using Gemini via Cloudflare AI Gateway, and #3231 reflects a pain point for self-hosted SearXNG instances behind authentication proxies. The two older PRs (#3118, #3115) remain open without maintainer feedback, which may frustrate contributors.

## 5. Bugs & Stability

### High Severity
- **#3230** — `[BUG] Function call is missing thought_signature when calling Gemini API via OpenAI compat format`  
  _Impact:_ Breaks tool-calling entirely when using Gemini through Cloudflare AI Gateway. Affects versions 0.2.9 through 0.3.1.  
  _Fix status:_ No associated fix PR yet. User suspects the OpenAI-compat wrapper is omitting the required `thought_signature` field that Gemini expects for tool calls.  
  _Link:_ sipeed/picoclaw Issue #3230

### Medium Severity
- **#3228** (PR, open) — `fix(anthropic-messages): send SystemParts as system blocks with cache_control`  
  _Impact:_ Prompt caching on the Anthropic provider is completely broken — cache-aware callers get 0% cache hits because `SystemParts` are flattened to a single string with no per-block `cache_control` markers.  
  _Fix status:_ Open PR #3228 exists with the proposed fix.  
  _Link:_ sipeed/picoclaw PR #3228

### Low Severity / Preventative
- **#3226** (PR, open) — `fix(tools): stop write_file from coaching destructive overwrite`  
  _Impact:_ The `write_file` tool's overwrite guard was accidentally coaching the model toward destructive replacement of `memory/MEMORY.md`, which PicoClaw uses for memory persistence. The fix changes the tool's framing from "replace" to "update" semantics.  
  _Link:_ sipeed/picoclaw PR #3226

## 6. Feature Requests & Roadmap Signals

### Explicit Requests
- **#3231** — Basic Auth header support for SearXNG search: Users want to pass `Authorization` headers directly instead of embedding credentials in URLs (which is unsupported by some SearXNG proxy setups). This is a straightforward feature that could ship in the next minor release.

### Implicit Roadmap Signals
- **Remote agent mode** (PR #3118): This is a significant capability — allowing the agent to connect via WebSocket to a remote Pico server. The PR has been open since June 12, which may indicate broader architectural considerations before acceptance.
- **Provider parity fixes** (PR #3228, #3227): The pattern of Anthropic provider fixes suggests PicoClaw is prioritizing Anthropic support quality, possibly ahead of a major release.

**Prediction for next version (v0.4.0):** Likely includes:
- Remote WebSocket agent mode (if maintainers are satisfied with security implications)
- Fixed Anthropic prompt caching (PR #3228)
- Gemini OpenAI-compat fix (requires resolution of #3230)

## 7. User Feedback Summary

### Pain Points
- **Gemini integration broken** via Cloudflare AI Gateway: User VictorSu000 reports a complete inability to use tool-calling with Gemini models through the OpenAI-compatible endpoint, affecting versions 0.2.9–0.3.1. This is a cross-version regression-level issue.
- **SearXNG authentication limitations**: Users running SearXNG behind authentication (Basic Auth) cannot configure it without embedding credentials in URLs, which is insecure and sometimes unsupported.
- **Anthropic caching broken**: Users relying on Anthropic's prompt caching feature get zero cache hits, increasing API costs significantly.

### Use Cases
- Self-hosted search with authentication proxies
- Multi-provider setups using Cloudflare AI Gateway as a unified endpoint
- Memory-augmented agents relying on `MEMORY.md` persistence

### Satisfaction Signals
- No "this is amazing" or "critical missing feature" responses today, but the bug reports are well-formed and constructive, indicating a technical user base that expects the project to work reliably.

## 8. Backlog Watch

### Aging Issues (no maintainer response)
| Issue/PR | Created | Days Open | Summary |
|----------|---------|-----------|---------|
| **#3118** | 2026-06-12 | 25 days | Add remote Pico WebSocket mode — substantial feature PR with no maintainer comment |
| **#3115** | 2026-06-12 | 25 days | Fix inline data URL media extraction — session-history bug fix with no maintainer review |

### Analysis
Both PRs #3118 and #3115 are from the same contributor (jp39) and have been open for over three weeks without any maintainer feedback. This is concerning for contributor morale — a lack of engagement on substantial, well-documented contributions could discourage future PRs from this developer. Even a "we're reviewing this" comment would be beneficial. These PRs should be a priority for triage in the coming week.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-07

## Today's Overview
Activity is moderate-to-high today with 13 PRs updated in the last 24 hours and 3 issues surfaced. A significant documentation overhaul is underway, with multiple PRs from contributor `glifocat` addressing stale technical documentation. The single closed issue, #2960, was a design proposal for a live Zoom voice agent with K-ai knowledge base integration, closed after review. Developer infrastructure improvements are prominent, including fixes for MCP server failure detection and SDK event mapping. Community engagement appears healthy with a mix of feature contributions and maintenance work.

## Releases
No new releases today. The repository remains at the version referenced in documentation (v2.1.38, as verified in recent PRs).

## Project Progress
Three PRs were merged or closed in the last 24 hours:

- **#662 [CLOSED]** — *fix: service PATH broken on Nix-managed systems* — A long-standing fix (opened March 3) for NanoClaw crashing on NixOS and nix-darwin due to missing `/run/current-system/sw/bin` in systemd unit and launchd plist PATH. This closure represents a significant niche-platform fix finally landing.
- **#16 [CLOSED]** — *Escape special regex characters in assistant name trigger pattern* — A fix preventing regex injection when `ASSISTANT_NAME` contains special characters, closed after review. This was a vulnerability/privacy concern for organizations using names with regex metacharacters.
- **#2967 [CLOSED]** — *feat: opt-in local audit log (AUDIT_ENABLED)* — A new feature adding NDJSON audit logging to `data/audit/`, with `ncl audit list` read-back command and post-write hook registry for future exporters. This addresses compliance and observability needs.

Active PRs showing progress include documentation rewrites for `architecture.md`, `agent-runner-details.md`, and `SDK_DEEP_DIVE.md`, plus a DB schema sync PR covering migrations 010-018.

## Community Hot Topics

- **#2960 [CLOSED] — Proposal: Live Zoom voice agent + K-ai KB integration** — This issue, with 1 comment from vishalsachdev, proposed a design for a voice agent joining Zoom meetings, answering KB questions via wake phrase, and capturing transcripts for action-item extraction. The underlying need is real-time meeting intelligence — a recurring demand in enterprise collaboration tooling. Though closed, the proposal signals community appetite for voice-enabled agent integrations. [Link](https://github.com/nanocoai/nanoclaw/issues/2960)

- **#2624 [OPEN] — feat: per-server disabledTools in McpServerConfig** — This PR by mmahmed is the most mature open PR (since May 27) with ongoing updates. It adds fine-grained control over which tools are exposed per MCP server. The length of review suggests significant architectural consideration. [Link](https://github.com/nanocoai/nanoclaw/pull/2624)

- **#2954 [OPEN] — Add Phase-1 security reporting & triage policy** — This PR by glifocat (updated today) adds `.github/SECURITY.md` and related policy files. This reflects the community's security awareness and follows from discussions in a prior issue (#2651). The need for a formal security contribution framework indicates growing production use. [Link](https://github.com/nanocoai/nanoclaw/pull/2954)

## Bugs & Stability

**HIGH SEVERITY** — *MCP server spawn/connect failures are silent* (#2968, opened by explorerleslie) — If an MCP server configured via `ncl groups config add-mcp-server` fails silently (bad path, missing deps, crash), the agent runs with missing tools and reports success with no error surface. This is a critical transparency issue — users are unaware their agents lack intended capabilities. No fix PR exists yet. [Link](https://github.com/nanocoai/nanoclaw/issues/2968)

**MEDIUM SEVERITY** — *Provider errors recorded as successful* — PR #2966 (Draft) addresses two coupled gaps: provider errors within consumed batches are recorded as `completed` instead of `failed`, and failed acks are not mirrored. This can mask potential problems and skew operational metrics. [Link](https://github.com/nanocoai/nanoclaw/pull/2966)

**MEDIUM SEVERITY** — *Rate limit event SDK type mismatch* — PR #2965 fixes a bug where `ClaudeProvider.translateEvents` incorrectly expected rate-limit events as a `system` subtype, but the SDK (0.3.x) ships them as a top-level `SDKRateLimitEvent`. This could cause rate limits to be unhandled silently. [Link](https://github.com/nanocoai/nanoclaw/pull/2965)

**LOW SEVERITY (FIXED)** — *Nix-managed system PATH broken* (#662, now closed) — Crashes on NixOS/nix-darwin resolved with proper PATH extension.

## Feature Requests & Roadmap Signals

- **Live Zoom voice agent** (#2960) — Though closed, the proposal for joining Zoom meetings live, answering KB questions via wake phrase, and feeding transcripts into decision extraction pipelines represents a major integration point. This could become a long-term roadmap item for enterprise conferencing.

- **Per-server disabled tools** (#2624) — This MCP server configuration enhancement for tool-level control is nearing maturity. Given its two-month lifecycle, this is likely targeted for the next patch/minor release.

- **Opt-in local audit log** (#2967, merged) — Already landed. This NDJSON audit log facility with `ncl audit list` read-back and post-write hook registry enables compliance use cases. The hook registry suggests a future plugin/export system (e.g., SIEM forwarding).

- **Image generation** (#2959, by rajpoot713) — A brief request to "generate a logo" for "Dream design" with aesthetic styling. This appears unsophisticated and may be a misdirected support request rather than a feature proposal. Unlikely to influence roadmap.

- **Add-teams SSF grammar** (#2958) — Rebuilds the `add-teams` skill on structured-skill-format base, replacing the multi-step Azure portal walk with CLI-based `teams login` + `teams app create`. This is a usability improvement for Microsoft Teams integration that could ship in the next release.

## User Feedback Summary

- **Pain Point: Silent MCP failures** (#2968) — The strongest user dissatisfaction today is with agents failing silently when MCP servers don't start. Users expect transparent tool connectivity status.
- **Pain Point: Documentation staleness** (PRs #2961-#2964) — Contributor `glifocat` identified and is systematically fixing stale documentation across README, CONTRIBUTING, CLAUDE.md, architecture docs, SDK deep-dive, and DB schema docs. This suggests users have been confused by documentation not matching current codebase behavior.
- **Satisfaction: Nix platform support** (#662 closed) — The closure of the NixOS/nix-darwin PATH fix should improve satisfaction for users on alternative Linux-based platforms who previously experienced silent startup crashes.
- **Use Case: Audit/compliance** (#2967 merged) — The opt-in audit log feature directly addresses enterprise compliance requirements, indicating growing production deployment use cases.

## Backlog Watch

- **PR #2591** — *fix: namespace user IDs by channel-type prefix, not bare colon* — Opened May 22 by mmahmed, open for 46+ days with recent updates. This PR affects user identity management across channels. The two-month lag without closure suggests either architectural complexity or insufficient reviewer bandwidth. [Link](https://github.com/nanocoai/nanoclaw/pull/2591)

- **PR #2624** — *feat: per-server disabledTools in McpServerConfig* — Opened May 27, now 41 days open. While not stale per se (updated today), the extended review cycle may benefit from explicit reviewer assignment or a status check. [Link](https://github.com/nanocoai/nanoclaw/pull/2624)

- **Issue #2959** — *Image generation* — Low-effort request (2 lines, no model or API specifics). While likely not actionable, it may signal a need for clearer support channels or a FAQ triage path for off-topic requests. [Link](https://github.com/nanocoai/nanoclaw/issues/2959)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-07

## Today's Overview

IronClaw is in a highly active development phase, with **50 pull requests** updated in the last 24 hours (33 open, 17 merged/closed) and **8 issues** updated (6 open, 2 closed). This represents exceptional community and core-team velocity, driven primarily by a massive Slack OAuth integration stack (7-part series), WebUI frontend modernization to Vite/TypeScript/pnpm, and critical production bug fixes in the Reborn runtime. The project saw 0 new releases today, but a large release PR (#5598) remains open with breaking changes across multiple crates. The bug bash label appears on several P2/P3 issues, indicating an ongoing focused quality pass. Overall project health is strong, with rapid iteration on both infrastructure and user-facing features.

## Releases

No new releases were published today. A pending release PR (#5598) proposes significant version bumps including `ironclaw_common` 0.4.2 → **0.5.0** (API breaking changes), `ironclaw_skills` 0.3.0 → **0.4.0** (API breaking changes), and `ironclaw` jumping from 0.24.0 to **0.29.1**. When merged, this release will require downstream consumers to update for breaking API changes in common and skills crates.

## Project Progress

**17 PRs were merged or closed today**, advancing several major initiatives:

- **Slack OAuth Stack (7-Part Series)**: Multiple PRs from BenKurrek advanced the re-architecture of Slack integration, moving from pairing codes to personal OAuth, adding bot-channel entrypoints, least-privilege scopes, and durable conversation bindings (PRs #5644, #5645, #5646, #5648, #5668, #5670, #5693). These are explicitly designed as "dormant/dormant-by-design" layers, with no user-visible change until the final surface flips.

- **WebUI Frontend Modernization**: A coordinated "Codex" effort (PRs #5728, #5729, #5730, #5731, #5732) is migrating the WebUI v2 frontend from vanilla JS/esbuild to Vite + TypeScript + pnpm. This includes embedding prebuilt assets, moving source to TypeScript, and adding Vitest for testing.

- **Production Fixes**: 
  - **Memory prompt-context wiring** (#5742, henrypark133): A production change wiring the `ProductionMemoryPromptContextService` that was fully implemented but never composed into the Reborn runtime
  - **Tool-disclosure security fix** (#5659, henrypark133): Three leak vectors in the tool-disclosure surface where bridge meta-tools survived narrowed allow-sets, fixed with regression tests

- **Filesystem Reliability**: PR #5751 fixes concurrent-CAS `SQLITE_MISUSE` errors by pooling libSQL connections instead of opening new connections per operation. PR #5749 adds CAS-guarded `delete_if_version` primitive needed for subagent await-edge delivery.

## Community Hot Topics

The most discussed items today center on infrastructure quality and developer experience:

- **Issue #5553** [bug_bash_P2] — Approval notifications disappearing from history (2 comments). This has been open 5 days and touches a critical UX flow where running automations require user approval. The notification may flash once and disappear, or never appear at all. This is a high-frustration bug for users relying on automated approval workflows.

- **Issue #4108** — Nightly E2E scheduled run failure, updated again today after 41 days open. The persistent nightly regression (web-regressions job) is a recurring reliability concern that has not been fully resolved.

- **PR #5645** — Slack pairing codes → personal OAuth swap (121 files, deletion-dominated) is one of the largest PRs and represents a significant breaking change for Slack integration users, though designed to be transparent until the final stack layer enables it.

- **PR #5565** (achalvs) — The onboarding/NUX exploration with 13 self-contained commits is a substantial new contributor PR that ships intent-URL → sign-in → onboarding → agentic-chat → task creation flow. This signals strong community interest in improving the first-time user experience.

## Bugs & Stability

**P2 (High Severity):**
- **#5553** — Approval notifications disappear from notification history (open, no fix PR yet). Can cause users to miss critical approval requests from running automations.
- **#5696** — Unsupported operator-config fields (Embeddings, Temperature) shown in WebUI v2 Inference settings; editing them sends failing requests (open, no fix PR).
- **#5694** — `clientActionId()` throws on insecure origins (e.g., self-hosted HTTP), breaking all mutating v2 requests. Blocking for LAN/self-hosted deployments (open, no fix PR).

**P3 (Moderate Severity):**
- **#5698** — Tool permission save failures silently ignored in WebUI v2 Settings Tools tab (open, no fix PR).
- **#5557** — Logs deep link requires opening twice to load selected conversation (open, no fix PR).

**Fixed Today:**
- **#5572** (CLOSED) — `HookedLoopCheckpointPort` not forwarding checkpoint payload methods, causing hooks-enabled coordinator turns to fail. Fixed.
- **#5722** (CLOSED) — Reborn harness gate-dispatch unreachable at integration tier due to disjoint turn-run store. Fixed by henrypark133.

**Production Fix PRs (not yet merged):**
- **#5742** — Wires memory prompt-context source (was fully implemented but never composed)
- **#5659** — Fixes 3 tool-disclosure security leak vectors
- **#5751** — Fixes `SQLITE_MISUSE` from concurrent CAS operations by pooling libSQL connections

## Feature Requests & Roadmap Signals

The most significant roadmap signals today come from the active PRs:

1. **Slack Personal OAuth (stack #5644–#5693)**: This 7-part series fundamentally reworks Slack integration. Expected completion soon; all PRs are open and authored by an experienced contributor (BenKurrek). Likely in next release.

2. **WebUI Vite/TypeScript Migration (#5728–#5732)**: Modernizing the frontend toolchain. Entirely additive at this stage with legacy path preserved. Likely to ship incrementally.

3. **Subagent Thread-Harness Design (#5748)**: A design doc for subagent completion delivery and durability — how parent threads learn descendant subagents have settled. This is architectural planning for a major upcoming feature (P1.0b).

4. **CAS-Guarded Deletion (#5749)**: Enables subagent await-edge delivery design. Infrastructure prerequisite, likely to merge soon.

5. **Onboarding/NUX Demo (#5565)**: Intent-driven onboarding flow with mock-backed Vercel demo. Authored by a new contributor (achalvs), signals community interest in improving first-run experience.

## User Feedback Summary

User pain points evident from issues this week:

- **Approval Workflow Reliability (#5553)**: Users running automations that require network capability approval ("web-access.search") experience notifications that vanish on click or never appear. This directly impacts trust in autonomous agent operations.

- **Self-Hosted Deployment Blockers (#5694)**: Users self-hosting over plain HTTP (LAN deployments) cannot make any mutating requests due to `crypto.randomUUID()` requirement in non-secure contexts. This is a clear deployment friction point.

- **UI Confusion (#5696, #5698)**: Users see editable fields (Embeddings, Temperature) that don't work, or silently fail when saving tool permissions. Silent failures erode user confidence.

- **Navigation Friction (#5557)**: Deep linking to logs requires double-clicking, wasting user time when troubleshooting routine runs.

No explicit positive user feedback was captured in today's issue/PR data, suggesting the project is in a "fixing pain points" phase rather than a "celebrating wins" phase.

## Backlog Watch

- **Issue #4108** — Nightly E2E failure (41 days open, updated today). This recurring failure in the "web-regressions" job has been unresolved for over a month and may indicate a systemic stability issue that could block releases. Needs maintainer escalation.

- **Issue #5553** — Approval notifications bug (P2, 5 days open, 2 comments). Despite being tagged as bug_bash_P2, no fix PR exists yet. Given the severity (users missing approval requests from running automations), this deserves rapid attention.

- **PR #5598** — Release (4 days open). This release PR has significant breaking changes across multiple crates. It's unclear what is blocking its merge — possibly waiting for the Slack stack to land first, or needing additional review on the breaking API changes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for July 7, 2026.

---

## LobsterAI Project Digest — 2026-07-07

### 1. Today's Overview
The project saw a burst of maintenance activity on July 7, with **16 Pull Requests merged/closed** (plus 1 still open) and **5 Issues closed**, marking a cleanup of stale but important tickets from early April. While no new releases were cut, the team merged a significant wave of fixes targeting concurrency bugs, database performance, and MCP/Memory stability. The closure of multiple “stale” bugs without re-opening suggests user complaints from the last quarter have been addressed in development. The project appears to be in a high-velocity cleanup phase, likely preparing for the next stable release.

### 2. Releases
**None** — No new releases were published on this date.

### 3. Project Progress
The following merged PRs highlight the areas of focus on July 7 (most had labels including `area: renderer`, `area: main`, `area: openclaw`, and `area: cowork`):

- **Settings & Cowork Maintenance:** PR [#2284](https://github.com/netease-youdao/LobsterAI/pull/2284) redesigned the model provider settings UI, removed the home recent tasks card, archived legacy cron files, and hid the Windows Python console window.
- **UI Polish:** PR [#2283](https://github.com/netease-youdao/LobsterAI/pull/2283) optimized the UI for Skills, MCP, Memory, and Mail panels.
- **Scheduled Task & Model Fixes:** PR [#2256](https://github.com/netease-youdao/LobsterAI/pull/2256) fixed a bug where the “no notification” option for scheduled tasks was not saving, and fixed a white screen crash when deleting an active custom model.
- **Heartbeat & Cost Control:** PR [#2280](https://github.com/netease-youdao/LobsterAI/pull/2280) introduced a heartbeat cost-control policy prompt, preventing periodic model calls when `HEARTBEAT.md` is missing/empty. PR [#2278](https://github.com/netease-youdao/LobsterAI/pull/2278) added a toggle for the heartbeat feature in Settings.
- **Plugin & MCP Stability:** PR [#2279](https://github.com/netease-youdao/LobsterAI/pull/2279) hid the bundled xAI plugin from user sync. PR [#2277](https://github.com/netease-youdao/LobsterAI/pull/2277) fixed stale transport configs in MCP server settings.
- **Cowork Final Sync:** PR [#2281](https://github.com/netease-youdao/LobsterAI/pull/2281) prevented stale final history syncs from restarting context maintenance after chat errors.

### 4. Community Hot Topics
While Issues and PRs from today lacked heavy comment threads, the **most active historical tickets closed today** reveal repeated pain points:

- **Issue #1411** ([Bug: Profile page time filter unclickable](https://github.com/netease-youdao/LobsterAI/issues/1411)): The "Usage Overview" 30-day filter on the profile page was unresponsive. This was a UI bug affecting data analysis for all users.
- **Issue #1414** ([Bug: Total sessions always shows 0](https://github.com/netease-youdao/LobsterAI/issues/1414)): A core metric on the profile dashboard was broken, causing user confusion.
- **Issue #1409** ([Scheduled task across days generates no history](https://github.com/netease-youdao/LobsterAI/issues/1409)): A cron-related regression where tasks spanning midnight failed to log records.

**Underlying need:** Users are demanding reliable, accurate dashboard analytics and robust scheduled task execution. The closure of these bugs indicates the team is listening to core performance and UX gripes.

### 5. Bugs & Stability
All bugs closed today were of **medium to high severity** and appear to have been fixed in prior development work, not introduced recently:

- **High: Scheduled task history gaps** (Issue [#1409](https://github.com/netease-youdao/LobsterAI/issues/1409)) — Cross-day cron jobs silently failed to generate history.
- **High: Profile page “total sessions” = 0** (Issue [#1414](https://github.com/netease-youdao/LobsterAI/issues/1414)) — A broken counter misled users.
- **Medium: UI layout corruption on English locale** (Issue [#1416](https://github.com/netease-youdao/LobsterAI/issues/1416)) — Text overlap on the profile page when switching to English.
- **Medium: Unresponsive time filter** (Issue [#1411](https://github.com/netease-youdao/LobsterAI/issues/1411)) — A clickable-looking element that didn't work.
- **Low: UI overflow with many skills** (Issue [#1413](https://github.com/netease-youdao/LobsterAI/issues/1413)) — Layout issue in the prompt input area.

**Fix PRs:** All five issues were closed as stale, meaning the fixes appear to have been merged in the wave of PRs listed above (e.g., PR [#2284](https://github.com/netease-youdao/LobsterAI/pull/2284) likely addresses the dashboard/cron bugs).

### 6. Feature Requests & Roadmap Signals
No new feature requests were opened today. However, the following merged work signals the roadmap:

- **Heartbeat Cost Control (PR [#2280](https://github.com/netease-youdao/LobsterAI/pull/2280) & [#2278](https://github.com/netease-youdao/LobsterAI/pull/2278)):** The team is actively developing "managed heartbeat policy" to prevent runaway model costs, a clear response to user complaints about unnecessary API calls.
- **Settings Redesign (PR [#2284](https://github.com/netease-youdao/LobsterAI/pull/2284)):** A full refactor of the model provider settings UI suggests the team is working on usability.
- **MCP Transport Sanitization (PR [#2277](https://github.com/netease-youdao/LobsterAI/pull/2277)):** Clearing stale MCP configs prevents configuration drift, a stability-focused improvement.

**Prediction:** The next release is likely to include a **Heartbeat toggle** in Settings, a **redesigned Model Provider page**, and fixes for the profile dashboard.

### 7. User Feedback Summary
User pain points, inferred from closed bugs:

- **Dashboard unreliability:** Users reported that core usage statistics (sessions, filters) were broken, reducing trust in the app’s data.
- **Scheduled task flakiness:** A user (devilszy) demonstrated with screenshots that cross-day cron jobs fail silently — a significant issue for users who rely on automation.
- **UI regression with locale:** International users face layout breaks when switching to English, hurting adoption outside China.
- **Plugin sync confusion:** The bundled xAI plugin was mistakenly synced to user plugin lists, which was resolved in PR [#2279](https://github.com/netease-youdao/LobsterAI/pull/2279).

**Overall sentiment:** The closure of these long-standing bugs (+ the dependency bump in open PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)) suggests that user satisfaction should improve in the next patch.

### 8. Backlog Watch
- **PR #1277 (Open): [chore(deps-dev): bump the electron group](https://github.com/netease-youdao/LobsterAI/pull/1277)** — This dependency update bumps Electron from 40.2.1 to 43.0.0. Despite being opened in early April, it remains unmerged. A major version jump of this size could introduce breaking changes, which may explain the caution. This is the only open PR and deserves priority review, as it blocks all downstream Electron updates.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for 2026-07-07.

---

### Moltis Project Digest – 2026-07-07

**1. Today's Overview**
Project activity is low but steady, with no new issues or releases in the last 24 hours. The team has been largely focused on merging backlogged pull requests, with three PRs closed (merged) and two remaining open. Key merged work includes a hotfix for Telegram streaming, an OAuth fix for MCP integrations, and a dependency bump for WhatsApp connectivity. The open PRs involve a security-sensitive Docker volume fix and a routine Rust dependency bump, both awaiting maintainer review.

**2. Releases**
No new releases were created in the last 24 hours. The last significant release period saw work on MCP OAuth fixes and WhatsApp LID addressing, but no stable version has been cut since then.

**3. Project Progress**
Three pull requests were merged/closed in the last 24 hours:
- **PR #1113 (Merged) – Hotfix: Telegram stream final replies without completion notify:** This fixes a regression where final streaming replies were not handled correctly when completion notifications were disabled. ([PR #1113](https://github.com/moltis-org/moltis/pull/1113))
- **PR #1122 (Closed) – Fix: Drop VOLUME declarations that shadow the home bind mount:** Removes Dockerfile `VOLUME` declarations that caused bind mounts of the home directory to behave incorrectly in containerized deployments. ([PR #1122](https://github.com/moltis-org/moltis/pull/1122))
- **PR #1144 (Merged) – Feat: Bump whatsapp-rust 0.5 → 0.6 with LID-native addressing:** Upgrades the WhatsApp integration to native LID addressing, fixing DM routing issues after WhatsApp’s backend migration. ([PR #1144](https://github.com/moltis-org/moltis/pull/1144))

**4. Community Hot Topics**
Activity remains concentrated on two open pull requests:
- **PR #1120 (Open) – Fix MCP OAuth `resource_metadata` URL via `WWW-Authenticate`:** Addresses a critical integration failure with Notion and Linear MCP servers. The issue has been open since mid-June and is the most structurally significant open change. ([PR #1120](https://github.com/moltis-org/moltis/pull/1120))
- **PR #1087 (Open) – Chore: Bump `tar` crate from 0.4.45 to 0.4.46:** A dependency update triggered by Dependabot, open since late May. Low discussion activity, but it indicates the project is keeping core dependencies refreshed. ([PR #1087](https://github.com/moltis-org/moltis/pull/1087))

**5. Bugs & Stability**
No new bugs were reported in the last 24 hours. The team has been actively closing stability-related PRs:
- **Critical (resolved):** The Docker VOLUME shadowing bug (PR #1122) was a pathological deployment issue that could break home-directory bind mounts. Now merged.
- **High (resolved):** The Telegram streaming regression (PR #1113) affected users with specific notification settings. Now merged.
- **Medium (open):** MCP OAuth failure (PR #1120) blocks integration with popular tools (Notion, Linear). A fix exists but has not yet been reviewed.

**6. Feature Requests & Roadmap Signals**
No new feature requests were filed in the last 24 hours. The most significant roadmap signal is the completed WhatsApp LID migration (PR #1144), which suggests the project is actively maintaining compatibility with upstream platform changes. The MCP OAuth fix (PR #1120) points to continued investment in MCP server interoperability, likely a priority for the next release.

**7. User Feedback Summary**
No direct user feedback was posted in the last 24 hours. The pattern of PRs merged (Telegram streaming behavior, Docker deployment fix, WhatsApp routing) suggests users are encountering real-world issues in:
- Telegram UI consistency under custom notification settings.
- Docker-based deployments with custom bind mounts.
- WhatsApp DM routing failures after platform changes.

**8. Backlog Watch**
Two open PRs remain without maintainer action:
- **PR #1087 (Dependabot: `tar` 0.4.45 → 0.4.46)** – Open since May 29. Low priority but stale; should be reviewed and merged to avoid security or compat gaps. ([PR #1087](https://github.com/moltis-org/moltis/pull/1087))
- **PR #1120 (MCP OAuth fix for Notion/Linear)** – Open since June 13. This is a high-value fix for users of popular MCP servers. Requires code review and testing. ([PR #1120](https://github.com/moltis-org/moltis/pull/1120))

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-07

## Today's Overview

CoPaw is experiencing a period of intense development activity, with 18 issues and 46 pull requests updated in the last 24 hours, signaling a highly active maintenance and feature cycle. The project released v1.1.12.post3 to address a critical ACP compatibility break affecting 1.x users, while the 2.0 beta line continues to see substantial engineering effort. A significant volume of test infrastructure PRs (7+ PRs from a single contributor) indicates a systematic push to improve code quality and regression coverage. Community engagement remains high, with users reporting real-world pain points around session performance, memory system reliability, and sandbox security on Windows.

## Releases

**v1.1.12.post3** — Released 2026-07-06

- **Change:** Pinned ACP version to resolve a breaking change in ACP that caused historical 1.x versions of QwenPaw to malfunction
- **Compatibility Note:** 1.x users who experienced crashes after ACP updates should upgrade to this release
- No breaking changes or migration steps for 2.x users

## Project Progress

**Merged/Closed PRs (19 total):**

- **#5824** — Added hard timeout for hung message batches in channels, preventing indefinite blocking (@albert-zen)
- **#5822** — Fixed context threshold displaying incorrect provider model config; now matches active provider properly (@albert-zen)
- **#5815** — Refactored auto-memory search to remove `persist_to_context` config, keeping search results in live context and moving turn-level state to memory manager (@jinliyl)
- **#5805** — Added DevTools entry point for Tauri desktop (production debug mode), hidden from normal users (@zhaozhuang521)
- **#5819** — Release duty verification for v1.1.12.post3 passed all platforms (automated)
- **#5816** — Quick closure of ACP import error (addressed by v1.1.12.post3)

**Test Infrastructure (PRs #5807-#5813):** 7 PRs from @hanson-hex adding comprehensive unit tests: contract-guard tests for 12 API modules, hooks/stores tests, inbox module (64 cases), approvals module (40 cases), channels backend (176 cases), runtime/security/install regression tests (43 cases), and large session regression tests for #5479 (29 cases).

## Community Hot Topics

### Most Discussed Issues (by comment count)

1. **#5401** [9 comments] — Console crash on large tool-use history sessions (frontend `type: "data"` rendering issue)
   - Analysis: Users running complex multi-tool conversations hit a hard crash when sessions accumulate significant tool-use history. Backend converts blocks to `DataContent` type, but frontend doesn't handle it, creating a rendering dead zone.
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5401)

2. **#5479** [4 comments] — Large session files (>500KB) crash Web UI with "unexpected error" on render
   - Analysis: Sessions growing beyond ~500KB cause catastrophic frontend failure — not a slow-down but complete page crash requiring session deletion. Users expect progressive loading.
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5479)

3. **#5775** [3 comments, closed] — Auto-memory interval never triggers because middleware state is lost across per-request agent rebuilds
   - Analysis: A 2.0 beta regression where the memory manager loses its state on every request, rendering `auto_memory_interval` non-functional. Filed, discussed, and a fix PR (#5815) merged same cycle.
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5775)

**Underlying Needs:**
- Users want robust session management at scale (both UI rendering and memory persistence)
- Power users running long conversations with heavy tool usage feel underrepresented by current performance boundaries

## Bugs & Stability

### Critical Severity

1. **#5829** [Windows AppContainer sandbox ACE pollution causing Electron GPU crashes] — NEW today
   - QwenPaw sandbox `icacls /grant` calls add inheritable ACEs to system directories (C:\, C:\Users, %USERPROFILE%), which are then inherited by Chromium-based apps like Hermes Desktop, causing GPU process crashes
   - **Severity:** High — silent system-level side effect affecting other applications
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5829)

2. **#5401** [Console crash on large tool-use history sessions]
   - Active, no fix PR yet, 13 days open
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5401)

### High Severity

3. **#5479** [Large session files (>500KB) crash Web UI]
   - Active, test PR (#5810) added but the core fix is not yet merged
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5479)

4. **#5775** [Auto-memory interval never triggers] — **CLOSED** via PR #5815 refactor
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5775)

5. **#5717** [Runtime 2.0: malformed tool-call history causes endless repeated tool execution]
   - Active, truncated JSON arguments in `write_file` calls create infinite execution loops
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5717)

### Medium Severity

6. **#5789** [Context compression crashes when model output exceeds JSON Schema maxLength]
   - `jsonschema.validate()` fails on `next_steps` field exceeding 200 chars; no graceful fallback
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5789)

7. **#5710** [Context compression has no protected anchor points — critical messages truncated]
   - Agent loses channel identity (e.g., "which group chat am I in?") after compression
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5710)

8. **#5773** [Memory search breaks OpenCode Go provider (all requests fail)]
   - Active, affects DeepSeek models via OCG when `auto_memory_search_config.enabled = true`
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5773)

### Low Severity (reported today)

9. **#5759** [Plan mode repeatedly reads the same file 5x in single task chain]
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5759)

10. **#5774** [Google Gemini endpoint throws errors on 1.1.12.post2]
    - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5774)

## Feature Requests & Roadmap Signals

### User-Requested Features (active discussion)

1. **#5797** [Timer task notifications should have user-configurable on/off for popups]
   - Strong user sentiment: "developers shouldn't decide for users whether to show popup notifications"
   - Likelihood: High — straightforward UI toggle; community opinion split but clear demand for configurability
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5797)

2. **#5312** [Desktop app should minimize to system tray on close instead of quitting]
   - 2 comments, open 19 days — strong UX use case for background operation
   - Likelihood: Medium-High — low implementation complexity; many desktop apps follow this pattern
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5312)

3. **#5821** [Granular `rejects_media` capability: strip per-media-type instead of all-or-nothing]
   - Submitted yesterday — when one media type fails (e.g., video), other media types (image) shouldn't be stripped
   - Likelihood: Medium — niche but logical improvement for multimodal workflows
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5821)

4. **#5788** [Skills list pagination broken (only shows 20 items, scroll doesn't load more)]
   - IntersectionObserver sentinel not triggering due to CSS overflow restrictions
   - Likelihood: High — likely to be fixed soon as it blocks basic functionality
   - [Issue link](https://github.com/agentscope-ai/QwenPaw/issues/5788)

### Roadmap Signals

- **Memory system overhaul**: PR #5815 merged, PR #5820 adding token estimation for embedding — memory infrastructure is receiving focused attention
- **Desktop computer-use automation**: PR #5187 (Windows UIA + Tauri control mode) still open but active, suggesting long-term investment in agent-driven desktop automation
- **Test infrastructure ramp-up**: 7 PRs from @hanson-hex indicate a strategic push toward better regression coverage, suggesting upcoming stability releases

## User Feedback Summary

**Pain Points (dissatisfaction):**
- Session files >500KB causing complete UI crash (#5479) — users forced to delete sessions
- Large tool-use history rendering crashes (#5401) — prevents use of complex multi-tool workflows
- Auto-memory not actually persisting memory in 2.0 beta (#5775) — core functionality broken
- Timer notifications removed by developer fiat without user control (#5797) — strong emotional response ("因噎废食")
- Context compression losing channel identity in group chats (#5710) — users report agent making socially inappropriate replies

**Satisfaction Signals:**
- Active community engagement (18 issues, 46 PRs in 24h) suggests healthy, responsive development
- Multiple users filing detailed bug reports with root cause analysis indicates invested power-user base
- Feature requests reflect users wanting more control (toggle notifications, tray minimization) — they plan to use the product long-term

**Notable User Quote (paraphrased from #5797):** “QwenPaw should not 'throw out the baby with the bathwater' — just because some users complained about popups doesn't mean everyone hates them; give us a switch.”

## Backlog Watch

**Issues Needing Maintainer Attention:**

1. **#5401** [Console crash on large tool-use history] — **Open 14 days**, 9 comments, no fix PR yet. High-severity frontend bug blocking complex workflows. Should be prioritized.

2. **#5829** [Windows AppContainer ACE pollution] — **Filed today.** Zero maintainer response yet. Critical because it silently damages other applications (GPU crashes in Hermes Desktop, Electron apps). Requires urgent triage.

3. **#5710** [Context compression has no protected anchor points] — **Open 6 days**, 2 comments. Core functionality issue affecting multi-channel deployments. No PR assigned.

4. **#5717** [Runtime 2.0 malformed tool-call causes endless execution] — **Open 5 days**, 2 comments. Infinite loops are dangerous for production deployments. No fix PR yet.

5. **#5788** [Skills list pagination broken] — **Open 2 days**, 2 comments. Basic UI broken for users with >20 skills. Low severity but high frequency of impact.

**PRs Needing Review:**

- **#5654** [Fix DingTalk delivery failures] — Open 7 days, @wananing. Under review label but no merge activity. Affects enterprise users relying on DingTalk channel.

- **#5187** [Windows desktop GUI automation] — Open 23 days. Large feature PR (computer_use builtin tool). No visible maintainer review activity; may need assignment.

*All GitHub links are relative to `agentscope-ai/QwenPaw`*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-07

## 1. Today's Overview

High activity across the ZeroClaw project, with 50 pull requests updated in the last 24 hours and 9 open issues. The project shows sustained forward momentum, particularly around security hardening, CI reliability, and the major multi-user auth system (PR #8672). Four merges landed today, including long-standing fixes and a new Debian Docker variant. Security remains a central focus: two new CVEs are being addressed (RUSTSEC-2026-0204, plus 22 unresolved RustSec advisories tracked in Issue #8519). No new releases were cut today, but the volume of merged work suggests a v0.8.3 release may be approaching.

## 2. Releases

**None.** No new releases were published on 2026-07-07.

## 3. Project Progress

**Merged/Closed PRs (4 total):**

- **[#3149]** — `fix(tools): improve git_operations error messages` — Better error specificity for branch specification and invalid character detection. *(palomyates516-alt)*
- **[#3156]** — `feat(config): add api_path configuration for custom provider endpoints` — Enables override of default `/v1/chat/completions` path globally and per-provider profile. *(palomyates516-alt)*
- **[#3392]** — `feat(docker): add debian production image variant with shell support` — Closes #3359; provides a Debian-based production Docker variant. *(palomyates516-alt)*
- **[#8783]** — `fix(deps): bump crossbeam-epoch to 0.9.20 (RUSTSEC-2026-0204)` — Quick security fix to clear a new vulnerability. *(singlerider)*

**Work advancing toward master:** The massive multi-user auth PR [#8672] (auth providers, permission profiles, principal isolation) and the WASM out-of-process plugin host sidecar PR [#8661] both saw updates — neither is merged, but their continued activity signals heavy review and iteration.

## 4. Community Hot Topics

**Most commented/discussed this period:**

- **Issue [#8753]** — *(CI gate broken)* — 3 comments. `rust_quality_gate.sh` misses member-crate test targets because it lacks `--workspace`, allowing broken test code to land on master. A fix PR [#8776] has already been submitted. This is a **high-priority, high-risk** CI reliability issue.  
  [zeroclaw-labs/zeroclaw Issue #8753](https://github.com/zeroclaw-labs/zeroclaw/issues/8753)

- **Issue [#7521]** — *(Feature: file_read non-UTF-8 decoding)* — 3 comments. Users need `file_read` to decode cp1251/Latin-1 text via charset detection instead of losing data to `U+FFFD` replacement. Long-standing (since June 11) with no fix PR yet.  
  [zeroclaw-labs/zeroclaw Issue #7521](https://github.com/zeroclaw-labs/zeroclaw/issues/7521)

- **Issue [#7944]** — *(Voice satellite device)* — 2 comments. Continues discussion of a physical voice satellite (ESP32/smartphone/PWA) with approval buttons that talks to a voice host via the realtime contract. Part of a broader realtime voice push.  
  [zeroclaw-labs/zeroclaw Issue #7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944)

**Underlying need:** The community is pushing for **real-world reliability** — CI gates that actually catch broken code before it lands, non-UTF-8 file handling for global users, and physical voice interfaces that make ZeroClaw usable as a home assistant.

## 5. Bugs & Stability

**Active bugs (by severity):**

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **S1 (blocked)** | [#8675] — *Malformed tool-call arguments → provider 400* | OpenAI-wire providers re-serialize unvalidated `tool_calls[].function.arguments`; models emitting non-JSON cause provider 400s and empty replies. Risk: medium. | No fix PR yet |
| **High** | [#8753] — *CI gate misses member-crate tests* | `rust_quality_gate.sh` returns exit 0 even when lib-test targets fail. Broken test code can land on master. | Yes: [#8776] submitted |
| **High** | [#8519] — *22 RustSec advisories unaddressed* | `cargo audit` fails on master; `cargo deny` tolerates most but the two tools have drifted. In-progress. | Yes: [#8781] submitted (stale ignores) |
| **Medium** | [#8782] — *New RUSTSEC-2026-0204 (crossbeam-epoch)* | Invalid pointer dereference vulnerability. | Yes: [#8783] merged |
| **Medium** | [#8690] — *`/model --agent` missing authorization* | Drops sender identity; any sender can write to any agent's scope key. | Yes: [#8690] in review |

**Security alert:** Two separate vulnerability response tracks are active. The `crossbeam-epoch` fix has already landed (PR #8783). The broader audit-toml/deny-toml drift (#8519) is being cleaned up with PR #8781.

## 6. Feature Requests & Roadmap Signals

**High-demand features under active development:**

| Feature | Issue/PR | Status | Likely for v0.8.3? |
|---------|----------|--------|---------------------|
| **Multi-user auth & permissions** | [#8672] — XL PR | In review | ✅ High probability — large PR with high activity |
| **Realtime voice-host channel** | [#7943] — P2, accepted | Open, no fix PR yet | ⚠️ Possible — tracked but no implementation seen |
| **Voice satellite device integration** | [#7944] — P3, accepted | Open, planning | ❌ Unlikely (P3, speculative) |
| **Schema V4 config migration** | [#8754] — M size PR | In review | ✅ Likely — breaking config changes land early to allow migration |
| **WASM plugins out-of-process** | [#8661] — L size prototype | Proof-of-concept | ⚠️ Unlikely to ship; prototype status |
| **Realtime speech-to-speech (Gemini Live)** | [#8780] — New feature | Brand new (July 6) | ❌ Too new |
| **TodoWrite tracker for ZeroCode** | [#8639] — XL PR | In review | ✅ Likely — large effort with dedicated PR |

**Roadmap prediction:** The **Schema V4 config cut** (PR #8754) landing this week, combined with the **multi-user auth stack** (PR #8672) and **ZeroCode TodoWrite tracker** (PR #8639), strongly suggests v0.8.3 will be a **foundational release** focused on config modernization, security/posture, and developer UX improvements rather than flashy new features.

## 7. User Feedback Summary

**Pain points expressed directly in issues:**

- **"I can't read Cyrillic text files"** — Issue #7521: A real-world user (metalmon) needs `file_read` to handle Windows-1251 encoded files. They explicitly state the current behavior "cannot return correct text." This suggests Russian/Eastern European users are hitting encoding barriers.
  [Issue #7521](https://github.com/zeroclaw-labs/zeroclaw/issues/7521)

- **"AI stops responding because of bad tool args"** — Issue #8675: A workflow-blocking (S1) bug where malformed tool-call arguments cause the provider to return empty replies. Reported by metalmon. This is an active production blocker.
  [Issue #8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)

- **"Security CI fails, can't merge"** — Issue #8519, Issue #8782: Developers (singlerider, wangmiao0668000666) are frustrated by the audit-toml/deny-toml drift and new CVEs blocking PRs and master.

**Positive signals:** The rapid response to the RUSTSEC-2026-0204 vulnerability — filed and fixed within the same day — indicates strong security operations discipline.

## 8. Backlog Watch

**Long-standing items needing maintainer attention:**

| Issue | Created | Days Open | Issue | Notes |
|-------|---------|-----------|-------|-------|
| **#7521** — file_read non-UTF-8 decoding | 2026-06-11 | **26 days** | Feature request | P2, accepted, no assignee. Misses v0.8.3 window if not picked up soon. |
| **#7943** — Realtime voice-host channel | 2026-06-18 | **19 days** | Feature (P2) | Accepted, no implementation PR. High interest (#7944 spawned from it). |
| **#7944** — Voice satellite device | 2026-06-18 | **19 days** | Feature (P3) | Speculative hardware feature; may remain open for a while. |
| **#8073** — v0.8.3 tracker | 2026-06-20 | **17 days** | Tracker | Zero comments. Trackers with no discussion may indicate the release scope is unclear or uncontroversial. |
| **#8519** — cargo-audit/deny-toml drift | 2026-06-30 | **7 days** | Security (P1) | In-progress; PR #8781 addresses part of it. Requires maintainer sign-off on the full reconciliation. |

**Alerts:**
- **Issue #7521** is the oldest unanswered feature request and directly impacts non-English users. With 26 days of inactivity and no assignee, it risks becoming stale.
- **Issue #7943/#7944** — the voice satellite ecosystem — has two accepted issues with no implementation work visible. If the maintainers intend to ship voice features in v0.8.x, some PR activity should appear soon.

</details>