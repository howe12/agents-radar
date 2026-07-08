# OpenClaw Ecosystem Digest 2026-07-08

> Issues: 241 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-08 05:43 UTC

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

OpenClaw shows exceptionally high activity with **241 issues** updated and **500 PRs** touched in the last 24 hours, but **no new releases** were shipped — a notable gap given the volume of P1 regressions circulating. The merge ratio is roughly **125 closed/merged vs 375 still open PRs** (25% close rate), and only **6 of 241 issues closed** (~2.5%), suggesting maintainers are triaging and merging but leaving the bulk of the queue open. The dominant themes of the day are **channel transport stability (Telegram/Feishu/Signal/Mattermost/QQBot), session-state regressions from recent releases, and a 4-5× performance regression in `openclaw doctor --fix`** introduced in 2026.5.20. Healthy throughput is offset by a growing backlog of diamond-lobster and platinum-hermit rated items that have lingered since March–May 2026.

## 2. Releases

**No new releases in the last 24 hours.** Given the number of unfixed regressions affecting session-state, message-loss, and crash-loop categories, a patch release (e.g. 2026.6.x or 2026.7.x) appears overdue — operators on 2026.5.20 and 2026.6.x continue reporting broken workflows in the wild.

## 3. Project Progress

Of the 125 PRs closed/merged in the last 24 hours, no individual closed PR is visible in the latest-PR feed, but the **open PR queue** reveals several clusters of maintainer-advancing work:

- **Timeout hardening across all channel plugins** — a sweep adding/abiding HTTP request timeouts is in progress: QQBot (#102028), Mattermost (#102027), Chutes (#102026), Signal (#101380). These appear to be coordinated against issue **#95865** (likely a master tracking issue for hung OAuth/HTTP requests).
- **OAuth profile plumbing fix** — PR **#101989** passes `authProfileStore` through the loopback MCP bridge so OAuth-only tools (xAI `x_search`/`code_execution`) register correctly for claude-cli sessions; closes **#101967**.
- **Cron duplicate-fire fix** — PR **#102000** keeps gateway restarts from re-running cron jobs whose `lastRunStatus=ok` is already current; closes **#101988**.
- **Embedded-agent runtime perf** — PR **#89040** (large, platinum-hermit rated) removes event-loop stalls of 14–22s during `embedded_run` bootstrap (replaces sync `readFileSync`/`closeSync` with async equivalents).
- **Gateway hot-reload correctness** — PR **#101432** clears stale model-discovery cache on config reload, addressing phantom “Unknown model” errors (**#99773**).
- **Maintenance hygiene** — PR **#102044** (`refactor(slack): localize internal declarations`) was the only clearly closed PR visible in the feed.

Net effect: stable incremental progress on runtime stability, with the **merge-risk: 🚨 availability** and **🚨 session-state** flags from PRs like #89040 indicating non-trivial behavior changes landing without a release tag.

## 4. Community Hot Topics

The most-discussed threads of the day cluster around three underlying needs:

| Rank | Item | Comments | Underlying Need |
|---|---|---|---|
| 1 | [#85333](https://github.com/openclaw/openclaw/issues/85333) — `doctor --fix` 4-5× regression in 2026.5.20 | 15 | Need for **release-quality performance regression tests** before publishing; users upgrade and discover throughput collapse on production hosts. |
| 2 | [#43367](https://github.com/openclaw/openclaw/issues/43367) — Multi-agent orchestration: config overwrites, session-lock failures | 13 | Need for **first-class concurrent `agents add/config` semantics** and child-session lifecycle guarantees. |
| 3 | [#39604](https://github.com/openclaw/openclaw/issues/39604) — Feature: `tools.web.fetch.allowPrivateNetwork` | 13 | Need for **graduated network-policy controls** so self-hosted users can opt in to internal-network `web_fetch`. |
| 4 | [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent cost budget enforcement | 12 | Need for **spend guardrails at the gateway** without bolting on external monitoring. |
| 5 | [#41744](https://github.com/openclaw/openclaw/issues/41744) — Feishu: image attachment lost before outbound | 12 | Need for **end-to-end media preservation** through the Feishu outbound pipeline. |
| 6 | [#40001](https://github.com/openclaw/openclaw/issues/40001) — Write tool has no append mode, destroys shared files | 11 | Need for **safe primitives for shared scratch files** (especially across cron/main sessions). |
| 7 | [#38439](https://github.com/openclaw/openclaw/issues/38439) — Webchat `/avatar/{agentId}` returns 404 | 10 | Need for **non-regressive endpoint contracts** in the control UI. |
| 8 | [#38327](https://github.com/openclaw/openclaw/issues/38327) — Gemini 3.1 Pro regression on 2026.3.2 | 10 | Need for **provider regression coverage** in CI when bumping model versions. |
| 9 | [#39476](https://github.com/openclaw/openclaw/issues/39476) — A2A `sessions_send` re-entry causes duplicates | 10 | Need for **A2A loop prevention** in agent-to-agent messaging. |

**Cross-cutting observation:** the top conversations share a common pain — *config changes and concurrent agents destabilize session/message plumbing*. Operators want **bounded, declarative guarantees** (cost caps, network scopes, tool semantics) instead of inferred behavior.

## 5. Bugs & Stability

**Severity-ranked incidents reported or actively discussed today** (severity inferred from `impact:*`, `issue-rating`, and regression tags):

| Sev | Issue | Title (short) | Fix PR? |
|---|---|---|---|
| **P1 / Diamond Lobster** | [#38327](https://github.com/openclaw/openclaw/issues/38327) | “Cannot convert undefined…” Gemini 3.1 Pro on 2026.3.2 (crash-loop on every turn) | Linked PR open |
| **P1 / Diamond Lobster** | [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write tool lacks append mode → shared `memory/YYYY-MM-DD.md` overwrites (data-loss) | Linked PR open |
| **P1 / Diamond Lobster** | [#41165](https://github.com/openclaw/openclaw/openclaw/issues/41165) | Telegram DMs leak into `agent:main:main` after #40519 fix | Linked PR open |
| **P1 / Diamond Lobster** | [#41165](https://github.com/openclaw/openclaw/issues/41165), [#42820](https://github.com/openclaw/openclaw/issues/42820) | Feishu `message` tool: poll-schema guard rejects plain file sends | Linked PR open |
| **P1 / Diamond Lobster** | [#42820](https://github.com/openclaw/openclaw/issues/42820) | Feishu send action polluted by poll schema fields | Linked PR open |
| **P1 / Diamond Lobster** | [#45718](https://github.com/openclaw/openclaw/issues/45718) | Session bloat — `skillsSnapshot`/`systemPromptReport` accumulate on every run (crash from context overflow) | Linked PR open |
| **P1 / Diamond Lobster** | [#44910](https://github.com/openclaw/openclaw/issues/44910) | OpenAI Codex error JSON leaks into user chat | Linked PR open |
| **P1 / Platinum Hermit** | [#85333](https://github.com/openclaw/openclaw/issues/85333) | `doctor --fix` 4-5× slowdown (55s → 229s+) introduced in 2026.5.20 | **None — needs live repro** |
| **P1 / Platinum Hermit** | [#40611](https://github.com/openclaw/openclaw/issues/40611) | Heartbeat drift fix (#39182) causes Telegram to block during active chats | **None** |
| **P1 / Platinum Hermit** | [#82662](https://github.com/openclaw/openclaw/issues/82662) | Isolated cron `agentTurn` fails “setup timed out before runner start” on 2026.5.12 | **None** |
| **P1 / Platinum Hermit** | [#92057](https://github.com/openclaw/openclaw/issues/92057) | Gateway slows/times out under multi-session multi-agent load | **None** |
| **P1 / Platinum Hermit** | [#43374](https://github.com/openclaw/openclaw/issues/43374) | All LLM API calls time out simultaneously (multi-agent concurrency bug) | **None** |
| **P1 / Platinum Hermit** | [#39807](https://github.com/openclaw/openclaw/issues/39807) | Billing 402 → 5,206+ no-backoff retries (death spiral) | Linked PR open |
| **P1 / Platinum Hermit** | [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A `sessions_send` echo back → duplicate messages | Linked PR open |
| **P1 / Platinum Hermit** | [#94251](https://github.com/openclaw/openclaw/issues/94251) | Ollama remote provider streaming stalls — `model_call:started` never progresses | **None** |
| **P1 / Platinum Hermit** | [#44134](https://github.com/openclaw/openclaw/issues/44134) | Frequent tool-schema reload → Google Antigravity false-positive abuse ban | **None** |

**Pattern:** Roughly **half of P1 incidents already have a linked fix PR**, but **several of the highest-impact regressions (perf, heartbeat, cron, multi-agent concurrency, Ollama) remain unaddressed** with maintainer review still pending.

## 6. Feature Requests & Roadmap Signals

The most-engaged feature requests — predicted likelihood of landing in the next release based on activity, linked PRs, and rating:

| Feature | Issue | 👍 | Likelihood | Rationale |
|---|---|---|---|---|
| `tools.web.fetch.allowPrivateNetwork` opt-in | [#39604](https://github.com/openclaw/openclaw/issues/39604) | 11 | **High** | Sustained demand, security-review flag set, low-blast-radius opt-in switch. |
| Per-agent cost budget enforcement at gateway | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 1 (long thread) | **Medium-High** | Strategic; complements existing `session-cost-usage.ts`; needs product decision. |
| Gateway lifecycle hooks (`onSubagentComplete`, `onToolCallThreshold`, `onTurnComplete`) | [#43454](https://github.com/openclaw/openclaw/issues/43454) | 1 | **Medium** | Power-user demand; requires design work; aligns with subagent observability theme. |
| MathJax/LaTeX in Control UI | [#42840](https://github.com/openclaw/openclaw/issues/42840) | 9 | **Medium-High** | High vote count, narrow surface area. |
| Heading-aware chunking + entity extraction for memory search | [#44395](https://github.com/openclaw/openclaw/issues/44395) | 2 | **Medium** | Concrete API proposal; complements memory bloat concerns. |
| YAML config support | [#45758](https://github.com/openclaw/openclaw/issues/45758) | 2 | **Low-Medium** | Strong maintainer-traction signal; rating is “off-meta tidepool” — unlikely in near-term core, possibly accepted as pluggable parser. |
| `.gitignore`-style exclude in `backup create` | [#40786](https://github.com/openclaw/openclaw/issues/40786) | 1 | **High** | Clear, focused ask with security value (avoid bundling `.env`). |
| Confirmation step for `/new` and `/reset` | [#45564](https://github.com/openclaw/openclaw/issues/45564) | 1 | **High** | Trivial UX change; high-data-loss-prevention value. |
| Subagent lifecycle observability + async supervision | [#38626](https://github.com/openclaw/openclaw/issues/38626) | 0 | **Medium** | Strategic; pairs with #43454 hooks. |
| Browser tool field-test improvements (CSS selectors, etc.) | [#44431](https://github.com/openclaw/openclaw/issues/44431) | 1 | **Medium** | Detailed field report; concrete UX wins (selector support, retries, file uploads). |
| Bounded memory tool with hard character limits | [#42877](https://github.com/openclaw/openclaw/issues/42877) | 1 | **Medium** | Directly addresses #45718 bloat; maintainer-review pending. |
| Azure Foundry GPT Realtime Talk via gateway relay | [#87325](https://github.com/openclaw/openclaw/issues/87325) | 1 | **Low** | Off-meta tidepool; niche but feasible. |
| Chat-first Android surface (potential upstreaming) | [#46058](https://github.com/openclaw/openclaw/issues/46058) | 1 | **Low (exploratory)** | Author explicitly disclaims full upstream. |

**Strategic signal:** Cost, subagent orchestration, lifecycle hooks, and graduated network policies are the four highest-leverage themes — a coherent “**governance plane**” could plausibly become the 2026.7 or 2026.8 milestone.

## 7. User Feedback Summary

Two field reports dominate user-feedback signal:

- **[#41372](https://github.com/openclaw/openclaw/issues/41372) — “25 findings from 4 weeks of self-hosted production use (v2026.2.6 → 2026.3.8, 2GB VPS, Telegram + Discord, multi-cron)”**  
  Pain points: config-loading crashes on low-memory hosts, CLI doc gaps, Discord message-loss in cron-driven flows, and `agentTurn` timeouts. **Satisfaction:** constructive, very engaged; user self-describes as building “patterns that might be useful upstream.” Net sentiment is **frustrated but loyal**.

- **[#44431](https://github.com/openclaw/openclaw/issues/44431) — “Browser tool: 7 improvements from real-world automation field test (9+ email provider signups)”**  
  Pain points: lack of CSS selector support forcing verbose snapshot/ref workflow; missing retries on transient failures; no file upload helper; and inconsistent handle resolution on dynamic UIs. **Satisfaction:** detailed, actionable; convergence with other browser-tool complaints suggests **the browser tool is materially feature-incomplete** for production automation.

- **[#42877](https://github.com/openclaw/openclaw/issues/42877) — “5 weeks as daily driver”**  
  Pain point: workspace `MEMORY.md` grows without bound; user has manually implemented character-cap workarounds. Reinforces the bloat theme from #45718.

- **Cross-cutting satisfaction signal:** `clawsweeper:*` automation labels and `clawsweeper[bot]` authored PRs (#101748) indicate a maintainer-side triage bot is actively shepherding issues — users commenting on tagged issues should expect faster-than-average routing, but the **6-of-241 issue close rate** shows the bot is not yet a substitute for human merges.

## 8. Backlog Watch

High-impact items that have lingered **without a merged fix or maintainer turn-around** and warrant attention:

- **[#85333](https://github.com/openclaw/openclaw/issues/85333) — `doctor --fix` perf regression since 2026.5.20** (P1, platinum-hermit, **needs live repro**)  
  Aging since 2026-05-22; blocks operators from running maintenance. Highest comment count.

- **[#82662](https://github.com/openclaw/openclaw/issues/82662) —

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem (2026-07-08)

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is in a high-velocity **stabilization-and-consolidation phase** rather than greenfield expansion: ten of thirteen surveyed projects shipped releases or merged hardens within the 24-hour window, while three were dormant and one (TinyClaw) is at-risk pending maintainer response. **Security is the dominant cross-cutting signal this cycle** — coordinated disclosures from external researcher YLChen-007 touched TinyClaw (9 advisories), LobsterAI (3 advisories), and surfaced alongside independently reported issues at NanoBot, NanoClaw, and CoPaw. Beneath the security noise, the structural themes are (a) **channel-plugin reliability** as the ecosystem's universal weak point, (b) **MCP lifecycle management** as the emerging infrastructure battleground, and (c) **subagent governance and orchestration** converging as a coherent "governance plane" roadmap theme for late 2026.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Releases | Close Velocity | Health Signal |
|---|---:|---:|---:|---|---:|---|
| **OpenClaw** | 241 updated, 6 closed (~2.5%) | 500 touched, 125 merged | 25% | None | ~52 PRs/h | ⚠ Volume-strong, release-starved |
| **CoPaw** (QwenPaw) | 17 updated, 6 closed | 33 touched, 14 merged | 42% | **v2.0.0-beta.3** | ~58 PRs/h | ✅ Healthy beta cycle |
| **Hermes Agent** | n/r | 50 touched, 19 merged | 38% | **v0.18.1 + v0.18.2** | Same-day P1→fix | ✅ Strong stabilization |
| **NanoBot** | 14 updated | 32 touched, 6+ merged | ~19% | None (last 0.2.2) | Security-prioritized | ✅ Healthy |
| **NanoClaw** | n/r | 22 touched, 8 merged | 36% | None | Doc + security wave | ✅ Healthy |
| **IronClaw** | 6 updated | 50 touched, 12 merged | 24% | None (0.29.1 staged) | XL PR review depth | ✅ Stable, queue-bound |
| **LobsterAI** | 6 updated | 17 touched, 13 merged | 76% | **2026.7.7** | High | ✅ Healthy + security debt |
| **ZeroClaw** | 10 updated, 2 closed | 50 touched, 5 merged | 10% | None | Stalled | ⚠ Review bottleneck |
| **PicoClaw** | 7 updated | 5 touched, 2 merged | 40% | None (last v0.3.1) | Stale-labeling | ⚠ Bandwidth-constrained |
| **TinyClaw (TinyAGI)** | 9 filed (all security) | 0 | 0 | None | Zero maintainer engagement | 🚨 At-risk |
| NullClaw, Moltis, ZeptoClaw | — | — | — | — | — | ⏸ Dormant |

*Close velocity is closed+merged ÷ touched, a coarse quality signal. n/r = not reported in source.*

## 3. OpenClaw's Position

**Advantages vs. peers.** OpenClaw is the de facto **reference implementation by surface area** — 241 issues and 500 PRs touched is an order of magnitude above any peer. The breadth spans 14+ channel plugins (Telegram, Feishu, Signal, Mattermost, QQBot, Chutes, Slack, Discord), multi-provider gateway (OpenAI, Anthropic, Gemini, Ollama, OpenAI-Codex, Antigravity), A2A, MCP, and an embedded-agent runtime — a configuration matrix no peer matches in a single codebase. Its **community size** (largest by issue/discussion volume) functions as a forcing function for governance pressure (cost caps, network scopes, lifecycle hooks are the most-discussed feature requests). The triage-bot (`clawsweeper[bot]`) also indicates invest in **maintainer-side automation** that smaller projects lack.

**Technical approach differences.** Where peers cluster around specific themes — NanoBot on security/MCP hardening, IronClaw on WASM-based multi-tenant tools, ZeroClaw on declarative SOPs, Hermes on Nous-Research-style operator tooling, NanoClaw on structured-skill wizards — OpenClaw explicitly positions as a **broad gateway + agent orchestration** substrate. The architecture choices stand out: `authProfileStore` plumbing through loopback MCP bridges, OAuth-profile gating for tool registration, cron deduplication via `lastRunStatus`, gateway hot-reload correctness — engineering details absent from narrower peers. IronClaw's WASM runtime and ZeroClaw's `tool_filter_groups` + deferred-MCP access policy are the most architecturally distinctive *alternatives*.

**Community size comparison.** OpenClaw leads on issue volume (10–40× peers), but per-issue engagement quality is mixed: the **2.5% issue close rate (6 of 241)** is the weakest ratio in the cohort. CoPaw (35% closed) and Hermes (same-day P1→fix turnaround) demonstrate higher sustained triage responsiveness. LobsterAI (13 of 17 merged = 76%) shows the highest *merge* velocity. Volume ≠ throughput; OpenClaw's structural risk is **bandwidth-constrained maintainer review** despite a robust contributor base.

## 4. Shared Technical Focus Areas

| Theme | Projects Affected | Specific Concrete Need |
|---|---|---|
| **Channel-plugin reliability (Telegram/Feishu/WhatsApp/Slack/Discord/QQ/Mattermost/Signal)** | OpenClaw, NanoBot, PicoClaw, NanoClaw, Hermes, LobsterAI, ZeroClaw | Timeouts, reconnect storms, media preservation, OAuth pairing, voice transcription, group scoping, allow-list regressions, chat history leakage — channel plugins are thin-test-coverage surfaces |
| **MCP lifecycle hardening** | NanoBot, OpenClaw, ZeroClaw | Zombie subprocess reaper, `CancelledError` handling, idle-timeout auto-kill, deferred-MCP access policy, schema-clone memory growth |
| **Subagent orchestration & lifecycle hooks** | OpenClaw, Hermes, IronClaw, LobsterAI, NanoClaw | Drain-on-shutdown, subagent-completion hooks, WS orphan reaping, A2A loop prevention, multi-agent session locking |
| **CVE-driven dependency hygiene** | Hermes, IronClaw, ZeroClaw, LobsterAI | `cbor2`, `msgpack`, `tornado`, `cryptography`, `python-multipart`, `agent-client-protocol`, Electron 40→43 |
| **Provider regression coverage** | OpenClaw (Gemini 3.1), PicoClaw (Doubao), Hermes (custom providers), NanoBot (stream stalls) | CI must pin provider-version behavior; cloud→local parity gaps |
| **Gateway/lifecycle correctness** | OpenClaw (config hot-reload), Hermes (cron drain), ZeroClaw (observability hot-reload) | Phoenix-style live config without stale cache, drain semantics |
| **Tool/sandbox safety** | CoPaw (find -delete escape), NanoClaw (CWE-22, supply chain), TinyClaw (CLI --dangerously-skip-permissions) | Dangerous-command list audit, image-tag pinning, approval atomicity |
| **Memory/context bloat** | OpenClaw (#45718), Hermes (Personality 1 71.4% error rate), LobsterAI (User.md cross-agent leak), NanoBot (multimodal `.strip` crash) | Bounded primitives, hard char caps, heading-aware chunking |
| **Cost/governance planes** | OpenClaw (#42475), implicit in LobsterAI/NanoBot | Per-agent cost caps, network-policy opt-ins, runtime profile overrides |

## 5. Differentiation Analysis

| Project | Feature Focus | Target User | Architectural Signature |
|---|---|---|---|
| **OpenClaw** | Broad multi-channel gateway + agent orchestration + governance | Operators running multi-agent production fleets | Plugin-sweep architecture, OAuth profile plumbing, A2A loop-prevention |
| **CoPaw** (QwenPaw) | Scroll compression + regression pinning + frontend perf | Long-session IM/cron power users | Real-behavior-proof PR gates, ported `pr-spam-gate` from OpenClaw |
| **Hermes Agent** | Nous-internal operator tooling + desktop + CVEs | Nous Research users and hosted deployments | Freeze-tag rollout (v0.18.0 → v0.18.1 rollup of 660 PRs → v0.18.2 patch) |
| **NanoBot** | MCP lifecycle, security hardening, camera-capture | Research-leaning self-hosters | Explicit security-by-default follow-through, polite gatekeeping |
| **NanoClaw** | Structured-skill format (SSF), first-agent wizard, security tools | Skills-first operators | Doc-grounded docs sweep driven by contributor `glifocat` |
| **IronClaw** | WASM-based tool runtime, multi-tenant auth, "Reborn" subsystem | Teams deploying agent infrastructure | `delete_if_version` CAS, subagent thread harness, capability guards |
| **LobsterAI** | Cowork UX, delegated subagent collaboration, multi-account email | Producer/consumer desktop users | Scheduled-task card UX, xAI OAuth, RFC-style release cadence |
| **PicoClaw** | Edge/KVM/IoT + ADB + DeltaChat | Sipeed NanoKVM and embedded users | Static vision-model media embed, ADB remote ops primitives |
| **ZeroClaw** | Declarative SOPs, observability hot-reload, security defaults | Operator-tooling shops |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-08

## 1. Today's Overview

NanoBot shows **high-velocity development activity** on 2026-07-08, with 14 issues updated and 32 PRs updated in the last 24 hours. The project is in a **security-hardening and stability-fixing phase**: multiple high-priority security advisories (WebUI token issuance, SSRF/DNS rebinding, unauthenticated API endpoints) are being closed in parallel, while a cluster of P1 bug fixes targeting channel plugins (WhatsApp, Telegram, QQ, Slack) and MCP lifecycle issues are landing. No new releases were published today, suggesting fixes are accumulating on the main branch ahead of the next version cut. Community engagement is healthy, with both new contributors (e.g., `alekwo`, `hata33`, `m11y`, `macroadster`) and recurring maintainers (`chengyongru`, `hamb1y`, `YLPeng-style`) driving a balanced mix of features, bugs, and security patches.

## 2. Releases

**No new releases in the last 24 hours.** The latest published version remains **0.2.2** (referenced in [#4823](https://github.com/HKUDS/nanobot/issues/4823) and [#4847](https://github.com/HKUDS/nanobot/pull/4847)). Maintainers appear to be staging a follow-up release that bundles the P1 security fixes and channel regressions.

## 3. Project Progress

The following PRs were **closed/merged today** (2026-07-07 → 2026-07-08):

| PR | Title | Impact |
|---|---|---|
| [#4669](https://github.com/HKUDS/nanobot/pull/4669) | `fix: require api key for serve` | **Security P1** — closes unauthenticated OpenAI-compatible API endpoint (fixes [#4078](https://github.com/HKUDS/nanobot/issues/4078)). Rejects loopback startup when no key configured. |
| [#4830](https://github.com/HKUDS/nanobot/pull/4830) | `fix: missing aiohttp slack dependency` | Adds `aiohttp>=3.9.0,<4.0.0` to the `slack` extras (fixes [#4829](https://github.com/HKUDS/nanobot/issues/4829)). |
| [#4831](https://github.com/HKUDS/nanobot/pull/4831) | `fix(webui): keep prompt rail out of narrow chat columns` | WebUI polish — pin prompt rail to left gutter using CSS container queries. |
| [#4833](https://github.com/HKUDS/nanobot/pull/4833) | `Gate sustained goals behind explicit runtime mode` | First version of the goals runtime gating (superseded by [#4844](https://github.com/HKUDS/nanobot/pull/4844)). |
| [#3378](https://github.com/HKUDS/nanobot/pull/3378) | `feat: add camera_capture tool via OpenCV` | New optional `camera_capture` tool (disabled by default), enabling webcam interaction for agent. |
| [#3517](https://github.com/HKUDS/nanobot/pull/3517) | `fix(weixin): refresh context_token on stale token` | WeChat cron-restart reliability — fixes silent message drops due to stale `context_token`. |

**Advanced features in open PRs:**
- [#4828](https://github.com/HKUDS/nanobot/pull/4828) — WebUI file-edit diff view via per-turn hook factories.
- [#4844](https://github.com/HKUDS/nanobot/pull/4844) — Revises sustained-goals gating; runtime-injects goal prompt templates only when `/goal` or active-goal turns occur.

## 4. Community Hot Topics

| Rank | Item | Comments | Topic |
|---|---|---|---|
| 1 | [#2463](https://github.com/HKUDS/nanobot/issues/2463) | 12 | Architectural — nanobot conversation history ≠ actual prompt prefix sent to model. Long-running debate about OpenAI protocol fidelity. Closed (likely stale/resolved-as-designed). |
| 2 | [#4013](https://github.com/HKUDS/nanobot/issues/4013) | 6 | User regression report: 0.2.0 stream stall >90s error after working in 0.1.5post2. |
| 3 | [#4823](https://github.com/HKUDS/nanobot/issues/4823) | 3 | WhatsApp group allow list regression post-0.2.2 — replies broadcast to all joined groups. |
| 4 | [#4829](https://github.com/HKUDS/nanobot/issues/4829) | 2 | Slack `aiohttp` missing dep — plugin install-broken. |
| 4 | [#4078](https://github.com/HKUDS/nanobot/issues/4078) | 2 | OpenAI-compatible `/v1/chat/completions` accepts unauthenticated requests — security. |

**Underlying community needs:**
- **Deployment stability**: Repeated regressions across releases (0.1.5post2 → 0.2.0 stream stall; pre-0.2.2 → 0.2.2 WhatsApp; LangSmith docs/code drift) signal need for better regression testing on channel plugins before each release.
- **Transparent security**: A coordinated trio of WebUI-token-minting advisories ([#4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827)) from the same reporter suggests a structured responsible-disclosure pattern — the project should consider publishing a security policy file.
- **Provider compatibility**: [#2463](https://github.com/HKUDS/nanobot/issues/2463)'s prompt-prefix fidelity debate reflects users wiring nanobot into stricter OpenAI-compatible stacks.

## 5. Bugs & Stability

Ranked by severity, considering whether a fix is in flight:

### High Severity (security)
1. **[#4078](https://github.com/HKUDS/nanobot/issues/4078) — Unauthenticated OpenAI-compat API** ✅ **Fixed** by [#4669](https://github.com/HKUDS/nanobot/pull/4669).
2. **[#4825](https://github.com/HKUDS/nanobot/issues/4825) / [#4826](https://github.com/HKUDS/nanobot/issues/4826) / [#4827](https://github.com/HKUDS/nanobot/issues/4827) — WebUI bootstrap token minting** ⚠️ **Open** — three related advisories describing an unauthenticated `GET /webui/bootstrap` that hands API-capable bearer tokens to any localhost caller when neither `tokenIssueSecret` nor static token is configured. No mitigation PR visible yet.
3. **[#4611](https://github.com/HKUDS/nanobot/issues/4611) — DNS rebinding TOCTOU in SSRF validation** ✅ **Closed** (fix landed; `validate_url_target` will need IP pinning in caller).

### High Severity (functional)
4. **[#4013](https://github.com/HKUDS/nanobot/issues/4013) — LLM stream stalled >90s in 0.2.0** ✅ Closed, but no explicit fix PR linked — needs verification that root cause is addressed.
5. **[#4823](https://github.com/HKUDS/nanobot/issues/4823) — WhatsApp groups broadcast regression** ⚠️ **Open** — no fix PR visible today.
6. **[#4800](https://github.com/HKUDS/nanobot/issues/4800) — `.strip()` on multimodal `msg.content` crashes** ✅ **Fix incoming** in [#4837](https://github.com/HKUDS/nanobot/pull/4837).
7. **[#4805](https://github.com/HKUDS/nanobot/issues/4805) — `suppress(Exception)` silently swallows `prepare_call` errors** ✅ **Fix incoming** in [#4837](https://github.com/HKUDS/nanobot/pull/4837) (replaces with `try/except + logger.exception`).
8. **[#4835](https://github.com/HKUDS/nanobot/issues/4835) — WebUI first-message routing race** ⚠️ **Open** — no PR yet.

### Medium Severity
9. **[#4841](https://github.com/HKUDS/nanobot/issues/4841) — Matrix bot device "untrusted" in Element** ⚠️ **Open** — missing cross-signing/SAS verification path under E2EE.
10. **[#4829](https://github.com/HKUDS/nanobot/issues/4829) — Slack `aiohttp` missing** ✅ Fixed by [#4830](https://github.com/HKUDS/nanobot/pull/4830).

## 6. Feature Requests & Roadmap Signals

- **WebUI editing UX** ([#4828](https://github.com/HKUDS/nanobot/pull/4828)) — file-edit diff view. Likely to land in next minor (0.2.3 or 0.3.0) as a UX upgrade.
- **Camera capture** ([#3378](https://github.com/HKUDS/nanobot/pull/3378), merged) — physical-world input capability; expect docs and example configs in next release.
- **MCP idle-timeout auto-kill** ([#4506](https://github.com/HKUDS/nanobot/pull/4506)) — addresses zombie MCP subprocesses; complements [#4840](https://github.com/HKUDS/nanobot/pull/4840) (zombie reaper) and [#4842](https://github.com/HKUDS/nanobot/pull/4842) (CancelledError handling). Combined, these suggest a **MCP lifecycle overhaul** is queued.
- **Provider-hosted web search** ([#3741](https://github.com/HKUDS/nanobot/issues/3741), closed) — Azure Responses API `web_search` tool support with local fallback.
- **Goals runtime gating** ([#4844](https://github.com/HKUDS/nanobot/pull/4844)) — replaces `long_task`/`complete_goal` with `create_goal`/`update_goal` under explicit runtime mode. Indicates long-task handling is being tightened as a first-class primitive.
- **CLI multiline input refinement** ([#4832](https://github.com/HKUDS/nanobot/pull/4832)) — CSI-u Shift+Enter support (regression fix from earlier work in [#4614](https://github.com/HKUDS/nanobot/pull/4614)).
- **Documentation corrections**: [#4847](https://github.com/HKUDS/nanobot/pull/4847) proposes updating README to clarify LangSmith integration status (the 2026-03-13 announcement has gone stale).

**Prediction for next version (likely 0.2.3 patch):** API-key enforcement for `serve`, Slack `aiohttp` dep, multimodal `.strip()` guard, WebUI token-minting mitigation, WhatsApp group scoping fix, MCP `CancelledError` handling, and zombie reaping. A 0.3.0 minor would absorb camera_capture, goals runtime gating, MCP idle timeout, and WebUI diff view.

## 7. User Feedback Summary

- **Gratitude + frustration mix (end-user, [#4013](https://github.com/HKUDS/nanobot/issues/4013))**: User explicitly thanks maintainers for 0.1.5post2, then reports that 0.2.0 introduced a stream-stall error that "renders any real work useless." Tone suggests the user is invested but disillusioned by the regression.
- **Regressions across releases ([#4823](https://github.com/HKUDS/nanobot/issues/4823))**: Same user reporting WhatsApp group allow behavior change post-0.2.2 — implies they have production workloads spanning multiple plugin integrations and feel bitten by silent behavior changes.
- **Documentation drift pain ([#4847](https://github.com/HKUDS/nanobot/pull/4847))**: Users attempting to enable LangSmith as advertised in README find it non-functional — a classic discoverability-vs-implementation mismatch.
- **Channel plugin reliability as recurring pain point**: Telegram stream overflow ([#4839](https://github.com/HKUDS/nanobot/pull/4839)), QQ reconnect storm ([#4838](https://github.com/HKUDS/nanobot/pull/4838)), WeChat stale token ([#3517](https://github.com/HKUDS/nanobot/pull/3517)), Slack missing dep ([#4829](https://github.com/HKUDS/nanobot/issues/4829)) — the breadth of patches indicates channels are a high-touch surface with thin test coverage.
- **Security-conscious contributor community**: Multiple CVEs from independent reporters in a single day suggests a healthy security-reviewer ecosystem around the project, but also that several defaults were too lax.

## 8. Backlog Watch

Items needing maintainer attention that have **aged without resolution** or **lack a follow-up PR**:

- **[#4825](https://github.com/HKUDS/nanobot/issues/4825) / [#4826](https://github.com/HKUDS/nanobot/issues/4826) / [#4827](https://github.com/HKUDS/nanobot/issues/4827) — WebUI token minting (security)** ⚠️ Highest priority. Three open advisories describing the same root cause with no fix PR visible. Maintainers should triage immediately and consider an out-of-band security release. Coordinated response (single fix closing all three) is preferable.
- **[#4823](https://github.com/HKUDS/nanobot/issues/4823) — WhatsApp groups regression** — Open for 1 day, no PR assigned. Functional regression with active user impact; should be triaged alongside the next patch release.
- **[#4841](https://github.com/HKUDS/nanobot/issues/4841) — Matrix E2EE untrusted device** — Open 1 day, complex root cause (missing cross-signing flow). Likely needs design discussion before implementation.
- **[#4835](https://github.com/HKUDS/nanobot/issues/4835) — WebUI first-message routing race** — Open 1 day, race condition; no PR yet.
- **[#4013](

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest (2026-07-08)

## 1. Today's Overview

Hermes Agent is in an aggressive stabilization and consolidation phase. Two tagged releases landed within 24 hours — **v0.18.1** (2026.7.7) and a same-day patch **v0.18.2** (2026.7.7.2) — reflecting a deliberate "freeze-the-tag" workflow: a large bulk release followed by an immediate dependency-repair patch (Baileys unpin) for tagged Docker builds. Repository velocity remains very high: 50 PRs touched in 24h (31 open, 19 merged/closed), with roughly two closed PRs addressing P1 session-state and shutdown-drain incidents that were filed just the previous day. Activity skews toward reliability hardening, CVE-driven dep bumps, and gateway/cron lifecycle correctness rather than new headline features. Overall health looks strong — issues are landing and getting fixed fast, dependency hygiene is being actively enforced, and there are no orphaned multi-month-old P0s visible in this window.

## 2. Releases

Two releases in the last 24 hours:

### v0.18.2 (v2026.7.7.2) — patch, 2026-07-07
Same-day patch on top of v0.18.1, picking up the WhatsApp Baileys dependency fix needed for tagged-release Docker builds.
- **fix(whatsapp):** unpin Baileys from git commit, use published `7.0.0-rc13` (resolves tagged-Docker build breakage).
- No breaking changes; pure dependency hygiene.

### v0.18.1 (v2026.7.7) — patch, 2026-07-07
Tagged stable rollup that aggregates **~660 PRs merged since v0.18.0 (July 1)** — bug fixes, hardening, and in-progress feature work — for downstream consumers (Docker images, hosted deployments, PyPI installs).

**Migration notes:** No public breaking-change callouts in either release. The "rollup of 660 PRs" framing suggests a large surface-area change, so downstream consumers on older pins should treat v0.18.1/v0.18.2 as the new stable baseline and re-run their regression suites.

## 3. Project Progress

**Merged/closed PRs (19 of 50 in window). Notable landings:**

- **[#60708](https://github.com/NousResearch/hermes-agent/pull/60708)** — `fix(gateway,cron): drain in-flight cron work on shutdown and never mark killed runs successful`. Closes the P1 incident [#60432](https://github.com/NousResearch/hermes-agent/issues/60432) where `/update` was killing active cron subprocesses while reporting success. This is a meaningful reliability fix for the shutdown path.
- **[#60704](https://github.com/NousResearch/hermes-agent/pull/60704)** — `fix(tui): stop ws_orphan_reap from ending gateway-owned sessions`. Closes the P1 "Groundhog Day" routing loop in [#60609](https://github.com/NousResearch/hermes-agent/issues/60609) where TUI WebSocket disconnects were prematurely finalizing gateway-originated sessions and replaying stale context on every inbound message.
- **[#32776](https://github.com/NousResearch/hermes-agent/pull/32776)** — `fix(cron): defer hermes update while a cron job is running`. Long-standing companion fix to the drain bug above; `hermes update` (Telegram `/update` / CLI) now waits for the active cron run instead of SIGTERM-ing the gateway underneath it.
- **[#60579](https://github.com/NousResearch/hermes-agent/pull/60579)** — `fix(compression): skip empty summary windows`. Closes a duplicate of #59496; saves an unnecessary auxiliary model call and avoids a spurious empty-window error after a handoff summary is removed.
- **[#60724](https://github.com/NousResearch/hermes-agent/pull/60724)** — CVE bumps: `cbor2` 5.8.0 → 6.1.3 (GHSA-3c37, CVSS 7.5), `msgpack` 1.1.2 → 1.2.1 (GHSA-6v7p, CVSS 7.5), `tornado` 6.5.5 → 6.5.7 (GHSA-3x9g, CVSS 7.7).
- **[#60697](https://github.com/NousResearch/hermes-agent/pull/60697)** — Additional CVE bumps: `cryptography` 46.0.7 → 48.0.1 (CVE-2026-39892 et al.), `python-multipart` 0.0.27 → 0.0.31.

**Net effect:** the v0.18.1/v0.18.2 cycle closed at least two real P1 production hazards (cron shutdown, TUI session reaping) and shipped a coordinated CVE patch sweep — a sign the team is treating the post-v0.18.0 freeze as a "stability-first" window.

## 4. Community Hot Topics

The data set shows Issues with explicit comment counts; PR comment counts were not reported (shown as `undefined`). Ranking by issue comment volume + 👍 reaction activity (all currently 👍:0, indicating low public upvoting — likely an internal/contributor-driven project rather than open-community-driven):

| Rank | Item | Comments | Type |
|---|---|---|---|
| 1 | [#16185](https://github.com/NousResearch/hermes-agent/issues/16185) — Telegram voice messages not auto-transcribed | 4 | Bug (P2) |
| 2 | [#20582](https://github.com/NousResearch/hermes-agent/issues/20582) — Model picker shows only one model for custom providers | 3 | Bug (P2) |
| 3 | [#42042](https://github.com/NousResearch/hermes-agent/issues/42042) — Desktop UI: add API key field for Local / custom endpoint | 3 | Feature (P3) |
| 4 | [#58393](https://github.com/NousResearch/hermes-agent/issues/58393) — Desktop model picker cannot reliably show/select custom OpenAI-compatible providers | 2 | Bug (P2) |
| 5 | [#60432](https://github.com/NousResearch/hermes-agent/issues/60432) — `/update` bypasses drain, interrupts cron work | 2 | Bug (P1, **closed**) |
| 6 | [#60525](https://github.com/NousResearch/hermes-agent/issues/60525) — `write_file()` commits before syntax-check; invalid files reported as success | 2 | Bug (P1, **closed**) |

**Underlying needs:**
- **Multi-channel parity:** [#16185](https://github.com/NousResearch/hermes-agent/issues/16185) (Telegram voice), [#20582](https://github.com/NousResearch/hermes-agent/issues/20582) and [#58393](https://github.com/NousResearch/hermes-agent/issues/58393) (model picker on custom providers) all surface a single theme: power users running Hermes against **local / self-hosted OpenAI-compatible endpoints** (Ollama, vLLM, LM Studio, custom llama.cpp) hit gaps where the CLI/Desktop paths were designed around first-party cloud providers.
- **Tool correctness over speed:** [#60525](https://github.com/NousResearch/hermes-agent/issues/60525) is a classic "the tool said it succeeded but silently corrupted the file" bug — high user trust impact for any agentic file-editing workload.
- **Reliability of long-running operations:** [#60432](https://github.com/NousResearch/hermes-agent/issues/60432) shows that operators who cron-heavy their Hermes are the most demanding users and feel shutdown races acutely.

## 5. Bugs & Stability

### By severity (today's reports + their fix status):

**P1 — Critical (closed today, fix shipped):**
- **[#60609](https://github.com/NousResearch/hermes-agent/issues/60609)** — `ws_orphan_reap` kills gateway-originated sessions → routing loop. Fix: [#60704](https://github.com/NousResearch/hermes-agent/pull/60704) (closed/merged). ✅
- **[#60432](https://github.com/NousResearch/hermes-agent/issues/60432)** — `/update` bypasses drain, interrupts in-flight cron tool work. Fix: [#60708](https://github.com/NousResearch/hermes-agent/pull/60708) (closed/merged). ✅
- **[#60525](https://github.com/NousResearch/hermes-agent/issues/60525)** — `write_file()` writes invalid content and reports success. Status: closed but no PR visible in today's window — needs verification that a fix landed in v0.18.1's 660-PR rollup or whether the close was a duplicate/stale cleanup. ⚠️

**P2 — High (open, no PR yet in window):**
- **[#16185](https://github.com/NousResearch/hermes-agent/issues/16185)** — Telegram voice messages not auto-transcribed. Open since 2026-04-26 (~73 days); longer-tail unresolved.
- **[#20582](https://github.com/NousResearch/hermes-agent/issues/20582)** — Custom-provider model picker only shows one model. A candidate fix PR exists: [#60503](https://github.com/NousResearch/hermes-agent/pull/60503) `fix(model-switch): merge configured custom_providers.models` (open, addresses a *duplicate* of the same root cause — #59560).
- **[#58393](https://github.com/NousResearch/hermes-agent/issues/58393)** — Desktop model picker cannot reliably show/select custom providers (Windows 11, Hermes Desktop). No fix PR yet.
- **[#47464](https://github.com/NousResearch/hermes-agent/issues/47464)** — Memory-Compression error rate climbing (71.4%, 81 failures, 86-item uncompressed backlog) for "Personality 1." This is a **SysOps-class incident report** filed in German; one of the few issues that has clearly growing operational impact. No fix PR yet.
- **[#60715](https://github.com/NousResearch/hermes-agent/issues/60715)** — `inference-api.nousresearch.com` completely unreachable (timeouts on all 3 retry curves; HTTP 000 on direct curl). Tagged `needs-repro`; flagged as P2. **Likely environmental/network-side rather than a Hermes code bug** but worth maintainer confirmation since it affects default cloud inference.
- **[#60721](https://github.com/NousResearch/hermes-agent/issues/60721)** — macOS installer never acts as a launcher; `.hermes-bootstrap-complete` marker is only written by `install.ps1`, so the macOS-gated "installed → just launch" fast path added in v0.18.1 is dead. Regression from v0.18.1.
- **[#60722](https://github.com/NousResearch/hermes-agent/issues/60722)** — MoA presets hidden from Desktop model picker after `explicit_only` filter (commit `37a4cf90` regression).

**P3 — Medium (open):**
- **[#60722](https://github.com/NousResearch/hermes-agent/issues/60722)** (also P3-tagged) — MoA picker regression above.

**Stability outlook:** The two P1 incidents filed Mon/Tue were closed with merges on the same day they were fixed — this is excellent triage hygiene. The remaining P2 cluster (Telegram voice, custom-provider UX on Desktop, memory-compression error rate, macOS launcher regression) is the real backlog to watch.

## 6. Feature Requests & Roadmap Signals

**In-flight features visible in today's PR stream (likely candidates for v0.18.3 or v0.19):**

- **[#60638](https://github.com/NousResearch/hermes-agent/pull/60638)** — `feat(desktop): contribution-driven shell on a layout-tree model`. **Large architectural PR**: replaces the Desktop app's hardcoded shell with a self-hosted contribution platform on a Dockview-style layout tree, plus plugin SDK + bundled plugin host. This is a major Desktop redesign direction.
- **[#60716](https://github.com/NousResearch/hermes-agent/pull/60716)** — `feat(hindsight): preserve recall metadata with configurable output format`. Memory/recall tooling improvement — surfaces full `RecallResult` metadata (type, mentioned_at, tags, entities, context, source_fact_ids) instead of stripping everything except `r.text`.
- **[#60718](https://github.com/NousResearch/hermes-agent/pull/60718)** — `feat(mcp-catalog): add motion-previs-studio optional MCP`. Catalog expansion for an Apache-2.0 motion-previs desktop app.
- **[#60719](https://github.com/NousResearch/hermes-agent/pull/60719)** — `[codex] bg(feishu): observe group context without triggering`. Adds `FEISHU_GROUP_ALLOWED_USERS` / `FEISHU_GROUP_ALLOWED_CHATS` allowlist and a "read but don't reply" mode for unmentioned group messages, generalized so Feishu and Telegram behave the same.
- **[#60720](https://github.com/NousResearch/hermes-agent/pull/60720)** — `[codex] add PGA order intake API`. Adds `GET /v1/pga/order/catalog`, `POST /v1/pga/order/submissions`, etc., scoped to the isolated `pga` profile.
- **[#51524](https://github.com/NousResearch/hermes-agent/pull/51524)** — `fix(desktop): split model + reasoning effort into separate composer pills`. Closes #51523 (long model names truncating the effort suffix); data-driven motivation — 62% of cached models have 12+ char display names.

**Explicit user-requested features in today's Issues:**
- **[#42042](https://github.com/NousResearch/hermes-agent/issues/42042)** — Desktop UI: add API key field for Local / custom endpoint (P3). Likely to land quickly because it complements the existing no-key flow added in #38572.

**Likely v0.18.3 / v0.19 inclusions:** the custom-provider Desktop polish cluster (#42042 + the explicit-only MoA regression fix + the `custom_providers.models` merge), the Feishu group allowlist parity, the `write_file` correctness fix, and one or more memory-compression reliability patches.

## 7. User Feedback Summary

The visible Issues surface the following real user pain points:

1. **Local/self-hosted inference users feel second-class.** [#20582](https://github.com/NousResearch/hermes-agent/issues/20582), [#58393](https://github.com/NousResearch/hermes-agent/issues/58393), [#42042](https://github.com/NousResearch/hermes-agent/issues/42042) — all filed by users with custom OpenAI-compatible endpoints — collectively say: "the picker, model switching, and API-key entry for local/custom providers are buggy or missing, even after several attempts to fix them."
2. **Telegram is the most-used messaging surface and the source of repeated gaps.** [#16185](https://github.com/NousResearch/hermes-agent/issues/16185) (voice transcription) is 73 days old with no fix — a clear unmet demand.
3. **Cron/operator users want stronger guarantees.** [#60432](https://github.com/NousResearch/hermes-agent/issues/60432), [#60609](https://github.com/NousResearch/hermes-agent/issues/60609), and the longer-tailed [#47464](https://github.com/NousResearch/hermes-agent/issues/47464) (memory-compression failures at 71.4% error rate) describe a power-user segment running Hermes as background infrastructure; they care disproportionately about graceful shutdown, drain semantics, and stable session lifecycles.
4. **"Tool said success but the file is broken" is the worst class of bug.** [#60525](https://github.com/NousResearch/hermes-agent/issues/60525) directly erodes trust in the file-editing tool surface.
5. **Satisfaction signal:** the two-day turnaround on the two P1s (filed 7/7–7/8, fixed 7/8, shipped in v0.18.2) is a strong positive indicator. No 👍 reactions across the sample window suggests the issue-tracking audience is mostly developers/contributors rather than a broad end-user community — which matches the project's internal/operator-tooling character.

## 8. Backlog Watch

Items that have been open long enough or carry enough operational weight to deserve maintainer attention:

| Item | Age (as of 2026-07-08) | Why it needs attention |
|---|---|---|
| **[#16185](https://github.com/NousResearch/hermes-agent/issues/16185)** — Telegram voice transcription | ~73 days | P2 bug, 4 comments, no PR yet; basic Telegram parity gap on a high-traffic surface. |
| **[#20582](https://github.com/NousResearch/hermes-agent/issues/20582)** — `/model` only shows one model for custom providers | ~63 days | P2, partial fix candidate PR [#60503](https://github.com/NousResearch/hermes-agent/pull/60503) exists but is filed as a duplicate of #59560 — needs maintainer decision on which to canonicalize. |
| **[#47464

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-08

## 1. Today's Overview

PicoClaw maintained a moderate but steady activity level in the last 24 hours, with 7 issues and 5 PRs touched but **zero new releases** shipped. A significant portion of recent issue traffic carries the `[stale]` label, signaling that maintainer triage is lagging behind user-reported problems. The activity mix is dominated by bug reports (6 of 7 issues) and platform integration issues (OpenAI on NanoKVM, OAuth login, tool-call leaks), suggesting the project is in a stabilization phase rather than rapid feature expansion. Active PRs indicate meaningful engineering work on vision support, tool safety, and channel refactoring, but closing velocity remains low.

## 2. Releases

**No new releases in the last 24 hours.** The most recent version referenced in user reports is **v0.3.1** (mentioned in [Issue #3232](https://github.com/sipeed/picoclaw/issues/3232)), indicating the latest tagged release.

## 3. Project Progress

Two PRs were closed/merged in the last 24 hours, advancing capability and platform support:

- **[PR #3234](https://github.com/sipeed/picoclaw/pull/3234) — CHORE (anthropic_messages): embed image media in user messages so vision models can see them** (closed)
  - Fixes a real defect: `buildRequestBody` dropped `msg.Media`, causing images attached via `load_image` to be invisible to Anthropic vision models. Closes a functional gap for multimodal workflows.

- **[PR #3157](https://github.com/sipeed/picoclaw/pull/3157) — feat: add Android ADB remote operations tool** (closed, marked stale)
  - Introduces an experimental ADB-backed tool with fixed primitives (screenshot, tap, swipe, UI dump, etc.) restricted to explicitly configured devices. Expands PicoClaw's device-control surface beyond desktop.

## 4. Community Hot Topics

The most commented items in the recent window:

1. **[Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) — [Feature] I need SimpleX or tox** (5 comments, 👍1)
   - Closed as stale. Underlying need: users want additional privacy-focused/messenger channels beyond the current set, particularly SimpleX, Wire, or Tox. Reflects a broader demand for decentralized communication gateways.

2. **[Issue #3153](https://github.com/sipeed/picoclaw/issues/3153) — Volcengine Doubao Seed tool calls leak as `<seed:tool_call>` text** (3 comments)
   - A provider-specific bug where PicoClaw v0.2.8 fails to parse certain Doubao tool-call responses, returning them as literal text. Highlights growing pains with multiple LLM vendor integrations.

3. **[Issue #3195](https://github.com/sipeed/picoclaw/issues/3195) — OpenAI GPT does not work on NanoKVM with default config** (2 comments)
   - Important because NanoKVM is a flagship deployment target. Indicates friction in the documented setup path for one of the project's headline use cases.

4. **[Issue #3159](https://github.com/sipeed/picoclaw/issues/3159) — 经常重复任务 (Task Repetition)** (2 comments, closed stale)
   - In Chinese, suggesting an active Chinese user community. Reports the agent re-executing prior tasks in subsequent prompts — a state-management or context-window issue.

## 5. Bugs & Stability

Six of seven updated issues are bug reports. Ranked by likely severity:

| Severity | Issue | Summary | Fix PR Available? |
|----------|-------|---------|-------------------|
| **High** | [#3232](https://github.com/sipeed/picoclaw/issues/3232) | Rate limiting silently disabled when no fallback models configured (v0.3.1) | No |
| **High** | [#3196](https://github.com/sipeed/picoclaw/issues/3196), [#3197](https://github.com/sipeed/picoclaw/issues/3197) | Codex / Antigravity OAuth login broken on v0.2.9 | No |
| **High** | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | OpenAI GPT fails on NanoKVM out-of-the-box | No |
| **Medium** | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Doubao tool calls leak as raw XML text | No |
| **Medium** | [#3159](https://github.com/sipeed/picoclaw/issues/3159) | Agent repeats prior tasks on consecutive prompts | No |

**Stability signal:** None of the active bugs has a directly linked fix PR. [PR #3226](https://github.com/sipeed/picoclaw/pull/3226) (open) addresses a related destructive-overwrite concern in `write_file`, but the broader bug backlog lacks active remediation.

## 6. Feature Requests & Roadmap Signals

Explicit and implicit feature signals from the last 24 hours:

- **Privacy-focused messaging gateways** ([#3093](https://github.com/sipeed/picoclaw/issues/3093)) — SimpleX / Wire / Tox. Low probability of near-term inclusion; the channel refactor pattern in [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) (DeltaChat cleanup, -320 LOC) suggests channel integrations are being standardized first.
- **Robust OAuth flows** ([#3196](https://github.com/sipeed/picoclaw/issues/3196), [#3197](https://github.com/sipeed/picoclaw/issues/3197)) — Codex + Antigravity login are broken; likely to be prioritized since authentication breakage is high-friction.
- **Vision/multimodal reliability** (delivered via [PR #3234](https://github.com/sipeed/picoclaw/pull/3234)) — Confirms multimodal is a roadmap pillar; expect hardening of other vendor paths next.
- **Tool safety** ([PR #3226](https://github.com/sipeed/picoclaw/pull/3226)) — Preventing `write_file` from coaching destructive overwrites signals a broader trust-and-safety direction for autonomous tools.

## 7. User Feedback Summary

- **Pain points:**
  - **Default-config friction**: NanoKVM users cannot get GPT working without undocumented tweaks ([#3195](https://github.com/sipeed/picoclaw/issues/3195)).
  - **Multi-provider fragility**: Doubao ([#3153](https://github.com/sipeed/picoclaw/issues/3153)), OAuth-based providers ([#3196](https://github.com/sipeed/picoclaw/issues/3196)) break in version-specific ways, indicating insufficient provider abstraction.
  - **Stale-issue churn**: Multiple stale-tagged items with non-zero comment counts suggest users feel their concerns are being archived rather than resolved.
  - **Rate-limit silent failure**: Users who don't configure fallbacks get no rate limiting at all ([#3232](https://github.com/sipeed/picoclaw/issues/3232)) — a footgun.

- **Satisfaction signal:** [PR #3234](https://github.com/sipeed/picoclaw/pull/3234) shows contributors are proactively identifying and patching provider edge cases, which is a positive engagement signal.

- **Use case signals:** NanoKVM (KVM-over-IP) deployments, Web UI, multi-vendor LLM routing, Android device control (via [PR #3157](https://github.com/sipeed/picoclaw/pull/3157)), and DeltaChat integration.

## 8. Backlog Watch

Items most in need of maintainer attention:

1. **[Issue #3232](https://github.com/sipeed/picoclaw/issues/3232)** — Fresh (created today), high-severity correctness bug in current v0.3.1 release. Should be triaged within 24–48h.
2. **[Issue #3196](https://github.com/sipeed/picoclaw/issues/3196) & [#3197](https://github.com/sipeed/picoclaw/issues/3197)** — Duplicate OAuth failures blocking login; likely a quick fix if root-caused.
3. **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)** — Large DeltaChat refactor (-320 LOC) open since 2026-07-03 with no reviews. High review burden but unblocks channel architecture cleanup.
4. **[Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)** — Provider-specific parser bug; stale but actionable.
5. **[Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)** — Closed as stale with 5 comments and a 👍. Consider reopening and providing a definitive roadmap response to respect community input.

**Overall project health:** *Cautiously stable.* Active contribution is healthy (open PRs across vision, tool safety, channel refactor, ADB), but the stale-label rate on issues and the lack of recent releases indicate the maintainer team is bandwidth-constrained relative to incoming bug volume.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-08

## 1. Today's Overview

NanoClaw shows **intense development activity** with 22 PRs touched in the last 24 hours and 8 of them closed/merged, indicating an active stabilization and documentation cycle. A new **security advisory** (Issue #2970) was opened regarding an unauthenticated localhost webhook, paired with a coordinated batch of security-related fix PRs. The merged work is dominated by a **documentation staleness sweep** covering architecture, DB schema, SDK, and README/CLAUDE.md files — a strong signal the team is preparing a release. No new releases were tagged, but the convergence of security fixes, bug fixes, and doc alignment suggests a tagged build is imminent.

## 2. Releases

*No new releases in the last 24 hours.* Given the high closure rate of security and doc PRs, maintainers may be staging a patch release (likely in the `v2.1.x` series based on doc references to `v2.1.38`).

## 3. Project Progress

**Merged/closed (8 PRs):**

- **#2922** — `fix(discord): unwrap forwarded-message snapshots so agents see forwarded content` — fixes Discord integration gap where forwarded messages were not unwrapped before being shown to agents.
- **#2804** — `fix(cli): ncl messaging-groups create always throws (NOT NULL instance)` — resolves a dead code path in the CLI where `messaging-groups create` was broken by a missing `instance` column (schema in migration 016, resource columns incomplete). Closes a long-standing functional regression.
- **#2965** — `fix(agent-runner): match rate_limit_event as a top-level SDK message type` — adapts provider event translation to the new `@anthropic-ai/claude-agent-sdk` 0.3.x shape.
- **#2964** — `docs: update SDK deep-dive from 0.2.x to 0.3.197` — re-verifies the SDK doc against the actual pinned `0.3.197` package.
- **#2963** — `docs: rewrite architecture.md and agent-runner-details.md to match current code` — rewrites the most drifted architecture docs.
- **#2962** — `docs: sync DB schema and entity docs with migrations 010-018` — updates `db-central.md` and entity docs to current schema.
- **#2961** — `docs: fix stale claims across README, CONTRIBUTING, CLAUDE.md and operational docs` — mechanical batch fixing factual claims (notably removing `/add-signal` and `/add-matrix` from solicited skills).
- **#2919** — `PR-Test2-LargePRTest` — closed (likely a test fixture PR).

The merged set reflects a deliberate **"code-grounded docs sweep"** by contributor `glifocat` plus targeted provider/CLI bug fixes.

## 4. Community Hot Topics

Engagement is concentrated on **security hardening** and the **documented SDK migration** to `0.3.197`:

- **Issue #2970** — `[Security] Local action forgery via unauthenticated forwarded gateway loopback webhook` ([link](https://github.com/nanocoai/nanoclaw/issues/2970)) — Newly filed advisory. The localhost-only webhook trusts incoming forwarded gateway events without authenticating the sender, opening local-action forgery. This is the highest-priority item on the board.
- **PR #2973** — `fix(supply-chain): activate the minimumReleaseAge gate` ([link](https://github.com/nanocoai/nanoclaw/pull/2973)) — pnpm's `minimumReleaseAge` was nested under a `pnpm:` key inside `pnpm-workspace.yaml`, which pnpm only reads from `package.json`; the gate was silently inactive.
- **PR #2800** — `fix(security): validate folder + restrict --image-tag in ncl groups create/update (CWE-22 + image pinning)` ([link](https://github.com/nanocoai/nanoclaw/pull/2800)) — A `ncl groups create --folder ../../etc` path traversal that bypasses `assertValidGroupFolder` via the generic-create path; pairs container-escape concerns with image-tag pinning.
- **PR #2974** — `fix(approvals): claim pending approvals before running the handler` ([link](https://github.com/nanocoai/nanoclaw/pull/2974)) — Adds atomic compare-and-set `claimPendingApproval()` to address a TOCTOU/race risk where the registered handler could run twice or against stale state.

The underlying signal: **the team is in an active security-hardening pass**, with three security-tagged PRs from contributor `sturdy4days` landing alongside the open advisory.

## 5. Bugs & Stability

| Severity | Item | Status | Fix available? |
|---|---|---|---|
| **High (Security)** | [Issue #2970](https://github.com/nanocoai/nanoclaw/issues/2970) — Unauthenticated localhost webhook | OPEN | No PR linked |
| **High (Security)** | [PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800) — Path traversal in `ncl groups create --folder` (CWE-22) + image-tag pinning | OPEN (fix) | Self-contained |
| **High (Supply-chain)** | [PR #2973](https://github.com/nanocoai/nanoclaw/pull/2973) — `minimumReleaseAge` gate misconfigured and inert | OPEN (fix) | Self-contained |
| **High (Race)** | [PR #2974](https://github.com/nanocoai/nanoclaw/pull/2974) — Pending approvals not claimed before handler runs | OPEN (fix) | Self-contained |
| **Medium (Functional)** | [PR #2966](https://github.com/nanocoai/nanoclaw/pull/2966) — Provider errors inside consumed batch recorded as `completed`; failed acks not mirrored | OPEN (fix, draft) | Self-contained |
| **Medium (Docs)** | [PR #2969](https://github.com/nanocoai/nanoclaw/pull/2969) — `add-rtk` mount rejected on v2 (relative containerPath + PATH) | OPEN (fix) | Self-contained |
| **Low (Docs)** | [PR #2729](https://github.com/nanocoai/nanoclaw/pull/2729) — Telegram skill walkthrough references status blocks the setup step never emits | OPEN (fix) | Self-contained |

The recently-merged [PR #2804](https://github.com/nanocoai/nanoclaw/pull/2804) (`ncl messaging-groups create` always throwing) and [PR #2922](https://github.com/nanocoai/nanoclaw/pull/2922) (Discord forwarded content not visible to agents) addressed two notable functional regressions that had been open for ~2 weeks.

## 6. Feature Requests & Roadmap Signals

Active feature work in flight:

- **PR #2909** — `feat(setup): template setup flow in the wizard and first-agent stamping` ([link](https://github.com/nanocoai/nanoclaw/pull/2909)). Follow-up to #2890 (template loader); adds a "How should we create your first agent?" prompt with Fresh / Template choices. **High likelihood of inclusion in the next release** — paired with prior landed loader work.
- **PR #2958** — `add-teams: Teams-CLI-first credentials flow in SSF directive grammar` ([link](https://github.com/nanocoai/nanoclaw/pull/2958)). Rebuilds the add-teams skill on the new structured-skill-format base: a single `teams login` + `teams app create --json` replaces the ~7-step Azure portal walk. Aligns with the broader SSF migration seen in `add-slack` (PR #2972).
- **PR #2972** — `Wizard UX + add-slack Socket Mode fixes` ([link](https://github.com/nanocoai/nanoclaw/pull/2972)). Bundle of UX polish: pairing card, either/or selects, quiet bounces, async `hostExec` for spinner animation, plus a Socket Mode bot-event subscription restore.
- **PR #2971** — `Add ncc utility skill: host operational and health CLI` ([link](https://github.com/nanocoai/nanoclaw/pull/2971)). New utility skill (no source changes). Likely a small additive addition.
- **PR #2873** — `fix(skills): split pre-flight from credentials so /update-skills can refresh code` ([link](https://github.com/nanocoai/nanoclaw/pull/2873)). UX fix separating update channels (code vs. credentials) for `/update-skills`.
- **PR #1598** — `feat: add-remote-storage skill (WebDAV/S3 via rclone + systemd)` ([link](https://github.com/nanocoai/nanoclaw/pull/1598)). **Long-pending (open since 2026-04-02)**, requested via `/contribute` and flagged for priority review. Lack of movement despite priority flag is a maintainer-throughput concern.

**Prediction for the next release:** Patch release containing the security PRs (#2973, #2800, #2974), the bug fixes (#2804, #2922, #2965, #2966, #2969, #2873), and the documentation sweep. The `add-teams` SSF rewrite (#2958) and wizard UX (#2972) are candidates for the **minor** release after that, paired with #2909 (first-agent templates).

## 7. User Feedback Summary

- **Operational friction:** Contributor `sturdy4days` repeatedly surfaces a pattern: CLI paths built on `genericCreate` skip the **custom validators** that the resource's normal `createX` path applies (folder validation, instance column, image-tag pinning). This is at least the third bug of this shape (#2804, #2800). Pain point: **custom-insert discipline is inconsistent across resources**.
- **Documentation trust gap:** The merged docs sweep is a direct response to a contributor (`glifocat`) finding that multiple docs had drifted from code for months (e.g., `SDK_DEEP_DIVE.md` was based on SDK 0.2.29–0.2.34 while the repo pins 0.3.197). Pain point: **docs are not being kept in lockstep with code changes**.
- **Skills discoverability:** `add-rtk` mount failure on v2 (PR #2969) and Telegram pairing status block mismatch (PR #2729) suggest that **end-to-end skill walkthroughs are not exercised on every release**.
- **Security-by-default gap:** Three security PRs in a single day (#2973, #2800, #2974) plus a fresh security advisory (#2970) indicate the project has historically relied on **opt-in or positionally-correct configs** for important gates (release age, path validation, approval claiming).

## 8. Backlog Watch

- **[PR #1598](https://github.com/nanocoai/nanoclaw/pull/1598)** — `add-remote-storage` skill (WebDAV/S3 via rclone + systemd). **Open since 2026-04-02 (~3 months).** Submitted via `/contribute` with a priority-review flag that has not resulted in review. **Needs explicit maintainer triage** — either land, request changes, or close with rationale.
- **[PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)** — First-agent templates in the wizard. ~6 days open and is the second half of an already-landed feature (#2890); should be reviewed promptly to unblock the "first agent" UX.
- **[PR #2966](https://github.com/nanocoai/nanoclaw/pull/2966)** — `agent-runner` provider error semantics. Marked **draft with semantics up for discussion**. Important correctness issue (failed runs look successful) that warrants a design decision rather than further staleness.
- **[Issue #2970](https://github.com/nanocoai/nanoclaw/issues/2970)** — Security advisory on the unauthenticated loopback webhook. **No PR has been opened against it yet**; this is the most urgent gap given the project's recent security cadence.

---

*Digest generated from public GitHub activity on 2026-07-08.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-08

## 1. Today's Overview

IronClaw continues to show strong development momentum with 50 PRs touched in the last 24 hours and 6 issues updated, although the absolute number of new issues remains modest. The activity profile is dominated by a large cluster of low-risk refactor PRs from a single contributor (ilblackdragon) converting sparse struct literals to default-backed setters — a hygiene effort rather than new functionality. The most substantive work concerns the "Reborn" subsystem: model-gateway capability guards, Slack personal OAuth + WebUI v2, and WASM tool installation. One release PR is staged but unmerged, which would push the main `ironclaw` crate from 0.24.0 to 0.29.1 with breaking API changes in two sub-crates. Overall project health looks **stable with active refactoring**, no new releases, and no P0/P1 incidents reported today.

## 2. Releases

No new releases published in the last 24 hours.

A release is **staged but unmerged** in PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (open, updated 2026-07-08). If landed, it would publish:

| Crate | From | To | Compatibility |
|---|---|---|---|
| `ironclaw` | 0.24.0 | 0.29.1 | — |
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠ API breaking |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ compatible |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠ API breaking |
| `ironclaw_skill_learning` | 0.1.0 | 0.1.1 | ✓ compatible |

**Migration note:** Downstream consumers of `ironclaw_common` and `ironclaw_skills` will need to track breaking API changes; no migration guide is referenced in the PR body yet.

## 3. Project Progress

**Closed/Merged PRs (12 total in last 24h).** Notable landed items:

- [#5748](https://github.com/nearai/ironclaw/pull/5748) — Canonical subagent thread-harness design doc (closed/merged). Codifies how parent threads learn of subagent completion and how delivery survives crashes.
- [#5749](https://github.com/nearai/ironclaw/pull/5749) — CAS-guarded `delete_if_version` on `RootFilesystem` (closed/merged). Fills a precondition gap so stores can do compare-and-swap deletes; explicitly called out as a merge gate for the subagent await-edge design.
- [#5789](https://github.com/nearai/ironclaw/pull/5789) — Fix for `slack_pairing_redeem_rejects_expired_code` flake. Root cause was `tokio::test(start_paused)` racing with a chrono wall-clock TTL; replaces the virtual clock with a deterministic one.
- [#5550](https://github.com/nearai/ironclaw/pull/5550) — Dependabot bulk update (13 packages).
- Plus several "use default setters" refactor PRs in the same family (closed).

**Open PRs that represent material feature progress:**

- [#5643](https://github.com/nearai/ironclaw/pull/5643) — Collapsed Slack personal OAuth + WebUI v2 stack (XL, risk medium, spans channel/web/tool/builtin/pairing/ci/docs/deps). Absorbs four previously-stacked PRs.
- [#5499](https://github.com/nearai/ironclaw/pull/5499) — WASM tool install from zip with env-provisioned tenant-shared credentials (part 1 of #5459).
- [#5525](https://github.com/nearai/ironclaw/pull/5525) — Private (non-admin) tool installation path for SSO users (part 2 of #5459).
- [#5782](https://github.com/nearai/ironclaw/pull/5782) — Fix: `unavailable_requested_capability_guard` misfires on code refs such as `use playwright.sync_api`.
- [#5817](https://github.com/nearai/ironclaw/pull/5817) — Fix: decimal numbers are wrongly treated as requested capability ids by `is_likely_capability_reference`.
- [#5816](https://github.com/nearai/ironclaw/pull/5816) — Dependabot 16-package bump (includes `agent-client-protocol` 0.10.4 → 1.2.0, a major version jump).

## 4. Community Hot Topics

Engagement is light — none of the issues or PRs in the last 24 hours have meaningful 👍 reactions (all 0) and issue comment counts top out at 4. Most-active items:

- [#5702](https://github.com/nearai/ironclaw/issues/5702) — GitHub integration 403 errors (4 comments, P2). The agent's ability to read or create GitHub issues is broken despite configuration being present. Underlying need: surface clearer auth/scope diagnostics rather than a raw 403.
- [#5705](https://github.com/nearai/ironclaw/issues/5705) — Un-disableable terminal icon in chat UI (2 comments, P3). Linked to #5555 but distinct; the request is purely a settings-toggle gap, not a positioning bug.
- [#5557](https://github.com/nearai/ironclaw/issues/5557) — Logs deep link needs two clicks (2 comments, P3). URL contains the thread/run IDs but the Logs page renders "Select conversation" on first load; works on retry. Underlying need: fix first-mount hydration or routing race so deep links resolve deterministically.
- [#5788](https://github.com/nearai/ironclaw/issues/5788) — Daily ironclaw failure taxonomy for 2026-07-08 (0 comments). The recurring automated taxonomy post, citing pinchbench (3 non-pass of 4) reproducing a prior run's dominant failure shape.

The pattern across hot topics is **UI polish + integration reliability** rather than feature requests — typical of a maturing product surface.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| P2 | [#5702](https://github.com/nearai/ironclaw/issues/5702) GitHub issue search/create 403 | Open | None referenced |
| P3 | [#5705](https://github.com/nearai/ironclaw/issues/5705) Terminal icon cannot be hidden | Open | None referenced |
| P3 | [#5557](https://github.com/nearai/ironclaw/issues/5557) Logs deep-link double-click | Open | None referenced |
| CI | [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed (web-regressions job) | Open, recurring bot issue | None referenced |
| Flake | [#5787](https://github.com/nearai/ironclaw/issues/5787) `slack_pairing_redeem_rejects_expired_code` flake | **Closed** | [#5789](https://github.com/nearai/ironclaw/pull/5789) merged/closed |

The highest-severity open bug is #5702 (P2) and it has **no associated fix PR** — a maintainer-attention item. The previously flaky Slack pairing test was closed on the same day it was reported with a deterministic-clock fix, which is a positive signal for triage responsiveness.

## 6. Feature Requests & Roadmap Signals

The dominant forward-looking signal is the **#5459 tool-installation series**, split into:

- [#5499](https://github.com/nearai/ironclaw/pull/5499) — Admin WASM install from zip + env-provisioned tenant-shared credentials
- [#5525](https://github.com/nearai/ironclaw/pull/5525) — Private (SSO-user) tool installs from a registered/imported tool

Both target the "Reborn" stack and are scored XL / low risk, suggesting the next release is positioned to ship tenant-scoped, user-installable WASM tools. Likely to land together with [#5598](https://github.com/nearai/ironclaw/pull/5598) for a coordinated 0.29.x cut.

Indirect feature signal from bug reports: a "disable terminal icon" setting (#5705) is small but indicates a missing UI-customization surface.

## 7. User Feedback Summary

Direct user feedback is thin — issues have 0–4 comments each and no thumbs-ups. The most concrete user pain points in the last 24h are:

- **Agent tool reliability:** users hit opaque HTTP 403 from the GitHub integration ([#5702](https://github.com/nearai/ironclaw/issues/5702)). The pain is diagnostic, not functional — the configuration path exists but fails silently.
- **UI clutter:** the persistent terminal icon is unwanted by users who don't use the terminal feature ([#5705](https://github.com/nearai/ironclaw/issues/5705)).
- **Navigation friction:** the Logs deep-link requiring two clicks ([#5557](https://github.com/nearai/ironclaw/issues/5557)) breaks the "click a link in a routine run" workflow.
- **CI trust:** the recurring Nightly E2E failures ([#4108](https://github.com/nearai/ironclaw/issues/4108)) are being auto-reported but accumulate without a linked root-cause fix, which can erode confidence in the green status of `main`.

No explicit satisfaction or "love" feedback in the window.

## 8. Backlog Watch

Items that warrant maintainer attention but have not seen recent traction:

- [#4108](https://github.com/nearai/ironclaw/issues/4108) — **Nightly E2E web-regressions failures**, open since 2026-05-27 (~6 weeks) and last updated 2026-07-08 by the GitHub Actions bot. No linked fix PR and no root-cause comment; this is the longest-dated open item in the digest.
- [#5557](https://github.com/nearai/ironclaw/issues/5557) — Logs deep-link race, open since 2026-07-02 with only 2 comments. Low severity but it breaks a documented user workflow.
- [#5702](https://github.com/nearai/ironclaw/issues/5702) — P2 GitHub integration 403, opened 2026-07-06 with no fix PR yet. The highest-severity active bug.
- [#5598](https://github.com/nearai/ironclaw/pull/5598) — Release PR with breaking API changes in `ironclaw_common` and `ironclaw_skills`. Has been open since 2026-07-03; downstream consumers are blocked on it.
- [#5643](https://github.com/nearai/ironclaw/pull/5643) — XL Slack OAuth + WebUI v2 stack, open since 2026-07-04, scored medium risk. It is now the single bottom PR for what was four stacked PRs, so its review surface has expanded.
- The "use default setters" refactor stack (PRs [#5807](https://github.com/nearai/ironclaw/pull/5807)–[#5815](https://github.com/nearai/ironclaw/pull/5815)) all depend on base [#5791](https://github.com/nearai/ironclaw/pull/5791) (not shown in top 20). The merge order of this stack deserves explicit coordination to avoid repeated rebases.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-08

## 1. Today's Overview

LobsterAI shows **elevated activity** in the last 24 hours, with 6 issues updated and 17 PRs touched, capped by the release of version **2026.7.7**. The activity is dominated by the merge of the `release/2026.7.6` branch back into `main` and a flurry of follow-up fixes targeting scheduled tasks, Cowork UX, and the email skill. Notably, **three new security advisories** were filed within hours by researcher YLChen-007 covering the HTML preview server, NIM outbound media flow, and a local token proxy — these warrant immediate maintainer attention. Long-stale issues from April (notably the 4.1 upgrade crash report) are being closed, suggesting a cleanup wave aligned with the new release.

---

## 2. Releases

### 🚀 2026.7.7 (Released 2026-07-07)

Highlights from the release branch merge ([PR #2291](https://github.com/netease-youdao/LobsterAI/pull/2291)) and release notes ([PR #2273](https://github.com/netease-youdao/LobsterAI/pull/2273)):

**Major features**
- **Scheduled task list card redesign** with status chip, toggle, search, and optimistic UI feedback
- **User-selectable notify targets** for scheduled tasks ([PR #2290](https://github.com/netease-youdao/LobsterAI/pull/2290))
- **xAI (Grok) OAuth login** support in providers
- **Delegated subagent collaboration** ([PR #2285](https://github.com/netease-youdao/LobsterAI/pull/2285)) — agents can now delegate to other enabled agents as subagents, materialized as Cowork child sessions
- **Multi-account support** for the built-in `imap-smtp-email` skill, including provider presets and connectivity testing ([PR #2275](https://github.com/netease-youdao/LobsterAI/pull/2275))

**Stability & fixes**
- Codex-style queued steer follow-ups for active Cowork turns ([PR #2292](https://github.com/netease-youdao/LobsterAI/pull/2292))
- Restoration of the compact add-menu width in Cowork ([PR #2268](https://github.com/netease-youdao/LobsterAI/pull/2268))
- Analytics event correction across skills, IM settings, sidebar, custom model edits, and scheduled task cron weekday parsing ([PR #2245](https://github.com/netease-youdao/LobsterAI/pull/2245))
- Auto-compaction stalled-retry cleanup ([PR #2289](https://github.com/netease-youdao/LobsterAI/pull/2289))
- SSE stream token replacement with `crypto.randomUUID()` ([PR #1401](https://github.com/netease-youdao/LobsterAI/pull/1401))
- Multi-select attachment picker now retains all selected files ([PR #1402](https://github.com/netease-youdao/LobsterAI/pull/1402))

**Migration notes**: Existing single-account email configurations remain backward-compatible via legacy `.env` parsing; users adopting multi-account should re-test sending through the new provider-preset flow.

**No breaking changes** are advertised, but the security advisory cluster filed today may trigger follow-up hotfixes.

---

## 3. Project Progress

The 13 closed/merged PRs in the last 24h form a coherent release-integration wave:

| PR | Title | Impact |
|---|---|---|
| [#2291](https://github.com/netease-youdao/LobsterAI/pull/2291) | Release merge 2026.7.6 → main | Release consolidation |
| [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292) | Stabilize Cowork steer follow-up routing | Cowork reliability |
| [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) | Delegated subagent collaboration | **Architectural milestone** |
| [#2275](https://github.com/netease-youdao/LobsterAI/pull/2275) | Optimize email skill (multi-account) | Email capability expansion |
| [#2290](https://github.com/netease-youdao/LobsterAI/pull/2290) | Make scheduled-task notify target user-selectable | UX improvement |
| [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) | Clear stalled compaction retry maintenance | Runtime reliability |
| [#2268](https://github.com/netease-youdao/LobsterAI/pull/2268) | Restore compact add-menu width | Cowork visual regression fix |
| [#2245](https://github.com/netease-youdao/LobsterAI/pull/2245) | Correct usage event reporting | Analytics correctness |
| [#1401](https://github.com/netease-youdao/LobsterAI/pull/1401) | Replace `Math.random()` SSE IDs with `crypto.randomUUID()` | Security hardening |
| [#1402](https://github.com/netease-youdao/LobsterAI/pull/1402) | Keep all files from multi-select attachment picker | Bug fix |
| [#1403](https://github.com/netease-youdao/LobsterAI/pull/1403) | Add missing `delete` i18n key | Localization |
| [#1406](https://github.com/netease-youdao/LobsterAI/pull/1406) | Fallback notify channel list when IM filter empty | Bug fix |
| [#1404](https://github.com/netease-youdao/LobsterAI/pull/1404) | Optimize scheduled-task creation time controls | UX improvement |

**Themes**: scheduled-task maturity, Cowork runtime hardening, agent collaboration (subagents), and provider expansion (Grok). The cluster suggests a focused 2–3 week sprint just concluded.

---

## 4. Community Hot Topics

| # | Item | Engagement | Underlying Need |
|---|---|---|---|
| [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) | 4.1 gateway crash loop after upgrade | **7 comments**, still unresolved at close | Users are not getting root-cause diagnostics from upgrade failures; they're resorting to direct contact (email + WeChat). This indicates **insufficient post-upgrade rollback/recovery guidance** and the absence of a safe auto-revert. |
| [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | Scheduled-task name validation missing | 1 comment, open since April | A UX-completeness issue: scheduled-task creation lacks basic input validation, leading to silent overwrites. |
| [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | USER.md synced across all agents | 1 comment, fresh | **High signal**: users expect per-agent identity/context isolation. The current shared store breaks the multi-agent mental model. |

The April-era issue **#1400** dominates comment volume and reflects acute user distress ("彻底瘫痪" / "completely paralyzed"), while **#2293** has the highest forward-looking product implication.

---

## 5. Bugs & Stability

### 🔴 Critical — Security Advisories (filed today)

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| **High** | [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) | Unauthenticated local token proxy on `lobsterai-server` allows any local process to replay the user's authenticated model API capability. | ❌ None yet |
| **High** | [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) | NIM outbound media flow accepts assistant-generated absolute local paths and exfiltrates them once user approves. | ❌ None yet |
| **High** | [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) | HTML preview server follows in-root symlinks → arbitrary local file disclosure. | ❌ None yet |

All three advisories are from a single security researcher with no comments yet. **Maintainers should triage within 24h.** These represent privilege-escalation-equivalent risks on a local desktop app.

### 🟠 High — Functional Bugs

- **[#1400](https://github.com/netease-youdao/LobsterAI/issues/1400)** (CLOSED stale, but unresolved): Gateway restart infinite loop on 4.1 upgrade; custom qwen3.5-plus LLM blocked because `web-extractor` refuses to start without `web-search`. **Closed without a documented fix** — risk that affected users remain stranded.
- **[#1348](https://github.com/netease-youdao/LobsterAI/issues/1348)** (OPEN stale): Scheduled-task name uniqueness not enforced. Low data-loss risk but corrupts task list UX.

### 🟢 Resolved Today
- Attachment picker only kept the last file → fixed ([#1402](https://github.com/netease-youdao/LobsterAI/pull/1402))
- Missing `delete` translation key → fixed ([#1403](https://github.com/netease-youdao/LobsterAI/pull/1403))
- IM notify channel dropdown empty when no platform enabled → fixed ([#1406](https://github.com/netease-youdao/LobsterAI/pull/1406))

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likely Next Version |
|---|---|---|
| **Subagent collaboration / delegation** | [PR #2285](https://github.com/netease-youdao/LobsterAI/pull/2285) (merged) | Shipped in 2026.7.7 — expect refinement in 2026.7.8 |
| **Cron custom scheduling + Agent/Model binding** | [PR #1347](https://github.com/netease-youdao/LobsterAI/pull/1347) (still open, stale) | Strong candidate for 2026.7.8 |
| **Skills management UI** | [PR #1346](https://github.com/netease-youdao/LobsterAI/pull/1346) (still open, stale) | Likely 2026.7.8–2026.8.x |
| **Per-agent USER.md isolation** | [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | High-likelihood hotfix; trivial data-model change |
| **Scheduled-task name validation** | [Issue #1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | Trivial; expect inclusion in next scheduled-task UX pass |

The two stale PRs (**#1346**, **#1347**) represent meaningful deferred scope. Their reactivation today (updated 2026-07-08) suggests a maintainer review pass is in progress.

---

## 7. User Feedback Summary

- **Acute frustration** with upgrade paths: user on [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) escalated via WeChat + email after the 3.30 → 4.1 upgrade broke the gateway and blocked their custom LLM (`qwen3.5-plus`) due to a `web-extractor`/`web-search` dependency. The closure without comment suggests **insufficient post-mortem transparency**.
- **Conceptual mismatch on multi-agent UX**: user on [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) built multiple agents expecting isolated "about you" / USER.md content but found them synchronized — undermining the multi-agent value proposition.
- **Positive momentum signals**: the volume and quality of merged PRs (subagent collaboration, multi-account email, xAI provider) indicate users are receiving substantial capability expansion on a roughly weekly cadence.
- **Satisfaction pattern**: contributors (e.g., @kayo5994) consistently link PRs to specific issue numbers with crisp problem/root-cause/fix writeups — a healthy engineering culture.

---

## 8. Backlog Watch

| Item | Age | Why it needs attention |
|---|---|---|
| **[#1400](https://github.com/netease-youdao/LobsterAI/issues/1400)** | Closed today without documented fix | User reported total paralysis. Closure without confirmation of resolution risks silent regression and erodes trust. Recommend reopening or linking a fix PR. |
| **[#1346](https://github.com/netease-youdao/LobsterAI/pull/1346)** | Open 97 days, updated today | Skills-management feature PR needs a maintainer review decision (merge/rebase/request-changes). |
| **[#1347](https://github.com/netease-youdao/LobsterAI/pull/1347)** | Open 97 days, updated today | Cron-custom + Agent-binding scheduled-task work — large scope, likely needs merge-strategy discussion. |
| **[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** | Open 97 days, updated today | Dependabot Electron 40 → 43 bump — significant version jump; security implications need maintainer sign-off. |
| **[#1348](https://github.com/netease-youdao/LobsterAI/issues/1348)** | Open 97 days, no fix PR | Easy win; should be bundled into next scheduled-task patch. |
| **[#2286, #2287, #2288](https://github.com/netease-youdao/LobsterAI/issues/2286)** | Open <24h | **Highest priority** — three local-attack-surface security advisories with no fix in flight. |

---

**Overall health assessment**: LobsterAI is in an **active, high-velocity release cadence** with a productive contributor base, but is **carrying security debt** that needs immediate triage and has a **small backlog of stale PRs** that, if reactivated, could meaningfully expand capability. The 2026.7.7 release is feature-rich; the next sprint should prioritize security hardening and clearing the April stale items.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw (TinyAGI) Project Digest — 2026-07-08

## 1. Today's Overview

Project activity is unusually concentrated: 9 new issues were opened in the last 24 hours, **all security advisories**, authored by a single outside researcher (**YLChen-007**), and **zero pull requests, no merges, and no releases**. The cluster represents a coordinated disclosure of multiple critical vulnerabilities in TinyAGI's control-plane HTTP/SSE API, all sharing a common root cause — the absence of authentication and authorization on privileged local endpoints (e.g., `PUT /api/settings`, `POST /api/message`, `/api/pairing`, SSE event streams). Project maintainer engagement is currently **zero** (no comments on any of the 9 issues, no reactions, no PR activity), which is a significant health signal given the severity of the reported flaws. Overall status: **at-risk / awaiting maintainer triage**.

## 2. Releases

*No new releases in the last 24 hours; section omitted per template guidance.*

## 3. Project Progress

- **Merged PRs today:** 0
- **Closed PRs today:** 0
- **Code advancement:** None observable. No commits, merges, or releases in the reported window.

## 4. Community Hot Topics

All 9 updated items today are Issues, all flagged `[Security]`, all opened on **2026-07-07** by **YLChen-007**, and all currently have **0 comments and 0 reactions**. Activity is therefore "viral-by-volume" rather than by discussion.

| # | Title (truncated) | Link |
|---|-------------------|------|
| #294 | Unauthenticated control-plane routes — system prompt overwrite + daemon restart | [Issue #294](https://github.com/TinyAGI/tinyagi/issues/294) |
| #293 | Agent-ID path traversal escapes workspace root | [Issue #293](https://github.com/TinyAGI/tinyagi/issues/293) |
| #292 | Unauthenticated admin API — persistent settings + agent prompt modification | [Issue #292](https://github.com/TinyAGI/tinyagi/issues/292) |
| #291 | Anthropic adapter launches Claude with `--dangerously-skip-permissions` | [Issue #291](https://github.com/TinyAGI/tinyagi/issues/291) |
| #290 | Terminal escape injection via `POST /api/message` — log spoofing | [Issue #290](https://github.com/TinyAGI/tinyagi/issues/290) |
| #289 | Unauthenticated file exfiltration via outbound attachment paths | [Issue #289](https://github.com/TinyAGI/tinyagi/issues/289) |
| #288 | Unauthenticated local control plane — live event leak + settings mutation | [Issue #288](https://github.com/TinyAGI/tinyagi/issues/288) |
| #287 | Pairing API allows arbitrary approval of pending channel senders | [Issue #287](https://github.com/TinyAGI/tinyagi/issues/287) |
| #286 | Unauthenticated local control API — settings, prompt overwrite, SSE | [Issue #286](https://github.com/TinyAGI/tinyagi/issues/286) |

**Underlying need:** A single, recurring architectural requirement — **localhost-bound control plane endpoints must enforce an authentication/authorization boundary before any privileged state mutation (settings, agent prompts, daemon lifecycle, file reads/writes, pairing approvals, event streaming)**. The reports also flag agent-ID input handling, CLI permission flags, log-render escaping, and attachment-path canonicalization as secondary hardening themes.

## 5. Bugs & Stability

Because every report is a `[Security]` advisory, they collectively represent a **critical stability/secure-by-default incident** rather than ordinary bugs. Ranked by likely blast radius:

| Severity | Issue | Blast Radius | Fix PR? |
|----------|-------|--------------|---------|
| **Critical** | [#294](https://github.com/TinyAGI/tinyagi/issues/294) — Unauth control-plane: system prompt overwrite + daemon restart | Full process takeover, persistent config tampering | None |
| **Critical** | [#292](https://github.com/TinyAGI/tinyagi/issues/292) — Unauth admin API: persistent settings & prompt modification | Persistent supply-chain-level prompt compromise | None |
| **Critical** | [#288](https://github.com/TinyAGI/tinyagi/issues/288), [#286](https://github.com/TinyAGI/tinyagi/issues/286) — Unauth local control plane + SSE event leak | Real-time telemetry exfiltration + state mutation | None |
| **High** | [#293](https://github.com/TinyAGI/tinyagi/issues/293) — Path traversal via agent id `..` | Filesystem escape from workspace root | None |
| **High** | [#289](https://github.com/TinyAGI/tinyagi/issues/289) — Arbitrary local file exfiltration via attachment paths | Data loss / confidentiality breach | None |
| **High** | [#287](https://github.com/TinyAGI/tinyagi/issues/287) — Pairing approval bypass | Trust boundary collapse on channel senders | None |
| **High** | [#291](https://github.com/TinyAGI/tinyagi/issues/291) — Claude CLI unconditional `--dangerously-skip-permissions` | Unbounded tool execution from an unauthed caller | None |
| **Medium** | [#290](https://github.com/TinyAGI/tinyagi/issues/290) — Terminal escape injection / log spoofing | Operator deception, downstream log poisoning | None |

**No fix PRs exist yet for any issue.** Maintainer response is the urgent gating item.

## 6. Feature Requests & Roadmap Signals

No conventional feature requests surfaced today. However, the security cluster implies the following capability gaps that are likely candidates for an imminent security-focused release (e.g., a hypothetical `0.x.y` patch):

- **Auth/authz layer** for the local control plane (token, loopback-only bind, or capability-based auth).
- **Sandboxing of agent IDs and attachment paths** (canonicalization + workspace-root enforcement).
- **Hardened Anthropic adapter invocation** — remove or gate `--dangerously-skip-permissions` behind operator confirmation per request.
- **Structured/log-safe message rendering** to neutralize ANSI/terminal-escape injection.
- **Pairing API gating** — bind approval endpoints to an authenticated control surface.
- **SSE access control** — tokenized subscriptions to live event streams.

Likelihood for the *next* release: very high that at minimum an authentication/authorization primitive lands, given the breadth of the disclosure.

## 7. User Feedback Summary

There is no end-user commentary in the data — every issue is an externally authored security advisory, none carry comments, reactions, or maintainer replies. As a proxy for "voice of the community":

- **Pain points surfaced:** lack of any auth boundary, lack of path canonicalization, unsafe CLI flags, log-injection fragility, opaque pairing controls.
- **Use cases implied:** the project is intended to operate as a local-first control plane (REST + SSE) for an AI agent runtime interacting with channels and external CLIs (Anthropic's `claude`). The same architecture that makes it scriptable also makes it trivially reachable by any same-host process.
- **Satisfaction signal:** Cannot be measured from this dataset (no comments, no 👍). The lack of maintainer response on critical disclosures is itself a **negative satisfaction indicator**.

## 8. Backlog Watch

The entire current issue backlog effectively consists of today's cluster. All items need **immediate maintainer attention**, ideally combined into a single coordinated remediation:

- **[#286](https://github.com/TinyAGI/tinyagi/issues/286), [#288](https://github.com/TinyAGI/tinyagi/issues/288), [#292](https://github.com/TinyAGI/tinyagi/issues/292), [#294](https://github.com/TinyAGI/tinyagi/issues/294)** — control-plane auth/authorization (the umbrella theme; #294 likely superset).
- **[#287](https://github.com/TinyAGI/tinyagi/issues/287)** — pairing API gating.
- **[#293](https://github.com/TinyAGI/tinyagi/issues/293)** — workspace-root enforcement on agent ID / attachment path inputs.
- **[#289](https://github.com/TinyAGI/tinyagi/issues/289)** — attachment-path canonicalization.
- **[#290](https://github.com/TinyAGI/tinyagi/issues/290)** — log-rendering / escape sanitization.
- **[#291](https://github.com/TinyAGI/tinyagi/issues/291)** — Anthropic CLI invocation hardening.

**Recommendation for maintainers:** acknowledge in a single tracking issue (or security advisory), publish a CVE-style summary, ship an emergency patch release, and consider temporarily gating the unauthenticated endpoints (loopback bind + token, or kill-switch) until fixed. Until at least one response is recorded on any of these issues, the project's health indicator should be flagged as **at-risk**.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-08

> Source repo: `agentscope-ai/QwenPaw` (display name "CoPaw"). Data window: last 24 hours.

---

## 1. Today's Overview

CoPaw had a **highly active 24-hour window**, with 17 issues updated (11 open / 6 closed) and 33 PRs touched (19 open / 14 merged/closed), accompanied by the **v2.0.0-beta.3** release. The pre-release cycle for v2.0 is generating a predictable but heavy load of bug reports around the new **scroll context strategy** and **frontend rendering at scale**, while a cluster of cross-cutting fixes (file-guard bypass, scroll eviction, tool-call JSON recovery, GitHub-side metadata) are landing in parallel. The project is clearly in an intensive stabilization phase ahead of GA; regression tests (#5813), CI proof-gates (#5844), and version bump #5837 to **2.0.0b4** are all queued. Net assessment: **healthy but volume-stressed**, with the maintainers shipping fast against a steady stream of legitimate regressions.

---

## 2. Releases

### v2.0.0-beta.3 (released today)
- **CI fix:** `guard empty extra_flags expansion for bash 3.2 on macOS` ([#5743](https://github.com/agentscope-ai/QwenPaw/pull/5743) by @yutai78786) — unblocks macOS developers on the default bash 3.2.
- **Auth hardening:** `enhance rate limiting with multi-dimensional protection` ([#5738](https://github.com/agentscope-ai/QwenPaw/pull/5738) by @zhijianma).
- *Additional changelog entries were truncated in the source data.*

**Release duty / installation verification** is tracked in [Issue #5833](https://github.com/agentscope-ai/QwenPaw/issues/5833) with a 4-hour post-publish deadline.

**Migration notes for v2.0 users:** Scroll compression is the default strategy; users on long-running IM sessions or with tool-heavy histories should review the changes in [#5765](https://github.com/agentscope-ai/QwenPaw/pull/5765) and [#5848](https://github.com/agentscope-ai/QwenPaw/pull/5848). A follow-up **v2.0.0b4** is staged ([#5837](https://github.com/agentscope-ai/QwenPaw/pull/5837), already merged/closed).

---

## 3. Project Progress

**Merged/closed PRs (14):**

| PR | Title | Impact |
|---|---|---|
| [#5765](https://github.com/agentscope-ai/QwenPaw/pull/5765) | `fix(scroll): protect the active turn, add graduated pressure relief, and make recall failures unmistakable` | Resolves three high-impact scroll bugs (#5746, #5776, #5778). **Most consequential PR of the day.** |
| [#5747](https://github.com/agentscope-ai/QwenPaw/pull/5747) | `Protect active turn from scroll context eviction` | Superseded by #5765 but its phase-1 patch is carried forward. |
| [#5837](https://github.com/agentscope-ai/QwenPaw/pull/5837) | `chore (version): bump version 2.0.0b4` | Next beta queued. |
| [#5839](https://github.com/agentscope-ai/QwenPaw/pull/5839) | `fix(packaging): add static project.urls for GitHub dependency graph` | Restores the Dependents page on GitHub — previously empty due to missing PyPI metadata. |
| [#5843](https://github.com/agentscope-ai/QwenPaw/pull/5843) | `fix(tool_guard): detect find -delete as dangerous shell command` | Closes a real sandbox escape vector (#5842). |

**Open PRs advancing the project (selected):**
- [#5838](https://github.com/agentscope-ai/QwenPaw/pull/5838) — bumps `agentscope` to 2.0.4 and `ReMe` to 0.4.0.8; refreshes ReMeLight memory docs and adds safer interrupt handling.
- [#5844](https://github.com/agentscope-ai/QwenPaw/pull/5844) — adds `real-behavior-proof` PR-body policy (ported from openclaw) and wires `pr-spam-gate` into `tests.yml`. Strengthens contributor quality bar.
- [#5813](https://github.com/agentscope-ai/QwenPaw/pull/5813) — **43 targeted regression tests** pinning 4 production issues (install, runtime tool-call handling, LLM acquire timeout, rm-protection bypass). Centerpiece of the July regression plan.
- [#5814](https://github.com/agentscope-ai/QwenPaw/pull/5814) — bundles Node runtime with Tauri desktop so `npx`-based ACP agents work out of the box.
- [#5845](https://github.com/agentscope-ai/QwenPaw/pull/5845) — upgrades `@agentscope-ai/chat` to a beta with long-text-upload + message-list performance fixes.

---

## 4. Community Hot Topics

Ranked by comment volume over the last 24h:

1. **[#5401 — 15 comments](https://github.com/agentscope-ai/QwenPaw/issues/5401)** — Console crashes (white-screen) opening sessions with large tool-use history. Backend serializes `tool_use`/`tool_result` blocks as `type: "data"`, but the frontend's `getPrimaryTraceBlock` only handles `type: "tool_use"`/`"tool_result"`. **High community pain: this is the longest-running thread in the window.**
2. **[#5273 — 10 comments](https://github.com/agentscope-ai/QwenPaw/issues/5273)** — Centralized v2.0.0 pre-release bug tracker. Doubles as a community triage hub.
3. **[#5479 — 6 comments](https://github.com/agentscope-ai/QwenPaw/issues/5479)** — Sessions >500 KB throw "an unexpected error occurred while rendering this page" and become unopenable. **Same family of frontend-scale issues as #5401** — points to a shared class of bugs in message-list virtualization/rendering.
4. **[#5416 — 5 comments (closed)](https://github.com/agentscope-ai/QwenPaw/issues/5416)** — When models place output in `thinking`/`reasoning_content`, the `content` field is empty and users see no reply. Notable: a Stepfun step-3.5 reproduction case.
5. **[#5746 — 4 comments (closed)](https://github.com/agentscope-ai/QwenPaw/issues/5746)** — Scroll compression folds the **active** task into `conversation_history`, causing the model to "go back" to an old greeting. Linked to the #5765 fix.
6. **[#5797 — 4 comments](https://github.com/agentscope-ai/QwenPaw/issues/5797)** — Per-cron-task popup-reminder toggle (replaces the prior blanket #4803 fix).

**Underlying need:** Two dominant themes — **(a) rendering robustness on large conversations** and **(b) safer defaults around scroll compaction** for long-running IM sessions. Both are being actively addressed.

---

## 5. Bugs & Stability

Sorted by severity, today:

| Sev | Issue | Status | Fix? |
|---|---|---|---|
| 🔴 High | [#5846](https://github.com/agentscope-ai/QwenPaw/issues/5846) — v2.00b3 still shows approval popups in "closed mode" (auto-execute), blocking autonomous workflows | OPEN | None yet |
| 🔴 High | [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) — Windows `AppContainer` sandbox ACEs inherit into Hermes Desktop Electron, GPU process crash | OPEN | None yet — security-relevant |
| 🔴 High | [#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784) — Frontend compression threshold shows value from wrong `provider_id` when same model ID exists under multiple providers | OPEN | None yet |
| 🟠 Medium | [#5835](https://github.com/agentscope-ai/QwenPaw/issues/5835) — `/stop` lacks user isolation in DingTalk DM; session_id collisions cancel other users' tasks | OPEN | None yet |
| 🟠 Medium | [#5842](https://github.com/agentscope-ai/QwenPaw/issues/5842) — `find ... -delete` bypasses file_guard when `allow_preview_outside_workspace` is on | OPEN | ✅ [PR #5843](https://github.com/agentscope-ai/QwenPaw/pull/5843) |
| 🟡 Low (closed) | [#5416](https://github.com/agentscope-ai/QwenPaw/issues/5416), [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746), [#5776](https://github.com/agentscope-ai/QwenPaw/issues/5776), [#5778](https://github.com/agentscope-ai/QwenPaw/issues/5778), [#5785](https://github.com/agentscope-ai/QwenPaw/issues/5785), [#5774](https://github.com/agentscope-ai/QwenPaw/issues/5774) | CLOSED | ✅ (notably [#5765](https://github.com/agentscope-ai/QwenPaw/pull/5765) closes three of them) |

**Pattern:** The file-guard / tool-guard surface is accumulating sandbox-bypass findings (#5842, plus prior #5090 reopened by tests). This warrants a dedicated security review pass on `dangerous_shell_commands.yaml`.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likely in next version? |
|---|---|---|
| Per-cron-task popup-reminder toggle | [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) + [PR #5847](https://github.com/agentscope-ai/QwenPaw/pull/5847) | **High** — PR already open |
| Granular `rejects_media` (per media-type instead of global boolean) | [#5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) | Medium — clean design, low risk |
| Avatar field on agent profile | [PR #5826](https://github.com/agentscope-ai/QwenPaw/pull/5826) (first-time contributor) | High — frontend already supports it |
| `grep_search` improvements (`show_file`, pipe-separated literals) | [PR #5840](https://github.com/agentscope-ai/QwenPaw/pull/5840), [PR #5834](https://github.com/agentscope-ai/QwenPaw/pull/5834) | High — both first-time-contributor ready |
| Desktop: auto-detect local paths → click-to-open in file explorer | [PR #5836](https://github.com/agentscope-ai/QwenPaw/pull/5836) | Medium — closes #4830 |
| Long-text upload + larger message-list perf | [PR #5845](https://github.com/agentscope-ai/QwenPaw/pull/5845) | **High — directly addresses #5401 / #5479** |
| Bundle Node runtime for ACP desktop | [PR #5814](https://github.com/agentscope-ai/QwenPaw/pull/5814) | Medium — UX win for non-Node users |

**Signal:** First-time contributors are heavily active today (#5751, #5791, #5826, #5834, #5840). The new `real-behavior-proof` gate (#5844) and `pr-spam-gate` are clearly aimed at keeping that contributor pipeline productive without lowering quality.

---

## 7. User Feedback Summary

**Satisfaction signals:**
- *"千问不要因噎废食，有人反对，就都关掉了"* ([#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797)) — community pushing back on **over-restrictive defaults** (a prior blanket fix removing popups was seen as paternalistic). Users want **per-task granularity**.
- Strong, structured bug reproductions (e.g. #5829's pointer to `_apply_all_acls`, #5784's pinpoint of `index.tsx:53`) — user base is technically sophisticated and contributing root-cause analysis, not just symptoms.
- High closure rate on reported issues (6/17 closed in 24h).

**Pain points:**
- **Long-session rendering is broken** in two distinct ways (#5401, #5479). Heavy users of tool-heavy workflows are effectively locked out of their history.
- **Scroll compression is unsafe by default** for live tasks (#5746, #5776, #5778). Users on long-lived IM (DingTalk, QQ, etc.) report the model "loses its place."
- **Sandbox / file-guard escape hatches** keep being found (#5842 — `find -delete`, plus #5829 — Windows ACE inheritance). Suggests audit gap in the dangerous-command list.
- **Cross-user cancellation** in multi-tenant DMs (#5835) is a real correctness bug for production bot deployments.

**Overall sentiment:** Frustrated-but-loyal. Users keep filing well-scoped issues rather than forking, and several are simultaneously submitting fixes.

---

## 8. Backlog Watch — Items Needing Maintain

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-08

## 1. Today's Overview

ZeroClaw experienced a high-velocity development day with **50 PRs touched** (5 closed) and **10 issues updated** (2 closed), but produced **no new releases** despite being only ~2 weeks from the active v0.8.3 lane. The activity is heavily weighted toward **security hardening** (auth providers, SSRF gates, timing-attack fixes, per-sender authorization) and **MCP/tooling correctness** (deferred-loading access policy, schema-clone memory growth, filter-group prefix bugs). The fact that no PRs were merged today while 45 remain open signals a **bottleneck at maintainer review**, particularly on XL-sized features (#8672, #8590, #8710). Overall project health appears **technically strong but throughput-constrained**.

## 2. Releases

No new releases in the last 24 hours. The project remains on its pre-v0.8.3 trajectory with [issue #8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) tracking the release support lane.

## 3. Project Progress

Five PRs were closed today (all authored by `yaotukeji` except where noted), advancing discoverability and onboarding UX:

| PR | Title | Impact |
|---|---|---|
| [#8813](https://github.com/zeroclaw-labs/zeroclaw/pull/8813) | `fix(zerocode): add Global Settings entry to Channels config for root fields` | Surfaces root-level channel fields (`show_tool_calls`, `ack_reactions`, etc.) in the Channels config UI |
| [#8820](https://github.com/zeroclaw-labs/zeroclaw/pull/8820) | `Fix 8757 channels root settings e85b19319` | Companion fix for #8757 (channels root settings discoverability) |
| [#8822](https://github.com/zeroclaw-labs/zeroclaw/pull/8822) | `add discoverable Global Settings entry to Channels config section (#8757)` | Same UX fix as #8813 — three duplicate closes suggest a rebasing/consolidation cycle on this thread |

Two issues were closed today:
- [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) — v0.8.1 integration/channel/provider/tool tracker (closed by author)
- [#8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) — `skill_manage.create` action request (closed same-day; may indicate rapid merge or deprioritization)

**Net progress assessment:** Substantial code movement but limited *merge velocity*. The day's deliverables are mostly UX/onboarding polish, not feature completions.

## 4. Community Hot Topics

By comment count, the most engaged thread is **[#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** with **9 comments**: the `tool_filter_groups` no-op bug for MCP tools. Despite zero thumbs-up, the comment volume signals an engaged reporter (`nick-pape`) pushing for diagnosis of two distinct defects (prefix-check bug + missing `deferred_loading` integration). Underlying need: **agents need reliable allow-listing when surfacing MCP tools**, and the current implementation gives operators a false sense of security through a config key that silently does nothing.

Other notable engagement:
- **[#8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314)** (3 comments) — hot-reload of `[observability]` rotation/persistence settings; reflects operator pain with daemon-restart costs for routine config tuning.
- **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** (3 comments) — the closed tracker indicates community-curated roadmaps are being actively maintained.

The PR backlog shows that **no single PR has accumulated comment-based discussion**, suggesting this is an early-review phase where the volume of new submissions is outpacing reviewer attention.

## 5. Bugs & Stability

Ranked by severity (P1 / risk:high first):

| Priority | Issue | Title | Fix PR? |
|---|---|---|---|
| **P1 / risk:high** | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | `tool_filter_groups` no-op for real MCP tools (prefix-check bug) + no integration with `deferred_loading` | No public fix PR; open ~7 weeks |
| **P1 / risk:high** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/tool-schema cloning drives unbounded RSS growth in agent loop (split from #5542) | No dedicated fix; one of three root causes in #5542 was addressed by #8633 |
| **risk:high** | [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) | Centralize deferred-MCP access policy (single source of truth) — surfaces the same root cause as #6699 | **Fix PR in flight** (open, large) |
| **risk:high** | [#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690) | `/model --agent` writes to a key that drops authorization scope | **Fix PR in flight** |
| **S2** | [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | Telegram documentation incorrect (degraded behavior) | Companion docs PR [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825) |
| **S3** | [#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) | `bind-telegram` references unknown config property | **Fix PR in flight** [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823) |
| **security** | [#8824](https://github.com/zeroclaw-labs/zeroclaw/pull/8824) | `/ws/nodes` auth token compared with non-constant-time equality (timing attack) | **Fix PR open** |
| **security** | [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826), [#8827](https://github.com/zeroclaw-labs/zeroclaw/pull/8827) | `image_gen` tool SSRF (layers 1+2 base + layer 3 DNS rebinding) | **Fix PRs open, stacked** |

**Stability signal:** The MCP subsystem is the dominant source of P1-class bugs today (3 of 3 P1 items touch MCP). Two of the three have **active fix PRs in review**, but #6699 — the oldest (open since 2026-05-16) and most-commented — still has no public fix.

## 6. Feature Requests & Roadmap Signals

User-submitted and team-tracked features active today:

| Feature | Source | Likelihood for next release |
|---|---|---|
| Multi-user auth providers, permission profiles, principal isolation | [PR #8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) — XL, security:policy, security:pairing | **High** — explicitly linked to RFC #7141 and cuts across security, gateway, runtime |
| SOP visual authoring + channel fan-in + `git_forge` | [PR #8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) — XL, across 8+ tools | **Medium** — large scope, calls for beta testers |
| OpenAI Bridge channel (OpenAI-client-compatible HTTP endpoints) | [PR #8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710) — XL, needs maintainer review | **High** — unblocks Home Assistant, Cline, etc. |
| Hot-reload `[observability]` log config | [Issue #8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314) | **Medium** — directly feeds v0.8.3 tracker #8073 |
| Embedded Canvas sidebar in chat page | [Issue #8828](https://github.com/zeroclaw-labs/zeroclaw/issues/8828) | **Low** — frontend-only, no PR yet |
| Runtime-profile `prompt_injection_mode` override | [PR #8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235) — S-size | **High** — small, completes a tracked gap |
| `run_model_query` max-iteration graceful summary metering (S21 P2) | [PR #8821](https://github.com/zeroclaw-labs/zeroclaw/pull/8821) | **Medium** — stacked on #8806 |
| Default HTTP security response headers on gateway | [PR #8829](https://github.com/zeroclaw-labs/zeroclaw/pull/8829) | **High** — closes bbot scan findings |

**Roadmap signal:** The v0.8.3 support tracker ([#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)) plus the SOP authoring tracker ([#8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736)) suggest **v0.8.3 is positioned as an "authoring + observability + security" release**, with security and OpenAI-channel compatibility as the marquee additions.

## 7. User Feedback Summary

The user-visible pain points cluster around three themes:

1. **Documentation drift in the Telegram onboarding path.** Three items in 24 hours touch this: [#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) (`bind-telegram` config-property name wrong), [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) (Telegram docs incorrect, S2, with explicit user quote: *"if not implemented correctly, slop remains slop"*), and the already-shipped docs fix in [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825). This is the **highest-density user-visible defect area** of the day, signaling that the Telegram onboarding flow is regressing faster than docs can be updated.

2. **Skill authoring gaps.** [#8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) — closed same day — captures a clear workflow friction: agents creating new skills fall back to `file_write` producing loose `.md` files that `skill_manage` then refuses to edit. Same-day closure without a tracked delivery is ambiguous (resolved vs. wontfix); worth maintainer confirmation.

3. **No thumbs-up reaction on any item.** Across 10 issues and 20 PRs sampled, **zero 👍 counts were recorded**. This is a soft signal that either (a) the user base is reporting-mode only, or (b) the audience is more institutional than consumer.

## 8. Backlog Watch

Items that warrant maintainer prioritization:

- **[#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** — `tool_filter_groups` no-op bug. Open since **2026-05-16 (~7 weeks)**, highest comment count (9) on the board, P1 / risk:high, **no public fix PR**. This is the longest-standing P1 security-relevant bug visible today; the related fix [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) addresses the same surface but is itself a large, open PR.

- **[#8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314)** — Hot-reload observability config. Open since 2026-06-25, only 3 comments, sits inside the v0.8.3 tracker — at risk of slipping if not picked up this cycle.

- **[#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)** — Unbounded RSS growth from MCP/tool-schema cloning. P1, split from #5542, **no dedicated fix PR** identified despite being tied to OOM-class symptoms.

- **[#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672)** — Multi-user auth providers (XL). Stale from a review standpoint: opened 2026-07-03, no comments recorded, blocks a large security surface for v0.8.3.

- **[#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590)** — SOP visual authoring (XL, 25+ label tags). The largest in-flight PR by surface area; beta-tester call-out in the description indicates it is reviewable but stalled.

**Maintainer-action recommendation:** The biggest risk to v0.8.3 health is not code quality but **review queue depth on three XL PRs** (#8672, #8590, #8710) plus the unresolved #6699 P1 bug. Triage on those four items would materially de-risk the next release window.

</details>