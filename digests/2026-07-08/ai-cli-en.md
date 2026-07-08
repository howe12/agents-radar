# AI CLI Tools Community Digest 2026-07-08

> Generated: 2026-07-08 06:22 UTC | Tools covered: 9

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
**Snapshot: 2026-07-08**

---

## 1. Ecosystem Overview

Across nine actively-maintained AI coding CLIs, the **center of gravity has shifted from core chat to agent orchestration, MCP plugin integration, and TUI reliability**. The dominant vendors (Anthropic, OpenAI, Google, GitHub, Moonshot, Alibaba) are each releasing multiple versions per week focused on session continuity and sandbox governance, while independent projects (OpenCode, Pi, CodeWhale) push the frontier on extension APIs, multi-agent "Fleet" patterns, and test-time-compute (verify/critique) primitives. Windows-specific fragility and provider-format drift are the most cited cross-vendor failure modes; sub-agent lifecycle bugs (loops, misreported status, lost context) are the single most-reported class of issue across the entire ecosystem. Kimi CLI stands out as a near-quiet outlier with effectively no 24-hour movement.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Notable Issues | PRs Touched | Tempo |
|---|---|---|---|---|
| **Claude Code** | 2 (v2.1.204, v2.1.203) | 10 (top: #50246 with 👍135) | 7 | High — stability & visibility |
| **OpenAI Codex** | 2 (rust-v0.143.0 + alpha) | 10 (top: #30364 with 👍252, 158 💬) | 10+ main | Very high — plugin era |
| **Gemini CLI** | 0 (nightly failed, #28308) | 10 (top: #21409 P1 hang) | 5 main + closed | High eval/reliability focus |
| **GitHub Copilot CLI** | 2 (v1.0.69, v1.0.69-3) | 10 (top: #53 with 👍75) | 2 | Moderate — triage-heavy |
| **Kimi Code CLI** | 0 | 1 (#1604 Figma MCP) | 0 | Minimal |
| **OpenCode** | 1 (v1.17.15) | 10 (top: #6680 with 👍22) | 10 | High — V2 engine push |
| **Pi** | 0 | 10+ (TUI + provider mix) | 20+ merged | Very high — extension-first |
| **Qwen Code** | 3 (v0.19.7 + preview + nightly) | 9 (top: #6505 subagent loop) | 10 main + more | Highest — 50 PRs/24h noted |
| **DeepSeek TUI / CodeWhale** | 1 (v0.8.67) | 10 (#4092 execution board) | 10 | High — milestone-driven |

---

## 3. Shared Feature Directions

These themes are converging across **multiple tool communities simultaneously**, signaling ecosystem-wide pressure points:

| Direction | Tools Asking | Representative Asks |
|---|---|---|
| **Sub-agent lifecycle reliability** | Gemini, Qwen, DeepSeek, Claude Code, OpenCode | Loop detection (#22323, #6505), MAX_TURNS misreporting (#22323), worktree-pinned subagents (#6456), live activity panel (#4094), agent override loss (#75565) |
| **MCP server lifecycle & governance** | Copilot, Kimi, Codex, Qwen | Duplicate stdio processes (#4049), empty-turn injection (#4038), Figma pre-registration (#1604), tool-call schema regressions (#31517), `/mcp` approval UX (#6518) |
| **TUI status-line customizability** | Codex, Claude Code (existing), Copilot | Configurable shell-driven status bar (#17827, 👍88), model display correctness after subagents (#6512) |
| **Session continuity / non-interrupting queues** | Claude Code, Qwen, Copilot | Message queue mode (#50246, 👍135), task auto-resume (#4278), `/resume` non-git failure (#4054) |
| **Sandbox & permission hardening** | Copilot, Claude Code, Codex, Qwen | Network policy opt-outs (#4041), host-restricted tool allowlist (#31526), browser-automation gating (#6472), permission mode footer badge |
| **Provider/model transparency** | Claude Code, Codex, Pi | Fable 5 routing confusion (#73365, #67506), GPT-5.5 reasoning clusters (#30364), custom-provider `modelOverrides` ignored (#6367), context-window hardcoding (#35863) |
| **LSP-driven code understanding** | Codex, OpenCode, Gemini | Cross-file ref/symbol awareness (#31504), AST-aware reads (#22745), capability metadata normalization (#35848) |
| **First-party IDE parity** | Claude Code, Copilot | JetBrains plugin gap (#47166), BYOK in ACP for JetBrains (#4037) |
| **Skill/extension discoverability** | Gemini, Pi, OpenCode, Codex | Skill invocation underrated (#21968), bracket-ID pattern bugs (#6210), `/` and `@` TUI triggers (#34410), hosted plugin defaults |
| **SDK / cross-language parity** | Qwen, Codex, OpenCode | Python ↔ TS SDK symmetry (#6491, #6492), Responses API alignment (#31517), model-detail normalization |

---

## 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Bet |
|---|---|---|---|
| **Claude Code** | Hooks/plugins as a first-class extensibility layer; mode-visibility UX | Enterprise teams, power automation authors | Session reliability, VS Code/JetBrains traction |
| **OpenAI Codex** | Responses API integration & hosted code-mode default | Heavy Responses-API / Codex-cloud consumers, plugin ecosystem | Plugin marketplace governance + remote plugins on by default |
| **Gemini CLI** | Component-level behavioral evals, AST-aware tooling | Google Cloud / Workspace users, eval-driven orgs | Test-time verification infrastructure |
| **GitHub Copilot CLI** | Sandbox + plugin governance, IDE-native workflows | Enterprise / GitHub-integrated teams, BYOK users | Sandboxed execution, project-scoped plugins, ACP server mode |
| **OpenCode** | Multi-provider abstraction; V2 engine rewrite | Provider-agnostic tinkerers, plugin authors | Capability normalization, plugin `Tool` domain |
| **Pi** | Extension API as a peer to built-ins | Extension developers, custom-provider integrators | Exposing image resize, edit-diff, CLI parser, stats to extensions |
| **Qwen Code** | Multi-workspace daemons, SDK parity, channel webhooks | Multi-tenant bot builders, Python/TS integrators | WeCom/webhook channels, `qwen serve` multi-workspace |
| **CodeWhale** (formerly DeepSeek TUI) | Multi-agent Fleet + test-time-compute verify/critique tool | Experimental users wanting adversarial self-review | Role/profile roster editor, TTC primitives |
| **Kimi Code CLI** | Minimal surface area, design-tool interop focus | Niche — appears maintenance-mode today | Plug-and-play MCP catalogue |

The clearest strategic fault line: **Anthropic / OpenAI / Google** optimize for end-user reliability and ecosystem lock-in, **GitHub** optimizes for governance and IDE-mediated workflows, **OpenCode / Pi / CodeWhale** push extension architecture and provider abstraction as their wedge, and **Qwen** plays a multi-tenant channel/SDK integration game.

---

## 5. Community Momentum & Maturity

**Most active (high velocity + high engagement signal):**
- **Qwen Code** — 50 PRs touched in 24h, 3 channels of releases (stable/preview/nightly), broad PR author diversity.
- **OpenAI Codex** — highest single-thread engagement (👍252 on #30364) and dense PR cadence on extension-owned TurnItem refactor.
- **Pi** — 20+ PRs merged in 24h, lots of extension surface-area expansion (image resize, system prompts, tool definitions).
- **Claude Code** — sustained 👍135 on queued-message-mode demand and deep hook/plugin PR throughput.

**Maturing but stable:**
- **OpenCode** — V2 engine moving forward in coordinated batches; Windows stability regression (#35847) is the main near-term risk.
- **Gemini CLI** — Nightly failure (#28308) and P1 subagent issues are slowing the cutting edge, but eval investments compound.
- **GitHub Copilot CLI** — Release cadence healthy, PR queue thin (only 2 in 24h), suggesting bandwidth absorbed by triage.

**Quiet / at risk:**
- **Kimi Code CLI** — One updated issue, zero releases, zero PRs in 24h. This is the clearest signal in the dataset of maintenance-mode drift; a community concern if sustained.

**Cross-cutting momentum indicator:** PR volume is dominated by independent projects (Pi, Qwen, OpenCode, CodeWhale), whereas the vendor-backed tools concentrate on issues/triage and bug-bash cycles — a textbook sign that the extension/architecture frontier is now where new design energy is spent.

---

## 6. Trend Signals

1. **Sub-agents are the new unit of failure.** Across **Gemini (#22323, #21409)**, **Qwen (#6505)**, **DeepSeek (#4094)**, **Claude Code (#75521, #75542, #75548, #75565)**, and **OpenCode (capability gaps)** the most-pressing reliability work is no longer single-session chat — it's the lifecycle of invoked workers (loops, MAX_TURNS misreporting, override loss, empty panels). Developers building production pipelines should expect a generation of "sub-agent ops" tooling similar to what we saw for session ops in 2024–25.

2. **MCP is the integration primitive, but it's still unreliable.** Pre-registration friction (Kimi), stdio leaks (#4049, #31499), empty-turn injection (#4038), and schema drift (#31517) all surfaced in a single 24-hour window. The market is moving toward curated catalogs (Codex remote plugins default-on, Kimi Figma ask) but stability is the gating concern.

3. **Status-line / "what is this doing?" UX is now a parity battle.** Codex (#17827), Qwen (#6512), and Copilot (#4043) all converged on the same ask — persistent visibility into model, rate-limit state, and active tool — that Anthropic already ships. Expect status lines to become a standard surface in the next quarter.

4. **Test-time compute is arriving on CLI.** CodeWhale's `verify`/critique tool (#4199) plus Gemini's component-level behavioral evals (#24353) signal that "let the model decide when to spend more reasoning" is moving from research notes to shipped features. This will likely influence every vendor's "deep / critic" mode roadmap by next digest cycle.

5. **Provider-format drift is a maintenance tax.** Pi alone logged Azure `store:false` reasoning replay (#6409), Gemini `thoughtSignature` stripping (#6414), and Kimi-K2.7 DeepInfra corruption (#6399) in 24 hours. For integrators, multi-provider support is now a normalization-engineering problem more than a configuration one.

6. **Windows is the unrepresented-case problem.** Bun panics with 43 GB RSS growth (OpenCode #35847), TUI-to-PowerShell keystroke leak (DeepSeek #2261), `codex-windows-sandbox-setup.exe` not found (#29089), MCP stdio pools leaking node.exe (#31499), HCS missing on Win 11 Pro (Claude Code #74649), Windows-1252 → UTF-8 silent rewrite (Copilot #3604) — half a dozen distinct Windows failure modes in one digest. A tool's Windows maturity is now a meaningful selection criterion.

7. **Plugin governance is converging on allowlists and badges.** Codex #31526 (server_registered_tools_only), Copilot sandbox policy badge and one-time bypass, Qwen #6472 (browser automation gating), Claude Code's persistent mode badge — every tool is converging on UI cues that communicate "this tool runs under X constraints," driven by enterprise policy demands.

8. **Slow-and-quiet is a diagnostic signal.** Kimi's flatline is the cleanest warning in this digest: zero releases, zero PRs, one issue update. Watch for this pattern as an early indicator of project drift in 2026 — release velocity alone is no longer sufficient; **issue + PR velocity together is the leading indicator**.

---

*Report compiled from 9 community digests covering github activity on 2026-07-08. All issue/PR numbers correspond to the repositories listed in each section.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
**Repository:** `anthropics/skills` · **Data as of:** 2026-07-08

---

## 1. Top Skills Ranking

The PR leaderboard (comment counts were not captured for the top 20; rankings reflect the issue's stated sort order and editorial significance) is dominated by a single theme: **the `skill-creator` toolchain is broken**, and four of the top five PRs are attempts to fix it. Real, novel skill proposals cluster beneath that.

| Rank | PR | Skill / Change | Status | Why it matters |
|------|----|----------------|--------|----------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill-creator): run_eval.py always reports 0% recall** | OPEN | Master fix for the optimizer loop. Without this, `improve_description.py` is "optimizing against noise." Authored after 10+ independent reproductions of issue #556. |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography skill** | OPEN | Typographic QC for AI-generated docs — orphan/widow control, numbering alignment. Tackles a problem affecting *every* document Claude produces. |
| 3 | [#538](https://github.com/anthropics/skills/pull/538) | **fix(pdf): case-sensitive SKILL.md references** | OPEN | Trivial but blocks PDF skill on Linux/case-sensitive FS — illustrates how naming-convention drift creates real user pain. |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** — OpenDocument create / template-fill / parse | OPEN | Fills the largest open-doc-format gap in the official collection. |
| 5 | [#210](https://github.com/anthropics/skills/pull/210) | **Improve frontend-design skill clarity** | OPEN | Edits skill text for "single-conversation actionability" — meta-quality-of-life for an existing flagship skill. |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | OPEN | Two meta-skills that *audit* other skills across 5 dimensions. Directly responsive to community security concerns (issue #492). |
| 7 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit skill v1.3.0** | OPEN | Pre-delivery verification: mechanical file checks + four-dimension reasoning audit. Tech-stack-agnostic. |
| 8 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert skill** | OPEN | Color naming systems (Munsell, XKCD, RAL…), color-space selection guidance, gradient harmony. From prolific design-tool author @meodai. |

**Discussion signal:** Beyond the four duplicate `run_eval` Windows/recall fixes ([#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323), [#362](https://github.com/anthropics/skills/pull/362), [#361](https://github.com/anthropics/skills/pull/361)), the genuinely novel new-skill proposals in the top 20 are: document-typography, ODT, testing-patterns ([#723](https://github.com/anthropics/skills/pull/723)), self-audit, color-expert, sensory/macOS automation ([#806](https://github.com/anthropics/skills/pull/806)), and SAP-RPT-1-OSS predictor ([#181](https://github.com/anthropics/skills/pull/181)).

---

## 2. Community Demand Trends

Distilled from the top 14 issues by comment volume:

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Trust & security boundary for community skills** | [#492](https://github.com/anthropics/skills/issues/492) (34 comments) — community skills distributed under `anthropic/` namespace impersonate official skills | **#1 most-discussed issue by a wide margin.** Users need a verifiable provenance signal. |
| **Enterprise distribution UX** | [#228](https://github.com/anthropics/skills/issues/228) (14 comments) — org-wide skill sharing in Claude.ai | Friction of "download .skill → Slack → Settings → Capabilities" is the top enterprise ask. |
| **Skill-tooling reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12), [#1169](https://github.com/anthropics/skills/issues/1169) (3), [#202](https://github.com/anthropics/skills/issues/202) (8, closed) | `run_loop.py` / `run_eval.py` consistently produce `recall=0%`. Skill authoring is gated on a working tool. |
| **Cross-platform support (Windows)** | [#1061](https://github.com/anthropics/skills/issues/1061) (3), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) | PATHEXT, cp1252 encoding, `select()` on pipes — Unix-first assumptions block Windows users. |
| **Long-running agent context** | [#1329](https://github.com/anthropics/skills/issues/1329) (9) — **compact-memory** skill (symbolic notation for persistent agent state) | "Prose note-taking is killing context budget" — demand for token-efficient memory. |
| **Governance & safety patterns** | [#412](https://github.com/anthropics/skills/issues/412) (6, closed) — **agent-governance** skill | Policy enforcement, threat detection, audit trails for agent systems. |
| **Pluggability / MCP interop** | [#16](https://github.com/anthropics/skills/issues/16) (4) — **Expose Skills as MCPs** | "A skill is just a packaged AI software API." |
| **Enterprise integrations & deployment** | [#29](https://github.com/anthropics/skills/issues/29) (4) — Bedrock usage; [#1175](https://github.com/anthropics/skills/issues/1175) (4, closed) — SharePoint security model | Real customers hitting deployment gaps. |
| **Plugin packaging hygiene** | [#189](https://github.com/anthropics/skills/issues/189) (6) — `document-skills` and `example-skills` ship identical content | Ecosystem packaging isn't normalized. |

**Net takeaway on demand:** skills that **audit other skills** (quality + security), **share within an organization**, and **work cross-platform** dominate the conversation; new *domain* skills (governance, memory, MCP bridge) round out the top asks.

---

## 3. High-Potential Pending Skills

Active, non-fix PRs that have not yet merged and represent real, ready-to-land Skills:

| PR | Skill | Author | Domain | Why it's high-potential |
|----|-------|--------|--------|-------------------------|
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | @PGTBoos | Documents | Universal applicability — every generated doc benefits. |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | @GitHubNewbie0 | Documents | Closes the ODF gap; reads + writes + template-fill. |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | @eovidiu | Meta | Directly addresses the #1 issue (#492) — supply-side fix for trust. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit v1.3.0** | @YuhaoLin2005 | Meta | Tech-agnostic output verification. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | @4444J99 | Engineering | Full Testing Trophy + React Testing Library guidance. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | @meodai | Design | Author has strong track record; addresses recurring design-tool gap. |
| [#806](https://github.com/anthropics/skills/pull/806) | **sensory** (macOS AppleScript) | @AdelElo13 | OS automation | Two-tier permission model is well thought out; unique capability. |
| [#181](https://github.com/anthropics/skills/pull/181) | **SAP-RPT-1-OSS predictor** | @amitlals | Enterprise ML | Targets real SAP customer workflows with an OSS tabular foundation model. |

**Merge gating risk:** Four of these touch areas where the official `skill-creator` `run_eval` is currently returning `recall=0%` (per #556, #1169). Until [#1298](https://github.com/anthropics/skills/pull/1298) or one of its siblings lands, automated description-quality gating for new skills is effectively offline.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, auditable Skills themselves** — meta-skills that prove provenance, score quality, and verify outputs — because the authoring toolchain is currently broken and the marketplace has no trust boundary between official and community contributions.

---

### Appendix — Fixes waiting on the same root cause
The following 5 PRs all converge on one bug (`run_eval.py` returning `recall=0%` on every iteration) and represent a single coordinated fix opportunity: [#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#362](https://github.com/anthropics/skills/pull/362). Tracking them as one initiative would unblock the entire new-skill pipeline.

---

# Claude Code Community Digest — 2026-07-08

## 📌 Today's Highlights

Two releases in 24 hours focus on **session reliability and visibility**: v2.1.204 fixes a critical hook-streaming bug that could cause remote workers to be idle-reaped mid-hook, while v2.1.203 adds proactive login-expiration warnings and a persistent mode indicator. On the issue tracker, the long-requested **message queue mode** (#50246) continues to lead community engagement with 135 👍, signaling a clear demand for non-interrupting task workflows.

---

## 🚀 Releases

**v2.1.204** — Stability fix
- Fixed hook events not streaming during `SessionStart` hooks in headless sessions, which could cause remote workers to be idle-reaped mid-hook. ([#75571-related context](https://github.com/anthropics/claude-code/issues/75571))

**v2.1.203** — UX polish
- Added a warning when login is about to expire, so background sessions are not interrupted mid-task.
- Added a grey ⏸ badge to the footer during manual permission mode, making the active mode always visible.
- Added display of the session's additional working directories.

---

## 🔥 Hot Issues

1. **[#50246](https://github.com/anthropics/claude-code/issues/50246)** — *Message queue mode: queue messages instead of interrupting active tasks* (37 comments, 👍 135). Highest-voted feature request in this batch. Developers want to inject follow-up prompts during long-running agent tasks without disrupting in-flight work — a workflow gap for multi-step automation.

2. **[#47166](https://github.com/anthropics/claude-code/issues/47166)** — *JetBrains: a real Claude AI Assist interface plugin* (28 comments, 👍 3). Persistent demand for first-class JetBrains IDE integration; users cite parity with VS Code extension as the missing piece.

3. **[#10621](https://github.com/anthropics/claude-code/issues/10621)** — *Require double ESC in Vim mode to clear messages in Plan Mode* (21 comments, 👍 27). Long-standing ergonomics issue; single ESC in Plan Mode Q&A causes accidental message erasure for Vim users.

4. **[#73365](https://github.com/anthropics/claude-code/issues/73365)** — *Advisor always "unavailable" with Fable 5 advisor (Opus 4.8 main)* (14 comments, 👍 31). High 👍 ratio shows the Fable 5 / Opus 4.8 model-routing integration is broadly broken across sessions in v2.1.198.

5. **[#67506](https://github.com/anthropics/claude-code/issues/67506)** — *Fable 5 token consumption not matching description* (9 comments, 👍 1). Cost-tracking concerns on macOS suggest model-routing billing transparency needs improvement.

6. **[#74122](https://github.com/anthropics/claude-code/issues/74122)** — *TUI renders garbled inside tmux since 2.1.200 (last-good 2.1.199)* (7 comments, 👍 1). Clean regression between patch releases; tmux users cannot rely on forced redraw as a workaround. Affects a substantial slice of CLI power users.

7. **[#74649](https://github.com/anthropics/claude-code/issues/74649)** — *Missing HCS services: vfpext — Cowork not working on Windows 11 Pro* (6 comments). Windows 11 Pro Hyper-V feature gaps blocking the Cowork feature; environmental rather than product bug but with no documented workaround.

8. **[#75521](https://github.com/anthropics/claude-code/issues/75521)** — *Agents view (`--resume`/`--continue`) ignores all keyboard input on macOS* (4 comments). Just shipped in 2.1.204, this is a critical regression — the dashboard renders but is unusable.

9. **[#70520](https://github.com/anthropics/claude-code/issues/70520)** — *Desktop app SSH remote session fails with 403 while Local/CLI-over-SSH works* (4 comments, 👍 3). Account-level discrepancy in the Desktop app's permission model vs. CLI authentication paths.

10. **[#60012](https://github.com/anthropics/claude-code/issues/60012)** (CLOSED) — *Spell check only checks English on Windows* — Part of a recurring cluster (#68621, #72247, #66464) all closed as invalid/duplicate, suggesting the spell-checker configuration gap is repeatedly surfaced by users.

---

## 🛠 Key PR Progress

1. **[#75541](https://github.com/anthropics/claude-code/pull/75541)** — *Fix `closeExpired()` to paginate issue events and honor unlabeled* — Corrects the auto-close sweep script so issues missing lifecycle labels are properly handled, reducing false-positive closures.
2. **[#75537](https://github.com/anthropics/claude-code/pull/75537)** — *Hook-development skill: recognize all five hook handler types* — Brings docs and the bundled validator in `scripts/validate-hook-schema.sh` back in sync with the actual product surface.
3. **[#75529](https://github.com/anthropics/claude-code/pull/75529)** — *Clarify `code-review` plugin vs. bundled `/code-review` skill* — Prevents naming collisions by documenting the namespace (`code-review:code-review`) and scope distinction.
4. **[#75252](https://github.com/anthropics/claude-code/pull/75252)** — *Docs: clarify plugin MCP configuration scope* — Reopened (was #74857); distinguishes plugin-bundled `mcpServers` from the user-level allow/deny list in `~/.claude.json`.
5. **[#68673](https://github.com/anthropics/claude-code/pull/68673)** — *Fix pagination break condition* — `break` only when the page is empty; correct logic should be "not full," avoiding missed items on full pages.
6. **[#73476](https://github.com/anthropics/claude-code/pull/73476)** — *Fix GitHub capitalization in README* — Cosmetic but useful for repo hygiene.
7. *Plus internal triage/sweep tooling PRs from `fcarvajalbrown`* — concentrated activity around plugin/hook developer-experience fixes.

---

## 📈 Feature Request Trends

- **Non-interrupting task continuation** — Message queue mode (#50246) is the standout; users want to queue follow-ups during long agent runs.
- **First-party IDE parity** — JetBrains (#47166) remains the largest open IDE-platform gap; VS Code extension hangs (#75571) suggest extension maturity still needs work.
- **Mode visibility & session continuity** — Login-expiration warnings, persistent mode badges (now in v2.1.203), and better handling of long-running background work.
- **Vim-mode ergonomics** — Double-ESC behavior, plan-mode interaction (#10621) signals an under-served power-user persona.
- **Localization & spell-check** — Recurring cluster (#68621, #72247, #60012, #66464) for `en-US` lock-in on Windows Desktop.
- **Subagent/Agent tool maturity** — Override loss on resume (#75565), zero-tool-call returns (#75542), and process-kill on auto-archive (#75548) all surface in the same 24h window.
- **Model-routing clarity** — Fable 5 / Opus 4.8 advisor failures (#73365, #67506, #75546) suggest users are confused about advisor vs. executor roles and cost.

---

## ⚠ Developer Pain Points

1. **TUI regressions between minor versions** — The tmux rendering regression (#74122) and the Agents view keyboard-input regression in v2.1.204 (#75521) demonstrate that even patch releases can break core CLI workflows. Users want clearer release notes around TUI changes and faster rollback.

2. **Background session fragility** — A cluster of issues (#75548 desktop auto-archive killing agents, #75571 VS Code extension 90-second hangs, #75542 subagent prompt-fragment returns, #75565 model override loss on resume) collectively point to background/agent lifecycle management being the most fragile surface area of Claude Code today.

3. **Cache invalidation & cost** — #75142 (mid-session tool load invalidates cache) and #67506 (Fable 5 token mismatch) both touch on opaque cost dynamics; developers building production pipelines need predictable billing and caching behavior.

4. **Hook & permission edge cases** — The SessionStart hook fix in v2.1.204, the UserPromptSubmit `decision:block reason` not shown in VS Code (#75534), and compound-command permission decomposition (#75549) all show the hooks/permissions layer remains rich but under-documented for plugin authors.

5. **Platform inconsistency** — Spell-check localization on Windows, `vfpext`/HCS missing on Win 11 Pro (#74649), `CLAUDE_CODE_GIT_BASH_PATH` not respected in Desktop (#75570), SSH 403 in Desktop only (#70520). Environment-specific behavior makes support difficult and is a leading source of duplicate reports.

---

*Digest compiled from anthropics/claude-code activity on 2026-07-08. All links point to issues/PRs on github.com.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-08

## Today's Highlights

- **rust-v0.143.0** ships with **remote plugins enabled by default** (npm marketplace, richer catalog rows, visible remote/local versions) and adds **macOS/Windows system proxy support** (including PAC) for auth and Responses API traffic.
- The community's most-watched thread is **#30364** (158 comments, 252 👍), which documents a suspicious **GPT-5.5 reasoning-token clustering pattern** at 516/1034/1552 boundaries that correlates with degraded quality on complex tasks.
- The ecosystem is being reshaped by an **extension-owned TurnItem architecture** (#31283, #31525, #31515) that decouples Core from feature-specific item schemas, plus a new **hosted code-mode default** (#31500) and **UUIDv7 item IDs** (#31524).

---

## Releases

### `rust-v0.143.0` ([release](https://github.com/openai/codex/releases/tag/rust-v0.143.0))
- **Remote plugins on by default**: richer catalog rows, npm marketplace sources, visible remote vs local versions ([#30297](https://github.com/openai/codex/pull/30297), [#26705](https://github.com/openai/codex/pull/26705), [#29375](https://github.com/openai/codex/pull/29375), [#30981](https://github.com/openai/codex/pull/30981)).
- **System proxy support on macOS/Windows** for Codex authentication and Responses API traffic, including PAC files.

### `rust-v0.143.0-alpha.39` ([release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.39))
- Pre-release cut of the 0.143.0 line; no changelog published in this drop.

---

## Hot Issues

1. **[#30364 — GPT-5.5 reasoning-token clustering at 516/1034/1552](https://github.com/openai/codex/issues/30364)** (158 💬, 252 👍)
   Aggregate evidence that GPT-5.5 `reasoning_output_tokens` disproportionately lands on fixed boundaries, correlated with reduced reasoning quality. The community wants model-side remediation, not just a workaround.

2. **[#28224 — SQLite feedback logs can write ~640 TB/year](https://github.com/openai/codex/issues/28224)** (139 💬, 426 👍)
   A landmark log-volume report. Three mitigating PRs have already shipped in 0.142.0 ([#29432](https://github.com/openai/codex/pull/29432), [#29457](https://github.com/openai/codex/pull/29457)), and [#31478](https://github.com/openai/codex/issues/31478) shows the residual TRACE write is still a concern on Windows.

3. **[#17827 — Customizable status line (TUI)](https://github.com/openai/codex/issues/17827)** (21 💬, 88 👍)
   Feature parity ask with Claude Code: a user-configured status bar (tokens, model, rate limits, git, etc.) driven by a shell script. High upvote ratio suggests broad demand.

4. **[#18993 — VS Code extension: cannot open past conversations](https://github.com/openai/codex/issues/18993)** (43 💬, 53 👍)
   Regression in extension 1.117.0 that broke session history loading. Closed, but the discussion still informs session-persistence UX improvements.

5. **[#28507 — "Selected model is at capacity" on Pro 5x](https://github.com/openai/codex/issues/28507)** (24 💬, 15 👍)
   Persistent capacity errors even for paying Pro 5x users; symptom of the broader rate-limit/clustering problems in #30364.

6. **[#29089 — `codex-windows-sandbox-setup.exe` not found](https://github.com/openai/codex/issues/29089)** (13 💬, 10 👍)
   Windows installer ships without the sandbox module, breaking sandboxed execution. Common Windows packaging bug class.

7. **[#24069 — Subagent regression with local Ollama in 0.133.0](https://github.com/openai/codex/issues/24069)** (6 💬, 5 👍)
   Native subagent spawning for local providers broke at 0.133.0; 0.132.0 still works. Important for the local-model and Ollama community.

8. **[#31499 — Windows app-server leaks MCP stdio pools (183 node.exe / 13 GB)](https://github.com/openai/codex/issues/31499)** (4 💬)
   Unreaped `cmd → npx → node.exe` trees on Windows; serious resource leak and stability risk.

9. **[#31504 — Request: LSP support for cross-file understanding](https://github.com/openai/codex/issues/31504)** (3 💬)
   Strong recurring theme: users want Codex to use language servers for symbols/refs to handle real-world codebases rather than scanning file-by-file.

10. **[#31517 — `tool_search_call.arguments` shipped as a JSON string, breaking Responses API](https://github.com/openai/codex/issues/31517)** (4 💬)
    Schema-correctness regression: tool-call arguments are being serialized as a string instead of a structured object, causing `invalid_type` errors downstream.

---

## Key PR Progress

1. **[#31526 — Restrict hosted threads to server-registered tools](https://github.com/openai/codex/pull/31526)**
   Introduces `server_registered_tools_only` plus an exact raw MCP allowlist, preventing Codex from auto-injecting native/hosted/extension/discovery tools when a client declares a fixed inventory. Important security/control boundary for hosted deployments.

2. **[#31460 — Centralize tool-approval routing](https://github.com/openai/codex/pull/31460)**
   Unifies PermissionRequest hooks, Guardian, and user review behind a single `ApprovalReviewer` resolution path. Strict auto-review now respects hook allow/deny.

3. **[#31295 — Cold-skill-load macrobenchmark](https://github.com/openai/codex/pull/31295)**
   Bazel/Divan end-to-end benchmark for cold remote skill discovery under realistic RPC latency. Closes a measurement gap now that remote plugins ship by default.

4. **[#31525 — Migrate standalone web search to extension-owned TurnItems](https://github.com/openai/codex/pull/31525)**
   Web search now flows through `ExtensionItem::WebSearch` → `TurnItem::Extension`, while app-server keeps a typed `ThreadItem::WebSearch`. Decouples Core from the search schema.

5. **[#30188 — Persist TurnItems for paginated thread rollouts](https://github.com/openai/codex/pull/30188)**
   New threads with `history_mode = "paginated"` will store `ItemCompleted(item)` events in JSONL; legacy threads keep the old event shape. Foundation for richer app-server history.

6. **[#31473 — Emit canonical review-mode items](https://github.com/openai/codex/pull/31473)**
   Replaces ad-hoc review markers with `TurnItem::EnteredReviewMode` / `TurnItem::ExitedReviewMode` lifecycle events emitted as `ItemStarted` / `ItemCompleted`.

7. **[#31500 — Code-mode hosted by default](https://github.com/openai/codex/pull/31500)**
   Promotes `code_mode_host` to stable and enables it by default; `features.code_mode_host = false` remains as an opt-out. Core code-mode tests now run through the standalone host.

8. **[#31503 — Detect pnpm-managed Codex installs](https://github.com/openai/codex/pull/31503)**
   The JS shim now distinguishes pnpm global installs from npm/Bun so `codex doctor` and update flows invoke the right package manager.

9. **[#31515 — Client-only web search result metadata](https://github.com/openai/codex/pull/31515)** (stacked on by [#31379](https://github.com/openai/codex/pull/31379), [#31516](https://github.com/openai/codex/pull/31516))
   Adds bounded URL/title/snippet metadata for client-facing `WebSearchItem`; persisted in rollouts and surfaced via app-server v2 + exec JSONL. Server-side producers stay empty in this PR.

10. **[#31357 — Route Windows CI build IO through Dev Drives](https://github.com/openai/codex/pull/31357)**
    A single `CI_BUILD_ROOT` lets Windows jobs exploit Dev Drives and gives Unix jobs a stable cache root. Expected to noticeably cut Windows CI wall time.

*Honorable mentions:* [#31524 UUIDv7 item IDs](https://github.com/openai/codex/pull/31524), [#31518 plugin install failure subtypes](https://github.com/openai/codex/pull/31518), [#31466 tool-search pipeline diagnostics in `/feedback`](https://github.com/openai/codex/pull/31466), [#28845 plugin agent roles](https://github.com/openai/codex/pull/28845), [#31482 plugin commands → skills migration](https://github.com/openai/codex/pull/31482), [#31516 standalone web search previews](https://github.com/openai/codex/pull/31516).

---

## Feature Request Trends

- **TUI/UX parity with Claude Code** — customizable status lines ([#17827](https://github.com/openai/codex/issues/17827)) is the clearest, most-upvoted ask of the cycle.
- **LSP-driven code understanding** — symbol/reference/hover awareness via language servers ([#31504](https://github.com/openai/codex/issues/31504)) is a recurring "Codex is file-scoped" complaint.
- **Notifications and ambient feedback** — VS Code extension completion notifications ([#31519](https://github.com/openai/codex/issues/31519)) and progress indicators ([#31233](https://github.com/openai/codex/issues/31233)) reflect demand for better "is it doing something?" signaling.
- **Plugin observability and trust UI** — per-hook names/descriptions in the trust dialog ([#31469](https://github.com/openai/codex/issues/31469)) and structured install-failure subtypes ([#31518](https://github.com/openai/codex/pull/31518)) are converging on a richer plugin admin story.
- **More reliable remote control** — multiple issues ([#26786](https://github.com/openai/codex/issues/26786), [#30637](https://github.com/openai/codex/issues/30637), [#24396](https://github.com/openai/codex/issues/24396), [#28919](https://github.com/openai/codex/issues/28919)) push the same direction: keep the relay alive, keep the device list visible, and don't require the desktop app to mediate mobile control.

---

## Developer Pain Points

- **Model quality and quota instability.** GPT-5.5 reasoning clusters ([#30364](https://github.com/openai/codex/issues/30364)), a perceived "5.5 → 5.3" regression ([#30137](https://github.com/openai/codex/issues/30137)), "trained until Jun-2024" complaints ([#315

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-08

## Today's Highlights

The v0.51.0 nightly release failed (#28308), blocking the latest tag while maintainers work through several **P1 agent reliability bugs** — most notably the generalist agent hanging (#21409, 8 👍) and subagents incorrectly reporting `GOAL success` after hitting `MAX_TURNS` (#22323). On the platform side, the **Caretaker Triage Worker** infrastructure is taking shape across three coordinated PRs (#28306, #28303, #28307), and a long-running push toward **component-level behavioral evals** continues via #24353.

---

## Releases

No new releases published in the last 24 hours. The most recent nightly run (v0.51.0-nightly.20260708.gc988cbb1e) failed — see #28308.

---

## Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after `MAX_TURNS` reported as `GOAL` success** (P1, agent) — A `codebase_investigator` subagent reports `status: "success"` even after exhausting its turn budget, hiding the actual interruption. 10 comments. |
| [#28052](https://github.com/google-gemini/gemini-cli/issues/28052) | **Trailing `.` in `antigravity.google` URL in error message** (P2, core, *good first issue*) — Auth-failure error contains a malformed URL with a stray period. Trivial fix, labeled for new contributors. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** (P1, agent) — Highest community engagement (8 👍). Defers to subagents that hang indefinitely on simple folder creation. Disabling subagents is the workaround. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** (P1, agent) — Strategic epic extending the 76 behavioral evals introduced in #15300; runs across 6 supported Gemini models. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** (P2, agent, feature) — Investigative epic to evaluate whether AST-aware tooling can cut token noise and reduce misaligned reads. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini does not use skills and sub-agents enough** (P2, agent) — Model only invokes custom skills/sub-agents when explicitly instructed, undermining discoverability. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command execution stuck on "Waiting input"** (P1, core) — CLI hangs after a simple command completes, showing the shell as active. 3 👍. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** (P1, agent) — Browser subagent terminates with `GOAL` reason on Wayland compositors; reproducibility environment narrowing. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** (P2, agent) — Sessions dismissed as low-signal never get marked processed and resurface repeatedly. |
| [#28308](https://github.com/google-gemini/gemini-cli/issues/28308) | **Nightly release failure v0.51.0-nightly.20260708** (P1, release-failure) — Blocks tonight's tag; linked to workflow run 28908759073. |

---

## Key PR Progress

| # | PR | What it does |
|---|----|---|
| [#28309](https://github.com/google-gemini/gemini-cli/pull/28309) | **Improve Markdown rendering for CJK text wrapping and `__bold__` syntax** — Refactors the line-by-line `<Box>` rendering to preserve CJK word boundaries and parse double-underscore bold. |
| [#28112](https://github.com/google-gemini/gemini-cli/pull/28112) | **SSRF protection for OAuth metadata discovery** (closed) — Closes a coverage gap vs. `web-fetch.ts` by adding `isLoopbackHost()` and `resolveAndValidateDns()` to MCP OAuth discovery. |
| [#28103](https://github.com/google-gemini/gemini-cli/pull/28103) | **Avoid keep-alive socket reuse during OAuth token exchange** (closed) — Works around CVE-2026-48931 "response queue poisoning" affecting Node 24.17.0 / 22.23.0 / 26.3.0. |
| [#28105](https://github.com/google-gemini/gemini-cli/pull/28105) | **Correct ellipsis logic in `EditTool.getDescription()`** (closed) — Off-by-one in the snippet preview truncation that produced misleading edit summaries. |
| [#28223](https://github.com/google-gemini/gemini-cli/pull/28223) | **Bypass LLM correction for `.json` and `.ipynb` in `write_file`/`replace`** — Stops the auto-corrector from corrupting structured files. |
| [#28224](https://github.com/google-gemini/gemini-cli/pull/28224) | **Don't split emoji when truncating display strings** — Replaces UTF-16-code-unit truncation in `sanitizeForDisplay` with grapheme-aware slicing. |
| [#28219](https://github.com/google-gemini/gemini-cli/pull/28219) | **Parse commented `settings.json` in memory bootstrap** — The lightweight CLI parent now handles comment-bearing config instead of silently falling back to defaults. |
| [#28306](https://github.com/google-gemini/gemini-cli/pull/28306) | **Caretaker Triage: main worker loop + egress publisher** — Implements `main.py` and `utils/egress.py` for the Cloud Run Job, with a stubbed LLM orchestrator. |
| [#28304](https://github.com/google-gemini/gemini-cli/pull/28304) | **Show clear message when account has no Code Assist tier** (P1) — Replaces the raw `User does not have a current tier` backend error in `/privacy` with an actionable explanation for Workspace/enterprise users. |
| [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) | **Tool call formatter + failure summaries for behavioral evals** — Adds a numbered tool-call timeline with args, status, and error details to eval failure output. |

Other notable closed PRs: [#28303](https://github.com/google-gemini/gemini-cli/pull/28303) Octokit GitHub action handler, [#28307](https://github.com/google-gemini/gemini-cli/pull/28307) LLM triage orchestrator + container build, [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) strip thoughts from scrubbed history (fixes thought-leakage loops), [#28216](https://github.com/google-gemini/gemini-cli/pull/28216) exclude `gha-creds-*.json` from workspace context.

---

## Feature Request Trends

1. **Subagent maturity** — Visibility, control, and reliability are converging as a theme: subagent trajectory sharing via `/chat share` (#22598), bug report context for subagents (#21763), permission gating for subagents (#22093), and "self-awareness" of CLI flags (#21432).
2. **AST-aware toolchain** — A coordinated epic (#22745, #22746) exploring AST-based file reads, search, and codebase mapping, with `tilth`/`glyph` as candidate libraries.
3. **Eval infrastructure expansion** — Coverage reporting (#28169), failure timeline diagnostics (#28305), and component-level evals (#24353) point to a substantial investment in regression testing.
4. **Browser agent resilience** — Persistent-session lock recovery and automatic takeover (#22232) plus settings.json override support (#22267).
5. **Auto Memory hardening** — Inbox validation/quarantine (#26523), deterministic secret redaction (#26525), and low-signal retry suppression (#26522) all opened together as a coordinated track.
6. **Privacy/UX polish** — Cleaner messaging for users without a Code Assist tier (#28304) and destructive-action guardrails (#22672).

---

## Developer Pain Points

- **Subagent hangs and misreporting** — The generalist agent hanging indefinitely (#21409) and subagents lying about `GOAL` success after `MAX_TURNS` (#22323) are the two highest-impact reliability complaints this cycle.
- **Subagent opt-in regression** — After v0.33.0, subagents activate even when disabled in config (#22093), breaking MCP-only workflows.
- **Skill/sub-agent discoverability** — Models rarely invoke declared skills or sub-agents without explicit prompting (#21968), wasting user-authored configuration.
- **Shell interactivity broken** — Commands finishing normally leave the prompt stuck on "Waiting input" (#25166), and interactive scaffolders like `create-vite` deadlock (#22465).
- **Tool-count cliff** — Exceeding ~128–400 tools causes a hard 400 error with no graceful degradation (#24246).
- **Tool output corruption** — `write_file`/`replace` mangles `.ipynb` and `.json` until the LLM-correction bypass lands (#28223); edit summary ellipsis is also off (#28105).
- **Eval suite flakiness** — The steering eval had to be commented out (#23313), motivating the new coverage (#28169) and failure-timeline (#28305) tooling.
- **CI/release friction** — A failed nightly (#28308) plus the Node CVE-2026-48931 workarounds (#28103) show ongoing release-pipeline instability.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI — Community Digest
**Date:** 2026-07-08

---

## 1. Today's Highlights

The v1.0.69 release continues Copilot CLI's investment in sandboxing and plugin governance, introducing `/plugins` management, a refined **sandbox policy** badge replacing `(sandboxed)`, and one-time sandbox bypass for built-in file edits and `web_fetch`. At the same time, the community is wrestling with a wave of integration friction — particularly around MCP server lifecycle, plugin-installed skills not being routable, and `/resume` failing on non-git sessions — suggesting these surface areas need hardening before they become more prominent in the docs.

---

## 2. Releases

### v1.0.69 — 2026-07-07
- Label built-in file edits with a **(sandbox policy)** badge (more accurate: best-effort policy compliance, not OS sandbox enforcement).
- **Reload installed plugin extensions** without restarting the session.
- New **`/plugins` dashboard** for management.

### v1.0.69-3 — 2026-07-07
- Built-in file edits can **bypass the sandbox after user approval**.
- `web_fetch` now **respects the active sandbox network policy**, with an opt-in `sandbox.allowBypass` allowing a one-time bypass from the fetch prompt.

> Release notes: [github/copilot-cli releases](https://github.com/github/copilot-cli/releases)

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| [#53](https://github.com/github/copilot-cli/issues/53) | **Bring back the GitHub Copilot CLI commands to not break workflows** | Long-standing community pain point — **75 👍 / 37 💬**. After 6+ months of silence, users have started forking alternatives (e.g. `shell-ai`). Reflects high tension over breaking-change ergonomics. |
| [#4053](https://github.com/github/copilot-cli/issues/4053) | **TUI hangs at "Loading: N skills" on NFS/GPFS** | A SIGCHLD race when Tokio spawns `which gh` with 30+ threads freezes startup indefinitely — a serious stability bug on shared filesystems. |
| [#4054](https://github.com/github/copilot-cli/issues/4054) | **`/resume` broken for all non-git sessions** | Critical catch-22 — sessions outside a git repo store `repository = '/'` and become un-selectable in the resume picker. |
| [#3954](https://github.com/github/copilot-cli/issues/3954) | **`explore` tool hardcodes `gpt-5.4-mini`** | Breaks any DeepSeek / custom-API configuration introduced after v1.0.65, undermining BYOK workflows. |
| [#4038](https://github.com/github/copilot-cli/issues/4038) | **Non-interactive mode: late-connecting MCP server injects an empty user message** | With 7+ MCP tools, the model answers an empty turn / echoes the system prompt instead of the real prompt — breaks scripted `-p` usage. |
| [#4049](https://github.com/github/copilot-cli/issues/4049) | **Docker stdio MCP servers duplicated on `/new` and `/resume`** (v1.0.68) | Resource leak — duplicate `docker run` clients pile up within the same process lifetime; affects any heavy MCP config. |
| [#4048](https://github.com/github/copilot-cli/issues/4048) | **Repo-level plugin skills not invocable as slash commands** | Auto-installed plugins (`.github/copilot/settings.json`) fail to surface skills in `/skills` despite being discoverable via natural language — inconsistent routing. |
| [#4039](https://github.com/github/copilot-cli/issues/4039) | **Enterprise-managed plugin marked installed but never synced to disk** | `managed-settings.json` → `config.json` is updated but no files are actually downloaded; breaks enterprise plugin rollout. |
| [#3604](https://github.com/github/copilot-cli/issues/3604) | **Copilot rewrites Windows-1252 files to UTF-8 on edit** | Data-integrity issue for legacy / non-UTF-8 codebases; no prompt can prevent it. |
| [#2643](https://github.com/github/copilot-cli/issues/2643) | **`preToolUse` silent command rewrite shows confirmation anyway** | No way for a hook to silently rewrite a command with `permissionDecision: allow` — blocks automation use cases. |

---

## 4. Key PR Progress

Only **2 PRs** were updated in the last 24h, and both lack meaningful descriptions:

| # | PR | Status |
|---|----|--------|
| [#4057](https://github.com/github/copilot-cli/pull/4057) | **Install** — no description provided | Open |
| [#3708](https://github.com/github/copilot-cli/pull/3708) | **Add files via upload** — no description provided | Open |

> *Light PR volume today suggests the team's bandwidth is on cuts preceding v1.0.69 / working through the issue triage queue rather than feature merges.*

---

## 5. Feature Request Trends

- **Better plugin governance & DX** — `#4056` (project-scoped extension canvases not routable via `open_canvas`), `#4048` (repo-level skills routing), `#4042` (interactive `${input:...}` for plugin MCP configs), `#4039` (enterprise-managed plugin sync), `#4044` (branch-prefix control for `create_project/create_session`).
- **BYOK / Custom-model parity across surfaces** — `#3954` (`explore` ignores custom model), `#4037` (BYOK in ACP server mode for JetBrains integration).
- **MCP lifecycle and reliability** — `#4038` (non-interactive empty-turn), `#4049` (duplicate stdio clients), `#3440` (closed: `session.disconnect()` not killing MCP subprocesses).
- **Sandbox hardening** — `#4041` (`web_fetch` IPv4 failures), `#4046` (cross-platform sandbox stability docs), `#4036` (notification suppression on macOS focus rules), aligned with v1.0.69's new policies.
- **Terminal & input ergonomics** — `#4050` (Ctrl-G for long freeform answers), `#4043` (model picker obscured by statusline), `#4045` (Ctrl-V paste debounce), `#4051` (input-field ghost text in iTerm2).

---

## 6. Developer Pain Points

- **State & session lifecycle are brittle.** `/resume` cannot recover non-git sessions (`#4054`); `/research` cannot save artifacts (`#3123`); `/delegate` ignores branch hints (`#2729`); custom-agent selection reverts mid-session (`#4047`).
- **MCP integration is the leading source of instability.** Three of the most recent triaged bugs (resource leaks, empty-turn injection, silent hangs) all involve MCP server handshake/teardown issues.
- **Sandbox and networking still need love.** The new network-policy feature in 1.0.69 is already surfacing edge-case failures (e.g. `TypeError: fetch failed` on IPv4-only hosts in `#4041`).
- **Encoding and file-content fidelity are not first-class.** Windows-1252 → UTF-8 silent rewrite (`#3604`) breaks real codebases.
- **Plugin routing layer is half-built.** Skills exist in the runtime but aren't reachable through expected UX (slash commands, dashboards), and enterprise policy ≠ on-disk reality (`#4039`).
- **Notifications / UI ergonomics regress in real environments** — desktop notifications (`#4036`), paste debouncing (`#4045`), model picker (`#4043`), ghost text (`#4051`).
- **Long-running community trust issue on breaking changes** (`#53`) — the most-reacted open issue, with the ecosystem already forking (`shell-ai`). A clear deprecation/migration policy would meaningfully de-risk adoption.

---

*Digest generated from data scraped at github.com/github/copilot-cli on 2026-07-08.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-08

## 1. Today's Highlights

Activity on the `MoonshotAI/kimi-cli` repository was minimal in the last 24 hours, with **no new releases, no open or merged pull requests, and only a single issue updated**. The lone signal is continued community interest in expanding Kimi CLI's tool ecosystem, specifically around integrating Figma's MCP server for design-aware workflows. The low volume suggests a quiet maintenance period rather than active development momentum.

---

## 2. Releases

**No new releases in the last 24 hours.**

The latest tagged version is not reflected in today's data. Subscribers should check the [releases page](https://github.com/MoonshotAI/kimi-cli/releases) directly for the most recent cut.

---

## 3. Hot Issues

> ⚠️ **Data limitation note:** Only **1 issue** was updated in the last 24 hours. The full repository likely contains far more, but today's snapshot surfaces only the following:

### #1604 — [Enhancement] Figma MCP Support
- **Author:** maoxian-1 | **Created:** 2026-03-27 | **Updated:** 2026-07-07
- **Reactions:** 👍 2 | **Comments:** 1
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/1604
- **Why it matters:** The user requests first-class support for [Figma's MCP catalog](https://www.figma.com/mcp-catalog/), pointing out that Figma's MCP currently requires pre-registration before it can be used. With Figma becoming a standard tool in product/design workflows, native MCP integration would let developers query design tokens, components, and layout specs directly from the terminal — eliminating context-switching into the Figma desktop app. The 2 👍 reactions and active maintainer comment thread indicate early traction and feasibility discussion.

> *For a broader view of trending issues, please visit the full [Issues list](https://github.com/MoonshotAI/kimi-cli/issues).*

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours.**

The open PR queue is empty in today's snapshot. Recent merged work is not represented in this digest window — check the [Pull Requests page](https://github.com/MoonshotAI/kimi-cli/pulls) for backlog context.

---

## 5. Feature Request Trends

From the available data, the dominant signal is:

- **🔌 Broader MCP server interoperability** — The single issue surfaces a clear pain point: third-party MCP servers (such as Figma's) require manual pre-registration before Kimi CLI can consume them. Users want a more plug-and-play experience for connecting Kimi to external design, project management, and productivity tools. A unified registration flow or a curated MCP catalog within Kimi CLI would be a meaningful direction.

Given the limited issue volume, broader trend analysis (e.g., telemetry, refactoring, error handling) cannot be reliably extracted from today's snapshot alone.

---

## 6. Developer Pain Points

Based on the single surfaced item, the recurring friction points are:

1. **Manual MCP server registration** — Users hit friction when adding well-known MCP servers (Figma, etc.) and must complete pre-registration steps outside of Kimi CLI before tools become available.
2. **Limited out-of-the-box integrations** — The implicit ask is for richer default integrations with popular SaaS tools, reducing setup overhead for design and product workflows.
3. **Discovery gap** — Even where MCP support exists, users report difficulty discovering which servers are compatible or how to wire them up cleanly.

> *These observations are drawn from a single-issue sample and should be revisited once a larger issue window is available.*

---

### 📌 Summary
Today's digest is intentionally conservative — the data window shows a quiet period with one active thread on Figma MCP support and no code-side movement. For a complete picture of Kimi CLI's development velocity, cross-reference with the full [issues](https://github.com/MoonshotAI/kimi-cli/issues) and [PRs](https://github.com/MoonshotAI/kimi-cli/pulls) lists, as well as historical commit activity on `main`.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-08

## 1. Today's Highlights

OpenCode shipped **v1.17.15**, which tightens Z.ai context-overflow classification, hardens config-directory reads, and restores model detail tooltips in the desktop picker. Activity is dominated by **V2 (next-gen) engine prep**: PDF input lowering, plugin `Tool` domain, skill discovery from `.agents/`, and normalized model capabilities all moved forward in parallel. Meanwhile a **critical Windows stability bug** surfaced — Bun panics and ~43 GB memory growth after long sessions — that the team will likely need to address quickly.

## 2. Releases

**v1.17.15** ([release notes](https://github.com/anomalyco/opencode))
- **Core / Bugfixes**
  - Better classification of Z.ai context-window overflow errors so oversized requests surface the right failure mode (credit: @fengjikui).
  - Gracefully handle unavailable config directories when reading config files.
- **Desktop / Improvements**
  - Restored model details tooltips in the model picker.

## 3. Hot Issues

1. **#6680 — [Feature] View archived sessions on desktop** ([link](https://github.com/anomalyco/opencode/issues/6680))  
   22 👍 / 35 comments — long-standing UX request to expose archived sessions via the sidebar `...` menu and modal. Highest community traction of the day.

2. **#35847 — Bun panic + severe memory leak after ~12h session on Windows 11** ([link](https://github.com/anomalyco/opencode/issues/35847))  
   `opencode 1.17.14` crashes with `Illegal instruction` after RSS hits ~43 GB and system memory at 94%. Critical stability regression that should be triaged ahead of any feature work.

3. **#35846 — Session list crashes with `Unexpected error` when `limit >= 19`** ([link](https://github.com/anomalyco/opencode/issues/35846))  
   Reproducible only when another OpenCode instance is running — points to a DB/file-locking race that affects power users with many sessions.

4. **#35859 — Option to disable built-in `CopilotAuthPlugin`** ([link](https://github.com/anomalyco/opencode/issues/35859))  
   On Windows, users get a GitHub OAuth popup on every launch because the plugin is compiled in as `INTERNAL_PLUGIN`. Strong contributor-friendly ergonomics concern.

5. **#35863 — Context window hardcoded to 200k for many models** ([link](https://github.com/anomalyco/opencode/issues/35863))  
   `models.generated.js` snapshots override real provider metadata, causing premature auto-compaction and bogus overflow checks. Affects correctness across providers.

6. **#35851 — Deleting/re-adding a project reuses a stale worktree** ([link](https://github.com/anomalyco/opencode/issues/35851))  
   Desktop reuses an existing DB record on re-add at a new path, polluting sandboxes. Notable data-integrity regression.

7. **#27871 — Empty bash tool arguments `{}` still submit and interrupt session** ([link](https://github.com/anomalyco/opencode/issues/27871))  
   Persists on `1.15.2`. Classic "abort-tool" family bug — still surfaces in production sessions.

8. **#35865 — Update visible xAI branding to SpaceXAI** ([link](https://github.com/anomalyco/opencode/issues/35865))  
   Lightweight but visible across provider labels, OAuth methods, and model catalog — already has a paired docs PR (#35866).

9. **#34410 — Support `@` and `/` skill invocation in the TUI prompt** ([link](https://github.com/anomalyco/opencode/issues/34410))  
   Aligns with the V2 skill-discovery push; #35864 adds `.agents/skills/` loading, so this will likely ship together.

10. **#35843 — Run a Matrix (or similar) server for those who left Discord** ([link](https://github.com/anomalyco/opencode/issues/35843))  
    Signals community appetite to diversify off Discord following recent platform concerns — worth a maintainer policy call.

## 4. Key PR Progress

1. **#35311 — fix(core): Multiple clones of same repo are different projects** ([PR](https://github.com/anomalyco/opencode/pull/35311))  
   Closes **16 duplicate issues** at once (worktree identity, sandbox reuse). High-leverage refactor.

2. **#35869 — feat(plugin): add Tool domain to v2 plugin API** ([PR](https://github.com/anomalyco/opencode/pull/35869))  
   `PluginContext.tool.transform()` lets v2 plugins register/unregister tools — closes the gap with v1 plugin semantics.

3. **#31351 — feat(opencode): OAuth for Azure via MS Entra ID + az CLI** ([PR](https://github.com/anomalyco/opencode/pull/31351))  
   Adds a real auth flow for Azure / Azure Cognitive Services providers; unblocks enterprise users.

4. **#35848 — fix(core): normalize model input capabilities** ([PR](https://github.com/anomalyco/opencode/pull/35848))  
   Defaults missing capability metadata, translates legacy `attachment` keys, and filters unsupported media before requests — pairs with #35863.

5. **#35862 — fix(llm): support PDF input in native OpenAI and Anthropic routes** ([PR](https://github.com/anomalyco/opencode/pull/35862))  
   V2 advertises `pdf` input but native lowering rejected it; this unblocks PDF flows on the two flagship providers.

6. **#35864 — V2: load skills from `.agents` directories** ([PR](https://github.com/anomalyco/opencode/pull/35864))  
   Keeps cross-agent skills working without forcing users to relocate them under `.opencode/skills/`.

7. **#9545 — feat(usage): unified usage tracking with auth refresh** ([PR](https://github.com/anomalyco/opencode/pull/9545))  
   Built-in usage tracking for four OAuth-authenticated providers; supersedes two prior attempts.

8. **#8535 — feat(session): bidirectional cursor-based pagination** ([PR](https://github.com/anomalyco/opencode/pull/8535))  
   Touches server, app, TUI, and `HttpApi` routes — foundational for large-session UX.

9. **#33465 — feat: add `--no-open` flag to `opencode web`** ([PR](https://github.com/anomalyco/opencode/pull/33465))  
   Small but frequently requested: stop the auto-launch when running headless / over SSH.

10. **#35867 — fix(skill): correct MCP local server `env` → `environment`** ([PR](https://github.com/anomalyco/opencode/pull/35867))  
    Closes #35860 where the built-in `customize-opencode` skill example mismatched the runtime schema.

## 5. Feature Request Trends

- **Skill ecosystem maturity** — multiple parallel asks converge on the same area: discoverable skills in TUI (`/` and `@` triggers), autocomplete with `source === "skill"` no longer filtered (#35854, #34410), `.agents/skills/` support (#35864), and `customize-opencode` example fixes (#35860).
- **Provider/auth flexibility** — disable noisy OAuth plugins (#35859), Azure/Entra sign-in (#31351), auto-fetch custom model IDs from `/v1/models` (#35855), LiteLLM proxy parity (#35852).
- **V2 capability surface** — PDF input lowering (#35862), dynamic context-window resolution (#35863, #35848), `Tool` domain for v2 plugins (#35869).
- **Desktop session UX** — archived-session viewer (#6680, 22 👍), restored plan-mode button (#34891), correct file routing when duplicate names exist across paths (#35834), fresh worktree on project re-add (#35851).
- **Rebranding & docs polish** — xAI → SpaceXAI (#35865/#35866), Brazilian Portuguese parity (#35836), Korean README refinement (#34741), Vestige as MCP memory example (#35853).
- **Community infra** — Matrix/Element server to de-risk from Discord (#35843).

## 6. Developer Pain Points

- **Windows instability** is the loudest theme: long-session Bun panics with multi-tens-of-GB memory growth (#35847), command-palette first-open flash (#35858), Ctrl+V / Shift+Insert paste failures (#26283), and a "hangs for no reason" report (#35868).
- **Stale state on the desktop** — sandbox/worktree reuse after project delete-and-re-add (#35851), wrong file served when duplicate names exist (#35834), and race conditions when multiple instances run (#35846).
- **Intrusive auth flows** — GitHub OAuth popups on every start because `CopilotAuthPlugin` is compiled-in and un-disableable (#35859); no `--no-open` for the web command (#33465).
- **Hardcoded model metadata** — static context windows (#35863) and brittle capability tables force wrong compactions; #35848 starts fixing this but it's a recurring frustration.
- **Docs-vs-runtime drift** — `env` vs `environment` mismatch in the built-in skill example (#35860) is a recurring class of bug where shipped prompts don't match the schema.
- **Provider compatibility edge cases** — LiteLLM dropping `model` on tool-call follow-ups (#35852), Z.ai context-overflow misclassification (fixed in v1.17.15), OpenAI Responses opaque stream errors after model switch (#35807, closed).
- **TUI discoverability** — skills intentionally hidden from autocomplete, `@` invocation not supported (#35854, #34410); both small changes but reported by multiple users.

---
*Digest generated from GitHub activity on `anomalyco/opencode` for 2026-07-08. Numbers reflect the data provided for the 24h window; trending items may have older `created_at` dates.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-08

## Today's Highlights

The Pi ecosystem saw intense activity in the past 24 hours, with **24+ issues updated** and **20+ PRs** either merged or progressed — dominated by extension API expansion and provider-integration fixes. The team closed several longstanding issues around TUI stability (#6169, #6026, #5846, #5913) and unlocked more extension surfaces (image resizing, tool definitions, CLI parser). Notable provider-related bugs surfaced around **Azure OpenAI Responses** (#6409), **Gemini multi-turn tool calls via proxy** (#6414), and **Kimi-K2.7 via DeepInfra** (#6399).

---

## Releases

*No new releases in the last 24h.* The latest published version referenced in issues remains **0.83.0**.

---

## Hot Issues

1. **[#3896](https://github.com/earendil-works/pi/issues/3896) — TUI cursor stays active when terminal loses focus** *(CLOSED, 👍7)* — A highly upvoted UX bug where the prompt cursor remains a filled block after window blur. Resolved for parity with Codex CLI.

2. **[#6206](https://github.com/earendil-works/pi/issues/6206) — Clamping to context window prevents artificial limits** *(OPEN)* — A previous fix for #5595 introduced new behavior clamping `max_tokens` to the context window, conflating two distinct concepts. Affects users hitting artificial output ceilings.

3. **[#6210](https://github.com/earendil-works/pi/issues/6210) — `/scoped-models` cannot select bracketed model IDs** *(OPEN)* — Custom model IDs containing brackets (e.g. `custom/bracketed-model[1m]`) fail pattern matching. Pattern parsing bug.

4. **[#6378](https://github.com/earendil-works/pi/issues/6378) — Token overflow 400 with no recovery path** *(OPEN)* — When context + tool input exceeds endpoint limits (262k+ tokens), Pi surfaces a raw provider error with no guidance to use the context-compression plugin suggested in the message.

5. **[#6367](https://github.com/earendil-works/pi/issues/6367) — `modelOverrides` ignored on extension-registered providers** *(OPEN)* — `thinkingLevelMap` from `~/.pi/agent/models.json` doesn't reach providers registered via `pi.registerProvider`. Shift+tab cycling broken for custom providers.

6. **[#6326](https://github.com/earendil-works/pi/issues/6326) — `custom_message` entries bypass compaction budgeting** *(OPEN)* — Custom messages participate in LLM context but skip the `keepRecentTokens` budget, leading to inflated contexts after compaction.

7. **[#6409](https://github.com/earendil-works/pi/issues/6409) — Azure OpenAI Responses `store:false` reasoning replay 400s** *(CLOSED, untriaged)* — Bare `rs_…` reasoning IDs aren't persisted; multi-turn fails with `Item with id 'rs_...' not found`. Encrypted-content backfill missing for store:false mode.

8. **[#6414](https://github.com/earendil-works/pi/issues/6414) — `streamProxy` drops `ToolCall.thoughtSignature`** *(CLOSED, untriaged)* — Gemini runs through a `streamSimple`-backend proxy fail on second-turn tool calls with `Function call is missing a thought_signature`. `streamProxy` strips the field.

9. **[#6399](https://github.com/earendil-works/pi/issues/6399) — Kimi-K2.7 via DeepInfra corrupted output** *(CLOSED, untriaged)* — Trivial prompts return corrupted output only when routed through Pi's custom DeepInfra provider; direct DeepInfra calls succeed. Indicates a provider-format mishandling.

10. **[#6408](https://github.com/earendil-works/pi/issues/6408) — Coding agent fails to locate global skills** *(CLOSED, untriaged)* — `[skill] abcde` lookup hits project-local `.agents/skills/abcde/SKILL.md` with ENOENT despite a valid global path existing. Path-resolution ordering bug.

*Honorable mentions*: [#5501](https://github.com/earendil-works/pi/issues/5501) (schema relaxation for `edits[]`), [#6395](https://github.com/earendil-works/pi/issues/6395) (README drift), [#6415](https://github.com/earendil-works/pi/issues/6415) (`lastChangelogVersion` cluttering dotfile-tracked configs).

---

## Key PR Progress

1. **[#6413](https://github.com/earendil-works/pi/pull/6413) — feat(coding-agent): show git info in local version** *(OPEN)* — Closes #6412. Surfaces git commit/branch/tag when running pi directly from the repo, addressing the long-standing "what commit am I on?" pain for git-based installs.

2. **[#6169](https://github.com/earendil-works/pi/pull/6169) — Disable padding for assistant messages** *(CLOSED)* — Closes #6168. Tightens assistant-message spacing, likely improving diff readability and token efficiency.

3. **[#6026](https://github.com/earendil-works/pi/pull/6026) — fix(tui): stabilize working status row** *(CLOSED)* — Continues the TUI rendering stability effort (ref #5825), reducing flicker on the working status row.

4. **[#5846](https://github.com/earendil-works/pi/pull/5846) — fix(tui): stabilize streaming code fence rendering** *(CLOSED)* — Another piece of the streaming markdown work; closes #5825.

5. **[#5913](https://github.com/earendil-works/pi/pull/5913) — Stable markdown working** *(CLOSED)* — Companion fix for streaming markdown stability.

6. **[#5306](https://github.com/earendil-works/pi/pull/5306) — Add system prompt options to extension commands** *(CLOSED)* — Closes #5305; gives extensions a first-class way to inject system prompts for slash commands.

7. **[#5085](https://github.com/earendil-works/pi/pull/5085) — Expose full tool definitions from `getAllTools`** *(CLOSED)* — Preferred path over #4954; gives extensions a read-only copy of full tool definitions for building tools like the author's `/tool` command.

8. **[#6175](https://github.com/earendil-works/pi/pull/6175) — fix(coding-agent): emit session name changes to extensions** *(CLOSED)* — Closes #6174; extensions can now react to session rename events.

9. **[#6030](https://github.com/earendil-works/pi/pull/6030) — fix(coding-agent): print benchmark timings after TUI stop** *(CLOSED)* — Closes #6029; ensures benchmark output isn't swallowed by the TUI shutdown.

10. **[#4775](https://github.com/earendil-works/pi/pull/4775) — Export image resize utilities** *(CLOSED)* — Exposes `resizeImage` (and related helpers) for extensions, enabling custom tools that need image preprocessing.

*Also notable*: [#5708](https://github.com/earendil-works/pi/pull/5708) (wrap question extension text instead of truncating), [#5711](https://github.com/earendil-works/pi/pull/5711) (extension prompt guideline API), [#6063](https://github.com/earendil-works/pi/pull/6063) (extension stats), [#5379](https://github.com/earendil-works/pi/pull/5379) (absolute-path user-scoped local installs).

---

## Feature Request Trends

- **Provider ecosystem expansion** — Requests for first-class support of Eden AI (#6403) and robust handling of Azure OpenAI Responses (#6409), plus a recurring desire to add more providers via OpenAI-compatible gateways.
- **Extension API surface growth** — A clear push to make `main()` and `SettingsManager` more configurable (#6398), accept inline settings factories, expose more utilities (image resize #4775, edit-diff #5756, CLI parser #5202, config dirname #5869), and support opaque metadata in JSONL session headers (#6402).
- **White-labeling & SDK embedders** — `done-agent` (#6411) wants `MainOptions.appName` to override `APP_NAME` at runtime, signaling more downstream products wrapping pi in-process.
- **Session UX** — Spawning "no-session" mode even when `pi -r` is set (#6401), strict `--session-id` validation (#6407), and run-as-git displaying version info (#6412/#6413).
- **Config hygiene for dotfile trackers** — Moving `lastChangelogVersion` out of the main config (#6415) to ease syncing across machines.

---

## Developer Pain Points

- **Provider-spec drift & proxy edge cases** — Multiple issues trace back to providers returning features (thoughtSignature, encrypted reasoning items, `instructions`) that Pi's normalization or streaming layers don't preserve. Recurring themes: Gemini proxy drops (#6414), Azure `store:false` (#6409), Kimi-K2.7 corruption (#6399), openai-responses `instructions` cache miss (#6240).
- **Context window clamping conflated with `max_tokens`** — The #6206 follow-up shows users being silently capped on output even when their context is fine.
- **Read-only / locked config dirs break reads** — #6406 surfaces that Pi creates lock files on read paths, breaking users on read-only disks (and surprising anyone tracking configs in git).
- **Documentation drift** — #6395 (README vs source for `/reload`) and #6404 (shell-alias snippet breaking on multi-line aliases) both caused by docs lagging code.
- **Extension discovery & location mismatch** — #6400 reports that documented extension install paths don't match where npm/git actually installs them, which cascades into LLM-assisted debugging failures.
- **Hidden auto-retry behavior** — #6410 flags that `agent_end` with `willRetry: true` is emitted as a terminal event, causing downstream UIs to flash a "done" state during transient retries.
- **Custom provider feature gaps** — `modelOverrides` and related config not reaching extension providers (#6367) plus `custom_message` bypassing compaction budgeting (#6326) create asymmetric UX between built-in and extension providers.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-08

## Today's Highlights

Qwen Code shipped **v0.19.7 stable** with hardened PR triage gates (batch detection, problem-existence checks, red-flag patterns), alongside the docs update promoting **WeCom to a first-class channel**. Development velocity is high: 50 PRs touched in 24h, with concentrated work on **multi-workspace daemons, subagent safety (loop detection + working-dir pinning), SDK parity** (Python/TS), and **web-shell UX restoration**.

## Releases

- **[v0.19.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.7)** — Stable. Adds a stronger PR-triage gate (batch detection, problem-existence check, red-flag pattern) by @pomelo-nwu in [#5723](https://github.com/QwenLM/qwen-code/pull/5723), plus a new review flow ([#5723 feat part]).
- **[v0.19.6-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6-preview.0)** — Preview channel. Only change: docs(channels) — adds WeCom to the channels overview ([#6490](https://github.com/QwenLM/qwen-code/pull/6490)).
- **[v0.19.7-nightly.20260708.394c1a289](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.7-nightly.20260708.394c1a289)** — Nightly, mirrors the WeCom channel doc update.

## Hot Issues

1. **[#6505](https://github.com/QwenLM/qwen-code/issues/6505) — Subagent reasoning loop can repeat identical tool calls indefinitely** *(OPEN, P2, multi-agent roadmap)*. A built-in search/exploration subagent got stuck calling the same tool with the same arguments; main-agent `LoopDetectionService` doesn't cover the subagent path. Critical for roadmap/multi-agent stability.
2. **[#6501](https://github.com/QwenLM/qwen-code/issues/6501) — Session history silently truncated when `parentUuid` chain has a missing link** *(OPEN, P2, session-management, welcome-pr)*. A partial/failed JSONL write causes `SessionService.reconstructHistory` to drop everything beyond the gap — a data-integrity red flag.
3. **[#6512](https://github.com/QwenLM/qwen-code/issues/6512) — Status line shows the fast model after a background subagent runs** *(OPEN, P2)*. UI bug where the model display name doesn't restore after subagent context shifts back.
4. **[#6507](https://github.com/QwenLM/qwen-code/issues/6507) — Deferred IDE startup shows stale "failed" state after late connection success** *(OPEN, P2)*. The internal IDE client can be initialized post-timeout, contradicting the UI surface.
5. **[#6503](https://github.com/QwenLM/qwen-code/issues/6503) — Slash completion: recent usage overrides name-vs-alias ranking after `/clear`** *(OPEN, P2)*. Regression of the fix in [#5577](https://github.com/QwenLM/qwen-code/pull/5577); `/re` then offers `/clear` (via `reset` alias) before `/resume`.
6. **[#6496](https://github.com/QwenLM/qwen-code/issues/6496) — Show permission/approval mode badge in footer for all modes** *(CLOSED, welcome-pr)*. UI clarity ask: default `ApprovalMode` currently shows no indicator at all.
7. **[#4278](https://github.com/QwenLM/qwen-code/issues/4278) — Task interrupted, doesn't auto-resume** *(CLOSED)*. On v0.15.11 a running task was abandoned with no continuation.
8. **[#3845](https://github.com/QwenLM/qwen-code/issues/3845) — Failed install ("Cannot find module")** *(CLOSED, 👍2)*. Windows `install-qwen.bat` fails on a missing module — recurring install-script regressions.
9. **[#2757](https://github.com/QwenLM/qwen-code/issues/2757) — Git commit message generation/push errors on 0.13.2** *(CLOSED)*. Long-tail v0.13.x bug, still being triaged months later.

## Key PR Progress

1. **[#6514](https://github.com/QwenLM/qwen-code/pull/6514) — fix(cli): keep status line on session model** *(yiliang114)*. Pins the status-line model display to the active session model even when auxiliary work scopes the content generator to a fast model — directly addresses [#6512](https://github.com/QwenLM/qwen-code/issues/6512).
2. **[#6502](https://github.com/QwenLM/qwen-code/pull/6502) — fix(session): bridge broken `parentUuid` chains instead of truncating** *(doudouOUC)*. Reworks `SessionService.reconstructHistory` to detect missing links and splice rather than silently drop — fixes [#6501](https://github.com/QwenLM/qwen-code/issues/6501).
3. **[#6456](https://github.com/QwenLM/qwen-code/pull/6456) — feat(core): `working_dir` for Agent tool, pin subagents to an existing worktree** *(wenshao)*. Opt-in parameter that locks a sub-agent's file and shell tools to a caller-owned git worktree. Strong sandbox/scope story for multi-agent usage.
4. **[#6511](https://github.com/QwenLM/qwen-code/pull/6511) — feat(cli): multi-workspace session routing (Phase 2a)** *(doudouOUC)*. `qwen serve` multi-workspace mode boots distinct explicit workspaces as registered runtimes; legacy workspace-less APIs preserved.
5. **[#6491](https://github.com/QwenLM/qwen-code/pull/6491) — feat(sdk): 11 new transport/query options in both Python and TS SDKs** *(juhuan)*. Additive, backward-compatible consolidation of `--fork-session`, transport, and per-stream options across both SDKs.
6. **[#6492](https://github.com/QwenLM/qwen-code/pull/6492) — feat(sdk): control request methods (effort, models, usage, context)** *(juhuan)*. Adds `set_effort()` / `setEffort()` and three other control methods to both SDKs plus matching CLI handlers.
7. **[#6486](https://github.com/QwenLM/qwen-code/pull/6486) — feat(cli): model toggle hotkey (Alt+S / Ctrl+F)** *(Aleks-0)*. Dynamic toggle between current and `model.toggleModel`, persisted across turns with header reflection and a contextual info line.
8. **[#6513](https://github.com/QwenLM/qwen-code/pull/6513) — feat(cli): auto-retry next port when `serve` port is in use** *(wenshao)*. Removes the hardcoded `:4170` failure; `--port` is now resolved to the next free port automatically.
9. **[#6495](https://github.com/QwenLM/qwen-code/pull/6495) — feat(channels): webhook-triggered channel tasks** *(qqqys)*. External webhook → `qwen serve` → channel-worker proactive delivery. Companion to the WeCom work in v0.19.6-preview.
10. **[#6472](https://github.com/QwenLM/qwen-code/pull/6472) — Gate browser automation MCP on external adapter** *(yiliang114)*. Splits the raw CDP tunnel from browser automation MCP availability; clients must opt in explicitly. Hardens the attack surface for the Chrome extension path.

*(Honorable mentions: [#6377](https://github.com/QwenLM/qwen-code/pull/6377) security fix blocking `kill -9 $(pgrep node)` self-kill; [#6516](https://github.com/QwenLM/qwen-code/pull/6516) i18n for ~43 hardcoded strings; [#6518](https://github.com/QwenLM/qwen-code/pull/6518) Approve button for pending/rejected `/mcp` servers.)*

## Feature Request Trends

- **Subagent control & safety** dominates: explicit loop detection (#6505), worktree-pinned `working_dir` ([#6456](https://github.com/QwenLM/qwen-code/pull/6456)), clearer approval UX ([#6496](https://github.com/QwenLM/qwen-code/issues/6496)).
- **Workspace/multi-tenant daemons**: multi-workspace routing ([#6511](https://github.com/QwenLM/qwen-code/pull/6511)), bounded replay snapshots ([#6482](https://github.com/QwenLM/qwen-code/pull/6482)), richer error details on async workspace memory tasks ([#6431](https://github.com/QwenLM/qwen-code/pull/6431)).
- **SDK parity (Python ↔ TypeScript)**: the [#6491](https://github.com/QwenLM/qwen-code/pull/6491) and [#6492](https://github.com/QwenLM/qwen-code/pull/6492) PRs together expose 15 new options/methods symmetrically.
- **Channel & webhook integrations**: WeCom in releases; webhook-triggered channel tasks ([#6495](https://github.com/QwenLM/qwen-code/pull/6495)).
- **UX restoration in web-shell**: full composer per pane ([#6510](https://github.com/QwenLM/qwen-code/pull/6510)), i18n coverage ([#6516](https://github.com/QwenLM/qwen-code/pull/6516)), test harness ([#6517](https://github.com/QwenLM/qwen-code/pull/6517)).
- **Model UX**: toggle hotkey ([#6486](https://github.com/QwenLM/qwen-code/pull/6486)) and correctness of status-line model display ([#6514](https://github.com/QwenLM/qwen-code/pull/6514)).

## Developer Pain Points

- **Data integrity in session storage**: `parentUuid` chain corruption silently truncates history ([#6501](https://github.com/QwenLM/qwen-code/issues/6501)). The fix in [#6502](https://github.com/QwenLM/qwen-code/pull/6502) is high-leverage.
- **Subagent observability**: no loop detection inside sub-agents ([#6505](https://github.com/QwenLM/qwen-code/issues/6505)), and the status line lies about which model is active after subagent work ([#6512](https://github.com/QwenLM/qwen-code/issues/6512)).
- **Slash command UX regressions**: even with [#5577](https://github.com/QwenLM/qwen-code/pull/5577) merged, ranking still breaks under recent-usage weighting ([#6503](https://github.com/QwenLM/qwen-code/issues/6503)).
- **IDE lifecycle confusion**: deferred-startup timeouts leave the UI in a permanently failed state ([#6507](https://github.com/QwenLM/qwen-code/issues/6507)).
- **Install reliability on Windows**: recurring `Cannot find module` in the install script ([#3845](https://github.com/QwenLM/qwen-code/issues/3845)) continues to surface months later.
- **Long-tail background tasks**: mid-execution task interruption causes silent abandonment with no auto-resume ([#4278](https://github.com/QwenLM/qwen-code/issues/4278)).
- **Self-protection gaps in shell sandbox**: required [#6377](https://github.com/QwenLM/qwen-code/pull/6377) to close a `pgrep`-based self-kill on `kill -9 $(pgrep node)` ([#6246](https://github.com/QwenLM/qwen-code/issues/6246)).
- **Release tooling fragility**: scheduled release workflow failed when NPM dist-tag missing ([#6481](https://github.com/QwenLM/qwen-code/pull/6481) / [#6476](https://github.com/QwenLM/qwen-code/issues/6476)).

---
*Digest generated from GitHub activity for QwenLM/qwen-code on 2026-07-08. All links point to issues and pull requests on github.com.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest
**Date:** 2026-07-08

> **Note on naming:** The legacy npm package `deepseek-tui` is deprecated as of v0.8.67. The canonical project, CLI command, and release asset are now **CodeWhale** (`codewhale`). See [`docs/REBRAND.md`](https://github.com/Hmbown/CodeWhale) for migration.

---

## 1. Today's Highlights

The v0.8.68 stopship drive is in full execution: every open milestone issue now carries exactly one `lane-*` label (stopship, fleet, catalog, copy, perf, meta), and the new "execution board" packet (#4092) replaces ad-hoc triage. Headline functional shifts of the day — Fleet setup is now a role/profile roster editor rather than a provider-scoped model picker (#4093 → #4181), and the sub-agent detail panel renders live activity instead of going blank (#4094 → #4182/#4197). Forward-looking: a design doc for an agent-callable `verify`/critique tool (#4196 → PR #4199, design in #4201) was approved by 3-way consensus and lands behind the v0.8.68 stopship in v0.8.69.

## 2. Releases

**v0.8.67** — ([release notes](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.67)) Reaffirms the **CodeWhale** rebrand: `codewhale` is the canonical CLI/package/release-asset name; the legacy `deepseek-tui` npm package is deprecated and receives no further updates. Users on legacy `deepseek` / `deepseek-tui` names should migrate via `docs/REBRAND.md`. No new install instructions published alongside this release.

## 3. Hot Issues

| # | Title | Why it matters | Reaction |
|---|-------|----------------|----------|
| [#4092](https://github.com/Hmbown/CodeWhale/issues/4092) | **v0.8.68 execution board: lane order, dependencies, agent protocol (canonical packet)** | Single entry point for every agent working the milestone; replaces the July 7 triage packet and defines the lane graph (stopship → fleet → catalog → copy → perf → meta). | 🗨️ 13 / 👍 0 — high coordination traffic |
| [#3144](https://github.com/Hmbown/CodeWhale/issues/3144) | **v0.8.64: natural-language auto-review policy + pre-push review gate** | Research-backed proposal that uses Cursor's Bugbot/Security Review as a reference design for "checked autonomous execution." | 🗨️ 14 / 👍 0 — longest-running discussion |
| [#3063](https://github.com/Hmbown/CodeWhale/issues/3063) | **v0.8.59 release tracker — TUI mouse-report leak, runtime safety** | Established the stabilization pattern (release-blocker first, then maintainer-queue PRs) reused by v0.8.68. | 🗨️ 11 / 👍 0 |
| [#2300](https://github.com/Hmbown/CodeWhale/issues/2300) | **v0.8.65: Multi-model compatibility, provider docs, Fleet loadout auto** | User-facing acceptance fixture clarifying `provider = vllm` vs `provider = openai` semantics; survives as a doc contract. | 🗨️ 8 / 👍 0 |
| [#2791](https://github.com/Hmbown/CodeWhale/issues/2791) | **Refactor command dispatch into modular strategy pattern (v0.9.0)** | Breaks the monolithic `commands` tree into focused modules; foundational for v0.9.0 fleet/workflow modes. | 🗨️ 7 / 👍 0 |
| [#2261](https://github.com/Hmbown/CodeWhale/issues/2261) | **TUI 对话中进程崩溃，输入内容泄漏到 PowerShell 终端** | Reproducible Windows crash where focus loss causes keystrokes to leak into the host PowerShell — a security/correctness concern. | 🗨️ 6 / 👍 0 |
| [#1982](https://github.com/Hmbown/CodeWhale/issues/1982) | **Workbench loop: connect delegation, integration, and verification (v0.8.69)** | Closes the visual loop between Work/Tasks/Agents sidebars so users can see delegation → verification outcomes. | 🗨️ 5 / 👍 0 |
| [#4094](https://github.com/Hmbown/CodeWhale/issues/4094) | **Sub-agent detail panel empty/freezes during active work** | v0.8.68 release blocker — `lane-stopship`. Fixed by PRs #4182 + #4197. | 🗨️ 4 / 👍 0 |
| [#4093](https://github.com/Hmbown/CodeWhale/issues/4093) | **Fleet setup modal is provider-scoped instead of a role/profile roster editor** | Cross-provider Fleet functionality is gated on this; remains open for the interactive-TUI half until #4193 lands. | 🗨️ 3 / 👍 0 |
| [#4137](https://github.com/Hmbown/CodeWhale/issues/4137) | **v0.8.68 2.20: let Fleet profiles save provider, model, and thinking effort** | Extends `AgentProfileToml` so per-profile routing is persistent — `lane-fleet`. | 🗨️ 2 / 👍 0 |

## 4. Key PR Progress

| # | Title | What it does |
|---|-------|--------------|
| [#4199](https://github.com/Hmbown/CodeWhale/pull/4199) | **feat(tools): agent-callable verify/critique tool** | Adds a tool the agent can *choose* to call for adversarial self-review (elevated reasoning + independent critic). The model-decided version of multi-agent review. |
| [#4201](https://github.com/Hmbown/CodeWhale/pull/4201) | **docs: test-time-compute design (verify tool + sub-agent reasoning)** | Lands `docs/TTC_DESIGN.md`; design-only, no `crates/config` changes. Implementation deferred to v0.8.69. |
| [#4200](https://github.com/Hmbown/CodeWhale/pull/4200) | **fix(providers): Fireworks/Together metadata + Models.dev id normalization** | Bounded provider-correctness pass; fixes two release-smoke provider-mapping issues and normalizes Models.dev IDs through `ProviderKind::parse`. |
| [#4198](https://github.com/Hmbown/CodeWhale/pull/4198) | **fix(fleet): honor profile-pinned provider on in-process TUI spawn** | Completes the interactive-TUI half of the cross-provider Fleet fix; PR #4181 had only landed the headless CLI path. |
| [#4197](https://github.com/Hmbown/CodeWhale/pull/4197) | **fix(tui): complete sub-agent detail panel state coverage + artifact handles** | Single-file patch to `sidebar.rs` that closes the four follow-ups from #4094 reopened comment. |
| [#4192](https://github.com/Hmbown/CodeWhale/pull/4192) | **fix(tui): transcript copy polish batch (#4142 #4143 #4144 #4145)** | Wording/dedup cleanup: redundant mode-picker copy, repeated setup hints, "read done · Searching" verb mismatch. |
| [#4191](https://github.com/Hmbown/CodeWhale/pull/4191) | **fix(catalog): accept current live Models.dev schema in parser** | Resolves `serde_json::from_str::<ModelsDevCatalog>` failure caused by `interleaved` being both a bare bool and an object in the live catalog — foundation of the catalog chain. |
| [#4189](https://github.com/Hmbown/CodeWhale/pull/4189) | **fix(ci): only auto-label agent-ready on issue open** | Prevents the milestone-hygiene action from re-adding `agent-ready` on every label edit. |
| [#4182](https://github.com/Hmbown/CodeWhale/pull/4182) | **fix(tui): populate sub-agent detail panel with live activity** | Renders tool calls, status, final summary, artifact handles, bounded histories during active work. |
| [#4180](https://github.com/Hmbown/CodeWhale/pull/4180) | **fix(tui): normalize raw Ctrl+C byte for PTY quit-arm flow** | Maps raw `0x03` to canonical Ctrl+C in PTY/raw mode so the double-Ctrl+C idle-exit path actually exits. |

Also worth noting: [#4181](https://github.com/Hmbown/CodeWhale/pull/4181) (Fleet setup role/profile roster editor, headless half), [#4045](https://github.com/Hmbown/CodeWhale/pull/4045) (UTF-8 fuzzy-cursor panic fix in `edit_file`), [#4088](https://github.com/Hmbown/CodeWhale/pull/4088) (preserve native selection when `--no-mouse-capture`).

## 5. Feature Request Trends

- **Multi-agent Fleet / sub-agent observability** — the dominant theme of the cycle. Persistent role/profile routing (#4137), roster editor UX (#4093), live activity in sub-agent panel (#4094), reasoning-effort tiering (#4195), and per-worker provider/model pinning (#4193) all converge on making Fleet feel like a first-class abstraction.
- **Test-time compute & self-review** — proposed `verify`/critique tool (#4196, PR #4199) plus design doc (#4201); also natural-language auto-review policy (#3144) and the delegation-routing heuristic (#2024). Direction: agents decide *when* to spend extra compute, not just *how much*.
- **WhaleFlow workflow runtime (v0.9.0)** — sustained investment: real async executor (#2973), TeacherReview → StudentReplay → PromotionGate loop (#2976), CI proof on `rlm_cache_change.star` (#2980), TUI `/workflows` monitoring surfaces (#2979). All v0.9.0 EPIC tracker #2981.
- **Provider & catalog plumbing** — Models.dev as source of truth (#4184 → #4185 → #4187 → #4186 → #4188), Fireworks/Together metadata correctness (#4200), and vllm/openai parity docs (#2300).
- **TUI polish & accessibility** — context-percent dedup (#4142), mode-picker copy (#4143), setup-hint consolidation (#4144), inspectable low-info rows (#2018), localized string assertion stability (#4033/#4194).

## 6. Developer Pain Points

- **Windows + terminal fragility.** The TUI-to-PowerShell focus leak (#2261) and the `python -c "..."` encoding flip from `utf-8` to `gbk` when invoked through CodeWhale's `execshell` on Windows (#4202) both surface the same root cause: child stdio handles inherit a Windows ANSI/console code page that Python's default `utf-8` does not. Recurring Windows keystroke-capture failures motivate several TUI PRs.
- **Models.dev schema drift.** `serde_json::from_str` was failing on the live catalog because `interleaved` ships in two shapes (bare bool vs. object). Five linked issues (#4184–#4188) had to be coordinated to absorb one upstream field.
- **Sub-agent UI opacity.** Until #4094 was fixed, opening a running worker's detail panel showed only an ID and a status dot — users had no visibility into tool calls, intermediate state, or artifact handles.
- **Cross-provider Fleet footguns.** Headless `codewhale fleet run` and the interactive TUI spawn workers through different code paths; pinning a profile's provider/model only worked for one path (#4193), which left users thinking their config was applied when it wasn't.
- **Locale-sensitive test flake.** Hardcoded English strings in test assertions fail on non-English devices; PR #4033 (closed) and the follow-up #4194 (open) keep chasing new offenders — suggesting this needs a global guard rather than per-PR fixes.
- **Milestone triage thrash.** The `v0.8.68 milestone hygiene` GitHub Action was re-adding `agent-ready` to issues on every label event, undoing intentional triage passes (#4189).
- **Rebrand churn.** Migrating users from `deepseek-tui` / `deepseek` legacy names continues to be a friction point; `docs/REBRAND.md` is the single migration aid and was explicitly called out in the v0.8.67 release.

</details>