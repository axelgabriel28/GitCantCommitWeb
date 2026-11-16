# Moonward Project Brief

Version 1.0 | 16 November 2026 | New implementation design baseline

Moonward Mission Control Adventure is a solo educational browser game for rapidly evaluating lunar landing locations and operating dates. The player compares alternatives against a stated requirement, investigates the Sun and Earth against the local skyline, and files a recommendation with evidence and uncertainty. This brief gives the team and challenge reviewers a common definition of the product and its first release.

## Purpose and audience

The challenge background supplied by the team describes a practical replanning problem. Landing schedules can move while payload requirements remain fixed. A team needs to compare another date at the same location, or another location on the revised date, without repeatedly interpreting separate technical tools. Moonward translates that comparison into a short, playable decision.

The first audience is a judge using a PC browser alone. Students and educators use guided missions to learn the same method. Interested technical users can open the sources, settings, and uncertainty behind an assessment. The opening map offers immediate site comparison and a featured Change of Plans assignment.

## Product objectives

- Compare two candidate plans with their site, UTC start, duration, and requirement visible.
- Explain the first condition that limits a continuous activity window.
- Support a justified recommendation, tie, rejection of assessed options, or hold for evidence.
- Connect a timeline event with its bearing and terrain skyline in a spatial view.
- Keep lighting, electrical endurance, Earth visibility, radio reception, and thermal conditions individually identifiable.
- Provide direct browser access, keyboard controls, optional hints, reduced motion, and skippable replay.

## The complete game

Science Outpost introduces continuous sunlight. Sunset Operations schedules work before an illumination interruption. Earth Link identifies a continuous Earth-center visibility opportunity. Polar Ice Scout is a later survey-planning expansion. Change of Plans is the featured assignment that asks players to recover an operation after a schedule change. Detailed mission rules live in the Game Design document.

## First release and expansion

The proposed MVP includes two curated locations, two comparison cards, a freely controlled UTC timeline within data coverage, sunlight and Earth-center visibility tracks, a local skyline view, a bounded exploration scene, and a Mission Log. Its playable assignments are Science Outpost, Sunset Operations, Earth Link, and Change of Plans. Polar Ice Scout follows route-scale terrain and resource-evidence review.

Tranquility Base is the proposed historical location. A Connecting Ridge study point is the proposed polar location. These are design candidates. Exact coordinates, observer heights, source products, and an adequate common UTC window must be recorded and validated before a scored scenario is published. Historical touchdown coordinates and broad study-area names must remain distinguishable.

Future additions can include more sites, seasonal comparisons, supported custom coordinates, station-specific communication geometry, equipment energy models, and survey routes. Each new capability needs the corresponding source coverage and validation. Hypothetical exploration-era dates must be identified as game scenarios.

## Presentation and development approach

The selected engine is Godot, with a PC browser as the first delivery target. Precomputed source-backed records make supported comparisons available without live NASA requests during play. Hosting address, performance measurements, and supported browser versions remain release decisions to verify against the finished build.

The visual direction combines a pixel astronaut with a stylized 3D lunar environment. Midnight purple, yellow, cyan, and magenta connect maps, controls, and mission cards. Illustrative camera lighting helps presentation. Scientific overlays identify the fixed observer and terrain data behind an assessment. Surface exploration is optional for completing the decision.

The team directs design and scientific review. ChatGPT supports ideation and requirements. Claude Code and Codex can assist implementation, debugging, and review. MINT MCP supports visual asset creation when available. Tool involvement must be credited according to the actual work performed, and generated outputs need team review.

## Definition of a successful release

The proposed usability target is that at least four of five first-time testers file a correct, evidence-backed comparison within 90 seconds after opening the featured assignment. This is a target to test. The player should also explain one limiting event and one unresolved engineering question.

Release acceptance requires reproducible featured scenarios, stable decisions under evaluated uncertainty, consistent results across views, equivalent watch and skip outcomes, usable keyboard and reduced-motion paths, and an accessible direct browser entry. A failure to certify power or reception can be the correct conclusion of an educational assignment.

## Evidence and status

The supplied screenshots establish the intended title, palette, mission labels, two-hour intro requirement, map entry, and surface-control vocabulary. They also show sampling, scanning, carrying, and delivery counters. A screenshot alone does not verify a calculation, a complete mission, or working browser behavior. Those interactions are design references pending implementation review.

No runtime or scientific validation of the new implementation was performed for this documentation. Source pages were reviewed to define their roles. Scientific release tests remain open in the Science and Validation document. Existing prototype outcomes have not been adopted as evidence for the new game.

## Document set

- [Science and Validation](02-science-and-validation.md) defines claims, calculations, uncertainty, and checks.
- [Game Design](03-game-design.md) defines missions, interactions, UI, and progression.
- [Data Sources and Credits](04-data-sources-and-credits.md) records full URLs, source roles, and attribution requirements.
- [Walkthrough](05-walkthrough.md) gives player and judge demonstration steps.
