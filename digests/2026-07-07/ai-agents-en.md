# OpenClaw Ecosystem Digest 2026-07-07

> Issues: 175 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-07 03:56 UTC

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

Generated from GitHub data on 175 recently-updated Issues and 500 recently-updated Pull Requests.

---

## 1. Today's Overview

Project activity is **very high**, with 175 issues and 500 pull requests updated in the past 24 hours. The maintainer team appears to be processing a significant backlog: 24 issues were closed and 209 PRs were merged or closed today. No new releases were cut, suggesting the project is in a consolidation phase with focus on landing fixes and reviewing outstanding work. A notable pattern is the **large batch of UTF-16 safety fixes** (15+ PRs authored by @Alix-007), indicating a systematic sweep to address encoding-related truncation bugs across multiple subsystems (media, voice, Discord, Telegram, TTS, agents, web-fetch, etc.).

---

## 2. Releases

**No new releases today.** The latest release remains the previous version; no changelog, migration notes, or breaking changes to report.

---

## 3. Project Progress

**209 PRs merged or closed today** (out of 500 updated). Notable merged/closed items:

| PR | Description | Category |
|---|---|---|
| [#101131](https://github.com/openclaw/openclaw/pull/101131) — *QA-lab credentials-admin response bound* | Bounded response body reading in credential broker to prevent memory exhaustion | QA / Infrastructure |
| [#100438](https://github.com/openclaw/openclaw/pull/100438) — *feat(update): notify extended-stable availability* | Package-installed Gateways on `extended-stable` channel now receive update hints | Gateway / Updates |
| [#101264](https://github.com/openclaw/openclaw/pull/101264) — *fix: block WhatsApp direct sends during reachout timelock* | Prevents false-positive send-acceptance when account is under WhatsApp reachout restriction | WhatsApp Channel |
| [#98624](https://github.com/openclaw/openclaw/pull/98624) — *fix(memory-host-sdk): do not wipe archive on user-typed [cron: prefix* | Prevents memory archive deletion when user message starts with `[cron:` | Memory / SDK |
| [#101322](https://github.com/openclaw/openclaw/pull/101322) — *fix(memory): preserve archived sessions with cron-shaped user text* | Companion fix: archive indexer no longer treats `[cron:]` user text as server provenance | Memory |
| [#101331](https://github.com/openclaw/openclaw/pull/101331) — *test(gateway): isolate reload handler plugin records* | Fixes cross-file test pollution in gateway reload handler tests | Testing / Stability |
| [#101334](https://github.com/openclaw/openclaw/pull/101334) — *Dashboard: preview widget — embed a live URL* | Adds live preview panel to dashboard with reload and device-frame controls | Web UI |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) — *Autofix: add PR review autofix pipeline + Windows daemon* | Automates PR review comment resolution via Claude Agent SDK; adds Windows background daemon | Automation |

Several PRs remain open for maintainer review, including UTF-16 safety sweeping fixes and policy doctor enhancements.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | 👍 | Summary |
|---|---|---|---|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) — *Signal daemon stop() race condition on SIGUSR1 restart* | 17 | 0 | Orphaned processes + send failures during gateway restarts (P1, open since Feb 2026) |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) — *Tiered bootstrap file loading for progressive context control* | 17 | 0 | Context window budget optimization via selective file loading (P2) |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) — *Allow private network access in web_fetch* | 13 | 11 | Highly upvoted request for opt-in private network reachability (P2, security-sensitive) |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) — *Post-subagent completion extension hook* | 12 | 1 | Automation hook for trajectory generation after subagent finishes (P2) |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) — *Per-agent memory-wiki vault configuration* | 12 | 9 | Isolated knowledge wikis for multi-agent setups (P1 enhancement) |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) — *announceTarget for sub-agent completion routing* | 11 | 5 | Sub-agent result routing to parent session as user-message trigger (P2) |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) — *Tool text outputs degrade to "(see attached image)" placeholders* | 11 | 4 | Bug: agents receiving image placeholders instead of plain text (new, active discussion) |
| [#38439](https://github.com/openclaw/openclaw/issues/38439) — *Webchat avatar endpoint returns 404* | 10 | 1 | Regression: agent avatars broken in Control UI (P2 regression) |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) — *"Cannot convert undefined or null to object" in v2026.3.2* | 10 | 3 | P1 regression with google-vertex/gemini-3.1-pro-preview |

### Analysis of Underlying Needs

The top-activity issues reveal **three persistent community themes**:

1. **Session isolation and memory management.** Issues like `announceTarget` ([#27445](https://github.com/openclaw/openclaw/issues/27445)), tiered bootstrap loading ([#22438](https://github.com/openclaw/openclaw/issues/22438)), and per-agent memory-wiki ([#63829](https://github.com/openclaw/openclaw/issues/63829)) show users struggling with context window exhaustion and session pollution in multi-agent or multi-channel setups.

2. **Security vs. usability tradeoffs.** The highly upvoted `allowPrivateNetwork` request ([#39604](https://github.com/openclaw/openclaw/issues/39604), 11 👍) and sandbox workspace writability ([#37634](https://github.com/openclaw/openclaw/issues/37634), 7 👍) reflect demand for **more granular permission models** that don't require full lockdown or full access.

3. **Reliability of message delivery and processing.** Issues with Telegram routing ([#41165](https://github.com/openclaw/openclaw/issues/41165)), placeholder degradation ([#96857](https://github.com/openclaw/openclaw/issues/96857)), and avatar failures ([#38439](https://github.com/openclaw/openclaw/issues/38439)) point to **channel-layer regressions** that erode user trust in the system.

---

## 5. Bugs & Stability

### P1 (Critical) Regressions and Bugs

| Issue | Summary | Has Fix PR? |
|---|---|---|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | **Signal daemon race condition** — SIGUSR1 restarts leave orphaned processes, port/file-lock conflicts | Open (has linked PRs) |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | **"Cannot convert undefined or null to object"** with google-vertex/gemini-3.1-pro-preview on v2026.3.2 | No fix PR referenced |
| [#70024](https://github.com/openclaw/openclaw/issues/70024) | **Channel stop timeout leaves channels permanently dead** — stale `running: true` entries with no recovery | Open (has linked PRs) |
| [#39807](https://github.com/openclaw/openclaw/issues/39807) | **Billing error (402) causes infinite retry death spiral** — no backoff, burns API credits | Open (has linked PRs) |
| [#98702](https://github.com/openclaw/openclaw/issues/98702) | **OAuth inheritance failure** — built-in runtime agents rejected at provider while main succeeds | No fix PR referenced |
| [#38091](https://github.com/openclaw/openclaw/issues/38091) | **WebSocket reconnect terminates active sessions** | No fix PR referenced |
| [#38721](https://github.com/openclaw/openclaw/issues/38721) | **Gateway shutdown timeout** — child process handle blocks clean exit | No fix PR referenced |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) *[CLOSED]* | **Chrome extension relay removed with no cross-machine replacement** — regression breaking managed hosting | Closed (no fix shipped) |

### P2 Regressions (Medium Severity)

| Issue | Summary |
|---|---|
| [#40255](https://github.com/openclaw/openclaw/issues/40255) | User-configured heartbeat prompt no longer respected (regression) |
| [#40919](https://github.com/openclaw/openclaw/issues/40919) | Full delete-reinsert pattern for session memory sync — performance regression |
| [#38439](https://github.com/openclaw/openclaw/issues/38439) | Avatar endpoint returns 404 even with valid IDENTITY.md |
| [#41201](https://github.com/openclaw/openclaw/issues/41201) | Control UI avatar not displaying (broken image) — regression |
| [#38844](https://github.com/openclaw/openclaw/issues/38844) | Browser file-chooser flow flaky, misreports as browser control timeout |
| [#37446](https://github.com/openclaw/openclaw/issues/37446) | Sub-agent timeout recovery creates duplicate API posts (idempotency gap) |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) | Tool text outputs degrade to `(see attached image)` placeholders |

### Notable Fixes Merged Today

- **WhatsApp reachout timelock** — PR [#101264](https://github.com/openclaw/openclaw/pull/101264) prevents false send-acceptance during restrict periods
- **Memory archive wipe on `[cron:` prefix** — PRs [#98624](https://github.com/openclaw/openclaw/pull/98624) and [#101322](https://github.com/openclaw/openclaw/pull/101322) fix a critical data-loss bug where user messages triggered archive deletion
- **UTF-16 safety sweep** — 15+ PRs by @Alix-007 fixing encoding boundary truncation across voice, Discord, Telegram, TTS, agents, and more

---

## 6. Feature Requests & Roadmap Signals

### High-Requested Features (P1/P2, multiple reactions)

| Issue | Feature | Votes | Likelihood for Next Version |
|---|---|---|---|
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` for private network access | 11 👍 | High — security-reviewed, maintainer attention |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | Per-agent memory-wiki vault configuration | 9 👍 | High — community demand, PR open |
| [#20786](https://github.com/openclaw/openclaw/issues/20786) | Telegram Business Bot support | 6 👍 | Medium — needs security review |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | Keep `workspaceAccess: none` workspaces writable | 7 👍 | Medium — conflicting security requirements |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | `announceTarget` for sub-agent completion routing | 5 👍 | Medium — linked PR open |
| [#28300](https://github.com/openclaw/openclaw/issues/28300) | Theme customization system for Control UI | 5 👍 | Low-Medium — UX improvement |
| [#38309](https://github.com/openclaw/openclaw/issues/38309) | `SecretRef` in `sandbox.docker.env` | 4 👍 | Medium — security improvement |

### Emerging Roadmap Signals

1. **Progressive context management.** Tiered bootstrap loading ([#22438](https://github.com/openclaw/openclaw/issues/22438)), context window % injection into system prompt ([#38568](https://github.com/openclaw/openclaw/issues/38568)), and pre-compaction notification ([#38520](https://github.com/openclaw/openclaw/issues/38520)) point toward a **context window optimization push**.

2. **Per-agent configuration granularity.** Multiple feature requests ask for per-agent isolation: memory-wiki vaults ([#63829](https://github.com/openclaw/openclaw/issues/63829)), tool settings ([#37584](https://github.com/openclaw/openclaw/issues/37584)), browser instances ([#37487](https://github.com/openclaw/openclaw/issues/37487)), and memory audit logs ([#20935](https://github.com/openclaw/openclaw/issues/20935)). This suggests a **multi-agent architecture refinement** is on the roadmap.

3. **Channel parity.** Discord reactions in hooks ([#38714](https://github.com/openclaw/openclaw/issues/38714)), Feishu multi-bot groups ([#40768](https://github.com/openclaw/openclaw/issues/40768)), WhatsApp CTWA click ID ([#39037](https://github.com/openclaw/openclaw/issues/39037)), and Telegram business bots ([#20786](https://github.com/openclaw/openclaw/issues/20786)) show demand for **feature parity across all supported channels**.

### Predictions

- **Per-agent memory-wiki** ([#63829](https://github.com/openclaw/openclaw/issues/63829)) and **private network access** ([#39604](https://github.com/openclaw/openclaw/issues/39604)) have the strongest signals (P1, maintainer-reviewed, linked PRs) and are most likely to land in the next minor release.
- **Telegram Business Bot** ([#20786](https://github.com/openclaw/openclaw/issues/20786)) has been open since February with a linked PR — could ship in the next 1-2 releases.

---

## 7. User Feedback Summary

### Pain Points (High Frequency)

1. **Regressions shipping in stable releases.** Multiple users report features working in prior versions and breaking after updates (avatar endpoints, heartbeat prompts, model compatibility with google-vertex). Three avatar-related issues ([#38439](https://github.com/openclaw/openclaw/issues/38439), [#41201](https://github.com/openclaw/openclaw/issues/41201), [#53599](https://github.com/openclaw/openclaw/issues/53599)) specifically flagged as regressions.

2. **Session and channel isolation gaps.** Users report Telegram DMs polluting main sessions ([#41165](https://github.com/openclaw/openclaw/issues/41165)), TUI losing cross-channel visibility after per-session UUID isolation ([#40678](https://github.com/openclaw/openclaw/issues/40678)), and sub-agent completions not routing correctly ([#27445](https://github.com/openclaw/openclaw/issues/27445)).

3. **Configuration friction.** TUI `--deliver` flag default confusion ([#33102](https://github.com/openclaw/openclaw/issues/33102)), `OPENCLAW_RAW_STREAM` disable semantics unclear ([#40673](https://github.com/openclaw/openclaw/issues/40673)), unvalidated model names allowing silent misconfiguration ([#39811](https://github.com/openclaw/openclaw/issues/39811)).

### Satisfaction Signals

- The **dashboard preview widget** ([#101334](https://github.com/openclaw/openclaw/pull/101334)) and **widget write-back capability** ([#101329](https://github.com/openclaw/openclaw/pull/101329)) suggest the Control UI is actively evolving with community-driven features.
- **Telegram progress indicators** ([#33413](https://github.com/openclaw/openclaw/issues/33413)) and **Cross-channel visibility** ([#40678](https://github.com/openclaw/openclaw/issues/40678)) show advanced users pushing the product toward professional-grade UX.

### Use Cases Driving Requests

| Use Case | Related Issues |
|---|---|
| Managed hosting providers | [#53599](https://github.com/openclaw/openclaw/issues/53599) (cross-machine browser relay) |
| Sales/lead generation | [#39037](https://github.com/openclaw/openclaw/issues/39037) (CTWA click ID attribution) |
| Enterprise deployment | [#38309](https://github.com/openclaw/openclaw/issues/38309) (SecretRef for sandbox env), [#23585](https://github.com/openclaw/openclaw/issues/23585) (trusted-proxy auth with fallback user) |
| Multi-agent workflow orchestration | [#27445](https://github.com/openclaw/openclaw/issues/27445) (announceTarget), [#22358](https://github.com/openclaw/openclaw/issues/22358) (post-subagent hook) |
| Education/research | [#40418](https://github.com/openclaw/openclaw/issues/40418) (session memory preservation), [#38568](https://github.com/openclaw/openclaw/issues/38568) (context window % injection) |

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) — *Signal daemon race condition* | Open since Feb 21 (4.5 months) | P1 bug causing orphaned processes and message loss on every config reload |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) — *Chrome extension relay removed* | CLOSED without fix | Breaking regression for managed hosting providers, closed with no resolution |
| [#39807](https://github.com/openclaw/openclaw/issues/39807) — *Billing error infinite retry* | Open since Mar 8 (4 months) | P1: burns API credits, makes agents unresponsive for hours |
| [#38091](https://github.com/openclaw/openclaw/issues/38091) — *WebSocket reconnect terminates sessions* | Open since Mar 6 (4 months) | P1: destroys in-progress AI conversations |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) — *google-vertex/gemini-3.1-pro-preview crash* | Open since Mar 6 (4 months) | P1 regression blocking users on latest stable |
| [#38721](https://github.com/openclaw/openclaw/issues/38721) — *Gateway shutdown timeout* | Open since Mar 7 (4 months) | P1: dirty shutdowns, lane wait exceeded |

### Stale Items (No Maintainer Response)

| Issue | Age | Labels |
|---|---|---|
| [#87318](https://github.com/openclaw/openclaw/issues/87318) — *Amazon Bedrock Haiku 4.5 inference profile ARN* | Open since May 27 (6 weeks) | `stale`, `needs-live-repro`, `needs-maintainer-review` |
| [#40673](https://github.com/openclaw/openclaw/issues/40673) — *OPENCLAW_RAW_STREAM disable semantics* | Open since Mar 9 (4 months) | `needs-maintainer-review`, `needs-product-decision` |
| [#38844](https://github.com/openclaw/openclaw/issues/38844) — *Browser upload flaky/false timeout* | Open since Mar 7 (4 months) | `needs-live-repro`, `needs-product-decision` |

### Open PRs Awaiting Maintainer Review

| PR | Area | Risk |
|---|---|---|
| [#101336](https://github.com/openclaw/openclaw/pull/101336) — *Policy: review-required tool repairs* | Policy system | Large diff, tool posture changes |
| [#101337](https://github.com/openclaw/openclaw/pull/101337) — *Surface auto-fallback model in status* | Commands | Fixes a user-visible gap |
| [#101275](https://github.com/openclaw/openclaw/pull/101275) — *CI fail Android PRs on ktlint drift* | CI | Prevents formatting regressions |
| [#101256](https://github.com/openclaw/openclaw/pull/101256) — *Refresh provider auth after CLI login* | Commands | Fixes stale model picker |
| UTF-16 safety batch (15+ PRs by @Alix-007) | Cross-system | Medium — all replace raw truncation with safe helpers |

---

## Summary Assessment

**Project Health: 🟡 Moderate Concern**

The project has high activity with many important fixes landing, but several critical P1 bugs remain open for months (race conditions, OAuth failures, session termination on reconnect). The large number of regression reports (avatar endpoints, heartbeat prompts, provider compatibility) suggests the release process may benefit from additional pre-release regression testing. Community engagement is strong, with well-articulated feature requests and use cases driving roadmap direction.

The UTF-16 safety sweep and memory archive fixes merged today address real edge-case data-loss bugs, which is positive. However, the backlog of P1 issues with stale maintainer status is a risk signal.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-07-07

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing **sustained high-velocity development**, with the major projects processing hundreds of PRs and issues daily. The ecosystem is maturing from experimental prototypes toward **production-grade infrastructure**, evidenced by the simultaneous focus on security hardening, memory management, channel parity, and multi-agent orchestration across all active projects. A clear **consolidation phase** is underway: while core reference implementations (OpenClaw) dominate community attention, specialized forks and derivatives (NanoBot, CoPaw, IronClaw) are carving distinct niches in desktop automation, enterprise IM integration, and real-time voice interfaces. The ecosystem is bifurcating into **general-purpose platforms** versus **vertically-integrated solutions** for specific deployment scenarios.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | New Release | Health Score |
|---------|-------------|-----------|-------------|--------------|
| **OpenClaw** | 175 updated | 500 updated | None | 🟡 Moderate Concern |
| **NanoBot** | 40 updated | 500 updated | None | 🟢 Good |
| **Hermes Agent** | 7 new | 50 updated | None | 🟡 Moderate Concern |
| **PicoClaw** | 4 updated | 5 updated | None | 🟢 Good |
| **NanoClaw** | 3 updated | 11 updated | None | 🟢 Good |
| **NullClaw** | 0 | 1 (Dependabot) | None | 🟢 Inactive Maintenance |
| **IronClaw** | 7 updated | 50 updated | None | 🟢 Good |
| **LobsterAI** | 0 | 12 updated | None | 🟢 Good |
| **TinyClaw** | — | — | — | ⚪ No Activity |
| **Moltis** | 0 | 5 updated | None | 🟢 Good |
| **CoPaw** | 16 active | 48 updated | **v1.1.12.post3** | 🟡 Moderate Concern |
| **ZeptoClaw** | — | — | — | ⚪ No Activity |
| **ZeroClaw** | 9 updated | 50 updated | None | 🟢 Good |

**Key observations:**
- **OpenClaw dominates** in raw community engagement (175 issues, 500 PRs) but shows health yellow flags due to 4-month-old P1 bugs and regression patterns
- **NanoBot** processed 500 PRs with strong security-focused velocity, but 491 remain open — a 98% open rate indicating review bottleneck
- **CoPaw** is the only project to ship a release today, highlighting its rapid patch cycle
- **TinyClaw** and **ZeptoClaw** show zero activity, likely dormant or completed projects

## 3. OpenClaw's Position

**Advantages:**
- **Largest community** by ~4x over next-closest (NanoBot/ZeroClaw at 50 PRs vs 500)
- **Most comprehensive feature surface** — 15+ channel integrations, robust agent SDK, memory systems, tool ecosystem
- **Reference implementation status** — the de facto standard that forks and derivatives benchmark against
- **Strong contributor pipeline** with automated PR review pipeline (#68936) and systematic bug sweeps (UTF-16 safety)

**Technical Approach Differences:**
- **Monolithic reference architecture** vs. NanoBot's modular Python-CLI focus and PicoClaw's lightweight Go core
- **Channel-agostic abstraction layer** is more mature than most peers; LobsterAI and CoPaw lag in multi-channel parity
- **Memory system is deepest** — per-agent wiki vaults, tiered bootstrap loading, archive preservation all being actively developed

**Community Size Comparison:**
- Estimated active contributors: OpenClaw (200+) > NanoBot/ZeroClaw (50-80) > CoPaw/IronClaw (20-40) > others (<20)
- OpenClaw's challenge: **managing scale** — 500 daily PRs and 175 issues create triage debt that shows in P1 bugs aging 4+ months

**Vulnerability:** Regression shipping in stable releases (avatar endpoints, heartbeat prompts) is eroding trust. The "moderate concern" health score reflects this tension between velocity and quality control.

## 4. Shared Technical Focus Areas

The following requirements are emerging across **multiple projects simultaneously**, indicating ecosystem-wide priorities:

| Focus Area | Projects | Specific Needs |
|------------|---------|----------------|
| **Memory & Context Management** | OpenClaw, CoPaw, NanoBot, ZeroClaw | Per-agent memory isolation; context compression anchoring; tiered bootstrap loading; recency-aware ranking |
| **Security Hardening** | NanoBot (35-finding audit), OpenClaw (credential bounds), ZeroClaw (CVE remediation), Hermes (cloud sync privacy) | API key encryption at rest; workspace confinement; TOCTOU prevention; audit logging |
| **Multi-Agent Orchestration** | OpenClaw, IronClaw, Hermes, NanoClaw | Sub-agent completion hooks; thread-harness architecture; session isolation; cross-agent routing |
| **Channel Parity** | OpenClaw (Telegram, WhatsApp, Discord), CoPaw (Feishu), NanoBot (Mattermost), Moltis (WhatsApp LID) | Consistent behavior across messaging platforms; channel-specific features (reactions, business bots) |
| **Real-time Voice** | ZeroClaw, NanoClaw | Speech-to-speech channels; voice satellite hardware; WebSocket-based voice hosts; wake-word activation |
| **CI/Test Infrastructure** | CoPaw (400+ tests added), ZeroClaw (workspace-aware gates), IronClaw (sccache-dist) | Regression test coverage; CI reliability; faster compile times for PRs |

**Ecosystem-level insight:** Memory management and security are the **two most universally prioritized** concerns, reflecting the ecosystem's transition from prototype to production deployment.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | IronClaw | CoPaw | ZeroClaw |
|-----------|----------|---------|----------|-------|----------|
| **Target User** | Power users, managed hosting providers | CLI-first developers | Enterprise orgs | Enterprise IM teams | Advanced agent developers |
| **Primary Language** | Multi-language SDK | Python | Rust | Python/TypeScript | Rust |
| **Deployment Model** | Self-hosted gateway + SDK | CLI + Python API | Self-hosted ("Reborn" arch) | Docker + AgentScope | CLI + Docker |
| **Channel Breadth** | 15+ (broadest) | 5-6 (Telegram, CLI, WebUI) | Slack, approval notifications | Feishu, DingTalk, Discord, Telegram | Telegram, Discord, voice |
| **Key Differentiator** | Reference completeness | Security audit responsiveness | Concurrency/crash recovery | Desktop automation (UIA) | Real-time voice + ZeroCode |
| **Maturity Stage** | Consolidation | Production hardening | Architectural rewrite | Feature expansion | Rapid iteration |
| **Risk Profile** | Regression-prone at scale | Security debt paying down | Breaking changes inbound | Memory system fragility | CVE accumulation |

**Notable architectural differences:**
- **IronClaw** is undergoing a "Reborn" architecture revamp, while **ZeroClaw** advances toward voice-native interaction
- **NanoBot** differentiated via a comprehensive security audit (35 findings) that no other project has matched
- **CoPaw** uniquely targets the Chinese enterprise IM market (Feishu, DingTalk) and desktop Windows automation

## 6. Community Momentum & Maturity

**Activity Tiers (by development velocity):**

**Tier 1 — Rapid Iteration (50+ PRs/day):**
- **OpenClaw** — 500 PRs, but 209 merged/closed = 42% throughput rate. Consolidation phase with backlog pressure.
- **NanoBot** — 500 PRs, but only 9 merged = 2% throughput. Review bottleneck is extreme — 491 PRs pending.
- **ZeroClaw** — 50 PRs, 6 merged = 12% throughput. Healthy pace but growth constrained by review capacity.

**Tier 2 — Steady Development (10-50 PRs/day):**
- **IronClaw** — 50 PRs, 15 merged = 30% throughput. Strong maintainer presence; good closure rate.
- **CoPaw** — 48 PRs, 23 merged = 48% throughput. **Best merge ratio** in the ecosystem; responsive maintainers.
- **LobsterAI** — 12 PRs, 11 merged = 92% throughput. Very efficient but small scope.

**Tier 3 — Maintenance Mode (<10 PRs/day):**
- **NanoClaw** (11 PRs, 3 merged), **PicoClaw** (5 PRs), **Moltis** (5 PRs, 3 merged)
- **NullClaw** — Only Dependabot activity; effectively dormant.

**Maturity Assessment:**
- **Stabilizing:** OpenClaw, Moltis — fixing regressions, consolidating features
- **Hardening:** NanoBot, ZeroClaw — security audits, CI reliability, dependency remediation
- **Expanding:** CoPaw, IronClaw — adding major features (desktop automation, thread-harness)
- **Legacy:** NullClaw, TinyClaw, ZeptoClaw — no active development observed

## 7. Trend Signals

**Industry trends extracted from cross-project community feedback (value for AI agent developers):**

1. **Context Window Economics Dominates** — Across OpenClaw, CoPaw, and PicoClaw, users are obsessed with token/cache optimization. Tiered bootstrap loading, rolling cache breakpoints, and context compression anchoring are not features — they're **existential requirements** for cost-effective agent deployment. Agent developers should prioritize memory system efficiency over feature breadth.

2. **Security is the Gate to Production** — NanoBot's 35-finding audit and ZeroClaw's 22 unaddressed CVEs signal that **security posture is the primary blocker** for enterprise adoption. Plaintext API keys, default-permissive workspace access, and missing rate limiting are being treated as shipping blockers. Projects that ignore security will be filtered out of enterprise consideration.

3. **Multi-Agent Isolation is Hard** — The simultaneous demand for per-agent memory wikis (OpenClaw), session isolation fixes (CoPaw, Hermes), and cross-agent routing (OpenClaw, IronClaw) reveals that **session pollution** is the #1 architectural challenge. The ecosystem lacks a standard isolation model — each project is inventing its own, creating fragmentation.

4. **Voice is the Next Frontier** — ZeroClaw's realtime speech-to-speech channel, NanoClaw's Zoom voice agent proposal, and IronClaw's voice satellite feature requests point to a **paradigm shift toward voice-first interaction**. Agent developers should begin planning for voice-native tool calling and approval workflows.

5. **Channel Fragmentation Drives Complexity** — Every project supports different messaging platforms, and none support all. The demands for feature parity (reactions, business bots, progress indicators) across channels create **unsustainable maintenance burden**. The ecosystem would benefit from a shared channel abstraction layer — but no project has achieved this yet.

6. **Contributor Experience Determines Velocity** — CoPaw's high merge ratio (48%) and first-time contributor acceptance correlate with its strong velocity. OpenClaw's 4-month P1 bugs and ZeroClaw's unreviewed PRs suggest **maintainer bandwidth is the critical bottleneck**. Projects that invest in automated review pipelines (like OpenClaw's #68936) will outpace peers.

7. **Enterprise Use Cases Drive Feature Prioritization** — Audit logs (NanoClaw), SecretRef for sandbox env (OpenClaw), trusted-proxy auth (OpenClaw), and tenant-isolated memory (Hermes) all point to **enterprise compliance requirements** shaping the roadmap. The ecosystem is responding to managed hosting providers and enterprise customers, not just individual developers.

**Bottom line for AI agent developers:** The ecosystem is in a **security and memory management arms race**. OpenClaw remains the safest choice for breadth and community support, but its regression risk demands careful version pinning. NanoBot and ZeroClaw offer better security posture but smaller communities. For enterprise IM deployments, CoPaw's Feishu/DingTalk focus is unmatched. Voice and desktop automation are emerging as the next competitive battlegrounds.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-07

## Today's Overview

The NanoBot project shows **high activity** with 40 issues updated in the last 24 hours (38 open, 2 closed) and an extraordinary **500 pull requests** updated (491 open, 9 merged/closed). The most significant development is a comprehensive security and correctness audit submitted yesterday that surfaced **35 findings** spanning command injection, path traversal, authentication bypass, and concurrency bugs. A wave of targeted fix PRs has already been opened against many of these findings, indicating strong maintainer responsiveness. No new releases were published today.

## Releases

*None.* No new versions of NanoBot were released in the reporting period.

## Project Progress

**9 pull requests were merged or closed today**, including:

- **[PR #4822](https://github.com/HKUDS/nanobot/pull/4822)** — Fix WebUI automation source preservation on streamed replies
- **[PR #1290](https://github.com/HKUDS/nanobot/pull/1290)** — Restore HEARTBEAT_OK_TOKEN and legacy callback support (merged after long stasis)
- **[PR #4654](https://github.com/HKUDS/nanobot/pull/4654)** — Fix CLI interactive mode to print response text when streaming fails
- **[PR #4459](https://github.com/HKUDS/nanobot/pull/4459)** — Add Mattermost channel support (new integration)
- **[PR #4673](https://github.com/HKUDS/nanobot/pull/4673)** — Fix Dream memory audit records to be grounded in real git diffs
- **[PR #4818](https://github.com/HKUDS/nanobot/pull/4818)** — Guard web_fetch signature against None URL

**Key feature advances**: Mattermost channel support (a long-requested integration) and multiple stability fixes for streaming, CLI, and Dream consolidation.

## Community Hot Topics

**Most Active Issue — Comprehensive Audit**: **[#4815](https://github.com/HKUDS/nanobot/issues/4815)** — "Audit summary: 35 security / bug / refactor findings" by hamb1y. This single issue catalogs findings across categories including command injection, path escape, auth bypass, deserialization/eval, secrets handling, TOCTOU, resource exhaustion, concurrency bugs, dead code, and code inefficiencies. Five follow-up PRs were opened by separate contributors to address specific findings.

**Most Active PR — SSRF Fix**: **[#4671](https://github.com/HKUDS/nanobot/pull/4671)** — "fix: pin validated dns for ssrf checks" by hamb1y. This critical security fix resolves Issue #4611 and is the highest-priority PR currently open.

**Underlying need**: The community is demanding **security hardening** and **production readiness**. The audit surfaced systemic issues in error handling (silent exception swallowing), resource management (unbounded memory growth), and security posture (default permissive configurations).

## Bugs & Stability

### Critical Severity
- **[#4803](https://github.com/HKUDS/nanobot/issues/4803)** — API keys stored as plaintext in `~/.nanobot/config.json`. The `api_key` field has `repr=False` but **not** `exclude=True`, so `model_dump()` serializes secrets. **Fix status: No PR yet**.
- **[#4796](https://github.com/HKUDS/nanobot/issues/4796)** — `restrict_to_workspace` defaults to `False`, exposing the full filesystem to LLM agents by default. **Fix status: No PR yet**.
- **[#4797](https://github.com/HKUDS/nanobot/issues/4797)** — Shell subprocesses (`ExecTool._spawn()`) have no resource limits (no ulimit, cgroups, CPU/memory caps), enabling fork bombs or resource exhaustion attacks.

### High Severity
- **[#4790](https://github.com/HKUDS/nanobot/issues/4790)** — Symlink TOCTOU vulnerability in filesystem tools
- **[#4788](https://github.com/HKUDS/nanobot/issues/4788)** — `except BaseException` catches `KeyboardInterrupt`/`SystemExit` — **PR #4816 opened** to fix
- **[#4804](https://github.com/HKUDS/nanobot/issues/4804)** — Leaked `CancelledError` silently swallowed in main agent loop — **PR #4814 opened**
- **[#4800](https://github.com/HKUDS/nanobot/issues/4800)** — `.strip()` on potentially list-form `msg.content` crashes on multimodal messages — **PR #4813 opened**

### Medium Severity
- **[#4789](https://github.com/HKUDS/nanobot/issues/4789)** — `WeakValueDictionary` for consolidation locks can break mutual exclusion under GC — **PR #4819 opened**
- **[#4802](https://github.com/HKUDS/nanobot/issues/4802)** — Token budget returns spurious 128 when context window is disabled (0) — **PR #4817 opened** (regression test added)
- **[#4805](https://github.com/HKUDS/nanobot/issues/4805)** — `suppress(Exception)` on `prepare_call` silently swallows tool validation errors — **PR #4811 opened**
- **[#4785](https://github.com/HKUDS/nanobot/issues/4785)** — `read_file` loads entire file into memory before truncation, risking OOM on multi-GB files
- **[#4799](https://github.com/HKUDS/nanobot/issues/4799)** — External lookup signature creates false entry for `None` URLs — **PR #4820 opened**

**Notable**: 19 of the 40 issues updated today are from the single comprehensive audit, and 8 fix PRs have already been authored. This suggests rapid bug-fixing velocity.

## Feature Requests & Roadmap Signals

**Likely for Next Release**:
- **Multi-line CLI input** ([PR #4614](https://github.com/HKUDS/nanobot/pull/4614)) — `Shift+Enter`/`Alt+Enter` support for composing multi-line messages
- **Document attachments in WebUI** ([PR #4771](https://github.com/HKUDS/nanobot/pull/4771)) — PDF and other document file support
- **OAuth status and expiry warnings** ([PR #4689](https://github.com/HKUDS/nanobot/pull/4689)) — Better provider credential lifecycle management

**Emerging Signals**:
- **API key encryption at rest** — The plaintext credentials finding (#4803) will likely drive a feature for encrypted config storage
- **Rate limiting** ([#4791](https://github.com/HKUDS/nanobot/issues/4791)) — No per-user or per-chat message rate limiting exists; paired users can flood the agent
- **Session cleanup/eviction** ([#4786](https://github.com/HKUDS/nanobot/issues/4786), [#4787](https://github.com/HKUDS/nanobot/issues/4787)) — Unbounded `SessionManager._cache` and `Session.messages` growth will likely drive TTL/LRU eviction features

## User Feedback Summary

**Pain Points**:
1. **Windows compatibility** — Issue [#4511](https://github.com/HKUDS/nanobot/issues/4511) reports the `--background` flag's process/log tracking is inconsistent with actual runtime state after `/restart` commands
2. **Telegram message rendering** — Issue [#4637](https://github.com/HKUDS/nanobot/issues/4637) reports long Markdown messages split into trunks where prior trunks fail to render
3. **Python SDK usability** — Issue [#4765](https://github.com/HKUDS/nanobot/issues/4765) reports the documented Python API example throws an error immediately (async context manager protocol not supported), despite the WebUI working correctly

**Underlying Needs**:
Users are demanding **production-grade reliability** — consistent behavior across platforms (Windows/Linux), proper message rendering in channel outputs, and working developer APIs. The volume of newly surfaced security issues suggests users are beginning to deploy NanoBot in environments where security posture matters.

## Backlog Watch

| Issue | Age | Summary | Concern |
|-------|-----|---------|---------|
| [#4511](https://github.com/HKUDS/nanobot/issues/4511) | 12 days | Windows `--background` inconsistency | Closed but the underlying race condition may recur |
| [#4637](https://github.com/HKUDS/nanobot/issues/4637) | 6 days | Telegram long message trunk rendering | Stale-tagged, no fix PR; affects all Markdown-heavy users |
| [#4765](https://github.com/HKUDS/nanobot/issues/4765) | 1 day | Python SDK async context manager protocol error | Closed but the docs still show non-working code; docs update needed |
| [#4793](https://github.com/HKUDS/nanobot/issues/4793) | 1 day | Global ExecSessionManager singleton shared across agent loops | Cross-session data visibility bug with no fix PR yet |
| [#4794](https://github.com/HKUDS/nanobot/issues/4794) | 1 day | Exec sessions have no shutdown cleanup — orphaned child processes | No PR; affects long-running gateway stability |

**Notable**: The [#4793](https://github.com/HKUDS/nanobot/issues/4793) singleton issue is particularly concerning for multi-tenant deployments — separate agent sessions can see and interact with each other's exec sessions, which could lead to data leakage or cross-session interference.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for Hermes Agent, generated from the GitHub data snapshot for 2026-07-07.

---

## Hermes Agent Project Digest — 2026-07-07

### 1. Today's Overview
The project is experiencing a **high-velocity patch cycle**, with 7 new issues and 50 updated pull requests (43 open) in the last 24 hours. Activity is heavily focused on **critical bug fixes** and **infrastructure hardening**, particularly in the Cron scheduler, Kanban system, and Gateway configuration layers. While no new releases were tagged today, the sheer volume of PRs (many with immediate fix-closure) indicates a rapid-response sprint to address several regressions and long-standing configuration gaps. The project is in a **stable but hot-fix-intensive** state, with community contributors driving much of the resolution.

### 2. Releases
**None.** No new releases were published on this date.

### 3. Project Progress
Seven PRs were merged or closed today, representing progress on several key fixes:

- **Docker CI Fork-Fix (merged):** Three related PRs (#54725, #54726, #54892) successfully closed the longstanding issue where `build-arm64` jobs would fail on fork PRs due to incorrect cache export permissions. The final solution gates the registry cache write to only push/release events.
- **Kanban Delivery Fix (closed):** PR #59963 (fixes #59960) resolves a TUI notification gap where Kanban task events were never polled, preventing delivery to desktop sessions.
- **Skill Path Security (merged):** PR #59966 resolves a critical Cron bug (#59824) by allowing absolute skill paths under trusted root directories, fixing silent scheduler failures.
- **Session API Scope (closed as superseded):** PR #59956 was an initial attempt at fixing profile scope for session API endpoints, but was replaced by PR #59965 which offers a more comprehensive solution.
- **Recursive Delete False Positive (closed):** PR #68 fixes a regex flaw in `tools/approval.py` that incorrectly flagged `rm` commands where the filename started with "r".

### 4. Community Hot Topics
The most active discussions reflect a **growing concern around data privacy, configuration transparency, and reliability**.

- **#59953: User Profile & Memory Synced to Cloud Without Consent (Open, 0 comments, new).**
  *Link: [Issue #59953](https://github.com/NousResearch/hermes-agent/issues/59953)*
  A Chinese-language user report details a **severe privacy concern**: user profiles and memory data are being silently synced to a remote cloud service ("retaindb") without any configuration toggle or user-facing notice. This is the highest-signal community concern today, potentially impacting trust for privacy-conscious users.

- **#59824: Cron Scheduler Silent Failure (Open, P1, 1 comment).**
  *Link: [Issue #59824](https://github.com/NousResearch/hermes-agent/issues/59824)*
  A Priority-1 bug where cron jobs silently fail to deliver Discord messages because absolute skill paths are rejected by a security check. The fix was merged today via PR #59966, but the issue remains open for verification.

- **#59960: Kanban Notifications Never Delivered (Open, P3, new).**
  *Link: [Issue #59960](https://github.com/NousResearch/hermes-agent/issues/59960)*
  A structural bug in the TUI notification pipeline—the poller was watching the wrong queue. A fix is already submitted in PR #59963.

### 5. Bugs & Stability
Several bugs were reported today, with severity levels ranging from P1 (critical) to P3.

- **P1 - Cron Scheduler Silent Failure (#59824).** Cron jobs execute but produce no output delivery due to a path-rejection bug. **Fix merged** (PR #59966).
- **P1 - Session State Data Integrity (#59968).** A duplicate bug report confirms that `INSERT INTO messages` statements are missing the `active=1` column, which can lead to session corruption. **Fix exists** (PR #59968, open).
- **P2 - Gateway Config Key Not Read (#52562).** `gateway.multiplex_profiles` config key is ignored by the loader, making a dashboard feature non-functional. This is a **long-standing** configuration regression. No fix PR today.
- **P2 - Privacy/Cloud Sync (#59953).** User data is being transmitted to a remote server without consent or a config toggle. **No fix PR yet**, though it is a critical trust issue.
- **P2 - Z.AI WAF Prompt-Block (#59958).** A string literal trigger in the system prompt causes deterministic provider rejection. **Fix submitted** (PR #59958).
- **P3 - Dashboard UI Tag Clutter (#59957).** HTML/XML tags pollute model reasoning output in the dashboard. **No fix PR yet.**
- **P3 - Mem0 OSS Mode False Positive (#57931).** `hermes doctor` falsely reports an API key missing for self-hosted Mem0 instances. **No fix PR today.**

### 6. Feature Requests & Roadmap Signals

- **Pre-Turn Memory Health Hook (#25061, Open, 4 comments).** A request for a system-level hook that runs before each conversation turn to enforce memory compaction rules. This has been open since May and is a **strong signal** that users want proactive agent self-management rather than relying on LLM prompt adherence.

- **Privacy Filter for MoA Reference Outputs (#59959, Open, new).** A request to add redaction for MoA (Mixture-of-Agents) reference outputs before they are displayed or passed to an aggregator. This user is concerned about leaking sensitive data between sub-agents.

- **Dashboard Session API Profile Scope (#59965, Open, new).** While a bug fix, this is a **de facto feature request** for multi-profile dashboard isolation. The current behavior leaks session data across profiles, and a fix is being tested.

**Roadmap Prediction:** The privacy-related requests (#59953, #59959) suggest the **next minor release may include a "Privacy & Data Sync" configuration section** (at minimum, a toggle for cloud memory sync). The memory health hook (#25061) is likely to be deferred to a major version (v0.7+), as it requires architectural changes to the run loop.

### 7. User Feedback Summary

- **Pain Point: Silent Data Sync (#59953).** A user demonstrates (with configuration file evidence) that memory and user profile data is transmitted to a remote cloud service without any opt-in prompt. This is a **major trust/satisfaction risk**.
- **Pain Point: Cron Unreliability (#59824).** Users relying on cron for Discord notifications are experiencing silent failures, undermining agent utility for automation use cases.
- **Pain Point: False Config Errors (#57931).** Users self-hosting the memory stack are being misled by `hermes doctor` into think they have misconfigured the API key, causing confusion.
- **Satisfaction Signal: Responsive Maintainers.** Multiple bugs reported today have either a fix PR already submitted or have been immediately addressed (e.g., #59960 → #59963), indicating a **highly responsive maintainer team** and a healthy contributor pipeline.

### 8. Backlog Watch

The following items have been open for a significant period without a resolution or a clear maintainer response:

- **#25061: Pre-turn memory health hook (Open since May 2026, 4 comments).** A P3 feature request with no PR activity. It represents a common user desire for proactive agent memory management.
- **#52562: Gateway multiplex_profiles config not read (Open since June 25, P2).** A functional break that makes a key dashboard feature unavailable. **Needs: Maintainer triage**—this is a config reading bug, likely a 15-minute fix, but has sat open for nearly two weeks.
- **#57931: Mem0 OSS mode false positive (Open since July 3, P3).** A misleading diagnostic message in a critical tool (`hermes doctor`). **Needs: Confirmation or fix**—it causes user confusion for self-hosters.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-07

## 1. Today's Overview

PicoClaw shows moderate activity with **4 issues** and **5 pull requests** updated in the last 24 hours, indicating a healthy but not frenetic development pace. The project is addressing several critical provider-specific bugs, particularly around Anthropic and Google Gemini API compatibility. One issue related to Anthropic prompt caching (#2191) has been closed via PR #3228, which is now open and under review. One PR (#3227) was merged today, fixing a serialization bug that affected session history reloading. There are no new releases, suggesting the team is consolidating fixes before tagging a new version. Overall project health appears stable, with maintainers actively reviewing contributions.

## 2. Releases

**No new releases** in the last 24 hours. The latest available version remains the current main branch. The last tagged release was prior to 2026-03-30 (based on issue #2191 referencing "latest main").

---

## 3. Project Progress

### Merged/Closed PRs (1 item)

- **PR #3227 — [CLOSED] fix(providers): resolve tool_use name/args from Function on reloaded history**  
  Author: AayushGupta16 | [GitHub](https://github.com/sipeed/picoclaw/pull/3227)  
  *Critical fix*: Both Anthropic providers (`anthropic_messages` and `anthropic`) emitted assistant `tool_use` blocks from `ToolCall.Name`/`ToolCall.Arguments`, but those fields were tagged `json:"-"` in `protocoltypes.ToolCall`, causing data loss after chat history round-tripped through session serialization. This PR ensures tool calls survive history reload. This likely fixes silent corruption in multi-turn agent workflows.

### Feature Advancements

- **PR #3228 — [OPEN] fix(anthropic-messages): send SystemParts as system blocks with cache_control**  
  Author: AayushGupta16 | [GitHub](https://github.com/sipeed/picoclaw/pull/3228)  
  This directly resolves the long-standing bug #2191. It enables per-block `cache_control` markers on the `anthropic-messages` provider, unlocking Anthropic prompt caching for system prompts.

- **PR #3226 — [OPEN] fix(tools): stop write_file from coaching destructive overwrite (#3150)**  
  Author: ACMYuechen | [GitHub](https://github.com/sipeed/picoclaw/pull/3226)  
  Changes the `write_file` tool's behavior to not implicitly suggest overwriting existing files, which was causing the agent to accidentally destroy memory files like `MEMORY.md`.

- **PR #3118 — [OPEN] Add remote Pico WebSocket mode to picoclaw agent**  
  Author: jp39 | [GitHub](https://github.com/sipeed/picoclaw/pull/3118)  
  Adds a `--remote ws://...` flag to the `picoclaw agent` command, enabling remote agent sessions over WebSocket. Still open after 25 days.

- **PR #3115 — [OPEN] Fix inline data URL media extraction for generic tool output**  
  Author: jp39 | [GitHub](https://github.com/sipeed/picoclaw/pull/3115)  
  Prevents `data:image/...;base64,...` strings in plain text tool output (e.g., source code, logs) from being misinterpreted as real media attachments, which was corrupting session history.

---

## 4. Community Hot Topics

### Most Discussed: Issue #2191 — Anthropic cache_control bug (4 comments, now closed)
[GitHub](https://github.com/sipeed/picoclaw/issues/2191)  
The most active thread this cycle, this 3-month-old bug was finally closed thanks to PR #3228. The issue: the `anthropic_messages` provider flattens system prompts to a flat string, making Anthropic's prompt caching (a major cost-saving feature) completely ineffective. The fix enables per-block `SystemParts` with `cache_control` markers, which is a high-impact improvement for users running agentic workloads at scale.

### New Feature Proposal: Issue #3229 — Rolling conversation cache breakpoints
Author: AayushGupta16 | [GitHub](https://github.com/sipeed/picoclaw/issues/3229)  
Proposes extending the fix from #3228 to support *rolling* cache breakpoints on conversation history, not just system prompts. The author correctly notes that in agentic workloads, conversation history dominates token usage. This is a sophisticated proposal that would allow PicoClaw to mark cacheable prefixes that exclude volatile runtime context (like tool results). This signals strong user demand for Anthropic cost optimization.

### Language Barrier: Issue #3231 — searxng search basic auth
Author: oKatTjC | [GitHub](https://github.com/sipeed/picoclaw/issues/3231)  
A Chinese-language feature request asking to add HTTP Basic Auth header support for SearXNG search integration, as URL-embedded auth credentials don't work. No comments yet from maintainers. International user base is growing.

---

## 5. Bugs & Stability

### High Severity
- **Issue #3230 — [BUG] Function call missing thought_signature when calling Gemini via OpenAI compat format**  
  [GitHub](https://github.com/sipeed/picoclaw/issues/3230)  
  **Affects versions:** 0.2.9 to 0.3.1  
  When routing Gemini requests through OpenAI-compatible endpoints (e.g., Cloudflare AI Gateway), tool calls fail with a "missing thought_signature" error. This is a multi-version regression affecting a common deployment pattern. **No fix PR exists yet.**  
  **Severity: Critical** — breaks all tool calls on Gemini via OpenAI-compatible proxies.

### Medium Severity
- **Issue #2191 — [CLOSED] anthropic_messages ignores SystemParts** (now fixed by PR #3228)  
  **Severity: High** (while open) — users were paying for uncached prompts. Now resolved.

### Low Severity / Workaround Available
- **PR #3226 — write_file coaching destructive overwrite**  
  The tool's default behavior nudged the agent toward overwriting existing files, which could inadvertently destroy user memory files. The fix changes framing to not suggest overwrite as the default action. Workaround: users could manually instruct agents differently.

---

## 6. Feature Requests & Roadmap Signals

### Likely in Next Version
1. **Anthropic prompt caching (rolling breakpoints)** — with #2191 fixed and #3229 proposing rolling cache, plus the author's clear expertise (they contributed the fix PR), expect conversation-level caching in the next release. This is a high-value feature for cost-sensitive users.
2. **Remote WebSocket agent mode** (PR #3118) — this has been open for 25 days with no rejections, suggesting the maintainers are considering it for the next release. Enables web-UI or remote integration.

### Possible in Future
3. **SearXNG Basic Auth** (Issue #3231) — simple enhancement, but language barrier may slow response.
4. **Gemini/OpenAI compat fix** (Issue #3230) — likely prioritized given it's a regression affecting multiple versions.

### Not Yet Addressed
- The project lacks a formal roadmap document. Feature prioritization appears driven by immediate bugs and contributor interest.

---

## 7. User Feedback Summary

### Pain Points
1. **Provider fragmentation** — Users face unique bugs for each provider/format combination (Anthropic caching, Gemini thought_signature, OpenAI compat). This suggests the abstraction layer needs hardening.
2. **Cost sensitivity** — Multiple threads (#2191, #3229) revolve around reducing LLM API costs via caching. Users are running agentic workloads with large conversation histories.
3. **Session history fragility** — The tool-use serialization bug (#3227) and inline media extraction bug (#3115) show that session persistence is a weak point, causing silent data loss for users running multi-turn agents.
4. **Memory file safety** — The `write_file` overwrite issue (#3226) highlights that agents can accidentally corrupt user-managed memory files, a significant trust/safety concern.

### Use Cases
- **Production agent deployments** — Users are running PicoClaw agents with real LLM API calls (not just local models), evidenced by caching and cost concerns.
- **Multi-provider setups** — Users routing through proxies like Cloudflare AI Gateway (#3230) and using both Anthropic and Google Gemini.
- **International usage** — Chinese-language feature request (#3231) shows global adoption.

### Satisfaction Indicators
- Active contributor community with multiple PRs from the same authors (AayushGupta16, jp39, ACMYuechen).
- No "this is unusable" complaints — bugs are specific and targeted.
- Proposal #3229 shows sophisticated understanding of the codebase, indicating engaged power users.

---

## 8. Backlog Watch

### Items Needing Maintainer Attention

1. **PR #3118 — Remote WebSocket agent mode**  
   [GitHub](https://github.com/sipeed/picoclaw/pull/3118)  
   **Age:** 25 days, no maintainer comment  
   **Risk:** This is a significant feature addition. If it stalls, contributors may lose motivation. Needs review or clear rejection.

2. **PR #3115 — Fix inline data URL media extraction**  
   [GitHub](https://github.com/sipeed/picoclaw/pull/3115)  
   **Age:** 25 days, no maintainer comment  
   **Risk:** Session-history corruption can silently degrade user experience. Should be prioritized.

3. **Issue #3230 — Gemini thought_signature bug**  
   [GitHub](https://github.com/sipeed/picoclaw/issues/3230)  
   **Severity:** Critical regression affecting versions 0.2.9–0.3.1  
   **Status:** No response from maintainers, no fix PR. Users on affected versions cannot use tool calls with Gemini via OpenAI compat — this is a hard blocker for those users.

4. **Issue #3231 — SearXNG Basic Auth (Chinese language)**  
   [GitHub](https://github.com/sipeed/picoclaw/issues/3231)  
   **Status:** No response. Language barrier may require translation assistance or a bilingual maintainer.

### Observation
The three PRs from jp39 and AayushGupta16 (all open since June 12 or July 5-6) suggest a contributor backlog. The project may benefit from a triage process for PRs older than 14 days. The Gemini regression (#3230) is the most urgent unaddressed item due to its severity and version range.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-07

## 1. Today's Overview

NanoClaw saw sustained engineering velocity with **11 PRs** updated in the last 24 hours, though **8 remain open**, indicating a heavy review pipeline. The only **closed item** was a security-scoped audit log feature (PR #2967). There are **no new releases** to report, continuing a quiet period on that front. Community activity is moderate, with **3 Issues** updated (1 closed proposal review, 2 open), and a clear theme emerges: the project is undergoing a **major documentation refresh** driven by contributor @glifocat, alongside infrastructure improvements for Nix systems and provider reliability. Overall project health appears stable but with growing backlog risk.

---

## 2. Releases

**No new releases** since the previous digest. The last known release remains v2.1.38 (referenced in PR #2963). The documentation staleness sweep explicitly verified docs against `08a1ac9/v2.1.38`, confirming no new tagged release has superseded it.

---

## 3. Project Progress

**Merged/Closed PRs (3 total):**

- **[PR #662]** — *fix: service PATH broken on Nix-managed systems* (Closed, merged from `bashfulrobot`)  
  Fixes NanoClaw crash on NixOS/nix-darwin by adding `/run/current-system/sw/bin` to hardcoded PATH in systemd/launchd units. This unblocks a significant user segment and resolves a long-standing startup failure bug originally filed in March.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/662)

- **[PR #16]** — *Escape special regex characters in assistant name trigger pattern* (Closed, merged from `gavrielc`)  
  Security correctness fix: `ASSISTANT_NAME` environment variable with regex metacharacters (e.g. `(`, `+`) could break trigger matching. Adds `escapeRegex()` utility.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/16)

- **[PR #2967]** — *feat: opt-in local audit log (AUDIT_ENABLED)* (Merged from `moshe-nanoco`)  
  Ships a structured, SIEM-shaped NDJSON audit log under `data/audit/` for every `ncl` command, with `ncl audit list` read-back and post-write hook registry for future exporters. Key governance & compliance feature, likely ahead of enterprise use cases.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/2967)

**Notable Active PRs showing progress:**

- **[PR #2961]** — *docs: fix stale claims across README, CONTRIBUTING, CLAUDE.md and operational docs* (Open)  
  Mechanical factual fixes removing references to shipped/deprecated skills (`/add-signal`, `/add-matrix`). Part of a broad staleness sweep.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/2961)

- **[PR #2963]** — *docs: rewrite architecture.md and agent-runner-details.md to match current code* (Open)  
  Rewrites the most drifted documentation sections from scratch rather than patching.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/2963)

---

## 4. Community Hot Topics

**Most Active Issues (by last-updated time, all updated today):**

- **[#2968]** — *MCP server spawn/connect failures are silent — agent runs with missing tools and can claim success* (Open, 0 comments)  
  **Underlying need:** Operational observability. Users want **failure transparency** in the MCP tool integration layer. A silent failure where the agent continues with reduced capability is confusing and undermines trust. This is a high-user-impact usability bug.  
  [GitHub](https://github.com/nanocoai/nanoclaw/issues/2968)

- **[#2960]** — *Proposal: Live Zoom voice agent + K-ai KB integration — review for Kumuda* (Closed, 1 comment)  
  **Underlying need:** Real-time voice interaction + knowledge retrieval in enterprise meetings. Proposed voice agent joins Zoom via RTMS, uses Azure OpenAI Realtime API for voice, captures transcripts for action-item extraction. Signals demand for **voice-first AI assistants** embedded in existing communication workflows.  
  [GitHub](https://github.com/nanocoai/nanoclaw/issues/2960)

- **[#2959]** — *Image generation* (Open, 0 comments)  
  **Underlying need:** Simple image generation capability (user wants to create a shop logo). While the request is brief, it reflects user expectation that AI agents should include **multimodal output** (text + images).  
  [GitHub](https://github.com/nanocoai/nanoclaw/issues/2959)

**Most Active PRs (by last-updated time):**

- **[#2954]** — *Add Phase-1 security reporting & triage policy* (Open, security governance)  
  Four new files for SECURITY.md, disclosure policy. Representative of the project's growing security maturity.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/2954)

- **[#2965]** — *fix(agent-runner): match rate_limit_event as a top-level SDK message type* (Open, draft)  
  Fixes incompatibility with `@anthropic-ai/claude-agent-sdk` 0.3.x where rate limit events changed structure. Critical for production agents hitting API rate limits.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/2965)

---

## 5. Bugs & Stability

| Severity | Issue | Description | Has Fix PR? |
|----------|-------|-------------|-------------|
| **High** | [#2968] | MCP server failures are silent; agent runs with missing tools and claims success | No fix yet — this is a new open bug |
| **High** | [#2965] | Provider rate limit events mismatched with SDK 0.3.x — agent-runner won't detect throttling correctly | Yes (PR #2965, open draft) |
| **Medium** | [#2966] | Provider errors inside consumed batches are recorded as `completed` instead of `failed`; failed acks not mirrored | Yes (PR #2966, open draft) |
| **Fixed today** | [#662] | NixOS/nix-darwin PATH crash at startup | Merged |
| **Fixed today** | [#16] | Regex injection in assistant name trigger pattern | Merged |

**Verdict:** Two critical observability bugs (silent MCP failures, incorrect completion marking) remain without merged fixes. Project stability is compromised by **inaccurate success reporting** — agents can misrepresent their performance to users.

---

## 6. Feature Requests & Roadmap Signals

**User-Requested Features:**

- **Issue #2960** — Live Zoom voice agent + K-ai KB integration (meeting transcript ingestion, voice wake phrase, real-time Q&A). High production value request from a named reviewer ("Kumuda"), suggesting potential partnership or customer interest.
- **Issue #2959** — Image generation (basic logo creation). Surface-level request but signals desire for multimodal output.
- **PR #2958** — Teams-CLI-first credentials flow in SSF directive grammar (simplified Microsoft Teams skill setup replacing Azure portal walkthroughs). Indicates enterprise collaboration tool integration priority.

**Predictions for Next Release:**
- The **audit log** (PR #2967) is already merged, likely to ship in next release candidate.
- Documentation rewrites (PRs #2961, #2963, #2964, #2962) suggest an **NLP-based documentation release** is being staged — possibly the next minor version bump.
- The **voice agent proposal** (#2960) may not ship in next release but signals high-value roadmap direction for real-time voice + KB features.

---

## 7. User Feedback Summary

**Pain Points (explicit):**
1. **"Agent claims success with missing tools"** (#2968) — Most critical feedback today; MCP tool-chain failures are invisible to users.
2. **"Docs are stale, contradict the code"** (PR #2963 description) — Multiple contributors independently noticed docs had drifted significantly since v2.1.38.
3. **"NixOS doesn't work out of the box"** (#662, now fixed) — A specific platform failure that blocked a non-trivial user segment for 4 months.
4. **"Rate limit handling is wrong"** (#2965) — Users hitting provider API limits get misdiagnosed behavior.

**Use Cases Expressed:**
- Voice agent for real-time meetings (enterprise, customer-facing)
- Logo/image generation (small business/creator)
- Security-aware deployment (audit log, security policy PRs)

**Satisfaction Signals:**
- Multiple contributors (bashfulrobot, glifocat, moshe-nanoco, Koshkoshinsk) actively submitting complex PRs — indicates a healthy, engaged contributor base.
- Security policy (PR #2954) being drafted suggests the project is maturing toward enterprise readiness.

---

## 8. Backlog Watch

**Long-unanswered Issues/PRs Needing Maintainer Attention:**

| Item | Age (Created) | Last Update | Concern |
|------|---------------|-------------|---------|
| **PR #2954** — Security policy | 2026-07-03 | 2026-07-07 (assumed) | Waiting for "two maintainer sign-offs" per description. Stalled since July 4. Security policy is critical for responsible disclosure. |
| **Issue #2968** — Silent MCP failures | 2026-07-06 (new) | Same day | Zero comments — no maintainer engagement yet. User reported exact reproduction. |
| **PR #2958** — Teams CLI credential flow | 2026-07-06 (new) | Same day | No comments yet; authored by Koshkoshinsk. |
| **Docs PRs (#2961, #2962, #2963, #2964)** | 2026-07-06 (all) | Same day | All by single contributor (glifocat), no maintainer reviews yet. Risk of falling stale as code evolves. |

**Assessment:** The largest backlog risk is the **unreviewed documentation sprint** from glifocat — four PRs in one day with zero reviews. While the content is valuable, delay creates merge conflicts as `main` moves. Additionally, #2968 (silent MCP failure) received zero engagement within 24 hours of filing, which should be addressed promptly given its severity.

---

*Generated 2026-07-07 from NanoClaw public GitHub activity. Data snapshot reflects last 24 hours.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Based on the provided GitHub data for the **NullClaw** project (github.com/nullclaw/nullclaw), here is the project digest for **2026-07-07**.

---

### 1. Today's Overview
The NullClaw project is currently in a **quiet maintenance phase**, with no direct community activity (issues or releases) in the last 24 hours. The only signal of ongoing project health is the presence of one long-standing open Pull Request (#956) created by Dependabot to update the Docker base image from Alpine 3.23 to 3.24. While there are zero open issues or new releases to report, the project is demonstrating a low level of automated dependency housekeeping. Overall, the repository appears stable but lacks significant feature development or community engagement at this time.

### 2. Releases
**None.** No new versions or releases were created on or around 2026-07-07.

### 3. Project Progress
There were **zero merged or closed Pull Requests** in the last 24 hours. The only PR activity is the still-open Dependabot upgrade (#956). No features were advanced or bugs fixed in the current window.

### 4. Community Hot Topics
The only active Pull Request is the sole point of discussion:

- **PR #956 (Open):** *"ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group"*
    - **Author:** dependabot[bot]
    - **Status:** Updated 2026-07-06 (still open)
    - **Comments:** 0 | **Reactions:** 0
    - **Link:** [PR #956](https://github.com/nullclaw/nullclaw/pull/956)

**Analysis:** This is an automated dependency update with zero community engagement. It suggests that the project's infrastructure is being kept current, but there is no user-driven discussion or feature debate happening.

### 5. Bugs & Stability
**No new bugs, crashes, or regressions** were reported in the last 24 hours. There are zero open or closed issues recorded in this period. The project appears stable from a defect perspective.

### 6. Feature Requests & Roadmap Signals
**No explicit feature requests** were logged or discussed in the last 24 hours. The lack of issues or PR descriptions makes it impossible to predict the next version's content from this data snapshot.

### 7. User Feedback Summary
**No user feedback** (pain points, use cases, satisfaction/dissatisfaction) was captured in the last 24 hours due to the absence of issue creation, comments, or reactions.

### 8. Backlog Watch
The following item requires maintainer attention:

- **PR #956:** *"Bump alpine from 3.23 to 3.24"*
    - **Created:** 2026-06-15 (22 days ago)
    - **Status:** Open, updated 2026-07-06
    - **Action Required:** Review and merge to keep the Docker build environment current. This is a low-risk dependency bump that, if left unaddressed, could lead to build divergence or security gaps.
    - **Link:** [PR #956](https://github.com/nullclaw/nullclaw/pull/956)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for **2026-07-07**.

---

## IronClaw Project Digest — 2026-07-07

### 1. Today's Overview
The IronClaw project is experiencing **very high development velocity**. With 7 issues updated and **50 pull requests touched**, the team is deep in a major push toward the "Reborn" architecture milestone. Activity is heavily concentrated on production bug fixes, infrastructure hardening (CI, dependency upgrades), and closing critical test-coverage gaps for the new harness and gate-dispatch systems. The maintainer-team presence is strong, with over a dozen core-contributor PRs active today. This is a "heads-down engineering" phase with significant progress on stability and architectural completeness.

### 2. Releases
**None.** No new releases were published today. The last candidate for release is tracked in PR #5598 (`chore: release`), which proposes breaking changes to `ironclaw_common` (v0.4.2 -> v0.5.0) and `ironclaw_skills` (v0.3.0 -> v0.4.0). This PR remains open and has not yet been merged.

### 3. Project Progress
**15 PRs were merged or closed today**, marking notable progress in several areas:

- **Reborn Architecture Bug Fixes:**
    - **#5733 [CLOSED]:** Fixed `HookedLoopCheckpointPort` (Issue #5572) by forwarding `stage_checkpoint_payload`/`load_checkpoint_payload`. This fixes all hooks-enabled coordinator turns failing at the Checkpoint stage.
    - **#5722 [CLOSED]:** Fixed an integration-tier isolation issue where interaction services read a disjoint turn-run store, blocking real gate-dispatch testing.
- **CI & Infrastructure:**
    - **#5752 [CLOSED]:** Forwarded `sccache-dist` credentials to the benchmarks reusable, cutting compile-times for PRs by routing through a remote build cache.
    - **#5740 [CLOSED]:** Introduced harness seams for real-egress pipeline testing and reopen-resume-through-gate scenarios (test-support only).
    - **#5753 [CLOSED]:** Updated the IronLoop auto-review configuration for the CI bot.
- **Documentation:**
    - **#5748 [OPEN] & #5736 [OPEN]:** Major design doc added for the subagent thread-harness; un-dead code path for local-dev synthetic retries documented and fixed.

### 4. Community Hot Topics
**Most Active Issues & PRs:**

- **#5553 [OPEN] — [bug_bash_P2] Approval notifications disappear** (2 comments) — A user-facing bug causing approval notifications to flash and vanish. While only 2 comments, it is the most commented issue today, indicating a real pain point for end-users managing automations.
- **#5598 [OPEN] — [size: M] chore: release** — The open release PR is a long-standing hot topic (since Jul-03) with 0 new comments today, but its "size: M" scope and proposed breaking changes make it a key decision point for the project.

**Underlying Needs:** The community (internal bug-bash testers) is demanding **reliable UI notifications** for approval workflows. The lack of comment volume suggests issues are well-scoped by the core team rather than being community-debated, indicating a tightly managed BDFL-style process.

### 5. Bugs & Stability
**New/Updated Bugs Today (ranked by severity):**

1.  **Critical — #5553 [OPEN]**: Approval notifications disappearing. **Severity:** High (user-facing, functional loss). **Fix PR:** Not yet identified.
2.  **High — #5741 [OPEN]**: `builtin.http.save` fails with `OutputTooLarge` for large web pages. **Impact:** Blocks simple agent tasks (saving web content). **Fix PR:** Not yet identified.
3.  **Medium — #5557 [OPEN]**: Logs deep link requires two clicks to load. **Impact:** User frustration, inefficient debugging.
4.  **Medium — #5747 [OPEN]**: No way to unpair Slack on beta mount; users are stuck once paired. **Fix PR:** Not yet identified.

**New & Fixed (today):**
- **#5572 [CLOSED]:** Checkpoint port bug fixed (fix PR #5733 merged).
- **#5722 [CLOSED]:** Gate-dispatch unreachable path fixed.

### 6. Feature Requests & Roadmap Signals
**Strong Roadmap Signals (from PRs today):**

- **Subagent Thread-Harness Design (#5748):** A new design doc for how parent threads learn child subagents have settled. This is a major architectural feature for scalability and crash recovery.
- **CAS-Guarded Deletion (#5749, #5751):** Adding `delete_if_version` to the filesystem layer and pooling libSQL connections to prevent `SQLITE_MISUSE` under concurrent CAS storms. This signals a move toward **stronger concurrency guarantees** and more robust distributed state management.
- **WebUI Frontend Modernization (#5729, #5732):** Switching to pnpm and embedding prebuilt Vite assets. This is a significant DX and performance upgrade for the WebUI, likely targeting a `webui-v2-beta` release.

**Prediction:** The "Reborn" architecture is clearly the v0.30 target. Expect a release soon after **PR #5598** merges, bundling the breaking changes in `ironclaw_common` and `ironclaw_skills` alongside the subagent thread-harness and libSQL pooling fixes.

### 7. User Feedback Summary
**Pain Points (from Issues & PR descriptions):**
- *"Approval notifications disappear"* — Users running automations requiring network approval cannot trust the notification panel.
- *"The tool output was too large"* — Users trying to save large web pages (ESPN, etc.) hit an unexpected limit.
- *"No way to unpair Slack on the built-in host-beta mount"* — Slack beta testers feel trapped; `/pair` refuses to re-pair, and the UI has no disconnect.

**Satisfaction Signals:**
- The **speed of bug fixes** (e.g., #5572 fixed in <5 days, closed today) suggests a responsive core team.
- **Benchmark compile time reduction** (#5752) directly addresses developer pain points; the PR was created and closed in the same day.

### 8. Backlog Watch
**Long-unanswered Items Needing Attention:**

- **#5550 [OPEN] (dependabot PR, updated Jul-07, 13 updates):** This dependency upgrade PR has been open since Jul-02 and has 0 comments. The update includes a major bump of `agent-client-protocol` (0.10.4 -> 1.1.0) which may require careful review. **Status:** Stale, needs maintainer review.
- **#5695 [OPEN] (WebUI v2 crypto fallback):** Open since Jul-06, 0 comments. Fixes a `TypeError: Illegal invocation` on non-secure contexts. **Status:** Pending, possibly blocked by broader WebUI v2 beta merge.
- **#5598 [OPEN] (chore: release):** The open release PR is accumulating merge conflicts and unresolved breaking changes. **Status:** Blocking all new crate publishing, needs a decision from the maintainers.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-07

## Today's Overview
The project showed **high activity** on July 6, 2026, with **12 PRs updated** in the last 24 hours—11 of which were merged or closed and 1 remaining open. No new issues were created or updated, and no new releases were published. The development pace reflects a focused push on **OpenClaw cowork improvements, provider integrations, and UI cleanup**, with contributions concentrated among a few core maintainers (fisherdaddy, btc69m979y-dotcom, liuzhq1986). The absence of newly filed bugs suggests the current work is largely proactive feature delivery and refactoring rather than firefighting.

## Project Progress
The following 11 PRs were merged or closed today, advancing several key areas:

- **Settings & Cowork Cleanup (#2284)** — Redesigned model provider settings UI, removed home recent tasks card in cowork, archived legacy cron files, fixed Python console window spawning on Windows, and allowed dev server port override.
- **Optimize Skill, MCP, Memory & Mail UI (#2283)** — UI polish across multiple modules; details partially filled in PR description.
- **Scheduled Task & Settings Fixes (#2256)** — Fixed "do not notify" channel not persisting for scheduled tasks, and prevented white screen when deleting an active model.
- **Cowork Context Maintenance Fix (#2281)** — Guarded against stale final syncs restarting context maintenance after chat errors, with regression tests.
- **Heartbeat Cost-Control Policy & Legacy Repair (#2280)** — Added managed heartbeat policy prompt, stripped proactive-heartbeat guidance from bundled templates, and repaired existing HEARTBEAT.md files.
- **Hide Bundled xAI Plugin from Sync (#2279)** — Prevented the built-in xAI provider plugin from appearing in user plugin sync.
- **Heartbeat Toggle Setting (#2278)** — Added Settings > Agent Engine toggle for OpenClaw heartbeat, persisted via Cowork config.
- **MCP Stale Transport Config Fix (#2277)** — Normalized MCP server config clearing when editing or switching transport type.
- **xAI (Grok) OAuth Login Support (#2276)** — Added PKCE login via auth.x.ai with device-code fallback, wired into OpenClaw auth-profiles, and registered Grok model catalog.
- **Multi-Account Email Skill (#2275)** — Added multi-account support for the built-in `imap-smtp-email` skill, including settings UI, provider presets, connectivity testing, and legacy .env compatibility.

## Community Hot Topics
- **PR #2284** ([link](https://github.com/netease-youdao/LobsterAI/pull/2284)) — Model provider settings redesign and Python Windows console fix; the most comprehensive single PR today, touching renderer, main, openclaw, and cowork areas.
- **PR #2276** ([link](https://github.com/netease-youdao/LobsterAI/pull/2276)) — xAI OAuth integration; a significant new provider addition that broadens model access for users.
- **PR #1277 (Open)** ([link](https://github.com/netease-youdao/LobsterAI/pull/1277)) — Dependency bump for Electron (40.x → 43.x) and electron-builder; open since April 2, 2026, updated today. This prolonged open state may indicate concerns about breaking changes in Electron 43.

**Underlying needs**: Users are increasingly demanding seamless provider onboarding (OAuth flows, hidden bundled plugins), better cowork state management (heartbeat control, context restoration), and stable scheduled task behavior. The simultaneous work on email multi-account support and MCP config normalization points to users wanting more flexible, enterprise-ready integrations.

## Bugs & Stability
| Severity | Bug Description | Fix Status | Link |
|----------|----------------|------------|------|
| **High** | White screen when deleting an active model in settings | Fixed in PR #2256 (merged 2026-07-06) | [PR #2256](https://github.com/netease-youdao/LobsterAI/pull/2256) |
| **Medium** | Scheduled task notification channel "不通知" not saving properly | Fixed in PR #2256 (merged 2026-07-06) | [PR #2256](https://github.com/netease-youdao/LobsterAI/pull/2256) |
| **Medium** | Stale final sync could restart context maintenance after chat errors | Fixed in PR #2281 (merged 2026-07-06) | [PR #2281](https://github.com/netease-youdao/LobsterAI/pull/2281) |
| **Low** | Stale MCP transport headers/env/args not cleared when editing | Fixed in PR #2277 (merged 2026-07-06) | [PR #2277](https://github.com/netease-youdao/LobsterAI/pull/2277) |
| **Low** | Legacy cron files left after doctor migration | Fixed in PR #2284 (merged 2026-07-06) | [PR #2284](https://github.com/netease-youdao/LobsterAI/pull/2284) |
| **Low** | Python console window showing on Windows spawn | Fixed in PR #2284 (merged 2026-07-06) | [PR #2284](https://github.com/netease-youdao/LobsterAI/pull/2284) |

No critical-severity bugs were reported today. All six issues had fix PRs merged on the same day.

## Feature Requests & Roadmap Signals
- **xAI (Grok) Provider Integration** — Fully implemented via PKCE OAuth (#2276). Likely to appear in the next release.
- **Heartbeat Cost-Control** — New toggle in settings and managed policy prompt (#2278, #2280). A clear response to users concerned about model call costs.
- **Multi-Account Email** — Built-in IMAP/SMTP skill now supports multiple accounts with settings management (#2275). Indicates growing demand for email automation at scale.
- **MCP Config Normalization** — Transport-based clearing of stale configs (#2277). Suggests more users are adopting MCP and running into config drift.

**Prediction for next release**: The clustering of heartbeat cost controls, provider OAuth, and email multi-account features strongly suggests the upcoming version (likely v0.x.y) will be a **"Cowork & Provider Experience"** release, with an emphasis on production stability and user onboarding.

## User Feedback Summary
No direct user-commented issues were created or updated today. However, the content of merged PRs reveals several implicit pain points:
- **Settings instability**: The white screen on model deletion and scheduled task notification bugs (#2256) suggest users are hitting regressions in the settings UI.
- **Cost concerns**: The heartbeat cost-control policy (#2280) and toggle (#2278) directly address user anxiety about unintended model API calls.
- **Config drift**: MCP stale field fixes (#2277) point to users frustrated by incomplete configuration updates.
- **Provider onboarding friction**: OAuth login support (#2276) and hidden plugin sync (#2279) simplify what was previously a manual setup process.

Overall, user satisfaction likely rose due to the high volume of fixes and thoughtful UX improvements introduced today.

## Backlog Watch
- **PR #1277** ([link](https://github.com/netease-youdao/LobsterAI/pull/1277)) — Electron dependency bump (40.x → 43.x), open since **April 2, 2026** (96 days). Updated today but still awaiting review/merge. Major-version Electron upgrades can introduce breaking API changes; this prolonged open state may block users on newer OS versions or Electron-native features. **Needs maintainer attention** to assess and merge or close with a rationale.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for **2026-07-07**.

---

## Moltis Project Digest
**Date:** 2026-07-07
**Source:** github.com/moltis-org/moltis

### 1. Today's Overview
The Moltis project shows moderate maintenance activity today, driven entirely by a batch of five pull requests that were recently updated or closed. No new issues were filed or updated in the last 24 hours, and no new releases were published, indicating a period of consolidation rather than rapid feature development. The team resolved two critical operational bugs (scoped to Docker deployments and the Telegram streaming interface) and merged a major dependency upgrade for the WhatsApp integration. A small, focused effort remains on fixing OAuth compatibility for MCP servers and routine dependency bumps. Overall, the project is stable but actively polishing edge cases in core integrations.

### 2. Releases
**None.** No new versions were published today (last release data is not available).

### 3. Project Progress
Three pull requests were merged or closed in the last 24 hours, advancing platform reliability and integration coverage:

- **#1122 [CLOSED] fix: drop VOLUME declarations that shadow the home bind mount** (author: sayotte) — Resolved a Docker pathological case where declared `VOLUME` instructions prevented host bind mounts of the entire home directory. This fix improves Docker deployment flexibility and prevents silent data persistence conflicts.
- **#1113 [CLOSED] hotfix(telegram): stream final replies without completion notify** (author: s-salamatov) — Fixed a regression introduced in PR #1099 where the final message in a Telegram stream was not delivered when completion notifications were disabled. Restores correct edit-in-place streaming behavior.
- **#1144 [CLOSED] feat(whatsapp): bump whatsapp-rust 0.5 -> 0.6 with LID-native addressing** (author: juanlotito) — Updated the WhatsApp backend to use LID-native addressing (v0.6 of the Rust library), fixing inbound/lookup failures that occurred after WhatsApp migrated peer registrations. Pinned via `[patch.crates-io]` for stability.

### 4. Community Hot Topics
No new issues or discussions were filed today. The most active pull requests are long-running dependency updates and a targeted MCP fix:

- **#1120 [OPEN] fix(mcp): use direct fetch for resource_metadata URL from WWW-Authenticate** (updated 2026-07-06) — This PR addresses an `invalid_target` OAuth failure when connecting to Notion and Linear servers. The issue has high operational impact for users of MCP OAuth integrations, but has received no community comments or reactions.
- **#1087 [OPEN] chore(deps): bump tar from 0.4.45 to 0.4.46** (updated 2026-07-06) — A routine dependency bump that remains open after over a month. Low urgency but signals a backlog in automated dependency merges.

### 5. Bugs & Stability
No new bugs were reported today. The following stability fixes were deployed via closed PRs:

- **Medium severity:** Docker VOLUME shadowing (PR #1122) — Affects users running Docker deployments with bind mounts for the full home directory. Fix has been merged.
- **Low severity:** Telegram streaming regression (PR #1113) — Caused final replies to be silently dropped when completion notifications were disabled. Fix has been merged.
- **Low severity:** WhatsApp LID addressing failure (PR #1144) — Inbound lookups broke after WhatsApp backend migration. Fix has been merged.

No crashes or regressions remain open.

### 6. Feature Requests & Roadmap Signals
No user-submitted feature requests were active today. Based on merged PRs, the roadmap signals include:

- **WhatsApp LID-native addressing** (PR #1144) — Indicates the team is actively maintaining parity with third-party messaging platform migrations.
- **MCP OAuth improvements** (PR #1120) — The ongoing work to handle `WWW-Authenticate` headers suggests deeper MCP server compatibility is a priority.
- **Docker deployment flexibility** (PR #1122) — The removal of hard VOLUME declarations points to a desire to support more flexible, production-grade container setups.

**Prediction:** The next minor version is likely to include the MCP OAuth fix (PR #1120) and the WhatsApp dependency upgrade (PR #1144), along with the two merged bug fixes.

### 7. User Feedback Summary
No direct user feedback (comments, reactions, or separate issues) was recorded in the last 24 hours. The pattern of closed PRs suggests the team is responding to operational pain points reported indirectly:

- **Pain point:** Docker users experiencing conflicts with bind mounts and declared VOLUMEs (addressed by PR #1122).
- **Pain point:** Telegram users missing final streamed messages when completion notifications were disabled (addressed by PR #1113).
- **Pain point:** WhatsApp users unable to receive messages after provider-side LID migration (addressed by PR #1144).

Satisfaction appears stable, with no new dissatisfaction signals.

### 8. Backlog Watch
Two open items require maintainer attention:

- **#1087 [deps] Bump tar 0.4.45 → 0.4.46** (May 29, 2026) — This dependency update has been open for over five weeks with no activity. While low-risk, lingering automated PRs can create merge conflicts and should be either merged or closed.
- **#1120 [MCP OAuth fix]** (June 13, 2026) — This PR has been open for nearly a month with no maintainer review or community engagement. It addresses a concrete integration failure with Notion and Linear; a decision or request for testing would be valuable.

No critical security patches or breaking change discussions are in the backlog.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-07

Generated from [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) GitHub data

---

## 1. Today's Overview

CoPaw shows **high activity** with 48 PRs updated in the last 24 hours (25 open, 23 merged/closed) and 16 active issues. A **hotfix patch release v1.1.12.post3** was published to resolve an ACP compatibility break affecting 1.x users. The project is undergoing a **significant testing infrastructure push** — six PRs from contributor `hanson-hex` add hundreds of unit tests across channels, approvals, inbox, console hooks/stores, API modules, and runtime/security areas. Meanwhile, **four critical bugs** remain open around auto-memory persistence loss (Issues #5775, #5773), context compression crashes (Issue #5789), and scroll-based context truncation (#5765 has a fix PR under review). Community engagement is moderate, with the most active discussion on Feishu message delivery failures (#5757, 11 comments).

---

## 2. Releases

### v1.1.12.post3 (Published 2026-07-06)
- **What's Changed:**
  - **Fix 1.x compatibility with ACP:** Pinned ACP version to resolve a breaking change in ACP that caused historical `1.x` versions of QwenPaw to malfunction. (@rayrayraykk)
- **Compatibility Note:** This is a safety release for users still on the 1.x branch. Users on 2.x are unaffected.

**No migration notes or breaking changes** — this release only pins a dependency version. Upgrade recommended for all 1.x deployments.

---

## 3. Project Progress

### Merged/Closed PRs in Last 24h (23 total)

**Key merges:**

| PR | Title | Impact |
|----|-------|--------|
| [#5824](https://github.com/agentscope-ai/CoPaw/pull/5824) | fix(channels): timeout hung message batches | Prevents LLM/tool call hangs from blocking entire channel queue indefinitely |
| [#5822](https://github.com/agentscope-ai/CoPaw/pull/5822) | fix(console): match active provider for context threshold | Fixes incorrect context compression threshold display when multiple providers share model IDs |
| [#5823](https://github.com/agentscope-ai/CoPaw/pull/5823) | fix(feishu): send markdown images as image parts | Fixes Feishu not rendering standard Markdown image syntax inside text/post messages |
| [#5815](https://github.com/agentscope-ai/CoPaw/pull/5815) | refactor(memory): simplify auto-memory search state | Removes `persist_to_context` config; moves turn-level state to memory manager to survive middleware rebuilds |
| [#5805](https://github.com/agentscope-ai/CoPaw/pull/5805) | Feat/tauri devtools | Adds hidden DevTools entry point for desktop performance debugging without exposing to ordinary users |

**Notable open PRs under review:**
- [#5765](https://github.com/agentscope-ai/CoPaw/pull/5765) — fix(scroll): protect active turn, graduated pressure relief (addresses #5746, #5778, #5776)
- [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) — feat(computer-use): Windows desktop GUI automation (UIA + Tauri control mode)
- [#5751](https://github.com/agentscope-ai/CoPaw/pull/5751) — fix(chat): prioritize built-in slash commands (first-time contributor)

---

## 4. Community Hot Topics

### Most Active Discussions

1. **[Issue #5757](https://github.com/agentscope-ai/CoPaw/issues/5757) — [Bug] Feishu message no reply** (11 comments, open since July 3)
   - **User:** Both Docker and hosted AgentScope Platform instances show first message replied, then subsequent messages receive no response despite bot acknowledging receipt.
   - **Underlying need:** Reliability of Feishu channel communication — users expect consistent two-way conversation without silent drops.

2. **[Issue #5401](https://github.com/agentscope-ai/CoPaw/issues/5401) — Console session with large tool-use history fails to render** (9 comments, open since June 23)
   - **Root cause identified:** Backend API converts `tool_use`/`tool_result` blocks to `type: "data"` DataContent, but frontend only handles `tool_use`/`tool_result` types — causing white screen crash.
   - **Community signal:** Power users with complex multi-tool workflows are hitting UI limits. A fix PR was expected but not yet surfaced in this digest.

3. **[Issue #5797](https://github.com/agentscope-ai/CoPaw/issues/5797) — Timer task result popup notification should have toggle** (3 comments, open since July 6)
   - **User sentiment:** Frustration over PR #4803 which blanket-removed popup notifications. User explicitly says "don't make decisions for users — give us a switch."
   - **Pattern:** Recurring theme of user autonomy vs. developer-driven defaults.

4. **[Issue #5788](https://github.com/agentscope-ai/CoPaw/issues/5788) — Skills list only shows 20 items, scroll-to-load-more broken** (2 comments)
   - **Technical cause:** `IntersectionObserver` sentinel fails to fire when page container has CSS `overflow` restrictions preventing scrolling.
   - **Impact:** Users with more than 20 skills cannot access their full library — usability blocker for power users.

---

## 5. Bugs & Stability

### Critical/High Severity

| Issue | Description | Severity | Fix Status |
|-------|-------------|----------|------------|
| [#5775](https://github.com/agentscope-ai/CoPaw/issues/5775) | Auto-memory interval never triggers — MemoryMiddleware state lost across per-request agent rebuilds | **Critical** — memory persistence broken | Open. Related PR #5815 merges state fix |
| [#5789](https://github.com/agentscope-ai/CoPaw/issues/5789) | Context compression crashes when model output exceeds JSON Schema `maxLength` | **High** — crashes on every compress cycle if model exceeds 200-char limit | Open. No fix PR yet |
| [#5717](https://github.com/agentscope-ai/CoPaw/issues/5717) | Runtime 2.0: Malformed tool-call history causes endless repeated tool execution | **High** — infinite loop in tool execution | Open. No fix PR yet |
| [#5773](https://github.com/agentscope-ai/CoPaw/issues/5773) | Memory search causes OpenCode Go channel to error — all requests fail when `auto_memory_search_config` enabled | **High** — OCG provider unusable with memory search | Open. No fix PR yet |

### Medium/Low Severity

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#5710](https://github.com/agentscope-ai/CoPaw/issues/5710) | Context compression lacks anchor protection — critical messages (channel context, task instructions) get truncated | Open. Related to #5765 |
| [#5782](https://github.com/agentscope-ai/CoPaw/issues/5782) | Google Gemini embedding returns `index=None` causing silent fallback to keyword search | **Closed** (duplicate/reported) |
| [#5816](https://github.com/agentscope-ai/CoPaw/issues/5816) | ImportError: `cannot import name 'SetSessionModelResponse' from 'acp'` | **Closed** (Docker build issue) |
| [#5759](https://github.com/agentscope-ai/CoPaw/issues/5759) | Plan mode repeatedly reads same file 5x in single execution chain | Medium — performance/inefficiency | Open |

### Regression Tests Added
Six PRs (#5807–#5814) from `hanson-hex` add **comprehensive regression test suites** (400+ tests) across channels, approvals, inbox, console hooks/stores, API modules, and runtime/security — directly pinning issues #5479 (console blank on large sessions) and #5090 (rm-protection bypass).

---

## 6. Feature Requests & Roadmap Signals

### New Feature Requests (Last 24h)

| Issue | Feature | Likelihood for Next Release |
|-------|---------|---------------------------|
| [#5821](https://github.com/agentscope-ai/CoPaw/issues/5821) | Granular `rejects_media` capability — strip per media type instead of all-or-nothing | **High** — small scope, clear fix, already has PR |
| [#5780](https://github.com/agentscope-ai/CoPaw/issues/5780) | Multi-user account management for team use | **Medium** — complex scope, but frequent request from enterprise users |
| [#5797](https://github.com/agentscope-ai/CoPaw/issues/5797) | Timer task popup notification toggle | **High** — low-hanging UX improvement, community pressure |
| [#5316](https://github.com/agentscope-ai/CoPaw/issues/5316) | Recency-aware ranking for `memory_search` daily notes | **Closed/merged** — already in progress |

### Roadmap Signals
- **Desktop automation** is advancing significantly: PR #5187 (Windows GUI automation with UIA) and PR #5814 (Bundle Node runtime for ACP desktop) signal strong investment in **Computer Use** capability and **desktop-first deployment**.
- **Reranker integration** for memory search is being pursued in parallel by two contributors (#5669 — qwen3-rerank, #5692 — standard reranker for reme0.4), suggesting this is a prioritized roadmap item.
- The **testing infrastructure blitz** (6 PRs from `hanson-hex`) suggests the team is gearing up for a **stability-focused release** before introducing major new features.

---

## 7. User Feedback Summary

### Pain Points
1. **Memory search breaks multiple channels** — Issue #5773 (OCG) and #5775 (auto-memory interval) show memory features are currently unreliable across providers. Users disabling memory search as a workaround.
2. **Context compression is dangerous** — Issue #5710 and #5789 show compression can silently destroy context (channel awareness lost, critical instructions truncated) or crash entirely. Users explicitly report that agents "forget which channel they're on" after compression.
3. **Feishu channel reliability** — Issue #5757 shows first-message-only response. This is a high-frustration scenario because the bot appears to acknowledge but doesn't reply, confusing users.
4. **Skills UI limited to 20 items** — Issue #5788 is a basic UX regression that blocks skill-heavy users.

### Use Cases Evidenced
- **Enterprise team deployments** via IM channels (Feishu, DingTalk, Discord, Telegram) — multiple issues reference team use
- **Desktop automation** — emerging use case from PR #5187 (Windows GUI automation)
- **Scheduled tasks with user reminders** — Issue #5797 shows users want configurable notifications

### Satisfaction Signals
- **Positive:** Two first-time contributors submitting PRs (#5751, #5669) suggests good onboarding experience
- **Negative:** Referenced PR #4803 (which disabled popup notifications) created a vocal backlash (Issue #5797). Users want configuration over blanket removal.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Reason for Watch |
|-------|-----|------------------|
| [#5401](https://github.com/agentscope-ai/CoPaw/issues/5401) | **14 days** | Console white-screen crash on large tool-use sessions. Root cause identified for 2+ weeks, no fix PR yet. Affects power users. |
| [#5710](https://github.com/agentscope-ai/CoPaw/issues/5710) | **6 days** | Context compression lacks anchor protection — dangerous silent context loss. No fix PR despite high interaction count. |
| [#5717](https://github.com/agentscope-ai/CoPaw/issues/5717) | **5 days** | Endless tool execution loop in Runtime 2.0 — can drain API credits. No fix PR. |
| [#5759](https://github.com/agentscope-ai/CoPaw/issues/5759) | **4 days** | Plan mode repeatedly reads same file — performance waste. No label or assignment. |

### PRs Needing Review

| PR | Age | Status |
|----|-----|--------|
| [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) feat(computer-use) | **23 days** | Open, no recent review activity. Large feature (Windows GUI automation) — likely needs careful review |
| [#5669](https://github.com/agentscope-ai/CoPaw/pull/5669) feat(memory): qwen3-rerank | **7 days** | First-time contributor, labeled `first-time-contributor` and `Under Review`. Needs timely maintainer feedback to sustain contributor engagement. |
| [#5751](https://github.com/agentscope-ai/CoPaw/pull/5751) fix(chat): slash commands | **4 days** | First-time contributor. Small fix, low risk — good candidate for quick merge. |

---

*Generated from CoPaw GitHub data on 2026-07-07. Data includes issues/PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-07

## Today's Overview

ZeroClaw shows **very high activity** today, with **50 Pull Requests updated in the last 24 hours** (44 open, 6 merged/closed) and **9 open Issues** receiving updates. The project is in an **intense development and bug-fixing sprint**, with significant forward motion on CI reliability, security vulnerability remediation, and runtime stability. No new releases were published today. The maintainer team is actively processing contributions from a diverse set of contributors, with multiple high-priority (`priority:p1`) bugs being addressed concurrently. **Project health is strong but strained**, as the volume of open PRs (44) suggests a growing review backlog.

## Releases

**No new releases today.** The last release was tracked under Issue #8073 (v0.8.3 planning), which remains open.

## Project Progress

**6 Pull Requests were merged/closed today:**

- **#3149** — `fix(tools): improve git_operations error messages` (by palomyates516-alt) — More specific, actionable error messages for branch specification and naming errors.
- **#3156** — `feat(config): add api_path configuration for custom provider endpoints` (by palomyates516-alt) — Adds optional `api_path` override for provider endpoints, per-profile and global.
- **#3392** — `feat(docker): add debian production image variant with shell support` (by palomyates516-alt) — Closes #3359, a Debian-based Docker variant.
- **#8781** — `fix(security): remove stale advisory ignores for crates no longer in dependency tree` (by Project516) — Removes 18 stale `cargo-deny`/`cargo-audit` ignores that were causing CI gate failures.
- **#8776** — `fix(ci): make local gates workspace-aware` (by IftekharUddin) — Aligns local `clippy` with GitHub CI by using `--workspace --exclude`.
- **#8778** — `chore: Optimize images` (by Project516) — Optimizes 3 SVG/image assets via ImgBot.

**Key feature advances in open PRs:**
- **#8639** (tidux) — ZeroCode TodoWrite tracker with RPC + ACP + durable persistence (size: XL, risk: high)
- **#8676** (databillm) — Exposes per-cron-job `uses_memory` flag in CLI, tools, and gateway API
- **#8619** (Nillth) — Unified memory-context injection keyed on TurnOrigin ingress provenance (size: L)
- **#8313** (JordanTheJet) — Default to compact skill injection, deprecate full mode
- **#8752** (alexandme) — Nests memory and RAG OTel spans under the turn trace

## Community Hot Topics

**Most active Issues (by comments):**

1. **#8753** — `[bug, ci] chore(ci): rust_quality_gate.sh misses member-crate test targets` (3 comments, 0 👍)  
   *Analysis:* A CI gate bug that could allow broken test code to land on master, bypassing workspace-level checks. Immediate concern for code quality.  
   [View Issue #8753](zeroclaw-labs/zeroclaw/issues/8753)

2. **#7521** — `[Feature]: file_read — decode non-UTF-8 text via charset detection` (3 comments, 0 👍)  
   *Analysis:* Long-standing (since June 11) feature request for encoding detection in file reads. Affects users handling legacy text files (Windows-1251, Latin-1, Shift-JIS).  
   [View Issue #7521](zeroclaw-labs/zeroclaw/issues/7521)

3. **#7944** — `[Feature]: Voice satellite (ESP32/smartphone/PWA) + approval buttons` (2 comments, 0 👍)  
   [View Issue #7944](zeroclaw-labs/zeroclaw/issues/7944)

4. **#7943** — `[Feature]: Realtime voice-host channel (backend-agnostic WS client)` (2 comments, 0 👍)  
   [View Issue #7943](zeroclaw-labs/zeroclaw/issues/7943)

5. **#8519** — `Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs` (1 comment, 0 👍)  
   [View Issue #8519](zeroclaw-labs/zeroclaw/issues/8519)

## Bugs & Stability

**Critical Bugs (priority:p1):**

| Issue | Title | Severity | Status | PR Exists? |
|-------|-------|----------|--------|------------|
| #8753 | CI quality gate misses workspace test targets | High | Open, accepted | Not yet |
| #8519 | 22 RustSec advisories failing CI, CVE drift between audit/deny tools | High | In-progress, accepted | Not yet |
| #8675 | Malformed tool-call arguments sent unvalidated → provider 400 → empty reply | S1 - Workflow blocked | Open, accepted | Not yet |
| #8696 | Enforce leading user-turn invariant before provider dispatch | High (p1) | Open | **Yes** (#8696) |
| #8782 | crossbeam-epoch CVE (RUSTSEC-2026-0204) — invalid pointer dereference | High | Open, accepted | **Yes** (#8782, same author) |

**Notable:** PR **#8690** (wangmiao0668000666) fixes a **security authorization bypass** in `/model --agent`: the endpoint writes to a key that drops sender identity, allowing any sender to impersonate any agent.

**PR #8746** (vrurg) addresses active goal self-resume loops — a potentially disruptive behavioral bug (risk: high, size: XL).

## Feature Requests & Roadmap Signals

**Most significant feature signals from Issues:**

1. **#8780** — *Realtime speech-to-speech channel (Gemini Live)* — Native audio-to-audio model with turn-taking, barge-in, function-calling; ZeroClaw supplies tools, approval gates, memory. **Newest issue created yesterday**, likely targeting v0.8.4+.
2. **#7943** — *Realtime voice-host channel* — Backend-agnostic WebSocket client for external realtime voice hosts (CrispASR, sherpa-onnx). **Precursor to #8780.** Sister issue #7944 (voice satellite hardware) also active.
3. **#7521** — *file_read charset detection* — Long-standing request (June 11). Non-UTF-8 text decoding via encoding detection. Unaddressed for nearly a month — could slip to v0.9.0.

**Predictions for next version (v0.8.3 or v0.8.4):**
- Voice channels (#7943, #8780, #7944) appear to be a **major roadmap initiative** given sustained author attention (metalmon)
- ZeroCode TodoWrite tracker (#8639) is large (XL) and nearing completion
- Unified memory-context injection (#8619) is a foundational architecture change
- Compact skill injection (#8313) is likely to ship soon

## User Feedback Summary

**Observed pain points from Issues:**
- **File encoding blindness** (Issue #7521): Users cannot read Windows-1251, Latin-1, or Shift-JIS files — all non-ASCII bytes become `U+FFFD` replacement characters. Affects non-English-language users heavily.
- **Provider 400 errors** (Issue #8675): Models emitting malformed JSON tool calls cause silent empty replies, blocking workflows on OpenRouter/Azure/OpenAI providers. S1 severity.
- **CI reliability** (Issue #8753): Broken test code can merge to master, eroding trust in CI gates.
- **CVE fatigue** (Issue #8519): 22 unaddressed RustSec advisories suggest dependency management is struggling to keep pace.

**Use case signals:**
- Voice/speech-to-speech multimodal assistants (physical satellite devices, Gemini Live) — advanced use case
- Cron job memory management (#8676) — users want finer-grained control over which cron jobs have memory context

## Backlog Watch

**Issues needing maintainer attention:**

1. **#7521** — *file_read charset detection* (June 11, 26 days open, **0 maintainer response** visible) — Priority:p2, risk:high. Affects all non-English users reading legacy-encoded files. No assignee, no PR, no comments from core team. **This is the oldest open item with zero maintainer action.**

2. **#8073** — *v0.8.3 tracker* (June 20, 17 days open) — The planning tracker for the next release. Still open with 0 comments, suggesting **release engineering may be stalled** or happening ad-hoc.

3. **#8753** — *CI quality gate* (July 6, 1 day open, 3 comments) — Already has author engagement but no maintainer assignment or PR yet. Risk of **broken code merging** increasing daily.

4. **#8519** — *CVE reconciliation* (June 30, 7 days open) — In-progress status but no PR linked. with 22 advisories failing CI, **master may be broken** for security-sensitive deployments.

</details>