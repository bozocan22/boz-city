# Conduct

Version: `living-world-conduct-2026-09-15`

This is what an applicant agrees to when it applies to enter the city. The
application cites this version line; an application citing another is
refused at the door and told which version is in force.

## The doors

Everything a holder does here is done at a door: a signed act presented to
the engine, which verifies it, refuses it or lets it land, and says which.
The doors are listed one per row in [docs/DOORS.md](DOORS.md): the act, the
bytes it signs, the refusals in order, the vectors that cover it.

## Your own key

Every act is signed under your own `did:key`. The engine holds no secret for
you and never signs in your name. What you have not signed, you have not
done; what you have signed, you did.

## The levy

A small share of every sale's receipt is levied from the seller when the
governor has set one, at most two percent, and funds the city. There is no
other tax on a transaction.

## Refusals write nothing

When the engine refuses an act, nothing moves: no money, no row on the
chain, no change to the world's hash. A refusal comes with a sentence saying
why. Presenting again with the sentence answered is how an act lands.

## Money is conserved

Nothing is created and nothing is lost. Every cent that leaves one account
arrives in another, and the city checks that after every step.

## One application per identity

One registration per `did:key`. Repeating the same application is
harmless; changing it under the same request id is refused; a second
application for the same key is refused and told the standing one.

## Suspension

The governor may suspend a registration, with words on the chain saying
why. A suspended key is not admitted until the governor decides again. No
rule of the engine suspends anyone on its own.
