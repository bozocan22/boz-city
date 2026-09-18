# Living World validation — nordholm, seed 42

2000 residents · 30 sim-days (43200 ticks) · world hash `52b852f8589ae539` · **all checks pass** · 54.5 s

| Check | Verdict | Statistic | Tolerance |
| --- | --- | --- | --- |
| Engel's law — food share falls with income | PASS | r = -0.263 over 955 households; 4 of 5 quintile comparisons fall | r < 0 and at least 4 of 5 quintile comparisons falling |
| Money conservation — Σ balances = initial + credit | PASS | $23701402.86 against $23701402.86 (drift 0 cents) | exactly equal, at every checked tick |
| Determinism — two runs, one seed, one hash | PASS | 52b852f8589ae539 vs 52b852f8589ae539 | identical after the whole window |
| Rent-to-income — median in the brief §9 band | PASS | median 29.7 % over 232 renting households with an earner | 20 % to 40 % |
| Price stability — basket index inside ±25 % (sanity bound) | PASS | 95.5 to 115.1, ending 98.5 | 75 to 125 (100 = the first day it was priced) |
| Provenance coverage — what the numbers rest on | PASS | 19 calibrated, 64 assumed (0 derived) | reported, not judged — the badge on every metric in this report |

- **Engel's law — food share falls with income** — quintile mean food shares, poorest first: 39.0 %, 16.8 %, 47.4 %, 20.2 %, 12.6 %; median household spends 23.9 % of income on food. Read the levels with care: the calibrated *budget* share only binds where a household cannot afford the week of food, so the two bottom quintiles sit on the Engel curve and everybody above them is spending what the diet costs rather than what the curve allows. The law therefore emerges here rather than being imposed, which is the stronger result — and the reason the realised shares are below the budgeted ones.
- **Money conservation — Σ balances = initial + credit** — asserted 720 times, every 60 ticks
- **Determinism — two runs, one seed, one hash** — 43200 ticks each, seed 42
- **Rent-to-income — median in the brief §9 band** — interquartile 20.2 % to 38.9 %; 723 renting households live on a pension or the dole alone, at a median of 74.3 % — reported, not judged
- **Price stability — basket index inside ±25 % (sanity bound)** — 714 hourly samples. This is a sanity bound, not a stylized fact: no theory says a young city must stay inside a quarter of its opening prices, but a run that leaves the band has a runaway markup in it.
- **Provenance coverage — what the numbers rest on** — 7 further parameters are loaded and not yet acted on (Phase 3 trade)

## Engel curve

| Income decile | Mean food share |
| --- | --- |
| 1 | 25.8 % |
| 2 | 52.1 % |
| 3 | 14.0 % |
| 4 | 19.5 % |
| 5 | 39.8 % |
| 6 | 54.8 % |
| 7 | 22.8 % |
| 8 | 17.6 % |
| 9 | 17.8 % |
| 10 | 7.4 % |

## The four levels

The chain of 2026-09-08 ran basket → the customs yard → stock-days → the exchange rate, each level found by measuring the one above it. All four are reported here on a pass as well as on a failure; only the last of them is judged, and its bound is the one this suite was missing on the day the root sat undiscovered for four days.

| City | Good | Stock-days, least | on day | ending | days with no draw |
| --- | --- | --- | --- | --- | --- |
| the city | Wheat | 4.7 | 20 | 6.4 | 2 of 30 |
| the city | Flour | 1.3 | 28 | 1.8 | 1 of 30 |
| the city | Bread | 0.0 | 7 | 0.3 | 1 of 30 |
| the city | Vegetables | 3.0 | 14 | 3.5 | 1 of 30 |
| the city | Milk | 3.5 | 29 | 3.6 | 1 of 30 |

Stock-days is the city's stock of a good over its own customers' draw on it per day (a lone city's dump excluded), summed over every firm — the same `dailyDraw` the reorder rule uses (a seller's own seven-day sales, or, for an input, what it takes to keep making what it has been selling). A dash is a good nothing drew that day: a ratio with a zero denominator is not a large number.

## The boundary — every counterparty outside the world

Three rest-of-world devices were found one behind the other on 2026-09-08, each at the cost of its own measure-fix-remeasure round, and none of them could have been found by any check in this suite: each of them *balances*. Money leaves the `external` account and lands in a firm's, Σ balances does not move, and money conservation — the check this suite trusts most — is blind to all three by construction. So this table is printed on every run, PASS or FAIL, and **nothing in it is judged**: the principal's decision of 2026-09-08 is that the foreign bill stays until service firms have real customers and that its size is printed meanwhile, and a bound would be a knob nobody voted for. What the table does instead is make a *fourth* device announce itself — `unaccounted` is the movement of the external balance the three named counters cannot explain, and it is zero exactly while the inventory is complete.

| City | Kind | External now | opened at | moved/day | Dump/day | Backstop/day | Service bill/day | share of the private wage bill | unaccounted/day |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Halvik | lone | NHK 6,517,833.34 | NHK 6,912,838.40 | -NHK 13,166.84 | NHK 463.45 | NHK 352.39 | NHK 13,055.78 | 68.7 % | NHK 0.00 |

A **lone** city runs all three devices; a **federated** one runs none of them — the federation is the world, so the 05:00 dump and the 07:00 import backstop have nowhere to trade, and since 2026-09-09 a federated city is founded to its customers and never bills the world for service hours either ("The foreign bill stops at founding, no transition"); the cell says `gated off` rather than a zero that would read as a measurement. The share is against the private wage bill at founding, a weekly payroll spread over seven days. The service bill is the **last fiction in the world**, and a lone city's alone — Phase 1's testbed, kept by "The lone city is founded to its customers too" (2026-09-09): the 26 desks its offices are founded to, and the shops that carry an export margin, bill this account every morning for their hours at that margin.

## The founding — firms founded to their customers

At founding a firm exists only if the calibration can name who pays it (2026-09-09); a premise nobody can support stands vacant, on the map, for an agent to found a firm in later. This is what each city was founded to — the engine's own record, `economy.founding` — with what became of it over the window: the slots a resident actually holds, what the kind's firms hold in the bank against a week of their payroll, and what they took in against what they paid out. **Nothing here is judged.** The idle share in particular is printed as the record wrote it: the principal's direction is that it is not the concern now — the town fills in when other agents join and found firms — and that the laws are.

**Halvik** (lone, NHK) — founded 363 of 2,442 slots for a calibrated employment of 1,000; **idle share 63.7 %** (printed, never judged); mouths fed 2,000; wage scale ×1.693; 39 firms open, 0 closed, 102 premises vacant, 0 residents seeking work.

| Kind | Premises | Founded | Closed | Slots | Staffed | Payer | Owner | Weeks of wages in the bank | Revenue ÷ wages | Why |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| grocer | 10 | 2 | 0 | 10 | 10 | households | the city | 1.1 | 1.85 | the households' food budget (Engel 24.1 % of a weekly income of NHK 928.8k (363 founded slots at their ladder… |
| bakery | 7 | 2 | 0 | 6 | 6 | households | the city | 8.3 | 2.51 | bakes for 2,000 mouths: 2,800 loaf of bread a week at 13.5 loaf a worker-hour is 5.19 slots |
| cafe | 10 | 3 | 0 | 15 | 15 | households | the city | 17.4 | 4.20 | the households' restaurants & hotels share 6.0 % of a weekly income of NHK 928.8k (363 founded slots at their… |
| restaurant | 7 | 2 | 0 | 14 | 14 | households | the city | 12.6 | 2.93 | the households' restaurants & hotels share 6.0 % of a weekly income of NHK 928.8k (363 founded slots at their… |
| bar | 9 | 3 | 0 | 12 | 12 | households | the city | 45.1 | 11.13 | the households' restaurants & hotels share 6.0 % of a weekly income of NHK 928.8k (363 founded slots at their… |
| pharmacy | 6 | 1 | 0 | 2 | 2 | households | the city | 28.9 | 8.49 | the households' health share 3.0 % of a weekly income of NHK 928.8k (363 founded slots at their ladder wages,… |
| clothing_shop | 5 | 1 | 0 | 3 | 3 | households | the city | 11.2 | 2.51 | the households' clothing share 4.5 % of a weekly income of NHK 928.8k (363 founded slots at their ladder wage… |
| hardware_store | 4 | 1 | 0 | 4 | 4 | households | the city | 10.3 | 2.49 | the households' furnishings share 6.0 % of a weekly income of NHK 928.8k (363 founded slots at their ladder w… |
| market_stall | 8 | 0 | 0 | 0 | 0 | none | — | — | — | no household buys at a stall — it sold nothing in thirty days in any of three cities (2026-09-09, measured); … |
| fish_market | 2 | 0 | 0 | 0 | 0 | none | — | — | — | no fish good and no budget line for it — not founded until one exists |
| office | 18 | 1 | 0 | 26 | 26 | firms | the city | 12.7 | 2.87 | the firms pay 8.0 % of a private wage bill of NHK 84.1k a week for their books, and the households 35.5 % of … |
| sawmill | 1 | 0 | 0 | 0 | 0 | none | — | — | — | no buyer for timber exists yet — construction will, when it exists |
| brickworks | 1 | 0 | 0 | 0 | 0 | none | — | — | — | no buyer for bricks exists yet — construction will, when it exists |
| textile_mill | 2 | 0 | 0 | 0 | 0 | none | — | — | — | no buyer for cloth exists yet — the clothing shop will buy it when cloth is a good |
| warehouse | 8 | 0 | 0 | 0 | 0 | none | — | — | — | no buyer for storage exists yet — (B) of the routine choices, 2026-09-09 |
| workshop | 11 | 0 | 0 | 0 | 0 | none | — | — | — | no buyer for repairs exists yet — things will need mending when they wear out |
| farm_wheat | 4 | 2 | 0 | 3 | 3 | households | the city | 5.1 | 1.44 | feeds for 2,000 mouths: 2,661 kg of wheat a week at 60.0 kg a worker-hour is 1.11 slots, ×2 cover is 2.22; th… |
| farm_vegetables | 3 | 1 | 0 | 6 | 6 | households | the city | 4.0 | 0.94 | feeds for 2,000 mouths: 2,200 kg of vegetables a week at 18.0 kg a worker-hour is 3.06 slots, ×2 cover is 6.1… |
| farm_dairy | 2 | 1 | 0 | 4 | 4 | households | the city | 3.0 | 0.56 | feeds for 2,000 mouths: 2,400 litre of milk a week at 30.0 litre a worker-hour is 2.00 slots, ×2 cover is 4.0… |
| forestry_camp | 2 | 0 | 0 | 0 | 0 | none | — | — | — | no buyer for logs exists yet — the sawmill will, when construction exists |
| school | 2 | 2 | 0 | 80 | 80 | treasury | the city | 2.0 | 1.13 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| clinic | 1 | 1 | 0 | 25 | 25 | treasury | the city | 2.1 | 1.16 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| police_post | 1 | 1 | 0 | 12 | 12 | treasury | the city | 2.2 | 1.18 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| fire_station | 1 | 1 | 0 | 12 | 12 | treasury | the city | 2.3 | 1.18 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| library | 1 | 1 | 0 | 10 | 10 | treasury | the city | 1.9 | 1.12 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| park | 4 | 4 | 0 | 8 | 8 | treasury | the city | 2.0 | 1.13 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| sports_field | 2 | 2 | 0 | 8 | 8 | treasury | the city | 2.0 | 1.13 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| waste_depot | 1 | 1 | 0 | 12 | 12 | treasury | the city | 2.1 | 1.15 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| water_pump | 1 | 1 | 0 | 5 | 5 | treasury | the city | 2.3 | 1.16 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| power_plant | 1 | 1 | 0 | 25 | 25 | treasury | the city | 2.2 | 1.16 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| city_hall | 1 | 1 | 0 | 30 | 30 | treasury | the city | 2.0 | 1.12 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| mill | 3 | 1 | 0 | 1 | 1 | households | the city | 7.4 | 3.91 | feeds for 2,000 mouths: 2,016 kg of flour a week at 75.0 kg a worker-hour is 0.67 slots |
| customs_yard | 1 | 1 | 0 | 14 | 14 | treasury | the city | 2.0 | 1.12 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |
| border_depot | 1 | 1 | 0 | 16 | 16 | treasury | the city | 1.9 | 1.12 | the treasury's budget — rent at 30.0 % and tax up to 40.0 % of NHK 1.43m of wages a week at the calibrated le… |

owners: 39 open firms — 39 the city's, 0 an agent's — the founder is the owner and null is the city, and every founder so far is the city.

orders: 0 firms under a standing order, 0 differing from the engine's rule; asked 0 times, 0 ordered, 0 declined.

Closings: no firm closed in 30 days (4 Fridays in the window) — a firm closes after four short Fridays in a row, and none has been short on one yet; on this run's own readings — each firm's bank against what it pays a Friday and takes a week — the first Friday a firm cannot make in full projects to day 75 (Southfields Dairy Farm, dairy farm), the fourth to day 96; 3 open firms pay out more than they take, 36 do not.

## The week's bills

Two small payments ("The engine pays what the calibration names", 2026-09-09): every Friday at 17:30 each household pays its bills by budget share to the nearest founded pharmacy, clothing shop, hardware store and offices, and at 17:00 every private firm pays a share of its wages to the nearest office for its books. A shop is paid the value-added part of a division's spend; the goods are not drawn yet, so the rest stays in the account and is counted as *undrawn*. One Friday's figures, the last in the window. Reported, never judged.

| City | Kind | Bills a week to the shops and the office | Undrawn a week | undrawn share of the spend | Books a week (of due) | short on the books | Households paying | refused | no address | Paid to | No payee |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Halvik | lone | NHK 71,420.16 | NHK 65,817.41 | 48.0 % | NHK 7,429.31 (NHK 7,429.31) | 0 | 397 | 0 | 0 | pharmacy, clothing shop, hardware store, offices | — |

## The treasury — the hard budget

The city spends what rent and tax bring in and nothing more; when they fall short it pays part wages and part dole and says so ("The treasury keeps a hard budget: no borrowing, no money created", 2026-09-09). This is what it owed and paid over the window — the civic payroll at 06:00 for yesterday's hours, the pensions and the dole on Friday after the wages — and what it took in: rent on the 1st, income tax on Friday, and what closing firms left it after their final wages ("the rest goes to the treasury" — to its owner since 2026-09-10, which for the city's own firms is the treasury), printed as its own line so a treasury living on closings would show. *Paid* is off the ledger's own settlements; *owed* is off the payday tally, and the last column says whether the tally carried it. **Nothing here is judged.** `Unaccounted` is the movement of the balance the settlements the sampler read do not explain — zero while it read every one; the audit chain is a ring of 8,192 and `dropped` counts what fell out of it before an hourly sample.

The founder of last resort ("The server is the government of the city, and it intervenes under law", 2026-09-09): firms the **city** founded because no agent did, against firms an **agent** founded, and the opening money the city put up out of the hard budget. The city pays itself no fee, so none of that money is in `founding fees`. **The day agent-founded outgrows city-founded is the day the intervention is the last resort it is written as** — that is the number to watch, and it is printed, never judged.

The owners (2026-09-10, "the founder is the owner, and null is the city"): at the month's turn every open private firm pays its owner everything above four weeks of its own wages — the **city's draw** lands in the treasury, and a badged share of it goes straight back out as the **dividend**, equally to every resident household; an **agent-owner's draw** lands in that founder's household and never touches the treasury. A closing's remainder goes to its owner too — `from closings` is what reached the treasury, `to owners` what reached a household. **The draw split, city against agents, is printed beside the founding count** because the day agents own firms is the day the city's draw, and the dividend with it, falls — that is the lane working, not a fault. The dividend column is the last turn as the chain shows it. Nothing here is judged.

| City | Kind | Opened at | Now | Civic owed | paid | short | Welfare owed | paid | short | Rent collected | Tax collected | From closings | to owners | Founding fees | Owner draws: city | agents | Dividends out | net to the budget | Dividend, last turn | Other in / out | Unaccounted | Dropped | Settles / paydays | Tally | City-founded | Agent-founded | City capital |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Halvik | lone | NHK 6,157,229.76 | NHK 5,098,410.07 | NHK 1,744,024.07 | NHK 1,744,024.07 | NHK 0.00 | NHK 1,541,058.08 | NHK 1,541,058.08 | NHK 0.00 | NHK 1,393,642.46 | NHK 832,620.00 | NHK 0.00 | NHK 0.00 | NHK 0.00 | NHK 0.00 | NHK 0.00 | NHK 0.00 | NHK 0.00 | no turn in the window — the first draw is day 31 | NHK 0.00 / NHK 0.00 | NHK 0.00 | 0 | 30 / 4 | filled | 0 | 0 | NHK 0.00 |

## The rents — dwellings, empties, repricing

A landlord lowers the rent of a dwelling that has stood empty for a month and raises it when none of its kind stands empty, two percent at the month's turn ("Rents reprice to vacancy, slowly" and "Rents move two percent a month, a badged number", 2026-09-09). The dwellings by kind, who lives in them, the ones nobody does, the rents repriced down and up over this run against what they opened at, the median listed rent, and rent-to-income as it stands — the pinned check's own measurement, printed beside the rents it is about. Reported, never judged.

**Halvik** (lone, NHK) — 724 dwellings, 70 empty, 70 of them for a month or more; repriced down 0, up 0 this run (the law: 2.0 % after 1 month empty, at the month's turn); rent-to-income median 29.7 % over 232 renting households with an earner (interquartile 20.2 % to 38.9 %), 723 on a pension or the dole alone at a median of 74.3 %.

| Kind | Dwellings | Places | Households | Empty | a month or more | Empty places | Repriced down | up | Median rent now | at the opening |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| detached | 173 | 173 | 104 | 69 | 69 | 69 | 0 | 0 | NHK 1,738.48 | NHK 1,738.48 |
| rowhouse | 450 | 450 | 449 | 1 | 1 | 1 | 0 | 0 | NHK 1,471.18 | NHK 1,471.18 |
| apartment_low | 86 | 344 | 324 | 0 | 0 | 20 | 0 | 0 | NHK 1,333.11 | NHK 1,333.11 |
| apartment_mid | 15 | 120 | 97 | 0 | 0 | 23 | 0 | 0 | NHK 1,278.67 | NHK 1,278.67 |

## The shelf — sold at the day-old price, arrived already day-old, binned

What the grocer's shelf does, measured on every run (2026-09-11, "Phase 6 under D-2, planned, and the grocer's shelf measured"): per retail and producer kind, the units and revenue sold at the day-old price against everything sold over the counter or by the lorry; the deliveries taken in at the door and the share of their units already day-old on arrival; the units and value binned at 04:00; and the books as revenue less goods against wages. The same per good and per firm under each kind. Reported, never judged: the lots correction is chosen by what this prints.

**Halvik** (lone, NHK), 30 days.

| Kind / good / firm | Units sold | at day-old | of revenue | Arrived | already day-old | Binned | Binned value | Revenue − goods | Wages |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Grocer** (2 open of 2) | 23,105 | 13.6 % | 11.7 % | 26,431 | 6.5 % | 3,083 | NHK 7,300.51 | NHK 7,814.03 | NHK 39,388.94 |
| — bread | 8,609 | 24.4 % | 16.6 % | 9,698 | 4.3 % | 1,110 | NHK 4,252.63 |  |  |
| — vegetables | 7,151 | 14.6 % | 8.8 % | 8,702 | 14.9 % | 1,356 | NHK 2,381.07 |  |  |
| — milk | 7,345 | 0.0 % | 0.0 % | 8,031 | 0.0 % | 616 | NHK 666.81 |  |  |
| — Old Town Grocer #16 | 10,844 | 15.4 % | 13.9 % | 12,844 | 5.4 % | 1,909 | NHK 4,370.26 | NHK 446.55 | NHK 31,546.73 |
| — Old Town Grocer 2 #17 | 12,260 | 12.0 % | 10.1 % | 13,588 | 7.6 % | 1,174 | NHK 2,930.25 | NHK 7,367.48 | NHK 7,842.21 |
| **Bakery** (2 open of 2) | 17,493 | 0.0 % | 0.0 % | 13,628 | 0.0 % | 730 | NHK 2,030.25 | NHK 55,845.27 | NHK 30,718.11 |
| — flour | 0 | — | — | 13,628 | 0.0 % | 0 | NHK 0.00 |  |  |
| — bread | 17,493 | 0.0 % | 0.0 % | 0 | — | 730 | NHK 2,030.25 |  |  |
| — Old Town Bakery #18 | 14,750 | 0.0 % | 0.0 % | 11,903 | 0.0 % | 563 | NHK 1,642.04 | NHK 48,709.42 | NHK 26,088.04 |
| — Old Town Bakery 2 #19 | 2,743 | 0.0 % | 0.0 % | 1,725 | 0.0 % | 167 | NHK 388.21 | NHK 7,135.85 | NHK 4,630.07 |
| **Café** (3 open of 3) | 0 | — | — | 853 | 0.0 % | 155 | NHK 266.58 | NHK 255,120.21 | NHK 63,121.79 |
| — bread | 0 | — | — | 675 | 0.0 % | 1 | NHK 3.30 |  |  |
| — milk | 0 | — | — | 178 | 0.0 % | 154 | NHK 263.28 |  |  |
| — Old Town Café #27 | 0 | — | — | 282 | 0.0 % | 49 | NHK 79.54 | NHK 66,786.44 | NHK 28,312.96 |
| — Old Town Café 2 #28 | 0 | — | — | 282 | 0.0 % | 49 | NHK 79.54 | NHK 48,623.25 | NHK 22,641.00 |
| — Old Town Café 3 #29 | 0 | — | — | 289 | 0.0 % | 56 | NHK 107.50 | NHK 139,710.52 | NHK 12,167.83 |
| **Wheat Farm** (2 open of 2) | 30,676 | 0.0 % | 0.0 % | 0 | — | 0 | NHK 0.00 | NHK 14,829.96 | NHK 10,867.70 |
| — wheat | 30,676 | 0.0 % | 0.0 % | 0 | — | 0 | NHK 0.00 |  |  |
| — Southfields Wheat Farm #35 | 17,860 | 0.0 % | 0.0 % | 0 | — | 0 | NHK 0.00 | NHK 8,591.72 | NHK 7,143.66 |
| — Southfields Wheat Farm 2 #36 | 12,816 | 0.0 % | 0.0 % | 0 | — | 0 | NHK 0.00 | NHK 6,238.24 | NHK 3,724.04 |
| **Vegetable Farm** (1 open of 1) | 12,281 | 0.0 % | 0.0 % | 0 | — | 6,147 | NHK 8,255.55 | NHK 19,492.01 | NHK 22,782.45 |
| — vegetables | 12,281 | 0.0 % | 0.0 % | 0 | — | 6,147 | NHK 8,255.55 |  |  |
| — Southfields Vegetable Farm #37 | 12,281 | 0.0 % | 0.0 % | 0 | — | 6,147 | NHK 8,255.55 | NHK 19,492.01 | NHK 22,782.45 |
| **Dairy Farm** (1 open of 1) | 7,485 | 0.0 % | 0.0 % | 0 | — | 11,812 | NHK 9,849.45 | NHK 6,917.97 | NHK 14,555.29 |
| — milk | 7,485 | 0.0 % | 0.0 % | 0 | — | 11,812 | NHK 9,849.45 |  |  |
| — Southfields Dairy Farm #38 | 7,485 | 0.0 % | 0.0 % | 0 | — | 11,812 | NHK 9,849.45 | NHK 6,917.97 | NHK 14,555.29 |
| **Flour Mill** (1 open of 1) | 13,620 | 0.0 % | 0.0 % | 18,276 | 0.0 % | 0 | NHK 0.00 | NHK 8,979.46 | NHK 4,787.39 |
| — wheat | 0 | — | — | 18,276 | 0.0 % | 0 | NHK 0.00 |  |  |
| — flour | 13,620 | 0.0 % | 0.0 % | 0 | — | 0 | NHK 0.00 |  |  |
| — Kilnbank Flour Mill #34 | 13,620 | 0.0 % | 0.0 % | 18,276 | 0.0 % | 0 | NHK 0.00 | NHK 8,979.46 | NHK 4,787.39 |

## The collusion row — prices moving together, and how far apart they stand

R17's reading (2026-09-11, Phase 6 lane S), sampled at every midnight after the 06:00 reprice: per kind and good, the share of compared days on which every open firm's list price moved the same way (all rose or all fell; a compared day is one with at least two firms listing the good both days), and the price dispersion across the kind's firms as sd ÷ mean and max ÷ min − 1, averaged over the days and read on the last. The engine's own price rule moves every firm of a kind on the one unit cost they share, so the same-direction share is high on the engine's own rule: this is the detector's baseline. Reported, never judged.

**Halvik** (NHK), 30 days.

| Kind | Good | Firms | Days listed | Days compared | All up | All down | All still | Same direction | sd ÷ mean (mean) | sd ÷ mean (last) | Spread (mean) | Spread (last) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Grocer | flour | 2 | 30 | 29 | 0 | 10 | 19 | 34.5 % | 0.0 % | 0.0 % | 0.0 % | 0.0 % |
| Grocer | bread | 2 | 30 | 29 | 12 | 2 | 0 | 48.3 % | 1.7 % | 0.4 % | 3.6 % | 0.7 % |
| Grocer | vegetables | 2 | 30 | 29 | 4 | 6 | 0 | 34.5 % | 7.6 % | 1.2 % | 18.0 % | 2.4 % |
| Grocer | milk | 2 | 30 | 29 | 5 | 2 | 0 | 24.1 % | 12.3 % | 4.0 % | 29.9 % | 8.3 % |
| Bakery | bread | 2 | 30 | 29 | 18 | 2 | 0 | 69.0 % | 12.5 % | 14.0 % | 28.7 % | 32.5 % |
| Café | bread | 3 | 30 | 29 | 19 | 6 | 0 | 86.2 % | 1.0 % | 0.2 % | 2.3 % | 0.5 % |
| Wheat Farm | wheat | 2 | 30 | 29 | 8 | 2 | 0 | 34.5 % | 12.3 % | 29.3 % | 30.4 % | 82.7 % |

## Provenance

19 of the 83 parameters the simulation acted on carry a dataset; 64 are declared assumptions (0 of those are a cited input put through a rule this project invented). A further 7 are loaded and not yet used.

| Parameter | Badge | Used | Value | Unit | Dataset |
| --- | --- | --- | --- | --- | --- |
| `assumptions/consumption_nordholm/savings_rate` | assumed | applied | 0.1 | share of household disposable income saved | — |
| `assumptions/consumption_nordholm/share_alcohol_tobacco` | assumed | applied | 0.03 | share of household consumption expenditure (COICOP 02) | — |
| `assumptions/consumption_nordholm/share_clothing` | assumed | applied | 0.045 | share of household consumption expenditure (COICOP 03) | — |
| `assumptions/consumption_nordholm/share_communication` | assumed | applied | 0.03 | share of household consumption expenditure (COICOP 08) | — |
| `assumptions/consumption_nordholm/share_education` | assumed | applied | 0.01 | share of household consumption expenditure (COICOP 10) | — |
| `assumptions/consumption_nordholm/share_food` | assumed | applied | 0.13 | share of household consumption expenditure (COICOP 01) | — |
| `assumptions/consumption_nordholm/share_furnishings` | assumed | applied | 0.06 | share of household consumption expenditure (COICOP 05) | — |
| `assumptions/consumption_nordholm/share_health` | assumed | applied | 0.03 | share of household consumption expenditure (COICOP 06) | — |
| `assumptions/consumption_nordholm/share_housing` | assumed | applied | 0.29 | share of household consumption expenditure (COICOP 04) | — |
| `assumptions/consumption_nordholm/share_misc` | assumed | applied | 0.095 | share of household consumption expenditure (COICOP 12) | — |
| `assumptions/consumption_nordholm/share_recreation` | assumed | applied | 0.1 | share of household consumption expenditure (COICOP 09) | — |
| `assumptions/consumption_nordholm/share_restaurants_hotels` | assumed | applied | 0.06 | share of household consumption expenditure (COICOP 11) | — |
| `assumptions/consumption_nordholm/share_transport` | assumed | applied | 0.12 | share of household consumption expenditure (COICOP 07) | — |
| `assumptions/diet_nordholm/bread_loaves_per_person_per_week` | assumed | applied | 1.4 | 800 g loaves per person per week | — |
| `assumptions/diet_nordholm/meals_at_home_per_person_per_week` | assumed | applied | 14 | meals eaten at home per person per week | — |
| `assumptions/diet_nordholm/milk_litres_per_person_per_week` | assumed | applied | 1.2 | litres per person per week | — |
| `assumptions/diet_nordholm/vegetables_kg_per_person_per_week` | assumed | applied | 1.1 | kg per person per week | — |
| `assumptions/employment_nordholm/share_accommodation_food` | assumed | applied | 0.04 | share of employed persons (ISIC I) | — |
| `assumptions/employment_nordholm/share_agriculture` | assumed | applied | 0.02 | share of employed persons (ISIC A) | — |
| `assumptions/employment_nordholm/share_business_services` | assumed | applied | 0.21 | share of employed persons (ISIC J-N: information, finance, real estate, professional, administrative) | — |
| `assumptions/employment_nordholm/share_construction` | assumed | applied | 0.06 | share of employed persons (ISIC F) | — |
| `assumptions/employment_nordholm/share_manufacturing` | assumed | applied | 0.09 | share of employed persons (ISIC C) | — |
| `assumptions/employment_nordholm/share_other` | assumed | applied | 0.09 | share of employed persons (ISIC B, D, E and R-U) | — |
| `assumptions/employment_nordholm/share_public_services` | assumed | applied | 0.32 | share of employed persons (ISIC O-Q: public administration, education, health) | — |
| `assumptions/employment_nordholm/share_trade` | assumed | applied | 0.12 | share of employed persons (ISIC G, wholesale and retail) | — |
| `assumptions/employment_nordholm/share_transport_storage` | assumed | applied | 0.05 | share of employed persons (ISIC H) | — |
| `assumptions/employment_nordholm/unemployment_rate` | assumed | applied | 0.05 | unemployed persons as a share of the labour force | — |
| `assumptions/engel_nordholm/food_share_bottom_quintile` | assumed | applied | 0.4 | share of household income spent on food | — |
| `assumptions/engel_nordholm/food_share_max` | assumed | applied | 0.55 | share of household income spent on food | — |
| `assumptions/engel_nordholm/food_share_min` | assumed | applied | 0.1 | share of household income spent on food | — |
| `assumptions/engel_nordholm/food_share_top_quintile` | assumed | applied | 0.12 | share of household income spent on food | — |
| `assumptions/engel_nordholm/relative_income_bottom_quintile` | assumed | applied | 0.4 | household income as a multiple of the city median | — |
| `assumptions/engel_nordholm/relative_income_top_quintile` | assumed | applied | 2 | household income as a multiple of the city median | — |
| `assumptions/engel_nordholm/shopping_trips_per_week` | assumed | applied | 3 | grocery trips per household per week | — |
| `assumptions/founding_nordholm/fee_share_of_capital` | assumed | applied | 0.01 | share of the opening money paid to the city's treasury as the founding fee | — |
| `assumptions/founding_nordholm/last_resort_days` | assumed | applied | 14 | days a premise with a customer the law can name stands vacant, offered to any agent, before the city founds in it itself | — |
| `assumptions/founding_nordholm/last_resort_per_week` | assumed | applied | 1 | firms the city may found as founder of last resort in any seven days | — |
| `assumptions/founding_nordholm/opening_capital_weeks` | assumed | applied | 4 | weeks of the founded slots' wages, at the layout's scaled ladder, the founder puts up as the firm's opening money | — |
| `assumptions/founding_nordholm/owner_dividend_share` | assumed | applied | 0.15 | share of what the city draws each month as the owner of its firms that is paid straight out to resident households, equally; the rest funds the budget | — |
| `assumptions/founding_nordholm/short_paydays_to_close` | assumed | applied | 4 | consecutive Fridays a firm pays its wages short before it closes at the next midnight | — |
| `assumptions/founding_nordholm/transaction_levy` | assumed | applied | 0.02 | share of every sale's receipt - shop purchases, rent, wholesale, cross-city sales as the receipt lands - taken out of the seller's receipt; the ceiling of the governor's policy field transactionLevy, which stands at 0 until signed | — |
| `assumptions/founding_nordholm/welcome_credit_months` | assumed | applied | 1 | months of the city's median wage (hourly x 40 hours x 4.33 weeks) paid to an admitted agent's household from the treasury on the day it is admitted | — |
| `assumptions/households_nordholm/share_couple` | assumed | applied | 0.26 | share of households | — |
| `assumptions/households_nordholm/share_elders` | assumed | applied | 0.08 | share of households | — |
| `assumptions/households_nordholm/share_family` | assumed | applied | 0.24 | share of households | — |
| `assumptions/households_nordholm/share_roommates` | assumed | applied | 0.04 | share of households | — |
| `assumptions/households_nordholm/share_single` | assumed | applied | 0.38 | share of households | — |
| `assumptions/housing_nordholm/arrears_months_to_move` | assumed | applied | 2 | consecutive months short on the rent before the household moves to the cheapest empty dwelling it can afford | — |
| `assumptions/housing_nordholm/rent_to_income_target` | assumed | applied | 0.3 | median monthly rent as a share of median monthly household net income | — |
| `assumptions/housing_nordholm/vacancy_months` | assumed | applied | 1 | months a dwelling stands empty before its rent is lowered | — |
| `assumptions/housing_nordholm/vacancy_reprice_share` | assumed | applied | 0.02 | share of the listed monthly rent removed at each month's turn the dwelling stands empty | — |
| `assumptions/land_nordholm/farm_cover_multiplier` | assumed | applied | 2 | multiple of the mouths' weekly draw a city's farms are sized to grow | — |
| `assumptions/land_nordholm/farm_floor_other` | assumed | applied | 1 | farms of each other kind (vegetables, dairy); the fewest a city founds whatever the draw | — |
| `assumptions/land_nordholm/farm_floor_wheat` | assumed | applied | 2 | wheat farms; the fewest a city founds whatever the draw | — |
| `assumptions/production_nordholm/services_share_of_wage_bill` | assumed | applied | 0.08 | share of a firm's wage bill paid to other firms for business services (ICIO industries M and N) | — |
| `assumptions/production_nordholm/value_added_office` | assumed | applied | 0.6 | value added as a share of turnover (NACE 69-70 and 82) | — |
| `assumptions/production_nordholm/value_added_retail_clothing` | assumed | applied | 0.3 | value added as a share of turnover (NACE 47.71) | — |
| `assumptions/production_nordholm/value_added_retail_hardware` | assumed | applied | 0.3 | value added as a share of turnover (NACE 47.52) | — |
| `assumptions/production_nordholm/value_added_retail_pharmacy` | assumed | applied | 0.35 | value added as a share of turnover (NACE 47.73, dispensing chemists) | — |
| `assumptions/trade_fx/dealer_reserve_weeks` | assumed | applied | 8 | weeks of the city's private payroll the FX dealer opens with | — |
| `assumptions/wages_nordholm/employment_to_population` | assumed | applied | 0.5 | employed persons per head of total population | — |
| `assumptions/wages_nordholm/hours_per_week` | assumed | applied | 40 | paid hours per employed person per week | — |
| `assumptions/wages_nordholm/wage_share_of_gdp` | assumed | applied | 0.55 | share of GDP paid as labour compensation | — |
| `assumptions/wages_nordholm/weeks_per_year` | assumed | applied | 52 | weeks | — |
| `countries/nordholm/cities` | calibrated | applied | `["Halvik","Brenmouth","Sorne","Eldy"]` | city names | Living World brief v2 §2 (country archetype table) and §2.2 (policy va |
| `countries/nordholm/currency` | calibrated | applied | `{"code":"NHK","name":"Krone"}` | currency identity | Living World brief v2 §2 (country archetype table) and §2.2 (policy va |
| `countries/nordholm/customs_customs_delay_days` | derived | shelved | 0.63 | sim-days, mean dwell in the bonded yard | mean of customs/{NLD,SWE}.yaml, parameter customs_delay_days |
| `countries/nordholm/customs_lpi_customs_score` | calibrated | shelved | 3.95 | LPI score (1 = low, 5 = high) | mean of customs/{NLD,SWE}.yaml, parameter lpi_customs_score |
| `countries/nordholm/customs_lpi_overall_score` | calibrated | shelved | 4.05 | LPI score (1 = low, 5 = high) | mean of customs/{NLD,SWE}.yaml, parameter lpi_overall_score |
| `countries/nordholm/demography_age_share_0_14` | calibrated | applied | 0.1601 | share of total population | mean of demography/{NLD,SWE}.yaml, parameter age_share_0_14 |
| `countries/nordholm/demography_age_share_15_24` | calibrated | applied | 0.1176 | share of total population | mean of demography/{NLD,SWE}.yaml, parameter age_share_15_24 |
| `countries/nordholm/demography_age_share_25_64` | calibrated | applied | 0.5161 | share of total population | mean of demography/{NLD,SWE}.yaml, parameter age_share_25_64 |
| `countries/nordholm/demography_age_share_65_plus` | calibrated | applied | 0.2062 | share of total population | mean of demography/{NLD,SWE}.yaml, parameter age_share_65_plus |
| `countries/nordholm/macro_gdp_per_capita_ppp` | calibrated | applied | 67370.4735 | constant 2021 international $ per person per year | mean of macro/{NLD,SWE}.yaml, parameter gdp_per_capita_ppp |
| `countries/nordholm/tariffs_applied_tariff_all_products` | calibrated | shelved | 2.0448 | percent ad valorem, effectively applied (AHS) simple average over all products | mean of tariffs/{NLD,SWE}.yaml, parameter applied_tariff_all_products |
| `countries/nordholm/templates` | calibrated | applied | `["NLD","SWE"]` | ISO3 codes | Living World brief v2 §2 (country archetype table) and §2.2 (policy va |
| `elasticities/armington_sigma1_sr` | calibrated | applied | 1.5 | elasticity of substitution, domestic vs imported composite | Bajzik, Havranek, Irsova & Schwarz 2020, 'Estimating the Armington Ela |
| `elasticities/food_own_price_cereals` | calibrated | applied | -0.6 | own-price elasticity | Andreyeva, Long & Brownell 2010, 'The Impact of Food Prices on Consump |
| `elasticities/food_own_price_dairy` | calibrated | applied | -0.65 | own-price elasticity | Andreyeva, Long & Brownell 2010, 'The Impact of Food Prices on Consump |
| `elasticities/food_own_price_fruit_veg` | calibrated | applied | -0.64 | own-price elasticity | Andreyeva, Long & Brownell 2010, 'The Impact of Food Prices on Consump |
| `elasticities/food_own_price_staples` | calibrated | applied | -0.3 | own-price elasticity | Femenia 2019, 'A Meta-Analysis of the Price and Income Elasticities of |
| `elasticities/hand_to_mouth_share` | calibrated | applied | 0.3 | share of households | Kaplan & Violante 2022, 'The Marginal Propensity to Consume in Heterog |
| `elasticities/housing_income` | calibrated | applied | 0.7 | income elasticity of housing demand | Albouy, Ehrlich & Liu 2016, 'Housing Demand, Cost-of-Living Inequality |
| `elasticities/housing_price` | calibrated | applied | -0.7 | own-price elasticity of housing demand | Albouy, Ehrlich & Liu 2016, 'Housing Demand, Cost-of-Living Inequality |
| `elasticities/mpc_hand_to_mouth` | calibrated | applied | 0.55 | marginal propensity to consume, quarterly | Kaplan & Violante 2022, 'The Marginal Propensity to Consume in Heterog |
| `ports/NLD/container_port_traffic_teu` | calibrated | shelved | 14517179 | TEU (20-foot equivalent units) handled in the year | World Bank World Development Indicators (UNCTAD shipping series) |
| `ports/NLD/liner_shipping_connectivity_index` | calibrated | shelved | 90.7427 | index; the best-connected economy in 2004 = 100 | World Bank World Development Indicators (UNCTAD shipping series) |
| `tariffs/NLD/applied_tariff_by_hs_chapter_group` | calibrated | shelved | `{"01-05_Animal":7.8809,"06-15_Vegetable"` | percent ad valorem, effectively applied (AHS) simple average | World Bank WITS / UNCTAD TRAINS, TradeStats-Tariff simple averages (AH |
| `tariffs/NLD/mfn_tariff_all_products` | calibrated | applied | 5.2791 | percent ad valorem, most-favoured-nation (MFN) simple average over all products | World Bank WITS / UNCTAD TRAINS, TradeStats-Tariff simple averages (AH |
| `tariffs/NLD/mfn_tariff_by_hs_chapter_group` | calibrated | applied | `{"01-05_Animal":14.3625,"06-15_Vegetable` | percent ad valorem, most-favoured-nation (MFN) simple average | World Bank WITS / UNCTAD TRAINS, TradeStats-Tariff simple averages (AH |
