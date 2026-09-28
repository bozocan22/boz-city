# Progress record

The running record of what was built, by whom, what it proved, and what is next — one dated section per session, newest first. Kept by red. `docs/DECISIONS.md` holds what was decided (friday22); `docs/LESSONS.md` holds what was learned (tom); `city/DESIGN_NOTES_V2.md` §7 holds the design detail of each commit. This file holds the order of events, so nobody has to rebuild it from `git log`. Every hash, count and date here comes from a file or a command; where a number is not in the record it says so.

---

## 2026-09-28 — the forty-sixth door lands; hire and sanctions untangled into standing.ts; the desk's vault write proven; the throughput reading taken on an idle machine; Halo's read

### Built

Six commits after `55cf969` (2026-09-20, red's last recorded commit), all 2026-09-28, `e89761b` to `25519a8`. Two are DECISIONS only (`d6ae81d`, `5060a99`); one is the peer session's residency reports (`e89761b`); one is a docs correction after Halo (`25519a8`).

- `e89761b` — residency, read-only, the peer's lane: `docs/AGENT-RESIDENCY-GAPS.md` (157 lines), `docs/RESIDENCY-COST.md` (127, mage), yolo's leads and solo's verdicts (`docs/research/intake/2026-09-28-agent-residency-leads.md`, `docs/research/2026-09-28-agent-residency-verified.md`). 4 files, +383, no code.
- `effd396` — the desk's vault write, proven: the adapter's core behind an injectable filesystem (`city/src/desk/vault-adapter.ts`, new, 200 lines; `vault-tauri.ts` cut to a thin wrapper, 78 lines) with `city/tests/desk.vault-tauri.test.ts` (new, 319 lines, 21 tests) — the first write creates the header, a second appends, an answer writes its own note, a foreign line survives, a refused rename leaves nothing behind; the folder pre-filled from `docs/governor/` or the newest Obsidian vault and adopted only when the governor presses Use; a Test write button and an app-only self-test; the footer names the file and line written, or the folder that refused. `desk/main.ts` +103, `src-tauri/src/lib.rs`, `desk.css`, two READMEs. 8 files, +708 / −155. `desk_repo_governor` is registered; the desk window's url carries no query string; `docs/governor/` holds only `README.md`. No engine file touched.
- `4f7e137` — the hire/sanctions import cycle ended: the credential vocabulary, the seat and signature helpers, the sanction record with the bar read off it, and the standing gate move to `city/src/sim/systems/standing.ts` (new, 294 lines), which imports neither; one direction remains, `sanctions.ts` reading the hire list through exactly one import. A pure move — Halo checked the claim as a line multiset: 203 removals, only 7 not reappearing verbatim, all of them the two cross-imports and five comment lines about the old cycle. 19 files, +337 / −257. Pins unmoved; the conformance badge byte for byte.
- `339ccf8` — the last door lands. Entries #116–#121 on `vectors-small.json`: an eighth holder admitted jobless, complained of by a holder at another building, sanctioned by a guild member, the rung overturned on appeal — which slashes the bound guild by law — then `fundGuild` pays the pool whole (`admit`, `complain`, `sanction`, `appealSanction`, `evaluateSanctionAppeal`, `fundGuild`). Both landing-pending lists empty; `DOORS.md` and `CONFORMANCE.md` read forty-six and `doors 46/46 · vectors 149/149`. Entries #0–#115 and both start hashes unmoved, 0 verdicts flipped; `vectors.json` untouched. Apostrophes inside the bench's description escaped so the type checker reads it again — it had been failing while the runtime still ran. 7 files, +386 / −27.
- `d6ae81d` — DECISIONS: one `[assumed]` entry covering the three commits above (the last door's measured path, the standing.ts extraction and why the bar reads travel with the gate, the proven vault write); the two process findings recorded for tom.
- `5060a99` — DECISIONS: the throughput reading on an idle machine — a cold day of 2,000 residents in 1,012 ms against the 1,440 ms budget, 1,423 ticks a second, the warm and idle-route cases green too. The 2.9 s and 3.3 s readings of 2026-09-16 and the 1,441.7 ms miss of 2026-09-20 were the machine, not a regression; no budget was ever widened.
- `25519a8` — after Halo: `CONFORMANCE.md`'s prose catches up with its own badge — seven stale numbers in the published contract, now 122 entries, 104 vectors, all forty-six doors open, 149 vectors at both levels.

State checked at `25519a8`: `vectors-small.json` 122 entries = 104 vectors + 18 steps, `start` hash 72634628faf93840; `vectors.json` untouched in the range. `systems/standing.ts` exists at 294 lines. No pin literal moved: `city/tests/determinism.test.ts`, `city/tests/federation.test.ts`, `city/tests/small-city.test.ts` and the Gemini recording file are untouched in the range — pins unmoved. The live site serves the new vectors file and the new badge. No §7 entry in `city/DESIGN_NOTES_V2.md` for this period; no LESSONS entry in the range.

### Who did what

- **Three builder lanes**: the last door's vectors (`339ccf8`), the standing.ts extraction (`4f7e137`), the desk's vault proof (`effd396`).
- **Halo** read once, the whole stretch, and returned two WRONGs — both the published conformance prose, whose counts contradicted its own badge; fixed at `25519a8`. Every count in Built above is as Halo verified it.
- **The peer session** wrote the residency reports (`e89761b`), with **mage** on the hosting cost and **yolo** and **solo** on the leads and verdicts.
- **The coordinator** escaped the apostrophes that had broken the type checker while the runtime still ran, committed all six, took the throughput reading, deployed, and made the conformance corrections.
- **friday22's** hand is in DECISIONS: the two entries of the period.
- **red** wrote this section.

Recorded honestly: two lanes edited one bench file at the same time because the coordinator's lane assignment overlapped; and the vectors lane's first report said STOPPED before its own queued run had completed. Both are for tom.

### The principal decided

No `[confirmed]` entry this period. His words this stretch, verbatim: "just keep building it i belive on you". Both DECISIONS entries are the coordinator's `[assumed]`: "The last door landed, the one smell ended, the desk's vault write proven" (`d6ae81d`) and "The throughput reading on an idle machine, at last" (`5060a99`).

### Proved

The coordinator ran: the full suite at 1368 of 1368 on the refactor; `conform` at `doors 46/46 · vectors 149/149` after the regeneration; the compare guard reporting 0 hashes moved and 0 verdicts flipped with #0–#115 unmoved; the affected suites 122 of 122; the three pin suites 33 of 33. The throughput reading on a genuinely idle machine: a cold day of 2,000 residents in 1,012 ms against the 1,440 ms budget, 1,423 ticks a second — closing the item that had stood unverified since 2026-09-16.

### Open

Unchanged from `docs/ops/REPORT-what-is-left-2026-09-18.md` §3: the **eighteen defaults** on `docs/ops/QUESTIONS-2026-09-17.md` (§3(a)); the five 2026-09-15 decisions that predate D-8 and were never built; the peer session's launch and spec lists (§3(b)); the older engine readings on the DECISIONS index, items (vii)–(xii), (xvi), (xviii), (xx), (xxiii)–(xxvi). Open (xlviii) — the funds' spending laws and who signs a draw — and (xlix) — whether a governor may delegate the levy rate to a rule — stand as recorded, both the principal's.

Closed this stretch, from §3(c): the hire/sanctions import cycle, the guild-funding door's landing vector, the throughput reading, and the desk's unproven in-app write.

**Atom Lab** and **Parliament** (D-11) are still not started, and nothing about them is assumed. New fact for the record: putting Atom Lab's building on the small city's map would move the small-city layout pin (`city/tests/small-city.test.ts`, `SMALL_42_HASH_AT_10000`) — a deliberate re-pin with its reason written, which is the principal's to authorise, not a builder's to take.

### Next

His answers to the eighteen. Atom Lab when he orders it.

---

## 2026-09-17 — the collective layer C-8, C-9, C-7, C-6; the last of D-10, C-11 and C-12; D-11 confirmed; the Gemini recording re-pinned; four jarvis11 audits; Halo's read; the note's list C-1…C-15 complete

### Built

Twenty-five commits after `8745402` (red's last section; `80b2c86` before it is tom's third lesson and the questions page), all 2026-09-17, `26f7e2d` to `f852aa0`. Nine are DECISIONS only (`74d59f0`, `2fa994b`, `6414f1a`, `cc6ca0d`, `68ad3f1`, `1934704`, `e7aa2e0`, `cd3adee`, `4fae4e0`); two are questions-page only (`86e3e80`, `c0643f6`); one is a plan file only (`2b82e52`); two are the Atom Lab workbook and research (`6afbe2e`, `1b6e8ec`). `vectors.json` (the 2,000-person file) regenerated once, at `b8a3710` — 13 entries #37–#49, the hash field only, no verdict or subject changed, `start` dcfd3ea898480a4d unmoved.

- `26f7e2d` — C-7 groundwork: `foundersOf`/`isFounder` on the firm and `ownersOf` in `owner.ts`, a pure move with one founder today (`firm.ts`, `departure.ts`, `firmagent.ts`, `foundpolicy.ts`, `owner.ts`); a types-only `guilds.ts` stub; `exit.test`'s schedule pin knows the sanctions entry. 7 files, +111 / −18. The full suite ran once on this commit while the C-8 lane edited the same tree (see Proved).
- `74d59f0` — DECISIONS +4: C-7 groundwork; the dormancy spike's finding — the count starts on the first Monday after the law lands, and reads sales as a delta of cumulative units, never the smoothed window.
- `2fa994b` — DECISIONS +8: D-11 `[confirmed]`, recorded by the governance session (see The principal decided).
- `6afbe2e` — `docs/ATOM-LAB-PLAN.md` (new, 145 lines): the principal's planning workbook — the three institutions side by side, seven decisions in order with options and recommendations, research slots, constraints in force.
- `1b6e8ec` — Atom Lab research: `docs/research/intake/2026-09-17-atom-lab-leads.md` (yolo, 40 lines), `docs/research/2026-09-17-atom-lab-verified.md` (solo, 36 lines); the workbook's confirmed and overstated sections filled and Q-AL-2's recommendation written.
- `049f1e3` — `premises.test.ts`: the payday tally's treasury shape knows the city-wage keys — stale since `66809b7`, found by the first full suite in forty commits. 1 line.
- `942dffc` — C-8 the works commons: an author-chosen licence on a work (four tokens, absent = all rights; old bodies byte-identical) and the `cite` door by hash (door 33) — a withdrawn or one's own work refused, one citation per pair, ten a day; the count is a count of signed rows, no engine rule reads it; the firm's founder read through `foundersOf`/`isFounder` in `hire.ts` and `sanctions.ts` (`works.ts` +205). `tests/works.test.ts` restructured. Vectors #68–#69; badge `doors 33/33 · vectors 104/104`. 19 files, +1,158 / −477. Pins unmoved.
- `6414f1a` — DECISIONS +6: C-8 parameters; the full suite's two real findings.
- `4968ef2` — the 30-day Gemini recording re-pinned, 42e052ff08493f30 → 13df9f7dc0fcc2e3 (`city/docs/MINDS.md`, `public/minds/gemini-gemini-2.5-flash-42-dorsk-30d.json`, `index.json`; DECISIONS +4). Bisected to `6c2e2b3`: C-3's `paidShort` field on one Halvik resident (#188) from day 26; stripped, the hash is the old pin; Dorsk and every recorded answer unchanged; no money moved. The 2-day pin stands.
- `da0d81d` — C-9 the residents' chamber, the seed of Parliament (D-11): rung-2 parameters only — `propose` (a credentialed holder, a policy field inside its band) and `veto` (doors 35); after 72 hours a proposal passes by law unless vetoes reach ten percent of the credentialed holders (at least one), landing as `policy:changed` by law; one open proposal per field; the governor's own door not barred; own scheduler entry after sanctions (`chamber.ts` new, 363 lines; `policy.ts` +64, `founding.ts`, `scheduler.ts` +13). `tests/chamber.test.ts` (new, 430 lines). Vectors #70–#76; badge `doors 35/35 · vectors 109/109`. 20 files, +2,041 / −805 (most of it `works.test.ts` reflowed). Pins unmoved.
- `cc6ca0d` — DECISIONS +4: C-9 parameters under D-11.
- `3577cfb` — C-9 after jarvis11: a pass whose value the governor already set changes nothing (`unchanged: 1`, no row, no sequence) (`chamber.ts` +19, `chamber.test.ts` +20); DECISIONS +4: jarvis11's four edges on C-8/C-9.
- `bc07a85` — C-7 co-founding and the dormancy strike-off: `inviteFounder` and `acceptFounding` (doors 37), up to five founders with equal shares of the draw and the closing remainder (the odd cent to the first), no money at joining; a founded firm idle four consecutive Mondays — no filled slot, no War Bay hire, no sale since its baseline — is struck off by law (`firm:struckOff`, `closeFirm`); own scheduler entry after the chamber (`cofounding.ts` new, 359 lines; `firm.ts` +52, `exit.ts` +77, `owner.ts` +66, `scheduler.ts` +11). `tests/cofounding.test.ts` (new, 652 lines). Vectors #77–#81; badge `doors 37/37 · vectors 113/113`. 21 files, +1,491 / −73. Pins unmoved.
- `68ad3f1` — DECISIONS +4: C-7 parameters; (lxxv) shares by capital put to the principal.
- `c01e1d9` — C-7 after jarvis11: the seat re-read at `acceptFounding` (`cofounding.ts` +6); DECISIONS +4: three edges written; (lxxvi) the wheel of a co-founded firm whose first founder has left, with a recommendation.
- `86e3e80` — questions page: (lxxv) and (lxxvi) added; fourteen.
- `d6284f0` — C-6 guilds: `foundGuild`, `joinGuild`, `leaveGuild`, `sponsorAdmission`, `nameEvaluator` (doors 42); three credentialed holders form one, each bond a week of the L1 floor from the member's household into escrow, returned on leaving; a guild acting sponsors a pending registration (admitted without the governor) and names the evaluator of a hire or task offered with the guild in the evaluator's place; slashed by law only on a member's overturned verdict or sanction or a sponsored holder's expulsion (`guilds.ts` +682; `hire.ts` +62, `task.ts`, `sanctions.ts`, `founding.ts`, `departure.ts`, `agents/state.ts`). `tests/guilds.test.ts` (new, 848 lines). Vectors #82–#99 with a seventh holder; badge `doors 42/42 · vectors 131/131`. 20 files, +2,583 / −70. Pins unmoved.
- `1934704` — DECISIONS +4: C-6 parameters; the collective layer complete.
- `e7aa2e0` — DECISIONS +4: jarvis11's C-6 gaps and their fixes; (lxxvii) a cap on sponsorships; the questions page at fifteen.
- `2b82e52` — `docs/ops/PLAN-C11-C12-2026-09-17.md` (new, 163 lines; tuesday22): a fifth account fed daily by one percent of the levy, a `claimRelief` door paying half the L1 floor for two weeks once per eight, peer credit against an eight-week wage history repaid from paydays without interest; questions renumbered (lxxviii)–(lxxx).
- `f52b7f4` — C-6 after jarvis11: a guild acts only while its pool holds a bond per member (no counter); the answerable guild is bound at the act and slashed at the overturn even if the member has left; an expelled member's bond forfeited and the sponsor slashed before the departure; the sponsorship writes through `registrations.approveBySponsor` with words on the row (`guilds.ts` rewritten, `registrations.ts` +52, `hire.ts`, `sanctions.ts`, `departure.ts`). `guilds.test.ts` +273. Vectors #95–#99 regenerated for the row's because, #0–#94 unmoved; badge `42/42 · 131/131`. 12 files, +471 / −221. Pins unmoved.
- `cd3adee` — DECISIONS +4: the guild pool's consequence — a slashed guild cannot act again by recruiting alone, so `fundGuild` is one more door; a rise of the L1 floor idles every standing guild until funded.
- `92d203e` — C-12 credit against wage history, as peer credit: `offerCredit` by a lender household (cap two weeks of the borrower's eight-week average wage; only where a mutual fund stands; one loan per borrower) and `acceptCredit` on the same bytes; repaid by law at each payday from a quarter of the net wage until cleared, no interest, relief never touched; at a departure paid from the balance, the rest written `credit:owed` (`credit.ts` new, 480 lines). `tests/credit.test.ts` (new, 477 lines), `credit.spike.test.ts` (99). Module only; the wiring in `b8a3710`.
- `b8a3710` — C-11 the mutual fund and `claimRelief` (door 43): a fifth account fed at the levy's midnight roll by one percent off the top, the month's split on the rest; a jobless holder seat claims half the L1 floor for a week at the door and the second week at the next payday by law, once per 56 days, paid what the fund holds; `fundGuild` (door 44, landing pinned pending a slashed guild); C-12 wired — `offerCredit`, `acceptCredit` (doors 45, 46), the credit law after relief after labour, loans cloned, `wages8` on holder seats at payday (`relief.ts` new, 301 lines; `levy.ts` +119, `founding.ts` +59, `guilds.ts` +93, `labour.ts`, `market.ts`, `money.ts`, `scheduler.ts` +17, `resident.ts`, `world.ts`, `present.ts`, `prospectus.ts`, `worker/protocol.ts`, `views.ts`; `DOORS.md` +86). `tests/relief.test.ts` (new, 493 lines), `guilds.test.ts` +60, `levy.test.ts`, `doors.test.ts` +24. Vectors #100–#115; badge `doors 45/46 · vectors 143/143`. The small file #6–#99 and `vectors.json` #37–#49 moved by hash only (bodies, verdicts and subjects byte for byte, both start hashes unmoved); the three world pins, the Gemini recording and the validate report unmoved. 33 files, +2,126 / −173. DECISIONS +4 in the same commit: C-11 parameters and what the pins measured.
- `c0643f6` — questions page: (lxxviii)–(lxxx); eighteen.
- `4fae4e0` — DECISIONS +4: C-12 parameters; jarvis11's C-11/C-12 findings and their fixes.
- `d1199f0` — C-11/C-12 after jarvis11: the levy's day resets at the month's split and the fund's roll is capped at the holding (no throw inside the scheduler); the relief and credit doors read the seat; a borrower leaving a shared household leaves the whole remainder owed, nothing from the co-residents' purse (`levy.ts` +34, `credit.ts` +41, `relief.ts` +26, `departure.ts`). `credit.test.ts` +102, `levy.test.ts` +80, `relief.test.ts` +9. Small vectors #110–#114 hash-only, 0 verdicts flipped; `vectors.json` byte for byte. 9 files, +272 / −50. Pins unmoved. The live site is deployed at this commit.
- `f852aa0` — Halo's read of C-6..C-12: `conform.test.ts`'s title said "42 of 42 doors open", now "46 of 46 doors catalogued, every one with a refusal and all but the pinned landings open"; the C-11/C-12 plan's header said four questions, now three. 2 lines. Two doc lines after the deploy.

Pins checked 2026-09-17 at `f852aa0`: `city/tests/determinism.test.ts:213` `SEED_42_HASH_AT_10000 = 'cf636ab0a6ff7461'`; `city/tests/federation.test.ts:137` `PINNED = 'a238dd9bd7ecc292'`, `:231` `PINNED_THREE = 'e2b3ad557e400fde'`; `city/tests/small-city.test.ts:28` `SMALL_42_HASH_AT_10000 = '336a8e13073a68d3'`. Unmoved; their files untouched in the range. The Gemini 30-day pin moved inside this range at `4968ef2`, as above (`city/docs/MINDS.md:124`). `ACT_KINDS` in `present.ts`: 46 kinds; `DOORS.md` and `CONFORMANCE.md` say forty-six. `vectors-small.json`: 116 entries — 98 acts and 18 steps; `start.hash` 72634628faf93840. `vectors.json`: 50 entries; `start.hash` dcfd3ea898480a4d. New systems: `chamber.ts`, `cofounding.ts`, `guilds.ts`, `relief.ts`, `credit.ts`. New tests: `chamber` 11 cases, `cofounding` 17, `guilds` 18, `relief` 7, `credit` 12. Scheduler entries this period: sanctions → chamber → dormancy; relief → credit after labour. DECISIONS additions only; D-11's entry untouched after `2fa994b`. `chamber.ts:3` says "seed of Parliament (D-11): rung-2 parameters only, not lawmaking". No §7 entry in `city/DESIGN_NOTES_V2.md` for this period; no LESSONS entry in the range.

### Who did what

- **tuesday22** planned C-6..C-9 (`35014f7`, last section; stalled once, resumed) and C-11/C-12 (`2b82e52`; wrote its file first). Three plans today, with C-10.
- **Ten builders** built in lanes: C-7 groundwork (`26f7e2d`), C-8 (`942dffc`), C-9 (`da0d81d`), C-7 (`bc07a85`), C-6 (`d6284f0`), the C-6 fixes (`f52b7f4`), C-12's module (`92d203e`), C-11 and the C-12 wiring (`b8a3710`), the C-11/C-12 fixes (`d1199f0`), and the bisect probe for the Gemini recording — whose worktree followed a `node_modules` junction and deleted part of the main tree's packages, reinstalled after (`4968ef2`'s DECISIONS entry).
- **jarvis11** audited four times: C-8/C-9 — pass, one fix (`3577cfb`), four edges written; C-7 — pass, one fix (`c01e1d9`), three edges, (lxxvi); C-6 — four gaps, fixed at `f52b7f4`, written at `e7aa2e0`, (lxxvii); C-11/C-12 — one latent crash inside the scheduler and the doors' seat reads, fixed at `d1199f0`, written at `4fae4e0`.
- **Halo** read once, C-6..C-12: four corrections to the coordinator's brief (the counts above are as Halo verified them); two stale strings fixed at `f852aa0`.
- **mage** forecast C-6..C-9: about $40 expected; the calendar is the real cost; the dormancy spike is decisive. Not in a commit; from the coordinator's brief. The spike ran and settled the count's start (`74d59f0`).
- **yolo** and **solo**: the collective-layer lead sheet (`8f0b206`, last section) was the reference this stretch — Creative Commons behind C-8's licence token, Aragon's optimistic veto behind C-9's window; and the Atom Lab leads and verdicts (`1b6e8ec`).
- **odo** swept once (`docs/ops/odo-2026-09-17.md`, in `8f0b206`).
- **The governance session** (the peer) recorded D-11 (`2fa994b`) and the Atom Lab workbook (`6afbe2e`).
- **The coordinator** ran the full suite on `26f7e2d`, bisected and re-pinned the recording (`4968ef2`), fixed the tally pin (`049f1e3`), recorded every vectors commit and DECISIONS entry, kept the questions page (`86e3e80`, `c0643f6`), deployed `d1199f0`, committed all twenty-five.
- **friday22's** hand is in DECISIONS: the twelve entries of the period.
- **red** wrote this section.

### The principal decided

One `[confirmed]` entry this period: "D-11: Atom Lab and the Boz Institute are two institutions, not one" (`2fa994b`, recorded by the governance session). The principal's sentence, verbatim from that entry: "Keep atom lob and boz institutions separate one teaches skills to get hired one, the other one makes you a scholar or engineer." Read as: the Institute a trade school; Atom Lab a second institution to be built, making scholars and engineers by demonstrated work; Parliament a third, lawmaking only, C-9's chamber its seed; authority in all three earned. Not built: Atom Lab has no code, no map building, no credential shape.

To this session the principal said "enagage all the actions" (verbatim, from the coordinator's brief; not in a file) — read as: run every agent on the list, section by section.

The period's `[assumed]` entries, all 2026-09-17: C-7 groundwork and the spike (`74d59f0`); C-8 landed and the suite's two findings (`6414f1a`); the Gemini re-pin (`4968ef2`); C-9 landed (`cc6ca0d`); jarvis11 on C-8/C-9 (`3577cfb`); C-7 landed, (lxxv) (`68ad3f1`); jarvis11 on C-7, (lxxvi) (`c01e1d9`); C-6 landed (`1934704`); jarvis11 on C-6, (lxxvii) (`e7aa2e0`); the guild pool's consequence (`cd3adee`); C-11 landed, (lxxviii), (lxxix) (`b8a3710`); C-12 landed, (lxxx), jarvis11 on C-11/C-12 (`4fae4e0`).

### Proved

- The full suite ran once this period, on `26f7e2d`, while the C-8 lane was editing the same tree — against the morning's lesson: 1235 passed, 17 failed. Fifteen were the C-8 lane's work in progress, since committed green (`942dffc`). Two were real: the stale payday-tally pin (`049f1e3`) and the 30-day Gemini recording's replay hash (`4968ef2`). No full suite since on a tree nobody was editing.
- Per-file runs named in the commit messages and the builders' reports: `works`, `chamber`, `cofounding`, `guilds`, `relief`, `credit`, `levy`, `doors`, `conform`, `present`, `prospectus`, `ui.holder`, `exit`, `sim-hygiene`, `premises`, `determinism`, `small-city`, `federation`.
- The conform badge at `b8a3710` and after: `doors 45/46 · vectors 143/143 · L1 143/143 · L2 143/143 · start dcfd3ea898480a4d / 72634628faf93840` (`city/public/doors/CONFORMANCE.md:186`). The one door not landed is `fundGuild`, pinned pending a slashed guild.
- The four world pins unmoved (read above). The Gemini 30-day pin re-set with the cause measured; the 2-day pin (033bf5ff286a8f13) stands.
- No benches run for the record this period.

### Open

- For the principal, eighteen on `docs/ops/QUESTIONS-2026-09-17.md`: (lxiii) which firms are the city's; (lxiv) which fund pays a law hire; (lxv) law-hired seat, household task; (lxvi) what counts as passed; (lxvii) the lapse clock's level; (lxviii) who wires the card; (lxix) a pass above level; (lxx) an eviction proper wanted; (lxxi) rung 3's decider level; (lxxii) suspended governor sets policy; (lxxiii) an expelled holder's firms; (lxxiv) the rest day's reach; (lxxv) co-founders' shares by capital; (lxxvi) the co-founded firm's wheel; (lxxvii) a cap on sponsorships; (lxxviii) where the fund's hundredth comes from; (lxxix) who the relief pays; (lxxx) who lends. Older: (lix), (xlvii), (xlviii).
- D-11's two design questions the principal offered to take next — the evaluation math for capability levels and the Parliament pipeline — not assumed, not started. Atom Lab's engine half waits on the principal's order.
- `fundGuild`'s landing vector — pinned pending a slashed guild on the small file.
- The full suite on a tree nobody is editing — not run.
- The live site at `d1199f0`; `f852aa0` is two doc lines after.
- `.claude/agents/obi.md` and `docs/obsidian/` still untracked.
- The hire and sanctions modules import each other — left (last section).

### Next

The note's list C-1…C-15 is complete. What remains of D-10 is the principal's answers to (lxiii)–(lxxx). Then a full suite on a tree nobody is editing. Then the principal's next direction — Atom Lab's engine half when ordered, under D-11.

---

## 2026-09-17 — C-10 credential levels and C-15 the schema; the appeal doors land; C-4 tenancy; C-13 the rest day; C-5 the sanctions ladder; jarvis11 and jarvis22; the C-6..C-9 plan; yolo and solo's lead sheet

### Built

Twenty-two commits after `e3fbb12` (red's D-10 section and tom's lesson), all 2026-09-17, `0240ded` to `8a515b2`. Four are DECISIONS only (`dda14e9`, `6ae2505`, `f6f6034`, `8860ac1`); `09991b1` is DECISIONS plus a view fix; four are plan files only (`0240ded`, `e857031`, `35014f7`, `8a515b2`); one is research plus odo's sweep (`8f0b206`). `vectors.json` (the 2,000-person file) untouched throughout.

- `0240ded` — `docs/ops/PLAN-C10-2026-09-17.md` filed under tuesday22's name (131 lines). Wrong content: the D-10 report, by a coordinator slip.
- `e857031` — the C-10 plan file rewritten from tuesday22's hand-back (+79 / −111). The planner's transcript file on disk was empty, so the coordinator retyped the plan from the hand-back text.
- `2c3d971` — `city/deploy/nodebusy.ps1` (new, 5 lines): the one-process rule's check. `wmic` is not installed on this machine, so every builder wait-loop before about 11:00 passed vacuously (jarvis22).
- `5ec46a3` — C-15 the credential schema: `city/public/credentials/schema.json` (153 lines) and `README.md` (108) — labels, grants, the three chain rows, the A2A `skills[]` entry a port should publish, verification from the chain never the card; the resident view's grants (`worker/protocol.ts`, `views.ts`; page only). `tests/credentials.test.ts` (new, 96 lines; 6 cases) pins the schema to the engine's skills and `TASK_LEVEL_MAX`.
- `3a186ad` — jarvis22's read of D-10, six of seven drift items: the works suite's catalogue pin knows the appeal doors; `present.ts` header counts; `CONFORMANCE.md`'s numbers (77 vectors, 32 on the small file) and its refusal claim; `DOORS.md` rows for the C-2 evaluator check, the acceptTask re-check and the tombstone's signature. The seventh (`hire:owed` carries `by:'law'`) landed in `fa7bc5a`.
- `fa7bc5a` — C-10 credential levels by law: three passed signed hires at level N earn `<skill>:N+1` (to L3) at settlement, a `credential:granted` row and `Resident.grants`; a granted level lapses to N−1 after eight weeks without a passed hire at N−1 or higher (`credential:lapsed`, daily at 00:00 in the hires pass); Institute labels and L1 never lapse (`hire.ts` +240, `resident.ts`, `world.ts`, `DOORS.md`, `INSTITUTIONS.md`). `tests/hire.test.ts` +374. Pins unmoved.
- `0685c86` — the schema: the granted row's `hires` a comma-joined string (a chain row's refs hold numbers and strings only), the record's integers; the test imports the engine's constants.
- `dda14e9` — DECISIONS +4: C-10 and C-15 parameters; (lxvi)–(lxviii) put to the principal.
- `54dd3f3` — vectors: the appeal doors land on `vectors-small.json` (#35–#47) — B's third signed pass earns `social:2` by law, D founds the bakery, F is hired there on an offer that shields her from the law until her graduation, delivered, failed by C, appealed by F, overturned by B at level 2; `LANDING_PENDING` empty. Badge `doors 28/28 · vectors 87/87`; entries #0–#34 and both start hashes unmoved. The plan's second-grocer fixture was wrong (the small layout founds one grocer firm); the landings use another city-founded premise.
- `09991b1` — the view reads `grants` as the typed field (jarvis11 hygiene); DECISIONS +4: a pass above the seat's level earns nothing (lxix), the grant's scan cost noted.
- `50058ca` — `docs/ops/PLAN-C4-C5-C13-2026-09-17.md` (new, 123 lines; tuesday22): no eviction exists so the notice attaches to the arrears move; the sanctions ladder as four doors and light laws; the rest day binds the 08:00 market and moves deadlines to Monday.
- `abb5df0` — C-4 tenancy, holder households only: a deposit of one week's rent into escrow at the rent tick, returned net of arrears on leaving; rent deferred (not forgiven) for 14 days after a law takes a seat's job; a week's notice before the arrears move; `depart()` split out of `leave()` as the law's writer (`housing.ts` +265, `rents.ts`, `departure.ts`, `household.ts`, `resident.ts`, `world.ts`). `tests/tenancy.test.ts` (new, 478 lines; 15 cases), `leaving.test.ts` adjusted. Pins unmoved. This commit broke ten task tests and moved the small vectors: the housing lane's verify set did not include the task suite, which pinned an empty escrow.
- `9e2b270` — C-13 one rest day in seven: on Sunday no seek, no Institute enrolment, no law take, no delivery due; every deadline and the appeal window that land on Sunday are due Monday (`clock.dueAt`; `clock.ts` +32, `scheduler.ts`, `population.ts`, `hire.ts`, `institute.ts`). `tests/clock.test.ts` +58, `hire.test.ts` +184, `task.test.ts` +29. Measured first: no pin and no recorded vector moved under the full reading.
- `6ae2505` — DECISIONS +4: C-4 and C-13 parameters; (lxx) an eviction proper is the principal's.
- `8cdc516` — C-4 follow-ups, the reconciliation: `jobLostAt` written at the five job-loss sites and cleared on every take; the notice's move via `dueAt`; the task suite reads escrow relative to the deposits; the small vectors regenerated for the deposit rows with a landing-by-landing check (0 verdicts flipped, 39 hashes moved from the founding step on, start hash unmoved); the scheduler-order pin knows `hires.cityRelease` (`hire.ts`, `housing.ts`, `premises.ts`, `resident.ts`, `population.ts`; `hire.test.ts` +68, `task.test.ts`, `tenancy.test.ts`, `sim-hygiene.test.ts`).
- `1c6c457` — `DOORS.md` +39: the tenancy laws paragraph.
- `9d79f4c` — C-5 the sanctions ladder: `complain`, `sanction`, `appealSanction`, `evaluateSanctionAppeal` (doors 32) in `src/sim/systems/sanctions.ts` (new, 837 lines); one rung at a time with 30-day memory — warning, a day without works, a week without the War Bay, suspension pending appeal (leave and the appeal stay open, the agent never halted); expulsion by law one day after an unappealed or upheld suspension via `depart(law:'expelled')`, return barred 56 days; deciders from the C-2 pool. `tests/sanctions.test.ts` (new, 851 lines); `doors.test.ts` +22; `conform`, `present`, `prospectus`, `ui.holder`, `works` adjusted; `mandates.ts`, `admission.ts`, `entry.ts`, `founding.ts`, `projects.ts`, `works.ts`, `hire.ts`, `present.ts`, `prospectus.ts` touched. 21 files, +2,001 / −38. Pins unmoved.
- `f6f6034` — DECISIONS +4: C-5 parameters; (lxxi) rung 3's decider level and (lxxii) a suspended governor's policy door put to the principal.
- `3b62f18` — vectors: C-13 and C-5 on `vectors-small.json` (#48–#66) — the Sunday market minute writes nothing, a task deadline on Sunday fails Monday; complaint, warning, a rung-3 refused as out of order, rung 2, D's work refused by the bar, the appeal, A overturns it, D writes again (`doors-vectors-small.ts` +222, `conform.ts`, `DOORS.md`, `CONFORMANCE.md`). Badge `doors 32/32 · vectors 102/102`; entries #0–#47 and both start hashes unmoved. The live site's deploy is at this commit.
- `8860ac1` — DECISIONS +4: jarvis11's C-5 gaps and their fixes; (lxxiii) an expelled holder's firms, (lxxiv) the rest day's full reading, put to the principal.
- `35014f7` — `docs/ops/PLAN-C6-C9-2026-09-17.md` (new, 171 lines; tuesday22): the works commons first (cite by hash, a licence), then the chamber (propose/veto, optimistic 72 h), then co-founding and dormancy, then guilds with a bond in escrow; ten doors in two lanes. The planner stalled once and was resumed to finish the file.
- `8f0b206` — `docs/research/2026-09-17-collective-layer-leads.md` (new, 66 lines): yolo's ten leads with solo's verdicts; `docs/ops/odo-2026-09-17.md` +8, odo's sweep.
- `efe23cf` — C-5 after jarvis11: a ladder in time (the next rung waits until the carrying rung's bar has run); a suspension nobody can hear does not expel (the appeal stays open while no eligible decider exists); the sanctions laws as their own scheduler entry after the hire pass (`sanctions.ts` +113, `scheduler.ts` +12, `hire.ts`). The small vectors' C-5 tail restructured with a day between rungs (#0–#58 unmoved, 0 verdicts flipped). `tests/sanctions.test.ts` +235 (21 cases now); `sim-hygiene`, `present`, `conform` adjusted. Badge `doors 32/32 · vectors 102/102`. 11 files, +493 / −83. Pins re-run and standing.
- `8a515b2` — the C-10 plan's status line tells its provenance once (1 line). A correction: Halo's second read found the provenance told twice, as two accounts of one event.

Pins checked 2026-09-17 at `8a515b2`: `city/tests/determinism.test.ts:213` `SEED_42_HASH_AT_10000 = 'cf636ab0a6ff7461'`; `city/tests/federation.test.ts:137` `PINNED = 'a238dd9bd7ecc292'`, `:231` `PINNED_THREE = 'e2b3ad557e400fde'`; `city/tests/small-city.test.ts:28` `SMALL_42_HASH_AT_10000 = '336a8e13073a68d3'`. Unmoved. `ACT_KINDS` in `present.ts`: 32 kinds; `DOORS.md` and `CONFORMANCE.md` say thirty-two. `vectors-small.json`: 57 vectors and 11 steps; `start.hash` 72634628faf93840 unmoved. Scheduler entries this period: `hires.cityRelease`, `hires`, `sanctions`. (lxvi)–(lxxiv) each numbered once in DECISIONS. No §7 entry in `city/DESIGN_NOTES_V2.md` for this period; no LESSONS entry.

### Who did what

- **tuesday22** planned three times: C-10 (`e857031`, from the hand-back; the transcript file was empty), C-4/C-5/C-13 (`50058ca`), C-6..C-9 (`35014f7`; stalled once, resumed).
- **Eight builders** built in lanes: C-15 (`5ec46a3`), C-10 (`fa7bc5a`), the appeal landings (`54dd3f3`), C-4 (`abb5df0`), C-13 (`9e2b270`), the C-4 reconciliation (`8cdc516`), C-5 (`9d79f4c`), the C-5 fixes (`efe23cf`). Before `2c3d971` their one-process wait-loops did not wait (`wmic` absent).
- **jarvis11** audited twice: C-10 — one hygiene item and two unwritten consequences, recorded at `09991b1`; C-4/C-5/C-13 — two gaps in C-5 (a ladder climbed in a minute; an expulsion nobody could hear), fixed at `efe23cf`, the rest written at `8860ac1`.
- **jarvis22** read D-10 once: seven drift items, six fixed at `3a186ad`, the seventh at `fa7bc5a`; and found the vacuous wait-loop (`2c3d971`).
- **Halo** read twice. Its one WRONG on the second read — the C-10 plan's provenance told twice — fixed at `8a515b2`. The counts above are as Halo verified them.
- **mage** forecast C-6..C-9: about $40 expected; the calendar is the real cost; the dormancy spike is decisive. Not in a commit; from the coordinator's brief.
- **yolo** scouted ten leads for the collective layer; **solo** verified: ERC-8004's three registries and Aragon's optimistic veto over total supply confirmed from the sources; MakerDAO's pause delay and Companies House overstated — strike-off is a not-in-operation test, weak positive precedent for dormancy; Kleros slashes incoherence, not overturns; the three empty regions stand empty (`8f0b206`).
- **odo** swept once (`docs/ops/odo-2026-09-17.md`): lane 2 idle, two untracked files outside the lanes, yolo's file not yet on disk at the time.
- **The coordinator** retyped the C-10 plan, recorded the three vectors commits and every DECISIONS entry, deployed `3b62f18`, ran the three pin suites before `efe23cf` (33/33), committed all twenty-two.
- **friday22's** hand is in DECISIONS: the six entries of the period.
- **red** wrote this section.

### The principal decided

No `[confirmed]` entry this period. The last is "The three D-9 questions answered; the civic-systems note adopted as the build order (D-10)", 2026-09-17.

The period's `[assumed]` entries, all 2026-09-17: C-10 and C-15 landed, the parameters, (lxvi)–(lxviii) (`dda14e9`); two consequences of the level grant, (lxix) (`09991b1`); C-4 and C-13 landed, (lxx) (`6ae2505`); C-5 landed, (lxxi) and (lxxii) (`f6f6034`); jarvis11's read of C-4/C-5/C-13, (lxxiii) and (lxxiv) (`8860ac1`).

### Proved

- Per-file runs named in the commit messages and the builders' reports: `hire`, `credentials`, `tenancy`, `leaving`, `clock`, `task`, `sanctions`, `doors`, `conform`, `present`, `prospectus`, `ui.holder`, `works`, `sim-hygiene`, `determinism`, `small-city`. No full suite this period; no suite total is claimed here. mage advised the full suite before the collective layer builds on this tree — not done yet.
- The coordinator ran the three pin suites before `efe23cf`: 33/33 passed. The four pinned constants unmoved (read above).
- The conform badge at `efe23cf`: `doors 32/32 · vectors 102/102 · L1 102/102 · L2 102/102 · start dcfd3ea898480a4d / 72634628faf93840` (`city/public/doors/CONFORMANCE.md:142`).
- New test files: `tests/sanctions.test.ts` (21 cases), `tests/tenancy.test.ts` (15), `tests/credentials.test.ts` (6).
- No benches run for the record this period.

### Open

- For the principal, twelve: (lxiii) which firms are the city's; (lxiv) which fund pays a law hire; (lxv) law-hired seat, no household task; (lxvi) "passed hire" means signed verdict only; (lxvii) lapse clock at N−1 or higher; (lxviii) who wires the A2A card; (lxix) a pass above level earns nothing; (lxx) an eviction proper wanted; (lxxi) rung 3's decider level; (lxxii) suspended governor still sets policy; (lxxiii) an expelled holder's firms stay; (lxxiv) the rest day's full reading. Older: (lix), (xlvii), (xlviii).
- The live site is one deploy behind at `3b62f18` (badge 32/32, the schema served); `8a515b2` not yet deployed at the time of writing.
- Lane 2 (C-7 co-founding and dormancy): the dormancy spike and the owners refactor are in progress — `firm.ts`, `departure.ts`, `firmagent.ts`, `foundpolicy.ts`, `owner.ts` modified and `guilds.ts` new, uncommitted, no result yet.
- The full suite on this tree — not run; mage's advice stands.
- `.claude/agents/obi.md` and `docs/obsidian/` untracked, outside the declared lanes (odo).
- The hire and sanctions modules import each other's functions — a known smell, left (`8860ac1`).

### Next

C-8 the works commons first (cite by hash, a licence), then C-9 the chamber (propose/veto, optimistic 72 h), then C-7 co-founding and dormancy, then C-6 guilds — per `docs/ops/PLAN-C6-C9-2026-09-17.md`, two lanes. The full suite before the collective layer builds. The deploy of `8a515b2`.

---

## 2026-09-17 — D-10: the job board; tuesday22's plan; withdrawWork; the city firm hires by law; household task hires; the wage floor and timely pay; the right of appeal and evaluator standing; jarvis11's two reads; the small vectors file to 35 entries

### Built

Sixteen commits after `7fe6cf9`, all 2026-09-17, `6021edf` to `7f6c9b3`. Five are DECISIONS only (`2caffca`, `e03d28c`, `7cd61f7`, `485d113`, `7f6c9b3`); one is DECISIONS plus the plan file (`b25a1bc`). `vectors.json` (the 2,000-person file) untouched throughout.

- `6021edf` — C-14, the public job board on the Board: open slots with wage and credential required, settled hires with their verdicts (`board/main.ts`, `worker/protocol.ts`, `worker/views.ts`). Page only; the engine untouched. `tests/economy.test.ts` +17 / −4.
- `b25a1bc` — `docs/ops/PLAN-D10-2026-09-17.md` (new, 129 lines; tuesday22) and `docs/DECISIONS.md` +4: the build order (lxii) and (lx) in parallel lanes, then (lxi), then C-3, C-1, C-2; (lxiii) and (lxiv) taken as defaults and put to the principal.
- `f9accab` — (lxii) withdrawWork: a work is withdrawn, never deleted — the text hidden, the tombstone keeps title, tick and hash, the chain row `work:withdrawn`, the daily cap still counts it (`works.ts` +78; `founding.ts`, `present.ts`, `prospectus.ts`, `worker/protocol.ts`, `views.ts`). Door 23. `tests/works.test.ts` +190; `conform`, `doors`, `present`, `prospectus`, `ui.holder` adjusted. Pins unmoved.
- `66809b7` — (lx) the city firm hires by law, employer of last resort: at 08:00 after the seek a jobless credentialed holder takes the nearest city-firm slot at its wage, one week at a time, released and re-offered each Monday; the treasury tops up the firm at payday by the law wage only when it is short (`hire.ts` +281; `scheduler.ts` — `hires.cityRelease` before the seek; `labour.ts`). `tests/hire.test.ts` +313; `exit.test.ts` adjusted. Pins unmoved.
- `d54de85` — vectors: writeWork and withdrawWork appended to `vectors-small.json` (#18–#21); the ticks step to the payday now crosses the city firm's law hire (`bench/doors-vectors-small.ts`, `conform.ts`, `DOORS.md`, `CONFORMANCE.md`). Badge `doors 23/23 · vectors 64/64`; both start hashes unmoved.
- `2caffca` — DECISIONS +6: the parameters (lx) and (lxii) settled in the build, `[assumed]`.
- `6c2e2b3` — (lxi) household task hires: `hireTask`, `acceptTask`, `deliverTask` in `task.ts` (new, 365 lines), the fee escrowed at acceptance and released under the levy at settlement, refunded on failure or deadline, capped at L2; doors 26. C-3's policy side: `wageFloor1..3` as policy fields with calibration bands (L1 2000, L2 2600, L3 3200 cents/h, Nordholm), `Resident.paidShort` recorded at a short payday (`policy.ts`, `calibration.ts`, `levy.ts`, `money.ts`, `labour.ts`, `resident.ts`, `world.ts`, `founding.ts`, `hire.ts`, `present.ts`, `prospectus.ts`; `worldkit/loaders/assumptions.py` +120). The three founding yaml files gained wage-floor entries for loader parity — Veyra and Amaranth scaled by their median wage and marked unmeasured (`founding_veyra.yaml:142` `wage_floor_l1: 900`, `assumption: true`; recorded in DECISIONS). `tests/task.test.ts` (new, 549), `tests/paidshort.test.ts` (new, 191), `policy.test.ts` +94, `doors.test.ts` +21. 31 files, +1,959 / −60. Pins unmoved; the federation pin run by this builder.
- `e03d28c` — DECISIONS +6: (lxi) and the C-3 policy parameters; (lxv) put to the principal.
- `ab636a6` — C-3 at the hire door and by law: a slot under the wage floor for its level is refused; a delivered hire paid short at the first payday fails by law at 17:01, the seat freed and the wage recorded owed (`hire:owed`, no money moved). jarvis11's three corrections: the law never takes the hired of a pending offer, a course with a section behind it keeps its seat, a dropped enrolment goes on the row; the tombstone keeps the withdrawal's signature (`hire.ts` +153, `institute.ts`, `works.ts`, `founding.ts`). `tests/hire.test.ts` +259, `works.test.ts` +11. Pins unmoved.
- `f058e24` — vectors: the wage floor (`setPolicy wageFloor1`) and the household task doors on `vectors-small.json` (#22–#32), a sixth holder admitted as the client; the small file regenerated for the law rows' course ref and the tombstone's signature. Badge `doors 26/26 · vectors 75/75`; both start hashes unmoved.
- `7cd61f7` — DECISIONS +4: C-3's parameters and jarvis11's three corrections.
- `485d113` — DECISIONS +4: task money to a departed household waits in the city; a task-hired seat is passed over by the law take.
- `794a964` — C-1 the right of appeal: `appealHire` within a day of an evaluator's failed verdict, `evaluateAppeal` by a holder one level higher; two failed close it, a split restores the job; the slot held through the window; an undecided appeal lapses. C-2 evaluator standing: the credential at the slot's level, no seat in the hirer's building, standing lost for 30 days after two overturns; credential and level on every evaluation row. One hire per seat re-checked at both acceptance doors (jarvis11). Doors 28 (`hire.ts` +442, `task.ts`, `population.ts`, `policy.ts`, `present.ts`, `founding.ts`, `prospectus.ts`). `tests/hire.test.ts` +385, `task.test.ts` +35, `doors.test.ts` +12. 18 files, +936 / −92. Pins unmoved.
- `d9935ba` — vectors: the appeal doors' refusals on `vectors-small.json` (#33, #34); their landings wait for C-10 — no holder can reach level 2 while the law takes it each morning — pinned in `tests/conform.test.ts:67` as `LANDING_PENDING = ['appealHire', 'evaluateAppeal']` with the reason; the small file regenerated for credential and level on the evaluation rows. Badge `doors 26/28 · vectors 77/77`; both start hashes unmoved.
- `7f6c9b3` — DECISIONS +4: C-1 and C-2 parameters; the appeal landings wait for C-10.

Pins checked 2026-09-17 at `7f6c9b3`: `city/tests/determinism.test.ts:213` `SEED_42_HASH_AT_10000 = 'cf636ab0a6ff7461'`; `city/tests/federation.test.ts:137` `PINNED = 'a238dd9bd7ecc292'`, `:231` `PINNED_THREE = 'e2b3ad557e400fde'`; `city/tests/small-city.test.ts:28` `SMALL_42_HASH_AT_10000 = '336a8e13073a68d3'`. Unmoved. `ACT_KINDS` in `present.ts`: 28 kinds. `vectors-small.json`: 35 entries — 32 act vectors (14 refusals) and 3 steps; `start.hash` 72634628faf93840; the last two entries carry the world hash 7e8f66653be78265 at tick 16,861 (the file has no `end` field). No §7 entry in `city/DESIGN_NOTES_V2.md` for this period; no LESSONS entry.

### Who did what

- **tuesday22** planned D-10 against the code at `6021edf` (`b25a1bc`): the build order, the facts the plan rests on read from `hire.ts`, `founding.ts`, `labour.ts`, `levy.ts` and the scheduler's order at 08:00.
- **Four builders** built in lanes: works (`f9accab`), hire (`66809b7`), task and policy (`6c2e2b3`); then a single engine lane for C-3, C-1 and C-2 (`ab636a6`, `794a964`). Each ran `determinism.test.ts` and `small-city.test.ts` at its step; the (lxi) builder ran the federation pin.
- **jarvis11** audited twice: three corrections applied at `ab636a6`, with two unwritten consequences of the task hire recorded at `485d113`; the stacking gap (one hire per seat at both acceptance doors) and two smaller items applied at `794a964`.
- **Halo** read the stretch before this record and verified the facts above.
- **jarvis22** is running now; its result is not in this record.
- **The coordinator** built C-14 (`6021edf`), recorded the vectors commits and every DECISIONS entry, committed all sixteen.
- **friday22's** hand is in DECISIONS: the six entries of the period.
- **red** wrote this section.

### The principal decided

No `[confirmed]` entry this period. The three decisions (lx)–(lxii) are the principal's "Adopt all three" of the civic-systems note (`docs/ops/PROPOSAL-civic-systems-2026-09-17.md`), recorded in DECISIONS above the D-10 plan entry.

The period's `[assumed]` entries, all 2026-09-17: the D-10 plan filed, (lxiii) and (lxiv) as defaults (`b25a1bc`); (lx) and (lxii) landed, the parameters (`2caffca`); (lxi) and the C-3 policy fields landed, (lxv) put to the principal (`e03d28c`); C-3 at the door and by law, jarvis11's three corrections (`7cd61f7`); two consequences of the task hire (`485d113`); C-1 and C-2 landed, the parameters (`7f6c9b3`).

### Proved

- Per-file runs named in the commit messages and the builders' reports: `works`, `hire`, `task`, `paidshort`, `policy`, `doors`, `conform`, `present`, `prospectus`, `ui.holder`, `exit`, `economy`, `determinism`, `small-city`; `federation` at `6c2e2b3`. No full suite this period; no suite total is claimed here.
- The conform badge at `d9935ba`: `doors 26/28 · vectors 77/77 · L1 77/77 · L2 77/77 · start dcfd3ea898480a4d / 72634628faf93840` (`city/public/doors/CONFORMANCE.md:119`). The builders' `npm run conform` printed it; the coordinator's own runs of `tests/conform.test.ts` passed. No run was made for this record.
- The four pins unmoved (read above).
- No benches run for the record this period.

### Open

- For the principal: (lxiii) which firms are the city's; (lxiv) which fund pays a law hire; (lxv) a law-hired seat cannot take a household task. Older: (lix), (xlvii), (xlviii).
- The appeal doors' landing vectors — `LANDING_PENDING` in `conform.test.ts`, blocked on C-10.
- The full suite and the throughput reading — blocked on an idle machine.
- The deploy of this stretch — not done.
- jarvis22's read — running.

### Next

C-10 credential levels (tuesday22 planning now), which also unlocks the appeal doors' landing vectors; then C-4, C-5, C-13; the full suite and the throughput reading on an idle machine; the deploy of this stretch.

---

## 2026-09-16 (late night) – 2026-09-17 — D-9: the flat map, motion and the Star Wars UI; the institutions on the map; the research; tuesday22's plan; share links and the cutaway; writeWork; the War Bay hire door; works shown; jarvis11's five reads; the small vectors file; the launch page at /join/; Halo's reads

### Built

Twenty-two commits after `cbfba88`, 2026-09-16 and 2026-09-17, HEAD `7fe6cf9`. One commit sits between the last recorded HEAD (`3f9a0bd`) and this range: `cbfba88` — the night section and the §7 entry for the 3D front page and the neon pass. Two of the twenty-two are DECISIONS only (`78f65f3`, `7400390`); `6cca105` is DECISIONS plus the plan file; two are research files only (`11f6e61`, `6edbd07`).

- `78f65f3` — `docs/DECISIONS.md` +4: the `[confirmed]` entry — the map flat like the isometric reference, better motion, a Star Wars UI.
- `7050067` — the map flat: flat-shaded matte materials, a fixed sun with soft shadows, no fog, a pale day sky and a deep blue night, the town on a floating plate with an earth side, green ground, grey roads, striped farmland, hashed trees, white towers with blue window bands, cream houses with coloured roofs (`render3d/terrain.ts`, `lighting.ts`, `buildings.ts`, `materials.ts`, `geometry.ts`, `scene.ts`; +617 / −198). No test change.
- `a46f77c` — the 3D page's UI in a Star Wars register: holo-blue chamfered panels with a scanline, the crawl's yellow as the one accent, Orbitron type, bracketed titles, a holo clock, a flicker on mount off under reduced motion (`3d.html` +166 / −84, `app3d.ts` +3). No test change.
- `7391824` — motion: the camera frames the town by map size (distance 12 + 1.125 × size: 96 → 120, 256 → 300) at a 45-degree diamond; wheel and keys ease, drag 1:1; double-click flies to the ground; residents and trucks lerp between worker frames; a slow idle orbit after twenty seconds (`render3d/camera.ts` +204 region, `agents.ts`, `scene.ts`). No test change.
- `1d4d4d4` — the land flat: the heightfield takes a relief scale and the town uses 0, water painted on the plate, not cut (`render3d/transform.ts`, `terrain.ts`). `tests/render3d.transform.test.ts` +8 pins the flat case and keeps the map's relief. Pins unmoved.
- `7400390` — `docs/DECISIONS.md` +6: the `[confirmed]` entry D-9, the vision, verbatim.
- `11f6e61` — research: yolo's ten attraction-point leads (`docs/research/intake/2026-09-16-attraction-points-leads.md`), solo's verdicts (`docs/research/2026-09-17-attraction-points-verified.md`): the A2A skills field canonical, the well-known SKILL.md convention shipped, cheqd VC killed, the scale numbers self-reported.
- `46cad0b` — BOZ INSTITUTE and WAR BAY labelled on the 3D map; the inspector shows the principal's quote, what the engine does and the open items; the Evolution page's section; `city/docs/INSTITUTIONS.md` (new, 67 lines); `src/ui/institutions.ts` (new); the decisions panel stops above the help line. `tests/ui.institutions.test.ts` (new, 36 lines). Two lead sheets (`docs/research/2026-09-16-agent-hiring-leads.md`, `2026-09-16-interiors-works-attraction-leads.md`) with solo's verdicts on the first. Pins unmoved.
- `6edbd07` — solo's verdicts on the second sheet (+17): three.js clippingPlanes real, portals third-party; AI Town's journal engine-internal; Moltbook's three failure modes; fork-and-run and a followable identity as the attraction mechanisms with evidence.
- `219e09c` — the launch site, a new top-level `site/` (static, no build): `index.html`, `skill.md`, `llms.txt`, `openapi.json`, `site.css`, `site.js`, `README.md` (813 lines). Five claims corrected by Halo before commit (the levy is 0 until a governor signs it; the credential lands on the resident's own chain; the OpenAPI a subset of the exempt routes; "four primitives" nobody's phrase; repository links said to have no public remote). No test change.
- `6cca105` — `docs/ops/PLAN-D9-2026-09-17.md` (new, 84 lines; tuesday22) and `docs/DECISIONS.md` +8: the fills and (lx)–(lxii). The plan's page: https://claude.ai/artifact/N5x5vsGBNyiGy2QMvpCae2.
- `fe2aae5` — share links `?focus=b:<id>` / `?focus=r:<id>`, a copy-link button in the inspector, watch-in-3D per recording (`ui/focus.ts` new, `app3d.ts`, `evolution/main.ts`, `inspector.ts`); the cutaway — the roof off and one floor shown by a clipping plane on one overlaid mesh, the floor by distance, the inspector says the floor and who is inside (`render3d/buildings.ts` +219, `scene.ts`). `tests/render3d.cutaway.test.ts` (new, 285 lines), `tests/ui.focus.test.ts` (new, 52). No engine change. Pins unmoved.
- `dcf8f09` — writeWork: a titled note of up to 2,000 characters, three a day per principal, the text in state and only its hash on the chain, the engine never reads it (`sim/systems/works.ts` new, 212 lines; `founding.ts`, `present.ts`, `prospectus.ts`). Nineteen doors, 45 vectors, start hash unchanged; the four prospectus files +6 each. `tests/works.test.ts` (new, 225), `tests/hire.spike.test.ts` (new, 120): a holder earns `social:1` at tick 10,981 on the small city and founds a firm. Pins unmoved.
- `993baf8` — the War Bay hire door, four phases: `hire` (the hirer, a holder owning an open firm, signs firm, slot, the slot's wage, the credential, the hired, an evaluator, a deadline; the slot reserved), `acceptHire` (the hired signs the same bytes under its own key, no draw from the labour stream), delivery by law at the first Friday payday present, `evaluateHire`, settlement by law; a missed deadline fails by law; the seek skips a seat under contract; no money beyond the ordinary wage (`sim/systems/hire.ts` new, 630 lines; `scheduler.ts`, `world.ts`, `population.ts`, `resident.ts`, `founding.ts`, `present.ts`, `prospectus.ts`). Twenty-two doors. `tests/hire.test.ts` (new, 626 lines); `doors`, `conform`, `present`, `prospectus`, `sim-hygiene`, `works` tests adjusted. Pins unmoved.
- `f28d67b` — works shown: the resident's works in the inspector (title, day, hash, a fold for the text), the town summary's count and latest five (`worker/views.ts`, `protocol.ts`, `inspector.ts`); the holder panel drafts a writeWork act (`ui/holder.ts` +59); the War Bay paragraph says the four phases. `tests/worker.present.test.ts` +58. Pins unmoved.
- `f0e4f30` — jarvis11's reads: a delivered hire nobody evaluates closes by law after the same deadline, settled `unevaluated` with the job kept; the door admits only `passed` or `failed` (`hire.ts` +25 / −4); accepting a hire drops a course (`institute.ts`, rule 6's exception); the holder panel says a work's title rides the chain with its hash; `tests/exit.test.ts` recorded labour's place before the hire pass and was wrong (+4 / −1). `tests/hire.test.ts` +47. `docs/DECISIONS.md` +4 records the three fills. Pins unmoved.
- `9886415` — the small vectors file: `public/doors/vectors-small.json` (new, 746 lines) recorded on layout small — four holders admitted, graduation at tick 10,980, a firm founded as a fixture step, then hire, acceptHire, the payday's delivery, evaluateHire, a register/decide pair; the vectors bench split into `doors-vectors-lib.ts` (new), `doors-vectors-small.ts` (new), `doors-vectors.ts` (−175); the runner grades both files; the 2,000-person file byte-identical; the small prospectus carries its own vectors (`halvik-small.json`, `vectors: null` gone); every door has a public landing and refusal. `tests/conform.test.ts` (+101 / −40 region), `present.test.ts`, `prospectus.test.ts`. Pins unmoved.
- `0e35f81` — the launch site's watch-it-run section with the live town's link shapes; the hire and the credential said as built for residents, closed to outside DIDs until Q-3 (`site/index.html`, `site.css`, `skill.md`). Every link checked 200 at `9886415`.
- `8f2e029` — `docs/GOVERNANCE-LAUNCH-PLAN.md` +13: Institute credentials on the A2A card, queued as a spec proposal for the principal.
- `e353c4c` — `site/` rides at `/join/` on every deploy (`deploy/pages.sh` +2, `docs/LAUNCH.md` +4).
- `8e65680` — Halo's reads: the War Bay said built in `INSTITUTIONS.md`, `evolution.html` and `ui/institutions.ts`; a misquoted day in `bench/doors-vectors-small.ts` (4 lines).
- `7fe6cf9` — the site's canonical URL `boz-city/join/`; the offer JSON linked directly (`site/index.html`, `llms.txt`, `README.md`).

Pins checked 2026-09-17 at HEAD (`7fe6cf9`): `city/tests/determinism.test.ts:213` `SEED_42_HASH_AT_10000 = 'cf636ab0a6ff7461'`; `city/tests/federation.test.ts:137` `PINNED = 'a238dd9bd7ecc292'`, `:231` `PINNED_THREE = 'e2b3ad557e400fde'`; `city/tests/small-city.test.ts:28` `SMALL_42_HASH_AT_10000 = '336a8e13073a68d3'`. Unmoved. No §7 entry in `city/DESIGN_NOTES_V2.md` for this period (the last is the 3D front page and the neon pass, `cbfba88`); no LESSONS entry.

### Who did what

- **yolo** (twice) scouted: the attraction-point leads (`11f6e61`); the hiring and the interiors/works/attraction leads (`46cad0b`).
- **solo** (twice) verified: autopolis exists; ACP, ERC-8004 and A2A confirmed; agnt8x Passport is copy; AI Town's journal is engine-internal; clippingPlanes real, portals third-party (`11f6e61`, `46cad0b`, `6edbd07`).
- **tuesday22** planned D-9 from the verified research (`6cca105`).
- **Six builders** built the flat map (`7050067`), the Star Wars UI (`a46f77c`), the motion (`7391824`), the institutions on the map (`46cad0b`), share links and the cutaway (`fe2aae5`), writeWork and the spike (`dcf8f09`), the hire door (`993baf8`), works shown (`f28d67b`), the small vectors file (`9886415`).
- **jarvis11** read the hire and found five things: an open-ended delivered state (closed by law), one wrong test (`exit.test.ts`), three fills unrecorded — fixed and recorded in `f0e4f30`.
- **Halo** (twice) read: 27 true, 2 wrong stale sentences (the War Bay said not built; a misquoted day — `8e65680`); and 27 true, 2 wrong. Five claims on the launch page corrected before `219e09c`.
- **The governance session** built `site/` (`219e09c`, `0e35f81`, `7fe6cf9`), supplied the A2A skills fact and the design reference.
- **The coordinator** built the flat land (`1d4d4d4`), fixed the cutaway's direction and `floorOf`'s inversion, wrote the plan file and its page, recorded D-9 and the fills (`7400390`, `6cca105`, `f0e4f30`), put `site/` at `/join/` (`e353c4c`), committed all twenty-two.
- **friday22's** hand is in DECISIONS: the D-9 fills with (lx)–(lxii); the three fills jarvis11 found.
- **red** wrote this section.

### The principal decided

Verbatim in DECISIONS, all dated 2026-09-16:
- `[confirmed]` "The map flat like a clean isometric vector city; better motion graphics; the 3D page's UI with a Star Wars vibe" (`78f65f3`).
- The land flat — the same entry's reading, built as `1d4d4d4` after "i like this map".
- `[confirmed]` "The vision: people's agents learn at the Boz Institute and are hired at the War Bay; zoom inside buildings; agents create things; find the attraction points; make the policies now" — D-9 (`7400390`).

The period's `[assumed]` entries: the D-9 plan's fills with questions (lx)–(lxii) (`6cca105`); the three fills jarvis11 found and one open-ended state closed (`f0e4f30`).

### Proved

- Per-file runs named in the commit messages: `render3d.transform`, `ui.institutions`, `render3d.cutaway`, `ui.focus`, `works`, `hire.spike`, `hire`, `doors`, `conform`, `present`, `prospectus`, `worker.present`, `ui.holder`, `exit`. No full suite since `e4cd3f3` (1,095 of 1,098); no suite total is claimed here.
- The conform badge at `9886415`: `doors 22/22 · vectors 60/60 · L1 60/60 · L2 60/60 · start dcfd3ea898480a4d / 72634628faf93840` (`city/public/doors/CONFORMANCE.md:115`). The 2,000-person `vectors.json` byte-identical across the split.
- The hire test: graduation at tick 10,980 (`tests/hire.test.ts:206` — the row written at 14:59 of day 7, tick 10,979; the spike printed 10,981 at sixty-tick granularity); slot 41 in `vectors-small.json`. The delivery tick 16,860 and the wage 2545 come from the coordinator's brief; grep finds neither in a committed file.
- The four pins unmoved (read above).
- Live, checked 2026-09-17: `https://bozocan22.github.io/boz-city/3d.html?focus=b:26` 200; `/doors/vectors-small.json` 200; `/join/` 200.
- No benches run for the record this period.

### Open

- (lx) a city-owned firm hiring at the War Bay; (lxi) a hire by a household as a task with a fee; (lxii) retracting a work — defaults `[assumed]` in `6cca105`. Earlier: (xlix)–(lix) as in the late section; (l) the War Bay hire is built for residents, the vision's answer in `7400390`. `docs/HANDOFF-2026-09-16.md` §6 (a)–(h).
- The bloom: not built.
- The throughput reading (2.9 s, 3.3 s vs 1.44 s) — unverified, blocked on an idle machine.
- Q-3: the hire and the credential are closed to outside DIDs until the principal answers; the launch page says so.
- The Institute credentials on the A2A card — a spec proposal queued for the principal (`8f2e029`).
- A full suite run since `e4cd3f3`: not done.

### Next

The coordinator's call.

---

## 2026-09-16 (night) — worldkit under 3.14; the Gemini thirty-day wait; the manifest layout fix and the Evolution reports; the 3D direction relayed; the front page forwards to 3D; the neon pass; jarvis11's two reads

### Built

Eight commits after `db25286`, all 2026-09-16, HEAD `3f9a0bd`. Two of them (`dfcbef4`, `f88b769`) are DECISIONS only; one (`8a0e404`) is a research file from the governance session.

- `6e7310a` — `city/worldkit/README.md` +6: the same 94 worldkit tests pass under Python 3.14 (`uv run --python 3.14`), and the export writes `calibration.generated.{json,d.ts}` byte-identical to the committed files; the engine reads only those two files, so the interpreter version is in no hash. No test change.
- `dfcbef4` — `docs/DECISIONS.md` +4: the `[assumed]` entry that the thirty-day Gemini recording of the small city waits for (xlvii), with mage's cost (about seventy calls, roughly one cent; worst case under thirty cents); Python 3.14 noted.
- `8a0e404` — `docs/research/intake/2026-09-16-autopolis-design-reference.md` (new, 97 lines): autopolis.city read at source by the governance session — its tokens, page structure, agent application surface; what to take and what our laws refuse. Not listed in the coordinator's brief; accounted for here from `git log`.
- `2467225` — the manifest carries `layout` on the two small lines (`bench/record-minds.ts` +2, `public/minds/index.json` +2): the renderer had dropped it, so the small page could not tell its recordings from a 2,000-person lone city. Found by the suite (two manifest assertions); rewritten with zero model calls. `tests/agents.gemini-mind.test.ts` +23 / −5 reads five recordings and both modes. The Evolution page gains "Reports and offers" — each validate report with its failing checks named, each prospectus with its doors (`src/evolution/main.ts` +187, `evolution.html` +50, `docs/EVOLUTION.md` +17). Pins unmoved.
- `f88b769` — `docs/DECISIONS.md` +4: the `[confirmed, relayed]` entry — the city view true 3D by default with more neon on Autopolis's design details.
- `87a54e5` — the front page is the 3D city: `index.html` (+11) forwards to `3d.html` with every parameter; `?view=2d` keeps the 2D observatory. The Board, Evolution and the 3D help panel link accordingly (`3d.html` +71 / −40 region, `board.html`, `evolution.html`, `docs/LAUNCH.md`). No test change.
- `7c6db14` — the neon pass on the Autopolis reference (`render3d/terrain.ts` +107, `agents.ts` +64, `lighting.ts` +27, `materials.ts` +25, `buildings.ts` +17, `labels.ts` +16): void night sky and fog, cyan road lines with a halo baked into the ground's emissive texel, water shimmer, windows at 1.8 gain (GLOW_GAIN 1.4 → 1.8) in the palette's cyan and amber, rimmed agents at night, mono `01 / HALVIK` and `DAY n · hh:mm` labels, the page's tokens. No bloom (would need the scene's render loop); no new dependency. Render tests green per the commit; no test file changed. Pins unmoved.
- `3f9a0bd` — jarvis11's two reads fixed: the city label numbered by the city's id, not its position (`render3d/labels.ts` +4 / −1, `scene.ts` +1); the Evolution page's 2D links carry `?view=2d` (`evolution/main.ts`, `docs/EVOLUTION.md`); `docs/LOOK.md` +4 says the 3D page carries the reference's tokens. No test change.

Pins checked 2026-09-16 at HEAD (`3f9a0bd`): `city/tests/determinism.test.ts:213` `SEED_42_HASH_AT_10000 = 'cf636ab0a6ff7461'`; `city/tests/federation.test.ts:137` `PINNED = 'a238dd9bd7ecc292'`, `:231` `PINNED_THREE = 'e2b3ad557e400fde'`; `city/tests/small-city.test.ts:28` `SMALL_42_HASH_AT_10000 = '336a8e13073a68d3'`. Unmoved. No §7 entry in `city/DESIGN_NOTES_V2.md` and no LESSONS entry for this period.

### Who did what

- **mage** measured and estimated the thirty-day Gemini cost and read the case for waiting (`dfcbef4`).
- **The Evolution builder** built the manifest layout fix and the Reports and offers section (`2467225`).
- **The neon builder** built the pass (`7c6db14`).
- **jarvis11** read the pass and found two defects: the city label numbered by position, the Evolution 2D links without `?view=2d` (`3f9a0bd`).
- **The governance session** (agent-port-universe-ea) relayed the principal's words with the principal at its screen, read autopolis.city and committed the intake file (`8a0e404`); the 3D decision is recorded as relayed (`f88b769`).
- **The coordinator** ran the worldkit tests under 3.14 (`6e7310a`), recorded the two DECISIONS entries, ran the full suite, forwarded the front page (`87a54e5`), fixed jarvis11's two reads, redeployed three times, committed all eight.
- **red** wrote this section.

### The principal decided

- `[confirmed, relayed]` 2026-09-16: "The city view is true 3D by default, with more neon, on Autopolis's design details" (`f88b769`). Relayed by the governance session; the words as relayed are in DECISIONS, not here.
- The principal let us know Python was updated (3.14); noted in `dfcbef4` and `6e7310a`.

### Proved

- The full suite on the tree at about `6e7310a`: 1,106 of 1,110. The four failures: two manifest assertions (the missing `layout` on the small lines — fixed in `2467225`) and the two throughput pins, 2.9 s and 3.3 s against the 1.44 s budget. The throughput pins ran while the other session's dev server and six more node processes were on the machine. That reading is unverified until an idle machine; it is not recorded as a regression.
- worldkit: 94 tests under Python 3.14; export byte-identical (`6e7310a`).
- Render tests green after the neon pass, per `7c6db14`. No benches run for the record.
- Live: the front page is the 3D town since `87a54e5`; redeployed three times tonight.

### Open

- Unchanged: (xlix)–(lix) as in the late section; `docs/HANDOFF-2026-09-16.md` §6 (a)–(h).
- The throughput reading (2.9 s, 3.3 s vs 1.44 s) — unverified, blocked on an idle machine.
- The bloom: not built, not asked for; would need the scene's render loop.
- The thirty-day Gemini small recording waits for (xlvii), the principal's (`dfcbef4`).

### Next

The pins' suite on an idle machine, when the governance session signals.

---

## 2026-09-16 (late) — the §7 entries; the prospectus files regenerated; the small city's prospectus, the Board by mode, ?seed=; the holder note, the kinds pinned, the seed sweep; the holders' run on the town

### Built

Seven commits after `54ade6a`, all 2026-09-16, HEAD `5509865`. Two commits sit between the last recorded HEAD (`fd2c590`) and `54ade6a` and were not in the evening section: `c958d4e` — the conduct and the door table ride with the built site (`deploy/pages.sh` +1, `evolution.html` +7, `board/main.ts` +9 / −1; no test change); `271a011` — `city/README.md` +20 / −10: status Phase 8, the one small city, live; the four pages, the deploy command, the pins and the records named. `54ade6a` is the evening section itself.

- `e7d280d` — `city/DESIGN_NOTES_V2.md` +12: the three Phase 8 §7 entries the evening section said were missing — the small city pinned and recorded; what a spectator sees of the new laws (the inspector, the Board's town block, the 3D small mode, the Board on the site); `validate --layout small` and the Engel episode.
- `30bbe13` — the three shipped prospectus files regenerated (`public/prospectus/{amaranth-city,dorsk,halvik}.json` +24 each): eighteen doors; register, decide, startProject and fundProject had been missing since `5e267b5`. The federation Halvik's world hash at tick 10620 came back `e93eb1c8107b8bba`, unchanged — the default path unmoved. No test change.
- `2b19fd6` — the small city's own prospectus: `prospectus --layout small` builds from the page's options (`bench/prospectus.ts` +29, `src/prospectus/prospectus.ts` +40), `public/prospectus/halvik-small.json` (new, 481 lines, `layout: small`, hash `c170e6eb79d5465d`) with the small validate report attached and its Engel FAIL shown; `validateIsFor` compares the report's layout with the world's, `vectorsAreFor` compares the vectors' start population too, so the small file carries `vectors: null`. The Board reads the offer and the report by the page's mode (`board/bridge.ts` +3, `board/main.ts` +13); `?seed=` on the 2D page names the seed in its error line (`app.ts` +16). `tests/prospectus.test.ts` +49, `tests/board.bridge.test.ts` +14, `docs/PROSPECTUS.md` +4. Pins unmoved.
- `d63d005` — the holder panel says no governor is seated on this page's city; its kinds are the engine's `ACT_KINDS`, no longer a hand copy (`ui/holder.ts` +42 / −26). `tests/ui.holder.test.ts` +20 pins the kinds (eighteen today). `tests/small-city.test.ts` +28: the seed sweep — of seeds 1..24 on 96 tiles, seed 2 finds no 6×6 lot for the park and seed 4 none for the vegetable farm; the plan fails closed; the other twenty-two lay the full shape (8 towers, 45 houses, 4 company towers, the Institute, the War Bay). No hash pinned for the sweep. Pins unmoved.
- `bf5fda1` — `docs/DECISIONS.md` +4: the `[assumed]` entry on the three seams (the prospectus knows its layout; the Board's world message carries `layout`; the holder note) and the seed sweep's measure.
- `5b12a69` — `city/DESIGN_NOTES_V2.md` +4: the §7 entry "the town's own page: prospectus, holders, and two seeds that find no lot".
- `5509865` — `city/DESIGN_NOTES_V2.md` +1 / −1: the same entry says plainly that the holders' twelve-day run passes Engel where the thirty-day report fails it (Halo's note).

Pins checked 2026-09-16 at HEAD (`5509865`): `city/tests/determinism.test.ts:213` `SEED_42_HASH_AT_10000 = 'cf636ab0a6ff7461'`; `city/tests/federation.test.ts:137` `PINNED = 'a238dd9bd7ecc292'`, `:231` `PINNED_THREE = 'e2b3ad557e400fde'`; `city/tests/small-city.test.ts:28` `SMALL_42_HASH_AT_10000 = '336a8e13073a68d3'`. Unmoved.

### Who did what

- **tuesday22** planned the stretch, A–F.
- **Builders 1 and 2** built the small city's prospectus, the Board by mode and `?seed=` (`2b19fd6`); the holder note, the kinds pin and the seed sweep (`d63d005`).
- **Halo** read the stretch: 27 claims true, none wrong, one note taken — the holders' run passing Engel at twelve days where the report fails it at thirty had to be said plainly (`5509865`).
- **friday22's** hand is in DECISIONS: the `[assumed]` entry on the three seams and the seed sweep (`bf5fda1`).
- **The coordinator** wrote the §7 entries (`e7d280d`, `5b12a69`, `5509865`); regenerated the prospectus files (`30bbe13`); added the `vectorsAreFor` population check; ran `validate --holders 3 --layout small` to a scratch directory — 3 holders, 2 admitted, 1 adoption, 12 days, every check passing, hash `bae144df75534266` — a scratch artifact, not committed; committed all seven.
- **red** wrote this section.
- **The principal** was not asked anything this session.

### The principal decided

No `[confirmed]` entry dated 2026-09-16 in `docs/DECISIONS.md`. The period's one entry is `[assumed]`: "Three small seams for the town's own page" (`bf5fda1`). The last `[confirmed]` entries are the four of 2026-09-15.

### Proved

- Per-file runs named in the commits: `small-city` (6 tests), `ui.holder`, `prospectus` (15), `board.bridge` (14), `worker.client`, `determinism`. The build. No full suite since `e4cd3f3` (1,095 of 1,098); no suite total is claimed here.
- The default path: the federation Halvik's hash at tick 10620 `e93eb1c8107b8bba`, unchanged across the regeneration (`30bbe13`).
- The small city's prospectus hash `c170e6eb79d5465d`; its attached report `6fead2cba59470f6`, Engel FAILING as before.
- The holders' run on the town (scratch, not committed): 3 holders, 2 admitted, 1 adoption, 12 days, all checks pass, hash `bae144df75534266`; Engel passes at twelve days (r = −0.39 over 52 households) where the thirty-day report fails it — the same ten-household quintiles, another window.
- No benches run for the record this session.
- Live: `https://bozocan22.github.io/boz-city/prospectus/halvik-small.json` answers 200, `layout: small`, hash `c170e6eb79d5465d`.

### Open

- Unchanged: (xlix) skills and tuition; (l) the War Bay hire; (li) the levy on wages; (lii) the lights; (liii) a pending registration with no governor; (liv) the vault's population vs D-8; (lv) `WORLD_PLAN.md`; (lvi)–(lviii) projects' materials, money and result; (lix) may a check declare a sample too small to judge. `docs/HANDOFF-2026-09-16.md` §6 (a)–(h) holds each with its blocker.
- The two seeds: 2 and 4 of 1..24 find no lot on 96 tiles; pinned as the fact. A fallback (a larger map, a smaller park) is not planned.
- The small prospectus carries `vectors: null` until vectors are recorded on the small city.
- A full suite run since `e4cd3f3`: not done.

### Next

The coordinator's call.

---

## 2026-09-16 (evening) — the suite count; the small city pinned and recorded; the handoff; the 3D small mode; the inspector; jarvis22's contract reads; the Board's town block and the Board on the site; validate --layout small and the Engel episode

### Built

Sixteen commits after `4021060`, all 2026-09-16, HEAD `fd2c590`.

- `57ebb4c` — `city/DESIGN_NOTES_V2.md` +20: the five Phase 8 §7 entries the last section said were missing (the evolution page, the lights, the launch, interests and projects, the page opening on the small city).
- `e4cd3f3` — the full suite in one process after the re-pin: 1,095 of 1,098, 46 minutes. The three failures were assertions behind landed changes — the levy's place after the owner's turn, the Institute and projects between the seek and labour, `incomeTax` on the treasury tally — updated to the rules as recorded: `tests/exit.test.ts`, `tests/owner.test.ts`, `tests/premises.test.ts` (+10 / −3). No code touched. Pins unmoved.
- `6f1c915` — the small city recorded and pinned: `bench/record-minds.ts --layout small` (the header and manifest carry `layout` only when set); fake/echo on Halvik at 100, verified 2,880 ticks, hash `4f3cab64247ef7de` (`public/minds/fake-echo-42-halvik-single-small.json`); the small city's own determinism pin `SMALL_42_HASH_AT_10000 = '336a8e13073a68d3'` with provenance in `tests/small-city.test.ts` (+17). `docs/MINDS.md`, `public/minds/index.json`. The three old pins unmoved.
- `c0ff3d7` — the small city recorded with Gemini: six of six APPROVE, verified 2,880 ticks, hash `fc7446d8df4ca8ba` (`public/minds/gemini-gemini-2.5-flash-42-halvik-single-small.json`). No test change.
- `0dcd9e9` — `docs/HANDOFF-2026-09-16.md` (new, 183 lines) for whoever takes one remaining piece alone; §6 lists (a) the War Bay hire door through (h) the small unblocked items. Halo read it: about 130 claims true, one wrong date fixed. `HANDOFF-2026-09-14.md` marked superseded (+2). DECISIONS +4: friday22's correction — the colliding numerals (xlix) and (l) are both same-day, 2026-09-15; cite the line or the title, not the date.
- `3a51dd9` — `docs/LESSONS.md` +36, tom's second 2026-09-16 entry: the guard belongs at the write step; a quote is verbatim or labelled; a swallowed deploy error is a lying echo.
- `bfaa566` — Open (xxxiv) tested: `tests/leaving.test.ts` +34 — a return keeps the seat's own age, name and stage; the passport is read for identity alone and its form still checked. Pins unmoved.
- `31d16af` — the 3D page in small mode: no world layer (no continent, island, corridor, border or lane), the one city on a plain ground; federation mode byte for byte as before (`app3d.ts`, `render3d/scene.ts` +103 / −16). `tests/render3d.transform.test.ts` +33. Pins unmoved.
- `c462a55` — the inspector shows a resident's interests, the course at the Boz Institute (section n of 5, the building linked) and the credentials earned; the view carries them only when present (`ui/inspector.ts`, `worker/protocol.ts`, `worker/views.ts`, `observatory.css`). `tests/worker.present.test.ts` +40. Pins unmoved.
- `f0f0d6d` — jarvis22's contract reads, first commit: **carried only `docs/DECISIONS.md` (+4)** — the `[assumed]` entry on the subject grammar `<domain>:<verb>`, the projection bodies and the project name on the chain. The message named DOORS.md, CONFORMANCE.md and the household refusal; the files were not in the commit. Halo flagged it.
- `69a44e1` — the files the last commit missed: `city/docs/DOORS.md` cells renumbered (leave #34/#35, the return #37, adopt #38/#39), twelve files; the household refusal on both project doors and in the projects header (`projects.ts` +5 / −1); `public/doors/CONFORMANCE.md` says §4 rules 2–3 apply and rule 1 does not. No test change.
- `281c720` — the Board shows the town: the Institute's enrolled and graduated, registrations by status, shared projects open and finished with funded over target and a table of the open ones; the summary carries the group only when the world has any of them (`board/main.ts` +58, `ui/summary.ts`, `worker/protocol.ts` +37, `worker/views.ts` +59). `tests/economy.test.ts` +27. Pins unmoved.
- `917970d` — the Board on the static site: `deploy/pages.sh` copies `reports/validate-42.{json,md}` into `dist/reports/` and the Data tab reads it there; a dev-only route's 404 says the dev-server sentence (`board/main.ts` +11 / −2). No test change.
- `b0a37ee` — `validate --layout small` (`bench/sim-bench.ts` +12, `bench/validate.ts` +28 / −6): the small city's own thirty-day report, `reports/validate-42-small.{json,md}` (new), world hash `6fead2cba59470f6`; `pages.sh` ships it and the Board on the site reads the small report first. As committed, every check passed: Engel's quintile order was "reported, not judged" under 200 households — a pass path, recorded `[assumed]` in DECISIONS (+4). `tests/validate.test.ts` +16 / −6.
- `ae5a1eb` — reversed the same hour. Halo read the pass path as the thing the record forbids (2026-09-09: a check the founded town fails is pinned with its reason, not widened). `bench/validate.ts` judges Engel as it always did (+7 / −14); `reports/validate-42-small.{json,md}` now say FAILING on that one check — r = −0.27 over 50 households, 3 of 5 quintile comparisons falling, hash `6fead2cba59470f6` unchanged; `tests/validate.test.ts` pins the failure with its reason. DECISIONS +6: the `[correction]` and Open (lix).
- `fd2c590` — the small-city Engel pin reads the thirty-day window the report carries (`tests/validate.test.ts` +5 / −2): at seven days the ten-household quintiles happen to fall 4 of 5 (r = −0.23) and the check passes, which is the noise the pin describes; at thirty, `fallingSteps` is 3.

Pins checked 2026-09-16 at HEAD (`fd2c590`): `city/tests/determinism.test.ts:213` `SEED_42_HASH_AT_10000 = 'cf636ab0a6ff7461'`; `city/tests/federation.test.ts:137` `PINNED = 'a238dd9bd7ecc292'`, `:231` `PINNED_THREE = 'e2b3ad557e400fde'`. Unmoved. New this session: `city/tests/small-city.test.ts:28` `SMALL_42_HASH_AT_10000 = '336a8e13073a68d3'`.

§7 has no entry for the small-city pin and recordings, the 3D small mode, the inspector, the Board's town block, the Board on the site, or `validate --layout small`. `57ebb4c` is the only §7 commit of the span.

### Who did what

- **Six builders** built: the small-city pin and recordings (`6f1c915`, `c0ff3d7`); the 3D small mode (`31d16af`); the inspector's interests, course and credentials (`c462a55`); the Board's town block (`281c720`); the Board on the site (`917970d`); `validate --layout small` (`b0a37ee`).
- **jarvis22** read the contracts: the subject grammar on the chain, the projection bodies, the project name; the DOORS.md cells out of order; the household refusal missing from the project doors; which §4 rules CONFORMANCE applies (`f0f0d6d`, `69a44e1`).
- **Halo** made two more passes: the handoff and the record — about 130 claims true, one wrong date; then the day's commits — 27 true, with two findings: `f0f0d6d` carried only DECISIONS while its message named the files (fixed in `69a44e1`), and the Engel pass path in `b0a37ee` was a widening in disguise (reversed in `ae5a1eb`).
- **tom** wrote the second 2026-09-16 lessons entry (`3a51dd9`).
- **friday22's** hand is in DECISIONS: the numerals correction, the two `[assumed]` entries (jarvis22's rules; the small report), the `[correction]` and Open (lix).
- **red** wrote this section.
- **The coordinator** ran the full suite and updated the three assertions (`e4cd3f3`); wrote the §7 entries (`57ebb4c`) and the handoff (`0dcd9e9`); tested (xxxiv) (`bfaa566`); made the Engel reading in `b0a37ee`, reversed it in `ae5a1eb`, and set the pin's window in `fd2c590`; committed all sixteen; redeployed the site five times.
- **The principal** was not asked anything this session; (lix) waits for him.

### The principal decided

No `[confirmed]` entry dated 2026-09-16 in `docs/DECISIONS.md`. The period's entries are one `[friday22 correction]`, two `[assumed]` and one `[correction]` (titles under Built). The last `[confirmed]` entries are the four of 2026-09-15 in the section below.

### Proved

- The full suite in one process at `e4cd3f3`: 1,095 of 1,098 passed, 46 minutes; the three failures were stale assertions, updated in that commit. No full suite has been run since; every later commit names its own per-file run in the message (`small-city`, `leaving`, `render3d.transform`, `worker.present`, `economy`, `validate`). No suite total after `e4cd3f3` is claimed here.
- The small city: determinism pin `336a8e13073a68d3` at 10,000 ticks; fake recording `4f3cab64247ef7de` and Gemini recording `fc7446d8df4ca8ba`, both Halvik, both verified 2,880 ticks; Gemini six of six APPROVE.
- The small city's thirty-day validate report (`reports/validate-42-small.md`, hash `6fead2cba59470f6`, 43,200 ticks, 2.3 s): five of six checks PASS — money conservation drift 0 cents; determinism identical; rent-to-income median 30.8 % over 24 renting households; basket index 80.1 to 115.8, ending 108.9; provenance 19 calibrated, 64 assumed. Engel FAIL: r = −0.266 over 50 households, 3 of 5 quintile comparisons falling.
- No benches run for the record this session.
- Live: `https://bozocan22.github.io/boz-city/` redeployed five times; the Board's Data tab reads the small city's report from the static build — FAILING on Engel's quintiles, five of six pass.

### Open

- (lix), new — may a check declare a sample too small to judge? Fifty households make quintiles of ten; either "reported, not judged" under a sample floor (the coordinator's reading, reversed) or the small city carries the FAIL until it grows. The principal's.
- As before: (xlix) skills and tuition; (l) the War Bay hire — who holds the key, a fee; (li) the levy on wages; (lii) the lights; (liii) a pending registration with no governor; (liv) the vault's population vs D-8; (lv) `WORLD_PLAN.md`; (lvi)–(lviii) projects' materials, money and result; (xlvii) the OpenAI recording and the prompt; Q-3 which chain is the record. `docs/HANDOFF-2026-09-16.md` §6 (a)–(h) holds each with its blocker.
- The War Bay hire door: not built; blocked on (l) and (li).
- §7 entries for the six builds of this session: not written.
- trevor's `rules_version` proposal: `[proposed]`, with the spec owner.

### Next

The coordinator's call.

---

## 2026-09-15 / 16 — the re-pin; the pivot to one small city; S1 the layout, S6 the look, S2 the Institute, S4 the registration door, S5a the evolution page, S3 the lights, the launch, S5b interests and projects, the page opening on the small city

This section replaces an earlier one that stopped at `831fef4` and said S2 and S4 were uncommitted. Halo found it stale on 2026-09-16.

### Built

Twenty commits since the last recorded one (`5249b5f`), 2026-09-15 and 2026-09-16. Three in the span are the other session's, not in `city/`: `d3beea6` admit.py reads the laws before signing; `f76f1d0` the runtime README; `97fef10` Q-9 in OPEN_QUESTIONS.

- `5e267b5` (09-15) — the re-pin: rents against net, the audit ring cursor, room-sharing at admission. 65 files, +2,593 / −15,565. `founding.ts` step 5 prices the ladder against the median earner's net month (tax rate 0.40 on seed 42); rent-to-income 33.2 % at 7 days, 29.7 % at 30. `src/agents/audit.ts`: `AuditLog.start` is a cursor; accessors replace every `events[]` read; `AUDIT_RING_CAP` 8192; `SNAPSHOT_VERSION` 16. `admission.ts`: `cheapestDwellingWithRoom`, the door only. Also `src/agents/registry.ts` (new) with `tests/registry-record.test.ts` (12 tests); 23 test files on the accessors; `sim-hygiene` +17. Every hash moved once, provenance beside each: lone `e085af3e395c1c27` → `cf636ab0a6ff7461`; two-city `5597ed4f513f6474` → `a238dd9bd7ecc292`; three-city `b6f4184fb1adcb0a` → `e2b3ad557e400fde`; vectors start `17076c81b6bbfa92` → `dcfd3ea898480a4d`; minds re-recorded, 246 of 246 still APPROVE. `docs/ops/PAUSE-2026-09-15.md` (new). §7 "the re-pin".
- `594776b` (09-15) — `docs/DECISIONS.md` +4: D-8, the pivot to one small city.
- `66b1aa8` (09-15) — S1a: four kinds appended — residential tower, company tower, Boz Institute, War Bay — with render styles (`building.ts`, `render/kinds.ts`; `tests/render.kinds.test.ts`). Pins unmoved.
- `69e6b02` (09-15) — S1b: layout `'small'` in `map/buildings.ts` — eight towers, forty-five houses, four company towers, the Institute and the War Bay on 96 tiles; the plan in the snapshot only when set; company towers share the office's customers by capacity (`shareOf`, jarvis11); named rows fail closed. `tests/small-city.test.ts` (new, 4 tests). Pins unmoved. §7 "the one small city".
- `fd660b7` (09-15) — records: DECISIONS +26 (the army engaged, the Autopolis borrowings, the two `[assumed]` shapes, open items (xlix)–(lv)); `docs/WORLD_PLAN.md` placeholder `[proposed]`; `docs/ops/PROPOSAL-schema-fields-2026-09-15.md`.
- `d53c1f1` (09-15) — S6 the look: `index.html`, `3d.html`, `board.html`, `observatory.css`, `board.css` restyled a little toward neon, medieval, robotic; every id, hook and layout rule untouched; `city/docs/LOOK.md` (new). No test change. §7 "the look".
- `831fef4` (09-16) — records: red's section (now replaced), tom's 2026-09-16 lessons (`docs/LESSONS.md` +39), yolo's `docs/research/2026-09-15-skills-hiring-leads.md`.
- `4759317` (09-16) — `docs/ops/PAUSE-2026-09-15.md` §1 "what happened" filled in.
- `3d8de78` (09-16) — S2 the Boz Institute: `src/sim/systems/institute.ts` (new, 161 lines), `scheduler.ts`, `world.ts`, `resident.ts`, `population.ts`, `departure.ts`. The adults the morning seek leaves jobless enrol by law in the skill the city wants, attend five sections, graduate with the axis up ten and a credential; the row is `by: 'law'`; a course ends with a leaving. `tests/institute.test.ts` (new, 4 tests); `sim-hygiene` +2. Pins unmoved. §7 "the Boz Institute". Landed under open (xlix); DECISIONS says so (entry of 2026-09-16, added in `8b98439`).
- `fbde3f1` (09-16) — S4 the registration door: `src/agents/registrations.ts` (new, 282 lines) — register (an applicant signs under its own did:key, cites `CONDUCT_VERSION`, idempotent by `requestId`, one application per identity, pending) and decide (the governor's seat); admission rule 6 refuses a known DID that is not approved; `NO_AGENT` has one home in `agents/ids.ts`. `city/docs/CONDUCT.md` (new), `DOORS.md`, `vectors.json` +130, `CONFORMANCE.md` re-made. Sixteen doors, 39 vectors. `tests/registrations.test.ts` (new, 234 lines), `doors.test.ts` +17, `conform`/`prospectus` touched. Pins unmoved. §7 "the registration door".
- `0c15563` (09-16) — S5a the evolution page: `evolution.html` (new), `src/evolution/main.ts` (new), `city/docs/EVOLUTION.md` (new) — every renderer replays the same recording, the honesty line, the recordings and the vectors read live; the visitor path `?visitor=1` (no holder panel, no key, a banner) in `app.ts`, `app3d.ts`, `index.html`, `3d.html`; `vite.config.ts`. No test added; "build passes". No §7 entry.
- `b7c97b8` (09-16) — S3 lights: one window per current employee on a company tower, day and night; the frame carries a staff count beside the occupancy (`worker/protocol.ts`, `views.ts`, `sim.worker.ts`); both renderers read it (`render/layers/buildings.ts`, `render3d/buildings.ts`, `scene.ts`); the inspector says how many are lit; the shared rule in `src/render/windows.ts` (new). `tests/render.kinds.test.ts` +46, `tests/worker.present.test.ts` +54. Plainly: the lights count ordinary labour placement. **The War Bay hire door — D-8's named mechanism — is NOT built.** It waits on (l) who holds the hired agent's key and (li) no levy on a wage; the section was renamed from "S3 the War Bay" to "S3 lights" for that reason (DECISIONS 2026-09-16). No §7 entry.
- `fe7cca1` (09-16) — the launch: `city/deploy/pages.sh` (new) puts the built site on GitHub Pages under a chosen name; `src/publicUrl.ts` (new) — every public-file fetch goes through it so the pages work under a path (`board/main.ts`, `evolution/main.ts`, `worker/client.ts`); `city/docs/LAUNCH.md` (new).
- `fa31287` (09-16) — `.claude/agents/halo.md` (new): Halo, the hallucination guard and direction check, asked for by the principal.
- `4d85d27` (09-16) — trevor's proposal, `docs/ops/PROPOSAL-rules-version-spec-2026-09-16.md`: `rules_version` on the admission request and record, `issuer_did` is the record's registry, `shard_id` reserved, a fixture shape, the migration — `[proposed]` for the spec owner.
- `352a1e4` (09-16) — DECISIONS +4: the launched page boots one lone small city (`[assumed]`, tuesday22's shape (a)); the name boz-city chosen by the principal from four.
- `8b98439` (09-16) — Halo's findings fixed: cross-page links relative and the two doc links through `publicUrl` (`board.html`, `evolution.html`, `board/main.ts` — they broke under the Pages path); `deploy/pages.sh` — the Pages API call with the nested body and a read-back; `institute.ts` — the Institute header carries the principal's words verbatim, not a cleaned quote; DECISIONS +16 — the missing 2026-09-16 entries (the Institute's rule under open (xlix), the lights' reading of (lii) and the absent hire door, the evolution page and the launch, friday22's note on where the current entries sit).
- `ce949d8` (09-16) — S5b: interests — `src/sim/entities/interests.ts` (new): seven, a pure reading of traits and skills, top three, never stored; shared projects — `src/sim/systems/projects.ts` (new, 397 lines): `startProject` and `fundProject` doors, a project account (`founding.ts`, `money.ts`), materials checked in stock, labour by contributors at 17:00, `project:finished` by law; absent by default. Eighteen doors, 43 vectors (`vectors.json` +123, `CONFORMANCE.md`, `DOORS.md`). `tests/interests.test.ts` (new, 73 lines), `tests/projects.test.ts` (new, 343 lines), `doors.test.ts` +13. Pins unmoved. No §7 entry.
- `e9035a6` (09-16) — the page opens on the one small city: one city worker, no world worker, seed 42 at 96 tiles and 100 residents (`app.ts`, `app3d.ts`, `worker/client.ts` +137, `protocol.ts`, `sim.worker.ts`); `?layout=federation` keeps the three cities and their recordings; a recording must match the page's mode. `tests/worker.client.test.ts` (new, 143 lines); `docs/LAUNCH.md`. Pins unmoved.

Pins checked 2026-09-16 at HEAD (`e9035a6`): `city/tests/determinism.test.ts:213` `SEED_42_HASH_AT_10000 = 'cf636ab0a6ff7461'`; `city/tests/federation.test.ts:137` `PINNED = 'a238dd9bd7ecc292'`, `:231` `PINNED_THREE = 'e2b3ad557e400fde'`. The re-pin's values; unmoved through every commit after `5e267b5`.

`city/DESIGN_NOTES_V2.md` §7 has four Phase 8 entries (the small city, the Institute, the registration door, the look). S5a, S3 lights, the launch, S5b and the page default have none yet.

### Who did what

- **tuesday22** planned twice: the pivot sections S0–S6, and the page-default shapes (a) one small city / (b) three small cities federated, with the small-city pin and recording as sections 1 and 2 of that plan.
- **jarvis11** audited twice: S1 (the office-budget double count, fixed with `shareOf`; named rows fail closed) and the uncommitted Institute/registration code before it was committed.
- **friday22** recorded D-8, the army engaged, the Autopolis borrowings, the two `[assumed]` shapes, open items (xlix)–(lv), the page-default and site-name entry, and — after Halo — the four missing 2026-09-16 entries and the note on where the current entries sit.
- **tom** wrote the 2026-09-16 lessons: five subagents lost to a rate limit, a builder cut off mid-run, two vitest processes at once, a hashed cosmetic string reverted, `[[heredoc-write-file-first]]` a fourth time; named `[[named-yesterday-broke-today]]`.
- **red** wrote the section this one replaces (`831fef4`).
- **yolo** scouted skills and hiring models (`docs/research/2026-09-15-skills-hiring-leads.md`).
- **solo** verified the Autopolis lead: autopolis.city exists; Agent-City's institutions are unbuilt; agnt8x was killed. (Reported by the coordinator; no verified file of that date is in `docs/research/`.)
- **odo** swept once.
- **trevor** wrote the `rules_version` proposal (`4d85d27`).
- **Halo** checked the record against the tree: 46 claims true, 6 wrong; the 6 fixed in `8b98439` and in this section.
- **Five builders** built S4 the registration door, S6 the look, S5a the evolution page and visitor path, S3 the lights, S5b interests and projects; a sixth lane built the page default (`e9035a6`).
- **The coordinator** built the re-pin, S1a/S1b and S2 by hand after five agents died on a rate limit the night before; wrote the launch script and `publicUrl`; wrote Halo's agent file; fixed Halo's findings; committed all twenty.
- **The other session** committed `d3beea6`, `f76f1d0`, `97fef10`.
- **The principal** decided the four below.

### The principal decided

The `[confirmed]` entries of `docs/DECISIONS.md` dated 2026-09-15, by title:

- The pivot: one small city, not a world of countries (D-8).
- Engage the whole agentic army; section by section.
- The Autopolis borrowings go in, on our own technology; the UI turns neon-medieval-robotic.
- The audit ring becomes a ring cursor in the same pin move as the rent fix.

On 2026-09-16 the principal chose the site's name, boz-city, from four. It has no `[confirmed]` entry of its own; it is recorded inside the `[assumed]` entry "The launched page boots one lone small city; the federation stays behind `?layout=federation`" (`352a1e4`).

The earlier evening's decisions (the levy's shape, city rent levied, the governor's pay, room-sharing, rents against net) are in the previous section and were built in `5e267b5`.

### Proved

- Before `5e267b5`, the sequential 40-file run: 555 tests passed (coordinator's report).
- The re-pin's own numbers, from the commit: rent-to-income 33.2 / 29.7 % at 7 / 30 days; the 30-day validate report passes (hash `52b852f8589ae539`); vectors and prospectus byte-identical twice; 246 of 246 Gemini answers APPROVE.
- Per-section runs, each with both pins unmoved, from the commit messages: S1b 4 tests (`small-city.test.ts`); S2 4 tests (`institute.test.ts`); S4 sixteen doors, 39 vectors; S5a "build passes" (no test); S5b eighteen doors, 43 vectors; the page default `worker.client.test.ts` added. The messages do not give per-section suite totals; none is invented here.
- The full suite in one process: running at the time of writing; the count goes in the next section.
- No benches run for the record this session.
- Live: `https://bozocan22.github.io/boz-city/` — index, 3d, board, evolution answered 200 on 2026-09-16; the page opens on the small city since `e9035a6`.

### Open

- The principal's, in `docs/DECISIONS.md`: (xlix) what a skill is, and whether the Institute charges — the Institute's rule landed under it, reversible; (l) the War Bay hire — who holds the key, whether the city takes a fee; (li) the levy on wages; (lii) the company building's lights — built as "one per current employee", his to confirm; (liii) a pending registration with no governor seated; (liv) the vault's Phase A population vs D-8 (D-8 stands); (lv) `docs/WORLD_PLAN.md`, the file itself. Still open from before: (xv), (xxvii), (xxviii), (xxix), (xxx), (xxxii), (xxxiii), (xxxix), (xl), (xlii), (xlvii), and the earlier (xlix) on delegating the levy rate — the numeral is used twice; friday22's note says references from 2026-09-15 on mean the later.
- The War Bay hire door: not built; blocked on (l) and (li).
- A small-city determinism pin and a small-city recording: tuesday22's plan, sections 1 and 2. Not built; the small city has no pinned hash and no recording yet.
- `docs/HANDOFF-2026-09-14.md` is pre-pivot; its rewrite is not done. §6: (iii) still blocked on Q-3; (vii) OpenAI recording not done.
- §7 entries for S5a, S3 lights, the launch, S5b and the page default: not written.
- trevor's `rules_version` proposal: `[proposed]`, with the spec owner.

### Next

The suite count; the small-city pin; the small-city recordings; the handoff rewrite.

---

## 2026-09-15 — six sections after the seat: the governor's pay, the model judges, the conformance runner, the return, the inbox, the transaction levy

### Built

Between the last recorded commit (`94587ec`) and this session's one, twenty commits, 2026-09-14 and 2026-09-15, none touching `city/`: records (`786413b` red's 2026-09-14 section and friday22's attraction entry; `ed93a18` four confirmed answers, tom's lessons, odo's sweep; `58e1a7f`, `a3cebf0` DECISIONS; `ab5f5dd` OPEN_QUESTIONS), research (`8c6bb80` the 2026-09-14 session brief; `18e996c` the four rival papers verified), and the other sessions' runtime/spec work (`fd8c919`, `cc68567` P-1 admission from the agent's side with `spec/tools/admit.py`; `c9c5f84` the registry re-signs the served passport; `41fbf86`, `57d022a` the laws manifest and the LF rule under `spec/`; `eb8e665` P-3 served and the MCP server; `adc8e1d`, `5934355`, `a5018c8` `validate.py --laws`, the Unicode JCS vector; `7d4fc57` the 429 carries Retry-After; `b2ad8ef` the console's laws page and credentials; `eca6837`, `8172f8d`, `232f97c`, `55034a6` README/ROADMAP/DIRECTION, the launch checklist, DEPLOY). Pins unmoved through all of them.

- `d8d8125` (2026-09-15) — Living World, six sections in one commit, 69 files, +5,670 / −361.
  - The governor's pay: `src/sim/systems/economy/governor.ts` (new) — 5 % of the month's withheld income tax, a closing firm's final wages included; paid at the month's turn after the residents' dividend into the seat's household; capped at the treasury; row `treasury:governor:paid`; a frozen seat is paid nothing and the base lapses; `taxThisMonth` exists only while a governor is named. Share and band [0, 0.10] are law constants, not policy. Tests: `tests/governor-pay.test.ts` (8).
  - The model judges, not echoes: the "already applied every rule" sentence out of the system instruction; `PROMPT_VERSION` lw2-p2, fingerprint `4fec4864eb94ec4d`; both 2-day recordings re-made (fake `872ba09b20f8ce09`, Gemini `90b6ec437c023eaf`) and a 30-day Gemini file added (`public/minds/gemini-gemini-2.5-flash-42-dorsk-30d.json`, `b0a0f189306140b2` at 43,200 ticks, 246 answers); the recorder writes the manifest, validates by each question's grammar, refuses a cut answer and `--out index.json`, marks an unverified file. Files: `minds/llmMind.ts`, `bench/record-minds.ts`, `docs/MINDS.md`. Tests: `tests/agents.gemini-mind.test.ts` updated. Observed, not fixed: 246 of 246 APPROVE; 170 read "delegation posture 0/5" as an order — Open (xlvii).
  - The conformance runner: `bench/conform.ts` (new), `npm run conform` — L1 the bytes (recorded bodies verified under the named signers), L2 the doors (this engine's replay; n/a on a foreign start hash); badge `doors 14/14 · vectors 35/35 · L1 35/35 · L2 35/35 · start 17076c81b6bbfa92 · engine <sha>[-dirty]`; `public/doors/CONFORMANCE.md`. Tests: `tests/conform.test.ts` (4); the replayer extracted from `tests/present.test.ts`.
  - A return lifts the marks only: `admission.ts` — the passport identifies only; no working-age rule on a return; the seat keeps age, stage, name, log, values, posture; a child's seat returns as the child. Tests: `tests/leaving.test.ts`, `tests/adoption.test.ts` updated; (xxxv) asserted as the rule — the purse is the household's.
  - The inbox reads through the doors' readers: `src/agents/inbox.ts` — `seq`/`claimSeq` from `actsOf` and `claimSeqOf`; the leaving seq is `body`'s to answer. Tests: `tests/inbox.test.ts` (new). The rent-to-income reading measured beside its pin, not touched: 55.3 / 49.5 / 44.3 % at 7 / 30 / 120 days, cause the founding prices rent against gross, not net; the fix is the next commit.
  - The transaction levy: `src/sim/systems/economy/levy.ts` (new), `money.ts` — `Policy.transactionLevy`, absent = 0, calibration ceiling 0.02 with band [0, 0.02] free within; every sale's payee cut `round(receipt × rate)` — till, rent (the city's own too), wholesale, cross-city `trade/fob` and `lc/honour` — by `collectLevy`, the ledger's third mutation path, no row per cut; one row a month `levy:month` splitting 30/30/30/10 into treasury, world development, reserve and the principal's operations fund, four accounts opened on the first cent. Seed 42's first governed month: base NHK 26,282.30. Calibration: `transaction_levy` in the three `founding_*.yaml`, `calibration.generated.json`, the worldkit loader. Tests: `tests/levy.test.ts` (new; count not in the message). 35 vectors, start hash unchanged. `tests/agents.identity.jcs.test.ts` (new) replays the spec's content-reference vectors, the Unicode one included.
  - Also in the commit: `docs/DECISIONS.md` (+109), `docs/LESSONS.md` (+35), `docs/ops/odo-2026-09-14b.md`, the four research files (below), `city/DESIGN_NOTES_V2.md` §7 (six entries).

Pins checked 2026-09-15 in the files: `city/tests/determinism.test.ts` seed 42 at 10,000 ticks `e085af3e395c1c27`; `city/tests/federation.test.ts` two-city `5597ed4f513f6474`, three-city `b6f4184fb1adcb0a`. Unmoved at `d8d8125`, since 2026-09-12. The next commit — rents priced against net at founding, in progress — moves all three by decision ("[confirmed] Rents priced against net at founding — the rent-to-income root cause fixed and the pins re-pinned", 2026-09-14).

### Who did what

- **tuesday22** planned housing, scale, growth, mixed-use, the levy and the re-pin.
- **Builders** (general-purpose subagents) built the governor's pay; the minds re-record and the 30-day file; the conformance runner; the return fix; the inbox and the small items; the rent reading (a comment only, no code); the transaction levy.
- **jarvis11** read every lane before the commit. Findings in the commit message and in §7's last six entries: the closing firm's final wages counted in the pay base; only a holder exercises the seat; six on the runner (dirty sha, named signers, L1-only wording, `canonicalPayload` not a third canonicaliser, per-level reasons and a divergence line, "does not claim"); the door's verdict on a return stated; city rent not exempt from the levy.
- **friday22** recorded eleven 2026-09-15 entries in `docs/DECISIONS.md`: the seven `[confirmed]` under "The principal decided" below, and four `[assumed]` — the city–registry signing seam measured before Q-3; the governor's pay built; the model judges built; the transaction levy built; the conformance runner built; the 2026-09-14 brief's runtime and spec half (the last is the other session's). Two corrections in the same file: the "ten years" line withdrawn — the operations fund has no term; the city-rent exemption reversed.
- **tom** wrote the 2026-09-14 → 2026-09-15 lessons in `docs/LESSONS.md`; the two named ids `[[resume-by-id-not-rebrief]]` and `[[record-claims-vs-code-does]]`; `[[authority-edge-fails-open]]` fired again (the departed governor still governing), the tenth instance.
- **yolo** scouted the building-law and governance-funding leads: `docs/research/intake/2026-09-14-building-law-leads.md`, `docs/research/intake/2026-09-15-governance-funding-and-mixed-use-leads.md`.
- **solo** verified them: `docs/research/2026-09-14-building-law-verified.md`, `docs/research/2026-09-15-governance-funding-verified.md` (the fee-farm as first sketched was inverted; the D-6 note in DECISIONS.md).
- **mage** costed the 10,000-agent walls.
- **jarvis22** measured the city–registry signing seam (the `[assumed]` entry of 2026-09-15); its Retry-After finding is `a3cebf0`.
- **odo** swept twice (`docs/ops/odo-2026-09-14.md`, `docs/ops/odo-2026-09-14b.md`): balanced braces, no dangling reference, no half-written file after the builders were cut off.
- **The coordinator** ran the lanes, wrote the six §7 notes, committed `d8d8125`.
- **The other sessions** committed the runtime/spec work listed above (P-1, P-3, the MCP server, the laws manifest, the console) and run odo on their own cadence.
- **The principal** answered the questions under "The principal decided", and twice corrected a coordinator reading before it was built on.

### The principal decided

The `[confirmed]` entries of `docs/DECISIONS.md` dated 2026-09-15, by title:

- The building law's shape; a newcomer takes any free household slot; and three directions — mixed-use buildings, a self-funding governance, a world that grows with investment.
- Growth by signed act, infill first; mixed-use frontage on a home, households stay, with a premise rent to the holder.
- The city's next income: a transaction duty of 0.02; every other fee is the agents' own agreement — superseded the same day by the next.
- The 0.02 is a universal transaction levy, not a customs duty — a very small fee on every transaction funds the world, the cities and the governance; lower in the future.
- The transaction levy's shape: sales only, from the seller's receipt, off until a governor signs, split 30/30/30/10.
- City rent is levied too; the levy's band is free within its ceiling.
- Premise rent is half the home's rent within a band; the levy funds are drawn only by the founder's signed act.

Also in force from 2026-09-14, recorded in `ed93a18` after the last section was written: Four answers at the pause after attraction (welcome credit alone is policy; governor 5 %; the prompt stops echoing; the offer keeps to our own facts); Rents priced against net at founding and the pins re-pinned; A return lifts the marks only; Housing for the port.

### Proved

- Sequential verification before `d8d8125`: Test Files 22 passed (22); Tests 236 passed (236); `tsc` clean. Reported by the coordinator; this record did not run it.
- The full suite has not been run since `94587ec`. The two suite fixes of `94587ec` and everything in `d8d8125` are unproved as a whole until it is.
- No benches run for the record this session. Numbers in the commit come from the lanes' own runs: the 30-day Gemini recording at `b0a0f189306140b2` over 43,200 ticks, 246 of 246 APPROVE; the conformance badge 14/14 · 35/35 · 35/35 · 35/35 at start `17076c81b6bbfa92`; `--holders 0` byte-identical; seed 42's first governed levy month NHK 26,282.30; rent-to-income 55.3 / 49.5 / 44.3 % at 7 / 30 / 120 days.
- Two session restarts from memory exhaustion: six parallel vitest runs on the machine; orphans from the first held 1.3 GB at the second. Recovered; no tree left half-written (odo). The rule now: one node process at a time, two builders at most.

### Open

- The principal's, in `docs/DECISIONS.md`, still open: (xv), (xxvii), (xxviii), (xxix) proper, (xxx), (xxxii), (xxxiii), (xxxix) the under-founding, (xl) the scale lane, (xlii) the vocabulary of city-minted registration rows, (xlvii) the delegation-posture line in the prompt, (xlix) whether a governor may delegate the levy rate to a rule. Decided this period: (xxxvi), (xxxvii), (xxxviii) on 2026-09-14; (xli), (xliii), (xliv), (xlv), (xlvi), (xlviii) on 2026-09-15.
- The re-pin: rents priced against net at founding, in progress; moves all three pins by decision.
- Drafted in the scratchpad, waiting to be applied after the re-pin: housing H1/H2, scale S1.a/b, the funds' draw door (the operations fund's draw door as the principal's own key — `[assumed]`, the principal's to confirm).
- `docs/HANDOFF-2026-09-14.md` §6: (iii) still blocked on Q-3 (the seam is measured, the bridge C1 waits); (vii) OpenAI recording not done; (ii), (iv), (vi), (viii), (ix) stand.
- Open (xlvii): moving the prompt's delegation-posture line moves the fingerprint and re-records all three files — mage before any paid pass.
- The full suite after `94587ec`: not run.

### Next

The re-pin commit. Then the three drafted lanes (housing H1/H2, scale S1.a/b, the funds' draw door). Then growth by investment, mixed-use with the premise rent, throughput bucketing.

---

## 2026-09-14 — the first Gemini recording; attraction: Gemini on the page, the governor's seat, the prospectus

### Built

Between the last recorded commit (`801b136`) and the three of this session, four housekeeping commits, all 2026-09-14: `7cefb7a` (red's agent definition, `.claude/agents/red.md`, and the first `docs/PROGRESS.md`), `cd585be` (`scripts/dev-up.sh` serves `docs/` on 8080 and allows that origin; the other session's), `5f78f5a` (the research and planning artifacts every decision cites, untracked for up to ten days — `docs/REACH-ROADMAP.md`, the reach landscape, the 2026-09-04 and 2026-09-08 intakes, the dossier, the Apache-2.0 declarations; 11 files), `b60e56e` (`.claude/agents/yolo.md` and `solo.md`). No code, no tests, pins unmoved.

- `4b3ab66` — Minds, the first Gemini recording: `city/public/minds/gemini-gemini-2.5-flash-42-dorsk.json` (8 spotlights in Dorsk, 2 days, 21 answers) and `src/agents/minds/providers.ts` (`thinkingBudget` 0 for a one-line judgement; thought parts filtered). The first pass came back "APPROVE because it" — gemini-2.5-flash's thinking counted against `maxOutputTokens` and every line was cut mid-word; re-recorded whole. All 21 APPROVE; replay verified at federation hash `53a6a7e77a02a0ab` over 2,880 ticks with the strict mind, no cache miss. The key is in the repo-root `.env`, placed by the principal; not in the record. No tests added in this commit. Pins unmoved.
- `8177c8f` — Attraction, three lanes in one commit, 44 files.
  - (a) Gemini on the page: the HUD chooses a recording by name from `public/minds/index.json`; a world past its recording stops with `ReplayWindowExceeded` and an honest sentence, never a fallback; rows carry the engine ref `gemini/gemini-2.5-flash`; the recorder refuses a cut answer (`finishReason`) and records the generation settings; `docs/MINDS.md`. Files: `minds/llmMind.ts`, `providers.ts`, `app.ts`, `ui/hud.ts`, `worker/client.ts`, `sim.worker.ts`, `bench/record-minds.ts`. Tests: `tests/agents.gemini-mind.test.ts` (11; pins the shipped recording at `53a6a7e77a02a0ab` / 2,880).
  - (b) The governor's seat: `src/sim/systems/economy/policy.ts` (new) — `WorldOptions.governor` names a DID at founding, absent = no key; `setPolicy` over `policyBody(realm, field, value, tick, seq)`, refusals in order, nothing written on any; the band is the calibration entry's `low`/`high` through `calibration.ts`'s `band()`; the row `policy:changed` first; `welcomeCreditMonths` reads the policy at the tick; the seat frozen while the governor's agent is not active; a restore refuses a policy outside the band. The fourteenth door (33 vectors, 14 refusals); the holders bench names holder 0 governor; the port bench's step 1b. Files: `world.ts`, `founding.ts`, `admission.ts`, `present.ts`, `federate.ts`, `bench/doors-vectors.ts`, `holders.ts`, `port.ts`, `validate.ts`, `docs/DOORS.md`. Tests: `tests/policy.test.ts` (11); `doors.test.ts`, `present.test.ts`, `validate.holders.test.ts` updated. Only the welcome credit is policy; pay not built.
  - (c) The prospectus: `src/prospectus/prospectus.ts`, `slug.ts`, `bench/prospectus.ts`, `public/prospectus/{amaranth-city,dorsk,halvik}.json`, the Board's Offer tab (`src/board/main.ts`); one JSON per city, every number an existing reading with its source resolved by test, byte-identical twice, judges nothing; the validate verdict and the vectors attached only to the world they were made on; `measureRentToIncome` moved from the bench into `src/worker/views.ts`; `docs/PROSPECTUS.md`. Tests: `tests/prospectus.test.ts` (13). Research under `docs/research/` (below).
  - `city/DESIGN_NOTES_V2.md` §7: three Phase 7 entries. Pins unmoved.
- `94587ec` — Two suite fixes, 2 files: `policy.ts` spells out `FIELD_NAMES` as a literal (sim-hygiene bans `Object.keys` in hashed trees; the type holds it in step); `tests/worker.present.test.ts` passes `file.start.governor` to `createWorld`, as `present.test.ts` does, so the worker seam rebuilds the vectors' world with its governor. Pins unmoved.

Pins checked 2026-09-14 in the files: `city/tests/determinism.test.ts` seed 42 at 10,000 ticks `e085af3e395c1c27`; `city/tests/federation.test.ts` two-city `5597ed4f513f6474`, three-city `b6f4184fb1adcb0a`. Unmoved since 2026-09-12.

### Who did what

- **tuesday22** planned the governor lane (earlier; the `Policy` record, `setPolicy`, `policy:changed` mechanics are its plan).
- **Builders** built the Gemini page lane, the policy lane and the prospectus lane, all in `8177c8f`.
- **yolo** scouted the attraction leads: `docs/research/intake/2026-09-14-attraction-leads.md`.
- **solo** verified them: `docs/research/2026-09-14-attraction-verified.md`. The ERC-8004 claim collapsed on the EIP text (a live identity pointer registry; resolution needs an off-chain file the issuer controls); the AP2 mandate collision is real, and our edge is in-protocol revocation (`revokeMandate`, `haltAgent`); the OKX disputes are ToS-only. Three gaps held: nobody publishes an escrowed exit, a replayable chain with vectors, or a decided-dispute corpus. The prospectus leads with the three; the research's own recommendation to name AP2 and ERC-8004 in the offer was not taken.
- **jarvis11** read all three lanes. Gemini: pass, four hardening notes folded. Policy: one blocking — a departed or halted governor still governed (the principal row persists with the DID and an empty secret); fixed as a frozen seat. Prospectus: two blocking — a src-to-bench import (`measureRentToIncome`), moved into `views.ts`; and a lone-Halvik validate verdict attributed to the other cities, now per-world.
- **friday22** recorded the governor's seat (the 2026-09-14 entry of `docs/DECISIONS.md`); the attraction commit's entry is in progress at the time of writing.
- **The coordinator** recorded the Gemini pass (`4b3ab66`), wrote the three §7 notes, committed `8177c8f`, and fixed the two suite failures (`94587ec`).
- **The principal** placed the Gemini key in `.env`.
- **The other session** committed `cd585be`.

### The principal decided

The `[confirmed]` entry of `docs/DECISIONS.md` dated 2026-09-14, by title:

- The governor's seat — named at founding, bounded by the calibration band, paid from the treasury's tax. Three of its four questions answered: named at founding by whoever creates the city; the calibration band enforced, a change outside refused; pay as a share of the treasury's monthly tax, the number open (xxxvii). The fourth — which numbers become policy — open (xxxvi).

### Proved

- Gemini recording: 21 of 21 answers APPROVE; replay verified at `53a6a7e77a02a0ab` over 2,880 ticks, no cache miss; pinned as a literal in `tests/agents.gemini-mind.test.ts`. Observed, not fixed: several answers quote the system prompt's "the engine has already applied every rule and cap" back as their reason; re-asking at temperature 0 reworded four of 21.
- The three lanes at `8177c8f`: 181 tests green (the commit's message).
- Full suite at `8177c8f`: Test Files 68 passed, 2 failed (70); Tests 1008 passed, 2 failed (1010). Both failures are the two fixed in `94587ec`. The full suite has not been re-run since `94587ec`; the fix is unproved as a whole until it is.
- Door vectors: 33 (14 refusals) at `8177c8f`; the vectors world founded with `vectors:42` in the seat, start hash `17076c81b6bbfa92`.
- The welcome credit on seed 42, either side of the governor's act at the same hour: 6,451.70 NHK then 3,225.85 (from §7).
- The prospectus, as it reads: the founded town shows 70 % unemployment and 58 % rent-to-income over earners; the validate report on disk is FAILING on the rent band; reported, not judged.

### Open

- The principal's, in `docs/DECISIONS.md`: (xxxvi) which numbers become policy — the principal asked for simpler words and has not answered; the lane built the welcome credit only. (xxxvii) the governor's share of the tax — the coordinator to propose one `[assumed]` when pay is built; until then the seat earns nothing. Still open from before: (xv), (xxvii), (xxviii), (xxix) proper, (xxxiv), (xxxv). Not asked: whether the governor is also the arbiter or the door's server operator, and what the seat may not do.
- `docs/HANDOFF-2026-09-14.md` §6: (i) the governor's policy lane is built as far as (xxxvi) allows; (vii) the Gemini recording pass done, OpenAI not; (iii) still blocked on Q-3; (ii), (iv) (Open (xxxi)), (vi), (viii), (ix) stand.
- The Gemini system prompt: changing the "already applied every rule and cap" sentence moves the fingerprint and needs a re-record; a decision for later.
- friday22's DECISIONS.md entry for the attraction commit: in progress.
- The full suite after `94587ec`: not yet run.

### Next

The governor's pay — waits on (xxxvii). The principal's answer on (xxxvi).

---

## 2026-09-13 → 2026-09-14 — lanes A/B/C, the dispute close, adoption, the Board

### Built

- `6d52c9c` (2026-09-13) — Lane A, `validate --holders N`: N outside holders walked through every door on a fixed timetable; the tally is a row in the standard report, lone and federated, never judged; `--holders 0` is byte-identical. Files: `city/bench/holders.ts` (new), `bench/validate.ts`, `bench/sim-bench.ts`, `bench/port.ts` (the port bench ends by reading the holder's inbox), `src/agents/ratings.ts` (`isPurchase` exported). Tests: `tests/validate.holders.test.ts` (2). Pins unmoved.
- `bd68467` (2026-09-13) — `scripts/dev-up.sh` probes the servers by hostname; vite binds the IPv6 loopback only on this machine. The other session's commit; one file.
- `051d5b8` (2026-09-13) — Lane B, the door catalogue: `present(world, act)` in `src/sim/systems/present.ts`, one tagged union of the twelve acts, the exact bytes each door verifies; verifies nothing, writes nothing. `bench/doors-vectors.ts` writes `public/doors/vectors.json` (29 vectors, 12 refusals, byte-identical run to run); `docs/DOORS.md`. Tests: `tests/present.test.ts` (new), `tests/doors.test.ts` +3. Pins unmoved.
- `069be93` (2026-09-13) — Lane C, the worker's present seam: `present`/`inbox`/`body` messages in `worker/protocol.ts`; `worker/present.ts` refuses `world-moved` while running and `held` at a federation's hour barrier, nothing written; `ui/holder.ts`, the panel that reads an inbox, hands out bytes to sign and takes back a signed act, no key on the page. Tests: `tests/worker.present.test.ts` (5); the 57 existing worker tests green. Pins unmoved.
- `dfce530` (2026-09-13) — The dispute close: `closeOnReading` at the agents' midnight; a dispute with no arbiter whose respondent cannot sign closes on the reading after `READING_STANDS_DAYS` (30, `[assumed]`); `nameArbiter` and `rule` refuse a closed dispute. Files: `src/agents/disputes.ts`, `inbox.ts`, `state.ts`, `step.ts`, `ui/inspector.ts`, `worker/protocol.ts`; `docs/DECISIONS.md` (four confirmed answers, two refinements), `docs/LESSONS.md` (the 2026-09-13 entry). Tests: `tests/disputes.test.ts` (4). Pins unmoved.
- `117ad2d` (2026-09-13) — Adoption: `src/sim/systems/economy/adoption.ts` (new) — an outside key takes over a resident's seat by a signed act, six refusals in order, nothing written on any; the till fail-closed for holders; `payerOf` (a household's bills paid by the first present member the world still answers for); a holder leaving a household of several leaves alone and takes 0 (`departure.ts`, eight gates that reached departed members closed); `adopt` the thirteenth door, 31 vectors (13 refusals); `validate --holders` and the port bench (step 8) adopt. 28 files. Tests: `tests/adoption.test.ts` (6, new), `leaving.test.ts` (9), `doors.test.ts` (75), `present.test.ts` (2), `validate.holders.test.ts` (2). Pins unmoved.
- `943a509` (2026-09-14) — `docs/DECISIONS.md` only: adoption built and what jarvis11 corrected; Open (xxxiv) and (xxxv) added.
- `801b136` (2026-09-14) — The Board: `city/board.html` + `src/board/` (World, Agents, Governance, Data, Record, Models tabs), one BroadcastChannel from the observatory batched by a pure outbox (`bridge.ts`); the only act on the wire is present/inbox/body relayed to the worker's door; five GET-only dev routes in `vite.config.ts`; `docs/BOARD.md`; `docs/HANDOFF-2026-09-14.md` (new); `docs/DECISIONS.md` (the governor's seat). Tests: `tests/board.bridge.test.ts` (13). Pins unmoved.

Pins checked 2026-09-14 in the files: `city/tests/determinism.test.ts` seed 42 at 10,000 ticks `e085af3e395c1c27`; `city/tests/federation.test.ts` two-city `5597ed4f513f6474`, three-city `b6f4184fb1adcb0a`. Unmoved since 2026-09-12.

### Who did what

- **tuesday22** planned lanes A/B/C as three disjoint-file lanes staggered by interface readiness (lane D parked as the principal's question); after the principal's answers, planned the adoption lane and the governor's policy lane.
- **Builders** (general-purpose subagents) built lane A (`6d52c9c`), lane B (`051d5b8`), lane C (`069be93`), the adoption door with the shared-household leaving and the catalogue/bench additions (`117ad2d`), and the Board with the handoff document (`801b136`). Each builder folded jarvis11's findings itself.
- **jarvis11** read every lane before commit. Lane A: a `"holders": null` shadow in the federated JSON, a bench deferral filed as a law's refusal, the bench's own copy of "a purchase". Lane B: the catalogue in `src/agents/` was a layer inversion on an import cycle, moved to `sim/systems`; the tick claim corrected. Lane C: pass with four findings, every request answered under its id even on a throw, a door that throws after writing drops the world. Adoption: `settle()` fail-open for holders, the adopted seat paying a household's bills, `Agent.controller` not turned, a return to a standing household needing an empty dwelling. The findings are in the commit messages and `city/DESIGN_NOTES_V2.md` §7.
- **friday22** recorded every commit and every answer: the 2026-09-13 and 2026-09-14 entries of `docs/DECISIONS.md`, `943a509` among them.
- **tom** wrote the 2026-09-13 entry of `docs/LESSONS.md` (three lanes staggered by interface readiness; one blocking finding per lane; the byte-identity test that compared hashes, not bytes).
- **The coordinator** built the dispute close (`dfce530`), the port bench's inbox step, `payerOf`; asked the principal the questions at the pause after lanes A–C, after adoption, and on the governor; committed.
- **The other session** committed `bd68467`.

### The principal decided

The `[confirmed]` entries of `docs/DECISIONS.md` dated 2026-09-13 and 2026-09-14, by title:

- Residents hold keys by adoption: an outside key takes over an existing resident
- A credit in each city it enters, once per city
- A dispute against a city-owned firm stands on the reading alone and closes by itself after a fixed time
- Forged signatures and flooding are the server layer's, on the connection — not the engine's
- The re-asked four: two refinements
- Adoption reaches every seat: the shared purse stays shared; a child's seat is claimable
- The governor's seat — named at founding, bounded by the calibration band, paid from the treasury's tax (2026-09-14)

### Proved

- Full suite at `069be93`: 950 of 951, the one failure a test mid-write (from `dfce530`'s message).
- Full suite at `117ad2d`: Test Files 66 passed (66), Tests 961 passed (961) (the coordinator's run).
- Suite at `801b136`: not recorded here; the Board's bridge tests (13) are in the commit.
- `validate --holders 3`, seed 42, 12 days (lane A): Halvik 3/3 admitted, 4/4 mandates verified, 3 ratings, 3 disputes, halts/resumes/leavings/returns 1/1/1/1, nothing held abroad at the end; hash `1d78a1317d9c95a1`. After adoption: "admitted 2 of 2, adoptions 1 of 1".
- Door vectors: 29 (12 refusals) at `051d5b8`; 31 (13 refusals) at `117ad2d`; byte-identical run to run.

### Open

- Still the principal's, in `docs/DECISIONS.md`: (xv), (xxvii), (xxviii), (xxix) proper, (xxxiv), (xxxv), (xxxvi), (xxxvii). (xxxii) and (xxxiii) partly decided 2026-09-14 by the governor's seat; what remains of them is (xxxvi) — which numbers become policy — and (xxxvii) — the governor's share of the tax. The principal asked for (xxxvi) in simpler words and has not answered.
- Engine readings standing: (iii)/(xi), (iv), (vii)–(xii), (xvi)–(xviii), (xx), (xxiii)–(xxvi), (xxxi). (xxi) closed whole, (xxii) and (xxx) decided, (xiii), (xiv), (xix) closed.
- `docs/HANDOFF-2026-09-14.md` §6 lists what is left: (i) the governor's policy lane, (ii) the Board's remaining pieces, (iii) the A7 registry record, blocked on Q-3, (iv) federation-wide presents through the city port (Open (xxxi)), (v) the open principal questions, (vi) the other `[assumed]` numbers, (vii) a Gemini/OpenAI recording pass, (viii) the validate report's failing checks, (ix) the smaller pieces.
- The Gemini key: to be placed by the principal in the repo-root `.env`; not in the record, never its value.
- Blocked: the governor's policy lane on (xxxvi); the A7 record on Q-3.

### Next

The governor's policy lane — the welcome credit only (`welcome_credit_months`, band half to two months), no other number becoming a `Policy` field on the coordinator's word — waiting on the principal's answer to (xxxvi).

---

## 2026-09-11 → 2026-09-12 — from `5e8340e`: Phase 6 under D-2, the governance lanes, the holder, the four laws

One line per commit, from the commit titles; the detail is in `city/DESIGN_NOTES_V2.md` §7 and the 2026-09-11/12 entries of `docs/DECISIONS.md`. Suite counts for these commits are not in this record.

- `5e8340e` (09-11) Phase 6 under D-2: lots at every firm, the firm's agent and the owner's order, admission by passport.
- `cdcbb3b`, `9c2005e`, `535ce5e` (09-11), `f0117bc`, `37079bb` (09-12) — governance lane A5b; spec v0.1.0 and v0.1.1; the gitignored ASE fixture key fixed; one passport verifier in the runtime.
- `c5e3056` (09-12) — jarvis11's read of the Phase 6 lanes: the till prices what it hands over; the shelf re-chosen on it (the sell-order pin reversed; all three pins moved here — `e085af3e395c1c27`, `5597ed4f513f6474`, `b6f4184fb1adcb0a` — and have not moved since).
- `e470361`, `8de3bf4`, `45d599c`, `35d85e6` (09-12) — lanes A6 (the door) and A7 + spec v0.2.0 (the Identity Registry); launch plan, Phase A complete; tom's governance-session lessons.
- `427b896`, `59186c5`, `c50a00c` (09-12) — the owner's order in force (F3–F5); the holder signs (P1–P3); the holder countersigns its agent's link (P5, (xxi) closed whole), with jarvis11's reads.
- `d60a88f`, `a345d96`, `c9a71d4`, `31800f2`, `6ffe35b` (09-12) — certify-fresh-clone; Experiment A pre-registered (A9); lane C3's half; A8's code half; launch plan update.
- `e226e18`, `f41a242`, `530815f`, `9e33286`, `cac516c` (09-12) — the four laws: the kill switch, leaving and the return, ratings, disputes; tom's four-law-day lessons.
- `63bb0a2`, `1e4cad2`, `b400391`, `bf0ca3c` (09-12) — the port bench; the firm's agent on the snapshot; the port bench across the border; the holder's inbox.

Who did what, from the titles: jarvis11 read the Phase 6 lanes, F3–F5 and the holder lane before commit; tom wrote three 2026-09-12 lessons entries; friday22's 2026-09-11/12 entries record each lane; the runtime/spec/ui lanes (A1–A8, C3, spec v0.1.0–v0.2.0) were the other session's.

---

## Before `5e8340e` — 2026-09-04 → 2026-09-11, in one paragraph

155 commits in all as of `801b136`; 41 on the first day. 2026-09-04: the initial commit (spec, runtime, UI, experiment design); the Harbor of Record and its world (citizens, institutions, the Gatehouse, live mode); the operations console and HTTP API; tom's first two reflections; passport hosting and the did:web alias. 2026-09-05: the Living City (skeleton and determinism, map and A*, buildings and residents, the economy core with exact money conservation) and Living World v2 (the brief, the agent layer, worldkit calibration with provenance, Phase 2 Halvik from Nordholm, Phase 3 two countries one border, Phase 4's sea contract). 2026-09-06/07: the Phase 4 gate with three pins in one commit; the 3D world with three cities; a model thinking for a spotlight agent, recorded once and replayed. 2026-09-08 (27 commits): the minds' audit, Experiment 8, the surplus rule and the customs yard, two sea lanes, the pegged island, the closed world. 2026-09-09: firms founded to their customers, the fiscal anchor, exit and entry. 2026-09-10: the founder of last resort under a law; the ownership decisions. 2026-09-11: ownership landed; the governance lanes A1–A5 (passport validator, verifiable chain, rotation, levels 0–3); the direction brief and one-command launch. The decisions of each day are in `docs/DECISIONS.md`; the lessons in `docs/LESSONS.md` (entries 2026-09-04 through 2026-09-11).
