# OpenClaw Ecosystem Digest 2026-07-08

> Issues: 197 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-08 02:49 UTC

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

OpenClaw shows a high-activity maintenance day with 697 updates across Issues and PRs, but **no new releases shipped**. The repository is in a heavy bug-fix and stabilization phase: 358 PRs remain open, 142 were merged/closed, and 17 of 197 active issues were closed. The dominant themes are **multi-agent session/orchestration stability**, **secret-handling security**, and **channel-integration regressions** (Feishu, Matrix, Discord, Telegram, Webchat). The volume of `clawsweeper:no-new-fix-pr` and `needs-maintainer-review` tags on long-lived "diamond lobster" issues signals a backlog of severe bugs awaiting maintainer triage rather than missing PRs.

## 2. Releases

**No new releases in the last 24 hours.** With 142 PRs merged/closed but no tag cut, the project appears to be accumulating changes for a later release window — a slight risk indicator for users on `latest` who are not pinned to a specific version.

## 3. Project Progress

In the last 24 hours, **142 PRs were merged or closed**, addressing a wide range of stability and correctness issues:

- **[#101928](https://github.com/openclaw/openclaw/pull/101928)** — Allow re-entrant session write lock for overflow-recovery compaction (closes #97747).
- **[#101832](https://github.com/openclaw/openclaw/pull/101832)** — Keep Gemini thinking disabled after clamp (closes #101785).
- **[#101715](https://github.com/openclaw/openclaw/pull/101715)** — Re-throw `LiveSessionModelSwitchError` for outer retry loop on mid-turn model switches (closes #101676).
- **[#101399](https://github.com/openclaw/openclaw/pull/101399)** — Detect unresolved env-var placeholders in `gateway.auth.token` (closes #101286).
- **[#101932](https://github.com/openclaw/openclaw/pull/101932)** — Avoid session stalls when parent token probing hangs (closes #101718).
- **[#101964](https://github.com/openclaw/openclaw/pull/101964)** — Cap `teamGroupIdCache` in MS Teams integration to prevent unbounded growth.
- **[#101741](https://github.com/openclaw/openclaw/pull/101741)** — Cap `userProfileCache` in LINE integration.
- **[#101972](https://github.com/openclaw/openclaw/pull/101972)** — Prevent `parseKeyedAnswers` from splitting URLs, Windows paths, and time strings.
- **[#101940](https://github.com/openclaw/openclaw/pull/101940)** — Apply image compression policy to `media://` references.
- **[#101512](https://github.com/openclaw/openclaw/pull/101512)** — Align Codex turn watchdog defer guards and add wall-clock ceiling (#99272).
- **[#101976](https://github.com/openclaw/openclaw/pull/101976)** — Keep ACP background-task summaries UTF-16 safe at truncation.
- **[#101942](https://github.com/openclaw/openclaw/pull/101942)** — Keep plugin description truncation UTF-16 safe.
- **[#101971](https://github.com/openclaw/openclaw/pull/101971)** — Add board filter to workboard toolbar (closes #101789).
- **[#100845](https://github.com/openclaw/openclaw/pull/100845)** — Make one-shot `agent --local` runs export OTel diagnostics.
- **[#89040](https://github.com/openclaw/openclaw/pull/89040)** — Avoid 14–22s event-loop stall during `embedded_run` bootstrap-context.

Three PRs were closed without merge: **#101504** (decodeParams cause preservation), **#101974** (qa-matrix refactor), **#101970** (images-only sanitization) — and **#99164** (refusal-as-failover eligibility) was also closed, suggesting it will be reworked.

Net effect: the merge cadence is concentrated on **small (XS/S) reliability fixes** (regex edge cases, cache caps, lock reentrancy, env-var hygiene), with one large bootstrap perf improvement (#89040). No new user-visible features landed today.

## 4. Community Hot Topics

The most-discussed items reveal **systemic pain points** that have lingered for months:

| Item | Comments | Underlying Need |
|------|----------|-----------------|
| [#11829 — Security Roadmap: Protecting API Keys from Agent Access](https://github.com/openclaw/openclaw/issues/11829) | 20 | Users want a **layered secret-handling model** so provider keys never reach the LLM prompt. Trust boundary in the system prompt is the core ask. |
| [#22676 — Signal daemon `stop()` race condition on SIGUSR1 restart](https://github.com/openclaw/openclaw/issues/22676) | 17 | Reliability of the **gateway restart path**; orphan processes break message delivery. |
| [#29387 — Bootstrap files in `agentDir` are silently ignored](https://github.com/openclaw/openclaw/issues/29387) | 14 (5 👍) | Documentation/behavior mismatch around **per-agent bootstrap loading**; users expect `SOUL.md` / `AGENTS.md` to follow the agent's own dir. |
| [#43367 — Multi-agent orchestration instability](https://github.com/openclaw/openclaw/issues/43367) | 13 | The "**multi-agent story is broken**" thread — concurrent `agents add`, session-lock failures, detached children all in one report. |
| [#31583 — `exec` tool does not inherit `skills.entries.*.env`](https://github.com/openclaw/openclaw/issues/31583) | 13 (2 👍) | Regression in **secret injection** to sub-shells. |
| [#99241 — Tool outputs sometimes render as image attachments](https://github.com/openclaw/openclaw/issues/99241) | 13 (1 👍) | **ANSI-heavy / long stdout** is being silently downgraded to "(see attached image)", destroying the agent's evidence trail. |
| [#39604 — `tools.web.fetch.allowPrivateNetwork`](https://github.com/openclaw/openclaw/issues/39604) | 13 (11 👍) | Strongly supported feature: opt-in private network access for `web_fetch` for **self-hosted / internal API integrations**. |
| [#41744 — Feishu read-image tool result loses media](https://github.com/openclaw/openclaw/issues/41744) | 12 | **Feishu outbound media** gets stripped between the agent reply and final delivery. |
| [#22358 — Post-subagent completion extension hook](https://github.com/openclaw/openclaw/issues/22358) | 12 (1 👍) | Need for **observability / post-mortem** hooks after sub-agents finish. |
| [#27445 — `announceTarget` for sub-agent completion routing](https://github.com/openclaw/openclaw/issues/27445) | 11 (5 👍) | Parent-orchestrator control: route sub-agent completion to the parent session instead of the channel. |

**Pattern**: secret handling, multi-agent coordination, and sub-agent lifecycle hooks are the three highest-signal community asks.

## 5. Bugs & Stability

### Critical (P1, "diamond lobster") — new or hot

- **[#22676](https://github.com/openclaw/openclaw/issues/22676)** — Signal daemon SIGUSR1 race → orphaned processes, message loss. P1, impact: crash-loop. **No fix PR linked.**
- **[#29387](https://github.com/openclaw/openclaw/issues/29387)** — Bootstrap files ignored outside workspace. P1, regression. **No fix PR linked.**
- **[#43367](https://github.com/openclaw/openclaw/issues/43367)** — Multi-agent orchestration instability. P1, impact: session-state, message-loss, auth-provider. **No fix PR linked.**
- **[#31583](https://github.com/openclaw/openclaw/issues/31583)** — `exec` tool drops `skills.entries.*.env`. P1 regression. **No fix PR linked.**
- **[#41165](https://github.com/openclaw/openclaw/issues/41165)** — Telegram DMs still polluting `agent:main:main` post-#40519. P1, message-loss. **No fix PR linked.**
- **[#37634](https://github.com/openclaw/openclaw/issues/37634)** — `sandbox.workspaceAccess: none` mounts workspace read-only. P1, security. 7 👍.
- **[#38327](https://github.com/openclaw/openclaw/issues/38327)** — "Cannot convert undefined or null to object" on Gemini 3.1 Pro after 2026.3.2. P1, crash-loop. **No fix PR linked.**
- **[#41199](https://github.com/openclaw/openclaw/issues/41199)** — `sessions_send` / `message` parameter conflicts. P1, message-loss.
- **[#38091](https://github.com/openclaw/openclaw/issues/38091)** — Webchat WebSocket reconnect terminates sessions. P1, message-loss.
- **[#40255](https://github.com/openclaw/openclaw/issues/40255)** — User-configured heartbeat prompt no longer respected. P1, message-loss regression. **No fix PR linked.**
- **[#41346](https://github.com/openclaw/openclaw/issues/41346)** — Externally-registered cron jobs auto-enable, inherit expensive model, no usage circuit breaker. P1, security/auth.
- **[#43374](https://github.com/openclaw/openclaw/issues/43374)** — All LLM API calls time out simultaneously under multi-agent load. P1, message-loss.

### Regressions to watch

- **[#11829](https://github.com/openclaw/openclaw/issues/11829)** — API keys leaking into prompts (security/bug).
- **[#37446](https://github.com/openclaw/openclaw/openclaw/issues/37446)** — Sub-agent timeout retry creates duplicate API posts (idempotency gap).
- **[#41201](https://github.com/openclaw/openclaw/issues/41201)** — Control UI avatar broken image.
- **[#38439](https://github.com/openclaw/openclaw/issues/38439)** — `/avatar/{agentId}` 404.
- **[#38721](https://github.com/openclaw/openclaw/issues/38721)** — Gateway shutdown timeout, dirty child handles.
- **[#99241](https://github.com/openclaw/openclaw/issues/99241)** — Tool output image-attach collapse.
- **[#39807](https://github.com/openclaw/openclaw/issues/39807)** — Billing 402 → infinite retry death spiral (no backoff) for inline-apiKey providers. P1, stale.

### Recently fixed (P1, merged/closed)

- **#101928** (compaction re-entrant lock), **#101715** (model switch error re-throw), **#101762** (handleRunFailure control-flow skip), **#101648** (related fix), **#101399** (env-var placeholder in token), **#101504** (decodeParams cause) — *closed without merge*, **#101940** (image compression), **#101976** (ACP UTF-16), **#100377** (heartbeat delivery target resolution latency).

**Severity assessment**: 12+ P1 issues are still open **without linked fix PRs**, which is the single biggest risk indicator today.

## 6. Feature Requests & Roadmap Signals

The most upvoted and discussed feature requests form a coherent **"OpenClaw as multi-agent platform"** direction:

| Feature | Issue | Likelihood of landing |
|---------|-------|----------------------|
| Opt-in private network access for `web_fetch` | [#39604](https://github.com/openclaw/openclaw/issues/39604) (11 👍) | **High** — narrowly scoped config flag, well-scoped PR likely already in flight. |
| `tools.web.fetch.allowPrivateNetwork` | (same as above) | High |
| Per-agent tool settings (e.g. `tools.web.search.apiKey`) | [#37584](https://github.com/openclaw/openclaw/issues/37584) | **Medium** — clearly requested for multi-tenant setups. |
| Sub-agent `announceTarget` routing | [#27445](https://github.com/openclaw/openclaw/issues/27445) (5 👍) | **Medium-High** — unlocks parent-side orchestration. |
| `write` tool append mode | [#40001](https://github.com/openclaw/openclaw/issues/40001) | **High** — isolated cron data-loss is unambiguous; small change. |
| Post-subagent completion hook | [#22358](https://github.com/openclaw/openclaw/issues/22358) | **Medium** — needs a hooks-API surface. |
| Telegram Business Bot support | [#20786](https://github.com/openclaw/openclaw/issues/20786) (6 👍) | Medium — Telegram update type plumbing. |
| Theme Customization System | [#28300](https://github.com/openclaw/openclaw/issues/28300) (5 👍) | Low-Medium — UI-only. |
| Self-hosted STT/TTS in webchat | [#45508](https://github.com/openclaw/openclaw/issues/45508) | Medium — needed for self-hosted voice. |
| Multi-gateway-token / per-user session isolation | [#43903](https://github.com/openclaw/openclaw/issues/43903) | Medium — auth surface expansion. |
| Custom `anthropic_beta` flags for Bedrock | [#39734](https://github.com/openclaw/openclaw/issues/39734) | **High** — small, well-defined provider config. |
| Backup CLI `.gitignore`-like exclude patterns | [#40786](https://github.com/openclaw/openclaw/issues/40786) | **High** — natural CLI extension. |
| Slack dynamic tool-progress status | [#33413](https://github.com/openclaw/openclaw/issues/33413) | Medium. |
| Image batching / media group buffering at gateway | [#39343](https://github.com/openclaw/openclaw/issues/39343) | Medium. |
| TUI `--deliver` default config | [#33102](https://github.com/openclaw/openclaw/issues/33102) | **High** — trivial config knob. |
| Sub-agent lifecycle observability + async supervision | [#38626](https://github.com/openclaw/openclaw/issues/38626) | Medium — pairs with #22358. |
| Per-agent isolated browser instances with proxies | [#37487](https://github.com/openclaw/openclaw/issues/37487) | Low — large refactor. |

**RFC-level directions**:
- **[#35203](https://github.com/openclaw/openclaw/issues/35203)** — Multi-agent collaboration (capability profiling + shared blackboard + layered memory + token-cost governance).
- **[#42026](https://github.com/openclaw/openclaw/issues/42026)** — Distributed Agent Runtime: split gateway into control plane + agent runtime.

These are the **two big architectural debates** that, if approved, will shape the next major version.

## 7. User Feedback Summary

**Recurring pain points** (extracted from comment-rich issues):

- **Multi-agent runs are unreliable in practice.** Users report concurrent `agents add` overwriting config, session-lock failures, detached children, and "all LLM calls timeout simultaneously" under 4-agent load ([#43367](https://github.com/openclaw/openclaw/issues/43367), [#43374](https://github.com/openclaw/openclaw/issues/43374)). This is the single largest source of dissatisfaction.
- **Secrets are leaking in too many places.** API keys in model catalogs, env vars not propagating to `exec`, hardcoded media-size limits blocking PDFs/PPTX, missing circuit breakers on 402 errors ([#11829](https://github.com/openclaw/openclaw/issues/11829), [#31583](https://github.com/openclaw/openclaw/issues/31583), [#40880](https://github.com/openclaw/openclaw/issues/40880), [#39807](https://github.com/openclaw/openclaw/issues/39807)). Users are asking for a coherent security model, not one-off patches.
- **Regressions are landing in stable releases.** Avatar 404, heartbeat prompt override, env-var inheritance, control UI broken image, sub-agent routes ([#38439](https://github.com/openclaw/openclaw/issues/38439), [#40255](https://github.com/openclaw/openclaw/issues/40255), [#41201](https://github.com/openclaw/openclaw/issues/41201), [#41165](https://github.com/openclaw/openclaw/issues/41165)) — the word "regression" appears in a high fraction of P1s today.
- **Channel integrations are uneven.** Feishu media loss, Telegram routing, Discord single-file, Matrix thinking-tag regex, MS Teams cache cap, LINE cache cap, iMessage/TUI cross-channel visibility — each platform has its own list of papercuts.
- **Observability gaps.** Sub-agent lifecycle, async supervision, OTel on one-shot runs, and the "I did not schedule a reminder" false positive (#52972) suggest users want more **deterministic visibility** into what the agent is actually doing.
- **Configuration is silently accepted.** [#39811](https://github.com/openclaw/openclaw/issues/39811) — model name validation is missing, leading to silent misconfiguration. Users want **fail-fast validation**.

**Tone**: constructive but frustrated. Long-standing "diamond lobster" issues with many comments and zero linked fix PRs suggest a **trust gap** between users and the maintainer triage pipeline.

## 8. Backlog Watch

The following **high-importance items have been open the longest with no fix PR linked** and are most in need of maintainer attention:

| Item | Age (months) | Why it matters |
|------|--------------|----------------|
| [#11829](https://github.com/openclaw/openclaw/issues/11829) — Security Roadmap for API Keys | ~5 | Highest-comment security issue; needs a concrete RFC + linked milestone. |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) — Signal daemon race | ~4.5 | Crash-loop on every config change; affects

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: Personal AI Assistant / Agent Open-Source Ecosystem — 2026-07-08

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is in a **late-stabilization, security-conscious phase**: roughly half of the surveyed projects are shipping or close to shipping, while the other half are grinding through security hardening, regression patches, and architectural refactors in the run-up to stable releases. Across the 13 projects surveyed, **3 shipped new releases today** (Hermes Agent v0.18.1, LobsterAI 2026.7.7, CoPaw v2.0.0-beta.3), 2 reported **zero activity** (NullClaw, Moltis, ZeptoClaw), and the rest accumulated 30+ merged PRs each without tagging a release. A defining signal is the **proliferation of unauthenticated-localhost vulnerabilities** — three coordinated disclosure events (NanoBot #4825–4827, LobsterAI #2286–2288, TinyClaw #286–294) and a fourth (OpenClaw #11829) long-standing — all point at the same missing architectural layer: an auth middleware on the control plane. "Multi-agent" has stopped being a marketing word and become a **lived reliability problem**, surfacing as session-lock failures, sub-agent routing bugs, and silent-fallback regressions in nearly every project that exposes the feature.

## 2. Activity Comparison

| Project | Releases (24h) | Open PRs | Open Issues | Severity Posture | Health Score (qualitative) |
|---|---|---|---|---|---|
| **OpenClaw** (reference) | 0 (142 merged, accumulating) | 358 | 197 (17 closed) | 12+ P1s without fix PRs | **B+** — high throughput, backlog-heavy |
| **NanoBot** | 0 (11 merged, 0.2.x patch imminent) | ~20 | ~12 | 3 critical WebUI security advisories open | **B−** — security-aware but unpatched |
| **Hermes Agent** | **1** (v0.18.1 / v2026.7.7, ~660 PRs rolled) | ~45 | ~10 | 1 P1 (gateway cron drain) with fix PR | **A−** — actively shipping |
| **PicoClaw** | 0 (auto-close-by-stale) | 3 | 7 | OAuth & rate-limit P1s, no fix PR | **C+** — stale-bot risk |
| **NanoClaw** | 0 (docs sweep + 4 bug fixes merged) | 14 | ~6 | 2 high-severity security PRs open | **B** — security-active, reviewer-bound |
| **NullClaw** | 0 | — | — | — | **N/A** (dormant) |
| **IronClaw** | 0 (7-PR Slack stack landed) | ~12 | 4 | Medium CI flake; no crash reports | **A−** — disciplined ship cadence |
| **LobsterAI** | **1** (2026.7.7) | 1 open | 3 new security advisories | 3 critical local-auth/security issues | **B** — shipping, security debt |
| **TinyClaw** | 0 (no PRs) | 0 | 9 security advisories (all open, 0 comments) | All-Critical, unaddressed | **D** — unremediated |
| **Moltis** | — | — | — | — | **N/A** (dormant) |
| **CoPaw** | **1** (v2.0.0-beta.3) | 23 | 12 | 3 high frontend/sandbox bugs unfixed | **B+** — late pre-release stabilization |
| **ZeptoClaw** | — | — | — | — | **N/A** (dormant) |
| **ZeroClaw** | 0 (v0.8.3 assembling) | 45 | 8 | 2 P1 bugs aging (#6699, #8642), fix PRs in flight | **B+** — security-aware, active |

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Volume leadership**: 697 updates / 142 merges in 24h is materially higher than any peer except Hermes Agent (whose 50 PRs are mostly in-flight, not landed). OpenClaw is the throughput benchmark of the ecosystem.
- **Architectural ambition**: the two RFC-level directions surfaced (multi-agent collaboration [RFC #35203] and Distributed Agent Runtime [RFC #42026]) are the most forward-looking proposals in the digest set; no peer publishes at this design altitude.
- **Community pull**: 20 comments on the secret-handling security roadmap (#11829), 17 on Signal daemon race (#22676) and 11–13 comment clusters on multi-agent orchestration (#43367, #22358, #27445) show a community actively voting with words — higher engagement than any peer except Hermes Agent's #34390.
- **Integration breadth**: Feishu / Matrix / Telegram / Discord / Slack / Teams / LINE / iMessage / Webchat — OpenClaw covers more channels than any peer with a documented file per integration.

**Technical approach differences**: OpenClaw's "multi-agent as first-class" posture contrasts with **IronClaw**'s Slack-first OAuth remodeling, **NanoClaw**'s SDK-coupled architecture (Claude-agent-sdk 0.3.197), **LobsterAI**'s Electron + Cowork subagent model, and **CoPaw**'s plugin-channel schema-driven extensibility. OpenClaw runs its own orchestration layer; several peers delegate orchestration to the LLM provider.

**Risks vs. peers:**
- **Unpatched P1 pile**: 12+ critical issues with zero fix PRs is the worst such ratio among the actively-shipping projects. Hermes Agent ships a P1-with-fix-PR the same day; PicoClaw has the same P1-without-PR pattern but lower volume.
- **Release cadence gap**: 142 merged PRs without a tag is a regression risk for users on `latest`. Hermes Agent, LobsterAI, and CoPaw all shipped today — OpenClaw did not.
- **Reviewer triage bottleneck**: high volume of `needs-maintainer-review` and `clawsweeper:no-new-fix-pr` tags on long-lived issues is the project's most-cited trust-gap signal in user feedback.

## 4. Shared Technical Focus Areas

| Requirement | Projects surfacing it | Specific need |
|---|---|---|
| **Authentication / authorization middleware on the localhost control plane** | NanoBot (#4825–4827), TinyClaw (all 9 advisories), LobsterAI (#2286), IronClaw (per-PR #60636 CSRF + hashed tokens), Hermes Agent (#34390 allow-list) | Token-binding, mTLS, or Unix-socket origin binding; currently absent in nearly every project |
| **Multi-agent session & sub-agent orchestration stability** | OpenClaw (#43367, #43374), LobsterAI (PR #2285 delegation), CoPaw (matrix streaming #5585), NanoClaw (sub-agent lifecycle) | Lock reentrancy, sub-agent routing, parent announce target, async-vs-sync delegation |
| **MCP / tool-server reconnect stability** | NanoBot (P1 PR cluster #4842, #4843, #4764), ZeroClaw (#8642 + Arc-share fix #8817), OpenClaw (related) | Stale stack cleanup, cancellation scope isolation, bounded memory growth |
| **Secret-handling / API-key isolation model** | OpenClaw (#11829, #31583), NanoClaw (#2800 path traversal + `--image-tag`), LobsterAI (#2287 NIM file exfil), TinyClaw (#289 file exfil), IronClaw (per-scope vs per-user secrets via Trace Commons #5280) | Layered trust boundary; `--dangerously-skip-permissions` flag proliferation |
| **Channel-integration fragility (per-platform correctness)** | OpenClaw (Feishu/Telegram/Discord/MS Teams/LINE/Matrix), NanoBot (WhatsApp/Slack/Telegram/QQ/Matrix), PicoClaw (Volcengine/Doubao/Codex/Antygravity), IronClaw (Slack pairing → OAuth remodel), LobsterAI (NIM outbound media) | Each platform has its own list of papercuts; caching, regex, media handling |
| **Provider-specific prompt/parser correctness** | OpenClaw (Gemini 3.1 Pro crashes #38327), PicoClaw (#3153 Doubao tool-call leak), ZeroClaw (#6699 MCP filter prefix-check), NanoClaw (#2965 SDK rate-limit event) | Integration tests don't cover edge cases; provider regex contracts drift |
| **Hot-reload / live config without daemon restart** | ZeroClaw (#8314 + PR #8816 observability reload), Hermes Agent (Codex OAuth refresh serialize #60639) | Log retention, auth tokens, model catalogs |
| **Sub-agent lifecycle observability / hooks** | OpenClaw (#22358 hook, #27445 announceTarget), LobsterAI (#2285 delegation), IronClaw (Trace Commons #5280), CoPaw (Plan mode sub-task audit #5759) | Post-completion callbacks, deterministic visibility |
| **Self-hosted / non-loopback deployment** | Hermes Agent (#34390 reverse-proxy + Tailscale), IronClaw (OAuth + hashed bearer tokens), ZeroClaw (OpenAI Bridge PR #8710) | `bind 0.0.0.0` vs `--allowed-hosts` trade-off under GHSA-style DNS-rebinding concerns |
| **Memory / persistence correctness** | Hermes Agent (#38647 cron memory-writes vanish), CoPaw (#5820 backend-aware embeddings, #5775 auto-memory), ZeroClaw (skill_manage bundles), OpenClaw (write tool append #40001) | silent write-drops; cross-profile scope confusion |
| **Docs drift under SDK velocity** | NanoClaw (5-PR sweep #2961–2965 for SDK 0.3.197), Hermes Agent (release-tag rollups) | In-repo docs lag code; trust tax on contributors |
| **Electron / desktop sandbox security** | LobsterAI (#2288 symlink disclosure), CoPaw (#5829 Windows AppContainer ACE pollution) | Localhost preview server + Electron GPU sandbox interaction |

## 5. Differentiation Analysis

| Project | Feature Focus | Target User | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Multi-agent platform; secret-handling RFC; channel breadth | Power users running 4+ concurrent agents; integration-heavy self-hosters | Custom orchestration layer; broad channel adapters; bootstrap files (`SOUL.md`/`AGENTS.md`) |
| **NanoBot** | WebUI as first-class surface; provider-hosted tools; camera/hardware | UX-sensitive end users; enterprise Linux shops | WebUI audit trail; Azure Responses native tools; openEuler/RHEL CA paths |
| **Hermes Agent** | Desktop + production deployment hardening | Tailscale/reverse-proxy self-hosters; multi-tenant operators | Dockview desktop shell; daemon-cron drain; OAuth serialized refresh; profile-scoped secrets |
| **PicoClaw** | Lightweight edge / appliance | NanoKVM / Docker / Debian 13 home users; mixed Chinese+international providers | Single-binary prebuilt; thin provider adapters |
| **NanoClaw** | SDK-coupled; skill-heavy; security-first PR cadence | Claude Agent SDK consumers; dockerized self-hosters | `claude-agent-sdk` 0.3.197 binding; container + `ncl` CLI; remote storage via rclone |
| **IronClaw** | Slack-first OAuth; Trace Commons observability | Multi-tenant operators; Slack-heavy teams | Slack bot channel as entrypoint; least-privilege per-tool scopes; per-user + per-scope credential scoping |
| **LobsterAI** | Desktop scheduled tasks; multi-provider (xAI/Grok) | Netease ecosystem users; Electron desktop clients | Cowork child sessions; scheduled-task UI card; multi-account email skill |
| **TinyClaw** | (currently adversary-disclosure mode) | — | Web-style control plane without auth; awaiting architectural remediations |
| **CoPaw** | Plugin channels; Tauri desktop; memory quality | Plugin authors; long-session coding users; Qwen ecosystem | Schema-driven plugin channels; ReMe Light embeddings; qwen3-rerank |
| **ZeroClaw** | Security hardening + OpenAI-compatible bridge | Self-hosters needing Home Assistant / OpenAI client interop; multi-agent operators | `tool_filter_groups` + per-runtime `prompt_injection_mode`; openai-bridge SSE endpoints |

**Key differentiators:**

- **Architectural style**: OpenClaw and ZeroClaw build their own orchestration; NanoClaw is the most SDK-locked (closest to single-vendor architecture); IronClaw is channel-centric; CoPaw is plugin-extension-centric; LobsterAI is desktop-centric; Hermes Agent is desktop-plus-deployment-centric.
- **Auth posture**: only Hermes Agent and IronClaw explicitly ship CSRF + hashed bearer tokens and (in IronClaw's case) per-user/per-scope credential scoping. OpenClaw has the security roadmap but no shipped middleware. TinyClaw, NanoBot, and LobsterAI have **disclosed** the absence — the architectural patch is yet to land.
- **Channel breadth**: OpenClaw > IronClaw > NanoBot > LobsterAI > NanoClaw > CoPaw > ZeroClaw > PicoClaw > TinyClaw. But "breadth without parity" is a recurring complaint: every additional channel is its own backlog of regressions.
- **Desktop / WebGUI investment**: LobsterAI (Electron + Cowork) > Hermes Agent (Dockview shell) > CoPaw (Tauri) > NanoBot (webui-first); the others run CLI/daemon first.

## 6. Community Momentum & Maturity

**Tier 1 — Actively shipping and iterating (top of the funnel):**
- **Hermes Agent** — 50 PRs/24h, ~660 PRs rolled in one release, multiple P1s fixed same-day. Healthy contributor ↔ maintainer loop.
- **IronClaw** — Coordinated 7-PR Slack stack landed in one day with breaking change deliberately isolated as final slice. Release-engineering discipline is the highest in the cohort.
- **CoPaw** — v2.0.0-beta.3 shipped; release-duty tracking, version bumps, plugin channels merging. Pre-release stabilization at high tempo.
- **ZeroClaw** — 50 PRs touched, security PR cluster ready to review, v0.8.3 assembling.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-08

## 1. Today's Overview

NanoBot shows **high-velocity maintenance activity** with 43 GitHub items touched in 24 hours (12 issues + 31 PRs). The project is in a security-and-stability hardening phase: three new WebUI security advisories from researcher YLChen-007 (#4825, #4826, #4827) were disclosed around the unauthenticated `/webui/bootstrap` endpoint, and multiple P1 bug fixes are in flight for MCP reconnect crashes, multimodal-content crashes, and shell zombie reaping. Eleven PRs were merged or closed (notably feature PRs for provider-hosted web search #3743, Feishu session divider #4763, and WeChat context_token refresh #3517), but no new release was cut today despite substantial accumulated changes — suggesting a 0.2.x patch release is imminent. Community engagement is moderate; most items carry 0 thumbs-up, but comment counts (3–6) on issues like #4013 and #4823 show real users reporting pain.

## 2. Releases

**No new releases** in the last 24 hours. Given the volume of merged security fixes, MCP stability patches, and channel bug fixes (WhatsApp groups #4834, Telegram HTML #4839, QQ backoff #4838), a **0.2.3 or 0.2.4 patch release** is likely imminent — users on 0.2.0–0.2.2 should monitor for the next tag.

## 3. Project Progress

**Merged/closed PRs (significant):**

- [#3743](https://github.com/HKUDS/nanobot/pull/3743) — **Provider-hosted web search** support added (Azure OpenAI Responses API native `web_search` tool). Closes [#3741](https://github.com/HKUDS/nanobot/issues/3741).
- [#4763](https://github.com/HKUDS/nanobot/pull/4763) — **Feishu session divider** (`/new` sent as `msg_type=system`), closes #4619.
- [#3517](https://github.com/HKUDS/nanobot/pull/3517) — **WeChat context_token refresh** via `getconfig` on missing/stale token (fixes silent message drops after cron or restart).
- [#3378](https://github.com/HKUDS/nanobot/pull/3378) — **Camera capture tool** (`camera_capture` via OpenCV, opt-in).
- [#4833](https://github.com/HKUDS/nanobot/pull/4833) — Initial "Gate sustained goals behind explicit runtime mode" attempt (closed; superseded by [#4844](https://github.com/HKUDS/nanobot/pull/4844), same author same day).

**Progress signals:** WebUI is being actively refactored (diff view #4828, automation source preservation #4822, landing-message binding #4836). The sustained-goals tool surface is being tightened behind runtime gating #4844, reducing always-on prompt bloat.

## 4. Community Hot Topics

| Rank | Item | Type | Comments | Why it matters |
|------|------|------|----------|----------------|
| 1 | [#4013](https://github.com/HKUDS/nanobot/issues/4013) | Closed bug | 6 | Long-running "stream stalled >90s" regression from 0.1.5post2 → 0.2.0 — high user frustration, marked closed today but no clear root-cause disclosure in summary |
| 2 | [#4823](https://github.com/HKUDS/nanobot/issues/4823) | Open bug | 3 | WhatsApp groups regression — **responses now leak into every group the number is in**, breaking group allowlist post 0.2.2 |
| 3 | [#4829](https://github.com/HKUDS/nanobot/issues/4829) | Open bug | 2 | Slack plugin completely broken out-of-the-box: missing `aiohttp` in `pyproject.toml` slack extras |
| 4 | [#4825](https://github.com/HKUDS/nanobot/issues/4825) | Security advisory | 0 (new) | `/webui/bootstrap` mints tokens to any local process — auth-bypass class |
| 5 | [#4826](https://github.com/HKUDS/nanobot/issues/4826) | Security advisory | 0 (new) | WebUI bearer tokens issued without prior auth |
| 6 | [#4827](https://github.com/HKUDS/nanobot/issues/4827) | Security advisory | 0 (new) | Same bootstrap token-leak class as #4825 |

**Underlying needs:** (a) Channel integrations (WhatsApp, Slack, Telegram, QQ, Matrix) are a major pain surface — users want stable, group-aware, group-isolated behavior. (b) The WebUI's localhost trust model is being formally audited and shows real auth-bypass flaws. (c) Power users want the goal/long-task primitive to be runtime-gated rather than always-on.

## 5. Bugs & Stability

**Severity-ranked bugs reported or updated today:**

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 P1 Security | [#4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827) | Open | **No fix PR yet** — maintainer attention urgent |
| 🔴 P1 Regression | [#4823](https://github.com/HKUDS/nanobot/issues/4823) WhatsApp group responses leak across groups | Open | [#4834](https://github.com/HKUDS/nanobot/pull/4834) in review |
| 🟠 P1 Crash | [#4800](https://github.com/HKUDS/nanobot/issues/4800) `.strip()` on list-form `msg.content` crashes on multimodal messages | Open | [#4837](https://github.com/HKUDS/nanobot/pull/4837) in review |
| 🟠 P1 Silent error | [#4805](https://github.com/HKUDS/nanobot/issues/4805) `suppress(Exception)` swallows tool validation errors | Open | [#4837](https://github.com/HKUDS/nanobot/pull/4837) in review |
| 🟠 P1 Crash | [#4841](https://github.com/HKUDS/nanobot/issues/4841) Matrix bot shows "Untrusted" with no cross-signing path | Open | No fix PR |
| 🟠 P1 Crash | [#4835](https://github.com/HKUDS/nanobot/issues/4835) WebUI first message races into wrong existing chat | Open | [#4836](https://github.com/HKUDS/nanobot/pull/4836) in review |
| 🟡 P1 Build | [#4829](https://github.com/HKUDS/nanobot/issues/4829) Slack plugin missing `aiohttp` dependency | Open | No fix PR |
| 🟢 Resolved | [#4013](https://github.com/HKUDS/nanobot/issues/4013) LLM stream stalled | Closed today | — |
| 🟢 Resolved | [#4611](https://github.com/HKUDS/nanobot/issues/4611) DNS rebinding TOCTOU (SSRF) | Closed today | — |

**MCP subsystem is the single biggest stability cluster today:** [#4842](https://github.com/HKUDS/nanobot/pull/4842) catches `CancelledError`, [#4843](https://github.com/HKUDS/nanobot/pull/4843) defers stale stack cleanup, [#4764](https://github.com/HKUDS/nanobot/pull/4764) isolates reconnect cancel scopes — three P1 PRs converging on the same reconnect crash.

## 6. Feature Requests & Roadmap Signals

- **Provider-hosted tool support** — [#3743](https://github.com/HKUDS/nanobot/pull/3743) (merged) opens the door for Azure OpenAI Responses tools; expect **Google/Gemini native tools** next.
- **Sustained-goal runtime gating** — [#4844](https://github.com/HKUDS/nanobot/pull/4844) signals the project is moving toward **explicit-runtime-mode semantics** for long-running agents (reducing prompt bloat and accidental invocations).
- **WebUI polish** — File-edit diff view [#4828](https://github.com/HKUDS/nanobot/pull/4828), automation-source badge replay [#4822](https://github.com/HKUDS/nanobot/pull/4822), and CSI-u Shift+Enter [#4832](https://github.com/HKUDS/nanobot/pull/4832) suggest the WebUI is becoming a first-class surface (not just an admin panel).
- **OS/distro compatibility** — [#4845](https://github.com/HKUDS/nanobot/pull/4845) (openEuler/RHEL CA bundle paths) hints that **enterprise Linux distros** are now a deployment target.
- **Camera / hardware tooling** — [#3378](https://github.com/HKUDS/nanobot/pull/3378) (closed today) signals a roadmap toward **physical-world sensors**; expect microphone, screen-capture, and sensor tools.
- **MCP idle-timeout watchdog** — [#4506](https://github.com/HKUDS/nanobot/pull/4506) (open, conflict) would auto-kill idle MCP servers — likely to land as configurable, not default.

## 7. User Feedback Summary

- **mxnbf (real user, multi-issue author)** — Strong attach in [#4013](https://github.com/HKUDS/nanobot/issues/4013) ("way to say ty" for 0.1.5post2) but now blocked on 0.2.0 stream stalls; reports a real-world upgrade pain in [#4823](https://github.com/HKUDS/nanobot/issues/4823) (WhatsApp group regression).
- **alekwo** — Filed [#4829](https://github.com/HKUDS/nanobot/issues/4829), showing the Slack integration is essentially non-functional for first-time builders; this is a **fresh-install blocker**, not an edge case.
- **YLChen-007 (security researcher)** — Three coordinated WebUI disclosures in one day suggests an **organized audit**, not drive-by reports; the project should expect a follow-up patch set.
- **sidkang** — [#4835](https://github.com/HKUDS/nanobot/issues/4835) + PR [#4836](https://github.com/HKUDS/nanobot/pull/4836) demonstrate a **healthy contributor pattern**: bug + fix in one cycle.
- **hamb1y** — Two P1 bug reports (#4800, #4805) with clear root-cause analysis show the project is attracting **competent Python contributors** who read the source.
- **orrinwitt** — [#4841](https://github.com/HKUDS/nanobot/issues/4841) (Matrix E2EE trust) is a **deep, expert-level issue** indicating E2EE-correctness matters to a real deployment.

**Overall sentiment:** Users are engaged and grateful but report a **regression-heavy recent release cycle** (0.2.0 → 0.2.2 introduced at least three meaningful regressions).

## 8. Backlog Watch

Items needing maintainer triage:

- 🔴 [#4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827) — **Security advisories with no PR** and 0 comments. Should be prioritized for a security release.
- 🔴 [#4829](https://github.com/HKUDS/nanobot/issues/4829) — Slack plugin is broken for new users; trivial one-line fix in `pyproject.toml`.
- 🟠 [#4841](https://github.com/HKUDS/nanobot/issues/4841) — Matrix E2EE cross-signing gap; no PR; affects any user deploying with `e2eeEnabled: true`.
- 🟡 [#4764](https://github.com/HKUDS/nanobot/pull/4764) (P1, conflict) and [#4506](https://github.com/HKUDS/nanobot/pull/4506) (P2, conflict) — Two MCP reconnect/idle PRs flagged as conflicting; maintainer needs to merge direction.
- 🟡 [#4845](https://github.com/HKUDS/nanobot/pull/4845) — openEuler/RHEL CA bundle; P1 priority from author; trivial one-line cert-path addition.
- 🟢 [#4832](https://github.com/HKUDS/nanobot/pull/4832) — Terminal regression (CSI-u Shift+Enter dumps raw escapes); P2 but degrades CLI UX on macOS Terminal/iTerm.

**Health verdict:** Project is **highly active and security-aware**, but the absence of a release despite ~11 merged/closed PRs and an active security disclosure cluster is a **release-cadence risk** — users on 0.2.x are running with publicly disclosed WebUI auth-bypass flaws.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-08

## 1. Today's Overview

Hermes Agent is showing exceptionally high development velocity on 2026-07-08, with 50 PRs and 10 issues updated in a single 24-hour window alongside a new patch release (v0.18.1 / v2026.7.7) rolling up ~660 PRs since July 1. Activity is dominated by **bug fixes across gateway/platform adapters** (WhatsApp, QQBot, WeChat, Email), **security hardening** (credential scoping, approval-cancel race, MCP URL redaction), and **CLI/TUI/Desktop integration cleanup**. No issues were closed in the last 24 hours, suggesting the maintainers are in active triage mode. Overall project health: **active and stabilizing** — heavy late-cycle polish typical of a pre-feature-freeze patch.

## 2. Releases

### v2026.7.7 — Hermes Agent v0.18.1 (2026-07-07)
- **Type:** Patch release (tagged for downstream consumers)
- **Scope:** Aggregates ~660 merged PRs since v0.18.0 (2026-07-01); bug fixes, hardening, and in-progress feature work
- **Breaking changes:** None indicated
- **Migration notes:** None indicated; consumers should pull Docker images / PyPI / hosted deployments against the new tag
- Link: not provided as URL, available in [NousResearch/hermes-agent releases](https://github.com/NousResearch/hermes-agent/releases)

## 3. Project Progress

**Merged/closed PRs (last 24h):** 3 of 50 — specific merged items were not surfaced in the top-20 list, but the volume suggests steady brownfield clean-up.

**Notable in-flight advances (open PRs):**
- **[#60643](https://github.com/NousResearch/hermes-agent/pull/60643)** WhatsApp Baileys unpinned → install time cut from ~3 min to ~3 sec
- **[#60644](https://github.com/NousResearch/hermes-agent/pull/60644)** `/compress` command wired into TUI gateway dispatch (Desktop fix)
- **[#60645](https://github.com/NousResearch/hermes-agent/pull/60645)** `max_tokens` now propagated to all LLM providers (not just Anthropic/NIM)
- **[#60646](https://github.com/NousResearch/hermes-agent/pull/60646)** MoA reference-model context trimmed to its own window instead of silent degradation
- **[#60647](https://github.com/NousResearch/hermes-agent/pull/60647)** Windows console flash fixed for WhatsApp bridge spawn
- **[#56886](https://github.com/NousResearch/hermes-agent/pull/56886)** Dashboard auth `NotImplementedError` on password-only providers
- **[#60324](https://github.com/NousResearch/hermes-agent/pull/60324)** Auto-refresh stale member cache for `@`-mentions
- **[#47303](https://github.com/NousResearch/hermes-agent/pull/47303)** Yuanbao middleware: bounded-concurrency media resolution
- **[#58460](https://github.com/NousResearch/hermes-agent/pull/58460)** Codex operations plugin & skill (larger feature carry-over)
- **[#60636](https://github.com/NousResearch/hermes-agent/pull/60636)** Production deployment hardening (Dockerfile, hashed bearer tokens, double-submit CSRF)
- **[#60639](https://github.com/NousResearch/hermes-agent/pull/60639)** Anthropic Claude Code OAuth refresh serialized under auth-store lock
- **[#60638](https://github.com/NousResearch/hermes-agent/pull/60638)** Desktop shell refactored to a Dockview-style layout tree (contribution-friendly)
- **[#60640](https://github.com/NousResearch/hermes-agent/pull/60640)** Italian (`it`) locale added to desktop
- **[#60642](https://github.com/NousResearch/hermes-agent/pull/60642)** Sequential auto-incrementing IDs for pending writes
- **[#60631](https://github.com/NousResearch/hermes-agent/pull/60631)** Gateway shutdown drain now visible to in-flight cron work (P1)
- **[#24302](https://github.com/NousResearch/hermes-agent/pull/24302)** MCP URL query values with key/token redacted in CLI listing
- **[#59674](https://github.com/NousResearch/hermes-agent/pull/59674)** `WEIXIN_TOKEN` switched to profile-scoped `get_secret()` (fixes cross-profile credential leak)
- **[#60527](https://github.com/NousResearch/hermes-agent/pull/60527)** `/approve` now fails closed against a racing `/stop` cancel

## 4. Community Hot Topics

Ranked by engagement (comments + reactions):

| # | Item | Comments | 👍 | Theme |
|---|---|---|---|---|
| 1 | [#34390](https://github.com/NousResearch/hermes-agent/issues/34390) `[Feature] dashboard: add --allowed-hosts flag` | 11 | 0 | Reverse-proxy / Tailscale deployment |
| 2 | [#38647](https://github.com/NousResearch/hermes-agent/issues/38647) `[Bug] cron agents silently lose memory write (skip_memory=True)` | 2 | **2** | Persistence + cron reliability |

**Underlying needs:**
- **#34390 (11 comments)** is the most-discussed thread today — users want Hermes Dashboard reachable through reverse proxies and Tailscale for self-hosted/team deployments, beyond the current `127.0.0.1`-only binding. The cited GHSA (`ppp5-vxwm-4cf7`, DNS rebinding) explains the current lockdown, so the resolution requires a configurable allow-list rather than loosening the default. This signals a clear demand for **multi-user/proxy-friendly deployment**.
- **#38647 (2 👍)** highlights that cron-triggered agents lose the ability to write to memory without any error feedback — a **silent correctness bug** that erodes trust in persisted preferences. The 👍 count indicates this resonates with users who rely on long-term memory.

## 5. Bugs & Stability

Ranked by severity (issues/PRs in last 24h):

| Severity | Item | Summary | Fix PR? |
|---|---|---|---|
| **P1** | [#60631 (PR)](https://github.com/NousResearch/hermes-agent/pull/60631) | `/update`, `/restart`, SIGUSR1 don't drain cron jobs — dirty shutdown mid-Cron | **Yes** (fix PR open) |
| **P2** | [#60635 (issue)](https://github.com/NousResearch/hermes-agent/issues/60635) | QQAdapter.connect() missing `is_reconnect`, crashes on reconnect | Yes — [#60641](https://github.com/NousResearch/hermes-agent/pull/60641) |
| **P2** | [#46944 (issue)](https://github.com/NousResearch/hermes-agent/issues/46944) | `delegate_task(background=true)` dropped by AIAgent dispatch helper | No PR linked yet |
| **P2** | [#46960 (issue)](https://github.com/NousResearch/hermes-agent/issues/46960) | Same `background=true` not reaching model — synchronous fallback | No PR linked yet |
| **P2** | [#60634 (issue)](https://github.com/NousResearch/hermes-agent/issues/60634) | Runs SSE exposes reasoning differently from session history | No PR linked yet |
| **P2** | [#60639 (PR)](https://github.com/NousResearch/hermes-agent/pull/60639) | Anthropic Claude Code OAuth silently falls back to other provider under concurrent load | **Yes** (fix PR open) |
| **P3** | [#60616 (issue)](https://github.com/NousResearch/hermes-agent/issues/60616) | `hermes -z` SIGABRT after response, only with `memory.provider=honcho` | No PR linked yet |
| **P3** | [#60637 (issue)](https://github.com/NousResearch/hermes-agent/issues/60637) | Email gateway replays old unread mail in large inboxes | No PR linked yet |
| **P3** | [#60633 (issue)](https://github.com/NousResearch/hermes-agent/issues/60633) | Desktop missing 👍/👎 reply reaction feedback | No PR linked yet |

**Pattern:** The cluster of `delegate_task(background=true)` issues (#46944, #46960) suggests a regression where async delegation silently degenerates into sync — high impact for users expecting non-blocking parallel tool calls. The QQ reconnect (with fix PR) is part of a larger pattern of platform-adapter signature drift following a framework update.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likely near-term inclusion? |
|---|---|---|
| `--allowed-hosts` flag for dashboard (Tailscale/reverse-proxy) | [#34390](https://github.com/NousResearch/hermes-agent/issues/34390) | **High** — well-discussed (11 comments), security-shaped solution (allowlist) aligns with maintainer posture |
| Sequential auto-increment IDs for pending skill/memory writes | [#60446](https://github.com/NousResearch/hermes-agent/issues/60446) | **High** — implementation PR [#60642](https://github.com/NousResearch/hermes-agent/pull/60642) already open |
| Desktop one-tap 👍/👎 reaction saved as preference | [#60633](https://github.com/NousResearch/hermes-agent/issues/60633) | **Medium** — fits ongoing "emoji reactions = feedback" thread (#27438, #3506, #18408, #34660) |
| Production deployment hardening (Dockerfile, CSRF, hashed tokens) | [#60636 (PR)](https://github.com/NousResearch/hermes-agent/pull/60636) | **High** — broad scope, matches release cadence |
| Desktop dockview-style layout-tree shell | [#60638 (PR)](https://github.com/NousResearch/hermes-agent/pull/60638) | Medium–High — collaboration/contribution pattern fits project's growth phase |

**Roadmap signal:** Focus on **secure multi-user deployment** (Dashboard allow-list, CSRF, profile-scoped secrets), **platform adapter parity**, and **desktop ergonomic refinements**. The Codex operations push ([#58460](https://github.com/NousResearch/hermes-agent/pull/58460)) suggests ambient coding-agent integration is becoming a product dimension.

## 7. User Feedback Summary

**Recurring pain points (from surfaced issues):**

- **Self-hosting beyond loopback is friction.** Users on Tailscale / nginx / Caddy cannot use the dashboard without exposing it broadly (ref: #34390, 11 comments).
- **Silent failures.** Cron memory writes vanish without errors (#38647), MoA reference calls degrade silently (#60646), `delegate_task(background=true)` falls back to synchronous (#46944, #46960). Users repeatedly express this as "the agent reported success but state is missing."
- **Windows UX roughness.** Console flash on every WhatsApp bridge spawn (#60647) is a small but visible quality bug for the Windows install base.
- **Cross-profile credential confusion.** `WEIXIN_TOKEN` was read via `os.getenv()` and leaked across profiles in multiplex mode (#59674) — a multi-tenant security smell.
- **Race conditions in approval flow.** A `/stop` cancel could be overridden by a racing `/approve` (#60527) — community-flagged as fail-closed material.

**Satisfaction cues:** The very high PR throughput (50 in 24h) and the fact that bug issues commonly arrive alongside an implementing PR the same day suggests an engaged maintainer team responsive to filed bug reports with matching patches (e.g., #60635 ↔ #60641, #60603 ↔ #60644, #60388 ↔ #60645). No issue in the last 24h shows any 👍 reactions of dissatisfaction.

## 8. Backlog Watch

Items flagged as needing maintainer attention — either old, unfixed, or merged-but-pending-followups:

- **[#46944](https://github.com/NousResearch/hermes-agent/issues/46944)** & **[#46960](https://github.com/NousResearch/hermes-agent/issues/46960)** — `delegate_task(background=true)` regressions, both still **OPEN with no linked PR** as of 2026-07-08 despite being filed 2026-06-16. Likely a single root cause in `AIAgent._dispatch_delegate_task()`; deserves a focused fix.
- **[#60616](https://github.com/NousResearch/hermes-agent/issues/60616)** — `hermes -z` SIGABRT (Honcho memory provider). New (2026-07-08), but a SIGABRT on a flagship `-z` path warrants a fast-track.
- **[#60634](https://github.com/NousResearch/hermes-agent/issues/60634)** — Runs SSE reasoning divergence; embedded-client-visible parity bug with no linked PR.
- **[#34390](https://github.com/NousResearch/hermes-agent/issues/34390)** — Highest-comment thread (11) and remains **OPEN** since 2026-05-29. This is the highest-impact unaddressed item; a maintainer comment or PR would de-friction the entire reverse-proxy deployment story.
- **[#38647](https://github.com/NousResearch/hermes-agent/issues/38647)** — Memory-write silent failure in cron path. The 👍 votes indicate real-world user impact; would benefit from a short design comment even before a fix lands.
- **[#24302](https://github.com/NousResearch/hermes-agent/pull/24302)** — MCP URL redaction PR open since 2026-05-12 (2 months) with no merges visible; cheap security win awaiting review.

---

*Digest compiled from GitHub data covering activity between 2026-07-07 and 2026-07-08. All links point to the canonical NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-08

## 1. Today's Overview
PicoClaw saw low-to-moderate activity in the last 24 hours with 7 issues and 4 PRs touched, but no new releases. The majority of closed items were auto-closed by a stale-bot, suggesting limited active maintainer triage rather than intentional resolution. The open workload skews toward integration bugs (model providers, OAuth, rate limiting) and refactoring work, indicating the project is in a stabilization phase rather than a feature-expansion sprint. Overall project health appears steady but reactive, with several long-pending issues showing little engagement.

## 2. Releases
No new releases in the last 24 hours. The most recent reported versions referenced in user reports are v0.2.8, v0.2.9, and v0.3.1.

## 3. Project Progress

**Closed (likely stale-bot):**
- [#3157](https://github.com/sipeed/picoclaw/pull/3157) — `feat: add Android ADB remote operations tool` (danmobot). Closed as stale despite offering fixed ADB primitives (tap, swipe, screenshot, key events). Maintainers should review whether this is genuinely abandoned or simply lacks recent activity.

**Open active PRs:**
- [#3222](https://github.com/sipeed/picoclaw/pull/3222) — `refactor(deltachat): cleanup implementation, documentation -320LOC` (trufae). Removes legacy code, references official relay list, drops password-based email config, renames `invite_link` → `join_invite_link`. Cleanup work that may require backward-compat handling (see #3233).
- [#3226](https://github.com/sipeed/picoclaw/pull/3226) — `fix(tools): stop write_file from coaching destructive overwrite (#3150)` (ACMYuechen). Addresses the way `write_file` framed overwrites and arguably nudged models toward clobbering `memory/MEMORY.md`. Fixes a memory-integrity bug.
- [#3233](https://github.com/sipeed/picoclaw/pull/3233) — `Fix pr 3222 backward compat` (yaotukeji). Directly tied to #3222, suggesting the deltachat rename may have broken consumers.

## 4. Community Hot Topics

| Item | Comments | 👍 | Topic |
|---|---|---|---|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) (CLOSED) | 5 | 1 | Request for SimpleX/Tox/Wire gateway |
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | 3 | 0 | Volcengine Doubao tool-call leakage |
| [#3195](https://github.com/sipeed/picoclaw/issues/3195) | 2 | 0 | OpenAI GPT broken on NanoKVM |
| [#3159](https://github.com/sipeed/picoclaw/issues/3159) (CLOSED) | 2 | 0 | Repeated task behavior with DeepSeek |

**Underlying need:** Users are clearly pushing PicoClaw across heterogeneous deployment surfaces — NanoKVM appliances, Docker containers, and various Chinese/international model providers (Volcengine, DeepSeek, OpenAI). The SimpleX/Tox gateway request signals demand for privacy-preserving transport beyond the default web UI channels currently shipped.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🟠 High | [#3232](https://github.com/sipeed/picoclaw/issues/3232) | Rate limiting completely disabled when no fallback models configured (v0.3.1, gpt-5.5) | None yet |
| 🟠 High | [#3197](https://github.com/sipeed/picoclaw/issues/3197) | Codex OAuth login broken (v0.2.9) | None yet |
| 🟠 High | [#3196](https://github.com/sipeed/picoclaw/issues/3196) | Antygravity OAuth login broken (v0.2.9) | None yet |
| 🟡 Medium | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Volcengine Doubao leaks `<seed:tool_call>` text instead of executing (v0.2.8) | None yet |
| 🟡 Medium | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | OpenAI GPT incompatible with default NanoKVM config | None yet |
| 🟡 Medium | [#3159](https://github.com/sipeed/picoclaw/issues/3159) (CLOSED-stale) | Repeated task execution in Web UI with deepseek-v4-flash-free | None yet |

No open bug has an associated fix PR. The combination of broken OAuth (Codex + Antygravity) and broken rate-limiting on a common config pattern suggests the v0.3.x line may have regressions worth a patch release.

## 6. Feature Requests & Roadmap Signals

- **[#3093](https://github.com/sipeed/picoclaw/issues/3093)** — Privacy-first messaging gateways (SimpleX, Wire, Tox). *Likelihood next version: Low.* Closed as stale; no maintainer engagement.
- **[#3157](https://github.com/sipeed/picoclaw/pull/3157)** — Android ADB remote operations tool. *Likelihood next version: Low–Medium.* Closed as stale but the contribution is well-scoped (no arbitrary shell exec).
- **[#3222](https://github.com/sipeed/picoclaw/pull/3222)** — DeltaChat channel cleanup (-320 LOC). Strong candidate for v0.3.2 or v0.4.0 since it ships documentation and a backward-compat PR is already in flight.

## 7. User Feedback Summary

**Pain points (real, reproducible):**
- **Provider integration fragility:** Three distinct providers (Volcengine Doubao, OpenAI on NanoKVM, DeepSeek) all exhibit correctness issues, suggesting integration tests may not cover prompt-parser edge cases or appliance-specific configurations.
- **OAuth regression:** Two separate OAuth providers (Codex, Antygravity) reported broken simultaneously by the same user, hinting at a shared auth-flow refactor that likely needs follow-up.
- **No-config-path failure:** Rate limiting silently disabling when fallback models aren't set is a usability defect — users get throttled unexpectedly rather than receiving a clear error.

**Use cases:**
- Home/edge appliance deployment (NanoKVM, Docker on Debian 13).
- Multi-model experimentation with mixed free/pro providers.
- Lightweight Web-UI agent interaction for news/research queries.

**Satisfaction signal:** Low. The closed-as-stale pattern on issues with multiple comments implies users are not getting timely responses, and no bug reports from today received maintainer acknowledgement.

## 8. Backlog Watch

Items needing maintainer attention:

1. **[#3232](https://github.com/sipeed/picoclaw/issues/3232)** — Fresh high-severity bug (created today). Rate-limiting logic for default-model-only configuration needs a fix and possibly a regression test.
2. **[#3196](https://github.com/sipeed/picoclaw/issues/3196) / [#3197](https://github.com/sipeed/picoclaw/issues/3197)** — OAuth breakage likely from a single root cause. Worth a triage comment confirming shared origin.
3. **[#3153](https://github.com/sipeed/picoclaw/issues/3153)** — Provider-specific parser bug with clear repro. Good candidate for a focused PR.
4. **[#3222](https://github.com/sipeed/picoclaw/pull/3222) + [#3233](https://github.com/sipeed/picoclaw/pull/3233)** — Review together; ensure backward-compat fix lands before or with the rename.
5. **[#3157](https://github.com/sipeed/picoclaw/pull/3157)** — Android ADB tool closed as stale despite valuable scope. Maintainer decision needed on whether to revive or formally decline.
6. **[#3093](https://github.com/sipeed/picoclaw/issues/3093)** — Five-comment feature request closed as stale without a maintainer statement. Either reopen with a roadmap note or convert to a discussion thread.

**Health flag:** The stale-bot is closing both issues and PRs without apparent maintainer review, which risks losing community contributions and frustrating users. Consider tightening stale-bot thresholds or adding a human-review step before closure.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-08

## 1. Today's Overview

NanoClaw had a high-activity 24-hour window driven almost entirely by pull-request churn (23 PRs updated) rather than community discussion. Of those, **9 PRs merged/closed and 14 remain open**, with a single new security advisory filed against an unauthenticated loopback webhook. The merged work is dominated by a coordinated **in-repo docs staleness sweep** by contributor *glifocat* (5 closed PRs bringing README, architecture, DB schema, and SDK deep-dive docs in line with `@anthropic-ai/claude-agent-sdk` 0.3.197 and migrations 010–018), alongside smaller CLI and adapter fixes. Open work skews toward **security hardening** (folder traversal, image-tag pinning, supply-chain gating, approval race conditions), **wizard/UX refinements**, and **new skills** (remote storage, `ncc` host-ops CLI, Teams credentials flow). No new release was tagged today despite the volume of merged material; the next tagged version is likely to bundle the security fixes first.

## 2. Releases

**No new releases in the last 24 hours.** The merged PRs since the last tag (referenced in PRs as `08a1ac9/v2.1.38`) suggest the next release will need to reconcile the SDK upgrade to 0.3.197, the docs sweep, and a cluster of security fixes (folder validation, image pinning, `minimumReleaseAge`, approval-claim race) — a likely `v2.1.39` or `v2.2.0` candidate.

## 3. Project Progress

Merged/closed PRs in the last 24 hours:

- **[#2961](https://github.com/nanocoai/nanoclaw/pull/2961)** — `docs: fix stale claims across README, CONTRIBUTING, CLAUDE.md and operational docs`. Mechanical doc-staleness cleanup (e.g., `/add-signal` and `/add-matrix` removed from solicited skills).
- **[#2962](https://github.com/nanocoai/nanoclaw/pull/2962)** — `docs: sync DB schema and entity docs with migrations 010-018`. Updates `messaging_group_agents` columns, including the migration-010 replacement of `trigger_rules`/related fields.
- **[#2963](https://github.com/nanocoai/nanoclaw/pull/2963)** — `docs: rewrite architecture.md and agent-runner-details.md to match current code`. Full rewrite of the most-drifted architecture sections.
- **[#2964](https://github.com/nanocoai/nanoclaw/pull/2964)** — `docs: update SDK deep-dive from 0.2.x to 0.3.197`. Re-verifies `docs/SDK_DEEP_DIVE.md` against the actual `sdk.d.ts` and `container/agent-runner/src/providers/claude.ts`.
- **[#2965](https://github.com/nanocoai/nanoclaw/pull/2965)** — `fix(agent-runner): match rate_limit_event as a top-level SDK message type`. Corrects `ClaudeProvider.translateEvents` for SDK 0.3.x where rate-limit events are top-level (`SDKRateLimitEvent`), not nested under `system`.
- **[#2804](https://github.com/nanocoai/nanoclaw/pull/2804)** — `fix(cli): ncl messaging-groups create always throws (NOT NULL instance)`. The CLI create path was completely broken because `genericCreate` omitted the `instance` column that migration 016 made `NOT NULL`. *(Note: this PR was opened 2026-06-17 and closed today — long tail for a critical CLI break.)*
- **[#2922](https://github.com/nanocoai/nanoclaw/pull/2922)** — `fix(discord): unwrap forwarded-message snapshots so agents see forwarded content`.
- **[#2919](https://github.com/nanocoai/nanoclaw/pull/2919)** — `PR-Test2-LargePRTest`. Looks like a test/seed PR; closed.
- **[#2969](https://github.com/nanocoai/nanoclaw/pull/2969)** — Listed in the open PRs section but appears to be a fix for `/add-rtk` mount on v2 (relative containerPath + PATH). *Verify status — appears closed based on context.*

Net effect: **provider translation correctness** (Claude rate-limit), **developer documentation accuracy**, **CLI reliability** (`messaging-groups create`), and **adapter correctness** (Discord forwards) all advanced today.

## 4. Community Hot Topics

Activity volume is dominated by the docs sweep (5 merged PRs, all by `glifocat`), but the most strategically important PRs by reviewer attention are:

- **[#1598](https://github.com/nanocoai/nanoclaw/pull/1598)** — `feat: add-remote-storage skill (WebDAV/S3 via rclone + systemd)` — *oldest open PR (opened 2026-04-02, ~3 months unmerged)*. High-impact: addresses durable state outside the container, a recurring pain point for self-hosters.
- **[#2873](https://github.com/nanocoai/nanoclaw/pull/2873)** — `fix(skills): split pre-flight from credentials so /update-skills can refresh code (#2868)`. Splits update-skills so users no longer have to re-enter creds to pull code updates.
- **[#2909](https://github.com/nanocoai/nanoclaw/pull/2909)** — `feat(setup): template setup flow in the wizard and first-agent stamping`. Part 2/2 of agent templates (loader in #2890); first-agent flow UX.
- **[#2972](https://github.com/nanocoai/nanoclaw/pull/2972)** — `Wizard UX + add-slack Socket Mode fixes`. Multi-commit UX polish (pairing card, either/or selects, async `hostExec` so spinners animate during skill steps).

**Underlying needs signal:** contributors are converging on three themes — (a) making the setup wizard less painful for first-run users, (b) keeping docs from drifting as fast as the SDK moves, and (c) treating security defects (folder traversal, supply-chain) as a steady stream, not a one-off.

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR? |
|---|---|---|---|
| 🔴 High — Security | **[#2970](https://github.com/nanocoai/nanoclaw/issues/2970)** — Local action forgery via unauthenticated forwarded-gateway loopback webhook | Open advisory | None yet |
| 🔴 High — Security | **[#2800](https://github.com/nanocoai/nanoclaw/pull/2800)** — `ncl groups create --folder ../../etc` escapes `GROUPS_DIR` (CWE-22) + unconstrained `--image-tag` | Open PR | ✅ (proposed fix) |
| 🔴 High — Security/Supply-chain | **[#2973](https://github.com/nanocoai/nanoclaw/pull/2973)** — `minimumReleaseAge: 4320` is nested under `pnpm:` and therefore not enforced | Open PR | ✅ (proposed fix) |
| 🟠 Med — Race | **[#2974](https://github.com/nanocoai/nanoclaw/pull/2974)** — Approvals can be double-handled; claim row before invoking handler | Open PR | ✅ (proposed fix) |
| 🟠 Med — Provider correctness | **[#2966](https://github.com/nanocoai/nanoclaw/pull/2966)** — Provider errors inside a consumed batch recorded as `completed`; failed acks not mirrored | Open (draft, semantics up for discussion) | ⏳ (draft) |
| 🟡 Med — CLI break | **[#2804](https://github.com/nanocoai/nanoclaw/pull/2804)** — `ncl messaging-groups create` always throws `NOT NULL constraint failed: messaging_groups.instance` | **Closed today (merged)** | ✅ |
| 🟡 Med — Adapter | **[#2922](https://github.com/nanocoai/nanoclaw/pull/2922)** — Discord forwards shown only as snapshots | **Closed today (merged)** | ✅ |
| 🟢 Low — SDK drift | **[#2965](https://github.com/nanocoai/nanoclaw/pull/2965)** — Rate-limit event no longer matched (0.3.x top-level type) | **Closed today (merged)** | ✅ |
| 🟢 Low — Skill | **[#2729](https://github.com/nanocoai/nanoclaw/pull/2729)** — `add-telegram` SKILL.md pairing block names mismatch | Open | ⏳ |

**Pattern:** security advisories and supply-chain issues are now appearing faster than they can be triaged — `#2970`, `#2800`, `#2973` are all open and unaddressed. The merged bug fixes today were the easier/older tail; the harder CVEs are still pending maintainer review.

## 6. Feature Requests & Roadmap Signals

- **Agent templates in setup wizard** — [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) completes the two-part feature (#2890 + #2909). High likelihood of landing in the next minor release as a flagship "first-run" improvement.
- **Remote storage mount skill (WebDAV/S3 via rclone + systemd)** — [#1598](https://github.com/nanocoai/nanoclaw/pull/1598). Aging but high-value for self-hosters; likely to ship once the wizard/UX items settle.
- **`ncc` host operational/health utility skill** — [#2971](https://github.com/nanocoai/nanoclaw/pull/2971). A new utility skill for host-side health inspection, suggesting a small trend toward *operational* (vs. integration) skills.
- **Teams CLI-first credentials flow (SSF grammar)** — [#2958](https://github.com/nanocoai/nanoclaw/pull/2958). Continues the pattern of replacing multi-step Azure-portal walkthroughs with single CLI invocations (`teams login` + `teams app create --json`).

**Predicted next-release candidate (likely `v2.1.39`):** SDK 0.3.197 alignment, the full docs sweep, `messaging-groups create` fix, Discord forward unwrap, security patches (`#2800`, `#2973`, ideally `#2970`).

## 7. User Feedback Summary

Pain points visible from PR/issue bodies (no public sentiment metrics in the data):

- **Self-host onboarding friction** — multiple PRs target the setup wizard (templates, async `hostExec` for spinner animation, either/or selects, pairing-card redesign in #2972). Clear signal that first-run UX is the dominant friction area.
- **Docs can't keep up with SDK velocity** — `glifocat`'s 5-PR sweep explicitly cites drift between docs and code (e.g., SDK 0.2.x → 0.3.197, migrations 010–018). Suggests users are losing trust in the in-repo docs.
- **CLI dead paths** — `#2804` shows `ncl messaging-groups create` was completely unusable since migration 016. Indicates insufficient CI coverage of CLI resource paths.
- **Security expectations** — the rapid filing of `#2970` (loopback webhook auth), `#2800` (path traversal), `#2973` (supply-chain gate misconfiguration) suggests a security-conscious contributor community actively probing for weaknesses.
- **Refresh-code-without-repasting-creds** — `#2873` directly addresses the user complaint pattern of having to re-enter credentials every code update.

## 8. Backlog Watch

Items needing maintainer attention:

- **[#2970](https://github.com/nanocoai/nanoclaw/issues/2970)** — *Brand-new* security advisory on unauthenticated loopback webhook. Zero comments, zero reactions. The most time-sensitive item in the backlog; an unauthenticated local action-forgery vector should not sit idle.
- **[#1598](https://github.com/nanocoai/nanoclaw/pull/1598)** — Open since **2026-04-02 (~3 months)**. Remote-storage skill is a high-value feature for self-hosters and has stalled; maintainer review is the only blocker.
- **[#2800](https://github.com/nanocoai/nanoclaw/pull/2800)** — CWE-22 path traversal + image-tag pinning, opened **2026-06-17 (~3 weeks)**. Security PRs aging without review is a risk.
- **[#2909](https://github.com/nanocoai/nanoclaw/pull/2909)** — Agent-template wizard flow, opened **2026-07-02**. Already the second half of a paired series; reviewer bandwidth may be the limiter.
- **[#2873](https://github.com/nanocoai/nanoclaw/pull/2873)** — Skill update ergonomics, opened **2026-06-27**. Relatively self-contained fix that has not received a review.

**Overall project health:** *Active and improving, but maintainer review capacity is the binding constraint.* The merged docs sweep materially raises trust in the project; the open security items materially threaten it. Prioritizing `#2970`, `#2800`, and `#2973` for next-cycle review would meaningfully de-risk the upcoming release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-08

## 1. Today's Overview

IronClaw shows sustained high-velocity development on 2026-07-08, with 50 PRs updated in the last 24 hours — an unusually active day dominated by the conclusion of a major multi-PR Slack integration remodel. The Slack OAuth / model-B project (stacks 2–7) closed en masse, including the breaking-change slice that rejects legacy `[slack]` config fields at startup. A second clear thematic cluster emerged around the "default-backed setter" refactor (stacked on PR #5791), with 8 small, low-risk PRs opened today by core contributor `ilblackdragon` to convert sparse resource fixtures across nearly every crate. No new releases shipped. Issue-side activity is lighter (4 open, 1 closed) and dominated by automated daily failure-taxonomy reports and one notable CI flakiness bug tied to the just-merged Slack pairing changes.

**Activity assessment:** High PR throughput, concentrated feature landing, light bug intake — overall healthy ship momentum.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

The following PRs were merged/closed today, representing significant Slack integration progress:

- **PR #5280** [CLOSED] — *Trace Commons: instance-wide enrollment, per-user profiles, and trace inspection* — Adds the IronClaw client side of instance-wide Trace Commons enrollment plus per-user contributor accounts/profiles, complementing (not replacing) the existing per-scope personal-invite flow. DB migration included. [→ Link](https://github.com/nearai/ironclaw/pull/5280)

- **PR #5644** [CLOSED] — *Slack personal OAuth foundations (stack 2/4)* — Additive, dormant OAuth primitive layer; both pairing and OAuth flows coexist post-merge. 77 files, no user-visible change yet. [→ Link](https://github.com/nearai/ironclaw/pull/5644)

- **PR #5645** [CLOSED] — *Swap Slack pairing codes for personal OAuth (stack 3/4)* — Retires relay pairing-codes; deletion-dominated 121-file change replacing the old pairing flow with the OAuth path. [→ Link](https://github.com/nearai/ironclaw/pull/5645)

- **PR #5646** [CLOSED] — *Reject legacy `[slack]` config fields at serve startup (stack 4/4)* — Operator-facing **breaking change**: `ironclaw-reborn serve` now rejects legacy `[slack]` fields (`installation_method`, `mode`, etc.). Revertable in isolation. [→ Link](https://github.com/nearai/ironclaw/pull/5646)

- **PR #5668** [CLOSED] — *Slack model-B remodel — bot channel + installable tools extension (stack 5/7)* — Reshapes the Slack integration so the bot channel is the entrypoint and user-token tools become an installable extension, replacing the hidden "companion" mechanism. [→ Link](https://github.com/nearai/ironclaw/pull/5668)

- **PR #5670** [CLOSED] — *Least-privilege per-capability Slack scopes (stack 6/7)* — Splits Slack tool capabilities into per-tool scopes so read-only tools no longer advertise `chat:write`. [→ Link](https://github.com/nearai/ironclaw/pull/5670)

- **PR #5693** [CLOSED] — *Durable Slack conversation binding (stack 7/7)* — Final slice addressing the two durability deferrals called out in the design doc. [→ Link](https://github.com/nearai/ironclaw/pull/5693)

- **PR #5773** [CLOSED] — *Fix Slack OAuth live canary setup* — Stops the Reborn WebUI v2 live-QA harness from writing the now-rejected legacy `[slack]` fields; bootstraps Slack bot install via the WebUI Slack setup API after serve starts; requires Slack config post-`serve` start. [→ Link](https://github.com/nearai/ironclaw/pull/5773)

Net effect: the full Slack remodel (pairing → OAuth, bot-channel-as-entrypoint, least-privilege scopes, durable bindings) is now landed as a coordinated stack, with the breaking config change merged last to minimize blast radius.

## 4. Community Hot Topics

By comment/update activity, the hottest items today are:

1. **[PR #5280](https://github.com/nearai/ironclaw/pull/5280)** — Trace Commons instance-wide enrollment (XL, DB migration). The largest open contribution surfaced today; signals serious investment in multi-tenant / multi-user contributor workflows. Underlying need: enabling shared observability across instances without losing per-scope isolation.
2. **[PR #5643](https://github.com/nearai/ironclaw/pull/5643)** — *Run all webui_v2 JS tests in CI (Slack OAuth stack 1/4)*. The remaining open slice of the Slack stack; CI coverage gap that's the precondition for safely merging the OAuth swap (#5645). Need: catch webui JS regressions before they reach users.
3. **[Issue #5788](https://github.com/nearai/ironclaw/issues/5788)** — *Daily ironclaw failure taxonomy — 2026-07-08* + **[Issue #5767](https://github.com/nearai/ironclaw/issues/5767)** — *2026-07-07 edition*. Recurring automated post of PinchBench results. Underlying need: surface benchmark regressions the same day so regressions don't accumulate silently.
4. **[PR #5645](https://github.com/nearai/ironclaw/pull/5645)** — The accepted Slack pairing → OAuth swap; 121 files of deletions. Likely the most-discussed PR of the day given its scope and breaking potential.
5. **[Issue #5787](https://github.com/nearai/ironclaw/issues/5787)** — Slack pairing flaky-test thread (see §5).

The "default setters" PR wave (#5798–#5809) is low-comment but unusually numerous; it's a coordinated refactor effort rather than a single hot topic.

## 5. Bugs & Stability

| # | Severity | Title | Fix PR? |
|---|---|---|---|
| [#5787](https://github.com/nearai/ironclaw/issues/5787) | **Medium** | `slack_pairing_redeem_rejects_expired_code` flaky in "Reborn integration coverage (3)" bucket 3 — expired pairing code accepted due to a paused-tokio-clock vs chrono wall-clock TTL race in `tests/integration/slack_pairing_redeem.rs:215`. | No dedicated fix PR visible in today's data; may be moot once the pairing flow is fully retired by #5645. |

Other stability signals:
- The **[Daily failure taxonomy 2026-07-08](https://github.com/nearai/ironclaw/issues/5788)** report flags 3 non-pass PinchBench tasks reproducing the prior day's failure pattern — i.e., a known, persistent benchmark regression on `gws_*` PinchBench integration tasks rather than new regressions. Worth tracking but not a today-introduced bug.
- No crash or data-loss reports in today's issue set.

## 6. Feature Requests & Roadmap Signals

- **OpenRouter upstream-provider transparency ([Issue #5786](https://github.com/nearai/ironclaw/issues/5786))** — When IronClaw routes through OpenRouter, the `provider` field (e.g., `Fireworks`, `Parasail`, `GMICloud`, `SiliconFlow`) and `gen-…` id are dropped. Request: expose them on `ToolCompletionResponse` so callers can attribute cost/latency/behavior to the actual upstream. **Likelihood for next release: High** — this is a small, additive observability improvement with a clear API surface and no breaking implications.
- **Trace Commons multi-tenant enrollment ([PR #5280](https://github.com/nearai/ironclaw/pull/5280))** — Now closed/merged, so per-user contributor accounts and submitted-trace inspection are effectively on the next-release roadmap.
- **Default-backed builder pattern across crates** — The 8 concurrent "default setters" PRs (#5798–#5809) stacked on #5791 indicate an in-progress ergonomic API refresh; once #5791 lands, expect the dependent stacks to follow in rapid succession.

## 7. User Feedback Summary

Direct user pain points from today's intake are limited but specific:

- **Observability gap with OpenRouter** ([#5786](https://github.com/nearai/ironclaw/issues/5786)) — Operators running on `openai_compatible` backends can't see *which* upstream OpenRouter picked, making cost/perf attribution effectively impossible. This is a recurring complaint class for OpenAI-compatible gateways.
- **CI flakiness on Slack pairing** ([#5787](https://github.com/nearai/ironclaw/issues/5787)) — Test reliability complaint; the underlying flow is now being retired, which will both resolve the symptom and remove a configuration users had to reason about.
- **PinchBench regression continuity** ([#5788](https://github.com/nearai/ironclaw/issues/5788), [#5767](https://github.com/nearai/ironclaw/issues/5767)) — Repeated 3-non-pass result on `pinchbench` suggests a stable regression, not noise; users of the IronClaw benchmark numbers will see flat or worsening numbers until root-caused.

Satisfaction signal: shipping the full Slack OAuth stack in a single coordinated day, with the breaking change deliberately isolated as the last revertable slice, is a positive indicator of disciplined release engineering.

## 8. Backlog Watch

- **[PR #5643](https://github.com/nearai/ironclaw/pull/5643)** — *Run all webui_v2 JS tests in CI (Slack OAuth stack 1/4)* is still **OPEN** despite the rest of the Slack stack (#5644–#5693) being closed today. This is the only remaining open slice of the Slack remodel and is now blocking CI coverage parity for the just-shipped OAuth surface. **Needs maintainer attention to land before the next release.**
- **[PR #5280](https://github.com/nearai/ironclaw/pull/5280)** — Trace Commons closed today but is XL with a DB migration; the corresponding server-side `trace-commons-server` PR is referenced but not in this dataset, so end-to-end validation status is unclear.
- **[Issue #5787](https://github.com/nearai/ironclaw/issues/5787)** — Flaky pairing test has 0 comments/👍 and was filed the same day the pairing flow is being retired. Worth closing with a note ("moot post-#5645") rather than letting it age.
- **PinchBench `gws_*` non-pass streak** — Two consecutive daily taxonomy issues (#5767, #5788) document the same 3-task failure pattern with no fix PR attached. Quietly accumulating; deserves explicit triage.

---

*Generated from GitHub data for nearai/ironclaw covering activity in the 24h ending 2026-07-08.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-08

## 1. Today's Overview

LobsterAI had a high-throughput day driven primarily by housekeeping activity: **15 of 16 updated PRs were closed**, and **5 of 9 updated issues were closed as stale** (all dating back to 2026-04-03). The project also shipped release **2026.7.7**, featuring a redesigned scheduled-task list and xAI (Grok) OAuth login. Critically, **three new security advisories were opened today** (#2286, #2287, #2288) targeting the local token proxy, NIM outbound media flow, and HTML preview server — these represent the most urgent items requiring maintainer attention. Overall, the project is in an active shipping cadence with a healthy sign-off pipeline, but the security disclosures warrant immediate triage.

---

## 2. Releases

### 🚀 2026.7.7 — Released 2026-07-07
- **Scheduled Task UI redesign**: list card with status chip, toggle, search bar, and optimistic UI feedback (renderer). ([#2273](https://github.com/netease-youdao/LobsterAI/pull/2273))
- **xAI (Grok) provider**: new OAuth login support added to the providers module.
- No breaking changes noted; standard scheduled upgrade path.
- This release covers the 2026.7.6 backlog already merged into `main` ([#2291](https://github.com/netease-youdao/LobsterAI/pull/2291)).

---

## 3. Project Progress

### Merged / Closed PRs (15 total)

**New work landed today (2026-07-07):**
- [PR #2285](https://github.com/netease-youdao/LobsterAI/pull/2285) — **Delegated subagent collaboration**: agents can now delegate to other enabled agents via an explicit allowlist; delegated runs materialize as Cowork child sessions for continued conversation.
- [PR #2292](https://github.com/netease-youdao/LobsterAI/pull/2292) — **Cowork steer routing stabilized**: Codex-style queued steer follow-ups, replaces temp new-chat sessions with real started session, scopes streaming state to the active session.
- [PR #2290](https://github.com/netease-youdao/LobsterAI/pull/2290) — **Scheduled task notification**: notify target is now user-selectable.
- [PR #2289](https://github.com/netease-youdao/LobsterAI/pull/2289) — **Cowork compaction**: reuses recoverable retry wait path so stalled auto-compaction retry maintenance no longer leaks.

**Recently merged (pre-existing, closed today):**
- [PR #2275](https://github.com/netease-youdao/LobsterAI/pull/2275) — **Multi-account email skill** for the built-in `imap-smtp-email` skill; settings UI for enable/disable, default account, provider presets, connectivity testing.
- [PR #2245](https://github.com/netease-youdao/LobsterAI/pull/2245) — **Analytics edge cases fixed** (skills, IM settings, sidebar toggles, custom model edits, data restore, scheduled-task weekday cron parsing).
- [PR #2268](https://github.com/netease-youdao/LobsterAI/pull/2268) — **Cowork add menu width** restored after goal helper removal.

**Stale PRs closed today** (from 2026-04-03, indicating rotation/cleanup):
- [PR #1407](https://github.com/netease-youdao/LobsterAI/pull/1407) — OpenClaw token proxy body-size limit (10MB cap).
- [PR #1408](https://github.com/netease-youdao/LobsterAI/pull/1408) — MCP Bridge Server `handleRequest` Promise handling.
- [PR #1410](https://github.com/netease-youdao/LobsterAI/pull/1410) — SqliteStore `set()` debounce batching (perf).
- [PR #1415](https://github.com/netease-youdao/LobsterAI/pull/1415) — SQLite migration completion flag moved inside transaction commit path.
- [PR #1419](https://github.com/netease-youdao/LobsterAI/pull/1419) — NIM `V2NIMTeamType` enum mapping correction.
- [PR #1420](https://github.com/netease-youdao/LobsterAI/pull/1420) — `CronJobService.pollOnce` reentry concurrency + stopPolling ghost events.
- [PR #1421](https://github.com/netease-youdao/LobsterAI/pull/1421) — `buildUserMemoriesXml()` 5-second-window caching.

**Open PR (1):**
- [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — **Dependabot**: bump `electron` group from 40.2.1 → 43.0.0 (still open after 3 months — see Backlog Watch).

---

## 4. Community Hot Topics

Activity today skews toward maintainer-driven closure rather than community discussion; engagement is uniformly low (👍 0 across all listed items, 1–2 comments each).

| Item | Type | Comments | Link |
|------|------|----------|------|
| Issue #2293 | Multi-agent USER.md sync bug | 1 | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) |
| Issue #1409 | Scheduled task no history | 2 | [#1409](https://github.com/netease-youdao/LobsterAI/issues/1409) |
| Issue #1411 | Time filter unresponsive | 2 | [#1411](https://github.com/netease-youdao/LobsterAI/issues/1411) |
| Issue #1413 | Skills picker UI overflow | 2 | [#1413](https://github.com/netease-youdao/LobsterAI/issues/1413) |
| Issue #1414 | Total sessions = 0 | 2 | [#1414](https://github.com/netease-youdao/LobsterAI/issues/1414) |
| Issue #1416 | EN locale layout breakage | 2 | [#1416](https://github.com/netease-youdao/LobsterAI/issues/1416) |

**Underlying need**: Users care most about (a) **profile/overview page correctness** (4 of 5 closed issues all live on `#/profile`), and (b) **per-agent context isolation** (#2293). The repeated-profile issues signal the overview page is a high-traffic but under-tested surface.

---

## 5. Bugs & Stability

### 🔴 High Severity — Security (NEW today)
- **[Issue #2288](https://github.com/netease-youdao/LobsterAI/issues/2288)** — Localhost HTML preview server follows in-root symlinks → arbitrary local file disclosure.
- **[Issue #2287](https://github.com/netease-youdao/LobsterAI/issues/2287)** — NIM outbound media flow lets assistant-generated absolute paths exfiltrate host-local files through the user-approved remote action.
- **[Issue #2286](https://github.com/netease-youdao/LobsterAI/issues/2286)** — Unauthenticated local token proxy allows any local process to replay the victim's `lobsterai-server` API credentials.

> ⚠️ No fix PRs yet for any of the three security issues. All three share an attacker model of "any local process" and abuse local-only listeners/paths. These should be prioritized for the next point release.

### 🟡 Medium — Data / State Correctness (closed as stale)
- **[Issue #1409](https://github.com/netease-youdao/LobsterAI/issues/1409)** — Scheduled task fired across midnight but no history record generated.
- **[Issue #1414](https://github.com/netease-youdao/LobsterAI/issues/1414)** — "Total sessions" stuck at 0 while other counters are non-zero.

### 🟢 Low — UI / Layout (closed as stale)
- **[Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411)** — Profile page time-range filter clicks have no effect.
- **[Issue #1413](https://github.com/netease-youdao/LobsterAI/issues/1413)** — Skills selector overflows when many skills added.
- **[Issue #1416](https://github.com/netease-youdao/LobsterAI/issues/1416)** — EN-locale text/number overlap on the profile page "Current Plan" card.

### 🆕 Newly Reported
- **[Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)** — Editing USER.md or "About you" on one agent propagates to all other agents — likely a state-sharing bug between agents. No fix yet.

---

## 6. Feature Requests & Roadmap Signals

- **Per-agent isolation** (issue #2293) — Users want each agent to maintain its own USER.md / "About you" context. Expected fix in 2026.7.8 patch release.
- **Scheduled task notification targeting** ([#2290](https://github.com/netease-youdao/LobsterAI/pull/2290)) — Already shipped, addresses implicit demand from #1409-era issues.
- **xAI / Grok OAuth** ([#2273 changelog](https://github.com/netease-youdao/LobsterAI/pull/2273)) — Signals continued multi-provider expansion; Anthropic/Google parity likely next.
- **Subagent delegation** ([#2285](https://github.com/netease-youdao/LobsterAI/pull/2285)) — Substantive architectural addition; expect Cowork multi-agent orchestration to deepen in 2026.8.x.
- **Skills picker UX** (issue #1413) — The closed-stale issue is likely to resurface as users accumulate skills; re-opens are probable.

---

## 7. User Feedback Summary

- **Pain points cluster on the profile/overview page** (`#/profile`): broken time filter, zero-session counter, English-locale layout breakage, "Current Plan" overlap. Users who reach this page find multiple regressions simultaneously.
- **Multi-agent workflow users** (#2293) report being unable to specialize agents — currently a blocking issue for power users who built differentiated agent setups.
- **Satisfaction signals** (indirect): rapid iteration on Cowork UX (compaction retries, steer routing, add-menu width) and the scheduled-task UI overhaul suggest maintainers are responsive to UX issues.
- **Dissatisfaction signals**: six long-stale (3-month) issues closed without resolution comments, which may frustrate users reporting real bugs.

---

## 8. Backlog Watch

| Item | Age | Why it matters | Link |
|------|-----|----------------|------|
| PR #1277 (Electron 40→43 bump) | ~3 months | Major framework upgrade pending; security/correctness implications for the desktop shell. | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) |
| Issues #2286, #2287, #2288 | <1 day | **Critical security triad**: local token proxy, NIM file exfiltration, symlink-traversal disclosure. No PRs drafted yet — needs immediate maintainer triage. | [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) · [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) · [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) |
| Issue #2293 (USER.md cross-agent sync) | <1 day | Functional regression for multi-agent users; likely quick fix. | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) |

**Recommendation**: Triage the three security advisories before the next 2026.7.8 release; assign a single owner for the Electron major bump PR #1277, which has now been open across multiple release cycles.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-07-08

## 1. Today's Overview

The project experienced a **major coordinated security disclosure event** within the last 24 hours. A single researcher (`YLChen-007`) filed **9 security advisories** simultaneously (issues #286–#294), all dated 2026-07-07, none of which have any comments, reactions, or triage responses yet. Activity is exclusively inbound issue creation — **zero pull requests** were opened, merged, or closed, and **no new releases** were published. The consistent theme across every advisory is the absence of authentication and authorization on TinyAGI's localhost-oriented control plane, which constitutes a critical systemic gap. No remediation code has landed yet, and the project should be considered in a **vulnerable, unaddressed state** until at least one advisory is triaged.

## 2. Releases

No releases in the observed window. Section omitted per spec.

## 3. Project Progress

**No code-level progress in the last 24h.**
- Merged PRs: 0
- Closed PRs: 0
- Opened PRs: 0

No features were advanced and no fixes were merged. The only measurable movement is the **influx of security bug reports**, which is itself the most significant signal of the day but represents incoming work rather than completed progress.

## 4. Community Hot Topics

All 9 active items are security advisories authored by the same reporter. None has yet accumulated comments or reactions (all at 0/0), but by volume and severity they dominate the conversation:

| Rank | Issue | Title (short) | Link |
|------|-------|---------------|------|
| 1 | #294 | Unauthenticated control-plane routes — system prompt overwrite + daemon restart | [#294](https://github.com/TinyAGI/tinyagi/issues/294) |
| 2 | #293 | Agent ID path traversal escapes workspace root | [#293](https://github.com/TinyAGI/tinyagi/issues/293) |
| 3 | #292 | Unauthenticated admin API — persistent settings/prompt modification | [#292](https://github.com/TinyAGI/tinyagi/issues/292) |
| 4 | #291 | Anthropic adapter disables Claude `--dangerously-skip-permissions` for unauthenticated requests | [#291](https://github.com/TinyAGI/tinyagi/issues/291) |
| 5 | #290 | Terminal escape injection via `POST /api/message` — operator log spoofing | [#290](https://github.com/TinyAGI/tinyagi/issues/290) |
| 6 | #289 | Unauthenticated file exfiltration via outbound channel attachments | [#289](https://github.com/TinyAGI/tinyagi/issues/289) |
| 7 | #288 | Unauthenticated control plane leaks SSE events and allows settings modification | [#288](https://github.com/TinyAGI/tinyagi/issues/288) |
| 8 | #287 | Pairing-management API allows arbitrary approval of pending senders | [#287](https://github.com/TinyAGI/tinyagi/issues/287) |
| 9 | #286 | Master advisory: persistent settings mutation + agent prompt overwrite + SSE access | [#286](https://github.com/TinyAGI/tinyagi/issues/286) |

**Underlying need:** A coherent authentication/authorization layer for the control plane (API auth, session tokens, or at minimum origin-binding to a Unix socket / localhost-with-CSUID), combined with input validation on agent IDs, paths, and log-rendered content. Issues #286 and #292 explicitly function as umbrella reports covering overlap with several others, suggesting the maintainers may be able to fix many reports with a single architectural change (introduce an auth middleware on the HTTP control plane).

## 5. Bugs & Stability

All 9 new issues are **security vulnerabilities**, not stability bugs in the traditional sense. They are nevertheless bugs in the strictest definition. Severity-ranked:

### Critical
- **#291** — `claude` CLI launched unconditionally with `--dangerously-skip-permissions` for any caller of `POST /api/message`. Any network-reachable caller (if bound beyond loopback, or via SSRF/CSUID pivot) gains unguarded tool execution.
- **#294** — Unauthenticated control-plane routes permit system prompt overwrite and daemon restart, enabling persistent compromise.
- **#293** — Agent ID `..` traverses out of the configured workspace root, undermining filesystem sandboxing.
- **#289** — Attacker-supplied paths in `files[]` are persisted and sent to outbound channels, enabling arbitrary local file exfiltration.

### High
- **#286** — Unauthenticated mutation of persistent settings, agent prompts, plus SSE event stream exposure (effectively a master report).
- **#292** — Same family as #286 with emphasis on the administrative surface.
- **#288** — SSE event stream leakage without auth; same-host observers can monitor all activity.
- **#287** — Pairing codes can be retrieved and approved by anyone on the API.

### Medium
- **#290** — Terminal escape sequences in logged attacker-controlled message content allow log spoofing (lower impact, but enables social engineering of operators reviewing logs).

**Fix PRs:** None exist for any of the above. Maintainers have not yet acknowledged the advisories.

## 6. Feature Requests & Roadmap Signals

The advisories, framed as bugs, simultaneously encode strong **implicit feature requests** for an upcoming release:

1. **Authentication & authorization layer** for the HTTP/SSE control plane (token-based, mTLS, or Unix-socket binding) — *highest confidence roadmap item*; nearly every issue is resolved by this.
2. **Path canonicalization & sandbox enforcement** on agent IDs and `files[]` attachments — required by #293 and #289.
3. **Conditional/restricted launch flags** for the Anthropic adapter — stop unconditionally passing `--dangerously-skip-permissions` (#291).
4. **Log-rendering hardening** — strip ANSI/control sequences from user-supplied content before logging (#290).
5. **Operator approval flow with explicit allow-list** for pairing (#287).

Given the absence of any open PRs and no commits in the window, **none of these can be confirmed as in-flight**. However, the umbrella nature of #286/#292 strongly suggests a single auth-middleware PR could close the bulk of the report set. Expectation: if a release lands, it will likely be a security patch version (e.g., a `0.x.y` bump) focused on these items.

## 7. User Feedback Summary

**No organic end-user feedback was recorded in this window.** All 9 items originate from a single security researcher, not from general users running TinyClaw. The lack of comments, reactions, or duplicate user reports suggests:
- The wider community has not yet triaged, validated, or contested the findings.
- Maintainers have not yet engaged.
- No satisfaction/dissatisfaction signal is available from typical users; the only "voice" present is adversarial research disclosure.

If these advisories are accurate and unaddressed, latent user dissatisfaction is virtually certain once disclosure becomes public (current zero-comment state may indicate the issues are not yet publicly indexed or broadcast).

## 8. Backlog Watch

Every item in today's window qualifies as a **fresh, unanswered, high-priority backlog entry** requiring immediate maintainer attention:

- [#286](https://github.com/TinyAGI/tinyagi/issues/286), [#287](https://github.com/TinyAGI/tinyagi/issues/287), [#288](https://github.com/TinyAGI/tinyagi/issues/288), [#289](https://github.com/TinyAGI/tinyagi/issues/289), [#290](https://github.com/TinyAGI/tinyagi/issues/290), [#291](https://github.com/TinyAGI/tinyagi/issues/291), [#292](https://github.com/TinyAGI/tinyagi/issues/292), [#293](https://github.com/TinyAGI/tinyagi/issues/293), [#294](https://github.com/TinyAGI/tinyagi/issues/294) — **all 0 comments, all open, all unacknowledged**.

**Priority for maintainers:**
1. Triage #286/#292 first as umbrella reports and publish an acknowledgement.
2. Add `security` and `high-priority` labels; consider a private security advisory (GHSA) if coordinated disclosure is in progress.
3. Cut a patch release with the auth middleware as the headline change.
4. Issue a CVE request via GitHub Security Advisories for the most severe items (#291, #294, #293, #289).

**Health indicator:** Until at least one of these is acknowledged, the project should be flagged as **in a critical, unremediated security posture**. Velocity on these issues is the single most important leading indicator for the next digest.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-08

> **Note on naming:** The repository is referenced under both `agentscope-ai/CoPaw` and `agentscope-ai/QwenPaw` in the source data. All issue/PR links below resolve to the `QwenPaw` repo, which appears to be the canonical name.

---

## 1. Today's Overview

CoPaw (QwenPaw) is in a high-velocity pre-release cycle, with **38 PRs updated in 24h** and **1 new release (v2.0.0-beta.3)** shipped. Activity is heavily skewed toward the v2.0.0 Beta program (release-duty tracking, version bumps, packaging metadata), security hardening (file_guard `find -delete` bypass, tool-call JSON recovery), and platform-specific stability (Windows AppContainer ACE pollution, Feishu image rendering, large-session frontend crashes). The **open-to-closed issue ratio of 12:4** plus a merged/closed PR count of 15 against 23 still-open suggests the team is moving fast but accumulating a sizable pre-release backlog. Overall project health: **active but in late stabilization phase for v2.0.0 GA**.

---

## 2. Releases

### v2.0.0-beta.3 — *Published 2026-07-07*
- **Type:** Pre-release (Beta)
- **Headline changes (partial from changelog):**
  - `fix(ci):` guard empty `extra_flags` expansion for bash 3.2 on macOS — [#5743](https://github.com/agentscope-ai/QwenPaw/pull/5743)
  - `feat(auth):` enhanced rate limiting with multi-dimensional protection — [#5738](https://github.com/agentscope-ai/QwenPaw/pull/5738)
- **Release-duty verification:** [#5833](https://github.com/agentscope-ai/QwenPaw/issues/5833) (open, deadline 2026-07-07 12:43 UTC)
- **Migration notes:** Pre-release; expect schema/UX churn. A concurrent `chore(version): bump version 2.0.0b4` PR ([#5837](https://github.com/agentscope-ai/QwenPaw/pull/5837), closed without merge) indicates a fast-iterating beta cadence — v2.0.0 GA is not imminent.
- A prior `v1.1.12.post3` post-release verification ([#5819](https://github.com/agentscope-ai/QwenPaw/issues/5819)) is closed, confirming the stable line is stable.

---

## 3. Project Progress

PRs merged/closed in the last 24h (15 of 38; selected highlights):

| PR | Title | Impact |
|---|---|---|
| [#5786](https://github.com/agentscope-ai/QwenPaw/pull/5786) | fix: three bug fixes (#5709, #5773, #5784) | Console model matching by id+provider_id; corrects `max_input_length` UI display when same model name spans providers |
| [#5820](https://github.com/agentscope-ai/QwenPaw/pull/5820) | feat(memory): usage-aware auto search & backend-specific embeddings | ReMe Light embeddings aligned across backend mapping, console UI, doctor checks, docs |
| [#4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) | feat(plugin): plugin-registered custom channels with schema-driven config UI | Replaces legacy `custom_channels/` dir-based extension; long-standing feature (open since 2026-05-26) now merged |
| [#5832](https://github.com/agentscope-ai/QwenPaw/pull/5832) | feat(console, chat): remove default mode of session approval level | UX/safety change in approval flow |
| [#5585](https://github.com/agentscope-ai/QwenPaw/pull/5585) | feat(channels): Matrix streaming mode like Discord | Improves perceived latency on Matrix channel |
| [#5839](https://github.com/agentscope-ai/QwenPaw/pull/5839) | fix(packaging): static `project.urls` for GitHub dependency graph | Restores PyPI→GitHub repo linkage; unblocks Dependents page |
| [#5837](https://github.com/agentscope-ai/QwenPaw/pull/5837) | chore: bump version 2.0.0b4 (closed unmerged) | Indicates beta cadence — b4 not yet landed |

**Themes advanced today:** security (file_guard), channel extensibility (plugin channels, Matrix), memory (embeddings, rerank pending), packaging hygiene.

---

## 4. Community Hot Topics

Ranked by comments in the last 24h (updated window):

- **[#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)** — *15 comments* — Console crashes/white-screen on sessions with large tool-use history (frontend lacks `type:"data"` renderer). Open since 2026-06-23, **high-traffic but zero 👍**. Underlying need: stable frontend rendering for long-running coding sessions; this is a blocker for any user who uses the agent for sustained work.
- **[#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273)** — *10 comments, 1 👍* — Centralized v2.0.0 pre-release bug tracker. Underlying need: a low-friction way to surface v2 regressions without fragmenting across the issue tracker.
- **[#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479)** — *6 comments* — Web UI hard-fails to open any session file >500KB. Underlying need: progressive/lazy loading for large conversation histories (no pagination/virtualization today).
- **[#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797)** — *4 comments* — User-toggle for scheduled-task pop-up notifications. Underlying need: avoid one-size-fits-all UX decisions; users want configurability per task.
- **[#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829)** — *3 comments* — Windows AppContainer sandbox ACE pollution crashes Electron GPU in downstream apps (Hermes Desktop). Underlying need: sandbox ACLs must not pollute parent system directories; a regression risk for any user running CoPaw alongside other Electron apps on Windows.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| **High** | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | Console frontend white-screen on sessions with `type:"data"` content blocks | None visible |
| **High** | [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | Frontend crashes opening >500KB session files | None visible |
| **High** | [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) | Windows AppContainer ACE pollution breaks Electron apps | None visible |
| **Medium** | [#5759](https://github.com/agentscope-ai/QwenPaw/issues/5759) | Plan mode re-reads the same file up to 5× within a single sub-task | None visible |
| **Medium** | [#5789](https://github.com/agentscope-ai/QwenPaw/issues/5789) | Context compression crashes when LLM output exceeds JSON Schema `maxLength: 200` on `next_steps` | None visible |
| **Medium** | [#5842](https://github.com/agentscope-ai/QwenPaw/issues/5842) | `find ... -delete` bypasses out-of-workspace file_guard (rm-protection hole) | **Yes** — [#5843](https://github.com/agentscope-ai/QwenPaw/pull/5843) (open) |
| **Medium** | [#5835](https://github.com/agentscope-ai/QwenPaw/issues/5835) | `/stop` command lacks user-level isolation in DingTalk DM; one user can cancel another's task | None visible |
| **Low** | [#5841](https://github.com/agentscope-ai/QwenPaw/pull/5841) (PR/fix) | Whitespace-prefixed tool-call JSON arguments recovered — **already covered by fix PR** | [#5841](https://github.com/agentscope-ai/QwenPaw/pull/5841) (open) |

**Closed-but-fixed bugs from today:** #5775 (auto-memory interval not triggering due to per-request agent rebuild — closed, fix landed), #5774 (Google Gemini format endpoint error — closed), #5786 batch (model provider matching — closed).

The cluster of frontend rendering crashes (#5401, #5479) and the Windows sandbox regression (#5829) are the highest-risk items lacking fixes.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likely in next release? |
|---|---|---|
| Per-task notification pop-up toggle for scheduled tasks | [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) | **High** — low-effort UX addition, aligned with active #5832 approval-level rework |
| Desktop minimize-to-tray on close | [#5312](https://github.com/agentscope-ai/QwenPaw/issues/5312) | **Medium-High** — Tauri desktop is in active development (see [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187), [#5814](https://github.com/agentscope-ai/QwenPaw/pull/5814)) |
| Granular per-media-type `rejects_media` capability | [#5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) | **Medium** — clean capability-model change, likely in v2.0.0 GA |
| `grep_search` improvements: `show_file` option, pipe-separated literals | [#5840](https://github.com/agentscope-ai/QwenPaw/pull/5840), [#5834](https://github.com/agentscope-ai/QwenPaw/pull/5834) | **High** — both PRs open from first-time contributors; likely fast-tracked |
| qwen3-rerank for memory search | [#5669](https://github.com/agentscope-ai/QwenPaw/pull/5669) | **Medium** — toggle defaults off; small blast radius |
| Agent profile avatar field | [#5826](https://github.com/agentscope-ai/QwenPaw/pull/5826) | **Medium** — frontend already supports it, backend wire-through pending |
| Windows computer-use / GUI automation (UIA + Tauri control mode) | [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | **Long-horizon** — large PR, not v2.0.0 |
| Plugin-registered custom channels (already merged) | [#4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) | **Shipped today** |

The trajectory is clear: **desktop UX hardening** (tray, file-explorer links in [#5836](https://github.com/agentscope-ai/QwenPaw/pull/5836), bundled Node for ACP in [#5814](https://github.com/agentscope-ai/QwenPaw/pull/5814)), **memory quality** (rerank + backend-aware embeddings), and **security/approval granularity** dominate the v2.0+ roadmap.

---

## 7. User Feedback Summary

- **Pain: session growth.** Two open issues (#5401, #5479) with zero 👍 but high comment counts indicate users with months-old sessions are effectively locked out of their history. No virtualization/pagination strategy visible.
- **Pain: developer experience in coding mode.** Repeated file reads (#5759) and inability to select dotfiles (#5785, closed) point to a coding-mode UX that hasn't kept pace with feature surface area.
- **Pain: Windows sandbox collateral damage.** [#5829] highlights that AppContainer ACEs leaking to system dirs break unrelated apps — users running CoPaw alongside other Electron tools have a real-world regression.
- **Praise / momentum signals:** [#5273] explicitly *centralizes* v2.0.0 bug reports, suggesting an engaged community willing to contribute to QA. [#4693] plugin-channel system took ~6 weeks from proposal to merge.
- **Dissatisfaction pattern:** A recurring theme in [#5797] is *"don't make UX decisions for me"* — users want toggles over hard-coded defaults (also echoed in the #4776 → #4803 → #5797 pop-up thread).

---

## 8. Backlog Watch

Items open for **≥2 weeks** without merged resolution — risk of community disengagement:

| Item | Age | Why it needs maintainer attention |
|---|---|---|
| [#5312](https://github.com/agentscope-ai/QwenPaw/issues/5312) — Desktop minimize-to-tray | 20 days | High-recurrence desktop UX request, easy to ship |
| [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) — v2.0.0 pre-release tracker | 21 days | Central triage issue; needs weekly status update from release captain |
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) — Console `type:"data"` crash | 15 days | **15 comments, 0 👍** — silent severity; very likely affects many users who don't react |
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) — Large-session crash | 14 days | Same frontend team owns this; pair with #5401 |
| [#4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) — Plugin channels | **43 days** (now merged) | Note for awareness: was the longest-open PR, just landed |
| [#5401 root-cause analysis** is missing a maintainer reply — the user has supplied a precise diagnosis (renderer mismatch on `type:"data"` blocks), which is unusual; a confirming ack + targeted fix PR would close this cleanly. Similarly #5829 (Windows sandbox ACE pollution) requires an explicit decision on whether to narrow the ACL scope or move to a non-AppContainer sandbox model. | | |

---

**Bottom line:** CoPaw is shipping aggressively into the v2.0.0 beta, with strong security and packaging momentum, but three high-severity frontend/sandbox bugs (no fix PRs) and a stale long-tail of UX requests suggest the team should split cycles: ship the betas, but reserve a dedicated "v2.0 GA hardening" track for the frontend-rendering and Windows-sandbox regressions before promoting to stable.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-08

## 1. Today's Overview

ZeroClaw shows a high-velocity maintenance day with no new releases. Activity was dominated by **50 PRs updated in the last 24h (45 still open)** and **10 issues (8 open, 2 closed)**, indicating an active development cycle focused on the v0.8.3 support lane. A clear cluster of work targets **security hardening and memory stability**: SSRF gates, constant-time token comparisons, per-sender authorization, MCP tool-schema cloning, and policy enforcement on skill-registered tools. The mix of P1 bugs and P2 enhancements, with most P1s already paired with active PRs, suggests good signal-to-action ratio, but a backlog of high-risk items (#6699, #7952, #8642) still awaits fixes. Overall project health is **active and security-aware**, with documentation drift and onboarding UX issues newly surfacing.

## 2. Releases

No new releases in the last 24h. The most recent shipping signals point to the v0.8.3 tracker ([Issue #8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)) still being assembled.

## 3. Project Progress

Three PRs closed today, all concentrated in the **zerocode/Channels UX lane**:

- **[PR #8813](https://github.com/zeroclaw-labs/zeroclaw/pull/8813)** — added a "Global Settings" entry to the Channels config section in zerocode, surfacing root-level fields like `show_tool_calls`, `ack_reactions`, and `message_*`.
- **[PR #8820](https://github.com/zeroclaw-labs/zeroclaw/pull/8820)** — follow-up to #8757 channels root settings fix.
- **[PR #8822](https://github.com/zeroclaw-labs/zeroclaw/pull/8822)** — duplicate/iteration adding a discoverable Global Settings entry per #8757.

Two of three (#8820, #8822) closed quickly, suggesting either supersession or process cleanup. Substantive advances in flight (still open) include:

- **[PR #8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817)** — Arc-shares MCP tool schemas to stop per-iteration deep-clone churn (fixes [Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) on unbounded RSS growth).
- **[PR #8816](https://github.com/zeroclaw-labs/zeroclaw/pull/8816)** — hot-reload of `[observability]` log persistence/rotation config without daemon restart (fixes [Issue #8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314)).
- **[PR #8806](https://github.com/zeroclaw-labs/zeroclaw/pull/8806)** — adds `ResolvedModelAccess::run_model_query` metered provider seam (S21 P1, prerequisite for #8821).

## 4. Community Hot Topics

Ranked by comment volume in the last 24h:

| Rank | Item | Comments | Theme |
|------|------|----------|-------|
| 1 | [Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) — `tool_filter_groups` no-op for real MCP tools | 9 | **MCP filter gate is a silent failure**; users believe their config restricts tools but it doesn't, plus it ignores `deferred_loading`. High trust impact. |
| 2 | [Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) — full-channel prebuilt assets | 5 | **Distribution gap**: a one-bundle release model breaks users who configure channels not in the default prebuilt. Blocked, awaiting maintainer review. |
| 3 | [Issue #8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314) — hot-reload log persistence | 3 | Operational pain: changing `log_persistence_max_bytes`/rotation today requires a daemon restart, interrupting long-running services. Now addressed by [PR #8816](https://github.com/zeroclaw-labs/zeroclaw/pull/8816). |
| 3 | [Issue #6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) — v0.8.1 integration tracker | 3 | Closed; tracker for additive channels/providers/tools through v0.8.1. |

**Underlying need:** users want **predictable configuration → behavior mapping** (filter groups, log policy, docs) and **operational continuity** (hot-reload, full-channel binaries, accurate CLI errors).

## 5. Bugs & Stability

### Critical (P1, high risk)
- **[Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** — `tool_filter_groups` is a silent no-op for MCP tools (prefix-check bug at `agent/loop_.rs:149`) and not integrated with `deferred_loading`. **No fix PR yet.** Highest community engagement.
- **[Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)** — MCP/tool-schema cloning drives unbounded RSS growth (split from #5542 OOM tracker). **Fix in flight: [PR #8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817) — Arc-sharing tool schemas.**

### High
- **[PR #8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826)** — `image_gen` tool SSRF via server-supplied fal.ai URL; not yet merged.
- **[PR #8824](https://github.com/zeroclaw-labs/zeroclaw/pull/8824)** — `/ws/nodes` WebSocket auth uses non-constant-time `!=` token comparison; not yet merged.
- **[PR #8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496)** — centralize deferred-MCP access policy (single source of truth for #8054 Surface 1(b)); large change, high risk, not yet merged.
- **[PR #8739](https://github.com/zeroclaw-labs/zeroclaw/pull/8739)** — `wecom_ws` and `secrets` `.map_err(|_| ...)` sites swallow inner errors; not yet merged.

### Medium / UX
- **[Issue #8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797)** — `bind-telegram` setup error references an unknown config key. **Fix in flight: [PR #8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823)** correcting `bot_token` property name.
- **[PR #8656](https://github.com/zeroclaw-labs/zeroclaw/pull/8656)** — WeChat channel mishandles Markdown tables, H1–H4, code fences; not yet merged.

### Closed today
- **[Issue #8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815)** — `skill_manage.create` action so agents save new skills as bundles, not loose `.md` files (closed, but no linked PR is visible in the top-20 list — verify whether the implementation is already merged or the issue was closed as wontfix/duplicate).

## 6. Feature Requests & Roadmap Signals

**Open feature/enhancement signals with active PRs (high probability for next minor):**

- **[PR #8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710)** — **OpenAI Bridge channel** (OpenAI-compatible HTTP endpoints `/openai/{alias}/v1/{models,chat/completions}` with SSE). XL-sized, needs maintainer review; this is a major interoperability unlock for Home Assistant and other OpenAI-client tools.
- **[PR #8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235)** — per-runtime-profile `prompt_injection_mode` override for multi-agent installs.
- **[PR #8821](https://github.com/zeroclaw-labs/zeroclaw/pull/8821)** — meter the max-iteration graceful summary via `run_model_query` (S21 P2, stacked on #8806).
- **[PR #8805](https://github.com/zeroclaw-labs/zeroclaw/pull/8805)** — align prompt callable-tool set with the registry.
- **[PR #8788](https://github.com/zeroclaw-labs/zeroclaw/pull/8788)** — apply `excluded_tools` denylist to skill-registered tools.
- **[PR #8784](https://github.com/zeroclaw-labs/zeroclaw/pull/8784)** — split-history loop contract (PR-1 of #7846 rework).
- **[PR #8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825)** — expanded Telegram setup guide (driven by [Issue #8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810)).

**Roadmap tracker signals:** [Issue #8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) (v0.8.3 observability/CI/docs/deps/release-support) and [Issue #8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736) (SOP authoring surface, in-progress on `feat/sop-authoring`) are the most likely v0.8.3 carriers. The **OpenAI Bridge channel** and **security-hardening batch** (SSRF, constant-time compare, per-sender authz) are strong candidates for the next minor after v0.8.3.

## 7. User Feedback Summary

Pain points expressed in today's issues:

- **Trust/observability of configuration:** Users report that `tool_filter_groups` ([#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)) appears to apply but does not — a quiet policy violation risk for multi-tenant or security-sensitive deployments.
- **Documentation drift:** [Issue #8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) ("Documentation is wrong — Telegram example") and [Issue #8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) both reflect that setup instructions and command output disagree with actual config schema.
- **Onboarding friction:** [Issue #8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) shows new users being told to set a config key that the CLI rejects — a first-touchpoint failure.
- **Operational pain:** [Issue #8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314) — needing a daemon restart to apply log retention changes is friction in production.
- **Distribution discoverability:** [Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) — single prebuilt bundle creates confusion when users configure non-default channels.
- **Agent skill authoring loop:** [Issue #8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) (closed) — agents fall back to `file_write` and produce loose `.md` files that `skill_manage` then refuses to edit, breaking the create-then-edit loop.

Tone is constructive; no hostility detected. Most reports are paired with proposed behavior (suggested config key names, expected doc structure), which is a healthy signal of an engaged user base.

## 8. Backlog Watch

Items needing maintainer attention — long-lived, high-risk, or blocked:

- **[Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** — 53 days old, P1, 9 comments, high risk, **no fix PR linked**. Security/UX credibility item; should not slip past v0.8.3.
- **[Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)** — `status:blocked, needs-maintainer-review`. Distribution strategy decision required.
- **[Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)** — P1 memory-growth bug. Has a fix in PR #8817 but the issue itself still has only 1 comment; needs review/merge pressure.
- **[PR #8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710)** — OpenAI Bridge channel, XL-sized, `needs-maintainer-review`, 4 days old. Strategic interoperability feature.
- **[PR #8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496)** — deferred-MCP access-policy centralization, L-sized, high risk, 9 days old. Foundational for #8054 MCP surface work.
- **[PR #8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690)** — `/model --agent` per-sender authorization, P1, security-flavored, 4 days old.
- **[PR #8824](https://github.com/zeroclaw-labs/zeroclaw/pull/8824)** and **[PR #8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826)** — both security fixes (constant-time auth, SSRF gate), authored today; quick review would unblock a meaningful security batch.
- **[Issue #8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)** — v0.8.3 tracker with 0 comments; a coordination hub that benefits from a brief maintainer status note.

---

**Summary health signal:** Active development, security-aware, but with two P1 bugs (#6699, #8642) and a blocked distribution issue (#7952) that have aged into the "should not slip" category. Triage opportunity exists around the cluster of new security PRs (#8824, #8826, #8690, #8496, #8788) — reviewing them as a batch would let v0.8.3 ship a coordinated security uplift.

</details>