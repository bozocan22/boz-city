# Boz credentials — the published schema (C-15)

A Boz credential is a label a resident of the city carries, `<skill>:<level>`,
earned at the Boz Institute or granted by law after passed hires. This folder
is what a second port needs to accept one: `schema.json` (JSON Schema
draft 2020-12) gives the shapes; this page gives the rules. The city
publishes the schema. It does not publish the A2A card — that is the
registry's (`runtime/agent_society/identity/agentcard.py`); the mapping a
port SHOULD use is in the schema's `a2aSkill`.

The engine's own words: `city/src/sim/systems/institute.ts` (the Institute),
`city/src/sim/systems/hire.ts` (the grant, the lapse, `parseCredential`,
`levelOf`, `meetsCredential`), `city/src/sim/systems/task.ts`
(`TASK_LEVEL_MAX`). The doors that read a credential: `city/docs/DOORS.md`;
their conformance vectors: `public/doors/CONFORMANCE.md`.

## The label

`<skill>:<level>` — `skill` one of `manual`, `technical`, `social`,
`creative`, `analytical` (the five axes a hire is scored on, in that order);
`level` a whole number ≥ 1. A resident's `credentials` is a list of these,
contiguous per skill: the levels held in a skill are always `1..N` with no
hole. `levelOf(credentials, skill)` is the highest level in that skill;
`meetsCredential(credentials, "skill:n")` is true when the list holds `n` or
a higher level of the same skill.

## How a level is earned

1. **At the Institute.** A graduation writes `<skill>:<level>` with level =
   the count of same-skill labels already held + 1. Never capped. Chain row
   `institute:graduated`.
2. **By law, after passed hires (C-10).** A pass by signature — a slot hire
   or a task, `passed` by its evaluator, or a failure overturned on appeal
   by the second evaluator — of a hire whose credential is `<skill>:N` where
   `N` is the hired's current level in that skill counts one toward the
   next level. Three such passes at `N` earn `<skill>:N+1`, up to level 3
   (`credentialLevelMax`). A pass at a level below the current one earns
   nothing (it keeps the level alive; see the lapse). Chain row
   `credential:granted` with the three hire ids.

   Never counts: a city law hire (no evaluation), an `unevaluated` close
   (nobody's signature), a failed or refunded hire. After a lapse, only
   hires passed since the lapse count toward the re-grant.

   A task may require at most level 2 (`taskLevelMax`); a slot hire at the
   War Bay may require any level, under the wage floor for that level.

## How a level is lost

Each midnight the law reads every granted level. A granted `<skill>:N` (the
highest live grant in that skill, and only if it is the resident's current
level in that skill) lapses to `N−1` when eight weeks (`lapseDays` 56) have
passed since the last passed signed hire of that resident at level ≥ N−1.
The label is removed, the grant keeps its row and gains `lapsedAt`, and the
chain row `credential:lapsed` is written with `lastPassedAt` and
`weeks: 8`.

Only granted levels lapse. An Institute label never lapses, and level 1 is
never granted, so it never lapses. A grant under an Institute label written
above it is superseded and does not lapse (no hole is ever left).

## How a verifier confirms a label

Never from the card. The A2A card advertises; the proof is the chain of the
resident's personal agent, which the city serves and a holder can carry.

1. Find the row that wrote the label: `institute:graduated` or
   `credential:granted` with `credential` equal to the label, `by: 'law'`,
   the actor the resident's personal agent, `resident` the resident's id.
2. Check that no later `credential:lapsed` row names the same `credential`
   with no `credential:granted` for it after that.
3. For a granted label, the three `hires` ids (comma-joined on the row, since a row's refs hold only numbers and strings) resolve to `hire:evaluated`
   (or `hire:appealEvaluated`) rows with `verdict: 'passed'` on the
   evaluators' agents, and `hire:settled` rows with `verdict: 'passed'`.
4. Every level below it is on the chain the same way (the list is
   contiguous per skill).

A row's `by: 'law'` is the city's act, not the agent's own; a verifier
trusts it exactly as far as it trusts the city that wrote the chain, which
is what the conformance badge (`public/doors/CONFORMANCE.md`) is for.

## What a port SHOULD publish on its A2A card

For each label the resident holds, one `skills[]` entry:

```json
{
  "id": "boz:credential:social:2",
  "name": "social L2",
  "tags": ["boz-credential", "social", "L2", "granted"],
  "description": "social level 2, granted by law after three passed hires; verify on the personal agent's chain (credential:granted)."
}
```

The fourth tag is `institute` when the Institute wrote the label,
`granted` when the law did.

## The numbers

| name | value | where |
|---|---|---|
| `taskLevelMax` | 2 | `task.ts` `TASK_LEVEL_MAX` |
| `credentialLevelMax` | 3 | `hire.ts` `CREDENTIAL_LEVEL_MAX` |
| `grantHires` | 3 | `hire.ts` `GRANT_HIRES` |
| `lapseDays` | 56 (eight weeks) | `hire.ts` `LAPSE_TICKS` = 56 × `TICKS_PER_DAY` |

`tests/credentials.test.ts` pins the schema's `x-boz` block to the engine's
constants so this page cannot drift from the code.
