# Moonward Science and Validation

Version 1.0 | 16 November 2026 | Scientific specification and open validation plan

This document defines what Moonward may conclude from its inputs and how those conclusions must be checked. It covers solar-disk visibility, Earth-center clearance, event timing, source provenance, and the separation of geometric evidence from engineering feasibility. It records planned validation, with no completed scientific checks claimed for the new implementation.

## Scientific inputs

Each site needs an explicit coordinate definition, datum or body-fixed frame, reference surface, and observer height. Record latitude, longitude direction and range, coordinate type, units, and the origin of the coordinate. A location name alone is insufficient. Reconcile the Horizons observer with the terrain frame and reference radius before combining their outputs.

Use airless apparent observer directions for the Sun and Earth from JPL Horizons. Retain the response header, output time scale, azimuth convention, target identifiers, units, and apparent angular sizes where used. The API request and source response belong with each generated data pack. A source observer altitude measured from a reference surface must not be confused with an instrument height above local terrain. [S1]

Numeric terrain comes from identified elevation products. Retain the raster and label metadata, projection, pixel registration, horizontal and vertical reference, units, NoData values, coverage, and any uncertainty products. Grid spacing describes sampling. It does not establish positional or height accuracy. [S2, S3]

## Local horizon

Construct the observer and terrain points in a consistent lunar body-fixed geometry. Transform vectors from the observer to surrounding terrain into local east, north, and up coordinates. For each azimuth, the horizon is the largest relevant terrain elevation angle, accounting for lunar curvature and the reference-surface limb where applicable. A finite local patch is sufficient only when more distant relief cannot raise the skyline beyond the declared bound.

Include surrounding terrain and near-field coverage appropriate to the task. A missing ridge, a gap in coverage, or a coarse raster cannot silently become a clear line of sight. Mark the affected bearings unknown or carry a defensible bound. Inspect the bearings that determine the featured mission's result in QuickMap or Moon Trek, recording their underlying elevation layers. [S5, P1]

Use the actual observer height and keep it visible. Walking the astronaut changes the presentation camera. The scientific origin remains at its marked coordinate unless the user explicitly starts a separately supported observer calculation.

## Solar illumination

At each time, compare the apparent solar disk with the local skyline across the disk's directions. Full Sun means every part of the disk is clear. Partial Sun means some of the disk is clear and some is obstructed. Blocked means the complete disk is obstructed. At an unresolved tangent contact, propagate uncertainty rather than asserting a robust full-Sun state.

Checking only the Sun's center or subtracting its angular radius from the center elevation can miss uneven terrain across the disk. Refine the disk and angular skyline sampling until the full-Sun transition and mission result converge at the declared tolerance. If eclipse intervals are supported, compute solar occultation by other bodies consistently. Otherwise exclude or explicitly mark affected epochs as outside the lighting model.

Full sunlight ending and the last visible portion disappearing are separate events. Use explicit labels such as Full Sun ends, Sun fully blocked, or Terrain shadow begins. An irradiance or visible-area percentage needs a separately specified disk-integration and radiometric model. The MVP can report the three illumination states without estimating watts.

## Earth-center visibility

Earth-center clearance is the apparent Earth-center elevation minus the local horizon elevation at the same azimuth. The center is geometrically clear when the positive clearance is supported across the evaluated bounds. A visibly exposed part of Earth can coexist with a blocked center, so the rendered disk and center criterion must be distinguished.

Use Horizons geometry that preserves the relevant lunar orientation and orbital variation. Avoid a fixed Earth position, an Earth-like daily rise/set cycle, or repeated time tracks. The selected criterion does not identify a particular ground station. A station-specific extension needs station direction, its own constraints, and an appropriately validated model.

## Continuous windows and timing

Evaluate complete activities, including setup when the mission requires it. Add separated windows only for an explicitly interruptible task. When an activity requires sunlight and Earth visibility simultaneously, evaluate their intersection.

A series of coarse samples cannot prove continuous visibility. Start with a documented cadence, refine transitions and possible interior extrema, and test for short interruptions and grazing contacts. Compare results against a denser reference and document unresolved temporal or angular behavior. Do not assume that equal signs at adjacent samples rule out a brief obstruction between them.

Window endpoints need a documented inclusion convention. Evaluate exact-boundary cases conservatively against uncertainty. Interpolation must follow continuous directions and handle azimuth wraparound. Do not interpolate across missing epochs or extrapolate outside source coverage.

Show time to an event only when that event is resolved within supported coverage. If no event is found, say No crossing found within coverage. If coverage ends while a window is still open, state a lower bound. Display precision must reflect validation evidence. A clock with seconds does not prove second-level accuracy.

## Verdicts and uncertainty

Meets means the entire activity satisfies the requirement across the evaluated uncertainty bounds. Misses means even the favorable bound cannot satisfy the complete proposed activity. Unknown means the possible outcomes disagree or an essential input is missing. These are decisions relative to the named model and bounds.

Evaluate uncertainty from coordinate and frame registration, elevation errors and interpolation, horizon distance coverage, observer height, angular skyline sampling, apparent-size treatment, ephemeris/interpolation behavior, and event refinement. Use product uncertainty information where applicable. An arbitrary fixed angular perturbation is a sensitivity experiment. It cannot stand in for a complete uncertainty budget. [S2]

For a margin bonus, require that the conservative visibility end exceeds activity completion by the bonus interval. If the known coverage already proves that margin, a lower-bound margin may support the bonus. Keep the lower-bound label in the brief.

## Engineering and resource claims

Illumination informs electrical and thermal planning. Electrical endurance additionally needs array area and attitude, response to incidence and temperature, loads and modes, storage state, efficiencies, and operating limits. Equipment temperature requires its thermal properties and environmental energy balance. Keep these results Unknown while their models or configuration inputs are absent.

A working radio link needs station geometry and availability, transmitter and receiver configuration, antenna pointing and gain, losses, noise, modulation and coding, and a reception criterion. Earth-center clearance alone cannot establish any of those values. Future DSN references are listed in the source register.

Polar resource exploration needs instrument-specific measurements with their footprints, calibration, spatial registration, and uncertainty. A shadowed region can motivate investigation. It cannot establish ice at a waypoint. A rover route also requires a vehicle model before slope or roughness can support a mobility verdict.

## Validation cases and evidence requirements

All checks below are pending for the new implementation. Each completed check must record inputs, source hashes, method, reference, observed error, acceptance tolerance, result, reviewer, and date.

| Check | Required evidence |
|---|---|
| Provenance and parsing | Required fields retained, finite values, units, ordered epochs, NoData handled, hashes reproducible |
| Observer registration | Landmark and frame checks reconcile source coordinates, terrain and observer height |
| Ephemeris consistency | Sun and Earth directions compared with a separately implemented calculation at representative epochs, with shared source dependencies disclosed |
| Skyline validation | Critical bearings checked using registered profiles and more than one resolution where available |
| Solar disk | Flat and uneven analytic skylines plus full, partial, blocked, tangent and grazing cases |
| Continuous events | Refined boundaries and short interior interruptions compared with denser reference calculations |
| Uncertainty | Height, terrain, sampling and coverage changes propagated to the verdict and margin |
| Engineering claims | Missing power, thermal and radio inputs produce explicit Unknown values |
| Software consistency | Identical assessment in comparison, surface overlay, replay, skip and saved brief |
| Coverage and edge cases | Partial coverage, no crossing, ties, all misses, uncertain boundary and incomplete records handled |

## Release decision

Score a featured scenario only after its complete required interval, critical bearings, and decision have passed documented checks. Record a tolerance for the quantity being checked before evaluating the result. The engineering team must justify those tolerances against the task duration, data uncertainty, and displayed precision. No numeric physical error claim is established by this document.

For an unresolved site or period, allow an explicitly labeled preview and a hold brief. Do not mark new records scientifically valid solely because they parse or agree with the same calculation that generated them. A broad accuracy percentage requires a defined quantity, test population, tolerance, reference, and methodology.

## References

Source IDs and full URLs are in [Data Sources and Credits](04-data-sources-and-credits.md). S1 is Horizons, S2 is Goddard polar terrain, S3 is the LOLA archive, S5 is Moon Trek, and P1 is QuickMap. These references inform the specification. This document reports no measured validation results for the new implementation.
