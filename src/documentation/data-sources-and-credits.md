# Moonward Data Sources and Credits

Version 1.0 | 16 November 2026 | Source register for the new implementation

This register identifies source resources, their planned contribution to Moonward, and the attribution and provenance that must accompany an imported product. Exact URLs are displayed in full. A catalog, viewer, or API endpoint identifies where to obtain data. A reproducible import also needs the exact product or parameterized request.

## Status of this register

The main resource pages were reviewed while preparing this documentation. That review supports their stated roles. It does not establish a completed integration, a downloaded terrain tile, a numerical result, or a scientifically validated game scenario. Proposed extensions are labeled separately. The final team credit list and asset provenance must reflect actual contributions and selected products.

## NASA data and resources

### S1 JPL Horizons

Provider: NASA Jet Propulsion Laboratory Solar System Dynamics Group.

Planned role: Sun and Earth observer directions, apparent-size information where used, and time-dependent geometry for the selected lunar coordinates. This supplies inputs for Science Outpost, Sunset Operations, Earth Link and Change of Plans. Future use can expand dates and supported custom coordinates.

Retain the complete request or batch file, target identifiers, observer center, coordinates and coordinate type, height convention, airless settings, start and stop times, time scale, cadence, units, returned header, source response and retrieval date. The bare endpoint below is not the final query for a site.

https://ssd.jpl.nasa.gov/horizons/

https://ssd.jpl.nasa.gov/horizons/manual.html

https://ssd-api.jpl.nasa.gov/doc/horizons.html

https://ssd.jpl.nasa.gov/api/horizons.api

### S2 NASA Goddard polar topography

Provider: NASA Goddard Space Flight Center Planetary Geology Geophysics and Geochemistry Laboratory, with LRO LOLA-derived products.

Planned role: polar elevation models, slope information and associated uncertainty for terrain, skyline and sensitivity analysis. Exact tiles depend on the final site. Preserve product version, author credit, data labels, reference frame, units, footprint and uncertainty documentation. Cite the dataset publication identified by the selected product.

https://pgda.gsfc.nasa.gov/products/78

### S3 LRO LOLA elevation archive

Provider: the NASA LRO LOLA instrument team, hosted at MIT.

Planned role: surrounding and regional topography where additional horizon coverage is needed. Download the matching label with every elevation file. Preserve scale, offset, projection, pixel registration and reference-surface information. The university hostname does not change the NASA mission origin of these products.

https://imbrium.mit.edu/DATA/LOLA_GDR/POLAR/FLOAT_IMG/

### S4 NASA CGI Moon Kit

Provider: NASA Scientific Visualization Studio. The resource credits Ernie Wright for visualization and Noah Petro as scientist, and uses LRO camera and altimeter team data.

Planned role: lunar globe appearance and broad geographic context. The listed color and elevation files are available source products. Their resolution and intended visualization use must be considered before any numeric reuse. A globe texture cannot establish a local skyline.

Suggested displayed credit when these assets are imported: Moon imagery and elevation maps from NASA's Scientific Visualization Studio CGI Moon Kit, with LRO LROC and LOLA team contributions. Preserve the selected product's full requested credit.

https://svs.gsfc.nasa.gov/4720/

https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/lroc_color_2k.jpg

https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/ldem_4.tif

### S5 NASA Moon Trek

Provider: NASA Solar System Treks lunar visualization service.

Planned role: site exploration, terrain context and profile review during validation. Record the actual layer and underlying product when a profile informs a scientific check. A viewer URL and screenshot alone do not reproduce an elevation calculation.

https://trek.nasa.gov/moon/

### S6 NASA Moon Facts

Provider: NASA Science.

Planned role: educational explanations of lunar properties, orbit, rotation and surface environment. Preserve the source and units for any constant adopted by a calculation. General educational values must be reconciled with the reference conventions of the numeric model.

https://science.nasa.gov/moon/facts/

## Partner and institutional resources

### P1 LROC QuickMap

Provider: the LROC mapping effort associated with Arizona State University. The challenge lists QuickMap among its NASA data resources because it exposes lunar mission imagery and topography.

Planned role: candidate exploration, ridge identification and review of decisive terrain profiles. Preserve layer names, coordinates, bearings, profile export and underlying data-product credit. The two viewers may share a terrain source, so agreement between them must not automatically be called independent validation. The challenge URL currently redirects to the second address.

https://quickmap.lroc.asu.edu/

https://quickmap.lroc.im-ldi.com/

### P2 Canadian Space Agency Moon Exploration

Provider: Canadian Space Agency, identified by the challenge as a space agency partner resource.

Planned role: educational mission context about lunar science, robotics and exploration. Future Polar Ice Scout briefings can draw on relevant robotics and rover material. Technical vehicle or instrument behavior needs a specifically documented configuration and source.

https://www.asc-csa.gc.ca/eng/astronomy/moon-exploration/

## Additional resources proposed for future features

The resources below are candidates for expanding the game. Exact mission configurations and data products remain to be selected. Their inclusion here does not claim that the associated model has been implemented.

F1 JPL Deep Space Network Telecommunications Link Design Handbook. Supports a future station-specific communications model with station and radio assumptions identified.

https://deepspace.jpl.nasa.gov/dsndocs/810-005/

F2 NASA Technical Reports Server Surveyor batteries final engineering report. A candidate historical battery reference. Its data requires matching the battery design, configuration and operating conditions before transfer to a game model.

https://ntrs.nasa.gov/citations/19700010014

F3 NASA NAIF SPICE data. Supports future documented body orientation, frame transformation and navigation geometry, using identified kernels and versions.

https://naif.jpl.nasa.gov/naif/data.html

F4 NASA PDS LRO Diviner archive. Supports surface-temperature and cold-region context for Polar Ice Scout. Equipment temperature requires its own thermal model.

https://pds-geosciences.wustl.edu/missions/lro/diviner.htm

F5 NASA PDS LRO LEND archive. Supports neutron and hydrogen-related evidence interpretation with measurement footprint and uncertainty documented.

https://pds-geosciences.wustl.edu/missions/lro/lend.htm

F6 NASA PDS LCROSS archive. Supports an educational example of localized volatile investigation. Results must retain their measured location and event context.

https://pds-geosciences.wustl.edu/missions/lcross/

## Data provenance record

For each imported scientific product, record source ID, product title and version, provider, complete download URL or API parameters, retrieval timestamp, local relative filename, SHA-256 hash, coordinate conventions, units, coverage, resolution or sampling, processing steps, outputs and validation status. Include the original labels and documentation that define the values.

For each derived assessment, retain the site, UTC interval, observer, source hashes, model version, event convention, uncertainty method and decision criterion. An updated source pack must not silently rewrite an existing saved brief.

## Visual assets and team credits

The supplied screenshots establish the Moonward identity and interface reference. Asset origin and license must be confirmed from the team's source files. Screenshot crops preserve only the visible raster. Generated reconstructions of the logo, astronaut, Moon, panels and controls contain reconstructed details and must be identified as presentation artwork.

MINT MCP can support static visual asset creation. Record the generation or asset ID, creation date, creator, edits and applicable usage terms. Animation and scientific geometry need their own actual implementation evidence.

The team owns game direction, content selection, design decisions, testing and scientific review. ChatGPT can support brainstorming and requirements. Claude Code and Codex can assist coding, debugging and review. Credit tools according to actual use. The game uses Godot Engine. Team member names, individual roles and final asset credits must be completed by the project owners before submission.

Use source-provider and asset-specific attribution requirements. NASA data use does not establish NASA endorsement. Identify fictional mission dialogue, game durations and reward rules as project-authored content.
