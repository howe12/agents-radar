# OpenClaw Ecosystem Digest 2026-07-08

> Issues: 241 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-08 06:22 UTC

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

# OpenClaw Project Digest — 2026-07-08

## 1. Today's Overview

OpenClaw shows sustained, high-volume activity with 241 issues and 500 PRs touched in the last 24 hours, but the close-to-open ratio is concerning: only 6 issues (~2.5%) and 130 PRs (~26%) were closed/merged, meaning 235 issues and 370 PRs remain active. The "clawsweeper:no-new-fix-pr" label appears on a striking proportion of top issues, indicating many high-priority bugs lack proposed fixes. No releases shipped today, despite the heavy bug-fix PR traffic, suggesting a release-cut is imminent or the project is in a stabilization window. The dominant themes are multi-agent/gateway reliability regressions, channel-specific message-loss bugs (Telegram, Feishu, Discord), and authentication/billing edge cases.

## 2. Releases

**No new releases in the last 24 hours.** The `Latest Releases` list is empty despite significant merge activity, indicating that integration testing is likely gating a cut.

## 3. Project Progress

Of the 130 PRs merged/closed today, several directly address issues on the community watchlist:

- **[#91663](https://github.com/openclaw/openclaw/pull/91663)** — Stale `.tmp` archive cleanup in `backup create`, preventing disk fill from interrupted runs.
- **[#102059](https://github.com/openclaw/openclaw/pull/102059)** — Localizes internal declarations in the voice-call plugin (refactor only).
- **[#75662](https://github.com/openclaw/openclaw/pull/75662)** — Pauses yielded main-session runs, extending an earlier subagent fix to top-level sessions.
- **[#102007](https://github.com/openclaw/openclaw/pull/102007)** — Keeps extension `exec` truncation UTF-16 safe, fixing a correctness issue in long-output handling.
- **[#102041](https://github.com/openclaw/openclaw/pull/102041)** — Sets `CLIENT` span kind on model/tool execution OTEL spans, improving observability in distributed tracing tools.
- **[#102054](https://github.com/openclaw/openclaw/pull/102054)** — Persists typed Codex `imageGeneration` items before channel delivery, preventing image loss in Codex flows.
- **[#102056](https://github.com/openclaw/openclaw/pull/102056)** — Prevents false "truncated" flag on exact-size `web_fetch` responses.
- **[#100845](https://github.com/openclaw/openclaw/pull/100845)** — Fixes OTel telemetry export for one-shot `openclaw agent --local` runs.

The [PR automerge bot (`clawsweeper`)](https://github.com/openclaw/openclaw/pull/101748) also shipped documentation explaining its merge workflow, signaling maturation of the automation loop.

## 4. Community Hot Topics

By comment count on issues updated today:

1. **[#85333 — `doctor --fix` 4-5× regression (15 comments)](https://github.com/openclaw/openclaw/issues/85333)** — `openclaw doctor --fix` regressed from 55s to 229s+ between 2026.5.19 and 2026.5.20 due to session-snapshot path traversal. **Need:** a perf-regression test gate in the release process.
2. **[#43367 — Multi-agent orchestration instability (13 comments)](https://github.com/openclaw/openclaw/issues/43367)** — Concurrent `agents add` overwrites config, session-lock failures, detached child work. **Need:** deterministic concurrency primitives for the agent registry.
3. **[#39604 — `tools.web.fetch.allowPrivateNetwork` (13 comments, 👍11)](https://github.com/openclaw/openclaw/issues/39604)** — Strong community demand (highest 👍) for opt-in private-network access in `web_fetch`. **Need:** configuration schema + clear security guidance.
4. **[#42475 — Per-agent cost budgets at gateway (12 comments)](https://github.com/openclaw/openclaw/issues/42475)** — Operator concern about runaway spend; existing per-session tracking isn't enough.
5. **[#41744 — Feishu image media loss (12 comments)](https://github.com/openclaw/openclaw/issues/41744)** — `read` tool image results dropped before outbound Feishu delivery.
6. **[#40001 — `write` tool lacks append mode (11 comments)](https://github.com/openclaw/openclaw/issues/40001)** — Silent data loss in cron-shared memory files. A `mode: "append"` flag would unblock the common pattern.
7. **[#38327 — Vertex/Gemini "Cannot convert undefined" (10 comments)](https://github.com/openclaw/openclaw/issues/38327)** — Crash on 2026.3.2 with `google-vertex/gemini-3.1-pro-preview`.
8. **[#38439 — Webchat avatar 404 (10 comments)](https://github.com/openclaw/openclaw/issues/38439)** — `/avatar/{agentId}` endpoint regression; UX-impacting but not crashing.
9. **[#39476 — A2A `sessions_send` reply loops (10 comments)](https://github.com/openclaw/openclaw/issues/39476)** — Duplicate messages when target agent replies via `sessions_send`.

**Underlying needs:** operators consistently ask for (a) stronger regression testing in the release pipeline, (b) first-class multi-agent concurrency primitives, (c) richer channel-specific edge-case handling (Telegram/Feishu/Discord), and (d) cost/governance controls at the gateway level.

## 5. Bugs & Stability

### P1 — Critical / Crash-loop / Data-loss

| Issue | Impact | Fix PR? |
|---|---|---|
| [#85333 `doctor --fix` 4-5× slower](https://github.com/openclaw/openclaw/issues/85333) | session-state, crash-loop | ❌ none |
| [#43367 Multi-agent orchestration unstable](https://github.com/openclaw/openclaw/issues/43367) | session-state, message-loss, auth-provider | ❌ none |
| [#41744 Feishu image media loss](https://github.com/openclaw/openclaw/issues/41744) | message-loss | ❌ none |
| [#40001 `write` tool no append mode](https://github.com/openclaw/openclaw/issues/40001) | session-state, data-loss | ❌ none |
| [#38327 Vertex/Gemini crash](https://github.com/openclaw/openclaw/issues/38327) | auth-provider, crash-loop | ❌ none |
| [#41165 Telegram DMs polluting main session](https://github.com/openclaw/openclaw/issues/41165) | session-state, message-loss | ❌ none |
| [#82662 Isolated cron `agentTurn` timeout](https://github.com/openclaw/openclaw/issues/82662) | auth-provider, crash-loop | ❌ none |
| [#94251 Ollama remote streaming not consumed](https://github.com/openclaw/openclaw/issues/94251) | session-state, message-loss, auth-provider | ❌ none |
| [#92057 Gateway slow under multi-agent load](https://github.com/openclaw/openclaw/issues/92057) | session-state, message-loss, crash-loop | ❌ none |
| [#40611 Heartbeat drift blocks Telegram](https://github.com/openclaw/openclaw/issues/40611) | session-state, message-loss | ✅ linked PR open |
| [#39807 Billing 402 infinite retry](https://github.com/openclaw/openclaw/issues/39807) | auth-provider | ✅ linked PR open |
| [#44134 Google Antigravity ban from schema reload](https://github.com/openclaw/openclaw/issues/44134) | auth-provider, crash-loop | ❌ none |
| [#43374 LLM API simultaneous timeouts](https://github.com/openclaw/openclaw/issues/43374) | message-loss, auth-provider | ❌ none |
| [#101715 Model switch mid-turn kills run](https://github.com/openclaw/openclaw/pull/101715) | auth-provider, session-state | ✅ PR open |

### P1 Fixes In-Flight

- [#89040 embedded_run event-loop stall fix](https://github.com/openclaw/openclaw/pull/89040) addresses the 14-22s event-loop blocks causing message loss.
- [#101715 model fallback retry](https://github.com/openclaw/openclaw/pull/101715) restores turn continuation on mid-turn `/model` switches.
- [#102035 package-manager exec approval binding](https://github.com/openclaw/openclaw/pull/102035) (security-boundary fix).
- [#102033 harden web fetch HTML conversion](https://github.com/openclaw/openclaw/pull/102033) — adversarial-malmarkup defense.
- [#102000 cron startup catchup skip](https://github.com/openclaw/openclaw/pull/102000) — prevents duplicate notification firings.
- [#101953 image dimension resize](https://github.com/openclaw/openclaw/pull/101953) — fixes oversized phone-camera image uploads.

### P2 Notable

- [#43996 Sandbox container exits with no-new-privileges](https://github.com/openclaw/openclaw/issues/43996) — security regression.
- [#45718 Session bloat from skillsSnapshot/systemPromptReport](https://github.com/openclaw/openclaw/issues/45718) — unbounded growth leading to context overflow.
- [#46252 Cost dashboard omits `.jsonl.reset.*` archives](https://github.com/openclaw/openclaw/issues/46252) — silently undercounting spend.
- [#45765 Nested `~/.openclaw/.openclaw` from `OPENCLAW_HOME`](https://github.com/openclaw/openclaw/issues/45765) — onboarding regression.
- [#98402 Channel ingress queue corrupted JSON crash](https://github.com/openclaw/openclaw/pull/98402) — single bad row crashes whole queue.
- [#98425 Google Chat media downloads unbounded](https://github.com/openclaw/openclaw/pull/98425) — security DoS vector.
- [#98480 `tools-manager` GitHub releases unbounded read](https://github.com/openclaw/openclaw/pull/98480) — memory exhaustion risk.

## 6. Feature Requests & Roadmap Signals

Strong-signal features likely to land in the next minor release (≥5 👍 or repeated asks):

- **[#39604 `tools.web.fetch.allowPrivateNetwork`](https://github.com/openclaw/openclaw/issues/39604)** (👍11) — Clear configuration gap, low implementation cost.
- **[#42840 MathJax/LaTeX in Control UI](https://github.com/openclaw/openclaw/issues/42840)** (👍9) — Trivial client-side add, high visibility.
- **[#45758 YAML config support](https://github.com/openclaw/openclaw/issues/45758)** — Onboarding/ops readability.
- **[#42475 Per-agent cost budgets at gateway](https://github.com/openclaw/openclaw/issues/42475)** — Operator demand; `session-cost-usage.ts` already exists.
- **[#43454 Gateway lifecycle hooks](https://github.com/openclaw/openclaw/issues/43454)** — Workspace hook system extension.
- **[#40786 `.gitignore`-style backup excludes](https://github.com/openclaw/openclaw/issues/40786)** — Backup CLI hygiene.
- **[#44395 Heading-aware memory chunking + entity extraction](https://github.com/openclaw/openclaw/issues/44395)** — Memory quality.
- **[#42026 Distributed Agent Runtime RFC](https://github.com/openclaw/openclaw/issues/42026)** — Architectural split of gateway into control plane + runtime (longer-term).
- **[#44431 Browser tool improvements (7 items)](https://github.com/openclaw/openclaw/issues/44431)** — CSS selectors, timeout handling, persistence.
- **[#42877 Bounded memory tool with hard character limits](https://github.com/openclaw/openclaw/issues/42877)** — Pairs with [#45718](https://github.com/openclaw/openclaw/issues/45718) (already reported bloat).
- **[#41366 Durable NL rule learning + multi-mention reply](https://github.com/openclaw/openclaw/issues/41366)** — Group-chat rule conflicts.
- **[#87325 Azure Foundry GPT Realtime Talk](https://github.com/openclaw/openclaw/issues/87325)** — Enterprise voice parity.
- **[#42276 Reasoning stream UI](https://github.com/openclaw/openclaw/issues/42276)** — UX parity with OpenAI/Grok.
- **[#45564 `/new` and `/reset` confirmation step](https://github.com/openclaw/openclaw/issues/45564)** — Prevents accidental wipes (ties into [#46252](https://github.com/openclaw/openclaw/issues/46252) data integrity).

**Most-likely-next-release items:** the private-network flag, MathJax, YAML config, append-mode write, and the gateway cost-budget prototype — all have clearly-scoped changes and visible user demand.

## 7. User Feedback Summary

**Pain points (recurring across reports):**

- **Multi-agent instability** ([#43367](https://github.com/openclaw/openclaw/issues/43367), [#92057](https://github.com/openclaw/openclaw/issues/92057), [#43374](https://github.com/openclaw/openclaw/issues/43374)) — concurrent agents time out, drop messages, and overwrite each other. Users describe the experience as "unreliable in practice."
- **Channel fragility** — Telegram ([#41165](https://github.com/openclaw/openclaw/issues/41165), [#40611](https://github.com/openclaw/openclaw/issues/40611), [#40440](https://github.com/openclaw/openclaw/issues/40440)), Feishu ([#41744](https://github.com/openclaw/openclaw/issues/41744), [#42820](https://github.com/openclaw/openclaw/issues/42820), [#41609](https://github.com/openclaw/openclaw/issues/41609)), Discord ([#39847](https://github.com/openclaw/openclaw/issues/39847)) all show repeating media/thread/metadata bugs. Users report visible leakage of internal context into outbound chat.
- **Cost & billing pain** — [#39807](https://github.com/openclaw/openclaw/issues/39807) (5,206+ failed runs in 6 hours) and [#46252](https://github.com/openclaw/openclaw/issues/46252) (dashboard undercount) both directly affect trust in the platform.
- **Silent misconfiguration** ([#39811](https://github.com/openclaw/openclaw/issues/39811)) — unvalidated model names cause downstream failures; users want early validation.
- **Regression fatigue** — long-time users (e.g., [the field report in #41372](https://github.com/openclaw/openclaw/issues/41372)) explicitly call out that previously-working features break across minor releases.

**Positive signals:**

- [#38439 avatar endpoint](https://github.com/openclaw/openclaw/issues/38439) and [#42840 MathJax](https://github.com/openclaw/openclaw/issues/42840) are well-scoped UX asks, indicating users want polish as well as new features.
- [#46058 Android fork discussion](https://github.com/openclaw/openclaw/issues/46058) suggests the project has independent maintainers willing to engage upstream.
- [#41372 field report](https://github.com/openclaw/openclaw/issues/41372) and [#44431 browser field test](https://github.com/openclaw/openclaw/issues/44431) show power users investing time in structured bug reports.

**Satisfaction:** the existence of multi-version regression bugs and stale, unfixed P1s (see Section 8) suggests declining satisfaction among production users.

## 8. Backlog Watch

The following high-severity issues have been open for **weeks-to-months without a linked fix PR**, despite `[stale]` or high-priority labels:

- **[#41744 Feishu image media loss (2026-03-10, 12 comments)](https://github.com/openclaw/openclaw/issues/41744)** — `[stale]` P1, message-loss impact, no fix PR.
- **[#45765 Nested `~/.openclaw/.openclaw` (2026-03-14)](https://github.com/openclaw/openclaw/issues/45765)** — `[stale]` P2 regression, no fix PR.
- **[#46252 Cost dashboard misses archive files (2026-03-14)](https://github.com/openclaw/openclaw/issues/46252)** — `[stale]` P2, no fix PR.
- **[#94251 Ollama streaming not consumed (2026-06-17)](https://github.com/openclaw/openclaw/issues/94251)** — `[stale]` P1, no fix PR.
- **[

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: AI Agent & Personal Assistant Open-Source Ecosystem
**Report date: 2026-07-08**

---

## 1. Ecosystem Overview

The personal AI assistant and agent ecosystem is bifurcating into two distinct operating modes: **high-velocity hardening** (OpenClaw, Hermes Agent, IronClaw, ZeroClaw, CoPaw) where projects are absorbing hundreds of PRs per cycle and shipping regular releases, and **security-incident response** (TinyClaw, partially LobsterAI, NanoBot) where the same trust-boundary pattern — unauthenticated loopback control planes — is being disclosed across multiple codebases by what appears to be a coordinated research effort (single reporter `YLChen-007` filed 9 advisories against TinyClaw and 3 against LobsterAI in the same 24-hour window). A third tier (NanoClaw, PicoClaw) is mid-iteration with concentrated refactors and channel work. Three projects (NullClaw, Moltis, ZeptoClaw) showed no activity at all, indicating either paused maintenance or repo dormancy. Across the active projects, the dominant concerns are **multi-agent concurrency correctness**, **channel-plugin fragility** (Telegram/Feishu/Discord/WhatsApp/QQ/Matrix), and **local-trust boundary enforcement**.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Health Score | Cycle Phase |
|---|---|---|---|---|---|
| **OpenClaw** | 241 (6 closed) | 500 (130 merged) | None | **B−** | Heavy triage, low close ratio, no cut |
| **Hermes Agent** | 13 (0 closed) | 50 (15 merged) | v0.18.1 + v0.18.2 | **A−** | Stabilization post-major-release |
| **IronClaw** | 6 (1 closed) | 50 (12 closed) | None (PR open) | **B+** | Breaking-version prep (0.24→0.29) |
| **ZeroClaw** | 10 (2 closed) | 50 (3 closed) | None | **B+** | Land-and-rebase on stacked security |
| **CoPaw (QwenPaw)** | 17 | 36 (16 merged) | v2.0.0-beta.3 | **A** | Healthy beta hardening |
| **NanoBot** | 14 (8 closed) | 32 (14 merged) | None | **B+** | Triage, security response |
| **NanoClaw** | 1 (new security) | 21 (8 merged) | None | **B+** | Docs sweep + security bundle |
| **LobsterAI** | 6 | 17 (13 merged) | 2026.7.7 | **B** | Active, security disclosures open |
| **PicoClaw** | 7 | 5 (2 closed) | None | **B−** | Slow iteration, accumulating bugs |
| **TinyClaw** | 9 (all security) | 0 | None | **D** | Critical incident, no maintainer response |
| **NullClaw** | 0 | 0 | None | **?** | No activity |
| **Moltis** | 0 | 0 | None | **?** | No activity |
| **ZeptoClaw** | 0 | 0 | None | **?** | No activity |

**Key observation:** the top four projects by combined issue+PR throughput (OpenClaw, Hermes Agent, IronClaw, ZeroClaw) each touched ~50 PRs in the same window, suggesting a community-wide effort ceiling around ~50 merged PRs/day even for the most active projects, with OpenClaw as the outlier.

---

## 3. OpenClaw's Position

**Advantages vs peers:**
- **Highest absolute throughput:** 500 PRs touched, 130 merged — 2.5–8× the merge volume of any peer in the same window.
- **Broadest channel coverage:** visible support for Telegram, Feishu, Discord, WhatsApp, Matrix, Slack, plus a `voice-call` plugin, OTEL observability stack, and WebUI.
- **Most explicit automation layer:** the `clawsweeper` automerge bot + docs signals a mature release-engineering loop that peers lack.
- **Longest P1 backlog visibility:** the digest surfaces a `[stale]`-flagged back catalogue going back to March, which is actually a transparency advantage — peers don't surface their debt this clearly.

**Technical approach differences:**
- OpenClaw uses **session-snapshot path traversal** for `doctor --fix` (the source of its worst regression) — a design choice that no peer surfaces, suggesting OpenClaw is more aggressive in cached-state optimization.
- OpenClaw's **subagent session-pause** (#75662) and **OTEL span-kind** instrumentation (#102041) indicate deeper distributed-tracing ambitions than Hermes Agent's desktop-i18n focus or ZeroClaw's MCP-centralization focus.
- OpenClaw's **gateway cost-budget** thread (#42475) sits alongside existing `session-cost-usage.ts`, meaning it has the data plumbing already — CoPaw/ZeroClaw don't surface equivalent cost telemetry.

**Community size comparison:**
- OpenClaw's 241 active issues dwarf peers (next highest is CoPaw at 17, Hermes Agent at 13).
- Comment-count leaders in OpenClaw (#85333 at 15, #43367 at 13) are roughly 3–5× higher than Hermes Agent's #16185 (4 comments) or NanoBot's #2463 (13 comments).
- The "power-user field report" pattern (e.g., #41372, #44431) is unique to OpenClaw — peers surface bug reports but not the multi-paragraph deployment narratives.

**Weaknesses OpenClaw shares with peers but exposes more visibly:**
- Multi-agent concurrency instability (#43367, #92057, #43374) — the same class of bug appears in NanoBot's MCP stack and Hermes Agent's multiplexing path.
- Channel fragility across Telegram/Feishu/Discord — LobsterAI, Hermes Agent, NanoClaw all show the same pattern.
- Cost/billing trust erosion (#39807, #46252) — unique to OpenClaw's public framing.

---

## 4. Shared Technical Focus Areas

### 4.1 Loopback/Local Control-Plane Authentication
The single highest-priority cross-project theme. **TinyClaw (9 CVEs), LobsterAI (3 CVEs), NanoBot (3 advisories closed), NanoClaw (1 new issue #2970), ZeroClaw (multi-user auth PR #8672)** all converge on the same architectural gap: localhost ≠ trusted. The cluster is so concentrated it strongly suggests a coordinated disclosure campaign by `YLChen-007` against multiple Chinese-origin AI assistant projects.

### 4.2 MCP (Model Context Protocol) Stability
MCP reconnect/idle-timeout/lifecycle bugs are surfacing in **NanoBot (4+ PRs: #4842, #4843, #4764, #4506), ZeroClaw (#8496, #6699)**, and the OpenClaw/WebUI ecosystem. The pattern: `AsyncExitStack` lifecycle during reconnect is brittle, and policy centralization (deferred loading, filter enforcement) is fragmented across implementations.

### 4.3 Multi-Agent Concurrency Primitives
- **OpenClaw:** concurrent `agents add` overwrites config (#43367); session-lock failures.
- **Hermes Agent:** multiplexing path leaks secrets (`UnscopedSecretError` #60726), Feishu websocket misclassification (#57896).
- **NanoClaw:** approval-claim race (#2974 — fix PR open with atomic compare-and-set delete).
- **IronClaw:** subagent thread-harness durability design (#5748/#5749 — CAS-guarded delete).

All four converge on the same insight: **first-class concurrency primitives (locks, claims, CAS, scoped secrets) need to become part of the agent runtime, not bolt-ons.**

### 4.4 Channel-Plugin Correctness
Telegram/Feishu/Discord/WhatsApp/QQ/Matrix bugs dominate the bug tables across **OpenClaw, NanoBot, Hermes Agent, LobsterAI, CoPaw, NanoClaw**. Recurring failures: media loss, forwarded-message wrapping, group allow-list regression, HTML/markdown format parsing, reconnect storms. No project has solved this; every project has a backlog.

### 4.5 Cost / Billing Telemetry
- **OpenClaw:** #42475 per-agent cost budgets at gateway; #46252 dashboard undercount; #39807 billing 402 infinite retry.
- **LobsterAI:** #2293 cross-agent USER.md syncing (adjacent: cost of mis-delegation).
- **CoPaw:** rate-limit hardening in beta (#5738).
- **Hermes Agent:** tier-1 secret strip (#60680).

The trend: **cost telemetry is moving from session-level to per-agent and per-sender granularity.**

### 4.6 Local-First WebUI as Primary Surface
NanoBot's three simultaneous UX bugs (landing-race, narrow-column, file-edit diff) and CoPaw's console #5401/#5479 frontend crashes confirm what NanoClaw's docs sweep implies: WebUI is no longer optional, it's a primary delivery surface requiring its own regression discipline.

---

## 5. Differentiation Analysis

| Axis | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | CoPaw | NanoBot | LobsterAI | TinyClaw |
|---|---|---|---|---|---|---|---|---|
| **Primary surface** | CLI + multi-channel gateway | Desktop + TUI | Rust CLI/WebUI | CLI + WebUI | Tauri Desktop + Console | Multi-channel CLI | Electron app | CLI/API |
| **Distribution model** | Open-source core, hosted? | Open-source core, Docker/PyPI | Open-source, versioned crates | Open-source, breaking releases | Open-source beta | Open-source, Python | Open-source, Chinese-market | Open-source, security-disclosed |
| **Differentiating capability** | OTEL, multi-agent registry, automation bot | Desktop i18n (15 locales), plugin SDK | CAS-guarded FS, WASM tool install | SOP visual authoring, OpenAI Bridge | Zalo/Vietnam channel, 43-test regression suite | MCP + WebUI + camera-capture | xAI/Grok OAuth, subagent collaboration | N/A (under disclosure) |
| **Target user** | Operators of multi-agent gateways | Desktop power users, multilingual | Rust + WASM developers | Multi-tenant SaaS operators | Chinese + SEA market | Local-first tinkerers | Chinese-market end users | N/A |
| **Architecture maturity** | High (but regression-prone) | High (stabilizing post-v0.18) | Medium-high (refactor pass active) | Medium (v0.9 breaking prep) | Medium (beta) | Medium (MCP refactor needed) | Medium | Low (no auth layer) |
| **Release cadence** | Pre-cut, no recent tag | 2 patches in 24h | Version jump queued (0.24→0.29) | Tracker-only, no recent cut | Beta every ~24h | None, regressions unresolved | Weekly-ish | Frozen |

**Three architectural splits are emerging:**

1. **Gateway-style multi-channel orchestrators** (OpenClaw, NanoBot, NanoClaw, Hermes Agent) — emphasize plugin channels, session state, and now multi-agent primitives.
2. **Desktop/Console-first** (Hermes Agent, CoPaw, IronClaw WebUI) — focus on UX polish, i18n, native packaging.
3. **CLI/runtime + integrations** (ZeroClaw, IronClaw, PicoClaw) — emphasize MCP, WASM, tool installation, and breaking auth refactors.

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration, pre-release or major-cycle:**
- **CoPaw (QwenPaw):** 36 PRs + beta.3 release + version-bump PR for beta.4 in the same day. Strong contributor onboarding (first-time-contributor PR #5675 landed). Healthiest velocity-to-quality ratio.
- **OpenClaw:** highest raw volume, but close-to-open ratio (2.5% issues, 26% PRs) suggests a backlog that is growing faster than it's being drained. Concerning for an ecosystem anchor.

**Tier 2 — Stabilizing post-release:**
- **Hermes Agent:** shipped v0.18.1 (rollup of ~660 PRs) and v0.18.2 (same-day Baileys fix) — the canonical "ship the rollup, then patch" pattern. Active but disciplined.
- **IronClaw:** 12 PRs merged with breaking-version release PR (#5598) queued; appears to be in a controlled pre-release hardening window. Default-setters refactor stack (7+ PRs from one author) is a code-hygiene campaign.
- **NanoClaw:** concentrated docs-sweep + security bundle. Engagement is from a smaller contributor base but produces high-quality code-grounded PRs.

**Tier 3 — Maintenance / security response:**
- **ZeroClaw:** heavy land-and-rebase on stacked security PRs; high comment-count issue (#6699) shows community is engaged but maintainer throughput is constrained.
- **NanoBot:** healthy triage (8/14 issues closed, 14/32 PRs merged); security response is active but the MCP PR proliferation (#4842/#4843/#4764/#4506) suggests coordination is needed.
- **LobsterAI:** strong release velocity (2026.7.7 shipped) but now facing a coordinated security disclosure that tests maintainer maturity.

**Tier 4 — Concerning:**
- **PicoClaw:** small team, accumulating provider-compatibility bugs without fixes. Several issues closed as stale without resolution verification.
- **TinyClaw:** 9 critical advisories, **0 PR responses, 0 triage labels, 0 maintainer comments** as of data snapshot. This is the single most concerning posture in the ecosystem.

**Tier 5 — Dormant:**
- **NullClaw, Moltis, ZeptoClaw:** zero activity. Cannot evaluate health; may be paused, renamed, or stalled.

---

## 7. Trend Signals

### Trend 1: Localhost ≠ Trusted is the new security baseline
The coordinated disclosure across TinyClaw, LobsterAI, NanoBot, NanoClaw, and ZeroClaw represents a **paradigm shift in threat modeling** for AI agents: the era of "loopback is fine" is ending. Token-bearer-on-bind, `crypto.randomUUID()` SSE IDs (LobsterAI #1401), and per-sender authorization (ZeroClaw #8690) are now table stakes. **Value for developers:** adopt an explicit auth middleware on every localhost-bound control plane, even if the surface is "internal."

### Trend 2: Multi-agent concurrency is the next architectural frontier
Five projects (OpenClaw, Hermes Agent, NanoClaw, IronClaw, ZeroClaw) are independently converging on similar primitives: CAS-guarded deletes, approval-claim locks, scoped secrets, subagent thread-harnesses. **

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-08

## 1. Today's Overview

NanoBot shows elevated maintenance activity with **46 items updated in 24 hours** (14 issues, 32 PRs), though no new releases were published. The activity mix is dominated by **security remediation** (3 distinct WebUI/auth advisories closed), **channel-plugin bug fixes** (Slack dependency, Telegram HTML parsing, QQ reconnect, WhatsApp group routing), and **MCP stability work** (reconnect crashes, CancelledError handling, zombie reaping). The closing rate on issues (8/14) and PRs (14/32) is healthy and indicates a responsive maintainer team. Overall project health looks **stable with active triage**, though the cluster of P0 security findings within ~48 hours warrants a post-mortem once patches ship.

---

## 2. Releases

No new releases in the last 24 hours. The latest version referenced in user reports remains **0.2.x** (a known regression exists between 0.1.5post2 → 0.2.0, see [#4013](https://github.com/HKUDS/nanobot/issues/4013)).

---

## 3. Project Progress

**Merged/Closed PRs in last 24h:**

| PR | Title | Impact |
|---|---|---|
| [#4669](https://github.com/HKUDS/nanobot/pull/4669) | **fix: require api key for `serve`** | P1 security — closes the unauthenticated `/v1/chat/completions` hole ([#4078](https://github.com/HKUDS/nanobot/issues/4078)). Server now refuses to start without a configured API key. |
| [#4830](https://github.com/HKUDS/nanobot/pull/4830) | Add missing `aiohttp` to Slack extras | P1 bug — Slack plugin now actually installable; fixes [#4829](https://github.com/HKUDS/nanobot/issues/4829). |
| [#4831](https://github.com/HKUDS/nanobot/pull/4831) | WebUI: keep prompt rail out of narrow chat columns | P2 UI fix — CSS container query replaces hard-coded width assumption. |
| [#4833](https://github.com/HKUDS/nanobot/pull/4833) | Gate sustained goals behind explicit runtime mode | P1 architectural — replaces `long_task`/`complete_goal` with `create_goal`/`update_goal`, only injected during `/goal` turns. (Note: this is reopened as [#4844](https://github.com/HKUDS/nanobot/pull/4844) — appears to have been re-closed and re-opened.) |
| [#3378](https://github.com/HKUDS/nanobot/pull/3378) | `camera_capture` tool via OpenCV | Enhancement — opt-in webcam capture (disabled by default). |
| [#3517](https://github.com/HKUDS/nanobot/pull/3517) | WeChat `context_token` auto-refresh | Bug fix — cron-triggered WeChat messages were silently dropped on stale tokens. |

**Closed Issues (no PR required):** the three WebUI-token-minting advisories ([#4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827)) and the DNS-rebinding SSRF TOCTOU ([#4611](https://github.com/HKUDS/nanobot/issues/4611)) were closed, indicating upstream patches were already shipped or in transit.

---

## 4. Community Hot Topics

1. **[#2463 — Prompt-prefix preservation](https://github.com/HKUDS/nanobot/issues/2463)** (13 comments) — Long-standing architectural complaint that persisted conversation history doesn't match the prompt actually sent, conflicting with OpenAI's protocol guarantee. Recently re-touched, suggesting a design doc or refactor is being considered.
2. **[#4013 — Stream stalled >90 s](https://github.com/HKUDS/nanobot/issues/4013)** (6 comments) — A user reports regression from 0.1.5post2 → 0.2.0 around a hardcoded `/goal` path that blocks "real work". Indicates tool-routing/goal-system changes have regressed non-goal conversational flows.
3. **[#4823 — WhatsApp group allow-list broken](https://github.com/HKUDS/nanobot/issues/4823)** (3 comments) — Regression in 0.2.2 where group responses fan out to every group the sender number belongs to instead of the explicitly allowed groups.
4. **[#4078 — OpenAI-compat API unauthenticated](https://github.com/HKUDS/nanobot/issues/4078)** (2 comments) — Now patched via [#4669](https://github.com/HKUDS/nanobot/pull/4669). Community-flagged gap between "OpenAI-compatible" branding and actual auth behavior.
5. **WebUI security cluster** — Three independent reports ([#4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827)) describing the same `/webui/bootstrap` endpoint minting bearer tokens for unauthenticated localhost callers.

**Underlying need:** a pattern emerges around **trust boundaries on loopback** — users increasingly treat nanobot as a local-first daemon where localhost ≠ trusted, and want explicit opt-in for local-process authentication.

---

## 5. Bugs & Stability

Ranked by severity (fix PR noted where one exists):

| Severity | Issue | Summary | Fix PR |
|---|---|---|---|
| 🔴 P0 Security | [#4078](https://github.com/HKUDS/nanobot/issues/4078) | `/v1/chat/completions` accepted unauthenticated requests into `process_direct` | ✅ [#4669](https://github.com/HKUDS/nanobot/pull/4669) merged |
| 🔴 P0 Security | [#4825](https://github.com/HKUDS/nanobot/issues/4825) / [#4826](https://github.com/HKUDS/nanobot/issues/4826) / [#4827](https://github.com/HKUDS/nanobot/issues/4827) | `/webui/bootstrap` mints API-capable bearer tokens for any localhost process when `tokenIssueSecret`/static `token` unset | Closed (advisories); verify patch in upcoming release |
| 🔴 P0 Security | [#4611](https://github.com/HKUDS/nanobot/issues/4611) | DNS rebinding TOCTOU in `validate_url_target` — IPs not pinned between check and HTTP fetch | Closed (fix expected upstream) |
| 🟠 High | [#4823](https://github.com/HKUDS/nanobot/issues/4823) | WhatsApp group allow-list regression in 0.2.2 | No fix PR yet |
| 🟠 High | [#4800](https://github.com/HKUDS/nanobot/issues/4800) | `.strip()` on `msg.content` crashes on multimodal (list-form) messages | ✅ [#4837](https://github.com/HKUDS/nanobot/pull/4837) open |
| 🟠 High | [#4805](https://github.com/HKUDS/nanobot/issues/4805) | `suppress(Exception)` swallows tool validation errors silently | ✅ [#4837](https://github.com/HKUDS/nanobot/pull/4837) open |
| 🟠 High | [#4013](https://github.com/HKUDS/nanobot/issues/4013) | LLM stream stalls >90 s post-0.2.0 | No PR yet |
| 🟡 Medium | [#4835](https://github.com/HKUDS/nanobot/issues/4835) | WebUI landing message can land in wrong (existing) chat if user clicks during creation race | No PR yet |
| 🟡 Medium | [#4829](https://github.com/HKUDS/nanobot/issues/4829) | `aiohttp` missing from Slack extras | ✅ [#4830](https://github.com/HKUDS/nanobot/pull/4830) merged |
| 🟡 Medium | [#4841](https://github.com/HKUDS/nanobot/issues/4841) | Matrix bot device "Untrusted" — no cross-signing/SAS flow | No PR yet |
| 🟢 Low | [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Telegram stream-overflow chunks lose HTML parse_mode | ✅ [#4839](https://github.com/HKUDS/nanobot/pull/4839) open |
| 🟢 Low | [#4767](https://github.com/HKUDS/nanobot/issues/4767) | QQ auto-reconnect hammers endpoint | ✅ [#4838](https://github.com/HKUDS/nanobot/pull/4838) open |

MCP stack has its own cluster of related bugs ([#4842](https://github.com/HKUDS/nanobot/pull/4842), [#4843](https://github.com/HKUDS/nanobot/pull/4843), [#4764](https://github.com/HKUDS/nanobot/pull/4764), [#4506](https://github.com/HKUDS/nanobot/pull/4506)) all dealing with `AsyncExitStack` lifecycle during reconnect/idle-timeout, suggesting the MCP transport layer is overdue for a refactor.

---

## 6. Feature Requests & Roadmap Signals

- **WebUI file-edit diff view** — [#4828](https://github.com/HKUDS/nanobot/pull/4828) adds per-turn hook factories so external observers can render diffs. Likely lands in next minor release and pairs with [#4822](https://github.com/HKUDS/nanobot/pull/4822) (automation-source metadata).
- **Provider-hosted web search** — [#3741](https://github.com/HKUDS/nanobot/issues/3741) (closed) — supports Azure OpenAI Responses API native `web_search`. Indicates push toward **provider-native tool surfacing** rather than tool-execution duplication.
- **Camera capture** — [#3378](https://github.com/HKUDS/nanobot/pull/3378) introduces a new physical-world interaction surface (webcam). Likely to remain **opt-in/default-off** in next release.
- **MCP idle-timeout auto-kill** — [#4506](https://github.com/HKUDS/nanobot/pull/4506) — feature with conflict marker, but it gates on fixing the underlying reconnect crash first.
- **Goal runtime gating** — [#4844](https://github.com/HKUDS/nanobot/pull/4844) makes sustained goals opt-in per turn, signalling a strategic shift from "always-on daemon" toward "explicit-mode" control.

**Prediction for next release (0.2.3 or 0.2.4):** Slack `aiohttp` dep, OpenAI-compat API-key enforcement, multimodal-content guard, WebUI bootstrap auth hardening, QQ/Telegram channel fixes.

---

## 7. User Feedback Summary

- **Pain point — regression anxiety:** User [mxnbf](https://github.com/HKUDS/nanobot/issues/4013) explicitly calls out 0.1.5post2 as "very good" and 0.2.0 as making "any real work useless" due to the stream stall. Suggests upgrade gating/changelogs need improvement.
- **Use case — local-first multi-channel:** Activity around WeChat cron, QQ reconnect, Telegram HTML, WhatsApp groups, Matrix E2EE shows a strong user base running nanobot as a **multi-channel personal assistant** with scheduled automations.
- **Use case — WebUI as primary interface:** Three simultaneous UX bugs (landing-message race, narrow-column prompt rail, file-edit diff) confirm WebUI is no longer optional — it is a primary surface.
- **Pain point — trust on localhost:** Multiple security reports reflect a maturing threat model where users want explicit authentication even on loopback.
- **Satisfaction signal:** The camera-capture and file-edit-diff features being merged indicate a community that contributes enhancements, not just bug reports.

---

## 8. Backlog Watch

Items that have been waiting too long or need maintainer attention:

- **[#2463 — Prompt-prefix preservation](https://github.com/HKUDS/nanobot/issues/2463)** — 13 comments since March, architectural in scope, no linked RFC. Needs an explicit design decision or `wontfix`/planned-for-X milestone tag.
- **[#4013 — Stream stall](https://github.com/HKUDS/nanobot/issues/4013)** — Reported May 26, no fix PR. Blocks users on 0.2.x.
- **[#4637 — Telegram HTML overflow](https://github.com/HKUDS/nanobot/issues/4637)** — Has a fix PR ([#4839](https://github.com/HKUDS/nanobot/pull/4839)) waiting on review.
- **[#4767 — QQ reconnect](https://github.com/HKUDS/nanobot/issues/4767)** — Has a fix PR ([#4838](https://github.com/HKUDS/nanobot/pull/4838)) waiting on review.
- **[#2493 — LangSmith integration](https://github.com/HKUDS/nanobot/issues/2493)** — Referenced by [#4847](https://github.com/HKUDS/nanobot/pull/4847). Documentation currently overstates a feature that no longer works; needs either a working re-implementation or README update.
- **[#4506 — MCP idle-timeout](https://github.com/HKUDS/nanobot/pull/4506) vs [#4764](https://github.com/HKUDS/nanobot/pull/4764) vs [#4843](https://github.com/HKUDS/nanobot/pull/4843)** — three competing/overlapping MCP lifecycle PRs from different authors. **Maintainer coordination required** to converge on one design rather than merge conflicting patches.
- **[#4841 — Matrix E2EE untrusted device](https://github.com/HKUDS/nanobot/issues/4841)** — Just opened, but interacts with the broader E2EE-trust story for Matrix and may need cross-signing design work rather than a quick fix.

---

*Generated 2026-07-08 from GitHub activity for [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-08

## 1. Today's Overview

Hermes Agent is in a high-velocity stabilization phase following a major release cycle. The project shipped **v0.18.1 (v2026.7.7)** as a rollup of approximately 660 merged PRs since v0.18.0 (July 1), followed by a same-day patch **v0.18.2 (v2026.7.7.2)** to unpin the WhatsApp Baileys dependency for tagged Docker builds. In the last 24 hours, **13 issues remain active** with no closures, and **50 PRs were updated** (35 still open, 15 closed/merged) — a strong signal of sustained contributor throughput. Thematic concentration is on Desktop UX refinements, TUI stability, security dependency updates, and gateway/messaging-platform fixes. Overall project health: **active and stable**, with a noticeable emphasis on regression cleanup before the next minor release.

## 2. Releases

### v2026.7.7.2 — Hermes Agent v0.18.2 (July 7, 2026)
**Patch release** issued same-day on top of v0.18.1 to fix Docker tagged-release builds.
- **fix(whatsapp):** unpin Baileys from git commit, use published 7.0.0-rc13 ([context](#))
- **Migration / breaking change:** None. Consumers of pre-built Docker images for tagged versions must pull the v0.18.2 image.

### v2026.7.7 — Hermes Agent v0.18.1 (July 7, 2026)
**Patch release** consolidating ~660 PRs merged between July 1 and July 7 into a stable tagged release for downstream consumers (Docker, hosted deployments, PyPI).
- **Scope:** bug fixes, hardening, and in-progress feature work rolled up from the v0.18.0 cycle.
- **Migration / breaking change:** None flagged in the release notes; recommend users on prior v0.18.x upgrade to v0.18.2 directly to pick up the Baileys fix.

## 3. Project Progress

The 15 closed/merged PRs reflect concentrated effort in **security hardening**, **dependency maintenance**, and **cross-platform delivery reliability**. Notable landed work:

- **Security dependency bumps (CVE mitigation)**
  - [#60697](https://github.com/nousresearch/hermes-agent/pull/60697) — `cryptography` 46.0.7 → 48.0.1, `python-multipart` 0.0.27 → 0.0.31
  - [#60676](https://github.com/nousresearch/hermes-agent/pull/60676) — `starlette` 1.0.1 → 1.3.1 (closes GHSA-82w8-qh3p-5jfq, GHSA-jp82-jpqv-5vv3)
- **TUI responsiveness & reliability**
  - [#55611](https://github.com/nousresearch/hermes-agent/pull/55611) — raise `MAX_MOUNTED` default for virtual history (long-response reachability fix)
  - [#60731](https://github.com/nousresearch/hermes-agent/pull/60731) — suppress sticky-scroll yank on re-read; make history cap configurable
  - [#60727](https://github.com/nousresearch/hermes-agent/pull/60727) — WebSocket heartbeat + auto-reconnect for silent drops (#32997)
- **Desktop refinements**
  - [#60733](https://github.com/nousresearch/hermes-agent/pull/60733) — visible reveal grip on collapsed left sidebar
  - [#60638](https://github.com/nousresearch/hermes-agent/pull/60638) — contribution-driven shell on Dockview-style layout tree + plugin SDK
- **Provider & gateway reliability**
  - [#60503](https://github.com/nousresearch/hermes-agent/pull/60503) — merge `custom_providers.models` during model switching
  - [#60680](https://github.com/nousresearch/hermes-agent/pull/60680) — remove `HASS_TOKEN` from unconditional Tier-1 env strip
  - [#60728](https://github.com/nousresearch/hermes-agent/pull/60728) — bump `cbor2`, `msgpack`, `tornado` for CVEs
  - [#60730](https://github.com/nousresearch/hermes-agent/pull/60730) — generic OIDC client-credentials relay provisioning (NAS-free)
  - [#51797](https://github.com/nousresearch/hermes-agent/pull/51797) — preserve one-shot CLI isolation flags

Feature progress also advanced with [#38846](https://github.com/nousresearch/hermes-agent/pull/38846) (Desktop i18n, 15 locales via hybrid JSON+TypeScript) and [#60734](https://github.com/nousresearch/hermes-agent/issues/60734) discussion on per-profile preloaded skills.

## 4. Community Hot Topics

Activity is moderate but spread thin across many threads; the highest comment counts are clustered on long-lived bugs:

| Issue / PR | Title | Comments | Link |
|---|---|---|---|
| [#16185](https://github.com/nousresearch/hermes-agent/issues/16185) | Telegram voice messages not transcribed automatically (P2) | 4 | Open since 2026-04-26 |
| [#60659](https://github.com/nousresearch/hermes-agent/issues/60659) | Desktop collapsed sidebar hover-reveal unreliable (P3) | 3 | Filed today |
| [#20582](https://github.com/nousresearch/hermes-agent/issues/20582) | `/model` only shows one model for custom providers (P2) | 3 | Open since 2026-05-06 |
| [#42042](https://github.com/nousresearch/hermes-agent/issues/42042) | Desktop UI: add API key field for Local/custom endpoint (P3) | 3 | Open since 2026-06-08 |
| [#57896](https://github.com/nousresearch/hermes-agent/issues/57896) | Multiplexing gateway: feishu websocket should not be port-binding (P2) | 2 | Open since 2026-07-03 |
| [#58393](https://github.com/nousresearch/hermes-agent/issues/58393) | Desktop model picker cannot reliably show/select custom OpenAI-compatible providers (P2) | 2 | Open since 2026-07-04 |

**Underlying needs surfaced:**
- **Voice/STT completeness across gateways** — Telegram users want STT parity with other platforms ([#16185](#)).
- **Custom-provider UX parity in Desktop and CLI** — multiple open threads ([#20582](#), [#58393](#), [#42042](#)) suggest the custom-provider path is a major source of friction and needs a holistic review rather than point fixes.
- **Discoverability of Desktop affordances** — sidebar reveal ([#60659](#)) signals that invisible hit zones are a recurring UX pitfall.
- **Multiplexed-profile safety** — the feishu websocket misclassification ([#57896](#)) and the new UnscopedSecretError ([#60726](#)) both point to insufficient isolation guarantees in the multiplexing path.

## 5. Bugs & Stability

Ranked by severity and recency; fix PR status noted where known.

| Issue | Title | Severity | Fix PR |
|---|---|---|---|
| [#47464](https://github.com/nousresearch/hermes-agent/issues/47464) | P1 Memory-Compression-Fehler steigen (81 failures, 71.4% error rate, 86 unkomprimierte Backlog) | **P2 (SysOps P1 incident)** | None linked — 86-item uncompressed backlog |
| [#16185](https://github.com/nousresearch/hermes-agent/issues/16185) | Telegram voice messages not transcribed automatically | P2 | None linked |
| [#20582](https://github.com/nousresearch/hermes-agent/issues/20582) | Model picker only shows one model for custom providers | P2 | [#60503](https://github.com/nousresearch/hermes-agent/pull/60503) (open) addresses catalog merge |
| [#57896](https://github.com/nousresearch/hermes-agent/issues/57896) | Feishu websocket mode treated as port-binding under multiplexing | P2 | None linked |
| [#58393](https://github.com/nousresearch/hermes-agent/issues/58393) | Desktop model picker cannot reliably show/select custom OpenAI-compatible providers | P2 | None linked |
| [#60659](https://github.com/nousresearch/hermes-agent/issues/60659) | Desktop collapsed sidebar hover-reveal unreliable (14px / 10px / 130ms) | P3 | [#60733](https://github.com/nousresearch/hermes-agent/pull/60733) (open) adds visible grip |
| [#58269](https://github.com/nousresearch/hermes-agent/issues/58269) | [feishu] Remove outdated table-to-text fallback | P3 | None linked |
| [#60726](https://github.com/nousresearch/hermes-agent/issues/60726) | Background task fails with `UnscopedSecretError` when multiplexing is on | P3 | None linked |
| [#60722](https://github.com/nousresearch/hermes-agent/issues/60722) | MoA presets hidden from Desktop model picker after `explicit_only` filter (regression from 37a4cf90) | P3 | None linked |

**Highest stability risk:** the Memory-Compression incident ([#47464](#)) at a 71.4% error rate is the only item flagged as a confirmed SysOps incident and remains in "watching" status with no linked fix.

## 6. Feature Requests & Roadmap Signals

Newly filed or refreshed feature requests:

- [#60735](https://github.com/nousresearch/hermes-agent/issues/60735) — Clarify `schema.description` vs `register_tool(description)` semantics for plugin authors (docs/SDK clarity)
- [#60734](https://github.com/nousresearch/hermes-agent/issues/60734) — Per-profile preloaded skills (especially for Feishu/WeChat profiles that currently re-load on every session)
- [#42042](https://github.com/nousresearch/hermes-agent/issues/42042) — Desktop UI: API key field for Local/custom endpoint (close gap left by #38572)
- [#20713](https://github.com/nousresearch/hermes-agent/pull/20713) (open PR) — `end_turn` plugin tool contract: terminal tool batches stop the agent loop cleanly
- [#38846](https://github.com/nousresearch/hermes-agent/pull/38846) (open PR) — Desktop i18n expansion from 4 → 15 languages via hybrid JSON+TypeScript workflow

**Predicted near-term landing in v0.18.3 or v0.19:**
- `end_turn` plugin contract ([#20713](#)) — low-risk additive API.
- Desktop custom-provider picker unification ([#58393](#) + [#42042](#) + [#20582](#)) — pattern is strong enough that a single cross-surface PR is likely.
- TUI scroll/heartbeat trio ([#55611](#), [#60731](#), [#60727](#)) — all address the same UX class and may be batched.
- Multiplexed-profile safety patch (likely covering [#57896](#) and [#60726](#) together) — security-shaped, high maintainer priority.

## 7. User Feedback Summary

Real pain points extracted from today's active threads:

- **Custom OpenAI-compatible providers are a major friction surface.** Three separate issues ([#20582](#), [#58393](#), [#42042](#)) show users hitting model-picker and API-key gaps when configuring self-hosted endpoints — the workflow is split across CLI, Telegram, and Desktop, with inconsistent behavior across each.
- **TUI long responses "disappear."** [#55611](#)/[#55594](#) report a perceived silent data loss when assistant responses exceed the virtualized ScrollBox mount window; [#60731](#) and [#60727](#) continue the fix thread. Users describe this as "having to Ctrl+C out" — a strong dissatisfaction signal.
- **Telegram STT is incomplete.** [#16185](#) — users expect parity with platforms where voice transcription works out of the box.
- **Feishu formatting is regressing.** [#58269](#) — forced plain-text fallback strips all formatting when tables are detected, perceived as a quality regression.
- **Multiplexed profile isolation leaks secrets.** [#60726](#) — `UnscopedSecretError` on `/background` indicates per-profile credentials are not being scoped at the right lifetime.
- **Sidebar affordances are undiscoverable.** [#60659](#) — invisible 14px trigger strip; users describe having to "wave the mouse" to find it.
- **UX hierarchy confusion in Desktop sidebar.** [#60732](#) — repository vs. branch visual redundancy raises questions about the intended mental model.

**Satisfaction read:** active users are *constructively engaged* — every complaint has an associated fix PR or a concrete proposed API. There is no evidence of abandonment or churn sentiment in the day's data; dissatisfaction is technical and paired with proposed solutions.

## 8. Backlog Watch

Long-running and high-impact issues needing maintainer attention:

| Item | Age | Why it needs attention |
|---|---|---|
| [#16185](https://github.com/nousresearch/hermes-agent/issues/16185) | 2026-04-26 → today (~73 days) | P2, 4 comments, no linked fix; affects Telegram voice UX parity |
| [#20582](https://github.com/nousresearch/hermes-agent/issues/20582) | 2026-05-06 → today (~63 days) | P2, 3 comments, partial fix in [#60503](#) but Desktop/CLI parity still open |
| [#47464](https://github.com/nousresearch/hermes-agent/issues/47464) | 2026-06-16 → today | Confirmed SysOps incident, 71.4% error rate, 86-item backlog, no fix PR — **highest backlog priority** |
| [#57896](https://github.com/nousresearch/hermes-agent/issues/57896) | 2026-07-03 | Multiplexing misclassification; high blast radius |
| [#58393](https://github.com/nousresearch/hermes-agent/issues/58393) | 2026-07-04 | Desktop model picker for custom OpenAI-compatible providers — no fix PR |
| [#42042](https://github.com/nousresearch/hermes-agent/issues/42042) | 2026-06-08 | Clear small-scope ask (add API key field) with no progress |
| [#18280](https://github.com/nousresearch/hermes-agent/pull/18280) | 2026-05-01 | Open PR for Mattermost session isolation — needs review |
| [#53544](https://github.com/nousresearch/hermes-agent/pull/53544) | 2026-06-27 | P2 PR to recover undelivered tool-call content — significant agent-loop correctness fix awaiting review |

**Top-of-list for maintainer attention:** the memory-compression SysOps incident ([#47464](#)) is the only confirmed production-affecting item with no linked remediation; secondarily, the Mattermost session-isolation PR ([#18280](#

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-08

## 1. Today's Overview

PicoClaw showed moderate maintenance activity with 7 issues and 5 PRs updated, though no new releases were published in the 24-hour window. Two PRs were closed (#3234 vision-capability fix for anthropic_messages provider, #3157 stale Android ADB tool), while three remain open and addressing refactoring/backward-compat concerns. Issue activity is dominated by bug reports — particularly model-provider integration problems (Volcengine, OpenAI, Codex OAuth) and a fresh rate-limiting regression (#3232) — alongside a channel-gateway feature request that was closed. Overall health: active iteration on internal code, but growing backlog of provider-compatibility bugs without shipped fixes.

## 2. Releases

No new releases in the last 24 hours. Latest user-reported version across issues remains v0.3.1 (#3232), with several issues still referencing v0.2.8–v0.2.9, suggesting a version gap where reported defects have not yet been included in a tagged build.

## 3. Project Progress

Two PRs closed today:

- **[#3234](https://github.com/sipeed/picoclaw/pull/3234)** — Closed (likely merged or superseded) — *CHORE (anthropic_messages): embed image media in user messages so vision models can see them*. Fixes a real bug where `buildRequestBody` dropped `msg.Media` before it reached Anthropic vision models, so images attached via `load_image` were silently discarded. Material relevance to multimodal workflows.
- **[#3157](https://github.com/sipeed/picoclaw/pull/3157)** — Closed as stale — *feat: add Android ADB remote operations tool*. Experimental device-control toolkit (tap, swipe, screenshot, etc.) for explicitly configured Android devices; the maintainer side appears to have marked it inactive.

Three PRs remain open, signaling upcoming code shape:

- **[#3222](https://github.com/sipeed/picoclaw/pull/3222)** — Refactor of the deltachat channel, –320 LOC, with API renames (`invite_link` → `join_invite_link`) and removal of password-based email config. This is a **breaking channel-config change** that downstream operators will need to review.
- **[#3233](https://github.com/sipeed/picoclaw/pull/3233)** — Directly driven by #3222; preserves backward compatibility for the refactor.
- **[#3226](https://github.com/sipeed/picoclaw/pull/3226)** — Fixes #3150 by hardening `write_file` against destructive overwrite of `memory/MEMORY.md`. Important for agent-state integrity.

## 4. Community Hot Topics

The most engaging thread by far is the closed feature request:

- **[#3093](https://github.com/sipeed/picoclaw/issues/3093) — "I need SimpleX or tox"** (5 comments, 1 👍, closed/stale). Re-opened demand for privacy-preserving chat gateways (SimpleX / Wire / Tox). The close appears to be a stale-bot action rather than a maintainer rejection — the underlying ask for alternative transport channels remains unfulfilled and is likely to surface again.
- **[#3153](https://github.com/sipeed/picoclaw/issues/3153)** — Volcengine Doubao tool-call leak (3 comments). Discusses malformed XML tokens (`<seed:tool_call>`) leaking into user-visible output instead of executing — a parser/integration failure.
- **[#3195](https://github.com/sipeed/picoclaw/issues/3195)** — GPT on NanoKVM default config (2 comments). Emergent hardware (NanoKVM 2.4.0) is hitting configuration mismatches.

Underlying need: better coverage and stricter validation of model-provider integrations, especially for non-OpenAI/Non-Anthropic vendors and emerging hardware deployments.

## 5. Bugs & Stability

Ranked by severity / user-visible impact:

1. **[#3232](https://github.com/sipeed/picoclaw/issues/3232) — Rate limiting ignored without fallback models** (fresh, v0.3.1). High severity: a documented config knob (`rpm`) is silently no-op when fallback models aren't configured. **No fix PR exists yet.** Likely a quick config-gating or guard-rail fix.
2. **[#3153](https://github.com/sipeed/picoclaw/issues/3153) — Volcengine Doubao tool-call leakage** (3 comments). High severity for Volcengine users: tool-call tokens leak as plain text. **No fix PR.**
3. **[#3195](https://github.com/sipeed/picoclaw/issues/3195) — OpenAI GPT incompatible with NanoKVM default config** (2 comments). Out-of-box failure on a newly supported device class. **No fix PR.**
4. **[#3197](https://github.com/sipeed/picoclaw/issues/3197) / [#3196](https://github.com/sipeed/picoclaw/issues/3196) — Codex / AntyGravity OAuth login** (1 comment each, appears duplicated). OAuth flow broken on v0.2.9. **No fix PR.**
5. **[#3159](https://github.com/sipeed/picoclaw/issues/3159) — Repeated-task duplication (DeepSeek)**. Closed, resolution unclear — worth verifying whether the fix actually landed.

Trend: provider/plugin compatibility defects are accumulating without merged fixes; this is the largest current stability risk for PicoClaw.

## 6. Feature Requests & Roadmap Signals

- **[#3093](https://github.com/sipeed/picoclaw/issues/3093)** — Privacy-first chat gateway (SimpleX / Tox / Wire). Closed as stale, but the request pattern across multiple similar issues suggests recurring demand; expect re-filing or a community PR.
- The **deltachat refactor** in [#3222](https://github.com/sipeed/picoclaw/pull/3222) signals a hardening of email-channel configuration toward secrets-in-jsonrpc. Predict this lands in v0.3.2 or v0.4.0 with a documented migration.
- The **Android ADB** tool ([#3157](https://github.com/sipeed/picoclaw/pull/3157)) closing as stale suggests mobile/device-remote control is **not** on the near-term roadmap unless revived.
- **Vision-model support** for Anthropic Messages ([#3234](https://github.com/sipeed/picoclaw/pull/3234)) signals that multimodal ingestion is an active development direction.

## 7. User Feedback Summary

- **Pain points clustered on integrations.** Users repeatedly encounter default-config breakage when wiring up NanoKVM, GPT, Volcengine Doubao, Codex OAuth, or AntyGravity. Combined with several issues still open after a week or more (stale-flagged), users perceive slow triage on third-party provider bugs.
- **Agent-state integrity.** [#3226](https://github.com/sipeed/picoclaw/pull/3226) surfaces a non-obvious UX defect — `write_file`'s overwrite guard was actively coaching the model toward overwriting memory. This indicates users care about long-term agent memory reliability and are willing to file nuanced bugs.
- **Channel diversity.** Privacy-conscious users want more transport options beyond mainstream chat platforms; the SimpleX/Tox/Wire ask reflects a niche but vocal persona within the community.
- **Satisfaction signal.** No high-energy praise threads; activity is largely corrective, suggesting the user base is currently in "filing defects" mode rather than adoption-mode.

## 8. Backlog Watch

Items needing maintainer attention that are at risk of being missed by stale bots:

- **[#3093](https://github.com/sipeed/picoclaw/issues/3093)** — Closed as stale but the underlying request is real; needs an explicit maintainer response (deferred/accepted/wontfix) before it surfaces a third time.
- **[#3159](https://github.com/sipeed/picoclaw/issues/3159)** — Closed without obvious fix; should be re-opened or have a closing comment explaining resolution so users running DeepSeek on v0.2.9 know whether they are affected.
- **[#3196](https://github.com/sipeed/picoclaw/issues/3196) & [#3197](https://github.com/sipeed/picoclaw/issues/3197)** — Likely duplicate OAuth failures; should be consolidated into one tracked issue with a fix PR.
- **[#3232](https://github.com/sipeed/picoclaw/issues/3232)** — A 0-comment but high-severity config regression on the latest version; needs prompt review before the next release.
- **[#3222](https://github.com/sipeed/picoclaw/pull/3222) / [#3233](https://github.com/sipeed/picoclaw/pull/3233)** — Pair of open PRs where one is a backward-compat patch for the other; maintainer should review and merge together to avoid a breaking deltachat channel experience.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-08

## 1. Today's Overview

NanoClaw shows elevated maintenance activity driven primarily by a **documentation staleness sweep** and a cluster of **security and stability fixes**. Over the last 24 hours, 21 PRs moved and 1 new security issue was filed, with 8 PRs landing on `main` (no releases cut). The merged PRs are dominated by `@glifocat`'s code-grounded docs rewrite (architecture.md, agent-runner-details.md, DB schema, SDK deep-dive, and a mechanical README/CONTRIBUTING sweep), signaling a healthy commitment to keeping in-repo documentation aligned with shipping code. Open work is concentrated around webhook hardening, supply-chain gating, and approval-flow concurrency. No new releases were published, suggesting maintainers are batching fixes for the next tagged version rather than hot-patching.

## 2. Releases

No new releases in the last 24 hours. Activity is queued behind merged-but-untagged PRs that collectively address security, docs, and several latent bugs.

## 3. Project Progress

PRs merged/closed today (#2961–#2965, #2922, #2804, #2919):

- **Docs staleness sweep (glifocat, 5 PRs landed)**
  - [#2961](https://github.com/nanocoai/nanoclaw/pull/2961) `docs: fix stale claims across README, CONTRIBUTING, CLAUDE.md and operational docs` — removes skills no longer solicited (`/add-signal`, `/add-matrix`) and corrects other factual drift.
  - [#2962](https://github.com/nanocoai/nanoclaw/pull/2962) `docs: sync DB schema and entity docs with migrations 010-018` — `messaging_group_agents` columns, trigger_rules replacement, etc.
  - [#2963](https://github.com/nanocoai/nanoclaw/pull/2963) `docs: rewrite architecture.md and agent-runner-details.md to match current code` — replaces the most-drifted docs outright rather than patching.
  - [#2964](https://github.com/nanocoai/nanoclaw/pull/2964) `docs: update SDK deep-dive from 0.2.x to 0.3.197` — re-verified against `sdk.d.ts` (~6700 lines) and the actual consumer.
  - [#2965](https://github.com/nanocoai/nanoclaw/pull/2965) `fix(agent-runner): match rate_limit_event as a top-level SDK message type` — real code fix packaged with the doc update; SDK 0.3.x delivers `SDKRateLimitEvent` at top level, not as `system/rate_limit_event`.

- **Bug fixes**
  - [#2922](https://github.com/nanocoai/nanoclaw/pull/2922) `fix(discord): unwrap forwarded-message snapshots so agents see forwarded content` — Discord adapter now exposes the forwarded payload to downstream agents.
  - [#2804](https://github.com/nanocoai/nanoclaw/pull/2804) `fix(cli): ncl messaging-groups create always throws (NOT NULL instance)` — `messaging_groups.instance` column was missing from the resource definition vs. migration 016; `genericCreate` was doing a raw INSERT that hit NOT NULL.
  - [#2919](https://github.com/nanocoai/nanoclaw/pull/2919) `PR-Test2-LargePRTest` — closed (test/abandoned large-PR experiment, not shipped).

**Net effect:** documentation now reflects the actual codebase (verified against `08a1ac9` / v2.1.38, re-verified post-rebase onto `b6cb53e`), and two latent bugs (Discord forwarded content, CLI create path) are closed.

## 4. Community Hot Topics

Activity volumes are modest (most items have ≤5 comments/reactions), but the most consequential threads are:

- **Security disclosure (new)** — [#2970](https://github.com/nanocoai/nanoclaw/issues/2970) *"Local action forgery via unauthenticated forwarded gateway loopback webhook"*. The localhost webhook that receives forwarded gateway interaction events does not authenticate the sender before trusting the payload. This is the most strategically important item today; it pairs naturally with the in-flight [#2975](https://github.com/nanocoai/nanoclaw/pull/2975) (`fix(webhook): don't let a bind failure take down the whole host`), which touches the same webhook surface but addresses availability, not auth.
- **Webinar of adjacent webhook work** — [#2975](https://github.com/nanocoai/nanoclaw/pull/2975) (open) and [#2970](https://github.com/nanocoai/nanoclaw/issues/2970) (open) both attack the webhook subsystem; reviewers should treat them as a coupled pair.
- **Supply-chain hardening** — [#2973](https://github.com/nanocoai/nanoclaw/pull/2973) *"activate the minimumReleaseAge gate"* — author `sturdy4days` discovered that `minimumReleaseAge: 4320` was nested under a `pnpm:` key, which pnpm only reads from `package.json`. The hoist is one-line but high-leverage: it re-enables a 3-day quarantine on newly published packages.

**Underlying need:** a coordinated webhook/auth hardening pass plus a re-anchored supply-chain policy. Maintainers are likely to ship these as a single "security" themed minor release rather than individually.

## 5. Bugs & Stability

Ranked by severity / blast radius:

| # | Severity | Item | Status | Notes |
|---|---|---|---|---|
| 1 | **High — Security** | [#2970](https://github.com/nanocoai/nanoclaw/issues/2970) Unauth. loopback webhook → local action forgery | Open, no fix PR | Authentication missing on a localhost-only but attacker-reachable surface; pre-trust of inbound events. |
| 2 | High — Crash | [#2975](https://github.com/nanocoai/nanoclaw/pull/2975) `server.listen()` without `'error'` handler on webhook | **Fix PR open** | `EADDRINUSE` (port collision / duplicate process) crashes the entire host, taking polling/delivery/sweep down. Single-line hardening. |
| 3 | High — Correctness | [#2974](https://github.com/nanocoai/nanoclaw/pull/2974) Approvals not claimed before handler runs | **Fix PR open** | Race: two handlers can invoke the same pending approval. Adds `claimPendingApproval()` (atomic compare-and-set delete) prior to handler invocation. |
| 4 | High — Security | [#2800](https://github.com/nanocoai/nanoclaw/pull/2800) `ncl groups create --folder ../../etc` escapes `GROUPS_DIR`; `--image-tag` unrestricted (CWE-22 + image pinning) | **Fix PR open** | No `customInsert`, so `genericCreate` bypasses `assertValidGroupFolder`. Author `sturdy4days` is the consistent voice on this class of bug. |
| 5 | Medium — Observability | [#2966](https://github.com/nanocoai/nanoclaw/pull/2966) Provider errors recorded as `completed`; failed acks not mirrored | Draft PR | `container/agent-runner/src/poll-loop.ts` calls `markCompleted(processingIds)` after `try/catch`, so failures look identical to successes. Marked draft — semantics under discussion. |
| 6 | Medium — Supply chain | [#2973](https://github.com/nanocoai/nanoclaw/pull/2973) `minimumReleaseAge` mis-placed → effectively disabled | **Fix PR open** | |
| 7 | Medium — Discord adapter | [#2922](https://github.com/nanocoai/nanoclaw/pull/2922) Forwarded Discord messages not unwrapped | **Fixed & closed** | |
| 8 | Low — CLI | [#2804](https://github.com/nanocoai/nanoclaw/pull/2804) `ncl messaging-groups create` always throws | **Fixed & closed** | |

## 6. Feature Requests & Roadmap Signals

Several open PRs map to clear, named roadmap pieces:

- **Agent templates, part 2 of 2** — [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) `feat(setup): template setup flow in the wizard and first-agent stamping` (open). Template loader landed in #2890; this PR wires the wizard question *"How should we create your first agent?"* and stamps the first agent accordingly. Likely to ship together as the "templates v2" bundle.
- **Remote storage** — [#1598](https://github.com/nanocoai/nanoclaw/pull/1598) `feat: add-remote-storage skill (WebDAV/S3 via rclone + systemd)` and `ncl groups config add-mount/remove-mount` (open). Long-lived (filed 2026-04-02, ~3 months). Predicts a `remote-mounts` CLI subcommand group in the next minor.
- **Teams add-skill rebuild** — [#2958](https://github.com/nanocoai/nanoclaw/pull/2958) `add-teams: Teams-CLI-first credentials flow in SSF directive grammar` (open). Replaces a ~7-step Azure portal walk with `teams login` + `teams app create --json`; consolidates setup into the structured-skill-format.
- **Slack Socket Mode + wizard UX polish** — [#2972](https://github.com/nanocoai/nanoclaw/pull/2972) `Wizard UX + add-slack Socket Mode fixes` (open). Restores bot-event subscription in Socket Mode and ships clack-color/wizard step polish.
- **Host operational CLI** — [#2971](https://github.com/nanocoai/nanoclaw/pull/2971) `Add ncc utility skill: host operational and health CLI` (open). Adds a single host-side health/ops entrypoint.
- **Skills lifecycle** — [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) `fix(skills): split pre-flight from credentials so /update-skills can refresh code (#2868)` (open). Targets the recurring pain that `/update-skills` can't refresh skill *code* if credentials are required; splits pre-flight from the credentials gate.

**Prediction for the next version** (likely v2.1.39 or a v2.2.0 if maintainers group everything): bundled security release (webhook auth + bind handler + folder validation + supply-chain gate), the templates wizard completion, and the Teams/Slack setup overhaul. The docs sweep suggests the team wants a tag with clean, accurate docs as the headline.

## 7. User Feedback Summary

Direct user-facing complaints cluster around three pain points:

1. **Setup friction on first-run / wizard paths.** PRs [#2972](https://github.com/nanocoai/nanoclaw/pull/2972), [#2958](https://github.com/nanocoai/nanoclaw/pull/2958), [#2729](https://github.com/nanocoai/nanoclaw/pull/2729) (open), and [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) all respond to "the wizard doesn't match what the docs say" or "the credentials dance is too long." Repeated signal indicates real satisfaction erosion here.
2. **`/update-skills` doesn't refresh code.** [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) and the linked #2868 show users hit a wall where skill *code* updates require credentials they may not have, blocking the loop.
3. **CLI ergonomics.** [#2804](https://github.com/nanocoai/nanoclaw/pull/2804) shows `ncl messaging-groups create` was *completely broken* — a strong dissatisfaction signal that the regression shipped unnoticed. The fix is now in.

Positive sentiment is implicit in the docs sweep: contributors are voluntarily correcting large amounts of drift, which usually reflects an engaged user base that wants the project to ship clean rather than abandon it.

## 8. Backlog Watch

Items needing maintainer attention:

- **[#1598](https://github.com/nanocoai/nanoclaw/pull/1598) — `add-remote-storage` skill (open since 2026-04-02, ~95 days).** Submitted via `/contribute` with priority-review request. No new comments in the latest activity batch. Risk: contributor fatigue and merge conflicts with the concurrent skills/staleness work. **Action:** maintainer triage for inclusion in the next minor.
- **[#2800](https://github.com/nanocoai/nanoclaw/pull/2800) — CWE-22 path traversal + image pinning in `ncl groups create/update`.** High-severity security fix awaiting review; now ~3 weeks old. Should be fast-tracked, ideally together with [#2973](https://github.com/nanocoai/nanoclaw/pull/2973) and the imminent webhook-auth patch for [#2970](https://github.com/nanocoai/nanoclaw/issues/2970).
- **[#2974](https://github.com/nanocoai/nanoclaw/pull/2974) — Approval claim race.** Concurrency correctness fix; deserves security-adjacent review urgency because approval gating is part of the action-authorization model.
- **[#2966](https://github.com/nanocoai/nanoclaw/pull/2966) — Provider errors misclassified as completed.** Marked draft; maintainer decision needed on semantics (should this change wire format / dashboards?). Not blocking, but the longer it sits, the more `completed` data accumulates that may need backfill.
- **[#2873](https://github.com/nanocoai/nanoclaw/pull/2873) — `/update-skills` refresh-of-code.** Closes a directly user-reported workflow gap (#2868); would be a high-satisfaction win if merged.

**Maintainer action items, ranked:**
1. Triage [#2970](https://github.com/nanocoai/nanoclaw/issues/2970) and ship webhook auth alongside [#2975](https://github.com/nanocoai/nanoclaw/pull/2975).
2. Fast-track the security trio: [#2800](https://github.com/nanocoai/nanoclaw/pull/2800), [#2973](https://github.com/nanocoai/nanoclaw/pull/2973), [#2974](https://github.com/nanocoai/nanoclaw/pull/2974).
3. Decide on [#1598](https://github.com/nanocoai/nanoclaw/pull/1598) and [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) inclusion for the next minor.
4. Resolve semantics on [#2966](https://github.com/nanocoai/nanoclaw/pull/2966) to avoid silent observability debt.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-08

## 1. Today's Overview

IronClaw is showing **high engineering velocity but elevated quality signal noise** on 2026-07-08. Across the last 24 hours the repository saw 50 PR updates (38 open, 12 closed) and 6 issue updates (5 open, 1 closed), with no new releases. Activity is dominated by a coordinated **default-setters refactor stack** (~7 PRs from `ilblackdragon` against base #5791) and a parallel **reborn model-gateway guard fix series** (`pranavraja99`), suggesting a focused hardening pass. Concurrently, the **nightly E2E pipeline is red** (#4108) and a daily failure-taxonomy issue (#5788) tracks a 3-of-4 pinchbench non-pass rate, indicating ongoing stability work in the CI lane rather than user-facing regressions.

## 2. Releases

**No new releases in the last 24 hours.** The staging release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) is still open and proposes the next published versions:

- `ironclaw_common`: 0.4.2 → **0.5.0** (⚠ API breaking)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible)
- `ironclaw_skills`: 0.3.0 → **0.4.0** (⚠ API breaking)
- `ironclaw`: 0.24.0 → **0.29.1** (largest jump; includes 5 patch bumps)
- `ironclaw_skill_learning`: 0.1.0 → 0.1.1 (compatible)

⚠ **Migration watch:** consumers of `ironclaw_common` and `ironclaw_skills` will need to review breaking API changes before adopting 0.5.0 / 0.4.0. The five-patch jump on the top-level `ironclaw` crate (0.24.0 → 0.29.1) should be assumed to bundle the Slack-OAuth/WebUI v2 stack ([#5643](https://github.com/nearai/ironclaw/pull/5643)) and WASM tool install ([#5499](https://github.com/nearai/ironclaw/pull/5499)) unless the release PR is split.

## 3. Project Progress

**Merged/closed in the last 24h (12 of 50 updated PRs closed):**

- **[#5749](https://github.com/nearai/ironclaw/pull/5749) — CLOSED — `feat(filesystem): CAS-guarded delete_if_version on RootFilesystem` (XL, low risk).** Adds a compare-and-swap delete primitive to the root filesystem, unblocking the subagent await-edge durability design (P1.0b merge gate). This is foundational infrastructure for crash-safe subagent completion delivery.
- **[#5748](https://github.com/nearai/ironclaw/pull/5748) — CLOSED — `docs(reborn): canonical subagent thread-harness design` (M, low risk).** Lands the accepted design doc for the subagent completion-delivery and durability layer, formalising how parent threads learn of descendant settlement and survive restarts.
- **[#5789](https://github.com/nearai/ironclaw/pull/5789) — CLOSED — `fix(reborn): deterministic pairing-code TTL clock` (M, low risk).** Resolves the flaky test `slack_pairing_redeem_rejects_expired_code` by switching from a paused `tokio` clock to a deterministic clock for TTL assertions, fixing the underlying race in [#5787](https://github.com/nearai/ironclaw/issues/5787).
- **[#5550](https://github.com/nearai/ironclaw/pull/5550) — CLOSED — `chore(deps): bump the everything-else group (13 updates)` (XL, low risk).** Dependency refresh, including `agent-client-protocol` 0.10.4 → 1.1.0.

**Open feature PRs advancing (not yet merged):**

- [#5499](https://github.com/nearai/ironclaw/pull/5499) — WASM tool install from zip with env-provisioned tenant-shared credentials (part 1 of #5459).
- [#5525](https://github.com/nearai/ironclaw/pull/5525) — Private tool installs for non-admin SSO users (part 2 of #5459).
- [#5643](https://github.com/nearai/ironclaw/pull/5643) — Collapsed Slack personal OAuth + WebUI v2 Slack remodel (absorbs the previously-stacked #5643–#5646 series).

**Refactor PRs in flight:** 7 coordinated "default setters" PRs from `ilblackdragon` ([#5807](https://github.com/nearai/ironclaw/pull/5807), [#5808](https://github.com/nearai/ironclaw/pull/5808), [#5809](https://github.com/nearai/ironclaw/pull/5809), [#5810](https://github.com/nearai/ironclaw/pull/5810), [#5811](https://github.com/nearai/ironclaw/pull/5811), [#5812](https://github.com/nearai/ironclaw/pull/5812), [#5813](https://github.com/nearai/ironclaw/pull/5813), [#5814](https://github.com/nearai/ironclaw/pull/5814), [#5815](https://github.com/nearai/ironclaw/pull/5815)) are stacked on base [#5791](https://github.com/nearai/ironclaw/pull/5791), replacing sparse struct literals with builder-style setters across trace, skill-activation, runtime-policy, event-projection, turn-state, memory, extension-resource, loop-support, and WASM fixtures. This is a substantial code-hygiene pass touching most subsystems.

## 4. Community Hot Topics

Comment volume across the listed items is uniformly low (≤4 comments), with most PRs showing **0 comments** — indicating either low community engagement or that all listed PRs are still in review. The most-discussed issues today are:

- **[#5702](https://github.com/nearai/ironclaw/issues/5702) — 4 comments — GitHub integration HTTP 403 on issue search/create.** P2 bug. Underlying need: the agent's ability to interact with GitHub issues end-to-end (read + write) is a primary user expectation of an "agent" assistant; a 403 breaks a major advertised capability. This likely indicates a token-scope, permissions, or proxy regression in the GitHub channel.
- **[#5705](https://github.com/nearai/ironclaw/issues/5705) — 2 comments — Terminal icon in chat UI cannot be disabled.** P3 UI affordance bug. Underlying need: users want a customisable chat surface that hides unused entry points; tied to #5555 (terminal floating button overlap), suggesting broader terminal-UI ergonomics is now a recurring complaint class.
- **[#5557](https://github.com/nearai/ironclaw/issues/5557) — 2 comments — Logs deep link requires two clicks to load selected conversation.** P3. Underlying need: routine-to-logs traceability is a core observability workflow; a one-shot link is table stakes for shareable debug URLs.

The strongest "engagement" signal in the codebase today is the model-gateway guard fix series, which directly responds to the 3-of-4 pinchbench non-pass result in [#5788](https://github.com/nearai/ironclaw/issues/5788).

## 5. Bugs & Stability

**Ranked by severity:**

| Sev | Issue | Status | Fix PR |
|---|---|---|---|
| **P2** | [#5702](https://github.com/nearai/ironclaw/issues/5702) — GitHub issue search/create returns HTTP 403 | Open, 4 comments | None linked |
| **P2** | [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed (web-regressions job) at commit `fab83e9f`, 2026-07-08 04:16 UTC | Open, auto-reported | None linked |
| **P3** | [#5705](https://github.com/nearai/ironclaw/issues/5705) — Terminal icon in chat UI not disableable | Open | None linked |
| **P3** | [#5557](https://github.com/nearai/ironclaw/issues/5557) — Logs deep link needs two clicks | Open | None linked |
| **Flaky** | [#5787](https://github.com/nearai/ironclaw/issues/5787) — `slack_pairing_redeem_rejects_expired_code` flake (tokio-paused clock vs chrono wall-clock TTL race) | **Closed** | ✅ [#5789](https://github.com/nearai/ironclaw/pull/5789) merged |
| **Taxonomy** | [#5788](https://github.com/nearai/ironclaw/issues/5788) — Daily failure taxonomy: 3-of-4 pinchbench non-pass (run `5b5e0e46…`), reproduces prior run's dominant failure mode | Open, tracking | Mitigated by [#5782](https://github.com/nearui/ironclaw/pull/5782) and [#5817](https://github.com/nearai/ironclaw/pull/5817) in flight |

**Reborn model-gateway regressions** are the most acute cluster: [#5782](https://github.com/nearai/ironclaw/pull/5782) (overzealous capability-id guard firing on code refs like `"use playwright.sync_api"`) and [#5817](https://github.com/nearai/ironclaw/pull/5817) (the same guard treating decimal numbers as capability ids) are both in review. Both are M-sized, low-risk, and authored by `pranavraja99` — they should land together to address the pinchbench non-pass pattern tracked in #5788.

## 6. Feature Requests & Roadmap Signals

User-driven and maintainer-driven signals point strongly at the following landing in the next release (driven by [#5598](https://github.com/nearai/ironclaw/pull/5598)):

1. **Slack personal OAuth + WebUI v2 remodel** ([#5643](https://github.com/nearai/ironclaw/pull/5643)) — the largest UX-visible change in flight, including JS test coverage in CI.
2. **WASM tool install via zip + tenant-shared credentials** ([#5499](https://github.com/nearai/ironclaw/pull/5499)) — part 1 of #5459, enabling admin-imported WASM tools.
3. **Private tool installs for SSO users** ([#5525](https://github.com/nearai/ironclaw/pull/5525)) — part 2 of #5459, allowing self-service tool activation without admin intervention.
4. **CAS-guarded delete on RootFilesystem** ([#5749](https://github.com/nearai/ironclaw/pull/5749), closed) — durability layer for the subagent await-edge design.
5. **Subagent thread-harness design** ([#5748](https://github.com/nearui/ironclaw/pull/5748), closed) — design doc; PR work likely to follow.

**Implied next-version roadmap:** the 0.24.0 → 0.29.1 jump on the top-level crate strongly suggests the maintainers are bundling the Slack-OAuth stack, WASM tool install, and at least the subagent durability primitives into a single 0.29.x release train.

## 7. User Feedback Summary

The 24-hour window contains **no high-reaction (👍 ≥ 1) feedback** on any tracked item; 👍 counts are 0 across all listed issues and PRs. Pain points observable from the data:

- **GitHub integration is broken** ([#5702](https://github.com/nearai/ironclaw/issues/5702)) — the most-upvoted-style "frustration signal" of the day (4 comments). Users cannot perform issue search or create through the agent despite the integration being configured. This is a top-of-funnel capability loss.
- **Chat UI affordance bloat** ([#5705](https://github.com/nearui/ironclaw/issues/5705)) — a small but revealing complaint: users want the ability to *hide* a UI element they don't use, signalling an emerging demand for **per-feature UI customisation** (and possibly user-level feature flags).
- **Observability workflow friction** ([#5557](https://github.com/nearai/ironclaw/issues/5557)) — logs deep links don't load the targeted conversation on first click, which is a classic shareable-URL correctness bug; users have to retrain muscle memory to double-click.
- **CI stability concerns** ([#4108](https://github.com/nearai/ironclaw/issues/4108), [#5788](https://github.com/nearai/ironclaw/issues/5788)) — the nightly E2E failure and 3-of-4 pinchbench non-pass are visible to anyone watching the project health dashboard, but are not direct user complaints.

Overall, the day is dominated by **internal quality work** (refactors, gateway guards, flaky-test fixes) more than external user demand, which is a healthy mid-cycle signal for a project at this version depth.

## 8. Backlog Watch

Items needing maintainer attention — either old or with no clear owner:

- **[#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failure, opened 2026-05-27 (42 days old).** Has 0 comments, no linked fix PR, and the most recent failure was *today* (2026-07-08 04:16 UTC, run 28916570137, commit `fab83e9f`). This is a long-standing CI flake/regression with no owner and deserves triage.
- **[#5557](https://github.com/nearai/ironclaw/issues/5557) — Logs deep link two-click bug, opened 2026-07-02 (6 days old).** P3, 2 comments, no linked fix. A contained UI bug; could likely be picked up by anyone familiar with the router logic.
- **[#5702](https://github.com/nearai/ironclaw/issues/5702) — GitHub 403, opened 2026-07-06 (2 days old).** P2, 4 comments, no fix PR. Given it's a 403 with an "operation_failed" status, the fix is likely small (auth/scope/proxy config) but currently blocked on someone with GitHub integration context.
- **[#5705](https://github.com/nearai/ironclaw/issues/5705) — Terminal icon disable, opened 2026-07-06 (2 days old).** P3, 2 comments, no fix. The fact that it's explicitly linked to #5555 indicates the terminal UI is a **mini-thicket** of small UX issues that may benefit from a dedicated "terminal UI cleanup" issue.
- **[#5598](https://github.com/nearai/ironclaw/pull/5598) — Release PR, opened 2026-07-03 (5 days old).** Release-blocking, still open, with breaking API bumps in `ironclaw_common` and `ironclaw_skills`. Needs maintainer sign-off to actually cut the release and clear the backlog of dependent PRs.
- **[#5643](https://github.com/nearai/ironclaw/pull/5643) — Slack personal OAuth collapsed stack, opened 2026-07-04 (4 days old), XL size, multi-scope.** This is the highest-risk unmerged feature in the queue (medium risk, scope spans channel/web/tool/builtin/pairing/ci/docs/dependencies). It is on the critical path for the next release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-08

## 1. Today's Overview

LobsterAI shows high development velocity with **17 PR updates** and **6 issue updates** in the last 24 hours, culminating in a new release (**2026.7.7**). The project is in a strong maintenance phase: 13 of 17 PRs were merged/closed, and a release branch (`release/2026.7.6`) was successfully merged back into main. However, the day is also marked by a **notable cluster of three security advisories** (Issues #2286, #2287, #2288) reported by researcher YLChen-007, covering local token proxy exposure, NIM file exfiltration, and HTML preview symlink disclosure. These warrant immediate maintainer triage. Overall project health is active, but security response time will be the key signal to watch.

## 2. Releases

### 🚀 2026.7.7 — Released 2026-07-07
- **UI/UX**: Scheduled task list card redesign with status chip, toggle, search, and optimistic UI feedback ([PR #2273](https://github.com/netease-youdao/LobsterAI/pull/2273))
- **Provider integration**: xAI (Grok) OAuth login support added ([PR by @fisherdaddy](https://github.com/netease-youdao/LobsterAI))
- **Build**: Continuation of the 2026.7.6 release line merged into main ([PR #2291](https://github.com/netease-youdao/LobsterAI/pull/2291))

No breaking changes or migration notes were indicated in the release notes. Users upgrading from 4.x should monitor the still-open "严重bug" issue (#1400, now closed) for stable startup behavior.

## 3. Project Progress (Merged/Closed PRs)

A productive day with **13 PRs closed/merged**:

| Area | PR | Highlight |
|------|-----|-----------|
| **Agent collaboration** | [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) | New delegated subagent collaboration with explicit allowlists and Cowork child sessions |
| **Cowork UX** | [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292), [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289), [#2268](https://github.com/netease-youdao/LobsterAI/pull/2268) | Queued steer follow-ups, stalled-compaction retry cleanup, compact add-menu width restoration |
| **Email skill** | [#2275](https://github.com/netease-youdao/LobsterAI/pull/2275) | Multi-account support for `imap-smtp-email`, account management UI, legacy `.env` compatibility |
| **Scheduled tasks** | [#2290](https://github.com/netease-youdao/LobsterAI/pull/2290) | User-selectable notify targets |
| **Analytics** | [#2245](https://github.com/netease-youdao/LobsterAI/pull/2245) | Edge-case fixes across skills, IM, sidebar, custom model edits, scheduled task cron weekday reporting |
| **Security (older)** | [#1401](https://github.com/netease-youdao/LobsterAI/pull/1401) | Replace predictable `Math.random()` SSE request IDs with `crypto.randomUUID()` |
| **Bug fixes (stale)** | [#1402](https://github.com/netease-youdao/LobsterAI/pull/1402), [#1403](https://github.com/netease-youdao/LobsterAI/pull/1403), [#1406](https://github.com/netease-youdao/LobsterAI/pull/1406) | Multi-select attachments, missing `delete` i18n key, IM notify channel fallback |

The merge of `release/2026.7.6` into main ([#2291](https://github.com/netease-youdao/LobsterAI/pull/2291)) aggregates the work of the past sprint into a stable baseline.

## 4. Community Hot Topics

**Most active items by comment count:**

- **[#1400 — Gateway infinite restart loop on 3.30→4.1 upgrade](https://github.com/netease-youdao/LobsterAI/issues/1400)** — 7 comments, user reports the app is "彻底瘫痪" (completely paralyzed), with secondary complaint about `qwen3.5-plus` failing because `web-extractor` cannot start without `web-search`. **Status: Closed today** (likely auto-stale-closure; user should verify whether issue is truly resolved).
- **[#2293 — Cross-agent "关于你"/USER.md content syncing](https://github.com/netease-youdao/LobsterAI/issues/2293)** — 1 comment, opened yesterday. User reports editing the "About You" page or USER.md in one agent unexpectedly syncs to all other agents, breaking the ability to maintain per-agent contexts. Likely a bug in how the renderer or backend stores USER.md, possibly tied to the new delegated subagent feature in PR #2285.
- **[#1348 — No validation on duplicate scheduled task names](https://github.com/netease-youdao/LobsterAI/issues/1348)** — 1 comment, stale. UX/data-integrity issue.

**Underlying needs:** Multi-agent identity isolation, predictable upgrade paths, and a clear error model for missing integrations (`web-extractor` → `web-search` dependency) are recurring themes.

## 5. Bugs & Stability

**🔴 High Severity — Newly Reported Security Advisories (all by @YLChen-007, opened 2026-07-07):**

1. **[#2288 — HTML preview server symlink disclosure](https://github.com/netease-youdao/LobsterAI/issues/2288)** — Localhost preview server's lexical `path.resolve` check can be bypassed via in-root symlinks, allowing arbitrary local file disclosure. **No fix PR yet.**
2. **[#2287 — NIM outbound media file exfiltration](https://github.com/netease-youdao/LobsterAI/issues/2287)** — Assistant-generated absolute local file paths are treated as outbound media attachments in the NIM flow; an approved remote can exfiltrate host files. **No fix PR yet.**
3. **[#2286 — Unauthenticated local token proxy](https://github.com/netease-youdao/LobsterAI/issues/2286)** — The loopback HTTP token proxy for `lobsterai-server` provider has no auth, letting any local process replay the victim's authenticated server-model API capability. **No fix PR yet.**

**🟡 Medium Severity:**

- **[#1400](https://github.com/netease-youdao/LobsterAI/issues/1400)** — 3.30→4.1 upgrade loop with gateway restart failure. *Fix PR existence:* None visible today. **Closed as stale** but user had provided contact info; recommend maintainer follow-up.
- **[#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)** — Cross-agent USER.md sync. *Fix PR existence:* None yet — may interact with PR #2285's subagent allowlist logic.

**🟢 Low Severity / Recently Fixed:**

- SSE request-ID predictability ([#1401](https://github.com/netease-youdao/LobsterAI/pull/1401)) ✅ fixed
- Multi-select attachment only keeping last file ([#1402](https://github.com/netease-youdao/LobsterAI/pull/1402)) ✅ fixed
- Missing `delete` i18n key ([#1403](https://github.com/netease-youdao/LobsterAI/pull/1403)) ✅ fixed
- IM notify channel empty fallback ([#1406](https://github.com/netease-youdao/LobsterAI/pull/1406)) ✅ fixed
- Stalled compaction retry cleanup ([#2289](https://github.com/netease-youdao/LobsterAI/pull/2289)) ✅ fixed

## 6. Feature Requests & Roadmap Signals

- **Per-agent context isolation** ([#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)) — Strong likelihood of inclusion in the **2026.7.8 or 2026.7.9** patch line, since it directly affects the just-shipped subagent collaboration feature ([#2285](https://github.com/netease-youdao/LobsterAI/pull/2285)).
- **Scheduled task UX suite** — A large cluster of merged work (PRs #2273, #2290, plus the older #1347, #1404) signals a deliberate "scheduled-tasks polish" theme. Expect this to continue into 2026.7.8.
- **Multi-account email skill** ([#2275](https://github.com/netease-youdao/LobsterAI/pull/2275)) — Already merged; expect related credential-management UX in the next release.
- **Provider expansion** — xAI/Grok OAuth support in 2026.7.7 suggests the project is intentionally broadening the provider matrix. More providers likely to follow.
- **Skills management module** ([PR #1346](https://github.com/netease-youdao/LobsterAI/pull/1346) — still open, stale since 2026-04-02) — Long-pending major feature; needs maintainer decision.

## 7. User Feedback Summary

- **Frustration — upgrade pain:** The v3.30→v4.1 user in [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) escalated by sharing email and WeChat contact info, indicating the official channels did not yield a timely response.
- **Confusion — hidden dependencies:** The same issue revealed that `web-extractor` requiring `web-search` is non-obvious and produces a misleading error, harming trust.
- **Workflow breakage — agent isolation:** [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) shows users expect per-agent personas to behave like independent workspaces; current syncing behavior breaks that mental model.
- **Positive momentum:** The 2026.7.7 release notes (Grok login, scheduled-task redesign, subagent collaboration) indicate the team is shipping meaningful user-facing improvements at a healthy cadence.

## 8. Backlog Watch

Items at risk of being overlooked; maintainer attention recommended:

| Item | Type | Age | Concern |
|------|------|-----|---------|
| [PR #1346 — Skills management module](https://github.com/netease-youdao/LobsterAI/pull/1346) | Feature PR, **stale** | ~3 months | Large feature work that was revised per "official requirements" but no reviewer movement |
| [PR #1347 — Cron custom scheduling for scheduled tasks](https://github.com/netease-youdao/LobsterAI/pull/1347) | Feature PR, **stale** | ~3 months | Substantial UI/UX improvement that may have been superseded by #2273/#2290 in 2026.7.7 — needs closure/merge decision |
| [PR #1277 — Electron 40.2.1 → 43.0.0 bump (Dependabot)](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependency update | ~3 months | Major-version Electron upgrade still open; relevant to the 4.x startup issues in #1400 |
| [Issue #1348 — Duplicate scheduled task name validation](https://github.com/netease-youdao/LobsterAI/issues/1348) | Bug, **stale** | ~3 months | Trivial fix; should ride along with the scheduled-task release train |
| **Security cluster** [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) / [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) / [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) | Security advisories | <24h | Highest priority — public disclosure with PoC; recommend accelerated patch release (e.g., 2026.7.8-security) |

---

**Bottom line:** LobsterAI's release velocity and contributor activity are strong, but the simultaneous disclosure of three local-attack-surface security advisories makes the next 48–72 hours of maintainer response the most important signal of project maturity this week.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-07-08

## 1. Today's Overview

TinyClaw experienced an exceptionally concentrated day of activity, with **all 9 issues** updated in the last 24 hours being **newly opened security advisories** filed by a single reporter (`YLChen-007`) on 2026-07-07. Every advisory is themed around the same root cause: **the local control-plane API is exposed without authentication or authorization checks**, enabling a wide range of attacks including system prompt overwrite, daemon restart, path traversal, file exfiltration, log spoofing, and bypass of Claude's dangerous-tool confirmation. No pull requests were opened, merged, or closed, no new releases were published, and no community engagement (comments, reactions) has yet appeared on any of the new issues. The project is effectively in a **critical security incident state** with no remediation activity visible in the public repository.

## 2. Releases

No new releases in the last 24 hours. No version published on 2026-07-08.

## 3. Project Progress

- **Merged PRs today:** 0
- **Closed PRs today:** 0
- **Opened PRs today:** 0

No code-level progress was committed to the repository in the last 24 hours. No features advanced and no bugs were fixed in this window.

## 4. Community Hot Topics

All 9 of the newest issues are open and currently have **0 comments and 0 reactions**, indicating the report has not yet drawn public discussion. Nevertheless, by topic volume the dominant theme is unambiguous:

| Rank | Issue | Title | Link |
|------|-------|-------|------|
| 1 | #294 | Unauthenticated control-plane routes allow system prompt overwrite and daemon restart | [Link](https://github.com/TinyAGI/tinyagi/issues/294) |
| 2 | #293 | Unauthenticated agent ID path traversal escapes the configured workspace root | [Link](https://github.com/TinyAGI/tinyagi/issues/293) |
| 3 | #292 | Unauthenticated administrative API allows persistent settings and agent prompt modification | [Link](https://github.com/TinyAGI/tinyagi/issues/292) |
| 4 | #291 | Anthropic Adapter Disables Claude Dangerous-Tool Confirmation | [Link](https://github.com/TinyAGI/tinyagi/issues/291) |
| 5 | #290 | Terminal Escape Injection via `POST /api/message` Allows Operator Log Spoofing | [Link](https://github.com/TinyAGI/tinyagi/issues/290) |
| 6 | #289 | Unauthenticated API callers can exfiltrate arbitrary local files via outbound channel attachments | [Link](https://github.com/TinyAGI/tinyagi/issues/289) |
| 7 | #288 | Unauthenticated local control plane leaks live events and allows persistent settings modification | [Link](https://github.com/TinyAGI/tinyagi/issues/288) |
| 8 | #287 | Unauthenticated Pairing Management API Allows Arbitrary Approval of Pending Channel Senders | [Link](https://github.com/TinyAGI/tinyagi/issues/287) |
| 9 | #286 | Unauthenticated Local Control API Allows Persistent Settings Mutation, Agent Prompt Overwrite, and Event Stream Access | [Link](https://github.com/TinyAGI/tinyagi/issues/286) |

**Underlying need:** The cluster of advisories points to a single architectural gap — the absence of an authentication/authorization layer on the localhost control plane. Users (and same-host processes) implicitly need a trust boundary between the agent runtime and the API surface that mutates persistent state, restarts daemons, executes tools, or streams live events.

## 5. Bugs & Stability

Today's issues are classified as **Security**, not stability bugs, but the security findings have direct stability implications. Severity ranking based on blast radius:

| Severity | Issue | Impact | Fix PR Available? |
|----------|-------|--------|-------------------|
| **Critical** | [#291](https://github.com/TinyAGI/tinyagi/issues/291) | Anthropic CLI launched with `--dangerously-skip-permissions` for **all** unauthenticated requests → arbitrary tool execution, file mutation, command execution via Claude | No |
| **Critical** | [#289](https://github.com/TinyAGI/tinyagi/issues/289) | Unauthenticated file exfiltration via outbound channel attachments | No |
| **Critical** | [#293](https://github.com/TinyAGI/tinyagi/issues/293) | Path traversal via agent id `..` escapes workspace root | No |
| **Critical** | [#294](https://github.com/TinyAGI/tinyagi/issues/294) | System prompt overwrite + daemon restart by unauthenticated client | No |
| **High** | [#292](https://github.com/TinyAGI/tinyagi/issues/292), [#286](https://github.com/TinyAGI/tinyagi/issues/286), [#288](https://github.com/TinyAGI/tinyagi/issues/288) | Persistent settings & agent prompt modification; SSE event stream exposure | No |
| **High** | [#287](https://github.com/TinyAGI/tinyagi/issues/287) | Arbitrary approval of pending channel senders — undermines channel trust model | No |
| **Medium** | [#290](https://github.com/TinyAGI/tinyagi/issues/290) | Terminal escape injection / log spoofing (mostly social-engineering / observability impact) | No |

**No fix pull requests exist for any of the 9 issues.** The repository is in an unpatched state with respect to every reported vulnerability.

## 6. Feature Requests & Roadmap Signals

The issues today are framed as security advisories rather than feature requests, but the implied roadmap is clear:

- **Authentication / authorization layer for the local control plane** — implicit request across #286, #288, #292, #294. Almost certainly the first item on the next release's changelog.
- **Input validation / path canonicalization** for agent IDs and outbound file paths (from #293, #289).
- **Sandbox / safe-mode for the Anthropic adapter** — drop or condition the unconditional `--dangerously-skip-permissions` flag (from #291).
- **Structured / sanitized logging** of inbound message content (from #290).
- **Pairing endpoint hardening** with operator consent flow (from #287).

Predicted next-version signals: a single **security-focused patch release** that adds an auth middleware (likely token or loopback-only binding), tightens path handling, and removes the unconditional Claude permission skip. Versioning bump direction (patch vs. minor) depends on whether the maintainer treats the auth layer as a breaking change for existing local integrations.

## 7. User Feedback Summary

The only feedback signal in the last 24 hours is the security report cluster from `YLChen-007`. The pain points expressed through the advisory descriptions are:

- **No local trust boundary.** Users expect a localhost API to at minimum be bound to loopback, require a token, or be paired before mutating persistent state. TinyClaw's design treats "reachable" as "authorized," which does not match operator expectations.
- **Tool execution without confirmation.** End-users of Claude expect Anthropic's own dangerous-tool confirmation prompt; the adapter short-circuits this universally.
- **Channel trust eroded.** Pairing codes that can be approved by anyone on the host defeat the pairing-based trust model that channels depend on.
- **Log integrity.** Operators cannot trust terminal logs as a forensic record when message content is rendered raw to the terminal.

No satisfaction signal exists; this is purely a defect report cycle.

## 8. Backlog Watch

There are no PRs in the backlog from today (the PR pipeline is empty). On the issue side, the highest-priority items requiring **immediate maintainer attention** are:

- [#291](https://github.com/TinyAGI/tinyagi/issues/291) — Anthropic `--dangerously-skip-permissions` (highest blast radius, likely the easiest quick fix: gate the flag on an authenticated/local context).
- [#294](https://github.com/TinyAGI/tinyagi/issues/294) — system prompt overwrite + daemon restart.
- [#289](https://github.com/TinyAGI/tinyagi/issues/289) — arbitrary local file exfiltration.
- [#293](https://github.com/TinyAGI/tinyagi/issues/293) — workspace path traversal.

**Maintainer action gap:** 9 critical-class security issues opened, **0 responses, 0 triage labels, 0 linked PRs, 0 community comments, 0 reactions** as of the data snapshot. The repository currently shows no public maintainer activity responding to the disclosure. This is the single most important backlog signal in the project today.

---

*Digest generated from public GitHub activity on 2026-07-08. Data window: previous 24 hours.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-08

> ⚠️ **Note on naming:** The project is referred to as "CoPaw" in the prompt context but is tracked on GitHub under `agentscope-ai/QwenPaw`. All links below use the QwenPaw repository.

---

## 1. Today's Overview

CoPaw/QwenPaw shows **very high development velocity** today: 17 issues updated, 36 PRs touched, and a new beta release (v2.0.0-beta.3) shipped. The activity is dominated by **stability work** around the v2.0 beta line — particularly a cluster of scroll-context-compression bugs that were all addressed by a single consolidated PR (#5765). The project also shows strong external contribution momentum, with several "first-time-contributor" PRs landing across channels, tooling, and console UX. Overall, the project is in a healthy pre-release hardening phase for v2.0, with active triage on both 1.x and 2.x issues.

---

## 2. Releases

### [v2.0.0-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.3) — *Released 2026-07-08*

A beta release of the upcoming v2.0 line. Visible changes:

- **`fix(ci): guard empty extra_flags expansion for bash 3.2 on macOS`** — [#5743](https://github.com/agentscope-ai/QwenPaw/pull/5743) by @yutai78786. Fixes CI breakage on the stock macOS bash.
- **`feat(auth): enhance rate limiting with multi-dimensional protection`** — [#5738](https://github.com/agentscope-ai/QwenPaw/pull/5738) by @zhijianma. Hardens the auth layer against abuse.
- *(Additional changelog entries were truncated in the source data; full notes on the release page.)*

**Migration / install verification:**
- Pre-release verification ticket [#5833](https://github.com/agentscope-ai/QwenPaw/issues/5833) ran through installation checkpoints (closed after passing).
- A follow-up version bump PR [#5837](https://github.com/agentscope-ai/QwenPaw/pull/5837) (`2.0.0b4`) was already opened today, indicating rapid iteration on the beta line.

> Heads-up: at least one user-reported regression ([#5846](https://github.com/agentscope-ai/QwenPaw/issues/5846)) suggests the "tools auto-execute / no approval" mode still shows approval pop-ups in `v2.00b3` — worth flagging before promoting to RC.

---

## 3. Project Progress

### Merged / closed PRs (16 total — top items)

| PR | Title | Impact |
|----|-------|--------|
| [#5765](https://github.com/agentscope-ai/QwenPaw/pull/5765) | **fix(scroll): protect the active turn, add graduated pressure relief** | **Major.** Closes three bug reports at once (#5746, #5776, #5778). The most impactful stability fix of the day. |
| [#5747](https://github.com/agentscope-ai/QwenPaw/pull/5747) | Protect active turn from scroll context eviction | Phase-1 patch, now superseded by #5765. |
| [#5675](https://github.com/agentscope-ai/QwenPaw/pull/5675) | Remove hardcoded 10k input character limit | First-time-contributor PR. Addresses #5670. |
| [#5845](https://github.com/agentscope-ai/QwenPaw/pull/5845) | Enable long text upload regression config | Bumps `@agentscope-ai/chat` to `1.1.72-beta.1783486011173`, enables `sender.longTextUpload`, and **restores** the 10k `maxLength` default — showing the team chose a long-text-upload UX rather than fully unlimited input. |
| [#5839](https://github.com/agentscope-ai/QwenPaw/pull/5839) | Add static `project.urls` for GitHub dependency graph | Fixes broken PyPI↔GitHub linkage for the `qwenpaw` package. |
| [#5837](https://github.com/agentscope-ai/QwenPaw/pull/5837) | Bump version 2.0.0b4 | Version bump following beta.3. |

### Notable open PRs advancing the codebase

- [#5838](https://github.com/agentscope-ai/QwenPaw/pull/5838) — Upgrade to **AgentScope 2.0.4 / ReMe 0.4.0.8** with safer runtime/session interruption handling and refreshed `ReMeLight` memory docs.
- [#5847](https://github.com/agentscope-ai/QwenPaw/pull/5847) — `tool_safety` toggle for **cron jobs** to control approval prompts.
- [#5801](https://github.com/agentscope-ai/QwenPaw/pull/5801) — **New Zalo Bot channel** (Vietnam, 100M+ users), polling-only mode (no public HTTPS needed).
- [#5840](https://github.com/agentscope-ai/QwenPaw/pull/5840) — `show_file` option for `grep_search` to declutter long filenames in match output.
- [#5843](https://github.com/agentscope-ai/QwenPaw/pull/5843) — Closes `find -delete` sandbox bypass (fixes [#5842](https://github.com/agentscope-ai/QwenPaw/issues/5842)).
- [#5814](https://github.com/agentscope-ai/QwenPaw/pull/5814) — Bundle a Node.js runtime with the Tauri desktop package so ACP agents can run `npx` without requiring users to install Node.
- [#5823](https://github.com/agentscope-ai/QwenPaw/pull/5823) — Feishu: send Markdown images as native image parts (Markdown image syntax isn't rendered natively).
- [#5848](https://github.com/agentscope-ai/QwenPaw/pull/5848) — Label un-headlined evicted spans in the scroll eviction index (reduces the "(no milestone)" orphan lines).
- [#5841](https://github.com/agentscope-ai/QwenPaw/pull/5841) — Recover whitespace-prefixed tool-call JSON arguments in `tool_message_utils`.
- [#5844](https://github.com/agentscope-ai/QwenPaw/pull/5844) — Port openclaw's real-behavior-proof PR policy and wire `pr-spam-gate` into `tests.yml`.
- [#5813](https://github.com/agentscope-ai/QwenPaw/pull/5813) — 43 regression unit tests pinning install/runtime/tool-call/LLM-acquire/security issues.
- [#5845](https://github.com/agentscope-ai/QwenPaw/pull/5845) (merged) — Long-text-upload UX.

---

## 4. Community Hot Topics

Ranked by comment activity.

### Issues

- **[#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) — *15 comments* (still OPEN)** — Console frontend crashes on sessions with large tool-use history. `agentscope_msg_to_message()` returns `type: "data"` content blocks that the renderer doesn't handle. *This is the most-discussed open bug.* No merged fix yet.
- **[#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) — *6 comments* (still OPEN)** — Sessions >500 KB fail to render in Web UI ("Unexpected error rendering this page"). A frontend performance issue, no fix merged.
- **[#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) — *5 comments* (CLOSED)** — Browser lag during streaming output on Console (Cloud + Windows + Chrome). User noted DeepSeek doesn't have this issue.
- **[#5416](https://github.com/agentscope-ai/QwenPaw/issues/5416) — *5 comments* (CLOSED)** — Thinking/reasoning_content not surfaced; user can't see model reply when `content` is empty but `thinking` is populated (e.g. stepfun/step-3.5).
- **[#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) — *4 comments* (CLOSED)** — scroll compression folded the active `/heartbeat` task, causing the bot to reply to an old "你好呀" message. **Fixed** by [#5765](https://github.com/agentscope-ai/QwenPaw/pull/5765).
- **[#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784) — *3 comments* (still OPEN)** — Compression threshold in Agent Config UI shows the wrong provider's `max_input_length` when the same model ID exists across providers. Root cause: missing `provider_id` match.
- **[#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) — *3 comments* (still OPEN)** — Windows `APPCONTAINER` sandbox ACEs with `(OI)(CI)` flags pollute `C:\` / `C:\Users` / `%USERPROFILE%`, breaking Hermes Desktop (Chromium GPU process crash).
- **[#5785](https://github.com/agentscope-ai/QwenPaw/issues/5785) — *3 comments* (CLOSED)** — Coding mode file picker doesn't show hidden (dot-prefixed) folders.

### Underlying needs

1. **Frontend robustness on long sessions / large tool histories.** Issues #5401 and #5479 share the same root pattern: client-side rendering fails when content is large or uses non-trivial block types. This is the top community pain point right now.
2. **Streaming UX polish.** #5725 reflects that real-time streaming still degrades client performance.
3. **Compression / context-engine correctness.** A whole cluster (#5746, #5776, #5778) collapsed into one fix (#5765), indicating the v2.0 scroll strategy is the most error-prone subsystem this week.

---

## 5. Bugs & Stability

### Severity-ranked open bugs

| Sev | Issue | Summary | Fix PR? |
|-----|-------|---------|---------|
| 🔴 High | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | Console white-screens on tool-use-heavy sessions (`type: "data"` not rendered) | ❌ None yet |
| 🔴 High | [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) | Windows AppContainer sandbox ACEs break Chromium-based Electron apps | ❌ None yet |
| 🟠 Med-High | [#5846](https://github.com/agentscope-ai/QwenPaw/issues/5846) | "Tools auto-execute / no approval" mode still prompts approval in v2.00b3 | ❌ None yet |
| 🟠 Med-High | [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | Sessions >500 KB fail to render entirely | 🟡 Partially addressed by [#5845](https://github.com/agentscope-ai/QwenPaw/pull/5845) (`longTextUpload`) |
| 🟠 Med | [#5842](https://github.com/agentscope-ai/QwenPaw/issues/5842) | `find ... -delete` bypasses `file_guard` out-of-workspace deletion check | ✅ Fix in [#5843](https://github.com/agentscope-ai/QwenPaw/pull/5843) (open) |
| 🟠 Med | [#5835](https://github.com/agentscope-ai/QwenPaw/issues/5835) | `/stop` cross-user task cancellation in DingTalk DM (shared `conversation_id` suffix) | ❌ None yet |
| 🟡 Med | [#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784) | Compression threshold UI shows wrong provider's `max_input_length` | ❌ None yet |

### Notable closed bugs today (resolutions worth tracking)

- [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746), [#5776](https://github.com/agentscope-ai/QwenPaw/issues/5776), [#5778](https://github.com/agentscope-ai/QwenPaw/issues/5778) — All three scroll-compression regressions closed by [#5765](https://github.com/agentscope-ai/QwenPaw/pull/5765).
- [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) — Streaming lag closed (likely resolved by [#5845](https://github.com/agentscope-ai/Qwen

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-08

## 1. Today's Overview

ZeroClaw shows **elevated development activity** with 60 total updates (10 issues, 50 PRs) in the last 24 hours and no new releases, indicating active in-flight work rather than ship-day churn. The dominant theme is a coordinated **security and stability push** — SSRF defense layers, auth-token hardening, multi-user auth providers, per-sender authorization, and HTTP security headers — running in parallel with the long-running **SOP visual-authoring** feature and **OpenAI Bridge channel** work. Two P1/high-risk MCP bugs (filter no-op, unbounded RSS growth) remain open and are blockers for the v0.8.x series. Community engagement is moderate-to-low (issues with 0–9 comments; no new release notes), and the close/open ratio (2 closed issues, 3 closed PRs in the visible window vs. many open) suggests the project is in a heavy **land-and-rebase** phase on stacked PRs.

## 2. Releases

No new releases in the last 24 hours. The v0.8.3 tracker ([#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)) remains the active release-support lane covering observability, CI, docs, deps, and install.

## 3. Project Progress

**Closed/merged PRs (visible in last 24h):**
- [#8813](https://github.com/zeroclaw-labs/zeroclaw/pull/8813) — *fix(zerocode): add Global Settings entry to Channels config* (yaotukeji). CLOSED.
- [#8820](https://github.com/zeroclaw-labs/zeroclaw/pull/8820) — *Fix 8757 channels root settings e85b19319* (yaotukeji). CLOSED.
- [#8822](https://github.com/zeroclaw-labs/zeroclaw/pull/8822) — *add discoverable Global Settings entry to Channels config section (#8757)* (yaotukeji). CLOSED.

**Closed issues (last 24h):**
- [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) — *v0.8.1 integration/channel/provider/tool queue and history* tracker. Closed.
- [#8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) — *skill_manage.create action* feature request (runtime agents can save skills as bundles). Closed (likely subsumed or implemented elsewhere).

**Feature areas advancing:**
- **Channel onboarding UX** — Three follow-up PRs (#8823, [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825)) patching Telegram setup errors and expanding docs.
- **Security hardening** — SSRF trilogy ([#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826), [#8827](https://github.com/zeroclaw-labs/zeroclaw/pull/8827)), constant-time token compare ([#8824](https://github.com/zeroclaw-labs/zeroclaw/pull/8824)), and per-sender `/model --agent` authz ([#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690)) all moved forward.

## 4. Community Hot Topics

Most-discussed items in the last 24h:

| # | Type | Title | Comments |
|---|------|-------|----------|
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | Issue | `tool_filter_groups` no-op for MCP tools + no deferred_loading integration | **9** |
| [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) | Issue | v0.8.1 integration/channel/provider/tool queue tracker | 3 |
| [#8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314) | Issue | Hot-reload zeroclaw-log persistence and rotation config | 3 |

**Underlying needs:**
- **#6699 (9 comments)** signals repeated pain from MCP consumers: the filter surface *parses* but does not *enforce* on real MCP tool names, and is not hooked into deferred loading. Reviewers want a single source of truth — directly motivating [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) (centralized `DeferredMcpToolSet::filter_by_policy`) now in flight.
- **#6970** and **#8314** reflect operational/integration friction — users want hot-reload of observability config and want integration work tracked in a single consolidated lane rather than scattered across functional trackers.

## 5. Bugs & Stability

**Ranked by severity (P1/high-risk first):**

| Rank | Issue | Severity | Fix PR? |
|------|-------|----------|---------|
| 1 | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) — `tool_filter_groups` prefix-check bug for MCP tools | P1 / risk:high | Partial — [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) addresses deferred-MCP policy centralization but does not yet fix the prefix gate at `loop_.rs:149` |
| 2 | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — Unbounded RSS growth from MCP/tool-schema cloning in agent loop | P1 / risk:high | **No fix PR open.** Split from #5542; companion restart-storm root cause addressed by #8633 |
| 3 | [#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690) — `/model --agent` writes to an unscoped key (security regression) | P1 / risk:high | **Fix PR open** — `fix/channels): gate /model --agent behind per-sender authorization (#8044)` |
| 4 | [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826), [#8827](https://github.com/zeroclaw-labs/zeroclaw/pull/8827) — `image_gen` SSRF on server-supplied URLs | risk:medium→high (stacked) | **Fix PRs open** (layers 1+2 in #8826, layer 3 in #8827) |
| 5 | [#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797), [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) — Telegram setup references unknown config property; docs mismatch | S3/S2 | **Fix PR open** — [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823) corrects property name; [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825) expands docs |
| 6 | [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) — Deferred-MCP access policy fragmentation | risk:high | Centralization PR open |

**Summary:** Two P1 MCP bugs remain open without a complete fix; the security/authz regression #8690 has a targeted fix in flight. The Telegram documentation drift is actively being patched.

## 6. Feature Requests & Roadmap Signals

**Open feature requests (recent, relevant to next cycle):**
- [#8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314) — *Hot-reload zeroclaw-log persistence/rotation config* — likely lands in **v0.8.3** (already in #8073 tracker lane, accepted).
- [#8828](https://github.com/zeroclaw-labs/zeroclaw/issues/8828) — *Embed Canvas as a right-side collapsible sidebar in chat page* — UX-driven web feature; medium-term.
- [#8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) — *skill_manage.create action* — closed today; action status (implemented elsewhere or declined) needs maintainer confirmation.

**Large features advancing (high signal for next minor release):**
- [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) — *Multi-user auth providers, permission profiles, principal isolation* (XL, RFC #7141). Almost certainly a **v0.9 / breaking-change** candidate — introduces `AuthProvider` registry, `oidc.<alias>`, principal isolation.
- [#8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710) — *OpenAI Bridge channel* (XL, risk:high) — adds OpenAI-compatible HTTP endpoints; big install-base implication (Home Assistant, AnythingLLM, etc.).
- [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) — *SOP visual authoring + git_forge unified forge tool* (XL, risk:high) — the largest open feature; lands SOP `.toml`/`.md` round-trip, node-graph editor, channel fan-in, plus a unified git_forge tool.
- [#8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235) — *runtime-profile `prompt_injection_mode` override* — extends skills config into multi-agent installs.

**Prediction for next version:** **v0.8.3** will likely absorb the observability/CI/docs tracker (#8073), #8314 hot-reload, and the security-layer fixes (#8690, #8824, #8826, #8827, #8829). The multi-user auth (#8672), OpenAI Bridge (#8710), and SOP authoring (#8590) — all XL — point toward a **v0.9.0** that introduces breaking authn/authz changes.

## 7. User Feedback Summary

**Documented pain points (verbatim or paraphrased):**
- *Telegram onboarding is broken:* users hit "unknown configuration property" in `bind-telegram` ([#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797)) and "the documentation is wrong" ([#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810)). Maintainers responded same-day with [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823) and [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825). **Verdict: fast maintainer response.**
- *MCP configuration is silently ineffective:* [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) — operators set `tool_filter_groups` and discover only at runtime that real MCP tools are unaffected. This is a **trust** issue more than a UX issue.
- *Memory growth in agent loop:* [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — tool/schema cloning is unbounded; long-running sessions OOM. **Satisfaction signal: low** for stability-sensitive deployments.
- *Skill authoring ergonomics:* [#8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) — runtime agents fall back to `file_write` because `skill_manage` lacks a `create` action, producing loose `.md` files that the system then refuses to edit. **Verdict: workflow gap acknowledged and closed.**
- *Channels global settings discoverability:* closed cluster (#8757, [#8813](https://github.com/zeroclaw-labs/zeroclaw/pull/8813), [#8822](https://github.com/zeroclaw-labs/zeroclaw/pull/8822)) — users couldn't find `show_tool_calls`, `ack_reactions`, etc. Patched via "Global settings" entry.

**Satisfaction signal:** Mixed but **responsive**. Same-day fixes on user-reported issues (#8797, #8810, #8757) are a positive signal. Negative signal concentrated around MCP runtime correctness and memory stability.

## 8. Backlog Watch

**Important issues/PRs needing maintainer attention:**

| # | Type | Why it needs attention | Last update |
|---|------|------------------------|-------------|
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | P1 bug | No fix PR; memory-growth path is a known OOM root cause for #5542. Only 1 comment. | 2026-07-07 |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | P1 bug | Highest-comment-count item in 24h (9 comments); prefix-gate still open at `loop_.rs:149`; [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) covers only the policy-centralization piece. | 2026-07-07 |
| [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) | XL PR (security) | Multi-user auth/permission-profile PR — high blast radius, needs maintainer review before v0.9. | 2026-07-08 |
| [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) | XL PR | Largest open feature; tracked by [#8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736). 0 comments despite size — needs review kickoff. | 2026-07-08 |
| [#8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736) | Tracker | SOP authoring task tracker is `in-progress` but has **0 comments**; risk:high. | 2026-07-07 |
| [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) | Tracker | v0.8.3 release-support lane has **0 comments** — check whether items are moving or stalled. | 2026-07-08 |

**Maintainer recommendation:** Prioritize review on [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672), [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590), and [#8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710) — three XL PRs with security or install-base implications. Ship-fix candidates for v0.8.3 are [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823), [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825), and the SSRF trilogy (#8826 / #8827 / #8824).

---

*Digest generated 2026-07-08. Data window: GitHub updates in the prior 24 hours.*

</details>