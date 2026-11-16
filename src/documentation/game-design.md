# Moonward Game Design

Version 1.0 | 16 November 2026 | Designed features pending implementation verification

The player is a lunar mission planner who chooses a site and time for a task, examines the deciding event, and sends Mission Control an evidence-backed recommendation. Short missions make the comparison meaningful. Optional exploration makes the local geometry memorable. This document owns the game's proposed mission rules and training numbers.

## Platform and presentation

Moonward is a solo Godot game for PC browsers. The visual style combines a crisp four-direction pixel astronaut with a stylized 3D Moon. Use midnight purple, yellow, cyan and restrained magenta for readable navigation and status. Maintain sharp sprite sampling and clear silhouettes. Optional bloom or depth of field must preserve the visibility of scientific markers and text.

The supplied screenshots show the labels Play Change of Plans, Compare Sites, Training Missions, Science Log, Credits, Sound, View and Scan. They also show the four mission names. These labels form the interface baseline. Display state and scientific evidence must still be verified in the new build.

## Design status

| Design area | Status | Release role |
|---|---|---|
| Moon map and two-plan comparison | Designed | MVP |
| UTC timeline and local skyline | Designed | MVP |
| Science Outpost | Designed | MVP |
| Sunset Operations | Designed | MVP |
| Earth Link | Designed | MVP |
| Change of Plans | Designed | MVP featured assignment |
| Surface exploration and replay | Designed | MVP |
| Mission Log and evidence review | Designed | MVP |
| Polar Ice Scout | Idea | Expansion |
| Custom coordinates and hardware models | Idea | Expansion |

## Main interaction

Open map, read requirement, pin two plans, inspect windows, schedule activity, submit recommendation, review evidence, and finish or revise. The scientific assessment is generated from site, observer and time inputs. Forecasts, dialogue answers and reward choices cannot alter it.

Link UTC starts when comparing sites. Unlink starts for schedule comparisons and display both absolute UTC labels alongside elapsed mission time. A shared requirement is applied equally to both plans. Show the operation duration, source coverage, model name and observer definition. Preserve the current inputs when opening sources or entering exploration.

The Horizon View marks the Sun, Earth's center, compass bearing and local skyline. Selecting a timeline event opens that time and bearing. Ground, survey and first-person cameras share the plan's selected epoch. Avatar motion does not move the assessment origin. A new physical observer requires a new supported calculation.

## Mission 1 Science Outpost

Goal: choose a site and start that support two continuous hours of full sunlight. This duration follows the supplied mission-screen reference and is a training rule. Choose between the two supported candidate locations and identify the event limiting the alternative.

The player predicts the outcome, submits the interval, and can watch or skip its preview. Completion requires a correct geometry recommendation and recognition that equipment power is still unresolved. A correct hold is valid when the offered data cannot settle the decision.

Sampling and scanning can provide optional field interactions. The surface screenshot shows carrying, delivered, scan and outpost counters. Their quotas, physical meaning and scoring are unconfirmed, so they are not mandatory requirements in this baseline. Any future collect-and-deliver action represents a game task unless a sourced instrument measurement is explicitly implemented.

## Mission 2 Sunset Operations

Goal: fit 15 minutes of instrument setup followed immediately by 45 minutes of observation inside one continuous full-sunlight window. These are proposed game requirements. The player drags the complete 60-minute bracket, compares an alternate site or date, and selects the limiting terrain event as evidence.

An optional bonus requires a supported 15-minute margin between observation completion and the first loss of full sunlight. The science result follows the uncertainty rules in the validation document. The player then explains which equipment inputs would determine electrical endurance if the operation continued into shadow.

The supplied screenshot uses a six-hour powered-work description. That wording describes an unresolved engineering ambition. The adopted new-design task is the 60-minute illumination schedule specified here. A six-hour electrical verdict can be introduced only with a defined payload and validated energy model.

## Mission 3 Earth Link

Goal: place a proposed 30-minute communications activity within a six-hour operations period so Earth's center clears the skyline throughout the activity. Both durations are proposed training requirements. The activity may be placed anywhere inside the covered operations period.

The player compares two sites at the same time or two periods at one site, marks a qualifying continuous interval, and explains why reception still needs station and radio evidence. Sunlight is optional context and is not a prerequisite for this mission's geometry rule. Illustrative antenna motion cannot establish an actual pointing solution.

Two separate intervals cannot satisfy the continuous activity. Show a supported margin, a lower bound, or an uncertain boundary according to the data. Permit completion with a justified hold or rejection when the assessed options do not support a recommendation.

## Mission 4 Polar Ice Scout

This expansion asks the player to select investigation targets and survey stops from terrain, illumination and documented resource evidence. It teaches spatial resolution, uncertainty, and the difference between an orbital indication and a local measurement.

Do not score ice discovery, route safety, rover traction, instrument detection or thermal survival until the required data and equipment models exist. Task duration, route length and instrument requirements remain to be authored after that scope is validated. The mission card can identify its expansion status.

## Special assignment Change of Plans

Mission Control changes the available start date while retaining the task requirement. Compare the original plan with alternatives, inspect the decisive interval, and recommend a revised site or schedule. This is the featured challenge demonstration.

For the first authored dispatch, reuse the two-hour Science Outpost sunlight requirement. First fix the revised UTC start and ask the player to choose a site. A follow-up can fix the site and ask for a new start. Select actual dates only after finding a robust contrast in newly generated data. No inherited prototype outcome is a solution key for this implementation.

## Completion and rewards

Submission allows Choose A, Choose B, Both qualify, Neither assessed option qualifies, or Hold for evidence. The debrief assesses the recommendation and its explanation against the recorded result. Unknown for one plan cannot be treated as a confirmed failure of that plan.

The proposed reward is a learning patch for a correct interpretation, with a separate optional planning-margin commendation in Sunset Operations. Points, stars and par values shown in a screenshot are presentation references until their scoring rules are explicitly adopted. An uncertainty answer earns credit only when the evidence actually supports uncertainty.

Replay speed is a presentation control. Pause, skip, reduced-motion behavior and completion lead to the same immutable assessment. Retry creates a new attempt while preserving prior evidence. Player exploration speed and jump feel remain tuning choices and cannot be presented as validated lunar biomechanics.

## Controls and accessibility

All comparison, timeline, source and submit actions must work with keyboard focus and pointer input. Proposed exploration controls follow the supplied screen: WASD to move, drag to look, Space to hop, View to change camera and Scan to request an interaction. Bindings are design defaults pending runtime verification. Escape releases captured pointer control and returns focus appropriately.

Use text and patterns alongside color, readable contrast, adjustable or scalable text, visible focus, optional hints and reduced motion. Navigation must remain usable without the surface scene. Mark missing data and disabled scientific actions with a reason. Browser audio begins through a user interaction and follows the player's sound setting.

## Mission Log and session state

The brief records both compared plans, the requirement, source/model version, selected UTC interval, result, limiting event, supported margin, uncertainty and player reasoning. Editing the current plan cannot change a saved attempt. Save records need a data version so an old brief remains identifiable if source packs change.

Proposed default: save learning completion locally when browser storage permits, and allow a session to finish if persistence is unavailable. Provide a visible reset action. Reload and storage behavior must be checked in the browser before release.

## Decisions

| Decision | Reason | Status |
|---|---|---|
| Solo PC browser first | Judges must be able to try the experience alone through direct access | Agreed design |
| Four named missions plus Change of Plans | Matches the supplied interface and latest user correction | Agreed design |
| Two sites with exact coordinates pending | Keeps comparison understandable while requiring source review | Proposed initial scope |
| Solar and Earth geometry assessed independently of engineering | Avoids unsupported equipment conclusions | Scientific requirement |
| Optional exploration and skippable replay | Preserves rapid comparison and accessibility | Agreed design |
| Polar Ice Scout after additional validation | Resource and route claims need further inputs | Proposed release sequence |

## Change log

Version 1.0 consolidates the current new-implementation design, preserves the four supplied mission names, and identifies proposed rules and unresolved scientific scope.
