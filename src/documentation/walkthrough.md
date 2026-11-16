# Moonward Walkthrough

Version 1.0 | 16 November 2026 | Intended player flow and demonstration script

This walkthrough explains how a player should use the new Moonward implementation. The interface names follow the supplied screenshots and agreed design. It is an expected flow for development and testing. It does not report a completed runtime demonstration or a validated winning date.

## Start from the Moon map

Open the game in a supported PC browser. The release target is direct access without an account. Choose Play Change of Plans for the featured assignment or Compare Sites for immediate free comparison. Training Missions opens the four named mission cards. Science Log opens educational content and saved evidence when implemented. Credits identifies data and artwork.

The proposed first comparison contains Tranquility Base and a Connecting Ridge study point after their exact coordinates have been validated. Select a site card or map marker. Read its identity, coordinates, observer height, UTC coverage and data status before interpreting a result.

## Compare two plans

1. Read the task requirement and what the mission permits you to change.
2. Link UTC starts to compare locations at the same time. Unlink starts to compare dates at one location.
3. Set a start and duration that fit the source coverage. Both cards keep their absolute UTC labels visible.
4. Inspect the full-sunlight and Earth-center visibility tracks. Select the complete interval required by the task.
5. Select the first limiting event. Open its Horizon View to see the relevant bearing, skyline and sky position.
6. File a recommendation with the decisive interval or missing evidence. You can finish without entering the surface scene.

If there is a gap, inspect whether it is a real obstruction, a source-coverage limit or an uncertain boundary. Two separate periods are insufficient for a task requiring continuous visibility. A radio or power result marked Unknown requires additional evidence even if the geometric track is clear.

## Mission 1 Science Outpost

Choose Science Outpost from Training Missions. Find a site and start with a continuous sunlight interval that covers the mission's two-hour requirement. Optionally predict which plan will qualify. Inspect the first interruption of the competing plan, then submit your chosen interval.

Watch or skip the preview. In the debrief, explain why the interval supports your choice and identify that electrical endurance needs equipment data. If neither assessed plan can be recommended, file the supported rejection or hold. Optional scans or sample collection, if implemented, are explained by their own task prompts and do not change the sky calculation.

## Mission 2 Sunset Operations

Choose Sunset Operations. Read the setup and observation schedule in the mission card. Place the complete activity bracket inside a full-sunlight interval. The exact training durations and optional margin bonus are defined in the Game Design document.

Select the first loss of full sunlight and inspect the terrain in that direction. Move the activity earlier, compare a different date, or inspect the other site. Submit your plan with the supported interval. The debrief distinguishes whether the light schedule fits from whether equipment could keep operating after sunlight is interrupted.

A margin shown as at least a duration is a lower bound. A boundary marked uncertain cannot be treated as a guaranteed extra operating period. The mission must explain any Unknown result rather than forcing you to guess a date.

## Mission 3 Earth Link

Choose Earth Link. Within the operations period, find a continuous Earth-center-clear interval long enough for the activity specified in the mission card. Place the activity bracket wholly inside it. Inspect Earth's center marker in the Horizon View if the timeline shows an interruption.

Compare a second site or date. Submit the proposed window and identify what remains needed to confirm reception, such as the station, pointing constraints or radio configuration. The debrief can award learning completion for a correct geometric decision and an unresolved radio result. It must not display a fabricated transmission success.

## Mission 4 Polar Ice Scout

This mission is an expansion. When available, read the resource layer's identity, coverage, measurement footprint and uncertainty before choosing investigation targets. Compare the route's terrain and operating windows, then identify the observation that would resolve a resource question.

An orbital indication motivates a target. A local ice claim needs appropriate measurements. If the rover configuration or route evidence is incomplete, record the unresolved mobility or observation claim. A roadmap card should explain why the activity remains unavailable.

## Special assignment Change of Plans

1. Read the original task and the revised constraint from Mission Control.
2. Keep the original plan visible while applying the dispatch's revised UTC start.
3. Compare the candidate sites at that fixed time. In a follow-up dispatch, keep the site fixed and compare starts.
4. Identify which plan covers the entire required activity and inspect the limiting event for the other option.
5. Recommend the supported plan, acknowledge a tie, reject the assessed options, or hold for missing evidence.
6. File the brief. The result explains what changed and which evidence decided the call.

No specific winning UTC date is supplied in this document. Authors must choose and validate the featured data scenario before rehearsing it as a scientific demonstration.

## Optional surface controls

The design defaults follow the supplied surface screen. Use WASD to move, drag to look, Space to hop, View to change camera, and Scan for an available interaction. Keyboard access to the planning interface must remain available. The final controls screen must reflect the actual build bindings.

The visible assessment-origin marker identifies the coordinate used by the scientific model. Walking toward a ridge does not recalculate an unregistered local viewpoint. Keep presentation lighting and any approximate body orientation labeled where they could affect interpretation.

## A 90 second judge demonstration

The following durations are a rehearsal budget and usability target.

| Elapsed time | Presenter action | What the judge should learn |
|---|---|---|
| 0 to 15 seconds | Open map and the featured dispatch | A schedule change requires a site or time decision |
| 15 to 35 seconds | Apply the revised start and show both cards | Both plans face the same requirement |
| 35 to 60 seconds | Select the decisive event and skyline | A specific geometry or obstruction limits the interval |
| 60 to 80 seconds | Submit the supported option and open its brief | The decision is linked to evidence |
| 80 to 90 seconds | State one remaining uncertainty | A supported geometry finding has a clear engineering limit |

Use a validated packaged scenario and the actual browser build. A presenter walkthrough is distinct from a recorded gameplay demonstration. If a preview is necessary, describe its status before interpreting values.

## Finish and review

Read the Mission Log's site, UTC activity, requirement, evidence, uncertainty and source version. Choose Revise to edit a new attempt or return to the map. Saved evidence must remain unchanged when the current inputs change. Local completion persistence and reset behavior must be verified in the release browser.

Useful exit statements include I chose this start because the continuous window covers the full task, both assessed plans qualify, neither assessed plan fits, or the boundary is uncertain and needs better terrain evidence. Each statement should be accompanied by the relevant interval or missing input.
